(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gercapitulos-gercapitulos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gercapitulos/gercapitulos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gercapitulos/gercapitulos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerencie seus capitulos\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [style.background-image]=\"'url(' + img + ')'\" [style.background-size]=\"'cover'\"\r\n  [style.background-repeat]=\"'no-repeat'\">\r\n\r\n  <app-capitulo [menu]=\"false\"></app-capitulo>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capitulo-update.component */ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");












var CapituloUpdateModule = /** @class */ (function () {
    function CapituloUpdateModule() {
    }
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
    return CapituloUpdateModule;
}());



/***/ }),

/***/ "./src/app/config/rpg.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/rpg.config.ts ***!
  \**************************************/
/*! exports provided: MedievalRPG, CyberpunkRPG, SteampunkRPG, HorrorRPG, tipoRPG, tipoArrayRPG, Arma_Ataque, Armadura_Defesa, Utilizavel, tipoITEM, TipoItem, Corte, Esmagamento, Perfuacao, tipoARMA, Cabeca, Tronco, Bracos, Pernas, Escudo, tipoDEFESA, Consumivel, Aplicavel, Equipavel, tipoUTILIZAVEL, PRINCIPAL, SECUNDARIA, ATIVIDADE, EVENTO, TipoMissao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedievalRPG", function() { return MedievalRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberpunkRPG", function() { return CyberpunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteampunkRPG", function() { return SteampunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorrorRPG", function() { return HorrorRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoRPG", function() { return tipoRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoArrayRPG", function() { return tipoArrayRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arma_Ataque", function() { return Arma_Ataque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armadura_Defesa", function() { return Armadura_Defesa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilizavel", function() { return Utilizavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoITEM", function() { return tipoITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoItem", function() { return TipoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corte", function() { return Corte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Esmagamento", function() { return Esmagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfuacao", function() { return Perfuacao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoARMA", function() { return tipoARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cabeca", function() { return Cabeca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tronco", function() { return Tronco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bracos", function() { return Bracos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pernas", function() { return Pernas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Escudo", function() { return Escudo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoDEFESA", function() { return tipoDEFESA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumivel", function() { return Consumivel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aplicavel", function() { return Aplicavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipavel", function() { return Equipavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoUTILIZAVEL", function() { return tipoUTILIZAVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINCIPAL", function() { return PRINCIPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECUNDARIA", function() { return SECUNDARIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATIVIDADE", function() { return ATIVIDADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTO", function() { return EVENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMissao", function() { return TipoMissao; });
/*TIPOS RPG*/
var MedievalRPG = 0;
var CyberpunkRPG = 1;
var SteampunkRPG = 2;
var HorrorRPG = 3;
var tipoRPG = { MedievalRPG: MedievalRPG, CyberpunkRPG: CyberpunkRPG, SteampunkRPG: SteampunkRPG, HorrorRPG: HorrorRPG };
var tipoArrayRPG = ['Medieval', 'Cyberpunk', 'Steampunk', 'Horror'];
/*TIPOS ITENS*/
var Arma_Ataque = 0;
var Armadura_Defesa = 1;
var Utilizavel = 2;
var tipoITEM = { Arma_Ataque: Arma_Ataque, Armadura_Defesa: Armadura_Defesa, Utilizavel: Utilizavel };
var TipoItem = [{
        value: Arma_Ataque,
        template: 'Ataque'
    },
    {
        value: Armadura_Defesa,
        template: 'Defesa'
    },
    {
        value: Utilizavel,
        template: 'Utilizavel'
    }
];
/*TIPOS ARMAS*/
var Corte = 0;
var Esmagamento = 1;
var Perfuacao = 2;
var tipoARMA = { Corte: Corte, Esmagamento: Esmagamento, Perfuacao: Perfuacao };
/*TIPOS DEFESA*/
var Cabeca = 0;
var Tronco = 1;
var Bracos = 2;
var Pernas = 3;
var Escudo = 4;
var tipoDEFESA = { Cabeca: Cabeca, Tronco: Tronco, Bracos: Bracos, Pernas: Pernas, Escudo: Escudo };
/*TIPOS Utilizavel*/
var Consumivel = 0;
var Aplicavel = 1;
var Equipavel = 2;
var tipoUTILIZAVEL = { Consumivel: Consumivel, Aplicavel: Aplicavel, Equipavel: Equipavel };
/*TIPOS MISSAO*/
var PRINCIPAL = 0;
var SECUNDARIA = 1;
var ATIVIDADE = 2;
var EVENTO = 3;
var TipoMissao = [{
        value: PRINCIPAL,
        template: 'Principal'
    },
    {
        value: SECUNDARIA,
        template: 'Secundária'
    },
    {
        value: ATIVIDADE,
        template: 'Atividade'
    },
    {
        value: EVENTO,
        template: 'Evento'
    },
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gercapitulos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gercapitulos.page */ "./src/app/gercapitulos/gercapitulos.page.ts");




var routes = [
    {
        path: '',
        component: _gercapitulos_page__WEBPACK_IMPORTED_MODULE_3__["GercapitulosPage"]
    }
];
var GercapitulosPageRoutingModule = /** @class */ (function () {
    function GercapitulosPageRoutingModule() {
    }
    GercapitulosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GercapitulosPageRoutingModule);
    return GercapitulosPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gercapitulos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gercapitulos-routing.module */ "./src/app/gercapitulos/gercapitulos-routing.module.ts");
/* harmony import */ var _gercapitulos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gercapitulos.page */ "./src/app/gercapitulos/gercapitulos.page.ts");
/* harmony import */ var _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _components_criacoes_capitulo_update_capitulo_update_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/capitulo-update/capitulo-update.module */ "./src/app/components/criacoes/capitulo-update/capitulo-update.module.ts");









var GercapitulosPageModule = /** @class */ (function () {
    function GercapitulosPageModule() {
    }
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
    return GercapitulosPageModule;
}());



/***/ }),

/***/ "./src/app/gercapitulos/gercapitulos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/gercapitulos/gercapitulos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VyY2FwaXR1bG9zL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxnZXJjYXBpdHVsb3NcXGdlcmNhcGl0dWxvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlcmNhcGl0dWxvcy9nZXJjYXBpdHVsb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dlcmNhcGl0dWxvcy9nZXJjYXBpdHVsb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");




var GercapitulosPage = /** @class */ (function () {
    function GercapitulosPage(plataform, fundoService) {
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.img = '';
    }
    GercapitulosPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plataform.ready()
                            .then(function () {
                            if (_this.plataform.width() <= 700)
                                _this.fundoService.setCurrentPlataform('mobile');
                            else
                                _this.fundoService.setCurrentPlataform('pc');
                            _this.img = _this.fundoService.changeImg();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GercapitulosPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__["FundoService"] }
    ]; };
    GercapitulosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gercapitulos',
            template: __webpack_require__(/*! raw-loader!./gercapitulos.page.html */ "./node_modules/raw-loader/index.js!./src/app/gercapitulos/gercapitulos.page.html"),
            styles: [__webpack_require__(/*! ./gercapitulos.page.scss */ "./src/app/gercapitulos/gercapitulos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__["FundoService"]])
    ], GercapitulosPage);
    return GercapitulosPage;
}());



/***/ })

}]);
//# sourceMappingURL=gercapitulos-gercapitulos-module-es5.js.map