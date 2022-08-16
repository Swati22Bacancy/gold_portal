(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_viewsales_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  data: function data() {
    return {
      customerType: 'business',
      theme: 'cust-type',
      formdata: {},
      rows: [],
      invoice_items: [{
        invoice_type: '',
        invoice_product: '',
        weight: '',
        quantity: '',
        unitprice: '',
        vat: '',
        invoice_amount: ''
      }]
    };
  },
  methods: {
    changetype: function changetype(type) {
      this.customerType = type;
    },
    addLine: function addLine() {
      this.invoice_items.push({
        invoice_type: '',
        invoice_product: '',
        weight: '',
        quantity: '',
        unitprice: '',
        vat: '',
        invoice_amount: ''
      });
    },
    create_invoice: function create_invoice() {
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
                return axios.post("create_invoice", {
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
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#createinvoice-datatable thead[data-v-483c8698] {\r\n    background: #3376C2;\r\n    color: #fff;\r\n    font-size: 13px;\n}\n#createinvoice-datatable thead tr th[data-v-483c8698] {\r\n    font-weight: 100 !important;\n}\n#createinvoice-datatable[data-v-483c8698]\r\n{\r\n  font-size: 13px;\r\n  color: #000;\n}\n.viewsales-div[data-v-483c8698]\r\n{\r\n  background: #fff;\r\n  padding: 34px 23px 0px 23px;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);\n}\n.crt-invoice label[data-v-483c8698]\r\n{\r\n  font-size: 12px;\n}\n.crt-invoice[data-v-483c8698]\r\n{\r\n  padding: 0px 2%;\r\n  color: #000;\n}\n.dark-theme-btn[data-v-483c8698]\r\n{\r\n  background-color: #245388 !important;\r\n  color: #fff;\r\n  width: 100px;\r\n  font-size: 12px !important;\n}\n.light-theme-btn[data-v-483c8698]\r\n{\r\n  background-color: #EDF2F6 !important;\r\n  color: #000;\r\n  width: 100px;\r\n  font-size: 12px !important;\n}\n.btn[data-v-483c8698]:focus, .btn.focus[data-v-483c8698]\r\n{\r\n  box-shadow: 0 0;\n}\n.table-div[data-v-483c8698]\r\n{\r\n  border-bottom: 1px solid #ccc;\n}\n.tab-selector[data-v-483c8698]\r\n{\r\n  border: 1px solid #D6E3F2 !important;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  font-size: 13px;\n}\n.btn-addwidth[data-v-483c8698]\r\n{\r\n  width: 130px;\n}\n.sum-price ul[data-v-483c8698]\r\n{\r\n  list-style-type: none;\n}\n.sum-price li[data-v-483c8698]{\r\n  padding: 5px 0px;\r\n  font-size: 11px;\n};\n.viewsales-div > p[data-v-483c8698] {\r\n    color: #3376C2;\r\n    font-size: 12px;\n}\n.viewsales-div span[data-v-483c8698] {\r\n    color: #000;\r\n    font-size: 13px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_style_index_0_id_483c8698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_style_index_0_id_483c8698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_style_index_0_id_483c8698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/viewsales.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/viewsales.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _viewsales_vue_vue_type_template_id_483c8698_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewsales.vue?vue&type=template&id=483c8698&scoped=true& */ "./resources/js/views/admin/viewsales.vue?vue&type=template&id=483c8698&scoped=true&");
/* harmony import */ var _viewsales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewsales.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/viewsales.vue?vue&type=script&lang=js&");
/* harmony import */ var _viewsales_vue_vue_type_style_index_0_id_483c8698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css& */ "./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _viewsales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _viewsales_vue_vue_type_template_id_483c8698_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _viewsales_vue_vue_type_template_id_483c8698_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "483c8698",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/viewsales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/viewsales.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/viewsales.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewsales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_style_index_0_id_483c8698_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=style&index=0&id=483c8698&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/viewsales.vue?vue&type=template&id=483c8698&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/viewsales.vue?vue&type=template&id=483c8698&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_template_id_483c8698_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_template_id_483c8698_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewsales_vue_vue_type_template_id_483c8698_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewsales.vue?vue&type=template&id=483c8698&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=template&id=483c8698&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=template&id=483c8698&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/viewsales.vue?vue&type=template&id=483c8698&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-items-center justify-content-between mb-4"
        },
        [
          _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
            _vm._v("INV-2001")
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
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 viewsales-div" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("p", [_vm._v("Customer")]),
              _vm._v(" "),
              _c("span", [_vm._v("Robert Malasawaliki")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("p", [_vm._v("VAT No.")]),
              _vm._v(" "),
              _c("span", [_vm._v("140187339")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("p", [_vm._v("Issue Date")]),
              _vm._v(" "),
              _c("span", [_vm._v("17/04/2021")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("p", [_vm._v("Due Date")]),
              _vm._v(" "),
              _c("span", [_vm._v("17/04/2021")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("p", [_vm._v("Amount Due")]),
              _vm._v(" "),
              _c("span", [
                _c("i", {
                  staticClass: "fa fa-pound-sign",
                  staticStyle: { "font-size": "10px", "margin-right": "3px" }
                }),
                _vm._v(" 47,992")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("p", [_vm._v("Status")]),
              _vm._v(" "),
              _c("span", [
                _c(
                  "button",
                  {
                    staticClass: "btn table-btn",
                    staticStyle: { "margin-left": "auto", width: "68px" },
                    attrs: { type: "button" }
                  },
                  [_vm._v("UnPaid")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c(
          "div",
          {
            staticClass: "col-md-12 viewsales-div pb-3",
            staticStyle: { padding: "0" }
          },
          [
            _c("div", {}, [
              _c("div", { staticClass: "table-responsive table-div mb-2" }, [
                _c(
                  "table",
                  {
                    staticClass: "table",
                    staticStyle: { "margin-bottom": "0" },
                    attrs: {
                      id: "createinvoice-datatable",
                      width: "100%",
                      cellspacing: "0"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Product")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Description")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Weight(gms)")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Quantity")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Unit Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Vat(%)")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Amount")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("FGB/BULLION")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Investment Gold Bar")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("50.00")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("20")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", {
                            staticClass: "fa fa-pound-sign",
                            staticStyle: { "font-size": "10px" }
                          }),
                          _vm._v("2020.50")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("70")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", {
                            staticClass: "fa fa-pound-sign",
                            staticStyle: { "font-size": "10px" }
                          }),
                          _vm._v("48490.00")
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 sum-price" }, [
                _c("ul", { staticStyle: { "text-align": "right" } }, [
                  _c("li", { staticStyle: { color: "#3376C2" } }, [
                    _vm._v("Sub Total ("),
                    _c("i", {
                      staticClass: "fa fa-pound-sign",
                      staticStyle: {
                        "font-size": "10px",
                        "margin-right": "3px"
                      }
                    }),
                    _vm._v(")")
                  ]),
                  _vm._v(" "),
                  _c("li", { staticStyle: { color: "#3376C2" } }, [
                    _vm._v("VAT Total ("),
                    _c("i", {
                      staticClass: "fa fa-pound-sign",
                      staticStyle: {
                        "font-size": "10px",
                        "margin-right": "3px"
                      }
                    }),
                    _vm._v(")")
                  ]),
                  _vm._v(" "),
                  _c("li", { staticStyle: { color: "#3376C2" } }, [
                    _vm._v("Total ("),
                    _c("i", {
                      staticClass: "fa fa-pound-sign",
                      staticStyle: {
                        "font-size": "10px",
                        "margin-right": "3px"
                      }
                    }),
                    _vm._v(")")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 sum-price" }, [
                _c("ul", [
                  _c("li", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v("8000")
                  ]),
                  _vm._v(" "),
                  _c("li", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v("640")
                  ]),
                  _vm._v(" "),
                  _c("li", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v("8640")
                  ])
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 mt-4" }, [
          _c(
            "button",
            {
              staticClass: "btn admin-btn mobile-mb btn-nwidth",
              staticStyle: {
                "background-color": "#7ADAAA !important",
                float: "right"
              },
              attrs: { type: "submit" }
            },
            [_vm._v("Save")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);