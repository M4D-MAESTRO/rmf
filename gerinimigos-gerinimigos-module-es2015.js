(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerinimigos-gerinimigos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/update-npc/update-npc.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/update-npc/update-npc.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de NPC\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-grid class=\"no-margin\">\r\n  <ng-container *ngIf=\"!display\">\r\n    <div>\r\n      <form [formGroup]=\"formNpc\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label position=\"floating\">Historia</ion-label>\r\n                <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"\r\n                  placeholder=\"EX: Sauron, também conhecido como Senhor do Escuro de Mordor, era o tenente mais poderoso de Morgoth e mente...\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formNpc.controls.historia.dirty && formNpc.controls.historia.errors\" margin-left>\r\n                Preencha\r\n                a historia</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          <br>\r\n          <div class=\"border objetivos\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-item color=\"light\">\r\n                  <ion-label position=\"floating\">Objetivos</ion-label>\r\n                  <ion-input [(ngModel)]=\"objetivo\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                    color=\"primary\" placeholder=\"Insira o objetivo aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n                </ion-item>\r\n                <ion-button class=\"btn-insert\" color=\"tertiary\" fill=\"solid\" expand=\"block\" (click)=\"inserirObjetivo()\">\r\n                  Adicionar\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <app-listas [strings]=\"objetivos\" [titulo]=\"'Lista de Objetivos'\" [isModal]=\"false\"></app-listas>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <br>\r\n          <br>\r\n\r\n          <div class=\"border interesses\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-item color=\"light\">\r\n                  <ion-label position=\"floating\">Interesses</ion-label>\r\n                  <ion-input [(ngModel)]=\"interesse\" [ngModelOptions]=\"{standalone: true}\" class=\"input\"\r\n                    type=\"text-area\" color=\"primary\"\r\n                    placeholder=\"Insira o interesse aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n                </ion-item>\r\n                <ion-button class=\"btn-insert\" color=\"tertiary\" fill=\"solid\" expand=\"block\"\r\n                  (click)=\"inserirInteresse()\">\r\n                  Adicionar\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-listas [strings]=\"interesses\" [titulo]=\"'Lista de Interesses'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <br>\r\n        <br>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label>Tipo de NPC</ion-label>\r\n                <ion-select color=\"tertiary\" (ionChange)=\"updateType($event)\" formControlName=\"tipoNpc\"\r\n                  placeholder=\"Selecione\">\r\n                  <ion-select-option [value]=\"0\">Aliado</ion-select-option>\r\n                  <ion-select-option [value]=\"1\">Inimigo</ion-select-option>\r\n                  <ion-select-option [value]=\"2\">Neutro</ion-select-option>\r\n                  <ion-select-option [value]=\"3\">Boss</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label>Manter privado</ion-label>\r\n                <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                  [checked]=\"formNpc.get('isPrivate')\"></ion-toggle>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formNpc.invalid\" (click)=\"salvar()\">Salvar e prosseguir\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"display\">\r\n    <div>\r\n      <app-ficha [idFicha]=\"idCriado\"></app-ficha>\r\n    </div>\r\n  </ng-container>\r\n</ion-grid>\r\n\r\n\r\n<ion-footer *ngIf=\"true\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" (click)=\"close()\">Fechar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gerinimigos/gerinimigos.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gerinimigos/gerinimigos.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerência de NPCs\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>Tipo de NPC</ion-label>\r\n          <ion-select (ionChange)=\"destroyList()\" [(ngModel)]=\"tipoNpc\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">NPC por nome</ion-select-option>\r\n            <ion-select-option value=\"1\">NPC por tipo</ion-select-option>\r\n            <ion-select-option value=\"2\">Criados por mim</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button fill=\"outline\" expand=\"block\" (click)=\"novo()\">{{ display? \"Cancelar\": \"Criar novo\" }}</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"consultar()\" [disabled]=\"tipoNpc == -1\">Buscar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ng-container *ngIf=\"listDisplay\">\r\n    <div>\r\n      <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n        (notifyParent)=\"getNotification($event)\" (getSelectedObj)=\"selectedObj($event)\" (refresh)=\"requestRefresh($event)\"\r\n        [add]=\"true\" [id]=\"'idNpc'\" [nome]=\"'ficha.fichaModelo.nome'\" [descricao]=\"'historia'\"\r\n        [tipo]=\"'ficha.fichaModelo.tipoRPG'\" [imgURL]=\"'ficha.urlImg'\" [closeBTN]=\"false\"></app-paginacao>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"display\">\r\n    <app-criar-npc [menu]=\"false\"></app-criar-npc>\r\n    <br>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar/Novo</ion-button>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>"

/***/ }),

/***/ "./src/app/components/criacoes/update-npc/update-npc.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/criacoes/update-npc/update-npc.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.no-margin {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  margin-left: 0;\n  margin-right: 0;\n  overflow-y: scroll;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy91cGRhdGUtbnBjL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcdXBkYXRlLW5wY1xcdXBkYXRlLW5wYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy91cGRhdGUtbnBjL3VwZGF0ZS1ucGMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvdXBkYXRlLW5wYy91cGRhdGUtbnBjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1pbnNlcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcbiIsIi5idG4taW5zZXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dCB7XG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/update-npc/update-npc.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/criacoes/update-npc/update-npc.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateNpcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNpcComponent", function() { return UpdateNpcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fichas/ficha-modelo.service */ "./src/app/services/fichas/ficha-modelo.service.ts");
/* harmony import */ var src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imagem/imagem.component */ "./src/app/components/imagem/imagem.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");









let UpdateNpcComponent = class UpdateNpcComponent {
    constructor(modalCtrl, formBuilder, fmService, npcService, alertController, fichaService, storage, modalController) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.fmService = fmService;
        this.npcService = npcService;
        this.alertController = alertController;
        this.fichaService = fichaService;
        this.storage = storage;
        this.modalController = modalController;
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
        this.requestUpdate = false;
        this.formNpc = this.formBuilder.group({
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            valorInventario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            tipoNpc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.requestUpdate = false;
        this.loading = true;
        const id = this.npcService.getStaticID();
        this.npcService.findById(id)
            .subscribe(npc => {
            //console.log(npc);
            const { idNpc, historia, objetivos, interesses, isPrivate, tipoNpc, ficha } = npc;
            const { dinheiro } = ficha.inventario;
            this.formNpc.get('historia').setValue(historia);
            this.formNpc.get('tipoNpc').setValue(this.getCurrentType(tipoNpc));
            this.formNpc.get('valorInventario').setValue(dinheiro);
            if (isPrivate == false) {
                this.formNpc.get('isPrivate').setValue(false);
            }
            else {
                this.formNpc.get('isPrivate').setValue(true);
            }
            this.objetivos = objetivos;
            this.interesses = interesses;
            this.newNpc = {
                historia,
                interesses,
                isPrivate,
                objetivos,
                fichaUpdateDTO: ficha,
                tipoNpc,
                idNpc
            };
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    ionViewDidLoad() {
    }
    salvar() {
        this.loading = true;
        this.newNpc.historia = this.formNpc.get('historia').value;
        this.newNpc.objetivos = this.objetivos;
        this.newNpc.interesses = this.interesses;
        this.newNpc.tipoNpc = this.formNpc.get('tipoNpc').value;
        this.newNpc.isPrivate = this.formNpc.get('isPrivate').value;
        const npcBasic = {
            historia: this.newNpc.historia,
            idNpc: this.newNpc.idNpc,
            interesses: this.newNpc.interesses,
            isPrivate: this.newNpc.isPrivate,
            objetivos: this.newNpc.objetivos,
            tipoNpc: this.newNpc.tipoNpc
        };
        this.npcService.updateBasic(npcBasic)
            .subscribe(res => {
            this.idCriado = res.ficha.idFicha;
            this.fichaService.setConfiguration(res.ficha, true, res.idNpc, null, res.tipoNpc, false);
            this.requestUpdate = true;
            this.showFicha();
            this.loading = false;
            this.achado = false;
        }, error => {
            this.loading = false;
        });
    }
    getCurrentType(tipoNpc) {
        switch (tipoNpc) {
            case "ALIADO":
                return 0;
                break;
            case "INIMIGO":
                return 1;
                break;
            case "NEUTRO":
                return 2;
                break;
            case "BOSS":
                return 3;
                break;
        }
    }
    updateType(evt) {
        const tipo = evt.detail.value;
        this.formNpc.get('tipoNpc').setValue(tipo);
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
                message: 'Insira um ' + texto + '<br>Com pelo menos 5 caracteres',
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
    close() {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    }
};
UpdateNpcComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__["FichaModeloService"] },
    { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__["FichaService"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], UpdateNpcComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], UpdateNpcComponent.prototype, "cancelarBTN", void 0);
UpdateNpcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-npc',
        template: __webpack_require__(/*! raw-loader!./update-npc.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/update-npc/update-npc.component.html"),
        styles: [__webpack_require__(/*! ./update-npc.component.scss */ "./src/app/components/criacoes/update-npc/update-npc.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__["FichaModeloService"],
        src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__["FichaService"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], UpdateNpcComponent);



/***/ }),

/***/ "./src/app/components/criacoes/update-npc/update-npc.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/criacoes/update-npc/update-npc.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateNpcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNpcModule", function() { return UpdateNpcModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_npc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-npc.component */ "./src/app/components/criacoes/update-npc/update-npc.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");









let UpdateNpcModule = class UpdateNpcModule {
};
UpdateNpcModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_update_npc_component__WEBPACK_IMPORTED_MODULE_5__["UpdateNpcComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_7__["ListasModule"],
            _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_8__["FichasModule"],
        ],
        exports: [
            _update_npc_component__WEBPACK_IMPORTED_MODULE_5__["UpdateNpcComponent"],
        ],
        entryComponents: [
            _update_npc_component__WEBPACK_IMPORTED_MODULE_5__["UpdateNpcComponent"]
        ]
    })
], UpdateNpcModule);



/***/ }),

/***/ "./src/app/gerinimigos/gerinimigos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gerinimigos/gerinimigos.module.ts ***!
  \***************************************************/
/*! exports provided: GerinimigosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerinimigosPageModule", function() { return GerinimigosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gerinimigos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerinimigos.page */ "./src/app/gerinimigos/gerinimigos.page.ts");
/* harmony import */ var _components_criacoes_criacoes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/criacoes.module */ "./src/app/components/criacoes/criacoes.module.ts");
/* harmony import */ var _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var _components_imagem_imagem_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/imagem/imagem.module */ "./src/app/components/imagem/imagem.module.ts");
/* harmony import */ var _components_criacoes_update_npc_update_npc_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/criacoes/update-npc/update-npc.module */ "./src/app/components/criacoes/update-npc/update-npc.module.ts");














const routes = [
    {
        path: '',
        component: _gerinimigos_page__WEBPACK_IMPORTED_MODULE_6__["GerinimigosPage"]
    }
];
let GerinimigosPageModule = class GerinimigosPageModule {
};
GerinimigosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_criacoes_criacoes_module__WEBPACK_IMPORTED_MODULE_7__["CriacoesModule"],
            _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_8__["FichasModule"],
            _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__["PaginacaoModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            _components_imagem_imagem_module__WEBPACK_IMPORTED_MODULE_12__["ImagemModule"],
            _components_criacoes_update_npc_update_npc_module__WEBPACK_IMPORTED_MODULE_13__["UpdateNpcModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"]],
        declarations: [_gerinimigos_page__WEBPACK_IMPORTED_MODULE_6__["GerinimigosPage"]]
    })
], GerinimigosPageModule);



/***/ }),

/***/ "./src/app/gerinimigos/gerinimigos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/gerinimigos/gerinimigos.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vazio {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VyaW5pbWlnb3MvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGdlcmluaW1pZ29zXFxnZXJpbmltaWdvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlcmluaW1pZ29zL2dlcmluaW1pZ29zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dlcmluaW1pZ29zL2dlcmluaW1pZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YXppb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIiwiLnZhemlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gerinimigos/gerinimigos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/gerinimigos/gerinimigos.page.ts ***!
  \*************************************************/
/*! exports provided: GerinimigosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerinimigosPage", function() { return GerinimigosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var _services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var _services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _components_criacoes_update_npc_update_npc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/update-npc/update-npc.component */ "./src/app/components/criacoes/update-npc/update-npc.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let GerinimigosPage = class GerinimigosPage {
    constructor(router, menu, paginaService, itemService, npcService, toast, modalCtrl) {
        this.router = router;
        this.menu = menu;
        this.paginaService = paginaService;
        this.itemService = itemService;
        this.npcService = npcService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.npcs = [];
        this.display = false;
        this.tipoNpc = -1;
        this.listDisplay = false;
        this.paginaAtual = 0;
        this.doRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    requestRefresh(evt) {
        console.log('Entrou no request');
        this.doRefresh.next(true);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    nav() {
        this.router.navigateByUrl('novinimigo');
    }
    novo() {
        this.listDisplay = false;
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        this.toast.clear();
        let p;
        switch (Number(this.tipoNpc)) {
            case 0:
                /* p = this.itemService.findPageOfAtaque(this.paginaAtual.toString());
                 this.paginaService.setPromisse(p);*/
                this.callToast('warn', 'Indisponível', 'Este método de pesquisa está atualmente indisponível!');
                return;
                break;
            case 1:
                /*p = this.itemService.findPageOfDefesa(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);*/
                this.callToast('warn', 'Indisponível', 'Este método de pesquisa está atualmente indisponível!');
                return;
                break;
            case 2:
                p = this.npcService.findPageByCriador(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                break;
            default:
                console.log('NADA');
                break;
        }
        this.listar();
    }
    listar() {
        this.listDisplay = true;
        this.display = false;
    }
    destroyList() {
        this.listDisplay = false;
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(event);
            this.npcService.setStaticID(event.id);
            const modal = yield this.modalCtrl.create({
                component: _components_criacoes_update_npc_update_npc_component__WEBPACK_IMPORTED_MODULE_8__["UpdateNpcComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                if (data == true) {
                    const p = this.npcService.findPageByCriador(this.paginaAtual.toString());
                    this.paginaService.setPromisse(p);
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
    close() {
        this.listDisplay = false;
        this.display = false;
    }
};
GerinimigosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
    { type: _services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] },
    { type: _services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
GerinimigosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerinimigos',
        template: __webpack_require__(/*! raw-loader!./gerinimigos.page.html */ "./node_modules/raw-loader/index.js!./src/app/gerinimigos/gerinimigos.page.html"),
        styles: [__webpack_require__(/*! ./gerinimigos.page.scss */ "./src/app/gerinimigos/gerinimigos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"],
        _services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"],
        _services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], GerinimigosPage);



/***/ })

}]);
//# sourceMappingURL=gerinimigos-gerinimigos-module-es2015.js.map