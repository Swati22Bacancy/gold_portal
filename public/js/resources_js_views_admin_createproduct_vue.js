(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_createproduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateProduct",
  data: function data() {
    return {
      rules: _rules_customerRules__WEBPACK_IMPORTED_MODULE_1__.customerRules,
      formdata: {},
      producttypes: {}
    };
  },
  methods: {
    create_product: function create_product() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, message, toast, _message, _toast;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post("create_product", {
                  rate: _this.formdata.rate,
                  name: _this.formdata.name,
                  type_id: _this.formdata.type_id,
                  weight: _this.formdata.weight,
                  output_tax: _this.formdata.output_tax
                });

              case 3:
                response = _context.sent;
                message = "Product type has been successfully added.";
                toast = Vue.toasted.show(message, {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
                });

                _this.$router.push("/products");

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
    },
    getProductTypes: function getProductTypes() {
      var _this2 = this;

      return axios.get("producttypelist").then(function (response) {
        _this2.producttypes = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.getProductTypes();
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.createtype-div[data-v-6ca211f8]\r\n{\r\n  background: #fff;\r\n  padding: 34px 23px;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);\n}\n.crt-type label[data-v-6ca211f8]\r\n{\r\n  font-size: 12px;\n}\n.crt-type[data-v-6ca211f8]\r\n{\r\n  padding: 0px 2%;\r\n  color: #000;\n}\n.btn[data-v-6ca211f8]:focus, .btn.focus[data-v-6ca211f8]\r\n{\r\n  box-shadow: 0 0;\n}\n.check-position[data-v-6ca211f8]\r\n{\r\n  margin-left: 4%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_style_index_0_id_6ca211f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_style_index_0_id_6ca211f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_style_index_0_id_6ca211f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/createproduct.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/createproduct.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createproduct_vue_vue_type_template_id_6ca211f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createproduct.vue?vue&type=template&id=6ca211f8&scoped=true& */ "./resources/js/views/admin/createproduct.vue?vue&type=template&id=6ca211f8&scoped=true&");
/* harmony import */ var _createproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createproduct.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/createproduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _createproduct_vue_vue_type_style_index_0_id_6ca211f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css& */ "./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _createproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createproduct_vue_vue_type_template_id_6ca211f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _createproduct_vue_vue_type_template_id_6ca211f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ca211f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/createproduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/createproduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/createproduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createproduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_style_index_0_id_6ca211f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=style&index=0&id=6ca211f8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/createproduct.vue?vue&type=template&id=6ca211f8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/createproduct.vue?vue&type=template&id=6ca211f8&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_template_id_6ca211f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_template_id_6ca211f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createproduct_vue_vue_type_template_id_6ca211f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createproduct.vue?vue&type=template&id=6ca211f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=template&id=6ca211f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=template&id=6ca211f8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/createproduct.vue?vue&type=template&id=6ca211f8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "crt-type",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.create_product.apply(null, arguments)
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
              _vm._v("Create New Product Type")
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
                _c("router-link", { attrs: { to: "/products" } }, [
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
          _c("div", { staticClass: "col-md-12 createtype-div" }, [
            _c("div", { staticClass: "row mb-4" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group customer-input" }, [
                  _c("label", [_vm._v("Product Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formdata.name,
                        expression: "formdata.name"
                      }
                    ],
                    staticClass: "form-control form-control-user",
                    attrs: {
                      type: "text",
                      id: "crt-typename",
                      "aria-describedby": "emailHelp",
                      placeholder: ""
                    },
                    domProps: { value: _vm.formdata.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formdata, "name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group customer-input" }, [
                  _c("label", [_vm._v("Product Type")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formdata.type_id,
                          expression: "formdata.type_id"
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
                            "type_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.producttypes, function(producttype) {
                      return _c(
                        "option",
                        {
                          key: producttype.id,
                          domProps: { value: producttype.id }
                        },
                        [_vm._v(_vm._s(producttype.name))]
                      )
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-4" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group customer-input" }, [
                  _c("label", [_vm._v("Weight (gm)")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formdata.weight,
                        expression: "formdata.weight"
                      }
                    ],
                    staticClass: "form-control form-control-user",
                    attrs: {
                      type: "text",
                      id: "crt-typename",
                      "aria-describedby": "emailHelp",
                      placeholder: ""
                    },
                    domProps: { value: _vm.formdata.weight },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formdata, "weight", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group customer-input" }, [
                  _c("label", [_vm._v("Tax Rate")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formdata.rate,
                        expression: "formdata.rate"
                      }
                    ],
                    staticClass: "form-control form-control-user",
                    attrs: {
                      type: "text",
                      id: "crt-typerate",
                      "aria-describedby": "emailHelp",
                      placeholder: ""
                    },
                    domProps: { value: _vm.formdata.rate },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formdata, "rate", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-4" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
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
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
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
                        [
                          _vm._v(
                            "Buyer accountable for Output Tax in case of B2B Sales ?"
                          )
                        ]
                      )
                    ]
                  )
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