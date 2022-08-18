(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_vatsettings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VatSettings",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["user", "permissions"])),
  data: function data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata: {},
      vatRates: []
    };
  },
  methods: {
    adddata: function adddata() {
      if (this.formdata.entered_vatrate) {
        this.vatRates.push({
          id: Date.now(),
          value: this.formdata.entered_vatrate
        });
        console.log(this.vatRates);
        this.formdata.entered_vatrate = "";
      }
    },
    deletedata: function deletedata() {
      var _this = this;

      console.log(this.formdata.vat_rate);
      var index = this.vatRates.findIndex(function (rate) {
        return rate.id == _this.formdata.vat_rate;
      });

      if (index != -1) {
        this.vatRates.splice(index, 1);
      }
    },
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
    storeVatSettings: function storeVatSettings() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, message, toast, _message, _toast;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post("store_vatsettings", _this2.formdata);

              case 3:
                response = _context.sent;
                message = "VAT Settings has been successfully saved.";
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
    updateVatSettings: function updateVatSettings() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response, message, toast, _message2, _toast2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.post("update_vatsettings", _this3.formdata);

              case 3:
                response = _context2.sent;
                message = "VAT Settings has been successfully saved.";
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
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    axios.get('/saved_vatsettings/').then(function (response) {
      _this4.formdata = response.data;
      _this4.formdata.password = "";
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tab-selector[data-v-e37b42c6]\r\n{\r\n  border: 1px solid #D6E3F2 !important;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 11%;\r\n  color: #3377c2;\r\n  font-size: 13px;\n}\n.check-position[data-v-e37b42c6]\r\n{\r\n  margin-left: 0;\n}\n.vat_checkbox label[data-v-e37b42c6]{\r\n  font-size: 14px !important;\r\n  letter-spacing: 0.7px;\n}\n.inv_setting_input[data-v-e37b42c6]\r\n{\r\n  width: 20%;\n}\n.invoice_basic[data-v-e37b42c6]\r\n{\r\n  max-width:80%;\n}\n.radio-label[data-v-e37b42c6]\r\n{\r\n  font-size: 15px !important;\r\n  margin-left: 5px;\n}\n.vat_setting label[data-v-e37b42c6] {\r\n    font-size: 14px;\n}\n.invoice_basic span[data-v-e37b42c6]\r\n{\r\n  color: #807e7e;\r\n  font-size: 11px;\n}\n.vat_setting label[data-v-e37b42c6] {\r\n    font-size: 12px;\n}\n.check-position[data-v-e37b42c6]\r\n{\r\n  margin-left: 4%;\n}\n.box-content h6[data-v-e37b42c6]\r\n{\r\n padding: 2% 0 1% 0;\r\n font-family: 'Titillium-Web-Bold';\n}\n.upload_text[data-v-e37b42c6]\r\n{\r\n  font-size: 14px;\r\n  margin-left: 1%;\n}\n.document_title[data-v-e37b42c6]\r\n{\r\n  font-size: 15px;\n}\n.download_link[data-v-e37b42c6]\r\n{\r\n  display: inline-block;\r\n  padding: 0.375rem 0.75rem;\r\n  background-color: #7ADAAA;\r\n  font-size: 13px !important;\r\n  color: #000;\r\n  border-radius: 5px;\r\n  height: auto;\r\n  margin-left: 10px;\n}\n.material-symbols-outlined[data-v-e37b42c6]{\r\n  position: absolute;\r\n  margin-right: 30px;\r\n  top: 10px;\r\n  right: -20px;\n}\n.fa-plus[data-v-e37b42c6]{\r\n  position: absolute;\r\n  color: green;\r\n  top: 10px;\r\n  left: 160px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_style_index_0_id_e37b42c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_style_index_0_id_e37b42c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_style_index_0_id_e37b42c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/vatsettings.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/vatsettings.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vatsettings_vue_vue_type_template_id_e37b42c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true& */ "./resources/js/views/admin/vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true&");
/* harmony import */ var _vatsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vatsettings.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/vatsettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _vatsettings_vue_vue_type_style_index_0_id_e37b42c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css& */ "./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _vatsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _vatsettings_vue_vue_type_template_id_e37b42c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _vatsettings_vue_vue_type_template_id_e37b42c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e37b42c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/vatsettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/vatsettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/vatsettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vatsettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_style_index_0_id_e37b42c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=style&index=0&id=e37b42c6&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_template_id_e37b42c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_template_id_e37b42c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vatsettings_vue_vue_type_template_id_e37b42c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/vatsettings.vue?vue&type=template&id=e37b42c6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "vat_setting",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.formdata.id ? _vm.updateVatSettings() : _vm.storeVatSettings()
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
              _vm._v("VAT Settings")
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
                        _c("label", [_vm._v("Tax Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.tax_name,
                              expression: "formdata.tax_name"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: ""
                          },
                          domProps: { value: _vm.formdata.tax_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "tax_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("label", [_vm._v("VAT Number")]),
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
                _c("h6", { staticClass: "pb-0 mb-0" }, [
                  _vm._v("My annual turnover is above 85,000")
                ]),
                _vm._v(" "),
                _c("span", { staticStyle: { "font-size": "12px" } }, [
                  _vm._v("(Select No if you are exempt from MTD for VAT)")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row pt-2 pb-4" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.turnover,
                          expression: "formdata.turnover"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "turnover_above",
                        name: "turnover",
                        value: "turnover_above"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.turnover, "turnover_above")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "turnover",
                            "turnover_above"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label pr-5",
                        attrs: { for: "turnover_above" }
                      },
                      [_vm._v("Yes")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.turnover,
                          expression: "formdata.turnover"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "turnover_below",
                        name: "turnover",
                        value: "turnover_below"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.turnover, "turnover_below")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "turnover",
                            "turnover_below"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label",
                        attrs: { for: "turnover_below" }
                      },
                      [_vm._v("No")]
                    ),
                    _c("br")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.vat_period,
                          expression: "formdata.vat_period"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "vat_quarter",
                        name: "vat_period",
                        value: "vat_quarter"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.vat_period, "vat_quarter")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "vat_period",
                            "vat_quarter"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label pr-5",
                        staticStyle: { "font-weight": "700" },
                        attrs: { for: "vat_quarter" }
                      },
                      [_vm._v("I report my VAT quarterly")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.vat_period,
                          expression: "formdata.vat_period"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "vat_monthly",
                        name: "vat_period",
                        value: "vat_monthly"
                      },
                      domProps: {
                        checked: _vm._q(_vm.formdata.vat_period, "vat_monthly")
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "vat_period",
                            "vat_monthly"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label",
                        staticStyle: { "font-weight": "700" },
                        attrs: { for: "vat_monthly" }
                      },
                      [_vm._v("I report my VAT monthly")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-size": "12px" } }, [
                      _vm._v(
                        "Select the option that corresponds with the first months of your VAT periods"
                      )
                    ]),
                    _c("br")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _vm.formdata.vat_period == "vat_quarter" ||
                    !_vm.formdata.vat_period
                      ? _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formdata.report_quarter,
                                expression: "formdata.report_quarter"
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
                                  "report_quarter",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "first_quarter" } },
                              [_vm._v("Jan, Apr, Jul, Oct")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.formdata.vat_period == "vat_monthly"
                      ? _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formdata.report_monthly,
                                expression: "formdata.report_monthly"
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
                                  "report_monthly",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "january" } }, [
                              _vm._v("January")
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row pt-5 pb-4" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-checkbox small check-position vat_checkbox mb-2"
                      },
                      [
                        _c("label"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.owe_vat,
                              expression: "formdata.owe_vat"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "owe_vat" },
                          domProps: {
                            checked: Array.isArray(_vm.formdata.owe_vat)
                              ? _vm._i(_vm.formdata.owe_vat, null) > -1
                              : _vm.formdata.owe_vat
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.formdata.owe_vat,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "owe_vat",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "owe_vat",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.formdata, "owe_vat", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            staticStyle: {
                              color: "#000",
                              "font-weight": "700"
                            },
                            attrs: { for: "owe_vat" }
                          },
                          [
                            _vm._v(
                              "On my overview page, show me how much I owe for the current VAT period"
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-checkbox small check-position vat_checkbox mb-2"
                      },
                      [
                        _c("label"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.remind_vat,
                              expression: "formdata.remind_vat"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "remind_vat" },
                          domProps: {
                            checked: Array.isArray(_vm.formdata.remind_vat)
                              ? _vm._i(_vm.formdata.remind_vat, null) > -1
                              : _vm.formdata.remind_vat
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.formdata.remind_vat,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "remind_vat",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "remind_vat",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.formdata, "remind_vat", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            staticStyle: {
                              color: "#000",
                              "font-weight": "700"
                            },
                            attrs: { for: "remind_vat" }
                          },
                          [_vm._v("Remind me regrading my VAT return")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-checkbox small check-position vat_checkbox mb-2"
                      },
                      [
                        _c("label"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.lock_transaction,
                              expression: "formdata.lock_transaction"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "lock_transaction" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.formdata.lock_transaction
                            )
                              ? _vm._i(_vm.formdata.lock_transaction, null) > -1
                              : _vm.formdata.lock_transaction
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.formdata.lock_transaction,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "lock_transaction",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "lock_transaction",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.formdata, "lock_transaction", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            staticStyle: {
                              color: "#000",
                              "font-weight": "700"
                            },
                            attrs: { for: "lock_transaction" }
                          },
                          [
                            _vm._v(
                              "Automatically lock transactions after I submit a VAT return"
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "pb-0" }, [
                  _vm._v("Calculation Method:")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row pb-4" }, [
                  _c("div", { staticClass: "form-group col-md-8" }, [
                    _vm._m(0),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.calculation_method,
                          expression: "formdata.calculation_method"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "tax_total",
                        name: "calculation_method",
                        value: "tax_total"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.formdata.calculation_method,
                          "tax_total"
                        )
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "calculation_method",
                            "tax_total"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label pt-3 pr-5",
                        attrs: { for: "tax_total" }
                      },
                      [_vm._v("A - Calculate tax on line total")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.calculation_method,
                          expression: "formdata.calculation_method"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "tax_individual",
                        name: "calculation_method",
                        value: "tax_individual"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.formdata.calculation_method,
                          "tax_individual"
                        )
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "calculation_method",
                            "tax_individual"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label",
                        attrs: { for: "tax_individual" }
                      },
                      [_vm._v("B - Calculate tax on individual unit price")]
                    ),
                    _c("br")
                  ])
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "pb-0" }, [_vm._v("VAT Rates:")]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "form-group col-md-2",
                      staticStyle: { display: "inline-flex" }
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.vat_rate,
                              expression: "formdata.vat_rate"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          staticStyle: { "margin-right": "30px" },
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
                                "vat_rate",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.vatRates, function(rate) {
                          return _c(
                            "option",
                            { key: rate.id, domProps: { value: rate.id } },
                            [_vm._v(_vm._s(rate.value))]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "material-symbols-outlined",
                          staticStyle: {
                            "margin-right": "30px",
                            color: "red",
                            cursor: "pointer"
                          },
                          on: { click: _vm.deletedata }
                        },
                        [_vm._v("delete")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group col-md-2",
                      staticStyle: { display: "inline-flex" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.entered_vatrate,
                            expression: "formdata.entered_vatrate"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        staticStyle: { "margin-right": "30px" },
                        attrs: {
                          type: "text",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.entered_vatrate },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "entered_vatrate",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "fas fa-plus",
                        staticStyle: { "margin-right": "30px", right: "200px" },
                        on: { click: _vm.adddata }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row pb-4" }, [
                  _c("div", { staticClass: "form-group col-md-2" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.default_vatrate,
                            expression: "formdata.default_vatrate"
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
                              "default_vatrate",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "20" } }, [
                          _vm._v("20%")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "pb-0" }, [_vm._v("Cash Accounting:")]),
                _vm._v(" "),
                _c("div", { staticClass: "row pb-4" }, [
                  _c("div", { staticClass: "form-group col-md-8" }, [
                    _c("span", { staticStyle: { "font-size": "12px" } }, [
                      _vm._v(
                        'Some nusinesses uses a VAT scheme called "Cash Accounting". This allows you to only pay/reclaim VT on payments actually made/received - as opposed to sales invoices issued.'
                      )
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-checkbox small check-position vat_checkbox mb-2 pt-2"
                      },
                      [
                        _c("label"),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.scheme_cash,
                              expression: "formdata.scheme_cash"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "scheme_cash" },
                          domProps: {
                            checked: Array.isArray(_vm.formdata.scheme_cash)
                              ? _vm._i(_vm.formdata.scheme_cash, null) > -1
                              : _vm.formdata.scheme_cash
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.formdata.scheme_cash,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "scheme_cash",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.formdata,
                                      "scheme_cash",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.formdata, "scheme_cash", $$c)
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
                            attrs: { for: "scheme_cash" }
                          },
                          [_vm._v("I am on the Cash Accounting Scheme")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.cash_scheme,
                          expression: "formdata.cash_scheme"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "sales_scheme",
                        name: "cash_scheme",
                        value: "sales_scheme"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.formdata.cash_scheme,
                          "sales_scheme"
                        )
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "cash_scheme",
                            "sales_scheme"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label pt-3 pr-5",
                        staticStyle: { "font-size": "12px !important" },
                        attrs: { for: "sales_scheme" }
                      },
                      [_vm._v("Sales invoice & Purchases")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.cash_scheme,
                          expression: "formdata.cash_scheme"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "invoice_scheme",
                        name: "cash_scheme",
                        value: "invoice_scheme"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.formdata.cash_scheme,
                          "invoice_scheme"
                        )
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "cash_scheme",
                            "invoice_scheme"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label",
                        staticStyle: { "font-size": "12px !important" },
                        attrs: { for: "invoice_scheme" }
                      },
                      [_vm._v("Sales invoices only")]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.cash_scheme,
                          expression: "formdata.cash_scheme"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "purchase_scheme",
                        name: "cash_scheme",
                        value: "purchase_scheme"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.formdata.cash_scheme,
                          "purchase_scheme"
                        )
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.formdata,
                            "cash_scheme",
                            "purchase_scheme"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "radio-label",
                        staticStyle: { "font-size": "12px !important" },
                        attrs: { for: "purchase_scheme" }
                      },
                      [_vm._v("Purchases only")]
                    ),
                    _c("br")
                  ])
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "pb-0" }, [
                  _vm._v("Flat Rate Scheme (FRS)")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-checkbox small check-position vat_checkbox mb-2 pt-2"
                    },
                    [
                      _c("label"),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.flatrate_scheme,
                            expression: "formdata.flatrate_scheme"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: { type: "checkbox", id: "flatrate_scheme" },
                        domProps: {
                          checked: Array.isArray(_vm.formdata.flatrate_scheme)
                            ? _vm._i(_vm.formdata.flatrate_scheme, null) > -1
                            : _vm.formdata.flatrate_scheme
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.formdata.flatrate_scheme,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formdata,
                                    "flatrate_scheme",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formdata,
                                    "flatrate_scheme",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formdata, "flatrate_scheme", $$c)
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
                          attrs: { for: "flatrate_scheme" }
                        },
                        [_vm._v("I use the Flat Rate Sceheme for VAT")]
                      ),
                      _c("br")
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.formdata.flatrate_scheme
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-4" }, [
                        _c("label", [_vm._v("FRS Rate (%)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.frs_rate,
                              expression: "formdata.frs_rate"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: ""
                          },
                          domProps: { value: _vm.formdata.frs_rate },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "frs_rate",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formdata.flatrate_scheme
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-4" }, [
                        _c("label", [
                          _vm._v(
                            "Retained VAT Code - Code for recording any gain you make from FRS"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formdata.flatvat_rate,
                                expression: "formdata.flatvat_rate"
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
                                  "flatvat_rate",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "january" } }, [
                              _vm._v("0 - Other")
                            ])
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formdata.flatrate_scheme
                  ? _c("div", { staticClass: "row pb-4" }, [
                      _c("div", { staticClass: "form-group col-md-2" }, [
                        _c("label", [_vm._v("Prior FRS Rate (%)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.priorfrs_rate,
                              expression: "formdata.priorfrs_rate"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: ""
                          },
                          domProps: { value: _vm.formdata.priorfrs_rate },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "priorfrs_rate",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-2" }, [
                        _c("label", [_vm._v("Prior To")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.prior_to,
                              expression: "formdata.prior_to"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: ""
                          },
                          domProps: { value: _vm.formdata.prior_to },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "prior_to",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("h6", { staticClass: "pb-0" }, [_vm._v("ECS Sales List")]),
                _vm._v(" "),
                _c("span", { staticStyle: { "font-size": "12px" } }, [
                  _vm._v(
                    "If you register for online filing of VAT returns, then we can send your EC Sales List to HMRC electronically on your behalf."
                  )
                ]),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-checkbox small check-position vat_checkbox mb-2 pt-2"
                    },
                    [
                      _c("label"),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.enable_filing,
                            expression: "formdata.enable_filing"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: { type: "checkbox", id: "enable_filing" },
                        domProps: {
                          checked: Array.isArray(_vm.formdata.enable_filing)
                            ? _vm._i(_vm.formdata.enable_filing, null) > -1
                            : _vm.formdata.enable_filing
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.formdata.enable_filing,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formdata,
                                    "enable_filing",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formdata,
                                    "enable_filing",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formdata, "enable_filing", $$c)
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
                          attrs: { for: "enable_filing" }
                        },
                        [_vm._v("Enable Online Filing")]
                      ),
                      _c("br")
                    ]
                  ),
                  _c("br")
                ]),
                _vm._v(" "),
                _vm.formdata.enable_filing
                  ? _c("p", { staticClass: "pt-4" }, [
                      _vm._v(" HRMC Online Filing Username &  Password")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formdata.enable_filing
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("label", [_vm._v("Username")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.username,
                              expression: "formdata.username"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: "Enter Username"
                          },
                          domProps: { value: _vm.formdata.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("label", [_vm._v("Password")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.password,
                              expression: "formdata.password"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "password",
                            "aria-describedby": "emailHelp",
                            placeholder: "Enter Password"
                          },
                          domProps: { value: _vm.formdata.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formdata.enable_filing
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("label", [_vm._v("Branch")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.branch,
                              expression: "formdata.branch"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: ""
                          },
                          domProps: { value: _vm.formdata.branch },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "branch",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formdata.enable_filing
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-3" }, [
                        _c("label", [_vm._v("Postcode")]),
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
                            "aria-describedby": "emailHelp",
                            placeholder: "Enter Postcode"
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
                        _c("label", [_vm._v("VAT No.")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.ecs_vat,
                              expression: "formdata.ecs_vat"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            "aria-describedby": "emailHelp",
                            placeholder: "Enter VAT No."
                          },
                          domProps: { value: _vm.formdata.ecs_vat },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formdata,
                                "ecs_vat",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-checkbox small check-position vat_checkbox mb-2 pt-2"
                    },
                    [
                      _c("label"),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.ecs_exclude,
                            expression: "formdata.ecs_exclude"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: { type: "checkbox", id: "ecs_exclude" },
                        domProps: {
                          checked: Array.isArray(_vm.formdata.ecs_exclude)
                            ? _vm._i(_vm.formdata.ecs_exclude, null) > -1
                            : _vm.formdata.ecs_exclude
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.formdata.ecs_exclude,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formdata,
                                    "ecs_exclude",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formdata,
                                    "ecs_exclude",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formdata, "ecs_exclude", $$c)
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
                          attrs: { for: "ecs_exclude" }
                        },
                        [
                          _vm._v(
                            "Don't include EC Sales List with  VAT return. Select this option if your EC Sales List needs  to be submitted seperately from your VAT return."
                          )
                        ]
                      ),
                      _c("br")
                    ]
                  ),
                  _c("br")
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
    return _c("span", { staticStyle: { "font-size": "12px" } }, [
      _vm._v("There are two ways to calculate the tax on your sales invoices:"),
      _c("br"),
      _vm._v(
        "\n                You can work out the tax due on the total value of the line amount (qty x rate) or you can calculate the tax due on a single item"
      ),
      _c("br"),
      _vm._v(
        "\n                and then multiply it by quantity. The second option is often used by companies that sell products to the public at a tax inclusive price."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "form-group col-md-4" }, [
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v(
            "To delete a VAT rate, select it from the list and click the Trash icon."
          ),
          _c("br"),
          _vm._v(
            "\n                To add a VAT rate, enter it in the box and click the 'Add' icon"
          )
        ]),
        _c("br")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-6" }, [
      _c("span", { staticStyle: { "font-size": "12px" } }, [
        _vm._v(
          "Select the default tax rate for newly created sales invoices and receipts."
        )
      ]),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-6" }, [
      _c("label"),
      _vm._v(" "),
      _c("span", { staticStyle: { "font-size": "12px" } }, [
        _vm._v("Only required for sending EC Sales Lists\n                ")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);