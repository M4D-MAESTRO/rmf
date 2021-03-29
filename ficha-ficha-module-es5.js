(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ficha-ficha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ficha/ficha.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ficha/ficha.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"changeText\" (click)=\"refresh()\">\r\n        <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Jogando\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 300px;\" value=\"info\">\r\n      <img class=\"icone\" src=\"assets/imgs/rpg.png\" alt=\"Informações\">\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 300px;\" value=\"missoes\">\r\n      <img class=\"icone\" src=\"assets/imgs/capitulo.png\" alt=\"missoes\">\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 300px;\" value=\"ficha\">\r\n      <img class=\"icone\" src=\"assets/imgs/card-pick.png\" alt=\"ficha\">\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <br>\r\n  <ng-container *ngIf=\"abaAtual == 'info'\">\r\n    <div class=\"thing\">\r\n      <ion-row class=\"ion-justify-content-start \">\r\n        <ion-col class=\"ion-padding-horizontal img \">\r\n          <app-imagem-display [src]=\"info?.imgURL || 'assets/imgs/dice.png'\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p>\r\n            <strong>{{ info?.nomeRpg || 'Nome não preenchido'}}</strong> é um RPG do tipo\r\n            <strong> {{ info?.tipoRPG.replace(\"_RPG\", \"\")}}</strong>, e neste momento está sendo mestrado (administrado)\r\n            por\r\n            <strong>{{ info?.mestre.apelido }}</strong> (<strong>{{ info?.mestre.id }}</strong>)\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p><strong>Descrição: </strong>\r\n            {{info?.descricaoRpg ||'Descrição não preenchida'}}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p><strong>História: </strong>\r\n            {{info?.historiaRpg ||'História não preenchida'}}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p style=\"margin: auto;\">O <strong>modelo de ficha </strong> usada neste RPG é a de identificação:\r\n            <strong>{{info?.idFichaModelo}}</strong>\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <br>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'missoes'\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label color=\"primary\">Selecione o capitulo</ion-label>\r\n            <ion-select value=\"0\" color=\"light\" (ionChange)=\"attMissoes($event)\">\r\n              <ion-select-option *ngFor=\"let capitulo of capitulos\" [value]=\"capitulo.idCapitulo\">{{\r\n                capitulo.numCapitulo }} - {{\r\n                capitulo.titulo }}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n\r\n\r\n      <ng-container class=\"capitulo\" *ngIf=\"selectedCapitulo\">\r\n        <div class=\"conteudo\">\r\n          <br>\r\n          <ion-row class=\"ion-justify-content-center \">\r\n            <ion-col class=\"ion-align-self-center cap-text \">\r\n              <p-carousel *ngIf=\"missoes?.length > 0\" [value]=\"missoes\">\r\n                <p-header>\r\n                  <h3 style=\"color: white;\">Missões</h3>\r\n                </p-header>\r\n                <ng-template let-missao pTemplate=\"panel\">\r\n                  <div class=\"card\">\r\n                    <ion-row class=\"ion-justify-content-start \">\r\n                      <ion-col class=\"ion-padding-horizontal img img-box\">\r\n                        <app-imagem-display [src]=\"missao.imgURL || 'assets/imgs/dice.png'\">\r\n                        </app-imagem-display>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <br>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item color=\"dark\">\r\n                          <ion-label color=\"tertiary\" position=\"floating\">Nome</ion-label>\r\n                          <ion-input color=\"light\" readonly class=\"input\" type=\"text\" [value]=\"missao.nome\">\r\n                          </ion-input>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item color=\"dark\">\r\n                          <ion-label color=\"tertiary\" position=\"floating\">Descrição:</ion-label>\r\n                          <ion-textarea color=\"light\" type=\"text-area\" readonly [value]=\"missao.descricao\">\r\n                          </ion-textarea>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item color=\"dark\">\r\n                          <ion-label color=\"tertiary\" position=\"floating\">Localização</ion-label>\r\n                          <ion-input color=\"light\" class=\"input\" type=\"text\" readonly [value]=\"missao.localizacao\">\r\n                          </ion-input>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item color=\"dark\">\r\n                          <ion-label color=\"tertiary\" position=\"floating\">Recompensas:</ion-label>\r\n                          <ion-textarea color=\"light\" type=\"text-area\" readonly\r\n                            [value]=\"getRecompensas(missao.recompensas)\">\r\n                          </ion-textarea>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item color=\"dark\">\r\n                          <ion-label color=\"tertiary\" position=\"floating\">Tipo de Missão</ion-label>\r\n                          <ion-input color=\"light\" class=\"input\" type=\"text\" readonly [value]=\"missao.tipoMissao\">\r\n                          </ion-input>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item color=\"dark\">\r\n                          <ion-label color=\"tertiary\" position=\"floating\">Status da Missão</ion-label>\r\n                          <ion-input color=\"light\" class=\"input\" type=\"text\" readonly\r\n                            [value]=\"getStatusMissao(missao?.statusMissao)\"></ion-input>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                  <br>\r\n                  <br>\r\n                </ng-template>\r\n              </p-carousel>\r\n\r\n              <ng-container *ngIf=\"missoes?.length === 0\">\r\n                <h3 style=\"color:white; text-align: center;\">Apenas missões \"Em andamento\", \"Completas\" ou \"Fracasadas\"\r\n                  irão aparecer</h3>\r\n              </ng-container>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ng-container>\r\n    </ion-grid>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'ficha'\">\r\n    <app-ficha [idFicha]=\"ficha\"></app-ficha>\r\n  </ng-container>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/ficha/ficha.module.ts":
/*!***************************************!*\
  !*** ./src/app/ficha/ficha.module.ts ***!
  \***************************************/
/*! exports provided: FichaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaPageModule", function() { return FichaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ficha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ficha.page */ "./src/app/ficha/ficha.page.ts");
/* harmony import */ var _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm5/primeng-card.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm5/primeng-carousel.js");
/* harmony import */ var _components_imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");













var routes = [
    {
        path: '',
        component: _ficha_page__WEBPACK_IMPORTED_MODULE_6__["FichaPage"]
    }
];
var FichaPageModule = /** @class */ (function () {
    function FichaPageModule() {
    }
    FichaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_7__["FichasModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_8__["LoadSpinnerModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
                _components_imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_11__["ImagemDisplayModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"]
            ],
            declarations: [_ficha_page__WEBPACK_IMPORTED_MODULE_6__["FichaPage"]]
        })
    ], FichaPageModule);
    return FichaPageModule;
}());



/***/ }),

/***/ "./src/app/ficha/ficha.page.scss":
/*!***************************************!*\
  !*** ./src/app/ficha/ficha.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icone {\n  max-width: 100px;\n  max-height: 50px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.container {\n  margin-top: 30px;\n  margin-left: 10px;\n  border-color: #353535;\n  border: 1px solid #b3c2ca;\n  border-radius: 3px;\n  margin: 0.3em;\n  text-align: center;\n  padding: 2em 0 2.25em 0;\n  max-width: 600px;\n}\n\n.p-grid {\n  margin-top: 50px;\n}\n\n@media only screen and (max-width: 500px) {\n  .container {\n    max-width: 360px;\n  }\n}\n\n.titulo {\n  font-family: \"Montserrat\";\n  text-align: center;\n  color: black;\n  height: 100vh;\n  font-size: 1.5em;\n  letter-spacing: 1px;\n}\n\n.thing {\n  padding: 1rem;\n  width: 95%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: rgba(0, 2, 10, 0.801);\n  border-radius: 0.5rem;\n  margin-left: 10px;\n  border-left: 0 solid #00ff99;\n  -webkit-transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n}\n\n.bakground {\n  background-color: rgba(0, 2, 10, 0.801);\n}\n\n.thing {\n  padding-left: 0.5rem;\n  border-left: 0.5rem solid #00ff99;\n}\n\n.thing > :first-child {\n  margin-top: 0;\n}\n\n.thing > :last-child {\n  margin-bottom: 0;\n}\n\n.heading {\n  color: #fff;\n}\n\n.nome {\n  text-align: center;\n  color: white;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  margin-right: 10px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border-radius: 5px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  box-shadow: inset 0 0 20px #000000;\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361);\n  margin-right: 10px;\n  background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361);\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.img-box {\n  height: 400px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmljaGEvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGZpY2hhXFxmaWNoYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpY2hhL2ZpY2hhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZ0JBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSwrRUFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsaUZBQUE7RUFBQSx5RUFBQTtBQ0RGOztBRElBO0VBQ0UsdUNBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQ0EsaUNBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFFQSxrQkFBQTtFQUNBLHNFQUFBO0FDRkY7O0FES0E7RUFDRSxnQ0FBQTtBQ0ZGOztBRE1FO0VBQ0UsMkNBQUE7QUNISjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFFQSxrQkFBQTtFQUNBLHNFQUFBO0FDTkY7O0FEU0E7RUFDRSxxQkFBQTtBQ05GOztBRFNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9maWNoYS9maWNoYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmUge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNTMsIDUzLCA1Myk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYzJjYTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiAwLjNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMmVtIDAgMi4yNWVtIDA7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLnAtZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnRoaW5nIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICBib3JkZXItbGVmdDogMCBzb2xpZCAjMDBmZjk5O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1sZWZ0IDMwMG1zIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5iYWtncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxufVxyXG5cclxuLnRoaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICMwMGZmOTk7XHJcbn1cclxuXHJcbi50aGluZyA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnRoaW5nID4gOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5vbWUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGV1ZG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcblxyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4ICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNTMzYzI0LCAjNmQzNjJjLCAjNjYzMDNlLCAjNWQ0MzYxKTtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzUzM2MyNCwgIzZkMzYyYywgIzY2MzAzZSwgIzVkNDM2MSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLmljb25lIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItY29sb3I6ICMzNTM1MzU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwLjNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyZW0gMCAyLjI1ZW0gMDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLnAtZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgfVxufVxuLnRpdHVsbyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi50aGluZyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA5NSU7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgIzAwZmY5OTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctbGVmdCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmJha2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbn1cblxuLnRoaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzAwZmY5OTtcbn1cblxuLnRoaW5nID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRoaW5nID4gOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm9tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xufVxuXG4uY29udGV1ZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNTMzYzI0LCAjNmQzNjJjLCAjNjYzMDNlLCAjNWQ0MzYxKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM1MzNjMjQsICM2ZDM2MmMsICM2NjMwM2UsICM1ZDQzNjEpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltZy1ib3gge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ficha/ficha.page.ts":
/*!*************************************!*\
  !*** ./src/app/ficha/ficha.page.ts ***!
  \*************************************/
/*! exports provided: FichaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaPage", function() { return FichaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var _services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FichaPage = /** @class */ (function () {
    function FichaPage(mesaService, fichaService, storageService, router) {
        this.mesaService = mesaService;
        this.fichaService = fichaService;
        this.storageService = storageService;
        this.router = router;
        this.abaAtual = 'info';
        this.loading = true;
        this.selectedCapitulo = false;
    }
    FichaPage.prototype.ngOnInit = function () {
        this.abaAtual = 'info';
        this.loadContent();
    };
    FichaPage.prototype.loadContent = function () {
        var _this = this;
        this.loading = true;
        var idMesa = this.storageService.getSelectedMesa().idMesa;
        this.mesaService.findMesaInicial2(idMesa)
            .subscribe(function (res) {
            _this.info = res;
            _this.loadOthers();
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
            _this.router.navigateByUrl('perfil');
        });
    };
    FichaPage.prototype.refresh = function () {
        this.abaAtual = 'info';
        this.missoes = null;
        this.loadContent();
    };
    FichaPage.prototype.mudaAba = function (event) {
        this.selectedCapitulo = false;
        if (event.detail.value == 'info') {
            this.missoes = null;
        }
    };
    FichaPage.prototype.getColor = function (aba) {
        if (aba == this.abaAtual) {
            return 'success';
        }
        else {
            return "warning";
        }
    };
    FichaPage.prototype.getRecompensas = function (recompensas) {
        if (recompensas) {
            var recompensa = recompensas.join(', ');
            return recompensa;
        }
    };
    FichaPage.prototype.attMissoes = function (event) {
        this.selectedCapitulo = true;
        var selected = event.detail.value;
        var achado = this.capitulos.find(function (_a) {
            var idCapitulo = _a.idCapitulo;
            return idCapitulo == selected;
        }).missoes;
        if (achado) {
            this.missoes = achado.filter(function (missao) {
                if (missao['statusMissao'] == "EM_ANDAMENTO" || missao['statusMissao'] == "COMPLETADA" || missao['statusMissao'] == "FRACASSADA") {
                    return missao;
                }
            });
            this.missoes = this.missoes.map(function (m) {
                if (m.statusMissao == "EM_ANDAMENTO") {
                    m.recompensas = ['BLOQUEADO'];
                }
                return m;
            });
        }
        else {
            this.missoes = null;
        }
    };
    FichaPage.prototype.getStatusMissao = function (status) {
        switch (status) {
            case 'INCOMPLETA':
                return 'Incompleta';
                break;
            case 'COMPLETADA':
                return 'Completada';
                break;
            case 'FRACASSADA':
                return 'Fracassada';
                break;
            case 'EM_ANDAMENTO':
                return 'Em andamento';
                break;
            default:
                return 0;
        }
    };
    FichaPage.prototype.loadOthers = function () {
        var _this = this;
        this.loading = true;
        this.mesaService.findMesa(this.info.idMesa)
            .subscribe(function (res) {
            _this.capitulos = res.sistema.capitulos;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
        this.fichaService.findFichaByMesaAndJogador(this.storageService.getLocalUserId(), this.info.idMesa)
            .subscribe(function (res) {
            //console.log('entrou')
            //console.log(this.storageService.getLocalUserId(), this.info.idMesa);
            _this.ficha = res.idFicha;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    FichaPage.ctorParameters = function () { return [
        { type: _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"] },
        { type: _services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__["FichaService"] },
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    FichaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ficha-page',
            template: __webpack_require__(/*! raw-loader!./ficha.page.html */ "./node_modules/raw-loader/index.js!./src/app/ficha/ficha.page.html"),
            styles: [__webpack_require__(/*! ./ficha.page.scss */ "./src/app/ficha/ficha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"],
            _services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__["FichaService"],
            _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FichaPage);
    return FichaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ficha-ficha-module-es5.js.map