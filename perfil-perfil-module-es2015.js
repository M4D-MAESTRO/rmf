(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<footer>\r\n    <div>\r\n        <span style=\"margin-top: 1px;\"> © 2021 ReinerX (v 1.1.0)\r\n        </span>\r\n        <fa-icon class=\"instagram\" [icon]=\"['fab', 'instagram']\" (click)=\"externalHandle('https://www.instagram.com/rmf_rpg/')\"></fa-icon>\r\n        <fa-icon class=\"youtube\" [icon]=\"['fab', 'youtube']\" (click)=\"externalHandle('https://www.youtube.com/channel/UCYMA8YMr1_AMkx-pONmN0Ww')\"></fa-icon>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Perfil\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [style.background-image]=\"'url(' + img + ')'\" [style.background-size]=\"'cover'\"\r\n  [style.background-repeat]=\"'no-repeat'\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"border\">\r\n      <div class=\"limiter\">\r\n        <h2 class=\"text\">{{ user?.apelido }}</h2>\r\n        <div class=\" response\">\r\n          <img class=\"img\" [src]=\"imgURL || 'assets/imgs/avatar-blank.png'\" alt=\"\">\r\n        </div>\r\n        <h4 class=\"text\">{{ user?.email }}</h4>\r\n        <h4 class=\"text\">{{ user?.id }}</h4>\r\n        <br>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">URL da imagem</ion-label>\r\n          <ion-input class=\"input\" type=\"text\"  [(ngModel)]=\"imgURL\"\r\n            [ngModelOptions]=\"{standalone: true}\"\r\n            placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n          </ion-input>\r\n          <ion-button class=\"btn\" expand=\"full\" fill=\"solid\" slot=\"end\" type=\"submit\" color=\"tertiary\"\r\n            (click)=\"atualizar()\">Atualizar\r\n          </ion-button>\r\n        </ion-item>\r\n\r\n        <p class=\"aviso\">Recomenda-se uma imagem 400x400</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n\r\n</ion-content>\r\n<app-footer></app-footer>\r\n\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #47555c;\n  color: white;\n  text-align: center;\n}\n\n.instagram {\n  cursor: pointer;\n  color: #f13197;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n.youtube {\n  cursor: pointer;\n  color: #dc0505;\n  font-size: 20px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgODUsIDkyKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnN0YWdyYW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDQ5LCAxNTEpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi55b3V0dWJlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjIwLCA1LCA1KTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsImZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU1YztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnN0YWdyYW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZjEzMTk3O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ueW91dHViZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNkYzA1MDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    ngOnInit() {
    }
    externalHandle(link) {
        window.open(link, "_blank");
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
    })
], FooterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");






let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        entryComponents: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
    })
], FooterModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");











const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]
    }
];
let PerfilPageModule = class PerfilPageModule {
};
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



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: flex;\n  margin: 15px 25px;\n  align-self: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.img {\n  border-radius: 30%;\n}\n\n.text {\n  text-align: center;\n  color: white;\n}\n\n@media only screen and (max-width: 599px) {\n  img {\n    max-width: 200px;\n    max-height: 200px;\n  }\n\n  .response {\n    width: 200px;\n    height: 200px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .response {\n    width: 400px;\n    height: 400px;\n  }\n\n  .border {\n    width: 600px;\n  }\n}\n\n.border {\n  border-radius: 23px;\n  max-width: 750px;\n  margin: auto;\n  background-color: rgba(0, 2, 10, 0.801) !important;\n}\n\n.limiter {\n  max-width: 600px;\n  margin: auto;\n}\n\n.aviso {\n  color: #ff7070;\n  font-size: 12px;\n  text-align: center;\n}\n\nion-content {\n  --background: none;\n}\n\n.response {\n  align-self: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDQ0Y7O0VERUE7SUFDRSxZQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTVweCAyNXB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLnJlc3BvbnNlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLnJlc3BvbnNlIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgbWF4LXdpZHRoOiA3NTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyLCAxMCwgMC44MDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saW1pdGVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmF2aXNvIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMTEyLCAxMTIpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5yZXNwb25zZSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNXB4IDI1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5yZXNwb25zZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnJlc3BvbnNlIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIC5ib3JkZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufVxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyLCAxMCwgMC44MDEpICFpbXBvcnRhbnQ7XG59XG5cbi5saW1pdGVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXZpc28ge1xuICBjb2xvcjogI2ZmNzA3MDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ucmVzcG9uc2Uge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");








let PerfilPage = class PerfilPage {
    constructor(router, menu, storage, userService, toast, plataform, fundoService) {
        this.router = router;
        this.menu = menu;
        this.storage = storage;
        this.userService = userService;
        this.toast = toast;
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.imgURL = '';
        this.loading = false;
        this.img = "";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.plataform.ready()
                .then(() => {
                if (this.plataform.width() <= 700)
                    this.fundoService.setCurrentPlataform('mobile');
                else
                    this.fundoService.setCurrentPlataform('pc');
                this.img = this.fundoService.changeImg();
            });
        });
    }
    ionViewWillEnter() {
        this.loading = true;
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.userService.findByEmail(localUser.email)
                .subscribe(res => {
                this.loading = false;
                // console.log(res)
                this.user = res;
                this.imgURL = res.imgURL || 'assets/imgs/avatar-blank.png';
                //buscar imagem;
            }, error => {
                if (error.status == 403) {
                    this.loading = false;
                    this.router.navigateByUrl('login');
                }
            });
        }
        else {
            this.loading = false;
            this.router.navigateByUrl('login');
        }
    }
    atualizar() {
        this.loading = true;
        const dto = {
            id: this.user.id,
            imgURL: this.imgURL
        };
        this.userService.updateImgUser(dto)
            .subscribe(res => {
            this.loading = false;
            this.callToast('success', 'Atualizado', 'Imagem de perfil atualizada');
        }, error => {
            this.loading = false;
        });
    }
    callToast(severity, summary, detail) {
        this.toast.clear();
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_7__["FundoService"] }
];
PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: __webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html"),
        styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_7__["FundoService"]])
], PerfilPage);



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
//# sourceMappingURL=perfil-perfil-module-es2015.js.map