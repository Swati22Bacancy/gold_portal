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
/* harmony import */ var _rules_customerRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules/customerRules */ "./resources/js/views/admin/rules/customerRules.js");


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
//
//
//
//
//
//
//
//
//
//
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
  name: "CreateCustomer",
  data: function data() {
    return {
      rules: _rules_customerRules__WEBPACK_IMPORTED_MODULE_1__.customerRules,
      customerType: 'business',
      theme: 'cust-type',
      formdata: {},
      groups: {}
    };
  },
  methods: {
    changetype: function changetype(type) {
      this.customerType = type;
    },
    create_customer: function create_customer() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, message, toast, _message, _toast;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this.formdata.customertype = _this.customerType;
                _context.next = 4;
                return axios.post("create_customer", {
                  first_name: _this.formdata.first_name,
                  last_name: _this.formdata.last_name,
                  email: _this.formdata.email,
                  company_name: _this.formdata.company_name,
                  registered_address: _this.formdata.registered_address,
                  vat: _this.formdata.vat,
                  telephone: _this.formdata.telephone,
                  whatsapp: _this.formdata.whatsapp,
                  title: _this.formdata.title,
                  credit_limit: _this.formdata.credit_limit,
                  company_code: _this.formdata.company_code,
                  customertype: _this.formdata.customertype,
                  group_id: _this.formdata.group_id
                });

              case 4:
                response = _context.sent;
                message = "Customer has been successfully added.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });

                _this.$router.push("/customers");

                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _message = 'Something went wrong, Please try again';
                _toast = Vue.toasted.show(_message, {
                  theme: "toasted-error",
                  position: "top-center",
                  duration: 5000
                });
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    getGroups: function getGroups() {
      var _this2 = this;

      return axios.get("grouplist").then(function (response) {
        _this2.groups = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.getGroups();
  }
});

/***/ }),

/***/ "./resources/js/views/admin/rules/customerRules.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/rules/customerRules.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customerRules": () => (/* binding */ customerRules)
/* harmony export */ });
var customerRules = {
  first_name: {
    required: true
  },
  last_name: {
    required: true
  },
  email: {
    required: true
  }
};

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
___CSS_LOADER_EXPORT___.push([module.id, "\n#dash-datatable[data-v-68016c19]\r\n{\r\n  font-size: 13px;\r\n  color: #000;\n}\n.createcust-div[data-v-68016c19]\r\n{\r\n  background: #fff;\r\n  padding: 34px 23px;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);\n}\n.crt-customer label[data-v-68016c19]\r\n{\r\n  font-size: 12px;\n}\n.crt-customer[data-v-68016c19]\r\n{\r\n  padding: 0px 2%;\r\n  color: #000;\n}\n.dark-theme-btn[data-v-68016c19]\r\n{\r\n  background-color: #245388 !important;\r\n  color: #fff;\r\n  width: 100px;\r\n  font-size: 12px !important;\n}\n.light-theme-btn[data-v-68016c19]\r\n{\r\n  background-color: #EDF2F6 !important;\r\n  color: #000;\r\n  width: 100px;\r\n  font-size: 12px !important;\n}\n.btn[data-v-68016c19]:focus, .btn.focus[data-v-68016c19]\r\n{\r\n  box-shadow: 0 0;\n}\n@media (min-width: 768px) {\n.detail-div[data-v-68016c19]\r\n  {\r\n    border-right: 2px solid #eee;\r\n    padding-right: 8%;\n}\n.primary-div[data-v-68016c19]\r\n  {\r\n    padding-left: 8%;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
        _c(
          "div",
          {
            staticClass:
              "d-sm-flex align-items-center justify-content-between mb-4"
          },
          [
            _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
              _vm._v("Create New Customer")
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
                _c("router-link", { attrs: { to: "/customers" } }, [
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
                        value: _vm.formdata.company_code,
                        expression: "formdata.company_code"
                      }
                    ],
                    staticClass: "form-control form-control-user",
                    attrs: {
                      type: "text",
                      id: "crt-customer",
                      "aria-describedby": "emailHelp",
                      placeholder: ""
                    },
                    domProps: { value: _vm.formdata.company_code },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formdata,
                          "company_code",
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
                            value: _vm.formdata.registered_address,
                            expression: "formdata.registered_address"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.registered_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "registered_address",
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
                    _c("h6", [_vm._v("Contact Details")]),
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
                            value: _vm.formdata.first_name,
                            expression: "formdata.first_name"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "first_name",
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
                            value: _vm.formdata.last_name,
                            expression: "formdata.last_name"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.last_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "last_name",
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
                      _vm._m(0),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.credit_limit,
                            expression: "formdata.credit_limit"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.credit_limit },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "credit_limit",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Select Group")]),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.group_id,
                              expression: "formdata.group_id"
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
                                "group_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.groups, function(group) {
                          return _c(
                            "option",
                            { key: group.id, domProps: { value: group.id } },
                            [_vm._v(_vm._s(group.name))]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.customerType == "individual"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6 detail-div" }, [
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
                            value: _vm.formdata.first_name,
                            expression: "formdata.first_name"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "first_name",
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
                            value: _vm.formdata.last_name,
                            expression: "formdata.last_name"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.last_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "last_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
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
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 primary-div" }, [
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Registered Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formdata.registered_address,
                            expression: "formdata.registered_address"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "crt-customer",
                          "aria-describedby": "emailHelp",
                          placeholder: ""
                        },
                        domProps: { value: _vm.formdata.registered_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formdata,
                              "registered_address",
                              $event.target.value
                            )
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group customer-input" }, [
                      _c("label", [_vm._v("Select Group")]),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formdata.group_id,
                              expression: "formdata.group_id"
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
                                "group_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.groups, function(group) {
                          return _c(
                            "option",
                            { key: group.id, domProps: { value: group.id } },
                            [_vm._v(_vm._s(group.name))]
                          )
                        }),
                        0
                      )
                    ])
                  ])
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
    return _c("label", [
      _vm._v("Credit Limit ("),
      _c("i", {
        staticClass: "fa fa-pound-sign",
        staticStyle: { "font-size": "10px" }
      }),
      _vm._v(")")
    ])
  }
]
render._withStripped = true



/***/ })

}]);