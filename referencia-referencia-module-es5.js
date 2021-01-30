(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referencia-referencia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/referencia/referencia.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/referencia/referencia.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Agradecimentos & Referências\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <p-carousel [value]=\"agradecimentos\" [numVisible]=\"1\" [circular]=\"false\"\r\n      [responsiveOptions]=\"responsiveOptions\">\r\n      <p-header>\r\n      </p-header>\r\n      <ng-template let-agradecimento pTemplate=\"panel\">\r\n        <div class=\"card\">\r\n          <div class=\"p-col-12 car-data\">\r\n            <div class=\"car-title\">{{agradecimento.titulo}}</div><br>\r\n            <div class=\"car-subtitle\">{{agradecimento.descricao}}</div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-carousel>\r\n<br><br>\r\n</ion-content>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/referencia/referencia-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/referencia/referencia-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReferenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenciaPageRoutingModule", function() { return ReferenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _referencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./referencia.page */ "./src/app/referencia/referencia.page.ts");




var routes = [
    {
        path: '',
        component: _referencia_page__WEBPACK_IMPORTED_MODULE_3__["ReferenciaPage"]
    }
];
var ReferenciaPageRoutingModule = /** @class */ (function () {
    function ReferenciaPageRoutingModule() {
    }
    ReferenciaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReferenciaPageRoutingModule);
    return ReferenciaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/referencia/referencia.module.ts":
/*!*************************************************!*\
  !*** ./src/app/referencia/referencia.module.ts ***!
  \*************************************************/
/*! exports provided: ReferenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenciaPageModule", function() { return ReferenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _referencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./referencia-routing.module */ "./src/app/referencia/referencia-routing.module.ts");
/* harmony import */ var _referencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./referencia.page */ "./src/app/referencia/referencia.page.ts");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm5/primeng-carousel.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm5/primeng-inputtextarea.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm5/primeng-tabview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm5/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm5/primeng-message.js");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");


















var ReferenciaPageModule = /** @class */ (function () {
    function ReferenciaPageModule() {
    }
    ReferenciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _referencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReferenciaPageRoutingModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_16__["LoadSpinnerModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_17__["FooterModule"]
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
            declarations: [_referencia_page__WEBPACK_IMPORTED_MODULE_6__["ReferenciaPage"]]
        })
    ], ReferenciaPageModule);
    return ReferenciaPageModule;
}());



/***/ }),

/***/ "./src/app/referencia/referencia.page.scss":
/*!*************************************************!*\
  !*** ./src/app/referencia/referencia.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: 1px solid #b3c2ca;\n  border-radius: 3px;\n  margin: 0.3em;\n  text-align: center;\n  padding: 2em 0 2.25em 0;\n}\n\n.cover {\n  width: 50%;\n  height: 50%;\n  text-align: center;\n  align-self: center;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-width: 1px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJlbmNpYS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxccmVmZXJlbmNpYVxccmVmZXJlbmNpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZmVyZW5jaWEvcmVmZXJlbmNpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyZW5jaWEvcmVmZXJlbmNpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNjMmNhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwLjNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJlbSAwIDIuMjVlbSAwO1xyXG4gIH1cclxuICBcclxuICAuY292ZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9IiwiLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNjMmNhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMC4zZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDAgMi4yNWVtIDA7XG59XG5cbi5jb3ZlciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/referencia/referencia.page.ts":
/*!***********************************************!*\
  !*** ./src/app/referencia/referencia.page.ts ***!
  \***********************************************/
/*! exports provided: ReferenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenciaPage", function() { return ReferenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenciaPage = /** @class */ (function () {
    function ReferenciaPage() {
        this.agradecimentos = [];
    }
    ReferenciaPage.prototype.ngOnInit = function () {
        this.agradecimentos.push({
            titulo: 'Cristo nosso Senhor',
            descricao: 'Meu primeiro agradecimento, claro, ao nosso Senhor, Jesus Cristo. Acreditem, sem ele, eu nem estaria aqui'
        });
        this.agradecimentos.push({
            titulo: 'Toda comunidade de RPG',
            descricao: 'Dos jogadores e mestres, dos criadores de conteúdos às distribuidoras, meu muito obrigado por manterem esta comunidade viva! O RPG é uma paixão pessoal, além de uma incrível forma de arte e entreterimento social.'
        });
        this.agradecimentos.push({
            titulo: 'Ao site: https://game-icons.net/',
            descricao: 'Eles disponibilizam gratuitamente diversos e incríveis ícones, muitos quais, eu utilizo aqui no APP. Muito obrigado pelos ícones maravilhosos e simplesmente lindos'
        });
        this.agradecimentos.push({
            titulo: 'Ao site: https://game-icons.net/',
            descricao: 'Lorc, Delapouite, John Colburn, Felbrigg, John Redman, Carl Olsen e todos os outros contribuidores do site.'
        });
        this.agradecimentos.push({
            titulo: 'Toda comunidade de Java e JavaScript',
            descricao: 'Embora eu tenha desenvolvido toda esta aplicação sozinho, inicialmente para um TCC, não teria conseguido sem a comunidade, muito obrigado <3'
        });
    };
    ReferenciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referencia',
            template: __webpack_require__(/*! raw-loader!./referencia.page.html */ "./node_modules/raw-loader/index.js!./src/app/referencia/referencia.page.html"),
            styles: [__webpack_require__(/*! ./referencia.page.scss */ "./src/app/referencia/referencia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferenciaPage);
    return ReferenciaPage;
}());



/***/ })

}]);
//# sourceMappingURL=referencia-referencia-module-es5.js.map