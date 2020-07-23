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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('JS is working ... '); //index.html

var system_img_first = document.getElementById('system_img_first');
var links_img = document.querySelectorAll('.links_img');
var links_img_second = document.querySelectorAll('.links_img_second');
var system_img_second = document.getElementById('system_img_second');
var system_name_first = document.getElementById('system_name_first');
var system_name_second = document.getElementById('system_name_second'); //letter send form

var btn_back = document.getElementById('btn_back');
var order_id = document.getElementById('order_id'); //money form

var first_field = document.getElementById('first_field'),
    second_field = document.getElementById('second_field'),
    coefficient_one = 0.95,
    coefficient_two = 1.05;

if (first_field) {
  first_field.addEventListener('input', function () {
    if (first_field.value >= 100) {
      second_field.value = (first_field.value * coefficient_one).toFixed(1);
    } else {
      second_field.value = 0;
    }
  });
}

if (second_field) {
  second_field.addEventListener('input', function () {
    if (second_field.value >= 100) {
      first_field.value = (second_field.value * coefficient_two).toFixed(1);
    } else {
      first_field.value = 0;
    }
  });
}

if (btn_back) {
  btn_back.addEventListener('click', function () {
    document.getElementById('fields_id').style.display = null;
    document.getElementById('text_main_block').style.display = null;
    document.getElementById('number_form').style.display = 'none';
    console.log('click');
  });
} // system_img_first.addEventListener('click', ()=>{
//     document.getElementById("dropdown-content").style.display = "block";
// })


links_img.forEach(function (item) {
  item.addEventListener('click', function () {
    var DB_img = system_img_first.src;
    system_name_first.value = item.name;
    system_img_first.src = item.src;
    item.src = DB_img;
  });
});
links_img_second.forEach(function (item) {
  item.addEventListener('click', function () {
    var DB_img = system_img_second.src;
    system_name_second.value = item.name;
    system_img_second.src = item.src;
    item.src = DB_img;
  });
});

if (order_id) {
  order_id.value = Date.now();
}

/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script */ "./js/script.js");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map