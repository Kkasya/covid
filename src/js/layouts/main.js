import create from '../utils/createElement';
import * as constants from '../data/constants';
import SearchList from '../components/search';
import Dashboard from '../components/dashboard';
import Map from '../components/map';

export default class Main {
    init() {
        this.searchList = new SearchList(constants.cases[0]);
        const searchListHtml = this.searchList.init();

        this.dashboard = new Dashboard();
        const dashboardHtml = this.dashboard.init(this.searchList);

        this.map = new Map().init();

        searchListHtml.addEventListener('click', (e) => this.handle(e));

        return create('div', 'main', [searchListHtml, dashboardHtml, this.map]);
    }

    handle(e) {
        const isItemList = e.target.parentElement.classList.contains('countryLi');
        const isArrow = e.target.classList.contains('arrow');

        if (isItemList) {
            const nameCountry = e.target.parentElement.children[1].innerText;
            this.dashboard.setCountry(nameCountry);
        } else if (isArrow) {
           const option = this.searchList.chooseOption(e);
           this.dashboard.setOption(option);
        }
    }
}
