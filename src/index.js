import './sass/style.scss';
import app from './js/layouts/app';
import * as async from './js/utils/getAsyncDate';

async.createArrayCountries();
setTimeout(() => async.createArrayHistorical(), 2000);
setTimeout(() => {
    const application = app();
    document.body.appendChild(application);
}, 3000);
