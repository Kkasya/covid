import create from '../utils/createElement';

export default class Table {
    constructor(classTable, nameTable) {
        this.classTable = classTable;
        this.nameTable = nameTable;
    }

    init() {
        const titleTable = create('h3', '', this.nameTable);
        this.countCases = create('p', `${this.classTable}-count`);
        return create('div', this.classTable, [titleTable, this.countCases]);
    }

    setData(count) {
        this.countCases.textContent = Number(count).toLocaleString();
    }
}
