import create from '../utils/createElement';
import * as constants from '../data/constants';
import SearchList from '../components/search';
import Dashboard from '../components/dashboard';

export default class Main {
    init() {
        this.searchList = new SearchList(constants.cases[0]).init();
        this.dashboard = new Dashboard().init();
        return create('div', 'main', [this.searchList, this.dashboard]);
    }
}
