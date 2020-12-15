import create from '../utils/createElement';
import * as constants from '../data/constants';
import SearchList from '../components/search';
import Dashboard from '../components/dashboard';

export default class Main {
    init() {
        this.searchList = new SearchList(constants.cases[0]);
        const searchListHtml = this.searchList.init();

        this.dashboard = new Dashboard();
        const dashboardHtml = this.dashboard.init(this.searchList);

        searchListHtml.addEventListener('click', (e) => this.handle(e));
        searchListHtml.addEventListener('keyup', Dashboard.searchInList);

        return create('div', 'main', [searchListHtml, dashboardHtml]);
    }

    handle(e) {
        const isItemList = e.target.closest('.countryLi');
        const isArrow = e.target.classList.contains('arrow');

        if (isItemList) {
            const countryLi = e.target.closest('.countryLi');
            this.dashboard.setCountry(countryLi);
        } else if (isArrow) {
           const option = this.searchList.chooseOption(e);
           this.dashboard.setOption(option);
        }
    }
}
