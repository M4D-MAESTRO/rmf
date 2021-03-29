(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerrpg-gerrpg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg-update/rpg-update.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/rpg-update/rpg-update.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Mapa\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"no-margin\">\r\n    <form [formGroup]=\"formRPG\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo back\">\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\"\r\n                placeholder=\"EX: The Margic Circle\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formRPG.controls.nome.dirty && formRPG.controls.nome.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Após o grande estrondo, na terceira era...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formRPG.controls.descricao.dirty && formRPG.controls.descricao.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">História</ion-label>\r\n              <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Passando-se na terceira era dos dragões...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formRPG.controls.historia.dirty && formRPG.controls.historia.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">URL da imagem</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"\r\n                placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formRPG.controls.imgURL.dirty && formRPG.controls.imgURL.errors\" margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Manter privado</ion-label>\r\n              <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                [checked]=\"formRPG.get('isPrivate')\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formRPG.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center;\">\r\n            <ion-item color=\"warning\">\r\n              <ion-label position=\"floating\" color=\"dark\">Em breve</ion-label>\r\n              <ion-textarea type=\"text-area\" color=\"dark\" readonly\r\n                value=\"Possibilidade de atualizar e adicionar os conteúdos do seu RPG chegando em breve! \"></ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formRPG.invalid\" (click)=\"salvar()\">Salvar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"close()\">Fechar</ion-button>\r\n</ion-content>\r\n\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gerrpg/gerrpg.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gerrpg/gerrpg.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo RPG!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n          (click)=\"novoRPG()\">Novo</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n          (click)=\"consultar()\">Listar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ng-container *ngIf=\"novo\">\r\n    <app-rpg></app-rpg>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"display\" class=\"limiter\">\r\n    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n      (notifyParent)=\"getNotification($event)\" [add]=\"true\" (getSelectedObj)=\"actionObj($event)\" [id]=\"'idRpg'\"\r\n      [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\">\r\n    </app-paginacao>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/criacoes/rpg-update/rpg-update.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-update/rpg-update.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.no-margin {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #7a7a7a !important;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n\nbody {\n  background-color: #7a7a7a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGctdXBkYXRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xccnBnLXVwZGF0ZVxccnBnLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGctdXBkYXRlL3JwZy11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNDRjs7QURHRTtFQUNFLDJDQUFBO0FDQUo7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9ycGctdXBkYXRlL3JwZy11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWluc2VydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5idG4taW5zZXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dCB7XG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTdhN2EgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xufVxuXG4uYmFjayB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhN2E3YSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/rpg-update/rpg-update.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-update/rpg-update.component.ts ***!
  \************************************************************************/
/*! exports provided: RpgUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgUpdateComponent", function() { return RpgUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");








let RpgUpdateComponent = class RpgUpdateComponent {
    constructor(formBuilder, storage, alertController, rpgService, paginaService, toast, modalCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.rpgService = rpgService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.menu = true;
        this.cancelarBTN = false;
        this.add = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.requestUpdate = false;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formRPG = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isPrivate: ['', []],
        });
    }
    ngOnInit() {
        this.requestUpdate = false;
        this.loading = true;
        const id = this.rpgService.getStaticID();
        this.rpgService.findById(id)
            .subscribe(res => {
            const { idMapa, descricao, nome, imgURL, isPrivate, historia } = res;
            this.formRPG.get('nome').setValue(nome);
            this.formRPG.get('descricao').setValue(descricao);
            this.formRPG.get('historia').setValue(historia);
            this.formRPG.get('imgURL').setValue(imgURL);
            if (isPrivate == false) {
                this.formRPG.get('isPrivate').setValue(false);
            }
            else {
                this.formRPG.get('isPrivate').setValue(true);
            }
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    salvar() {
        const idRpg = this.rpgService.getStaticID();
        this.requestUpdate = true;
        this.loading = true;
        this.newRPG = {
            idRpg,
            nome: this.formRPG.get('nome').value,
            descricao: this.formRPG.get('descricao').value,
            historia: this.formRPG.get('historia').value,
            imgURL: this.formRPG.get('imgURL').value,
            isPrivate: this.formRPG.get('isPrivate').value
        };
        this.rpgService.updateBasic(this.newRPG)
            .subscribe(res => {
            this.loading = false;
            this.callToast('success', 'Atualizado com sucesso!', 'RPG atualizado');
        }, error => {
            this.loading = false;
        });
    }
    novoMapa() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.rpgService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atualizado com sucesso!',
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
    close() {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
};
RpgUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_7__["RpgService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RpgUpdateComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RpgUpdateComponent.prototype, "cancelarBTN", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RpgUpdateComponent.prototype, "add", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], RpgUpdateComponent.prototype, "obj", void 0);
RpgUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rpg-update',
        template: __webpack_require__(/*! raw-loader!./rpg-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg-update/rpg-update.component.html"),
        styles: [__webpack_require__(/*! ./rpg-update.component.scss */ "./src/app/components/criacoes/rpg-update/rpg-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_7__["RpgService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], RpgUpdateComponent);



/***/ }),

/***/ "./src/app/components/criacoes/rpg-update/rpg-update.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-update/rpg-update.module.ts ***!
  \*********************************************************************/
/*! exports provided: RpgUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgUpdateModule", function() { return RpgUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _rpg_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rpg-update.component */ "./src/app/components/criacoes/rpg-update/rpg-update.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");












let RpgUpdateModule = class RpgUpdateModule {
};
RpgUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rpg_update_component__WEBPACK_IMPORTED_MODULE_10__["RpgUpdateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__["ListasModule"],
            _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_9__["FichasModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_11__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
        ],
        exports: [
            _rpg_update_component__WEBPACK_IMPORTED_MODULE_10__["RpgUpdateComponent"],
        ],
        entryComponents: [
            _rpg_update_component__WEBPACK_IMPORTED_MODULE_10__["RpgUpdateComponent"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], RpgUpdateModule);



/***/ }),

/***/ "./src/app/gerrpg/gerrpg-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gerrpg/gerrpg-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GerrpgPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerrpgPageRoutingModule", function() { return GerrpgPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gerrpg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerrpg.page */ "./src/app/gerrpg/gerrpg.page.ts");




const routes = [
    {
        path: '',
        component: _gerrpg_page__WEBPACK_IMPORTED_MODULE_3__["GerrpgPage"]
    }
];
let GerrpgPageRoutingModule = class GerrpgPageRoutingModule {
};
GerrpgPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GerrpgPageRoutingModule);



/***/ }),

/***/ "./src/app/gerrpg/gerrpg.module.ts":
/*!*****************************************!*\
  !*** ./src/app/gerrpg/gerrpg.module.ts ***!
  \*****************************************/
/*! exports provided: GerrpgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerrpgPageModule", function() { return GerrpgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gerrpg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerrpg-routing.module */ "./src/app/gerrpg/gerrpg-routing.module.ts");
/* harmony import */ var _gerrpg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerrpg.page */ "./src/app/gerrpg/gerrpg.page.ts");
/* harmony import */ var _components_criacoes_rpg_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/rpg.module */ "./src/app/components/criacoes/rpg.module.ts");
/* harmony import */ var _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_criacoes_rpg_update_rpg_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/criacoes/rpg-update/rpg-update.module */ "./src/app/components/criacoes/rpg-update/rpg-update.module.ts");











let GerrpgPageModule = class GerrpgPageModule {
};
GerrpgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gerrpg_routing_module__WEBPACK_IMPORTED_MODULE_5__["GerrpgPageRoutingModule"],
            _components_criacoes_rpg_module__WEBPACK_IMPORTED_MODULE_7__["RpgModule"],
            _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__["PaginacaoModule"],
            _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_9__["LoadSpinnerModule"],
            _components_criacoes_rpg_update_rpg_update_module__WEBPACK_IMPORTED_MODULE_10__["RpgUpdateModule"],
        ],
        declarations: [_gerrpg_page__WEBPACK_IMPORTED_MODULE_6__["GerrpgPage"]]
    })
], GerrpgPageModule);



/***/ }),

/***/ "./src/app/gerrpg/gerrpg.page.scss":
/*!*****************************************!*\
  !*** ./src/app/gerrpg/gerrpg.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-radius: 10px;\n}\n\nion-content {\n  --background: rgba(155, 155, 155, 0.801) !important;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VycnBnL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxnZXJycGdcXGdlcnJwZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlcnJwZy9nZXJycGcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLG1EQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9nZXJycGcvZ2VycnBnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuODAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbi5saW1pdGVyIHtcclxuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuODAxKSAhaW1wb3J0YW50O1xufVxuXG4uYmFjayB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5saW1pdGVyIHtcbiAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/gerrpg/gerrpg.page.ts":
/*!***************************************!*\
  !*** ./src/app/gerrpg/gerrpg.page.ts ***!
  \***************************************/
/*! exports provided: GerrpgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerrpgPage", function() { return GerrpgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_criacoes_rpg_update_rpg_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/criacoes/rpg-update/rpg-update.component */ "./src/app/components/criacoes/rpg-update/rpg-update.component.ts");
/* harmony import */ var _services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");







let GerrpgPage = class GerrpgPage {
    constructor(storage, paginaService, modalCtrl, rpgService) {
        this.storage = storage;
        this.paginaService = paginaService;
        this.modalCtrl = modalCtrl;
        this.rpgService = rpgService;
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.loading = false;
        this.display = false;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    novoRPG() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    consultar() {
        const p = this.rpgService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.rpgService.setStaticID(event.id);
            const modal = yield this.modalCtrl.create({
                component: _components_criacoes_rpg_update_rpg_update_component__WEBPACK_IMPORTED_MODULE_3__["RpgUpdateComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                //console.log(res);
                if (data == true) {
                    const p = this.rpgService.findPageByCriador(this.paginaAtual.toString());
                    this.paginaService.setPromisse(p);
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
    getSelectedObj(evt) {
        this.obj.emit(evt);
    }
    actionObj(event) {
        if (this.rpgService.getDoUpdate()) {
            this.selectedObj(event);
        }
        else {
            this.getSelectedObj(event);
        }
    }
};
GerrpgPage.ctorParameters = () => [
    { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_4__["RpgService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GerrpgPage.prototype, "obj", void 0);
GerrpgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerrpg',
        template: __webpack_require__(/*! raw-loader!./gerrpg.page.html */ "./node_modules/raw-loader/index.js!./src/app/gerrpg/gerrpg.page.html"),
        styles: [__webpack_require__(/*! ./gerrpg.page.scss */ "./src/app/gerrpg/gerrpg.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_4__["RpgService"]])
], GerrpgPage);



/***/ })

}]);
//# sourceMappingURL=gerrpg-gerrpg-module-es2015.js.map