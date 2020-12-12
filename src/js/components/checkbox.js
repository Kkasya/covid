import create from '../utils/createElement';

export default class Checkbox {
    constructor(classCkbx) {
        this.classCkbx = classCkbx;
    }

    init() {
        const inputCkbx = create('input', '', null, null,
            ['type', 'checkbox'], ['id', `ckbx_${this.classCkbx}`], ['value', '0'], ['name', `ckbx_${this.classCkbx}`]);
        const labelCkbx = create('label', '', null, null, ['for', `ckbx_${this.classCkbx}`]);
        return create('div', `checkbox ${this.classCkbx}`, [inputCkbx, labelCkbx]);
    }
}
