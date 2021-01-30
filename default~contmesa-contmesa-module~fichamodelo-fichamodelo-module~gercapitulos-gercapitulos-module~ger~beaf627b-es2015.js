(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~fichamodelo-fichamodelo-module~gercapitulos-gercapitulos-module~ger~beaf627b"],{

/***/ "./node_modules/primeng/fesm2015/primeng-panel.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-panel.js ***!
  \********************************************************/
/*! exports provided: Panel, PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let idx = 0;
let Panel = class Panel {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `ui-panel-${idx++}`;
    }
    onHeaderClick(event) {
        if (this.toggler === 'header') {
            this.toggle(event);
        }
    }
    onIconClick(event) {
        if (this.toggler === 'icon') {
            this.toggle(event);
        }
    }
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        event.preventDefault();
    }
    expand(event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    }
    collapse(event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone(event) {
        this.animating = false;
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    }
};
Panel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "toggleable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "header", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "collapsed", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "expandIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "collapseIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "showHeader", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "toggler", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Panel.prototype, "collapsedChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Panel.prototype, "onBeforeToggle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Panel.prototype, "onAfterToggle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Panel.prototype, "transitionOptions", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"], { static: true })
], Panel.prototype, "footerFacet", void 0);
Panel = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-panel',
        template: `
        <div [attr.id]="id" [ngClass]="'ui-panel ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <div [ngClass]="{'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all': true, 'ui-panel-titlebar-clickable': (toggleable && toggler === 'header')}" 
                *ngIf="showHeader" (click)="onHeaderClick($event)">
                <span class="ui-panel-title" *ngIf="header" [attr.id]="id + '_header'">{{header}}</span>
                <ng-content select="p-header"></ng-content>
                <a *ngIf="toggleable" [attr.id]="id + '-label'" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" tabindex="0"
                    (click)="onIconClick($event)" (keydown.enter)="onIconClick($event)" [attr.aria-controls]="id + '-content'" role="tab" [attr.aria-expanded]="!collapsed">
                    <span [class]="collapsed ? expandIcon : collapseIcon"></span>
                </a>
            </div>
            <div [attr.id]="id + '-content'" class="ui-panel-content-wrapper" [@panelContent]="collapsed ? {value: 'hidden', params: {transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity:'0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1'}}" (@panelContent.done)="onToggleDone($event)"
                [ngClass]="{'ui-panel-content-wrapper-overflown': collapsed||animating}"
                role="region" [attr.aria-hidden]="collapsed" [attr.aria-labelledby]="id + '-label'">
                <div class="ui-panel-content ui-widget-content">
                    <ng-content></ng-content>
                </div>
                
                <div class="ui-panel-footer ui-widget-content" *ngIf="footerFacet">
                    <ng-content select="p-footer"></ng-content>
                </div>
            </div>
        </div>
    `,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('panelContent', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    height: '0',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    height: '{{height}}',
                    opacity: '{{opacity}}'
                }), { params: { height: '0', opacity: '0' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    height: '*',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transitionParams}}'))
            ])
        ]
    })
], Panel);
let PanelModule = class PanelModule {
};
PanelModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [Panel, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        declarations: [Panel]
    })
], PanelModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-panel.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/paginacao/paginacao.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/paginacao/paginacao.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isModal\">\r\n  <ion-content>\r\n    <p-dataView #dv [value]=\"objs\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [lazy]=\"true\"\r\n      [pageLinks]=\"paginaTotal\" paginatorPosition=\"both\" filterBy=\"nome\" [sortField]=\"sortField\" [sortOrder]=\"sortOrder\"\r\n      (onLazyLoad)=\"loadData($event)\" [emptyMessage]=\"emptyMessage\">\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\">\r\n          <div class=\"ui-g\">\r\n\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n              <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\"\r\n                (onChange)=\"onSortChange($event)\" [style]=\"{'min-width':'140px'}\" [disabled]=\"true\"></p-dropdown>\r\n            </div>\r\n\r\n            <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n              <div style=\"position:relative\">\r\n                <input [disabled]=\"true\" type=\"search\" pInputText placeholder=\"Filtrar por nome\"\r\n                  (input)=\"dv.filter($event.target.value, 'contains')\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </p-header>\r\n      <ng-template let-obj pTemplate=\"listItem\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"car-details\" (click)=\"copy($event, obj)\">\r\n            <div>\r\n              <img [src]=\"obj.imgURL || defaultImg\">\r\n              <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">Código: <b>{{ obj.id }}</b></div>\r\n                <div class=\"ui-g-12\"><b>{{ obj.nome?.substring(0,20).concat('...') }}</b></div>\r\n                <div class=\"ui-g-12\"><b>{{ obj.descricao?.substring(0,20).concat('...') }}</b></div>\r\n                <div class=\"ui-g-12\"><b>{{ getTipo(obj) }}</b></div>\r\n              </div>\r\n            </div>\r\n            <button *ngIf=\"add\" style=\"min-width: 20px;\" pButton type=\"button\" icon=\"pi pi-angle-double-right\"\r\n              (click)=\"selectObj($event, obj)\"></button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-dataView>\r\n\r\n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\r\n      [style]=\"{width: '225px'}\" (onAfterHide)=\"onDialogHide()\">\r\n      <div class=\"ui-g\" *ngIf=\"selectedCar\">\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n          <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\">\r\n        </div>\r\n        <div class=\"ui-g-4\">Vin: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.vin}}</div>\r\n\r\n        <div class=\"ui-g-4\">Brand: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.brand}}</div>\r\n\r\n        <div class=\"ui-g-4\">Year: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.year}}</div>\r\n\r\n        <div class=\"ui-g-4\">Color: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.color}}</div>\r\n      </div>\r\n    </p-dialog>\r\n    <ion-button *ngIf=\"closeBTN\" class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"danger\" (click)=\"close()\">\r\n      Fechar</ion-button>\r\n  </ion-content>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!isModal\">\r\n  <p-dataView #dv [value]=\"objs\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [lazy]=\"true\"\r\n    [pageLinks]=\"paginaTotal\" paginatorPosition=\"both\" filterBy=\"nome\" [sortField]=\"sortField\" [sortOrder]=\"sortOrder\"\r\n    (onLazyLoad)=\"loadData($event)\" [emptyMessage]=\"emptyMessage\">\r\n    <p-header>\r\n      <div class=\"ui-helper-clearfix\">\r\n        <div class=\"ui-g\">\r\n\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\"\r\n              (onChange)=\"onSortChange($event)\" [style]=\"{'min-width':'140px'}\" [disabled]=\"true\"></p-dropdown>\r\n          </div>\r\n\r\n          <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n            <div style=\"position:relative\">\r\n              <input [disabled]=\"true\" type=\"search\" pInputText placeholder=\"Filtrar por nome\"\r\n                (input)=\"dv.filter($event.target.value, 'contains')\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </p-header>\r\n    <ng-template let-obj pTemplate=\"listItem\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"car-details\" (click)=\"copy($event, obj)\">\r\n          <div>\r\n            <img [src]=\"obj.imgURL || defaultImg\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12\">Código: <b>{{ obj.id }}</b></div>\r\n              <div class=\"ui-g-12\"><b>{{ obj.nome?.substring(0,20).concat('...') }}</b></div>\r\n              <div class=\"ui-g-12\"><b>{{ obj.descricao?.substring(0,20).concat('...') }}</b></div>\r\n              <div class=\"ui-g-12\"><b>{{ getTipo(obj) }}</b></div>\r\n            </div>\r\n          </div>\r\n          <button *ngIf=\"add\" style=\"min-width: 20px;\" pButton type=\"button\" icon=\"pi pi-angle-double-right\"\r\n            (click)=\"selectObj($event, obj)\"></button>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataView>\r\n  <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\r\n    [style]=\"{width: '225px'}\" (onAfterHide)=\"onDialogHide()\">\r\n    <div class=\"ui-g\" *ngIf=\"selectedCar\">\r\n      <div class=\"ui-g-12\" style=\"text-align:center\">\r\n        <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\">\r\n      </div>\r\n      <div class=\"ui-g-4\">Vin: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.vin}}</div>\r\n\r\n      <div class=\"ui-g-4\">Brand: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.brand}}</div>\r\n\r\n      <div class=\"ui-g-4\">Year: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.year}}</div>\r\n\r\n      <div class=\"ui-g-4\">Color: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.color}}</div>\r\n    </div>\r\n  </p-dialog>\r\n  <ion-button *ngIf=\"closeBTN\" class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"danger\" (click)=\"close()\">\r\n    Fechar</ion-button>\r\n</ng-container>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/utils/paginacao/paginacao.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/utils/paginacao/paginacao.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-container {\n  text-align: center;\n}\n\n.car-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n}\n\n.car-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.car-details > div img {\n  margin-right: 14px;\n}\n\n.car-detail {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n}\n\n.ui-panel-content {\n  padding: 1em;\n}\n\n.dark-theme :host ::ng-deep .car-details,\n.dark-theme :host ::ng-deep .car-detail {\n  border-bottom: 1px solid #191919;\n}\n\n@media (max-width: 900px) {\n  .car-details img {\n    width: 50px;\n    height: 120px;\n  }\n\n  .filter-container {\n    text-align: left;\n  }\n}\n\nimg {\n  width: 120px;\n  height: 120px;\n}\n\n.car-details:hover {\n  background-color: #75a1ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wYWdpbmFjYW8vQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxwYWdpbmFjYW9cXHBhZ2luYWNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wYWdpbmFjYW8vcGFnaW5hY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTs7RUFFSSxnQ0FBQTtBQ09KOztBREpBO0VBQ0k7SUFDSyxXQUFBO0lBQ0EsYUFBQTtFQ09QOztFRExFO0lBQ0ksZ0JBQUE7RUNRTjtBQUNGOztBRExBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNPSjs7QURKQTtFQUNJLHlCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL3BhZ2luYWNhby9wYWdpbmFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XHJcbn1cclxuLmNhci1kZXRhaWxzID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXItZGV0YWlscyA+IGRpdiBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG59XHJcbi5jYXItZGV0YWlsIHtcclxuICAgIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbi51aS1wYW5lbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uZGFyay10aGVtZSA6aG9zdCA6Om5nLWRlZXAgLmNhci1kZXRhaWxzLFxyXG4uZGFyay10aGVtZSA6aG9zdCA6Om5nLWRlZXAgLmNhci1kZXRhaWwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxOTE5MTk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNhci1kZXRhaWxzIGltZyB7XHJcbiAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5jYXItZGV0YWlsczpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NWExZmY7XHJcbn0iLCIuZmlsdGVyLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhci1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xufVxuXG4uY2FyLWRldGFpbHMgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyLWRldGFpbHMgPiBkaXYgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4uY2FyLWRldGFpbCB7XG4gIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLnVpLXBhbmVsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5kYXJrLXRoZW1lIDpob3N0IDo6bmctZGVlcCAuY2FyLWRldGFpbHMsXG4uZGFyay10aGVtZSA6aG9zdCA6Om5nLWRlZXAgLmNhci1kZXRhaWwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE5MTkxOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jYXItZGV0YWlscyBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cblxuICAuZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uY2FyLWRldGFpbHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhMWZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/utils/paginacao/paginacao.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/utils/paginacao/paginacao.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaginacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginacaoComponent", function() { return PaginacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let PaginacaoComponent = class PaginacaoComponent {
    constructor(service, toast, modalController) {
        this.service = service;
        this.toast = toast;
        this.modalController = modalController;
        this.objs = [];
        this.add = false;
        this.paginaAtual = 0;
        this.totalRecords = 0;
        this.idJson = '';
        this.nomeJson = '';
        this.descricaoJson = '';
        this.tipoJson = '';
        this.imgURLJson = '';
        this.closeBTN = false;
        this.isModal = false;
        this.defaultImg = "assets/imgs/dice.png";
        this.loading = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getSelectedObj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.service.getConfiguration().use) {
            const aux = this.service.getConfiguration();
            this.objs = aux.objs;
            this.emptyMessage = aux.emptyMessage;
            this.add = aux.add;
            this.paginaAtual = aux.paginaAtual;
            this.idJson = aux.idJson;
            this.nomeJson = aux.nomeJson;
            this.descricaoJson = aux.descricaoJson;
            this.tipoJson = aux.tipoJson;
            this.imgURLJson = aux.imgURLJson;
            this.closeBTN = aux.closeBTN;
            this.isModal = aux.isModal;
        }
    }
    sendNotification() {
        this.notifyParent.emit(this.paginaAtual.toString());
    }
    selectObj(event, obj) {
        /* this.selectedObj = obj;
         this.displayDialog = true;
         event.preventDefault();*/
        this.objToModal = obj;
        this.getSelectedObj.emit(obj);
        const flag = this.service.getInternalLoad();
        if (flag === true) {
            this.close();
        }
    }
    ngOnInit() {
        this.subscription = this.service.getRefresh().subscribe(message => {
            if (message === true) {
                //console.log(message)
                this.consultar();
            }
        });
        this.consultar();
    }
    consultar() {
        this.loading = true;
        const flag = this.service.getInternalLoad();
        /* if (flag == true) {
           const f = this.service.getFunctionPromissed();
           f(this.paginaAtual).subscribe(res => {
             this.pagina = res;
     
             this.paginaTotal = this.pagina.totalPages;
             this.totalRecords = this.pagina.totalElements;
             this.loadContent();
             this.loading = false;
           },
             error => {
               this.loading = false;
             });
         } else {*/
        this.service.getPromisse().subscribe(res => {
            this.pagina = res;
            this.paginaTotal = this.pagina.totalPages;
            this.totalRecords = this.pagina.totalElements;
            this.loadContent();
            this.loading = false;
        }, error => {
            this.loading = false;
        });
        // }
    }
    loadContent() {
        this.objs = [];
        for (let i = 0; i < this.pagina.content.length; i++) {
            this.objs.push({
                id: this.getProperty(this.pagina.content[i], this.idJson),
                nome: this.getProperty(this.pagina.content[i], this.nomeJson),
                descricao: this.getProperty(this.pagina.content[i], this.descricaoJson),
                tipoRPG: this.getProperty(this.pagina.content[i], this.tipoJson),
                imgURL: this.getProperty(this.pagina.content[i], this.imgURLJson)
            });
        }
    }
    getProperty(json, field) {
        if (json == null || field == null) {
            return null;
        }
        var value = json;
        var fields = field.split(".");
        for (var i = 0; i < fields.length; i++) {
            value = value[fields[i]];
            if (value == null) {
                return null;
            }
        }
        return value;
    }
    onSortChange(event) {
        let value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
    onDialogHide() {
        this.selectedObj = null;
    }
    loadData(event) {
        const pageNumber = event.first / 10 || 0;
        this.paginaAtual = pageNumber;
        const flag = this.service.getInternalLoad();
        if (flag == true) {
            this.service.sendNewPageRequest(this.paginaAtual);
        }
        this.sendNotification();
        this.consultar();
    }
    clear(dv) {
    }
    copy(event, obj) {
        let flag = false;
        event.target.classList.forEach((classe) => {
            if (classe.includes('button')) {
                flag = true;
            }
        });
        if (!flag) {
            this.copyToClipboard(obj.id);
            this.callToast();
        }
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
    callToast() {
        this.toast.add({
            severity: 'success',
            summary: 'Copiado',
            detail: 'Código copiado para área de transferência'
        });
    }
    getTipo(obj) {
        if (isNaN(obj.tipoRPG)) {
            return obj.tipoRPG.substring(0, 20).concat('...');
        }
        else {
            return obj.tipoRPG;
        }
    }
    close() {
        // console.log(this.objToModal);
        this.modalController.dismiss(this.objToModal);
    }
};
PaginacaoComponent.ctorParameters = () => [
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_2__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('objs'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PaginacaoComponent.prototype, "objs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('emptyMessage'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PaginacaoComponent.prototype, "emptyMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('add'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PaginacaoComponent.prototype, "add", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('paginaAtual'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PaginacaoComponent.prototype, "paginaAtual", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('id'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginacaoComponent.prototype, "idJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nome'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginacaoComponent.prototype, "nomeJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('descricao'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginacaoComponent.prototype, "descricaoJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tipo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginacaoComponent.prototype, "tipoJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgURL'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginacaoComponent.prototype, "imgURLJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('closeBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PaginacaoComponent.prototype, "closeBTN", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isModal'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PaginacaoComponent.prototype, "isModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PaginacaoComponent.prototype, "notifyParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PaginacaoComponent.prototype, "getSelectedObj", void 0);
PaginacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginacao',
        template: __webpack_require__(/*! raw-loader!./paginacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/paginacao/paginacao.component.html"),
        styles: [__webpack_require__(/*! ./paginacao.component.scss */ "./src/app/components/utils/paginacao/paginacao.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_2__["PaginacaoService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], PaginacaoComponent);



/***/ }),

/***/ "./src/app/components/utils/paginacao/paginacao.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/utils/paginacao/paginacao.module.ts ***!
  \****************************************************************/
/*! exports provided: PaginacaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginacaoModule", function() { return PaginacaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var _paginacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginacao.component */ "./src/app/components/utils/paginacao/paginacao.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");













let PaginacaoModule = class PaginacaoModule {
};
PaginacaoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_paginacao_component__WEBPACK_IMPORTED_MODULE_6__["PaginacaoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_4__["DataViewModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_12__["LoadSpinnerModule"]
        ],
        exports: [_paginacao_component__WEBPACK_IMPORTED_MODULE_6__["PaginacaoComponent"]],
        entryComponents: [_paginacao_component__WEBPACK_IMPORTED_MODULE_6__["PaginacaoComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"],]
    })
], PaginacaoModule);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~fichamodelo-fichamodelo-module~gercapitulos-gercapitulos-module~ger~beaf627b-es2015.js.map