import create from '../utils/createElement';
import * as constants from '../data/constants';
import SearchList from '../components/search';
import Dashboard from '../components/dashboard';

export default class Main {
    init() {
        this.searchList = new SearchList(constants.cases[0]).init();
        const dashboard = new Dashboard().init();

        this.searchList.addEventListener('click', (e) => this.chooseCountry(e));

        return create('div', 'main', [this.searchList, dashboard]);
    }

    chooseCountry(e) {
        const isItemList = e.target.parentElement.classList.contains('countryLi');
        const nameCountry = e.target.parentElement.children[0].innerText;
        if (isItemList) this.dashboard.setCountry(nameCountry);
    }
}
