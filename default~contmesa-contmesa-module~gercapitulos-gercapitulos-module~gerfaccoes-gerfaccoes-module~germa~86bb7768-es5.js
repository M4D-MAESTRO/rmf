(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~gercapitulos-gercapitulos-module~gerfaccoes-gerfaccoes-module~germa~86bb7768"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/capitulo-update/capitulo-update.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/capitulo-update/capitulo-update.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Capítulo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <br>\r\n\r\n    <div *ngIf=\"capituloEncontrado\" class=\"border\">\r\n      <form [formGroup]=\"formCapitulo\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo back\">\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Número do capítulo</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"numCapitulo\" placeholder=\"EX: 1\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formCapitulo.controls.numCapitulo.dirty && formCapitulo.controls.numCapitulo.errors\" margin-left>\r\n                Preencha apenas com números</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Título</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"titulo\" placeholder=\"EX: Epílogo\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formCapitulo.controls.titulo.dirty && formCapitulo.controls.titulo.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">História</ion-label>\r\n                <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"light\"\r\n                  placeholder=\"EX: Após a Cidadela ter colapsado...\"></ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formCapitulo.controls.historia.dirty && formCapitulo.controls.historia.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Resumo do capitulo anterior</ion-label>\r\n                <ion-textarea formControlName=\"resumoCapPassado\" type=\"text-area\" color=\"light\"\r\n                  placeholder=\"EX: Não há!\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formCapitulo.controls.resumoCapPassado.dirty && formCapitulo.controls.resumoCapPassado.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label>Manter privado</ion-label>\r\n                <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                  [checked]=\"formCapitulo.get('isPrivate')\"></ion-toggle>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Código Missão</ion-label>\r\n                <ion-input (keyup.enter)=\"inserirManualmente()\" [(ngModel)]=\"idMissao\"\r\n                  [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\" color=\"light\"\r\n                  placeholder=\"Insira o código da missão aqui, então, clique em: 'Adicionar'\">\r\n                </ion-input>\r\n                <ion-button slot=\"end\" size=\"large\" class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\"\r\n                  (click)=\"inserirManualmente()\">Adicionar</ion-button>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <br>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <div>\r\n                <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                  (notifyParent)=\"getNotificationMissao($event)\" (getSelectedObj)=\"getSelectedObj($event)\" [add]=\"true\"\r\n                  [id]=\"'idMissao'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'tipoMissao'\" [imgURL]=\"'imgURL'\">\r\n                </app-paginacao>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <app-listas [isModal]=\"false\" [strings]=\"idMissoes\" [titulo]=\"'Lista de Missões adicionadas'\">\r\n              </app-listas>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <br>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">URL da image</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"\r\n                  placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formCapitulo.get('imgURL').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formCapitulo.invalid\" (click)=\"salvar()\">Salvar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </ion-grid>\r\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n</ion-content>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/capitulo/capitulo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/capitulo/capitulo.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo Capitulo!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n        (click)=\"novoCapitulo()\">Novo</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n        (click)=\"consultar()\">Listar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <br>\r\n\r\n  <div *ngIf=\"novo\">\r\n    <form [formGroup]=\"formCapitulo\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo border\">\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Número do capítulo</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"numCapitulo\" placeholder=\"EX: 1\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\"\r\n              *ngIf=\"formCapitulo.controls.numCapitulo.dirty && formCapitulo.controls.numCapitulo.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Título</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"titulo\" placeholder=\"EX: Epílogo\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formCapitulo.controls.titulo.dirty && formCapitulo.controls.titulo.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">História</ion-label>\r\n              <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Após a Cidadela ter colapsado...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formCapitulo.controls.historia.dirty && formCapitulo.controls.historia.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Resumo do capitulo anterior</ion-label>\r\n              <ion-textarea formControlName=\"resumoCapPassado\" type=\"text-area\" color=\"light\" placeholder=\"EX: Não há!\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\"\r\n              *ngIf=\"formCapitulo.controls.resumoCapPassado.dirty && formCapitulo.controls.resumoCapPassado.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Código Missão</ion-label>\r\n              <ion-input (keyup.enter)=\"inserirManualmente()\" [(ngModel)]=\"idMissao\"\r\n                [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"Insira o código da missão aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n              <ion-button slot=\"end\" size=\"large\" class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\"\r\n                (click)=\"inserirManualmente()\">\r\n                Adicionar\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <br>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <div>\r\n              <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                (notifyParent)=\"getNotificationMissao($event)\" (getSelectedObj)=\"getSelectedObj($event)\" [add]=\"true\"\r\n                [id]=\"'idMissao'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'tipoMissao'\" [imgURL]=\"'imgURL'\">\r\n              </app-paginacao>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <app-listas [isModal]=\"false\" [strings]=\"idMissoes\" [titulo]=\"'Lista de Missões adicionadas'\"></app-listas>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <br>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"\r\n                placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formCapitulo.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <br>\r\n            <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formCapitulo.invalid\" (click)=\"salvar()\">Salvar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"limiter\" *ngIf=\"display\">\r\n    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n      (notifyParent)=\"getNotification($event)\" (getSelectedObj)=\"actionObj($event)\" [add]=\"true\" [id]=\"'idCapitulo'\"\r\n      [nome]=\"'titulo'\" [descricao]=\"'historia'\" [tipo]=\"'numCapitulo'\" [closeBTN]=\"false\" [imgURL]=\"'imgURL'\">\r\n    </app-paginacao>\r\n  </div>\r\n\r\n  <ion-footer *ngIf=\"cancelarBTN\">\r\n    <ion-toolbar>\r\n      <ion-button expand=\"block\">Cancelar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-grid>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/faccoes-update/faccoes-update.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/faccoes-update/faccoes-update.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Facção\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n\r\n    <div class=\"background\">\r\n      <form [formGroup]=\"formFaccao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Nome</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\"\r\n                  placeholder=\"EX: O Abatedouro\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.nome.dirty && formFaccao.controls.nome.errors\" margin-left>\r\n                Preencha apenas com números</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Descrição</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"descricao\"\r\n                  placeholder=\"EX: Os mais infâmes e nojentos crimonosos liderados por Pigsaw...\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.descricao.dirty && formFaccao.controls.descricao.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Objetivo</ion-label>\r\n                <ion-textarea formControlName=\"objetivo\" type=\"text-area\" color=\"light\"\r\n                  placeholder=\"EX: Matar, roubar, estuprar, torturar e qualquer outra coisa que seja maligna\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.objetivo.dirty && formFaccao.controls.objetivo.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label>Manter privado</ion-label>\r\n                <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                  [checked]=\"formFaccao.get('isPrivate')\"></ion-toggle>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">URL da image</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"\r\n                  placeholder=\"EX: https://image.shutterstock.com/image-illustration/butchery-flat-raster-icon-isolated-260nw-618904085.jpg\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formFaccao.get('imgURL').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formFaccao.invalid\" (click)=\"salvar()\">Salvar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-footer *ngIf=\"true\">\r\n    <ion-toolbar>\r\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n</ion-content>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/faccoes/faccoes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/faccoes/faccoes.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie uma nova facção\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n        (click)=\"novaFaccao()\">Novo</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n        (click)=\"consultar()\">Listar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"novo\">\r\n  <form [formGroup]=\"formFaccao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n    <div class=\"topo border\">\r\n      <br>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Nome</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\" placeholder=\"EX: O Abatedouro\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formFaccao.controls.nome.dirty && formFaccao.controls.nome.errors\" margin-left>\r\n            Preencha apenas com números</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Descrição</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"descricao\"\r\n              placeholder=\"EX: Os mais infâmes e nojentos crimonosos liderados por Pigsaw...\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formFaccao.controls.descricao.dirty && formFaccao.controls.descricao.errors\"\r\n            margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Objetivo</ion-label>\r\n            <ion-textarea formControlName=\"objetivo\" type=\"text-area\" color=\"light\"\r\n              placeholder=\"EX: Matar, roubar, estuprar, torturar e qualquer outra coisa que seja maligna\">\r\n            </ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formFaccao.controls.objetivo.dirty && formFaccao.controls.objetivo.errors\"\r\n            margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">URL da image</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"\r\n              placeholder=\"EX: https://image.shutterstock.com/image-illustration/butchery-flat-raster-icon-isolated-260nw-618904085.jpg\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <app-imagem-display [src]=\"this.formFaccao.get('imgURL').value\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formFaccao.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"display\" class=\"limiter\">\r\n  <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n    (notifyParent)=\"getNotification($event)\" [add]=\"add\" (getSelectedObj)=\"actionObj($event)\" [id]=\"'idFaccao'\"\r\n    [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'objetivo'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\">\r\n  </app-paginacao>\r\n</div>\r\n\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\">Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mapa-update/mapa-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/mapa-update/mapa-update.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Mapa\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"no-margin\">\r\n    <form [formGroup]=\"formMapa\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo back\">\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\"\r\n                placeholder=\"EX: Florestas do silencio - 1\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.nome.dirty && formMapa.controls.nome.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Em meio as florestas...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.descricao.dirty && formMapa.controls.descricao.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">URL da imagem</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"urlMapa\"\r\n                placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.urlMapa.dirty && formMapa.controls.urlMapa.errors\" margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Manter privado</ion-label>\r\n              <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                [checked]=\"formMapa.get('isPrivate')\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formMapa.get('urlMapa').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formMapa.invalid\" (click)=\"salvar()\">Salvar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"close()\">Fechar</ion-button>\r\n</ion-content>\r\n\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mapa/mapa.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/mapa/mapa.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo mapa\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n        (click)=\"novoMapa()\">Novo</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n        (click)=\"consultar()\">Listar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"novo\">\r\n  <br>\r\n  <form [formGroup]=\"formMapa\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n\r\n    <div class=\"topo border\">\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Nome</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\"\r\n              placeholder=\"EX: Florestas do silencio - 1\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formMapa.controls.nome.dirty && formMapa.controls.nome.errors\" margin-left>\r\n            Preencha apenas com números</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Descrição</ion-label>\r\n            <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"light\"\r\n              placeholder=\"EX: Em meio as florestas...\"></ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formMapa.controls.descricao.dirty && formMapa.controls.descricao.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">URL da imagem</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"urlMapa\"\r\n              placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formMapa.controls.urlMapa.dirty && formMapa.controls.urlMapa.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <app-imagem-display [src]=\"this.formMapa.get('urlMapa').value\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formMapa.invalid\" (click)=\"salvar()\">Salvar\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"limiter\" *ngIf=\"display\">\r\n  <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n    (notifyParent)=\"getNotification($event)\" [add]=\"true\" (getSelectedObj)=\"actionObj($event)\" [id]=\"'idMapa'\"\r\n    [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'urlMapa'\" [imgURL]=\"'urlMapa'\" [closeBTN]=\"false\">\r\n  </app-paginacao>\r\n</div>\r\n\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\">Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/missao-update/missao-update.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/missao-update/missao-update.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Missão\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"back\">\r\n    <br>\r\n    <form [formGroup]=\"formMissao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\"\r\n                placeholder=\"EX: Corrida no tempo\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Localização</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"localizacao\"\r\n                placeholder=\"EX: Reino das dimensões\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Após adiquirirem o pingente de Chronos, o grupo precisa agora...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.descricao.dirty && formMissao.controls.descricao.errors\"\r\n              margin-left>\r\n              Preencha\r\n              a historia</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Recompensa</ion-label>\r\n              <ion-input (keyup.enter)=\"inserirRecompensa()\" [(ngModel)]=\"recompensa\"\r\n                [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"Insira a recompensa aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n              <ion-button size=\"large\" slot=\"end\" class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\"\r\n                (click)=\"inserirRecompensa()\">\r\n                Adicionar</ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-listas [strings]=\"recompensas\" [titulo]=\"'Lista de Recompensas'\" [isModal]=\"false\"></app-listas>\r\n          </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Tipo de Missão</ion-label>\r\n              <ion-select formControlName=\"tipoMissao\" placeholder=\"Selecione\">\r\n                <ion-select-option [value]=\"tipo[0].value\">{{ tipo[0].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[1].value\">{{ tipo[1].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[2].value\">{{ tipo[2].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[3].value\">{{ tipo[3].template }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Manter privado</ion-label>\r\n              <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                [checked]=\"formMissao.get('isPrivate')\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formMissao.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formMissao.invalid\" (click)=\"salvar()\">Salvar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n</ion-content>\r\n\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/missao/missao.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/missao/missao.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo NPC\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n          (click)=\"novaMissao()\">Novo</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button class=\"back\" color=\"light\" size=\"large\" fill=\"outline\" expand=\"block\" [disabled]=\"false\"\r\n          (click)=\"consultar()\">Listar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"border\" *ngIf=\"novo\">\r\n    <br>\r\n    <form [formGroup]=\"formMissao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"nome\"\r\n                placeholder=\"EX: Corrida no tempo\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.nome.dirty && formMissao.controls.nome.errors\" margin-left>\r\n              Preencha o nome</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Localização</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"localizacao\"\r\n                placeholder=\"EX: Reino das dimensões\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.localizacao.dirty && formMissao.controls.localizacao.errors\"\r\n              margin-left>\r\n              Preencha a localização</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"EX: Após adiquirirem o pingente de Chronos, o grupo precisa agora...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.descricao.dirty && formMissao.controls.descricao.errors\"\r\n              margin-left>\r\n              Preencha\r\n              a historia</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">Recompensa</ion-label>\r\n              <ion-input (keyup.enter)=\"inserirRecompensa()\" [(ngModel)]=\"recompensa\"\r\n                [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\" color=\"light\"\r\n                placeholder=\"Insira a recompensa aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n              <ion-button slot=\"end\" size=\"large\" class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\"\r\n                (click)=\"inserirRecompensa()\">\r\n                Adicionar</ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-listas [strings]=\"recompensas\" [titulo]=\"'Lista de Recompensas'\" [isModal]=\"false\"></app-listas>\r\n          </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label>Tipo de Missão</ion-label>\r\n              <ion-select formControlName=\"tipoMissao\" placeholder=\"Selecione\">\r\n                <ion-select-option [value]=\"tipo[0].value\">{{ tipo[0].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[1].value\">{{ tipo[1].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[2].value\">{{ tipo[2].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[3].value\">{{ tipo[3].template }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.tipoMissao.dirty && formMissao.controls.tipoMissao.errors\"\r\n              margin-left>\r\n              Insira o tipo</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"dark\">\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"light\" formControlName=\"imgURL\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formMissao.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formMissao.invalid\" (click)=\"salvar()\">Salvar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"limiter\" *ngIf=\"display\">\r\n    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n      (notifyParent)=\"getNotification($event)\" [add]=\"true\" [id]=\"'idMissao'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\"\r\n      [tipo]=\"'tipoMissao'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\" (getSelectedObj)=\"selectedObj($event)\">\r\n    </app-paginacao>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\">Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo-update/capitulo-update.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  font-size: 10px;\n  color: red;\n  margin-top: 10px;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby11cGRhdGUvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxjYXBpdHVsby11cGRhdGVcXGNhcGl0dWxvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby11cGRhdGUvY2FwaXR1bG8tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0ksMkNBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdJO0VBQ0ksMkNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvY2FwaXR1bG8tdXBkYXRlL2NhcGl0dWxvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYW5nZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbi5saW1pdGVyIHtcclxuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmRhbmdlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xufVxuXG4uYmFjayB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5saW1pdGVyIHtcbiAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo-update/capitulo-update.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CapituloUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloUpdateComponent", function() { return CapituloUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");









var CapituloUpdateComponent = /** @class */ (function () {
    function CapituloUpdateComponent(formBuilder, storage, alertController, capituloService, missaoService, paginaService, modalCtrl, toast) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.capituloService = capituloService;
        this.missaoService = missaoService;
        this.paginaService = paginaService;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.idMissoes = [];
        this.idMissao = "";
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.add = false;
        this.requestUpdate = false;
        this.capituloEncontrado = false;
        this.formCapitulo = this.formBuilder.group({
            numCapitulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            resumoCapPassado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: [''],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    CapituloUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.consultarMissao();
        this.requestUpdate = false;
        this.loading = true;
        var id = this.capituloService.getStaticID();
        this.capituloService.findById(id)
            .subscribe(function (res) {
            var numCapitulo = res.numCapitulo, titulo = res.titulo, historia = res.historia, imgURL = res.imgURL, resumoCapPassado = res.resumoCapPassado, isPrivate = res.isPrivate, missoes = res.missoes;
            _this.formCapitulo.get('numCapitulo').setValue(numCapitulo);
            _this.formCapitulo.get('titulo').setValue(titulo);
            _this.formCapitulo.get('historia').setValue(historia);
            _this.formCapitulo.get('resumoCapPassado').setValue(resumoCapPassado);
            _this.formCapitulo.get('historia').setValue(historia);
            _this.formCapitulo.get('imgURL').setValue(imgURL);
            if (isPrivate == false) {
                _this.formCapitulo.get('isPrivate').setValue(false);
            }
            else {
                _this.formCapitulo.get('isPrivate').setValue(true);
            }
            _this.idMissoes = missoes.map(function (m) { return m.idMissao; });
            _this.loading = false;
            _this.capituloEncontrado = true;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    CapituloUpdateComponent.prototype.getSelectedChapt = function (evt) {
        this.obj.emit(evt);
    };
    CapituloUpdateComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newCapitulo = {
            numCapitulo: this.formCapitulo.get('numCapitulo').value,
            titulo: this.formCapitulo.get('titulo').value,
            historia: this.formCapitulo.get('historia').value,
            idMissoes: this.idMissoes,
            resumoCapPassado: this.formCapitulo.get('resumoCapPassado').value,
            imgURL: this.formCapitulo.get('imgURL').value,
            isPrivate: this.formCapitulo.get('isPrivate').value,
            idCapitulo: this.capituloService.getStaticID()
        };
        this.capituloService.update(this.newCapitulo)
            .subscribe(function (res) {
            _this.loading = false;
            _this.requestUpdate = true;
            _this.callToast('success', 'Atualizado com sucesso!', 'Missão atualizada');
        }, function (error) {
            _this.loading = false;
        });
    };
    CapituloUpdateComponent.prototype.inserirManualmente = function () {
        var _this = this;
        this.loading = true;
        this.missaoService.findById(this.idMissao)
            .subscribe(function (res) {
            _this.pushIdMissao(res.idMissao);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    CapituloUpdateComponent.prototype.presentError = function (texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Valor inválido',
                            message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapituloUpdateComponent.prototype.novoCapitulo = function () {
        this.consultarMissao();
        this.display = false;
        this.novo = true;
    };
    CapituloUpdateComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    CapituloUpdateComponent.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    CapituloUpdateComponent.prototype.getNotificationMissao = function (evt) {
        if (this.paginaAtualMissao != evt) {
            this.paginaAtualMissao = evt;
            this.consultarMissao();
        }
    };
    CapituloUpdateComponent.prototype.getSelectedObj = function (evt) {
        this.pushIdMissao(evt.id);
    };
    CapituloUpdateComponent.prototype.pushIdMissao = function (id) {
        if (this.idMissoes.length == 0 || !this.idMissoes.includes(id)) {
            this.idMissoes.push(id);
            this.callAdd();
        }
        else {
            this.callFail(id);
        }
    };
    CapituloUpdateComponent.prototype.consultar = function () {
        var p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    CapituloUpdateComponent.prototype.consultarMissao = function () {
        var p = this.missaoService.findPageByCriador(this.paginaAtualMissao.toString());
        this.paginaService.setPromisse(p);
        //this.listar();
    };
    CapituloUpdateComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapituloUpdateComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    CapituloUpdateComponent.prototype.presentExistente = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Já incluso',
                            message: 'A missao: ' + id + ' já está inclusa!',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapituloUpdateComponent.prototype.callAdd = function () {
        this.toast.clear();
        this.toast.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Adicionado com sucesso!'
        });
    };
    CapituloUpdateComponent.prototype.callFail = function (id) {
        this.toast.clear();
        this.toast.add({
            severity: 'error',
            summary: 'Já incluso',
            detail: 'A missao: ' + id + ' já está inclusa!'
        });
    };
    CapituloUpdateComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.clear();
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    CapituloUpdateComponent.prototype.close = function () {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    };
    CapituloUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"] },
        { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CapituloUpdateComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CapituloUpdateComponent.prototype, "cancelarBTN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CapituloUpdateComponent.prototype, "obj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CapituloUpdateComponent.prototype, "add", void 0);
    CapituloUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-capitulo-update',
            template: __webpack_require__(/*! raw-loader!./capitulo-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/capitulo-update/capitulo-update.component.html"),
            styles: [__webpack_require__(/*! ./capitulo-update.component.scss */ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"],
            src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"], src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]])
    ], CapituloUpdateComponent);
    return CapituloUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/capitulo/capitulo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo/capitulo.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGNhcGl0dWxvXFxjYXBpdHVsby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby9jYXBpdHVsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0FGOztBRElBO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvY2FwaXR1bG8vY2FwaXR1bG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuXHJcbi5iYWNrIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuLmxpbWl0ZXIge1xyXG4gIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiIsIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5iYWNrIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbn1cblxuLmxpbWl0ZXIge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/capitulo/capitulo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo/capitulo.component.ts ***!
  \********************************************************************/
/*! exports provided: CapituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapituloComponent", function() { return CapituloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _capitulo_update_capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../capitulo-update/capitulo-update.component */ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");











var CapituloComponent = /** @class */ (function () {
    function CapituloComponent(formBuilder, storage, alertController, capituloService, missaoService, paginaService, toast, modalCtrl, rpgService) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.capituloService = capituloService;
        this.missaoService = missaoService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.rpgService = rpgService;
        this.idMissoes = [];
        this.idMissao = "";
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.add = false;
        this.formCapitulo = this.formBuilder.group({
            numCapitulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            resumoCapPassado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: ['']
        });
    }
    CapituloComponent.prototype.ngOnInit = function () { };
    CapituloComponent.prototype.getSelectedChapt = function (evt) {
        this.obj.emit(evt);
    };
    CapituloComponent.prototype.selectedObj = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.capituloService.setStaticID(event.id);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _capitulo_update_capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__["CapituloUpdateComponent"],
                                backdropDismiss: false,
                                cssClass: 'my-custom-modal-css',
                                id: 'princi'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (res) {
                            var data = res.data;
                            //console.log(res);
                            if (data == true) {
                                var p = _this.capituloService.findPageByCriador(_this.paginaAtual.toString());
                                _this.paginaService.setPromisse(p);
                                _this.paginaService.requestRefresh(true);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CapituloComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newCapitulo = {
            numCapitulo: this.formCapitulo.get('numCapitulo').value,
            titulo: this.formCapitulo.get('titulo').value,
            historia: this.formCapitulo.get('historia').value,
            idMissoes: this.idMissoes,
            resumoCapPassado: this.formCapitulo.get('resumoCapPassado').value,
            idCriador: this.storage.getLocalUserId(),
            imgURL: this.formCapitulo.get('imgURL').value
        };
        this.capituloService.insert(this.newCapitulo)
            .subscribe(function (res) {
            _this.loading = false;
            _this.presentAdicionar(res.idCapitulo);
            _this.formCapitulo.get('numCapitulo').setValue('');
            _this.formCapitulo.get('titulo').setValue('');
            _this.formCapitulo.get('historia').setValue('');
            _this.formCapitulo.get('resumoCapPassado').setValue('');
            _this.idMissoes = [];
            _this.idMissao = '';
            _this.formCapitulo.get('imgURL').setValue('');
            _this.copyToClipboard(res.idCapitulo);
        }, function (error) {
            _this.loading = false;
        });
    };
    CapituloComponent.prototype.inserirManualmente = function () {
        var _this = this;
        this.loading = true;
        this.missaoService.findById(this.idMissao)
            .subscribe(function (res) {
            _this.pushIdMissao(res.idMissao);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    CapituloComponent.prototype.presentError = function (texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Valor inválido',
                            message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapituloComponent.prototype.novoCapitulo = function () {
        this.consultarMissao();
        this.display = false;
        this.novo = true;
    };
    CapituloComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    CapituloComponent.prototype.getNotification = function (evt) {
        evt = Number.parseInt(evt);
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    CapituloComponent.prototype.getNotificationMissao = function (evt) {
        if (this.paginaAtualMissao != evt) {
            this.paginaAtualMissao = evt;
            this.consultarMissao();
        }
    };
    CapituloComponent.prototype.getSelectedObj = function (evt) {
        this.pushIdMissao(evt.id);
    };
    CapituloComponent.prototype.pushIdMissao = function (id) {
        if (this.idMissoes.length == 0 || !this.idMissoes.includes(id)) {
            this.idMissoes.push(id);
            this.callAdd();
        }
        else {
            this.callFail(id);
        }
    };
    CapituloComponent.prototype.consultar = function () {
        var p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    CapituloComponent.prototype.consultarMissao = function () {
        var p = this.missaoService.findPageByCriador(this.paginaAtualMissao.toString());
        this.paginaService.setPromisse(p);
        //this.listar();
    };
    CapituloComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapituloComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    CapituloComponent.prototype.presentExistente = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Já incluso',
                            message: 'A missao: ' + id + ' já está inclusa!',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CapituloComponent.prototype.callAdd = function () {
        this.toast.clear();
        this.toast.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Adicionado com sucesso!'
        });
    };
    CapituloComponent.prototype.callFail = function (id) {
        this.toast.add({
            severity: 'error',
            summary: 'Já incluso',
            detail: 'A missao: ' + id + ' já está inclusa!'
        });
    };
    CapituloComponent.prototype.actionObj = function (event) {
        if (this.rpgService.getDoUpdate()) {
            this.selectedObj(event);
        }
        else {
            this.getSelectedChapt(event);
        }
    };
    CapituloComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"] },
        { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_10__["RpgService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CapituloComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CapituloComponent.prototype, "cancelarBTN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CapituloComponent.prototype, "obj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CapituloComponent.prototype, "add", void 0);
    CapituloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-capitulo',
            template: __webpack_require__(/*! raw-loader!./capitulo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/capitulo/capitulo.component.html"),
            styles: [__webpack_require__(/*! ./capitulo.component.scss */ "./src/app/components/criacoes/capitulo/capitulo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"],
            src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_10__["RpgService"]])
    ], CapituloComponent);
    return CapituloComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes-update/faccoes-update.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\n.background {\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzLXVwZGF0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGZhY2NvZXMtdXBkYXRlXFxmYWNjb2VzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzLXVwZGF0ZS9mYWNjb2VzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNFQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0FDQ0o7O0FER0k7RUFDSSwyQ0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzLXVwZGF0ZS9mYWNjb2VzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iLCIuYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes-update/faccoes-update.component.ts ***!
  \********************************************************************************/
/*! exports provided: FaccoesUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaccoesUpdateComponent", function() { return FaccoesUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/criacoes/faccoes.service */ "./src/app/services/criacoes/faccoes.service.ts");








var FaccoesUpdateComponent = /** @class */ (function () {
    function FaccoesUpdateComponent(formBuilder, storage, alertController, faccaoService, paginaService, toast, modalCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.faccaoService = faccaoService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.menu = true;
        this.cancelarBTN = false;
        this.add = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.requestUpdate = false;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formFaccao = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            objetivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: [''],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    FaccoesUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestUpdate = false;
        this.loading = true;
        var id = this.faccaoService.getStaticID();
        this.faccaoService.findById(id)
            .subscribe(function (res) {
            var descricao = res.descricao, nome = res.nome, objetivo = res.objetivo, imgURL = res.imgURL, isPrivate = res.isPrivate;
            _this.formFaccao.get('nome').setValue(nome);
            _this.formFaccao.get('descricao').setValue(descricao);
            _this.formFaccao.get('objetivo').setValue(objetivo);
            _this.formFaccao.get('imgURL').setValue(imgURL);
            if (isPrivate == false) {
                _this.formFaccao.get('isPrivate').setValue(false);
            }
            else {
                _this.formFaccao.get('isPrivate').setValue(true);
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    FaccoesUpdateComponent.prototype.getSelectedObj = function (evt) {
        this.obj.emit(evt);
    };
    FaccoesUpdateComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newFaccao = {
            id: this.faccaoService.getStaticID(),
            nome: this.formFaccao.get('nome').value,
            descricao: this.formFaccao.get('descricao').value,
            objetivo: this.formFaccao.get('objetivo').value,
            imgURL: this.formFaccao.get('imgURL').value,
            isPrivate: this.formFaccao.get('isPrivate').value
        };
        this.faccaoService.update(this.newFaccao)
            .subscribe(function (res) {
            _this.loading = false;
            _this.requestUpdate = true;
            _this.callToast('success', 'Atualizado com sucesso!', 'Facção atualizada');
        }, function (error) {
            _this.loading = false;
        });
    };
    FaccoesUpdateComponent.prototype.novaFaccao = function () {
        this.display = false;
        this.novo = true;
    };
    FaccoesUpdateComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    FaccoesUpdateComponent.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    FaccoesUpdateComponent.prototype.consultar = function () {
        var p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    FaccoesUpdateComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaccoesUpdateComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    FaccoesUpdateComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    FaccoesUpdateComponent.prototype.close = function () {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    };
    FaccoesUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FaccoesUpdateComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FaccoesUpdateComponent.prototype, "cancelarBTN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FaccoesUpdateComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FaccoesUpdateComponent.prototype, "obj", void 0);
    FaccoesUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faccoes-update',
            template: __webpack_require__(/*! raw-loader!./faccoes-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/faccoes-update/faccoes-update.component.html"),
            styles: [__webpack_require__(/*! ./faccoes-update.component.scss */ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], FaccoesUpdateComponent);
    return FaccoesUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/faccoes/faccoes.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes/faccoes.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcZmFjY29lc1xcZmFjY29lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzL2ZhY2NvZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzL2ZhY2NvZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbi5saW1pdGVyIHtcclxuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiIsIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5iYWNrIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbn1cblxuLmxpbWl0ZXIge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/faccoes/faccoes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes/faccoes.component.ts ***!
  \******************************************************************/
/*! exports provided: FaccoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaccoesComponent", function() { return FaccoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/criacoes/faccoes.service */ "./src/app/services/criacoes/faccoes.service.ts");
/* harmony import */ var _faccoes_update_faccoes_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../faccoes-update/faccoes-update.component */ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");










var FaccoesComponent = /** @class */ (function () {
    function FaccoesComponent(formBuilder, storage, alertController, faccaoService, paginaService, toast, modalCtrl, rpgService) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.faccaoService = faccaoService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.rpgService = rpgService;
        this.menu = true;
        this.cancelarBTN = false;
        this.add = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formFaccao = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            objetivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: ['']
        });
    }
    FaccoesComponent.prototype.ngOnInit = function () { };
    FaccoesComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newFaccao = {
            nome: this.formFaccao.get('nome').value,
            descricao: this.formFaccao.get('descricao').value,
            objetivo: this.formFaccao.get('objetivo').value,
            idCriador: this.storage.getLocalUserId(),
            imgURL: this.formFaccao.get('imgURL').value,
        };
        this.faccaoService.insert(this.newFaccao)
            .subscribe(function (res) {
            _this.loading = false;
            _this.presentAdicionar(res.idFaccao);
            _this.formFaccao.get('nome').setValue('');
            _this.formFaccao.get('descricao').setValue('');
            _this.formFaccao.get('objetivo').setValue('');
            _this.formFaccao.get('imgURL').setValue('');
            _this.copyToClipboard(res.idFaccao);
        }, function (error) {
            _this.loading = false;
        });
    };
    FaccoesComponent.prototype.novaFaccao = function () {
        this.display = false;
        this.novo = true;
    };
    FaccoesComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    FaccoesComponent.prototype.getNotification = function (evt) {
        evt = Number.parseInt(evt);
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    FaccoesComponent.prototype.consultar = function () {
        var p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    FaccoesComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaccoesComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    FaccoesComponent.prototype.selectedObj = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.faccaoService.setStaticID(event.id);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _faccoes_update_faccoes_update_component__WEBPACK_IMPORTED_MODULE_8__["FaccoesUpdateComponent"],
                                backdropDismiss: false,
                                cssClass: 'my-custom-modal-css',
                                id: 'princi'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (res) {
                            var data = res.data;
                            //console.log(res);
                            if (data == true) {
                                var p = _this.faccaoService.findPageByCriador(_this.paginaAtual.toString());
                                _this.paginaService.setPromisse(p);
                                _this.paginaService.requestRefresh(true);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FaccoesComponent.prototype.getSelectedObj = function (evt) {
        this.obj.emit(evt);
    };
    FaccoesComponent.prototype.actionObj = function (event) {
        if (this.rpgService.getDoUpdate()) {
            this.selectedObj(event);
        }
        else {
            this.getSelectedObj(event);
        }
    };
    FaccoesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_9__["RpgService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FaccoesComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FaccoesComponent.prototype, "cancelarBTN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FaccoesComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FaccoesComponent.prototype, "obj", void 0);
    FaccoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faccoes',
            template: __webpack_require__(/*! raw-loader!./faccoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/faccoes/faccoes.component.html"),
            styles: [__webpack_require__(/*! ./faccoes.component.scss */ "./src/app/components/criacoes/faccoes/faccoes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_9__["RpgService"]])
    ], FaccoesComponent);
    return FaccoesComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/historia.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/criacoes/historia.module.ts ***!
  \********************************************************/
/*! exports provided: HistoriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaModule", function() { return HistoriaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _missao_missao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./missao/missao.component */ "./src/app/components/criacoes/missao/missao.component.ts");
/* harmony import */ var _capitulo_capitulo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capitulo/capitulo.component */ "./src/app/components/criacoes/capitulo/capitulo.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _faccoes_faccoes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faccoes/faccoes.component */ "./src/app/components/criacoes/faccoes/faccoes.component.ts");
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mapa/mapa.component */ "./src/app/components/criacoes/mapa/mapa.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");















var HistoriaModule = /** @class */ (function () {
    function HistoriaModule() {
    }
    HistoriaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_missao_missao_component__WEBPACK_IMPORTED_MODULE_4__["MissaoComponent"], _capitulo_capitulo_component__WEBPACK_IMPORTED_MODULE_5__["CapituloComponent"], _faccoes_faccoes_component__WEBPACK_IMPORTED_MODULE_12__["FaccoesComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_13__["MapaComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadSpinnerModule"],
                _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__["PaginacaoModule"],
                _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__["ListasModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
                _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_14__["ImagemDisplayModule"]
            ],
            entryComponents: [_missao_missao_component__WEBPACK_IMPORTED_MODULE_4__["MissaoComponent"], _faccoes_faccoes_component__WEBPACK_IMPORTED_MODULE_12__["FaccoesComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_13__["MapaComponent"],],
            exports: [_missao_missao_component__WEBPACK_IMPORTED_MODULE_4__["MissaoComponent"], _capitulo_capitulo_component__WEBPACK_IMPORTED_MODULE_5__["CapituloComponent"], _faccoes_faccoes_component__WEBPACK_IMPORTED_MODULE_12__["FaccoesComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_13__["MapaComponent"],],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_11__["MessageService"]]
        })
    ], HistoriaModule);
    return HistoriaModule;
}());



/***/ }),

/***/ "./src/app/components/criacoes/mapa-update/mapa-update.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/criacoes/mapa-update/mapa-update.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.no-margin {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #7a7a7a !important;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n\nbody {\n  background-color: #7a7a7a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhLXVwZGF0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXG1hcGEtdXBkYXRlXFxtYXBhLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhLXVwZGF0ZS9tYXBhLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkNBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0NGOztBREdFO0VBQ0UsMkNBQUE7QUNBSjs7QURJQTtFQUNFLG9DQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL21hcGEtdXBkYXRlL21hcGEtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1pbnNlcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxufVxyXG4iLCIuYnRuLWluc2VydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXQge1xuICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxuXG4ubm8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3YTdhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn1cblxuLmJhY2sge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTdhN2EgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/mapa-update/mapa-update.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/criacoes/mapa-update/mapa-update.component.ts ***!
  \**************************************************************************/
/*! exports provided: MapaUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaUpdateComponent", function() { return MapaUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mapa/mapa.service */ "./src/app/services/mapa/mapa.service.ts");








var MapaUpdateComponent = /** @class */ (function () {
    function MapaUpdateComponent(formBuilder, storage, alertController, mapaService, paginaService, toast, modalCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.mapaService = mapaService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.menu = true;
        this.cancelarBTN = false;
        this.add = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.requestUpdate = false;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formMapa = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            urlMapa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    MapaUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestUpdate = false;
        this.loading = true;
        var id = this.mapaService.getStaticID();
        this.mapaService.findById(id)
            .subscribe(function (res) {
            // console.log(res);
            var idMapa = res.idMapa, descricao = res.descricao, nome = res.nome, urlMapa = res.urlMapa, isPrivate = res.isPrivate;
            _this.formMapa.get('nome').setValue(nome);
            _this.formMapa.get('descricao').setValue(descricao);
            _this.formMapa.get('urlMapa').setValue(urlMapa);
            if (isPrivate == false) {
                _this.formMapa.get('isPrivate').setValue(false);
            }
            else {
                _this.formMapa.get('isPrivate').setValue(true);
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    MapaUpdateComponent.prototype.salvar = function () {
        var _this = this;
        var id = this.mapaService.getStaticID();
        this.requestUpdate = true;
        this.loading = true;
        this.newMapa = {
            id: id,
            nome: this.formMapa.get('nome').value,
            descricao: this.formMapa.get('descricao').value,
            urlMapa: this.formMapa.get('urlMapa').value,
            isPrivate: this.formMapa.get('isPrivate').value
        };
        //console.log(this.newMapa);
        this.mapaService.update(this.newMapa)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast('success', 'Atualizado com sucesso!', 'Mapa atualizado');
        }, function (error) {
            _this.loading = false;
        });
    };
    MapaUpdateComponent.prototype.novoMapa = function () {
        this.display = false;
        this.novo = true;
    };
    MapaUpdateComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    MapaUpdateComponent.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    MapaUpdateComponent.prototype.consultar = function () {
        var p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    MapaUpdateComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atualizado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapaUpdateComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    MapaUpdateComponent.prototype.close = function () {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    };
    MapaUpdateComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    MapaUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapaUpdateComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapaUpdateComponent.prototype, "cancelarBTN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapaUpdateComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MapaUpdateComponent.prototype, "obj", void 0);
    MapaUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa-update',
            template: __webpack_require__(/*! raw-loader!./mapa-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mapa-update/mapa-update.component.html"),
            styles: [__webpack_require__(/*! ./mapa-update.component.scss */ "./src/app/components/criacoes/mapa-update/mapa-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], MapaUpdateComponent);
    return MapaUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/mapa/mapa.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/criacoes/mapa/mapa.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcbWFwYVxcbWFwYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhL21hcGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhL21hcGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbi5saW1pdGVyIHtcclxuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiIsIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5iYWNrIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbn1cblxuLmxpbWl0ZXIge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/mapa/mapa.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/criacoes/mapa/mapa.component.ts ***!
  \************************************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mapa/mapa.service */ "./src/app/services/mapa/mapa.service.ts");
/* harmony import */ var _mapa_update_mapa_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mapa-update/mapa-update.component */ "./src/app/components/criacoes/mapa-update/mapa-update.component.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");










var MapaComponent = /** @class */ (function () {
    function MapaComponent(formBuilder, storage, alertController, mapaService, paginaService, toast, modalCtrl, rpgService) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.mapaService = mapaService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.rpgService = rpgService;
        this.menu = true;
        this.cancelarBTN = false;
        this.add = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.paginaAtual = 0;
        this.paginaAtualMissao = 0;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formMapa = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            urlMapa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    MapaComponent.prototype.ngOnInit = function () { };
    MapaComponent.prototype.selectedObj = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapaService.setStaticID(event.id);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _mapa_update_mapa_update_component__WEBPACK_IMPORTED_MODULE_8__["MapaUpdateComponent"],
                                backdropDismiss: false,
                                cssClass: 'my-custom-modal-css',
                                id: 'princi'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (res) {
                            var data = res.data;
                            if (data == true) {
                                var p = _this.mapaService.findPageByCriador(_this.paginaAtual.toString());
                                _this.paginaService.setPromisse(p);
                                _this.paginaService.requestRefresh(true);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MapaComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newMapa = {
            nome: this.formMapa.get('nome').value,
            descricao: this.formMapa.get('descricao').value,
            urlMapa: this.formMapa.get('urlMapa').value,
            idCriador: this.storage.getLocalUserId(),
        };
        this.mapaService.insert(this.newMapa)
            .subscribe(function (res) {
            _this.loading = false;
            _this.presentAdicionar(res.idMapa);
            _this.formMapa.get('nome').setValue('');
            _this.formMapa.get('descricao').setValue('');
            _this.formMapa.get('urlMapa').setValue('');
            _this.copyToClipboard(res.idMapa);
        }, function (error) {
            _this.loading = false;
        });
    };
    MapaComponent.prototype.novoMapa = function () {
        this.display = false;
        this.novo = true;
    };
    MapaComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    MapaComponent.prototype.getNotification = function (evt) {
        evt = Number.parseInt(evt);
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    MapaComponent.prototype.consultar = function () {
        var p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    MapaComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapaComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    MapaComponent.prototype.getSelectedObj = function (evt) {
        this.obj.emit(evt);
    };
    MapaComponent.prototype.actionObj = function (event) {
        if (this.rpgService.getDoUpdate()) {
            this.selectedObj(event);
        }
        else {
            this.getSelectedObj(event);
        }
    };
    MapaComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_9__["RpgService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapaComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapaComponent.prototype, "cancelarBTN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MapaComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MapaComponent.prototype, "obj", void 0);
    MapaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa',
            template: __webpack_require__(/*! raw-loader!./mapa.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mapa/mapa.component.html"),
            styles: [__webpack_require__(/*! ./mapa.component.scss */ "./src/app/components/criacoes/mapa/mapa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_9__["RpgService"]])
    ], MapaComponent);
    return MapaComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/missao-update/missao-update.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/criacoes/missao-update/missao-update.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8tdXBkYXRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcbWlzc2FvLXVwZGF0ZVxcbWlzc2FvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8tdXBkYXRlL21pc3Nhby11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHSTtFQUNJLDJDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL21pc3Nhby11cGRhdGUvbWlzc2FvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG4ubGltaXRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn1cblxuLmJhY2sge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufVxuXG4ubGltaXRlciB7XG4gIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRhbmdlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/criacoes/missao-update/missao-update.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/criacoes/missao-update/missao-update.component.ts ***!
  \******************************************************************************/
/*! exports provided: MissaoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissaoUpdateComponent", function() { return MissaoUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");









var MissaoUpdateComponent = /** @class */ (function () {
    function MissaoUpdateComponent(formBuilder, storage, alertController, missaoService, paginaService, toast, modalCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.missaoService = missaoService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.recompensas = [];
        this.recompensa = "";
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.tipo = src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_5__["TipoMissao"];
        this.paginaAtual = 0;
        this.requestUpdate = false;
        this.formMissao = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            localizacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoMissao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: [''],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    MissaoUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestUpdate = false;
        this.loading = true;
        var id = this.missaoService.getStaticID();
        this.missaoService.findById(id)
            .subscribe(function (res) {
            var descricao = res.descricao, nome = res.nome, localizacao = res.localizacao, imgURL = res.imgURL, tipoMissao = res.tipoMissao, isPrivate = res.isPrivate, recompensas = res.recompensas;
            _this.formMissao.get('nome').setValue(nome);
            _this.formMissao.get('descricao').setValue(descricao);
            _this.formMissao.get('localizacao').setValue(localizacao);
            _this.formMissao.get('imgURL').setValue(imgURL);
            _this.formMissao.get('tipoMissao').setValue(_this.getCurrentType(tipoMissao));
            if (isPrivate == false) {
                _this.formMissao.get('isPrivate').setValue(false);
            }
            else {
                _this.formMissao.get('isPrivate').setValue(true);
            }
            _this.recompensas = recompensas;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    MissaoUpdateComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newMissao = {
            idMissao: this.missaoService.getStaticID(),
            nome: this.formMissao.get('nome').value,
            descricao: this.formMissao.get('descricao').value,
            localizacao: this.formMissao.get('localizacao').value,
            recompensas: this.recompensas,
            tipoMissao: this.formMissao.get('tipoMissao').value,
            imgURL: this.formMissao.get('imgURL').value,
            isPrivate: this.formMissao.get('isPrivate').value
        };
        this.missaoService.update(this.newMissao)
            .subscribe(function (res) {
            _this.loading = false;
            _this.requestUpdate = true;
            _this.callToast('success', 'Atualizado com sucesso!', 'Missão atualizada');
        }, function (error) {
            _this.loading = false;
        });
        //this.loading = false;
    };
    MissaoUpdateComponent.prototype.inserirRecompensa = function () {
        if (this.recompensa.length < 5) {
            this.presentError('recompensa');
        }
        else {
            this.recompensas.push(this.recompensa);
            this.recompensa = "";
        }
    };
    MissaoUpdateComponent.prototype.presentError = function (texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Valor inválido',
                            message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MissaoUpdateComponent.prototype.novaMissao = function () {
        this.display = false;
        this.novo = true;
    };
    MissaoUpdateComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    MissaoUpdateComponent.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    MissaoUpdateComponent.prototype.consultar = function () {
        var p = this.missaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    MissaoUpdateComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MissaoUpdateComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    MissaoUpdateComponent.prototype.getCurrentType = function (tipo) {
        switch (tipo) {
            case "PRINCIPAL":
                return 0;
                break;
            case "SECUNDARIA":
                return 1;
                break;
            case "ATIVIDADE":
                return 2;
                break;
            case "EVENTO":
                return 3;
                break;
        }
    };
    MissaoUpdateComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    MissaoUpdateComponent.prototype.close = function () {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    };
    MissaoUpdateComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_8__["MissaoService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MissaoUpdateComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MissaoUpdateComponent.prototype, "cancelarBTN", void 0);
    MissaoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-missao-update',
            template: __webpack_require__(/*! raw-loader!./missao-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/missao-update/missao-update.component.html"),
            styles: [__webpack_require__(/*! ./missao-update.component.scss */ "./src/app/components/criacoes/missao-update/missao-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_8__["MissaoService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__["PaginacaoService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], MissaoUpdateComponent);
    return MissaoUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/missao/missao.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/criacoes/missao/missao.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-content {\n  --background: none;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.limiter {\n  max-width: 95% !important;\n  width: 95% !important;\n  margin: auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8vQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxtaXNzYW9cXG1pc3Nhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8vbWlzc2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL21pc3Nhby9taXNzYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuLmxpbWl0ZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iLCIuYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmJhY2sge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufVxuXG4ubGltaXRlciB7XG4gIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRhbmdlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/missao/missao.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/criacoes/missao/missao.component.ts ***!
  \****************************************************************/
/*! exports provided: MissaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissaoComponent", function() { return MissaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");
/* harmony import */ var _missao_update_missao_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../missao-update/missao-update.component */ "./src/app/components/criacoes/missao-update/missao-update.component.ts");









var MissaoComponent = /** @class */ (function () {
    function MissaoComponent(formBuilder, storage, alertController, missaoService, paginaService, modalCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.missaoService = missaoService;
        this.paginaService = paginaService;
        this.modalCtrl = modalCtrl;
        this.recompensas = [];
        this.recompensa = "";
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.novo = false;
        this.tipo = src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["TipoMissao"];
        this.paginaAtual = 0;
        this.formMissao = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            localizacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoMissao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: ['']
        });
    }
    MissaoComponent.prototype.ngOnInit = function () { };
    MissaoComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.newMissao = {
            nome: this.formMissao.get('nome').value,
            descricao: this.formMissao.get('descricao').value,
            localizacao: this.formMissao.get('localizacao').value,
            recompensas: this.recompensas,
            tipoMissao: this.formMissao.get('tipoMissao').value,
            idCriador: this.storage.getLocalUserId(),
            imgURL: this.formMissao.get('imgURL').value,
        };
        this.missaoService.insert(this.newMissao)
            .subscribe(function (res) {
            _this.loading = false;
            _this.presentAdicionar(res.idMissao);
            _this.formMissao.get('nome').setValue('');
            _this.formMissao.get('descricao').setValue('');
            _this.formMissao.get('localizacao').setValue('');
            _this.formMissao.get('tipoMissao').setValue('');
            _this.recompensas = [];
            _this.formMissao.get('imgURL').setValue('');
        }, function (error) {
            _this.loading = false;
        });
    };
    MissaoComponent.prototype.inserirRecompensa = function () {
        if (this.recompensa.length < 5) {
            this.presentError('recompensa');
        }
        else {
            this.recompensas.push(this.recompensa);
            this.recompensa = "";
        }
    };
    MissaoComponent.prototype.presentError = function (texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Valor inválido',
                            message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MissaoComponent.prototype.novaMissao = function () {
        this.display = false;
        this.novo = true;
    };
    MissaoComponent.prototype.listar = function () {
        this.display = true;
        this.novo = false;
    };
    MissaoComponent.prototype.getNotification = function (evt) {
        evt = Number.parseInt(evt);
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    MissaoComponent.prototype.consultar = function () {
        var p = this.missaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    MissaoComponent.prototype.presentAdicionar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Criado com sucesso!',
                            message: 'Código: ' + id,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.copyToClipboard(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MissaoComponent.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    MissaoComponent.prototype.selectedObj = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.missaoService.setStaticID(event.id);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _missao_update_missao_update_component__WEBPACK_IMPORTED_MODULE_8__["MissaoUpdateComponent"],
                                backdropDismiss: false,
                                cssClass: 'my-custom-modal-css',
                                id: 'princi'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (res) {
                            var data = res.data;
                            //console.log(res);
                            if (data == true) {
                                var p = _this.missaoService.findPageByCriador(_this.paginaAtual.toString());
                                _this.paginaService.setPromisse(p);
                                _this.paginaService.requestRefresh(true);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MissaoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MissaoComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MissaoComponent.prototype, "cancelarBTN", void 0);
    MissaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-missao',
            template: __webpack_require__(/*! raw-loader!./missao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/missao/missao.component.html"),
            styles: [__webpack_require__(/*! ./missao.component.scss */ "./src/app/components/criacoes/missao/missao.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], MissaoComponent);
    return MissaoComponent;
}());



/***/ }),

/***/ "./src/app/services/criacoes/faccoes.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/criacoes/faccoes.service.ts ***!
  \******************************************************/
/*! exports provided: FaccoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaccoesService", function() { return FaccoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var FaccoesService = /** @class */ (function () {
    function FaccoesService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    FaccoesService.prototype.getStaticID = function () {
        return this.staticID;
    };
    FaccoesService.prototype.setStaticID = function (id) {
        this.staticID = id;
    };
    FaccoesService.prototype.findPageByCriador = function (page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '20'; }
        var orderBy = 'nome';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('orderBy', orderBy)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "faccao/criador", {
            params: params,
            observe: 'body',
        });
    };
    FaccoesService.prototype.insert = function (dto) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "faccao", dto);
    };
    FaccoesService.prototype.update = function (dto) {
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "faccao", dto);
    };
    FaccoesService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "faccao/" + id);
    };
    FaccoesService.prototype.doCopy = function (idFaccao) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idFaccao', idFaccao);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "faccao/copiar", {
            params: params,
            observe: 'body',
        });
    };
    FaccoesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    FaccoesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], FaccoesService);
    return FaccoesService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var CapituloService = /** @class */ (function () {
    function CapituloService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    CapituloService.prototype.getStaticID = function () {
        return this.staticID;
    };
    CapituloService.prototype.setStaticID = function (id) {
        this.staticID = id;
    };
    CapituloService.prototype.findPageByCriador = function (page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '20'; }
        var orderBy = 'titulo';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('orderBy', orderBy)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "capitulo/criador", {
            params: params,
            observe: 'body',
        });
    };
    CapituloService.prototype.insert = function (dto) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "capitulo", dto);
    };
    CapituloService.prototype.update = function (dto) {
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "capitulo", dto);
    };
    CapituloService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "capitulo/" + id);
    };
    CapituloService.prototype.doCopy = function (idCapitulo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idCapitulo', idCapitulo);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "capitulo/copiar", {
            params: params,
            observe: 'body',
        });
    };
    CapituloService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    CapituloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], CapituloService);
    return CapituloService;
}());



/***/ }),

/***/ "./src/app/services/historia/missao.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/historia/missao.service.ts ***!
  \*****************************************************/
/*! exports provided: MissaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissaoService", function() { return MissaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var MissaoService = /** @class */ (function () {
    function MissaoService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    MissaoService.prototype.getStaticID = function () {
        return this.staticID;
    };
    MissaoService.prototype.setStaticID = function (id) {
        this.staticID = id;
    };
    MissaoService.prototype.findPageByCriador = function (page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '20'; }
        var orderBy = 'nome';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('orderBy', orderBy)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "missao/criador", {
            params: params,
            observe: 'body',
        });
    };
    MissaoService.prototype.insert = function (dto) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "missao", dto);
    };
    MissaoService.prototype.update = function (dto) {
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "missao", dto);
    };
    MissaoService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "missao/" + id);
    };
    MissaoService.prototype.doCopy = function (idMissao) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idMissao', idMissao);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "missao/copiar", {
            params: params,
            observe: 'body',
        });
    };
    MissaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    MissaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], MissaoService);
    return MissaoService;
}());



/***/ }),

/***/ "./src/app/services/mapa/mapa.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/mapa/mapa.service.ts ***!
  \***********************************************/
/*! exports provided: MapaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaService", function() { return MapaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var MapaService = /** @class */ (function () {
    function MapaService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    MapaService.prototype.getStaticID = function () {
        return this.staticID;
    };
    MapaService.prototype.setStaticID = function (id) {
        this.staticID = id;
    };
    MapaService.prototype.findPageByCriador = function (page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '20'; }
        var orderBy = 'nome';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('orderBy', orderBy)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mapa/criador", {
            params: params,
            observe: 'body',
        });
    };
    MapaService.prototype.insert = function (dto) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mapa", dto);
    };
    MapaService.prototype.update = function (dto) {
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mapa", dto);
    };
    MapaService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mapa/" + id, {
            responseType: 'json',
            observe: 'body',
        });
    };
    MapaService.prototype.doCopy = function (idMapa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idMapa', idMapa);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mapa/copiar", {
            params: params,
            observe: 'body',
        });
    };
    MapaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    MapaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], MapaService);
    return MapaService;
}());



/***/ }),

/***/ "./src/app/services/rpg/rpg.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/rpg/rpg.service.ts ***!
  \*********************************************/
/*! exports provided: RpgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgService", function() { return RpgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var RpgService = /** @class */ (function () {
    function RpgService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.doUpdate = true;
        this.newRpg = {
            descricao: undefined,
            historia: undefined,
            idAliados: undefined,
            idCapitulos: undefined,
            idFaccoesBoas: undefined,
            idFaccoesHostis: undefined,
            idFaccoesNeutras: undefined,
            idFichaModelo: undefined,
            idInimigos: undefined,
            idMapas: undefined,
            idNeutros: undefined,
            idSistemas: undefined,
            nome: undefined,
            tipoRPG: undefined,
            imgURL: undefined
        };
    }
    RpgService.prototype.getStaticID = function () {
        return this.staticID;
    };
    RpgService.prototype.setStaticID = function (id) {
        this.staticID = id;
    };
    RpgService.prototype.getDoUpdate = function () {
        return this.doUpdate;
    };
    RpgService.prototype.setDoUpdate = function (doUpdate) {
        this.doUpdate = doUpdate;
    };
    RpgService.prototype.insertInfo = function (obj) {
        this.newRpg.nome = obj.nome;
        this.newRpg.descricao = obj.descricao;
        this.newRpg.historia = obj.historia;
        this.newRpg.tipoRPG = obj.tipoRPG;
        this.newRpg.imgURL = obj.imgURL;
    };
    RpgService.prototype.insertAliados = function (idAliados) {
        this.newRpg.idAliados = idAliados;
    };
    RpgService.prototype.insertInimigos = function (idInimigos) {
        this.newRpg.idInimigos = idInimigos;
    };
    RpgService.prototype.insertNeutros = function (idNeutros) {
        this.newRpg.idNeutros = idNeutros;
    };
    RpgService.prototype.insertFaccoesBoas = function (idFaccoesBoas) {
        this.newRpg.idFaccoesBoas = idFaccoesBoas;
    };
    RpgService.prototype.insertFaccoesNeutras = function (idFaccoesNeutras) {
        this.newRpg.idFaccoesNeutras = idFaccoesNeutras;
    };
    RpgService.prototype.insertFaccoesHostis = function (idFaccoesHostis) {
        this.newRpg.idFaccoesHostis = idFaccoesHostis;
    };
    RpgService.prototype.insertCapitulo = function (idCapitulo) {
        this.newRpg.idCapitulos = idCapitulo;
    };
    RpgService.prototype.insertFichaModelo = function (idFichaModelo) {
        this.newRpg.idFichaModelo = idFichaModelo;
    };
    RpgService.prototype.insertRegras = function (idRegras) {
        this.newRpg.idSistemas = idRegras;
        return this.insert(this.newRpg);
    };
    RpgService.prototype.insertMapas = function (idMapas) {
        this.newRpg.idMapas = idMapas;
    };
    RpgService.prototype.insert = function (obj) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg", obj, {
            responseType: "json",
            observe: "body"
        });
    };
    RpgService.prototype.check = function () {
        console.log(this.newRpg);
    };
    RpgService.prototype.findPageByTipoRPG = function (tipoRPG, page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '10'; }
        console.log(tipoRPG);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('tipoRPG', tipoRPG)
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/page", {
            params: params,
            observe: 'body',
        });
    };
    RpgService.prototype.doCopy = function (idRPG) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idRPG', idRPG);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/copiar", {
            params: params,
            observe: 'body',
        });
    };
    RpgService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/" + id);
    };
    RpgService.prototype.findPageByCriador = function (page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '10'; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/criador", {
            params: params,
            observe: 'body',
        });
    };
    RpgService.prototype.updateBasic = function (dto) {
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg", dto);
    };
    RpgService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    RpgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], RpgService);
    return RpgService;
}());



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~gercapitulos-gercapitulos-module~gerfaccoes-gerfaccoes-module~germa~86bb7768-es5.js.map