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
    background: lightblue;
}

#header {
    border: 1px solid black;
}

#main {
    border: 1px solid black;
    height: 90vh;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

#today-weather {
    border: 1px solid black;

    grid-column: 1 / 3;
    grid-row: 1 / 2;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 1fr;
}

.today-heading {
    border: 1px solid black;

    grid-column: 1 / 3;
    grid-row: 1 / 2;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.today-main-info {
    border: 1px solid black;

    grid-column: 1 / 2;
    grid-row: 2 / 3;

    display: flex;
    flex-direction: column;
}

.today-icon-info {
    border: 1px solid black;
}

.today-condition-info {
    border: 1px solid black;
}

.today-other-info {
    border: 1px solid black;

    grid-column: 2 / 3;
    grid-row: 2 / 3;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

.today-other-info div {
    border: 1px solid black;
}

#tomorrow-weather {
    border: 1px solid black;

    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

#next-weather {
    border: 1px solid black;

    grid-column: 2 / 3;
    grid-row: 2 / 3;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["html {\n    background: lightblue;\n}\n\n#header {\n    border: 1px solid black;\n}\n\n#main {\n    border: 1px solid black;\n    height: 90vh;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n#today-weather {\n    border: 1px solid black;\n\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 50px 1fr;\n}\n\n.today-heading {\n    border: 1px solid black;\n\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.today-main-info {\n    border: 1px solid black;\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.today-icon-info {\n    border: 1px solid black;\n}\n\n.today-condition-info {\n    border: 1px solid black;\n}\n\n.today-other-info {\n    border: 1px solid black;\n\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}\n\n.today-other-info div {\n    border: 1px solid black;\n}\n\n#tomorrow-weather {\n    border: 1px solid black;\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#next-weather {\n    border: 1px solid black;\n\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Vc0Q7O0FBRXREOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGFBQWE7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFPO0FBQ1gsSUFBSSwrQ0FBTzs7QUFFWCxJQUFJLCtDQUFPO0FBQ1gsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87QUFDWCxJQUFJLCtDQUFPOztBQUVYLElBQUksZ0RBQVE7QUFDWjs7QUFFQTtBQUNBLElBQUksZ0RBQVE7QUFDWixJQUFJLGdEQUFROztBQUVaLElBQUksZ0RBQVE7QUFDWixJQUFJLGdEQUFRO0FBQ1osSUFBSSxnREFBUTtBQUNaLElBQUksZ0RBQVE7O0FBRVosSUFBSSxnREFBUTtBQUNaOztBQUVBO0FBQ0EsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7O0FBRVQsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7O0FBRVQsSUFBSSw2Q0FBSzs7QUFFVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSzs7QUFFVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSzs7QUFFVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSztBQUNUOztBQUVBOztBQUVBLElBQUksNkNBQUs7O0FBRVQsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSztBQUNUO0FBQ0EsSUFBSSw2Q0FBSztBQUNUO0FBQ0EsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVDs7Ozs7Ozs7VUNsRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDNkM7O0FBRWpFLDREQUFrQjtBQUNsQiw0REFBaUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuI2hlYWRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNtYWluIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xufVxuXG4jdG9kYXktd2VhdGhlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbn1cblxuLnRvZGF5LWhlYWRpbmcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kYXktbWFpbi1pbmZvIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RheS1pY29uLWluZm8ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udG9kYXktY29uZGl0aW9uLWluZm8ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udG9kYXktb3RoZXItaW5mbyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbn1cblxuLnRvZGF5LW90aGVyLWluZm8gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3RvbW9ycm93LXdlYXRoZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI25leHQtd2VhdGhlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNtYWluIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4jdG9kYXktd2VhdGhlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbn1cXG5cXG4udG9kYXktaGVhZGluZyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5LW1haW4taW5mbyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZGF5LWljb24taW5mbyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kYXktY29uZGl0aW9uLWluZm8ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZGF5LW90aGVyLWluZm8ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnRvZGF5LW90aGVyLWluZm8gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0b21vcnJvdy13ZWF0aGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jbmV4dC13ZWF0aGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgdG9kYXkgPSB7XG5cbiAgICBsb2NhdGlvbiA6IHtcbiAgICAgICAgY2l0eSA6IG51bGwsXG4gICAgICAgIHJlZ2lvbiA6IG51bGwsXG4gICAgICAgIGNvdW50cnkgOiBudWxsLFxuXG4gICAgICAgIGdldCBnZXRDaXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2l0eVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRSZWdpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpb25cbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0Q291bnRyeSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50cnlcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0Q2l0eShuZXdDaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmNpdHkgPSBuZXdDaXR5XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFJlZ2lvbihuZXdSZWdpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVnaW9uID0gbmV3UmVnaW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldENvdW50cnkobmV3Q291bnRyeSkge1xuICAgICAgICAgICAgdGhpcy5jb3VudHJ5ID0gbmV3Q291bnRyeVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGUgOiBudWxsLFxuXG4gICAgZ2V0IGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVcbiAgICB9LFxuXG4gICAgc2V0IHNldERhdGUobmV3RGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXdEYXRlXG4gICAgfSxcblxuICAgIG1haW5JbmZvIDoge1xuICAgICAgICBpY29uIDogbnVsbCxcbiAgICAgICAgdGVtcGVyYXR1cmVDIDogbnVsbCxcbiAgICAgICAgdGVtcGVyYXR1cmVGIDogbnVsbCxcbiAgICAgICAgY29uZGl0aW9uIDogbnVsbCxcbiAgICAgICAgaGlnaFRlbXBDIDogbnVsbCxcbiAgICAgICAgbG93VGVtcEMgOiBudWxsLFxuICAgICAgICBoaWdoVGVtcEYgOiBudWxsLFxuICAgICAgICBsb3dUZW1wRiA6IG51bGwsXG4gICAgICAgIGZlZWxzTGlrZUMgOiBudWxsLFxuICAgICAgICBmZWVsc0xpa2VGIDogbnVsbCxcblxuICAgICAgICBnZXQgZ2V0SWNvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb25cbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0VGVtcGVyYXR1cmVDKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGVyYXR1cmVDXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFRlbXBlcmF0dXJlRigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBlcmF0dXJlRlxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRDb25kaXRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25cbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0SGlnaFRlbXBDKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlnaFRlbXBDXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldExvd1RlbXBDKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93VGVtcENcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0SGlnaFRlbXBGKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlnaFRlbXBGXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldExvd1RlbXBGKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG93VGVtcEZcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0RmVlbHNMaWtlQygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZlZWxzTGlrZUNcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0RmVlbHNMaWtlRigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZlZWxzTGlrZUZcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0SWNvbihuZXdJY29uKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFRlbXBlcmF0dXJlQyhuZXdUZW1wQykge1xuICAgICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZUMgPSBuZXdUZW1wQ1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRUZW1wZXJhdHVyZUYobmV3VGVtcEYpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmVGID0gbmV3VGVtcEZcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0Q29uZGl0aW9uKG5ld0NvbmRpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25kaXRpb24gPSBuZXdDb25kaXRpb25cbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0SGlnaFRlbXBDKG5ld0hpZ2hUZW1wQykge1xuICAgICAgICAgICAgdGhpcy5oaWdoVGVtcEMgPSBuZXdIaWdoVGVtcENcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0TG93VGVtcEMobmV3TG93VGVtcEMpIHtcbiAgICAgICAgICAgIHRoaXMubG93VGVtcEMgPSBuZXdMb3dUZW1wQ1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRIaWdoVGVtcEYobmV3SGlnaFRlbXBGKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hUZW1wRiA9IG5ld0hpZ2hUZW1wRlxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRMb3dUZW1wRihuZXdMb3dUZW1wRikge1xuICAgICAgICAgICAgdGhpcy5sb3dUZW1wRiA9IG5ld0xvd1RlbXBGXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldEZlZWxzTGlrZUMobmV3RmVlbHNMaWtlQykge1xuICAgICAgICAgICAgdGhpcy5mZWVsc0xpa2VDID0gbmV3RmVlbHNMaWtlQ1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRGZWVsc0xpa2VGKG5ld0ZlZWxzTGlrZUYpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlbHNMaWtlRiA9IG5ld0ZlZWxzTGlrZUZcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG90aGVySW5mbyA6IHtcbiAgICAgICAgd2luZGtwaCA6IG51bGwsXG4gICAgICAgIHdpbmRtcGggOiBudWxsLFxuICAgICAgICBwcmVjaXAgOiBudWxsLFxuICAgICAgICBodW1pZGl0eSA6IG51bGwsXG4gICAgICAgIHV2SW5kZXggOiBudWxsLFxuICAgICAgICBzdW5yaXNlIDogbnVsbCxcbiAgICAgICAgc3Vuc2V0IDogbnVsbCxcblxuICAgICAgICBnZXQgZ2V0V2luZEtwaCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRrcGhcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0V2luZE1waCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRtcGhcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0UHJlY2lwKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlY2lwXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldEh1bWlkaXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHVtaWRpdHlcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0VXZJbmRleCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnV2SW5kZXhcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0U3VucmlzZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bnJpc2VcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0U3Vuc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vuc2V0XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFdpbmRLcGgobmV3V2luZEtwaCkge1xuICAgICAgICAgICAgdGhpcy53aW5ka3BoID0gbmV3V2luZEtwaFxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRXaW5kTXBoKG5ld1dpbmRNcGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG1waCA9IG5ld1dpbmRNcGhcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0UHJlY2lwKG5ld1ByZWNpcCkge1xuICAgICAgICAgICAgdGhpcy5wcmVjaXAgPSBuZXdQcmVjaXBcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0SHVtaWRpdHkobmV3SHVtaWRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuaHVtaWRpdHkgPSBuZXdIdW1pZGl0eVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRVdkluZGV4KG5ld1V2SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMudXZJbmRleCA9IG5ld1V2SW5kZXhcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0U3VucmlzZShuZXdTdW5yaXNlKSB7XG4gICAgICAgICAgICB0aGlzLnN1bnJpc2UgPSBuZXdTdW5yaXNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFN1bnNldChuZXdTdW5zZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vuc2V0ID0gbmV3U3Vuc2V0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHRvbW9ycm93ID0ge1xuICAgIGhlYWRlciA6IG51bGwsXG4gICAgaWNvbiA6IG51bGwsXG4gICAgaGlnaFRlbXBDIDogbnVsbCxcbiAgICBsb3dUZW1wQyA6IG51bGwsXG4gICAgaGlnaFRlbXBGIDogbnVsbCxcbiAgICBsb3dUZW1wRiA6IG51bGwsXG4gICAgcHJlY2lwIDogbnVsbCxcblxuICAgIGdldCBnZXRIZWFkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlclxuICAgIH0sXG5cbiAgICBnZXQgZ2V0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvblxuICAgIH0sXG5cbiAgICBnZXQgZ2V0SGlnaFRlbXBDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdoVGVtcENcbiAgICB9LFxuXG4gICAgZ2V0IGdldExvd1RlbXBDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dUZW1wQ1xuICAgIH0sXG5cbiAgICBnZXQgZ2V0SGlnaFRlbXBGKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdoVGVtcEZcbiAgICB9LFxuXG4gICAgZ2V0IGdldExvd1RlbXBGKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb3dUZW1wRlxuICAgIH0sXG5cbiAgICBnZXQgZ2V0UHJlY2lwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVjaXBcbiAgICB9LFxuXG4gICAgc2V0IHNldEhlYWRlcihuZXdIZWFkZXIpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXdIZWFkZXJcbiAgICB9LFxuXG4gICAgc2V0IHNldEljb24obmV3SWNvbikge1xuICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uXG4gICAgfSxcblxuICAgIHNldCBzZXRIaWdoVGVtcEMobmV3SGlnaFRlbXBDKSB7XG4gICAgICAgIHRoaXMuaGlnaFRlbXBDID0gbmV3SGlnaFRlbXBDXG4gICAgfSxcblxuICAgIHNldCBzZXRMb3dUZW1wQyhuZXdMb3dUZW1wQykge1xuICAgICAgICB0aGlzLmxvd1RlbXBDID0gbmV3TG93VGVtcENcbiAgICB9LFxuXG4gICAgc2V0IHNldEhpZ2hUZW1wRihuZXdIaWdoVGVtcEYpIHtcbiAgICAgICAgdGhpcy5oaWdoVGVtcEYgPSBuZXdIaWdoVGVtcEZcbiAgICB9LFxuXG4gICAgc2V0IHNldExvd1RlbXBGKG5ld0xvd1RlbXBGKSB7XG4gICAgICAgIHRoaXMubG93VGVtcEYgPSBuZXdMb3dUZW1wRlxuICAgIH0sXG5cbiAgICBzZXQgc2V0UHJlY2lwKG5ld1ByZWNpcCkge1xuICAgICAgICB0aGlzLnByZWNpcCA9IG5ld1ByZWNpcFxuICAgIH0sXG5cbn1cblxuY29uc3QgbmV4dGRheSA9IHtcbiAgICBoZWFkZXIgOiBudWxsLFxuICAgIGljb24gOiBudWxsLFxuICAgIGhpZ2hUZW1wQyA6IG51bGwsXG4gICAgbG93VGVtcEMgOiBudWxsLFxuICAgIGhpZ2hUZW1wRiA6IG51bGwsXG4gICAgbG93VGVtcEYgOiBudWxsLFxuICAgIHByZWNpcCA6IG51bGwsXG5cbiAgICBnZXQgZ2V0SGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJcbiAgICB9LFxuXG4gICAgZ2V0IGdldEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmljb25cbiAgICB9LFxuXG4gICAgZ2V0IGdldEhpZ2hUZW1wQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaFRlbXBDXG4gICAgfSxcblxuICAgIGdldCBnZXRMb3dUZW1wQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93VGVtcENcbiAgICB9LFxuXG4gICAgZ2V0IGdldEhpZ2hUZW1wRigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaFRlbXBGXG4gICAgfSxcblxuICAgIGdldCBnZXRMb3dUZW1wRigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93VGVtcEZcbiAgICB9LFxuXG4gICAgZ2V0IGdldFByZWNpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlY2lwXG4gICAgfSxcblxuICAgIHNldCBzZXRIZWFkZXIobmV3SGVhZGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3SGVhZGVyXG4gICAgfSxcblxuICAgIHNldCBzZXRJY29uKG5ld0ljb24pIHtcbiAgICAgICAgdGhpcy5pY29uID0gbmV3SWNvblxuICAgIH0sXG5cbiAgICBzZXQgc2V0SGlnaFRlbXBDKG5ld0hpZ2hUZW1wQykge1xuICAgICAgICB0aGlzLmhpZ2hUZW1wQyA9IG5ld0hpZ2hUZW1wQ1xuICAgIH0sXG5cbiAgICBzZXQgc2V0TG93VGVtcEMobmV3TG93VGVtcEMpIHtcbiAgICAgICAgdGhpcy5sb3dUZW1wQyA9IG5ld0xvd1RlbXBDXG4gICAgfSxcblxuICAgIHNldCBzZXRIaWdoVGVtcEYobmV3SGlnaFRlbXBGKSB7XG4gICAgICAgIHRoaXMuaGlnaFRlbXBGID0gbmV3SGlnaFRlbXBGXG4gICAgfSxcblxuICAgIHNldCBzZXRMb3dUZW1wRihuZXdMb3dUZW1wRikge1xuICAgICAgICB0aGlzLmxvd1RlbXBGID0gbmV3TG93VGVtcEZcbiAgICB9LFxuXG4gICAgc2V0IHNldFByZWNpcChuZXdQcmVjaXApIHtcbiAgICAgICAgdGhpcy5wcmVjaXAgPSBuZXdQcmVjaXBcbiAgICB9LFxuXG59XG5cblxuZXhwb3J0IHsgdG9kYXksIHRvbW9ycm93LCBuZXh0ZGF5IH0iLCJpbXBvcnQgeyB0b2RheSwgdG9tb3Jyb3csIG5leHRkYXkgfSBmcm9tICcuL29iamVjdC5qcydcblxuY29uc3QgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5LXdlYXRoZXInKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTBkNGI1MzEwN2Y3ZTRhMTA5OWUxOTU0MDAyMzE4MTAmcT1QYXJpcyZkYXlzPTMnLFxuICAgIHttb2RlOiAnY29ycyd9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmZvcmVjYXN0KVxuXG4gIHNldFRvZGF5Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKVxuICBzZXRUb21vcnJvd0ZvcmVjYXN0SW5mbyh3ZWF0aGVyRGF0YSlcbiAgc2V0TmV4dERheUZvcmVjYXN0SW5mbyh3ZWF0aGVyRGF0YSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTBkNGI1MzEwN2Y3ZTRhMTA5OWUxOTU0MDAyMzE4MTAmcT1QYXJpcycsXG4gICAgICAgIHttb2RlOiAnY29ycyd9KVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBzZXRUb2RheUN1cnJlbnRJbmZvKHdlYXRoZXJEYXRhKVxufVxuXG5mdW5jdGlvbiBzZXROZXh0RGF5Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKSB7XG4gICAgbmV4dGRheS5zZXRIZWFkZXIgPSAnV2Vla2RheSdcbiAgICBuZXh0ZGF5LnNldEljb24gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb25cblxuICAgIG5leHRkYXkuc2V0SGlnaFRlbXBDID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfY1xuICAgIG5leHRkYXkuc2V0TG93VGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jXG4gICAgbmV4dGRheS5zZXRIaWdoVGVtcEYgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mXG4gICAgbmV4dGRheS5zZXRMb3dUZW1wRiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2ZcblxuICAgIHRvbW9ycm93LnNldFByZWNpcCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpblxufVxuXG5mdW5jdGlvbiBzZXRUb21vcnJvd0ZvcmVjYXN0SW5mbyh3ZWF0aGVyRGF0YSkge1xuICAgIHRvbW9ycm93LnNldEhlYWRlciA9ICdUb21vcnJvdydcbiAgICB0b21vcnJvdy5zZXRJY29uID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uXG5cbiAgICB0b21vcnJvdy5zZXRIaWdoVGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jXG4gICAgdG9tb3Jyb3cuc2V0TG93VGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jXG4gICAgdG9tb3Jyb3cuc2V0SGlnaFRlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZlxuICAgIHRvbW9ycm93LnNldExvd1RlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZlxuXG4gICAgdG9tb3Jyb3cuc2V0UHJlY2lwID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluXG59XG5cbmZ1bmN0aW9uIHNldFRvZGF5Q3VycmVudEluZm8od2VhdGhlckRhdGEpIHtcbiAgICB0b2RheS5sb2NhdGlvbi5zZXRDaXR5ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZVxuICAgIHRvZGF5LmxvY2F0aW9uLnNldFJlZ2lvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvblxuICAgIHRvZGF5LmxvY2F0aW9uLnNldENvdW50cnkgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5XG5cbiAgICB0b2RheS5zZXREYXRlID0gd2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWRcblxuICAgIHRvZGF5Lm1haW5JbmZvLnNldFRlbXBlcmF0dXJlQyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgdG9kYXkubWFpbkluZm8uc2V0VGVtcGVyYXR1cmVGID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2ZcblxuICAgIHRvZGF5Lm1haW5JbmZvLnNldENvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcblxuICAgIHRvZGF5Lm1haW5JbmZvLnNldEZlZWxzTGlrZUMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jXG4gICAgdG9kYXkubWFpbkluZm8uc2V0RmVlbHNMaWtlRiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2ZcblxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRXaW5kS3BoID0gd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaFxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRXaW5kTXBoID0gd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waFxuXG4gICAgdG9kYXkub3RoZXJJbmZvLnNldEh1bWlkaXR5ID0gd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eVxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRVdkluZGV4ID0gd2VhdGhlckRhdGEuY3VycmVudC51dlxufVxuXG5mdW5jdGlvbiBzZXRUb2RheUZvcmVjYXN0SW5mbyh3ZWF0aGVyRGF0YSkge1xuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0SWNvbiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvblxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0SGlnaFRlbXBDID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfY1xuICAgIHRvZGF5Lm1haW5JbmZvLnNldExvd1RlbXBDID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfY1xuICAgIHRvZGF5Lm1haW5JbmZvLnNldEhpZ2hUZW1wRiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2ZcbiAgICB0b2RheS5tYWluSW5mby5zZXRMb3dUZW1wRiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2ZcbiAgXG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFByZWNpcCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpblxuICBcbiAgICB0b2RheS5vdGhlckluZm8uc2V0U3VucmlzZSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2VcbiAgICB0b2RheS5vdGhlckluZm8uc2V0U3Vuc2V0ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9yZWNhc3RXZWF0aGVyLFxuICAgIGdldEN1cnJlbnRXZWF0aGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3RXZWF0aGVyLCBnZXRDdXJyZW50V2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcidcblxuZ2V0Rm9yZWNhc3RXZWF0aGVyKClcbmdldEN1cnJlbnRXZWF0aGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=