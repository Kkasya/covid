import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Map {
    init() {
        this.container = create('div');
        this.container.id = 'map';
        const wrapperContainer = create('div', 'container', this.container);

        this.period = constants.forAll;
        this.population = constants.forAll;

        setTimeout(() => this.createLayer(), 1000);
        setTimeout(() => {
            this.addMarkers();
        }, 1500);

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
                    title: `${nameCountry}\nCases: ${this.cases.toLocaleString()}`,
                };
                const marker = new L.Marker([lat, long], markerOptions);
                this.markers.push(marker);
                marker.bindPopup(`${nameCountry}
                        <br> Cases: ${this.cases.toLocaleString()}`).openPopup();

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
    }

   createIcon(key) {
        const data = this.defineData();
          this.cases = constants.arrayDataCountries[key][data].cases;

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

    changeMarker(period, population) {
        this.period = period;
        this.population = population;
        this.markers.forEach((marker) => this.map.removeLayer(marker));
        this.addMarkers();
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
}
