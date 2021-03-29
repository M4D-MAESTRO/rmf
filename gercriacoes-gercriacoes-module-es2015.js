(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gercriacoes-gercriacoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<footer>\r\n    <div>\r\n        <span style=\"margin-top: 1px;\"> © 2021 ReinerX, Todos os Direitos Reservados (v 1.1.0)\r\n        </span>\r\n        <br>\r\n        <fa-icon class=\"instagram\" [icon]=\"['fab', 'instagram']\" (click)=\"externalHandle('https://www.instagram.com/rmf_rpg/')\"></fa-icon>\r\n        <fa-icon class=\"youtube\" [icon]=\"['fab', 'youtube']\" (click)=\"externalHandle('https://www.youtube.com/channel/UCYMA8YMr1_AMkx-pONmN0Ww')\"></fa-icon>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gercriacoes/gercriacoes.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gercriacoes/gercriacoes.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerencia de criações\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content\r\n[style.background-image]=\"'url(' + img + ')'\" \r\n[style.background-size]=\"'cover'\" \r\n[style.background-repeat]=\"'no-repeat'\"\r\n>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('9')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/dice.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Ajuda</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Obtenha ajuda para entender o RMF\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('8')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/rpg.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar RPGs</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Crie novos RPGs!\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('4')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/card-pick.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar Modelos de Ficha</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie ou crie novos modelos de ficha!\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('2')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/cultist.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar NPCs</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie os NPCs criados por você, ou, crie novos!\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('7')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/squad.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar Facções</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie ou crie novas facções\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('3')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/battle-gear.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar Equipamentos</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie ou crie novos equipamentos!\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('5')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/missao.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar Missões</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie ou crie novas missões\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('6')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/capitulo.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar Capitulos</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie ou crie novos capitulos da sua história!\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"4\" size-xs=\"12\">\r\n        <a (click)=\"nav('1')\">\r\n          <ion-card class=\"gerenciador\">\r\n            <img src=\"assets/imgs/treasure-map.png\" />\r\n            <ion-card-header>\r\n              <ion-card-title>Gerenciar Mapas</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              Gerencie seus mapas, ou, crie novos!\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <br><br>\r\n</ion-content>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #47555c;\n  color: white;\n  text-align: center;\n}\n\n.instagram {\n  cursor: pointer;\n  color: #f13197;\n  font-size: 23px;\n}\n\n.youtube {\n  cursor: pointer;\n  color: #dc0505;\n  font-size: 23px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDg1LCA5Mik7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5zdGFncmFtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCA0OSwgMTUxKTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLnlvdXR1YmUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigyMjAsIDUsIDUpO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTVjO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluc3RhZ3JhbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmMTMxOTc7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLnlvdXR1YmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZGMwNTA1O1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

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

/***/ "./src/app/gercriacoes/gercriacoes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gercriacoes/gercriacoes.module.ts ***!
  \***************************************************/
/*! exports provided: GercriacoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GercriacoesPageModule", function() { return GercriacoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gercriacoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gercriacoes.page */ "./src/app/gercriacoes/gercriacoes.page.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");









const routes = [
    {
        path: '',
        component: _gercriacoes_page__WEBPACK_IMPORTED_MODULE_6__["GercriacoesPage"]
    }
];
let GercriacoesPageModule = class GercriacoesPageModule {
};
GercriacoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__["PaginacaoModule"]
        ],
        declarations: [_gercriacoes_page__WEBPACK_IMPORTED_MODULE_6__["GercriacoesPage"]]
    })
], GercriacoesPageModule);



/***/ }),

/***/ "./src/app/gercriacoes/gercriacoes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/gercriacoes/gercriacoes.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 30vh;\n  overflow: hidden;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.gerenciador {\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n  padding: 2px 20px;\n}\n\n.gerenciador img {\n  min-width: 30%;\n  min-height: 50%;\n  max-width: 40%;\n  max-height: 60%;\n  padding: 5px 20px;\n  margin-left: 30%;\n}\n\nion-icon {\n  margin-right: 20px;\n}\n\nion-content {\n  --background: none;\n}\n\nion-card {\n  --background: rgb(18, 53, 59);\n  --color: rgb(226, 226, 226);\n}\n\nion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\nion-card:hover {\n  --background: rgb(68, 166, 184);\n  --color: rgba(29, 29, 29, 0.28);\n}\n\nion-card-title:hover {\n  --color: rgba(29, 29, 29, 0.28);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VyY3JpYWNvZXMvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGdlcmNyaWFjb2VzXFxnZXJjcmlhY29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlcmNyaWFjb2VzL2dlcmNyaWFjb2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsMkJBQUE7QUNERjs7QURJQTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNERjs7QURJQTtFQUNFLCtCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9nZXJjcmlhY29lcy9nZXJjcmlhY29lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ2VyZW5jaWFkb3Ige1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnB4IDIwcHg7XHJcbn1cclxuXHJcbi5nZXJlbmNpYWRvciBpbWcge1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwJTtcclxuXHJcbiAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgbWF4LWhlaWdodDogNjAlO1xyXG5cclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTgsIDUzLCA1OSk7XHJcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG59XHJcblxyXG5pb24tY2FyZDpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNjgsIDE2NiwgMTg0KTtcclxuICAtLWNvbG9yOiByZ2JhKDI5LCAyOSwgMjksIDAuMjgpO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZTpob3ZlciB7XHJcbiAgLS1jb2xvcjogcmdiYSgyOSwgMjksIDI5LCAwLjI4KTtcclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdlcmVuY2lhZG9yIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMjBweDtcbn1cblxuLmdlcmVuY2lhZG9yIGltZyB7XG4gIG1pbi13aWR0aDogMzAlO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNDAlO1xuICBtYXgtaGVpZ2h0OiA2MCU7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG5pb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTgsIDUzLCA1OSk7XG4gIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNjgsIDE2NiwgMTg0KTtcbiAgLS1jb2xvcjogcmdiYSgyOSwgMjksIDI5LCAwLjI4KTtcbn1cblxuaW9uLWNhcmQtdGl0bGU6aG92ZXIge1xuICAtLWNvbG9yOiByZ2JhKDI5LCAyOSwgMjksIDAuMjgpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gercriacoes/gercriacoes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/gercriacoes/gercriacoes.page.ts ***!
  \*************************************************/
/*! exports provided: GercriacoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GercriacoesPage", function() { return GercriacoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");
/* harmony import */ var _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");






let GercriacoesPage = class GercriacoesPage {
    constructor(router, menu, paginaService, plataform, fundoService) {
        this.router = router;
        this.menu = menu;
        this.paginaService = paginaService;
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.img = '';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.paginaService.setInternalLoad(false);
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
    nav(opcao) {
        switch (opcao) {
            case '1':
                this.router.navigateByUrl('germapas');
                break;
            case '2':
                this.router.navigateByUrl('gerinimigos');
                break;
            case '3':
                this.router.navigateByUrl('gerequipamentos');
                break;
            case '4':
                this.router.navigateByUrl('fichamodelo');
                break;
            case '5':
                this.router.navigateByUrl('germissoes');
                break;
            case '6':
                this.router.navigateByUrl('gercapitulos');
                break;
            case '7':
                this.router.navigateByUrl('gerfaccoes');
                break;
            case '8':
                this.router.navigateByUrl('gerrpg');
                break;
            case '9':
                this.router.navigateByUrl('ajuda');
                break;
        }
    }
};
GercriacoesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_4__["FundoService"] }
];
GercriacoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gercriacoes',
        template: __webpack_require__(/*! raw-loader!./gercriacoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/gercriacoes/gercriacoes.page.html"),
        styles: [__webpack_require__(/*! ./gercriacoes.page.scss */ "./src/app/gercriacoes/gercriacoes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_4__["FundoService"]])
], GercriacoesPage);



/***/ })

}]);
//# sourceMappingURL=gercriacoes-gercriacoes-module-es2015.js.map