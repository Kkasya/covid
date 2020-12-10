import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class List {
    constructor(option) {
        this.option = option;
    }

    init() {
        this.titleList = create('h2', '', constants.listName);
        this.listOption = this.createOption();
        return create('div', 'list', [this.titleList, this.listOption]);
    }

    createOption() {
        this.arrowRightI = create('i', 'right');
        this.arrowRight = create('span', 'list__option__arrow', this.arrowRightI);
        this.arrowLeftI = create('i', 'left');
        this.arrowLeft = create('span', 'list__option__arrow', this.arrowLeftI);

        this.optionName = create('h3', '', this.option);

        this.arrowRight.addEventListener('click', (e) => this.chooseOption(e));
        this.arrowLeft.addEventListener('click', (e) => this.chooseOption(e));

        return create('div', 'list__option', [this.arrowLeft, this.optionName, this.arrowRight]);
    }

    chooseOption(e) {
        const isArrowRight = e.target.classList.contains('right');
        const cases = constants.cases.concat();
        const index = cases.indexOf(this.option);
        const { length } = cases;
        if (isArrowRight) {
            const indRight = this.getIndRight(index + 1, length);
            this.option = cases[indRight];
        } else {
            const indLeft = this.getIndLeft(index - 1, length);
            this.option = cases[indLeft];
        }
        this.optionName.innerText = this.option;
    }

    // eslint-disable-next-line class-methods-use-this
    getIndRight(index, length) {
        let indRight = index;
        if (indRight >= length) {
            indRight = 0;
        }
        return indRight;
    }

    // eslint-disable-next-line class-methods-use-this
    getIndLeft(index, length) {
        let indLeft = index;
        if (indLeft < 0) {
            indLeft = length - 1;
        }
        return indLeft;
    }

//      getOption() {
//         return this.listOption;
// }
}
