/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_layouts_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/layouts/app */ "./src/js/layouts/app.js");


var app = new _js_layouts_app__WEBPACK_IMPORTED_MODULE_1__.default().init();
document.body.appendChild(app);

/***/ }),

/***/ "./src/js/components/checkbox.js":
/*!***************************************!*
  !*** ./src/js/components/checkbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Checkbox
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");

class Checkbox {
  constructor(classCkbx) {
    this.classCkbx = classCkbx;
  }

  init() {
    var inputCkbx = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('input', '', null, null, ['type', 'checkbox'], ['id', "ckbx_".concat(this.classCkbx)], ['value', '0'], ['name', "ckbx_".concat(this.classCkbx)]);
    var labelCkbx = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('label', '', null, null, ['for', "ckbx_".concat(this.classCkbx)]);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', "checkbox ".concat(this.classCkbx), [inputCkbx, labelCkbx]);
  }

}

/***/ }),

/***/ "./src/js/components/dashboard.js":
/*!****************************************!*
  !*** ./src/js/components/dashboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Dashboard
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/js/components/table.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox */ "./src/js/components/checkbox.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





class Dashboard {
  init() {
    this.dataCases = this.createDataCases();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'dashboard', [this.dataCases]);
  }

  createDataCases() {
    this.totalCases = new _table__WEBPACK_IMPORTED_MODULE_1__.default('cases', _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[0]);
    var totalCasesHtml = this.totalCases.init();
    this.totalDeath = new _table__WEBPACK_IMPORTED_MODULE_1__.default('death', _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[1]);
    var totalDeathHtml = this.totalDeath.init();
    this.totalRecovered = new _table__WEBPACK_IMPORTED_MODULE_1__.default('recovery', _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[2]);
    var totalRecoveredHtml = this.totalRecovered.init();
    this.ckbxPeriod = new _checkbox__WEBPACK_IMPORTED_MODULE_3__.default(_data_constants__WEBPACK_IMPORTED_MODULE_2__.checkPeriod).init();
    this.ckbxPopulation = new _checkbox__WEBPACK_IMPORTED_MODULE_3__.default(_data_constants__WEBPACK_IMPORTED_MODULE_2__.checkPopulation).init();
    this.checkbox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'options', [this.ckbxPeriod, this.ckbxPopulation]);
    this.changeData('All period', 'All population', 'All');
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'infoData', [totalCasesHtml, totalDeathHtml, totalRecoveredHtml, this.checkbox]);
  }

  changeData(period, population, country) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (country === 'All') {
        var url = 'https://disease.sh/v3/covid-19/all';
        var res = yield fetch(url);
        var data = yield res.json();
        console.log(data);

        _this.totalCases.setData(data.cases);

        _this.totalDeath.setData(data.deaths);

        _this.totalRecovered.setData(data.recovered);
      }
    })();
  }

}

/***/ }),

/***/ "./src/js/components/list.js":
/*!***********************************!*
  !*** ./src/js/components/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ List
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");
/* harmony import */ var _data_listCountries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/listCountries */ "./src/js/data/listCountries.js");



class List {
  init() {
    this.list = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('ul', '', List.createItemList());
    return this.list;
  }

  static createItemList() {
    var arrayListItems = [];
    Object.entries(_data_listCountries__WEBPACK_IMPORTED_MODULE_2__.default).forEach((_ref) => {
      var [key, value] = _ref;
      var countryName = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', key);
      var urlFlag = "".concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__.urlFlag).concat(value).concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__.sizeFlag);
      var countryFlag = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'countryFlag', null, null, ['src', urlFlag]);
      var country = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('li', '', [countryName, countryFlag]);
      arrayListItems.push(country);
    });
    return arrayListItems;
  }

}

/***/ }),

/***/ "./src/js/components/search.js":
/*!*************************************!*
  !*** ./src/js/components/search.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SearchList
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/js/components/list.js");



class SearchList {
  constructor(option) {
    this.option = option;
  }

  init() {
    this.titleList = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h2', '', _data_constants__WEBPACK_IMPORTED_MODULE_1__.listName);
    this.listOption = this.createOption();
    this.searchCountry = SearchList.createSearchCountry();
    this.list = new _list__WEBPACK_IMPORTED_MODULE_2__.default().init();
    this.handle();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'list', [this.titleList, this.listOption, this.searchCountry, this.list]);
  }

  handle() {
    this.searchCountry.addEventListener('keypress', e => this.searchInList());
    this.arrowRight.addEventListener('click', e => this.chooseOption(e));
    this.arrowLeft.addEventListener('click', e => this.chooseOption(e));
  }

  createOption() {
    this.arrowRightI = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('i', 'right');
    this.arrowRight = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__option__arrow', this.arrowRightI);
    this.arrowLeftI = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('i', 'left');
    this.arrowLeft = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__option__arrow', this.arrowLeftI);
    this.optionName = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h3', '', this.option);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'list__option', [this.arrowLeft, this.optionName, this.arrowRight]);
  }

  chooseOption(e) {
    var isArrowRight = e.target.classList.contains('right');
    var cases = _data_constants__WEBPACK_IMPORTED_MODULE_1__.cases.concat();
    var index = cases.indexOf(this.option);
    var {
      length
    } = cases;

    if (isArrowRight) {
      var indRight = SearchList.getIndRight(index + 1, length);
      this.option = cases[indRight];
    } else {
      var indLeft = SearchList.getIndLeft(index - 1, length);
      this.option = cases[indLeft];
    }

    this.optionName.innerText = this.option;
  }

  static createSearchCountry() {
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__search', null, null, ['contenteditable', 'true']);
  }

  static getIndRight(index, length) {
    var indRight = index;

    if (indRight >= length) {
      indRight = 0;
    }

    return indRight;
  }

  static getIndLeft(index, length) {
    var indLeft = index;

    if (indLeft < 0) {
      indLeft = length - 1;
    }

    return indLeft;
  }

  searchInList(e) {} //      getOption() {
  //         return this.listOption;
  // }


}

/***/ }),

/***/ "./src/js/components/table.js":
/*!************************************!*
  !*** ./src/js/components/table.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Table
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");

class Table {
  constructor(classTable, nameTable) {
    this.classTable = classTable;
    this.nameTable = nameTable;
  }

  init() {
    var titleTable = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h3', '', this.nameTable);
    this.countCases = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('p', "".concat(this.classTable, "-count"));
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', this.classTable, [titleTable, this.countCases]);
  }

  setData(count) {
    this.countCases.textContent = Number(count).toLocaleString();
  }

}

/***/ }),

/***/ "./src/js/data/constants.js":
/*!**********************************!*
  !*** ./src/js/data/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "srcIconHeader": () => /* binding */ srcIconHeader,
/* harmony export */   "srcIconGitHub": () => /* binding */ srcIconGitHub,
/* harmony export */   "srcIconRss": () => /* binding */ srcIconRss,
/* harmony export */   "hrefGitHub": () => /* binding */ hrefGitHub,
/* harmony export */   "hrefRss": () => /* binding */ hrefRss,
/* harmony export */   "H1": () => /* binding */ H1,
/* harmony export */   "nameAuthor": () => /* binding */ nameAuthor,
/* harmony export */   "year": () => /* binding */ year,
/* harmony export */   "cases": () => /* binding */ cases,
/* harmony export */   "listName": () => /* binding */ listName,
/* harmony export */   "checkPeriod": () => /* binding */ checkPeriod,
/* harmony export */   "checkPopulation": () => /* binding */ checkPopulation,
/* harmony export */   "urlFlag": () => /* binding */ urlFlag,
/* harmony export */   "sizeFlag": () => /* binding */ sizeFlag
/* harmony export */ });
var srcIconHeader = 'https://img.icons8.com/color/48/000000/coronavirus--v2.png';
var srcIconGitHub = 'https://image.flaticon.com/icons/png/512/25/25231.png';
var srcIconRss = 'https://rs.school/images/rs_school_js.svg';
var hrefGitHub = 'https://github.com/Kkasya';
var hrefRss = 'https://rs.school/js/';
var H1 = 'COVID-19 Dashboard';
var nameAuthor = 'Anastassia Kozlovskaya';
var year = '2020';
var cases = ['Total cases', 'Total deaths', 'Total recovered'];
var listName = 'Sort by';
var checkPeriod = 'period';
var checkPopulation = 'population';
var urlFlag = 'https://www.countryflags.io/';
var sizeFlag = '/shiny/64.png';


/***/ }),

/***/ "./src/js/data/listCountries.js":
/*!**************************************!*
  !*** ./src/js/data/listCountries.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var countries = {
  Afghanistan: 'AF',
  'Aland Islands': 'AX',
  Albania: 'AL',
  ALGERIA: 'DZ',
  'AMERICAN SAMOA': 'AS',
  ANDORRA: 'AD',
  ANGOLA: 'AO',
  ANGUILLA: 'AI',
  ANTARCTICA: 'AQ',
  'ANTIGUA AND BARBUDA': 'AG',
  ARGENTINA: 'AR',
  ARMENIA: 'AM',
  ARUBA: 'AW',
  AUSTRALIA: 'AU',
  AUSTRIA: 'AT',
  AZERBAIJAN: 'AZ',
  BAHAMAS: 'BS',
  BAHRAIN: 'BH',
  BANGLADESH: 'BD',
  BARBADOS: 'BB',
  BELARUS: 'BY',
  BELGIUM: 'BE',
  BELIZE: 'BZ',
  BENIN: 'BJ',
  BERMUDA: 'BM',
  BHUTAN: 'BT',
  BOLIVIA: 'BO',
  BOSNIA: 'BA',
  BOTSWANA: 'BW',
  'BOUVET ISLAND': 'BV',
  BRAZIL: 'BR',
  'BRITISH INDIAN OCEAN TERRITORY': 'IO',
  'BRUNEI DARUSSALAM': 'BN',
  BULGARIA: 'BG',
  'BURKINA FASO': 'BF',
  BURUNDI: 'BI',
  CAMBODIA: 'KH',
  CAMEROON: 'CM',
  CANADA: 'CA',
  'CAPE VERDE': 'CV',
  'CAYMAN ISLANDS': 'KY',
  'CENTRAL AFRICAN REPUBLIC': 'CF',
  CHAD: 'TD',
  CHILE: 'CL',
  CHINA: 'CN',
  'CHRISTMAS ISLAND': 'CX',
  'COCOS ISLANDS': 'CC',
  COLOMBIA: 'CO',
  COMOROS: 'KM',
  CONGO: 'CD',
  'COOK ISLANDS': 'CK',
  'COSTA RICA': 'CR',
  CROATIA: 'HR',
  CUBA: 'CU',
  CYPRUS: 'CY',
  'CZECH REPUBLIC': 'CZ',
  DENMARK: 'DK',
  DJIBOUTI: 'DJ',
  DOMINICA: 'DM',
  'DOMINICAN REPUBLIC': 'DO',
  ECUADOR: 'EC',
  EGYPT: 'EG',
  'EL SALVADOR': 'SV',
  'EQUATORIAL GUINEA': 'GQ',
  ERITREA: 'ER',
  ESTONIA: 'EE',
  ETHIOPIA: 'ET',
  'FALKLAND ISLANDS (MALVINAS)': 'FK',
  'FAROE ISLANDS': 'FO',
  FIJI: 'FJ',
  FINLAND: 'FI',
  FRANCE: 'FR',
  'FRENCH GUIANA': 'GF',
  'FRENCH POLYNESIA': 'PF',
  'FRENCH SOUTHERN TERRITORIES': 'TF',
  GABON: 'GA',
  GAMBIA: 'GM',
  GEORGIA: 'GE',
  GERMANY: 'DE',
  GHANA: 'GH',
  GIBRALTAR: 'GI',
  GREECE: 'GR',
  GREENLAND: 'GL',
  GRENADA: 'GD',
  GUADELOUPE: 'GP',
  GUAM: 'GU',
  GUATEMALA: 'GT',
  GUERNSEY: 'GG',
  GUINEA: 'GN',
  'GUINEA-BISSAU': 'GW',
  GUYANA: 'GY',
  HAITI: 'HT',
  HONDURAS: 'HN',
  'HONG KONG': 'HK',
  HUNGARY: 'HU',
  ICELAND: 'IS',
  INDIA: 'IN',
  INDONESIA: 'ID',
  IRAN: 'IR',
  IRAQ: 'IQ',
  IRELAND: 'IE',
  'ISLE OF MAN': 'IM',
  ISRAEL: 'IL',
  ITALY: 'IT',
  JAMAICA: 'JM',
  JAPAN: 'JP',
  JERSEY: 'JE',
  JORDAN: 'JO',
  KAZAKHSTAN: 'KZ',
  KENYA: 'KE',
  KIRIBATI: 'KI',
  KOREA: 'KR',
  KUWAIT: 'KW',
  KYRGYZSTAN: 'KG',
  LAO: 'LA',
  LATVIA: 'LV',
  LEBANON: 'LB',
  LESOTHO: 'LS',
  LIBERIA: 'LR',
  'LIBYAN ARAB JAMAHIRIYA': 'LY',
  LIECHTENSTEIN: 'LI',
  LITHUANIA: 'LT',
  LUXEMBOURG: 'LU',
  MACAO: 'MO',
  MACEDONIA: 'MK',
  MADAGASCAR: 'MG',
  MALAWI: 'MW',
  MALAYSIA: 'MY',
  MALDIVES: 'MV',
  MALI: 'ML',
  MALTA: 'MT',
  'MARSHALL ISLANDS': 'MH',
  MARTINIQUE: 'MQ',
  MAURITANIA: 'MR',
  MAURITIUS: 'MU',
  MAYOTTE: 'YT',
  MEXICO: 'MX',
  MICRONESIA: 'FM',
  MOLDOVA: 'MD',
  MONACO: 'MC',
  MONGOLIA: 'MN',
  MONTENEGRO: 'ME',
  MONTSERRAT: 'MS',
  MOROCCO: 'MA',
  MOZAMBIQUE: 'MZ',
  MYANMAR: 'MM',
  NAMIBIA: 'NA',
  NAURU: 'NR',
  NEPAL: 'NP',
  NETHERLANDS: 'NL',
  'NEW CALEDONIA': 'NC',
  'NEW ZEALAND': 'NZ',
  NICARAGUA: 'NI',
  NIGER: 'NE',
  NIGERIA: 'NG',
  NIUE: 'NU',
  'NORFOLK ISLAND': 'NF',
  'NORTHERN MARIANA ISLANDS': 'MP',
  NORWAY: 'NO',
  OMAN: 'OM',
  PAKISTAN: 'PK',
  PALAU: 'PW',
  'PALESTINIAN TERRITORY': 'PS',
  PANAMA: 'PA',
  'PAPUA NEW GUINEA': 'PG',
  PARAGUAY: 'PY',
  PERU: 'PE',
  PHILIPPINES: 'PH',
  PITCAIRN: 'PN',
  POLAND: 'PL',
  PORTUGAL: 'PT',
  'PUERTO RICO': 'PR',
  QATAR: 'QA',
  ROMANIA: 'RO',
  'RUSSIAN FEDERATION': 'RU',
  RWANDA: 'RW',
  'SAINT LUCIA': 'LC',
  'SAINT MARTIN': 'MF',
  SAMOA: 'WS',
  'SAN MARINO': 'SM',
  'SAO TOME AND PRINCIPE': 'ST',
  'SAUDI ARABIA': 'SA',
  SENEGAL: 'SN',
  SERBIA: 'RS',
  SEYCHELLES: 'SC',
  'SIERRA LEONE': 'SL',
  SINGAPORE: 'SG',
  SLOVAKIA: 'SK',
  SLOVENIA: 'SI',
  'SOLOMON ISLANDS': 'SB',
  SOMALIA: 'SO',
  'SOUTH AFRICA': 'ZA',
  SPAIN: 'ES',
  'SRI LANKA': 'LK',
  SUDAN: 'SD',
  SURINAME: 'SR',
  'SVALBARD AND JAN MAYEN': 'SJ',
  SWAZILAND: 'SZ',
  SWEDEN: 'SE',
  SWITZERLAND: 'CH',
  'SYRIAN ARAB REPUBLIC': 'SY',
  TAIWAN: 'TW',
  TAJIKISTAN: 'TJ',
  TANZANIA: 'TZ',
  THAILAND: 'TH',
  'TIMOR-LESTE': 'TL',
  TOGO: 'TG',
  TOKELAU: 'TK',
  TONGA: 'TO',
  'TRINIDAD AND TOBAGO': 'TT',
  TUNISIA: 'TN',
  TURKEY: 'TR',
  TURKMENISTAN: 'TM',
  TUVALU: 'TV',
  UGANDA: 'UG',
  UKRAINE: 'UA',
  'UNITED ARAB EMIRATES': 'AE',
  'UNITED KINGDOM': 'GB',
  'UNITED STATES': 'US',
  URUGUAY: 'UY',
  UZBEKISTAN: 'UZ',
  VANUATU: 'VU',
  VENEZUELA: 'VE',
  'VIET NAM': 'VN',
  'VIRGIN ISLANDS, BRITISH': 'VG',
  'VIRGIN ISLANDS, US': 'VI',
  'WALLIS AND FUTUNA': 'WF',
  'WESTERN SAHARA': 'EH',
  YEMEN: 'YE',
  ZAMBIA: 'ZM',
  ZIMBABWE: 'ZW'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);

/***/ }),

/***/ "./src/js/layouts/app.js":
/*!*******************************!*
  !*** ./src/js/layouts/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ App
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/js/layouts/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/js/layouts/footer.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/js/layouts/main.js");




class App {
  init() {
    this.header = new _header__WEBPACK_IMPORTED_MODULE_1__.default().init();
    this.main = new _main__WEBPACK_IMPORTED_MODULE_3__.default().init();
    this.footer = new _footer__WEBPACK_IMPORTED_MODULE_2__.default().init();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', [this.header, this.main, this.footer]);
  }

}

/***/ }),

/***/ "./src/js/layouts/footer.js":
/*!**********************************!*
  !*** ./src/js/layouts/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Footer
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");


class Footer {
  init() {
    this.footerInfo = this.createInfoAuthor();
    this.footerYear = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'footer__year', _data_constants__WEBPACK_IMPORTED_MODULE_1__.year);
    this.footerCourse = this.createCourse();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer', [this.footerInfo, this.footerYear, this.footerCourse]);
  }

  createInfoAuthor() {
    this.infoAuthor = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'footer__author', _data_constants__WEBPACK_IMPORTED_MODULE_1__.nameAuthor);
    this.footerImgGit = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'footer__link-img', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconGitHub]);
    this.footerAuthor = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('a', 'footer__link', [this.infoAuthor, this.footerImgGit], null, ['href', _data_constants__WEBPACK_IMPORTED_MODULE_1__.hrefGitHub], ['target', '_blank']);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'info', this.footerAuthor);
  }

  createCourse() {
    this.footerImgRss = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'footer__link-img_rsschool', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconRss]);
    this.footerRss = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('a', 'footer__link', this.footerImgRss, null, ['href', _data_constants__WEBPACK_IMPORTED_MODULE_1__.hrefRss], ['target', '_blank']);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer__course', this.footerRss);
  }

}

/***/ }),

/***/ "./src/js/layouts/header.js":
/*!**********************************!*
  !*** ./src/js/layouts/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Header
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");


class Header {
  init() {
    this.imgTitle = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconHeader]);
    this.H1 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', _data_constants__WEBPACK_IMPORTED_MODULE_1__.H1);
    this.titleHeader = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'title', [this.imgTitle, this.H1]);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', this.titleHeader);
  }

}

/***/ }),

/***/ "./src/js/layouts/main.js":
/*!********************************!*
  !*** ./src/js/layouts/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Main
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search */ "./src/js/components/search.js");
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard */ "./src/js/components/dashboard.js");




class Main {
  init() {
    this.searchList = new _components_search__WEBPACK_IMPORTED_MODULE_2__.default(_data_constants__WEBPACK_IMPORTED_MODULE_1__.cases[0]).init();
    this.dashboard = new _components_dashboard__WEBPACK_IMPORTED_MODULE_3__.default().init();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'main', [this.searchList, this.dashboard]);
  }

}

/***/ }),

/***/ "./src/js/utils/createElement.js":
/*!***************************************!*
  !*** ./src/js/utils/createElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ create
/* harmony export */ });
function create(elem, classes, childs, parent) {
  var element = null;

  try {
    element = document.createElement(elem);
  } catch (error) {
    throw new Error('Unable to create HTMLElement');
  }

  if (classes) {
    element.classList.add(...classes.split(' '));
  }

  if (childs && Array.isArray(childs)) {
    childs.forEach(child => {
      child && element.appendChild(child);
    });
  } else if (childs && typeof childs === 'object') {
    element.appendChild(childs);
  } else if (childs && typeof childs === 'string') {
    element.innerHTML = childs;
  }

  if (parent) {
    parent.appendChild(element);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach((_ref) => {
      var [attrName, attrValue] = _ref;
      return element.setAttribute(attrName, attrValue);
    });
  }

  return element;
}

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=script.js.map