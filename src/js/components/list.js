import create from '../utils/createElement';
import * as constants from '../data/constants';
import countries from '../data/listCountries';

export default class List {
    constructor(option) {
        this.option = option;
    }

    init() {
        this.list = create('ul', '', List.createItemList());
        return this.list;
    }

    static createItemList() {
        const arrayListItems = [];

        Object.entries(countries).forEach(([key, value]) => {
            const dataCases = create('span', 'count');
            const countryName = create('span', '', key);
            const urlFlag = `${constants.urlFlag}${value}${constants.sizeFlag}`;
            const countryFlag = create('img', 'countryFlag', null, null, ['src', urlFlag]);
            const country = create('li', 'countryLi', [dataCases, countryName, countryFlag]);
            arrayListItems.push(country);
        });

        return arrayListItems;
    }

    static getIdCountry(name) {
        return countries[name];
    }
}
