import './sass/style.scss';
import app from './js/layouts/app';
import createArrayCountries from './js/utils/getAsyncDate';

createArrayCountries();
setTimeout(() => {
    const application = app();
    document.body.appendChild(application);
}, 1000);
