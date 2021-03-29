(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explorar-explore-capitulo-explore-capitulo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/explorar/capitulo-detail/capitulo-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/explorar/capitulo-detail/capitulo-detail.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\n  <ion-toolbar>\n    <ion-title>\n      Detalhes da Facção\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"capitulo\">\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-start \">\n        <ion-col class=\"ion-padding-horizontal img \">\n          <app-imagem-display [src]=\"capitulo.imgURL || 'assets/imgs/dice.png'\"></app-imagem-display>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center \">\n        <ion-col class=\"ion-align-self-center nome \">\n          <p>\n            Capitulo <strong>{{ capitulo?.numCapitulo || '0'}}</strong> -\n            <strong> {{ capitulo?.titulo || 'Titulo não preenchido'}}</strong>\n          </p>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row class=\"ion-justify-content-center \">\n        <ion-col class=\"ion-align-self-center nome \">\n          <p><strong>História: </strong>\n            {{capitulo?.historia ||'História não preenchida'}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row class=\"ion-justify-content-center \">\n        <ion-col class=\"ion-align-self-center nome \">\n          <p><strong>Resumo do capitulo anterior: </strong>\n            {{capitulo?.resumoCapPassado ||'Resumo não preenchido'}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row class=\"ion-justify-content-center \">\n        <ion-col class=\"ion-align-self-center nome \">\n          <p-carousel *ngIf=\"missoes?.length > 0\" [value]=\"missoes\">\n            <p-header>\n              <h3 style=\"color: white;\">Missões</h3>\n            </p-header>\n            <ng-template let-missao pTemplate=\"panel\">\n              <div class=\"card\">\n                <ion-row>\n                  <ion-col>\n                    <ion-item color=\"dark\">\n                      <ion-label color=\"tertiary\" position=\"floating\">Nome</ion-label>\n                      <ion-input color=\"light\" readonly class=\"input\" type=\"text\" [value]=\"missao.nome\">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item color=\"dark\">\n                      <ion-label color=\"tertiary\" position=\"floating\">Descrição:</ion-label>\n                      <ion-textarea color=\"light\" type=\"text-area\" readonly [value]=\"missao.descricao\">\n                      </ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item color=\"dark\">\n                      <ion-label color=\"tertiary\" position=\"floating\">Localização</ion-label>\n                      <ion-input color=\"light\" class=\"input\" type=\"text\" readonly [value]=\"missao.localizacao\">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item color=\"dark\">\n                      <ion-label color=\"tertiary\" position=\"floating\">Recompensas:</ion-label>\n                      <ion-textarea color=\"light\" type=\"text-area\" readonly\n                        [value]=\"getRecompensas(missao.recompensas)\">\n                      </ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item color=\"dark\">\n                      <ion-label color=\"tertiary\" position=\"floating\">Tipo de Missão</ion-label>\n                      <ion-input color=\"light\" class=\"input\" type=\"text\" readonly [value]=\"missao.tipoMissao\">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ng-template>\n          </p-carousel>\n\n          <ng-container *ngIf=\"missoes?.length === 0\">\n            <h3 style=\"color:white; text-align: center;\">Nenhuma missão cadastrada para este capitulo</h3>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ng-container>\n\n  <ion-footer *ngIf=\"true\">\n    <ion-toolbar>\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/explorar/explore-capitulo/explore-capitulo.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/explorar/explore-capitulo/explore-capitulo.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"hall\"></ion-back-button>\n    </ion-buttons>\n    <!--<ion-buttons slot=\"end\" *ngIf=\"!isLogedIn()\" (click)=\"goLogin()\">\n      <ion-button color=\"light\" shape=\"round\" fill=\"outline\">\n        Login\n        <ion-label style=\"font-size: 2em\" class=\"pi pi-sign-in\"></ion-label>\n      </ion-button>\n    </ion-buttons>-->\n    <ion-title>\n      Explore Capitulos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"mudaAba($event)\">\n    <ion-segment-button style=\"max-width: 200px;\" value=\"news\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-globe\">\n        Novidades\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px;\" value=\"search\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-search\">\n        Pesquise\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid>\n    <ng-container *ngIf=\"abaAtual == 'news'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"detalhar(projecao.id)\">Conhecer</ion-button>\n              <ion-button expand=\"block\" color=\"light\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"abaAtual == 'search'\">\n      <div id=\"search\">\n        <div class=\"search\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-input color=\"light\" type=\"text\" placeholder=\"Vamos lá, só explorar!\" [(ngModel)]=\"descricao\"\n                  [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"pesquisar()\" clearInput></ion-input>\n                <fa-icon style=\"cursor: pointer;\" [icon]=\"['fas', 'search']\" slot=\"end\" (click)=\"pesquisar()\"></fa-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Preferência</ion-label>\n                <ion-select [(ngModel)]=\"orderBy\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"dataCriacao\">Data de Criação</ion-select-option>\n                  <ion-select-option value=\"titulo\">Título</ion-select-option>\n                  <ion-select-option value=\"historia\">História</ion-select-option>\n                  <ion-select-option value=\"resumoCapPassado\">Resumo do capítulo anterior</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Ordenação</ion-label>\n                <ion-select [(ngModel)]=\"direction\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"DESC\">Mais novo</ion-select-option>\n                  <ion-select-option value=\"ASC\">Mais antigo</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <div *ngIf=\"flagSearched\" id=\"pesquisado\" class=\"conteudo\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"detalhar(projecao.id)\">Conhecer</ion-button>\n              <ion-button expand=\"block\" color=\"light\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n\n  </ion-grid>\n\n  <br>\n</ion-content>\n\n<app-footer></app-footer>\n\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>"

/***/ }),

/***/ "./src/app/components/explorar/capitulo-detail/capitulo-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/explorar/capitulo-detail/capitulo-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.img {\n  border-radius: 50%;\n}\n\n.nome {\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  margin-right: 10px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\nion-toolbar {\n  --background: rgb(122, 122, 122);\n}\n\np {\n  overflow-wrap: break-word;\n  white-space: normal;\n  color: white;\n  text-align: center;\n}\n\n.status {\n  margin-top: 10px;\n  color: white !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  text-align: center;\n}\n\n::ng-deep .ui-inputtext {\n  background-color: black !important;\n  color: white !important;\n  text-align: center;\n  margin: auto;\n}\n\n.atributos-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n}\n\n.atributos-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.atributos-details > div img {\n  margin-right: 14px;\n  width: 90px;\n  height: 90px;\n}\n\n.atributos-details {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n  background-color: #1b1b1b;\n  border-radius: 2px;\n}\n\n.atributos-details:hover {\n  background-color: #254645;\n  cursor: pointer;\n}\n\n::ng-deep .ui-dataview {\n  background-color: #050105 !important;\n}\n\n::ng-deep .ui-dataview-header {\n  background-color: #050105 !important;\n  border: none !important;\n  border-bottom: 1px solid #d9dad9 !important;\n}\n\n::ng-deep .ui-paginator {\n  background-color: #050105 !important;\n  border: #050105 !important;\n}\n\n::ng-deep .ui-dataview-content {\n  background-color: #342436 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n::ng-deep .ui-dataview-footer {\n  background-color: black !important;\n  border: none !important;\n  border-top: 1px solid #d9dad9 !important;\n}\n\n::ng-deep .ui-button {\n  background-color: #7044ff;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBsb3Jhci9jYXBpdHVsby1kZXRhaWwvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV4cGxvcmFyXFxjYXBpdHVsby1kZXRhaWxcXGNhcGl0dWxvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHBsb3Jhci9jYXBpdHVsby1kZXRhaWwvY2FwaXR1bG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHdFQUFBO0VBRUEsa0JBQUE7RUFDQSxzRUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNFQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBRENBO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwbG9yYXIvY2FwaXR1bG8tZGV0YWlsL2NhcGl0dWxvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5vbWUge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbn1cclxuXHJcbnAge1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hdHJpYnV0b3MtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XHJcbn1cclxuXHJcbi5hdHJpYnV0b3MtZGV0YWlscyA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hdHJpYnV0b3MtZGV0YWlscyA+IGRpdiBpbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLmF0cmlidXRvcy1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTQ2NDU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktZGF0YXZpZXctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTcsIDIxOCwgMjE3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDI0MzYgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKiB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzcwNDRmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxNywgMjE4LCAyMTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGZmO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuLmJhY2tncm91bmQtc2VnbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxufSIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ub21lIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xufVxuXG5wIHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0dXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC51aS1pbnB1dHRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hdHJpYnV0b3MtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XG4gIG1hcmdpbjogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hdHJpYnV0b3MtZGV0YWlsczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTQ2NDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktZGF0YXZpZXctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDI0MzYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKjpob3ZlciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXN0YXRlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWRhZDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGZmO1xufVxuXG4uYmFjayB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/explorar/capitulo-detail/capitulo-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/explorar/capitulo-detail/capitulo-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CapituloDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloDetailComponent", function() { return CapituloDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");






let CapituloDetailComponent = class CapituloDetailComponent {
    constructor(modal, modalInterno, detalharService, capituloService, toast) {
        this.modal = modal;
        this.modalInterno = modalInterno;
        this.detalharService = detalharService;
        this.capituloService = capituloService;
        this.toast = toast;
        this.missoes = [];
        this.loading = true;
    }
    ngOnInit() {
        const id = this.detalharService.getId();
        this.capituloService.findById(id)
            .subscribe(res => {
            this.capitulo = res;
            this.missoes = res.missoes;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    close() {
        this.modal.dismiss(null, null, "capitulo-detail");
    }
    mudaAba(event) {
    }
    callToast(severity, summary, detail) {
        this.toast.clear();
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    getRecompensas(recompensas) {
        const recompensa = recompensas.join(', ');
        return recompensa;
    }
};
CapituloDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_4__["DetalharService"] },
    { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_5__["CapituloService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
CapituloDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-capitulo-detail',
        template: __webpack_require__(/*! raw-loader!./capitulo-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/explorar/capitulo-detail/capitulo-detail.component.html"),
        styles: [__webpack_require__(/*! ./capitulo-detail.component.scss */ "./src/app/components/explorar/capitulo-detail/capitulo-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_4__["DetalharService"],
        src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_5__["CapituloService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], CapituloDetailComponent);



/***/ }),

/***/ "./src/app/components/explorar/capitulo-detail/capitulo-detail.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/explorar/capitulo-detail/capitulo-detail.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CapituloDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloDetailModule", function() { return CapituloDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var _capitulo_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./capitulo-detail.component */ "./src/app/components/explorar/capitulo-detail/capitulo-detail.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _utils_especializacoes_view_especializacoes_view_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/especializacoes-view/especializacoes-view.module */ "./src/app/components/utils/especializacoes-view/especializacoes-view.module.ts");
/* harmony import */ var _utils_vantagem_view_vantagem_view_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/vantagem-view/vantagem-view.module */ "./src/app/components/utils/vantagem-view/vantagem-view.module.ts");
/* harmony import */ var _utils_inventario_view_inventario_view_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/inventario-view/inventario-view.module */ "./src/app/components/utils/inventario-view/inventario-view.module.ts");





















let CapituloDetailModule = class CapituloDetailModule {
};
CapituloDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_capitulo_detail_component__WEBPACK_IMPORTED_MODULE_14__["CapituloDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_15__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_16__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_17__["ListasModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_9__["PanelModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
            _utils_especializacoes_view_especializacoes_view_module__WEBPACK_IMPORTED_MODULE_18__["EspecializacoesViewModule"],
            _utils_vantagem_view_vantagem_view_module__WEBPACK_IMPORTED_MODULE_19__["VantagemViewModule"],
            _utils_inventario_view_inventario_view_module__WEBPACK_IMPORTED_MODULE_20__["InventarioViewModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
        ],
        exports: [_capitulo_detail_component__WEBPACK_IMPORTED_MODULE_14__["CapituloDetailComponent"]],
        entryComponents: [_capitulo_detail_component__WEBPACK_IMPORTED_MODULE_14__["CapituloDetailComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]]
    })
], CapituloDetailModule);



/***/ }),

/***/ "./src/app/explorar/explore-capitulo/explore-capitulo-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/explorar/explore-capitulo/explore-capitulo-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ExploreCapituloPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreCapituloPageRoutingModule", function() { return ExploreCapituloPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _explore_capitulo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-capitulo.page */ "./src/app/explorar/explore-capitulo/explore-capitulo.page.ts");




const routes = [
    {
        path: '',
        component: _explore_capitulo_page__WEBPACK_IMPORTED_MODULE_3__["ExploreCapituloPage"]
    }
];
let ExploreCapituloPageRoutingModule = class ExploreCapituloPageRoutingModule {
};
ExploreCapituloPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExploreCapituloPageRoutingModule);



/***/ }),

/***/ "./src/app/explorar/explore-capitulo/explore-capitulo.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/explorar/explore-capitulo/explore-capitulo.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExploreCapituloPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreCapituloPageModule", function() { return ExploreCapituloPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var _explore_capitulo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-capitulo-routing.module */ "./src/app/explorar/explore-capitulo/explore-capitulo-routing.module.ts");
/* harmony import */ var _explore_capitulo_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-capitulo.page */ "./src/app/explorar/explore-capitulo/explore-capitulo.page.ts");
/* harmony import */ var src_app_components_imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var src_app_components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var src_app_components_explorar_capitulo_detail_capitulo_detail_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/explorar/capitulo-detail/capitulo-detail.module */ "./src/app/components/explorar/capitulo-detail/capitulo-detail.module.ts");














let ExploreCapituloPageModule = class ExploreCapituloPageModule {
};
ExploreCapituloPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_capitulo_routing_module__WEBPACK_IMPORTED_MODULE_8__["ExploreCapituloPageRoutingModule"],
            src_app_components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerModule"],
            src_app_components_imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_7__["PaginatorModule"],
            src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
            src_app_components_explorar_capitulo_detail_capitulo_detail_module__WEBPACK_IMPORTED_MODULE_13__["CapituloDetailModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ],
        declarations: [_explore_capitulo_page__WEBPACK_IMPORTED_MODULE_9__["ExploreCapituloPage"]]
    })
], ExploreCapituloPageModule);



/***/ }),

/***/ "./src/app/explorar/explore-capitulo/explore-capitulo.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/explorar/explore-capitulo/explore-capitulo.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(37, 23, 33, 0.801);\n}\n\n.card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n@-webkit-keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\n::ng-deep .ui-paginator {\n  background-color: #05010500 !important;\n  border: #05010500 !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n.search {\n  max-width: 500px;\n  margin: auto;\n}\n\n.search ion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yYXIvZXhwbG9yZS1jYXBpdHVsby9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcZXhwbG9yYXJcXGV4cGxvcmUtY2FwaXR1bG9cXGV4cGxvcmUtY2FwaXR1bG8ucGFnZS5zY3NzIiwic3JjL2FwcC9leHBsb3Jhci9leHBsb3JlLWNhcGl0dWxvL2V4cGxvcmUtY2FwaXR1bG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0Esa0JBQUE7RUFFQSx3RUFBQTtFQUNBLDhEQUFBO1VBQUEsc0RBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSwyQkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSwyQkFBQTtFQ0hOO0VES0U7SUFDSSw2QkFBQTtFQ0hOO0VES0U7SUFDSSwyQkFBQTtFQ0hOO0FBQ0Y7O0FETkE7RUFDSTtJQUNJLDJCQUFBO0VDSE47RURLRTtJQUNJLDZCQUFBO0VDSE47RURLRTtJQUNJLDJCQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJLGdDQUFBO0FDSko7O0FET0E7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtBQ0pKOztBRE9BO0VBQ0ksdUJBQUE7QUNKSjs7QURPQTtFQUNJLDhCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURLSTtFQUNJLHFCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9leHBsb3Jhci9leHBsb3JlLWNhcGl0dWxvL2V4cGxvcmUtY2FwaXR1bG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc2VnbWVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuLmJhY2tncm91bmQtc2VnbWVudCBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGV1ZG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIzLCAzMywgMC44MDEpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlZGdyYWRpZW50IDNzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZWRncmFkaWVudCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKiB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNDRmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGV1ZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMywgMzMsIDAuODAxKTtcbn1cblxuLmNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlZGdyYWRpZW50IDNzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xufVxuXG4uY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlZGdyYWRpZW50IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktc3RhdGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNlYXJjaCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/explorar/explore-capitulo/explore-capitulo.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/explorar/explore-capitulo/explore-capitulo.page.ts ***!
  \********************************************************************/
/*! exports provided: ExploreCapituloPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreCapituloPage", function() { return ExploreCapituloPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_components_explorar_capitulo_detail_capitulo_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/explorar/capitulo-detail/capitulo-detail.component */ "./src/app/components/explorar/capitulo-detail/capitulo-detail.component.ts");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");
/* harmony import */ var src_app_services_page_capitulo_capitulo_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/page/capitulo/capitulo-page.service */ "./src/app/services/page/capitulo/capitulo-page.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");









let ExploreCapituloPage = class ExploreCapituloPage {
    constructor(auth, capituloPage, modal, detalharService, toast, alertContr, capituloService) {
        this.auth = auth;
        this.capituloPage = capituloPage;
        this.modal = modal;
        this.detalharService = detalharService;
        this.toast = toast;
        this.alertContr = alertContr;
        this.capituloService = capituloService;
        this.loading = false;
        this.abaAtual = 'news';
        this.projecoes = [];
        this.pageSize = 0;
        this.linhasPorPagina = 20;
        this.descricao = '';
        this.orderBy = 'dataCriacao';
        this.direction = 'DESC';
        this.flagSearched = false;
        this.consultar('0');
    }
    ngOnInit() {
    }
    isLogedIn() {
        return this.auth.isLogedIn();
    }
    mudaAba(event) {
        //console.log(this.pageSize);
        const { value } = event.detail;
        if (value === 'search')
            this.flagSearched = false;
        else
            this.consultar('0');
    }
    consultar(page) {
        this.loading = true;
        this.capituloPage.findPageByNewer(page, this.linhasPorPagina.toString())
            .subscribe(res => {
            const { content, totalElements } = res;
            this.projecoes = content;
            this.pageSize = totalElements;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    pesquisar(page) {
        this.loading = true;
        this.capituloPage.findPageBySearch(page, this.descricao, this.orderBy, this.direction, this.linhasPorPagina.toString())
            .subscribe(res => {
            const { content, totalElements } = res;
            this.projecoes = content;
            this.pageSize = totalElements;
            this.loading = false;
            this.flagSearched = true;
        }, error => {
            if (error.status == 404)
                this.handle404(error);
            else
                console.log(error);
            this.loading = false;
        });
    }
    detalhar(id) {
        this.detalharService.setId(id);
        this.showModal();
    }
    paginar(evt) {
        const { page } = evt;
        console.log(page);
        this.consultar(page.toString());
    }
    showModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_components_explorar_capitulo_detail_capitulo_detail_component__WEBPACK_IMPORTED_MODULE_4__["CapituloDetailComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'npc-detail'
            });
            return yield modal.present();
        });
    }
    handle404(e) {
        this.flagSearched = false;
        this.callToast('warn', 'Famoso 404', 'Infelizmente não encontramos nada com essa palavra');
    }
    callToast(severity, summary, detail, life = 3000) {
        this.toast.clear();
        this.toast.add({
            severity,
            summary,
            detail,
            life
        });
    }
    showDetail(projecao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { id, apelido, idCriador, dataCriacao } = projecao;
            const localDate = new Date(dataCriacao);
            let data;
            if (!dataCriacao)
                data = "";
            else
                data = `em ${localDate.toLocaleDateString()} às ${localDate.toLocaleTimeString()}`;
            const alert = yield this.alertContr.create({
                header: "Detalhes",
                message: `Criado por ${apelido} (${idCriador}) ${data}`,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Copiar conteúdo',
                        handler: () => { this.copiar(id); }
                    },
                    {
                        text: 'Fechar',
                    }
                ]
            });
            yield alert.present();
        });
    }
    copiar(id) {
        if (this.auth.isLogedIn()) {
            this.capituloService.doCopy(id)
                .subscribe(res => {
                console.log(res);
                this.callToast('success', 'Copiado com sucesso!', 'Você pode encontrá-lo no menu de criações.', 10000);
            }, error => {
                console.log(error);
                this.callToast('error', 'Falha!', 'Não foi possível realizar cópia do conteúdo.', 10000);
            });
        }
        else {
            this.callToast('warn', 'Login necessário!', 'Você precisa estar logado para realizar esta ação.', 10000);
        }
    }
};
ExploreCapituloPage.ctorParameters = () => [
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: src_app_services_page_capitulo_capitulo_page_service__WEBPACK_IMPORTED_MODULE_7__["CapituloPageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"] }
];
ExploreCapituloPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-capitulo',
        template: __webpack_require__(/*! raw-loader!./explore-capitulo.page.html */ "./node_modules/raw-loader/index.js!./src/app/explorar/explore-capitulo/explore-capitulo.page.html"),
        styles: [__webpack_require__(/*! ./explore-capitulo.page.scss */ "./src/app/explorar/explore-capitulo/explore-capitulo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        src_app_services_page_capitulo_capitulo_page_service__WEBPACK_IMPORTED_MODULE_7__["CapituloPageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"]])
], ExploreCapituloPage);



/***/ }),

/***/ "./src/app/services/historia/capitulo.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/historia/capitulo.service.ts ***!
  \*******************************************************/
/*! exports provided: CapituloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloService", function() { return CapituloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





let CapituloService = class CapituloService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    getStaticID() {
        return this.staticID;
    }
    setStaticID(id) {
        this.staticID = id;
    }
    findPageByCriador(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}capitulo/criador`, {
            params,
            observe: 'body',
        });
    }
    insert(dto) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}capitulo`, dto);
    }
    update(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}capitulo`, dto);
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}capitulo/${id}`);
    }
    doCopy(idCapitulo) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idCapitulo', idCapitulo);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}capitulo/copiar`, {
            params,
            observe: 'body',
        });
    }
};
CapituloService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
CapituloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], CapituloService);



/***/ }),

/***/ "./src/app/services/page/capitulo/capitulo-page.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/page/capitulo/capitulo-page.service.ts ***!
  \*****************************************************************/
/*! exports provided: CapituloPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloPageService", function() { return CapituloPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage-service.service */ "./src/app/services/storage-service.service.ts");





let CapituloPageService = class CapituloPageService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    findPageByNewer(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/capitulo/newer`, {
            params,
            observe: 'body',
        });
    }
    findPageBySearch(page = '0', descricao, orderBy, direction, linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('descricao', descricao)
            .set('orderBy', orderBy)
            .set('direction', direction)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/capitulo/search`, {
            params,
            observe: 'body',
        });
    }
};
CapituloPageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
CapituloPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], CapituloPageService);



/***/ })

}]);
//# sourceMappingURL=explorar-explore-capitulo-explore-capitulo-module-es2015.js.map