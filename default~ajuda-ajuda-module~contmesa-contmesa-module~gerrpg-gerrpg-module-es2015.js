(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ajuda-ajuda-module~contmesa-contmesa-module~gerrpg-gerrpg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/help-rpg/help-rpg.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/help-rpg/help-rpg.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid card\">\r\n  <div class=\"p-col-12\">\r\n    <ng-container>\r\n      <ion-card>\r\n        <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-segment-button value=\"parte1\">\r\n            <ion-label style=\"font-size: 1em\">Ajuda</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte2\">\r\n            <ion-label style=\"font-size: 1em\">Regras</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte3\">\r\n            <ion-label style=\"font-size: 1em\">NPCs</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-segment-button value=\"parte4\">\r\n            <ion-label style=\"font-size: 1em\">Faccções</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte5\">\r\n            <ion-label style=\"font-size: 1em\">Capítulos</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte6\">\r\n            <ion-label style=\"font-size: 1em\">Mapas</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-segment-button value=\"parte7\">\r\n            <ion-label style=\"font-size: 1em\">Modelo de Ficha</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte1'\">\r\n          <img class=\"cover\" src=\"assets/imgs/dice.png\" style=\"text-align: center;\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Ajuda & Informações básicas</ion-card-subtitle>\r\n            <ion-card-title>Criação de RPG</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Seja bem vindo à criação de RPG. Aqui você poderá criar um RPG totalmente personalizado!<br>\r\n            Seu próprio modelo de ficha, suas próprias regras, suas próprias facções, NPCs e até capitulos de sua\r\n            história!<br>\r\n            O tempo médio de criação é de 30 minutos, portanto, só comece a criar um RPG se estiver realmente com\r\n            tempo.<br>\r\n            O tempo de criação pode ser reduzido em 50% se você já tiver criado seu modelo de ficha, facções, capitulos\r\n            e NPCs com antecedência.<br>\r\n            Você poderá adicionar ou remover conteúdos mais tarde também. Porém o modelo de ficha\r\n            <strong>JAMAIS</strong> poderá ser alterado.\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte2'\">\r\n          <img class=\"cover\" src=\"assets/imgs/rpg.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Regras</ion-card-subtitle>\r\n            <ion-card-title>Preste atenção</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            O RMF não é um gerenciador de RPG do sistema X, Y ou Z. O RMF é o gerenciador do SEU RPG!<br>\r\n            Portanto, na última etapa de criação do RPG, você poderá criar quantas regras você quiser para o seu RPG.\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte3'\">\r\n          <img class=\"cover\" src=\"assets/imgs/overlord-helm.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>NPCs</ion-card-subtitle>\r\n            <ion-card-title>Aliados, Neutros ou Inimigos?</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você poderá adicionar os NPCs em seu RPG sob uma categoria:<br>\r\n            Aliado, neutro, inimigo.<br>\r\n            Você pode adicionar quantos NPCs você quiser!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte4'\">\r\n          <img class=\"cover\" src=\"assets/imgs/squad.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Faccções</ion-card-subtitle>\r\n            <ion-card-title>Boas, Neutras ou Hostis?</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você poderá adicionar facções também, sob uma categoria:<br>\r\n            Boas, neutras, hostis.<br>\r\n            Você pode adicionar quantos facções você quiser!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte5'\">\r\n          <img class=\"cover\" src=\"assets/imgs/capitulo.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Capítulos</ion-card-subtitle>\r\n            <ion-card-title>Organize sua mesa, missões e história!</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você poderá adicionar capitulos em seu RPG!<br>\r\n            Cada capitulo possui uma lista de missões, além de outras informações adicionais<br>\r\n            <strong>OBSERVAÇÃO:</strong> Você poderá criar seus capítulos aqui, caso não tenha feito ainda.<br>\r\n            Porém! Não conseguirá criar missões. Caso não tenha criado as missões, <span>CLIQUE AQUI</span>.\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte6'\">\r\n          <img class=\"cover\" src=\"assets/imgs/treasure-map.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Mapas</ion-card-subtitle>\r\n            <ion-card-title>Adicione mapas e grids!</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você pode adicionar um mapa ou grid ao seu RPG! Basta ter a URL (link) da imagem!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte7'\">\r\n          <img class=\"cover\" src=\"assets/imgs/missao.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Modelo de Ficha</ion-card-subtitle>\r\n            <ion-card-title>O seu RPG!</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            O principal motivo pelo qual este é o SEU RPG!<br>\r\n            Adicione o seu próprio e personalizado modelo de ficha<br>\r\n            Todos os jogadores que entrarem nesse RPG, usarão o mesmo modelo PADRONIZADO e totalmente digital!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n      </ion-card>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ion-footer *ngIf=\"hasNext\">\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" \r\n    type=\"submit\" color=\"primary\" (click)=\"proximo()\">Prosseguir</ion-button>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/components/criacoes/help-rpg/help-rpg.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/help-rpg/help-rpg.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover {\n  width: 200px;\n  height: 200px;\n  text-align: center;\n  margin-left: 40%;\n  margin-top: 10px;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 640px) {\n  .cover {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9oZWxwLXJwZy9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGhlbHAtcnBnXFxoZWxwLXJwZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9oZWxwLXJwZy9oZWxwLXJwZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFO0lBQ0UsY0FBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL2hlbHAtcnBnL2hlbHAtcnBnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVyIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5jb3ZlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH0iLCIuY292ZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY292ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/help-rpg/help-rpg.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/criacoes/help-rpg/help-rpg.component.ts ***!
  \********************************************************************/
/*! exports provided: HelpRpgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpRpgComponent", function() { return HelpRpgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpRpgComponent = class HelpRpgComponent {
    constructor() {
        this.prosseguir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasNext = true;
        this.abaAtual = 'parte1';
    }
    proximo() {
        this.prosseguir.emit('PRÓXIMO!');
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('prosseguir'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], HelpRpgComponent.prototype, "prosseguir", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], HelpRpgComponent.prototype, "hasNext", void 0);
HelpRpgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help-rpg',
        template: __webpack_require__(/*! raw-loader!./help-rpg.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/help-rpg/help-rpg.component.html"),
        styles: [__webpack_require__(/*! ./help-rpg.component.scss */ "./src/app/components/criacoes/help-rpg/help-rpg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelpRpgComponent);



/***/ }),

/***/ "./src/app/components/criacoes/help-rpg/help-rpg.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/criacoes/help-rpg/help-rpg.module.ts ***!
  \*****************************************************************/
/*! exports provided: HelpRpgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpRpgModule", function() { return HelpRpgModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _help_rpg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-rpg.component */ "./src/app/components/criacoes/help-rpg/help-rpg.component.ts");






let HelpRpgModule = class HelpRpgModule {
};
HelpRpgModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_help_rpg_component__WEBPACK_IMPORTED_MODULE_5__["HelpRpgComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        exports: [_help_rpg_component__WEBPACK_IMPORTED_MODULE_5__["HelpRpgComponent"]],
        entryComponents: [_help_rpg_component__WEBPACK_IMPORTED_MODULE_5__["HelpRpgComponent"]],
    })
], HelpRpgModule);



/***/ })

}]);
//# sourceMappingURL=default~ajuda-ajuda-module~contmesa-contmesa-module~gerrpg-gerrpg-module-es2015.js.map