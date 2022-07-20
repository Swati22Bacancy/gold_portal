(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_createcustomer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  data: function data() {
    return {
      customerType: 'business',
      theme: 'cust-type',
      formdata: {}
    };
  },
  methods: {
    changetype: function changetype(type) {
      this.customerType = type;
    },
    create_customer: function create_customer() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this.formdata.customertype = _this.customerType;
                _context.next = 4;
                return axios.post("create_customer", {
                  firstname: _this.formdata.firstname,
                  lastname: _this.formdata.lastname,
                  email: _this.formdata.email,
                  companyname: _this.formdata.companyname,
                  registeredaddress: _this.formdata.registeredaddress,
                  vat: _this.formdata.vat,
                  telephone: _this.formdata.telephone,
                  whatsapp: _this.formdata.whatsapp,
                  title: _this.formdata.title,
                  creditlimit: _this.formdata.creditlimit,
                  companycode: _this.formdata.companycode,
                  customertype: _this.formdata.customertype
                });

              case 4:
                response = _context.sent;

                _this.$router.push("/customers");

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#dash-datatable[data-v-68016c19]\r\n{\r\n  font-size: 13px;\r\n  color: #000;\n}\n.createcust-div[data-v-68016c19]\r\n{\r\n  background: #fff;\r\n  padding: 34px 23px;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);\n}\n.crt-customer label[data-v-68016c19]\r\n{\r\n  font-size: 12px;\n}\n.crt-customer[data-v-68016c19]\r\n{\r\n  padding: 0px 2%;\r\n  color: #000;\n}\n.dark-theme-btn[data-v-68016c19]\r\n{\r\n  background-color: #245388 !important;\r\n  color: #fff;\r\n  width: 100px;\r\n  font-size: 12px !important;\n}\n.light-theme-btn[data-v-68016c19]\r\n{\r\n  background-color: #EDF2F6 !important;\r\n  color: #000;\r\n  width: 100px;\r\n  font-size: 12px !important;\n}\n.btn[data-v-68016c19]:focus, .btn.focus[data-v-68016c19]\r\n{\r\n  box-shadow: 0 0;\n}\n@media (min-width: 768px) {\n.detail-div[data-v-68016c19]\r\n  {\r\n    border-right: 1.5px solid rgb(204, 204, 204);\r\n    padding-right: 8%;\n}\n.primary-div[data-v-68016c19]\r\n  {\r\n    padding-left: 8%;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_style_index_0_id_68016c19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_style_index_0_id_68016c19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_style_index_0_id_68016c19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/admin/createcustomer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/createcustomer.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createcustomer_vue_vue_type_template_id_68016c19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createcustomer.vue?vue&type=template&id=68016c19&scoped=true& */ "./resources/js/views/admin/createcustomer.vue?vue&type=template&id=68016c19&scoped=true&");
/* harmony import */ var _createcustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createcustomer.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/createcustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _createcustomer_vue_vue_type_style_index_0_id_68016c19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css& */ "./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _createcustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createcustomer_vue_vue_type_template_id_68016c19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _createcustomer_vue_vue_type_template_id_68016c19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "68016c19",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/createcustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/createcustomer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/createcustomer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createcustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_style_index_0_id_68016c19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=style&index=0&id=68016c19&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/createcustomer.vue?vue&type=template&id=68016c19&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/admin/createcustomer.vue?vue&type=template&id=68016c19&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_template_id_68016c19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_template_id_68016c19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createcustomer_vue_vue_type_template_id_68016c19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createcustomer.vue?vue&type=template&id=68016c19&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=template&id=68016c19&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=template&id=68016c19&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createcustomer.vue?vue&type=template&id=68016c19&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "crt-customer",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.create_customer.apply(null, arguments)
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12 createcust-div" }, [
            _c("div", { staticClass: "row mb-4" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group customer-input" }, [
                  _c("label", [_vm._v("Customer Type")]),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn admin-btn mobile-mb",
                      class:
                        _vm.customerType == "business"
                          ? "dark-theme-btn"
                          : "light-theme-btn",
                      staticStyle: { margin: "0" },
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.changetype("business")
                        }
                      }
                    },
                    [_vm._v("Business")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn admin-btn mobile-mb",
                      class:
                        _vm.customerType == "individual"
                          ? "dark-theme-btn"
                          : "light-theme-btn",
                      staticStyle: { margin: "0" },
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.changetype("individual")
                        }
                      }
                    },
                    [_vm._v("Individual")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group customer-input" }, [
                  _c("label", [_vm._v("Company Code")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formdata.companycode,
                        expression: "formdata.companycode"
                      }
                    ],
                    staticClass: "form-control form-control-user",
                    attrs: {
                      type: "text",
                      id: "crt-customer",
                      "aria-describedby": "emailHelp",
                      placeholder: ""
                    },
                    domProps: { value: _vm.formdata.companycode },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formdata,
                          "companycode",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" })
            ]),
            _vm._v(" "),
            _vm.customerType == "business"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6 detail-div" }, [
                    _c("h6", [_vm._v("Company Details")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Company Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.companyname,
                            expression: "formdata.companyname"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.companyname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "companyname",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Registered Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.registeredaddress,
                            expression: "formdata.registeredaddress"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.registeredaddress },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "registeredaddress",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("VAT No.")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.vat,
                            expression: "formdata.vat"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.vat },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.formdata, "vat", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("h6", [_vm._v("Company Details")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.email,
                            expression: "formdata.email"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.formdata, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Telephone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.telephone,
                            expression: "formdata.telephone"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.telephone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "telephone",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Whatsapp Number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.whatsapp,
                            expression: "formdata.whatsapp"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.whatsapp },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "whatsapp",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 primary-div" }, [
                    _c("h6", [_vm._v("Primary Contact")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Title")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.title,
                            expression: "formdata.title"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.formdata, "title", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.firstname,
                            expression: "formdata.firstname"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.firstname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "firstname",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.lastname,
                            expression: "formdata.lastname"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.lastname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "lastname",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("h6", [_vm._v("Settings")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.creditlimit,
                            expression: "formdata.creditlimit"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.creditlimit },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "creditlimit",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.customerType == "individual"
              ? _c("div", { staticClass: "row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3)
                ])
              : _vm._e()
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Create New Customer")
        ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            {
              staticClass: "btn admin-btn mobile-mb btn-nwidth",
              staticStyle: { "background-color": "#7ADAAA !important" },
              attrs: { type: "submit" }
            },
            [_vm._v("Save")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn admin-btn mobile-mb btn-nwidth",
              attrs: { type: "button" }
            },
            [_vm._v("Cancel")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Credit Limit ("),
      _c("i", {
        staticClass: "fa fa-pound-sign",
        staticStyle: { "font-size": "10px" }
      }),
      _vm._v(")")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 detail-div" }, [
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("Title")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("First Name")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 primary-div" }, [
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("Registered Address")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("Telephone")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group customer-input" }, [
        _c("label", [_vm._v("Whatsapp Number")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "text",
            id: "crt-customer",
            "aria-describedby": "emailHelp",
            placeholder: ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);