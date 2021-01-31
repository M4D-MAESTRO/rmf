(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-ajuda-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ajuda/ajuda.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ajuda/ajuda.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Ajuda\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <app-help-rpg [hasNext]=\"false\" (prosseguir)=\"monitor($event)\"></app-help-rpg>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajuda/ajuda-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ajuda/ajuda-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AjudaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPageRoutingModule", function() { return AjudaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ajuda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajuda.page */ "./src/app/ajuda/ajuda.page.ts");




const routes = [
    {
        path: '',
        component: _ajuda_page__WEBPACK_IMPORTED_MODULE_3__["AjudaPage"]
    }
];
let AjudaPageRoutingModule = class AjudaPageRoutingModule {
};
AjudaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AjudaPageRoutingModule);



/***/ }),

/***/ "./src/app/ajuda/ajuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.module.ts ***!
  \***************************************/
/*! exports provided: AjudaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPageModule", function() { return AjudaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajuda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajuda-routing.module */ "./src/app/ajuda/ajuda-routing.module.ts");
/* harmony import */ var _ajuda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajuda.page */ "./src/app/ajuda/ajuda.page.ts");
/* harmony import */ var _components_criacoes_help_rpg_help_rpg_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/help-rpg/help-rpg.module */ "./src/app/components/criacoes/help-rpg/help-rpg.module.ts");








let AjudaPageModule = class AjudaPageModule {
};
AjudaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ajuda_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjudaPageRoutingModule"],
            _components_criacoes_help_rpg_help_rpg_module__WEBPACK_IMPORTED_MODULE_7__["HelpRpgModule"]
        ],
        declarations: [_ajuda_page__WEBPACK_IMPORTED_MODULE_6__["AjudaPage"]]
    })
], AjudaPageModule);



/***/ }),

/***/ "./src/app/ajuda/ajuda.page.scss":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL2FqdWRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ajuda/ajuda.page.ts":
/*!*************************************!*\
  !*** ./src/app/ajuda/ajuda.page.ts ***!
  \*************************************/
/*! exports provided: AjudaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPage", function() { return AjudaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AjudaPage = class AjudaPage {
    constructor() { }
    ngOnInit() {
    }
};
AjudaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajuda',
        template: __webpack_require__(/*! raw-loader!./ajuda.page.html */ "./node_modules/raw-loader/index.js!./src/app/ajuda/ajuda.page.html"),
        styles: [__webpack_require__(/*! ./ajuda.page.scss */ "./src/app/ajuda/ajuda.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AjudaPage);



/***/ })

}]);
//# sourceMappingURL=ajuda-ajuda-module-es2015.js.map