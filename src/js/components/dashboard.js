import create from '../utils/createElement';
import Table from './table';
import * as constants from '../data/constants';
import Checkbox from './checkbox';

export default class Dashboard {
    init() {
        this.dataCases = this.createDataCases();

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
        this.ckbxPopulation = new Checkbox(constants.checkPopulation).init();
        this.checkbox = create('div', 'options', [this.ckbxPeriod, this.ckbxPopulation]);
        this.changeData('All period', 'All population', 'All');

        return create('div', 'infoData',
            [totalCasesHtml, totalDeathHtml, totalRecoveredHtml, this.checkbox]);
    }

     async changeData(period, population, country) {
        if (country === 'All') {
            const url = 'https://disease.sh/v3/covid-19/all';
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            this.totalCases.setData(data.cases);
            this.totalDeath.setData(data.deaths);
            this.totalRecovered.setData(data.recovered);
        }
    }
}
