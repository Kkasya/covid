import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Header {
    init() {
        const imgTitle = create('img', '', null, null, ['src', constants.srcIconHeader]);
        const H1 = create('h1', '', constants.H1);
        this.day = create('h2', 'day', this.showDay());
        this.showDay();
        const titleHeader = create('div', 'title', [imgTitle, H1]);

        return create('div', 'header', [titleHeader, this.day]);
    }

    showDay() {
        const today = new Date();
        const numberOfDay = today.getDay();
        const numberOfMonth = today.getMonth();
        const date = today.getDate();

        const day = constants.days[numberOfDay];
        const month = constants.months[numberOfMonth];
        return `${day}, ${date} ${month}`;
    }
}
