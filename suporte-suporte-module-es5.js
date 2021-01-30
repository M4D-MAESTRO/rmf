(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suporte-suporte-module"],{

/***/ "./node_modules/primeng/fesm5/primeng-accordion.js":
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-accordion.js ***!
  \*********************************************************/
/*! exports provided: Accordion, AccordionModule, AccordionTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTab", function() { return AccordionTab; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");





var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var idx = 0;
var AccordionTab = /** @class */ (function () {
    function AccordionTab(accordion, changeDetector) {
        this.changeDetector = changeDetector;
        this.cache = true;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = "ui-accordiontab-" + idx++;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionTab.prototype, "animating", {
        get: function () {
            return this._animating;
        },
        set: function (val) {
            this._animating = val;
            if (!this.changeDetector.destroyed) {
                this.changeDetector.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionTab.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.contentTemplate = item.template;
                    break;
            }
        });
    };
    AccordionTab.prototype.toggle = function (event) {
        if (this.disabled || this.animating) {
            return false;
        }
        this.animating = true;
        var index = this.findTabIndex();
        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                }
            }
            this.selected = true;
            this.loaded = true;
            this.accordion.onOpen.emit({ originalEvent: event, index: index });
        }
        this.selectedChange.emit(this.selected);
        event.preventDefault();
    };
    AccordionTab.prototype.findTabIndex = function () {
        var index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    };
    Object.defineProperty(AccordionTab.prototype, "hasHeaderFacet", {
        get: function () {
            return this.headerFacet && this.headerFacet.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AccordionTab.prototype.onToggleDone = function (event) {
        this.animating = false;
    };
    AccordionTab.prototype.onKeydown = function (event) {
        if (event.which === 32 || event.which === 13) {
            this.toggle(event);
            event.preventDefault();
        }
    };
    AccordionTab.prototype.ngOnDestroy = function () {
        this.accordion.tabs.splice(this.findTabIndex(), 1);
    };
    AccordionTab.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Accordion; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], AccordionTab.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], AccordionTab.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], AccordionTab.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], AccordionTab.prototype, "cache", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], AccordionTab.prototype, "selectedChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], AccordionTab.prototype, "transitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"])
    ], AccordionTab.prototype, "headerFacet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"])
    ], AccordionTab.prototype, "templates", void 0);
    AccordionTab = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-accordionTab',
            template: "\n        <div class=\"ui-accordion-header ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-active': selected,'ui-state-disabled':disabled}\">\n            <a [attr.tabindex]=\"disabled ? -1 : 0\" [attr.id]=\"id\" [attr.aria-controls]=\"id + '-content'\" role=\"tab\" [attr.aria-expanded]=\"selected\" (click)=\"toggle($event)\" \n                (keydown)=\"onKeydown($event)\">\n                <span class=\"ui-accordion-toggle-icon\" [ngClass]=\"selected ? accordion.collapseIcon : accordion.expandIcon\"></span>\n                <span class=\"ui-accordion-header-text\" *ngIf=\"!hasHeaderFacet\">\n                    {{header}}\n                </span>\n                <ng-content select=\"p-header\" *ngIf=\"hasHeaderFacet\"></ng-content>\n            </a>\n        </div>\n        <div [attr.id]=\"id + '-content'\" class=\"ui-accordion-content-wrapper\" [@tabContent]=\"selected ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\" (@tabContent.done)=\"onToggleDone($event)\"\n            [ngClass]=\"{'ui-accordion-content-wrapper-overflown': !selected||animating}\" \n            role=\"region\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id\">\n            <div class=\"ui-accordion-content ui-widget-content\">\n                <ng-content></ng-content>\n                <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </ng-container>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('tabContent', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '{{height}}'
                    }), { params: { height: '0' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Accordion; })))
    ], AccordionTab);
    return AccordionTab;
}());
var Accordion = /** @class */ (function () {
    function Accordion(el, changeDetector) {
        this.el = el;
        this.changeDetector = changeDetector;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expandIcon = 'pi pi-fw pi-chevron-right';
        this.collapseIcon = 'pi pi-fw pi-chevron-down';
        this.tabs = [];
    }
    Accordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabListSubscription = this.tabList.changes.subscribe(function (_) {
            _this.initTabs();
            _this.changeDetector.markForCheck();
        });
    };
    Accordion.prototype.initTabs = function () {
        this.tabs = this.tabList.toArray();
        this.updateSelectionState();
    };
    Accordion.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Object.defineProperty(Accordion.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            this._activeIndex = val;
            this.updateSelectionState();
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.updateSelectionState = function () {
        if (this.tabs && this.tabs.length && this._activeIndex != null) {
            for (var i = 0; i < this.tabs.length; i++) {
                var selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                var changed = selected !== this.tabs[i].selected;
                if (changed) {
                    this.tabs[i].animating = true;
                    this.tabs[i].selected = selected;
                    this.tabs[i].selectedChange.emit(selected);
                }
            }
        }
    };
    Accordion.prototype.ngOnDestroy = function () {
        if (this.tabListSubscription) {
            this.tabListSubscription.unsubscribe();
        }
    };
    Accordion.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Accordion.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Accordion.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Accordion.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Accordion.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Accordion.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Accordion.prototype, "expandIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Accordion.prototype, "collapseIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(AccordionTab)
    ], Accordion.prototype, "tabList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Accordion.prototype, "activeIndex", null);
    Accordion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-accordion',
            template: "\n        <div [ngClass]=\"'ui-accordion ui-widget ui-helper-reset'\" [ngStyle]=\"style\" [class]=\"styleClass\" role=\"tablist\">\n            <ng-content></ng-content>\n        </div>\n    "
        })
    ], Accordion);
    return Accordion;
}());
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [Accordion, AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [Accordion, AccordionTab]
        })
    ], AccordionModule);
    return AccordionModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-accordion.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/suporte/suporte.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suporte/suporte.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Suporte & Ajuda\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button value=\"faq\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-question\"></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"contato\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-comment\"></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"notes\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-tablet\"></ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <br>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'faq'\">\r\n    <span class=\"faq\">FAQ</span>\r\n    <div class=\"container\">\r\n\r\n      <p-accordion>\r\n        <p-accordionTab header=\"Antes de tudo, quanto custa?\">\r\n          Nada, a aplicação é de uso <strong>gratuito</strong>\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê é o RMF?\">\r\n          RMF significa: \"RPG Manager Factory\", traduzindo, Fábrica de gerenciamento de RPG.<br>\r\n          A aplicação é justamente isto, um ambiente que te permite criar, gerênciar e conduzir RPG's\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Vocês vão roubar meus dados e escravizar minha família?\">\r\n          Definitavamente não, até porque o único dado que temos e que pretendemos ter seu, é seu e-mail.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Onde o RMF está disponível?\">\r\n          Dispositivos mobile, <strong>Android e IOS</strong>. <br>\r\n          WEB, através de navegadores como o <strong>Chorme e o Firefox</strong>.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê o RMF é, ou faz?\">\r\n          O principal objetivo do RMF é ajudar na organização de mesas de RPG e seu conteúdo.<br>\r\n          Pode ser uma tarefa muito árdua gerenciar mesas de RPG, ainda mais com número alto de jogadores e\r\n          conteúdos.<br>\r\n          Por isso, com o RMF, você centraliza os mais diversos tipos de conteúdos para um RPG, como, criação de NPCs,\r\n          Facções, Modelo de fichas, Missões, Capítulos, dentre outros conteúdos típicos do RPG.<br>\r\n          Além de criar, você pode gerenciar seus conteúdos criados, podendo reutiliza-los em outros RPGs, inclusive,\r\n          pode\r\n          usar conteúdos criados por outros jogadores.<br>\r\n          Você também pode gerenciar mesas de RPG, colocando jogadores, mestrando, alterando conteúdo e gerenciando as\r\n          fichas ali presente.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê eu posso criar?\">\r\n          Mapas, NPCs, Equipamentos e armas, Modelos de Fichas, Missões, Capítulos, Facções, um próprio e personalizado\r\n          sistema de RPG.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Como mestre de uma mesa, o quê eu posso fazer?\">\r\n          Como mestre, você pode adicionar jogadores e gerenciar suas respectivas fichas, inclusive dando opção ao\r\n          jogador\r\n          de poder edita-la, ou não.<br>\r\n          Também pode adicionar, remover e editar quaisquer outros conteúdos de criações.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Como jogador de uma mesa, o quê eu posso fazer?\">\r\n          Verificar as informações básicas do RPG jogado, como: nome, descrição e história.\r\n          Verificar as missões em andamento e concluídas.<br>\r\n          Gerenciar sua ficha e edita-la, SE, o mestre tiver dado permissão.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Qual sistema de RPG o aplicativo suporta?\">\r\n          Todos! Contanto que eles seja/esteja criado.<br>\r\n          Você também pode inclusive criar o seu próprio sistema de RPG.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Há limites de conteúdos que eu posso criar?\">\r\n          O único limite é a sua criatividade.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Há limites de mesas que posso mestrar/jogar?\">\r\n          Sim! O limite é de 5 mesas, tanto como jogador, quanto como mestre\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"O quê o RMF NÃO é, ou NÃO faz?\">\r\n          O RMF não é uma central de comunicação, o objetivo da aplicação é bem claro, <strong>CRIAR e\r\n            GERENCIAR</strong>.<br>\r\n          Eu recomendo o uso do Discord, caso os jogadores estejam longe.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Poderei me comunicar pelo RMF?\">\r\n          Não, é não há intúito de funcionalidades do tipo.<br> Recomendo o uso do Discord para mesas não presenciais.\r\n          Utilize o RMF como sua central de criação e gerenciamento.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Encontrei um erro, bug ou falha, o quê fazer?\">\r\n          Utilize o formulário na outra aba (<span class=\"click\" (click)=\"abaAtual='contato'\">clique aqui</span> para\r\n          abri-la agora)\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Gostaria de sugerir uma melhoria, ou relizar um elogio?\">\r\n          Utilize o formulário na outra aba (<span class=\"click\" (click)=\"abaAtual='contato'\">clique aqui</span> para\r\n          abri-la agora)\r\n        </p-accordionTab>\r\n      </p-accordion>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'contato'\">\r\n    <form class=\"container\" [formGroup]=\"formGroup\" (ngSubmit)=\"$event.preventDefault()\">\r\n      <p-panel header=\"Contato\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n              Motivo\r\n            </div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <p-dropdown [options]=\"motivos\" formControlName=\"motivo\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Selecione um motivo\"\r\n                *ngIf=\"!formGroup.controls['motivo'].valid&&formGroup.controls['motivo'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\">\r\n              Descrição\r\n            </div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <textarea [rows]=\"10\" [cols]=\"30\" autoResize=\"true\" pInputTextarea type=\"text\"\r\n                formControlName=\"descricao\"></textarea>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\">\r\n              <p-message severity=\"error\" text=\"Forneça mais detalhes\"\r\n                *ngIf=\"!formGroup.controls['descricao'].valid&&formGroup.controls['descricao'].dirty\"></p-message>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-2\"></div>\r\n            <div class=\"ui-grid-col-6\">\r\n              <button pButton type=\"submit\" label=\"Enviar\" [disabled]=\"!formGroup.valid\" (click)=\"enviar()\"></button>\r\n            </div>\r\n            <div class=\"ui-grid-col-4\"></div>\r\n          </div>\r\n\r\n        </div>\r\n      </p-panel>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'notes'\">\r\n    <div class=\"notes\">\r\n\r\n      <h1>Release: 1.0.1 (Current)</h1>\r\n      <h2>Novas Features:</h2>\r\n      <ul>\r\n        <li>Recuperação de conta;</li>\r\n        <li>Conteúdos criados agora são privados por padrão, porém, podem ser tornados públicos (acessíveis a todos);\r\n        </li>\r\n        <li>Possibilidade de atualizar os conteúdos criados (mapas, NPCs, facções e etc);</li>\r\n        <li>Possibilidade de adicionar conteúdos em mesas a partir da listagem, ao invés de precisar copiar-colar o\r\n          código do item;</li>\r\n        <li>Possibilidade de ter/atualizar a imagem de perfil;</li>\r\n        <li>Release Notes interno no próprio aplicativo</li>\r\n      </ul>\r\n\r\n      <h2>Melhorias:</h2>\r\n      <ul>\r\n        <li>Adicionado \"Imagem Display\", que permite a visualização das imagens que estão sendo inseridas, bem como a\r\n          possibilidade de abri-la em fullscreen;</li>\r\n        <li>Melhoria e optimização de UI nos formulários de criação de conteúdo, tornando mais fáceis e intuitivos ao\r\n          uso;\r\n        </li>\r\n        <li>Melhoria e optimização de UI nos controles e atualizações de mesa;</li>\r\n        <li>Melhoria de responsividade e versão mobile;</li>\r\n        <li>Melhoria de UI no controle e gerenciamento de criações (versão para WEB);</li>\r\n      </ul>\r\n\r\n      <h2>Correções:</h2>\r\n      <ul>\r\n        <li>Corrijido falha na paginação de conteúdos listados no controle da mesa, onde o mesmo não mudava de página;\r\n        </li>\r\n        <li>Corrijido imagens quebradas, ou que não carregavam no controle de mesa;\r\n        </li>\r\n        <li>Corrijido atualização de NPC no controle de mesa, onde o mesmo não atualizava de fato a ficha;</li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  <br><br>\r\n</ion-content>\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n<app-footer></app-footer>"

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
        dto.email = this.storage.getLocalUser().email;
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
/* harmony import */ var _suporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suporte-routing.module */ "./src/app/suporte/suporte-routing.module.ts");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suporte.page */ "./src/app/suporte/suporte.page.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm5/primeng-accordion.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm5/primeng-inputtextarea.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm5/primeng-tabview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm5/primeng-panel.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm5/primeng-message.js");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");


















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
                _suporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuportePageRoutingModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_16__["LoadSpinnerModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_17__["FooterModule"]
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
            declarations: [_suporte_page__WEBPACK_IMPORTED_MODULE_6__["SuportePage"]]
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

module.exports = ".container {\n  margin: 20px;\n  max-width: 90%;\n}\n\n.click:hover {\n  cursor: pointer;\n  color: #171d74;\n}\n\n.faq {\n  font-size: 1.7rem;\n  margin: 15px 30px;\n}\n\n.notes {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 25px;\n  margin-right: 70px;\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background-color: #ebebeb;\n}\n\n.notes * {\n  margin-left: 15px;\n}\n\n.notes h1,\nh2 {\n  -webkit-box-flex: 0;\n          flex: 0 1 100%;\n  font-family: muli, verdana, arial, helvetica, geneva, sans-serif;\n  color: #003f87;\n}\n\n.notes li {\n  margin: 0 0 5px 0;\n}\n\n@media only screen and (max-width: 1000px) {\n  .notes {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vwb3J0ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcc3Vwb3J0ZVxcc3Vwb3J0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cG9ydGUvc3Vwb3J0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBOztFQUVFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGdFQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdXBvcnRlL3N1cG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY2xpY2s6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmdiKDIzLCAyOSwgMTE2KTtcclxufVxyXG5cclxuLmZhcSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgbWFyZ2luOiAxNXB4IDMwcHg7XHJcbn1cclxuXHJcbi5ub3RlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuLm5vdGVzICoge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubm90ZXMgaDEsXHJcbmgyIHtcclxuICBmbGV4OiAwIDEgMTAwJTtcclxuICBmb250LWZhbWlseTogbXVsaSwgdmVyZGFuYSwgYXJpYWwsIGhlbHZldGljYSwgZ2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMDAzZjg3O1xyXG59XHJcblxyXG4ubm90ZXMgbGkge1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5ub3RlcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5jbGljazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxNzFkNzQ7XG59XG5cbi5mYXEge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luOiAxNXB4IDMwcHg7XG59XG5cbi5ub3RlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4ubm90ZXMgKiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubm90ZXMgaDEsXG5oMiB7XG4gIGZsZXg6IDAgMSAxMDAlO1xuICBmb250LWZhbWlseTogbXVsaSwgdmVyZGFuYSwgYXJpYWwsIGhlbHZldGljYSwgZ2VuZXZhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwM2Y4Nztcbn1cblxuLm5vdGVzIGxpIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5ub3RlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59Il19 */"

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





var SuportePage = /** @class */ (function () {
    function SuportePage(toast, formBuilder, notify) {
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.notify = notify;
        this.abaAtual = 'faq';
        this.loading = false;
        this.formGroup = this.formBuilder.group({
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
    };
    SuportePage.prototype.mudaAba = function (event) {
    };
    SuportePage.prototype.enviar = function () {
        var _this = this;
        this.loading = true;
        var motivo = this.formGroup.get('motivo').value;
        var descricao = this.formGroup.get('descricao').value;
        console.log(motivo, descricao);
        this.notify.contact({ motivo: motivo, descricao: descricao })
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
    SuportePage.ctorParameters = function () { return [
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] }
    ]; };
    SuportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suporte',
            template: __webpack_require__(/*! raw-loader!./suporte.page.html */ "./node_modules/raw-loader/index.js!./src/app/suporte/suporte.page.html"),
            styles: [__webpack_require__(/*! ./suporte.page.scss */ "./src/app/suporte/suporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], SuportePage);
    return SuportePage;
}());



/***/ })

}]);
//# sourceMappingURL=suporte-suporte-module-es5.js.map