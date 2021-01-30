(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~gercapitulos-gercapitulos-module~gerfaccoes-gerfaccoes-module~germa~86bb7768"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/capitulo-update/capitulo-update.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/capitulo-update/capitulo-update.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Capítulo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <br>\r\n\r\n    <div class=\"border\"> \r\n      <form [formGroup]=\"formCapitulo\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Número do capítulo</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"numCapitulo\" placeholder=\"EX: 1\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formCapitulo.controls.numCapitulo.dirty && formCapitulo.controls.numCapitulo.errors\" margin-left>\r\n                Preencha apenas com números</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Título</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"titulo\" placeholder=\"EX: Epílogo\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formCapitulo.controls.titulo.dirty && formCapitulo.controls.titulo.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">História</ion-label>\r\n                <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"\r\n                  placeholder=\"EX: Após a Cidadela ter colapsado...\"></ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formCapitulo.controls.historia.dirty && formCapitulo.controls.historia.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Resumo do capitulo anterior</ion-label>\r\n                <ion-textarea formControlName=\"resumoCapPassado\" type=\"text-area\" color=\"primary\"\r\n                  placeholder=\"EX: Não há!\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formCapitulo.controls.resumoCapPassado.dirty && formCapitulo.controls.resumoCapPassado.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label>Manter privado</ion-label>\r\n                <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                  [checked]=\"formCapitulo.get('isPrivate')\"></ion-toggle>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Código Missão</ion-label>\r\n                <ion-input [(ngModel)]=\"idMissao\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                  color=\"primary\" placeholder=\"Insira o código da missão aqui, então, clique em: 'Adicionar'\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-button class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\"\r\n                (click)=\"inserirManualmente()\">\r\n                Adicionar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <br>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <div>\r\n                <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                  (notifyParent)=\"getNotificationMissao($event)\" (getSelectedObj)=\"getSelectedObj($event)\" [add]=\"true\"\r\n                  [id]=\"'idMissao'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'tipoMissao'\" [imgURL]=\"'imgURL'\">\r\n                </app-paginacao>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <app-listas [isModal]=\"false\" [strings]=\"idMissoes\" [titulo]=\"'Lista de Missões adicionadas'\">\r\n              </app-listas>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <br>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">URL da image</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"\r\n                  placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formCapitulo.get('imgURL').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formCapitulo.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"true\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/capitulo/capitulo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/capitulo/capitulo.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo Capitulo!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"novoCapitulo()\">Novo</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"consultar()\">Listar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <br>\r\n\r\n  <div *ngIf=\"novo\">\r\n    <form [formGroup]=\"formCapitulo\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo border\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Número do capítulo</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"numCapitulo\" placeholder=\"EX: 1\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\"\r\n              *ngIf=\"formCapitulo.controls.numCapitulo.dirty && formCapitulo.controls.numCapitulo.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Título</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"titulo\" placeholder=\"EX: Epílogo\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formCapitulo.controls.titulo.dirty && formCapitulo.controls.titulo.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">História</ion-label>\r\n              <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"\r\n                placeholder=\"EX: Após a Cidadela ter colapsado...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formCapitulo.controls.historia.dirty && formCapitulo.controls.historia.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Resumo do capitulo anterior</ion-label>\r\n              <ion-textarea formControlName=\"resumoCapPassado\" type=\"text-area\" color=\"primary\"\r\n                placeholder=\"EX: Não há!\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\"\r\n              *ngIf=\"formCapitulo.controls.resumoCapPassado.dirty && formCapitulo.controls.resumoCapPassado.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Código Missão</ion-label>\r\n              <ion-input [(ngModel)]=\"idMissao\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                color=\"primary\" placeholder=\"Insira o código da missão aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n            </ion-item>\r\n            <ion-button class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\" (click)=\"inserirManualmente()\">\r\n              Adicionar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <br>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <div>\r\n              <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                (notifyParent)=\"getNotificationMissao($event)\" (getSelectedObj)=\"getSelectedObj($event)\" [add]=\"true\"\r\n                [id]=\"'idMissao'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'tipoMissao'\" [imgURL]=\"'imgURL'\">\r\n              </app-paginacao>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <app-listas [isModal]=\"false\" [strings]=\"idMissoes\" [titulo]=\"'Lista de Missões adicionadas'\"></app-listas>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <br>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"\r\n                placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formCapitulo.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formCapitulo.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=\"display\">\r\n    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n      (notifyParent)=\"getNotification($event)\" (getSelectedObj)=\"selectedObj($event)\" [add]=\"true\"\r\n      [id]=\"'idCapitulo'\" [nome]=\"'titulo'\" [descricao]=\"'historia'\" [tipo]=\"'numCapitulo'\" [closeBTN]=\"false\"\r\n      [imgURL]=\"'imgURL'\">\r\n    </app-paginacao>\r\n  </div>\r\n\r\n  <ion-footer *ngIf=\"cancelarBTN\">\r\n    <ion-toolbar>\r\n      <ion-button expand=\"block\" >Cancelar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-grid>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/faccoes-update/faccoes-update.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/faccoes-update/faccoes-update.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Facção\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n\r\n    <div class=\"border\">\r\n      <form [formGroup]=\"formFaccao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Nome</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"\r\n                  placeholder=\"EX: O Abatedouro\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.nome.dirty && formFaccao.controls.nome.errors\" margin-left>\r\n                Preencha apenas com números</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Descrição</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"descricao\"\r\n                  placeholder=\"EX: Os mais infâmes e nojentos crimonosos liderados por Pigsaw...\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.descricao.dirty && formFaccao.controls.descricao.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Objetivo</ion-label>\r\n                <ion-textarea formControlName=\"objetivo\" type=\"text-area\" color=\"primary\"\r\n                  placeholder=\"EX: Matar, roubar, estuprar, torturar e qualquer outra coisa que seja maligna\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.objetivo.dirty && formFaccao.controls.objetivo.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"light\">\r\n                <ion-label>Manter privado</ion-label>\r\n                <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                  [checked]=\"formFaccao.get('isPrivate')\"></ion-toggle>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">URL da image</ion-label>\r\n                <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"\r\n                  placeholder=\"EX: https://image.shutterstock.com/image-illustration/butchery-flat-raster-icon-isolated-260nw-618904085.jpg\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formFaccao.get('imgURL').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formFaccao.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-footer *ngIf=\"true\">\r\n    <ion-toolbar>\r\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n</ion-content>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/faccoes/faccoes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/faccoes/faccoes.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie uma nova facção\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"novaFaccao()\">Novo</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"consultar()\">Listar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"novo\">\r\n  <form [formGroup]=\"formFaccao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n    <div class=\"topo border\">\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nome</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\" placeholder=\"EX: O Abatedouro\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formFaccao.controls.nome.dirty && formFaccao.controls.nome.errors\" margin-left>\r\n            Preencha apenas com números</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descrição</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"descricao\"\r\n              placeholder=\"EX: Os mais infâmes e nojentos crimonosos liderados por Pigsaw...\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formFaccao.controls.descricao.dirty && formFaccao.controls.descricao.errors\"\r\n            margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Objetivo</ion-label>\r\n            <ion-textarea formControlName=\"objetivo\" type=\"text-area\" color=\"primary\"\r\n              placeholder=\"EX: Matar, roubar, estuprar, torturar e qualquer outra coisa que seja maligna\">\r\n            </ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formFaccao.controls.objetivo.dirty && formFaccao.controls.objetivo.errors\"\r\n            margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">URL da image</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"\r\n              placeholder=\"EX: https://image.shutterstock.com/image-illustration/butchery-flat-raster-icon-isolated-260nw-618904085.jpg\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <app-imagem-display [src]=\"this.formFaccao.get('imgURL').value\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" [disabled]=\"formFaccao.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"display\">\r\n  <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n    (notifyParent)=\"getNotification($event)\" [add]=\"add\" (getSelectedObj)=\"selectedObj($event)\" [id]=\"'idFaccao'\"\r\n    [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'objetivo'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\">\r\n  </app-paginacao>\r\n</div>\r\n\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" >Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mapa-update/mapa-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/mapa-update/mapa-update.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Mapa\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"no-margin\">\r\n  <form [formGroup]=\"formMapa\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n    <div class=\"topo border\">\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nome</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"\r\n              placeholder=\"EX: Florestas do silencio - 1\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formMapa.controls.nome.dirty && formMapa.controls.nome.errors\" margin-left>\r\n            Preencha apenas com números</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descrição</ion-label>\r\n            <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"primary\"\r\n              placeholder=\"EX: Em meio as florestas...\"></ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formMapa.controls.descricao.dirty && formMapa.controls.descricao.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">URL da imagem</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"urlMapa\"\r\n              placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formMapa.controls.urlMapa.dirty && formMapa.controls.urlMapa.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"light\">\r\n            <ion-label>Manter privado</ion-label>\r\n            <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n              [checked]=\"formMapa.get('isPrivate')\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <app-imagem-display [src]=\"this.formMapa.get('urlMapa').value\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" [disabled]=\"formMapa.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<ion-footer *ngIf=\"true\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mapa/mapa.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/mapa/mapa.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo mapa\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"novoMapa()\">Novo</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"consultar()\">Listar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"novo\">\r\n  <form [formGroup]=\"formMapa\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n\r\n    <div class=\"topo border\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"\r\n                placeholder=\"EX: Florestas do silencio - 1\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.nome.dirty && formMapa.controls.nome.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"primary\"\r\n                placeholder=\"EX: Em meio as florestas...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.descricao.dirty && formMapa.controls.descricao.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL da imagem</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"urlMapa\"\r\n                placeholder=\"EX: https://i.pinimg.com/originals/5f/7e/d5/5f7ed54f83225d4fe5d05b37ae0b3d85.jpg\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.urlMapa.dirty && formMapa.controls.urlMapa.errors\" margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <app-imagem-display [src]=\"this.formMapa.get('urlMapa').value\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" [disabled]=\"formMapa.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"display\">\r\n  <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n    (notifyParent)=\"getNotification($event)\" [add]=\"true\" (getSelectedObj)=\"selectedObj($event)\" [id]=\"'idMapa'\"\r\n    [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'urlMapa'\" [imgURL]=\"'urlMapa'\" [closeBTN]=\"false\">\r\n  </app-paginacao>\r\n</div>\r\n\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" >Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/missao-update/missao-update.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/missao-update/missao-update.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Atualização de Missão\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"border\">\r\n    <form [formGroup]=\"formMissao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"\r\n                placeholder=\"EX: Corrida no tempo\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Localização</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"localizacao\"\r\n                placeholder=\"EX: Reino das dimensões\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"primary\"\r\n                placeholder=\"EX: Após adiquirirem o pingente de Chronos, o grupo precisa agora...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.descricao.dirty && formMissao.controls.descricao.errors\"\r\n              margin-left>\r\n              Preencha\r\n              a historia</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Recompensa</ion-label>\r\n              <ion-input [(ngModel)]=\"recompensa\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                color=\"primary\" placeholder=\"Insira a recompensa aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n            </ion-item>\r\n            <ion-button class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\" (click)=\"inserirRecompensa()\">\r\n              Adicionar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-listas [strings]=\"recompensas\" [titulo]=\"'Lista de Recompensas'\" [isModal]=\"false\"></app-listas>\r\n          </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Tipo de Missão</ion-label>\r\n              <ion-select formControlName=\"tipoMissao\" placeholder=\"Selecione\">\r\n                <ion-select-option [value]=\"tipo[0].value\">{{ tipo[0].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[1].value\">{{ tipo[1].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[2].value\">{{ tipo[2].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[3].value\">{{ tipo[3].template }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item color=\"light\">\r\n              <ion-label>Manter privado</ion-label>\r\n              <ion-toggle color=\"tertiary\" slot=\"start\" name=\"isPrivate\" formControlName=\"isPrivate\"\r\n                [checked]=\"formMissao.get('isPrivate')\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formMissao.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formMissao.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"true\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/missao/missao.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/missao/missao.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo NPC\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"novaMissao()\">Novo</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"consultar()\">Listar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"border\" *ngIf=\"novo\">\r\n    <form [formGroup]=\"formMissao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"\r\n                placeholder=\"EX: Corrida no tempo\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Localização</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"localizacao\"\r\n                placeholder=\"EX: Reino das dimensões\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"primary\"\r\n                placeholder=\"EX: Após adiquirirem o pingente de Chronos, o grupo precisa agora...\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMissao.controls.descricao.dirty && formMissao.controls.descricao.errors\"\r\n              margin-left>\r\n              Preencha\r\n              a historia</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Recompensa</ion-label>\r\n              <ion-input [(ngModel)]=\"recompensa\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                color=\"primary\" placeholder=\"Insira a recompensa aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n            </ion-item>\r\n            <ion-button class=\"btn-insert\" fill=\"solid\" color=\"tertiary\" expand=\"block\" (click)=\"inserirRecompensa()\">\r\n              Adicionar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-listas [strings]=\"recompensas\" [titulo]=\"'Lista de Recompensas'\" [isModal]=\"false\"></app-listas>\r\n          </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label>Tipo de Missão</ion-label>\r\n              <ion-select formControlName=\"tipoMissao\" placeholder=\"Selecione\">\r\n                <ion-select-option [value]=\"tipo[0].value\">{{ tipo[0].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[1].value\">{{ tipo[1].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[2].value\">{{ tipo[2].template }}</ion-select-option>\r\n                <ion-select-option [value]=\"tipo[3].value\">{{ tipo[3].template }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formMissao.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formMissao.invalid\" (click)=\"salvar()\">Salvar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=\"display\">\r\n    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n      (notifyParent)=\"getNotification($event)\" [add]=\"true\" [id]=\"'idMissao'\" [nome]=\"'nome'\" [descricao]=\"'descricao'\"\r\n      [tipo]=\"'tipoMissao'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\" (getSelectedObj)=\"selectedObj($event)\"></app-paginacao>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" >Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo-update/capitulo-update.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  font-size: 10px;\n  color: red;\n  margin-top: 10px;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby11cGRhdGUvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxjYXBpdHVsby11cGRhdGVcXGNhcGl0dWxvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby11cGRhdGUvY2FwaXR1bG8tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby11cGRhdGUvY2FwaXR1bG8tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn0iLCIuZGFuZ2VyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");









let CapituloUpdateComponent = class CapituloUpdateComponent {
    constructor(formBuilder, storage, alertController, capituloService, missaoService, paginaService, modalCtrl, toast) {
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
        this.formCapitulo = this.formBuilder.group({
            numCapitulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            resumoCapPassado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: [''],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.consultarMissao();
        this.requestUpdate = false;
        this.loading = true;
        const id = this.capituloService.getStaticID();
        this.capituloService.findById(id)
            .subscribe(res => {
            const { numCapitulo, titulo, historia, imgURL, resumoCapPassado, isPrivate, missoes } = res;
            this.formCapitulo.get('numCapitulo').setValue(numCapitulo);
            this.formCapitulo.get('titulo').setValue(titulo);
            this.formCapitulo.get('historia').setValue(historia);
            this.formCapitulo.get('resumoCapPassado').setValue(resumoCapPassado);
            this.formCapitulo.get('historia').setValue(historia);
            this.formCapitulo.get('imgURL').setValue(imgURL);
            if (isPrivate == false) {
                this.formCapitulo.get('isPrivate').setValue(false);
            }
            else {
                this.formCapitulo.get('isPrivate').setValue(true);
            }
            this.idMissoes = missoes.map(m => m.idMissao);
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    getSelectedChapt(evt) {
        this.obj.emit(evt);
    }
    salvar() {
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
            .subscribe(res => {
            this.loading = false;
            this.requestUpdate = true;
            this.callToast('success', 'Atualizado com sucesso!', 'Missão atualizada');
        }, error => {
            this.loading = false;
        });
    }
    inserirManualmente() {
        this.missaoService.findById(this.idMissao)
            .subscribe(res => {
            this.pushIdMissao(res.idMissao);
        }, error => error);
    }
    presentError(texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Valor inválido',
                message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    novoCapitulo() {
        this.consultarMissao();
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    getNotificationMissao(evt) {
        if (this.paginaAtualMissao != evt) {
            this.paginaAtualMissao = evt;
            this.consultarMissao();
        }
    }
    getSelectedObj(evt) {
        this.pushIdMissao(evt.id);
    }
    pushIdMissao(id) {
        if (this.idMissoes.length == 0 || !this.idMissoes.includes(id)) {
            this.idMissoes.push(id);
            this.callAdd();
        }
        else {
            this.callFail(id);
        }
    }
    consultar() {
        const p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    consultarMissao() {
        const p = this.missaoService.findPageByCriador(this.paginaAtualMissao.toString());
        this.paginaService.setPromisse(p);
        //this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    presentExistente(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Já incluso',
                message: 'A missao: ' + id + ' já está inclusa!',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    callAdd() {
        this.toast.clear();
        this.toast.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Adicionado com sucesso!'
        });
    }
    callFail(id) {
        this.toast.clear();
        this.toast.add({
            severity: 'error',
            summary: 'Já incluso',
            detail: 'A missao: ' + id + ' já está inclusa!'
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
};
CapituloUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"] },
    { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }
];
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



/***/ }),

/***/ "./src/app/components/criacoes/capitulo/capitulo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/capitulo/capitulo.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  font-size: 10px;\n  color: red;\n  margin-top: 10px;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGNhcGl0dWxvXFxjYXBpdHVsby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jYXBpdHVsby9jYXBpdHVsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvY2FwaXR1bG8vY2FwaXR1bG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFuZ2VyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG4iLCIuZGFuZ2VyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _capitulo_update_capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../capitulo-update/capitulo-update.component */ "./src/app/components/criacoes/capitulo-update/capitulo-update.component.ts");










let CapituloComponent = class CapituloComponent {
    constructor(formBuilder, storage, alertController, capituloService, missaoService, paginaService, toast, modalCtrl) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.capituloService = capituloService;
        this.missaoService = missaoService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
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
    ngOnInit() { }
    getSelectedChapt(evt) {
        this.obj.emit(evt);
    }
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.capituloService.setStaticID(event.id);
            const modal = yield this.modalCtrl.create({
                component: _capitulo_update_capitulo_update_component__WEBPACK_IMPORTED_MODULE_9__["CapituloUpdateComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                //console.log(res);
                if (data == true) {
                    const p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
                    this.paginaService.setPromisse(p);
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
    salvar() {
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
            .subscribe(res => {
            this.loading = false;
            this.presentAdicionar(res.idCapitulo);
            this.formCapitulo.get('numCapitulo').setValue('');
            this.formCapitulo.get('titulo').setValue('');
            this.formCapitulo.get('historia').setValue('');
            this.formCapitulo.get('resumoCapPassado').setValue('');
            this.idMissoes = [];
            this.idMissao = '';
            this.formCapitulo.get('imgURL').setValue('');
            this.copyToClipboard(res.idCapitulo);
        }, error => {
            this.loading = false;
        });
    }
    inserirManualmente() {
        this.missaoService.findById(this.idMissao)
            .subscribe(res => {
            this.pushIdMissao(res.idMissao);
        }, error => error);
    }
    presentError(texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Valor inválido',
                message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    novoCapitulo() {
        this.consultarMissao();
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    getNotificationMissao(evt) {
        if (this.paginaAtualMissao != evt) {
            this.paginaAtualMissao = evt;
            this.consultarMissao();
        }
    }
    getSelectedObj(evt) {
        this.pushIdMissao(evt.id);
    }
    pushIdMissao(id) {
        if (this.idMissoes.length == 0 || !this.idMissoes.includes(id)) {
            this.idMissoes.push(id);
            this.callAdd();
        }
        else {
            this.callFail(id);
        }
    }
    consultar() {
        const p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    consultarMissao() {
        const p = this.missaoService.findPageByCriador(this.paginaAtualMissao.toString());
        this.paginaService.setPromisse(p);
        //this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    presentExistente(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Já incluso',
                message: 'A missao: ' + id + ' já está inclusa!',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    callAdd() {
        this.toast.clear();
        this.toast.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Adicionado com sucesso!'
        });
    }
    callFail(id) {
        this.toast.add({
            severity: 'error',
            summary: 'Já incluso',
            detail: 'A missao: ' + id + ' já está inclusa!'
        });
    }
};
CapituloComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"] },
    { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_6__["CapituloService"],
        src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"], src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], CapituloComponent);



/***/ }),

/***/ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes-update/faccoes-update.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzLXVwZGF0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGZhY2NvZXMtdXBkYXRlXFxmYWNjb2VzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzLXVwZGF0ZS9mYWNjb2VzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvZmFjY29lcy11cGRhdGUvZmFjY29lcy11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuIiwiLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/criacoes/faccoes.service */ "./src/app/services/criacoes/faccoes.service.ts");








let FaccoesUpdateComponent = class FaccoesUpdateComponent {
    constructor(formBuilder, storage, alertController, faccaoService, paginaService, toast, modalCtrl) {
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
    ngOnInit() {
        this.requestUpdate = false;
        this.loading = true;
        const id = this.faccaoService.getStaticID();
        this.faccaoService.findById(id)
            .subscribe(res => {
            const { descricao, nome, objetivo, imgURL, isPrivate } = res;
            this.formFaccao.get('nome').setValue(nome);
            this.formFaccao.get('descricao').setValue(descricao);
            this.formFaccao.get('objetivo').setValue(objetivo);
            this.formFaccao.get('imgURL').setValue(imgURL);
            if (isPrivate == false) {
                this.formFaccao.get('isPrivate').setValue(false);
            }
            else {
                this.formFaccao.get('isPrivate').setValue(true);
            }
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    getSelectedObj(evt) {
        this.obj.emit(evt);
    }
    salvar() {
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
            .subscribe(res => {
            this.loading = false;
            this.requestUpdate = true;
            this.callToast('success', 'Atualizado com sucesso!', 'Facção atualizada');
        }, error => {
            this.loading = false;
        });
    }
    novaFaccao() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    close() {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    }
};
FaccoesUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
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



/***/ }),

/***/ "./src/app/components/criacoes/faccoes/faccoes.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/criacoes/faccoes/faccoes.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcZmFjY29lc1xcZmFjY29lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9mYWNjb2VzL2ZhY2NvZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL2ZhY2NvZXMvZmFjY29lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgfSIsIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/criacoes/faccoes.service */ "./src/app/services/criacoes/faccoes.service.ts");
/* harmony import */ var _faccoes_update_faccoes_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../faccoes-update/faccoes-update.component */ "./src/app/components/criacoes/faccoes-update/faccoes-update.component.ts");









let FaccoesComponent = class FaccoesComponent {
    constructor(formBuilder, storage, alertController, faccaoService, paginaService, toast, modalCtrl) {
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
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formFaccao = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            objetivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: ['']
        });
    }
    ngOnInit() { }
    getSelectedObj(evt) {
        this.obj.emit(evt);
    }
    salvar() {
        this.loading = true;
        this.newFaccao = {
            nome: this.formFaccao.get('nome').value,
            descricao: this.formFaccao.get('descricao').value,
            objetivo: this.formFaccao.get('objetivo').value,
            idCriador: this.storage.getLocalUserId(),
            imgURL: this.formFaccao.get('imgURL').value,
        };
        this.faccaoService.insert(this.newFaccao)
            .subscribe(res => {
            this.loading = false;
            this.presentAdicionar(res.idFaccao);
            this.formFaccao.get('nome').setValue('');
            this.formFaccao.get('descricao').setValue('');
            this.formFaccao.get('objetivo').setValue('');
            this.formFaccao.get('imgURL').setValue('');
            this.copyToClipboard(res.idFaccao);
        }, error => {
            this.loading = false;
        });
    }
    novaFaccao() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.faccaoService.setStaticID(event.id);
            const modal = yield this.modalCtrl.create({
                component: _faccoes_update_faccoes_update_component__WEBPACK_IMPORTED_MODULE_8__["FaccoesUpdateComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                //console.log(res);
                if (data == true) {
                    const p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
                    this.paginaService.setPromisse(p);
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
};
FaccoesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_7__["FaccoesService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], FaccoesComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _missao_missao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./missao/missao.component */ "./src/app/components/criacoes/missao/missao.component.ts");
/* harmony import */ var _capitulo_capitulo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capitulo/capitulo.component */ "./src/app/components/criacoes/capitulo/capitulo.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _faccoes_faccoes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faccoes/faccoes.component */ "./src/app/components/criacoes/faccoes/faccoes.component.ts");
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mapa/mapa.component */ "./src/app/components/criacoes/mapa/mapa.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");















let HistoriaModule = class HistoriaModule {
};
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



/***/ }),

/***/ "./src/app/components/criacoes/mapa-update/mapa-update.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/criacoes/mapa-update/mapa-update.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.no-margin {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  margin-left: 0;\n  margin-right: 0;\n  overflow-y: scroll;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhLXVwZGF0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXG1hcGEtdXBkYXRlXFxtYXBhLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhLXVwZGF0ZS9tYXBhLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhLXVwZGF0ZS9tYXBhLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5zZXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm5vLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICB9XHJcbiAgIiwiLmJ0bi1pbnNlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mapa/mapa.service */ "./src/app/services/mapa/mapa.service.ts");








let MapaUpdateComponent = class MapaUpdateComponent {
    constructor(formBuilder, storage, alertController, mapaService, paginaService, toast, modalCtrl) {
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
    ngOnInit() {
        this.requestUpdate = false;
        this.loading = true;
        const id = this.mapaService.getStaticID();
        this.mapaService.findById(id)
            .subscribe(res => {
            // console.log(res);
            const { idMapa, descricao, nome, urlMapa, isPrivate } = res;
            this.formMapa.get('nome').setValue(nome);
            this.formMapa.get('descricao').setValue(descricao);
            this.formMapa.get('urlMapa').setValue(urlMapa);
            if (isPrivate == false) {
                this.formMapa.get('isPrivate').setValue(false);
            }
            else {
                this.formMapa.get('isPrivate').setValue(true);
            }
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    salvar() {
        const id = this.mapaService.getStaticID();
        this.requestUpdate = true;
        this.loading = true;
        this.newMapa = {
            id,
            nome: this.formMapa.get('nome').value,
            descricao: this.formMapa.get('descricao').value,
            urlMapa: this.formMapa.get('urlMapa').value,
            isPrivate: this.formMapa.get('isPrivate').value
        };
        //console.log(this.newMapa);
        this.mapaService.update(this.newMapa)
            .subscribe(res => {
            this.loading = false;
            this.callToast('success', 'Atualizado com sucesso!', 'Mapa atualizado');
        }, error => {
            this.loading = false;
        });
    }
    novoMapa() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atualizado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    close() {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
};
MapaUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
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



/***/ }),

/***/ "./src/app/components/criacoes/mapa/mapa.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/criacoes/mapa/mapa.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcbWFwYVxcbWFwYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tYXBhL21hcGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL21hcGEvbWFwYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICB9IiwiLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mapa/mapa.service */ "./src/app/services/mapa/mapa.service.ts");
/* harmony import */ var _mapa_update_mapa_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mapa-update/mapa-update.component */ "./src/app/components/criacoes/mapa-update/mapa-update.component.ts");









let MapaComponent = class MapaComponent {
    constructor(formBuilder, storage, alertController, mapaService, paginaService, toast, modalCtrl) {
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
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formMapa = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            urlMapa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() { }
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mapaService.setStaticID(event.id);
            const modal = yield this.modalCtrl.create({
                component: _mapa_update_mapa_update_component__WEBPACK_IMPORTED_MODULE_8__["MapaUpdateComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                if (data == true) {
                    const p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
                    this.paginaService.setPromisse(p);
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
    salvar() {
        this.loading = true;
        this.newMapa = {
            nome: this.formMapa.get('nome').value,
            descricao: this.formMapa.get('descricao').value,
            urlMapa: this.formMapa.get('urlMapa').value,
            idCriador: this.storage.getLocalUserId(),
        };
        this.mapaService.insert(this.newMapa)
            .subscribe(res => {
            this.loading = false;
            this.presentAdicionar(res.idMapa);
            this.formMapa.get('nome').setValue('');
            this.formMapa.get('descricao').setValue('');
            this.formMapa.get('urlMapa').setValue('');
            this.copyToClipboard(res.idMapa);
        }, error => {
            this.loading = false;
        });
    }
    novoMapa() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
};
MapaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_7__["MapaService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], MapaComponent);



/***/ }),

/***/ "./src/app/components/criacoes/missao-update/missao-update.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/criacoes/missao-update/missao-update.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8tdXBkYXRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcbWlzc2FvLXVwZGF0ZVxcbWlzc2FvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8tdXBkYXRlL21pc3Nhby11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL21pc3Nhby11cGRhdGUvbWlzc2FvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG4iLCIuYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");









let MissaoUpdateComponent = class MissaoUpdateComponent {
    constructor(formBuilder, storage, alertController, missaoService, paginaService, toast, modalCtrl) {
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
    ngOnInit() {
        this.requestUpdate = false;
        this.loading = true;
        const id = this.missaoService.getStaticID();
        this.missaoService.findById(id)
            .subscribe(res => {
            const { descricao, nome, localizacao, imgURL, tipoMissao, isPrivate, recompensas } = res;
            this.formMissao.get('nome').setValue(nome);
            this.formMissao.get('descricao').setValue(descricao);
            this.formMissao.get('localizacao').setValue(localizacao);
            this.formMissao.get('imgURL').setValue(imgURL);
            this.formMissao.get('tipoMissao').setValue(this.getCurrentType(tipoMissao));
            if (isPrivate == false) {
                this.formMissao.get('isPrivate').setValue(false);
            }
            else {
                this.formMissao.get('isPrivate').setValue(true);
            }
            this.recompensas = recompensas;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    salvar() {
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
            .subscribe(res => {
            this.loading = false;
            this.requestUpdate = true;
            this.callToast('success', 'Atualizado com sucesso!', 'Missão atualizada');
        }, error => {
            this.loading = false;
        });
        //this.loading = false;
    }
    inserirRecompensa() {
        if (this.recompensa.length < 5) {
            this.presentError('recompensa');
        }
        else {
            this.recompensas.push(this.recompensa);
            this.recompensa = "";
        }
    }
    presentError(texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Valor inválido',
                message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    novaMissao() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.missaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    getCurrentType(tipo) {
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
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    close() {
        this.modalCtrl.dismiss(this.requestUpdate, null, 'princi');
    }
};
MissaoUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_8__["MissaoService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
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



/***/ }),

/***/ "./src/app/components/criacoes/missao/missao.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/criacoes/missao/missao.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8vQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxtaXNzYW9cXG1pc3Nhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8vbWlzc2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9taXNzYW8vbWlzc2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcbiIsIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/historia/missao.service */ "./src/app/services/historia/missao.service.ts");
/* harmony import */ var _missao_update_missao_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../missao-update/missao-update.component */ "./src/app/components/criacoes/missao-update/missao-update.component.ts");









let MissaoComponent = class MissaoComponent {
    constructor(formBuilder, storage, alertController, missaoService, paginaService, modalCtrl) {
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
    ngOnInit() { }
    salvar() {
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
            .subscribe(res => {
            this.loading = false;
            this.presentAdicionar(res.idMissao);
            this.formMissao.get('nome').setValue('');
            this.formMissao.get('descricao').setValue('');
            this.formMissao.get('localizacao').setValue('');
            this.formMissao.get('tipoMissao').setValue('');
            this.recompensas = [];
            this.formMissao.get('imgURL').setValue('');
        }, error => {
            this.loading = false;
        });
    }
    inserirRecompensa() {
        if (this.recompensa.length < 5) {
            this.presentError('recompensa');
        }
        else {
            this.recompensas.push(this.recompensa);
            this.recompensa = "";
        }
    }
    presentError(texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Valor inválido',
                message: 'Insira um ' + texto + ' com pelo menos 5 caracteres',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    novaMissao() {
        this.display = false;
        this.novo = true;
    }
    listar() {
        this.display = true;
        this.novo = false;
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    consultar() {
        const p = this.missaoService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    }
    presentAdicionar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Criado com sucesso!',
                message: 'Código: ' + id,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.copyToClipboard(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    selectedObj(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.missaoService.setStaticID(event.id);
            const modal = yield this.modalCtrl.create({
                component: _missao_update_missao_update_component__WEBPACK_IMPORTED_MODULE_8__["MissaoUpdateComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'princi'
            });
            modal.onDidDismiss()
                .then(res => {
                const { data } = res;
                //console.log(res);
                if (data == true) {
                    const p = this.missaoService.findPageByCriador(this.paginaAtual.toString());
                    this.paginaService.setPromisse(p);
                    this.paginaService.requestRefresh(true);
                }
            });
            return yield modal.present();
        });
    }
};
MissaoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_historia_missao_service__WEBPACK_IMPORTED_MODULE_7__["MissaoService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_6__["PaginacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





let FaccoesService = class FaccoesService {
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
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}faccao/criador`, {
            params,
            observe: 'body',
        });
    }
    insert(dto) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}faccao`, dto);
    }
    update(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}faccao`, dto);
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}faccao/${id}`);
    }
};
FaccoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
FaccoesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], FaccoesService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





let MissaoService = class MissaoService {
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
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}missao/criador`, {
            params,
            observe: 'body',
        });
    }
    insert(dto) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}missao`, dto);
    }
    update(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}missao`, dto);
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}missao/${id}`);
    }
};
MissaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
MissaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], MissaoService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





let MapaService = class MapaService {
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
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mapa/criador`, {
            params,
            observe: 'body',
        });
    }
    insert(dto) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mapa`, dto);
    }
    update(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mapa`, dto);
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mapa/${id}`, {
            responseType: 'json',
            observe: 'body',
        });
    }
};
MapaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
MapaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], MapaService);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~gercapitulos-gercapitulos-module~gerfaccoes-gerfaccoes-module~germa~86bb7768-es2015.js.map