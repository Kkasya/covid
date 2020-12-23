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
        dashboardHtml.addEventListener('click', (e) => this.handle(e));

        this.main = create('div', 'main', [searchListHtml, dashboardHtml]);
        this.main.addEventListener('click', (e) => this.openFullScreen(e, dashboardHtml, searchListHtml));

        return this.main;
    }

    handle(e) {
        const isItemList = e.target.closest('.countryLi');
        const isArrow = e.target.classList.contains('arrow');
        const isBtnMap = e.target.classList.contains('btn-cases');

        if (isItemList) {
            const countryLi = e.target.closest('.countryLi');
            this.dashboard.setCountry(countryLi);
        } else if (isArrow) {
            const option = this.searchList.chooseOption(e);
            this.dashboard.setOption(option);
        } else if (isBtnMap) {
            const option = e.target.innerText;
            this.searchList.setOption(option);
            this.dashboard.setOption(option);
        }
    }

    openFullScreen(e, dashboardHtml, searchListHtml) {
        const listBlocks = [].concat(Object.values(dashboardHtml.children));
        listBlocks.push(searchListHtml);
        const isBtnFullScreen = e.target.classList.contains('full-screen');
        const isBtnEndFullScreen = e.target.classList.contains('end-full-screen');
        if (isBtnFullScreen) {
            e.target.classList.add('end-full-screen');
            e.target.classList.remove('full-screen');
            const elem = e.target.parentNode;
            elem.classList.add('full');
            listBlocks.forEach((el) => {
                if (el !== elem) el.classList.add('hidden');
            });
        } else if (isBtnEndFullScreen) {
            e.target.classList.remove('end-full-screen');
            e.target.classList.add('full-screen');
            const elem = e.target.parentNode;
            elem.classList.remove('full');
            listBlocks.forEach((el) => {
                if (el !== elem) el.classList.remove('hidden');
            });
        }
    }
}
