(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerequipamentos-gerequipamentos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/item-update/item-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/item-update/item-update.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Item\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n\r\n  <div class=\"background\">\r\n    <form [formGroup]=\"formItem\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input formControlName=\"nome\" type=\"text\" color=\"light\" placeholder=\"EX: Amaterasu\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formItem.controls.nome.dirty && formItem.controls.nome.errors\" margin-left>\r\n              Preencha\r\n              o nome</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"desc\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Uma espada grande cujo sua lâmina exala o fogo negro, dizem que este fogo não pode ser apagado\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formItem.controls.desc.dirty && formItem.controls.desc.errors\" margin-left>\r\n              Preencha\r\n              a descrição</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Tipo de RPG</ion-label>\r\n              <ion-select formControlName=\"idTipoRPG\" placeholder=\"Selecione\">\r\n                <ion-select-option [value]=\"0\">Medieval</ion-select-option>\r\n                <ion-select-option [value]=\"1\">Cyberpunk</ion-select-option>\r\n                <ion-select-option [value]=\"2\">Steampunk</ion-select-option>\r\n                <ion-select-option [value]=\"3\">Horror</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Peso (kg)</ion-label>\r\n              <ion-input formControlName=\"peso\" type=\"text\" color=\"light\" placeholder=\"EX: 8,5\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formItem.controls.peso.dirty && formItem.controls.peso.errors\" margin-left>\r\n              Preencha o peso , caso não tenha, coloque 0</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Valor</ion-label>\r\n              <ion-input formControlName=\"valor\" type=\"text\" color=\"light\" placeholder=\"EX: 1500\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formItem.controls.valor.dirty && formItem.controls.valor.errors\" margin-left>\r\n              Preencha o valor apenas com números inteiros, caso não tenha, coloque 0</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Manter privado</ion-label>\r\n              <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                [checked]=\"formItem.get('isPrivate')\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">URL da imagem</ion-label>\r\n              <ion-input formControlName=\"urlImg\" type=\"text\" color=\"light\"\r\n                placeholder=\"https://i.pinimg.com/originals/3d/f4/63/3df463b9e3e7fb571eb9a9ec05fd91d5.jpg\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button color=\"tertiary\" float-right (click)=\"next(formuItem)\" [disabled]=\"formItem.invalid\">Próximo\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formItem.get('urlImg').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n\r\n    <span [ngSwitch]=\"opcao\">\r\n\r\n      <form *ngSwitchCase=\"0\" [formGroup]=\"formArma\" (ngSubmit)=\"$event.preventDefault()\" #formuArma>\r\n        <ion-button class=\"distance\" size=\"large\" color=\"tertiary\" (click)=\"back(formuArma, formuItem)\">\r\n          <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"topo\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Dano</ion-label>\r\n                <ion-input formControlName=\"dano\" type=\"text\" color=\"light\" placeholder=\"EX: 2d20\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formArma.controls.dano.dirty && formArma.controls.dano.errors\" margin-left>\r\n                Preencha\r\n                o conteúdo</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Dano Bônus (+)</ion-label>\r\n                <ion-input formControlName=\"danoBonus\" type=\"text\" color=\"light\" placeholder=\"EX: 5\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formArma.controls.danoBonus.dirty && formArma.controls.danoBonus.errors\"\r\n                margin-left>\r\n                Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Crítico (x)</ion-label>\r\n                <ion-input formControlName=\"critico\" type=\"text\" color=\"light\" placeholder=\"EX: 3\"></ion-input>\r\n                <p class=\"danger\" *ngIf=\"formArma.controls.critico.dirty && formArma.controls.critico.errors\"\r\n                  margin-left>\r\n                  Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Distância</ion-label>\r\n                <ion-input formControlName=\"distancia\" type=\"text\" color=\"light\" placeholder=\"EX: 2m\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formArma.controls.distancia.dirty && formArma.controls.distancia.errors\"\r\n                margin-left>\r\n                Preencha\r\n                o conteúdo</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label>Tipo de arma</ion-label>\r\n                <ion-select formControlName=\"idTipoArma\" placeholder=\"Selecione\">\r\n                  <ion-select-option [value]=\"0\">Corte</ion-select-option>\r\n                  <ion-select-option [value]=\"1\">Esmagamento</ion-select-option>\r\n                  <ion-select-option [value]=\"2\">Perfuração</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formArma.controls.idTipoArma.dirty && formArma.controls.idTipoArma.errors\"\r\n                margin-left>\r\n                Selecione um!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-button color=\"tertiary\" expand=\"block\" (click)=\"salvarArma()\" [disabled]=\"formArma.invalid\">Salvar\r\n        </ion-button>\r\n      </form>\r\n\r\n      <form *ngSwitchCase=\"1\" [formGroup]=\"formDefesa\" (ngSubmit)=\"$event.preventDefault()\" #formuDef>\r\n        <ion-button class=\"distance\" size=\"large\" color=\"tertiary\" (click)=\"back(formuDef, formuItem)\">\r\n          <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"topo\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Bônus defesa(+)</ion-label>\r\n                <ion-input formControlName=\"defesaBonus\" type=\"text\" color=\"light\" placeholder=\"EX: 4\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formDefesa.controls.defesaBonus.dirty && formDefesa.controls.defesaBonus.errors\"\r\n                margin-left>\r\n                Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Bônus destreza(+)</ion-label>\r\n                <ion-input formControlName=\"destrezaBonus\" type=\"text\" color=\"light\" placeholder=\"EX: 0\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formDefesa.controls.destrezaBonus.dirty && formDefesa.controls.destrezaBonus.errors\" margin-left>\r\n                Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Penalidade(-)</ion-label>\r\n                <ion-input formControlName=\"penalidade\" type=\"text\" color=\"light\" placeholder=\"EX: 1\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formDefesa.controls.penalidade.dirty && formDefesa.controls.penalidade.errors\"\r\n                margin-left>\r\n                Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label>Tipo de Defesa</ion-label>\r\n                <ion-select formControlName=\"idTipoDefesa\" placeholder=\"Selecione\">\r\n                  <ion-select-option [value]=\"0\">Cabeça</ion-select-option>\r\n                  <ion-select-option [value]=\"1\">Tronco</ion-select-option>\r\n                  <ion-select-option [value]=\"2\">Braços</ion-select-option>\r\n                  <ion-select-option [value]=\"3\">Pernas</ion-select-option>\r\n                  <ion-select-option [value]=\"4\">Escudo</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formDefesa.invalid\" (click)=\"salvarDefesa()\">Salvar\r\n        </ion-button>\r\n      </form>\r\n\r\n      <form *ngSwitchCase=\"2\" [formGroup]=\"formUti\" (ngSubmit)=\"$event.preventDefault()\" #formuUti>\r\n        <ion-button class=\"distance\" size=\"large\" color=\"tertiary\" (click)=\"back(formUti, formuItem)\">\r\n          <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"topo\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Efeito</ion-label>\r\n                <ion-input formControlName=\"efeito\" type=\"text\" color=\"light\" placeholder=\"EX: Cura os PV em 20\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formUti.controls.efeito.dirty && formUti.controls.efeito.errors\" margin-left>\r\n                Preencha\r\n                o conteúdo</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label>Tipo de utilizável</ion-label>\r\n                <ion-select formControlName=\"idTipoUtilizavel\" placeholder=\"Selecione\">\r\n                  <ion-select-option [value]=\"0\">Consumível (elixir, poções e etc)</ion-select-option>\r\n                  <ion-select-option [value]=\"1\">Aplicável (veneno e etc)</ion-select-option>\r\n                  <ion-select-option [value]=\"2\">Equipável (anel, cordão e etc)</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formUti.controls.idTipoUtilizavel.dirty && formUti.controls.idTipoUtilizavel.errors\" margin-left>\r\n                Selecione um!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formUti.invalid\" (click)=\"salvarUtilizavel()\">Salvar\r\n        </ion-button>\r\n      </form>\r\n      <br>\r\n    </span>\r\n  </div>\r\n\r\n  <ion-footer *ngIf=\"true\">\r\n    <ion-toolbar>\r\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n</ion-content>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gerequipamentos/gerequipamentos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gerequipamentos/gerequipamentos.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Itens\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [style.background-image]=\"'url(' + img + ')'\" [style.background-size]=\"'cover'\"\r\n  [style.background-repeat]=\"'no-repeat'\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item class=\"no-ground\">\r\n          <ion-label><strong>Tipo de item</strong></ion-label>\r\n          <ion-select (ionChange)=\"destroyList()\" [(ngModel)]=\"tipoItem\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Arma/Ataque</ion-select-option>\r\n            <ion-select-option value=\"1\">Armadura/Defesa</ion-select-option>\r\n            <ion-select-option value=\"2\">Utilizável</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" \r\n        (click)=\"novo()\" >{{ display? \"Cancelar\": \"Criar novo\" }}</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\"\r\n         (click)=\"consultar()\" [disabled]=\"tipoItem == -1\">Buscar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ng-container *ngIf=\"listDisplay\">\r\n    <div class=\"limiter\">\r\n      <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"  \r\n      (notifyParent)=\"getNotification($event)\" [add]=\"true\" [id]=\"'idItem'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\" \r\n      [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\" (getSelectedObj)=\"selectedObj($event)\"\r\n      ></app-paginacao>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"display\">\r\n    <div class=\"thing\">\r\n      <app-criar-componente [menu]=\"false\"></app-criar-componente>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/components/criacoes/item-update/item-update.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/criacoes/item-update/item-update.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  color: #b40303;\n  font-size: 0.7em;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\n.distance {\n  margin-left: 20px;\n}\n\n.background {\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9pdGVtLXVwZGF0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGl0ZW0tdXBkYXRlXFxpdGVtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9pdGVtLXVwZGF0ZS9pdGVtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURHQTtFQUNJLHNFQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLDJDQUFBO0FDQUo7O0FESUk7RUFDSSwyQ0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9pdGVtLXVwZGF0ZS9pdGVtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYW5nZXIge1xyXG4gICAgY29sb3I6IHJnYigxODAsIDMsIDMpO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG4uZGlzdGFuY2V7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIuZGFuZ2VyIHtcbiAgY29sb3I6ICNiNDAzMDM7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59XG5cbi5kaXN0YW5jZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/item-update/item-update.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/criacoes/item-update/item-update.component.ts ***!
  \**************************************************************************/
/*! exports provided: ItemUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUpdateComponent", function() { return ItemUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");








let ItemUpdateComponent = class ItemUpdateComponent {
    constructor(modalCtrl, formBuilder, itemService, alertController, storage, paginaService, toast) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.storage = storage;
        this.paginaService = paginaService;
        this.toast = toast;
        this.menu = true;
        this.cancelarBTN = false;
        this.requestUpdate = false;
        this.loading = false;
        this.paginaAtual = 0;
        this.formItem = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idTipoRPG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idTipoItem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('([0-9]*([.]|[,]))?[0-9]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            peso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('([0-9]*([.]|[,]))?[0-9]+'), , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            urlImg: ['', []],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.formArma = this.formBuilder.group({
            dano: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            danoBonus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            critico: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            distancia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idTipoArma: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.formDefesa = this.formBuilder.group({
            defesaBonus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            destrezaBonus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            penalidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            idTipoDefesa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.formUti = this.formBuilder.group({
            efeito: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idTipoUtilizavel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.requestUpdate = false;
        this.loading = true;
        const id = this.itemService.getStaticID();
        const type = this.itemService.getStaticType().toString();
        this.formItem.get('idTipoItem').setValue(this.itemService.getStaticType());
        this.itemService.findById(id, type)
            .subscribe(res => {
            // console.log(res);
            const { nome, descricao, tipoItem, tipoRPG, imgURL, valor, peso, isPrivate } = res;
            this.formItem.get('nome').setValue(nome);
            this.formItem.get('desc').setValue(descricao);
            this.formItem.get('valor').setValue(valor);
            this.formItem.get('peso').setValue(peso);
            this.formItem.get('urlImg').setValue(imgURL);
            this.formItem.get('idTipoRPG').setValue(this.getCurrentType(tipoRPG));
            if (isPrivate == false) {
                this.formItem.get('isPrivate').setValue(false);
            }
            else {
                this.formItem.get('isPrivate').setValue(true);
            }
            switch (tipoItem) {
                case 'ATAQUE':
                    const { bonusAtaque, critico, dano, distancia, tipoAtaque } = res;
                    this.formArma.get('danoBonus').setValue(bonusAtaque);
                    this.formArma.get('critico').setValue(critico);
                    this.formArma.get('dano').setValue(dano);
                    this.formArma.get('distancia').setValue(distancia);
                    this.formArma.get('idTipoArma').setValue(this.getCurrentAtaque(tipoAtaque));
                    break;
                case 'DEFESA':
                    const { bonusDefesa, bonusDestreza, penalidade, tipoDefesa } = res;
                    this.formDefesa.get('defesaBonus').setValue(bonusDefesa);
                    this.formDefesa.get('destrezaBonus').setValue(bonusDestreza);
                    this.formDefesa.get('penalidade').setValue(penalidade);
                    this.formDefesa.get('idTipoDefesa').setValue(this.getCurrentDefesa(tipoDefesa));
                    break;
                case 'UTILIZAVEL':
                    const { efeito, tipoUtilizavel } = res;
                    this.formUti.get('efeito').setValue(efeito);
                    this.formUti.get('idTipoUtilizavel').setValue(this.getCurrentUtilizavel(tipoUtilizavel));
            }
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    next(form) {
        this.primeiroForm = form;
        this.primeiroForm.style.display = "none";
        this.opcao = this.formItem.get('idTipoItem').value;
        //console.log(this.opcao);
    }
    back(form) {
        this.primeiroForm.style.display = "block";
        this.opcao = -1;
    }
    salvarArma() {
        //console.log('Peso:', this.formItem.get('peso').value);
        let obj = {
            id: this.itemService.getStaticID(),
            nome: this.formItem.get('nome').value,
            descricao: this.formItem.get('desc').value,
            tipoItem: parseInt(this.formItem.get('idTipoItem').value),
            tipoRPG: parseInt(this.formItem.get('idTipoRPG').value),
            valor: parseFloat(this.formItem.get('valor').value.toString().replace(',', '.')),
            peso: parseFloat(this.formItem.get('peso').value.toString().replace(',', '.')),
            imgURL: this.formItem.get('urlImg').value,
            isPrivate: this.formItem.get('isPrivate').value,
            bonusAtaque: parseInt(this.formArma.get('danoBonus').value),
            dano: this.formArma.get('dano').value,
            critico: parseInt(this.formArma.get('critico').value),
            distancia: this.formArma.get('distancia').value,
            tipoAtaque: parseInt(this.formArma.get('idTipoArma').value),
        };
        this.itemService.updateAtaque(obj)
            .subscribe((res) => {
            this.loading = false;
            this.requestUpdate = true;
            this.callToast('success', 'Atualizado com sucesso!', 'Item de ataque atualizado');
        }, error => { });
    }
    salvarDefesa() {
        let obj = {
            id: this.itemService.getStaticID(),
            nome: this.formItem.get('nome').value,
            descricao: this.formItem.get('desc').value,
            tipoItem: parseInt(this.formItem.get('idTipoItem').value),
            tipoRPG: parseInt(this.formItem.get('idTipoRPG').value),
            valor: parseFloat(this.formItem.get('valor').value.toString().replace(',', '.')),
            peso: parseFloat(this.formItem.get('peso').value.toString().replace(',', '.')),
            imgURL: this.formItem.get('urlImg').value,
            isPrivate: this.formItem.get('isPrivate').value,
            bonusDefesa: parseInt(this.formDefesa.get('defesaBonus').value),
            bonusDestreza: parseInt(this.formDefesa.get('destrezaBonus').value),
            penalidade: parseInt(this.formDefesa.get('penalidade').value),
            tipoDefesa: parseInt(this.formDefesa.get('idTipoDefesa').value),
        };
        this.itemService.updateDefesa(obj)
            .subscribe((res) => {
            this.loading = false;
            this.requestUpdate = true;
            this.callToast('success', 'Atualizado com sucesso!', 'Item de defesa atualizado');
        }, error => { });
    }
    salvarUtilizavel() {
        let obj = {
            id: this.itemService.getStaticID(),
            nome: this.formItem.get('nome').value,
            descricao: this.formItem.get('desc').value,
            tipoItem: parseInt(this.formItem.get('idTipoItem').value),
            tipoRPG: parseInt(this.formItem.get('idTipoRPG').value),
            peso: parseFloat(this.formItem.get('peso').value.toString().replace(',', '.')),
            valor: parseFloat(this.formItem.get('valor').value.toString().replace(',', '.')),
            imgURL: this.formItem.get('urlImg').value,
            isPrivate: this.formItem.get('isPrivate').value,
            efeito: this.formUti.get('efeito').value,
            tipoUtilizavel: parseInt(this.formUti.get('idTipoUtilizavel').value),
        };
        this.itemService.updateUtilizavel(obj)
            .subscribe((res) => {
            this.loading = false;
            this.requestUpdate = true;
            this.callToast('success', 'Atualizado com sucesso!', 'Item utilizável atualizado');
        }, error => { });
    }
    copyToClipboard(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let id = (e) => {
                e.preventDefault();
                e.clipboardData.setData('text', (value));
            };
            document.addEventListener('copy', id);
            document.execCommand('copy');
            document.removeEventListener('copy', null);
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
    close() {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    }
    getCurrentType(tipo) {
        switch (tipo) {
            case "MEDIEVAL_RPG":
                return 0;
                break;
            case "CYBERPUNK_RPG":
                return 1;
                break;
            case "STEAMPUNK_RPG":
                return 2;
                break;
            case "HORROR_RPG":
                return 3;
                break;
        }
    }
    getCurrentAtaque(tipo) {
        switch (tipo) {
            case "CORTE":
                return 0;
                break;
            case "ESMAGAMENTO":
                return 1;
                break;
            case "PERFURACAO":
                return 2;
                break;
        }
    }
    getCurrentDefesa(tipo) {
        switch (tipo) {
            case "CABECA":
                return 0;
                break;
            case "TRONCO":
                return 1;
                break;
            case "BRACOS":
                return 2;
                break;
            case "PERNAS":
                return 3;
                break;
            case "ESCUDO":
                return 4;
                break;
        }
    }
    getCurrentUtilizavel(tipo) {
        switch (tipo) {
            case "CONSUMIVEL":
                return 0;
                break;
            case "APLICAVEL":
                return 1;
                break;
            case "UTILIZAVEL":
                return 2;
                break;
        }
    }
};
ItemUpdateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ItemUpdateComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ItemUpdateComponent.prototype, "cancelarBTN", void 0);
ItemUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-update',
        template: __webpack_require__(/*! raw-loader!./item-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/item-update/item-update.component.html"),
        styles: [__webpack_require__(/*! ./item-update.component.scss */ "./src/app/components/criacoes/item-update/item-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
], ItemUpdateComponent);



/***/ }),

/***/ "./src/app/components/criacoes/item-update/item-update.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/criacoes/item-update/item-update.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItemUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUpdateModule", function() { return ItemUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _item_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-update.component */ "./src/app/components/criacoes/item-update/item-update.component.ts");











let ItemUpdateModule = class ItemUpdateModule {
};
ItemUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_update_component__WEBPACK_IMPORTED_MODULE_10__["ItemUpdateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__["ListasModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_9__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
        ],
        exports: [
            _item_update_component__WEBPACK_IMPORTED_MODULE_10__["ItemUpdateComponent"],
        ],
        entryComponents: [
            _item_update_component__WEBPACK_IMPORTED_MODULE_10__["ItemUpdateComponent"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], ItemUpdateModule);



/***/ }),

/***/ "./src/app/gerequipamentos/gerequipamentos.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/gerequipamentos/gerequipamentos.module.ts ***!
  \***********************************************************/
/*! exports provided: GerequipamentosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerequipamentosPageModule", function() { return GerequipamentosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gerequipamentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerequipamentos.page */ "./src/app/gerequipamentos/gerequipamentos.page.ts");
/* harmony import */ var _components_criacoes_criacoes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/criacoes.module */ "./src/app/components/criacoes/criacoes.module.ts");
/* harmony import */ var _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _components_criacoes_item_update_item_update_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/criacoes/item-update/item-update.module */ "./src/app/components/criacoes/item-update/item-update.module.ts");










const routes = [
    {
        path: '',
        component: _gerequipamentos_page__WEBPACK_IMPORTED_MODULE_6__["GerequipamentosPage"]
    }
];
let GerequipamentosPageModule = class GerequipamentosPageModule {
};
GerequipamentosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_criacoes_criacoes_module__WEBPACK_IMPORTED_MODULE_7__["CriacoesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_8__["PaginacaoModule"],
            _components_criacoes_item_update_item_update_module__WEBPACK_IMPORTED_MODULE_9__["ItemUpdateModule"]
        ],
        declarations: [_gerequipamentos_page__WEBPACK_IMPORTED_MODULE_6__["GerequipamentosPage"]]
    })
], GerequipamentosPageModule);



/***/ }),

/***/ "./src/app/gerequipamentos/gerequipamentos.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/gerequipamentos/gerequipamentos.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thing {\n  padding: 1rem;\n  width: 95%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: rgba(182, 182, 182, 0.822);\n  border-radius: 0.5rem;\n  margin-left: 10px;\n  border-left: 0 solid #00ff99;\n  -webkit-transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n  margin: auto;\n}\n\n.thing {\n  padding-left: 0.5rem;\n  border-left: 0.5rem solid #75427a;\n}\n\n.thing > :first-child {\n  margin-top: 0;\n}\n\n.thing > :last-child {\n  margin-bottom: 0;\n}\n\n.heading {\n  color: #fff;\n}\n\nbody {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100vh;\n  background-color: #0099ff;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-content {\n  --background: none;\n}\n\n.no-ground {\n  --background: rgb(132, 132, 132);\n  --color: white;\n  --background-hover: rgb(15, 15, 15);\n  --border-radius: 13px;\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VyZXF1aXBhbWVudG9zL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxnZXJlcXVpcGFtZW50b3NcXGdlcmVxdWlwYW1lbnRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlcmVxdWlwYW1lbnRvcy9nZXJlcXVpcGFtZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSwrRUFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsaUZBQUE7RUFBQSx5RUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9nZXJlcXVpcGFtZW50b3MvZ2VyZXF1aXBhbWVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGluZyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICByZ2JhKDE4MiwgMTgyLCAxODIsIDAuODIyKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkICMwMGZmOTk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctbGVmdCAzMDBtcyBlYXNlLWluLW91dDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50aGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjNzU0MjdhO1xyXG59XHJcblxyXG4udGhpbmcgPiA6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50aGluZyA+IDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTlmZjtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubm8tZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigxMzIsIDEzMiwgMTMyKTtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYigxNSwgMTUsIDE1KTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbi5saW1pdGVyIHtcclxuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiLnRoaW5nIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDk1JTtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDE4MiwgMTgyLCAwLjgyMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkICMwMGZmOTk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1sZWZ0IDMwMG1zIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRoaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzc1NDI3YTtcbn1cblxuLnRoaW5nID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRoaW5nID4gOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWZmO1xufVxuXG4uYmFjayB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubm8tZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTMyLCAxMzIsIDEzMik7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYigxNSwgMTUsIDE1KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxM3B4O1xufVxuXG4ubGltaXRlciB7XG4gIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gerequipamentos/gerequipamentos.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/gerequipamentos/gerequipamentos.page.ts ***!
  \*********************************************************/
/*! exports provided: GerequipamentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerequipamentosPage", function() { return GerequipamentosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var _components_criacoes_item_update_item_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/criacoes/item-update/item-update.component */ "./src/app/components/criacoes/item-update/item-update.component.ts");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");







let GerequipamentosPage = class GerequipamentosPage {
    constructor(modalCtrl, itemService, alertController, paginaService, plataform, fundoService) {
        this.modalCtrl = modalCtrl;
        this.itemService = itemService;
        this.alertController = alertController;
        this.paginaService = paginaService;
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.img = '';
        this.tipoItem = -1;
        this.display = false;
        this.listDisplay = false;
        this.paginaAtual = 0;
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
    getNotification(evt) {
        evt = Number.parseInt(evt);
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        let p;
        switch (Number(this.tipoItem)) {
            case 0:
                p = this.itemService.findPageOfAtaque(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                break;
            case 1:
                p = this.itemService.findPageOfDefesa(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                break;
            case 2:
                p = this.itemService.findPageOfUtilizavel(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                break;
            default:
                console.log('NADA');
                break;
        }
        this.listar();
    }
    listar() {
        this.listDisplay = true;
        this.display = false;
    }
    destroyList() {
        this.paginaAtual = 0;
        this.listDisplay = false;
    }
    novo() {
        this.listDisplay = false;
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
    }
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.itemService.setStaticID(event.id);
            this.itemService.setStaticType(Number(this.tipoItem));
            const modal = yield this.modalCtrl.create({
                component: _components_criacoes_item_update_item_update_component__WEBPACK_IMPORTED_MODULE_5__["ItemUpdateComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                //console.log(res);
                if (data == true) {
                    this.consultar();
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
};
GerequipamentosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_6__["FundoService"] }
];
GerequipamentosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerequipamentos',
        template: __webpack_require__(/*! raw-loader!./gerequipamentos.page.html */ "./node_modules/raw-loader/index.js!./src/app/gerequipamentos/gerequipamentos.page.html"),
        styles: [__webpack_require__(/*! ./gerequipamentos.page.scss */ "./src/app/gerequipamentos/gerequipamentos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_6__["FundoService"]])
], GerequipamentosPage);



/***/ })

}]);
//# sourceMappingURL=gerequipamentos-gerequipamentos-module-es2015.js.map