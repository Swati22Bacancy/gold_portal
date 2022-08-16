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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _object_to_formdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../object-to-formdata */ "./resources/js/object-to-formdata.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["user", "permissions"])),
  data: function data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata: {},
      industrysectors: {},
      currencies: {},
      filename: '',
      file: '',
      credit_filename: '',
      creditfile: '',
      vat_filename: '',
      vatfile: '',
      incorporation_filename: '',
      incorporationfile: '',
      accounting_filename: '',
      accountingfile: '',
      filename1: '',
      credit_filename1: '',
      vat_filename1: '',
      incorporation_filename1: '',
      accounting_filename1: ''
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
                _this2.formdata.file = _this2.file;
                _this2.formdata.creditfile = _this2.creditfile;
                _this2.formdata.vatfile = _this2.vatfile;
                _this2.formdata.incorporationfile = _this2.incorporationfile;
                _this2.formdata.accountingfile = _this2.accountingfile;
                _context.next = 8;
                return axios.post("store_details", (0,_object_to_formdata__WEBPACK_IMPORTED_MODULE_1__.objectToFormData)(_this2.formdata));

              case 8:
                response = _context.sent;
                _this2.file = '';
                _this2.creditfile = '';
                _this2.vatfile = '';
                _this2.incorporationfile = '';
                _this2.accountingfile = '';
                message = "Company Details has been successfully saved.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                _message = 'Something went wrong, Please try again';
                _toast = Vue.toasted.show(_message, {
                  theme: "toasted-error",
                  position: "top-center",
                  duration: 5000
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
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
                _this3.formdata.file = _this3.file;
                _this3.formdata.creditfile = _this3.creditfile;
                _this3.formdata.vatfile = _this3.vatfile;
                _this3.formdata.incorporationfile = _this3.incorporationfile;
                _this3.formdata.accountingfile = _this3.accountingfile;
                _context2.next = 8;
                return axios.post("update_details", (0,_object_to_formdata__WEBPACK_IMPORTED_MODULE_1__.objectToFormData)(_this3.formdata));

              case 8:
                response = _context2.sent;
                _this3.file = '';
                _this3.creditfile = '';
                _this3.vatfile = '';
                _this3.incorporationfile = '';
                _this3.accountingfile = '';
                message = "Company Details has been successfully saved.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                _message2 = 'Something went wrong, Please try again';
                _toast2 = Vue.toasted.show(_message2, {
                  theme: "toasted-error",
                  position: "top-center",
                  duration: 5000
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 18]]);
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
    },
    onFileChange: function onFileChange(e) {
      this.filename = "Selected File: " + e.target.files[0].name;
      this.file = e.target.files[0];
    },
    onCreditFileChange: function onCreditFileChange(e) {
      this.credit_filename = "Selected File: " + e.target.files[0].name;
      this.creditfile = e.target.files[0];
    },
    onVatFileChange: function onVatFileChange(e) {
      this.vat_filename = "Selected File: " + e.target.files[0].name;
      this.vatfile = e.target.files[0];
    },
    onIncorporationFileChange: function onIncorporationFileChange(e) {
      this.incorporation_filename = "Selected File: " + e.target.files[0].name;
      this.incorporationfile = e.target.files[0];
    },
    onAccountingFileChange: function onAccountingFileChange(e) {
      this.accounting_filename = "Selected File: " + e.target.files[0].name;
      this.accountingfile = e.target.files[0];
    },
    download: function download(image) {
      axios.get("/download?image=" + image, {
        responseType: 'blob'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', image);
        document.body.appendChild(link);
        link.click();
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.getIndustrySectors();
    this.getCurrencies();
    axios.get('/saved_companydetails/').then(function (response) {
      _this6.formdata = response.data;
      _this6.filename1 = response.data.identification_file;
      _this6.credit_filename1 = response.data.credit_file;
      _this6.vat_filename1 = response.data.vat_file;
      _this6.incorporation_filename1 = response.data.incorporation_file;
      _this6.accounting_filename1 = response.data.accounting_file;
    })["catch"](function (error) {//app.$notify(error.response.data.error, "error");
    });
  }
});

/***/ }),

/***/ "./resources/js/object-to-formdata.js":
/*!********************************************!*\
  !*** ./resources/js/object-to-formdata.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToFormData": () => (/* binding */ objectToFormData)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isUndefined(value) {
  return value === undefined;
}

function isNull(value) {
  return value === null;
}

function isObject(value) {
  return value === Object(value);
}

function isArray(value) {
  return Array.isArray(value);
}

function isDate(value) {
  return value instanceof Date;
}

function isBlob(value) {
  return value && typeof value.size === 'number' && typeof value.type === 'string' && typeof value.slice === 'function';
}

function isFile(value) {
  return isBlob(value) && (_typeof(value.lastModifiedDate) === 'object' || typeof value.lastModified === 'number') && typeof value.name === 'string';
}

function isFormData(value) {
  return value instanceof FormData;
}

var objectToFormData = function objectToFormData(obj, cfg, fd, pre) {
  if (isFormData(cfg)) {
    pre = fd;
    fd = cfg;
    cfg = null;
  }

  cfg = cfg || {};
  cfg.indices = isUndefined(cfg.indices) ? false : cfg.indices;
  cfg.nulls = isUndefined(cfg.nulls) ? true : cfg.nulls;
  fd = fd || new FormData();

  if (isUndefined(obj)) {
    return fd;
  } else if (isNull(obj)) {
    if (cfg.nulls) {
      fd.append(pre, '');
    }
  } else if (isArray(obj)) {
    if (!obj.length) {
      var key = pre + '[]';
      fd.append(key, '');
    } else {
      obj.forEach(function (value, index) {
        var key = pre + '[' + (cfg.indices ? index : '') + ']';
        objectToFormData(value, cfg, fd, key);
      });
    }
  } else if (isDate(obj)) {
    fd.append(pre, obj.toISOString());
  } else if (isObject(obj) && !isFile(obj) && !isBlob(obj)) {
    Object.keys(obj).forEach(function (prop) {
      var value = obj[prop];

      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }

      var key = pre ? pre + '[' + prop + ']' : prop;
      objectToFormData(value, cfg, fd, key);
    });
  } else {
    fd.append(pre, obj);
  }

  return fd;
};

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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tab-selector[data-v-59ba08e4]\r\n{\r\n  border: 1px solid #D6E3F2 !important;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 11%;\r\n  color: #3377c2;\r\n  font-size: 13px;\n}\n.check-position[data-v-59ba08e4]\r\n{\r\n  margin-left: 2%;\n}\n.inv_setting_input[data-v-59ba08e4]\r\n{\r\n  width: 20%;\n}\n.invoice_basic[data-v-59ba08e4]\r\n{\r\n  max-width:80%;\n}\n.radio-label[data-v-59ba08e4]\r\n{\r\n  font-size: 15px !important;\r\n  margin-left: 5px;\n}\n.company_setting label[data-v-59ba08e4] {\r\n    font-size: 14px;\n}\n.invoice_basic span[data-v-59ba08e4]\r\n{\r\n  color: #807e7e;\r\n  font-size: 11px;\n}\n.company_setting label[data-v-59ba08e4] {\r\n    font-size: 12px;\n}\n.check-position[data-v-59ba08e4]\r\n{\r\n  margin-left: 10%;\n}\n.box-content h6[data-v-59ba08e4]\r\n{\r\n padding: 2% 0 1% 0;\r\n font-family: 'Titillium-Web-Bold';\n}\n.upload_text[data-v-59ba08e4]\r\n{\r\n  font-size: 14px;\r\n  margin-left: 1%;\n}\n.document_title[data-v-59ba08e4]\r\n{\r\n  font-size: 15px;\n}\n.download_link[data-v-59ba08e4]\r\n{\r\n  display: inline-block;\r\n  padding: 0.375rem 0.75rem;\r\n  background-color: #7ADAAA;\r\n  font-size: 13px !important;\r\n  color: #000;\r\n  border-radius: 5px;\r\n  height: auto;\r\n  margin-left: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Documents")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("input", {
                      staticClass: "custom-file-input",
                      attrs: {
                        type: "file",
                        name: "filename",
                        id: "inputFileUpload"
                      },
                      on: { change: _vm.onFileChange }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-file-label",
                        attrs: { for: "inputFileUpload" }
                      },
                      [_vm._v("Choose file")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm._v(_vm._s(_vm.filename))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm.filename1
                      ? _c(
                          "a",
                          {
                            staticClass: "download_link",
                            on: {
                              click: function($event) {
                                return _vm.download(_vm.filename1)
                              }
                            }
                          },
                          [_vm._v("Download")]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("input", {
                      staticClass: "custom-file-input",
                      attrs: {
                        type: "file",
                        name: "credit_filename",
                        id: "inputCreditFileUpload"
                      },
                      on: { change: _vm.onCreditFileChange }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-file-label",
                        attrs: { for: "inputCreditFileUpload" }
                      },
                      [_vm._v("Choose file")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm._v(_vm._s(_vm.credit_filename))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm.credit_filename1
                      ? _c(
                          "a",
                          {
                            staticClass: "download_link",
                            on: {
                              click: function($event) {
                                return _vm.download(_vm.credit_filename1)
                              }
                            }
                          },
                          [_vm._v("Download")]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("input", {
                      staticClass: "custom-file-input",
                      attrs: {
                        type: "file",
                        name: "vat_filename",
                        id: "inputVatFileUpload"
                      },
                      on: { change: _vm.onVatFileChange }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-file-label",
                        attrs: { for: "inputVatFileUpload" }
                      },
                      [_vm._v("Choose file")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm._v(_vm._s(_vm.vat_filename))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm.vat_filename1
                      ? _c(
                          "a",
                          {
                            staticClass: "download_link",
                            on: {
                              click: function($event) {
                                return _vm.download(_vm.vat_filename1)
                              }
                            }
                          },
                          [_vm._v("Download")]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("input", {
                      staticClass: "custom-file-input",
                      attrs: {
                        type: "file",
                        name: "incorporation_filename",
                        id: "inputIncorporationFileUpload"
                      },
                      on: { change: _vm.onIncorporationFileChange }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-file-label",
                        attrs: { for: "inputIncorporationFileUpload" }
                      },
                      [_vm._v("Choose file")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm._v(_vm._s(_vm.incorporation_filename))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm.incorporation_filename1
                      ? _c(
                          "a",
                          {
                            staticClass: "download_link",
                            on: {
                              click: function($event) {
                                return _vm.download(_vm.incorporation_filename1)
                              }
                            }
                          },
                          [_vm._v("Download")]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("input", {
                      staticClass: "custom-file-input",
                      attrs: {
                        type: "file",
                        name: "accounting_filename",
                        id: "inputAccountingFileUpload"
                      },
                      on: { change: _vm.onAccountingFileChange }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-file-label",
                        attrs: { for: "inputAccountingFileUpload" }
                      },
                      [_vm._v("Choose file")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm._v(_vm._s(_vm.accounting_filename))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "upload_text" }, [
                    _vm.accounting_filename1
                      ? _c(
                          "a",
                          {
                            staticClass: "download_link",
                            on: {
                              click: function($event) {
                                return _vm.download(_vm.accounting_filename1)
                              }
                            }
                          },
                          [_vm._v("Download")]
                        )
                      : _vm._e()
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("p", { staticClass: "document_title" }, [_vm._v("Identification:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("p", { staticClass: "document_title" }, [_vm._v("Credit Report:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("p", { staticClass: "document_title" }, [_vm._v("VAT Certificate:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("p", { staticClass: "document_title" }, [
        _vm._v("Incorporation Certificate:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("p", { staticClass: "document_title" }, [_vm._v("Accounting Form:")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);