(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ficha-ficha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ficha/ficha.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ficha/ficha.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"changeText\" (click)=\"refresh()\">\r\n        <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Jogando\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment [color]=\"getColor(info)\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 300px;\" value=\"info\">\r\n      <img class=\"icone\" src=\"assets/imgs/rpg.png\" alt=\"Informações\">\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 300px;\" value=\"missoes\">\r\n      <img class=\"icone\" src=\"assets/imgs/capitulo.png\" alt=\"missoes\">\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 300px;\" value=\"ficha\">\r\n      <img class=\"icone\" src=\"assets/imgs/card-pick.png\" alt=\"ficha\">\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'info'\">\r\n    <div class=\"p-grid p-justify-center p-align-center\">\r\n      <p-card class=\"p-col-align-center container\" styleClass=\"ui-card-shadow\">\r\n        <p-header>\r\n          <span class=\"titulo\" style=\"margin-left: 5px;\">{{ info?.nomeRpg }}</span>\r\n        </p-header>\r\n        <span> {{ info?.descricaoRpg }} </span>\r\n      </p-card>\r\n      <div class=\"p-col-12\"></div>\r\n      <p-card class=\" p-col-align-center container\" styleClass=\"ui-card-shadow\">\r\n        <p-header>\r\n          <span class=\"titulo\" style=\"margin-left: 5px;\">História</span>\r\n        </p-header>\r\n        <span> {{ info?.historiaRpg }} </span>\r\n      </p-card>\r\n      <div class=\"p-col-12\"></div>\r\n      <p-card class=\"p-col-align-center container\" styleClass=\"ui-card-shadow\">\r\n        <p-header>\r\n          <span class=\"titulo\" style=\"margin-left: 5px;\">Mestre</span>\r\n        </p-header>\r\n        <span> {{ info?.mestre.apelido }} - {{ info?.mestre.id }} </span>\r\n      </p-card>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'missoes'\">\r\n    <ion-item>\r\n      <ion-label>Capítulo</ion-label>\r\n      <ion-select (ionChange)=\"attMissoes($event)\" placeholder=\"Selecione\">\r\n        <ion-select-option  *ngFor=\"let capitulo of capitulos\" [value]=\"capitulo.idCapitulo\"> {{ capitulo.numCapitulo }}\r\n          - {{capitulo.titulo}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <p-carousel [value]=\"missoes\">\r\n      <p-header>\r\n        <h3>Missão</h3>\r\n      </p-header>\r\n      <ng-template let-missao pTemplate=\"panel\">\r\n        <div class=\"card\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Nome</ion-label>\r\n                <ion-input disabled class=\"input\" type=\"text\" color=\"Dark\" [value]=\"missao?.nome\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Descrição:</ion-label>\r\n                <ion-textarea type=\"text-area\" disabled color=\"Dark\" [value]=\"missao?.descricao\"></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Localização</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" disabled color=\"Dark\" [value]=\"missao?.localizacao\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Recompensas:</ion-label>\r\n                <ion-textarea type=\"text-area\" disabled color=\"Dark\" [value]=\"getRecompensas(missao?.recompensas)\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Tipo de Missão</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" disabled color=\"Dark\" [value]=\"missao?.tipoMissao\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Status da Missão</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" disabled color=\"Dark\" [value]=\"getStatusMissao(missao?.statusMissao)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ng-template>\r\n    </p-carousel>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'ficha'\">\r\n    <app-ficha [idFicha]=\"ficha\"></app-ficha>\r\n  </ng-container>\r\n</ion-content>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ficha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ficha.page */ "./src/app/ficha/ficha.page.ts");
/* harmony import */ var _components_ficha_fichas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");











const routes = [
    {
        path: '',
        component: _ficha_page__WEBPACK_IMPORTED_MODULE_6__["FichaPage"]
    }
];
let FichaPageModule = class FichaPageModule {
};
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
            primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"]
        ],
        declarations: [_ficha_page__WEBPACK_IMPORTED_MODULE_6__["FichaPage"]]
    })
], FichaPageModule);



/***/ }),

/***/ "./src/app/ficha/ficha.page.scss":
/*!***************************************!*\
  !*** ./src/app/ficha/ficha.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icone {\n  max-width: 100px;\n  max-height: 50px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.container {\n  margin-top: 30px;\n  margin-left: 10px;\n  border-color: #353535;\n  border: 1px solid #b3c2ca;\n  border-radius: 3px;\n  margin: 0.3em;\n  text-align: center;\n  padding: 2em 0 2.25em 0;\n  max-width: 600px;\n}\n\n.p-grid {\n  margin-top: 50px;\n}\n\n@media only screen and (max-width: 500px) {\n  .container {\n    max-width: 360px;\n  }\n}\n\n.titulo {\n  font-family: \"Montserrat\";\n  text-align: center;\n  color: black;\n  height: 100vh;\n  font-size: 1.5em;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmljaGEvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGZpY2hhXFxmaWNoYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpY2hhL2ZpY2hhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0UsZ0JBQUE7RUNDSjtBQUNGOztBREVFO0VBQ0UseUJBQUE7RUFDSCxrQkFBQTtFQUNBLFlBQUE7RUFDRyxhQUFBO0VBQ0EsZ0JBQUE7RUFDSCxtQkFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvZmljaGEvZmljaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25lIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDUzLCA1MywgNTMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbSAwIDIuMjVlbSAwO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5wLWdyaWR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXR1bG97XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH0iLCIuaWNvbmUge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogIzM1MzUzNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYzJjYTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDAuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJlbSAwIDIuMjVlbSAwO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4ucC1ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICB9XG59XG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var _services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FichaPage = class FichaPage {
    constructor(mesaService, fichaService, storageService, router) {
        this.mesaService = mesaService;
        this.fichaService = fichaService;
        this.storageService = storageService;
        this.router = router;
        this.abaAtual = 'info';
        this.loading = true;
    }
    ngOnInit() {
        this.abaAtual = 'info';
        this.loadContent();
    }
    loadContent() {
        const { idMesa } = this.storageService.getSelectedMesa();
        this.mesaService.findMesaInicial2(idMesa)
            .subscribe(res => {
            const { nomeRpg, descricaoRpg, historiaRpg, mestre, jogadores, idMesa } = res;
            this.info = {
                nomeRpg,
                descricaoRpg,
                historiaRpg,
                mestre,
                jogadores,
                idMesa
            };
            this.loadOthers();
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
            this.router.navigateByUrl('perfil');
        });
    }
    refresh() {
        this.abaAtual = 'info';
        this.missoes = null;
        this.loadContent();
    }
    mudaAba(event) {
        if (event.detail.value == 'info') {
            this.missoes = null;
        }
    }
    getColor(aba) {
        if (aba == this.abaAtual) {
            return 'success';
        }
        else {
            return "warning";
        }
    }
    getRecompensas(recompensas) {
        if (recompensas) {
            const recompensa = recompensas.join(', ');
            return recompensa;
        }
    }
    attMissoes(event) {
        const selected = event.detail.value;
        const achado = this.capitulos.find(({ idCapitulo }) => idCapitulo == selected).missoes;
        if (achado) {
            this.missoes = achado.filter(missao => {
                if (missao['statusMissao'] == "EM_ANDAMENTO" || missao['statusMissao'] == "COMPLETADA" || missao['statusMissao'] == "FRACASSADA") {
                    return missao;
                }
            });
            this.missoes = this.missoes.map(m => {
                if (m.statusMissao == "EM_ANDAMENTO") {
                    m.recompensas = ['BLOQUEADO'];
                }
                return m;
            });
        }
        else {
            this.missoes = null;
        }
    }
    getStatusMissao(status) {
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
    }
    loadOthers() {
        this.mesaService.findMesa(this.info.idMesa)
            .subscribe(res => {
            this.capitulos = res.sistema.capitulos;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
        this.fichaService.findFichaByMesaAndJogador(this.storageService.getLocalUserId(), this.info.idMesa)
            .subscribe(res => {
            //console.log('entrou')
            //console.log(this.storageService.getLocalUserId(), this.info.idMesa);
            this.ficha = res.idFicha;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
};
FichaPage.ctorParameters = () => [
    { type: _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"] },
    { type: _services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__["FichaService"] },
    { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
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



/***/ })

}]);
//# sourceMappingURL=ficha-ficha-module-es2015.js.map