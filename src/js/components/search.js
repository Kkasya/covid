import create from '../utils/createElement';
import * as constants from '../data/constants';
import List from './list';

export default class SearchList {
    constructor(option) {
        this.option = option;
    }

    init() {
        this.titleList = create('h2', '', constants.listName);
        this.listOption = this.createOption();
        this.searchCountry = SearchList.createSearchCountry();
        this.list = new List(this.option).init();
        this.handle();
        return create('div', 'list', [this.titleList, this.listOption, this.searchCountry, this.list]);
    }

    handle() {
       // this.searchCountry.addEventListener('keypress', (e) => this.searchInList());
    }

    createOption() {
        this.arrowRightI = create('i', 'arrow right');
        this.arrowRight = create('span', 'list__option__arrow', this.arrowRightI);
        this.arrowLeftI = create('i', 'arrow left');
        this.arrowLeft = create('span', 'list__option__arrow', this.arrowLeftI);
        this.optionName = create('h3', '', this.option);

        return create('div', 'list__option', [this.arrowLeft, this.optionName, this.arrowRight]);
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
        return create('span', 'list__search', null, null, ['contenteditable', 'true']);
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

    searchInList(e) {

    }

//      getOption() {
//         return this.listOption;
// }
}
