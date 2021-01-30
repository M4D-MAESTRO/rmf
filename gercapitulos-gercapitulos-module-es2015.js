(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gercapitulos-gercapitulos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gercapitulos/gercapitulos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gercapitulos/gercapitulos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerencie seus capitulos\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <app-capitulo [menu]=\"false\"></app-capitulo>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/components/criacoes/capitulo-update/capitulo-update.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo-update/capitulo-update.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CapituloUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloUpdateModule", function() { return CapituloUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capitulo-update.component */ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");












let CapituloUpdateModule = class CapituloUpdateModule {
};
CapituloUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__["CapituloUpdateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__["ListasModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__["PaginacaoModule"]
        ],
        exports: [
            _capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__["CapituloUpdateComponent"],
        ],
        entryComponents: [
            _capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__["CapituloUpdateComponent"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], CapituloUpdateModule);



/***/ }),

/***/ "./src/app/gercapitulos/gercapitulos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/gercapitulos/gercapitulos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GercapitulosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GercapitulosPageRoutingModule", function() { return GercapitulosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gercapitulos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gercapitulos.page */ "./src/app/gercapitulos/gercapitulos.page.ts");




const routes = [
    {
        path: '',
        component: _gercapitulos_page__WEBPACK_IMPORTED_MODULE_3__["GercapitulosPage"]
    }
];
let GercapitulosPageRoutingModule = class GercapitulosPageRoutingModule {
};
GercapitulosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GercapitulosPageRoutingModule);



/***/ }),

/***/ "./src/app/gercapitulos/gercapitulos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/gercapitulos/gercapitulos.module.ts ***!
  \*****************************************************/
/*! exports provided: GercapitulosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GercapitulosPageModule", function() { return GercapitulosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gercapitulos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gercapitulos-routing.module */ "./src/app/gercapitulos/gercapitulos-routing.module.ts");
/* harmony import */ var _gercapitulos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gercapitulos.page */ "./src/app/gercapitulos/gercapitulos.page.ts");
/* harmony import */ var _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _components_criacoes_capitulo_update_capitulo_update_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/capitulo-update/capitulo-update.module */ "./src/app/components/criacoes/capitulo-update/capitulo-update.module.ts");









let GercapitulosPageModule = class GercapitulosPageModule {
};
GercapitulosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gercapitulos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GercapitulosPageRoutingModule"],
            _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__["HistoriaModule"],
            _components_criacoes_capitulo_update_capitulo_update_module__WEBPACK_IMPORTED_MODULE_8__["CapituloUpdateModule"]
        ],
        declarations: [_gercapitulos_page__WEBPACK_IMPORTED_MODULE_6__["GercapitulosPage"]]
    })
], GercapitulosPageModule);



/***/ }),

/***/ "./src/app/gercapitulos/gercapitulos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/gercapitulos/gercapitulos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlcmNhcGl0dWxvcy9nZXJjYXBpdHVsb3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/gercapitulos/gercapitulos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/gercapitulos/gercapitulos.page.ts ***!
  \***************************************************/
/*! exports provided: GercapitulosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GercapitulosPage", function() { return GercapitulosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GercapitulosPage = class GercapitulosPage {
    constructor() { }
    ngOnInit() {
    }
};
GercapitulosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gercapitulos',
        template: __webpack_require__(/*! raw-loader!./gercapitulos.page.html */ "./node_modules/raw-loader/index.js!./src/app/gercapitulos/gercapitulos.page.html"),
        styles: [__webpack_require__(/*! ./gercapitulos.page.scss */ "./src/app/gercapitulos/gercapitulos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GercapitulosPage);



/***/ })

}]);
//# sourceMappingURL=gercapitulos-gercapitulos-module-es2015.js.map