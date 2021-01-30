(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerfaccoes-gerfaccoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gerfaccoes/gerfaccoes.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gerfaccoes/gerfaccoes.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerencia de facções\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-faccoes [menu]=\"false\" [add]=\"true\"></app-faccoes>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/criacoes/faccoes-update/faccoes-update.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes-update/faccoes-update.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FaccoesUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaccoesUpdateModule", function() { return FaccoesUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _faccoes_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faccoes-update.component */ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.ts");











let FaccoesUpdateModule = class FaccoesUpdateModule {
};
FaccoesUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faccoes_update_component__WEBPACK_IMPORTED_MODULE_10__["FaccoesUpdateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__["ListasModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_9__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_9__["ImagemDisplayModule"]
        ],
        exports: [
            _faccoes_update_component__WEBPACK_IMPORTED_MODULE_10__["FaccoesUpdateComponent"],
        ],
        entryComponents: [
            _faccoes_update_component__WEBPACK_IMPORTED_MODULE_10__["FaccoesUpdateComponent"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], FaccoesUpdateModule);



/***/ }),

/***/ "./src/app/gerfaccoes/gerfaccoes-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/gerfaccoes/gerfaccoes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GerfaccoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerfaccoesPageRoutingModule", function() { return GerfaccoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gerfaccoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerfaccoes.page */ "./src/app/gerfaccoes/gerfaccoes.page.ts");




const routes = [
    {
        path: '',
        component: _gerfaccoes_page__WEBPACK_IMPORTED_MODULE_3__["GerfaccoesPage"]
    }
];
let GerfaccoesPageRoutingModule = class GerfaccoesPageRoutingModule {
};
GerfaccoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GerfaccoesPageRoutingModule);



/***/ }),

/***/ "./src/app/gerfaccoes/gerfaccoes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gerfaccoes/gerfaccoes.module.ts ***!
  \*************************************************/
/*! exports provided: GerfaccoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerfaccoesPageModule", function() { return GerfaccoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gerfaccoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerfaccoes-routing.module */ "./src/app/gerfaccoes/gerfaccoes-routing.module.ts");
/* harmony import */ var _gerfaccoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerfaccoes.page */ "./src/app/gerfaccoes/gerfaccoes.page.ts");
/* harmony import */ var _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _components_criacoes_faccoes_update_faccoes_update_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/faccoes-update/faccoes-update.module */ "./src/app/components/criacoes/faccoes-update/faccoes-update.module.ts");









let GerfaccoesPageModule = class GerfaccoesPageModule {
};
GerfaccoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gerfaccoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["GerfaccoesPageRoutingModule"],
            _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__["HistoriaModule"],
            _components_criacoes_faccoes_update_faccoes_update_module__WEBPACK_IMPORTED_MODULE_8__["FaccoesUpdateModule"]
        ],
        declarations: [_gerfaccoes_page__WEBPACK_IMPORTED_MODULE_6__["GerfaccoesPage"]]
    })
], GerfaccoesPageModule);



/***/ }),

/***/ "./src/app/gerfaccoes/gerfaccoes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/gerfaccoes/gerfaccoes.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlcmZhY2NvZXMvZ2VyZmFjY29lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/gerfaccoes/gerfaccoes.page.ts":
/*!***********************************************!*\
  !*** ./src/app/gerfaccoes/gerfaccoes.page.ts ***!
  \***********************************************/
/*! exports provided: GerfaccoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerfaccoesPage", function() { return GerfaccoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GerfaccoesPage = class GerfaccoesPage {
    constructor() { }
    ngOnInit() {
    }
};
GerfaccoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerfaccoes',
        template: __webpack_require__(/*! raw-loader!./gerfaccoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/gerfaccoes/gerfaccoes.page.html"),
        styles: [__webpack_require__(/*! ./gerfaccoes.page.scss */ "./src/app/gerfaccoes/gerfaccoes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GerfaccoesPage);



/***/ })

}]);
//# sourceMappingURL=gerfaccoes-gerfaccoes-module-es2015.js.map