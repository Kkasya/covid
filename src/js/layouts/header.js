import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Header {
    init() {
        this.imgTitle = create('img', '', null, null, ['src', constants.srcIconHeader]);
        this.H1 = create('h1', '', constants.H1);
        this.titleHeader = create('div', 'title', [this.imgTitle, this.H1]);
        return create('div', 'header', this.titleHeader);
    }
}
