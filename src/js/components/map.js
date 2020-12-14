import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Map {
    init() {
        this.container = create('div');
        this.container.id = 'map';
        const mapOptions = {
            center: [17.385044, 78.486671],
            zoom: 10,
        };
        this.map = new L.map('map', mapOptions);
        const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        this.map.addLayer(layer);
        console.log(this.map);
        return this.map;
    }
}
