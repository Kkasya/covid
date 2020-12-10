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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var List = /*#__PURE__*/function () {
  function List(option) {
    _classCallCheck(this, List);

    this.option = option;
  }

  _createClass(List, [{
    key: "init",
    value: function init() {
      this.titleList = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h2', '', _data_constants__WEBPACK_IMPORTED_MODULE_1__.listName);
      this.listOption = this.createOption();
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'list', [this.titleList, this.listOption]);
    }
  }, {
    key: "createOption",
    value: function createOption() {
      var _this = this;

      this.arrowRightI = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('i', 'right');
      this.arrowRight = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__option__arrow', this.arrowRightI);
      this.arrowLeftI = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('i', 'left');
      this.arrowLeft = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'list__option__arrow', this.arrowLeftI);
      this.optionName = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h3', '', this.option);
      this.arrowRight.addEventListener('click', function (e) {
        return _this.chooseOption(e);
      });
      this.arrowLeft.addEventListener('click', function (e) {
        return _this.chooseOption(e);
      });
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'list__option', [this.arrowLeft, this.optionName, this.arrowRight]);
    }
  }, {
    key: "chooseOption",
    value: function chooseOption(e) {
      var isArrowRight = e.target.classList.contains('right');
      var cases = _data_constants__WEBPACK_IMPORTED_MODULE_1__.cases.concat();
      var index = cases.indexOf(this.option);
      var length = cases.length;

      if (isArrowRight) {
        var indRight = this.getIndRight(index + 1, length);
        this.option = cases[indRight];
      } else {
        var indLeft = this.getIndLeft(index - 1, length);
        this.option = cases[indLeft];
      }

      this.optionName.innerText = this.option;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getIndRight",
    value: function getIndRight(index, length) {
      var indRight = index;

      if (indRight >= length) {
        indRight = 0;
      }

      return indRight;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getIndLeft",
    value: function getIndLeft(index, length) {
      var indLeft = index;

      if (indLeft < 0) {
        indLeft = length - 1;
      }

      return indLeft;
    } //      getOption() {
    //         return this.listOption;
    // }

  }]);

  return List;
}();



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
/* harmony export */   "checkAll": () => /* binding */ checkAll,
/* harmony export */   "checkToday": () => /* binding */ checkToday,
/* harmony export */   "checkPopulation": () => /* binding */ checkPopulation,
/* harmony export */   "check100": () => /* binding */ check100
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
var checkAll = 'All period';
var checkToday = 'Today';
var checkPopulation = 'All population';
var check100 = 'Per 100 thou';


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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.header = new _header__WEBPACK_IMPORTED_MODULE_1__.default().init();
      this.main = new _main__WEBPACK_IMPORTED_MODULE_3__.default().init();
      this.footer = new _footer__WEBPACK_IMPORTED_MODULE_2__.default().init();
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', [this.header, this.main, this.footer]);
    }
  }]);

  return App;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
  }

  _createClass(Footer, [{
    key: "init",
    value: function init() {
      this.footerInfo = this.createInfoAuthor();
      this.footerYear = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'footer__year', _data_constants__WEBPACK_IMPORTED_MODULE_1__.year);
      this.footerCourse = this.createCourse();
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer', [this.footerInfo, this.footerYear, this.footerCourse]);
    }
  }, {
    key: "createInfoAuthor",
    value: function createInfoAuthor() {
      this.infoAuthor = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'footer__author', _data_constants__WEBPACK_IMPORTED_MODULE_1__.nameAuthor);
      this.footerImgGit = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'footer__link-img', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconGitHub]);
      this.footerAuthor = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('a', 'footer__link', [this.infoAuthor, this.footerImgGit], null, ['href', _data_constants__WEBPACK_IMPORTED_MODULE_1__.hrefGitHub], ['target', '_blank']);
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'info', this.footerAuthor);
    }
  }, {
    key: "createCourse",
    value: function createCourse() {
      this.footerImgRss = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'footer__link-img_rsschool', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconRss]);
      this.footerRss = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('a', 'footer__link', this.footerImgRss, null, ['href', _data_constants__WEBPACK_IMPORTED_MODULE_1__.hrefRss], ['target', '_blank']);
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer__course', this.footerRss);
    }
  }]);

  return Footer;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "init",
    value: function init() {
      this.imgTitle = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', _data_constants__WEBPACK_IMPORTED_MODULE_1__.srcIconHeader]);
      this.H1 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', _data_constants__WEBPACK_IMPORTED_MODULE_1__.H1);
      this.titleHeader = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'title', [this.imgTitle, this.H1]);
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', this.titleHeader);
    }
  }]);

  return Header;
}();



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
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/list */ "./src/js/components/list.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: "init",
    value: function init() {
      this.list = new _components_list__WEBPACK_IMPORTED_MODULE_2__.default(_data_constants__WEBPACK_IMPORTED_MODULE_1__.cases[0]).init();
      return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'main', this.list);
    }
  }]);

  return Main;
}();



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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create(elem, classes, childs, parent) {
  var element = null;

  try {
    element = document.createElement(elem);
  } catch (error) {
    throw new Error('Unable to create HTMLElement');
  }

  if (classes) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes.split(' ')));
  }

  if (childs && Array.isArray(childs)) {
    childs.forEach(function (child) {
      child && element.appendChild(child);
    });
  } else if (childs && _typeof(childs) === 'object') {
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
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

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