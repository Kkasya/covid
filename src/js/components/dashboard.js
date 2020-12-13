import create from '../utils/createElement';
import Table from './table';
import * as constants from '../data/constants';
import Checkbox from './checkbox';
import List from './list';

export default class Dashboard {
    constructor() {
        this.countryForData = constants.forAll;
        this.period = constants.forAll;
        this.population = constants.forAll;
        this.dataAll = {};
    }

    init(searchList) {
        this.list = searchList.list;
        this.optionList = searchList.option;
        this.dataCases = this.createDataCases();
        this.defineOptions();
        return create('div', 'dashboard', [this.dataCases]);
    }

    createDataCases() {
        this.totalCases = new Table('cases', constants.cases[0]);
        const totalCasesHtml = this.totalCases.init();

        this.totalDeath = new Table('death', constants.cases[1]);
        const totalDeathHtml = this.totalDeath.init();

        this.totalRecovered = new Table('recovery', constants.cases[2]);
        const totalRecoveredHtml = this.totalRecovered.init();

        this.ckbxPeriod = new Checkbox(constants.checkPeriod).init();
        this.ckbxPeriod.addEventListener('click', (e) => this.choosePeriod(e));

        this.ckbxPopulation = new Checkbox(constants.checkPopulation).init();
        this.ckbxPopulation.addEventListener('click', (e) => this.choosePopulation(e));

        this.checkbox = create('div', 'options', [this.ckbxPeriod, this.ckbxPopulation]);

        return create('div', 'infoData',
            [totalCasesHtml, totalDeathHtml, totalRecoveredHtml, this.checkbox]);
    }

    defineOptions() {
        let endUrl;

        if (this.countryForData === constants.forAll) {
            endUrl = constants.forAll;
            this.setDataForList(this.optionList);
        } else {
            const idCountry = List.getIdCountry(this.countryForData);
            endUrl = `countries/${idCountry}`;
        }
        this.setData(endUrl);
    }

    defineData() {
        let dataOption = {};
        if (this.population === constants.forAll) {
            if (this.period === constants.forAll) dataOption = this.dataAll.allPeriod;
            else dataOption = this.dataAll.today;
        } else if (this.period === constants.forAll) dataOption = this.dataAll.allPeriodPerThou;
        else dataOption = this.dataAll.todayPerThou;

        return dataOption;
    }

    setCountry(country) {
        this.countryForData = country;
        this.defineOptions();
    }

    changeData(endUrl, dataOption) {
            this.totalCases.setData(dataOption.cases);
            this.totalDeath.setData(dataOption.deaths);
            this.totalRecovered.setData(dataOption.recovered);
    }

    setData(endUrl, optionList, countCases) {
        Dashboard.getData(endUrl).then((response) => {
            const perThou = constants.forPer / response.population;
            this.dataAll.allPeriod = {
                cases: response.cases,
                deaths: response.deaths,
                recovered: response.recovered,
            };
            this.dataAll.today = {
                cases: response.todayCases,
                deaths: response.todayDeaths,
                recovered: response.todayRecovered,
            };
            this.dataAll.allPeriodPerThou = {
                cases: (response.cases * perThou).toFixed(),
                deaths: (response.deaths * perThou).toFixed(),
                recovered: (response.recovered * perThou).toFixed(),
            };
            this.dataAll.todayPerThou = {
                cases: (response.todayCases * perThou).toFixed(),
                deaths: (response.todayDeaths * perThou).toFixed(),
                recovered: (response.todayRecovered * perThou).toFixed(),
            };
            const dataOption = this.defineData();
            if (optionList) {
                this.defineCountCases(optionList, dataOption, countCases);
            } else this.changeData(endUrl, dataOption);
        });
    }

    setDataForList(optionList) {
        const list = this.list.children;
        Object.values(list).forEach((value) => {
            const countryForData = value.children[1].innerText;
            const idCountry = List.getIdCountry(countryForData);
            const endUrl = `countries/${idCountry}`;
            const countCases = value.children[0];
            this.setData(endUrl, optionList, countCases);
});
        setTimeout(() => {
            const sortedList = this.sortData();
            const listUl = document.querySelector('.list');
            listUl.removeChild(listUl.lastChild);
            listUl.appendChild(create('ul', '', sortedList));
        }, 1100);
}

   defineCountCases(optionList, dataOption, count) {
        const countCases = count;
       if (optionList === constants.cases[0]) countCases.innerText = dataOption.cases;
       if (optionList === constants.cases[1]) countCases.innerText = dataOption.deaths;
       if (optionList === constants.cases[2]) countCases.innerText = dataOption.recovered;
    }

    static async getData(endUrl) {
        const url = `${constants.urlCases}${endUrl}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    choosePeriod(e) {
        const isInputCheckbos = e.target.classList.contains('inputCkbx');

        if (isInputCheckbos) {
            const isPeriodForAll = (this.period === constants.forAll);
            this.period = isPeriodForAll ? constants.forToday : constants.forAll;
            this.defineOptions();
        }
    }

    choosePopulation(e) {
        const isInputCheckbos = e.target.classList.contains('inputCkbx');

        if (isInputCheckbos) {
            const isPopulationForAll = (this.population === constants.forAll);
            this.population = isPopulationForAll ? constants.forPer : constants.forAll;
            this.defineOptions();
        }
    }

    setOption(option) {
        this.optionList = option;
        this.defineOptions();
    }

    sortData() {
       function compareLi(a, b) {
           const countA = Number(a.children[0].innerText);
           const countB = Number(b.children[0].innerText);

           if (countA > countB) return -1;
           if (countA < countB) return 1;
           return 0;
        }
        return Object.values(this.list.children).sort(compareLi);
    }
}
