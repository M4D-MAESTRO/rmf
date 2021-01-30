(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novinimigo-novinimigo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/novinimigo/novinimigo.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/novinimigo/novinimigo.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Novo inimigo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label stacked>Tipo de RPG: </ion-label>\r\n    <ion-select formControlName=\"idCidade\">\r\n      <ion-select-option *ngFor=\"let cidade of cidades\" [value]=\"cidade.id\"> {{cidade.nome}} </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/novinimigo/novinimigo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/novinimigo/novinimigo.module.ts ***!
  \*************************************************/
/*! exports provided: NovinimigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovinimigoPageModule", function() { return NovinimigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _novinimigo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novinimigo.page */ "./src/app/novinimigo/novinimigo.page.ts");







const routes = [
    {
        path: '',
        component: _novinimigo_page__WEBPACK_IMPORTED_MODULE_6__["NovinimigoPage"]
    }
];
let NovinimigoPageModule = class NovinimigoPageModule {
};
NovinimigoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_novinimigo_page__WEBPACK_IMPORTED_MODULE_6__["NovinimigoPage"]]
    })
], NovinimigoPageModule);



/***/ }),

/***/ "./src/app/novinimigo/novinimigo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/novinimigo/novinimigo.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdmluaW1pZ28vbm92aW5pbWlnby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/novinimigo/novinimigo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/novinimigo/novinimigo.page.ts ***!
  \***********************************************/
/*! exports provided: NovinimigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovinimigoPage", function() { return NovinimigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let NovinimigoPage = class NovinimigoPage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    ngOnInit() {
    }
};
NovinimigoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
NovinimigoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-novinimigo',
        template: __webpack_require__(/*! raw-loader!./novinimigo.page.html */ "./node_modules/raw-loader/index.js!./src/app/novinimigo/novinimigo.page.html"),
        styles: [__webpack_require__(/*! ./novinimigo.page.scss */ "./src/app/novinimigo/novinimigo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], NovinimigoPage);



/***/ })

}]);
//# sourceMappingURL=novinimigo-novinimigo-module-es2015.js.map