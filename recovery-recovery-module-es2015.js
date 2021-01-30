(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recovery-recovery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recovery/recovery.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recovery/recovery.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Recuperação</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ng-container *ngIf=\"display\">\r\n    <form class=\"container\" [formGroup]=\"formSolicitacao\" (ngSubmit)=\"$event.preventDefault()\">\r\n      <p-panel header=\"Solicitação\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n  \r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-1\">\r\n              Email *:\r\n            </div>\r\n            <div class=\"ui-grid-col-2\">\r\n              <input pInputText type=\"text\" formControlName=\"email\" placeholder=\"Required\" />\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Email inválido/Requerido\"\r\n                *ngIf=\"!formSolicitacao.controls['email'].valid&&formSolicitacao.controls['email'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n  \r\n          \r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-4\">\r\n              <button pButton type=\"submit\" label=\"Enviar\" [disabled]=\"!formSolicitacao.valid\" (click)=\"solicitar()\"></button>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\"></div>\r\n          </div>\r\n  \r\n        </div>\r\n      </p-panel>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!display\">\r\n    <form class=\"container\" [formGroup]=\"formGroup\" (ngSubmit)=\"$event.preventDefault()\">\r\n      <p-panel header=\"Recuperação\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n  \r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n              Código de recuperação *:\r\n            </div>\r\n            <div class=\"ui-grid-col-2\">\r\n              <input pInputText type=\"text\" formControlName=\"codigoRecuperacao\" placeholder=\"Required\" />\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Requerido\"\r\n                *ngIf=\"!formGroup.controls['codigoRecuperacao'].valid&&formGroup.controls['codigoRecuperacao'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n             Nova senha *:\r\n            </div>\r\n            <div class=\"ui-grid-col-2\">\r\n              <input pInputText type=\"password\" formControlName=\"senha\" placeholder=\"Required\" />\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Senha deve conter pelo menos 8 caracteres/Requerida\"\r\n                *ngIf=\"!formGroup.controls['senha'].valid&&formGroup.controls['senha'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n              Repita sua Senha *:\r\n            </div>\r\n            <div class=\"ui-grid-col-2\">\r\n              <input pInputText type=\"password\" formControlName=\"senhaR\" placeholder=\"Required\" />\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Senhas não são as mesmas\"\r\n                *ngIf=\"!getSenhas()\"></p-message>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-4\">\r\n              <button pButton type=\"submit\" label=\"Enviar\" [disabled]=\"getValid()\" (click)=\"registrar()\"></button>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\"></div>\r\n          </div>\r\n  \r\n        </div>\r\n      </p-panel>\r\n    </form>\r\n  </ng-container>\r\n\r\n  \r\n\r\n  <br><br>\r\n</ion-content>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/recovery/recovery-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/recovery/recovery-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RecoveryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPageRoutingModule", function() { return RecoveryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recovery.page */ "./src/app/recovery/recovery.page.ts");




const routes = [
    {
        path: '',
        component: _recovery_page__WEBPACK_IMPORTED_MODULE_3__["RecoveryPage"]
    }
];
let RecoveryPageRoutingModule = class RecoveryPageRoutingModule {
};
RecoveryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecoveryPageRoutingModule);



/***/ }),

/***/ "./src/app/recovery/recovery.module.ts":
/*!*********************************************!*\
  !*** ./src/app/recovery/recovery.module.ts ***!
  \*********************************************/
/*! exports provided: RecoveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPageModule", function() { return RecoveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm2015/primeng-message.js");
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recovery-routing.module */ "./src/app/recovery/recovery-routing.module.ts");
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recovery.page */ "./src/app/recovery/recovery.page.ts");

















let RecoveryPageModule = class RecoveryPageModule {
};
RecoveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _recovery_routing_module__WEBPACK_IMPORTED_MODULE_15__["RecoveryPageRoutingModule"],
            _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_5__["LoadSpinnerModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_11__["TabViewModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_14__["MessageModule"],
            _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_5__["LoadSpinnerModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_16__["RecoveryPage"]]
    })
], RecoveryPageModule);



/***/ }),

/***/ "./src/app/recovery/recovery.page.scss":
/*!*********************************************!*\
  !*** ./src/app/recovery/recovery.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  color: red;\n}\n\n.container {\n  margin: 20px;\n  max-width: 90%;\n}\n\n.click:hover {\n  cursor: pointer;\n  color: #171d74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3ZlcnkvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXHJlY292ZXJ5XFxyZWNvdmVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlY292ZXJ5L3JlY292ZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVjb3ZlcnkvcmVjb3ZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxuICBcclxuICAuY2xpY2s6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigyMywgMjksIDExNik7XHJcbiAgfVxyXG4gIFxyXG4gICIsIi5kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmNsaWNrOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzE3MWQ3NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recovery/recovery.page.ts":
/*!*******************************************!*\
  !*** ./src/app/recovery/recovery.page.ts ***!
  \*******************************************/
/*! exports provided: RecoveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPage", function() { return RecoveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






let RecoveryPage = class RecoveryPage {
    constructor(router, menu, formBuilder, authService, alertCtrl) {
        this.router = router;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loading = false;
        this.display = true;
        this.formSolicitacao = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
        this.formGroup = this.formBuilder.group({
            codigoRecuperacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            senhaR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]]
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    solicitar() {
        this.loading = true;
        const email = this.formSolicitacao.get('email').value;
        this.authService.requestRecovery(email).
            subscribe(res => {
            this.loading = false;
            this.display = false;
            this.showRequestOk();
        }, error => {
            this.loading = false;
            this.display = true;
            //console.log(error);
        });
    }
    registrar() {
        this.loading = true;
        this.recovery = {
            email: this.formSolicitacao.get('email').value,
            codigoRecuperacao: this.formGroup.get('codigoRecuperacao').value,
            senha: this.formGroup.get('senha').value,
        };
        this.authService.doRecovery(this.recovery).subscribe(res => {
            this.loading = false;
            this.showOk();
        }, error => { this.loading = false; });
    }
    showRequestOk() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Sucesso!',
                message: 'Enviado e-mail com código de recuperação',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => { }
                    }
                ]
            });
            alert.present();
        });
    }
    showOk() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Sucesso!',
                message: 'Senha alterada com sucesso!',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => { this.router.navigateByUrl('login'); }
                    }
                ]
            });
            alert.present();
        });
    }
    getValid() {
        return !(this.formGroup.valid && this.getSenhas());
    }
    getSenhas() {
        return this.formGroup.get('senha').value == this.formGroup.get('senhaR').value;
    }
};
RecoveryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
RecoveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recovery',
        template: __webpack_require__(/*! raw-loader!./recovery.page.html */ "./node_modules/raw-loader/index.js!./src/app/recovery/recovery.page.html"),
        styles: [__webpack_require__(/*! ./recovery.page.scss */ "./src/app/recovery/recovery.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], RecoveryPage);



/***/ })

}]);
//# sourceMappingURL=recovery-recovery-module-es2015.js.map