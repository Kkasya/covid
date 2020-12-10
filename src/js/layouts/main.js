import create from '../utils/createElement';
import * as constants from '../data/constants';
import List from '../components/list';

export default class Main {
    init() {
        this.list = new List(constants.cases[0]).init();

        return create('div', 'main', this.list);
    }
}
