import create from '../utils/createElement';
import Table from './table';
import * as constants from '../data/constants';
import Checkbox from './checkbox';
import List from './list';
import Map from './map';

export default class Dashboard {
    constructor() {
        this.countryForData = constants.forAll;
        this.period = constants.forAll;
        this.population = constants.forAll;
    }

    init(searchList) {
        this.list = searchList.list;
        this.optionList = searchList.option;
        this.dataCases = this.createDataCases();
        this.map = new Map();

        this.setDataForList(this.optionList);
        this.defineOptions();
        return create('div', 'dashboard', [this.dataCases, this.map]);
    }

    createDataCases() {
        this.totalCases = new Table('cases', constants.cases[0]);
        const totalCasesHtml = this.totalCases.init();

        this.totalDeath = new Table('death', constants.cases[1]);
        const totalDeathHtml = this.totalDeath.init();

        this.totalRecovered = new Table('recovery', constants.cases[2]);
        const totalRecoveredHtml = this.totalRecovered.init();

        const ckbxPeriod = new Checkbox(constants.checkPeriod).init();
        ckbxPeriod.addEventListener('click', (e) => this.choosePeriod(e));

        const ckbxPopulation = new Checkbox(constants.checkPopulation).init();
        ckbxPopulation.addEventListener('click', (e) => this.choosePopulation(e));

        const checkbox = create('div', 'options', [ckbxPeriod, ckbxPopulation]);

        return create('div', 'infoData',
            [totalCasesHtml, totalDeathHtml, totalRecoveredHtml, checkbox]);
    }

    defineOptions() {
        let endUrl;

        if (this.countryForData === constants.forAll) endUrl = constants.forAll;
        else {
            const idCountry = List.getIdCountry(this.countryForData);
            endUrl = idCountry;
        }
        this.setData(endUrl);
    }

    defineData(data) {
        let dataOption = {};
        console.log(data);
        if (this.population === constants.forAll) {
            if (this.period === constants.forAll) dataOption = data.allPeriod;
            else dataOption = data.today;
        } else if (this.period === constants.forAll) dataOption = data.allPeriodPerThou;
        else dataOption = data.todayPerThou;

        return dataOption;
    }

    setCountry(countryLi) {
        this.countryForData = countryLi.children[1].innerText;
        Dashboard.changeClass(countryLi, 'selected');
        this.defineOptions();
    }

    changeData(endUrl, dataOption) {
        this.totalCases.setData(dataOption.cases);
        this.totalDeath.setData(dataOption.deaths);
        this.totalRecovered.setData(dataOption.recovered);
    }

    setData(endUrl, optionList, countCases) {
            const dataOption = this.defineData(constants.arrayDataCountries[endUrl]);
            if (optionList) {
                Dashboard.defineCountCases(optionList, dataOption, countCases);
            } else this.changeData(endUrl, dataOption);
    }

    setDataForList(optionList) {
        const list = this.list.children;

        Object.values(list).forEach((value) => {
            const countryForData = value.children[1].innerText;
            const idCountry = List.getIdCountry(countryForData);
            const countCases = value.children[0];
            this.setData(idCountry, optionList, countCases);
        });
        setTimeout(() => {
            const sortedList = this.sortData();
            const listUl = document.querySelector('.list');
            listUl.removeChild(listUl.lastChild);
            listUl.appendChild(create('ul', '', sortedList));
        }, 0);
    }

    static defineCountCases(optionList, dataOption, count) {
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
            this.setNewList();
            this.defineOptions();
        }
    }

    choosePopulation(e) {
        const isInputCheckbos = e.target.classList.contains('inputCkbx');

        if (isInputCheckbos) {
            const isPopulationForAll = (this.population === constants.forAll);
            this.population = isPopulationForAll ? constants.forPer : constants.forAll;
            this.setNewList();
            this.defineOptions();
        }
    }

    setOption(option) {
        this.optionList = option;
        this.setNewList();
        this.defineOptions();
    }

    setNewList() {
        this.list = document.querySelector('ul');
        this.setDataForList(this.optionList);
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

    static searchInList() {
        const input = document.querySelector('.list__search');
        const filter = input.value.toUpperCase();
        const ul = document.querySelector('ul');
        const li = ul.children;

        for (let i = 0; i < li.length; i++) {
            const nameCountry = li[i].children[1];
            if (nameCountry.innerText.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else li[i].style.display = 'none';
        }
    }

    static changeClass(item, classNew) {
        const selectedLi = document.querySelector(`.${classNew}`);
        if (selectedLi && (selectedLi !== item)) selectedLi.classList.remove(classNew);
        item.classList.add(classNew);
    }
}
