(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding/binding.component */ "./src/app/binding/binding.component.ts");
/* harmony import */ var _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding2/binding2.component */ "./src/app/binding2/binding2.component.ts");
/* harmony import */ var _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding2-radio/binding2-radio.component */ "./src/app/binding2-radio/binding2-radio.component.ts");
/* harmony import */ var _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./binding2-selection/binding2-selection.component */ "./src/app/binding2-selection/binding2-selection.component.ts");
/* harmony import */ var _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-keyup/input-keyup.component */ "./src/app/input-keyup/input-keyup.component.ts");
/* harmony import */ var _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-attribute/html-attribute.component */ "./src/app/html-attribute/html-attribute.component.ts");
/* harmony import */ var _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-class/ng-class.component */ "./src/app/ng-class/ng-class.component.ts");
/* harmony import */ var _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-style/ng-style.component */ "./src/app/ng-style/ng-style.component.ts");
/* harmony import */ var _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-if/ng-if.component */ "./src/app/ng-if/ng-if.component.ts");
/* harmony import */ var _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ng-for/ng-for.component */ "./src/app/ng-for/ng-for.component.ts");
/* harmony import */ var _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ng-switch/ng-switch.component */ "./src/app/ng-switch/ng-switch.component.ts");














const _c0 = function () { return ["/binding"]; };
const _c1 = function () { return ["/binding-2way"]; };
const _c2 = function () { return ["/binding-radio"]; };
const _c3 = function () { return ["/binding-selection"]; };
const _c4 = function () { return ["/html-attribute"]; };
const _c5 = function () { return ["/input-keyup"]; };
const _c6 = function () { return ["/ng-class"]; };
const _c7 = function () { return ["/ng-style"]; };
const _c8 = function () { return ["/ng-for"]; };
const _c9 = function () { return ["/ng-switch"]; };
const _c10 = function () { return ["/text-editor"]; };
const _c11 = function () { return ["/dialog"]; };
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 24, consts: [["routerLinkActive", "active", 3, "routerLink"], [1, "app-router-outlet-layout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "binding-2way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "binding-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "binding-selection'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "html-attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "input-keyup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ng-class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ng-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ng-for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ng-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "text-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "-------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-binding2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-binding2-radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-binding2-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-input-keyup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-html-attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-ng-class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-ng-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-ng-if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-ng-for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-ng-switch");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c11));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _binding_binding_component__WEBPACK_IMPORTED_MODULE_2__["BindingComponent"], _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_3__["Binding2Component"], _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_4__["Binding2RadioComponent"], _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_5__["Binding2SelectionComponent"], _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_6__["InputKeyupComponent"], _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_7__["HtmlAttributeComponent"], _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_8__["NgClassComponent"], _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_9__["NgStyleComponent"], _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_10__["NgIfComponent"], _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_11__["NgForComponent"], _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_12__["NgSwitchComponent"]], styles: [".app-router-outlet-layout[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  border-color: yellow;\n  padding: 5px;\n  margin: 30px 30px 30px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXJvdXRlci1vdXRsZXQtbGF5b3V0IHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogeWVsbG93O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./binding/binding.component */ "./src/app/binding/binding.component.ts");
/* harmony import */ var _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./binding2/binding2.component */ "./src/app/binding2/binding2.component.ts");
/* harmony import */ var _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-for/ng-for.component */ "./src/app/ng-for/ng-for.component.ts");
/* harmony import */ var _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html-attribute/html-attribute.component */ "./src/app/html-attribute/html-attribute.component.ts");
/* harmony import */ var _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-class/ng-class.component */ "./src/app/ng-class/ng-class.component.ts");
/* harmony import */ var _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-style/ng-style.component */ "./src/app/ng-style/ng-style.component.ts");
/* harmony import */ var _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ng-if/ng-if.component */ "./src/app/ng-if/ng-if.component.ts");
/* harmony import */ var _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ng-switch/ng-switch.component */ "./src/app/ng-switch/ng-switch.component.ts");
/* harmony import */ var _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./binding2-radio/binding2-radio.component */ "./src/app/binding2-radio/binding2-radio.component.ts");
/* harmony import */ var _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input-keyup/input-keyup.component */ "./src/app/input-keyup/input-keyup.component.ts");
/* harmony import */ var _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./binding2-selection/binding2-selection.component */ "./src/app/binding2-selection/binding2-selection.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./text-editor/text-editor.component */ "./src/app/text-editor/text-editor.component.ts");
/* harmony import */ var _diaglog_diaglog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./diaglog/diaglog.component */ "./src/app/diaglog/diaglog.component.ts");




//
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _app_routes__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__["BindingComponent"],
        _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_6__["Binding2Component"],
        _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_7__["NgForComponent"],
        _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_8__["HtmlAttributeComponent"],
        _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_9__["NgClassComponent"],
        _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_10__["NgStyleComponent"],
        _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_11__["NgIfComponent"],
        _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_12__["NgSwitchComponent"],
        _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_13__["Binding2RadioComponent"],
        _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_14__["InputKeyupComponent"],
        _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_15__["Binding2SelectionComponent"],
        _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_17__["TextEditorComponent"],
        _diaglog_diaglog_component__WEBPACK_IMPORTED_MODULE_18__["DiaglogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _app_routes__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__["BindingComponent"],
                    _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_6__["Binding2Component"],
                    _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_7__["NgForComponent"],
                    _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_8__["HtmlAttributeComponent"],
                    _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_9__["NgClassComponent"],
                    _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_10__["NgStyleComponent"],
                    _ng_if_ng_if_component__WEBPACK_IMPORTED_MODULE_11__["NgIfComponent"],
                    _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_12__["NgSwitchComponent"],
                    _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_13__["Binding2RadioComponent"],
                    _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_14__["InputKeyupComponent"],
                    _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_15__["Binding2SelectionComponent"],
                    _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_17__["TextEditorComponent"],
                    _diaglog_diaglog_component__WEBPACK_IMPORTED_MODULE_18__["DiaglogComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _app_routes__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _diaglog_diaglog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diaglog/diaglog.component */ "./src/app/diaglog/diaglog.component.ts");
/* harmony import */ var _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-editor/text-editor.component */ "./src/app/text-editor/text-editor.component.ts");
/* harmony import */ var _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding2-selection/binding2-selection.component */ "./src/app/binding2-selection/binding2-selection.component.ts");
/* harmony import */ var _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-switch/ng-switch.component */ "./src/app/ng-switch/ng-switch.component.ts");
/* harmony import */ var _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-style/ng-style.component */ "./src/app/ng-style/ng-style.component.ts");
/* harmony import */ var _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-for/ng-for.component */ "./src/app/ng-for/ng-for.component.ts");
/* harmony import */ var _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-class/ng-class.component */ "./src/app/ng-class/ng-class.component.ts");
/* harmony import */ var _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-keyup/input-keyup.component */ "./src/app/input-keyup/input-keyup.component.ts");
/* harmony import */ var _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html-attribute/html-attribute.component */ "./src/app/html-attribute/html-attribute.component.ts");
/* harmony import */ var _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./binding2-radio/binding2-radio.component */ "./src/app/binding2-radio/binding2-radio.component.ts");
/* harmony import */ var _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./binding2/binding2.component */ "./src/app/binding2/binding2.component.ts");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./binding/binding.component */ "./src/app/binding/binding.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
















/**
 *  Typescript Object array => syntax giống Json (tường minh {"key": "value"})
 * cú pháp giống Json Array. Mỗi item là 1 Route
 * đấy là route cấp 1 của App.
 */
const appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'binding' },
    { path: 'binding', component: _binding_binding_component__WEBPACK_IMPORTED_MODULE_11__["BindingComponent"] },
    { path: 'binding-2way', component: _binding2_binding2_component__WEBPACK_IMPORTED_MODULE_10__["Binding2Component"] },
    { path: 'binding-radio', component: _binding2_radio_binding2_radio_component__WEBPACK_IMPORTED_MODULE_9__["Binding2RadioComponent"] },
    { path: 'binding-selection', component: _binding2_selection_binding2_selection_component__WEBPACK_IMPORTED_MODULE_2__["Binding2SelectionComponent"] },
    { path: 'html-attribute', component: _html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_8__["HtmlAttributeComponent"] },
    { path: 'input-keyup', component: _input_keyup_input_keyup_component__WEBPACK_IMPORTED_MODULE_7__["InputKeyupComponent"] },
    { path: 'ng-class', component: _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_6__["NgClassComponent"] },
    { path: 'ng-for', component: _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_5__["NgForComponent"] },
    { path: 'ng-style', component: _ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_4__["NgStyleComponent"] },
    { path: 'ng-switch', component: _ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_3__["NgSwitchComponent"] },
    { path: 'text-editor', component: _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__["TextEditorComponent"] },
    { path: 'dialog', component: _diaglog_diaglog_component__WEBPACK_IMPORTED_MODULE_0__["DiaglogComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
        args: [{
                /**
                 * route bản chất là 1 module vì thế cần import
                 * RouterModule.forRoot(): chỉ đc call 1 lần duy nhất trong App. Còn lại là RouterModule.forChild() ở các module khác
                 */
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/binding/Hello.ts":
/*!**********************************!*\
  !*** ./src/app/binding/Hello.ts ***!
  \**********************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
class Hello {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}


/***/ }),

/***/ "./src/app/binding/binding.component.ts":
/*!**********************************************!*\
  !*** ./src/app/binding/binding.component.ts ***!
  \**********************************************/
/*! exports provided: BindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingComponent", function() { return BindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hello */ "./src/app/binding/Hello.ts");



class BindingComponent {
    constructor() {
        // biến này đc gọi ở template html
        this.title = 'binding.Component here:';
        this.numberOfClick = 0;
        this.user = new _Hello__WEBPACK_IMPORTED_MODULE_1__["Hello"](1, 'Hungbeo', 40);
    }
    // function sẽ đc gọi ở template
    clickButton() {
        this.numberOfClick++;
    }
    ngOnInit() {
    }
}
BindingComponent.ɵfac = function BindingComponent_Factory(t) { return new (t || BindingComponent)(); };
BindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BindingComponent, selectors: [["app-binding"]], decls: 9, vars: 3, consts: [[1, "binding-component-layout"], [1, "button", 3, "click"], [2, "color", "blue"]], template: function BindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BindingComponent_Template_div_click_5_listener() { return ctx.clickButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "click button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberOfClick);
    } }, styles: [".binding-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: greenyellow;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmluZGluZy9iaW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmluZGluZy9iaW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpbmRpbmctY29tcG9uZW50LWxheW91dHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-binding',
                templateUrl: './binding.component.html',
                styleUrls: ['./binding.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/binding2-radio/Student.ts":
/*!*******************************************!*\
  !*** ./src/app/binding2-radio/Student.ts ***!
  \*******************************************/
/*! exports provided: Student, STUDENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENTS", function() { return STUDENTS; });
class Student {
    constructor(id, name, emotion) {
        this.id = id;
        this.name = name;
        this.emotion = emotion;
    }
}
const STUDENTS = [
    new Student(1, 'hungbeo', 'happy'),
    new Student(2, 'Hunggay', 'sad'),
    new Student(3, 'Long', 'confused'),
    new Student(4, 'Thao', 'Magneta'),
];


/***/ }),

/***/ "./src/app/binding2-radio/binding2-radio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/binding2-radio/binding2-radio.component.ts ***!
  \************************************************************/
/*! exports provided: Binding2RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding2RadioComponent", function() { return Binding2RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Student */ "./src/app/binding2-radio/Student.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function Binding2RadioComponent_label_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Binding2RadioComponent_label_7_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectedStudent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedStudent)("value", s_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r1.name, " ");
} }
class Binding2RadioComponent {
    constructor() {
        this.students = _Student__WEBPACK_IMPORTED_MODULE_1__["STUDENTS"];
    }
    ngOnInit() {
        // init radio
        this.selectedStudent = this.students[1];
    }
}
Binding2RadioComponent.ɵfac = function Binding2RadioComponent_Factory(t) { return new (t || Binding2RadioComponent)(); };
Binding2RadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Binding2RadioComponent, selectors: [["app-binding2-radio"]], decls: 11, vars: 4, consts: [[1, "ng-binding2-radio-component-layout"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "studentGroup", 3, "click"], ["type", "radio", "name", "studentGroup", 3, "ngModel", "value", "ngModelChange"]], template: function Binding2RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "binding2-radio.component.html: [(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Binding2RadioComponent_label_7_Template, 3, 3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Binding2RadioComponent_Template_input_click_9_listener() { return ctx.selectedStudent = null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "None of the above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("radio group: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.selectedStudent), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["@charset \"UTF-8\";\n\n.ng-binding2-radio-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: greenyellow;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmluZGluZzItcmFkaW8vYmluZGluZzItcmFkaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLCtCQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9iaW5kaW5nMi1yYWRpby9iaW5kaW5nMi1yYWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIMSRw6J5IGzDoCBDU1MgY+G7p2EgY29tcG9uZW5lbnQgKi9cbi5uZy1iaW5kaW5nMi1yYWRpby1jb21wb25lbnQtbGF5b3V0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Binding2RadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-binding2-radio',
                templateUrl: './binding2-radio.component.html',
                styleUrls: ['./binding2-radio.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/binding2-selection/binding2-selection.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/binding2-selection/binding2-selection.component.ts ***!
  \********************************************************************/
/*! exports provided: Binding2SelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding2SelectionComponent", function() { return Binding2SelectionComponent; });
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles */ "./src/app/binding2-selection/roles.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function Binding2SelectionComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", role_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r1.name);
} }
class Binding2SelectionComponent {
    constructor() {
        this.roles = _roles__WEBPACK_IMPORTED_MODULE_0__["ROLES"];
    }
    ngOnInit() {
        this.roleSelect = _roles__WEBPACK_IMPORTED_MODULE_0__["ROLES"][1];
    }
}
Binding2SelectionComponent.ɵfac = function Binding2SelectionComponent_Factory(t) { return new (t || Binding2SelectionComponent)(); };
Binding2SelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Binding2SelectionComponent, selectors: [["app-binding2-selection"]], decls: 12, vars: 5, consts: [[1, "ng-binding2-selection-component-layout"], [1, "form-group"], ["for", "role"], ["id", "role", "name", "role", 1, "form-input", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function Binding2SelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "binding2-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function Binding2SelectionComponent_Template_select_ngModelChange_10_listener($event) { return ctx.roleSelect = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, Binding2SelectionComponent_option_11_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("role: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx.roleSelect), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.roleSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roles);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["@charset \"UTF-8\";\n\n.ng-binding2-selection-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: greenyellow;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmluZGluZzItc2VsZWN0aW9uL2JpbmRpbmcyLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsK0JBQUE7QUFDQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9iaW5kaW5nMi1zZWxlY3Rpb24vYmluZGluZzItc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogxJHDonkgbMOgIENTUyBj4bunYSBjb21wb25lbmVudCAqL1xuLm5nLWJpbmRpbmcyLXNlbGVjdGlvbi1jb21wb25lbnQtbGF5b3V0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Binding2SelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-binding2-selection',
                templateUrl: './binding2-selection.component.html',
                styleUrls: ['./binding2-selection.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/binding2-selection/roles.ts":
/*!*********************************************!*\
  !*** ./src/app/binding2-selection/roles.ts ***!
  \*********************************************/
/*! exports provided: Role, ROLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLES", function() { return ROLES; });
class Role {
    // cách viết tắt khai bao biến trên TypeScript
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const ROLES = [
    new Role(1, 'admin'),
    new Role(2, 'moderate'),
    new Role(3, 'User'),
    new Role(4, 'Support'),
];


/***/ }),

/***/ "./src/app/binding2/binding2.component.ts":
/*!************************************************!*\
  !*** ./src/app/binding2/binding2.component.ts ***!
  \************************************************/
/*! exports provided: Binding2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding2Component", function() { return Binding2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class Binding2Component {
    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.address = '';
    }
    setName() {
        this.name = 'Nancy';
    }
    setEmail() {
        this.email = "hung@gmail.com";
    }
    setPassword() {
        this.password = "password 123";
    }
    setUppercaseName(address) {
        this.address = address.toUpperCase();
    }
}
Binding2Component.ɵfac = function Binding2Component_Factory(t) { return new (t || Binding2Component)(); };
Binding2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Binding2Component, selectors: [["app-binding2"]], decls: 51, vars: 8, consts: [[1, "binding2-component-layout"], [2, "color", "red"], ["for", "example-ngModel"], ["type", "text", "id", "example-ngModel", 3, "ngModel", "ngModelChange"], [1, "button", 3, "click"], ["for", "without"], ["id", "without", 3, "value", "input"], ["for", "example-change"], ["id", "example-change", 3, "ngModel", "ngModelChange"], ["for", "example-uppercase"], ["id", "example-uppercase", 3, "ngModel", "ngModelChange"]], template: function Binding2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "binding2.component: binding 2 way ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " c\u00E1ch 1: g\u1ED9p @input [] v\u00E0 @output () v\u00E0o l\u00E0m 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "[(ngModel)]:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Binding2Component_Template_input_ngModelChange_11_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Binding2Component_Template_button_click_12_listener() { return ctx.setName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Set value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " t\u00E1ch @input [] v\u00E0 @ouput () c\u00F3 c\u00E1i l\u1EE3i l\u00E0 ta c\u00F3 th\u1EC3 b\u1EAFt \u0111c $event t\u1EEB @output ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "without NgModel:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function Binding2Component_Template_input_input_22_listener($event) { return ctx.email = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Binding2Component_Template_button_click_23_listener() { return ctx.setEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Set value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " d\u00F9ng 2 c\u00E1ch d\u01B0\u1EDBi \u0111\u00E2y l\u00E0 hay nh\u1EA5t: [ngModel] v\u00E0 (ngModelChange) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "(ngModelChange)=\"...name=$event\":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Binding2Component_Template_input_ngModelChange_33_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Binding2Component_Template_button_click_34_listener() { return ctx.setPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Set value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(ngModelChange)=\"setUppercaseName($event)\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Binding2Component_Template_input_ngModelChange_42_listener($event) { return ctx.setUppercaseName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Binding2Component_Template_button_click_43_listener() { return ctx.address = "Hanoi"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Set value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " @Output () event ch\u1EC9 \u0111c k\u00EDch ho\u1EA1t khi c\u00F3 s\u1EF1 thay \u0111\u1ED5i \u1EDF b\u00EAn trong component input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " thay \u0111\u1ED5i component t\u1EEB b\u00EAn ngo\u00E0i s\u1EBD ko k\u00EDch ho\u1EA1t @output () event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " vd: click button l\u00E0 thay \u0111\u1ED5i t\u1EEB b\u00EAn ngo\u00E0i n\u00EAn setUppercaseName($event) ko \u0111c g\u1ECDi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.password, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".binding2-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: greenyellow;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmluZGluZzIvYmluZGluZzIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iaW5kaW5nMi9iaW5kaW5nMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaW5kaW5nMi1jb21wb25lbnQtbGF5b3V0e1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Binding2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-binding2',
                templateUrl: './binding2.component.html',
                styleUrls: ['./binding2.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/diaglog/diaglog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/diaglog/diaglog.component.ts ***!
  \**********************************************/
/*! exports provided: DiaglogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaglogComponent", function() { return DiaglogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binding/binding.component */ "./src/app/binding/binding.component.ts");



class DiaglogComponent {
    constructor() { }
    ngOnInit() {
        //========================== Hidden Dialog ==================
        //  modal: là background full screen 100% bao quanh Dialog
        this.modal = document.getElementById('dialog-id');
        /**
         * Event sẽ ưu tiên xử lý ở Child html tag trc:
         * Vì thế khi click vào Dialog thì phần background sẽ ko bắt đc Event
         */
        window.onclick = (event) => {
            // khi click bên ngoài Dialog phần background Modal
            if (event.target == this.modal) {
                // 'none' phần html sẽ ẩn đi mà ko chiếm kích thước
                this.modal.style.display = 'none';
            }
        };
    }
}
DiaglogComponent.ɵfac = function DiaglogComponent_Factory(t) { return new (t || DiaglogComponent)(); };
DiaglogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiaglogComponent, selectors: [["app-diaglog"]], decls: 21, vars: 0, consts: [[2, "color", "blue"], ["onclick", "document.getElementById('dialog-id').style.display='block'"], ["id", "dialog-id", 1, "modal"], [1, "modal-content", "animate"]], template: function DiaglogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "diaglog.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " vd dialog ko d\u00F9ng Angular Material component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ta t\u1EF1 x\u00E2y d\u1EF1ng c\u00E1ch truy\u1EC1n d\u1EEF li\u1EC7u gi\u1EEFa Dialog component v\u00E0 parent component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " m\u1EA5u ch\u00F4t n\u1EB1m \u1EDF CSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " d\u00F9ng c\u00E1ch n\u00E0y s\u1EBD hi\u1EC3u b\u1EA3n ch\u1EA5t h\u01A1n (ko n\u00EAn l\u1EC7 thu\u1ED9c v\u00E0o Th\u01B0 Vi\u1EC7n m\u1EA5t th\u1EDDi gian \u0111\u1ECDc hi\u1EC3u)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "c\u00E1ch 1: d\u00F9ng component @input[] / output() => xem vd github.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " c\u00E1ch 2: d\u00F9ng Service Provider => Material Dialog c\u0169ng d\u00F9ng c\u00E1ch n\u00E0y. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " xem vd github Service Provider c\u1EE7a Parent component\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "show dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_binding_binding_component__WEBPACK_IMPORTED_MODULE_1__["BindingComponent"]], styles: ["@charset \"UTF-8\";\n\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n  padding-top: 60px;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  \n  \n}\n@media screen and (min-width: 400px) {\n  .modal-content[_ngcontent-%COMP%] {\n    position: absolute;\n    \n    margin: auto;\n    \n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 400px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    border: 1px solid transparent;\n    border-radius: 5px;\n  }\n}\n@media not screen and (min-width: 400px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin-top: 0%;\n    \n    border-style: none;\n    width: 100%;\n    \n  }\n}\n\n.animate[_ngcontent-%COMP%] {\n  animation: animatezoom 0.6s;\n}\n@keyframes animatezoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhZ2xvZy9kaWFnbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixpREFBQTtBQUNBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQWdDLG1CQUFBO0VBQ2hDLG9DQUFBO0VBQXNDLHFCQUFBO0VBQ3RDLGlCQUFBO0FBVUY7QUFQQSxtQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFFQSwwQkFBQTtFQWNBLHlCQUFBO0FBSkY7QUFURTtFQUpGO0lBS0ksa0JBQUE7SUFBb0IsK0JBQUE7SUFDcEIsWUFBQTtJQUFjLHVEQUFBO0lBQ2QsTUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLGtCQUFBO0VBY0Y7QUFDRjtBQVhFO0VBbEJGO0lBbUJJLGNBQUE7SUFBZ0Isc0RBQUE7SUFDaEIsa0JBQUE7SUFDQSxXQUFBO0lBQWEsb0RBQUE7RUFnQmY7QUFDRjtBQWJBLGtDQUFBO0FBQ0E7RUFFRSwyQkFBQTtBQWdCRjtBQUpBO0VBQ0U7SUFDRSxtQkFBQTtFQWVGO0VBYkE7SUFDRSxtQkFBQTtFQWVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaWFnbG9nL2RpYWdsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpOiBwaOG6p24gYmFvIHF1YW5oIERpYWxvZyovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi8qIENTUyBjaG8gZGlhbG9nICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIC8qIGRpYWxvZyB3aWR0aCA+PSA0MDBweCAqL1xuICAvKiBkaWFsb2cgd2lkdGggPCA0MDBweCAqL1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBwb3NpdGlvbiByZWxhdGl2ZSB0byBQYXJlbnQqL1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvKiBicm93c2VyIHdpbGwgYXV0byBjZW50ZXIgZGl2IGlmIHBvc2l0aW9uID0gYWJzb2x1dGUqL1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSBub3Qgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xuICB9XG59XG5cbi8qIEFkZCBab29tIEFuaW1hdGlvbiBmb3IgRGlhbG9nICovXG4uYW5pbWF0ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzO1xuICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiaglogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-diaglog',
                templateUrl: './diaglog.component.html',
                styleUrls: ['./diaglog.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/html-attribute/html-attribute.component.ts":
/*!************************************************************!*\
  !*** ./src/app/html-attribute/html-attribute.component.ts ***!
  \************************************************************/
/*! exports provided: HtmlAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlAttributeComponent", function() { return HtmlAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HtmlAttributeComponent {
    constructor() {
        this.url = 'https://thepowerofsmiling.com/wp-content/uploads/2014/11/Smile-Icon.png';
    }
    ngOnInit() {
        // phải khởi tạo ở đây sau khi html DOM đã đc khởi tạo
        this.isDisable = true;
        this.isSpecial = true;
    }
}
HtmlAttributeComponent.ɵfac = function HtmlAttributeComponent_Factory(t) { return new (t || HtmlAttributeComponent)(); };
HtmlAttributeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HtmlAttributeComponent, selectors: [["app-html-attribute"]], decls: 12, vars: 4, consts: [[1, "html-attribute-component-layout"], [3, "src"], [1, "button-class", 3, "disabled"], [3, "click"]], template: function HtmlAttributeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "html-attribute.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " @input = [] cho c\u00E1c attribute chu\u1EA9n c\u1EE7a html tag chu\u1EA9n: <input>, <div>, <image>, <a>,... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[src], [class], [style], [disabled], [] ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "disable button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlAttributeComponent_Template_button_click_10_listener() { return ctx.isSpecial = !ctx.isSpecial; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "[class]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("button", ctx.isSpecial);
    } }, styles: ["@charset \"UTF-8\";\n\n\n\n.button[_ngcontent-%COMP%], .button-class[_ngcontent-%COMP%], .button-test[_ngcontent-%COMP%], .button3[_ngcontent-%COMP%], .button2[_ngcontent-%COMP%], .button1[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  \n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.button1[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.button2[_ngcontent-%COMP%] {\n  background-color: #008cba;\n}\n.button3[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-right: 10px;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n  color: #607d8b;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: red;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.html-attribute-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: greenyellow;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n\n.button-class[_ngcontent-%COMP%], .button-test[_ngcontent-%COMP%] {\n  \n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHRtbC1hdHRyaWJ1dGUvaHRtbC1hdHRyaWJ1dGUuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLG1DQUFBO0FDQUEsOEVBQUE7QUFFQSxtREFBQTtBQUNBO0VBQ0UseUJBQUE7RUFBMkIsVUFBQTtFQUMzQixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FER0Y7QUNBQTtFQUVFLHlCQUFBO0FERUY7QUNDQTtFQUVFLHlCQUFBO0FEQ0Y7QUNFQTtFQUVFLHlCQUFBO0FEQUY7QUNHQSwyQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURBRjtBQ0VBOztFQUVFLGNBQUE7QURDRjtBQ0NBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FERUY7QUNBQTtFQUNFLFVBQUE7QURHRjtBQ0FBLG9CQUFBO0FBQ0E7RUFDRSx5Q0FBQTtBREdGO0FBdERBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXlERjtBQXZEQTs7Ozs7Ozs7Ozs7OztDQUFBO0FBZUE7RUFDcUIsc0JBQUE7RUFDbkIscUJBQUE7QUF5REYiLCJmaWxlIjoic3JjL2FwcC9odG1sLWF0dHJpYnV0ZS9odG1sLWF0dHJpYnV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qY+G6p24gcGjhuqNpIGltcG9ydCDEkeG7gyBkw7luZyBAZXh0ZW5kICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2Nzcy9jc3MzX2J1dHRvbnMuYXNwICovXG4uYnV0dG9uLCAuYnV0dG9uLWNsYXNzLCAuYnV0dG9uLXRlc3QsIC5idXR0b24zLCAuYnV0dG9uMiwgLmJ1dHRvbjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGNiYTtcbn1cblxuLmJ1dHRvbjMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBOYXZpZ2F0aW9uIGxpbmsgc3R5bGVzICovXG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbm5hdiBhOnZpc2l0ZWQsXG5hOmxpbmsge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cblxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cblxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogZXZlcnl3aGVyZSBlbHNlICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5odG1sLWF0dHJpYnV0ZS1jb21wb25lbnQtbGF5b3V0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLypcbi5idXR0b24tY2xhc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4qL1xuLmJ1dHRvbi1jbGFzcywgLmJ1dHRvbi10ZXN0IHtcbiAgLyogLi4vLi4vc3R5bGVzLnNjc3MgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuLyogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3MvY3NzM19idXR0b25zLmFzcCAqL1xuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b24xIHtcbiAgQGV4dGVuZC5idXR0b247IC8vIHRo4burYSBr4bq/IGPDoWMgdGh14buZYyB0w61uaCBj4bunYSBidXR0b25cbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbn1cblxuLmJ1dHRvbjIge1xuICBAZXh0ZW5kLmJ1dHRvbjsgLy8gdGjhu6thIGvhur8gY8OhYyB0aHXhu5ljIHTDrW5oIGPhu6dhIGJ1dHRvblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xufVxuXG4uYnV0dG9uMyB7XG4gIEBleHRlbmQuYnV0dG9uOyAvLyB0aOG7q2Ega+G6vyBjw6FjIHRodeG7mWMgdMOtbmggY+G7p2EgYnV0dG9uXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi8qIE5hdmlnYXRpb24gbGluayBzdHlsZXMgKi9cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsXG5hOmxpbmsge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cbioge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlAttributeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-html-attribute',
                templateUrl: './html-attribute.component.html',
                styleUrls: ['./html-attribute.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/input-keyup/input-keyup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/input-keyup/input-keyup.component.ts ***!
  \******************************************************/
/*! exports provided: InputKeyupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputKeyupComponent", function() { return InputKeyupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InputKeyupComponent {
    constructor() {
        this.enterMessage = '';
        this.blurMessage = '';
    }
    ngOnInit() {
    }
    onEnter(message) {
        this.enterMessage = message;
    }
    /**
     * sẽ đc goi khi Edit input từ focus chuyển sang unfocus by clicking elsewhere
     * @param message
     */
    onBlur(message) {
        this.blurMessage = message;
    }
}
InputKeyupComponent.ɵfac = function InputKeyupComponent_Factory(t) { return new (t || InputKeyupComponent)(); };
InputKeyupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputKeyupComponent, selectors: [["app-input-keyup"]], decls: 41, vars: 3, consts: [[1, "input-keyup-component-layout"], [2, "color", "red"], [3, "keyup"], ["box", ""], [3, "keyup.enter"], ["box2", ""], [3, "blur"], ["box3", ""]], template: function InputKeyupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "input-keyup.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "input #variable and (keyup):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "d\u00F9ng binding 2ways hay h\u01A1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputKeyupComponent_Template_input_keyup_7_listener() { return 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "---------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "input (keyup.enter):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "press Enter sau khi type text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "d\u00F9ng binding 2ways [(ngModel)] k\u1EBFt h\u01A1p v\u1EDBi (keyup.enter) l\u00E0 ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function InputKeyupComponent_Template_input_keyup_enter_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.onEnter(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "---------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "input (blur):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " (blur): l\u00E0 event s\u1EBD \u0111c goi khi Edit input t\u1EEB focus chuy\u1EC3n sang unfocus by clicking elsewhere ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " v\u00EC th\u1EF1c t\u1EBF d\u00F9ng [(ngModel)] n\u00EAn \u00EDt khi d\u00F9ng (blur) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function InputKeyupComponent_Template_input_blur_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.onBlur(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "---------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "input(keyup.enter) & (blur) & [(ngModel)]:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "th\u1EF1c t\u1EBF th\u01B0\u1EDDng \u00E1p d\u1EE5ng linh ho\u1EA1t 3 c\u00E1ch tr\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.enterMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blurMessage);
    } }, styles: [".input-keyup-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQta2V5dXAvaW5wdXQta2V5dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC1rZXl1cC9pbnB1dC1rZXl1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1rZXl1cC1jb21wb25lbnQtbGF5b3V0e1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputKeyupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-keyup',
                templateUrl: './input-keyup.component.html',
                styleUrls: ['./input-keyup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ng-class/ng-class.component.ts":
/*!************************************************!*\
  !*** ./src/app/ng-class/ng-class.component.ts ***!
  \************************************************/
/*! exports provided: NgClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgClassComponent", function() { return NgClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function (a0, a1, a2) { return { saveable: a0, modified: a1, special: a2 }; };
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
class NgClassComponent {
    constructor() {
        /**
         * ngClass
         */
        this.isSaveable = true;
        this.isSpecial = true;
        this.isModified = true;
    }
    ngOnInit() {
        this.setCurrentClasses();
    }
    setCurrentClasses() {
        // JSON
        this.currentClasses = {
            'saveable': this.isSaveable,
            'modified': this.isModified,
            'special': this.isSpecial
        };
    }
}
NgClassComponent.ɵfac = function NgClassComponent_Factory(t) { return new (t || NgClassComponent)(); };
NgClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgClassComponent, selectors: [["app-ng-class"]], decls: 43, vars: 26, consts: [[1, "ng-class-component-layout"], ["id", "ngClass"], [3, "ngClass"], [1, "saveable", "modified", "special"], ["for", "saveable"], ["type", "checkbox", "id", "saveable", 3, "ngModel", "ngModelChange"], ["for", "modified"], ["type", "checkbox", "id", "modified", 3, "ngModel", "ngModelChange"], ["for", "special"], ["type", "checkbox", "id", "special", 3, "ngModel", "ngModelChange"], [3, "click"], [2, "color", "red"], [2, "color", "black"]], template: function NgClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-class.component: [ngClass]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " [ngClass]= \" c\u00E1ch 1\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " [ngClass]= \" c\u00E1ch 2\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " [class.ClassName] = c\u00E1ch 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "jump SCSS in htlm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "saveable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgClassComponent_Template_input_ngModelChange_19_listener($event) { return ctx.isSaveable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "modified:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgClassComponent_Template_input_ngModelChange_23_listener($event) { return ctx.isModified = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "special:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgClassComponent_Template_input_ngModelChange_27_listener($event) { return ctx.isSpecial = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgClassComponent_Template_button_click_28_listener() { return ctx.setCurrentClasses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Refresh currentClasses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " nh\u01B0\u1EE3c \u0111i\u1EC3m NgClass: l\u00E0 ko jump \u0111c CSS class khi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Ctrl + Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u1EDF html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " v\u00EC tr\u00ECnh Parser ko support parser ngClass => ta ph\u1EA3i d\u00F9ng tip trick ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " ngClass ko n\u00EAn \u0111c build \u1EDF trong TypeScript, nh\u01B0 th\u1EBF s\u1EBD kh\u00F3 \u0111\u1ECDc code html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ngClass n\u00EAn vi\u1EBFt t\u01B0\u1EDDng minh trong html code => nh\u01B0 th\u1EBF d\u1EC5 nh\u00ECn. V\u00E0 update \u0111c khi t\u1EEBng th\u00E0nh ph\u1EA7n thay \u0111\u1ED5i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("currentClasses is ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 16, ctx.currentClasses), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](18, _c0, ctx.isSaveable, ctx.isModified, ctx.isSpecial));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c1, ctx.isSaveable ? "saveable" : "", ctx.isModified ? "modified" : "", ctx.isSpecial ? "special" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("saveable", ctx.isSaveable)("modified", ctx.isModified)("special", ctx.isSpecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isSaveable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isModified);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isSpecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" This div should be ", ctx.isSaveable ? "" : "not", " saveable, ", ctx.isModified ? "unmodified" : "modified", " and ", ctx.isSpecial ? "" : "not", " special after clicking \"Refresh\". ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: [".ng-class-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 100%;\n  margin: 0 2px;\n}\n\ndiv[ng-reflect-ng-switch][_ngcontent-%COMP%], app-unknown-item[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  display: block;\n}\n\n#noTrackByCnt[_ngcontent-%COMP%], #withTrackByCnt[_ngcontent-%COMP%] {\n  color: darkred;\n  max-width: 450px;\n  margin: 4px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.box[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 6px;\n  max-width: 450px;\n}\n\n.child-div[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-weight: normal;\n}\n\n.context[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-weight: bold;\n}\n\n.course[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.helpful[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.saveable[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n\n.study[_ngcontent-%COMP%], .modified[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\";\n}\n\n.special[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.toe[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-style: italic;\n}\n\n.to-toc[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctY2xhc3MvbmctY2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDQyxlQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7O0VBRUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtBQUFEOztBQUdBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRDs7QUFHQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRDs7QUFHQTtFQUNDLGdCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0FBQUQ7O0FBR0E7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUFBRDs7QUFHQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRDs7QUFHQTtFQUNDLFVBQUE7QUFBRDs7QUFHQTtFQUNDLGdCQUFBO0FBQUQ7O0FBR0E7O0VBRUUsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRDs7QUFJQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUREOztBQUtBOzs7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9uZy1jbGFzcy9uZy1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAubmctY2xhc3MtY29tcG9uZW50LWxheW91dHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdG1hcmdpbjogMCAycHg7XHJcbn1cclxuXHJcbmRpdltuZy1yZWZsZWN0LW5nLXN3aXRjaF0sIGFwcC11bmtub3duLWl0ZW0ge1xyXG4gIG1hcmdpbjogLjVyZW0gMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI25vVHJhY2tCeUNudCxcclxuI3dpdGhUcmFja0J5Q250IHtcclxuXHRjb2xvcjogZGFya3JlZDtcclxuXHRtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cdG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRtYXgtd2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4uY2hpbGQtZGl2IHtcclxuXHRtYXJnaW4tbGVmdDogMWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jb250ZXh0IHtcclxuXHRtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGFyZW50LWRpdiB7XHJcblx0bWFyZ2luLXRvcDogMWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY291cnNlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5oZWxwZnVsIHtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc2F2ZWFibGUge1xyXG5cdGNvbG9yOiBsaW1lZ3JlZW47XHJcbn1cclxuXHJcbi5zdHVkeSxcclxuLm1vZGlmaWVkIHtcclxuICBmb250LWZhbWlseTogXCJCcnVzaCBTY3JpcHQgTVRcIjtcclxufVxyXG5cclxuLnNwZWNpYWx7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4udG9lIHtcclxuXHRtYXJnaW4tbGVmdDogMWVtO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuXHJcbi50by10b2Mge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-class',
                templateUrl: './ng-class.component.html',
                styleUrls: ['./ng-class.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ng-for/Customer.ts":
/*!************************************!*\
  !*** ./src/app/ng-for/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}


/***/ }),

/***/ "./src/app/ng-for/ng-for.component.ts":
/*!********************************************!*\
  !*** ./src/app/ng-for/ng-for.component.ts ***!
  \********************************************/
/*! exports provided: NgForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForComponent", function() { return NgForComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customer */ "./src/app/ng-for/Customer.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NgForComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", customer_r4.id, " : ", customer_r4.name, " ");
} }
function NgForComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgForComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const customer_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickButton(customer_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", customer_r5.name, " ");
} }
function NgForComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", i_r9, " - ", customer_r8.id, " : ", customer_r8.name, "");
} }
function NgForComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r11, " - ", customer_r10.id, " : ", customer_r10.name, " ");
} }
class NgForComponent {
    constructor() {
        this.items = [new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](1, "hung", 14), new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](2, "khien", 14), new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](3, "kien", 14)];
        this.itemChangedIds = [new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](1, "hungChanged", 14), new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](2, "khien Ko changeId", 14), new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](5, "kienChanged", 14)];
        this.itemChangedNames = [new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](1, "hungChanged", 14), new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](2, "khienChanged", 14), new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](3, "kien", 14)];
        this.custome1 = new _Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](1, 'chân chính', 8);
    }
    ngOnInit() {
        this.customers = this.items;
    }
    clickButton(name) {
        window.alert(name);
    }
    resetList() {
        this.customers = this.items;
    }
    changeIds() {
        this.customers = this.itemChangedIds;
    }
    changeIds2() {
        // ngay cả change thành phần của biến vẫn đc update vào html (lạ thật)
        this.customers[0].name = 'hungchanged';
    }
    /**
     *
     * @param index : là vị trí trong array của *ngFor
     * @param customer: là object của array tại vị trí index
     */
    trackById(index, customer) {
        return customer.id;
    }
    /**
   *
   * @param index : là vị trí trong array của *ngFor
   * @param customer: là object của array tại vị trí index
   */
    trackByName(index, customer) {
        return customer.name;
    }
}
NgForComponent.ɵfac = function NgForComponent_Factory(t) { return new (t || NgForComponent)(); };
NgForComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgForComponent, selectors: [["app-ng-for"]], decls: 36, vars: 5, consts: [[1, "ngfor-component-layout"], [2, "color", "red"], [1, "ng-for-list-box"], [4, "ngFor", "ngForOf"], ["class", "button", 3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "button", 3, "click"]], template: function NgForComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ng-for.component: *ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "example 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*ngFor=\"let customer of customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "customer.id : customer.name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgForComponent_li_10_Template, 2, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " example 2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgForComponent_button_13_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " *ngFor index:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*ngFor=\"let customer of customers; let i=index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "index - customer.id : customer.name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NgForComponent_li_21_Template, 2, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "----------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " *ngFor trackBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*ngFor=\"let customer of customers; let i=index; trackBy: trackById");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "index - customer.id : customer.name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgForComponent_Template_button_click_30_listener() { return ctx.resetList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reset items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgForComponent_Template_button_click_32_listener() { return ctx.changeIds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Change ids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NgForComponent_div_35_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".ngfor-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: greenyellow;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n\n.ng-for-list-box[_ngcontent-%COMP%] {\n  list-style-type: square;\n  \n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  padding: 20px;\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctZm9yL25nLWZvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQXlCLHlCQUFBO0VBQ3pCLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNELGFBQUE7RUFDQSxnQkFBQTtBQUVEIiwiZmlsZSI6InNyYy9hcHAvbmctZm9yL25nLWZvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ2Zvci1jb21wb25lbnQtbGF5b3V0e1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmctZm9yLWxpc3QtYm94IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTsgLyogc3F1YXJlLCBjaXJjbGUsIG5vbmUgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXgtd2lkdGg6IDQ1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-for',
                templateUrl: './ng-for.component.html',
                styleUrls: ['./ng-for.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ng-if/ng-if.component.ts":
/*!******************************************!*\
  !*** ./src/app/ng-if/ng-if.component.ts ***!
  \******************************************/
/*! exports provided: NgIfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfComponent", function() { return NgIfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NgIfComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content to render when condition is true.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgIfComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content l\u00E0 child c\u1EE7a div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NgIfComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content to render when condition is false.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgIfComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " content l\u00E0 child c\u1EE7a div ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgIfComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content to render when condition is true.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgIfComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content to render when condition is false.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgIfComponent {
    constructor() { }
    ngOnInit() {
        // khởi tạo ở đây sau khi DOM đc load => thì mới update đc vào html
        this.condition = true;
        this.condition2 = true;
        this.condition3 = true;
        this.isHidden = true;
    }
}
NgIfComponent.ɵfac = function NgIfComponent_Factory(t) { return new (t || NgIfComponent)(); };
NgIfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgIfComponent, selectors: [["app-ng-if"]], decls: 48, vars: 14, consts: [[1, "ng-if-component-layout"], [2, "color", "red"], [4, "ngIf"], [1, "button", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "ng-if-block", 4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "hidden"], [1, "if-block"], [1, "else-block"], [1, "ng-if-block"]], template: function NgIfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ng-if.component: *ngIf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "---------------------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*ngIf=\"condition\": Content is rendered when condition is true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgIfComponent_div_7_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgIfComponent_Template_button_click_8_listener() { return ctx.condition = !ctx.condition; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*ngIf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "---------------------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*ngIf=\"condition2; else elseBlock2\": d\u00F9ng v\u1EDBi ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgIfComponent_ng_container_14_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgIfComponent_ng_template_15_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgIfComponent_Template_button_click_17_listener() { return ctx.condition2 = !ctx.condition2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*ngIf else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "---------------------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*ngIf=\"condition; then thenBlock else elseBlock\": d\u00F9ng v\u1EDBi ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NgIfComponent_div_23_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NgIfComponent_ng_template_24_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NgIfComponent_ng_template_26_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgIfComponent_Template_button_click_28_listener() { return ctx.condition3 = !ctx.condition3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*ngIf then else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "-----------------------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "show/hide vs *ngIf:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " show/hide: l\u00E0 \u1EA9n \u0111i th\u00F4i, ko remove html kh\u1ECFi DOM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " *ngIf: l\u00E0 remove html kh\u1ECFi DOM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "show with [hidden]= \"isHidden\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " [style.visibility] = hidden: \u1EA9n \u0111i v\u1EABn chi\u1EBFm ko gian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Show with [style.display] = none: \u1EA9n \u0111i ko chi\u1EBFm ko gian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "show with class.hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgIfComponent_Template_button_click_46_listener() { return ctx.isHidden = !ctx.isHidden; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.condition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.condition2)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.condition3)("ngIfThen", _r5)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isHidden ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.isHidden ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Show/Hidden: ", ctx.isHidden, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".ng-if-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n\n.ng-if-block[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  border-color: blueviolet;\n  padding: 5px;\n}\n\n.if-block[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n  padding: 10px;\n  font-size: 1rem;\n}\n\n.else-block[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  padding: 20px;\n  font-size: 2rem;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaWYvbmctaWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9uZy1pZi9uZy1pZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pZi1jb21wb25lbnQtbGF5b3V0e1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmctaWYtYmxvY2t7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uaWYtYmxvY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLmVsc2UtYmxvY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-if',
                templateUrl: './ng-if.component.html',
                styleUrls: ['./ng-if.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ng-style/ng-style.component.ts":
/*!************************************************!*\
  !*** ./src/app/ng-style/ng-style.component.ts ***!
  \************************************************/
/*! exports provided: NgStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStyleComponent", function() { return NgStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgStyleComponent {
    constructor() { }
    /**
     * Hàm này đc gọi sau khi html DOM đc create
     */
    ngOnInit() {
        // khởi tạo ở đây sẽ sinh event để Update DOM có liên quan tới biến này
        this.islargeFont = true;
        this.isHidden = false;
    }
}
NgStyleComponent.ɵfac = function NgStyleComponent_Factory(t) { return new (t || NgStyleComponent)(); };
NgStyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgStyleComponent, selectors: [["app-ng-style"]], decls: 17, vars: 8, consts: [[1, "ng-style-component-layout"], [2, "color", "red"], [1, "button", 3, "click"]], template: function NgStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ng-style.component: [ngStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "n\u00EAn d\u00F9ng [ngClass] thay cho [style.attribute] n\u1EBFu c\u00F3 th\u1EC3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " [style.font-size]= x-large or smaller. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgStyleComponent_Template_button_click_7_listener() { return ctx.islargeFont = !ctx.islargeFont; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "----------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Show with style.visibility =");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Show with style.display = none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgStyleComponent_Template_button_click_15_listener() { return ctx.isHidden = !ctx.isHidden; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.islargeFont ? "x-large" : "smaller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" isLargeFont = ", ctx.islargeFont, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isHidden ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.isHidden ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Show/Hidden: ", ctx.isHidden, "");
    } }, styles: [".ng-style-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctc3R5bGUvbmctc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uZy1zdHlsZS9uZy1zdHlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zdHlsZS1jb21wb25lbnQtbGF5b3V0e1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgStyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-style',
                templateUrl: './ng-style.component.html',
                styleUrls: ['./ng-style.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ng-switch/Hero.ts":
/*!***********************************!*\
  !*** ./src/app/ng-switch/Hero.ts ***!
  \***********************************/
/*! exports provided: Hero, heroes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroes", function() { return heroes; });
class Hero {
    constructor(id, name, emotion) {
        this.id = id;
        this.name = name;
        this.emotion = emotion;
    }
}
const heroes = [
    new Hero(1, 'hungbeo', 'happy'),
    new Hero(2, 'Hunggay', 'sad'),
    new Hero(3, 'Long', 'confused'),
    new Hero(4, 'Thao', 'Magneta')
];


/***/ }),

/***/ "./src/app/ng-switch/ng-switch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ng-switch/ng-switch.component.ts ***!
  \**************************************************/
/*! exports provided: NgSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSwitchComponent", function() { return NgSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero */ "./src/app/ng-switch/Hero.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function NgSwitchComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgSwitchComponent_label_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hero = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.hero)("value", h_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", h_r6.name, " ");
} }
function NgSwitchComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.hero));
} }
function NgSwitchComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.hero));
} }
function NgSwitchComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.hero));
} }
function NgSwitchComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.hero));
} }
function NgSwitchComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " switch default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgSwitchComponent {
    constructor() {
        this.heroes = _Hero__WEBPACK_IMPORTED_MODULE_1__["heroes"];
    }
    ngOnInit() {
        // select radio button
        this.hero = _Hero__WEBPACK_IMPORTED_MODULE_1__["heroes"][1];
    }
}
NgSwitchComponent.ɵfac = function NgSwitchComponent_Factory(t) { return new (t || NgSwitchComponent)(); };
NgSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSwitchComponent, selectors: [["app-ng-switch"]], decls: 21, vars: 9, consts: [[1, "ng-switch-component-layout"], [2, "color", "blue"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "radioGroupName", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "radio", "name", "radioGroupName", 3, "ngModel", "value", "ngModelChange"]], template: function NgSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ng-switch.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ngSwitch s\u1EBD delete DOM c\u0169 v\u00E0 t\u1EA1o m\u1EDBi DOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSwitchComponent_label_9_Template, 3, 3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSwitchComponent_Template_input_click_11_listener() { return ctx.hero = null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "None of the above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NgSwitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgSwitchComponent_div_16_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NgSwitchComponent_div_17_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NgSwitchComponent_div_18_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NgSwitchComponent_div_19_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NgSwitchComponent_div_20_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("radio group: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.hero), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.hero == null ? null : ctx.hero.emotion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "happy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "sad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "confused");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Magneta");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["@charset \"UTF-8\";\n\n.ng-switch-component-layout[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  padding: 10px;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 5px;\n  border-color: blue;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctc3dpdGNoL25nLXN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsK0JBQUE7QUFDQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL25nLXN3aXRjaC9uZy1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiDEkcOieSBsw6AgQ1NTIGPhu6dhIGNvbXBvbmVuZW50ICovXG4ubmctc3dpdGNoLWNvbXBvbmVudC1sYXlvdXQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-switch',
                templateUrl: './ng-switch.component.html',
                styleUrls: ['./ng-switch.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/text-editor/text-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/text-editor/text-editor.component.ts ***!
  \******************************************************/
/*! exports provided: TextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorComponent", function() { return TextEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class TextEditorComponent {
    constructor() { }
    ngOnInit() { }
}
TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(); };
TextEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextEditorComponent, selectors: [["app-text-editor"]], decls: 11, vars: 2, consts: [[1, "preview-layout"], ["id", "my-textarea", "name", "Comments", "placeholder", "Comments", 1, "editor", 3, "ngModel", "ngModelChange"]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "text-editor.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preview: binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " angular s\u1EBD convert <> sang k\u00FD t\u1EF1 \u0111\u1EB7c bi\u1EC7t c\u1EE7a XML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " xem vd: security-innerHtml-editor\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextEditorComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.output = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.output);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.output);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".preview-layout[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 80%;\n  overflow-y: scroll;\n  background-color: azure;\n  border-style: solid;\n  border-width: 2px;\n  border-color: blue;\n  padding: 10px 10px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n\n.editor[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 70px;\n  width: 80%;\n  margin-left: 10px;\n  resize: none;\n  \n}\n\np[_ngcontent-%COMP%] {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC1lZGl0b3IvdGV4dC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFBYyw0REFBQTtBQUVoQjs7QUFDQTtFQUNFLFdBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3RleHQtZWRpdG9yL3RleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctbGF5b3V0IHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5lZGl0b3Ige1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICByZXNpemU6IG5vbmU7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IHRoZSB1c2VyIHRvIHJlc2l6ZSB0aGUgdGV4dGFyZWEgKi9cclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-editor',
                templateUrl: './text-editor.component.html',
                styleUrls: ['./text-editor.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular5\a11-helloworld\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map