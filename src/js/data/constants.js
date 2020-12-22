const srcIconHeader = 'https://img.icons8.com/color/48/000000/coronavirus--v2.png';
const srcIconGitHub = 'https://image.flaticon.com/icons/png/512/25/25231.png';
const srcIconRss = 'https://rs.school/images/rs_school_js.svg';
const srcIconMarker = 'https://www.flaticon.com/svg/static/icons/svg/594/594739.svg';
const srcTypeMap = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}';
const fullScreen = 'https://image.flaticon.com/icons/png/512/67/67760.png';
const endFullScreen = 'https://image.flaticon.com/icons/png/512/18/18231.png';

const hrefGitHub = 'https://github.com/Kkasya';
const hrefRss = 'https://rs.school/js/';

const H1 = 'COVID-19 Dashboard';
const nameAuthor = 'Anastassia Kozlovskaya';
const year = '2020';

const cases = ['Total cases', 'Total deaths', 'Total recovered'];
const listName = 'Sort by';

const checkPeriod = 'period';
const checkPopulation = 'population';
const forAll = 'all';
const forToday = 'today';
const forPer = 100000;

const urlFlag = 'https://www.countryflags.io/';
const sizeFlag = '/shiny/64.png';

const urlCases = 'https://disease.sh/v3/covid-19/';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const arrayDataCountries = {};
const arrayDataGraph = {};

const range = {
 low: 0,
 middle: 0.08,
 middleHeight: 0.2,
 height: 0.4,
};
const rangeSize = {
 low: 8,
 middle: 10,
 middleHeight: 15,
 height: 20,
};

export {
 srcIconHeader, srcIconGitHub, srcIconRss, hrefGitHub, hrefRss, H1, nameAuthor, year,
 cases, listName, checkPeriod, checkPopulation, urlFlag, sizeFlag, forAll, urlCases, forToday,
 forPer, days, months, arrayDataCountries, srcIconMarker, range, rangeSize, srcTypeMap, fullScreen,
 endFullScreen, arrayDataGraph,
};
