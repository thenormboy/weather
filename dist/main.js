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

    const location = document.querySelector('.location')
    let locationValue = _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.getCity + ', ' + _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.getRegion + ', ' + _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.getCountry
    location.textContent = locationValue

    const date = document.querySelector('.date')
    _object_js__WEBPACK_IMPORTED_MODULE_0__.today.setDate = weatherData.current.last_updated
    date.textContent = _object_js__WEBPACK_IMPORTED_MODULE_0__.today.getDate

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

function setCurrentWeather() {

    getCurrentWeather()
    getForecastWeather()

    const location = document.querySelector('.location')

    let locationValue = _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.getCity + ', ' + _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.getRegion + ', ' + _object_js__WEBPACK_IMPORTED_MODULE_0__.today.location.getCountry

    location.value = locationValue
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Vc0Q7O0FBRXREO0FBQ0E7QUFDQSxLQUFLLGFBQWE7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFPO0FBQ1gsSUFBSSwrQ0FBTzs7QUFFWCxJQUFJLCtDQUFPO0FBQ1gsSUFBSSwrQ0FBTztBQUNYLElBQUksK0NBQU87QUFDWCxJQUFJLCtDQUFPOztBQUVYLElBQUksZ0RBQVE7QUFDWjs7QUFFQTtBQUNBLElBQUksZ0RBQVE7QUFDWixJQUFJLGdEQUFROztBQUVaLElBQUksZ0RBQVE7QUFDWixJQUFJLGdEQUFRO0FBQ1osSUFBSSxnREFBUTtBQUNaLElBQUksZ0RBQVE7O0FBRVosSUFBSSxnREFBUTtBQUNaOztBQUVBO0FBQ0EsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLOztBQUVUO0FBQ0Esd0JBQXdCLDZDQUFLLDJCQUEyQiw2Q0FBSyw2QkFBNkIsNkNBQUs7QUFDL0Y7O0FBRUE7QUFDQSxJQUFJLDZDQUFLO0FBQ1QsdUJBQXVCLDZDQUFLOztBQUU1QixJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSzs7QUFFVCxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLOztBQUVULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLO0FBQ1Q7O0FBRUE7O0FBRUEsSUFBSSw2Q0FBSzs7QUFFVCxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSztBQUNULElBQUksNkNBQUs7QUFDVCxJQUFJLDZDQUFLO0FBQ1Q7QUFDQSxJQUFJLDZDQUFLO0FBQ1Q7QUFDQSxJQUFJLDZDQUFLO0FBQ1QsSUFBSSw2Q0FBSztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLDZDQUFLLDJCQUEyQiw2Q0FBSyw2QkFBNkIsNkNBQUs7O0FBRS9GO0FBQ0E7Ozs7Ozs7O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQzZDOztBQUVqRSw0REFBa0I7QUFDbEIsNERBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG59XG5cbiNoZWFkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jbWFpbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuI3RvZGF5LXdlYXRoZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XG59XG5cbi50b2RheS1oZWFkaW5nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZGF5LW1haW4taW5mbyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9kYXktaWNvbi1pbmZvIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZGF5LWNvbmRpdGlvbi1pbmZvIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZGF5LW90aGVyLWluZm8ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG59XG5cbi50b2RheS1vdGhlci1pbmZvIGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiN0b21vcnJvdy13ZWF0aGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNuZXh0LXdlYXRoZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZOztJQUVaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuI3RvZGF5LXdlYXRoZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG59XFxuXFxuLnRvZGF5LWhlYWRpbmcge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RheS1tYWluLWluZm8ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RheS1pY29uLWluZm8ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZGF5LWNvbmRpdGlvbi1pbmZvIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RheS1vdGhlci1pbmZvIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxufVxcblxcbi50b2RheS1vdGhlci1pbmZvIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdG9tb3Jyb3ctd2VhdGhlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI25leHQtd2VhdGhlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRvZGF5ID0ge1xuXG4gICAgbG9jYXRpb24gOiB7XG4gICAgICAgIGNpdHkgOiBudWxsLFxuICAgICAgICByZWdpb24gOiBudWxsLFxuICAgICAgICBjb3VudHJ5IDogbnVsbCxcblxuICAgICAgICBnZXQgZ2V0Q2l0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpdHlcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0UmVnaW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldENvdW50cnkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudHJ5XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldENpdHkobmV3Q2l0eSkge1xuICAgICAgICAgICAgdGhpcy5jaXR5ID0gbmV3Q2l0eVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRSZWdpb24obmV3UmVnaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IG5ld1JlZ2lvblxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRDb3VudHJ5KG5ld0NvdW50cnkpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRyeSA9IG5ld0NvdW50cnlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRlIDogbnVsbCxcblxuICAgIGdldCBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlXG4gICAgfSxcblxuICAgIHNldCBzZXREYXRlKG5ld0RhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3RGF0ZVxuICAgIH0sXG5cbiAgICBtYWluSW5mbyA6IHtcbiAgICAgICAgaWNvbiA6IG51bGwsXG4gICAgICAgIHRlbXBlcmF0dXJlQyA6IG51bGwsXG4gICAgICAgIHRlbXBlcmF0dXJlRiA6IG51bGwsXG4gICAgICAgIGNvbmRpdGlvbiA6IG51bGwsXG4gICAgICAgIGhpZ2hUZW1wQyA6IG51bGwsXG4gICAgICAgIGxvd1RlbXBDIDogbnVsbCxcbiAgICAgICAgaGlnaFRlbXBGIDogbnVsbCxcbiAgICAgICAgbG93VGVtcEYgOiBudWxsLFxuICAgICAgICBmZWVsc0xpa2VDIDogbnVsbCxcbiAgICAgICAgZmVlbHNMaWtlRiA6IG51bGwsXG5cbiAgICAgICAgZ2V0IGdldEljb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFRlbXBlcmF0dXJlQygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBlcmF0dXJlQ1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRUZW1wZXJhdHVyZUYoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wZXJhdHVyZUZcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZ2V0Q29uZGl0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldEhpZ2hUZW1wQygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZ2hUZW1wQ1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRMb3dUZW1wQygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd1RlbXBDXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldEhpZ2hUZW1wRigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZ2hUZW1wRlxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRMb3dUZW1wRigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd1RlbXBGXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldEZlZWxzTGlrZUMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mZWVsc0xpa2VDXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldEZlZWxzTGlrZUYoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mZWVsc0xpa2VGXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldEljb24obmV3SWNvbikge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gbmV3SWNvblxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRUZW1wZXJhdHVyZUMobmV3VGVtcEMpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmVDID0gbmV3VGVtcENcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0VGVtcGVyYXR1cmVGKG5ld1RlbXBGKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlRiA9IG5ld1RlbXBGXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldENvbmRpdGlvbihuZXdDb25kaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uID0gbmV3Q29uZGl0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldEhpZ2hUZW1wQyhuZXdIaWdoVGVtcEMpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFRlbXBDID0gbmV3SGlnaFRlbXBDXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldExvd1RlbXBDKG5ld0xvd1RlbXBDKSB7XG4gICAgICAgICAgICB0aGlzLmxvd1RlbXBDID0gbmV3TG93VGVtcENcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0SGlnaFRlbXBGKG5ld0hpZ2hUZW1wRikge1xuICAgICAgICAgICAgdGhpcy5oaWdoVGVtcEYgPSBuZXdIaWdoVGVtcEZcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0TG93VGVtcEYobmV3TG93VGVtcEYpIHtcbiAgICAgICAgICAgIHRoaXMubG93VGVtcEYgPSBuZXdMb3dUZW1wRlxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRGZWVsc0xpa2VDKG5ld0ZlZWxzTGlrZUMpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlbHNMaWtlQyA9IG5ld0ZlZWxzTGlrZUNcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0RmVlbHNMaWtlRihuZXdGZWVsc0xpa2VGKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWxzTGlrZUYgPSBuZXdGZWVsc0xpa2VGXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBvdGhlckluZm8gOiB7XG4gICAgICAgIHdpbmRrcGggOiBudWxsLFxuICAgICAgICB3aW5kbXBoIDogbnVsbCxcbiAgICAgICAgcHJlY2lwIDogbnVsbCxcbiAgICAgICAgaHVtaWRpdHkgOiBudWxsLFxuICAgICAgICB1dkluZGV4IDogbnVsbCxcbiAgICAgICAgc3VucmlzZSA6IG51bGwsXG4gICAgICAgIHN1bnNldCA6IG51bGwsXG5cbiAgICAgICAgZ2V0IGdldFdpbmRLcGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aW5ka3BoXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFdpbmRNcGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kbXBoXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFByZWNpcCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWNpcFxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBnZXRIdW1pZGl0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh1bWlkaXR5XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFV2SW5kZXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51dkluZGV4XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFN1bnJpc2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5yaXNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGdldFN1bnNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bnNldFxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRXaW5kS3BoKG5ld1dpbmRLcGgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZGtwaCA9IG5ld1dpbmRLcGhcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0V2luZE1waChuZXdXaW5kTXBoKSB7XG4gICAgICAgICAgICB0aGlzLndpbmRtcGggPSBuZXdXaW5kTXBoXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFByZWNpcChuZXdQcmVjaXApIHtcbiAgICAgICAgICAgIHRoaXMucHJlY2lwID0gbmV3UHJlY2lwXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldEh1bWlkaXR5KG5ld0h1bWlkaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmh1bWlkaXR5ID0gbmV3SHVtaWRpdHlcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgc2V0VXZJbmRleChuZXdVdkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnV2SW5kZXggPSBuZXdVdkluZGV4XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IHNldFN1bnJpc2UobmV3U3VucmlzZSkge1xuICAgICAgICAgICAgdGhpcy5zdW5yaXNlID0gbmV3U3VucmlzZVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBzZXRTdW5zZXQobmV3U3Vuc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnN1bnNldCA9IG5ld1N1bnNldFxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB0b21vcnJvdyA9IHtcbiAgICBoZWFkZXIgOiBudWxsLFxuICAgIGljb24gOiBudWxsLFxuICAgIGhpZ2hUZW1wQyA6IG51bGwsXG4gICAgbG93VGVtcEMgOiBudWxsLFxuICAgIGhpZ2hUZW1wRiA6IG51bGwsXG4gICAgbG93VGVtcEYgOiBudWxsLFxuICAgIHByZWNpcCA6IG51bGwsXG5cbiAgICBnZXQgZ2V0SGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJcbiAgICB9LFxuXG4gICAgZ2V0IGdldEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmljb25cbiAgICB9LFxuXG4gICAgZ2V0IGdldEhpZ2hUZW1wQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaFRlbXBDXG4gICAgfSxcblxuICAgIGdldCBnZXRMb3dUZW1wQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93VGVtcENcbiAgICB9LFxuXG4gICAgZ2V0IGdldEhpZ2hUZW1wRigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaFRlbXBGXG4gICAgfSxcblxuICAgIGdldCBnZXRMb3dUZW1wRigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG93VGVtcEZcbiAgICB9LFxuXG4gICAgZ2V0IGdldFByZWNpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlY2lwXG4gICAgfSxcblxuICAgIHNldCBzZXRIZWFkZXIobmV3SGVhZGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3SGVhZGVyXG4gICAgfSxcblxuICAgIHNldCBzZXRJY29uKG5ld0ljb24pIHtcbiAgICAgICAgdGhpcy5pY29uID0gbmV3SWNvblxuICAgIH0sXG5cbiAgICBzZXQgc2V0SGlnaFRlbXBDKG5ld0hpZ2hUZW1wQykge1xuICAgICAgICB0aGlzLmhpZ2hUZW1wQyA9IG5ld0hpZ2hUZW1wQ1xuICAgIH0sXG5cbiAgICBzZXQgc2V0TG93VGVtcEMobmV3TG93VGVtcEMpIHtcbiAgICAgICAgdGhpcy5sb3dUZW1wQyA9IG5ld0xvd1RlbXBDXG4gICAgfSxcblxuICAgIHNldCBzZXRIaWdoVGVtcEYobmV3SGlnaFRlbXBGKSB7XG4gICAgICAgIHRoaXMuaGlnaFRlbXBGID0gbmV3SGlnaFRlbXBGXG4gICAgfSxcblxuICAgIHNldCBzZXRMb3dUZW1wRihuZXdMb3dUZW1wRikge1xuICAgICAgICB0aGlzLmxvd1RlbXBGID0gbmV3TG93VGVtcEZcbiAgICB9LFxuXG4gICAgc2V0IHNldFByZWNpcChuZXdQcmVjaXApIHtcbiAgICAgICAgdGhpcy5wcmVjaXAgPSBuZXdQcmVjaXBcbiAgICB9LFxuXG59XG5cbmNvbnN0IG5leHRkYXkgPSB7XG4gICAgaGVhZGVyIDogbnVsbCxcbiAgICBpY29uIDogbnVsbCxcbiAgICBoaWdoVGVtcEMgOiBudWxsLFxuICAgIGxvd1RlbXBDIDogbnVsbCxcbiAgICBoaWdoVGVtcEYgOiBudWxsLFxuICAgIGxvd1RlbXBGIDogbnVsbCxcbiAgICBwcmVjaXAgOiBudWxsLFxuXG4gICAgZ2V0IGdldEhlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyXG4gICAgfSxcblxuICAgIGdldCBnZXRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uXG4gICAgfSxcblxuICAgIGdldCBnZXRIaWdoVGVtcEMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hUZW1wQ1xuICAgIH0sXG5cbiAgICBnZXQgZ2V0TG93VGVtcEMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd1RlbXBDXG4gICAgfSxcblxuICAgIGdldCBnZXRIaWdoVGVtcEYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hUZW1wRlxuICAgIH0sXG5cbiAgICBnZXQgZ2V0TG93VGVtcEYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvd1RlbXBGXG4gICAgfSxcblxuICAgIGdldCBnZXRQcmVjaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWNpcFxuICAgIH0sXG5cbiAgICBzZXQgc2V0SGVhZGVyKG5ld0hlYWRlcikge1xuICAgICAgICB0aGlzLmhlYWRlciA9IG5ld0hlYWRlclxuICAgIH0sXG5cbiAgICBzZXQgc2V0SWNvbihuZXdJY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IG5ld0ljb25cbiAgICB9LFxuXG4gICAgc2V0IHNldEhpZ2hUZW1wQyhuZXdIaWdoVGVtcEMpIHtcbiAgICAgICAgdGhpcy5oaWdoVGVtcEMgPSBuZXdIaWdoVGVtcENcbiAgICB9LFxuXG4gICAgc2V0IHNldExvd1RlbXBDKG5ld0xvd1RlbXBDKSB7XG4gICAgICAgIHRoaXMubG93VGVtcEMgPSBuZXdMb3dUZW1wQ1xuICAgIH0sXG5cbiAgICBzZXQgc2V0SGlnaFRlbXBGKG5ld0hpZ2hUZW1wRikge1xuICAgICAgICB0aGlzLmhpZ2hUZW1wRiA9IG5ld0hpZ2hUZW1wRlxuICAgIH0sXG5cbiAgICBzZXQgc2V0TG93VGVtcEYobmV3TG93VGVtcEYpIHtcbiAgICAgICAgdGhpcy5sb3dUZW1wRiA9IG5ld0xvd1RlbXBGXG4gICAgfSxcblxuICAgIHNldCBzZXRQcmVjaXAobmV3UHJlY2lwKSB7XG4gICAgICAgIHRoaXMucHJlY2lwID0gbmV3UHJlY2lwXG4gICAgfSxcblxufVxuXG5cbmV4cG9ydCB7IHRvZGF5LCB0b21vcnJvdywgbmV4dGRheSB9IiwiaW1wb3J0IHsgdG9kYXksIHRvbW9ycm93LCBuZXh0ZGF5IH0gZnJvbSAnLi9vYmplY3QuanMnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlcigpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wZDRiNTMxMDdmN2U0YTEwOTllMTk1NDAwMjMxODEwJnE9UGFyaXMmZGF5cz0zJyxcbiAgICB7bW9kZTogJ2NvcnMnfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5mb3JlY2FzdClcblxuICBzZXRUb2RheUZvcmVjYXN0SW5mbyh3ZWF0aGVyRGF0YSlcbiAgc2V0VG9tb3Jyb3dGb3JlY2FzdEluZm8od2VhdGhlckRhdGEpXG4gIHNldE5leHREYXlGb3JlY2FzdEluZm8od2VhdGhlckRhdGEpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wZDRiNTMxMDdmN2U0YTEwOTllMTk1NDAwMjMxODEwJnE9UGFyaXMnLFxuICAgICAgICB7bW9kZTogJ2NvcnMnfSlcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgc2V0VG9kYXlDdXJyZW50SW5mbyh3ZWF0aGVyRGF0YSlcbn1cblxuZnVuY3Rpb24gc2V0TmV4dERheUZvcmVjYXN0SW5mbyh3ZWF0aGVyRGF0YSkge1xuICAgIG5leHRkYXkuc2V0SGVhZGVyID0gJ1dlZWtkYXknXG4gICAgbmV4dGRheS5zZXRJY29uID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uXG5cbiAgICBuZXh0ZGF5LnNldEhpZ2hUZW1wQyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2NcbiAgICBuZXh0ZGF5LnNldExvd1RlbXBDID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfY1xuICAgIG5leHRkYXkuc2V0SGlnaFRlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZlxuICAgIG5leHRkYXkuc2V0TG93VGVtcEYgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mXG5cbiAgICB0b21vcnJvdy5zZXRQcmVjaXAgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW5cbn1cblxuZnVuY3Rpb24gc2V0VG9tb3Jyb3dGb3JlY2FzdEluZm8od2VhdGhlckRhdGEpIHtcbiAgICB0b21vcnJvdy5zZXRIZWFkZXIgPSAnVG9tb3Jyb3cnXG4gICAgdG9tb3Jyb3cuc2V0SWNvbiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvblxuXG4gICAgdG9tb3Jyb3cuc2V0SGlnaFRlbXBDID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfY1xuICAgIHRvbW9ycm93LnNldExvd1RlbXBDID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfY1xuICAgIHRvbW9ycm93LnNldEhpZ2hUZW1wRiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2ZcbiAgICB0b21vcnJvdy5zZXRMb3dUZW1wRiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2ZcblxuICAgIHRvbW9ycm93LnNldFByZWNpcCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpblxufVxuXG5mdW5jdGlvbiBzZXRUb2RheUN1cnJlbnRJbmZvKHdlYXRoZXJEYXRhKSB7XG4gICAgdG9kYXkubG9jYXRpb24uc2V0Q2l0eSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWVcbiAgICB0b2RheS5sb2NhdGlvbi5zZXRSZWdpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb25cbiAgICB0b2RheS5sb2NhdGlvbi5zZXRDb3VudHJ5ID0gd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKVxuICAgIGxldCBsb2NhdGlvblZhbHVlID0gdG9kYXkubG9jYXRpb24uZ2V0Q2l0eSArICcsICcgKyB0b2RheS5sb2NhdGlvbi5nZXRSZWdpb24gKyAnLCAnICsgdG9kYXkubG9jYXRpb24uZ2V0Q291bnRyeVxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb25WYWx1ZVxuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJylcbiAgICB0b2RheS5zZXREYXRlID0gd2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWRcbiAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kYXkuZ2V0RGF0ZVxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0VGVtcGVyYXR1cmVDID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2NcbiAgICB0b2RheS5tYWluSW5mby5zZXRUZW1wZXJhdHVyZUYgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZlxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0Q29uZGl0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dFxuXG4gICAgdG9kYXkubWFpbkluZm8uc2V0RmVlbHNMaWtlQyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2NcbiAgICB0b2RheS5tYWluSW5mby5zZXRGZWVsc0xpa2VGID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZlxuXG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFdpbmRLcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoXG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFdpbmRNcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoXG5cbiAgICB0b2RheS5vdGhlckluZm8uc2V0SHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5XG4gICAgdG9kYXkub3RoZXJJbmZvLnNldFV2SW5kZXggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnV2XG59XG5cbmZ1bmN0aW9uIHNldFRvZGF5Rm9yZWNhc3RJbmZvKHdlYXRoZXJEYXRhKSB7XG5cbiAgICB0b2RheS5tYWluSW5mby5zZXRJY29uID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uXG5cbiAgICB0b2RheS5tYWluSW5mby5zZXRIaWdoVGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jXG4gICAgdG9kYXkubWFpbkluZm8uc2V0TG93VGVtcEMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jXG4gICAgdG9kYXkubWFpbkluZm8uc2V0SGlnaFRlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZlxuICAgIHRvZGF5Lm1haW5JbmZvLnNldExvd1RlbXBGID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZlxuICBcbiAgICB0b2RheS5vdGhlckluZm8uc2V0UHJlY2lwID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluXG4gIFxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRTdW5yaXNlID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZVxuICAgIHRvZGF5Lm90aGVySW5mby5zZXRTdW5zZXQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXRcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFdlYXRoZXIoKSB7XG5cbiAgICBnZXRDdXJyZW50V2VhdGhlcigpXG4gICAgZ2V0Rm9yZWNhc3RXZWF0aGVyKClcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJylcblxuICAgIGxldCBsb2NhdGlvblZhbHVlID0gdG9kYXkubG9jYXRpb24uZ2V0Q2l0eSArICcsICcgKyB0b2RheS5sb2NhdGlvbi5nZXRSZWdpb24gKyAnLCAnICsgdG9kYXkubG9jYXRpb24uZ2V0Q291bnRyeVxuXG4gICAgbG9jYXRpb24udmFsdWUgPSBsb2NhdGlvblZhbHVlXG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9yZWNhc3RXZWF0aGVyLFxuICAgIGdldEN1cnJlbnRXZWF0aGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3RXZWF0aGVyLCBnZXRDdXJyZW50V2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcidcblxuZ2V0Rm9yZWNhc3RXZWF0aGVyKClcbmdldEN1cnJlbnRXZWF0aGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=