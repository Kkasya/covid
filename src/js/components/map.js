import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Map {
    constructor() {
        this.container = create('div');
        this.container.id = 'map';
        const wrapperContainer = create('div', 'container', this.container);

        setTimeout(this.addMap, 1000);
        return wrapperContainer;
    }

    addMap() {
        this.mapOptions = {
            center: [0, 0],
            zoom: 2,
        };
        this.map = new L.map('map', this.mapOptions);
        L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 20,
        }).addTo(this.map);
    }
}
