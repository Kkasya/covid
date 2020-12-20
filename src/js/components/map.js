import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Map {
    constructor() {
        this.typeCases = 'cases';
        this.period = constants.forAll;
        this.population = constants.forAll;
    }

    init() {
        this.container = create('div');
        this.container.id = 'map';

        this.btnCases = create('div', 'btn-cases total-cases active-btn', 'Total cases');
        this.btnDeath = create('div', 'btn-cases total-deaths', 'Total deaths');
        this.btnRecovery = create('div', 'btn-cases total-recovered', 'Total recovered');
        this.btnTotal = create('div', 'btn-wrapper', [this.btnCases, this.btnDeath, this.btnRecovery]);
        this.activeBtn = this.btnCases;

        const wrapperContainer = create('div', 'container', [this.container, this.btnTotal]);

        setTimeout(() => this.createLayer(), 1000);
        setTimeout(() => this.addMarkers(), 1500);

        return wrapperContainer;
    }

    addMarkers() {
        this.markers = [];
        Object.keys(constants.arrayDataCountries).forEach((key) => {
            if (key !== constants.forAll) {
                const lat = Number(constants.arrayDataCountries[key].countryInfo.lat);
                const long = Number(constants.arrayDataCountries[key].countryInfo.long);
                const nameCountry = constants.arrayDataCountries[key].countryInfo.country;

                const markerOptions = {
                    icon: this.createIcon(key),
                    title: `${nameCountry}\nTotal ${this.typeCases}: ${this.cases.toLocaleString()}`,
                };
                const marker = new L.Marker([lat, long], markerOptions);
                this.markers.push(marker);
                marker.bindPopup(`${nameCountry}
                        <br> Total ${this.typeCases}: ${this.cases.toLocaleString()}`).openPopup();

                marker.addTo(this.map);
            }
        });
    }

    createLayer() {
        const mapOptions = {
            center: [0, 0],
            zoom: 2,
        };
        this.map = new L.map('map', mapOptions);
        L.tileLayer(constants.srcTypeMap, {
            maxZoom: 20,
            noWrap: true,
            minZoom: 2,
        }).addTo(this.map);
        this.createLegend();
    }

    createLegend() {
        const legend = L.control({ position: 'bottomright' });

        legend.onAdd = function () {
            const div = L.DomUtil.create('div', 'legend');
            const grades = 'Relative values:';

            div.innerHTML
                += `${grades}<br> 
                    <img src=${constants.srcIconMarker} height=${constants.rangeSize.low} width=${constants.rangeSize.low}>
                     ${100 * constants.range.low} - ${100 * constants.range.middle - 1} <br>
<img src=${constants.srcIconMarker} height=${constants.rangeSize.middle} width=${constants.rangeSize.middle}>
 ${100 * constants.range.middle} - ${100 * constants.range.middleHeight - 1} <br>
<img src=${constants.srcIconMarker} height=${constants.rangeSize.middleHeight} width=${constants.rangeSize.middleHeight}> 
    ${100 * constants.range.middleHeight} - ${constants.range.height * 100} <br>
<img src=${constants.srcIconMarker} height=${constants.rangeSize.height} width=${constants.rangeSize.height}> 
${100 * constants.range.height} - 100`;

            return div;
        };

        legend.addTo(this.map);
    }

    createIcon(key) {
        const data = this.defineData();
        this.cases = constants.arrayDataCountries[key][data][this.typeCases];

        const maxCases = Number(document.querySelector('ul').children[0].children[0].innerText);
        const relativeValue = this.cases / maxCases;
        let sizeIcon;
        Object.entries(constants.range).forEach(([keyRange, value]) => {
            if (relativeValue > value) sizeIcon = (`${constants.rangeSize[keyRange]}`);
        });
        const iconOptions = {
            iconUrl: constants.srcIconMarker,
            iconSize: [sizeIcon, sizeIcon],
        };

        return L.icon(iconOptions);
    }

    changeMarker(period = this.period, population = this.population) {
        this.period = period;
        this.population = population;
        this.markers.forEach((marker) => this.map.removeLayer(marker));
        setTimeout(() => this.addMarkers(), 0);
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

    changeDataMap(option) {
        console.log(option);
        if (option !== this.activeBtn.innerText) {
            // const a = document.querySelector('.active-btn');
            this.activeBtn.classList.remove('active-btn');
            const newActiveBtn = document.querySelector(`.total-${option.split(' ')[1]}`);
            this.activeBtn = newActiveBtn;
            this.activeBtn.classList.add('active-btn');
            this.setTypeCases(option.split(' ')[1]);
        }
    }

    setTypeCases(typeCases) {
        this.typeCases = typeCases;
        this.changeMarker();
    }
}
