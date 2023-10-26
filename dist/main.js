/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    background: rgb(9,9,121);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B","sourcesContent":["html {\n    background: rgb(9,9,121);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextday: () => (/* binding */ nextday),
/* harmony export */   today: () => (/* binding */ today),
/* harmony export */   tomorrow: () => (/* binding */ tomorrow)
/* harmony export */ });
const today = {

    location : {
        city : null,
        region : null,
        country : null,

        get getCity() {
            return this.city
        },

        get getRegion() {
            return this.region
        },

        get getCountry() {
            return this.country
        },

        set setCity(newCity) {
            this.city = newCity
        },

        set setRegion(newRegion) {
            this.region = newRegion
        },

        set setCountry(newCountry) {
            this.country = newCountry
        }
    },

    date : null,

    get getDate() {
        return this.date
    },

    set setDate(newDate) {
        this.date = newDate
    },

    mainInfo : {
        icon : null,
        temperatureC : null,
        temperatureF : null,
        condition : null,
        highTempC : null,
        lowTempC : null,
        highTempF : null,
        lowTempF : null,
        feelsLikeC : null,
        feelsLikeF : null,

        get getIcon() {
            return this.icon
        },

        get getTemperatureC() {
            return this.temperatureC
        },

        get getTemperatureF() {
            return this.temperatureF
        },

        get getCondition() {
            return this.condition
        },

        get getHighTempC() {
            return this.highTempC
        },

        get getLowTempC() {
            return this.lowTempC
        },

        get getHighTempF() {
            return this.highTempF
        },

        get getLowTempF() {
            return this.lowTempF
        },

        get getFeelsLikeC() {
            return this.feelsLikeC
        },

        get getFeelsLikeF() {
            return this.feelsLikeF
        },

        set setIcon(newIcon) {
            this.icon = newIcon
        },

        set setTemperatureC(newTempC) {
            this.temperatureC = newTempC
        },

        set setTemperatureF(newTempF) {
            this.temperatureF = newTempF
        },

        set setCondition(newCondition) {
            this.condition = newCondition
        },

        set setHighTempC(newHighTempC) {
            this.highTempC = newHighTempC
        },

        set setLowTempC(newLowTempC) {
            this.lowTempC = newLowTempC
        },

        set setHighTempF(newHighTempF) {
            this.highTempF = newHighTempF
        },

        set setLowTempF(newLowTempF) {
            this.lowTempF = newLowTempF
        },

        set setFeelsLikeC(newFeelsLikeC) {
            this.feelsLikeC = newFeelsLikeC
        },

        set setFeelsLikeF(newFeelsLikeF) {
            this.feelsLikeF = newFeelsLikeF
        }

    },

    otherInfo : {
        windkph : null,
        windmph : null,
        precip : null,
        humidity : null,
        uvIndex : null,
        sunrise : null,
        sunset : null,

        get getWindKph() {
            return this.windkph
        },

        get getWindMph() {
            return this.windmph
        },

        get getPrecip() {
            return this.precip
        },

        get getHumidity() {
            return this.humidity
        },

        get getUvIndex() {
            return this.uvIndex
        },

        get getSunrise() {
            return this.sunrise
        },

        get getSunset() {
            return this.sunset
        },

        set setWindKph(newWindKph) {
            this.windkph = newWindKph
        },

        set setWindMph(newWindMph) {
            this.windmph = newWindMph
        },

        set setPrecip(newPrecip) {
            this.precip = newPrecip
        },

        set setHumidity(newHumidity) {
            this.humidity = newHumidity
        },

        set setUvIndex(newUvIndex) {
            this.uvIndex = newUvIndex
        },

        set setSunrise(newSunrise) {
            this.sunrise = newSunrise
        },

        set setSunset(newSunset) {
            this.sunset = newSunset
        }
    }
}

const tomorrow = {
    header : null,
    icon : null,
    highTempC : null,
    lowTempC : null,
    highTempF : null,
    lowTempF : null,
    precip : null,

    get getHeader() {
        return this.header
    },

    get getIcon() {
        return this.icon
    },

    get getHighTempC() {
        return this.highTempC
    },

    get getLowTempC() {
        return this.lowTempC
    },

    get getHighTempF() {
        return this.highTempF
    },

    get getLowTempF() {
        return this.lowTempF
    },

    get getPrecip() {
        return this.precip
    },

    set setHeader(newHeader) {
        this.header = newHeader
    },

    set setIcon(newIcon) {
        this.icon = newIcon
    },

    set setHighTempC(newHighTempC) {
        this.highTempC = newHighTempC
    },

    set setLowTempC(newLowTempC) {
        this.lowTempC = newLowTempC
    },

    set setHighTempF(newHighTempF) {
        this.highTempF = newHighTempF
    },

    set setLowTempF(newLowTempF) {
        this.lowTempF = newLowTempF
    },

    set setPrecip(newPrecip) {
        this.precip = newPrecip
    },

}

const nextday = {
    header : null,
    icon : null,
    highTempC : null,
    lowTempC : null,
    highTempF : null,
    lowTempF : null,
    precip : null,

    get getHeader() {
        return this.header
    },

    get getIcon() {
        return this.icon
    },

    get getHighTempC() {
        return this.highTempC
    },

    get getLowTempC() {
        return this.lowTempC
    },

    get getHighTempF() {
        return this.highTempF
    },

    get getLowTempF() {
        return this.lowTempF
    },

    get getPrecip() {
        return this.precip
    },

    set setHeader(newHeader) {
        this.header = newHeader
    },

    set setIcon(newIcon) {
        this.icon = newIcon
    },

    set setHighTempC(newHighTempC) {
        this.highTempC = newHighTempC
    },

    set setLowTempC(newLowTempC) {
        this.lowTempC = newLowTempC
    },

    set setHighTempF(newHighTempF) {
        this.highTempF = newHighTempF
    },

    set setLowTempF(newLowTempF) {
        this.lowTempF = newLowTempF
    },

    set setPrecip(newPrecip) {
        this.precip = newPrecip
    },

}




/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather),
/* harmony export */   getForecastWeather: () => (/* binding */ getForecastWeather)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ "./src/object.js");


const todayWeather = document.querySelector('#today-weather');

async function getForecastWeather() {
  const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=0d4b53107f7e4a1099e195400231810&q=Paris&days=3',
    {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData.forecast)

  setTodayForecastInfo(weatherData)
  setTomorrowForecastInfo(weatherData)
  setNextDayForecastInfo(weatherData)
}

async function getCurrentWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=0d4b53107f7e4a1099e195400231810&q=Paris',
        {mode: 'cors'})
    const weatherData = await response.json()

    setTodayCurrentInfo(weatherData)
}

function setNextDayForecastInfo(weatherData) {
    _object_js__WEBPACK_IMPORTED_MODULE_0__.nextday.setHeader = 'Weekday'
    _object_js__WEBPACK_IMPORTED_MODULE_0__.nextday.setIcon = weatherData.forecast.forecastday[2].day.condition.icon

    _object_js__WEBPACK_IMPORTED_MODULE_0__.nextday.setHighTempC = weatherData.forecast.forecastday[2].day.maxtemp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.nextday.setLowTempC = weatherData.forecast.forecastday[2].day.mintemp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.nextday.setHighTempF = weatherData.forecast.forecastday[2].day.maxtemp_f
    _object_js__WEBPACK_IMPORTED_MODULE_0__.nextday.setLowTempF = weatherData.forecast.forecastday[2].day.mintemp_f

    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setPrecip = weatherData.forecast.forecastday[2].day.daily_chance_of_rain
}

function setTomorrowForecastInfo(weatherData) {
    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setHeader = 'Tomorrow'
    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setIcon = weatherData.forecast.forecastday[1].day.condition.icon

    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setHighTempC = weatherData.forecast.forecastday[1].day.maxtemp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setLowTempC = weatherData.forecast.forecastday[1].day.mintemp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setHighTempF = weatherData.forecast.forecastday[1].day.maxtemp_f
    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setLowTempF = weatherData.forecast.forecastday[1].day.mintemp_f

    _object_js__WEBPACK_IMPORTED_MODULE_0__.tomorrow.setPrecip = weatherData.forecast.forecastday[1].day.daily_chance_of_rain
}

function setTodayCurrentInfo(weatherData) {
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.setCity = weatherData.location.name
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.setRegion = weatherData.location.region
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.setCountry = weatherData.location.country

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.setDate = weatherData.current.last_updated

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setTemperatureC = weatherData.current.temp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setTemperatureF = weatherData.current.temp_f

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setCondition = weatherData.current.condition.text

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setFeelsLikeC = weatherData.current.feelslike_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setFeelsLikeF = weatherData.current.feelslike_f

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setWindKph = weatherData.current.wind_kph
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setWindMph = weatherData.current.wind_mph

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setHumidity = weatherData.current.humidity
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setUvIndex = weatherData.current.uv
}

function setTodayForecastInfo(weatherData) {

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setIcon = weatherData.forecast.forecastday[0].day.condition.icon

    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setHighTempC = weatherData.forecast.forecastday[0].day.maxtemp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setLowTempC = weatherData.forecast.forecastday[0].day.mintemp_c
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setHighTempF = weatherData.forecast.forecastday[0].day.maxtemp_f
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.mainInfo.setLowTempF = weatherData.forecast.forecastday[0].day.mintemp_f
  
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setPrecip = weatherData.forecast.forecastday[0].day.daily_chance_of_rain
  
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setSunrise = weatherData.forecast.forecastday[0].astro.sunrise
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.otherInfo.setSunset = weatherData.forecast.forecastday[0].astro.sunset
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");



(0,_weather__WEBPACK_IMPORTED_MODULE_1__.getForecastWeather)()
;(0,_weather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxnQ0FBZ0MsK0JBQStCLEdBQUcsbUJBQW1CO0FBQ3pMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVXNEOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxhQUFhO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsYUFBYTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87O0FBRVgsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87QUFDWCxJQUFJLCtDQUFPO0FBQ1gsSUFBSSwrQ0FBTzs7QUFFWCxJQUFJLGdEQUFRO0FBQ1o7O0FBRUE7QUFDQSxJQUFJLGdEQUFRO0FBQ1osSUFBSSxnREFBUTs7QUFFWixJQUFJLGdEQUFRO0FBQ1osSUFBSSxnREFBUTtBQUNaLElBQUksZ0RBQVE7QUFDWixJQUFJLGdEQUFROztBQUVaLElBQUksZ0RBQVE7QUFDWjs7QUFFQTtBQUNBLElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSzs7QUFFVCxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7O0FBRVQsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7O0FBRVQsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7O0FBRVQsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVDs7QUFFQTs7QUFFQSxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVDtBQUNBLElBQUksNkNBQUs7QUFDVDtBQUNBLElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLO0FBQ1Q7Ozs7Ozs7O1VDbEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQzZDOztBQUVqRSw0REFBa0I7QUFDbEIsNERBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOSw5LDEyMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOSw5LDEyMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0b2RheSA9IHtcblxuICAgIGxvY2F0aW9uIDoge1xuICAgICAgICBjaXR5IDogbnVsbCxcbiAgICAgICAgcmVnaW9uIDogbnVsbCxcbiAgICAgICAgY291bnRyeSA6IG51bGwsXG5cbiAgICAgICAgZ2V0IGdldENpdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaXR5XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFJlZ2lvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lvblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRDb3VudHJ5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyeVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRDaXR5KG5ld0NpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuY2l0eSA9IG5ld0NpdHlcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0UmVnaW9uKG5ld1JlZ2lvbikge1xuICAgICAgICAgICAgdGhpcy5yZWdpb24gPSBuZXdSZWdpb25cbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0Q291bnRyeShuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50cnkgPSBuZXdDb3VudHJ5XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0ZSA6IG51bGwsXG5cbiAgICBnZXQgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVxuICAgIH0sXG5cbiAgICBzZXQgc2V0RGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGVcbiAgICB9LFxuXG4gICAgbWFpbkluZm8gOiB7XG4gICAgICAgIGljb24gOiBudWxsLFxuICAgICAgICB0ZW1wZXJhdHVyZUMgOiBudWxsLFxuICAgICAgICB0ZW1wZXJhdHVyZUYgOiBudWxsLFxuICAgICAgICBjb25kaXRpb24gOiBudWxsLFxuICAgICAgICBoaWdoVGVtcEMgOiBudWxsLFxuICAgICAgICBsb3dUZW1wQyA6IG51bGwsXG4gICAgICAgIGhpZ2hUZW1wRiA6IG51bGwsXG4gICAgICAgIGxvd1RlbXBGIDogbnVsbCxcbiAgICAgICAgZmVlbHNMaWtlQyA6IG51bGwsXG4gICAgICAgIGZlZWxzTGlrZUYgOiBudWxsLFxuXG4gICAgICAgIGdldCBnZXRJY29uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRUZW1wZXJhdHVyZUMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wZXJhdHVyZUNcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0VGVtcGVyYXR1cmVGKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGVyYXR1cmVGXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldENvbmRpdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRIaWdoVGVtcEMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdoVGVtcENcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0TG93VGVtcEMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dUZW1wQ1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRIaWdoVGVtcEYoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdoVGVtcEZcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0TG93VGVtcEYoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb3dUZW1wRlxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRGZWVsc0xpa2VDKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmVlbHNMaWtlQ1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRGZWVsc0xpa2VGKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmVlbHNMaWtlRlxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRJY29uKG5ld0ljb24pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IG5ld0ljb25cbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0VGVtcGVyYXR1cmVDKG5ld1RlbXBDKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlQyA9IG5ld1RlbXBDXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFRlbXBlcmF0dXJlRihuZXdUZW1wRikge1xuICAgICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZUYgPSBuZXdUZW1wRlxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRDb25kaXRpb24obmV3Q29uZGl0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IG5ld0NvbmRpdGlvblxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRIaWdoVGVtcEMobmV3SGlnaFRlbXBDKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hUZW1wQyA9IG5ld0hpZ2hUZW1wQ1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRMb3dUZW1wQyhuZXdMb3dUZW1wQykge1xuICAgICAgICAgICAgdGhpcy5sb3dUZW1wQyA9IG5ld0xvd1RlbXBDXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldEhpZ2hUZW1wRihuZXdIaWdoVGVtcEYpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFRlbXBGID0gbmV3SGlnaFRlbXBGXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldExvd1RlbXBGKG5ld0xvd1RlbXBGKSB7XG4gICAgICAgICAgICB0aGlzLmxvd1RlbXBGID0gbmV3TG93VGVtcEZcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0RmVlbHNMaWtlQyhuZXdGZWVsc0xpa2VDKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWxzTGlrZUMgPSBuZXdGZWVsc0xpa2VDXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldEZlZWxzTGlrZUYobmV3RmVlbHNMaWtlRikge1xuICAgICAgICAgICAgdGhpcy5mZWVsc0xpa2VGID0gbmV3RmVlbHNMaWtlRlxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgb3RoZXJJbmZvIDoge1xuICAgICAgICB3aW5ka3BoIDogbnVsbCxcbiAgICAgICAgd2luZG1waCA6IG51bGwsXG4gICAgICAgIHByZWNpcCA6IG51bGwsXG4gICAgICAgIGh1bWlkaXR5IDogbnVsbCxcbiAgICAgICAgdXZJbmRleCA6IG51bGwsXG4gICAgICAgIHN1bnJpc2UgOiBudWxsLFxuICAgICAgICBzdW5zZXQgOiBudWxsLFxuXG4gICAgICAgIGdldCBnZXRXaW5kS3BoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZGtwaFxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRXaW5kTXBoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG1waFxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRQcmVjaXAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVjaXBcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0SHVtaWRpdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odW1pZGl0eVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRVdkluZGV4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXZJbmRleFxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRTdW5yaXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VucmlzZVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRTdW5zZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5zZXRcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0V2luZEtwaChuZXdXaW5kS3BoKSB7XG4gICAgICAgICAgICB0aGlzLndpbmRrcGggPSBuZXdXaW5kS3BoXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFdpbmRNcGgobmV3V2luZE1waCkge1xuICAgICAgICAgICAgdGhpcy53aW5kbXBoID0gbmV3V2luZE1waFxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRQcmVjaXAobmV3UHJlY2lwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWNpcCA9IG5ld1ByZWNpcFxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRIdW1pZGl0eShuZXdIdW1pZGl0eSkge1xuICAgICAgICAgICAgdGhpcy5odW1pZGl0eSA9IG5ld0h1bWlkaXR5XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFV2SW5kZXgobmV3VXZJbmRleCkge1xuICAgICAgICAgICAgdGhpcy51dkluZGV4ID0gbmV3VXZJbmRleFxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRTdW5yaXNlKG5ld1N1bnJpc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VucmlzZSA9IG5ld1N1bnJpc2VcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0U3Vuc2V0KG5ld1N1bnNldCkge1xuICAgICAgICAgICAgdGhpcy5zdW5zZXQgPSBuZXdTdW5zZXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdG9tb3Jyb3cgPSB7XG4gICAgaGVhZGVyIDogbnVsbCxcbiAgICBpY29uIDogbnVsbCxcbiAgICBoaWdoVGVtcEMgOiBudWxsLFxuICAgIGxvd1RlbXBDIDogbnVsbCxcbiAgICBoaWdoVGVtcEYgOiBudWxsLFxuICAgIGxvd1RlbXBGIDogbnVsbCxcbiAgICBwcmVjaXAgOiBudWxsLFxuXG4gICAgZ2V0IGdldEhlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyXG4gICAgfSxcblxuICAgIGdldCBnZXRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uXG4gICAgfSxcblxuICAgIGdldCBnZXRIaWdoVGVtcEMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hUZW1wQ1xuICAgIH0sXG5cbiAgICBnZXQgZ2V0TG93VGVtcEMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd1RlbXBDXG4gICAgfSxcblxuICAgIGdldCBnZXRIaWdoVGVtcEYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hUZW1wRlxuICAgIH0sXG5cbiAgICBnZXQgZ2V0TG93VGVtcEYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd1RlbXBGXG4gICAgfSxcblxuICAgIGdldCBnZXRQcmVjaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWNpcFxuICAgIH0sXG5cbiAgICBzZXQgc2V0SGVhZGVyKG5ld0hlYWRlcikge1xuICAgICAgICB0aGlzLmhlYWRlciA9IG5ld0hlYWRlclxuICAgIH0sXG5cbiAgICBzZXQgc2V0SWNvbihuZXdJY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IG5ld0ljb25cbiAgICB9LFxuXG4gICAgc2V0IHNldEhpZ2hUZW1wQyhuZXdIaWdoVGVtcEMpIHtcbiAgICAgICAgdGhpcy5oaWdoVGVtcEMgPSBuZXdIaWdoVGVtcENcbiAgICB9LFxuXG4gICAgc2V0IHNldExvd1RlbXBDKG5ld0xvd1RlbXBDKSB7XG4gICAgICAgIHRoaXMubG93VGVtcEMgPSBuZXdMb3dUZW1wQ1xuICAgIH0sXG5cbiAgICBzZXQgc2V0SGlnaFRlbXBGKG5ld0hpZ2hUZW1wRikge1xuICAgICAgICB0aGlzLmhpZ2hUZW1wRiA9IG5ld0hpZ2hUZW1wRlxuICAgIH0sXG5cbiAgICBzZXQgc2V0TG93VGVtcEYobmV3TG93VGVtcEYpIHtcbiAgICAgICAgdGhpcy5sb3dUZW1wRiA9IG5ld0xvd1RlbXBGXG4gICAgfSxcblxuICAgIHNldCBzZXRQcmVjaXAobmV3UHJlY2lwKSB7XG4gICAgICAgIHRoaXMucHJlY2lwID0gbmV3UHJlY2lwXG4gICAgfSxcblxufVxuXG5jb25zdCBuZXh0ZGF5ID0ge1xuICAgIGhlYWRlciA6IG51bGwsXG4gICAgaWNvbiA6IG51bGwsXG4gICAgaGlnaFRlbXBDIDogbnVsbCxcbiAgICBsb3dUZW1wQyA6IG51bGwsXG4gICAgaGlnaFRlbXBGIDogbnVsbCxcbiAgICBsb3dUZW1wRiA6IG51bGwsXG4gICAgcHJlY2lwIDogbnVsbCxcblxuICAgIGdldCBnZXRIZWFkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlclxuICAgIH0sXG5cbiAgICBnZXQgZ2V0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvblxuICAgIH0sXG5cbiAgICBnZXQgZ2V0SGlnaFRlbXBDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdoVGVtcENcbiAgICB9LFxuXG4gICAgZ2V0IGdldExvd1RlbXBDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dUZW1wQ1xuICAgIH0sXG5cbiAgICBnZXQgZ2V0SGlnaFRlbXBGKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdoVGVtcEZcbiAgICB9LFxuXG4gICAgZ2V0IGdldExvd1RlbXBGKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dUZW1wRlxuICAgIH0sXG5cbiAgICBnZXQgZ2V0UHJlY2lwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVjaXBcbiAgICB9LFxuXG4gICAgc2V0IHNldEhlYWRlcihuZXdIZWFkZXIpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXdIZWFkZXJcbiAgICB9LFxuXG4gICAgc2V0IHNldEljb24obmV3SWNvbikge1xuICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uXG4gICAgfSxcblxuICAgIHNldCBzZXRIaWdoVGVtcEMobmV3SGlnaFRlbXBDKSB7XG4gICAgICAgIHRoaXMuaGlnaFRlbXBDID0gbmV3SGlnaFRlbXBDXG4gICAgfSxcblxuICAgIHNldCBzZXRMb3dUZW1wQyhuZXdMb3dUZW1wQykge1xuICAgICAgICB0aGlzLmxvd1RlbXBDID0gbmV3TG93VGVtcENcbiAgICB9LFxuXG4gICAgc2V0IHNldEhpZ2hUZW1wRihuZXdIaWdoVGVtcEYpIHtcbiAgICAgICAgdGhpcy5oaWdoVGVtcEYgPSBuZXdIaWdoVGVtcEZcbiAgICB9LFxuXG4gICAgc2V0IHNldExvd1RlbXBGKG5ld0xvd1RlbXBGKSB7XG4gICAgICAgIHRoaXMubG93VGVtcEYgPSBuZXdMb3dUZW1wRlxuICAgIH0sXG5cbiAgICBzZXQgc2V0UHJlY2lwKG5ld1ByZWNpcCkge1xuICAgICAgICB0aGlzLnByZWNpcCA9IG5ld1ByZWNpcFxuICAgIH0sXG5cbn1cblxuXG5leHBvcnQgeyB0b2RheSwgdG9tb3Jyb3csIG5leHRkYXkgfSIsImltcG9ydCB7IHRvZGF5LCB0b21vcnJvdywgbmV4dGRheSB9IGZyb20gJy4vb2JqZWN0LmpzJ1xuXG5jb25zdCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXktd2VhdGhlcicpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdFdlYXRoZXIoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MGQ0YjUzMTA3ZjdlNGExMDk5ZTE5NTQwMDIzMTgxMCZxPVBhcmlzJmRheXM9MycsXG4gICAge21vZGU6ICdjb3JzJ30pO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuZm9yZWNhc3QpXG5cbiAgc2V0VG9kYXlGb3JlY2FzdEluZm8od2VhdGhlckRhdGEpXG4gIHNldFRvbW9ycm93Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKVxuICBzZXROZXh0RGF5Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MGQ0YjUzMTA3ZjdlNGExMDk5ZTE5NTQwMDIzMTgxMCZxPVBhcmlzJyxcbiAgICAgICAge21vZGU6ICdjb3JzJ30pXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIHNldFRvZGF5Q3VycmVudEluZm8od2VhdGhlckRhdGEpXG59XG5cbmZ1bmN0aW9uIHNldE5leHREYXlGb3JlY2FzdEluZm8od2VhdGhlckRhdGEpIHtcbiAgICBuZXh0ZGF5LnNldEhlYWRlciA9ICdXZWVrZGF5J1xuICAgIG5leHRkYXkuc2V0SWNvbiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvblxuXG4gICAgbmV4dGRheS5zZXRIaWdoVGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jXG4gICAgbmV4dGRheS5zZXRMb3dUZW1wQyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2NcbiAgICBuZXh0ZGF5LnNldEhpZ2hUZW1wRiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2ZcbiAgICBuZXh0ZGF5LnNldExvd1RlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZlxuXG4gICAgdG9tb3Jyb3cuc2V0UHJlY2lwID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluXG59XG5cbmZ1bmN0aW9uIHNldFRvbW9ycm93Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKSB7XG4gICAgdG9tb3Jyb3cuc2V0SGVhZGVyID0gJ1RvbW9ycm93J1xuICAgIHRvbW9ycm93LnNldEljb24gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb25cblxuICAgIHRvbW9ycm93LnNldEhpZ2hUZW1wQyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2NcbiAgICB0b21vcnJvdy5zZXRMb3dUZW1wQyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2NcbiAgICB0b21vcnJvdy5zZXRIaWdoVGVtcEYgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mXG4gICAgdG9tb3Jyb3cuc2V0TG93VGVtcEYgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mXG5cbiAgICB0b21vcnJvdy5zZXRQcmVjaXAgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW5cbn1cblxuZnVuY3Rpb24gc2V0VG9kYXlDdXJyZW50SW5mbyh3ZWF0aGVyRGF0YSkge1xuICAgIHRvZGF5LmxvY2F0aW9uLnNldENpdHkgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgdG9kYXkubG9jYXRpb24uc2V0UmVnaW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9uXG4gICAgdG9kYXkubG9jYXRpb24uc2V0Q291bnRyeSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnlcblxuICAgIHRvZGF5LnNldERhdGUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZFxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0VGVtcGVyYXR1cmVDID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2NcbiAgICB0b2RheS5tYWluSW5mby5zZXRUZW1wZXJhdHVyZUYgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZlxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0Q29uZGl0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dFxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0RmVlbHNMaWtlQyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2NcbiAgICB0b2RheS5tYWluSW5mby5zZXRGZWVsc0xpa2VGID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZlxuXG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFdpbmRLcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoXG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFdpbmRNcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoXG5cbiAgICB0b2RheS5vdGhlckluZm8uc2V0SHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5XG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFV2SW5kZXggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnV2XG59XG5cbmZ1bmN0aW9uIHNldFRvZGF5Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKSB7XG5cbiAgICB0b2RheS5tYWluSW5mby5zZXRJY29uID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uXG5cbiAgICB0b2RheS5tYWluSW5mby5zZXRIaWdoVGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jXG4gICAgdG9kYXkubWFpbkluZm8uc2V0TG93VGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jXG4gICAgdG9kYXkubWFpbkluZm8uc2V0SGlnaFRlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZlxuICAgIHRvZGF5Lm1haW5JbmZvLnNldExvd1RlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZlxuICBcbiAgICB0b2RheS5vdGhlckluZm8uc2V0UHJlY2lwID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluXG4gIFxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRTdW5yaXNlID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZVxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRTdW5zZXQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXRcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRGb3JlY2FzdFdlYXRoZXIsXG4gICAgZ2V0Q3VycmVudFdlYXRoZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRGb3JlY2FzdFdlYXRoZXIsIGdldEN1cnJlbnRXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJ1xuXG5nZXRGb3JlY2FzdFdlYXRoZXIoKVxuZ2V0Q3VycmVudFdlYXRoZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==