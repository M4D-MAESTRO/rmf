(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~gerequipamentos-gerequipamentos-module~gerinimigos-gerinimigos-modu~9709502c"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/criar-npc/criar-npc.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/criar-npc/criar-npc.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo NPC\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<div class=\"border\">\r\n\r\n  <ng-container *ngIf=\"!achado && !display\">\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <span style=\"margin-left: 15px; margin-bottom: 15px;\">Selecione um de seus modelos</span>\r\n          <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n            (getSelectedObj)=\"selectedObj($event)\" (notifyParent)=\"getNotification($event)\" [id]=\"'idFichaModelo'\"\r\n            [nome]=\"'nomeFichaModelo'\" [add]=\"true\" [descricao]=\"'historia'\" [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\"\r\n            [closeBTN]=\"false\"></app-paginacao>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Ou, insira um código de ficha modelo</ion-label>\r\n            <ion-input [(ngModel)]=\"idFichaModelo\" type=\"text\" color=\"primary\"\r\n              placeholder=\"Código de um modelo de ficha\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"consultar()\">Buscar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n\r\n  <div *ngIf=\"achado\">\r\n    <br>\r\n    <br>\r\n    <form [formGroup]=\"formNpc\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n        <span style=\"margin-left: 15px; margin-bottom: 15px;\">Informações Básicas</span>\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"light\">\r\n              <ion-label position=\"floating\">Historia</ion-label>\r\n              <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"\r\n                placeholder=\"EX: Sauron, também conhecido como Senhor do Escuro de Mordor, era o tenente mais poderoso de Morgoth e mente...\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formNpc.controls.historia.dirty && formNpc.controls.historia.errors\" margin-left>\r\n              Preencha\r\n              a historia</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <br>\r\n        <div class=\"border objetivos\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label position=\"floating\">Objetivos</ion-label>\r\n                <ion-input [(ngModel)]=\"objetivo\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                  color=\"primary\" placeholder=\"Insira o objetivo aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n              </ion-item>\r\n              <ion-button class=\"btn-insert\" color=\"tertiary\" fill=\"solid\" expand=\"block\" (click)=\"inserirObjetivo()\">\r\n                Adicionar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-listas [strings]=\"objetivos\" [titulo]=\"'Lista de Objetivos'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <br>\r\n        <br>\r\n\r\n        <div class=\"border interesses\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label position=\"floating\">Interesses</ion-label>\r\n                <ion-input [(ngModel)]=\"interesse\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                  color=\"primary\" placeholder=\"Insira o interesse aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n              </ion-item>\r\n              <ion-button class=\"btn-insert\" color=\"tertiary\" fill=\"solid\" expand=\"block\" (click)=\"inserirInteresse()\">\r\n                Adicionar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-listas [strings]=\"interesses\" [titulo]=\"'Lista de Interesses'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <br>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Tipo de NPC</ion-label>\r\n              <ion-select formControlName=\"tipoNpc\" placeholder=\"Selecione\">\r\n                <ion-select-option value=\"0\">Aliado</ion-select-option>\r\n                <ion-select-option value=\"1\">Inimigo</ion-select-option>\r\n                <ion-select-option value=\"2\">Neutro</ion-select-option>\r\n                <ion-select-option value=\"3\">Boss</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Valor no inventário</ion-label>\r\n              <ion-input formControlName=\"valorInventario\" type=\"text\" color=\"primary\" placeholder=\"EX: 99999\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formNpc.controls.valorInventario.dirty && formNpc.controls.valorInventario.errors\"\r\n              margin-left>\r\n              Preencha\r\n              o conteúdo</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formNpc.invalid\" (click)=\"salvar()\">Salvar e prosseguir</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"display\">\r\n    <!--<div style=\"border: 5px solid #221111; width: 100%; height: 50%;\">-->\r\n    <div>\r\n      <br>\r\n      <span style=\"margin-left: 15px; margin-bottom: 15px;\">Ficha</span>\r\n      <br>\r\n      <app-ficha [idFicha]=\"idCriado\"></app-ficha>\r\n    </div>\r\n  </ng-container>\r\n\r\n</div>\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" (click)=\"close()\">Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/criacoes/criacoes.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/criacoes/criacoes.module.ts ***!
  \********************************************************/
/*! exports provided: CriacoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriacoesModule", function() { return CriacoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _criar_componente_criar_componente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criar-componente/criar-componente.component */ "./src/app/components/criacoes/criar-componente/criar-componente.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criar_npc_criar_npc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar-npc/criar-npc.component */ "./src/app/components/criacoes/criar-npc/criar-npc.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _ficha_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ficha/ficha/ficha.component */ "./src/app/components/ficha/ficha/ficha.component.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");













let CriacoesModule = class CriacoesModule {
};
CriacoesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_criar_componente_criar_componente_component__WEBPACK_IMPORTED_MODULE_3__["CriarComponenteComponent"], _criar_npc_criar_npc_component__WEBPACK_IMPORTED_MODULE_6__["CriarNpcComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_10__["ListasModule"],
            _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_9__["FichasModule"],
            _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_11__["PaginacaoModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__["ImagemDisplayModule"]
        ],
        exports: [
            _criar_componente_criar_componente_component__WEBPACK_IMPORTED_MODULE_3__["CriarComponenteComponent"],
            _criar_npc_criar_npc_component__WEBPACK_IMPORTED_MODULE_6__["CriarNpcComponent"],
        ],
        entryComponents: [
            _criar_componente_criar_componente_component__WEBPACK_IMPORTED_MODULE_3__["CriarComponenteComponent"],
            _criar_npc_criar_npc_component__WEBPACK_IMPORTED_MODULE_6__["CriarNpcComponent"],
            _ficha_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_8__["FichaComponent"]
        ]
    })
], CriacoesModule);



/***/ }),

/***/ "./src/app/components/criacoes/criar-npc/criar-npc.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-npc/criar-npc.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\n.divisoria {\n  border-top: 5px dotted rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1ucGMvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxjcmlhci1ucGNcXGNyaWFyLW5wYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1ucGMvY3JpYXItbnBjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4Q0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL2NyaWFyLW5wYy9jcmlhci1ucGMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWluc2VydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuXHJcbi5kaXZpc29yaWEge1xyXG4gIGJvcmRlci10b3A6IDVweCBkb3R0ZWQgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG4iLCIuYnRuLWluc2VydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXQge1xuICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuXG4uZGl2aXNvcmlhIHtcbiAgYm9yZGVyLXRvcDogNXB4IGRvdHRlZCByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/criar-npc/criar-npc.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/criar-npc/criar-npc.component.ts ***!
  \**********************************************************************/
/*! exports provided: CriarNpcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarNpcComponent", function() { return CriarNpcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fichas/ficha-modelo.service */ "./src/app/services/fichas/ficha-modelo.service.ts");
/* harmony import */ var src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imagem/imagem.component */ "./src/app/components/imagem/imagem.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");










let CriarNpcComponent = class CriarNpcComponent {
    constructor(modalCtrl, formBuilder, fmService, npcService, alertController, fichaService, storage, modalController, paginaService) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.fmService = fmService;
        this.npcService = npcService;
        this.alertController = alertController;
        this.fichaService = fichaService;
        this.storage = storage;
        this.modalController = modalController;
        this.paginaService = paginaService;
        this.paginaAtual = 0;
        this.idFichaModelo = '';
        this.objetivos = [];
        this.objetivo = "";
        this.interesses = [];
        this.interesse = "";
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.formNpc = this.formBuilder.group({
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            valorInventario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            tipoNpc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.consultarFM();
    }
    salvar() {
        this.loading = true;
        this.newNpc = {
            historia: this.formNpc.get('historia').value,
            objetivos: this.objetivos,
            interesses: this.interesses,
            fichaNewDTO: {
                idFichaModelo: this.idFichaModelo,
                valorInventario: this.formNpc.get('valorInventario').value
            },
            tipoNpc: this.formNpc.get('tipoNpc').value,
            idCriador: this.storage.getLocalUserId()
        };
        this.npcService.insert(this.newNpc)
            .subscribe(res => {
            this.loading = false;
            this.idCriado = res.ficha.idFicha;
            this.fichaService.setConfiguration(res.ficha, true, res.idNpc, null, res.tipoNpc, false);
            this.showFicha();
            this.achado = false;
        }, error => {
            this.loading = false;
        });
    }
    showFicha() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.display = true;
        });
    }
    consultar() {
        this.loading = true;
        this.display = false;
        this.achado = false;
        this.fmService.findFichaModeloById(this.idFichaModelo)
            .subscribe(res => {
            this.loading = false;
            this.achado = true;
        }, error => {
            this.loading = false;
            this.achado = false;
        });
    }
    inserirObjetivo() {
        if (this.objetivo.length < 5) {
            this.presentError('objetivo');
        }
        else {
            this.objetivos.push(this.objetivo);
            this.objetivo = "";
        }
    }
    inserirInteresse() {
        if (this.interesse.length < 5) {
            this.presentError('interesse');
        }
        else {
            this.interesses.push(this.interesse);
            this.interesse = "";
        }
    }
    presentError(texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Valor inválido',
                message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    img() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_7__["ImagemComponent"],
                backdropDismiss: false,
                cssClass: 'my-full',
            });
            return yield modal.present();
        });
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultarFM() {
        const p = this.fmService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
    }
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(event);
            const { id } = event;
            this.idFichaModelo = id;
            this.consultar();
        });
    }
};
CriarNpcComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__["FichaModeloService"] },
    { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__["FichaService"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CriarNpcComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CriarNpcComponent.prototype, "cancelarBTN", void 0);
CriarNpcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-criar-npc',
        template: __webpack_require__(/*! raw-loader!./criar-npc.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/criar-npc/criar-npc.component.html"),
        styles: [__webpack_require__(/*! ./criar-npc.component.scss */ "./src/app/components/criacoes/criar-npc/criar-npc.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__["FichaModeloService"],
        src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__["FichaService"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"]])
], CriarNpcComponent);



/***/ }),

/***/ "./src/app/services/fichas/ficha-modelo.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/fichas/ficha-modelo.service.ts ***!
  \*********************************************************/
/*! exports provided: FichaModeloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaModeloService", function() { return FichaModeloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





let FichaModeloService = class FichaModeloService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    findFichaModeloById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}fichamodelo/${id}`, {
            responseType: 'json',
            observe: "body"
        });
    }
    insert(dto) {
        dto.idCriador = this.storage.getLocalUserId();
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}fichamodelo`, dto);
    }
    findPageByCriador(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}fichamodelo/criador`, {
            params,
            observe: 'body',
        });
    }
};
FichaModeloService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
FichaModeloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], FichaModeloService);



/***/ }),

/***/ "./src/app/services/npc/npc.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/npc/npc.service.ts ***!
  \*********************************************/
/*! exports provided: NpcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpcService", function() { return NpcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





let NpcService = class NpcService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    getStaticID() {
        return this.staticID;
    }
    setStaticID(id) {
        this.staticID = id;
    }
    insert(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}npc`, obj, {
            responseType: "json",
            observe: "body"
        });
    }
    update(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}npc`, obj, {
            responseType: "json",
            observe: "body"
        });
    }
    update2(obj) {
        const response = this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}npc/advanced`, obj, {
            responseType: "json",
            observe: "body"
        });
        return response;
    }
    updateBasic(obj) {
        const response = this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}npc/basic`, obj, {
            responseType: "json",
            observe: "body"
        });
        return response;
    }
    findPageByCriador(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}npc/criador`, {
            params,
            observe: 'body',
        });
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}npc/${id}`, {
            responseType: "json",
            observe: 'body',
        });
    }
};
NpcService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
NpcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], NpcService);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~gerequipamentos-gerequipamentos-module~gerinimigos-gerinimigos-modu~9709502c-es2015.js.map