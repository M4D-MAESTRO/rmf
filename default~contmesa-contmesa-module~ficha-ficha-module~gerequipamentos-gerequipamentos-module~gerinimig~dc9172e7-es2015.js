(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~ficha-ficha-module~gerequipamentos-gerequipamentos-module~gerinimig~dc9172e7"],{

/***/ "./node_modules/primeng/fesm2015/primeng-checkbox.js":
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-checkbox.js ***!
  \***********************************************************/
/*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => Checkbox),
    multi: true
};
let Checkbox = class Checkbox {
    constructor(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.focused = false;
        this.checked = false;
    }
    onClick(event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled || this.readonly) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
        if (focus) {
            checkbox.focus();
        }
    }
    updateModel() {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    }
    handleChange(event) {
        if (!this.readonly) {
            this.checked = event.target.checked;
            this.updateModel();
        }
    }
    isChecked() {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    }
    removeValue() {
        this.model = this.model.filter(val => val !== this.value);
    }
    addValue() {
        if (this.model)
            this.model = [...this.model, this.value];
        else
            this.model = [this.value];
    }
    onFocus(event) {
        this.focused = true;
    }
    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    writeValue(model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
};
Checkbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "value", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "name", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "disabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "binary", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "label", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "ariaLabelledBy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "tabindex", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "inputId", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "labelStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "formControl", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "checkboxIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Checkbox.prototype, "readonly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Checkbox.prototype, "onChange", void 0);
Checkbox = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-checkbox',
        template: `
        <div [ngStyle]="style" [ngClass]="{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [name]="name" [readonly]="readonly" [value]="value" [checked]="checked" (focus)="onFocus($event)" (blur)="onBlur($event)"
                [ngClass]="{'ui-state-focus':focused}" (change)="handleChange($event)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.aria-labelledby]="ariaLabelledBy">
            </div>
            <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" (click)="onClick($event,cb,true)"
                        [ngClass]="{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}" role="checkbox" [attr.aria-checked]="checked">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="checked ? checkboxIcon : null"></span>
            </div>
        </div>
        <label (click)="onClick($event,cb,true)" [class]="labelStyleClass"
                [ngClass]="{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}"
                *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
        providers: [CHECKBOX_VALUE_ACCESSOR]
    })
], Checkbox);
let CheckboxModule = class CheckboxModule {
};
CheckboxModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [Checkbox],
        declarations: [Checkbox]
    })
], CheckboxModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-checkbox.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-inputtext.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-inputtext.js ***!
  \************************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let InputText = class InputText {
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    }
};
InputText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
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
let InputTextModule = class InputTextModule {
};
InputTextModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [InputText],
        declarations: [InputText]
    })
], InputTextModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtext.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-inputtextarea.js ***!
  \****************************************************************/
/*! exports provided: InputTextarea, InputTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextarea", function() { return InputTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaModule", function() { return InputTextareaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let InputTextarea = class InputTextarea {
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
        this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngDoCheck() {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    }
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    onInput(e) {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize(e);
        }
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    }
    onFocus(e) {
        if (this.autoResize) {
            this.resize(e);
        }
    }
    onBlur(e) {
        if (this.autoResize) {
            this.resize(e);
        }
    }
    resize(event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    }
};
InputTextarea.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], InputTextarea.prototype, "autoResize", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], InputTextarea.prototype, "onResize", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event'])
], InputTextarea.prototype, "onInput", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus', ['$event'])
], InputTextarea.prototype, "onFocus", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event'])
], InputTextarea.prototype, "onBlur", null);
InputTextarea = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pInputTextarea]',
        host: {
            '[class.ui-inputtext]': 'true',
            '[class.ui-corner-all]': 'true',
            '[class.ui-inputtextarea-resizable]': 'autoResize',
            '[class.ui-state-default]': 'true',
            '[class.ui-widget]': 'true',
            '[class.ui-state-filled]': 'filled'
        }
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
], InputTextarea);
let InputTextareaModule = class InputTextareaModule {
};
InputTextareaModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [InputTextarea],
        declarations: [InputTextarea]
    })
], InputTextareaModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtextarea.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-orderlist.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-orderlist.js ***!
  \************************************************************/
/*! exports provided: OrderList, OrderListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderList", function() { return OrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListModule", function() { return OrderListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm2015/primeng-utils.js");







var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OrderList = class OrderList {
    constructor(el) {
        this.el = el;
        this.metaKeySelection = true;
        this.controlsPosition = 'left';
        this.filterMatchMode = "contains";
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackBy = (index, item) => item;
        this.onReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewChecked() {
        if (this.movedUp || this.movedDown) {
            let listItems = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.listViewChild.nativeElement, 'li.ui-state-highlight');
            let listItem;
            if (listItems.length > 0) {
                if (this.movedUp)
                    listItem = listItems[0];
                else
                    listItem = listItems[listItems.length - 1];
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].scrollInView(this.listViewChild.nativeElement, listItem);
            }
            this.movedUp = false;
            this.movedDown = false;
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (this.filterValue) {
            this.filter();
        }
    }
    onItemClick(event, item, index) {
        this.itemTouched = false;
        let selectedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].findIndexInList(item, this.selection);
        let selected = (selectedIndex != -1);
        let metaSelection = this.itemTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey || event.shiftKey);
            if (selected && metaKey) {
                this._selection = this._selection.filter((val, index) => index !== selectedIndex);
            }
            else {
                this._selection = (metaKey) ? this._selection ? [...this._selection] : [] : [];
                primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].insertIntoOrderedArray(item, index, this._selection, this.value);
            }
        }
        else {
            if (selected) {
                this._selection = this._selection.filter((val, index) => index !== selectedIndex);
            }
            else {
                this._selection = this._selection ? [...this._selection] : [];
                primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].insertIntoOrderedArray(item, index, this._selection, this.value);
            }
        }
        //binding
        this.selectionChange.emit(this._selection);
        //event
        this.onSelectionChange.emit({ originalEvent: event, value: this._selection });
    }
    onFilterKeyup(event) {
        this.filterValue = event.target.value.trim().toLowerCase();
        this.filter();
        this.onFilterEvent.emit({
            originalEvent: event,
            value: this.visibleOptions
        });
    }
    filter() {
        let searchFields = this.filterBy.split(',');
        this.visibleOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"].filter(this.value, searchFields, this.filterValue, this.filterMatchMode);
    }
    isItemVisible(item) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (let i = 0; i < this.visibleOptions.length; i++) {
                if (item == this.visibleOptions[i]) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    onItemTouchEnd(event) {
        this.itemTouched = true;
    }
    isSelected(item) {
        return primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].findIndexInList(item, this.selection) != -1;
    }
    moveUp(event) {
        if (this.selection) {
            for (let i = 0; i < this.selection.length; i++) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedUp = true;
            this.onReorder.emit(event);
        }
    }
    moveTop(event) {
        if (this.selection) {
            for (let i = this.selection.length - 1; i >= 0; i--) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            this.listViewChild.nativeElement.scrollTop = 0;
        }
    }
    moveDown(event) {
        if (this.selection) {
            for (let i = this.selection.length - 1; i >= 0; i--) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedDown = true;
            this.onReorder.emit(event);
        }
    }
    moveBottom(event) {
        if (this.selection) {
            for (let i = 0; i < this.selection.length; i++) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            this.listViewChild.nativeElement.scrollTop = this.listViewChild.nativeElement.scrollHeight;
        }
    }
    onDragStart(event, index) {
        event.dataTransfer.setData('text', 'b'); // For firefox
        event.target.blur();
        this.dragging = true;
        this.draggedItemIndex = index;
    }
    onDragOver(event, index) {
        if (this.dragging && this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
            this.dragOverItemIndex = index;
            event.preventDefault();
        }
    }
    onDragLeave(event) {
        this.dragOverItemIndex = null;
    }
    onDrop(event, index) {
        let dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1;
        primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.value, this.draggedItemIndex, dropIndex);
        this.dragOverItemIndex = null;
        this.onReorder.emit(event);
        event.preventDefault();
    }
    onDragEnd(event) {
        this.dragging = false;
    }
    onListMouseMove(event) {
        if (this.dragging) {
            let offsetY = this.listViewChild.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
            let bottomDiff = (offsetY + this.listViewChild.nativeElement.clientHeight) - event.pageY;
            let topDiff = (event.pageY - offsetY);
            if (bottomDiff < 25 && bottomDiff > 0)
                this.listViewChild.nativeElement.scrollTop += 15;
            else if (topDiff < 25 && topDiff > 0)
                this.listViewChild.nativeElement.scrollTop -= 15;
        }
    }
    onItemKeydown(event, item, index) {
        let listItem = event.currentTarget;
        switch (event.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(listItem);
                if (nextItem) {
                    nextItem.focus();
                }
                event.preventDefault();
                break;
            //up
            case 38:
                var prevItem = this.findPrevItem(listItem);
                if (prevItem) {
                    prevItem.focus();
                }
                event.preventDefault();
                break;
            //enter
            case 13:
                this.onItemClick(event, item, index);
                event.preventDefault();
                break;
        }
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextItem, 'ui-orderlist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevItem, 'ui-orderlist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }
};
OrderList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "header", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "listStyle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "responsive", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "filterBy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "filterPlaceholder", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "metaKeySelection", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "dragdrop", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "controlsPosition", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "ariaFilterLabel", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "filterMatchMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], OrderList.prototype, "selectionChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "trackBy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], OrderList.prototype, "onReorder", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], OrderList.prototype, "onSelectionChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], OrderList.prototype, "onFilterEvent", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listelement', { static: true })
], OrderList.prototype, "listViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"])
], OrderList.prototype, "templates", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "selection", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], OrderList.prototype, "value", null);
OrderList = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-orderList',
        template: `
        <div [ngClass]="{'ui-orderlist ui-widget': true, 'ui-orderlist-controls-left': controlsPosition === 'left',
                    'ui-orderlist-controls-right': controlsPosition === 'right'}" [ngStyle]="style" [class]="styleClass">
            <div class="ui-orderlist-controls">
                <button type="button" pButton icon="pi pi-angle-up" (click)="moveUp($event)"></button>
                <button type="button" pButton icon="pi pi-angle-double-up" (click)="moveTop($event)"></button>
                <button type="button" pButton icon="pi pi-angle-down" (click)="moveDown($event)"></button>
                <button type="button" pButton icon="pi pi-angle-double-down" (click)="moveBottom($event)"></button>
            </div>
            <div class="ui-orderlist-list-container">
                <div class="ui-orderlist-caption ui-widget-header ui-corner-top" *ngIf="header">{{header}}</div>
                <div class="ui-orderlist-filter-container ui-widget-content" *ngIf="filterBy">
                    <input type="text" role="textbox" (keyup)="onFilterKeyup($event)" class="ui-inputtext ui-widget ui-state-default ui-corner-all" [attr.placeholder]="filterPlaceholder" [attr.aria-label]="ariaFilterLabel">
                    <span class="ui-orderlist-filter-icon pi pi-search"></span>
                </div>
                <ul #listelement class="ui-widget-content ui-orderlist-list ui-corner-bottom" [ngStyle]="listStyle" (dragover)="onListMouseMove($event)">
                    <ng-template ngFor [ngForTrackBy]="trackBy" let-item [ngForOf]="value" let-i="index" let-l="last">
                        <li class="ui-orderlist-droppoint" *ngIf="dragdrop && isItemVisible(item)" (dragover)="onDragOver($event, i)" (drop)="onDrop($event, i)" (dragleave)="onDragLeave($event)" 
                            [ngClass]="{'ui-orderlist-droppoint-highlight': (i === dragOverItemIndex)}"></li>
                        <li class="ui-orderlist-item" tabindex="0"
                            [ngClass]="{'ui-state-highlight':isSelected(item)}" 
                            (click)="onItemClick($event,item,i)" (touchend)="onItemTouchEnd($event)" (keydown)="onItemKeydown($event,item,i)"
                            [style.display]="isItemVisible(item) ? 'block' : 'none'" role="option" [attr.aria-selected]="isSelected(item)"
                            [draggable]="dragdrop" (dragstart)="onDragStart($event, i)" (dragend)="onDragEnd($event)">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                        </li>
                        <li class="ui-orderlist-droppoint" *ngIf="dragdrop && l" (dragover)="onDragOver($event, i + 1)" (drop)="onDrop($event, i + 1)" (dragleave)="onDragLeave($event)" 
                            [ngClass]="{'ui-orderlist-droppoint-highlight': (i + 1 === dragOverItemIndex)}"></li>
                    </ng-template>
                </ul>
            </div>
        </div>
    `
    })
], OrderList);
let OrderListModule = class OrderListModule {
};
OrderListModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [OrderList, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        declarations: [OrderList]
    })
], OrderListModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-orderlist.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-radiobutton.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-radiobutton.js ***!
  \**************************************************************/
/*! exports provided: RADIO_VALUE_ACCESSOR, RadioButton, RadioButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_VALUE_ACCESSOR", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonModule", function() { return RadioButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const RADIO_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RadioButton),
    multi: true
};
let RadioButton = class RadioButton {
    constructor(cd) {
        this.cd = cd;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    handleClick(event, radioButton, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.select(event);
        if (focus) {
            radioButton.focus();
        }
    }
    select(event) {
        if (!this.disabled) {
            this.inputViewChild.nativeElement.checked = true;
            this.checked = true;
            this.onModelChange(this.value);
            this.onClick.emit(event);
        }
    }
    writeValue(value) {
        this.checked = (value == this.value);
        if (this.inputViewChild && this.inputViewChild.nativeElement) {
            this.inputViewChild.nativeElement.checked = this.checked;
        }
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onChange(event) {
        this.select(event);
    }
};
RadioButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "value", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "name", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "disabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "label", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "tabindex", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "inputId", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "ariaLabelledBy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RadioButton.prototype, "labelStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], RadioButton.prototype, "onClick", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], RadioButton.prototype, "onFocus", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], RadioButton.prototype, "onBlur", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rb', { static: true })
], RadioButton.prototype, "inputViewChild", void 0);
RadioButton = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-radioButton',
        template: `
        <div [ngStyle]="style" [ngClass]="'ui-radiobutton ui-widget'" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [attr.value]="value" [attr.tabindex]="tabindex" [attr.aria-labelledby]="ariaLabelledBy"
                    [checked]="checked" (change)="onChange($event)" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" [disabled]="disabled">
            </div>
            <div (click)="handleClick($event, rb, true)" role="radio" [attr.aria-checked]="checked"
                [ngClass]="{'ui-radiobutton-box ui-widget ui-state-default':true,
                'ui-state-active':rb.checked,'ui-state-disabled':disabled,'ui-state-focus':focused}">
                <span class="ui-radiobutton-icon ui-clickable" [ngClass]="{'pi pi-circle-on':rb.checked}"></span>
            </div>
        </div>
        <label (click)="select($event)" [class]="labelStyleClass"
            [ngClass]="{'ui-radiobutton-label':true, 'ui-label-active':rb.checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}"
            *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
        providers: [RADIO_VALUE_ACCESSOR]
    })
], RadioButton);
let RadioButtonModule = class RadioButtonModule {
};
RadioButtonModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [RadioButton],
        declarations: [RadioButton]
    })
], RadioButtonModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-radiobutton.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/criar-componente/criar-componente.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/criar-componente/criar-componente.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo item\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<form [formGroup]=\"formItem\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n  <div class=\"topo\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nome</ion-label>\r\n          <ion-input formControlName=\"nome\" type=\"text\" color=\"primary\" placeholder=\"EX: Amaterasu\"></ion-input>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.nome.dirty && formItem.controls.nome.errors\" margin-left>\r\n          Preencha\r\n          o nome</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Descrição</ion-label>\r\n          <ion-textarea formControlName=\"desc\" type=\"text-area\" color=\"primary\"\r\n            placeholder=\"EX: Uma espada grande cujo sua lâmina exala o fogo negro, dizem que este fogo não pode ser apagado\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.desc.dirty && formItem.controls.desc.errors\" margin-left>\r\n          Preencha\r\n          a descrição</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>Tipo de RPG</ion-label>\r\n          <ion-select formControlName=\"idTipoRPG\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Medieval</ion-select-option>\r\n            <ion-select-option value=\"1\">Cyberpunk</ion-select-option>\r\n            <ion-select-option value=\"2\">Steampunk</ion-select-option>\r\n            <ion-select-option value=\"3\">Horror</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>Tipo de item</ion-label>\r\n          <ion-select formControlName=\"idTipoItem\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Arma/Ataque</ion-select-option>\r\n            <ion-select-option value=\"1\">Armadura/Defesa</ion-select-option>\r\n            <ion-select-option value=\"2\">Utilizável</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Peso (kg)</ion-label>\r\n          <ion-input formControlName=\"peso\" type=\"text\" color=\"primary\" placeholder=\"EX: 8,5\"></ion-input>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.peso.dirty && formItem.controls.peso.errors\" margin-left>\r\n          Preencha o peso , caso não tenha, coloque 0</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Valor</ion-label>\r\n          <ion-input formControlName=\"valor\" type=\"text\" color=\"primary\" placeholder=\"EX: 1500\"></ion-input>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.valor.dirty && formItem.controls.valor.errors\" margin-left>\r\n          Preencha o valor apenas com números inteiros, caso não tenha, coloque 0</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">URL da imagem</ion-label>\r\n          <ion-input formControlName=\"urlImg\" type=\"text\" color=\"primary\"\r\n            placeholder=\"https://i.pinimg.com/originals/3d/f4/63/3df463b9e3e7fb571eb9a9ec05fd91d5.jpg\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button fill=\"outline\" float-right (click)=\"next(formuItem)\" [disabled]=\"formItem.invalid\">Próximo\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <app-imagem-display [src]=\"this.formItem.get('urlImg').value\"></app-imagem-display>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</form>\r\n\r\n<span [ngSwitch]=\"opcao\">\r\n\r\n  <form *ngSwitchCase=\"0\" [formGroup]=\"formArma\" (ngSubmit)=\"$event.preventDefault()\" #formuArma>\r\n    <ion-button size=\"small\" fill=\"outline\" (click)=\"back(formuArma)\">Voltar</ion-button>\r\n    <div class=\"topo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Dano</ion-label>\r\n            <ion-input formControlName=\"dano\" type=\"text\" color=\"primary\" placeholder=\"EX: 2d20\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.dano.dirty && formArma.controls.dano.errors\" margin-left>\r\n            Preencha\r\n            o conteúdo</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Dano Bônus (+)</ion-label>\r\n            <ion-input formControlName=\"danoBonus\" type=\"text\" color=\"primary\" placeholder=\"EX: 5\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.danoBonus.dirty && formArma.controls.danoBonus.errors\" margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Crítico (x)</ion-label>\r\n            <ion-input formControlName=\"critico\" type=\"text\" color=\"primary\" placeholder=\"EX: 3\"></ion-input>\r\n            <p class=\"danger\" *ngIf=\"formArma.controls.critico.dirty && formArma.controls.critico.errors\" margin-left>\r\n              Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Distância</ion-label>\r\n            <ion-input formControlName=\"distancia\" type=\"text\" color=\"primary\" placeholder=\"EX: 2m\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.distancia.dirty && formArma.controls.distancia.errors\" margin-left>\r\n            Preencha\r\n            o conteúdo</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>Tipo de arma</ion-label>\r\n            <ion-select formControlName=\"idTipoArma\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Corte</ion-select-option>\r\n              <ion-select-option value=\"1\">Esmagamento</ion-select-option>\r\n              <ion-select-option value=\"2\">Perfuração</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.idTipoArma.dirty && formArma.controls.idTipoArma.errors\"\r\n            margin-left>\r\n            Selecione um!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-button fill=\"outline\" expand=\"block\" (click)=\"salvarArma()\" [disabled]=\"formArma.invalid\">Salvar</ion-button>\r\n  </form>\r\n\r\n  <form *ngSwitchCase=\"1\" [formGroup]=\"formDefesa\" (ngSubmit)=\"$event.preventDefault()\" #formuDef>\r\n    <ion-button size=\"small\" fill=\"outline\" (click)=\"back(formuDef)\">Voltar</ion-button>\r\n    <div class=\"topo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Bônus defesa(+)</ion-label>\r\n            <ion-input formControlName=\"defesaBonus\" type=\"text\" color=\"primary\" placeholder=\"EX: 4\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formDefesa.controls.defesaBonus.dirty && formDefesa.controls.defesaBonus.errors\"\r\n            margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Bônus destreza(+)</ion-label>\r\n            <ion-input formControlName=\"destrezaBonus\" type=\"text\" color=\"primary\" placeholder=\"EX: 0\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formDefesa.controls.destrezaBonus.dirty && formDefesa.controls.destrezaBonus.errors\"\r\n            margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Penalidade(-)</ion-label>\r\n            <ion-input formControlName=\"penalidade\" type=\"text\" color=\"primary\" placeholder=\"EX: 1\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formDefesa.controls.penalidade.dirty && formDefesa.controls.penalidade.errors\"\r\n            margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>Tipo de Defesa</ion-label>\r\n            <ion-select formControlName=\"idTipoDefesa\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Cabeça</ion-select-option>\r\n              <ion-select-option value=\"1\">Tronco</ion-select-option>\r\n              <ion-select-option value=\"2\">Braços</ion-select-option>\r\n              <ion-select-option value=\"3\">Pernas</ion-select-option>\r\n              <ion-select-option value=\"4\">Escudo</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-button fill=\"outline\" expand=\"block\" [disabled]=\"formDefesa.invalid\" (click)=\"salvarDefesa()\">Salvar\r\n    </ion-button>\r\n  </form>\r\n\r\n  <form *ngSwitchCase=\"2\" [formGroup]=\"formUti\" (ngSubmit)=\"$event.preventDefault()\" #formuUti>\r\n    <ion-button size=\"small\" fill=\"outline\" (click)=\"back(formUti)\">Voltar</ion-button>\r\n    <div class=\"topo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Efeito</ion-label>\r\n            <ion-input formControlName=\"efeito\" type=\"text\" color=\"primary\" placeholder=\"EX: Cura os PV em 20\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formUti.controls.efeito.dirty && formUti.controls.efeito.errors\" margin-left>\r\n            Preencha\r\n            o conteúdo</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>Tipo de utilizável</ion-label>\r\n            <ion-select formControlName=\"idTipoUtilizavel\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Consumível (elixir, poções e etc)</ion-select-option>\r\n              <ion-select-option value=\"1\">Aplicável (veneno e etc)</ion-select-option>\r\n              <ion-select-option value=\"2\">Equipável (anel, cordão e etc)</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formUti.controls.idTipoUtilizavel.dirty && formUti.controls.idTipoUtilizavel.errors\"\r\n            margin-left>\r\n            Selecione um!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-button fill=\"outline\" expand=\"block\" [disabled]=\"formUti.invalid\" (click)=\"salvarUtilizavel()\">Salvar\r\n    </ion-button>\r\n  </form>\r\n\r\n</span>\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" >Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ficha/ficha/ficha.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ficha/ficha/ficha.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-over\">\r\n\r\n  <ion-segment  [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button value=\"info\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-id-card\"></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"status\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-chart-bar\"></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"atributos\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-sitemap\"></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"inventario\">\r\n      <ion-label style=\"font-size: 2em\" class=\"pi pi-bars\"></ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"$event.preventDefault()\">\r\n    <div class=\"p-grid form\">\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'info'\">\r\n        <div class=\"alinhamento p-md-2 p-sm-12 \">Nome</div>\r\n        <div class=\" p-md-4 p-sm-12 \">\r\n          <div class=\" ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Nome\" formControlName=\"nome\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formGroup.controls.nome.dirty && formGroup.controls.nome.errors\" margin-left>\r\n              Preencha ao menos o nome</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Classe</div>\r\n        <div class=\" p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Classe\" formControlName=\"classe\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <div class=\"alinhamento p-md-2 p-sm-12 \">Tendência</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Tendência\" formControlName=\"tedencia\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Raça</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Raça\" formControlName=\"raca\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">História</div>\r\n        <textarea style=\"margin-top: 5px;\" class=\"p-md-10 p-sm-12 \" rows=\"5\" cols=\"30\" pInputTextarea\r\n          [autoResize]=\"true\" formControlName=\"historia\"></textarea>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"p-col\">\r\n          <p-button (click)=\"openLista('vantagens')\" class=\"p-col-4\" label=\"Vantagens\"\r\n            styleClass=\"ui-button-success ui-button-raised ui-button-rounded\"></p-button>\r\n          <p-button (click)=\"openLista('desvantagens')\" class=\"p-col-4\" class=\"btn\" label=\"Desvantagens\"\r\n            styleClass=\"ui-button-danger ui-button-raised ui-button-rounded\"></p-button>\r\n          <p-button (click)=\"openImg()\" class=\"p-col-4\" class=\"btn2\" label=\"Foto\"\r\n            styleClass=\"ui-button-primary ui-button-raised ui-button-rounded\"></p-button>\r\n        </div>\r\n        <div *ngIf=\"forceUpdate\" class=\"alinhamento p-col-12\">\r\n          <h6>Permitir que o jogador edite a ficha</h6>\r\n          <p-radioButton label=\"Sim\" name=\"edit\" [value]=\"true\" [(ngModel)]=\"editavel\"\r\n            [ngModelOptions]=\"{standalone: true}\"></p-radioButton>\r\n          <p-radioButton class=\"espaco\" label=\"Não\" name=\"edit\" [value]=\"false\" [(ngModel)]=\"editavel\"\r\n            [ngModelOptions]=\"{standalone: true}\"></p-radioButton>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'status'\">\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">Nível</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Nível\" formControlName=\"nivel\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">XP</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"XP\" formControlName=\"xpAtual\" type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/{{ formGroup.get('xpPra').value }}</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o XP\", \"XP\", 0 )'></button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">Karma</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"Karma\" formControlName=\"karma\" type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/100</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o Karma a ser adicionado\", \"Karma\", 1 )'></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-down\" class=\"ui-button-danger\"\r\n              (click)='showDialog(\"Insira o Karma a ser retirado\", \"Karma\", 2 )'></button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Pontos Vitálicos</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"Pontos Vitálicos\" formControlName=\"pvAtual\"\r\n              type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/{{ formGroup.get('pvTotal').value }}</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o PV a ser adicionado\", \"PV\", 3 )'></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-down\" class=\"ui-button-danger\"\r\n              (click)='showDialog(\"Insira o PV a ser retirado\", \"PV\", 4 )'></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Pontos de Mana</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"Pontos Vitálicos\" formControlName=\"pmAtual\"\r\n              type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/{{ formGroup.get('pmTotal').value }}</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o PM a ser adicionado\", \"PM\", 5 )'></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-down\" class=\"ui-button-danger\"\r\n              (click)='showDialog(\"Insira o PM a ser retirado\", \"PM\", 6 )'></button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'atributos'\">\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <p-dataView class=\"p-col-12\" [value]=\"getAtributos()\">\r\n          <p-header>\r\n\r\n            <h3 style=\"align-self: flex-start; text-align: start;\">Lista de Atributos\r\n              <button style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-question-circle\"\r\n                style=\"margin: 0;\"\r\n                (click)=\"callToast('info', 'Lista de especializações', 'Basta clicar em um atributo')\"></button>\r\n            </h3>\r\n\r\n          </p-header>\r\n          <ng-template let-atributo pTemplate=\"listItem\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"atributos-details\" (click)=\"openModal(atributo, $event)\">\r\n                <div style=\"text-align: start;\">\r\n                  <img [src]=\"atributo.imgURL\">\r\n                  <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12\">Nome: <b>{{atributo.nome}}</b></div>\r\n                    <div class=\"ui-g-12\">Descrição: <b>{{atributo.descricao}}</b></div>\r\n                    <div class=\"ui-g-4 ui-sm-12\">Nivel: <b>{{atributo.nivel}}</b></div>\r\n                    <button id=\"btn1\" class=\"ui-g-4 ui-sm-5 ui-button-success\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-up\"\r\n                      style=\"margin: 0;\" (click)=\"atributoNivel(atributo, true)\"></button>\r\n                    <button id=\"btn2\" class=\"ui-g-4 ui-sm-5 ui-button-danger\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-down\"\r\n                      style=\"margin: 0; margin-left: 5px;\" (click)=\"atributoNivel(atributo, false)\"></button>\r\n                    <div class=\"ui-g-12\"></div>\r\n                    <div class=\"ui-g-4 ui-sm-12\">Bonus: <b>{{atributo.bonus}}</b></div>\r\n                    <button id=\"btn3\" class=\"ui-g-4 ui-sm-5 ui-button-success\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-up\"\r\n                      style=\"margin: 0;\" (click)=\"atributoBonus(atributo, true)\"></button>\r\n                    <button id=\"btn4\" class=\"ui-g-4 ui-sm-5 ui-button-danger\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-down\"\r\n                      style=\"margin: 0; margin-left: 5px;\" (click)=\"atributoBonus(atributo, false)\"></button>\r\n                    <div class=\"ui-g-12\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </p-dataView>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'inventario'\">\r\n\r\n        <div class=\"p-col-12\">\r\n          <app-inventario [idInventario]=\"idInventario\" [isJogador]=\"isJogador\" [idNpc]=\"idNpc\" [idMesa]=\"idMesa\"\r\n            [tipoNpc]=\"tipoNpc\"></app-inventario>\r\n        </div>\r\n\r\n      </ng-container>\r\n    </div>\r\n\r\n    <p-dialog [visible]=\"display.show\" [modal]=\"true\" [draggable]=\"false\" [focusTrap]=\"true\" [closable]=\"false\">\r\n      <p-header>\r\n        {{ display.titulo }}\r\n      </p-header>\r\n\r\n      <ng-container *ngIf=\"display.status == 'XP' \">\r\n        <p-radioButton name=\"groupname\" value=\"manter\" label=\"Manter o XP em caso de level up\"\r\n          [(ngModel)]=\"selectedValue\" [ngModelOptions]=\"{standalone: true}\">\r\n        </p-radioButton><br><br>\r\n        <p-radioButton name=\"groupname\" value=\"resetar\" label=\"Resetar o XP em caso de level up\"\r\n          [(ngModel)]=\"selectedValue\" [ngModelOptions]=\"{standalone: true}\"></p-radioButton><br>\r\n      </ng-container>\r\n\r\n\r\n      <input style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status\"\r\n        formControlName=\"valorInserido\">\r\n      <p class=\"danger\" *ngIf=\"formGroup.get('valorInserido').invalid\" margin-left>\r\n        Preencha apenas com números inteiros</p>\r\n      <p-footer>\r\n        <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-times-circle\" class=\"ui-button-danger\"\r\n          (click)=\"cancelStatus()\"></button>\r\n        <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-check-circle\" class=\"ui-button-success\"\r\n          [disabled]=\"formGroup.get('valorInserido').invalid\" (click)=\"handleInsercao()\"></button>\r\n      </p-footer>\r\n    </p-dialog>\r\n\r\n\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n<br>\r\n<ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" [disabled]=\"canUpdate()\"\r\n  (click)=\"salvar()\">\r\n  Salvar</ion-button>\r\n<ion-button *ngIf=\"closeBTN\" class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"danger\" (click)=\"close()\">\r\n  Fechar</ion-button>\r\n\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/imagem/imagem.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/imagem/imagem.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card styleClass=\"ui-card-shadow\">\r\n  <p-header>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">URL da imagem</ion-label>\r\n      <ion-input type=\"text\" color=\"primary\" [(ngModel)]=\"src\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n    </ion-item>\r\n    <img [src]=\"getImg()\">\r\n  </p-header>\r\n  <p-footer>\r\n    <ion-button color=\"danger\" expand=\"block\" fill=\"solid\" (click)=\"close()\">Fechar</ion-button>\r\n  </p-footer>\r\n</p-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/ataque-armas/ataque-armas.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/ataque-armas/ataque-armas.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vazio\" *ngIf=\"ataque.length == 0\">\r\n  <p>Hey! Vamos lá! Equipe umas armas e domine essa mesa!\r\n    Você pode equipar armas através do <span>inventário!</span>\r\n  </p>\r\n</div>\r\n\r\n<ion-content>\r\n  <ion-item *ngFor=\"let item of ataque\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center align-items-center text-center style=\"display: inline\">\r\n\r\n        <ion-col justify-content-center align-items-center text-center align-self-center>\r\n          <ion-item color=\"primary\" class=\"click\" (click)=\"show(info.el);\">\r\n            <ion-label class=\"titulo\">\r\n              <h2>{{ item.nome }} Vamos testar bando de corno </h2>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" [name]=\"icone\"></ion-icon>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-label class=\"tabela\" #info style=\"display: none\">\r\n            <table class=\"rwd-table\">\r\n              <tbody>\r\n                <tr>\r\n                  <td class=\"destaque\">Bônus de Ataque</td>\r\n                  <td>{{ item.danoBonus }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"destaque\">Dano</td>\r\n                  <td>{{ item.dano }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"destaque\">Crítico</td>\r\n                  <td>{{ item.critico }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"destaque\">Distância</td>\r\n                  <td>{{ item.distancia }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"destaque\">Tipo</td>\r\n                  <td>{{ getTipo(item.idTipoArma) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n\r\nA IDEIA É USAR O  TABS PARA PODER MUDAR A ARMA\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button tab=\"\">\r\n          <ion-icon name=\"calendar\"></ion-icon>\r\n          <ion-label>Schedule</ion-label>\r\n          <ion-badge>6</ion-badge>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n    \r\n  </ion-toolbar>\r\n  <ion-button expand=\"block\" (click)=\"close()\">Fechar</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/defesa-armadura/defesa-armadura.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/defesa-armadura/defesa-armadura.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  defesa-armadura works!\r\n</p>\r\n\r\n<ion-button (click)=\"close()\">Fechar</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/especializacoes/especializacoes.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/especializacoes/especializacoes.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\r\n  <ion-label position=\"fixed\" style=\"overflow: visible;\">Especializações: </ion-label>\r\n</ion-item>\r\n<div class=\"especializacao\">\r\n  <ion-list>\r\n    <ion-item-sliding #slide *ngFor=\"let especializacao of especializacoes\">\r\n      <ion-item>\r\n        <h2 class=\"espec especNome\">{{especializacao.nome}} </h2>\r\n        <p class=\"espec especDesc\">{{especializacao.descricao}}</p>\r\n        <span class=\"fav\" *ngIf=\"especializacao.isFav\">\r\n          <ion-icon slot=\"start\" name=\"star\" color=\"warning\"></ion-icon>\r\n        </span>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"primary\" (click)=\"fav(especializacao, slide)\">Favorita</ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" (click)=\"remov(especializacao)\">Deletar</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</div>\r\n<ion-footer>\r\n  <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" color=\"primary\" (click)=\"addEspec()\">Adicionar</ion-button>\r\n  <ion-button *ngIf=\"closeButton\" class=\"btn\" expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"modalCtrl.dismiss()\">\r\n    Fechar</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/inventario/inventario.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/inventario/inventario.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n\r\n<div style=\"overflow: hidden\" #botoes>\r\n  <ion-button fill=\"outline\" (click)=\"setList(0, $event.srcElement, botoes.childNodes)\">Ataque</ion-button>\r\n  <ion-button fill=\"solid\" (click)=\"setList(1, $event.srcElement, botoes.childNodes)\">Defesa</ion-button>\r\n  <ion-button fill=\"solid\" (click)=\"setList(2, $event.srcElement, botoes.childNodes)\">Utilizável</ion-button>\r\n</div>\r\n\r\n<table>\r\n  <tr>\r\n    <th>Nome</th>\r\n    <th>Valor</th>\r\n    <th>Peso</th>\r\n  </tr>\r\n\r\n  <tr #row class=\"selecionavel\" *ngFor=\"let item of items\" (click)=\"selecionar(item, row)\">\r\n    <td>{{ item.nome }}</td>\r\n    <td>{{ item.valor }}</td>\r\n    <td>{{ item.peso }} kg</td>\r\n  </tr>\r\n\r\n  <tfoot>\r\n    <tr>\r\n      <td class=\"out\"></td>\r\n      <td class=\"out\"></td>\r\n      <td class=\"total\">Peso Total</td>\r\n      <td class=\"total\">{{ peso }} kg</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\r\n<ion-row justify-content-center align-items-center>\r\n  <ion-card class=\"ion-text-center\">\r\n    <img class=\"imagem\" [src]=\"imgTemplate\" alt=\"\" />\r\n    <ion-card-header class=\"ion-justify-content-center\">\r\n      <ion-card-title> {{ itemSelected?.nome }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      {{ itemSelected?.descricao }}\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-row>\r\n\r\n<ion-item class=\"carteira\">\r\n  <ion-row justify-content-center align-items-center>\r\n    <ion-col ion-align-self-start justify-content-start>\r\n      <!-- <h2 style=\"font: bold\" class=\"gold\">Gold: </h2> -->\r\n      <img class=\"cash\" src=\"assets/imgs/cash.png\" alt=\"Gold\" />\r\n      <p class=\"gold\"> = {{ inventario.dinheiro }}</p>\r\n    </ion-col>\r\n    <ion-col ion-align-self-end justify-content-end>\r\n      <ion-button fill=\"outline\" float-right (click)=\"presentOperation(false)\">Debitar</ion-button>\r\n      <ion-button fill=\"outline\" float-right (click)=\"presentOperation(true)\">Creditar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n<ion-row align-items-start>\r\n  <ion-col>\r\n    <ion-item>\r\n      <ion-label>Tipo de Item</ion-label>\r\n      <ion-select placeholder=\"Selecione\" [value]=\"selectedItem\" (ionChange)=\"setTipoitem($event)\">\r\n        <ion-select-option [value]=\"tipoItem[0].value\">{{ tipoItem[0].template }}</ion-select-option>\r\n        <ion-select-option [value]=\"tipoItem[1].value\">{{ tipoItem[1].template }}</ion-select-option>\r\n        <ion-select-option [value]=\"tipoItem[2].value\">{{ tipoItem[2].template }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-button (click)=\"adicionar()\" [disabled]=\"selectedItem == -1\">Adicionar</ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col>\r\n    <ion-button (click)=\"remover()\" [disabled]=\"itemSelected == undefined\">Remover</ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col>\r\n    <ion-button (click)=\"presentVender()\" [disabled]=\"itemSelected == undefined\">Vender</ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col align-self-end>\r\n    <ion-button right (click)=\"callToast()\" [disabled]=\"false\">Equipar/Usar</ion-button>\r\n  </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./src/app/components/criacoes/criar-componente/criar-componente.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-componente/criar-componente.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  color: #b40303;\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1jb21wb25lbnRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcY3JpYXItY29tcG9uZW50ZVxcY3JpYXItY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1jb21wb25lbnRlL2NyaWFyLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvY3JpYXItY29tcG9uZW50ZS9jcmlhci1jb21wb25lbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdlcntcclxuICAgIGNvbG9yOiByZ2IoMTgwLCAzLCAzKTtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn0iLCIuZGFuZ2VyIHtcbiAgY29sb3I6ICNiNDAzMDM7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/criar-componente/criar-componente.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-componente/criar-componente.component.ts ***!
  \************************************************************************************/
/*! exports provided: CriarComponenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarComponenteComponent", function() { return CriarComponenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");






let CriarComponenteComponent = class CriarComponenteComponent {
    constructor(modalCtrl, formBuilder, itemService, alertController, storage) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.storage = storage;
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.formItem = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idTipoRPG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idTipoItem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('([0-9]*([.]|[,]))?[0-9]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            peso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('([0-9]*([.]|[,]))?[0-9]+'), , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            urlImg: ['', []]
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
        this.oldForm = form;
    }
    salvarArma() {
        this.loading = true;
        let obj = {
            id: null,
            nome: this.formItem.get('nome').value,
            descricao: this.formItem.get('desc').value,
            tipoItem: parseInt(this.formItem.get('idTipoItem').value),
            tipoRPG: parseInt(this.formItem.get('idTipoRPG').value),
            peso: parseFloat(this.formItem.get('peso').value.toString().replace(',', '.')),
            valor: parseFloat(this.formItem.get('valor').value.toString().replace(',', '.')),
            imgURL: this.formItem.get('urlImg').value,
            bonusAtaque: parseInt(this.formArma.get('danoBonus').value),
            dano: this.formArma.get('dano').value,
            critico: parseInt(this.formArma.get('critico').value),
            distancia: this.formArma.get('distancia').value,
            tipoAtaque: parseInt(this.formArma.get('idTipoArma').value),
            idCriador: this.storage.getLocalUserId()
        };
        this.itemService.insertAtaque(obj)
            .subscribe((res) => {
            this.loading = false;
            this.clearForms();
            this.presentAdicionar(res.body.id);
        }, error => {
            this.loading = false;
        });
    }
    salvarDefesa() {
        this.loading = true;
        let obj = {
            id: null,
            nome: this.formItem.get('nome').value,
            descricao: this.formItem.get('desc').value,
            tipoItem: parseInt(this.formItem.get('idTipoItem').value),
            tipoRPG: parseInt(this.formItem.get('idTipoRPG').value),
            peso: parseFloat(this.formItem.get('peso').value.toString().replace(',', '.')),
            valor: parseFloat(this.formItem.get('valor').value.toString().replace(',', '.')),
            imgURL: this.formItem.get('urlImg').value,
            bonusDefesa: parseInt(this.formDefesa.get('defesaBonus').value),
            bonusDestreza: parseInt(this.formDefesa.get('destrezaBonus').value),
            penalidade: parseInt(this.formDefesa.get('penalidade').value),
            tipoDefesa: parseInt(this.formDefesa.get('idTipoDefesa').value),
            idCriador: this.storage.getLocalUserId()
        };
        this.itemService.insertDefesa(obj)
            .subscribe((res) => {
            this.loading = false;
            this.clearForms();
            this.presentAdicionar(res.body.id);
        }, error => {
            this.loading = false;
        });
    }
    salvarUtilizavel() {
        this.loading = true;
        let obj = {
            id: null,
            nome: this.formItem.get('nome').value,
            descricao: this.formItem.get('desc').value,
            tipoItem: parseInt(this.formItem.get('idTipoItem').value),
            tipoRPG: parseInt(this.formItem.get('idTipoRPG').value),
            peso: parseFloat(this.formItem.get('peso').value.toString().replace(',', '.')),
            valor: parseFloat(this.formItem.get('valor').value.toString().replace(',', '.')),
            imgURL: this.formItem.get('urlImg').value,
            efeito: this.formUti.get('efeito').value,
            tipoUtilizavel: parseInt(this.formUti.get('idTipoUtilizavel').value),
            idCriador: this.storage.getLocalUserId()
        };
        this.itemService.insertUtilizavel(obj)
            .subscribe((res) => {
            this.loading = false;
            this.clearForms();
            this.presentAdicionar(res.body.id);
        }, error => {
            this.loading = false;
        });
    }
    clearForms() {
        this.formItem.get('nome').setValue('');
        this.formItem.get('desc').setValue('');
        this.formItem.get('valor').setValue('');
        this.formItem.get('peso').setValue('');
        this.formItem.get('urlImg').setValue('');
        this.formItem.get('idTipoRPG').setValue(0);
        this.formArma.get('danoBonus').setValue('');
        this.formArma.get('critico').setValue('');
        this.formArma.get('dano').setValue('');
        this.formArma.get('distancia').setValue('');
        this.formArma.get('idTipoArma').setValue(0);
        this.formDefesa.get('defesaBonus').setValue('');
        this.formDefesa.get('destrezaBonus').setValue('');
        this.formDefesa.get('penalidade').setValue('');
        this.formDefesa.get('idTipoDefesa').setValue(0);
        this.formUti.get('efeito').setValue('');
        this.formUti.get('idTipoUtilizavel').setValue(0);
        this.back(this.oldForm);
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
                            this.close(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    close(id) {
        this.modalCtrl.getTop().then(value => {
            if (value) {
                this.modalCtrl.dismiss();
            }
        });
        this.copyToClipboard(id);
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
CriarComponenteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CriarComponenteComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CriarComponenteComponent.prototype, "cancelarBTN", void 0);
CriarComponenteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-criar-componente',
        template: __webpack_require__(/*! raw-loader!./criar-componente.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/criar-componente/criar-componente.component.html"),
        styles: [__webpack_require__(/*! ./criar-componente.component.scss */ "./src/app/components/criacoes/criar-componente/criar-componente.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
], CriarComponenteComponent);



/***/ }),

/***/ "./src/app/components/ficha/ficha/ficha.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/ficha/ficha/ficha.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n}\n\n.form {\n  margin-top: 25px;\n  margin-right: 5%;\n  margin-left: 5%;\n  text-align: end;\n}\n\n.alinhamento {\n  margin-top: 5px;\n}\n\n.nobreak {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  .form {\n    text-align: start;\n  }\n\n  .nobreak {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.danger {\n  font-size: 10px;\n  color: red;\n  margin-top: 10px;\n}\n\n.radio {\n  margin: 5px, 10px;\n}\n\np-orderList .ui-orderlist-controls {\n  display: none !important;\n}\n\n.atributos-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n}\n\n.atributos-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.atributos-details > div img {\n  margin-right: 14px;\n  width: 90px;\n  height: 90px;\n}\n\n.atributos-details {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n  background-color: #ebebeb;\n  border-radius: 2px;\n}\n\n.atributos-details:hover {\n  background-color: #a2fffe;\n  cursor: pointer;\n}\n\n.btn {\n  align-self: flex-start;\n}\n\n.btn2 {\n  margin-left: 10px;\n}\n\n.espaco {\n  margin-left: 10px;\n}\n\n.border-over {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWNoYS9maWNoYS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmljaGFcXGZpY2hhXFxmaWNoYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWNoYS9maWNoYS9maWNoYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxpQkFBQTtFQ0VGOztFRENBO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxzQkFBQTtBQ0dGOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEQ0E7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpY2hhL2ZpY2hhL2ZpY2hhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5hbGluaGFtZW50byB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5ub2JyZWFrIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAubm9icmVhayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICBtYXJnaW46IDVweCwgMTBweDtcclxufVxyXG5cclxucC1vcmRlckxpc3QgLnVpLW9yZGVybGlzdC1jb250cm9scyB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYgaW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5hdHJpYnV0b3MtZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcclxuICBtYXJnaW46IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmF0cmlidXRvcy1kZXRhaWxzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJmZmZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZXNwYWNve1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmJvcmRlci1vdmVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufSIsImlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5hbGluaGFtZW50byB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vYnJlYWsge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgfVxuXG4gIC5ub2JyZWFrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4uZGFuZ2VyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBtYXJnaW46IDVweCwgMTBweDtcbn1cblxucC1vcmRlckxpc3QgLnVpLW9yZGVybGlzdC1jb250cm9scyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcbiAgbWFyZ2luOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZmZmZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmJ0bjIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmVzcGFjbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm9yZGVyLW92ZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/ficha/ficha/ficha.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ficha/ficha/ficha.component.ts ***!
  \***********************************************************/
/*! exports provided: FichaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaComponent", function() { return FichaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/especializacoes/especializacoes.component */ "./src/app/components/utils/especializacoes/especializacoes.component.ts");
/* harmony import */ var _utils_listas_listas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.component */ "./src/app/components/utils/listas/listas.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imagem/imagem.component */ "./src/app/components/imagem/imagem.component.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");












let FichaComponent = class FichaComponent {
    constructor(router, menu, formBuilder, alertController, modalCtrl, toast, fichaService, service, firestore) {
        this.router = router;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.fichaService = fichaService;
        this.service = service;
        this.firestore = firestore;
        this.display = { show: false, titulo: 'Title', status: '' };
        this.selectedValue = 'manter';
        this.abaAtual = 'info';
        this.idFicha = undefined;
        this.ficha = undefined;
        this.isJogador = true;
        this.closeBTN = false;
        this.forceUpdate = false;
        this.loading = false;
        this.currentTime = 0;
        this.loading = true;
        this.formGroup = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            classe: ['', []],
            tedencia: ['', []],
            raca: ['', []],
            nivel: [{ value: '1', disabled: true }, []],
            xpAtual: [{ value: '0', disabled: true }, []],
            xpPra: ['150', []],
            karma: [{ value: '0', disabled: true }, []],
            pvAtual: [{ value: '0', disabled: true }, []],
            pvTotal: [{ value: '100', disabled: true }, []],
            pmAtual: [{ value: '0', disabled: true }, []],
            pmTotal: [{ value: '100', disabled: true }, []],
            historia: ['', []],
            vantagens: [Array(), []],
            desvantagens: [Array(), []],
            atributos: [Array(), []],
            //gold: [100, [Validators.pattern('^[0-9]+$')]],
            valorInserido: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
        });
        //this.isJogador = this.navParams.get('isJogador');
        this.isJogador = fichaService.getConfiguration().isJogador;
        this.closeBTN = fichaService.getConfiguration().closeBTN;
        this.idNpc = fichaService.getConfiguration().idNpc;
        this.idMesa = fichaService.getConfiguration().idMesa;
        this.tipoNpc = fichaService.getConfiguration().tipoNpc;
        this.ficha = fichaService.getConfiguration().ficha;
    }
    ngOnInit() {
        if (this.ficha) {
            let fm = this.ficha.fichaModelo;
            this.formGroup.get('nome').setValue(fm.nome);
            this.formGroup.get('classe').setValue(fm.classe);
            this.formGroup.get('karma').setValue(fm.karmaAtual);
            this.formGroup.get('nivel').setValue(fm.nivel);
            this.formGroup.get('pvAtual').setValue(fm.pvAtual);
            this.formGroup.get('pvTotal').setValue(fm.pvTotal);
            this.formGroup.get('raca').setValue(fm.raca);
            this.formGroup.get('tedencia').setValue(fm.tedencia);
            this.formGroup.get('xpAtual').setValue(fm.xpAtual);
            this.formGroup.get('xpPra').setValue(fm.xpPra);
            this.formGroup.get('pmTotal').setValue(fm.pmTotal);
            this.formGroup.get('pmAtual').setValue(fm.pmAtual);
            this.formGroup.get('atributos').setValue(fm.atributos);
            this.formGroup.get('historia').setValue(this.ficha.historia);
            this.formGroup.get('vantagens').setValue(this.ficha.vantagens);
            this.formGroup.get('desvantagens').setValue(this.ficha.desvantagens);
            this.idFicha = this.ficha.idFicha;
            this.urlImg = this.ficha.urlImg;
            this.tipRPG = fm.tipoRPG;
            this.editavel = true;
            this.loading = false;
            this.idInventario = this.ficha.inventario.idInventario;
        }
        else {
            this.getFicha();
            this.setupWebSocket();
        }
    }
    getFicha() {
        this.fichaService.findFichaById(this.idFicha)
            .subscribe((res) => {
            let fm = res.fichaModelo;
            this.formGroup.get('nome').setValue(fm.nome);
            this.formGroup.get('classe').setValue(fm.classe);
            this.formGroup.get('karma').setValue(fm.karmaAtual);
            this.formGroup.get('nivel').setValue(fm.nivel);
            this.formGroup.get('pvAtual').setValue(fm.pvAtual);
            this.formGroup.get('pvTotal').setValue(fm.pvTotal);
            this.formGroup.get('raca').setValue(fm.raca);
            this.formGroup.get('tedencia').setValue(fm.tedencia);
            this.formGroup.get('xpAtual').setValue(fm.xpAtual);
            this.formGroup.get('xpPra').setValue(fm.xpPra);
            this.formGroup.get('pmTotal').setValue(fm.pmTotal);
            this.formGroup.get('pmAtual').setValue(fm.pmAtual);
            this.formGroup.get('atributos').setValue(fm.atributos);
            this.formGroup.get('historia').setValue(res.historia);
            this.formGroup.get('vantagens').setValue(res.vantagens);
            this.formGroup.get('desvantagens').setValue(res.desvantagens);
            this.editavel = res.editavel;
            this.tipRPG = fm.tipoRPG;
            this.loading = false;
            this.idInventario = res.inventario.idInventario;
            this.urlImg = res.urlImg;
        }, error => { this.loading = false; });
    }
    setupWebSocket() {
        try {
            this.notificador = this.firestore.collection('ficha').valueChanges();
            // console.log(this.notificador);
            this.notificador.subscribe(res => {
                //console.log(res);
                const obj = res.find(obj => obj.id == this.idFicha);
                if (this.currentTime != obj.timestamp && this.idFicha == obj.id) {
                    this.currentTime = obj.timestamp;
                    this.getFicha();
                }
            }, error => {
                console.log(error);
                this.loading = false;
            });
        }
        catch (e) {
            console.log(e);
            this.loading = false;
        }
    }
    salvar() {
        this.loading = true;
        let a = [];
        this.formGroup.get('atributos').value.forEach(atributo => {
            a.push({
                idAtributo: atributo.idAtributo,
                nivel: atributo.nivel,
                bonus: atributo.bonus
            });
        });
        let ficha = {
            idFicha: this.idFicha,
            historia: this.formGroup.get('historia').value,
            vantagens: this.formGroup.get('vantagens').value,
            desvantagens: this.formGroup.get('desvantagens').value,
            classe: this.formGroup.get('classe').value,
            karmaAtual: this.formGroup.get('karma').value,
            karmaTotal: 100,
            nivel: this.formGroup.get('nivel').value,
            nome: this.formGroup.get('nome').value,
            pmAtual: this.formGroup.get('pmAtual').value,
            pmTotal: this.formGroup.get('pmTotal').value,
            pvAtual: this.formGroup.get('pvAtual').value,
            pvTotal: this.formGroup.get('pvTotal').value,
            raca: this.formGroup.get('raca').value,
            tedencia: this.formGroup.get('tedencia').value,
            xpAtual: this.formGroup.get('xpAtual').value,
            xpPra: this.formGroup.get('xpPra').value,
            tipoRPG: this.tipRPG,
            atributo: a,
            editavel: this.editavel,
        };
        if (this.isJogador) {
            this.fichaService.update(ficha)
                .subscribe(res => {
                this.loading = false;
                this.callToast('success', 'Salvo com sucesso!', 'Sua ficha foi salva/atualizada');
                //this.setupWebSocket();
            }, error => { this.loading = false; });
        }
        else {
            this.fichaService.updateFichaNpc(ficha, this.idNpc, this.idMesa)
                .subscribe(res => {
                this.loading = false;
                this.callToast('success', 'Salvo com sucesso!', 'Sua ficha foi salva/atualizada');
            }, error => { this.loading = false; });
        }
    }
    selectAtributo(event, atributo) {
        this.selectedAtributo = atributo;
        this.displayDialog = true;
        event.preventDefault();
    }
    mudaAba(event) {
    }
    getAtributos() {
        let atributos = this.formGroup.get('atributos').value;
        return atributos;
    }
    showDialog(titulo, status, opcao) {
        this.display = {
            show: true,
            titulo,
            status
        };
        this.opcao = opcao;
        this.formGroup.get('valorInserido').setValue(0);
    }
    cancelStatus() {
        this.display.show = false;
    }
    handleInsercao() {
        const adicionado = Number(this.formGroup.get('valorInserido').value);
        switch (this.opcao) {
            case 0: //inserirXP
                if (this.selectedValue == 'manter') {
                    this.inserirXPMantendo(adicionado);
                }
                else {
                    this.inserirXPRemovendo(adicionado);
                }
                break;
            case 1: //inserirKarma 
                this.inserirKarma(adicionado);
                break;
            case 2: //removerKarma
                this.removerKarma(adicionado);
                break;
            case 3: //inserirPV
                this.inserirPV(adicionado);
                break;
            case 4: //RemoverPV
                this.removerPV(adicionado);
                break;
            case 5: //inserirPM
                this.inserirPM(adicionado);
                break;
            case 6: //RemoverPM
                this.removerPM(adicionado);
                break;
        }
        this.display.show = false;
    }
    inserirXPMantendo(adicionado) {
        let xpAtual = Number(this.formGroup.get('xpAtual').value);
        let xpPra = Number(this.formGroup.get('xpPra').value);
        xpAtual += adicionado;
        if (xpAtual > xpPra) {
            for (let i = xpPra; i <= xpAtual; i += 150) {
                xpAtual -= i;
                xpPra += 150;
                this.levelUp();
            }
        }
        else if (xpAtual == xpPra) {
            xpAtual = 0;
            xpPra += 150;
            this.levelUp();
        }
        this.formGroup.get('xpAtual').setValue(xpAtual);
        this.formGroup.get('xpPra').setValue(xpPra);
    }
    inserirXPRemovendo(adicionado) {
        let xpAtual = Number(this.formGroup.get('xpAtual').value);
        let xpPra = Number(this.formGroup.get('xpPra').value);
        xpAtual += adicionado;
        if (xpAtual >= xpPra) {
            xpAtual = 0;
            xpPra += 150;
            this.levelUp();
        }
        this.formGroup.get('xpAtual').setValue(xpAtual);
        this.formGroup.get('xpPra').setValue(xpPra);
    }
    inserirKarma(adicionado) {
        let karma = Number(this.formGroup.get('karma').value);
        karma += adicionado;
        if (karma >= 100) {
            karma = 100;
        }
        this.formGroup.get('karma').setValue(karma);
    }
    removerKarma(adicionado) {
        let karma = Number(this.formGroup.get('karma').value);
        karma -= adicionado;
        if (karma <= 0) {
            karma = 0;
        }
        this.formGroup.get('karma').setValue(karma);
    }
    inserirPV(adicionado) {
        let pvAtual = Number(this.formGroup.get('pvAtual').value) + adicionado;
        const pvTotal = Number(this.formGroup.get('pvTotal').value);
        if (pvAtual >= pvTotal) {
            pvAtual = pvTotal;
        }
        this.formGroup.get('pvAtual').setValue(pvAtual);
    }
    inserirPM(adicionado) {
        let pmAtual = Number(this.formGroup.get('pmAtual').value) + adicionado;
        const pmTotal = Number(this.formGroup.get('pmTotal').value);
        if (pmAtual >= pmTotal) {
            pmAtual = pmTotal;
        }
        this.formGroup.get('pmAtual').setValue(pmAtual);
    }
    removerPV(adicionado) {
        let pvAtual = Number(this.formGroup.get('pvAtual').value) - adicionado;
        if (pvAtual <= 0) {
            pvAtual = 0;
        }
        this.formGroup.get('pvAtual').setValue(pvAtual);
    }
    removerPM(adicionado) {
        let pmAtual = Number(this.formGroup.get('pmAtual').value) - adicionado;
        if (pmAtual <= 0) {
            pmAtual = 0;
        }
        this.formGroup.get('pmAtual').setValue(pmAtual);
    }
    levelUp() {
        this.formGroup.get('nivel').setValue(Number(this.formGroup.get('nivel').value) + 1);
    }
    getColor(aba) {
        if (aba = this.abaAtual) {
            return 'success';
        }
        else {
            return "warning";
        }
    }
    openModal(atributo, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flag = false;
            event.target.classList.forEach((classe) => {
                if (classe.includes('button')) {
                    flag = true;
                }
            });
            if (!flag) {
                const modal = yield this.modalCtrl.create({
                    component: _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_7__["EspecializacoesComponent"],
                    componentProps: {
                        especializacoes: atributo.especializacoes,
                        idFicha: this.idFicha,
                        idAtributo: atributo.idAtributo,
                        closeButton: true
                    },
                    backdropDismiss: false
                });
                return yield modal.present();
            }
        });
    }
    openLista(lista) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _utils_listas_listas_component__WEBPACK_IMPORTED_MODULE_8__["ListasComponent"],
                componentProps: {
                    strings: this.formGroup.get(lista).value,
                    titulo: lista.toUpperCase(),
                    saveButton: true,
                    closeButton: true
                },
                backdropDismiss: false
            });
            return yield modal.present();
        });
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    atributoNivel(atributo, opcao) {
        if (opcao) {
            atributo.nivel++;
        }
        else {
            atributo.nivel--;
        }
    }
    atributoBonus(atributo, opcao) {
        if (opcao) {
            atributo.bonus++;
        }
        else {
            atributo.bonus--;
        }
    }
    close() {
        this.modalCtrl.dismiss();
    }
    canUpdate() {
        if (this.formGroup.invalid) {
            return true;
        }
        else {
            return !(this.editavel || this.forceUpdate);
        }
    }
    openImg() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.service.setPromisse(this.urlImg);
            const modal = yield this.modalCtrl.create({
                component: _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_10__["ImagemComponent"],
                backdropDismiss: false,
                cssClass: 'my-full',
            });
            modal.onWillDismiss()
                .then(data => {
                if (data.data != '') {
                    if (this.isJogador) {
                        this.fichaService.updateImg(this.idFicha, data.data)
                            .subscribe(res => {
                            this.urlImg = data.data;
                        }, error => {
                            console.log(error);
                        });
                    }
                    else {
                        this.fichaService.updateImgNpc(this.idNpc, this.idMesa, data.data)
                            .subscribe(res => {
                            this.urlImg = data.data;
                        }, error => {
                            console.log(error);
                        });
                    }
                }
            });
            return yield modal.present();
        });
    }
};
FichaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_9__["FichaService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_11__["PaginacaoService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idFicha'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FichaComponent.prototype, "idFicha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ficha'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FichaComponent.prototype, "ficha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isJogador'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FichaComponent.prototype, "isJogador", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idNpc'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FichaComponent.prototype, "idNpc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idMesa'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FichaComponent.prototype, "idMesa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tipoNpc'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FichaComponent.prototype, "tipoNpc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('closeBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FichaComponent.prototype, "closeBTN", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('forceUpdate'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FichaComponent.prototype, "forceUpdate", void 0);
FichaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ficha',
        template: __webpack_require__(/*! raw-loader!./ficha.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ficha/ficha/ficha.component.html"),
        styles: [__webpack_require__(/*! ./ficha.component.scss */ "./src/app/components/ficha/ficha/ficha.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_9__["FichaService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_11__["PaginacaoService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
], FichaComponent);



/***/ }),

/***/ "./src/app/components/ficha/fichas.module.ts":
/*!***************************************************!*\
  !*** ./src/app/components/ficha/fichas.module.ts ***!
  \***************************************************/
/*! exports provided: FichasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichasModule", function() { return FichasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/fesm2015/primeng-radiobutton.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/orderlist */ "./node_modules/primeng/fesm2015/primeng-orderlist.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/especializacoes/especializacoes.component */ "./src/app/components/utils/especializacoes/especializacoes.component.ts");
/* harmony import */ var _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/ataque-armas/ataque-armas.component */ "./src/app/components/utils/ataque-armas/ataque-armas.component.ts");
/* harmony import */ var _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/defesa-armadura/defesa-armadura.component */ "./src/app/components/utils/defesa-armadura/defesa-armadura.component.ts");
/* harmony import */ var _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ficha/ficha.component */ "./src/app/components/ficha/ficha/ficha.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_inventario_inventario_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/inventario/inventario.module */ "./src/app/components/utils/inventario/inventario.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _imagem_imagem_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../imagem/imagem.module */ "./src/app/components/imagem/imagem.module.ts");
























let FichasModule = class FichasModule {
};
FichasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_18__["FichaComponent"], _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_15__["EspecializacoesComponent"], _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_16__["AtaqueArmasComponent"], _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_17__["DefesaArmaduraComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_22__["ListasModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_11__["OrderListModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_12__["DataViewModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_20__["LoadSpinnerModule"],
            _utils_inventario_inventario_module__WEBPACK_IMPORTED_MODULE_21__["InventarioModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_22__["ListasModule"],
            _imagem_imagem_module__WEBPACK_IMPORTED_MODULE_23__["ImagemModule"]
        ],
        exports: [
            _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_15__["EspecializacoesComponent"],
            _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_16__["AtaqueArmasComponent"],
            _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_17__["DefesaArmaduraComponent"],
            _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_18__["FichaComponent"],
        ],
        entryComponents: [
            _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_15__["EspecializacoesComponent"],
            _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_16__["AtaqueArmasComponent"],
            _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_17__["DefesaArmaduraComponent"],
            _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_18__["FichaComponent"],
        ],
        providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
            src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_19__["FichaService"],
        ]
    })
], FichasModule);



/***/ }),

/***/ "./src/app/components/imagem/imagem.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/imagem/imagem.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 400px;\n  max-height: 400px;\n  margin: 10px;\n}\n\np-card {\n  max-width: 500px;\n  max-height: 500px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  align-self: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-self: center;\n  margin-top: 55px;\n}\n\n@media only screen and (max-width: 450px) {\n  p-card {\n    max-width: 400px;\n    max-height: 400px;\n  }\n\n  img {\n    max-width: 300px;\n    max-height: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZW0vQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGltYWdlbVxcaW1hZ2VtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlbS9pbWFnZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUNDTjs7RURDRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZW0vaW1hZ2VtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5wLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICBwLWNhcmQge1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICB9IiwiaW1nIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxucC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1NXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIHAtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/imagem/imagem.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/imagem/imagem.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemComponent", function() { return ImagemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");





let ImagemComponent = class ImagemComponent {
    constructor(modalCtrl, service, toast) {
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.toast = toast;
        this.src = '';
        this.defaultImg = 'assets/imgs/dice.png';
        this.src = this.src || this.defaultImg;
    }
    ngOnInit() {
        const p = this.service.getPromisse();
        if (p) {
            this.src = p;
        }
    }
    close() {
        this.modalCtrl.dismiss(this.src);
    }
    getImg() {
        if (this.src.length < 5 || !this.src) {
            return this.defaultImg;
        }
        else {
            return this.src;
        }
    }
    update() {
        const p = this.service.getPromisse();
        p.subscribe(res => console.log(res));
    }
};
ImagemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
ImagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imagem',
        template: __webpack_require__(/*! raw-loader!./imagem.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/imagem/imagem.component.html"),
        styles: [__webpack_require__(/*! ./imagem.component.scss */ "./src/app/components/imagem/imagem.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_4__["PaginacaoService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], ImagemComponent);



/***/ }),

/***/ "./src/app/components/imagem/imagem.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/imagem/imagem.module.ts ***!
  \****************************************************/
/*! exports provided: ImagemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemModule", function() { return ImagemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var _imagem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagem.component */ "./src/app/components/imagem/imagem.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");









let ImagemModule = class ImagemModule {
};
ImagemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_imagem_component__WEBPACK_IMPORTED_MODULE_5__["ImagemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"]
        ],
        entryComponents: [_imagem_component__WEBPACK_IMPORTED_MODULE_5__["ImagemComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        exports: [_imagem_component__WEBPACK_IMPORTED_MODULE_5__["ImagemComponent"]]
    })
], ImagemModule);



/***/ }),

/***/ "./src/app/components/utils/ataque-armas/ataque-armas.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/utils/ataque-armas/ataque-armas.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\nion-row {\n  height: 100%;\n}\n.vazio {\n  display: -webkit-box;\n  display: flex;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.vazio p {\n  color: black;\n  font-size: 1.5rem;\n}\n.vazio span {\n  color: crimson;\n  font-size: 2rem;\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n  border: 2px dashed black !important;\n  overflow: hidden !important;\n}\n.titulo h2 {\n  font: bold !important;\n}\n.conteudo h4 {\n  font: bold 900 !important;\n}\n.click:hover {\n  cursor: pointer;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 300px;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 6.5em;\n  display: inline-block;\n}\n@media (min-width: 100px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th, .rwd-table td {\n  text-align: left;\n}\n@media (min-width: 100px) {\n  .rwd-table th, .rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child, .rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child, .rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nbody {\n  font-family: Montserrat, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n.rwd-table tr {\n  border-color: #46637f;\n}\n.rwd-table th, .rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 100px) {\n  .rwd-table th, .rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th, .rwd-table td:before {\n  color: #dd5;\n}\n.destaque {\n  color: #dd5;\n  font: bold;\n}\n@media (min-width: 470px) {\n  .rwd-table {\n    margin-left: 21%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9hdGFxdWUtYXJtYXMvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxhdGFxdWUtYXJtYXNcXGF0YXF1ZS1hcm1hcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9hdGFxdWUtYXJtYXMvYXRhcXVlLWFybWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDUSx3RUFBQTtBQTVDUjtFQUFTLFlBQUE7QUNHVDtBRERBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0lKO0FERkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNLSjtBREZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNLSjtBREZBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDS0o7QURGQTtFQUNJLHFCQUFBO0FDS0o7QURGQTtFQUNJLHlCQUFBO0FDS0o7QUREQTtFQUNJLGVBQUE7QUNJSjtBRElBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDREY7QURHQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREVBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0E7RUFDRSxjQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QUREQTtFQUNFLHFCQUFBO0FDSUY7QURGQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNLRjtBREhBO0VBQ0U7SUFDRSxhQUFBO0VDTUY7QUFDRjtBREpBO0VBQ0UsZ0JBQUE7QUNNRjtBREpBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0VDT0Y7O0VETEE7SUFDRSxlQUFBO0VDUUY7O0VETkE7SUFDRSxnQkFBQTtFQ1NGO0FBQ0Y7QUROQTtFQUVFLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ09GO0FERkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0tGO0FERkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDS0Y7QURIQTtFQUNFLHFCQUFBO0FDTUY7QURKQTtFQUNFLGlCQUFBO0FDT0Y7QURMQTtFQUNFO0lBQ0UsdUJBQUE7RUNRRjtBQUNGO0FETkE7RUFDRSxXQUFBO0FDUUY7QURMQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDUUo7QURKQTtFQUNJO0lBQ0ksZ0JBQUE7RUNPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91dGlscy9hdGFxdWUtYXJtYXMvYXRhcXVlLWFybWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvd3sgaGVpZ2h0OiAxMDAlOyB9XHJcblxyXG4udmF6aW97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi52YXppbyBwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi52YXppbyBzcGFue1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIgeyAgICAgXHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxyXG4gICAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZSBcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0dWxvIGgye1xyXG4gICAgZm9udDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGV1ZG8gaDR7XHJcbiAgICBmb250OiBib2xkIDkwMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmNsaWNrOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFiZWxhe1xyXG4gICAgLy9ib3JkZXI6IDJweCBkb3VibGUgIzAwNGFkNTtcclxufVxyXG5cclxuQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwXCI7XHJcbi5yd2QtdGFibGUge1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG4ucndkLXRhYmxlIHRyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4ucndkLXRhYmxlIHRoIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yd2QtdGFibGUgdGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctdG9wOiAuNWVtO1xyXG59XHJcbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbn1cclxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aCkgXCI6IFwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiA2LjVlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XHJcbiAgLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLnJ3ZC10YWJsZSB0aCwgLnJ3ZC10YWJsZSB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIHtcclxuICAucndkLXRhYmxlIHRoLCAucndkLXRhYmxlIHRkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xyXG4gIH1cclxuICAucndkLXRhYmxlIHRoOmZpcnN0LWNoaWxkLCAucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgLnJ3ZC10YWJsZSB0aDpsYXN0LWNoaWxkLCAucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4vLyAgcGFkZGluZzogMCAyZW07XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAvL2NvbG9yOiAjNDQ0O1xyXG4gLy8gYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgY29sb3I6ICMzNDQ5NUU7XHJcbn1cclxuXHJcbi5yd2QtdGFibGUge1xyXG4gIGJhY2tncm91bmQ6ICMzNDQ5NUU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5yd2QtdGFibGUgdHIge1xyXG4gIGJvcmRlci1jb2xvcjogIzQ2NjM3ZjtcclxufVxyXG4ucndkLXRhYmxlIHRoLCAucndkLXRhYmxlIHRkIHtcclxuICBtYXJnaW46IC41ZW0gMWVtO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkge1xyXG4gIC5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcclxuICBjb2xvcjogI2RkNTtcclxufVxyXG5cclxuLmRlc3RhcXVle1xyXG4gICAgY29sb3I6ICNkZDU7XHJcbiAgICBmb250OiBib2xkO1xyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0NzBweCkge1xyXG4gICAgLnJ3ZC10YWJsZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjElO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIiwiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwXCI7XG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmF6aW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmF6aW8gcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi52YXppbyBzcGFuIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjayAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8gaDIge1xuICBmb250OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZXVkbyBoNCB7XG4gIGZvbnQ6IGJvbGQgOTAwICFpbXBvcnRhbnQ7XG59XG5cbi5jbGljazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJ3ZC10YWJsZSB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5yd2QtdGFibGUgdGgge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucndkLXRhYmxlIHRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA2LjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCwgLnJ3ZC10YWJsZSB0ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmZpcnN0LWNoaWxkLCAucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsIC5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgY29sb3I6ICMzNDQ5NUU7XG59XG5cbi5yd2QtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjMzQ0OTVFO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItY29sb3I6ICM0NjYzN2Y7XG59XG5cbi5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQge1xuICBtYXJnaW46IDAuNWVtIDFlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XG4gIC5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuICB9XG59XG4ucndkLXRhYmxlIHRoLCAucndkLXRhYmxlIHRkOmJlZm9yZSB7XG4gIGNvbG9yOiAjZGQ1O1xufVxuXG4uZGVzdGFxdWUge1xuICBjb2xvcjogI2RkNTtcbiAgZm9udDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ3MHB4KSB7XG4gIC5yd2QtdGFibGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMSU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/utils/ataque-armas/ataque-armas.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/utils/ataque-armas/ataque-armas.component.ts ***!
  \*************************************************************************/
/*! exports provided: AtaqueArmasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtaqueArmasComponent", function() { return AtaqueArmasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gameplay/equipar-item.service */ "./src/app/services/gameplay/equipar-item.service.ts");





let AtaqueArmasComponent = class AtaqueArmasComponent {
    constructor(modalCtrl, equiparService) {
        this.modalCtrl = modalCtrl;
        this.equiparService = equiparService;
        this.ataque = [];
        this.isShow = true;
        this.icone = "arrow-round-down";
    }
    ngOnInit() {
        this.ataque = this.equiparService.ataquesEquipados;
    }
    show(info) {
        if (this.isShow) {
            info.style.display = "block";
            this.icone = "arrow-round-up";
            this.isShow = false;
        }
        else {
            info.style.display = "none";
            this.icone = "arrow-round-down";
            this.isShow = true;
        }
    }
    getTipo(item) {
        let tipo = "";
        switch (item) {
            case src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoARMA"].Corte:
                tipo = "Corte";
                break;
            case src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoARMA"].Esmagamento:
                tipo = "Esmagamento";
                break;
            case src_app_config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoARMA"].Perfuacao:
                tipo = "Perfuração";
                break;
        }
        return tipo;
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
AtaqueArmasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_4__["EquiparItemService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ataque'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AtaqueArmasComponent.prototype, "ataque", void 0);
AtaqueArmasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ataque-armas',
        template: __webpack_require__(/*! raw-loader!./ataque-armas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/ataque-armas/ataque-armas.component.html"),
        styles: [__webpack_require__(/*! ./ataque-armas.component.scss */ "./src/app/components/utils/ataque-armas/ataque-armas.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_4__["EquiparItemService"]])
], AtaqueArmasComponent);



/***/ }),

/***/ "./src/app/components/utils/defesa-armadura/defesa-armadura.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/utils/defesa-armadura/defesa-armadura.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvZGVmZXNhLWFybWFkdXJhL2RlZmVzYS1hcm1hZHVyYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/utils/defesa-armadura/defesa-armadura.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/utils/defesa-armadura/defesa-armadura.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DefesaArmaduraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefesaArmaduraComponent", function() { return DefesaArmaduraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let DefesaArmaduraComponent = class DefesaArmaduraComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    close() {
        this.modalCtrl.dismiss();
    }
};
DefesaArmaduraComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DefesaArmaduraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-defesa-armadura',
        template: __webpack_require__(/*! raw-loader!./defesa-armadura.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/defesa-armadura/defesa-armadura.component.html"),
        styles: [__webpack_require__(/*! ./defesa-armadura.component.scss */ "./src/app/components/utils/defesa-armadura/defesa-armadura.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], DefesaArmaduraComponent);



/***/ }),

/***/ "./src/app/components/utils/especializacoes/especializacoes.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/utils/especializacoes/especializacoes.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".especializacao {\n  border: 5px solid black;\n  height: 300px;\n  margin: 5px;\n  overflow-y: scroll;\n}\n\n.item {\n  word-wrap: break-word;\n  line-break: normal;\n}\n\n.especNome {\n  display: block;\n  font-weight: bold;\n}\n\n.especDesc {\n  display: block;\n  word-wrap: break-word;\n  border-left: 5px solid var(--ion-color-primary, #3880ff);\n  margin-left: 5px;\n  padding-left: 5px;\n}\n\np {\n  display: !important inline;\n  word-wrap: !important break-word;\n  white-space: !important nowrap;\n}\n\n.fav {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\n.fav ion-icon {\n  padding-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxlc3BlY2lhbGl6YWNvZXNcXGVzcGVjaWFsaXphY29lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMvZXNwZWNpYWxpemFjb2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURLQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDSEo7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMvZXNwZWNpYWxpemFjb2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcGVjaWFsaXphY2Fve1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcblxyXG4uaXRlbXtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGxpbmUtYnJlYWs6IG5vcm1hbDtcclxuICAgIFxyXG59XHJcblxyXG4uZXNwZWNOb21le1xyXG4gICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxufVxyXG5cclxuLmVzcGVjRGVzY3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG59XHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6ICFpbXBvcnRhbnQgaW5saW5lOyBcclxuICAgIHdvcmQtd3JhcDogIWltcG9ydGFudCBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6ICFpbXBvcnRhbnQgbm93cmFwO1xyXG4gICAgLy9vdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5mYXZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJVxyXG59XHJcblxyXG4uZmF2IGlvbi1pY29ue1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG59IiwiLmVzcGVjaWFsaXphY2FvIHtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5pdGVtIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBsaW5lLWJyZWFrOiBub3JtYWw7XG59XG5cbi5lc3BlY05vbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3BlY0Rlc2Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiAhaW1wb3J0YW50IGlubGluZTtcbiAgd29yZC13cmFwOiAhaW1wb3J0YW50IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiAhaW1wb3J0YW50IG5vd3JhcDtcbn1cblxuLmZhdiB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5mYXYgaW9uLWljb24ge1xuICBwYWRkaW5nLXRvcDogMSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/utils/especializacoes/especializacoes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/utils/especializacoes/especializacoes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EspecializacoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecializacoesComponent", function() { return EspecializacoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/especializacao/especializacao.service */ "./src/app/services/especializacao/especializacao.service.ts");




let EspecializacoesComponent = class EspecializacoesComponent {
    constructor(alertController, modalCtrl, especService) {
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.especService = especService;
        this.especializacoes = [];
        this.closeButton = false;
        this.idFicha = '';
        this.idAtributo = '';
    }
    ngOnInit() {
    }
    addEspec() {
        this.presentAlertPrompt();
    }
    fav(especializacao, slide) {
        const aux = !especializacao.isFav;
        this.especService.setFav(especializacao.idEspecializacao, aux.toString())
            .subscribe(res => { especializacao.isFav = aux; });
        slide.close();
    }
    remov(especializacao) {
        this.especializacoes.forEach((element, index, arr) => {
            if (element.nome == especializacao.nome) {
                arr.splice(index, 1);
            }
        });
        this.especService.delete(this.idFicha, this.idAtributo, especializacao.idEspecializacao)
            .subscribe(res => this.especializacoes.splice(this.especializacoes.indexOf(especializacao), 1));
    }
    presentAlertPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Adicionar',
                inputs: [
                    {
                        name: 'nome',
                        type: 'text',
                        placeholder: 'Nome da especialização'
                    },
                    {
                        name: 'desc',
                        type: 'text',
                        placeholder: 'Descrição da especialização'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Salvar',
                        handler: data => {
                            let espec = {
                                nome: data.nome,
                                descricao: data.desc
                            };
                            this.especService.insert(espec, this.idFicha, this.idAtributo).
                                subscribe(res => {
                                this.especializacoes.push({
                                    idEspecializacao: res.idEspecializacao,
                                    nome: res.nome,
                                    descricao: res.descricao,
                                    isFav: res.isFav
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EspecializacoesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__["EspecializacaoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("especializacoes"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], EspecializacoesComponent.prototype, "especializacoes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("closeButton"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], EspecializacoesComponent.prototype, "closeButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("idFicha"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EspecializacoesComponent.prototype, "idFicha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("idAtributo"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EspecializacoesComponent.prototype, "idAtributo", void 0);
EspecializacoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'especializacoes',
        template: __webpack_require__(/*! raw-loader!./especializacoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/especializacoes/especializacoes.component.html"),
        styles: [__webpack_require__(/*! ./especializacoes.component.scss */ "./src/app/components/utils/especializacoes/especializacoes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_especializacao_especializacao_service__WEBPACK_IMPORTED_MODULE_3__["EspecializacaoService"]])
], EspecializacoesComponent);



/***/ }),

/***/ "./src/app/components/utils/inventario/inventario.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/utils/inventario/inventario.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 5px 2px;\n}\n\ntd, th {\n  border: 1px solid #221111;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #221111;\n  color: white;\n}\n\n.selecionavel:hover {\n  border: 3px solid red;\n  cursor: pointer;\n}\n\n.selected {\n  border: 3px solid red;\n}\n\np {\n  padding-top: 1%;\n  padding-left: 1%;\n  font-size: 22px;\n}\n\n.gold {\n  display: inline;\n  vertical-align: middle;\n}\n\n.operations {\n  align-self: flex-end;\n}\n\n@media (min-width: 800px) {\n  .imagem {\n    width: 350px;\n    height: 200px;\n  }\n\n  .cash {\n    width: 64px;\n    height: 64px;\n  }\n}\n\n@media (max-width: 799px) {\n  .imagem {\n    width: 250px;\n    height: 150px;\n  }\n\n  .cash {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.carteira {\n  border-top: 5px double #898F00;\n  border-bottom: 5px double #898F00;\n}\n\ndiv {\n  overflow-y: scroll;\n}\n\n.out {\n  border: none;\n}\n\n.total {\n  background-color: #473501;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pbnZlbnRhcmlvL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1dGlsc1xcaW52ZW50YXJpb1xcaW52ZW50YXJpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENFO0VBQ0UscUJBQUE7QUNFSjs7QURDRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFTjs7QURBRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0dKOztBRENFO0VBQ0Usb0JBQUE7QUNFSjs7QURDRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNFSjs7RURDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDRUo7QUFDRjs7QURDRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNDSjs7RURFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvaW52ZW50YXJpby9pbnZlbnRhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMnB4O1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMTExMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIxMTExO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuc2VsZWNpb25hdmVsOmhvdmVye1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVke1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gIC5nb2xke1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLm9wZXJhdGlvbnN7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1pbi13aWR0aDogODAwcHgpe1xyXG4gICAgLmltYWdlbXtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXNoe1xyXG4gICAgICB3aWR0aDogNjRweDtcclxuICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzk5cHgpe1xyXG4gICAgLmltYWdlbXtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXNoe1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcnRlaXJhe1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IGRvdWJsZSAjODk4RjAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGRvdWJsZSAjODk4RjAwO1xyXG4gIH1cclxuICBcclxuZGl2e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbi5vdXR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4udG90YWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3MzUwMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCJ0YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4IDJweDtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMTExMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIxMTExO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWxlY2lvbmF2ZWw6aG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xufVxuXG5wIHtcbiAgcGFkZGluZy10b3A6IDElO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5nb2xkIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ub3BlcmF0aW9ucyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmltYWdlbSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAuY2FzaCB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzk5cHgpIHtcbiAgLmltYWdlbSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuY2FzaCB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59XG4uY2FydGVpcmEge1xuICBib3JkZXItdG9wOiA1cHggZG91YmxlICM4OThGMDA7XG4gIGJvcmRlci1ib3R0b206IDVweCBkb3VibGUgIzg5OEYwMDtcbn1cblxuZGl2IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ub3V0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udG90YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDczNTAxO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/utils/inventario/inventario.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/utils/inventario/inventario.component.ts ***!
  \*********************************************************************/
/*! exports provided: InventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioComponent", function() { return InventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criacoes_criar_componente_criar_componente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../criacoes/criar-componente/criar-componente.component */ "./src/app/components/criacoes/criar-componente/criar-componente.component.ts");
/* harmony import */ var src_app_services_criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/criacoes/criar-item.service */ "./src/app/services/criacoes/criar-item.service.ts");
/* harmony import */ var src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/gameplay/equipar-item.service */ "./src/app/services/gameplay/equipar-item.service.ts");
/* harmony import */ var src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/inventario/inventario.service */ "./src/app/services/inventario/inventario.service.ts");
/* harmony import */ var _config_rpg_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");










let InventarioComponent = class InventarioComponent {
    constructor(modalCtrl, alertController, itemService, equiparService, inventarioService, itensService, toast) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.itemService = itemService;
        this.equiparService = equiparService;
        this.inventarioService = inventarioService;
        this.itensService = itensService;
        this.toast = toast;
        this.inventario = {
            idInventario: null,
        };
        this.idInventario = '';
        this.isJogador = true;
        this.items = [];
        this.defaultImg = "assets/imgs/battle-gear.png";
        this.imgTemplate = this.defaultImg;
        this.acrescimoDesconto = 0;
        this.tipoItem = _config_rpg_config__WEBPACK_IMPORTED_MODULE_7__["TipoItem"];
        this.selectedItem = -1;
        this.abaAtual = 0;
    }
    ngOnInit() {
        if (this.isJogador) {
            this.inventarioService.findById(this.idInventario)
                .subscribe(res => {
                this.inventario = {
                    idInventario: res.idInventario,
                    dinheiro: res.dinheiro,
                    itensAtaque: res.itensAtaque,
                    itensDefesa: res.itensDefesa,
                    itensUtilizavel: res.itensUtilizavel
                };
                console.log('inv: ', this.inventario);
                this.rowSelected = document.createElement("b");
                this.updateTable();
                this.getPesoTotal();
            });
        }
        else {
            this.inventarioService.findByIdInMesa(this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                .subscribe(res => {
                this.inventario = {
                    idInventario: res.idInventario,
                    dinheiro: res.dinheiro,
                    itensAtaque: res.itensAtaque,
                    itensDefesa: res.itensDefesa,
                    itensUtilizavel: res.itensUtilizavel
                };
                console.log('inv: ', this.inventario);
                this.rowSelected = document.createElement("b");
                this.updateTable();
                this.getPesoTotal();
            });
        }
    }
    updateTable() {
        switch (this.abaAtual) {
            case 1:
                this.items = this.inventario.itensDefesa;
                break;
            case 2:
                this.items = this.inventario.itensUtilizavel;
                break;
            default:
                this.items = this.inventario.itensAtaque;
        }
    }
    setList(op, botao, botoes) {
        botoes.forEach(botao => {
            botao.attributes.fill.nodeValue = "solid";
        });
        botao.attributes.fill.nodeValue = "outline";
        switch (op) {
            case 0:
                this.items = this.inventario.itensAtaque;
                this.abaAtual = 0;
                break;
            case 1:
                this.items = this.inventario.itensDefesa;
                this.abaAtual = 1;
                break;
            case 2:
                this.items = this.inventario.itensUtilizavel;
                this.abaAtual = 2;
                break;
        }
    }
    selecionar(item, row) {
        this.rowSelected.classList.remove('selected');
        row.classList.add('selected');
        this.rowSelected = row;
        this.itemSelected = item;
        if (!this.itemSelected.imgURL) {
            this.imgTemplate = this.defaultImg;
        }
        else {
            this.imgTemplate = this.itemSelected.imgURL;
        }
    }
    getPesoTotal() {
        this.peso = 0;
        this.inventario.itensAtaque.forEach(item => {
            this.peso += item.peso;
        });
        this.inventario.itensDefesa.forEach(item => {
            this.peso += item.peso;
        });
        this.inventario.itensUtilizavel.forEach(item => {
            this.peso += item.peso;
        });
    }
    adicionar() {
        this.presentAdicionar();
        this.getPesoTotal();
    }
    setTipoitem(event) {
        this.selectedItem = event.detail.value;
    }
    presentAdicionar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Adicionar',
                inputs: [
                    {
                        name: 'id',
                        type: 'text',
                        placeholder: 'Insira o código do item desejado',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Usar existente',
                        cssClass: 'secondary',
                        handler: data => {
                            if ((data.id != "")) {
                                this.inventarioUP = {
                                    dinheiro: this.inventario.dinheiro,
                                    idItem: data.id,
                                    isRemov: false,
                                    tipoItem: this.selectedItem
                                };
                                if (this.isJogador) {
                                    this.inventarioService.update(this.idInventario, this.inventarioUP)
                                        .subscribe(res => {
                                        this.inventario = res;
                                        this.updateTable();
                                        this.getPesoTotal();
                                    });
                                }
                                else {
                                    this.inventarioService.updateInMesa(this.inventarioUP, this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                                        .subscribe(res => {
                                        this.inventario = res;
                                        this.updateTable();
                                        this.getPesoTotal();
                                    });
                                }
                            }
                        }
                    },
                    {
                        text: 'Criar novo',
                        handler: () => {
                            this.openModal();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    remover() {
        this.inventarioUP = {
            dinheiro: this.inventario.dinheiro,
            idItem: this.itemSelected.idItem,
            isRemov: true,
            tipoItem: this.getEnum(this.itemSelected.tipoItem)
        };
        if (this.itemSelected) {
            if (this.isJogador) {
                this.inventarioService.update(this.idInventario, this.inventarioUP)
                    .subscribe(res => {
                    this.inventario = res;
                    this.updateTable();
                    this.itemSelected = undefined;
                    this.getPesoTotal();
                });
            }
            else {
                this.inventarioService.updateInMesa(this.inventarioUP, this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                    .subscribe(res => {
                    this.inventario = res;
                    this.updateTable();
                    this.itemSelected = undefined;
                    this.getPesoTotal();
                });
            }
        }
    }
    getEnum(value) {
        let n = 0;
        switch (value) {
            case 'ATAQUE':
                n = 0;
                break;
            case 'DEFESA':
                n = 1;
                break;
            case 'UTILIZAVEL':
                n = 2;
                break;
        }
        return n;
    }
    vender() {
        if (isNaN(this.acrescimoDesconto)) {
            this.acrescimoDesconto = 0;
        }
        const aux = this.inventario.dinheiro + this.itemSelected.valor;
        if (this.isJogador) {
            this.inventarioService.updateDinheiro(this.idInventario, aux.toString())
                .subscribe(res => {
                this.inventario = res;
                this.remover();
            });
        }
        else {
            this.inventarioService.updateDinheiroInMesa(aux.toString(), this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                .subscribe(res => {
                this.inventario = res;
                this.remover();
            });
        }
    }
    presentVender() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Vender',
                message: "Valor padrão do item: " + this.itemSelected.valor,
                inputs: [
                    {
                        name: 'valor',
                        type: 'text',
                        placeholder: 'Insira o acrécimo ou desconto sobre o item'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.acrescimoDesconto = 0;
                        }
                    },
                    {
                        text: 'Descontar',
                        cssClass: 'secondary',
                        handler: data => {
                            this.acrescimoDesconto = (-parseFloat(data.valor));
                            this.vender();
                        }
                    },
                    {
                        text: 'Acrescentar',
                        handler: data => {
                            this.acrescimoDesconto = parseFloat(data.valor);
                            this.vender();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentOperation(isCreditar) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (isCreditar) {
                const alert = yield this.alertController.create({
                    header: "Creditar",
                    inputs: [
                        {
                            name: 'valor',
                            type: 'text',
                            placeholder: 'Insira o valor desejado'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary'
                        },
                        {
                            text: 'Realizar',
                            cssClass: 'secondary',
                            handler: data => {
                                if (!isNaN(data.valor)) {
                                    const aux = this.inventario.dinheiro + parseInt(data.valor);
                                    if (this.isJogador) {
                                        this.inventarioService.updateDinheiro(this.idInventario, aux.toString())
                                            .subscribe(res => {
                                            this.inventario = res;
                                            console.log(res);
                                        });
                                    }
                                    else {
                                        this.inventarioService.updateDinheiroInMesa(aux.toString(), this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                                            .subscribe(res => {
                                            this.inventario = res;
                                            console.log(res);
                                        });
                                    }
                                }
                                else {
                                    this.presentNumberExcpetion();
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    header: "Debitar",
                    inputs: [
                        {
                            name: 'valor',
                            type: 'text',
                            placeholder: 'Insira o valor desejado'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                        },
                        {
                            text: 'Realizar',
                            cssClass: 'secondary',
                            handler: data => {
                                if (!isNaN(data.valor)) {
                                    const aux = this.inventario.dinheiro - parseInt(data.valor);
                                    if (this.isJogador) {
                                        this.inventarioService.updateDinheiro(this.idInventario, aux.toString())
                                            .subscribe(res => {
                                            this.inventario = res;
                                            console.log(res);
                                        });
                                    }
                                    else {
                                        this.inventarioService.updateDinheiroInMesa(aux.toString(), this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                                            .subscribe(res => {
                                            this.inventario = res;
                                            console.log(res);
                                        });
                                    }
                                }
                                else {
                                    this.presentNumberExcpetion();
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    presentNumberExcpetion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "Insira apenas números!<br>EX: 50 - 10.5 - 150 - 1.50",
                header: "Erro",
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
    presentUndfinedExcpetion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "O código inserido, não retornou um item. Certifique-se que é o código certo, você também pode criar um novo item!",
                header: "Erro",
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
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _criacoes_criar_componente_criar_componente_component__WEBPACK_IMPORTED_MODULE_3__["CriarComponenteComponent"],
                componentProps: {
                    'cancelarBTN': true,
                    'menu': false
                }
            });
            return yield modal.present();
        });
    }
    acao() {
    }
    callToast() {
        this.toast.add({
            severity: 'warn',
            summary: 'Em breve',
            detail: 'Funcionalidade ainda não disponível'
        });
    }
};
InventarioComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_4__["CriarItemService"] },
    { type: src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_5__["EquiparItemService"] },
    { type: src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_6__["InventarioService"] },
    { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idInventario'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InventarioComponent.prototype, "idInventario", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isJogador'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InventarioComponent.prototype, "isJogador", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idNpc'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InventarioComponent.prototype, "idNpc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idMesa'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InventarioComponent.prototype, "idMesa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tipoNpc'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InventarioComponent.prototype, "tipoNpc", void 0);
InventarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventario',
        template: __webpack_require__(/*! raw-loader!./inventario.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/inventario/inventario.component.html"),
        styles: [__webpack_require__(/*! ./inventario.component.scss */ "./src/app/components/utils/inventario/inventario.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_4__["CriarItemService"],
        src_app_services_gameplay_equipar_item_service__WEBPACK_IMPORTED_MODULE_5__["EquiparItemService"],
        src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_6__["InventarioService"],
        src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]])
], InventarioComponent);



/***/ }),

/***/ "./src/app/components/utils/inventario/inventario.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/utils/inventario/inventario.module.ts ***!
  \******************************************************************/
/*! exports provided: InventarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioModule", function() { return InventarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventario.component */ "./src/app/components/utils/inventario/inventario.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");







let InventarioModule = class InventarioModule {
};
InventarioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventario_component__WEBPACK_IMPORTED_MODULE_4__["InventarioComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"]
        ],
        bootstrap: [_inventario_component__WEBPACK_IMPORTED_MODULE_4__["InventarioComponent"]],
        exports: [_inventario_component__WEBPACK_IMPORTED_MODULE_4__["InventarioComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], InventarioModule);



/***/ }),

/***/ "./src/app/services/criacoes/criar-item.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/criacoes/criar-item.service.ts ***!
  \*********************************************************/
/*! exports provided: CriarItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarItemService", function() { return CriarItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CriarItemService = class CriarItemService {
};
CriarItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CriarItemService);



/***/ }),

/***/ "./src/app/services/criacoes/item/item.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/criacoes/item/item.service.ts ***!
  \********************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage-service.service */ "./src/app/services/storage-service.service.ts");





let ItemService = class ItemService {
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
    getStaticType() {
        /*
        0 - Ataque;
        1 - Defesa;
        2 - Utilizavel;
        */
        return this.staticType;
    }
    setStaticType(type) {
        /*
        0 - Ataque;
        1 - Defesa;
        2 - Utilizavel;
        */
        this.staticType = type;
    }
    findPageOfAtaque(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/ataque/page`, {
            params,
            observe: 'body',
        });
    }
    findPageOfDefesa(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/defesa/page`, {
            params,
            observe: 'body',
        });
    }
    findPageOfUtilizavel(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/utilizavel/page`, {
            params,
            observe: 'body',
        });
    }
    insertAtaque(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/ataque`, obj, {
            observe: 'response'
        });
    }
    insertDefesa(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/defesa`, obj, {
            observe: 'response'
        });
    }
    insertUtilizavel(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/utilizavel`, obj, {
            observe: 'response'
        });
    }
    findById(idItem, tipoItem) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('tipoItem', tipoItem);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item/${idItem}`, {
            params,
            observe: 'body',
        });
    }
    updateAtaque(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item`, dto);
    }
    updateDefesa(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item`, dto);
    }
    updateUtilizavel(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}item`, dto);
    }
};
ItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], ItemService);



/***/ }),

/***/ "./src/app/services/especializacao/especializacao.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/especializacao/especializacao.service.ts ***!
  \*******************************************************************/
/*! exports provided: EspecializacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecializacaoService", function() { return EspecializacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");




let EspecializacaoService = class EspecializacaoService {
    constructor(http) {
        this.http = http;
    }
    insert(dto, idFicha, idAtributo) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFicha', idFicha)
            .set('idAtributo', idAtributo);
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}especializacao`, dto, {
            params
        });
    }
    setFav(idEspecializacao, fav) {
        console.log(fav);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idEspecializacao', idEspecializacao)
            .set('fav', fav);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}especializacao`, {}, {
            params
        });
    }
    delete(idFicha, idAtributo, idEspecializacao) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFicha', idFicha)
            .set('idAtributo', idAtributo)
            .set('idEspecializacao', idEspecializacao);
        console.log('ficha: ', idFicha, 'atrib: ', idAtributo, 'espec: ', idEspecializacao);
        return this.http.delete(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}especializacao`, {
            params
        });
    }
};
EspecializacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EspecializacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EspecializacaoService);



/***/ }),

/***/ "./src/app/services/fichas/ficha.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/fichas/ficha.service.ts ***!
  \**************************************************/
/*! exports provided: FichaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaService", function() { return FichaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");




let FichaService = class FichaService {
    constructor(http) {
        this.http = http;
        this.ficha = undefined;
        this.isJogador = true;
        this.closeBTN = false;
        this.insert = (dto) => {
            return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}ficha`, dto, {
                responseType: 'json',
            });
        };
    }
    getConfiguration() {
        return {
            ficha: this.ficha,
            isJogador: this.isJogador,
            idNpc: this.idNpc,
            idMesa: this.idMesa,
            tipoNpc: this.tipoNpc,
            closeBTN: this.closeBTN
        };
    }
    setConfiguration(ficha, isJogador, idNpc, idMesa, tipoNpc, closeBTN) {
        this.ficha = ficha;
        this.isJogador = isJogador;
        this.idNpc = idNpc;
        this.idMesa = idMesa;
        this.tipoNpc = tipoNpc;
        this.closeBTN = closeBTN;
    }
    resetConfiguration() {
        this.ficha = undefined;
        this.isJogador = true;
        this.idNpc = undefined;
        this.idMesa = undefined;
        this.tipoNpc = undefined;
        this.closeBTN = false;
    }
    findFichaById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}ficha/${id}`, {
            responseType: 'json',
            observe: "body"
        });
    }
    update(dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}ficha/`, dto);
    }
    updateFichaNpc(dto, idNpc, idMesa) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idNpc', idNpc)
            .set('idMesa', idMesa);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}mesa/update/npc/`, dto, {
            params
        });
    }
    findFichaByMesaAndJogador(idUser, idMesa) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idUser', idUser)
            .set('idMesa', idMesa);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}ficha/mesa`, {
            responseType: 'json',
            observe: "body",
            params
        });
    }
    updateImg(idFicha, urlImg) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFicha', idFicha)
            .set('urlImg', urlImg);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}ficha/imagem`, null, {
            responseType: 'json',
            observe: "body",
            params
        });
    }
    updateImgNpc(idNpc, idMesa, urlImg) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idNpc', idNpc)
            .set('idMesa', idMesa)
            .set('urlImg', urlImg);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}mesa/update/npc/img`, null, {
            responseType: 'json',
            observe: "body",
            params
        });
    }
};
FichaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FichaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FichaService);



/***/ }),

/***/ "./src/app/services/gameplay/equipar-item.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/gameplay/equipar-item.service.ts ***!
  \***********************************************************/
/*! exports provided: EquiparItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquiparItemService", function() { return EquiparItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../criacoes/criar-item.service */ "./src/app/services/criacoes/criar-item.service.ts");




let EquiparItemService = class EquiparItemService {
    constructor(alertController, itemService) {
        this.alertController = alertController;
        this.itemService = itemService;
        this.ataquesEquipados = [];
        this.defesasEquipadas = [];
        //  this.equiparAtaque(itemService.getItemById(1));
    }
    equiparAtaque(newArma) {
        if (this.ataquesEquipados.length == 0) {
            this.ataquesEquipados.push(newArma);
            this.presentMessage(newArma.nome + " equipada com sucesso!");
        }
        else if (this.ataquesEquipados.length == 5) {
            console.log('primeiro if');
            this.presentMessage("Número máximo de itens de ataque equipados atingido. Desequipe algum antes de continuar");
        }
        else {
            this.ataquesEquipados.forEach((arma, index) => {
                console.log('forEach');
                if (arma.id != newArma.id) {
                    console.log('Segundo if');
                    this.ataquesEquipados.push(newArma);
                    this.presentMessage(newArma.nome + " equipada com sucesso!");
                }
                else if (arma.id == newArma.id) {
                    console.log('Terceiro if');
                    this.ataquesEquipados.splice(index, 1);
                    this.presentMessage(newArma.nome + " desequipada com sucesso!");
                }
            });
        }
    }
    desequiparAtaque(newArma) {
        if (this.ataquesEquipados.length == 0) {
            this.presentMessage("Não há itens de ataque equipados!");
        }
        else {
            this.ataquesEquipados.forEach((arma, index) => {
                if (arma.id != newArma.id) {
                    this.presentMessage(arma.nome + " não estava equipada.");
                }
                else if (arma.id == newArma.id) {
                    this.ataquesEquipados.splice(index, 1);
                    this.presentMessage(arma.nome + " desequipada com sucesso!");
                }
            });
        }
    }
    presentMessage(mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: mensagem,
                header: "Sucesso!",
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
};
EquiparItemService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__["CriarItemService"] }
];
EquiparItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__["CriarItemService"]])
], EquiparItemService);



/***/ }),

/***/ "./src/app/services/inventario/inventario.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/inventario/inventario.service.ts ***!
  \***********************************************************/
/*! exports provided: InventarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioService", function() { return InventarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");




let InventarioService = class InventarioService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}inventario/${id}`, {
            responseType: 'json',
            observe: "body"
        });
    }
    update(id, dto) {
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}inventario/${id}`, dto);
    }
    updateDinheiro(id, valor) {
        const p = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('dinheiro', valor);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}inventario/dinheiro/${id}`, {}, { params: p });
    }
    findByIdInMesa(idInventario, idNpc, tipo, idMesa) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idInventario', idInventario)
            .set('idNpc', idNpc)
            .set('tipo', tipo)
            .set('idMesa', idMesa);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}mesa/inventario`, {
            responseType: 'json',
            observe: "body",
            params
        });
    }
    updateInMesa(dto, idInventario, idNpc, tipo, idMesa) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idInventario', idInventario)
            .set('idNpc', idNpc)
            .set('tipo', tipo)
            .set('idMesa', idMesa);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}mesa/inventario`, dto, {
            responseType: 'json',
            observe: "body",
            params
        });
    }
    updateDinheiroInMesa(dinheiro, idInventario, idNpc, tipo, idMesa) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idInventario', idInventario)
            .set('dinheiro', dinheiro)
            .set('idNpc', idNpc)
            .set('tipo', tipo)
            .set('idMesa', idMesa);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}mesa/dinheiro`, null, {
            responseType: 'json',
            observe: "body",
            params
        });
    }
};
InventarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InventarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], InventarioService);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~ficha-ficha-module~gerequipamentos-gerequipamentos-module~gerinimig~dc9172e7-es2015.js.map