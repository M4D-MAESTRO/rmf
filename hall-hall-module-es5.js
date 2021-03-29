(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hall-hall-module"],{

/***/ "./node_modules/primeng/fesm5/primeng-progressspinner.js":
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-progressspinner.js ***!
  \***************************************************************/
/*! exports provided: ProgressSpinner, ProgressSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinner", function() { return ProgressSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerModule", function() { return ProgressSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProgressSpinner = /** @class */ (function () {
    function ProgressSpinner() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], ProgressSpinner.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], ProgressSpinner.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], ProgressSpinner.prototype, "strokeWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], ProgressSpinner.prototype, "fill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], ProgressSpinner.prototype, "animationDuration", void 0);
    ProgressSpinner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-progressSpinner',
            template: "\n        <div class=\"ui-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\"  role=\"alert\" aria-busy=\"true\">\n            <svg class=\"ui-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"ui-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    "
        })
    ], ProgressSpinner);
    return ProgressSpinner;
}());
var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [ProgressSpinner],
            declarations: [ProgressSpinner]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-progressspinner.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<footer>\r\n    <div>\r\n        <span style=\"margin-top: 1px;\"> © 2021 ReinerX, Todos os Direitos Reservados (v 1.1.0)\r\n        </span>\r\n        <br>\r\n        <fa-icon class=\"instagram\" [icon]=\"['fab', 'instagram']\" (click)=\"externalHandle('https://www.instagram.com/rmf_rpg/')\"></fa-icon>\r\n        <fa-icon class=\"youtube\" [icon]=\"['fab', 'youtube']\" (click)=\"externalHandle('https://www.youtube.com/channel/UCYMA8YMr1_AMkx-pONmN0Ww')\"></fa-icon>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/load-spinner/load-spinner.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/load-spinner/load-spinner.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-indicator\" *ngIf=\"loading\">\r\n  <p-progressSpinner></p-progressSpinner>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hall/hall.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hall/hall.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"isLogedIn()\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"!isLogedIn()\" (click)=\"goLogin()\">\n      <ion-button color=\"tertiary\" shape=\"round\" fill=\"outline\">\n        <span style=\"font-size: 15px; margin: auto 12px;\">Login</span>\n        <fa-icon style=\"font-size: 20px;\" [icon]=\"['fas', 'sign-in-alt']\" slot=\"end\"></fa-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Hall\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background-color: black;\">\n\n  <ion-grid>\n\n    <div class=\"welcome\">\n      <ion-row id=\"welcome\" class=\"ion-align-items-center\">\n        <ion-col class=\"ion-align-self-center\">\n          <div class=\"\">\n            <h1>{{ tituloInicial }}</h1>\n            <p>{{ msgInicial }}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <br>\n      <br>\n    </div>\n\n    <div id=\"explore\" class=\"explore\">\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col class=\"ion-align-self-center\">\n          <h1>Explore!</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('npc')\">\n            <ion-card class=\"card \">\n              <img src=\"assets/imgs/cultist.png\" />\n              <ion-card-header>\n                <ion-card-title>NPCs</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Com quem você se aventurará?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('faccao')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/squad.png\" />\n              <ion-card-header>\n                <ion-card-title>Facções (clã, guilds)</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Em qual deles confiar?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('missao')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/missao.png\" />\n              <ion-card-header>\n                <ion-card-title>Missões</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Você está apto?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('capitulo')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/capitulo.png\" />\n              <ion-card-header>\n                <ion-card-title>Capitulos</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Próxima página!\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('mapa')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/treasure-map.png\" />\n              <ion-card-header>\n                <ion-card-title>Mapas</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                É um bravo mundo novo!\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('ficha')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/card-pick.png\" />\n              <ion-card-header>\n                <ion-card-title>Modelos de Ficha</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Que tal uma ficha diferente?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('rpg')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/rpg.png\" />\n              <ion-card-header>\n                <ion-card-title>RPGs</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Descubra novos RPGs!\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('ataque')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/i-ataque.png\" />\n              <ion-card-header>\n                <ion-card-title>Equipamentos de ataque</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Como derrotará seu próximo inimigo?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('defesa')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/i-defesa.png\" />\n              <ion-card-header>\n                <ion-card-title>Equipamentos de defesa</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Como você se protegerá agora?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n        <ion-col class=\"ion-align-self-center\">\n          <a (click)=\"nav('utilizavel')\">\n            <ion-card class=\"card\">\n              <img src=\"assets/imgs/i-utilizavel.png\" />\n              <ion-card-header>\n                <ion-card-title>Equipamentos utilizáveis</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                O quê você fará com um desses?\n              </ion-card-content>\n            </ion-card>\n          </a>\n        </ion-col>\n\n      </ion-row>\n      <br>\n    </div>\n\n    <div id=\"contato\" class=\"contato\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col class=\"ion-align-self-center\">\n          <h1>Nos siga ai!</h1>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col class=\"ion-align-self-center\">\n          <div class=\"rede suporte\" (click)=\"goSuporte()\">\n            <fa-icon style=\"font-size: 50px;\" [icon]=\"['fas', 'hands-helping']\" slot=\"end\"></fa-icon>\n            <h3>SUPORTE</h3>\n            <p>Precisando de mais informações, ou entrar em contato?</p>\n          </div>\n        </ion-col>\n        <ion-col class=\"ion-align-self-center\">\n          <div class=\"rede instagram\" (click)=\"externalHandle('https://www.instagram.com/rmf_rpg/')\">\n            <fa-icon style=\"font-size: 50px;\" [icon]=\"['fab', 'instagram']\" slot=\"end\"></fa-icon>\n            <h3>INSTAGRAM</h3>\n            <p>O canal de comunicação mais atualizado do R.M.F!</p>\n          </div>\n        </ion-col>\n        <ion-col class=\"ion-align-self-center\">\n          <div class=\"rede youtube\"\n            (click)=\"externalHandle('https://www.youtube.com/channel/UCYMA8YMr1_AMkx-pONmN0Ww')\">\n            <fa-icon style=\"font-size: 50px;\" [icon]=\"['fab', 'youtube']\" slot=\"end\"></fa-icon>\n            <h3>YOUTUBE</h3>\n            <p>Veja nossos tutoriais e lives de RPG</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <br>\n    </div>\n\n  </ion-grid>\n  <br>\n</ion-content>\n\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\n\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.externalHandle = function (link) {
        window.open(link, "_blank");
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");






var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
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
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/components/utils/load-spinner/load-spinner.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/utils/load-spinner/load-spinner.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Transparent Overlay */\n\n.loading-indicator:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.53);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9sb2FkLXNwaW5uZXIvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxsb2FkLXNwaW5uZXJcXGxvYWQtc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9sb2FkLXNwaW5uZXIvbG9hZC1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBLHdCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL2xvYWQtc3Bpbm5lci9sb2FkLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1pbmRpY2F0b3Ige1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXHJcbi5sb2FkaW5nLWluZGljYXRvcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTMpO1xyXG59XHJcbiIsIi5sb2FkaW5nLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgb3ZlcmZsb3c6IHNob3c7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXG4ubG9hZGluZy1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/utils/load-spinner/load-spinner.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/utils/load-spinner/load-spinner.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerComponent", function() { return LoadSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadSpinnerComponent = /** @class */ (function () {
    function LoadSpinnerComponent() {
        this.loading = false;
    }
    LoadSpinnerComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loading'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadSpinnerComponent.prototype, "loading", void 0);
    LoadSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-spinner',
            template: __webpack_require__(/*! raw-loader!./load-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/load-spinner/load-spinner.component.html"),
            styles: [__webpack_require__(/*! ./load-spinner.component.scss */ "./src/app/components/utils/load-spinner/load-spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadSpinnerComponent);
    return LoadSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/utils/load-spinner/load-spinner.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/utils/load-spinner/load-spinner.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoadSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerModule", function() { return LoadSpinnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/fesm5/primeng-progressspinner.js");
/* harmony import */ var _load_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-spinner.component */ "./src/app/components/utils/load-spinner/load-spinner.component.ts");





var LoadSpinnerModule = /** @class */ (function () {
    function LoadSpinnerModule() {
    }
    LoadSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_load_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadSpinnerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_3__["ProgressSpinnerModule"]
            ],
            bootstrap: [_load_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadSpinnerComponent"]],
            exports: [_load_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadSpinnerComponent"]]
        })
    ], LoadSpinnerModule);
    return LoadSpinnerModule;
}());



/***/ }),

/***/ "./src/app/hall/hall-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/hall/hall-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallPageRoutingModule", function() { return HallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hall_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hall.page */ "./src/app/hall/hall.page.ts");




var routes = [
    {
        path: '',
        component: _hall_page__WEBPACK_IMPORTED_MODULE_3__["HallPage"]
    }
];
var HallPageRoutingModule = /** @class */ (function () {
    function HallPageRoutingModule() {
    }
    HallPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HallPageRoutingModule);
    return HallPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/hall/hall.module.ts":
/*!*************************************!*\
  !*** ./src/app/hall/hall.module.ts ***!
  \*************************************/
/*! exports provided: HallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallPageModule", function() { return HallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _hall_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hall-routing.module */ "./src/app/hall/hall-routing.module.ts");
/* harmony import */ var _hall_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hall.page */ "./src/app/hall/hall.page.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");










var HallPageModule = /** @class */ (function () {
    function HallPageModule() {
    }
    HallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _hall_routing_module__WEBPACK_IMPORTED_MODULE_6__["HallPageRoutingModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_9__["LoadSpinnerModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
            ],
            declarations: [_hall_page__WEBPACK_IMPORTED_MODULE_7__["HallPage"]]
        })
    ], HallPageModule);
    return HallPageModule;
}());



/***/ }),

/***/ "./src/app/hall/hall.page.scss":
/*!*************************************!*\
  !*** ./src/app/hall/hall.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  text-align: center;\n  color: white;\n  border-radius: 5px;\n  background-color: rgba(0, 2, 10, 0.801);\n}\n\n.explore {\n  text-align: center;\n  color: white;\n  border-radius: 5px;\n  background-color: rgba(37, 23, 33, 0.801);\n}\n\n.card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.card:hover {\n  cursor: pointer;\n  background: rgba(65, 65, 65, 0.801);\n}\n\n.card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  /* Animation */\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n.card img:hover {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n}\n\n@-webkit-keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\n.contato {\n  text-align: center;\n  color: white;\n  border-radius: 5px;\n  background-color: #131712;\n}\n\n.rede {\n  max-width: 250px;\n  max-height: 300px;\n  height: 300px;\n  margin: auto;\n}\n\n.instagram {\n  border: 5px inset #f13197;\n  border-radius: 5px;\n}\n\n.instagram:hover {\n  cursor: pointer;\n  color: #f13197;\n}\n\n.youtube {\n  border: 5px inset #dc0505;\n  border-radius: 5px;\n}\n\n.youtube:hover {\n  cursor: pointer;\n  color: #dc0505;\n}\n\n.suporte {\n  border: 5px inset #f47f06;\n  border-radius: 5px;\n}\n\n.suporte:hover {\n  cursor: pointer;\n  color: #f47f06;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFsbC9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcaGFsbFxcaGFsbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hhbGwvaGFsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHVDQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHlDQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLGtCQUFBO0VBRUEsd0VBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsbUNBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFBNEIsY0FBQTtFQUM1QixpQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0FDSEo7O0FETUE7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQXVCLHFGQUFBO0FDRjNCOztBREtBO0VBQ0k7SUFDSSwyQkFBQTtFQ0ZOO0VESUU7SUFDSSw2QkFBQTtFQ0ZOO0VESUU7SUFDSSwyQkFBQTtFQ0ZOO0FBQ0Y7O0FEUEE7RUFDSTtJQUNJLDJCQUFBO0VDRk47RURJRTtJQUNJLDZCQUFBO0VDRk47RURJRTtJQUNJLDJCQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJLGdDQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUNJLFNBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2hhbGwvaGFsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvL2JvcmRlcjogNXB4IGluc2V0ICMzZDBjNDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbn1cclxuXHJcbi5leHBsb3JlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIzLCAzMywgMC44MDEpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlZGdyYWRpZW50IDNzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY1LCA2NSwgNjUsIDAuODAxKTtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzOyAvKiBBbmltYXRpb24gKi9cclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbn1cclxuXHJcbi5jYXJkIGltZzpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZWRncmFkaWVudCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbn1cclxuXHJcbi5jb250YXRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE3MTI7XHJcbn1cclxuXHJcbi5yZWRlIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbnN0YWdyYW0ge1xyXG4gICAgYm9yZGVyOiA1cHggaW5zZXQgcmdiKDI0MSwgNDksIDE1MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbnN0YWdyYW06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDQ5LCAxNTEpO1xyXG59XHJcblxyXG4ueW91dHViZSB7XHJcbiAgICBib3JkZXI6IDVweCBpbnNldCByZ2IoMjIwLCA1LCA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnlvdXR1YmU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigyMjAsIDUsIDUpO1xyXG59XHJcblxyXG4uc3Vwb3J0ZSB7XHJcbiAgICBib3JkZXI6IDVweCBpbnNldCByZ2IoMjQ0LCAxMjcsIDYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3Vwb3J0ZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI0NCwgMTI3LCA2KTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuIiwiLndlbGNvbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XG59XG5cbi5leHBsb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMjMsIDMzLCAwLjgwMSk7XG59XG5cbi5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjUsIDY1LCA2NSwgMC44MDEpO1xufVxuXG4uY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgLyogQW5pbWF0aW9uICovXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xufVxuXG4uY2FyZCBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZWRncmFkaWVudCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XG59XG5cbi5jb250YXRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTcxMjtcbn1cblxuLnJlZGUge1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW5zdGFncmFtIHtcbiAgYm9yZGVyOiA1cHggaW5zZXQgI2YxMzE5NztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5zdGFncmFtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2YxMzE5Nztcbn1cblxuLnlvdXR1YmUge1xuICBib3JkZXI6IDVweCBpbnNldCAjZGMwNTA1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi55b3V0dWJlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2RjMDUwNTtcbn1cblxuLnN1cG9ydGUge1xuICBib3JkZXI6IDVweCBpbnNldCAjZjQ3ZjA2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdXBvcnRlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2Y0N2YwNjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hall/hall.page.ts":
/*!***********************************!*\
  !*** ./src/app/hall/hall.page.ts ***!
  \***********************************/
/*! exports provided: HallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallPage", function() { return HallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");






var HallPage = /** @class */ (function () {
    function HallPage(auth, router, authService, storage, user) {
        this.auth = auth;
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.user = user;
        this.msgInicial = '';
        this.tituloInicial = '';
        this.loading = true;
    }
    HallPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkRefresh()];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HallPage.prototype.ionViewWillEnter = function () {
        if (this.auth.isLogedIn()) {
            this.tituloInicial = 'Bem vindo ao Hall!';
            this.msgInicial = 'Aqui você poderá explorar diversas novidades no RMF e até no mundo do RPG';
        }
        else {
            this.tituloInicial = 'Bem vindo ao RMF';
            this.msgInicial = 'O RMF é um framework que te permite criar e gerenciar seus próprios RPGs e mesas de RPGs, com o seu próprio conteúdo personalizado e totalmente gratuito! Vamos conhecer novos NPCs, equipamentos, mundos, estórias e conteúdos';
        }
    };
    HallPage.prototype.checkRefresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loading = true;
                this.authService.refreshToken()
                    .subscribe(function (res) {
                    _this.loading = false;
                    _this.authService.loginSucesso(res.headers.get('Authorization'));
                    _this.regainId();
                }, function (error) {
                    _this.authService.logout();
                    _this.loading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    HallPage.prototype.regainId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var localUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localUser = this.storage.getLocalUser();
                this.user.findByEmail(localUser.email)
                    .subscribe(function (res) {
                    _this.storage.setLocalUserId(res.id);
                });
                return [2 /*return*/];
            });
        });
    };
    HallPage.prototype.isLogedIn = function () {
        return this.auth.isLogedIn();
    };
    HallPage.prototype.goLogin = function () {
        this.router.navigateByUrl('login');
    };
    HallPage.prototype.goSuporte = function () {
        this.router.navigateByUrl('suporte');
    };
    HallPage.prototype.nav = function (option) {
        switch (option) {
            case 'npc':
                this.router.navigateByUrl('explore-npc');
                break;
            case 'faccao':
                this.router.navigateByUrl('explore-faccao');
                break;
            case 'missao':
                this.router.navigateByUrl('explore-missao');
                break;
            case 'capitulo':
                this.router.navigateByUrl('explore-capitulo');
                break;
            case 'mapa':
                this.router.navigateByUrl('explore-mapa');
                break;
            case 'ficha':
                this.router.navigateByUrl('explore-modelo-ficha');
                break;
            case 'rpg':
                this.router.navigateByUrl('explore-rpg');
                break;
            case 'ataque':
                this.router.navigateByUrl('explore-item-ataque');
                break;
            case 'defesa':
                this.router.navigateByUrl('explore-item-defesa');
                break;
            case 'utilizavel':
                this.router.navigateByUrl('explore-item-utilizavel');
                break;
        }
    };
    HallPage.prototype.externalHandle = function (link) {
        window.open(link, "_blank");
    };
    HallPage.ctorParameters = function () { return [
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    HallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hall',
            template: __webpack_require__(/*! raw-loader!./hall.page.html */ "./node_modules/raw-loader/index.js!./src/app/hall/hall.page.html"),
            styles: [__webpack_require__(/*! ./hall.page.scss */ "./src/app/hall/hall.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], HallPage);
    return HallPage;
}());



/***/ })

}]);
//# sourceMappingURL=hall-hall-module-es5.js.map