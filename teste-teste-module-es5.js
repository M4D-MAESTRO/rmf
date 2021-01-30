(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teste-teste-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/teste/teste.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teste/teste.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Testes\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--<ficha-medieval-cronicas></ficha-medieval-cronicas> -->\r\n  <!-- <app-criar-componente></app-criar-componente> -->\r\n  <!--<app-ficha [idFicha]=\"idFicha\"></app-ficha>-->\r\n  <!--<app-nova-mesa></app-nova-mesa>-->\r\n  <app-invitation-form></app-invitation-form>\r\n  <!--<app-paginacao></app-paginacao>-->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/teste/teste.module.ts":
/*!***************************************!*\
  !*** ./src/app/teste/teste.module.ts ***!
  \***************************************/
/*! exports provided: TestePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestePageModule", function() { return TestePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teste_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teste.page */ "./src/app/teste/teste.page.ts");
/* harmony import */ var _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _components_criacoes_criacoes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/criacoes.module */ "./src/app/components/criacoes/criacoes.module.ts");
/* harmony import */ var _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _components_utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _components_criacoes_nova_mesa_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/criacoes/nova-mesa.module */ "./src/app/components/criacoes/nova-mesa.module.ts");
/* harmony import */ var _components_criacoes_invitation_form_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/criacoes/invitation-form.module */ "./src/app/components/criacoes/invitation-form.module.ts");












var routes = [
    {
        path: '',
        component: _teste_page__WEBPACK_IMPORTED_MODULE_5__["TestePage"]
    }
];
var TestePageModule = /** @class */ (function () {
    function TestePageModule() {
    }
    TestePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_6__["FichasModule"],
                _components_criacoes_criacoes_module__WEBPACK_IMPORTED_MODULE_7__["CriacoesModule"],
                _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__["PaginacaoModule"],
                _components_utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_9__["ListasModule"],
                _components_criacoes_nova_mesa_module__WEBPACK_IMPORTED_MODULE_10__["NovaMesaModule"],
                _components_criacoes_invitation_form_module__WEBPACK_IMPORTED_MODULE_11__["InvitationFormModule"]
            ],
            declarations: [_teste_page__WEBPACK_IMPORTED_MODULE_5__["TestePage"]]
        })
    ], TestePageModule);
    return TestePageModule;
}());



/***/ }),

/***/ "./src/app/teste/teste.page.scss":
/*!***************************************!*\
  !*** ./src/app/teste/teste.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RlL3Rlc3RlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/teste/teste.page.ts":
/*!*************************************!*\
  !*** ./src/app/teste/teste.page.ts ***!
  \*************************************/
/*! exports provided: TestePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestePage", function() { return TestePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestePage = /** @class */ (function () {
    function TestePage() {
        this.idFicha = '5e6e439cae0f2228ebfbdecc';
    }
    TestePage.prototype.ngOnInit = function () {
    };
    TestePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teste',
            template: __webpack_require__(/*! raw-loader!./teste.page.html */ "./node_modules/raw-loader/index.js!./src/app/teste/teste.page.html"),
            styles: [__webpack_require__(/*! ./teste.page.scss */ "./src/app/teste/teste.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestePage);
    return TestePage;
}());



/***/ })

}]);
//# sourceMappingURL=teste-teste-module-es5.js.map