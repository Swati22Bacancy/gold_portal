(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_assignpermission_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AssignPermission",
  data: function data() {
    return {
      rules: _rules_customerRules__WEBPACK_IMPORTED_MODULE_1__.customerRules,
      formdata: {},
      customer_permissions: [{
        id: 1,
        value: "customer-create"
      }, {
        id: 2,
        value: "customer-edit"
      }, {
        id: 3,
        value: "customer-delete"
      }, {
        id: 4,
        value: "customer-list"
      }],
      user_permissions: [{
        id: 5,
        value: "user-create"
      }, {
        id: 6,
        value: "user-edit"
      }, {
        id: 7,
        value: "user-delete"
      }, {
        id: 8,
        value: "user-list"
      }],
      group_permissions: [{
        id: 5,
        value: "group-create"
      }, {
        id: 6,
        value: "group-edit"
      }, {
        id: 7,
        value: "group-delete"
      }, {
        id: 8,
        value: "group-list"
      }],
      currency_permissions: [{
        id: 5,
        value: "currency-create"
      }, {
        id: 6,
        value: "currency-edit"
      }, {
        id: 7,
        value: "currency-delete"
      }, {
        id: 8,
        value: "currency-list"
      }],
      checkedpermission: []
    };
  },
  methods: {
    assignPermission: function assignPermission() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, message, toast, _message, _toast;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post("assign_permission", {
                  role_id: _this.$route.params.id,
                  allpermissions: _this.checkedpermission
                });

              case 3:
                response = _context.sent;
                message = "Permission has been successfully assigned.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });

                _this.$router.push("/roles");

                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _message = 'Something went wrong, Please try again';
                _toast = Vue.toasted.show(_message, {
                  theme: "toasted-error",
                  position: "top-center",
                  duration: 5000
                });
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios.get('/roledetails/' + this.$route.params.id).then(function (response) {
      _this2.formdata = response.data;
    })["catch"](function (error) {//app.$notify(error.response.data.error, "error");
    });
    axios.get('/show_permission/' + this.$route.params.id).then(function (response) {
      var newArr = response.data.permissions;
      var finalarray = [];
      $.each(newArr, function (key, value) {
        finalarray.push(value.name);
      });
      _this2.checkedpermission = finalarray;
    })["catch"](function (error) {
      console.error(error);
    });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.createrole-div[data-v-482ba106]\r\n{\r\n  background: #fff;\r\n  padding: 34px 23px;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);\n}\n.crt-role label[data-v-482ba106]\r\n{\r\n  font-size: 12px;\n}\n.crt-role[data-v-482ba106]\r\n{\r\n  padding: 0px 2%;\r\n  color: #000;\n}\n.btn[data-v-482ba106]:focus, .btn.focus[data-v-482ba106]\r\n{\r\n  box-shadow: 0 0;\n}\n.contentgrp[data-v-482ba106]\r\n{\r\n  background-color: #fff;\r\n  border-radius: 0px 5px 5px 5px;\n}\n#permission-datatable thead[data-v-482ba106]\r\n{\r\n  background: #3376C2;\r\n  color: #fff;\r\n  font-size: 13px;\n}\n#permission-datatable[data-v-482ba106]\r\n{\r\n  color: #000;\r\n  font-size: 13px;\n}\n#permission-datatable thead tr th[data-v-482ba106] \r\n{\r\n  font-weight: 100 !important;\n}\ntable.dataTable thead th[data-v-482ba106]\r\n{\r\n  padding: 10px 10px !important;\n}\ntable.dataTable.no-footer[data-v-482ba106]\r\n{\r\n  border-bottom: 1px solid #e3e6f0;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_style_index_0_id_482ba106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_style_index_0_id_482ba106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_style_index_0_id_482ba106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/assignpermission.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/assignpermission.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignpermission_vue_vue_type_template_id_482ba106_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignpermission.vue?vue&type=template&id=482ba106&scoped=true& */ "./resources/js/views/admin/assignpermission.vue?vue&type=template&id=482ba106&scoped=true&");
/* harmony import */ var _assignpermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignpermission.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/assignpermission.vue?vue&type=script&lang=js&");
/* harmony import */ var _assignpermission_vue_vue_type_style_index_0_id_482ba106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css& */ "./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _assignpermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _assignpermission_vue_vue_type_template_id_482ba106_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _assignpermission_vue_vue_type_template_id_482ba106_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "482ba106",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/assignpermission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/assignpermission.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/assignpermission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./assignpermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_style_index_0_id_482ba106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=style&index=0&id=482ba106&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/assignpermission.vue?vue&type=template&id=482ba106&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/admin/assignpermission.vue?vue&type=template&id=482ba106&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_template_id_482ba106_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_template_id_482ba106_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignpermission_vue_vue_type_template_id_482ba106_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./assignpermission.vue?vue&type=template&id=482ba106&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=template&id=482ba106&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=template&id=482ba106&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/assignpermission.vue?vue&type=template&id=482ba106&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "crt-role",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.assignPermission()
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
              _vm._v("Assign Permission to " + _vm._s(_vm.formdata.name))
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
                _c("router-link", { attrs: { to: "/roles" } }, [
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
        _c("div", { staticClass: "contentgrp" }, [
          _c("div", { staticClass: "pb-2 mb-4" }, [
            _c("div", {}, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table",
                    attrs: {
                      id: "permission-datatable",
                      width: "100%",
                      cellspacing: "0"
                    }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("tbody", [
                      _c(
                        "tr",
                        [
                          _c("td", [_vm._v("Customer")]),
                          _vm._v(" "),
                          _vm._l(_vm.customer_permissions, function(
                            permission
                          ) {
                            return _c(
                              "td",
                              {
                                key: permission.id,
                                staticClass: "content-left"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.checkedpermission,
                                      expression: "checkedpermission"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: permission.id
                                  },
                                  domProps: {
                                    value: permission.value,
                                    checked: Array.isArray(
                                      _vm.checkedpermission
                                    )
                                      ? _vm._i(
                                          _vm.checkedpermission,
                                          permission.value
                                        ) > -1
                                      : _vm.checkedpermission
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.checkedpermission,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = permission.value,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.checkedpermission = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.checkedpermission = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.checkedpermission = $$c
                                      }
                                    }
                                  }
                                })
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "tr",
                        [
                          _c("td", [_vm._v("User")]),
                          _vm._v(" "),
                          _vm._l(_vm.user_permissions, function(permission) {
                            return _c(
                              "td",
                              {
                                key: permission.id,
                                staticClass: "content-left"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.checkedpermission,
                                      expression: "checkedpermission"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "permission.id"
                                  },
                                  domProps: {
                                    value: permission.value,
                                    checked: Array.isArray(
                                      _vm.checkedpermission
                                    )
                                      ? _vm._i(
                                          _vm.checkedpermission,
                                          permission.value
                                        ) > -1
                                      : _vm.checkedpermission
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.checkedpermission,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = permission.value,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.checkedpermission = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.checkedpermission = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.checkedpermission = $$c
                                      }
                                    }
                                  }
                                })
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "tr",
                        [
                          _c("td", [_vm._v("Group")]),
                          _vm._v(" "),
                          _vm._l(_vm.group_permissions, function(permission) {
                            return _c(
                              "td",
                              {
                                key: permission.id,
                                staticClass: "content-left"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.checkedpermission,
                                      expression: "checkedpermission"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "permission.id"
                                  },
                                  domProps: {
                                    value: permission.value,
                                    checked: Array.isArray(
                                      _vm.checkedpermission
                                    )
                                      ? _vm._i(
                                          _vm.checkedpermission,
                                          permission.value
                                        ) > -1
                                      : _vm.checkedpermission
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.checkedpermission,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = permission.value,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.checkedpermission = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.checkedpermission = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.checkedpermission = $$c
                                      }
                                    }
                                  }
                                })
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "tr",
                        [
                          _c("td", [_vm._v("Currency")]),
                          _vm._v(" "),
                          _vm._l(_vm.currency_permissions, function(
                            permission
                          ) {
                            return _c(
                              "td",
                              {
                                key: permission.id,
                                staticClass: "content-left"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.checkedpermission,
                                      expression: "checkedpermission"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "permission.id"
                                  },
                                  domProps: {
                                    value: permission.value,
                                    checked: Array.isArray(
                                      _vm.checkedpermission
                                    )
                                      ? _vm._i(
                                          _vm.checkedpermission,
                                          permission.value
                                        ) > -1
                                      : _vm.checkedpermission
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.checkedpermission,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = permission.value,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.checkedpermission = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.checkedpermission = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.checkedpermission = $$c
                                      }
                                    }
                                  }
                                })
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]
                )
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Add")]),
        _vm._v(" "),
        _c("th", [_vm._v("Edit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Delete")]),
        _vm._v(" "),
        _c("th", [_vm._v("View")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);