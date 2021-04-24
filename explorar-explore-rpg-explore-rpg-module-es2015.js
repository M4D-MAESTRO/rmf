(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explorar-explore-rpg-explore-rpg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/explorar/rpg-detail/rpg-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/explorar/rpg-detail/rpg-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\n  <ion-toolbar>\n    <ion-title>\n      Detalhes da Facção\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"rpg\">\n    <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\"\n      [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"mudaAba($event)\">\n      <ion-segment-button style=\"max-width: 200px; color:white;\" value=\"info\">\n        <ion-label style=\"font-size: 14px\">\n          <fa-icon [icon]=\"['fas', 'id-card-alt']\"></fa-icon>\n          Informações\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button style=\"margin-left: 5px; max-width: 200px; color:white;\" value=\"capitulos\">\n        <ion-label style=\"font-size: 14px\">\n          <fa-icon [icon]=\"['fas', 'book']\" slot=\"end\"></fa-icon>\n          Capitulos\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button style=\"margin-left: 5px; max-width: 200px; color:white;\" value=\"npcs\">\n        <ion-label style=\"font-size: 14px\">\n          <fa-icon [icon]=\"['fas', 'running']\" slot=\"end\"></fa-icon>\n          NPCs\n        </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <br>\n    <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\"\n      [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"mudaAba($event)\">\n      <ion-segment-button style=\"max-width: 200px; color:white;\" value=\"mapas\">\n        <ion-label style=\"font-size: 14px\">\n          <fa-icon [icon]=\"['fas', 'map-marked-alt']\"></fa-icon>\n          Mapas\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button style=\"margin-left: 5px; max-width: 200px; color:white;\" value=\"faccoes\">\n        <ion-label style=\"font-size: 14px\">\n          <fa-icon [icon]=\"['fas', 'users']\" slot=\"end\"></fa-icon>\n          Facções\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button style=\"margin-left: 5px; max-width: 200px; color:white;\" value=\"regras\">\n        <ion-label style=\"font-size: 14px\">\n          <fa-icon [icon]=\"['fab', 'rust']\" slot=\"end\"></fa-icon>\n          Regras\n        </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-grid>\n      <ng-container *ngIf=\"abaAtual == 'info'\">\n        <ion-row class=\"ion-justify-content-start \">\n          <ion-col class=\"ion-padding-horizontal img \">\n            <app-imagem-display [src]=\"rpg.imgURL || 'assets/imgs/dice.png'\"></app-imagem-display>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center \">\n          <ion-col class=\"ion-align-self-center nome \">\n            <p>\n              <strong>{{ rpg?.nome || 'Nome não preenchido'}}</strong> é um RPG do tipo\n              <strong> {{ rpg?.tipoRPG.replace(\"_RPG\", \"\")}}</strong>\n            </p>\n          </ion-col>\n        </ion-row>\n        <br>\n        <ion-row class=\"ion-justify-content-center \">\n          <ion-col class=\"ion-align-self-center nome \">\n            <p><strong>Descrição: </strong>\n              {{rpg?.descricao ||'Descrição não preenchida'}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <br>\n        <ion-row class=\"ion-justify-content-center \">\n          <ion-col class=\"ion-align-self-center nome \">\n            <p><strong>História: </strong>\n              {{rpg?.historia ||'História não preenchida'}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <br>\n        <br>\n      </ng-container>\n\n      <ng-container *ngIf=\"abaAtual == 'faccoes'\">\n        <div class=\"faccoes\">\n          <br>\n          <div class=\"conteudoBom\">\n            <h3>Aliados</h3>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"ion-align-self-center\" *ngFor=\"let faccoes of faccoesBoas\">\n                <ion-card class=\"card\">\n                  <img [src]=\"faccoes.imgURL || 'assets/imgs/cultist.png'\" />\n                  <ion-card-header>\n                    <ion-card-title>{{ faccoes.nome || 'Nome não preenchido' }}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-button expand=\"block\" color=\"tertiary\" (click)=\"exibeDescricao(faccoes.descricao)\">Descrição\n                    </ion-button>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n          <br>\n          <div class=\"conteudoNeutro\">\n            <h3>Neutros</h3>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"ion-align-self-center\" *ngFor=\"let faccoes of faccoesNeutras\">\n                <ion-card class=\"card\">\n                  <img [src]=\"faccoes.imgURL || 'assets/imgs/cultist.png'\" />\n                  <ion-card-header>\n                    <ion-card-title>{{ faccoes.nome || 'Nome não preenchido' }}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-button expand=\"block\" color=\"tertiary\" (click)=\"exibeDescricao(faccoes.descricao)\">Descrição\n                    </ion-button>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n          <br>\n          <div class=\"conteudoHostil\">\n            <h3>Hostis</h3>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"ion-align-self-center\" *ngFor=\"let faccoes of faccoesHostis\">\n                <ion-card class=\"card\">\n                  <img [src]=\"faccoes.imgURL || 'assets/imgs/cultist.png'\" />\n                  <ion-card-header>\n                    <ion-card-title>{{ faccoes.nome || 'Nome não preenchido' }}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    {{ faccoes.descricao || 'Descrição não preenchida' }}\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"abaAtual == 'capitulos'\">\n        <ion-row>\n          <ion-col>\n            <ion-item color=\"dark\">\n              <ion-label color=\"primary\">Selecione o capitulo</ion-label>\n              <ion-select value=\"0\" color=\"light\" (ionChange)=\"setSelectedCapitulo($event)\">\n                <ion-select-option *ngFor=\"let capitulo of capitulos\" [value]=\"capitulo\">{{ capitulo.numCapitulo }} - {{\n                  capitulo.titulo }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ng-container class=\"capitulo\" *ngIf=\"selectedCapitulo\">\n          <div class=\"conteudo\">\n            <ion-row class=\"ion-justify-content-start \">\n              <ion-col class=\"ion-padding-horizontal img \">\n                <app-imagem-display [src]=\"selectedCapitulo.imgURL || 'assets/imgs/dice.png'\"></app-imagem-display>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-justify-content-center \">\n              <ion-col class=\"ion-align-self-center cap-text \">\n                <p>\n                  Capitulo <strong>{{ selectedCapitulo?.numCapitulo || '0'}}</strong> -\n                  <strong> {{ selectedCapitulo?.titulo || 'Titulo não preenchido'}}</strong>\n                </p>\n              </ion-col>\n            </ion-row>\n            <br>\n            <ion-row class=\"ion-justify-content-center \">\n              <ion-col class=\"ion-align-self-center cap-text \">\n                <p><strong>História: </strong>\n                  {{selectedCapitulo?.historia ||'História não preenchida'}}\n                </p>\n              </ion-col>\n            </ion-row>\n            <br>\n            <ion-row class=\"ion-justify-content-center \">\n              <ion-col class=\"ion-align-self-center cap-text \">\n                <p><strong>Resumo do capitulo anterior: </strong>\n                  {{selectedCapitulo?.resumoCapPassado ||'Resumo não preenchido'}}\n                </p>\n              </ion-col>\n            </ion-row>\n            <br>\n            <ion-row class=\"ion-justify-content-center \">\n              <ion-col class=\"ion-align-self-center cap-text \">\n                <p-carousel *ngIf=\"missoes?.length > 0\" [value]=\"missoes\">\n                  <p-header>\n                    <h3 style=\"color: white;\">Missões</h3>\n                  </p-header>\n                  <ng-template let-missao pTemplate=\"panel\">\n                    <div class=\"card\">\n                      <ion-row>\n                        <ion-col>\n                          <ion-item color=\"dark\">\n                            <ion-label color=\"tertiary\" position=\"floating\">Nome</ion-label>\n                            <ion-input color=\"light\" readonly class=\"input\" type=\"text\" [value]=\"missao.nome\">\n                            </ion-input>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-item color=\"dark\">\n                            <ion-label color=\"tertiary\" position=\"floating\">Descrição:</ion-label>\n                            <ion-textarea color=\"light\" type=\"text-area\" readonly [value]=\"missao.descricao\">\n                            </ion-textarea>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-item color=\"dark\">\n                            <ion-label color=\"tertiary\" position=\"floating\">Localização</ion-label>\n                            <ion-input color=\"light\" class=\"input\" type=\"text\" readonly [value]=\"missao.localizacao\">\n                            </ion-input>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-item color=\"dark\">\n                            <ion-label color=\"tertiary\" position=\"floating\">Recompensas:</ion-label>\n                            <ion-textarea color=\"light\" type=\"text-area\" readonly\n                              [value]=\"getRecompensas(missao.recompensas)\">\n                            </ion-textarea>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-item color=\"dark\">\n                            <ion-label color=\"tertiary\" position=\"floating\">Tipo de Missão</ion-label>\n                            <ion-input color=\"light\" class=\"input\" type=\"text\" readonly [value]=\"missao.tipoMissao\">\n                            </ion-input>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                    <br>\n                    <br>\n                  </ng-template>\n                </p-carousel>\n\n                <ng-container *ngIf=\"missoes?.length === 0\">\n                  <h3 style=\"color:white; text-align: center;\">Nenhuma missão cadastrada para este capitulo</h3>\n                </ng-container>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ng-container>\n\n      </ng-container>\n\n\n      <ng-container *ngIf=\"abaAtual == 'npcs'\">\n        <div class=\"faccoes\">\n          <div class=\"conteudoBom\">\n            <h3>Aliados</h3>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"ion-align-self-center\" *ngFor=\"let npc of npcsAliado\">\n                <ion-card class=\"card\">\n                  <img [src]=\"npc.ficha.urlImg || 'assets/imgs/cultist.png'\" />\n                  <ion-card-header>\n                    <ion-card-title>{{ npc.ficha.fichaModelo.nome || 'Nome não preenchido' }}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    {{ npc.ficha.historia?.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n                  </ion-card-content>\n                  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"setSelectedNpc(npc)\">Conhecer</ion-button>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n          <br>\n          <div class=\"conteudoNeutro\">\n            <h3>Neutros</h3>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"ion-align-self-center\" *ngFor=\"let npc of npcsNeutros\">\n                <ion-card class=\"card\">\n                  <img [src]=\"npc.ficha.urlImg || 'assets/imgs/cultist.png'\" />\n                  <ion-card-header>\n                    <ion-card-title>{{ npc.ficha.fichaModelo.nome || 'Nome não preenchido' }}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    {{ npc.ficha.historia?.substring(0, 55).concat(\"...\") || 'História não preenchida' }}\n                  </ion-card-content>\n                  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"setSelectedNpc(npc)\">Conhecer</ion-button>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n          <br>\n          <div class=\"conteudoHostil\">\n            <h3>Hostis</h3>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"ion-align-self-center\" *ngFor=\"let npc of npcsInimigos\">\n                <ion-card class=\"card\">\n                  <img [src]=\"npc.ficha.urlImg || 'assets/imgs/cultist.png'\" />\n                  <ion-card-header>\n                    <ion-card-title>{{ npc.ficha.fichaModelo.nome || 'Nome não preenchido' }}</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    {{ npc.ficha.historia?.substring(0, 55).concat(\"...\") || 'História não preenchida' }}\n                  </ion-card-content>\n                  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"setSelectedNpc(npc)\">Conhecer</ion-button>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"abaAtual == 'regras'\">\n        <div class=\"acoordion\">\n          <p-accordion *ngIf=\"regras?.length > 0\">\n            <p-accordionTab style=\"margin-bottom: 5px;\" *ngFor=\"let regra of regras\" [header]=\"regra.nome\">\n              {{ regra.descricao }}\n            </p-accordionTab>\n          </p-accordion>\n          <ng-container *ngIf=\"regras?.length === 0\">\n            <h3 style=\"color:white; text-align: center;\">Nenhuma regra cadastrada para este RPG</h3>\n          </ng-container>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"abaAtual == 'mapas'\">\n        <div class=\"conteudo faccoes\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-align-self-center\" *ngFor=\"let mapa of mapas\">\n              <ion-card class=\"card\">\n                <img [src]=\"mapa.urlMapa || 'assets/imgs/cultist.png'\" />\n                <ion-card-header>\n                  <ion-card-title>{{ mapa.nome || 'Nome não preenchido' }}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"exibeDescricao(mapa.descricao)\">Descrição\n                  </ion-button>\n                  <ion-button expand=\"block\" color=\"primary\" (click)=\"zoomedImage(mapa.urlMapa)\">Zoom\n                  </ion-button>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ng-container *ngIf=\"mapas?.length === 0\">\n          <h3 style=\"color:white; text-align: center;\">Nenhum mapa cadastrada para este RPG</h3>\n        </ng-container>\n      </ng-container>\n\n    </ion-grid>\n\n  </ng-container>\n\n  <ion-footer *ngIf=\"true\">\n    <ion-toolbar>\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/imagem-zoomed/imagem-zoomed.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/imagem-zoomed/imagem-zoomed.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-image-fullscreen-view [images]=\"getImgZoomed()\" [imageIndex]=\"0\" [show]=\"showFlag\" (close)=\"closeEventHandler()\">\r\n</ng-image-fullscreen-view>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/present-description/present-description.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/present-description/present-description.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item color=\"dark\">\n          <p>{{ message }}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-footer *ngIf=\"true\">\n      <ion-toolbar>\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/explorar/explore-rpg/explore-rpg.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/explorar/explore-rpg/explore-rpg.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"hall\"></ion-back-button>\n    </ion-buttons>\n    <!--<ion-buttons slot=\"end\" *ngIf=\"!isLogedIn()\" (click)=\"goLogin()\">\n      <ion-button color=\"light\" shape=\"round\" fill=\"outline\">\n        Login\n        <ion-label style=\"font-size: 2em\" class=\"pi pi-sign-in\"></ion-label>\n      </ion-button>\n    </ion-buttons>-->\n    <ion-title>\n      Explore RPGs\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content overflow-scroll=\"true\">\n\n  <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"mudaAba($event)\">\n    <ion-segment-button style=\"max-width: 200px;\" value=\"news\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-globe\">\n        Novidades\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px;\" value=\"search\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-search\">\n        Pesquise\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid>\n    <ng-container *ngIf=\"abaAtual == 'news'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"detalhar(projecao.id)\">Conhecer</ion-button>\n              <ion-button expand=\"block\" color=\"light\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"abaAtual == 'search'\">\n      <div id=\"search\">\n        <div class=\"search\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-input color=\"light\" type=\"text\" placeholder=\"Vamos lá, só explorar!\" [(ngModel)]=\"descricao\"\n                  [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"pesquisar()\" clearInput></ion-input>\n                <fa-icon style=\"cursor: pointer;\" [icon]=\"['fas', 'search']\" slot=\"end\" (click)=\"pesquisar()\"></fa-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Preferência</ion-label>\n                <ion-select [(ngModel)]=\"orderBy\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"dataCriacao\">Data de Criação</ion-select-option>\n                  <ion-select-option value=\"titulo\">Título</ion-select-option>\n                  <ion-select-option value=\"historia\">História</ion-select-option>\n                  <ion-select-option value=\"resumoCapPassado\">Resumo do capítulo anterior</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Ordenação</ion-label>\n                <ion-select [(ngModel)]=\"direction\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"DESC\">Mais novo</ion-select-option>\n                  <ion-select-option value=\"ASC\">Mais antigo</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <div *ngIf=\"flagSearched\" id=\"pesquisado\" class=\"conteudo\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"detalhar(projecao.id)\">Conhecer</ion-button>\n              <ion-button expand=\"block\" color=\"light\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n\n  </ion-grid>\n\n  <br>\n</ion-content>\n\n<app-footer></app-footer>\n\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>"

/***/ }),

/***/ "./src/app/components/explorar/rpg-detail/rpg-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/explorar/rpg-detail/rpg-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.img {\n  border-radius: 50%;\n}\n\n.nome {\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  margin-right: 10px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\nion-toolbar {\n  --background: rgb(122, 122, 122);\n}\n\np {\n  overflow-wrap: break-word;\n  white-space: normal;\n  color: white;\n  text-align: center;\n}\n\n.status {\n  margin-top: 10px;\n  color: white !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  text-align: center;\n}\n\n::ng-deep .ui-inputtext {\n  background-color: black !important;\n  color: white !important;\n  text-align: center;\n  margin: auto;\n}\n\n.atributos-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n}\n\n.atributos-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.atributos-details > div img {\n  margin-right: 14px;\n  width: 90px;\n  height: 90px;\n}\n\n.atributos-details {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n  background-color: #1b1b1b;\n  border-radius: 2px;\n}\n\n.atributos-details:hover {\n  background-color: #254645;\n  cursor: pointer;\n}\n\n::ng-deep .ui-dataview {\n  background-color: #050105 !important;\n}\n\n::ng-deep .ui-dataview-header {\n  background-color: #050105 !important;\n  border: none !important;\n  border-bottom: 1px solid #d9dad9 !important;\n}\n\n::ng-deep .ui-paginator {\n  background-color: #050105 !important;\n  border: #050105 !important;\n}\n\n::ng-deep .ui-dataview-content {\n  background-color: #342436 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n::ng-deep .ui-dataview-footer {\n  background-color: black !important;\n  border: none !important;\n  border-top: 1px solid #d9dad9 !important;\n}\n\n::ng-deep .ui-button {\n  background-color: #7044ff;\n}\n\n.back {\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 13px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n.conteudoBom {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(26, 11, 92, 0.801);\n}\n\n.conteudoNeutro {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(87, 92, 11, 0.801);\n}\n\n.conteudoHostil {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(92, 11, 11, 0.801);\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.faccoes .card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.faccoes .card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.faccoes .card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n.cap-text {\n  box-shadow: inset 0 0 20px #000000;\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361);\n  margin-right: 10px;\n  background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361);\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n::ng-deep .ui-accordion-content-wrapper {\n  background-color: #2b2b2b !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header a {\n  background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361) !important;\n  color: white !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover a {\n  background-color: #2b2b2b !important;\n  color: white !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active:hover a {\n  border: 1px solid #2b2b2b !important;\n  background-color: #2b2b2b !important;\n  color: #ffffff !important;\n}\n\n::ng-deep .ui-accordion-content {\n  background: #575757 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-accordion-header {\n  background-color: #2b2b2b !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a {\n  background-color: #2b2b2b !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBsb3Jhci9ycGctZGV0YWlsL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxleHBsb3JhclxccnBnLWRldGFpbFxccnBnLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHBsb3Jhci9ycGctZGV0YWlsL3JwZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFFQSxrQkFBQTtFQUNBLHNFQUFBO0FDQUY7O0FER0E7RUFDRSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLDBCQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLDhCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNFQUFBO0FDR0Y7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLGtCQUFBO0VBRUEsd0VBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1FO0VBQ0UsMkJBQUE7QUNKSjs7QURXQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0VBQUE7QUNURjs7QURZQTtFQUNFLHFCQUFBO0FDVEY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGVBO0VBQ0UsaUZBQUE7RUFDQSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FDWkY7O0FEZUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0FDWkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGVBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBsb3Jhci9ycGctZGV0YWlsL3JwZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ub21lIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG59XHJcblxyXG5wIHtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWlucHV0dGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYgaW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5hdHJpYnV0b3MtZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcclxuICBtYXJnaW46IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmF0cmlidXRvcy1kZXRhaWxzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU0NjQ1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE3LCAyMTgsIDIxNykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcclxuICBib3JkZXI6ICMwNTAxMDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyNDM2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1zdGF0ZS1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMTcsIDIxOCwgMjE3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRmZjtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZXVkb0JvbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxMSwgOTIsIDAuODAxKTtcclxufVxyXG5cclxuLmNvbnRldWRvTmV1dHJvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogNXB4IGluc2V0ICMwNTAxMDU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODcsIDkyLCAxMSwgMC44MDEpO1xyXG59XHJcblxyXG4uY29udGV1ZG9Ib3N0aWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgMTEsIDExLCAwLjgwMSk7XHJcbn1cclxuXHJcbi5jb250ZXVkbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG59XHJcblxyXG4uZmFjY29lcyB7XHJcbiAgLmNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2FyZCBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FwaXR1bG9zIHtcclxufVxyXG5cclxuLmNhcC10ZXh0IHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzUzM2MyNCwgIzZkMzYyYywgIzY2MzAzZSwgIzVkNDM2MSk7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM1MzNjMjQsICM2ZDM2MmMsICM2NjMwM2UsICM1ZDQzNjEpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYWNvb3JkaW9uIHtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24tY29udGVudC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXIgYXtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM1MzNjMjQsICM2ZDM2MmMsICM2NjMwM2UsICM1ZDQzNjEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOm5vdCgudWktc3RhdGUtYWN0aXZlKTpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0MykgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXI6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlOmhvdmVyIGEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MywgNDMsIDQzKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDMsIDQzKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYig4NywgODcsIDg3KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWFjY29yZGlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSBhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ub21lIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xufVxuXG5wIHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0dXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC51aS1pbnB1dHRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hdHJpYnV0b3MtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XG4gIG1hcmdpbjogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hdHJpYnV0b3MtZGV0YWlsczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTQ2NDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktZGF0YXZpZXctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDI0MzYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKjpob3ZlciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXN0YXRlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWRhZDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGZmO1xufVxuXG4uYmFjayB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDEyOSwgNzksIDE5NiwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5jb250ZXVkb0JvbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExLCA5MiwgMC44MDEpO1xufVxuXG4uY29udGV1ZG9OZXV0cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg3LCA5MiwgMTEsIDAuODAxKTtcbn1cblxuLmNvbnRldWRvSG9zdGlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogNXB4IGluc2V0ICMwNTAxMDU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgMTEsIDExLCAwLjgwMSk7XG59XG5cbi5jb250ZXVkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbi5mYWNjb2VzIC5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcbn1cbi5mYWNjb2VzIC5jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZmFjY29lcyAuY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbn1cblxuLmNhcC10ZXh0IHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzUzM2MyNCwgIzZkMzYyYywgIzY2MzAzZSwgIzVkNDM2MSk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNTMzYzI0LCAjNmQzNjJjLCAjNjYzMDNlLCAjNWQ0MzYxKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uLWNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXIgYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzUzM2MyNCwgIzZkMzYyYywgIzY2MzAzZSwgIzVkNDM2MSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOm5vdCgudWktc3RhdGUtYWN0aXZlKTpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXI6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlOmhvdmVyIGEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmIyYjJiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICM1NzU3NTcgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXI6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/explorar/rpg-detail/rpg-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/explorar/rpg-detail/rpg-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: RpgDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgDetailComponent", function() { return RpgDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var _imagem_zoomed_imagem_zoomed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../imagem-zoomed/imagem-zoomed.component */ "./src/app/components/imagem-zoomed/imagem-zoomed.component.ts");
/* harmony import */ var _utils_present_description_present_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/present-description/present-description.component */ "./src/app/components/utils/present-description/present-description.component.ts");
/* harmony import */ var _npc_detail_npc_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../npc-detail/npc-detail.component */ "./src/app/components/explorar/npc-detail/npc-detail.component.ts");









let RpgDetailComponent = class RpgDetailComponent {
    constructor(modal, modalInterno, detalharService, rpgService, toast) {
        this.modal = modal;
        this.modalInterno = modalInterno;
        this.detalharService = detalharService;
        this.rpgService = rpgService;
        this.toast = toast;
        this.faccoesBoas = [];
        this.faccoesHostis = [];
        this.faccoesNeutras = [];
        this.npcsAliado = [];
        this.npcsInimigos = [];
        this.npcsNeutros = [];
        this.capitulos = [];
        this.missoes = [];
        this.regras = [];
        this.mapas = [];
        this.loading = true;
        this.abaAtual = 'info';
    }
    ngOnInit() {
        const id = this.detalharService.getId();
        this.rpgService.findById(id)
            .subscribe(res => {
            console.log(res);
            const { nome, imgURL, historia, descricao, tipoRPG, faccoesBoas, faccoesHostis, faccoesNeutras, capitulos, aliados, neutros, inimigos, sistemas, mapas } = res;
            this.rpg = {
                nome,
                imgURL,
                historia,
                descricao,
                tipoRPG,
            };
            this.faccoesBoas = faccoesBoas;
            this.faccoesHostis = faccoesHostis;
            this.faccoesNeutras = faccoesNeutras;
            this.capitulos = capitulos;
            this.npcsAliado = aliados;
            this.npcsInimigos = inimigos;
            this.npcsNeutros = neutros;
            this.regras = sistemas;
            this.mapas = mapas;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    close() {
        this.modal.dismiss(null, null, "rpg-detail");
    }
    mudaAba(event) {
        this.selectedCapitulo = undefined;
        console.log(this.mapas);
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
    exibeDescricao(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!message)
                message = 'Não preenchido';
            const modal = yield this.modalInterno.create({
                component: _utils_present_description_present_description_component__WEBPACK_IMPORTED_MODULE_7__["PresentDescriptionComponent"],
                componentProps: {
                    message
                },
                backdropDismiss: true,
                id: 'detail'
            });
            return yield modal.present();
        });
    }
    zoomedImage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!image)
                image = 'assets/imgs/dice.png';
            const modal = yield this.modalInterno.create({
                component: _imagem_zoomed_imagem_zoomed_component__WEBPACK_IMPORTED_MODULE_6__["ImagemZoomedComponent"],
                componentProps: {
                    src: image
                },
                backdropDismiss: true,
                cssClass: 'my-custom-modal-css',
                id: 'detail'
            });
            return yield modal.present();
        });
    }
    setSelectedCapitulo(event) {
        const { value } = event.detail;
        this.selectedCapitulo = value;
        this.missoes = value.missoes;
    }
    setSelectedNpc(npc) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalInterno.create({
                component: _npc_detail_npc_detail_component__WEBPACK_IMPORTED_MODULE_8__["NpcDetailComponent"],
                componentProps: {
                    passedNpc: npc,
                },
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
                id: 'npc-detail'
            });
            return yield modal.present();
        });
    }
};
RpgDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_4__["DetalharService"] },
    { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__["RpgService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
RpgDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rpg-detail',
        template: __webpack_require__(/*! raw-loader!./rpg-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/explorar/rpg-detail/rpg-detail.component.html"),
        styles: [__webpack_require__(/*! ./rpg-detail.component.scss */ "./src/app/components/explorar/rpg-detail/rpg-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_4__["DetalharService"],
        src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_5__["RpgService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], RpgDetailComponent);



/***/ }),

/***/ "./src/app/components/explorar/rpg-detail/rpg-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/explorar/rpg-detail/rpg-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: RpgDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgDetailModule", function() { return RpgDetailModule; });
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
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var _rpg_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rpg-detail.component */ "./src/app/components/explorar/rpg-detail/rpg-detail.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _utils_especializacoes_view_especializacoes_view_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/especializacoes-view/especializacoes-view.module */ "./src/app/components/utils/especializacoes-view/especializacoes-view.module.ts");
/* harmony import */ var _utils_vantagem_view_vantagem_view_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/vantagem-view/vantagem-view.module */ "./src/app/components/utils/vantagem-view/vantagem-view.module.ts");
/* harmony import */ var _utils_inventario_view_inventario_view_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/inventario-view/inventario-view.module */ "./src/app/components/utils/inventario-view/inventario-view.module.ts");
/* harmony import */ var _utils_present_description_present_description_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/present-description/present-description.module */ "./src/app/components/utils/present-description/present-description.module.ts");
/* harmony import */ var _npc_detail_npc_detail_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../npc-detail/npc-detail.module */ "./src/app/components/explorar/npc-detail/npc-detail.module.ts");
/* harmony import */ var _imagem_zoomed_imagem_zoomed_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../imagem-zoomed/imagem-zoomed.module */ "./src/app/components/imagem-zoomed/imagem-zoomed.module.ts");

























let RpgDetailModule = class RpgDetailModule {
};
RpgDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rpg_detail_component__WEBPACK_IMPORTED_MODULE_15__["RpgDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_16__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_17__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_18__["ListasModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_9__["PanelModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
            _utils_especializacoes_view_especializacoes_view_module__WEBPACK_IMPORTED_MODULE_19__["EspecializacoesViewModule"],
            _utils_vantagem_view_vantagem_view_module__WEBPACK_IMPORTED_MODULE_20__["VantagemViewModule"],
            _utils_inventario_view_inventario_view_module__WEBPACK_IMPORTED_MODULE_21__["InventarioViewModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
            _utils_present_description_present_description_module__WEBPACK_IMPORTED_MODULE_22__["PresentDescriptionModule"],
            _npc_detail_npc_detail_module__WEBPACK_IMPORTED_MODULE_23__["NpcDetailModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionModule"],
            _imagem_zoomed_imagem_zoomed_module__WEBPACK_IMPORTED_MODULE_24__["ImagemZoomedModule"]
        ],
        exports: [_rpg_detail_component__WEBPACK_IMPORTED_MODULE_15__["RpgDetailComponent"]],
        entryComponents: [_rpg_detail_component__WEBPACK_IMPORTED_MODULE_15__["RpgDetailComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]]
    })
], RpgDetailModule);



/***/ }),

/***/ "./src/app/components/imagem-zoomed/imagem-zoomed.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/imagem-zoomed/imagem-zoomed.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 400px;\n  max-height: 400px;\n  margin: 10px;\n}\n\n@media only screen and (max-width: 450px) {\n  .container {\n    max-width: 400px;\n    max-height: 400px;\n  }\n\n  .container {\n    max-width: 300px;\n    max-height: 300px;\n  }\n}\n\n.center {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  align-self: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  justify-self: center !important;\n  text-align: center !important;\n}\n\n.click {\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZW0tem9vbWVkL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbWFnZW0tem9vbWVkXFxpbWFnZW0tem9vbWVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlbS16b29tZWQvaW1hZ2VtLXpvb21lZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUNBTjs7RURFRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksK0JBQUE7RUFBQSx3QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUFBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2VtLXpvb21lZC9pbWFnZW0tem9vbWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGlja3tcclxuICAgIGN1cnNvcjogem9vbS1pbjtcclxufSIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB9XG59XG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrIHtcbiAgY3Vyc29yOiB6b29tLWluO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/imagem-zoomed/imagem-zoomed.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/imagem-zoomed/imagem-zoomed.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImagemZoomedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemZoomedComponent", function() { return ImagemZoomedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");






let ImagemZoomedComponent = class ImagemZoomedComponent {
    constructor(modalCtrl, service, toast) {
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.toast = toast;
        this.src = '';
        this.defaultImg = 'assets/imgs/dice.png';
        this.isZoomed = false;
        this.showFlag = true;
        this.selectedImageIndex = 0;
        this.currentIndex = 0;
        this.src = this.src || this.defaultImg;
    }
    ngOnInit() {
        const p = this.service.getPromisse();
        if (p && (this.src == null || this.src.length < 5 || !this.src || Object(util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.src))) {
            this.src = p;
        }
        this.getImgZoomed();
    }
    close() {
        this.modalCtrl.dismiss(this.src);
    }
    getImg() {
        //console.log(isObject(this.src));
        if (this.src == null || this.src.length < 5 || !this.src || Object(util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.src)) {
            return this.defaultImg;
        }
        else {
            return this.src;
        }
    }
    getImgZoomed() {
        console.log(this.src);
        console.log(this.showFlag);
        if (this.src == null || this.src.length < 5 || !this.src || Object(util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.src)) {
            return [{ image: this.defaultImg }];
        }
        else {
            return [{ image: this.src }];
        }
    }
    update() {
        const p = this.service.getPromisse();
        p.subscribe(res => console.log(res));
    }
    zoom() {
        this.isZoomed = !this.isZoomed;
    }
    showLightbox(index) {
        this.selectedImageIndex = index;
        this.showFlag = true;
    }
    closeEventHandler() {
        this.close();
    }
};
ImagemZoomedComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagemZoomedComponent.prototype, "src", void 0);
ImagemZoomedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imagem-zoomed',
        template: __webpack_require__(/*! raw-loader!./imagem-zoomed.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/imagem-zoomed/imagem-zoomed.component.html"),
        styles: [__webpack_require__(/*! ./imagem-zoomed.component.scss */ "./src/app/components/imagem-zoomed/imagem-zoomed.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_5__["PaginacaoService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
], ImagemZoomedComponent);



/***/ }),

/***/ "./src/app/components/imagem-zoomed/imagem-zoomed.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/imagem-zoomed/imagem-zoomed.module.ts ***!
  \******************************************************************/
/*! exports provided: ImagemZoomedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemZoomedModule", function() { return ImagemZoomedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_image_fullscreen_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-image-fullscreen-view */ "./node_modules/ng-image-fullscreen-view/fesm2015/ng-image-fullscreen-view.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var _imagem_zoomed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imagem-zoomed.component */ "./src/app/components/imagem-zoomed/imagem-zoomed.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");










let ImagemZoomedModule = class ImagemZoomedModule {
};
ImagemZoomedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_imagem_zoomed_component__WEBPACK_IMPORTED_MODULE_7__["ImagemZoomedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            ng_image_fullscreen_view__WEBPACK_IMPORTED_MODULE_5__["NgImageFullscreenViewModule"]
        ],
        entryComponents: [_imagem_zoomed_component__WEBPACK_IMPORTED_MODULE_7__["ImagemZoomedComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        exports: [_imagem_zoomed_component__WEBPACK_IMPORTED_MODULE_7__["ImagemZoomedComponent"]]
    })
], ImagemZoomedModule);



/***/ }),

/***/ "./src/app/components/utils/present-description/present-description.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/utils/present-description/present-description.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  opacity: 1 !important;\n}\n\nion-input {\n  opacity: 1 !important;\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\nion-toolbar {\n  --background: none;\n}\n\np {\n  text-align: center !important;\n  color: white !important;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wcmVzZW50LWRlc2NyaXB0aW9uL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1dGlsc1xccHJlc2VudC1kZXNjcmlwdGlvblxccHJlc2VudC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wcmVzZW50LWRlc2NyaXB0aW9uL3ByZXNlbnQtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0Esd0VBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvcHJlc2VudC1kZXNjcmlwdGlvbi9wcmVzZW50LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsImlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/utils/present-description/present-description.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/utils/present-description/present-description.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PresentDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentDescriptionComponent", function() { return PresentDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PresentDescriptionComponent = class PresentDescriptionComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    close() {
        this.modal.dismiss();
    }
};
PresentDescriptionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('message'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PresentDescriptionComponent.prototype, "message", void 0);
PresentDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-present-description',
        template: __webpack_require__(/*! raw-loader!./present-description.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/present-description/present-description.component.html"),
        styles: [__webpack_require__(/*! ./present-description.component.scss */ "./src/app/components/utils/present-description/present-description.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], PresentDescriptionComponent);



/***/ }),

/***/ "./src/app/components/utils/present-description/present-description.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/utils/present-description/present-description.module.ts ***!
  \************************************************************************************/
/*! exports provided: PresentDescriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentDescriptionModule", function() { return PresentDescriptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _present_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./present-description.component */ "./src/app/components/utils/present-description/present-description.component.ts");





let PresentDescriptionModule = class PresentDescriptionModule {
};
PresentDescriptionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_present_description_component__WEBPACK_IMPORTED_MODULE_4__["PresentDescriptionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        entryComponents: [_present_description_component__WEBPACK_IMPORTED_MODULE_4__["PresentDescriptionComponent"]],
        exports: [_present_description_component__WEBPACK_IMPORTED_MODULE_4__["PresentDescriptionComponent"]]
    })
], PresentDescriptionModule);



/***/ }),

/***/ "./src/app/explorar/explore-rpg/explore-rpg-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/explorar/explore-rpg/explore-rpg-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ExploreRpgPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreRpgPageRoutingModule", function() { return ExploreRpgPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _explore_rpg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-rpg.page */ "./src/app/explorar/explore-rpg/explore-rpg.page.ts");




const routes = [
    {
        path: '',
        component: _explore_rpg_page__WEBPACK_IMPORTED_MODULE_3__["ExploreRpgPage"]
    }
];
let ExploreRpgPageRoutingModule = class ExploreRpgPageRoutingModule {
};
ExploreRpgPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExploreRpgPageRoutingModule);



/***/ }),

/***/ "./src/app/explorar/explore-rpg/explore-rpg.module.ts":
/*!************************************************************!*\
  !*** ./src/app/explorar/explore-rpg/explore-rpg.module.ts ***!
  \************************************************************/
/*! exports provided: ExploreRpgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreRpgPageModule", function() { return ExploreRpgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var _explore_rpg_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-rpg-routing.module */ "./src/app/explorar/explore-rpg/explore-rpg-routing.module.ts");
/* harmony import */ var _explore_rpg_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-rpg.page */ "./src/app/explorar/explore-rpg/explore-rpg.page.ts");
/* harmony import */ var src_app_components_imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var src_app_components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var src_app_components_explorar_rpg_detail_rpg_detail_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/explorar/rpg-detail/rpg-detail.module */ "./src/app/components/explorar/rpg-detail/rpg-detail.module.ts");














let ExploreRpgPageModule = class ExploreRpgPageModule {
};
ExploreRpgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_rpg_routing_module__WEBPACK_IMPORTED_MODULE_8__["ExploreRpgPageRoutingModule"],
            src_app_components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerModule"],
            src_app_components_imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_7__["PaginatorModule"],
            src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
            src_app_components_explorar_rpg_detail_rpg_detail_module__WEBPACK_IMPORTED_MODULE_13__["RpgDetailModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ],
        declarations: [_explore_rpg_page__WEBPACK_IMPORTED_MODULE_9__["ExploreRpgPage"]]
    })
], ExploreRpgPageModule);



/***/ }),

/***/ "./src/app/explorar/explore-rpg/explore-rpg.page.scss":
/*!************************************************************!*\
  !*** ./src/app/explorar/explore-rpg/explore-rpg.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(37, 23, 33, 0.801);\n}\n\n.card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n@-webkit-keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\n::ng-deep .ui-paginator {\n  background-color: #05010500 !important;\n  border: #05010500 !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n.search {\n  max-width: 500px;\n  margin: auto;\n}\n\n.search ion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yYXIvZXhwbG9yZS1ycGcvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGV4cGxvcmFyXFxleHBsb3JlLXJwZ1xcZXhwbG9yZS1ycGcucGFnZS5zY3NzIiwic3JjL2FwcC9leHBsb3Jhci9leHBsb3JlLXJwZy9leHBsb3JlLXJwZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsdUNBQUE7RUFDQSxrQkFBQTtFQUVBLHdFQUFBO0VBQ0EsOERBQUE7VUFBQSxzREFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLDJCQUFBO0VDSE47RURLRTtJQUNJLDZCQUFBO0VDSE47RURLRTtJQUNJLDJCQUFBO0VDSE47QUFDRjs7QUROQTtFQUNJO0lBQ0ksMkJBQUE7RUNITjtFREtFO0lBQ0ksNkJBQUE7RUNITjtFREtFO0lBQ0ksMkJBQUE7RUNITjtBQUNGOztBRE1BO0VBQ0ksZ0NBQUE7QUNKSjs7QURPQTtFQUNJLHNDQUFBO0VBQ0EsNEJBQUE7QUNKSjs7QURPQTtFQUNJLHVCQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtBQ0pKOztBRE9BO0VBQ0ksOEJBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0pKOztBREtJO0VBQ0kscUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmFyL2V4cGxvcmUtcnBnL2V4cGxvcmUtcnBnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC44MDEpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRldWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogNXB4IGluc2V0ICMwNTAxMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMywgMzMsIDAuODAxKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcmQgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkZ3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogIzA1MDEwNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktc3RhdGUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG4iLCIuYmFja2dyb3VuZC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uYmFja2dyb3VuZC1zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRldWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogNXB4IGluc2V0ICMwNTAxMDU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMjMsIDMzLCAwLjgwMSk7XG59XG5cbi5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcbn1cblxuLmNhcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZWRncmFkaWVudCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNTAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogIzA1MDEwNTAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKjpob3ZlciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXN0YXRlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zZWFyY2ggaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/explorar/explore-rpg/explore-rpg.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/explorar/explore-rpg/explore-rpg.page.ts ***!
  \**********************************************************/
/*! exports provided: ExploreRpgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreRpgPage", function() { return ExploreRpgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_components_explorar_rpg_detail_rpg_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/explorar/rpg-detail/rpg-detail.component */ "./src/app/components/explorar/rpg-detail/rpg-detail.component.ts");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_page_rpg_rpg_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/page/rpg/rpg-page.service */ "./src/app/services/page/rpg/rpg-page.service.ts");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");









let ExploreRpgPage = class ExploreRpgPage {
    constructor(auth, rpgPage, modal, detalharService, toast, alertContr, rpgService) {
        this.auth = auth;
        this.rpgPage = rpgPage;
        this.modal = modal;
        this.detalharService = detalharService;
        this.toast = toast;
        this.alertContr = alertContr;
        this.rpgService = rpgService;
        //FAZER O DETALHE DO RPG
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
        this.rpgPage.findPageByNewer(page, this.linhasPorPagina.toString())
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
        this.rpgPage.findPageBySearch(page, this.descricao, this.orderBy, this.direction, this.linhasPorPagina.toString())
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
                component: src_app_components_explorar_rpg_detail_rpg_detail_component__WEBPACK_IMPORTED_MODULE_4__["RpgDetailComponent"],
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
            this.rpgService.doCopy(id)
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
ExploreRpgPage.ctorParameters = () => [
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: src_app_services_page_rpg_rpg_page_service__WEBPACK_IMPORTED_MODULE_6__["RpgPageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_7__["RpgService"] }
];
ExploreRpgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-rpg',
        template: __webpack_require__(/*! raw-loader!./explore-rpg.page.html */ "./node_modules/raw-loader/index.js!./src/app/explorar/explore-rpg/explore-rpg.page.html"),
        styles: [__webpack_require__(/*! ./explore-rpg.page.scss */ "./src/app/explorar/explore-rpg/explore-rpg.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        src_app_services_page_rpg_rpg_page_service__WEBPACK_IMPORTED_MODULE_6__["RpgPageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_7__["RpgService"]])
], ExploreRpgPage);



/***/ }),

/***/ "./src/app/services/page/rpg/rpg-page.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/page/rpg/rpg-page.service.ts ***!
  \*******************************************************/
/*! exports provided: RpgPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgPageService", function() { return RpgPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage-service.service */ "./src/app/services/storage-service.service.ts");





let RpgPageService = class RpgPageService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    findPageByNewer(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/rpg/newer`, {
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
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/rpg/search/`, {
            params,
            observe: 'body',
        });
    }
};
RpgPageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
RpgPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], RpgPageService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





let RpgService = class RpgService {
    constructor(http, storage) {
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
    getStaticID() {
        return this.staticID;
    }
    setStaticID(id) {
        this.staticID = id;
    }
    getDoUpdate() {
        return this.doUpdate;
    }
    setDoUpdate(doUpdate) {
        this.doUpdate = doUpdate;
    }
    insertInfo(obj) {
        this.newRpg.nome = obj.nome;
        this.newRpg.descricao = obj.descricao;
        this.newRpg.historia = obj.historia;
        this.newRpg.tipoRPG = obj.tipoRPG;
        this.newRpg.imgURL = obj.imgURL;
    }
    insertAliados(idAliados) {
        this.newRpg.idAliados = idAliados;
    }
    insertInimigos(idInimigos) {
        this.newRpg.idInimigos = idInimigos;
    }
    insertNeutros(idNeutros) {
        this.newRpg.idNeutros = idNeutros;
    }
    insertFaccoesBoas(idFaccoesBoas) {
        this.newRpg.idFaccoesBoas = idFaccoesBoas;
    }
    insertFaccoesNeutras(idFaccoesNeutras) {
        this.newRpg.idFaccoesNeutras = idFaccoesNeutras;
    }
    insertFaccoesHostis(idFaccoesHostis) {
        this.newRpg.idFaccoesHostis = idFaccoesHostis;
    }
    insertCapitulo(idCapitulo) {
        this.newRpg.idCapitulos = idCapitulo;
    }
    insertFichaModelo(idFichaModelo) {
        this.newRpg.idFichaModelo = idFichaModelo;
    }
    insertRegras(idRegras) {
        this.newRpg.idSistemas = idRegras;
        return this.insert(this.newRpg);
    }
    insertMapas(idMapas) {
        this.newRpg.idMapas = idMapas;
    }
    insert(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg`, obj, {
            responseType: "json",
            observe: "body"
        });
    }
    check() {
        console.log(this.newRpg);
    }
    findPageByTipoRPG(tipoRPG, page = '0', linesPerPage = '10') {
        console.log(tipoRPG);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('tipoRPG', tipoRPG)
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg/page`, {
            params,
            observe: 'body',
        });
    }
    doCopy(idRPG) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', this.storage.getLocalUserId())
            .set('idRPG', idRPG);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg/copiar`, {
            params,
            observe: 'body',
        });
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg/${id}`);
    }
    findPageByCriador(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg/criador`, {
            params,
            observe: 'body',
        });
    }
    updateBasic(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg`, dto);
    }
};
RpgService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
RpgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], RpgService);



/***/ })

}]);
//# sourceMappingURL=explorar-explore-rpg-explore-rpg-module-es2015.js.map