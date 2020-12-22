import create from '../utils/createElement';
import * as constants from '../data/constants';

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
        this.addLine();

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
        const data = 'allPeriod';
        const arrayCases = [];
        const labels = [];
        console.log(constants.arrayDataGraph);
        Object.keys(constants.arrayDataGraph).forEach((key) => {
            if (key === this.country) {
                const cases = constants.arrayDataGraph[key][data][this.typeCases];
                arrayCases.push(Object.values(cases));
                if (this.population !== constants.forAll) {
                    const { population } = constants.arrayDataCountries[key];
                    labels.push(Object.keys(cases) * (1000 / population));
                } else labels.push(Object.keys(cases));
            }
        });
        const newLine = {
            label: `Total ${this.typeCases} for ${this.country}`,
            data: arrayCases[0],
            backgroundColor: 'rgba(39, 35, 56, 0.5)',
            borderColor: 'rgba(39, 35, 56, 0.5)',
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

    changeLine() {
        this.dataChart.datasets.pop();
        this.lineChart.update();
        const { newLine, labels } = this.setData();
        this.dataChart.datasets.push(newLine);
        this.lineChart.update();
    }

    setLineCountry(countryForData) {
        this.country = countryForData;
        console.log(countryForData);
        const dataCountry = constants.arrayDataGraph[this.country];
        console.log(dataCountry);
        this.changeLine();
    }
}
