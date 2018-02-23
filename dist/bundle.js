/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stringParse__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ari__ = __webpack_require__(2);



const content = 'Cat ipsum dolor sit amet, cereal boxes make for five star accommodation roll over and sun my belly. Leave dead animals as gifts russian blue, sleep catch mouse and gave it as a present. Eat owner\'s food. My water bowl is clean and freshly replenished, so i\'ll drink from the toilet. Eat half my food and ask for more. Use lap as chair.';

const parsedSentence = Object(__WEBPACK_IMPORTED_MODULE_0__stringParse__["a" /* default */])(content);

const ariCheck = Object(__WEBPACK_IMPORTED_MODULE_1__ari__["a" /* default */])(parsedSentence);

console.log(ariCheck);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stringParse;
function stringParse(content) {
  const data = {};

  // sentence count
  data.sentence = content.split('.').length

  data.word = content.trim().replace(/\s+/gi, ' ').split(' ').length;

  data.character = content.trim().replace(/[^\w]/gi, '').length;

  return data;

}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ari;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_automated_readability__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_automated_readability___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_automated_readability__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consts__ = __webpack_require__(4);



function ari(parsedString) {

  const ari = Math.round(__WEBPACK_IMPORTED_MODULE_0_automated_readability___default()(parsedString));

  const valKeys = Object.keys(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* ARI_VALS */]);
  let currentDiff, smallestDiff = Math.abs(ari - valKeys[0]), closest = 0;

  for (let i = 0; i < valKeys.length; i++) {
    currentDiff = Math.abs(ari - valKeys[i]);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closest = i;
    }
  }

  return __WEBPACK_IMPORTED_MODULE_1__consts__["a" /* ARI_VALS */][valKeys[closest]];
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = automatedReadability;

var CHARACTER_WEIGHT = 4.71;
var SENTENCE_WEIGHT = 0.5;
var BASE = 21.43;

function automatedReadability(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.character) {
    return NaN;
  }

  return (CHARACTER_WEIGHT * (counts.character / counts.word)) +
    (SENTENCE_WEIGHT * (counts.word / counts.sentence)) -
    BASE;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ARI_VALS = {
  90: 'Very Easy',
  80: 'Easy',
  70: 'Fairly Easy',
  60: 'Standard',
  50: 'Fairly Difficult',
  30: 'Difficult',
  0: 'Very Confusing',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ARI_VALS;


/***/ })
/******/ ]);