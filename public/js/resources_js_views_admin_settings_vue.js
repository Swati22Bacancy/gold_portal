(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Settings",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["user", "permissions"])),
  components: {},
  methods: {
    goto_currencies: function goto_currencies() {
      this.$router.push({
        name: 'currencies'
      });
    },
    goto_chartaccounts: function goto_chartaccounts() {
      this.$router.push({
        name: 'chartaccounts'
      });
    },
    goto_producttypes: function goto_producttypes() {
      this.$router.push({
        name: 'producttypes'
      });
    },
    goto_products: function goto_products() {
      this.$router.push({
        name: 'products'
      });
    },
    goto_users: function goto_users() {
      this.$router.push({
        name: 'users'
      });
    },
    goto_invoiceoptions: function goto_invoiceoptions() {
      this.$router.push({
        name: 'invoiceoptions'
      });
    },
    goto_roles: function goto_roles() {
      this.$router.push({
        name: 'roles'
      });
    },
    goto_sectors: function goto_sectors() {
      this.$router.push({
        name: 'industrysector'
      });
    },
    goto_companydetails: function goto_companydetails() {
      this.$router.push({
        name: 'companydetails'
      });
    },
    goto_customersettings: function goto_customersettings() {
      this.$router.push({
        name: 'customersettings'
      });
    },
    goto_vatsettings: function goto_vatsettings() {
      this.$router.push({
        name: 'vatsettings'
      });
    },
    goto_categories: function goto_categories() {
      this.$router.push({
        name: 'paymentcategories'
      });
    },
    goto_bankrules: function goto_bankrules() {
      this.$router.push({
        name: 'defaultbankrule'
      });
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.content-div[data-v-98a5ffbc]\r\n{\r\n  margin: 0 15px;\r\n  background-color: #fff;\n}\n.content-div .col-md-4[data-v-98a5ffbc]\r\n{\r\n  border: 1px solid #eee;\r\n  padding: 20px;\n}\n.setting-subheading[data-v-98a5ffbc]\r\n{\r\n  color: #245388;\r\n  font-weight: 700;\r\n  margin-top: 10px;\r\n  font-size: 17px;\r\n  font-family: Titillium-Web-Bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_98a5ffbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_98a5ffbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_98a5ffbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/settings.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/settings.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_98a5ffbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=98a5ffbc&scoped=true& */ "./resources/js/views/admin/settings.vue?vue&type=template&id=98a5ffbc&scoped=true&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _settings_vue_vue_type_style_index_0_id_98a5ffbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css& */ "./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _settings_vue_vue_type_template_id_98a5ffbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_98a5ffbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "98a5ffbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_98a5ffbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=style&index=0&id=98a5ffbc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/settings.vue?vue&type=template&id=98a5ffbc&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/settings.vue?vue&type=template&id=98a5ffbc&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_98a5ffbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_98a5ffbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_98a5ffbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=98a5ffbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=template&id=98a5ffbc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=template&id=98a5ffbc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/settings.vue?vue&type=template&id=98a5ffbc&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "setting-div" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row content-div" }, [
      _vm.is_super_admin() || _vm.checkPermission("user-list")
        ? _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { cursor: "pointer" },
                on: {
                  click: function($event) {
                    return _vm.goto_users()
                  }
                }
              },
              [_vm._m(1), _vm._v(" "), _vm._m(2)]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-4",
          staticStyle: { cursor: "pointer" },
          on: {
            click: function($event) {
              return _vm.goto_companydetails()
            }
          }
        },
        [_vm._m(3)]
      ),
      _vm._v(" "),
      _vm._m(4)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row content-div" }, [
      _vm._m(5),
      _vm._v(" "),
      _vm.is_super_admin()
        ? _c(
            "div",
            {
              staticClass: "col-md-4",
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  return _vm.goto_invoiceoptions()
                }
              }
            },
            [_vm._m(6)]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.is_super_admin()
        ? _c(
            "div",
            {
              staticClass: "col-md-4",
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  return _vm.goto_roles()
                }
              }
            },
            [_vm._m(7)]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row content-div" }, [
      _c(
        "div",
        {
          staticClass: "col-md-4",
          staticStyle: { cursor: "pointer" },
          on: {
            click: function($event) {
              return _vm.goto_customersettings()
            }
          }
        },
        [_vm._m(8)]
      ),
      _vm._v(" "),
      _vm.is_super_admin() || _vm.checkPermission("currency-list")
        ? _c(
            "div",
            {
              staticClass: "col-md-4",
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  return _vm.goto_currencies()
                }
              }
            },
            [_vm._m(9)]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          {
            staticClass: "row",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                return _vm.goto_chartaccounts()
              }
            }
          },
          [_vm._m(10), _vm._v(" "), _vm._m(11)]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row content-div" }, [
      _c(
        "div",
        {
          staticClass: "col-md-4",
          staticStyle: { cursor: "pointer" },
          on: {
            click: function($event) {
              return _vm.goto_vatsettings()
            }
          }
        },
        [_vm._m(12)]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          {
            staticClass: "row",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                return _vm.goto_producttypes()
              }
            }
          },
          [_vm._m(13), _vm._v(" "), _vm._m(14)]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          {
            staticClass: "row",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                return _vm.goto_products()
              }
            }
          },
          [_vm._m(15), _vm._v(" "), _vm._m(16)]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row content-div" }, [
      _vm.is_super_admin()
        ? _c(
            "div",
            {
              staticClass: "col-md-4",
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  return _vm.goto_sectors()
                }
              }
            },
            [_vm._m(17)]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.is_super_admin()
        ? _c(
            "div",
            {
              staticClass: "col-md-4",
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  return _vm.goto_categories()
                }
              }
            },
            [_vm._m(18)]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.is_super_admin()
        ? _c(
            "div",
            {
              staticClass: "col-md-4",
              staticStyle: { cursor: "pointer" },
              on: {
                click: function($event) {
                  return _vm.goto_bankrules()
                }
              }
            },
            [_vm._m(19)]
          )
        : _vm._e()
    ])
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
        staticClass: "d-sm-flex align-items-center justify-content-between mb-3"
      },
      [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8 mobile-mb" }, [
              _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
                _vm._v("Settings")
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c(
        "span",
        {
          staticClass: "material-symbols-outlined",
          staticStyle: { "font-size": "80px", color: "#595959" }
        },
        [_vm._v("person_add")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("h6", { staticClass: "setting-subheading" }, [_vm._v("Users")]),
      _vm._v(" "),
      _c("span", { staticStyle: { "font-size": "12px" } }, [
        _vm._v("Manage users and their access to your account")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("location_city")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Company Details")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Update your company address, telephone number, etc.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "span",
            {
              staticClass: "material-symbols-outlined",
              staticStyle: { "font-size": "80px", color: "#595959" }
            },
            [_vm._v("mark_email_unread")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-9" }, [
          _c("h6", { staticClass: "setting-subheading" }, [
            _vm._v("Email Options")
          ]),
          _vm._v(" "),
          _c("span", { staticStyle: { "font-size": "12px" } }, [
            _vm._v(
              "From here you can decide when KashFlow should send your emails."
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "span",
            {
              staticClass: "material-symbols-outlined",
              staticStyle: { "font-size": "80px", color: "#595959" }
            },
            [_vm._v("move_to_inbox")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-9" }, [
          _c("h6", { staticClass: "setting-subheading" }, [
            _vm._v("Data Import")
          ]),
          _vm._v(" "),
          _c("span", { staticStyle: { "font-size": "12px" } }, [
            _vm._v("Import data into your KashFlow Account.")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("difference")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Invoice Options")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Configure invoices, discounts and packing slips.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("lock_person")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Roles & Permissions")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Set User permissions of what users have access to.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("manage_accounts")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Customer & Supplier Settings")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Set various options for your Customer and Supplier pages.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "70px", color: "#595959" }
          },
          [_vm._v("currency_exchange")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [_vm._v("Currencies")]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Set up foreign currencies for use with invoices and quotes.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c(
        "span",
        {
          staticClass: "material-symbols-outlined",
          staticStyle: { "font-size": "80px", color: "#595959" }
        },
        [_vm._v("description")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("h6", { staticClass: "setting-subheading" }, [
        _vm._v("Chart of Accounts")
      ]),
      _vm._v(" "),
      _c("span", { staticStyle: { "font-size": "12px" } }, [
        _vm._v(
          "Edit your Sales codes, Purchase Codes and Bank Transaction Types all from this one page."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("article")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("VAT Settings")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v(
            "Set various VAT settings, such as  which scheme you are on, online filling options, etc."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c(
        "span",
        {
          staticClass: "material-symbols-outlined",
          staticStyle: { "font-size": "80px", color: "#595959" }
        },
        [_vm._v("inbox")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("h6", { staticClass: "setting-subheading" }, [_vm._v("Product Type")]),
      _vm._v(" "),
      _c("span", { staticStyle: { "font-size": "12px" } }, [
        _vm._v("Create & Manage Product Categories here")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c(
        "span",
        {
          staticClass: "material-symbols-outlined",
          staticStyle: { "font-size": "80px", color: "#595959" }
        },
        [_vm._v("inbox")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("h6", { staticClass: "setting-subheading" }, [_vm._v("Products")]),
      _vm._v(" "),
      _c("span", { staticStyle: { "font-size": "12px" } }, [
        _vm._v("Create & Manage Products here")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("article")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Industry Sectors")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Manage your industry sectors here.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v("category")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Payment Categories")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Manage your payment categories here.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "span",
          {
            staticClass: "material-symbols-outlined",
            staticStyle: { "font-size": "80px", color: "#595959" }
          },
          [_vm._v(" account_balance")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h6", { staticClass: "setting-subheading" }, [
          _vm._v("Default Bank Rule")
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { "font-size": "12px" } }, [
          _vm._v("Manage your default bank rule here.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);