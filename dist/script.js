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
/* harmony import */ var _js_utils_getAsyncDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/utils/getAsyncDate */ "./src/js/utils/getAsyncDate.js");



(0,_js_utils_getAsyncDate__WEBPACK_IMPORTED_MODULE_2__.default)();
setTimeout(() => {
  var application = (0,_js_layouts_app__WEBPACK_IMPORTED_MODULE_1__.default)();
  document.body.appendChild(application);
}, 1500);

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
    var inputCkbx = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('input', 'inputCkbx', null, null, ['type', 'checkbox'], ['id', "ckbx_".concat(this.classCkbx)], ['value', '0'], ['name', "ckbx_".concat(this.classCkbx)]);
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
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./src/js/components/list.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map */ "./src/js/components/map.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







class Dashboard {
  constructor() {
    this.countryForData = _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
    this.period = _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
    this.population = _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
  }

  init(searchList) {
    this.list = searchList.list;
    this.optionList = searchList.option;
    this.dataCases = this.createDataCases();
    this.mapCovid = new _map__WEBPACK_IMPORTED_MODULE_5__.default();
    var mapHtml = this.mapCovid.init();
    this.setDataForList(this.optionList);
    this.defineOptions();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'dashboard', [this.dataCases, mapHtml]);
  }

  createDataCases() {
    this.totalCases = new _table__WEBPACK_IMPORTED_MODULE_1__.default('cases', _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[0]);
    var totalCasesHtml = this.totalCases.init();
    this.totalDeath = new _table__WEBPACK_IMPORTED_MODULE_1__.default('death', _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[1]);
    var totalDeathHtml = this.totalDeath.init();
    this.totalRecovered = new _table__WEBPACK_IMPORTED_MODULE_1__.default('recovery', _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[2]);
    var totalRecoveredHtml = this.totalRecovered.init();
    var ckbxPeriod = new _checkbox__WEBPACK_IMPORTED_MODULE_3__.default(_data_constants__WEBPACK_IMPORTED_MODULE_2__.checkPeriod).init();
    ckbxPeriod.addEventListener('click', e => this.choosePeriod(e));
    var ckbxPopulation = new _checkbox__WEBPACK_IMPORTED_MODULE_3__.default(_data_constants__WEBPACK_IMPORTED_MODULE_2__.checkPopulation).init();
    ckbxPopulation.addEventListener('click', e => this.choosePopulation(e));
    var checkbox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'options', [ckbxPeriod, ckbxPopulation]);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'infoData', [totalCasesHtml, totalDeathHtml, totalRecoveredHtml, checkbox]);
  }

  defineOptions() {
    var endUrl;
    if (this.countryForData === _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll) endUrl = _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;else {
      var idCountry = _list__WEBPACK_IMPORTED_MODULE_4__.default.getIdCountry(this.countryForData);
      endUrl = idCountry;
    }
    this.setData(endUrl);
  }

  defineData(data) {
    //  console.log(data);
    var dataOption = {};

    if (this.population === _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll) {
      if (this.period === _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll) dataOption = data.allPeriod;else dataOption = data.today;
    } else if (this.period === _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll) dataOption = data.allPeriodPerThou;else dataOption = data.todayPerThou;

    return dataOption;
  }

  setCountry(countryLi) {
    this.countryForData = countryLi.children[1].innerText;
    Dashboard.changeClass(countryLi, 'selected');
    this.defineOptions();
  }

  changeData(endUrl, dataOption) {
    this.totalCases.setData(dataOption.cases);
    this.totalDeath.setData(dataOption.deaths);
    this.totalRecovered.setData(dataOption.recovered);
  }

  setData(endUrl, optionList, countCases) {
    var dataOption = this.defineData(_data_constants__WEBPACK_IMPORTED_MODULE_2__.arrayDataCountries[endUrl]);

    if (optionList) {
      Dashboard.defineCountCases(optionList, dataOption, countCases);
    } else this.changeData(endUrl, dataOption);
  }

  setDataForList(optionList) {
    var list = this.list.children;
    Object.values(list).forEach(value => {
      var countryForData = value.children[1].innerText;
      var idCountry = _list__WEBPACK_IMPORTED_MODULE_4__.default.getIdCountry(countryForData);
      var countCases = value.children[0];
      this.setData(idCountry, optionList, countCases);
    });
    setTimeout(() => {
      var sortedList = this.sortData();
      var listUl = document.querySelector('.list');
      listUl.removeChild(listUl.lastChild);
      listUl.appendChild((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('ul', '', sortedList));
    }, 0);
  }

  static defineCountCases(optionList, dataOption, count) {
    var countCases = count;
    if (optionList === _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[0]) countCases.innerText = dataOption.cases;
    if (optionList === _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[1]) countCases.innerText = dataOption.deaths;
    if (optionList === _data_constants__WEBPACK_IMPORTED_MODULE_2__.cases[2]) countCases.innerText = dataOption.recovered;
  }

  static getData(endUrl) {
    return _asyncToGenerator(function* () {
      var url = "".concat(_data_constants__WEBPACK_IMPORTED_MODULE_2__.urlCases).concat(endUrl);
      var res = yield fetch(url);
      var data = yield res.json();
      return data;
    })();
  }

  choosePeriod(e) {
    var isInputCheckbos = e.target.classList.contains('inputCkbx');

    if (isInputCheckbos) {
      var isPeriodForAll = this.period === _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
      this.period = isPeriodForAll ? _data_constants__WEBPACK_IMPORTED_MODULE_2__.forToday : _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
      this.setNewList();
      this.defineOptions();
      setTimeout(() => this.mapCovid.changeMarker(this.period, this.population), 0);
    }
  }

  choosePopulation(e) {
    var isInputCheckbos = e.target.classList.contains('inputCkbx');

    if (isInputCheckbos) {
      var isPopulationForAll = this.population === _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
      this.population = isPopulationForAll ? _data_constants__WEBPACK_IMPORTED_MODULE_2__.forPer : _data_constants__WEBPACK_IMPORTED_MODULE_2__.forAll;
      this.setNewList();
      this.defineOptions();
      setTimeout(() => this.mapCovid.changeMarker(this.period, this.population), 0);
    }
  }

  setOption(option) {
    this.optionList = option;
    this.setNewList();
    this.defineOptions();
  }

  setNewList() {
    this.list = document.querySelector('ul');
    this.setDataForList(this.optionList);
  }

  sortData() {
    function compareLi(a, b) {
      var countA = Number(a.children[0].innerText);
      var countB = Number(b.children[0].innerText);
      if (countA > countB) return -1;
      if (countA < countB) return 1;
      return 0;
    }

    return Object.values(this.list.children).sort(compareLi);
  }

  static searchInList() {
    var input = document.querySelector('.list__search');
    var filter = input.value.toUpperCase();
    var ul = document.querySelector('ul');
    var li = ul.children;

    for (var i = 0; i < li.length; i++) {
      var nameCountry = li[i].children[1];

      if (nameCountry.innerText.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else li[i].style.display = 'none';
    }
  }

  static changeClass(item, classNew) {
    var selectedLi = document.querySelector(".".concat(classNew));
    if (selectedLi && selectedLi !== item) selectedLi.classList.remove(classNew);
    item.classList.add(classNew);
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
  constructor(option) {
    this.option = option;
  }

  init() {
    this.list = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('ul', '', List.createItemList());
    return this.list;
  }

  static createItemList() {
    var arrayListItems = [];
    Object.entries(_data_listCountries__WEBPACK_IMPORTED_MODULE_2__.default).forEach((_ref) => {
      var [key, value] = _ref;
      var dataCases = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'count');
      var countryName = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', key);
      var urlFlag = "".concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__.urlFlag).concat(value).concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__.sizeFlag);
      var countryFlag = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'countryFlag', null, null, ['src', urlFlag]);
      var country = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('li', 'countryLi', [dataCases, countryName, countryFlag]);
      arrayListItems.push(country);
    });
    return arrayListItems;
  }

  static getIdCountry(name) {
    return _data_listCountries__WEBPACK_IMPORTED_MODULE_2__.default[name];
  }

}

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Map
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");


class Map {
  init() {
    this.container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div');
    this.container.id = 'map';
    var wrapperContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'container', this.container);
    this.period = _data_constants__WEBPACK_IMPORTED_MODULE_1__.forAll;
    this.population = _data_constants__WEBPACK_IMPORTED_MODULE_1__.forAll;
    setTimeout(() => this.createLayer(), 1000);
    setTimeout(() => {
      this.addMarkers();
    }, 1500);
    return wrapperContainer;
  }

  addMarkers() {
    this.markers = [];
    Object.keys(_data_constants__WEBPACK_IMPORTED_MODULE_1__.arrayDataCountries).forEach(key => {
      if (key !== _data_constants__WEBPACK_IMPORTED_MODULE_1__.forAll) {
        var lat = Number(_data_constants__WEBPACK_IMPORTED_MODULE_1__.arrayDataCountries[key].countryInfo.lat);
        var long = Number(_data_constants__WEBPACK_IMPORTED_MODULE_1__.arrayDataCountries[key].countryInfo.long);
        var nameCountry = _data_constants__WEBPACK_IMPORTED_MODULE_1__.arrayDataCountries[key].countryInfo.country;
        var markerOptions = {
          icon: this.createIcon(key),
          title: "".concat(nameCountry, "\nCases: ").concat(this.cases.toLocaleString())
        };
        var marker = new L.Marker([lat, long], markerOptions);
        this.markers.push(marker);
        marker.bindPopup("".concat(nameCountry, "\n                        <br> Cases: ").concat(this.cases.toLocaleString())).openPopup();
        marker.addTo(this.map);
      }
    });
  }

  createLayer() {
    var mapOptions = {
      center: [0, 0],
      zoom: 2
    };
    this.map = new L.map('map', mapOptions);
    L.tileLayer(_data_constants__WEBPACK_IMPORTED_MODULE_1__.srcTypeMap, {
      maxZoom: 20,
      noWrap: true,
      minZoom: 2
    }).addTo(this.map);
  }

  createIcon(key) {
    var data = this.defineData();
    this.cases = _data_constants__WEBPACK_IMPORTED_MODULE_1__.arrayDataCountries[key][data].cases;
    var maxCases = Number(document.querySelector('ul').children[0].children[0].innerText);
    var relativeValue = this.cases / maxCases;
    var sizeIcon;
    Object.entries(_data_constants__WEBPACK_IMPORTED_MODULE_1__.range).forEach((_ref) => {
      var [keyRange, value] = _ref;
      if (relativeValue > value) sizeIcon = "".concat(_data_constants__WEBPACK_IMPORTED_MODULE_1__.rangeSize[keyRange]);
    });
    var iconOptions = {
      iconUrl: _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconMarker,
      iconSize: [sizeIcon, sizeIcon]
    };
    return L.icon(iconOptions);
  }

  changeMarker(period, population) {
    this.period = period;
    this.population = population;
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.addMarkers();
  }

  defineData() {
    var data;

    if (this.population === _data_constants__WEBPACK_IMPORTED_MODULE_1__.forAll) {
      if (this.period === _data_constants__WEBPACK_IMPORTED_MODULE_1__.forAll) data = 'allPeriod';else data = 'today';
    } else if (this.period === _data_constants__WEBPACK_IMPORTED_MODULE_1__.forAll) data = 'allPeriodPerThou';else data = 'todayPerThou';

    return data;
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
    var titleList = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h2', '', _data_constants__WEBPACK_IMPORTED_MODULE_1__.listName);
    var listOption = this.createOption();
    var searchCountry = SearchList.createSearchCountry();
    this.list = new _list__WEBPACK_IMPORTED_MODULE_2__.default(this.option).init();
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'list', [titleList, listOption, searchCountry, this.list]);
  }

  createOption() {
    var arrowRightI = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('i', 'arrow right');
    var arrowRight = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__option__arrow', arrowRightI);
    var arrowLeftI = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('i', 'arrow left');
    var arrowLeft = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__option__arrow', arrowLeftI);
    this.optionName = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h3', '', this.option);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'list__option', [arrowLeft, this.optionName, arrowRight]);
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
    return this.option;
  }

  static createSearchCountry() {
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('input', 'list__search', null, null, ['placeholder', 'Search..'], ['type', 'text']);
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
/* harmony export */   "sizeFlag": () => /* binding */ sizeFlag,
/* harmony export */   "forAll": () => /* binding */ forAll,
/* harmony export */   "urlCases": () => /* binding */ urlCases,
/* harmony export */   "forToday": () => /* binding */ forToday,
/* harmony export */   "forPer": () => /* binding */ forPer,
/* harmony export */   "days": () => /* binding */ days,
/* harmony export */   "months": () => /* binding */ months,
/* harmony export */   "arrayDataCountries": () => /* binding */ arrayDataCountries,
/* harmony export */   "srcIconMarker": () => /* binding */ srcIconMarker,
/* harmony export */   "range": () => /* binding */ range,
/* harmony export */   "rangeSize": () => /* binding */ rangeSize,
/* harmony export */   "srcTypeMap": () => /* binding */ srcTypeMap
/* harmony export */ });
var srcIconHeader = 'https://img.icons8.com/color/48/000000/coronavirus--v2.png';
var srcIconGitHub = 'https://image.flaticon.com/icons/png/512/25/25231.png';
var srcIconRss = 'https://rs.school/images/rs_school_js.svg';
var srcIconMarker = 'https://www.flaticon.com/svg/static/icons/svg/594/594739.svg';
var srcTypeMap = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}';
var hrefGitHub = 'https://github.com/Kkasya';
var hrefRss = 'https://rs.school/js/';
var H1 = 'COVID-19 Dashboard';
var nameAuthor = 'Anastassia Kozlovskaya';
var year = '2020';
var cases = ['Total cases', 'Total deaths', 'Total recovered'];
var listName = 'Sort by';
var checkPeriod = 'period';
var checkPopulation = 'population';
var forAll = 'all';
var forToday = 'today';
var forPer = 100000;
var urlFlag = 'https://www.countryflags.io/';
var sizeFlag = '/shiny/64.png';
var urlCases = 'https://disease.sh/v3/covid-19/';
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var arrayDataCountries = {};
var range = {
  low: 0,
  middle: 0.1,
  height: 0.4
};
var rangeSize = {
  low: 8,
  middle: 15,
  height: 20
};


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
  Albania: 'AL',
  Algeria: 'DZ',
  Andorra: 'AD',
  Angola: 'AO',
  Anguilla: 'AI',
  'Antigua and Barbuda': 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  Bosnia: 'BA',
  Botswana: 'BW',
  Brazil: 'BR',
  'Brunei Darussalam': 'BN',
  Bulgaria: 'BG',
  'Burkina Faso': 'BF',
  Burundi: 'BI',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  'Cape Verde': 'CV',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  Colombia: 'CO',
  Comoros: 'KM',
  Congo: 'CD',
  'Costa Rica': 'CR',
  Croatia: 'HR',
  Cuba: 'CU',
  Cyprus: 'CY',
  'Czech Republic': 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  'Dominican Republic': 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  'EL Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  Eritrea: 'ER',
  Estonia: 'EE',
  Ethiopia: 'ET',
  'Falkland Islands': 'FK',
  'Faroe Islands': 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  Gabon: 'GA',
  Gambia: 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guadeloupe: 'GP',
  Guatemala: 'GT',
  Guinea: 'GN',
  'Guinea-Bissau': 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  Honduras: 'HN',
  'Hong Kong': 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  Iran: 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  'Isle of Man': 'IM',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  Korea: 'KR',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  Lao: 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  'Libyan Arab Jamahiriya': 'LY',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  Macedonia: 'MK',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  'Marshall Islands': 'MH',
  Martinique: 'MQ',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mayotte: 'YT',
  Mexico: 'MX',
  Moldova: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nepal: 'NP',
  Netherlands: 'NL',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  'Palestinian Territory': 'PS',
  Panama: 'PA',
  'Papua New Guinea': 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Poland: 'PL',
  Portugal: 'PT',
  Qatar: 'QA',
  Romania: 'RO',
  'Russian Federation': 'RU',
  Rwanda: 'RW',
  'Saint Lucia': 'LC',
  'Saint Martin': 'MF',
  Samoa: 'WS',
  'San marino': 'SM',
  'Sao Tome and Principe': 'ST',
  'Saudi Arabia': 'SA',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  'Sierra Leone': 'SL',
  Singapore: 'SG',
  Slovakia: 'SK',
  Slovenia: 'SI',
  'Solomon Islands': 'SB',
  Somalia: 'SO',
  'South Africa': 'ZA',
  Spain: 'ES',
  'Sri LANKA': 'LK',
  Sudan: 'SD',
  Suriname: 'SR',
  Swaziland: 'SZ',
  Sweden: 'SE',
  Switzerland: 'CH',
  'Syrian Arab Republic': 'SY',
  Taiwan: 'TW',
  Tajikistan: 'TJ',
  Tanzania: 'TZ',
  Thailand: 'TH',
  'Timor-Leste': 'TL',
  Togo: 'TG',
  'Trinidad and Tobago': 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Uganda: 'UG',
  Ukraine: 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  'United States': 'US',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  'Viet Nam': 'VN',
  'Wallis and Futuna': 'WF',
  'Western Sahara': 'EH',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW'
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
/* harmony export */   "default": () => /* binding */ createApp
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/js/layouts/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/js/layouts/footer.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/js/layouts/main.js");




function createApp() {
  var header = new _header__WEBPACK_IMPORTED_MODULE_1__.default().init();
  var main = new _main__WEBPACK_IMPORTED_MODULE_3__.default().init();
  var footer = new _footer__WEBPACK_IMPORTED_MODULE_2__.default().init();
  return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', [header, main, footer]);
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
    var imgTitle = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconHeader]);
    var H1 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', _data_constants__WEBPACK_IMPORTED_MODULE_1__.H1);
    this.day = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h2', 'day', this.showDay());
    this.showDay();
    var titleHeader = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'title', [imgTitle, H1]);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', [titleHeader, this.day]);
  }

  showDay() {
    var today = new Date();
    var numberOfDay = today.getDay();
    var numberOfMonth = today.getMonth();
    var date = today.getDate();
    var day = _data_constants__WEBPACK_IMPORTED_MODULE_1__.days[numberOfDay];
    var month = _data_constants__WEBPACK_IMPORTED_MODULE_1__.months[numberOfMonth];
    return "".concat(day, ", ").concat(date, " ").concat(month);
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
    this.searchList = new _components_search__WEBPACK_IMPORTED_MODULE_2__.default(_data_constants__WEBPACK_IMPORTED_MODULE_1__.cases[0]);
    var searchListHtml = this.searchList.init();
    this.dashboard = new _components_dashboard__WEBPACK_IMPORTED_MODULE_3__.default();
    var dashboardHtml = this.dashboard.init(this.searchList);
    searchListHtml.addEventListener('click', e => this.handle(e));
    searchListHtml.addEventListener('keyup', _components_dashboard__WEBPACK_IMPORTED_MODULE_3__.default.searchInList);
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'main', [searchListHtml, dashboardHtml]);
  }

  handle(e) {
    var isItemList = e.target.closest('.countryLi');
    var isArrow = e.target.classList.contains('arrow');

    if (isItemList) {
      var countryLi = e.target.closest('.countryLi');
      this.dashboard.setCountry(countryLi);
    } else if (isArrow) {
      var option = this.searchList.chooseOption(e);
      this.dashboard.setOption(option);
    }
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

/***/ "./src/js/utils/getAsyncDate.js":
/*!**************************************!*
  !*** ./src/js/utils/getAsyncDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createArrayCountries
/* harmony export */ });
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/constants */ "./src/js/data/constants.js");
/* harmony import */ var _data_listCountries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/listCountries */ "./src/js/data/listCountries.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator(function* (endUrl) {
    var url = "".concat(_data_constants__WEBPACK_IMPORTED_MODULE_0__.urlCases).concat(endUrl);
    var res = yield fetch(url);
    var data = yield res.json();
    return data;
  });
  return _getData.apply(this, arguments);
}

function setData(endUrl) {
  getData(endUrl).then(response => {
    //  console.log(response);
    var perThou = _data_constants__WEBPACK_IMPORTED_MODULE_0__.forPer / response.population;
    var id = endUrl === _data_constants__WEBPACK_IMPORTED_MODULE_0__.forAll ? _data_constants__WEBPACK_IMPORTED_MODULE_0__.forAll : response.countryInfo.iso2;
    _data_constants__WEBPACK_IMPORTED_MODULE_0__.arrayDataCountries[id] = {
      allPeriod: {
        cases: response.cases,
        deaths: response.deaths,
        recovered: response.recovered
      },
      today: {
        cases: response.todayCases,
        deaths: response.todayDeaths,
        recovered: response.todayRecovered
      },
      allPeriodPerThou: {
        cases: (response.cases * perThou).toFixed(2),
        deaths: (response.deaths * perThou).toFixed(2),
        recovered: (response.recovered * perThou).toFixed(2)
      },
      todayPerThou: {
        cases: (response.todayCases * perThou).toFixed(2),
        deaths: (response.todayDeaths * perThou).toFixed(2),
        recovered: (response.todayRecovered * perThou).toFixed(2)
      }
    };

    if (endUrl !== _data_constants__WEBPACK_IMPORTED_MODULE_0__.forAll) {
      _data_constants__WEBPACK_IMPORTED_MODULE_0__.arrayDataCountries[id].countryInfo = {
        country: response.country,
        flag: response.countryInfo.flag,
        lat: response.countryInfo.lat.toFixed(6),
        long: response.countryInfo.long.toFixed(6)
      };
    }
  });
}

function createArrayCountries() {
  Object.values(_data_listCountries__WEBPACK_IMPORTED_MODULE_1__.default).forEach(value => {
    var endUrl = "countries/".concat(value);
    setData(endUrl);
  });
  setData(_data_constants__WEBPACK_IMPORTED_MODULE_0__.forAll);
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