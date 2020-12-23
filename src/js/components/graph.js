import create from '../utils/createElement';
import * as constants from '../data/constants';
import countries from '../data/listCountries';

export default class Graph {
    constructor() {
        this.typeCases = 'cases';
        this.period = constants.forAll;
        this.population = constants.forAll;
        this.country = constants.forAll;
    }

    init() {
        const btnFullScreen = create('div', 'full-screen');
        const btnCases = create('div', 'btn-cases total-cases active-btn', 'Total cases');
        const btnDeath = create('div', 'btn-cases total-deaths', 'Total deaths');
        const btnRecovery = create('div', 'btn-cases total-recovered', 'Total recovered');
        const btnTotal = create('div', 'btn-wrapper', [btnCases, btnDeath, btnRecovery]);
        this.activeBtn = btnCases;

        this.graph = create('canvas', null, null, null, ['height', '14rem'], ['width', '74rem']);
        this.graph.id = 'chart';
        setTimeout(() => this.addLine(), 1200);

        return create('div', 'graph', [this.graph, btnTotal, btnFullScreen]);
    }

    addLine() {
        const ctx = this.graph.getContext('2d');
        const { newLine, labels } = this.setData();

        this.dataChart = {
            labels: labels[0],
            datasets: [newLine],
        };

        const chartOptions = {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black',
                },
            },

        };

        this.lineChart = new Chart(ctx, {
            type: 'line',
            data: this.dataChart,
            options: chartOptions,
        });
        this.lineChart.update();
    }

    setData() {
        const data = this.defineData();
        const arrayCases = [];
        const labels = [];
        const idCountry = (this.country === constants.forAll) ? constants.forAll : countries[this.country];
        Object.keys(constants.arrayDataGraph).forEach((key) => {
            if (key === idCountry) {
                const cases = constants.arrayDataGraph[key][data][this.typeCases];
                arrayCases.push(Object.values(cases));
                labels.push(Object.keys(cases));
            }
        });
        // console.log(labels);

        const newLine = {
            label: `Total ${this.typeCases} for ${this.country}`,
            data: arrayCases[0],
            backgroundColor: 'rgba(39, 35, 56)',
            borderColor: 'rgba(39, 35, 56)',
            borderWidth: 2,
            fill: false,
        };
        return { newLine, labels };
    }

    defineData() {
        let data;
        if (this.population === constants.forAll) {
            if (this.period === constants.forAll) data = 'allPeriod';
            else data = 'today';
        } else if (this.period === constants.forAll) data = 'allPeriodPerThou';
        else data = 'todayPerThou';
        return data;
    }

    changeDataGraph(option) {
        if (option !== this.activeBtn.innerText) {
            this.activeBtn.classList.remove('active-btn');
            const newActiveBtn = document.querySelector(`.total-${option.split(' ')[1]}`);
            this.activeBtn = newActiveBtn;
            this.setTypeCases(option.split(' ')[1]);
        }
    }

    setTypeCases(typeCases) {
        this.typeCases = typeCases;
        this.changeLine();
    }

    changeLine(period = this.period, population = this.population) {
        this.period = period;
        this.population = population;

        this.dataChart.datasets.pop();
        // this.dataChart.labels.length = 0;
        this.lineChart.update();
        const { newLine, labels } = this.setData();
        this.dataChart.datasets.push(newLine);
        // this.dataChart.labels = labels[0];
        this.lineChart.update();
    }

    setLineCountry(countryForData) {
        this.country = countryForData;
        const dataCountry = constants.arrayDataGraph[this.country];
        console.log(dataCountry);
        this.changeLine();
    }
}
