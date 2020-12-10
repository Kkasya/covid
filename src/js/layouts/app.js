import create from '../utils/createElement';
import Header from './header';
import Footer from './footer';
import Main from './main';

export default class App {
    init() {
        this.header = new Header().init();
        this.main = new Main().init();
        this.footer = new Footer().init();

        return create('div', '', [this.header, this.main, this.footer]);
    }
}
