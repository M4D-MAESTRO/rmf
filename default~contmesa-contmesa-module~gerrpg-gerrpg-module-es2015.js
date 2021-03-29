(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~gerrpg-gerrpg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg-form/rpg-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/rpg-form/rpg-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contorno\">\r\n  <form [formGroup]=\"formRpg\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n    <div class=\"topo\">\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\" color=\"tertiary\">Nome</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\" placeholder=\"EX: D&D 5\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formRpg.controls.nome.dirty && formRpg.controls.nome.errors\" margin-left>\r\n            Preencha apenas com números</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\" color=\"tertiary\">Descrição</ion-label>\r\n            <ion-textarea class=\"input\" type=\"text\" color=\"light\" formControlName=\"descricao\"\r\n              placeholder=\"EX: Um RPG medieval clássico\"></ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formRpg.controls.descricao.dirty && formRpg.controls.descricao.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\" color=\"tertiary\">História</ion-label>\r\n            <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"light\"\r\n              placeholder=\"EX: Passando-se na era pós-dragões...\"></ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formRpg.controls.historia.dirty && formRpg.controls.historia.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label color=\"tertiary\">Tipo de RPG</ion-label>\r\n            <ion-select formControlName=\"tipoRPG\" color=\"light\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Medieval</ion-select-option>\r\n              <ion-select-option value=\"1\">Cyberpunk</ion-select-option>\r\n              <ion-select-option value=\"2\">Steampunk</ion-select-option>\r\n              <ion-select-option value=\"3\">Horror</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\" color=\"tertiary\">URL Imagem</ion-label>\r\n            <ion-textarea formControlName=\"imgURL\" type=\"text-area\" color=\"light\"\r\n              placeholder=\"EX: https://i.ytimg.com/vi/Z0zq55xtTEg/maxresdefault.jpg\"></ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<ion-footer>\r\n  <ion-button class=\"btn-background\" color=\"success\" fill=\"outline\" expand=\"block\" [disabled]=\"formRpg.invalid\"\r\n    type=\"submit\" (click)=\"confirmar()\">\r\n    Prosseguir</ion-button>\r\n</ion-footer>\r\n\r\n<p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [baseZIndex]=\"5000\">\r\n  <ng-template pTemplate=\"message\">\r\n    <div style=\"text-align: center\">\r\n      <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\r\n      <h4 innerHtml=\"{{ 'Essas informações não poderão ser alteradas!' }}\"></h4>\r\n      <h5>Deseja continuar?</h5>\r\n    </div>\r\n    <div class=\"ui-g ui-fluid\">\r\n      <div class=\"ui-g-6\">\r\n        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Sim\" class=\"ui-button-success\"></button>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <button type=\"button\" pButton (click)=\"onReject()\" label=\"Não\" class=\"ui-button-secondary\"></button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</p-toast>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg/rpg.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/rpg/rpg.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container id=\"help\" *ngIf=\"estagioAtual==0\">\r\n    <app-help-rpg (prosseguir)=\"monitor($event)\"></app-help-rpg>\r\n</ng-container>\r\n\r\n<ng-container id=\"form\" *ngIf=\"estagioAtual==1\">\r\n    <h1 class=\"titulo\">Informações Básicas</h1>\r\n    <app-rpg-form (prosseguir)=\"monitor($event)\"></app-rpg-form>\r\n</ng-container>\r\n\r\n<ng-container id=\"npc\" *ngIf=\"estagioAtual==2\">\r\n    <h1 class=\"titulo\">NPCs</h1>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" fill=\"outline\" expand=\"block\" [disabled]=\"false\" (click)=\"novo()\">\r\n                    Novo</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" fill=\"outline\" expand=\"block\" [disabled]=\"false\" (click)=\"listar()\">\r\n                    Listar e Adicionar</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ng-container *ngIf=\"showNovo\">\r\n        <app-criar-npc [menu]=\"false\"></app-criar-npc>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"showLista\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"no-ground\">\r\n                        <ion-label>Tipo de NPC</ion-label>\r\n                        <ion-select [(ngModel)]=\"tipoNPC\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Selecione\">\r\n                            <ion-select-option value=\"0\">Aliado</ion-select-option>\r\n                            <ion-select-option value=\"1\">Neutro</ion-select-option>\r\n                            <ion-select-option value=\"2\">Inimigo</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                        (notifyParent)=\"getNotification($event)\" (getSelectedObj)=\"addListaNpc($event)\" [add]=\"true\"\r\n                        [id]=\"'idNpc'\" [nome]=\"'ficha.fichaModelo.nome'\" [descricao]=\"'historia'\"\r\n                        [tipo]=\"'ficha.fichaModelo.tipoRPG'\" [imgURL]=\"'ficha.urlImg'\"></app-paginacao>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <app-listas [strings]=\"idAliados\" [titulo]=\"'NPCs Aliados'\" [isModal]=\"false\"></app-listas>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <app-listas [strings]=\"idNeutros\" [titulo]=\"'NPCs Neutros'\" [isModal]=\"false\"></app-listas>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <app-listas [strings]=\"idInimigos\" [titulo]=\"'NPCs Inimigos'\" [isModal]=\"false\"></app-listas>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ng-container>\r\n    <ion-button class=\"btn-background\" color=\"success\" fill=\"outline\" expand=\"block\" (click)=\"saveNpcs($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<ng-container id=\"faccoes\" *ngIf=\"estagioAtual==3\">\r\n    <h1 class=\"titulo\">Facções</h1>\r\n    <ion-item class=\"no-ground\">\r\n        <ion-label>Tipo de Facção</ion-label>\r\n        <ion-select [(ngModel)]=\"tipoFaccao\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Boas</ion-select-option>\r\n            <ion-select-option value=\"1\">Neutras</ion-select-option>\r\n            <ion-select-option value=\"2\">Hostis</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    <app-faccoes [menu]=\"false\" [add]=\"true\" (obj)=\"getFaccao($event)\"></app-faccoes>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idFaccoesBoas\" [titulo]=\"'Facções Boas'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idFaccoesNeutras\" [titulo]=\"'Facções Neutras'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idFaccoesHostis\" [titulo]=\"'Facções Hostis'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" color=\"warning\" fill=\"outline\" expand=\"block\"\r\n                    (click)=\"voltar($event)\">\r\n                    Voltar</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" color=\"success\" fill=\"outline\" expand=\"block\"\r\n                    (click)=\"saveFaccoes($event)\">\r\n                    Prosseguir</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ng-container>\r\n\r\n<ng-container id=\"capitulos\" *ngIf=\"estagioAtual==4\">\r\n    <h1 class=\"titulo\">Capítulos</h1>\r\n    <app-capitulo [menu]=\"false\" [add]=\"true\" (obj)=\"getCapitulo($event)\"></app-capitulo>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idCapitulos\" [titulo]=\"'Capítulos selecionados:'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" color=\"warning\" fill=\"outline\" expand=\"block\"\r\n                    (click)=\"voltar($event)\">\r\n                    Voltar</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" expand=\"block\" fill=\"outline\" type=\"submit\" color=\"success\"\r\n                    (click)=\"saveCapitulos($event)\">\r\n                    Prosseguir</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ng-container>\r\n\r\n<ng-container id=\"fichaModelo\" *ngIf=\"estagioAtual==5\">\r\n    <h1 class=\"titulo\">Modelo de Ficha</h1>\r\n    <ion-grid>\r\n        <!--<ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"listar()\">Listar e Adicionar</ion-button>\r\n            </ion-col>\r\n        </ion-row>-->\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                    (getSelectedObj)=\"getCode($event)\" [id]=\"'idFichaModelo'\" [add]=\"adicionar\"\r\n                    [nome]=\"'ficha.fichaModelo.nome'\" [descricao]=\"'historia'\" [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\">\r\n                </app-paginacao>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item color=\"dark\">\r\n                    <ion-label color=\"tertiary\" position=\"floating\">Insira o código da ficha modelo</ion-label>\r\n                    <ion-input (ionChange)=\"listenValue($event)\" [(ngModel)]=\"idFichaModelo\" type=\"text\" color=\"light\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" (click)=\"buscarFicha()\">Buscar</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" color=\"warning\" fill=\"outline\" expand=\"block\"\r\n                    (click)=\"voltar($event)\">\r\n                    Voltar</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" expand=\"block\" fill=\"outline\" type=\"submit\"\r\n                    [disabled]=\"!fmEncontrada\" color=\"success\" (click)=\"saveFM($event)\">\r\n                    Prosseguir</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ng-container>\r\n\r\n<ng-container id=\"mapas\" *ngIf=\"estagioAtual==6\">\r\n    <h1 class=\"titulo\">Mapas</h1>\r\n    <app-mapa [menu]=\"false\" [add]=\"true\" (obj)=\"getMapas($event)\"></app-mapa>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idMapas\" [titulo]=\"'Mapas selecionados'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" color=\"warning\" fill=\"outline\" expand=\"block\"\r\n                    (click)=\"voltar($event)\">\r\n                    Voltar</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" expand=\"block\" fill=\"outline\" type=\"submit\" color=\"success\"\r\n                    (click)=\"saveMapas($event)\">\r\n                    Prosseguir</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ng-container>\r\n\r\n<ng-container id=\"regras\" *ngIf=\"estagioAtual==7\">\r\n    <h1 class=\"titulo\">Regras</h1>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item color=\"dark\">\r\n                    <ion-label color=\"tertiary\" position=\"floating\">Nome da regra</ion-label>\r\n                    <ion-input color=\"light\" [(ngModel)]=\"nomeRegra\" type=\"text\" ></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item color=\"dark\">\r\n                    <ion-label color=\"tertiary\" position=\"floating\">Descrição da regra</ion-label>\r\n                    <ion-textarea color=\"light\" [(ngModel)]=\"descricaoRegra\" type=\"text\" ></ion-textarea>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" (click)=\"addRegra()\" [disabled]=\"getValidacao()\" color=\"tertiary\">Adicionar\r\n                    Regra</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idRegras\" [titulo]=\"'Regras definidas'\" (deleted)=\"regraDeletada($event)\"\r\n                    [isModal]=\"false\">\r\n                </app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" color=\"warning\" fill=\"outline\" expand=\"block\"\r\n                    (click)=\"voltar($event)\">\r\n                    Voltar</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button class=\"btn-background\" expand=\"block\" fill=\"outline\" type=\"submit\" color=\"success\"\r\n                    (click)=\"saveRegras($event)\">\r\n                    Prosseguir</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ng-container>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/criacoes/rpg-form/rpg-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-form/rpg-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-background {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #2e2115, #522b24, #5f2f3c, #634966);\n}\n\n.contorno {\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  border: 1px groove rgba(94, 41, 164, 0.28);\n}\n\n.topo {\n  margin: 25px 10px;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGctZm9ybS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXHJwZy1mb3JtXFxycGctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGctZm9ybS9ycGctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0NKOztBREVBO0VBQ0ksc0VBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL3JwZy1mb3JtL3JwZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1iYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMmUyMTE1LCAjNTIyYjI0LCAjNWYyZjNjLCAjNjM0OTY2KTtcclxufVxyXG5cclxuLmNvbnRvcm5vIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbn1cclxuXHJcbi50b3Bve1xyXG4gICAgbWFyZ2luOiAyNXB4IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iLCIuYnRuLWJhY2tncm91bmQge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyZTIxMTUsICM1MjJiMjQsICM1ZjJmM2MsICM2MzQ5NjYpO1xufVxuXG4uY29udG9ybm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG59XG5cbi50b3BvIHtcbiAgbWFyZ2luOiAyNXB4IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/rpg-form/rpg-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-form/rpg-form.component.ts ***!
  \********************************************************************/
/*! exports provided: RpgFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgFormComponent", function() { return RpgFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");







let RpgFormComponent = class RpgFormComponent {
    constructor(formBuilder, storage, alertController, rpgService, toast) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.rpgService = rpgService;
        this.toast = toast;
        this.prosseguir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formRpg = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoRPG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: []
        });
    }
    proximo() {
        this.toast.clear();
        this.newRpgForm = {
            descricao: this.formRpg.get('descricao').value,
            historia: this.formRpg.get('historia').value,
            nome: this.formRpg.get('nome').value,
            tipoRPG: this.formRpg.get('tipoRPG').value,
            imgURL: this.formRpg.get('imgURL').value
        };
        this.rpgService.insertInfo(this.newRpgForm);
        this.prosseguir.emit('PRÓXIMO!');
    }
    ngOnInit() { }
    confirmar() {
        this.toast.clear();
        this.toast.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '' });
    }
    onConfirm() {
        this.proximo();
    }
    onReject() {
        this.toast.clear();
    }
};
RpgFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__["RpgService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('prosseguir'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], RpgFormComponent.prototype, "prosseguir", void 0);
RpgFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rpg-form',
        template: __webpack_require__(/*! raw-loader!./rpg-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg-form/rpg-form.component.html"),
        styles: [__webpack_require__(/*! ./rpg-form.component.scss */ "./src/app/components/criacoes/rpg-form/rpg-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__["RpgService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
], RpgFormComponent);



/***/ }),

/***/ "./src/app/components/criacoes/rpg.module.ts":
/*!***************************************************!*\
  !*** ./src/app/components/criacoes/rpg.module.ts ***!
  \***************************************************/
/*! exports provided: RpgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgModule", function() { return RpgModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rpg-form/rpg-form.component */ "./src/app/components/criacoes/rpg-form/rpg-form.component.ts");
/* harmony import */ var _rpg_rpg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rpg/rpg.component */ "./src/app/components/criacoes/rpg/rpg.component.ts");
/* harmony import */ var _criacoes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./criacoes.module */ "./src/app/components/criacoes/criacoes.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _historia_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _help_rpg_help_rpg_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./help-rpg/help-rpg.module */ "./src/app/components/criacoes/help-rpg/help-rpg.module.ts");
















let RpgModule = class RpgModule {
};
RpgModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rpg_rpg_component__WEBPACK_IMPORTED_MODULE_9__["RpgComponent"], _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_8__["RpgFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _criacoes_module__WEBPACK_IMPORTED_MODULE_10__["CriacoesModule"],
            _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__["PaginacaoModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_12__["ListasModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            _historia_module__WEBPACK_IMPORTED_MODULE_13__["HistoriaModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_14__["LoadSpinnerModule"],
            _help_rpg_help_rpg_module__WEBPACK_IMPORTED_MODULE_15__["HelpRpgModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        ],
        exports: [_rpg_rpg_component__WEBPACK_IMPORTED_MODULE_9__["RpgComponent"], _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_8__["RpgFormComponent"]],
        entryComponents: [_rpg_rpg_component__WEBPACK_IMPORTED_MODULE_9__["RpgComponent"], _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_8__["RpgFormComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], RpgModule);



/***/ }),

/***/ "./src/app/components/criacoes/rpg/rpg.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/criacoes/rpg/rpg.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-radius: 10px;\n}\n\n.btn-background {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #2e2115, #522b24, #5f2f3c, #634966);\n}\n\n.titulo {\n  color: white;\n  font: bold;\n  text-shadow: 2px 2px black;\n  margin-left: 10px;\n}\n\n.no-ground {\n  --background: rgb(73, 13, 13);\n  --color: white;\n  --background-hover: rgba(138, 31, 31, 0.466);\n  --border-radius: 13px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGcvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxycGdcXHJwZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGcvcnBnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURHQTtFQUNJLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvcnBnL3JwZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi5idG4tYmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzJlMjExNSwgIzUyMmIyNCwgIzVmMmYzYywgIzYzNDk2Nik7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250OiBib2xkO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm5vLWdyb3VuZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYig3MywgMTMsIDEzKTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDEzOCwgMzEsIDMxLCAwLjQ2Nik7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEzcHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9IiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tYmFja2dyb3VuZCB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzJlMjExNSwgIzUyMmIyNCwgIzVmMmYzYywgIzYzNDk2Nik7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5vLWdyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDczLCAxMywgMTMpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDEzOCwgMzEsIDMxLCAwLjQ2Nik7XG4gIC0tYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/rpg/rpg.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/criacoes/rpg/rpg.component.ts ***!
  \**********************************************************/
/*! exports provided: RpgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgComponent", function() { return RpgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fichas/ficha-modelo.service */ "./src/app/services/fichas/ficha-modelo.service.ts");
/* harmony import */ var src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/regra/regra.service */ "./src/app/services/regra/regra.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let RpgComponent = class RpgComponent {
    constructor(router, alertController, rpgService, npcService, paginaService, toast, fmService, regraService) {
        this.router = router;
        this.alertController = alertController;
        this.rpgService = rpgService;
        this.npcService = npcService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.fmService = fmService;
        this.regraService = regraService;
        this.estagioAtual = 0;
        this.showLista = false;
        this.showNovo = false;
        this.paginaAtual = 0;
        this.loading = false;
        this.opcao = 0;
        this.tipoNPC = -1;
        this.idAliados = [];
        this.idInimigos = [];
        this.idNeutros = [];
        this.tipoFaccao = -1;
        this.idFaccoesBoas = [];
        this.idFaccoesNeutras = [];
        this.idFaccoesHostis = [];
        this.idCapitulos = [];
        this.idFichaModelo = '';
        this.fmEncontrada = false;
        this.nomeRegra = '';
        this.descricaoRegra = '';
        this.idRegras = [];
        this.idMapas = [];
        this.adicionar = true;
    }
    ngOnInit() {
        this.rpgService.setDoUpdate(false);
    }
    ngOnDestroy() {
        this.rpgService.setDoUpdate(true);
    }
    ionViewWillLeave() {
        this.rpgService.setDoUpdate(true);
    }
    monitor(evt) {
        this.estagioAtual++;
        this.paginaAtual = 0;
        this.showLista = false;
        this.showNovo = false;
        if (this.estagioAtual == 5) {
            const p = this.fmService.findPageByCriador(this.paginaAtual.toString());
            this.paginaService.setPromisse(p);
        }
        //this.rpgService.check();
    }
    voltar(evt) {
        if (this.estagioAtual > 2)
            this.estagioAtual--;
        this.paginaAtual = 0;
        this.showLista = false;
        this.showNovo = false;
    }
    saveMapas(evt) {
        this.rpgService.insertMapas(this.idMapas);
        this.monitor(evt);
    }
    getMapas(evt) {
        this.addListaMapa(evt);
    }
    addListaMapa(evt) {
        const isSelected = this.isOnArray(evt.id, this.idMapas);
        if (!isSelected) {
            this.idMapas.push(evt.id);
            this.callAdd();
        }
        else {
            this.callFail(evt.id);
        }
    }
    getValidacao() {
        const nome = this.nomeRegra.length < 5;
        const descricao = this.descricaoRegra.length < 5;
        if (nome || descricao) {
            return true;
        }
        else {
            return false;
        }
    }
    addRegra() {
        this.loading = true;
        const regra = {
            nome: this.nomeRegra,
            descricao: this.descricaoRegra
        };
        this.regraService.insert(regra)
            .subscribe(res => {
            this.loading = false;
            this.idRegras.push(res.idSistema);
        }, error => {
            this.loading = false;
        });
    }
    regraDeletada(evt) {
        this.loading = true;
        this.regraService.delete(evt)
            .subscribe(res => { this.loading = false; }, error => { this.loading = false; });
    }
    saveRegras(evt) {
        const p = this.rpgService.insertRegras(this.idRegras);
        this.monitor(evt);
        this.persisteRPG(p);
    }
    buscarFicha() {
        this.loading = true;
        this.fmService.findFichaModeloById(this.idFichaModelo)
            .subscribe(res => {
            this.loading = false;
            this.callFindIt();
            this.fmEncontrada = true;
        }, error => {
            this.loading = false;
            this.fmEncontrada = false;
            this.callFindNot();
        });
    }
    saveFM(evt) {
        this.rpgService.insertFichaModelo(this.idFichaModelo);
        this.monitor(evt);
    }
    saveCapitulos(evt) {
        this.rpgService.insertCapitulo(this.idCapitulos);
        this.monitor(evt);
    }
    getCapitulo(evt) {
        this.addListaCapitulo(evt);
    }
    addListaCapitulo(evt) {
        const isSelected = this.isOnArray(evt.id, this.idCapitulos);
        if (!isSelected) {
            this.idCapitulos.push(evt.id);
            this.callAdd();
        }
        else {
            this.callFail(evt.id);
        }
    }
    saveFaccoes(evt) {
        this.rpgService.insertFaccoesBoas(this.idFaccoesBoas);
        this.rpgService.insertFaccoesNeutras(this.idFaccoesNeutras);
        this.rpgService.insertFaccoesHostis(this.idFaccoesHostis);
        this.monitor(evt);
    }
    getFaccao(evt) {
        this.addListaFaccao(evt);
    }
    addListaFaccao(evt) {
        const isAliado = this.isOnArray(evt.id, this.idFaccoesBoas);
        const isNeutro = this.isOnArray(evt.id, this.idFaccoesNeutras);
        const isInimigo = this.isOnArray(evt.id, this.idFaccoesHostis);
        if (!(isAliado || isNeutro || isInimigo)) {
            switch (Number(this.tipoFaccao)) {
                case 0:
                    this.idFaccoesBoas.push(evt.id);
                    this.callAdd();
                    break;
                case 1:
                    this.idFaccoesNeutras.push(evt.id);
                    this.callAdd();
                    break;
                case 2:
                    this.idFaccoesHostis.push(evt.id);
                    this.callAdd();
                    break;
                default:
                    this.callSelecione();
                    break;
            }
        }
        else {
            this.callFail(evt.id);
        }
    }
    saveNpcs(evt) {
        this.rpgService.insertAliados(this.idAliados);
        this.rpgService.insertInimigos(this.idInimigos);
        this.rpgService.insertNeutros(this.idNeutros);
        this.monitor(evt);
    }
    addListaNpc(evt) {
        const isAliado = this.isOnArray(evt.id, this.idAliados);
        const isNeutro = this.isOnArray(evt.id, this.idNeutros);
        const isInimigo = this.isOnArray(evt.id, this.idInimigos);
        if (!(isAliado || isNeutro || isInimigo)) {
            switch (Number(this.tipoNPC)) {
                case 0:
                    this.idAliados.push(evt.id);
                    this.callAdd();
                    break;
                case 1:
                    this.idNeutros.push(evt.id);
                    this.callAdd();
                    break;
                case 2:
                    this.idInimigos.push(evt.id);
                    this.callAdd();
                    break;
                default:
                    this.callSelecione();
                    break;
            }
        }
        else {
            this.callFail(evt.id);
        }
    }
    isOnArray(id, arr) {
        return arr.includes(id);
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        let p = null;
        switch (this.opcao) {
            case 0: // NPC
                p = this.npcService.findPageByCriador(this.paginaAtual.toString());
                break;
        }
        this.paginaService.setPromisse(p);
    }
    novo() {
        this.showNovo = !this.showNovo;
        this.showLista = false;
    }
    listar() {
        this.showNovo = false;
        this.showLista = true;
        this.consultar();
    }
    callAdd() {
        this.toast.clear();
        this.toast.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Adicionado com sucesso!'
        });
    }
    callFindIt() {
        this.toast.clear();
        this.toast.add({
            severity: 'success',
            summary: 'Encontrado',
            detail: 'Modelo de Ficha encontrado'
        });
    }
    callFindNot() {
        this.toast.clear();
        this.toast.add({
            severity: 'error',
            summary: 'Não encontrada',
            detail: 'Modelo de Ficha  NÃO encontrado'
        });
    }
    callFail(id) {
        this.toast.clear();
        this.toast.add({
            severity: 'error',
            summary: 'Já incluso',
            detail: id + ' já está incluso(a)!'
        });
    }
    callSelecione() {
        this.toast.clear();
        this.toast.add({
            severity: 'error',
            summary: 'Selecione uma opção!',
            detail: 'Selecione antes de prosseguir!'
        });
    }
    persisteRPG(p) {
        this.loading = true;
        p.subscribe(res => {
            this.presentAdicionar(res.idRpg);
            this.loading = false;
            this.router.navigateByUrl('home');
        }, error => {
            this.loading = false;
        });
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    copyToClipboard(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = (e) => {
                e.preventDefault();
                e.clipboardData.setData('text', (value));
            };
            document.addEventListener('copy', id);
            document.execCommand('copy');
            document.removeEventListener('copy', null);
        });
    }
    getCode(evt) {
        console.log(evt);
        this.idFichaModelo = evt.id;
        this.buscarFicha();
    }
    listenValue(evt) {
        this.fmEncontrada = false;
        //console.log('Mudou: ', evt);
    }
};
RpgComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__["RpgService"] },
    { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_3__["NpcService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_6__["FichaModeloService"] },
    { type: src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"] }
];
RpgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rpg',
        template: __webpack_require__(/*! raw-loader!./rpg.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg/rpg.component.html"),
        styles: [__webpack_require__(/*! ./rpg.component.scss */ "./src/app/components/criacoes/rpg/rpg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__["RpgService"],
        src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_3__["NpcService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
        src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_6__["FichaModeloService"],
        src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"]])
], RpgComponent);



/***/ }),

/***/ "./src/app/services/regra/regra.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/regra/regra.service.ts ***!
  \*************************************************/
/*! exports provided: RegraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegraService", function() { return RegraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





let RegraService = class RegraService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.update = (dto) => {
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}sistema`, dto, {
                responseType: 'json'
            });
        };
    }
    findRegraById(idRegra) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}sistema/${idRegra}`, {
            responseType: 'json'
        });
    }
    insert(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}sistema`, obj, {
            responseType: "json",
            observe: "body"
        });
    }
    delete(id) {
        return this.http.delete(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}sistema/${id}`, {
            responseType: 'json',
            observe: "body"
        });
    }
};
RegraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
RegraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], RegraService);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~gerrpg-gerrpg-module-es2015.js.map