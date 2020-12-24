import L from 'leaflet';

import create from '../utils/createElement';
import * as constants from '../data/constants';
import * as geo from '../data/geojson';

export default class Map {
    constructor() {
        this.typeCases = 'cases';
        this.period = constants.forAll;
        this.population = constants.forAll;
    }

    init() {
        const container = create('div');
        container.id = 'map';

        const btnCases = create('div', 'btn-cases total-cases active-btn', 'Total cases');
        const btnDeath = create('div', 'btn-cases total-deaths', 'Total deaths');
        const btnRecovery = create('div', 'btn-cases total-recovered', 'Total recovered');
        const btnTotal = create('div', 'btn-wrapper', [btnCases, btnDeath, btnRecovery]);
        this.activeBtn = btnCases;

        const btnFullScreen = create('div', 'full-screen');
        const wrapperContainer = create('div', 'container', [container, btnTotal, btnFullScreen]);

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
            maxZoom: 5,
            noWrap: true,
            minZoom: 2,
        }).addTo(this.map);
        this.createLegend();

        L.geoJson(geo.geojsonFeature, { color: 'orange', width: '0.5px' }).addTo(this.map);
    }

    createLegend() {
        const legend = L.control({ position: 'bottomright' });

        legend.onAdd = function () {
            const div = L.DomUtil.create('div', 'legend');
            const grades = 'Cases / maxCases %:';

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
        if (option !== this.activeBtn.innerText) {
            this.activeBtn.classList.remove('active-btn');
            const newActiveBtns = document.querySelectorAll(`.total-${option.split(' ')[1]}`);
            newActiveBtns.forEach((newActiveBtn) => {
                this.activeBtn = newActiveBtn;
                this.activeBtn.classList.add('active-btn');
            });
            this.setTypeCases(option.split(' ')[1]);
        }
    }

    setTypeCases(typeCases) {
        this.typeCases = typeCases;
        this.changeMarker();
    }
}
