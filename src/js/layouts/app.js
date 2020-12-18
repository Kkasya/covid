import create from '../utils/createElement';
import Header from './header';
import Footer from './footer';
import Main from './main';

export default function createApp() {
    const header = new Header().init();
    const main = new Main().init();
    const footer = new Footer().init();
    return create('div', '', [header, main, footer]);
}
