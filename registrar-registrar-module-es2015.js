(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrar-registrar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registrar/registrar.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registrar/registrar.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registrar-se</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"container\" [formGroup]=\"formGroup\" (ngSubmit)=\"$event.preventDefault()\">\r\n    <p-panel header=\"Registro\">\r\n      <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Email *:\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <input pInputText type=\"text\" formControlName=\"email\" placeholder=\"Required\" />\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <p-message severity=\"error\" text=\"Email inválido/Requerido\"\r\n              *ngIf=\"!formGroup.controls['email'].valid&&formGroup.controls['email'].dirty\"></p-message>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Apelido (Nick) *:\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <input pInputText type=\"text\" formControlName=\"apelido\" placeholder=\"Required\" />\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <p-message severity=\"error\" text=\"Apelido deve conter entre 5 e 15 caracteres/Requerido\"\r\n              *ngIf=\"!formGroup.controls['apelido'].valid&&formGroup.controls['apelido'].dirty\"></p-message>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Senha *:\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <input pInputText type=\"password\" formControlName=\"senha\" placeholder=\"Required\" />\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <p-message severity=\"error\" text=\"Senha deve conter pelo menos 8 caracteres/Requerida\"\r\n              *ngIf=\"!formGroup.controls['senha'].valid&&formGroup.controls['senha'].dirty\"></p-message>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Repita sua Senha *:\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <input pInputText type=\"password\" formControlName=\"senhaR\" placeholder=\"Required\" />\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <p-message severity=\"error\" text=\"Senhas não são as mesmas\"\r\n              *ngIf=\"!getSenhas()\"></p-message>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <button pButton type=\"submit\" label=\"Enviar\" [disabled]=\"getValid()\" (click)=\"registrar()\"></button>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n      </div>\r\n    </p-panel>\r\n  </form>\r\n\r\n  <br><br>\r\n</ion-content>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/registrar/registrar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.module.ts ***!
  \***********************************************/
/*! exports provided: RegistrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageModule", function() { return RegistrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar.page */ "./src/app/registrar/registrar.page.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm2015/primeng-message.js");

















const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]
    }
];
let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__["InputTextareaModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_14__["PanelModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_16__["MessageModule"],
            _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]]
    })
], RegistrarPageModule);



/***/ }),

/***/ "./src/app/registrar/registrar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  color: red;\n}\n\n.container {\n  margin: 20px;\n  max-width: 90%;\n}\n\n.click:hover {\n  cursor: pointer;\n  color: #171d74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFyL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxyZWdpc3RyYXJcXHJlZ2lzdHJhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhci9yZWdpc3RyYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXIvcmVnaXN0cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYW5nZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNsaWNrOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYigyMywgMjksIDExNik7XHJcbn1cclxuXHJcbiIsIi5kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmNsaWNrOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzE3MWQ3NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/registrar/registrar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/registrar/registrar.page.ts ***!
  \*********************************************/
/*! exports provided: RegistrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPage", function() { return RegistrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");






let RegistrarPage = class RegistrarPage {
    constructor(router, menu, formBuilder, userService, alertCtrl) {
        this.router = router;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loading = false;
        this.formGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            apelido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            senhaR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    registrar() {
        this.loading = true;
        this.user = {
            apelido: this.formGroup.get('apelido').value,
            email: this.formGroup.get('email').value,
            senha: this.formGroup.get('senha').value,
        };
        this.userService.insertNew(this.user).subscribe(res => {
            this.loading = false;
            this.showOk();
        }, error => { this.loading = false; });
    }
    showOk() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Sucesso!',
                message: 'Seu cadastro foi efetuado com sucesso!',
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
RegistrarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
RegistrarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar',
        template: __webpack_require__(/*! raw-loader!./registrar.page.html */ "./node_modules/raw-loader/index.js!./src/app/registrar/registrar.page.html"),
        styles: [__webpack_require__(/*! ./registrar.page.scss */ "./src/app/registrar/registrar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], RegistrarPage);



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





let UserService = class UserService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    findByEmail(email) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users/${email}`);
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users/id/${id}`);
    }
    insertNew(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users`, obj);
    }
    updateImgUser(dto) {
        return this.http.patch(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users`, dto, {
            responseType: 'json',
            observe: 'response'
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], UserService);



/***/ })

}]);
//# sourceMappingURL=registrar-registrar-module-es2015.js.map