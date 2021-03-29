(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suporte-suporte-module"],{

/***/ "./node_modules/primeng/fesm5/primeng-inputtext.js":
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-inputtext.js ***!
  \*********************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    InputText.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event'])
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
    ], InputText);
    return InputText;
}());
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtext.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/suporte/suporte.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suporte/suporte.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"isLogedIn()\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!isLogedIn()\">\r\n      <ion-back-button defaultHref=\"hall\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Suporte\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button value=\"faq\">\r\n      <ion-label style=\"font-size: 16px; color: white;\">\r\n        F.A.Q\r\n        <fa-icon [icon]=\"['fas', 'question']\" slot=\"end\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"contato\">\r\n      <ion-label style=\"font-size: 16px; color: white;\">\r\n        Contato\r\n        <fa-icon [icon]=\"['fas', 'comment-dots']\" slot=\"end\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"notes\">\r\n      <ion-label style=\"font-size: 16px; color: white;\">\r\n        Notas\r\n        <fa-icon [icon]=\"['fas', 'sticky-note']\" slot=\"end\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <br>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'faq'\">\r\n    <span class=\"faq\">FAQ</span>\r\n    <div class=\"container\">\r\n\r\n      <p-accordion>\r\n        <p-accordionTab header=\"Antes de tudo, quanto custa?\">\r\n          Nada, a aplicação é de uso <strong>gratuito</strong>\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê é o RMF?\">\r\n          RMF significa: \"RPG Manager Factory\", traduzindo, Fábrica de gerenciamento de RPG.<br>\r\n          A aplicação é justamente isto, um framework que te permite criar, gerênciar e compartilhar conteúdos, bem como\r\n          conduzir RPG's\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Vocês vão roubar meus dados e escravizar minha família?\">\r\n          Definitavamente não, até porque o único dado que temos e que pretendemos ter seu, é seu e-mail.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Onde o RMF está disponível?\">\r\n          Dispositivos mobile, <strong>Android</strong>. <br>\r\n          WEB, através de navegadores como o <strong>Chorme, Firefox, Opera e outros mais modernos</strong>.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê o RMF é, ou faz?\">\r\n          O principal objetivo do RMF é ajudar na organização de mesas de RPG e seu conteúdo.<br>\r\n          Pode ser uma tarefa muito árdua gerenciar mesas de RPG, ainda mais com número alto de jogadores e\r\n          conteúdos.<br>\r\n          Por isso, com o RMF, você centraliza os mais diversos tipos de conteúdos para um RPG, como, criação de NPCs,\r\n          Facções, Modelo de fichas, Missões, Capítulos, dentre outros conteúdos típicos do RPG.<br>\r\n          Além de criar, você pode gerenciar seus conteúdos criados, podendo reutiliza-los em outros RPGs, inclusive,\r\n          podendo\r\n          usar conteúdos criados por outros jogadores.<br>\r\n          Você também pode gerenciar mesas de RPG, colocando jogadores, mestrando, alterando conteúdo e gerenciando as\r\n          fichas ali presente.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê eu posso criar?\">\r\n          Mapas, NPCs, Equipamentos e armas, Modelos de Fichas, Missões, Capítulos, Facções, um próprio e personalizado\r\n          sistema de RPG.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Como mestre de uma mesa, o quê eu posso fazer?\">\r\n          Como mestre, você pode adicionar jogadores e gerenciar suas respectivas fichas, inclusive dando opção ao\r\n          jogador\r\n          de poder edita-la, ou não.<br>\r\n          Também pode adicionar, remover e editar quaisquer outros conteúdos de criações.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Como jogador de uma mesa, o quê eu posso fazer?\">\r\n          Verificar as informações básicas do RPG jogado, como: nome, descrição e história.\r\n          Verificar as missões em andamento e concluídas.<br>\r\n          Gerenciar sua ficha e edita-la, SE, o mestre tiver dado permissão.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Qual sistema de RPG o aplicativo suporta?\">\r\n          Todos! Contanto que eles seja/esteja criado.<br>\r\n          Você também pode inclusive criar o seu próprio sistema de RPG.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Há limites de conteúdos que eu posso criar?\">\r\n          O único limite é a sua criatividade.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Há limites de mesas que posso mestrar/jogar?\">\r\n          Também não!\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê o RMF NÃO é, ou NÃO faz?\">\r\n          O RMF não é uma central de comunicação, o objetivo da aplicação é bem claro, <strong>CRIAR,\r\n            GERENCIAR e COMPARTILHAR</strong>.<br>\r\n          Eu recomendo o uso do Discord, caso os jogadores estejam longe.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Poderei me comunicar pelo RMF?\">\r\n          Não, é não há intúito de funcionalidades do tipo.<br> Recomendo o uso do Discord para mesas não presenciais.\r\n          Utilize o RMF como o seu framework de criação e gerenciamento.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Encontrei uma imagem minha que está sendo usada sem consentimento\">\r\n          Peço desculpas por isso, por favor, <span class=\"click\" (click)=\"abaAtual='contato'\">clique aqui</span> e me\r\n          envie um e-mail solicitando a remoção da mesma.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Encontrei um erro, bug ou falha, o quê fazer?\">\r\n          Utilize o formulário na outra aba (<span class=\"click\" (click)=\"abaAtual='contato'\">clique aqui</span> para\r\n          abri-la agora)\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Gostaria de sugerir uma melhoria, crítica, ou relizar um elogio?\">\r\n          Utilize o formulário na outra aba (<span class=\"click\" (click)=\"abaAtual='contato'\">clique aqui</span> para\r\n          abri-la agora)\r\n        </p-accordionTab>\r\n      </p-accordion>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'contato'\">\r\n    <form class=\"container text-align\" [formGroup]=\"formGroup\" (ngSubmit)=\"$event.preventDefault()\">\r\n      <p-panel header=\"Contato\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">Email</div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <input type=\"text\" pInputText placeholder=\"exemplo@dominio.com\" formControlName=\"email\" type=\"text\">\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Insira um email válido\"\r\n                *ngIf=\"!formGroup.controls['email'].valid&&formGroup.controls['email'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n              Motivo\r\n            </div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <p-dropdown [options]=\"motivos\" formControlName=\"motivo\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Selecione um motivo\"\r\n                *ngIf=\"!formGroup.controls['motivo'].valid&&formGroup.controls['motivo'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n              Descrição\r\n            </div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <textarea [rows]=\"10\" [cols]=\"30\" autoResize=\"true\" pInputTextarea type=\"text\"\r\n                formControlName=\"descricao\"></textarea>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Forneça mais detalhes\"\r\n                *ngIf=\"!formGroup.controls['descricao'].valid&&formGroup.controls['descricao'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\"></div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <button class=\"ui-button-secondary\" pButton type=\"submit\" label=\"Enviar\" [disabled]=\"!formGroup.valid\"\r\n                (click)=\"enviar()\"></button>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\"></div>\r\n          </div>\r\n\r\n        </div>\r\n      </p-panel>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'notes'\">\r\n\r\n    <div class=\"notes\">\r\n\r\n      <h1>Release: 1.1.0 (Current)</h1>\r\n\r\n      <h2>Novas Features:</h2>\r\n      <ul>\r\n        <li>O Hall chegou! O \"explorar\" e nova página inicial do RMF, nele você pode explorar, pesquisar e encontrar\r\n          conteúdos criados por\r\n          outros jogadores (contanto que o conteúdo seja público). Todos os conteúdos criados são por padrão privados,\r\n          para tornar um conteúdo público, atualize-o no gerenciamento de criações.\r\n          Também, não é necessário estar logado, ou possuir conta no R.M.F para acessar o Hall e conhecer o seu\r\n          conteúdo;\r\n        </li>\r\n        <li>No Hall, você também encontra uma opção para criar uma cópia de um conteúdo, ou seja, se você gostou de um\r\n          NPC, e gostaria de adapta-lo para o seu universo, você pode criar uma cópia dele para você;\r\n        </li>\r\n        <li>Ainda no Hall, você consegue encontrar uma opção de suporte para informações adicionais e contato, bem como\r\n          o link para o nosso Instagram, onde postamos muitos conteúdos, e em breve teremos sorteios. E o link para o\r\n          nosso canal no YouTube, onde pode ser encontrado vários tutoriais em vídeo (dã) sobre o R.M.F</li>\r\n\r\n        <li>Funcionalidade de ver detalhes dos itens no inventário, visualizando todas as informações do mesmo;</li>\r\n        <li>Na view do gerenciamento da mesa (para mestre/administrador) agora há um botão que pode ser usado para criar\r\n          instantaneamente um NPC com a ficha modelo usada na mesa em questão, não sendo mais necessário pesquisa-la\r\n          antes de criar o NPC via gerenciamento de criações</li>\r\n      </ul>\r\n\r\n      <h2>Melhorias:</h2>\r\n      <ul>\r\n        <li>A escuridão chegou! Toda a aplicação foi recolorida para ser escura, preservando assim a vista dos usuários;\r\n        </li>\r\n        <li>Melhoria de navegação e interação campos de inserção (exemplo, agora no momento de inserir uma recompensa,\r\n          basta pressionar o 'ENTER' para que ela seja inserida, sem a necessidade de clicar no botão 'ADICIONAR');</li>\r\n        <li>Reformulação na view do Inventário, além da possibilidade de ver os detalhes dos itens, foi melhorado a\r\n          forma de adicionar itens ao inventário de uma ficha;</li>\r\n        <li>Foi acrescentado na view do gerenciamento da mesa (para mestre/administrador), uma aba adicional que informa\r\n          os detalhes sobre aquela mesa, como nome do RPG, ficha modelo sendo utilizada nela e etc;</li>\r\n        <li>Reformulação e melhoria na view da mesa (para jogador), onde agora é encontrado melhores detalhes sobre o\r\n          RPG jogado, bem como melhoria no controle de ficha, e no controle dos capitulos e missões jogados;</li>\r\n        <li>A criação de RPGs também foi melhorada, sendo possível agora também \"voltar\" nas opções na hora de adicionar\r\n          conteúdos;\r\n          <br> OBS: Não é possível voltar na etapa de informações básicas, apenas os conteúdos adicionados.\r\n        </li>\r\n        <li>Melhorias gerais na interface</li>\r\n      </ul>\r\n\r\n      <h2>Correções:</h2>\r\n      <ul>\r\n        <li>Foi consetado o bug que acontecia ao acessa o inventário de um NPC a partir de uma mesa;\r\n        </li>\r\n        <li>Houveram outros bugs corrigidos;</li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"notes\">\r\n\r\n      <h1>Release: 1.0.3 (01/02/2021)</h1>\r\n\r\n      <h2>Melhorias:</h2>\r\n      <ul>\r\n        <li>Melhoria de UI, na responsividade e tamanho da logo na tela de Login (versão mobile);</li>\r\n        <li>Melhoria de UI, na responsividade na tela de Perfil (versão mobile);</li>\r\n        <li>Melhoria de UI, na responsividade dos objetos e botões no controle de mesa (versão mobile);</li>\r\n      </ul>\r\n\r\n      <h2>Correções:</h2>\r\n      <ul>\r\n        <li>Corrigido bug em que não se consegue obter os jogadores presentes na mesa no controle de mesa;\r\n        </li>\r\n        <li>Corrigido bug de carregamento ao selecionar facção/npc ALIADO, NEUTRO, HOSTIL no controle de mesa;</li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"notes\">\r\n\r\n      <h1>Release: 1.0.2 (31/01/2021)</h1>\r\n      <h2>Novas Features:</h2>\r\n      <ul>\r\n        <li>Página de ajuda disponível na Home e na gerência de criações;</li>\r\n      </ul>\r\n\r\n      <h2>Melhorias:</h2>\r\n      <ul>\r\n        <li>Os objetos disponíveis nas criações foram reorganizadas para facilitar o entendimento e fluxo de criação;\r\n        </li>\r\n        <li>Botão de redirecionamento rápido para criações, agora disponível no controle de mesa</li>\r\n        <li>Melhoria de UI, trazendo além de ícones, nomes para explicitar melhor cada conteúdo</li>\r\n        <li>Melhoria de UI, mudança de ícones para facilitar entendimento</li>\r\n        <li>Melhoria de UI no controle e gerenciamento de criações (versão para WEB);</li>\r\n        <li>Melhoria de UI trazendo wallpapers de fundo para deixar o APP mais vivo e bonito;</li>\r\n      </ul>\r\n\r\n      <h2>Correções:</h2>\r\n      <ul>\r\n        <li>Corrigido bug em que ao dar refresh na página da administração da mesa, era-se redirecionado para o perfil;\r\n        </li>\r\n        <li>Corrigido bug em que não aparecia toda a descrição das facções acessadas pelo controle de mesa;</li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"notes\">\r\n\r\n      <h1>Release: 1.0.1 (30/01/2021)</h1>\r\n      <h2>Novas Features:</h2>\r\n      <ul>\r\n        <li>Recuperação de conta;</li>\r\n        <li>Conteúdos criados agora são privados por padrão, porém, podem ser tornados públicos (acessíveis a todos);\r\n        </li>\r\n        <li>Possibilidade de atualizar os conteúdos criados (mapas, NPCs, facções e etc);</li>\r\n        <li>Possibilidade de adicionar conteúdos em mesas a partir da listagem, ao invés de precisar copiar-colar o\r\n          código do item;</li>\r\n        <li>Possibilidade de ter/atualizar a imagem de perfil;</li>\r\n        <li>Release Notes interno no próprio aplicativo</li>\r\n      </ul>\r\n\r\n      <h2>Melhorias:</h2>\r\n      <ul>\r\n        <li>Adicionado \"Imagem Display\", que permite a visualização das imagens que estão sendo inseridas, bem como a\r\n          possibilidade de abri-la em fullscreen;</li>\r\n        <li>Melhoria e optimização de UI nos formulários de criação de conteúdo, tornando mais fáceis e intuitivos ao\r\n          uso;\r\n        </li>\r\n        <li>Melhoria e optimização de UI nos controles e atualizações de mesa;</li>\r\n        <li>Melhoria de responsividade e versão mobile;</li>\r\n        <li>Melhoria de UI no controle e gerenciamento de criações (versão para WEB);</li>\r\n      </ul>\r\n\r\n      <h2>Correções:</h2>\r\n      <ul>\r\n        <li>Corrigido falha na paginação de conteúdos listados no controle da mesa, onde o mesmo não mudava de página;\r\n        </li>\r\n        <li>Corrigido imagens quebradas, ou que não carregavam no controle de mesa;\r\n        </li>\r\n        <li>Corrigido atualização de NPC no controle de mesa, onde o mesmo não atualizava de fato a ficha;</li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  <br><br>\r\n</ion-content>\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/services/notify/notify.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notify/notify.service.ts ***!
  \***************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var NotifyService = /** @class */ (function () {
    function NotifyService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    NotifyService.prototype.requireInvitation = function (idJogador, idMestre, mestreEmail, idMesa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idJogador', idJogador)
            .set('idMestre', idMestre)
            .set('mestreEmail', mestreEmail)
            .set('idMesa', idMesa);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "notify/invitation", {
            params: params,
            observe: 'body',
        });
    };
    NotifyService.prototype.contact = function (dto) {
        console.log(dto);
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "notify/contatoJogador", dto, {
            responseType: 'json',
            observe: 'body'
        });
    };
    NotifyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/suporte/suporte-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/suporte/suporte-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SuportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageRoutingModule", function() { return SuportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suporte.page */ "./src/app/suporte/suporte.page.ts");




var routes = [
    {
        path: '',
        component: _suporte_page__WEBPACK_IMPORTED_MODULE_3__["SuportePage"]
    }
];
var SuportePageRoutingModule = /** @class */ (function () {
    function SuportePageRoutingModule() {
    }
    SuportePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SuportePageRoutingModule);
    return SuportePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/suporte/suporte.module.ts":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.module.ts ***!
  \*******************************************/
/*! exports provided: SuportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageModule", function() { return SuportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm5/primeng-accordion.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm5/primeng-inputtextarea.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm5/primeng-tabview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm5/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm5/primeng-message.js");
/* harmony import */ var _suporte_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./suporte-routing.module */ "./src/app/suporte/suporte-routing.module.ts");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./suporte.page */ "./src/app/suporte/suporte.page.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm5/primeng-inputtext.js");




















var SuportePageModule = /** @class */ (function () {
    function SuportePageModule() {
    }
    SuportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _suporte_routing_module__WEBPACK_IMPORTED_MODULE_15__["SuportePageRoutingModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_11__["TabViewModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_14__["MessageModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_17__["LoadSpinnerModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_18__["FooterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
            declarations: [_suporte_page__WEBPACK_IMPORTED_MODULE_16__["SuportePage"]]
        })
    ], SuportePageModule);
    return SuportePageModule;
}());



/***/ }),

/***/ "./src/app/suporte/suporte.page.scss":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 20px;\n  max-width: 90%;\n}\n\n.click:hover {\n  cursor: pointer;\n  color: #171d74;\n}\n\n.faq {\n  font-size: 1.7rem;\n  margin: 15px 30px;\n  color: white;\n}\n\n.notes {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 25px;\n  margin-right: 70px;\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background-color: #ebebeb;\n}\n\n.notes * {\n  margin-left: 15px;\n}\n\n.notes h1,\nh2 {\n  -webkit-box-flex: 0;\n          flex: 0 1 100%;\n  font-family: muli, verdana, arial, helvetica, geneva, sans-serif;\n  color: #003f87;\n}\n\n.notes li {\n  margin: 0 0 5px 0;\n}\n\n@media only screen and (max-width: 1000px) {\n  .notes {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n\n::ng-deep .ui-accordion-content-wrapper {\n  background-color: #2b2b2b !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header a {\n  background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361) !important;\n  color: white !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover a {\n  background-color: #2b2b2b !important;\n  color: white !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active:hover a {\n  border: 1px solid #2b2b2b !important;\n  background-color: #2b2b2b !important;\n  color: #ffffff !important;\n}\n\n::ng-deep .ui-accordion-content {\n  background: #575757 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-accordion-header {\n  background-color: #2b2b2b !important;\n}\n\n::ng-deep .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a {\n  background-color: #2b2b2b !important;\n  color: white !important;\n}\n\n::ng-deep .ui-dataview {\n  color: white !important;\n}\n\n::ng-deep .ui-dataview-header {\n  background-color: black !important;\n}\n\n::ng-deep .ui-dataview-content {\n  background-color: black !important;\n}\n\n::ng-deep .ui-inputtext {\n  background-color: black !important;\n  color: white !important;\n  text-align: start !important;\n  margin: auto;\n}\n\n::ng-deep .ui-panel-content {\n  background: linear-gradient(60deg, #533c24, #6d362c, #66303e, #5d4361) !important;\n  color: white !important;\n}\n\n::ng-deep .ui-panel .ui-panel-titlebar {\n  background: linear-gradient(60deg, #44311d, #41201a, #3f1d26, #38283a) !important;\n  color: white !important;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 580px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n::ng-deep .ui-inputtext {\n  background-color: black !important;\n  color: white !important;\n  text-align: start;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vwb3J0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcc3Vwb3J0ZVxcc3Vwb3J0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cG9ydGUvc3Vwb3J0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTs7RUFFRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxnRUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0Usb0NBQUE7QUNBRjs7QURHQTtFQUNFLGlGQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0Usb0NBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGlGQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGlGQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLDJDQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3N1cG9ydGUvc3Vwb3J0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5jbGljazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiByZ2IoMjMsIDI5LCAxMTYpO1xyXG59XHJcblxyXG4uZmFxIHtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBtYXJnaW46IDE1cHggMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ub3RlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuLm5vdGVzICoge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubm90ZXMgaDEsXHJcbmgyIHtcclxuICBmbGV4OiAwIDEgMTAwJTtcclxuICBmb250LWZhbWlseTogbXVsaSwgdmVyZGFuYSwgYXJpYWwsIGhlbHZldGljYSwgZ2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMDAzZjg3O1xyXG59XHJcblxyXG4ubm90ZXMgbGkge1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5ub3RlcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyIGEge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzUzM2MyNCwgIzZkMzYyYywgIzY2MzAzZSwgIzVkNDM2MSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXI6bm90KC51aS1zdGF0ZS1hY3RpdmUpOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDMsIDQzKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWhlYWRlcjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmU6aG92ZXIgYSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1hY2NvcmRpb24tY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDg3LCA4NywgODcpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0MykgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktZGF0YXZpZXctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhbmVsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzUzM2MyNCwgIzZkMzYyYywgIzY2MzAzZSwgIzVkNDM2MSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1wYW5lbCAudWktcGFuZWwtdGl0bGViYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzQ0MzExZCwgIzQxMjAxYSwgIzNmMWQyNiwgIzM4MjgzYSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIG1hcmdpbjogYXV0bztcclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uY2xpY2s6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMTcxZDc0O1xufVxuXG4uZmFxIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIG1hcmdpbjogMTVweCAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub3RlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4ubm90ZXMgKiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubm90ZXMgaDEsXG5oMiB7XG4gIGZsZXg6IDAgMSAxMDAlO1xuICBmb250LWZhbWlseTogbXVsaSwgdmVyZGFuYSwgYXJpYWwsIGhlbHZldGljYSwgZ2VuZXZhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwM2Y4Nztcbn1cblxuLm5vdGVzIGxpIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5ub3RlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLnVpLWFjY29yZGlvbi1jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyIGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM1MzNjMjQsICM2ZDM2MmMsICM2NjMwM2UsICM1ZDQzNjEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWhlYWRlcjpub3QoLnVpLXN0YXRlLWFjdGl2ZSk6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZTpob3ZlciBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJiMmIyYiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjNTc1NzU3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLWFjY29yZGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktZGF0YXZpZXctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuOjpuZy1kZWVwIC51aS1wYW5lbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNTMzYzI0LCAjNmQzNjJjLCAjNjYzMDNlLCAjNWQ0MzYxKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYW5lbCAudWktcGFuZWwtdGl0bGViYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM0NDMxMWQsICM0MTIwMWEsICMzZjFkMjYsICMzODI4M2EpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDU4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbjo6bmctZGVlcCAudWktaW5wdXR0ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/suporte/suporte.page.ts":
/*!*****************************************!*\
  !*** ./src/app/suporte/suporte.page.ts ***!
  \*****************************************/
/*! exports provided: SuportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePage", function() { return SuportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notify/notify.service */ "./src/app/services/notify/notify.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");






var SuportePage = /** @class */ (function () {
    function SuportePage(toast, formBuilder, notify, storage, auth) {
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.notify = notify;
        this.storage = storage;
        this.auth = auth;
        this.abaAtual = 'faq';
        this.loading = false;
        this.formGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            motivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
        });
        this.motivos = [];
        this.motivos.push({ label: 'Selecione', value: '' });
        this.motivos.push({ label: 'Reportar BUG ou falha', value: '0' });
        this.motivos.push({ label: 'Requerer nova funcionalidade', value: '1' });
        this.motivos.push({ label: 'Relizar um elogio', value: '2' });
        this.motivos.push({ label: 'Outros', value: '3' });
    }
    SuportePage.prototype.ngOnInit = function () {
        var localUser = this.storage.getLocalUser();
        if (localUser) {
            var email = localUser.email;
            if (email.includes('@')) {
                this.formGroup.get('email').setValue(email);
                this.formGroup.get('email').disable({ onlySelf: true });
            }
        }
    };
    SuportePage.prototype.mudaAba = function (event) {
    };
    SuportePage.prototype.enviar = function () {
        var _this = this;
        this.loading = true;
        var email = this.formGroup.get('email').value;
        var motivo = this.formGroup.get('motivo').value;
        var descricao = this.formGroup.get('descricao').value;
        console.log(motivo, descricao);
        this.notify.contact({ email: email, motivo: motivo, descricao: descricao })
            .subscribe(function (res) {
            _this.callToast('success', 'Contato enviado!', 'Agradecemos sua colaboração :D');
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    SuportePage.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    SuportePage.prototype.isLogedIn = function () {
        return this.auth.isLogedIn();
    };
    SuportePage.ctorParameters = function () { return [
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] },
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
    ]; };
    SuportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suporte',
            template: __webpack_require__(/*! raw-loader!./suporte.page.html */ "./node_modules/raw-loader/index.js!./src/app/suporte/suporte.page.html"),
            styles: [__webpack_require__(/*! ./suporte.page.scss */ "./src/app/suporte/suporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], SuportePage);
    return SuportePage;
}());



/***/ })

}]);
//# sourceMappingURL=suporte-suporte-module-es5.js.map