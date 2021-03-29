(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-faccao-explore-faccao-mod~eaa1d9f1"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/especializacoes-view/especializacoes-view.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/especializacoes-view/especializacoes-view.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\r\n  <ion-label position=\"fixed\" style=\"overflow: visible;\">Especializações: </ion-label>\r\n</ion-item>\r\n<div class=\"especializacao\">\r\n  <ion-list>\r\n    <ion-item-sliding #slide *ngFor=\"let especializacao of especializacoes\">\r\n      <ion-item>\r\n        <h2 class=\"espec especNome\">{{especializacao.nome}} </h2>\r\n        <p class=\"espec especDesc\">{{especializacao.descricao}}</p>\r\n        <span class=\"fav\" *ngIf=\"especializacao.isFav\">\r\n          <ion-icon slot=\"start\" name=\"star\" color=\"warning\"></ion-icon>\r\n        </span>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</div>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"closeButton\" class=\"btn\" expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"modalCtrl.dismiss()\">\r\n    Fechar</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/inventario-view/inventario-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/inventario-view/inventario-view.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n\r\n<div style=\"overflow: hidden\" #botoes>\r\n  <ion-button color=\"tertiary\" fill=\"outline\" (click)=\"setList(0, $event.srcElement, botoes.childNodes)\">Ataque\r\n  </ion-button>\r\n  <ion-button color=\"tertiary\" fill=\"solid\" (click)=\"setList(1, $event.srcElement, botoes.childNodes)\">Defesa\r\n  </ion-button>\r\n  <ion-button color=\"tertiary\" fill=\"solid\" (click)=\"setList(2, $event.srcElement, botoes.childNodes)\">Utilizável\r\n  </ion-button>\r\n</div>\r\n\r\n<table>\r\n  <tr>\r\n    <th>Nome</th>\r\n    <th>Valor</th>\r\n    <th>Peso</th>\r\n  </tr>\r\n\r\n  <tr #row class=\"selecionavel\" *ngFor=\"let item of items\" (click)=\"selecionar(item, row)\">\r\n    <td>{{ item.nome }}</td>\r\n    <td>{{ item.valor }}</td>\r\n    <td>{{ item.peso }} kg</td>\r\n  </tr>\r\n\r\n  <tfoot>\r\n    <tr>\r\n      <td class=\"out\"></td>\r\n      <td class=\"out\"></td>\r\n      <td class=\"total\">Peso Total</td>\r\n      <td class=\"total\">{{ peso }} kg</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\r\n<ion-row justify-content-center align-items-center>\r\n  <ion-card class=\"ion-text-center\">\r\n    <img class=\"imagem\" [src]=\"imgTemplate\" alt=\"\" />\r\n    <ion-card-header class=\"ion-justify-content-center\">\r\n      <ion-card-title> {{ itemSelected?.nome }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"color: white\">\r\n      {{ itemSelected?.descricao }}\r\n    </ion-card-content>\r\n    <ion-button *ngIf=\"itemSelected\" expand=\"block\" color=\"light\" (click)=\"detalhar()\">Detalhes</ion-button>\r\n  </ion-card>\r\n</ion-row>\r\n\r\n<ion-item class=\"carteira\">\r\n  <ion-row justify-content-center align-items-center>\r\n    <ion-col ion-align-self-start justify-content-start>\r\n      <img class=\"cash\" src=\"assets/imgs/cash.png\" alt=\"Gold\" />\r\n    </ion-col>\r\n    <ion-col>\r\n      <p class=\"\">{{ inventario.dinheiro }}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/vantagem-view/vantagem-view.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/vantagem-view/vantagem-view.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\r\n  <ion-label position=\"fixed\" style=\"overflow: visible;\">{{ titulo }}: </ion-label>\r\n</ion-item>\r\n<div class=\"especializacao\">\r\n  <ion-list>\r\n    <ion-item-sliding #slide *ngFor=\"let especializacao of especializacoes\">\r\n      <ion-item>\r\n        <p class=\"espec especDesc\">{{especializacao}}</p>\r\n        <span class=\"fav\" *ngIf=\"especializacao.isFav\">\r\n          <ion-icon slot=\"start\" name=\"star\" color=\"warning\"></ion-icon>\r\n        </span>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</div>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"closeButton\" class=\"btn\" expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"modalCtrl.dismiss()\">\r\n    Fechar</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/components/utils/especializacoes-view/especializacoes-view.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/utils/especializacoes-view/especializacoes-view.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".especializacao {\n  border: 5px solid black;\n  height: 300px;\n  margin: 5px;\n  overflow-y: scroll;\n}\n\n.item {\n  word-wrap: break-word;\n  line-break: normal;\n}\n\n.especNome {\n  display: block;\n  font-weight: bold;\n}\n\n.especDesc {\n  display: block;\n  word-wrap: break-word;\n  border-left: 5px solid var(--ion-color-primary, #3880ff);\n  margin-left: 5px;\n  padding-left: 5px;\n}\n\np {\n  display: inline !important;\n  word-wrap: break-word !important;\n  white-space: nowrap !important;\n}\n\n.fav {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\n.fav ion-icon {\n  padding-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMtdmlldy9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXRpbHNcXGVzcGVjaWFsaXphY29lcy12aWV3XFxlc3BlY2lhbGl6YWNvZXMtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMtdmlldy9lc3BlY2lhbGl6YWNvZXMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDREo7O0FES0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURNQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvZXNwZWNpYWxpemFjb2VzLXZpZXcvZXNwZWNpYWxpemFjb2VzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXNwZWNpYWxpemFjYW97XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgbGluZS1icmVhazogbm9ybWFsO1xyXG4gICAgXHJcbn1cclxuXHJcbi5lc3BlY05vbWV7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcblxyXG4uZXNwZWNEZXNje1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZGlzcGxheTogIGlubGluZSAhaW1wb3J0YW50OyBcclxuICAgIHdvcmQtd3JhcDogIGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiAgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAvL292ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmZhdntcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDIlXHJcbn1cclxuXHJcbi5mYXYgaW9uLWljb257XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbn0iLCIuZXNwZWNpYWxpemFjYW8ge1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLml0ZW0ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGxpbmUtYnJlYWs6IG5vcm1hbDtcbn1cblxuLmVzcGVjTm9tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzcGVjRGVzYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uZmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmZhdiBpb24taWNvbiB7XG4gIHBhZGRpbmctdG9wOiAxJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/utils/especializacoes-view/especializacoes-view.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/utils/especializacoes-view/especializacoes-view.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EspecializacoesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecializacoesViewComponent", function() { return EspecializacoesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/especializacao/especializacao.service */ "./src/app/services/especializacao/especializacao.service.ts");




var EspecializacoesViewComponent = /** @class */ (function () {
    function EspecializacoesViewComponent(alertController, modalCtrl, especService) {
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.especService = especService;
        this.especializacoes = [];
        this.closeButton = false;
        this.idFicha = '';
        this.idAtributo = '';
    }
    EspecializacoesViewComponent.prototype.ngOnInit = function () {
    };
    EspecializacoesViewComponent.prototype.addEspec = function () {
        this.presentAlertPrompt();
    };
    EspecializacoesViewComponent.prototype.fav = function (especializacao, slide) {
        var aux = !especializacao.isFav;
        this.especService.setFav(especializacao.idEspecializacao, aux.toString())
            .subscribe(function (res) { especializacao.isFav = aux; });
        slide.close();
    };
    EspecializacoesViewComponent.prototype.remov = function (especializacao) {
        var _this = this;
        this.especializacoes.forEach(function (element, index, arr) {
            if (element.nome == especializacao.nome) {
                arr.splice(index, 1);
            }
        });
        this.especService.delete(this.idFicha, this.idAtributo, especializacao.idEspecializacao)
            .subscribe(function (res) { return _this.especializacoes.splice(_this.especializacoes.indexOf(especializacao), 1); });
    };
    EspecializacoesViewComponent.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Adicionar',
                            inputs: [
                                {
                                    name: 'nome',
                                    type: 'text',
                                    placeholder: 'Nome da especialização'
                                },
                                {
                                    name: 'desc',
                                    type: 'text',
                                    placeholder: 'Descrição da especialização'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Salvar',
                                    handler: function (data) {
                                        var espec = {
                                            nome: data.nome,
                                            descricao: data.desc
                                        };
                                        _this.especService.insert(espec, _this.idFicha, _this.idAtributo).
                                            subscribe(function (res) {
                                            _this.especializacoes.push({
                                                idEspecializacao: res.idEspecializacao,
                                                nome: res.nome,
                                                descricao: res.descricao,
                                                isFav: res.isFav
                                            });
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EspecializacoesViewComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__["EspecializacaoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("especializacoes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EspecializacoesViewComponent.prototype, "especializacoes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("closeButton"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EspecializacoesViewComponent.prototype, "closeButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("idFicha"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EspecializacoesViewComponent.prototype, "idFicha", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("idAtributo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EspecializacoesViewComponent.prototype, "idAtributo", void 0);
    EspecializacoesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'especializacoes-view',
            template: __webpack_require__(/*! raw-loader!./especializacoes-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/especializacoes-view/especializacoes-view.component.html"),
            styles: [__webpack_require__(/*! ./especializacoes-view.component.scss */ "./src/app/components/utils/especializacoes-view/especializacoes-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__["EspecializacaoService"]])
    ], EspecializacoesViewComponent);
    return EspecializacoesViewComponent;
}());



/***/ }),

/***/ "./src/app/components/utils/especializacoes-view/especializacoes-view.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/utils/especializacoes-view/especializacoes-view.module.ts ***!
  \**************************************************************************************/
/*! exports provided: EspecializacoesViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecializacoesViewModule", function() { return EspecializacoesViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _especializacoes_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./especializacoes-view.component */ "./src/app/components/utils/especializacoes-view/especializacoes-view.component.ts");






var EspecializacoesViewModule = /** @class */ (function () {
    function EspecializacoesViewModule() {
    }
    EspecializacoesViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_especializacoes_view_component__WEBPACK_IMPORTED_MODULE_5__["EspecializacoesViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            entryComponents: [_especializacoes_view_component__WEBPACK_IMPORTED_MODULE_5__["EspecializacoesViewComponent"]],
            exports: [_especializacoes_view_component__WEBPACK_IMPORTED_MODULE_5__["EspecializacoesViewComponent"]]
        })
    ], EspecializacoesViewModule);
    return EspecializacoesViewModule;
}());



/***/ }),

/***/ "./src/app/components/utils/inventario-view/inventario-view.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/utils/inventario-view/inventario-view.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 5px 2px;\n}\n\ntd,\nth {\n  border: 3px solid #523f3f;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #2e1d1d;\n  color: white;\n}\n\n.selecionavel:hover {\n  border: 3px solid red;\n  cursor: pointer;\n}\n\n.selected {\n  border: 3px solid red;\n}\n\np {\n  padding-top: 1%;\n  padding-left: 1%;\n  font-size: 22px;\n}\n\n.gold {\n  display: inline;\n  vertical-align: middle;\n}\n\n.operations {\n  align-self: flex-end;\n}\n\n@media (min-width: 800px) {\n  .imagem {\n    width: 350px;\n    height: 200px;\n  }\n\n  .cash {\n    width: 64px;\n    height: 64px;\n  }\n}\n\n@media (max-width: 799px) {\n  .imagem {\n    width: 250px;\n    height: 150px;\n  }\n\n  .cash {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.selectItem {\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  --background-color: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  color: white;\n  --color: white;\n}\n\n.carteira {\n  border-top: 5px double #898f00;\n  border-bottom: 5px double #898f00;\n  --background-color: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  color: white;\n}\n\ndiv {\n  overflow-y: scroll;\n}\n\n.out {\n  border: none;\n}\n\n.total {\n  background-color: #473501;\n  color: white;\n}\n\nion-card-title {\n  --color: rgb(233, 233, 233);\n  text-align: center;\n}\n\nion-card-subtitle {\n  --color: rgb(233, 233, 233);\n  text-align: center;\n}\n\nion-card-content {\n  --color: rgb(255, 255, 255) !important;\n  text-align: center;\n}\n\nion-card {\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pbnZlbnRhcmlvLXZpZXcvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxpbnZlbnRhcmlvLXZpZXdcXGludmVudGFyaW8tdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pbnZlbnRhcmlvLXZpZXcvaW52ZW50YXJpby12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7O0VBRUUseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxxQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGOztBREFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0dGOztFREFBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0VGOztFRENBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0Usd0VBQUE7RUFDQSw4RUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEVBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvaW52ZW50YXJpby12aWV3L2ludmVudGFyaW8tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCAycHg7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzUyM2YzZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUxZDFkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2VsZWNpb25hdmVsOmhvdmVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5nb2xkIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm9wZXJhdGlvbnMge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuaW1hZ2VtIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FzaCB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3OTlweCkge1xyXG4gIC5pbWFnZW0ge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXNoIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdEl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FydGVpcmEge1xyXG4gIGJvcmRlci10b3A6IDVweCBkb3VibGUgIzg5OGYwMDtcclxuICBib3JkZXItYm90dG9tOiA1cHggZG91YmxlICM4OThmMDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ub3V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3MzUwMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAtLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgLS1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgLS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuIiwidGFibGUge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweCAycHg7XG59XG5cbnRkLFxudGgge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNTIzZjNmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlbGVjaW9uYXZlbDpob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG59XG5cbnAge1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmdvbGQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5vcGVyYXRpb25zIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAuaW1hZ2VtIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5jYXNoIHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3OTlweCkge1xuICAuaW1hZ2VtIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5jYXNoIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbn1cbi5zZWxlY3RJdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJ0ZWlyYSB7XG4gIGJvcmRlci10b3A6IDVweCBkb3VibGUgIzg5OGYwMDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGRvdWJsZSAjODk4ZjAwO1xuICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5vdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50b3RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzM1MDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAtLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAtLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIC0tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/utils/inventario-view/inventario-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/utils/inventario-view/inventario-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InventarioViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioViewComponent", function() { return InventarioViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/criacoes/criar-item.service */ "./src/app/services/criacoes/criar-item.service.ts");
/* harmony import */ var src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gameplay/equipar-item.service */ "./src/app/services/gameplay/equipar-item.service.ts");
/* harmony import */ var src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/inventario/inventario.service */ "./src/app/services/inventario/inventario.service.ts");
/* harmony import */ var _config_rpg_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../present-ataque/present-ataque.component */ "./src/app/components/utils/present-ataque/present-ataque.component.ts");
/* harmony import */ var _present_defesa_present_defesa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../present-defesa/present-defesa.component */ "./src/app/components/utils/present-defesa/present-defesa.component.ts");
/* harmony import */ var _present_utilizavel_present_utilizavel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../present-utilizavel/present-utilizavel.component */ "./src/app/components/utils/present-utilizavel/present-utilizavel.component.ts");












var InventarioViewComponent = /** @class */ (function () {
    function InventarioViewComponent(modalCtrl, alertController, itemService, equiparService, inventarioService, itensService, toast) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.itemService = itemService;
        this.equiparService = equiparService;
        this.inventarioService = inventarioService;
        this.itensService = itensService;
        this.toast = toast;
        this.loading = false;
        this.inventario = {
            idInventario: null,
        };
        this.idInventario = '';
        this.items = [];
        this.defaultImg = "assets/imgs/battle-gear.png";
        this.imgTemplate = this.defaultImg;
        this.acrescimoDesconto = 0;
        this.tipoItem = _config_rpg_config__WEBPACK_IMPORTED_MODULE_6__["TipoItem"];
        this.selectedItem = -1;
        this.abaAtual = 0;
    }
    InventarioViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.inventarioService.findById(this.idInventario)
            .subscribe(function (res) {
            _this.inventario = {
                idInventario: res.idInventario,
                dinheiro: res.dinheiro,
                itensAtaque: res.itensAtaque,
                itensDefesa: res.itensDefesa,
                itensUtilizavel: res.itensUtilizavel
            };
            console.log('inv: ', _this.inventario);
            _this.rowSelected = document.createElement("b");
            _this.updateTable();
            _this.getPesoTotal();
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    InventarioViewComponent.prototype.updateTable = function () {
        switch (this.abaAtual) {
            case 1:
                this.items = this.inventario.itensDefesa;
                break;
            case 2:
                this.items = this.inventario.itensUtilizavel;
                break;
            default:
                this.items = this.inventario.itensAtaque;
        }
    };
    InventarioViewComponent.prototype.setList = function (op, botao, botoes) {
        botoes.forEach(function (botao) {
            botao.attributes.fill.nodeValue = "solid";
        });
        botao.attributes.fill.nodeValue = "outline";
        switch (op) {
            case 0:
                this.items = this.inventario.itensAtaque;
                this.abaAtual = 0;
                break;
            case 1:
                this.items = this.inventario.itensDefesa;
                this.abaAtual = 1;
                break;
            case 2:
                this.items = this.inventario.itensUtilizavel;
                this.abaAtual = 2;
                break;
        }
    };
    InventarioViewComponent.prototype.selecionar = function (item, row) {
        this.rowSelected.classList.remove('selected');
        row.classList.add('selected');
        this.rowSelected = row;
        this.itemSelected = item;
        if (!this.itemSelected.imgURL) {
            this.imgTemplate = this.defaultImg;
        }
        else {
            this.imgTemplate = this.itemSelected.imgURL;
        }
    };
    InventarioViewComponent.prototype.getPesoTotal = function () {
        var _this = this;
        this.peso = 0;
        this.inventario.itensAtaque.forEach(function (item) {
            _this.peso += item.peso;
        });
        this.inventario.itensDefesa.forEach(function (item) {
            _this.peso += item.peso;
        });
        this.inventario.itensUtilizavel.forEach(function (item) {
            _this.peso += item.peso;
        });
    };
    InventarioViewComponent.prototype.setTipoitem = function (event) {
        this.selectedItem = event.detail.value;
    };
    InventarioViewComponent.prototype.getEnum = function (value) {
        var n = 0;
        switch (value) {
            case 'ATAQUE':
                n = 0;
                break;
            case 'DEFESA':
                n = 1;
                break;
            case 'UTILIZAVEL':
                n = 2;
                break;
        }
        return n;
    };
    InventarioViewComponent.prototype.callToast = function () {
        this.toast.add({
            severity: 'warn',
            summary: 'Em breve',
            detail: 'Funcionalidade ainda não disponível'
        });
    };
    InventarioViewComponent.prototype.callGenericToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail,
        });
    };
    InventarioViewComponent.prototype.detalhar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tipoItem, component, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tipoItem = this.itemSelected.tipoItem;
                        switch (tipoItem.toString()) {
                            case 'ATAQUE':
                                component = _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_9__["PresentAtaqueComponent"];
                                break;
                            case 'DEFESA':
                                component = _present_defesa_present_defesa_component__WEBPACK_IMPORTED_MODULE_10__["PresentDefesaComponent"];
                                break;
                            case 'UTILIZAVEL':
                                component = _present_utilizavel_present_utilizavel_component__WEBPACK_IMPORTED_MODULE_11__["PresentUtilizavelComponent"];
                                break;
                        }
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: component,
                                componentProps: {
                                    item: this.itemSelected,
                                },
                                backdropDismiss: false
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventarioViewComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__["CriarItemService"] },
        { type: src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_4__["EquiparItemService"] },
        { type: src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_5__["InventarioService"] },
        { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idInventario'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InventarioViewComponent.prototype, "idInventario", void 0);
    InventarioViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventario-view',
            template: __webpack_require__(/*! raw-loader!./inventario-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/inventario-view/inventario-view.component.html"),
            styles: [__webpack_require__(/*! ./inventario-view.component.scss */ "./src/app/components/utils/inventario-view/inventario-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__["CriarItemService"],
            src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_4__["EquiparItemService"],
            src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_5__["InventarioService"],
            src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]])
    ], InventarioViewComponent);
    return InventarioViewComponent;
}());



/***/ }),

/***/ "./src/app/components/utils/inventario-view/inventario-view.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/utils/inventario-view/inventario-view.module.ts ***!
  \****************************************************************************/
/*! exports provided: InventarioViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioViewModule", function() { return InventarioViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _inventario_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventario-view.component */ "./src/app/components/utils/inventario-view/inventario-view.component.ts");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../present-ataque/present-ataque.module */ "./src/app/components/utils/present-ataque/present-ataque.module.ts");
/* harmony import */ var _present_defesa_present_defesa_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../present-defesa/present-defesa.module */ "./src/app/components/utils/present-defesa/present-defesa.module.ts");
/* harmony import */ var _present_utilizavel_present_utilizavel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../present-utilizavel/present-utilizavel.module */ "./src/app/components/utils/present-utilizavel/present-utilizavel.module.ts");











var InventarioViewModule = /** @class */ (function () {
    function InventarioViewModule() {
    }
    InventarioViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_inventario_view_component__WEBPACK_IMPORTED_MODULE_6__["InventarioViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_4__["ToastModule"],
                _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
                _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_8__["PresentAtaqueModule"],
                _present_defesa_present_defesa_module__WEBPACK_IMPORTED_MODULE_9__["PresentDefesaModule"],
                _present_utilizavel_present_utilizavel_module__WEBPACK_IMPORTED_MODULE_10__["PresentUtilizavelModule"],
            ],
            bootstrap: [_inventario_view_component__WEBPACK_IMPORTED_MODULE_6__["InventarioViewComponent"]],
            exports: [_inventario_view_component__WEBPACK_IMPORTED_MODULE_6__["InventarioViewComponent"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]]
        })
    ], InventarioViewModule);
    return InventarioViewModule;
}());



/***/ }),

/***/ "./src/app/components/utils/vantagem-view/vantagem-view.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/utils/vantagem-view/vantagem-view.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".especializacao {\n  border: 5px solid black;\n  height: 300px;\n  margin: 5px;\n  overflow-y: scroll;\n}\n\n.item {\n  word-wrap: break-word;\n  line-break: normal;\n}\n\n.especNome {\n  display: block;\n  font-weight: bold;\n}\n\n.especDesc {\n  display: block;\n  word-wrap: break-word;\n  border-left: 5px solid var(--ion-color-primary, #3880ff);\n  margin-left: 5px;\n  padding-left: 5px;\n}\n\np {\n  display: inline !important;\n  word-wrap: break-word !important;\n  white-space: nowrap !important;\n}\n\n.fav {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\n.fav ion-icon {\n  padding-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy92YW50YWdlbS12aWV3L0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1dGlsc1xcdmFudGFnZW0tdmlld1xcdmFudGFnZW0tdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy92YW50YWdlbS12aWV3L3ZhbnRhZ2VtLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREtBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0RBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FETUE7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNISjs7QURTQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL3ZhbnRhZ2VtLXZpZXcvdmFudGFnZW0tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3BlY2lhbGl6YWNhb3tcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5cclxuLml0ZW17XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBsaW5lLWJyZWFrOiBub3JtYWw7XHJcbiAgICBcclxufVxyXG5cclxuLmVzcGVjTm9tZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbn1cclxuXHJcbi5lc3BlY0Rlc2N7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxufVxyXG5cclxucCB7XHJcbiAgICBkaXNwbGF5OiAgaW5saW5lICFpbXBvcnRhbnQ7IFxyXG4gICAgd29yZC13cmFwOiAgYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6ICBub3dyYXAgIWltcG9ydGFudDtcclxuICAgIC8vb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uZmF2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMiVcclxufVxyXG5cclxuLmZhdiBpb24taWNvbntcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxufSIsIi5lc3BlY2lhbGl6YWNhbyB7XG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uaXRlbSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbGluZS1icmVhazogbm9ybWFsO1xufVxuXG4uZXNwZWNOb21lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXNwZWNEZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5mYXYge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uZmF2IGlvbi1pY29uIHtcbiAgcGFkZGluZy10b3A6IDElO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/utils/vantagem-view/vantagem-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/utils/vantagem-view/vantagem-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: VantagemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VantagemViewComponent", function() { return VantagemViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/especializacao/especializacao.service */ "./src/app/services/especializacao/especializacao.service.ts");




var VantagemViewComponent = /** @class */ (function () {
    function VantagemViewComponent(alertController, modalCtrl, especService) {
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.especService = especService;
        this.especializacoes = [];
        this.closeButton = false;
        this.idFicha = '';
        this.idAtributo = '';
    }
    VantagemViewComponent.prototype.ngOnInit = function () {
    };
    VantagemViewComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__["EspecializacaoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("titulo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VantagemViewComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("especializacoes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VantagemViewComponent.prototype, "especializacoes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("closeButton"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], VantagemViewComponent.prototype, "closeButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("idFicha"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VantagemViewComponent.prototype, "idFicha", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("idAtributo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VantagemViewComponent.prototype, "idAtributo", void 0);
    VantagemViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vantagem-view',
            template: __webpack_require__(/*! raw-loader!./vantagem-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/vantagem-view/vantagem-view.component.html"),
            styles: [__webpack_require__(/*! ./vantagem-view.component.scss */ "./src/app/components/utils/vantagem-view/vantagem-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__["EspecializacaoService"]])
    ], VantagemViewComponent);
    return VantagemViewComponent;
}());



/***/ }),

/***/ "./src/app/components/utils/vantagem-view/vantagem-view.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/utils/vantagem-view/vantagem-view.module.ts ***!
  \************************************************************************/
/*! exports provided: VantagemViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VantagemViewModule", function() { return VantagemViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vantagem_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vantagem-view.component */ "./src/app/components/utils/vantagem-view/vantagem-view.component.ts");






var VantagemViewModule = /** @class */ (function () {
    function VantagemViewModule() {
    }
    VantagemViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_vantagem_view_component__WEBPACK_IMPORTED_MODULE_5__["VantagemViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            entryComponents: [_vantagem_view_component__WEBPACK_IMPORTED_MODULE_5__["VantagemViewComponent"]],
            exports: [_vantagem_view_component__WEBPACK_IMPORTED_MODULE_5__["VantagemViewComponent"]]
        })
    ], VantagemViewModule);
    return VantagemViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-faccao-explore-faccao-mod~eaa1d9f1-es5.js.map