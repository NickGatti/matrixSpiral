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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

if (document.getElementById('matrix').innerHTML.search('PHP OUTPUT') !== -1) {
    runFn();
}

function runFn() {
    var ref = document.querySelector('#matrix').children;
    var newArray = [];
    var counter = 1;
    var length = ref.length;
    for (var i = 0; i < length; i++) {
        newArray[i] = [];
        for (var j = 0; j < length; j++) {
            newArray[i][j] = counter;
            counter += 1;
        }
    }
    doWork(newArray, doMap(newArray));
}

function doMap(container) {
    return container.map(function (c) {
        return c.slice();
    });
}

function doWork(container, original) {
    var newSnail = new Array();
    do {

        container.length ? newSnail.splice.apply(newSnail, [newSnail.length, 1].concat(_toConsumableArray(container.shift()))) : '';

        for (var i = 0; i <= container.length - 1; i++) {
            container[i] ? newSnail.splice(newSnail.length, 1, container[i].pop()) : '';
        }

        container.length ? newSnail.splice.apply(newSnail, [newSnail.length, 1].concat(_toConsumableArray(container.pop().reverse()))) : '';

        for (var _i = container.length; _i >= 0; _i--) {
            container[_i] ? newSnail.splice(newSnail.length, 1, container[_i].shift()) : '';
        }
    } while (container.length);

    document.getElementById("original").innerHTML = 'Original:&nbsp ' + original;
    document.getElementById("answer").innerHTML = 'Answer:&nbsp&nbsp ' + newSnail;

    for (var _i2 = 0; _i2 < newSnail.length; _i2++) {
        setTimeout(function (i) {
            return function () {
                document.querySelectorAll('.cell')[newSnail[i] - 1].style.background = 'pink';
            };
        }(_i2), _i2 * 80);
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

console.log('School examples loaded'); /*
                                       
                                       import './array.js';
                                       import './class.js';
                                       import './conditions.js';
                                       import './function.js';
                                       import './loop.js';
                                       import './objects.js';
                                       import './recursiveFn.js';
                                       import './es6ClassSyntax.js';
                                       import './fizzbuzz.js';
                                       import './beancount.js';
                                       import './whilesnail.js';
                                       
                                       */

/***/ })
/******/ ]);