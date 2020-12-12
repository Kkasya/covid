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

    init() {
        this.dataCases = this.createDataCases();
        this.setDataForAll();

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
        this.checkbox = create('div', 'options', [this.ckbxPeriod, this.ckbxPopulation]);

        return create('div', 'infoData',
            [totalCasesHtml, totalDeathHtml, totalRecoveredHtml, this.checkbox]);
    }

     defineOptions(period = this.period, population = this.population) {
        let endUrl;
        let dataOption = {};
        if (this.countryForData === constants.forAll) {
            endUrl = null;
        } else {
            const idCountry = List.getIdCountry(this.countryForData);
            endUrl = `countries/${idCountry}`;
        }
        if (period === constants.forAll) {
            dataOption = this.dataAll.allPeriod;
        } else {
            dataOption = this.dataAll.today;
        }
        this.changeData(endUrl, dataOption);
    }

    setCountry(country) {
        this.countryForData = country;
        this.defineOptions();
    }

    async changeData(endUrl, dataOption) {
        if (endUrl) {
            const data = Dashboard.getData(endUrl);
            this.totalCases.setData(data[dataOption.cases]);
            this.totalDeath.setData(data[dataOption.deaths]);
            this.totalRecovered.setData(data[dataOption.recovered]);
        } else {
            this.totalCases.setData(dataOption.cases);
            this.totalDeath.setData(dataOption.deaths);
            this.totalRecovered.setData(dataOption.recovered);
        }
    }

     setDataForAll() {
        const endUrl = constants.forAll;
        Dashboard.getData(endUrl).then((response) => {
            if (typeof response === 'object') {
                this.dataAll.allPeriod = { cases: response.cases, deaths: response.deaths, recovered: response.recovered };
                this.dataAll.today = { cases: response.todayCases, deaths: response.todayDeaths, recovered: response.todayRecovered };
                this.population = response.population;

                this.changeData(null, this.dataAll.allPeriod);
            }
        });
    }

    static async getData(endUrl) {
        const url = `${constants.urlCases}${endUrl}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
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
}
