(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_companydetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "CompanyDetails",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["user", "permissions"])),
  data: function data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata: {},
      industrysectors: {},
      currencies: {}
    };
  },
  methods: {
    is_super_admin: function is_super_admin() {
      if (this.user) {
        if (this.user.role_id == 1) {
          return true;
        } else {
          return false;
        }
      }
    },
    checkPermission: function checkPermission(permission) {
      if (this.permissions.length > 0) {
        for (var i = 0; i <= this.permissions.length; i++) {
          if (this.permissions[i] === permission) {
            return true;
          } else false;
        }
      }
    },
    fetchCurrency: function fetchCurrency() {
      var _this = this;

      axios.get('/currencydetails/' + this.formdata.currency_id).then(function (response) {
        _this.formdata.currency_symbol = response.data.symbol;
      })["catch"](function (error) {});
    },
    storeCompanyDetails: function storeCompanyDetails() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, message, toast, _message, _toast;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post("store_details", {
                  company_name: _this2.formdata.company_name,
                  address1: _this2.formdata.address1,
                  address2: _this2.formdata.address2,
                  postcode: _this2.formdata.postcode,
                  country: _this2.formdata.country,
                  contact_name: _this2.formdata.contact_name,
                  contact_email: _this2.formdata.contact_email,
                  contact_telephone: _this2.formdata.contact_telephone,
                  contact_mobile: _this2.formdata.contact_mobile,
                  payment_days: _this2.formdata.payment_days,
                  payment_condition: _this2.formdata.payment_condition,
                  currency_id: _this2.formdata.currency_id,
                  vat_status: _this2.formdata.vat_status,
                  vat_number: _this2.formdata.vat_number,
                  sector_id: _this2.formdata.sector_id,
                  business_type: _this2.formdata.business_type
                });

              case 3:
                response = _context.sent;
                message = "Company Details has been successfully saved.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _message = 'Something went wrong, Please try again';
                _toast = Vue.toasted.show(_message, {
                  theme: "toasted-error",
                  position: "top-center",
                  duration: 5000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    updateCompanyDetails: function updateCompanyDetails() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response, message, toast, _message2, _toast2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.post("update_details", {
                  company_name: _this3.formdata.company_name,
                  address1: _this3.formdata.address1,
                  address2: _this3.formdata.address2,
                  postcode: _this3.formdata.postcode,
                  country: _this3.formdata.country,
                  contact_name: _this3.formdata.contact_name,
                  contact_email: _this3.formdata.contact_email,
                  contact_telephone: _this3.formdata.contact_telephone,
                  contact_mobile: _this3.formdata.contact_mobile,
                  payment_days: _this3.formdata.payment_days,
                  payment_condition: _this3.formdata.payment_condition,
                  currency_id: _this3.formdata.currency_id,
                  vat_status: _this3.formdata.vat_status,
                  vat_number: _this3.formdata.vat_number,
                  sector_id: _this3.formdata.sector_id,
                  business_type: _this3.formdata.business_type
                });

              case 3:
                response = _context2.sent;
                message = "Company Details has been successfully saved.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                _message2 = 'Something went wrong, Please try again';
                _toast2 = Vue.toasted.show(_message2, {
                  theme: "toasted-error",
                  position: "top-center",
                  duration: 5000
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    getIndustrySectors: function getIndustrySectors() {
      var _this4 = this;

      return axios.get("industrysector_list").then(function (response) {
        _this4.industrysectors = response.data;
      });
    },
    getCurrencies: function getCurrencies() {
      var _this5 = this;

      return axios.get("currencylist").then(function (response) {
        _this5.currencies = response.data;
      });
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.getIndustrySectors();
    this.getCurrencies();
    axios.get('/saved_companydetails/').then(function (response) {
      _this6.formdata = response.data;
    })["catch"](function (error) {//app.$notify(error.response.data.error, "error");
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tab-selector[data-v-59ba08e4]\r\n{\r\n  border: 1px solid #D6E3F2 !important;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 11%;\r\n  color: #3377c2;\r\n  font-size: 13px;\n}\n.check-position[data-v-59ba08e4]\r\n{\r\n  margin-left: 2%;\n}\n.inv_setting_input[data-v-59ba08e4]\r\n{\r\n  width: 20%;\n}\n.invoice_basic[data-v-59ba08e4]\r\n{\r\n  max-width:80%;\n}\n.radio-label[data-v-59ba08e4]\r\n{\r\n  font-size: 15px !important;\r\n  margin-left: 5px;\n}\n.company_setting label[data-v-59ba08e4] {\r\n    font-size: 14px;\n}\n.invoice_basic span[data-v-59ba08e4]\r\n{\r\n  color: #807e7e;\r\n  font-size: 11px;\n}\n.company_setting label[data-v-59ba08e4] {\r\n    font-size: 12px;\n}\n.check-position[data-v-59ba08e4]\r\n{\r\n  margin-left: 10%;\n}\n.box-content h6[data-v-59ba08e4]\r\n{\r\n padding: 2% 0 1% 0;\r\n font-family: 'Titillium-Web-Bold';\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_style_index_0_id_59ba08e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_style_index_0_id_59ba08e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_style_index_0_id_59ba08e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/views/admin/companydetails.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/companydetails.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _companydetails_vue_vue_type_template_id_59ba08e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companydetails.vue?vue&type=template&id=59ba08e4&scoped=true& */ "./resources/js/views/admin/companydetails.vue?vue&type=template&id=59ba08e4&scoped=true&");
/* harmony import */ var _companydetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companydetails.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/companydetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _companydetails_vue_vue_type_style_index_0_id_59ba08e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css& */ "./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _companydetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _companydetails_vue_vue_type_template_id_59ba08e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _companydetails_vue_vue_type_template_id_59ba08e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "59ba08e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/companydetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/companydetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/companydetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./companydetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_style_index_0_id_59ba08e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=style&index=0&id=59ba08e4&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/companydetails.vue?vue&type=template&id=59ba08e4&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/admin/companydetails.vue?vue&type=template&id=59ba08e4&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_template_id_59ba08e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_template_id_59ba08e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_companydetails_vue_vue_type_template_id_59ba08e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./companydetails.vue?vue&type=template&id=59ba08e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=template&id=59ba08e4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=template&id=59ba08e4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/companydetails.vue?vue&type=template&id=59ba08e4&scoped=true& ***!
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
        staticClass: "company_setting",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.formdata.id
              ? _vm.updateCompanyDetails()
              : _vm.storeCompanyDetails()
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "d-sm-flex align-items-center justify-content-between mb-4"
          },
          [
            _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
              _vm._v("Company Details")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
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
                _c("router-link", { attrs: { to: "/settings" } }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn admin-btn mobile-mb btn-nwidth",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Cancel")]
                  )
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "company-cstm" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "box-content box-align box-padding" }, [
                _c("h6", [_vm._v("Business Type")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.business_type,
                          expression: "formdata.business_type"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "limited",
                        name: "business_type",
                        value: "limited"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.business_type, "limited")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "business_type",
                            "limited"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "radio-label", attrs: { for: "limited" } },
                      [_vm._v("Limited Company")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.business_type,
                          expression: "formdata.business_type"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "sole",
                        name: "business_type",
                        value: "sole"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.business_type, "sole")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.formdata, "business_type", "sole")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "radio-label", attrs: { for: "sole" } },
                      [_vm._v("Sole Trader")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.business_type,
                          expression: "formdata.business_type"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "liability",
                        name: "business_type",
                        value: "liability"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.business_type, "liability")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "business_type",
                            "liability"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label",
                        attrs: { for: "liability" }
                      },
                      [_vm._v("Limited Liability Partnership")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.business_type,
                          expression: "formdata.business_type"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "plc",
                        name: "business_type",
                        value: "plc"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.business_type, "plc")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.formdata, "business_type", "plc")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "radio-label", attrs: { for: "plc" } },
                      [_vm._v("PLC")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Company Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Company Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.company_name,
                          expression: "formdata.company_name"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.company_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "company_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Address Line 1")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.address1,
                          expression: "formdata.address1"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.address1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "address1",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Address Line 2")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.address2,
                          expression: "formdata.address2"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.address2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "address2",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Post Code")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.postcode,
                          expression: "formdata.postcode"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.postcode },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "postcode",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Country")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.country,
                          expression: "formdata.country"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.country },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.formdata, "country", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Contact Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.contact_name,
                          expression: "formdata.contact_name"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.contact_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "contact_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.contact_email,
                          expression: "formdata.contact_email"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.contact_email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "contact_email",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Telephone")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.contact_telephone,
                          expression: "formdata.contact_telephone"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.contact_telephone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "contact_telephone",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Mobile")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.contact_mobile,
                          expression: "formdata.contact_mobile"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.contact_mobile },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "contact_mobile",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Default Payment Terms")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-1" }, [
                    _c("label", [_vm._v("Days")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.payment_days,
                          expression: "formdata.payment_days"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: ""
                      },
                      domProps: { value: _vm.formdata.payment_days },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "payment_days",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Condition")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.payment_condition,
                            expression: "formdata.payment_condition"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formdata,
                              "payment_condition",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "after_invoice" } }, [
                          _vm._v("Days after sales invoice date")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "after_delivery" } }, [
                          _vm._v("Days after delivery date")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Home Currency")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("label", [_vm._v("Currency Name")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.currency_id,
                            expression: "formdata.currency_id"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.formdata,
                                "currency_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.fetchCurrency()
                            }
                          ]
                        }
                      },
                      _vm._l(_vm.currencies, function(currency) {
                        return _c(
                          "option",
                          {
                            key: currency.id,
                            domProps: { value: currency.id }
                          },
                          [_vm._v(_vm._s(currency.name))]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-1" }, [
                    _c("label", [_vm._v("Symbol")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.currency_symbol,
                          expression: "formdata.currency_symbol"
                        }
                      ],
                      staticClass: "form-control form-control-user",
                      attrs: {
                        type: "text",
                        id: "crt-customer",
                        "aria-describedby": "emailHelp",
                        placeholder: "",
                        readonly: ""
                      },
                      domProps: { value: _vm.formdata.currency_symbol },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formdata,
                            "currency_symbol",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "custom-checkbox small check-position" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formdata.output_tax,
                                expression: "formdata.output_tax"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "checkbox", id: "customCheck" },
                            domProps: {
                              checked: Array.isArray(_vm.formdata.output_tax)
                                ? _vm._i(_vm.formdata.output_tax, null) > -1
                                : _vm.formdata.output_tax
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.formdata.output_tax,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.formdata,
                                        "output_tax",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.formdata,
                                        "output_tax",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.formdata, "output_tax", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              staticStyle: { color: "#000" },
                              attrs: { for: "customCheck" }
                            },
                            [_vm._v("Position to the right of the value")]
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("VAT Registration Status")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.vat_status,
                          expression: "formdata.vat_status"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "vat_uk",
                        name: "vat_status",
                        value: "vat_uk"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.vat_status, "vat_uk")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.formdata, "vat_status", "vat_uk")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "radio-label", attrs: { for: "vat_uk" } },
                      [
                        _vm._v(
                          "VAT registered in the UK (includes Northern Ireland)"
                        )
                      ]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.vat_status,
                          expression: "formdata.vat_status"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "vat_eu",
                        name: "vat_status",
                        value: "vat_eu"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.vat_status, "vat_eu")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.formdata, "vat_status", "vat_eu")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "radio-label", attrs: { for: "vat_eu" } },
                      [_vm._v("VAT registered in an EU member state")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.vat_status,
                          expression: "formdata.vat_status"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "vat_not",
                        name: "vat_status",
                        value: "vat_not"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.vat_status, "vat_not")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.formdata, "vat_status", "vat_not")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "radio-label", attrs: { for: "vat_not" } },
                      [_vm._v("Not VAT registered")]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.formdata.vat_status == "vat_uk" ||
                  _vm.formdata.vat_status == "vat_eu"
                    ? _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("label", [_vm._v("VAT Reg. Number")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.vat_number,
                              expression: "formdata.vat_number"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            id: "crt-customer",
                            "aria-describedby": "emailHelp",
                            placeholder: ""
                          },
                          domProps: { value: _vm.formdata.vat_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "vat_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Industry Sector")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.sector_id,
                            expression: "formdata.sector_id"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formdata,
                              "sector_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.industrysectors, function(industrysector) {
                        return _c(
                          "option",
                          {
                            key: industrysector.id,
                            domProps: { value: industrysector.id }
                          },
                          [_vm._v(_vm._s(industrysector.title))]
                        )
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);