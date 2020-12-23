import './sass/style.scss';
import app from './js/layouts/app';
import * as async from './js/utils/getAsyncDate';
import * as constants from './js/data/constants';

 async.createArrayCountries();
setTimeout(() => {
    async.createArrayHistorical();
    console.log(constants.arrayDataGraph);
    }, 1000);
setTimeout(() => {
    const application = app();
    document.body.appendChild(application);
}, 2100);
