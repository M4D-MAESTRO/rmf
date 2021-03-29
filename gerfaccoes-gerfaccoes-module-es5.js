(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerfaccoes-gerfaccoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gerfaccoes/gerfaccoes.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gerfaccoes/gerfaccoes.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerencia de facções\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [style.background-image]=\"'url(' + img + ')'\" [style.background-size]=\"'cover'\"\r\n[style.background-repeat]=\"'no-repeat'\">\r\n  <app-faccoes [menu]=\"false\" [add]=\"true\"></app-faccoes>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _faccoes_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faccoes-update.component */ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.ts");











var FaccoesUpdateModule = /** @class */ (function () {
    function FaccoesUpdateModule() {
    }
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
    return FaccoesUpdateModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gerfaccoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerfaccoes.page */ "./src/app/gerfaccoes/gerfaccoes.page.ts");




var routes = [
    {
        path: '',
        component: _gerfaccoes_page__WEBPACK_IMPORTED_MODULE_3__["GerfaccoesPage"]
    }
];
var GerfaccoesPageRoutingModule = /** @class */ (function () {
    function GerfaccoesPageRoutingModule() {
    }
    GerfaccoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GerfaccoesPageRoutingModule);
    return GerfaccoesPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gerfaccoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerfaccoes-routing.module */ "./src/app/gerfaccoes/gerfaccoes-routing.module.ts");
/* harmony import */ var _gerfaccoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerfaccoes.page */ "./src/app/gerfaccoes/gerfaccoes.page.ts");
/* harmony import */ var _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _components_criacoes_faccoes_update_faccoes_update_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/faccoes-update/faccoes-update.module */ "./src/app/components/criacoes/faccoes-update/faccoes-update.module.ts");









var GerfaccoesPageModule = /** @class */ (function () {
    function GerfaccoesPageModule() {
    }
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
    return GerfaccoesPageModule;
}());



/***/ }),

/***/ "./src/app/gerfaccoes/gerfaccoes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/gerfaccoes/gerfaccoes.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-content {\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VyZmFjY29lcy9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcZ2VyZmFjY29lc1xcZ2VyZmFjY29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlcmZhY2NvZXMvZ2VyZmFjY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2dlcmZhY2NvZXMvZ2VyZmFjY29lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59IiwiLmxpbWl0ZXIge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");




var GerfaccoesPage = /** @class */ (function () {
    function GerfaccoesPage(plataform, fundoService) {
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.img = '';
    }
    GerfaccoesPage.prototype.ngOnInit = function () {
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
    GerfaccoesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__["FundoService"] }
    ]; };
    GerfaccoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gerfaccoes',
            template: __webpack_require__(/*! raw-loader!./gerfaccoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/gerfaccoes/gerfaccoes.page.html"),
            styles: [__webpack_require__(/*! ./gerfaccoes.page.scss */ "./src/app/gerfaccoes/gerfaccoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__["FundoService"]])
    ], GerfaccoesPage);
    return GerfaccoesPage;
}());



/***/ })

}]);
//# sourceMappingURL=gerfaccoes-gerfaccoes-module-es5.js.map