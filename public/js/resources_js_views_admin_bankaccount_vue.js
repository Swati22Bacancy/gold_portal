(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_bankaccount_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      accounts: [],
      accountsgbp: [],
      accountsusd: []
    };
  },
  mounted: function mounted() {
    // this.getAccounts();
    this.getAccountsgbp();
    this.getAccountsusd();
  },
  methods: {
    clickAccount: function clickAccount(accountid, currency) {
      var currencyid = currency == 'USD' ? '1' : '2';
      this.$router.push('/accountdetails/' + accountid + '/' + currencyid);
    },
    getAccountsgbp: function getAccountsgbp() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('in');
                _context.next = 3;
                return axios.get("fetchaccountfeedswithid/ba3216c3-007d-44c4-963c-5e46a4ed70f5").then(function (response) {
                  _this.accountsgbp = response.data;
                  console.log(response);
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAccountsusd: function getAccountsusd() {
      var _this2 = this;

      console.log('in1');
      return axios.get("fetchaccountfeedswithid/4dae8287-51f7-4277-b556-f6409f8c4982").then(function (response) {
        _this2.accountsusd = response.data;
        console.log(response);
      });
    },
    getAccounts: function getAccounts() {
      var _this3 = this;

      return axios.get("fetchaccountfeeds").then(function (response) {
        _this3.accounts = response.data;
        console.log(response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dash-divs[data-v-3d12c242] {\r\n    padding: 19px 0;\r\n    color: #fff;\n}\n.dash-label[data-v-3d12c242]{\r\n  font-size: 10px;\n}\n.dash-divs p[data-v-3d12c242] {\r\n    font-size: 13px;\r\n    margin-bottom: 0;\n}\n.dash-row[data-v-3d12c242] {\r\n    padding: 10px 14px;\r\n    color: #fff;\n}\n.dash-btn[data-v-3d12c242] {\r\n    width: auto;\r\n    font-size: 13px !important;\r\n    color: #000;\r\n    border-radius: 5px;\r\n    height: 35px;\r\n    margin-left: 10px;\n}\n#dash-datatable[data-v-3d12c242] {\r\n    font-size: 13px;\r\n    color: #000;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_style_index_0_id_3d12c242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_style_index_0_id_3d12c242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_style_index_0_id_3d12c242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/bankaccount.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/bankaccount.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bankaccount_vue_vue_type_template_id_3d12c242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bankaccount.vue?vue&type=template&id=3d12c242&scoped=true& */ "./resources/js/views/admin/bankaccount.vue?vue&type=template&id=3d12c242&scoped=true&");
/* harmony import */ var _bankaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bankaccount.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/bankaccount.vue?vue&type=script&lang=js&");
/* harmony import */ var _bankaccount_vue_vue_type_style_index_0_id_3d12c242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css& */ "./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _bankaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _bankaccount_vue_vue_type_template_id_3d12c242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _bankaccount_vue_vue_type_template_id_3d12c242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d12c242",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/bankaccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/bankaccount.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/bankaccount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bankaccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_style_index_0_id_3d12c242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=style&index=0&id=3d12c242&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/bankaccount.vue?vue&type=template&id=3d12c242&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/bankaccount.vue?vue&type=template&id=3d12c242&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_template_id_3d12c242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_template_id_3d12c242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bankaccount_vue_vue_type_template_id_3d12c242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bankaccount.vue?vue&type=template&id=3d12c242&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=template&id=3d12c242&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=template&id=3d12c242&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/bankaccount.vue?vue&type=template&id=3d12c242&scoped=true& ***!
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
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Bank Accounts")
        ]),
        _vm._v(" "),
        _c("button", { ref: "Btn", on: { click: _vm.getAccountsgbp } }, [
          _vm._v("Click")
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          {
            staticStyle: {
              "border-radius": "5px 5px 0px 0px",
              border: "1px solid #B0E0E6",
              "background-color": "white"
            }
          },
          [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-8 dash-divs",
                  staticStyle: { cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.clickAccount(
                        "4dae8287-51f7-4277-b556-f6409f8c4982",
                        "USD"
                      )
                    }
                  }
                },
                [
                  _c(
                    "h4",
                    {
                      staticClass: "h3",
                      staticStyle: {
                        "margin-bottom": "0",
                        color: "#3376C2",
                        "font-weight": "700",
                        "font-family": "Titillium-Web-Bold",
                        "font-size": "23px"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Wise Bank (USD)\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticStyle: { color: "black" } }, [
                    _vm._v("9600009111331869")
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dash-label",
                      staticStyle: { color: "black" }
                    },
                    [_vm._v("Recent Transactions")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {}),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" })
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "dash-table" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table",
                    attrs: {
                      id: "dash-datatable",
                      width: "100%",
                      cellspacing: "0"
                    }
                  },
                  [
                    _c(
                      "tbody",
                      _vm._l(_vm.accountsusd.transactions, function(
                        transaction
                      ) {
                        return _c("tr", { key: transaction.transactionId }, [
                          _c("td", [
                            _vm._v(
                              _vm._s(transaction.creditorName) +
                                _vm._s(transaction.debtorName) +
                                _vm._s(transaction.payee)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            transaction.inamount
                              ? _c("span", [
                                  transaction.transactionAmount.currency ==
                                  "GBP"
                                    ? _c("i", {
                                        staticClass: "fa fa-pound-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  transaction.transactionAmount.currency ==
                                  "USD"
                                    ? _c("i", {
                                        staticClass: "fa fa-dollar-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e()
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            transaction.outamount
                              ? _c("span", { staticStyle: { color: "red" } }, [
                                  _vm._v(
                                    "-\n                                        "
                                  ),
                                  transaction.transactionAmount.currency ==
                                  "GBP"
                                    ? _c("i", {
                                        staticClass: "fa fa-pound-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  transaction.transactionAmount.currency ==
                                  "USD"
                                    ? _c("i", {
                                        staticClass: "fa fa-dollar-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e()
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            transaction.inamount
                              ? _c("span", [
                                  _vm._v(_vm._s(transaction.inamount))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            transaction.outamount
                              ? _c("span", { staticStyle: { color: "red" } }, [
                                  _vm._v(_vm._s(transaction.outamount))
                                ])
                              : _vm._e()
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-12",
                staticStyle: { "border-radius": "0px 0px 5px 5px" }
              },
              [
                _c("div", { staticClass: "col-md-8 dash-divs" }, [
                  _c(
                    "h4",
                    { staticStyle: { "margin-bottom": "0", color: "black" } },
                    [
                      _c("b", [
                        _vm.accountsusd.currency == "GBP"
                          ? _c("i", {
                              staticClass: "fa fa-pound-sign",
                              staticStyle: {
                                "font-size": "20px",
                                color: "black"
                              }
                            })
                          : _vm._e(),
                        _vm.accountsusd.currency == "USD"
                          ? _c("i", {
                              staticClass: "fa fa-dollar-sign",
                              staticStyle: {
                                "font-size": "20px",
                                color: "black"
                              }
                            })
                          : _vm._e(),
                        _vm._v(_vm._s(_vm.accountsusd.balance))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", {}),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" })
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          {
            staticStyle: {
              "border-radius": "5px 5px 0px 0px",
              border: "1px solid #B0E0E6",
              "background-color": "white"
            }
          },
          [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-8 dash-divs",
                  staticStyle: { cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.clickAccount(
                        "ba3216c3-007d-44c4-963c-5e46a4ed70f5",
                        "GBP"
                      )
                    }
                  }
                },
                [
                  _c(
                    "h4",
                    {
                      staticClass: "h3",
                      staticStyle: {
                        "margin-bottom": "0",
                        color: "#3376C2",
                        "font-weight": "700",
                        "font-family": "Titillium-Web-Bold",
                        "font-size": "23px"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Wise Bank (GBP)\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticStyle: { color: "black" } }, [
                    _vm._v("23147024730434")
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dash-label",
                      staticStyle: { color: "black" }
                    },
                    [_vm._v("Recent Transactions")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {}),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" })
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "dash-table" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table",
                    attrs: {
                      id: "dash-datatable",
                      width: "100%",
                      cellspacing: "0"
                    }
                  },
                  [
                    _c(
                      "tbody",
                      _vm._l(_vm.accountsgbp.transactions, function(
                        transaction
                      ) {
                        return _c("tr", { key: transaction.transactionId }, [
                          _c("td", [
                            _vm._v(
                              _vm._s(transaction.creditorName) +
                                _vm._s(transaction.debtorName) +
                                _vm._s(transaction.payee)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            transaction.inamount
                              ? _c("span", [
                                  transaction.transactionAmount.currency ==
                                  "GBP"
                                    ? _c("i", {
                                        staticClass: "fa fa-pound-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  transaction.transactionAmount.currency ==
                                  "USD"
                                    ? _c("i", {
                                        staticClass: "fa fa-dollar-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e()
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            transaction.outamount
                              ? _c("span", { staticStyle: { color: "red" } }, [
                                  _vm._v(
                                    "-\n                                        "
                                  ),
                                  transaction.transactionAmount.currency ==
                                  "GBP"
                                    ? _c("i", {
                                        staticClass: "fa fa-pound-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  transaction.transactionAmount.currency ==
                                  "USD"
                                    ? _c("i", {
                                        staticClass: "fa fa-dollar-sign",
                                        staticStyle: { "font-size": "10px" }
                                      })
                                    : _vm._e()
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            transaction.inamount
                              ? _c("span", [
                                  _vm._v(_vm._s(transaction.inamount))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            transaction.outamount
                              ? _c("span", { staticStyle: { color: "red" } }, [
                                  _vm._v(_vm._s(transaction.outamount))
                                ])
                              : _vm._e()
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-12",
                staticStyle: { "border-radius": "0px 0px 5px 5px" }
              },
              [
                _c("div", { staticClass: "col-md-8 dash-divs" }, [
                  _c(
                    "h4",
                    { staticStyle: { "margin-bottom": "0", color: "black" } },
                    [
                      _c("b", [
                        _vm.accountsgbp.currency == "GBP"
                          ? _c("i", {
                              staticClass: "fa fa-pound-sign",
                              staticStyle: {
                                "font-size": "20px",
                                color: "black"
                              }
                            })
                          : _vm._e(),
                        _vm.accountsgbp.currency == "USD"
                          ? _c("i", {
                              staticClass: "fa fa-dollar-sign",
                              staticStyle: {
                                "font-size": "20px",
                                color: "black"
                              }
                            })
                          : _vm._e(),
                        _vm._v(_vm._s(_vm.accountsgbp.balance))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", {}),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" })
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [_c("div")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [_c("div")])
  }
]
render._withStripped = true



/***/ })

}]);