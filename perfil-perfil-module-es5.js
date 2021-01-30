(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><footer>\r\n    2021 <br> \r\n    Ciano, Todos os Direitos Reservados (v 1.0.1)\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Perfil\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n    <h2 class=\"text\">{{ user?.apelido }}</h2>\r\n    <div class=\"border response\">\r\n      <img class=\"img\" [src]=\"imgURL || 'assets/imgs/avatar-blank.png'\" alt=\"\">\r\n    </div>\r\n    <h4 class=\"text\">{{ user?.email }}</h4>\r\n    <h4 class=\"text\">{{ user?.id }}</h4>\r\n    <br>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">URL da imagem</ion-label>\r\n      <ion-input class=\"input\" type=\"text\" color=\"primary\" [(ngModel)]=\"imgURL\" [ngModelOptions]=\"{standalone: true}\"\r\n        placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n      </ion-input>\r\n      <ion-button class=\"btn\" expand=\"full\" fill=\"solid\" slot=\"end\"\r\n      type=\"submit\" color=\"tertiary\" (click)=\"atualizar()\">Atualizar\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n    <p class=\"aviso\">Recomenda-se uma imagem 400x400</p>\r\n  </div>\r\n  <br><br>\r\n\r\n</ion-content>\r\n<app-footer></app-footer>\r\n\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #a0dffc;\n  color: black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAyMjMsIDI1Mik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9IiwiZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBkZmZjO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            entryComponents: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");











var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_10__["LoadSpinnerModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"]
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: flex;\n  margin: 15px 25px;\n  align-self: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.img {\n  border-radius: 30%;\n}\n\n.text {\n  text-align: center;\n}\n\n@media only screen and (max-width: 599px) {\n  img {\n    max-width: 200px;\n    max-height: 200px;\n  }\n\n  .response {\n    width: 200px;\n    height: 200px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .response {\n    width: 400px;\n    height: 400px;\n  }\n}\n\n.border {\n  border-radius: 30%;\n  border: 1px groove rgba(94, 41, 164, 0.28);\n}\n\n.aviso {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNDRjs7RURDQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDE1cHggMjVweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLnJlc3BvbnNlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLnJlc3BvbnNlIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG59XHJcblxyXG4uYXZpc297XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNXB4IDI1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cblxuICAucmVzcG9uc2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5yZXNwb25zZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbn1cblxuLmF2aXNvIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");







var PerfilPage = /** @class */ (function () {
    function PerfilPage(router, menu, storage, userService, toast) {
        this.router = router;
        this.menu = menu;
        this.storage = storage;
        this.userService = userService;
        this.toast = toast;
        this.imgURL = '';
        this.loading = false;
    }
    PerfilPage.prototype.ngOnInit = function () {
    };
    PerfilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading = true;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.userService.findByEmail(localUser.email)
                .subscribe(function (res) {
                _this.loading = false;
                console.log(res);
                _this.user = res;
                _this.imgURL = res.imgURL || 'assets/imgs/avatar-blank.png';
                //buscar imagem;
            }, function (error) {
                if (error.status == 403) {
                    _this.loading = false;
                    _this.router.navigateByUrl('login');
                }
            });
        }
        else {
            this.loading = false;
            this.router.navigateByUrl('login');
        }
    };
    PerfilPage.prototype.atualizar = function () {
        var _this = this;
        this.loading = true;
        var dto = {
            id: this.user.id,
            imgURL: this.imgURL
        };
        this.userService.updateImgUser(dto)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast('success', 'Atualizado', 'Imagem de perfil atualizada');
        }, function (error) {
            _this.loading = false;
        });
    };
    PerfilPage.prototype.callToast = function (severity, summary, detail) {
        this.toast.clear();
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    PerfilPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], PerfilPage);
    return PerfilPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





var UserService = /** @class */ (function () {
    function UserService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    UserService.prototype.findByEmail = function (email) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users/" + email);
    };
    UserService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users/id/" + id);
    };
    UserService.prototype.insertNew = function (obj) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users", obj);
    };
    UserService.prototype.updateImgUser = function (dto) {
        return this.http.patch(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users", dto, {
            responseType: 'json',
            observe: 'response'
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es5.js.map