(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~gerrpg-gerrpg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/help-rpg/help-rpg.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/help-rpg/help-rpg.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid card\">\r\n  <div class=\"p-col-12\">\r\n    <ng-container>\r\n      <ion-card>\r\n        <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-segment-button value=\"parte1\">\r\n            <ion-label style=\"font-size: 1em\">Ajuda</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte2\">\r\n            <ion-label style=\"font-size: 1em\">Regras</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte3\">\r\n            <ion-label style=\"font-size: 1em\">NPCs</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-segment-button value=\"parte4\">\r\n            <ion-label style=\"font-size: 1em\">Faccções</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte5\">\r\n            <ion-label style=\"font-size: 1em\">Capítulos</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"parte6\">\r\n            <ion-label style=\"font-size: 1em\">Mapas</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-segment-button value=\"parte7\">\r\n            <ion-label style=\"font-size: 1em\">Modelo de Ficha</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte1'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/dice.png\" style=\"text-align: center;\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Ajuda & Informações básicas</ion-card-subtitle>\r\n            <ion-card-title>Criação de RPG</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Seja bem vindo à criação de RPG. Aqui você poderá criar um RPG totalmente personalizado!<br>\r\n            Seu próprio modelo de ficha, suas próprias regras, suas próprias facções, NPCs e até capitulos de sua\r\n            história!<br>\r\n            O tempo médio de criação é de 30 minutos, portanto, só comece a criar um RPG se estiver realmente com\r\n            tempo.<br>\r\n            O tempo de criação pode ser reduzido em 50% se você já tiver criado seu modelo de ficha, facções, capitulos\r\n            e NPCs com antecedência.<br>\r\n            Você poderá adicionar ou remover conteúdos mais tarde também. Porém o modelo de ficha\r\n            <strong>JAMAIS</strong> poderá ser alterado.\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte2'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/rpg.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Regras</ion-card-subtitle>\r\n            <ion-card-title>Preste atenção</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            O RMF não é um gerenciador de RPG do sistema X, Y ou Z. O RMF é o gerenciador do SEU RPG!<br>\r\n            Portanto, na última etapa de criação do RPG, você poderá criar quantas regras você quiser para o seu RPG.\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte3'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/overlord-helm.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>NPCs</ion-card-subtitle>\r\n            <ion-card-title>Aliados, Neutros ou Inimigos?</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você poderá adicionar os NPCs em seu RPG sob uma categoria:<br>\r\n            Aliado, neutro, inimigo.<br>\r\n            Você pode adicionar quantos NPCs você quiser!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte4'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/squad.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Faccções</ion-card-subtitle>\r\n            <ion-card-title>Boas, Neutras ou Hostis?</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você poderá adicionar facções também, sob uma categoria:<br>\r\n            Boas, neutras, hostis.<br>\r\n            Você pode adicionar quantos facções você quiser!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte5'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/capitulo.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Capítulos</ion-card-subtitle>\r\n            <ion-card-title>Organize sua mesa, missões e história!</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você poderá adicionar capitulos em seu RPG!<br>\r\n            Cada capitulo possui uma lista de missões, além de outras informações adicionais<br>\r\n            <strong>OBSERVAÇÃO:</strong> Você poderá criar seus capítulos aqui, caso não tenha feito ainda.<br>\r\n            Porém! Não conseguirá criar missões. Caso não tenha criado as missões, <span>CLIQUE AQUI</span>.\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte6'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/treasure-map.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Mapas</ion-card-subtitle>\r\n            <ion-card-title>Adicione mapas e grids!</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Você pode adicionar um mapa ou grid ao seu RPG! Basta ter a URL (link) da imagem!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n        <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte7'\">\r\n          <img class=\"cover\" src=\"../../../../assets/imgs/missao.png\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Modelo de Ficha</ion-card-subtitle>\r\n            <ion-card-title>O seu RPG!</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            O principal motivo pelo qual este é o SEU RPG!<br>\r\n            Adicione o seu próprio e personalizado modelo de ficha<br>\r\n            Todos os jogadores que entrarem nesse RPG, usarão o mesmo modelo PADRONIZADO e totalmente digital!\r\n          </ion-card-content>\r\n        </ng-container>\r\n\r\n      </ion-card>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ion-footer>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"proximo()\">\r\n      Prosseguir</ion-button>\r\n  </ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg-form/rpg-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/rpg-form/rpg-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form [formGroup]=\"formRpg\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n    <div class=\"topo\">\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nome</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\" placeholder=\"EX: D&D 5\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formRpg.controls.nome.dirty && formRpg.controls.nome.errors\" margin-left>\r\n            Preencha apenas com números</p>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descrição</ion-label>\r\n            <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"descricao\"\r\n              placeholder=\"EX: Um RPG medieval clássico\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formRpg.controls.descricao.dirty && formRpg.controls.descricao.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">História</ion-label>\r\n            <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"\r\n              placeholder=\"EX: Passando-se na era pós-dragões...\"></ion-textarea>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formRpg.controls.historia.dirty && formRpg.controls.historia.errors\" margin-left>\r\n            Campo obrigatório!</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>Tipo de RPG</ion-label>\r\n            <ion-select formControlName=\"tipoRPG\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Medieval</ion-select-option>\r\n              <ion-select-option value=\"1\">Cyberpunk</ion-select-option>\r\n              <ion-select-option value=\"2\">Steampunk</ion-select-option>\r\n              <ion-select-option value=\"3\">Horror</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">URL Imagem</ion-label>\r\n            <ion-textarea formControlName=\"imgURL\" type=\"text-area\" color=\"primary\"\r\n              placeholder=\"EX: https://i.ytimg.com/vi/Z0zq55xtTEg/maxresdefault.jpg\"></ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<ion-footer>\r\n  <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" [disabled]=\"formRpg.invalid\" type=\"submit\" color=\"primary\"\r\n    (click)=\"proximo()\">\r\n    Prosseguir</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg/rpg.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/rpg/rpg.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container id=\"help\" *ngIf=\"estagioAtual==0\">\r\n    <app-help-rpg (prosseguir)=\"monitor($event)\"></app-help-rpg>\r\n</ng-container>\r\n\r\n<ng-container id=\"form\" *ngIf=\"estagioAtual==1\">\r\n    <h1 class=\"titulo\">Informações Básicas</h1>\r\n    <app-rpg-form (prosseguir)=\"monitor($event)\"></app-rpg-form>\r\n</ng-container>\r\n\r\n<ng-container id=\"npc\" *ngIf=\"estagioAtual==2\">\r\n    <h1 class=\"titulo\">NPCs</h1>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"novo()\">Novo</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"listar()\">Listar e Adicionar</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ng-container *ngIf=\"showNovo\">\r\n        <app-criar-npc [menu]=\"false\"></app-criar-npc>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"showLista\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label>Tipo de NPC</ion-label>\r\n                        <ion-select [(ngModel)]=\"tipoNPC\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Selecione\">\r\n                            <ion-select-option value=\"0\">Aliado</ion-select-option>\r\n                            <ion-select-option value=\"1\">Neutro</ion-select-option>\r\n                            <ion-select-option value=\"2\">Inimigo</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                    <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                        (notifyParent)=\"getNotification($event)\" (getSelectedObj)=\"addListaNpc($event)\" [add]=\"true\"\r\n                        [id]=\"'idNpc'\" [nome]=\"'ficha.fichaModelo.nome'\" [descricao]=\"'historia'\"\r\n                        [tipo]=\"'ficha.fichaModelo.tipoRPG'\" [imgURL]=\"'ficha.urlImg'\"></app-paginacao>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <app-listas [strings]=\"idAliados\" [titulo]=\"'NPCs Aliados'\" [isModal]=\"false\"></app-listas>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <app-listas [strings]=\"idNeutros\" [titulo]=\"'NPCs Neutros'\" [isModal]=\"false\"></app-listas>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <app-listas [strings]=\"idInimigos\" [titulo]=\"'NPCs Inimigos'\" [isModal]=\"false\"></app-listas>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ng-container>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"saveNpcs($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<ng-container id=\"faccoes\" *ngIf=\"estagioAtual==3\">\r\n    <h1 class=\"titulo\">Facções</h1>\r\n    <ion-item>\r\n        <ion-label>Tipo de Facção</ion-label>\r\n        <ion-select [(ngModel)]=\"tipoFaccao\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Boas</ion-select-option>\r\n            <ion-select-option value=\"1\">Neutras</ion-select-option>\r\n            <ion-select-option value=\"2\">Hostis</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    <app-faccoes [menu]=\"false\" [add]=\"true\" (obj)=\"getFaccao($event)\"></app-faccoes>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idFaccoesBoas\" [titulo]=\"'Facções Boas'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idFaccoesNeutras\" [titulo]=\"'Facções Neutras'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idFaccoesHostis\" [titulo]=\"'Facções Hostis'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"saveFaccoes($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<ng-container id=\"capitulos\" *ngIf=\"estagioAtual==4\">\r\n    <h1 class=\"titulo\">Capítulos</h1>\r\n    <app-capitulo [menu]=\"false\" [add]=\"true\" (obj)=\"getCapitulo($event)\"></app-capitulo>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idCapitulos\" [titulo]=\"'Capítulos selecionados:'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"saveCapitulos($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<ng-container id=\"fichaModelo\" *ngIf=\"estagioAtual==5\">\r\n    <h1 class=\"titulo\">Modelo de Ficha</h1>\r\n    <ion-grid>\r\n        <!--<ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" [disabled]=\"false\" (click)=\"listar()\">Listar e Adicionar</ion-button>\r\n            </ion-col>\r\n        </ion-row>-->\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n                    (getSelectedObj)=\"getCode($event)\" [id]=\"'idFichaModelo'\" [add]=\"adicionar\"\r\n                    [nome]=\"'ficha.fichaModelo.nome'\" [descricao]=\"'historia'\" [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\">\r\n                </app-paginacao>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Insira o código da ficha modelo</ion-label>\r\n                    <ion-input (ionChange)=\"listenValue($event)\" [(ngModel)]=\"idFichaModelo\" type=\"text\"\r\n                        color=\"primary\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" (click)=\"buscarFicha()\">Buscar</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" [disabled]=\"!fmEncontrada\" color=\"primary\"\r\n        (click)=\"saveFM($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<ng-container id=\"mapas\" *ngIf=\"estagioAtual==6\">\r\n    <h1 class=\"titulo\">Mapas</h1>\r\n    <app-mapa [menu]=\"false\" [add]=\"true\" (obj)=\"getMapas($event)\"></app-mapa>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idMapas\" [titulo]=\"'Mapas selecionados'\" [isModal]=\"false\"></app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"saveMapas($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<ng-container id=\"regras\" *ngIf=\"estagioAtual==7\">\r\n    <h1 class=\"titulo\">Regras</h1>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Nome da regra</ion-label>\r\n                    <ion-input [(ngModel)]=\"nomeRegra\" type=\"text\" color=\"primary\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Descrição da regra</ion-label>\r\n                    <ion-textarea [(ngModel)]=\"descricaoRegra\" type=\"text\" color=\"primary\"></ion-textarea>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button expand=\"block\" (click)=\"addRegra()\" [disabled]=\"getValidacao()\">Adicionar Regra</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <app-listas [strings]=\"idRegras\" [titulo]=\"'Regras definidas'\" (deleted)=\"regraDeletada($event)\"\r\n                    [isModal]=\"false\">\r\n                </app-listas>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"saveRegras($event)\">\r\n        Prosseguir</ion-button>\r\n</ng-container>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpRpgComponent = /** @class */ (function () {
    function HelpRpgComponent() {
        this.prosseguir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abaAtual = 'parte1';
    }
    HelpRpgComponent.prototype.proximo = function () {
        this.prosseguir.emit('PRÓXIMO!');
    };
    HelpRpgComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('prosseguir'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HelpRpgComponent.prototype, "prosseguir", void 0);
    HelpRpgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help-rpg',
            template: __webpack_require__(/*! raw-loader!./help-rpg.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/help-rpg/help-rpg.component.html"),
            styles: [__webpack_require__(/*! ./help-rpg.component.scss */ "./src/app/components/criacoes/help-rpg/help-rpg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpRpgComponent);
    return HelpRpgComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/rpg-form/rpg-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-form/rpg-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvcnBnLWZvcm0vcnBnLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/rpg-form/rpg-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/criacoes/rpg-form/rpg-form.component.ts ***!
  \********************************************************************/
/*! exports provided: RpgFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgFormComponent", function() { return RpgFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");






var RpgFormComponent = /** @class */ (function () {
    function RpgFormComponent(formBuilder, storage, alertController, rpgService) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertController = alertController;
        this.rpgService = rpgService;
        this.prosseguir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formRpg = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoRPG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imgURL: []
        });
    }
    RpgFormComponent.prototype.proximo = function () {
        this.newRpgForm = {
            descricao: this.formRpg.get('descricao').value,
            historia: this.formRpg.get('historia').value,
            nome: this.formRpg.get('nome').value,
            tipoRPG: this.formRpg.get('tipoRPG').value,
            imgURL: this.formRpg.get('imgURL').value
        };
        this.rpgService.insertInfo(this.newRpgForm);
        this.prosseguir.emit('PRÓXIMO!');
    };
    RpgFormComponent.prototype.ngOnInit = function () { };
    RpgFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__["RpgService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('prosseguir'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RpgFormComponent.prototype, "prosseguir", void 0);
    RpgFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpg-form',
            template: __webpack_require__(/*! raw-loader!./rpg-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg-form/rpg-form.component.html"),
            styles: [__webpack_require__(/*! ./rpg-form.component.scss */ "./src/app/components/criacoes/rpg-form/rpg-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__["RpgService"]])
    ], RpgFormComponent);
    return RpgFormComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/rpg.module.ts":
/*!***************************************************!*\
  !*** ./src/app/components/criacoes/rpg.module.ts ***!
  \***************************************************/
/*! exports provided: RpgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgModule", function() { return RpgModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rpg_rpg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rpg/rpg.component */ "./src/app/components/criacoes/rpg/rpg.component.ts");
/* harmony import */ var _help_rpg_help_rpg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-rpg/help-rpg.component */ "./src/app/components/criacoes/help-rpg/help-rpg.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rpg-form/rpg-form.component */ "./src/app/components/criacoes/rpg-form/rpg-form.component.ts");
/* harmony import */ var _criacoes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./criacoes.module */ "./src/app/components/criacoes/criacoes.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _historia_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");















var RpgModule = /** @class */ (function () {
    function RpgModule() {
    }
    RpgModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rpg_rpg_component__WEBPACK_IMPORTED_MODULE_3__["RpgComponent"], _help_rpg_help_rpg_component__WEBPACK_IMPORTED_MODULE_4__["HelpRpgComponent"], _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_7__["RpgFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _criacoes_module__WEBPACK_IMPORTED_MODULE_8__["CriacoesModule"],
                _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__["PaginacaoModule"],
                _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_10__["ListasModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
                _historia_module__WEBPACK_IMPORTED_MODULE_13__["HistoriaModule"],
                _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_14__["LoadSpinnerModule"]
            ],
            exports: [_rpg_rpg_component__WEBPACK_IMPORTED_MODULE_3__["RpgComponent"], _help_rpg_help_rpg_component__WEBPACK_IMPORTED_MODULE_4__["HelpRpgComponent"], _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_7__["RpgFormComponent"]],
            entryComponents: [_rpg_rpg_component__WEBPACK_IMPORTED_MODULE_3__["RpgComponent"], _help_rpg_help_rpg_component__WEBPACK_IMPORTED_MODULE_4__["HelpRpgComponent"], _rpg_form_rpg_form_component__WEBPACK_IMPORTED_MODULE_7__["RpgFormComponent"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]]
        })
    ], RpgModule);
    return RpgModule;
}());



/***/ }),

/***/ "./src/app/components/criacoes/rpg/rpg.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/criacoes/rpg/rpg.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvcnBnL3JwZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/criacoes/rpg/rpg.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/criacoes/rpg/rpg.component.ts ***!
  \**********************************************************/
/*! exports provided: RpgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgComponent", function() { return RpgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fichas/ficha-modelo.service */ "./src/app/services/fichas/ficha-modelo.service.ts");
/* harmony import */ var src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/regra/regra.service */ "./src/app/services/regra/regra.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var RpgComponent = /** @class */ (function () {
    function RpgComponent(router, alertController, rpgService, npcService, paginaService, toast, fmService, regraService) {
        this.router = router;
        this.alertController = alertController;
        this.rpgService = rpgService;
        this.npcService = npcService;
        this.paginaService = paginaService;
        this.toast = toast;
        this.fmService = fmService;
        this.regraService = regraService;
        this.estagioAtual = 0;
        this.showLista = false;
        this.showNovo = false;
        this.paginaAtual = 0;
        this.loading = false;
        this.opcao = 0;
        this.tipoNPC = -1;
        this.idAliados = [];
        this.idInimigos = [];
        this.idNeutros = [];
        this.tipoFaccao = -1;
        this.idFaccoesBoas = [];
        this.idFaccoesNeutras = [];
        this.idFaccoesHostis = [];
        this.idCapitulos = [];
        this.idFichaModelo = '';
        this.fmEncontrada = false;
        this.nomeRegra = '';
        this.descricaoRegra = '';
        this.idRegras = [];
        this.idMapas = [];
        this.adicionar = true;
    }
    RpgComponent.prototype.ngOnInit = function () { };
    RpgComponent.prototype.monitor = function (evt) {
        this.estagioAtual++;
        this.paginaAtual = 0;
        this.showLista = false;
        this.showNovo = false;
        if (this.estagioAtual == 5) {
            var p = this.fmService.findPageByCriador(this.paginaAtual.toString());
            this.paginaService.setPromisse(p);
        }
        //this.rpgService.check();
    };
    RpgComponent.prototype.saveMapas = function (evt) {
        this.rpgService.insertMapas(this.idMapas);
        this.monitor(evt);
    };
    RpgComponent.prototype.getMapas = function (evt) {
        this.addListaMapa(evt);
    };
    RpgComponent.prototype.addListaMapa = function (evt) {
        var isSelected = this.isOnArray(evt.id, this.idMapas);
        if (!isSelected) {
            this.idMapas.push(evt.id);
            this.callAdd();
        }
        else {
            this.callFail(evt.id);
        }
    };
    RpgComponent.prototype.getValidacao = function () {
        var nome = this.nomeRegra.length < 5;
        var descricao = this.descricaoRegra.length < 5;
        if (nome || descricao) {
            return true;
        }
        else {
            return false;
        }
    };
    RpgComponent.prototype.addRegra = function () {
        var _this = this;
        this.loading = true;
        var regra = {
            nome: this.nomeRegra,
            descricao: this.descricaoRegra
        };
        this.regraService.insert(regra)
            .subscribe(function (res) {
            _this.loading = false;
            _this.idRegras.push(res.idSistema);
        }, function (error) {
            _this.loading = false;
        });
    };
    RpgComponent.prototype.regraDeletada = function (evt) {
        var _this = this;
        this.loading = true;
        this.regraService.delete(evt)
            .subscribe(function (res) { _this.loading = false; }, function (error) { _this.loading = false; });
    };
    RpgComponent.prototype.saveRegras = function (evt) {
        var p = this.rpgService.insertRegras(this.idRegras);
        this.monitor(evt);
        this.persisteRPG(p);
    };
    RpgComponent.prototype.buscarFicha = function () {
        var _this = this;
        this.loading = true;
        this.fmService.findFichaModeloById(this.idFichaModelo)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callFindIt();
            _this.fmEncontrada = true;
        }, function (error) {
            _this.loading = false;
            _this.fmEncontrada = false;
            _this.callFindNot();
        });
    };
    RpgComponent.prototype.saveFM = function (evt) {
        this.rpgService.insertFichaModelo(this.idFichaModelo);
        this.monitor(evt);
    };
    RpgComponent.prototype.saveCapitulos = function (evt) {
        this.rpgService.insertCapitulo(this.idCapitulos);
        this.monitor(evt);
    };
    RpgComponent.prototype.getCapitulo = function (evt) {
        this.addListaCapitulo(evt);
    };
    RpgComponent.prototype.addListaCapitulo = function (evt) {
        var isSelected = this.isOnArray(evt.id, this.idCapitulos);
        if (!isSelected) {
            this.idCapitulos.push(evt.id);
            this.callAdd();
        }
        else {
            this.callFail(evt.id);
        }
    };
    RpgComponent.prototype.saveFaccoes = function (evt) {
        this.rpgService.insertFaccoesBoas(this.idFaccoesBoas);
        this.rpgService.insertFaccoesNeutras(this.idFaccoesNeutras);
        this.rpgService.insertFaccoesHostis(this.idFaccoesHostis);
        this.monitor(evt);
    };
    RpgComponent.prototype.getFaccao = function (evt) {
        this.addListaFaccao(evt);
    };
    RpgComponent.prototype.addListaFaccao = function (evt) {
        var isAliado = this.isOnArray(evt.id, this.idFaccoesBoas);
        var isNeutro = this.isOnArray(evt.id, this.idFaccoesNeutras);
        var isInimigo = this.isOnArray(evt.id, this.idFaccoesHostis);
        if (!(isAliado || isNeutro || isInimigo)) {
            switch (Number(this.tipoFaccao)) {
                case 0:
                    this.idFaccoesBoas.push(evt.id);
                    this.callAdd();
                    break;
                case 1:
                    this.idFaccoesNeutras.push(evt.id);
                    this.callAdd();
                    break;
                case 2:
                    this.idFaccoesHostis.push(evt.id);
                    this.callAdd();
                    break;
                default:
                    this.callSelecione();
                    break;
            }
        }
        else {
            this.callFail(evt.id);
        }
    };
    RpgComponent.prototype.saveNpcs = function (evt) {
        this.rpgService.insertAliados(this.idAliados);
        this.rpgService.insertInimigos(this.idInimigos);
        this.rpgService.insertNeutros(this.idNeutros);
        this.monitor(evt);
    };
    RpgComponent.prototype.addListaNpc = function (evt) {
        var isAliado = this.isOnArray(evt.id, this.idAliados);
        var isNeutro = this.isOnArray(evt.id, this.idNeutros);
        var isInimigo = this.isOnArray(evt.id, this.idInimigos);
        if (!(isAliado || isNeutro || isInimigo)) {
            switch (Number(this.tipoNPC)) {
                case 0:
                    this.idAliados.push(evt.id);
                    this.callAdd();
                    break;
                case 1:
                    this.idNeutros.push(evt.id);
                    this.callAdd();
                    break;
                case 2:
                    this.idInimigos.push(evt.id);
                    this.callAdd();
                    break;
                default:
                    this.callSelecione();
                    break;
            }
        }
        else {
            this.callFail(evt.id);
        }
    };
    RpgComponent.prototype.isOnArray = function (id, arr) {
        return arr.includes(id);
    };
    RpgComponent.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    RpgComponent.prototype.consultar = function () {
        var p = null;
        switch (this.opcao) {
            case 0: // NPC
                p = this.npcService.findPageByCriador(this.paginaAtual.toString());
                break;
        }
        this.paginaService.setPromisse(p);
    };
    RpgComponent.prototype.novo = function () {
        this.showNovo = !this.showNovo;
        this.showLista = false;
    };
    RpgComponent.prototype.listar = function () {
        this.showNovo = false;
        this.showLista = true;
        this.consultar();
    };
    RpgComponent.prototype.callAdd = function () {
        this.toast.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Adicionado com sucesso!'
        });
    };
    RpgComponent.prototype.callFindIt = function () {
        this.toast.add({
            severity: 'success',
            summary: 'Encontrado',
            detail: 'Modelo de Ficha encontrado'
        });
    };
    RpgComponent.prototype.callFindNot = function () {
        this.toast.add({
            severity: 'error',
            summary: 'Não encontrada',
            detail: 'Modelo de Ficha  NÃO encontrado'
        });
    };
    RpgComponent.prototype.callFail = function (id) {
        this.toast.add({
            severity: 'error',
            summary: 'Já incluso',
            detail: id + ' já está incluso(a)!'
        });
    };
    RpgComponent.prototype.callSelecione = function () {
        this.toast.add({
            severity: 'error',
            summary: 'Selecione uma opção!',
            detail: 'Selecione antes de prosseguir!'
        });
    };
    RpgComponent.prototype.persisteRPG = function (p) {
        var _this = this;
        this.loading = true;
        p.subscribe(function (res) {
            _this.presentAdicionar(res.idRpg);
            _this.loading = false;
            _this.router.navigateByUrl('home');
        }, function (error) {
            _this.loading = false;
        });
    };
    RpgComponent.prototype.presentAdicionar = function (id) {
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
    RpgComponent.prototype.copyToClipboard = function (value) {
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
    RpgComponent.prototype.getCode = function (evt) {
        console.log(evt);
        this.idFichaModelo = evt.id;
        this.buscarFicha();
    };
    RpgComponent.prototype.listenValue = function (evt) {
        this.fmEncontrada = false;
        //console.log('Mudou: ', evt);
    };
    RpgComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__["RpgService"] },
        { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_3__["NpcService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_6__["FichaModeloService"] },
        { type: src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"] }
    ]; };
    RpgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpg',
            template: __webpack_require__(/*! raw-loader!./rpg.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/rpg/rpg.component.html"),
            styles: [__webpack_require__(/*! ./rpg.component.scss */ "./src/app/components/criacoes/rpg/rpg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__["RpgService"],
            src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_3__["NpcService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_6__["FichaModeloService"],
            src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"]])
    ], RpgComponent);
    return RpgComponent;
}());



/***/ }),

/***/ "./src/app/services/regra/regra.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/regra/regra.service.ts ***!
  \*************************************************/
/*! exports provided: RegraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegraService", function() { return RegraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var RegraService = /** @class */ (function () {
    function RegraService(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.update = function (dto) {
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "sistema", dto, {
                responseType: 'json'
            });
        };
    }
    RegraService.prototype.findRegraById = function (idRegra) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "sistema/" + idRegra, {
            responseType: 'json'
        });
    };
    RegraService.prototype.insert = function (obj) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "sistema", obj, {
            responseType: "json",
            observe: "body"
        });
    };
    RegraService.prototype.delete = function (id) {
        return this.http.delete(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "sistema/" + id, {
            responseType: 'json',
            observe: "body"
        });
    };
    RegraService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    RegraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], RegraService);
    return RegraService;
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
//# sourceMappingURL=default~contmesa-contmesa-module~gerrpg-gerrpg-module-es5.js.map