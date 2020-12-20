import create from '../utils/createElement';
import * as constants from '../data/constants';
import List from './list';

export default class SearchList {
    constructor(option) {
        this.option = option;
    }

    init() {
        const titleList = create('h2', '', constants.listName);
        const listOption = this.createOption();
        const searchCountry = SearchList.createSearchCountry();
        this.list = new List(this.option).init();

        return create('div', 'list', [titleList, listOption, searchCountry, this.list]);
    }

    createOption() {
        const arrowRightI = create('i', 'arrow right');
        const arrowRight = create('span', 'list__option__arrow', arrowRightI);
        const arrowLeftI = create('i', 'arrow left');
        const arrowLeft = create('span', 'list__option__arrow', arrowLeftI);
        this.optionName = create('h3', '', this.option);

        return create('div', 'list__option', [arrowLeft, this.optionName, arrowRight]);
    }

    chooseOption(e) {
        const isArrowRight = e.target.classList.contains('right');
        const cases = constants.cases.concat();
        const index = cases.indexOf(this.option);
        const { length } = cases;
        if (isArrowRight) {
            const indRight = SearchList.getIndRight(index + 1, length);
            this.option = cases[indRight];
        } else {
            const indLeft = SearchList.getIndLeft(index - 1, length);
            this.option = cases[indLeft];
        }
        this.optionName.innerText = this.option;

       return this.option;
    }

    static createSearchCountry() {
        return create('input', 'list__search', null, null, ['placeholder', 'Search..'],
            ['type', 'text']);
    }

    static getIndRight(index, length) {
        let indRight = index;
        if (indRight >= length) {
            indRight = 0;
        }
        return indRight;
    }

    static getIndLeft(index, length) {
        let indLeft = index;
        if (indLeft < 0) {
            indLeft = length - 1;
        }
        return indLeft;
    }

    setOption(option) {
        this.option = option;
        this.optionName.innerText = option;
    }
}
