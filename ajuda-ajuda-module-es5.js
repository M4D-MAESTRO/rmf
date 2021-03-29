(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-ajuda-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ajuda/ajuda.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ajuda/ajuda.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Ajuda\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [style.background-image]=\"'url(' + img + ')'\" [style.background-size]=\"'cover'\"\n  [style.background-repeat]=\"'no-repeat'\">\n\n  <app-help-rpg [hasNext]=\"false\" (prosseguir)=\"monitor($event)\"></app-help-rpg>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajuda/ajuda-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ajuda/ajuda-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AjudaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPageRoutingModule", function() { return AjudaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ajuda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajuda.page */ "./src/app/ajuda/ajuda.page.ts");




var routes = [
    {
        path: '',
        component: _ajuda_page__WEBPACK_IMPORTED_MODULE_3__["AjudaPage"]
    }
];
var AjudaPageRoutingModule = /** @class */ (function () {
    function AjudaPageRoutingModule() {
    }
    AjudaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AjudaPageRoutingModule);
    return AjudaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/ajuda/ajuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.module.ts ***!
  \***************************************/
/*! exports provided: AjudaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPageModule", function() { return AjudaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajuda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajuda-routing.module */ "./src/app/ajuda/ajuda-routing.module.ts");
/* harmony import */ var _ajuda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajuda.page */ "./src/app/ajuda/ajuda.page.ts");
/* harmony import */ var _components_criacoes_help_rpg_help_rpg_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/help-rpg/help-rpg.module */ "./src/app/components/criacoes/help-rpg/help-rpg.module.ts");








var AjudaPageModule = /** @class */ (function () {
    function AjudaPageModule() {
    }
    AjudaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ajuda_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjudaPageRoutingModule"],
                _components_criacoes_help_rpg_help_rpg_module__WEBPACK_IMPORTED_MODULE_7__["HelpRpgModule"]
            ],
            declarations: [_ajuda_page__WEBPACK_IMPORTED_MODULE_6__["AjudaPage"]]
        })
    ], AjudaPageModule);
    return AjudaPageModule;
}());



/***/ }),

/***/ "./src/app/ajuda/ajuda.page.scss":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWp1ZGEvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGFqdWRhXFxhanVkYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FqdWRhL2FqdWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hanVkYS9hanVkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/ajuda/ajuda.page.ts":
/*!*************************************!*\
  !*** ./src/app/ajuda/ajuda.page.ts ***!
  \*************************************/
/*! exports provided: AjudaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPage", function() { return AjudaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");




var AjudaPage = /** @class */ (function () {
    function AjudaPage(plataform, fundoService) {
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.img = '';
    }
    AjudaPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plataform.ready()
                            .then(function () {
                            if (_this.plataform.width() <= 700)
                                _this.fundoService.setCurrentPlataform('mobile');
                            else
                                _this.fundoService.setCurrentPlataform('pc');
                            _this.img = _this.fundoService.changeImg();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AjudaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__["FundoService"] }
    ]; };
    AjudaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajuda',
            template: __webpack_require__(/*! raw-loader!./ajuda.page.html */ "./node_modules/raw-loader/index.js!./src/app/ajuda/ajuda.page.html"),
            styles: [__webpack_require__(/*! ./ajuda.page.scss */ "./src/app/ajuda/ajuda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_3__["FundoService"]])
    ], AjudaPage);
    return AjudaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajuda-ajuda-module-es5.js.map