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

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo item\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<form [formGroup]=\"formItem\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n  <div class=\"topo\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">Nome</ion-label>\r\n          <ion-input formControlName=\"nome\" type=\"text\" color=\"light\" placeholder=\"EX: Amaterasu\"></ion-input>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.nome.dirty && formItem.controls.nome.errors\" margin-left>\r\n          Preencha\r\n          o nome</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">Descrição</ion-label>\r\n          <ion-textarea formControlName=\"desc\" type=\"text-area\" color=\"light\"\r\n            placeholder=\"EX: Uma espada grande cujo sua lâmina exala o fogo negro, dizem que este fogo não pode ser apagado\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.desc.dirty && formItem.controls.desc.errors\" margin-left>\r\n          Preencha\r\n          a descrição</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label>Tipo de RPG</ion-label>\r\n          <ion-select color=\"light\" formControlName=\"idTipoRPG\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Medieval</ion-select-option>\r\n            <ion-select-option value=\"1\">Cyberpunk</ion-select-option>\r\n            <ion-select-option value=\"2\">Steampunk</ion-select-option>\r\n            <ion-select-option value=\"3\">Horror</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label>Tipo de item</ion-label>\r\n          <ion-select color=\"light\" formControlName=\"idTipoItem\" placeholder=\"Selecione\">\r\n            <ion-select-option value=\"0\">Arma/Ataque</ion-select-option>\r\n            <ion-select-option value=\"1\">Armadura/Defesa</ion-select-option>\r\n            <ion-select-option value=\"2\">Utilizável</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">Peso (kg)</ion-label>\r\n          <ion-input formControlName=\"peso\" type=\"text\" color=\"light\" placeholder=\"EX: 8,5\"></ion-input>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.peso.dirty && formItem.controls.peso.errors\" margin-left>\r\n          Preencha o peso , caso não tenha, coloque 0</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">Valor</ion-label>\r\n          <ion-input formControlName=\"valor\" type=\"text\" color=\"light\" placeholder=\"EX: 1500\"></ion-input>\r\n        </ion-item>\r\n        <p class=\"danger\" *ngIf=\"formItem.controls.valor.dirty && formItem.controls.valor.errors\" margin-left>\r\n          Preencha o valor apenas com números inteiros, caso não tenha, coloque 0</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"dark\">\r\n          <ion-label position=\"floating\">URL da imagem</ion-label>\r\n          <ion-input formControlName=\"urlImg\" type=\"text\" color=\"light\"\r\n            placeholder=\"https://i.pinimg.com/originals/3d/f4/63/3df463b9e3e7fb571eb9a9ec05fd91d5.jpg\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"tertiary\" float-right (click)=\"next(formuItem)\" [disabled]=\"formItem.invalid\">Próximo\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <app-imagem-display [src]=\"this.formItem.get('urlImg').value\"></app-imagem-display>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</form>\r\n\r\n<span [ngSwitch]=\"opcao\">\r\n\r\n  <form *ngSwitchCase=\"0\" [formGroup]=\"formArma\" (ngSubmit)=\"$event.preventDefault()\" #formuArma>\r\n    <ion-button size=\"large\" color=\"tertiary\" (click)=\"back(formuArma)\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <div class=\"topo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Dano</ion-label>\r\n            <ion-input formControlName=\"dano\" type=\"text\" color=\"light\" placeholder=\"EX: 2d20\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.dano.dirty && formArma.controls.dano.errors\" margin-left>\r\n            Preencha\r\n            o conteúdo</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Dano Bônus (+)</ion-label>\r\n            <ion-input formControlName=\"danoBonus\" type=\"text\" color=\"light\" placeholder=\"EX: 5\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.danoBonus.dirty && formArma.controls.danoBonus.errors\" margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Crítico (x)</ion-label>\r\n            <ion-input formControlName=\"critico\" type=\"text\" color=\"light\" placeholder=\"EX: 3\"></ion-input>\r\n            <p class=\"danger\" *ngIf=\"formArma.controls.critico.dirty && formArma.controls.critico.errors\" margin-left>\r\n              Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Distância</ion-label>\r\n            <ion-input formControlName=\"distancia\" type=\"text\" color=\"light\" placeholder=\"EX: 2m\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.distancia.dirty && formArma.controls.distancia.errors\" margin-left>\r\n            Preencha\r\n            o conteúdo</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label>Tipo de arma</ion-label>\r\n            <ion-select formControlName=\"idTipoArma\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Corte</ion-select-option>\r\n              <ion-select-option value=\"1\">Esmagamento</ion-select-option>\r\n              <ion-select-option value=\"2\">Perfuração</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formArma.controls.idTipoArma.dirty && formArma.controls.idTipoArma.errors\"\r\n            margin-left>\r\n            Selecione um!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-button color=\"tertiary\" expand=\"block\" (click)=\"salvarArma()\" [disabled]=\"formArma.invalid\">Salvar</ion-button>\r\n  </form>\r\n\r\n  <form *ngSwitchCase=\"1\" [formGroup]=\"formDefesa\" (ngSubmit)=\"$event.preventDefault()\" #formuDef>\r\n    <ion-button size=\"large\" color=\"tertiary\" (click)=\"back(formuDef)\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <div class=\"topo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Bônus defesa(+)</ion-label>\r\n            <ion-input formControlName=\"defesaBonus\" type=\"text\" color=\"light\" placeholder=\"EX: 4\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formDefesa.controls.defesaBonus.dirty && formDefesa.controls.defesaBonus.errors\"\r\n            margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Bônus destreza(+)</ion-label>\r\n            <ion-input formControlName=\"destrezaBonus\" type=\"text\" color=\"light\" placeholder=\"EX: 0\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formDefesa.controls.destrezaBonus.dirty && formDefesa.controls.destrezaBonus.errors\"\r\n            margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Penalidade(-)</ion-label>\r\n            <ion-input formControlName=\"penalidade\" type=\"text\" color=\"light\" placeholder=\"EX: 1\"></ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formDefesa.controls.penalidade.dirty && formDefesa.controls.penalidade.errors\"\r\n            margin-left>\r\n            Apenas valores inteiros, caso não haja, preencha com 0</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label>Tipo de Defesa</ion-label>\r\n            <ion-select formControlName=\"idTipoDefesa\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Cabeça</ion-select-option>\r\n              <ion-select-option value=\"1\">Tronco</ion-select-option>\r\n              <ion-select-option value=\"2\">Braços</ion-select-option>\r\n              <ion-select-option value=\"3\">Pernas</ion-select-option>\r\n              <ion-select-option value=\"4\">Escudo</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formDefesa.invalid\" (click)=\"salvarDefesa()\">Salvar\r\n    </ion-button>\r\n  </form>\r\n\r\n  <form *ngSwitchCase=\"2\" [formGroup]=\"formUti\" (ngSubmit)=\"$event.preventDefault()\" #formuUti>\r\n    <ion-button size=\"large\" color=\"tertiary\" (click)=\"back(formUti)\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <div class=\"topo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label position=\"floating\">Efeito</ion-label>\r\n            <ion-input formControlName=\"efeito\" type=\"text\" color=\"light\" placeholder=\"EX: Cura os PV em 20\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formUti.controls.efeito.dirty && formUti.controls.efeito.errors\" margin-left>\r\n            Preencha\r\n            o conteúdo</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item color=\"dark\">\r\n            <ion-label>Tipo de utilizável</ion-label>\r\n            <ion-select formControlName=\"idTipoUtilizavel\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"0\">Consumível (elixir, poções e etc)</ion-select-option>\r\n              <ion-select-option value=\"1\">Aplicável (veneno e etc)</ion-select-option>\r\n              <ion-select-option value=\"2\">Equipável (anel, cordão e etc)</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <p class=\"danger\" *ngIf=\"formUti.controls.idTipoUtilizavel.dirty && formUti.controls.idTipoUtilizavel.errors\"\r\n            margin-left>\r\n            Selecione um!</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <ion-button color=\"tertiary\" expand=\"block\" [disabled]=\"formUti.invalid\" (click)=\"salvarUtilizavel()\">Salvar\r\n    </ion-button>\r\n  </form>\r\n\r\n</span>\r\n\r\n<ion-footer *ngIf=\"cancelarBTN\">\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\">Cancelar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ficha/ficha/ficha.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ficha/ficha/ficha.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-over\">\r\n\r\n  <ion-segment color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button value=\"info\">\r\n      <ion-label class=\"icone\">\r\n        <fa-icon [icon]=\"['fas', 'id-card-alt']\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"status\">\r\n      <ion-label class=\"icone\">\r\n        <fa-icon [icon]=\"['fas', 'scroll']\" slot=\"end\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"atributos\">\r\n      <ion-label class=\"icone\">\r\n        <fa-icon [icon]=\"['fab', 'superpowers']\" slot=\"end\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"inventario\">\r\n      <ion-label class=\"icone\">\r\n        <fa-icon [icon]=\"['fas', 'gem']\" slot=\"end\"></fa-icon>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"$event.preventDefault()\">\r\n    <div class=\"p-grid form\">\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'info'\">\r\n        <div class=\"alinhamento p-md-2 p-sm-12 \">Nome</div>\r\n        <div class=\" p-md-4 p-sm-12 \">\r\n          <div class=\" ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Nome\" formControlName=\"nome\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formGroup.controls.nome.dirty && formGroup.controls.nome.errors\" margin-left>\r\n              Preencha ao menos o nome</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Classe</div>\r\n        <div class=\" p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Classe\" formControlName=\"classe\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <div class=\"alinhamento p-md-2 p-sm-12 \">Tendência</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Tendência\" formControlName=\"tedencia\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Raça</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Raça\" formControlName=\"raca\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">História</div>\r\n        <textarea style=\"margin-top: 5px;\" class=\"p-md-10 p-sm-12 \" rows=\"5\" cols=\"30\" pInputTextarea\r\n          [autoResize]=\"true\" formControlName=\"historia\"></textarea>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"p-col\">\r\n          <p-button (click)=\"openLista('vantagens')\" class=\"p-col-4\" label=\"Vantagens\"\r\n            styleClass=\"ui-button-success ui-button-raised ui-button-rounded\"></p-button>\r\n          <p-button (click)=\"openLista('desvantagens')\" class=\"p-col-4\" class=\"btn\" label=\"Desvantagens\"\r\n            styleClass=\"ui-button-danger ui-button-raised ui-button-rounded\"></p-button>\r\n          <p-button (click)=\"openImg()\" class=\"p-col-4\" class=\"btn2\" label=\"Foto\"\r\n            styleClass=\"ui-button-primary ui-button-raised ui-button-rounded\"></p-button>\r\n        </div>\r\n        <div *ngIf=\"forceUpdate\" class=\"alinhamento p-col-12\">\r\n          <h6>Permitir que o jogador edite a ficha</h6>\r\n          <p-radioButton label=\"Sim\" name=\"edit\" [value]=\"true\" [(ngModel)]=\"editavel\"\r\n            [ngModelOptions]=\"{standalone: true}\"></p-radioButton>\r\n          <p-radioButton class=\"espaco\" label=\"Não\" name=\"edit\" [value]=\"false\" [(ngModel)]=\"editavel\"\r\n            [ngModelOptions]=\"{standalone: true}\"></p-radioButton>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'status'\">\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">Nível</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Nível\" formControlName=\"nivel\" type=\"text\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">XP</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"XP\" formControlName=\"xpAtual\" type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/{{ formGroup.get('xpPra').value }}</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o XP\", \"XP\", 0 )'></button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">Karma</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"Karma\" formControlName=\"karma\" type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/100</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o Karma a ser adicionado\", \"Karma\", 1 )'></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-down\" class=\"ui-button-danger\"\r\n              (click)='showDialog(\"Insira o Karma a ser retirado\", \"Karma\", 2 )'></button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Pontos Vitálicos</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"Pontos Vitálicos\" formControlName=\"pvAtual\"\r\n              type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/{{ formGroup.get('pvTotal').value }}</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o PV a ser adicionado\", \"PV\", 3 )'></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-down\" class=\"ui-button-danger\"\r\n              (click)='showDialog(\"Insira o PV a ser retirado\", \"PV\", 4 )'></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12  \">Pontos de Mana</div>\r\n        <div class=\"p-md-4 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input style=\"width: 50%;\" type=\"text\" pInputText placeholder=\"Pontos Vitálicos\" formControlName=\"pmAtual\"\r\n              type=\"text\">\r\n            <span class=\"ui-inputgroup-addon\">/{{ formGroup.get('pmTotal').value }}</span>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-up\" class=\"ui-button-success\"\r\n              (click)='showDialog(\"Insira o PM a ser adicionado\", \"PM\", 5 )'></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-sort-amount-down\" class=\"ui-button-danger\"\r\n              (click)='showDialog(\"Insira o PM a ser retirado\", \"PM\", 6 )'></button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'atributos'\">\r\n        <div class=\"p-col-12\"></div>\r\n\r\n        <p-dataView class=\"p-col-12\" [value]=\"getAtributos()\">\r\n          <p-header>\r\n\r\n            <h3 style=\"align-self: flex-start; text-align: start; color:white\">Lista de Atributos\r\n              <button style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-question-circle\"\r\n                style=\"margin: 0;\"\r\n                (click)=\"callToast('info', 'Lista de especializações', 'Basta clicar em um atributo')\"></button>\r\n            </h3>\r\n\r\n          </p-header>\r\n          <ng-template let-atributo pTemplate=\"listItem\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"atributos-details\" (click)=\"openModal(atributo, $event)\">\r\n                <div style=\"text-align: start;\">\r\n                  <img [src]=\"atributo.imgURL || 'assets/imgs/rpg.png'\">\r\n                  <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12\">Nome: <b>{{atributo.nome}}</b></div>\r\n                    <div class=\"ui-g-12\">Descrição: <b>{{atributo.descricao}}</b></div>\r\n                    <div class=\"ui-g-4 ui-sm-12\">Nivel: <b>{{atributo.nivel}}</b></div>\r\n                    <button id=\"btn1\" class=\"ui-g-4 ui-sm-5 ui-button-success\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-up\"\r\n                      style=\"margin: 0;\" (click)=\"atributoNivel(atributo, true)\"></button>\r\n                    <button id=\"btn2\" class=\"ui-g-4 ui-sm-5 ui-button-danger\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-down\"\r\n                      style=\"margin: 0; margin-left: 5px;\" (click)=\"atributoNivel(atributo, false)\"></button>\r\n                    <div class=\"ui-g-12\"></div>\r\n                    <div class=\"ui-g-4 ui-sm-12\">Bonus: <b>{{atributo.bonus}}</b></div>\r\n                    <button id=\"btn3\" class=\"ui-g-4 ui-sm-5 ui-button-success\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-up\"\r\n                      style=\"margin: 0;\" (click)=\"atributoBonus(atributo, true)\"></button>\r\n                    <button id=\"btn4\" class=\"ui-g-4 ui-sm-5 ui-button-danger\"\r\n                      style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-down\"\r\n                      style=\"margin: 0; margin-left: 5px;\" (click)=\"atributoBonus(atributo, false)\"></button>\r\n                    <div class=\"ui-g-12\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </p-dataView>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"abaAtual == 'inventario'\">\r\n\r\n        <div class=\"p-col-12\">\r\n          <app-inventario [idInventario]=\"idInventario\" [isJogador]=\"isJogador\" [idNpc]=\"idNpc\" [idMesa]=\"idMesa\"\r\n            [tipoNpc]=\"tipoNpc\"></app-inventario>\r\n        </div>\r\n\r\n      </ng-container>\r\n    </div>\r\n\r\n    <p-dialog [visible]=\"display.show\" [modal]=\"true\" [draggable]=\"false\" [focusTrap]=\"true\" [closable]=\"false\">\r\n      <p-header>\r\n        {{ display.titulo }}\r\n      </p-header>\r\n\r\n      <ng-container *ngIf=\"display.status == 'XP' \">\r\n        <p-radioButton name=\"groupname\" value=\"manter\" label=\"Manter o XP em caso de level up\"\r\n          [(ngModel)]=\"selectedValue\" [ngModelOptions]=\"{standalone: true}\">\r\n        </p-radioButton><br><br>\r\n        <p-radioButton name=\"groupname\" value=\"resetar\" label=\"Resetar o XP em caso de level up\"\r\n          [(ngModel)]=\"selectedValue\" [ngModelOptions]=\"{standalone: true}\"></p-radioButton><br>\r\n      </ng-container>\r\n\r\n\r\n      <input style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status\"\r\n        formControlName=\"valorInserido\">\r\n      <p class=\"danger\" *ngIf=\"formGroup.get('valorInserido').invalid\" margin-left>\r\n        Preencha apenas com números inteiros. <br>\r\n        Máximo 8 dígitos.</p>\r\n      <p-footer>\r\n        <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-times-circle\" class=\"ui-button-danger\"\r\n          (click)=\"cancelStatus()\"></button>\r\n        <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-check-circle\" class=\"ui-button-success\"\r\n          [disabled]=\"formGroup.get('valorInserido').invalid\" (click)=\"handleInsercao()\"></button>\r\n      </p-footer>\r\n    </p-dialog>\r\n\r\n\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n<br>\r\n<ion-button class=\"btn btn-round\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"tertiary\" [disabled]=\"canUpdate()\"\r\n  (click)=\"salvar()\">\r\n  Salvar</ion-button>\r\n<ion-button *ngIf=\"closeBTN\" class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"danger\" (click)=\"close()\">\r\n  Fechar</ion-button>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n\r\n\r\n<p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [baseZIndex]=\"5000\">\r\n  <ng-template pTemplate=\"message\">\r\n    <div style=\"text-align: center\">\r\n      <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\r\n      <h4 innerHtml=\"{{ xpOperationMenssage }}\"></h4>\r\n      <h5>Deseja manter assim?</h5>\r\n    </div>\r\n    <div class=\"ui-g ui-fluid\">\r\n      <div class=\"ui-g-6\">\r\n        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Sim\" class=\"ui-button-success\"></button>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <button type=\"button\" pButton (click)=\"onReject()\" label=\"Não\" class=\"ui-button-secondary\"></button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</p-toast>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

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

module.exports = "<ion-content>\r\n  <ion-item color=\"dark\">\r\n    <ion-label position=\"fixed\" style=\"overflow: visible; color:white\">\r\n      Especializações: </ion-label>\r\n  </ion-item>\r\n  <div class=\"especializacao\">\r\n    <ion-list>\r\n      <ion-item-sliding #slide *ngFor=\"let especializacao of especializacoes\">\r\n        <ion-item color=\"dark\">\r\n          <h2 class=\"espec especNome\">{{especializacao.nome}} </h2>\r\n          <p class=\"espec especDesc\">{{especializacao.descricao}}</p>\r\n          <span class=\"fav\" *ngIf=\"especializacao.isFav\">\r\n            <ion-icon slot=\"start\" name=\"star\" color=\"warning\"></ion-icon>\r\n          </span>\r\n        </ion-item>\r\n        <ion-item-options side=\"start\">\r\n          <ion-item-option color=\"primary\" (click)=\"fav(especializacao, slide)\">Favorita</ion-item-option>\r\n        </ion-item-options>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"remov(especializacao)\">Deletar</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" color=\"primary\" (click)=\"addEspec()\">Adicionar</ion-button>\r\n  <ion-button *ngIf=\"closeButton\" class=\"btn\" expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"modalCtrl.dismiss()\">\r\n    Fechar</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/inventario/inventario.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/inventario/inventario.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n\r\n<div style=\"overflow: hidden\" #botoes>\r\n  <ion-button color=\"tertiary\" fill=\"outline\" (click)=\"setList(0, $event.srcElement, botoes.childNodes)\">Ataque\r\n  </ion-button>\r\n  <ion-button color=\"tertiary\" fill=\"solid\" (click)=\"setList(1, $event.srcElement, botoes.childNodes)\">Defesa\r\n  </ion-button>\r\n  <ion-button color=\"tertiary\" fill=\"solid\" (click)=\"setList(2, $event.srcElement, botoes.childNodes)\">Utilizável\r\n  </ion-button>\r\n</div>\r\n\r\n<table>\r\n  <tr>\r\n    <th>Nome</th>\r\n    <th>Valor</th>\r\n    <th>Peso</th>\r\n  </tr>\r\n\r\n  <tr #row class=\"selecionavel\" *ngFor=\"let item of items\" (click)=\"selecionar(item, row)\">\r\n    <td>{{ item.nome }}</td>\r\n    <td>{{ item.valor }}</td>\r\n    <td>{{ item.peso }} kg</td>\r\n  </tr>\r\n\r\n  <tfoot>\r\n    <tr>\r\n      <td class=\"out\"></td>\r\n      <td class=\"out\"></td>\r\n      <td class=\"total\">Peso Total</td>\r\n      <td class=\"total\">{{ peso }} kg</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\r\n<ion-row justify-content-center align-items-center>\r\n  <ion-card class=\"ion-text-center\">\r\n    <img class=\"imagem\" [src]=\"imgTemplate\" alt=\"\" />\r\n    <ion-card-header class=\"ion-justify-content-center\">\r\n      <ion-card-title> {{ itemSelected?.nome }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"color: white\">\r\n      {{ itemSelected?.descricao }}\r\n    </ion-card-content>\r\n    <ion-button *ngIf=\"itemSelected\" expand=\"block\" color=\"light\" (click)=\"detalhar()\">Detalhes</ion-button>\r\n  </ion-card>\r\n</ion-row>\r\n\r\n<ion-item class=\"carteira\">\r\n  <ion-row justify-content-center align-items-center>\r\n    <ion-col ion-align-self-start justify-content-start>\r\n      <!-- <h2 style=\"font: bold\" class=\"gold\">Gold: </h2> -->\r\n      <img class=\"cash\" src=\"assets/imgs/cash.png\" alt=\"Gold\" />\r\n      <p class=\"gold\"> = {{ inventario.dinheiro }}</p>\r\n    </ion-col>\r\n    <ion-col ion-align-self-end justify-content-end>\r\n      <ion-button color=\"light\" fill=\"outline\" float-right (click)=\"presentOperation(false)\">Debitar</ion-button>\r\n      <ion-button color=\"light\" fill=\"outline\" float-right (click)=\"presentOperation(true)\">Creditar</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n<ion-row align-items-start>\r\n  <ion-col>\r\n    <ion-item class=\"selectItem\">\r\n      <ion-label>Tipo de Item</ion-label>\r\n      <ion-select placeholder=\"Selecione\" [value]=\"selectedItem\" (ionChange)=\"setTipoitem($event)\">\r\n        <ion-select-option [value]=\"tipoItem[0].value\">{{ tipoItem[0].template }}</ion-select-option>\r\n        <ion-select-option [value]=\"tipoItem[1].value\">{{ tipoItem[1].template }}</ion-select-option>\r\n        <ion-select-option [value]=\"tipoItem[2].value\">{{ tipoItem[2].template }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-button color=\"tertiary\" (click)=\"presentNewAdicionar()\" [disabled]=\"selectedItem == -1\">Adicionar</ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col>\r\n    <ion-button color=\"tertiary\" (click)=\"remover()\" [disabled]=\"itemSelected == undefined\">Remover</ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col>\r\n    <ion-button color=\"tertiary\" (click)=\"presentVender()\" [disabled]=\"itemSelected == undefined\">Vender</ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col align-self-end>\r\n    <ion-button color=\"tertiary\" right (click)=\"callToast()\" [disabled]=\"false\">Equipar/Usar</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/item-store-ataque/item-store-ataque.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/item-store-ataque/item-store-ataque.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"mudaAba($event)\">\n    <ion-segment-button style=\"max-width: 200px;\" value=\"me\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-star\">\n        Meus\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"max-width: 200px;\" value=\"news\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-globe\">\n        Novidades\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px;\" value=\"search\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-search\">\n        Pesquisar\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid>\n\n    <ng-container *ngIf=\"abaAtual == 'me'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgURL || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"abaAtual == 'news'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"abaAtual == 'search'\">\n      <div id=\"search\">\n        <div class=\"search\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-input color=\"light\" type=\"text\" placeholder=\"Vamos lá, só explorar!\" [(ngModel)]=\"descricao\"\n                  [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"pesquisar()\" clearInput></ion-input>\n                <fa-icon style=\"cursor: pointer;\" [icon]=\"['fas', 'search']\" slot=\"end\" (click)=\"pesquisar()\"></fa-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Preferência</ion-label>\n                <ion-select [(ngModel)]=\"orderBy\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"dataCriacao\">Data de Criação</ion-select-option>\n                  <ion-select-option value=\"nome\">Nome</ion-select-option>\n                  <ion-select-option value=\"descricao\">Descrição</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Ordenação</ion-label>\n                <ion-select [(ngModel)]=\"direction\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"DESC\">Mais novo</ion-select-option>\n                  <ion-select-option value=\"ASC\">Mais antigo</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <div *ngIf=\"flagSearched\" id=\"pesquisado\" class=\"conteudo\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n  </ion-grid>\n</ion-content>\n\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\n\n\n<p-toast position=\"center\" key=\"c\" (onClose)=\"onCancel()\" [baseZIndex]=\"5000\">\n  <ng-template pTemplate=\"message\">\n    <div style=\"text-align: center\">\n      <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\n      <h4 innerHtml=\"{{ xpOperationMenssage }}\"></h4>\n      \n    </div>\n    <div class=\"ui-g ui-fluid\">\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Sim\" class=\"ui-button-success\"></button>\n      </div>\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onReject()\" label=\"Não\" class=\"ui-button-success\"></button>\n      </div>\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onCancel()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n      </div>\n    </div>\n  </ng-template>\n</p-toast>\n\n<ion-footer *ngIf=\"true\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/item-store-defesa/item-store-defesa.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/item-store-defesa/item-store-defesa.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"mudaAba($event)\">\n    <ion-segment-button style=\"max-width: 200px;\" value=\"me\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-star\">\n        Meus\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"max-width: 200px;\" value=\"news\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-globe\">\n        Novidades\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px;\" value=\"search\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-search\">\n        Pesquisar\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid>\n\n    <ng-container *ngIf=\"abaAtual == 'me'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgURL || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"abaAtual == 'news'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"abaAtual == 'search'\">\n      <div id=\"search\">\n        <div class=\"search\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-input color=\"light\" type=\"text\" placeholder=\"Vamos lá, só explorar!\" [(ngModel)]=\"descricao\"\n                  [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"pesquisar()\" clearInput></ion-input>\n                <fa-icon style=\"cursor: pointer;\" [icon]=\"['fas', 'search']\" slot=\"end\" (click)=\"pesquisar()\"></fa-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Preferência</ion-label>\n                <ion-select [(ngModel)]=\"orderBy\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"dataCriacao\">Data de Criação</ion-select-option>\n                  <ion-select-option value=\"nome\">Nome</ion-select-option>\n                  <ion-select-option value=\"descricao\">Descrição</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Ordenação</ion-label>\n                <ion-select [(ngModel)]=\"direction\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"DESC\">Mais novo</ion-select-option>\n                  <ion-select-option value=\"ASC\">Mais antigo</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <div *ngIf=\"flagSearched\" id=\"pesquisado\" class=\"conteudo\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n  </ion-grid>\n</ion-content>\n\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\n\n\n<p-toast position=\"center\" key=\"c\" (onClose)=\"onCancel()\" [baseZIndex]=\"5000\">\n  <ng-template pTemplate=\"message\">\n    <div style=\"text-align: center\">\n      <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\n      <h4 innerHtml=\"{{ xpOperationMenssage }}\"></h4>\n      \n    </div>\n    <div class=\"ui-g ui-fluid\">\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Sim\" class=\"ui-button-success\"></button>\n      </div>\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onReject()\" label=\"Não\" class=\"ui-button-success\"></button>\n      </div>\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onCancel()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n      </div>\n    </div>\n  </ng-template>\n</p-toast>\n\n<ion-footer *ngIf=\"true\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-segment class=\"background-segment\" color=\"tertiary\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"mudaAba($event)\">\n    <ion-segment-button style=\"max-width: 200px;\" value=\"me\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-star\">\n        Meus\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"max-width: 200px;\" value=\"news\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-globe\">\n        Novidades\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px;\" value=\"search\">\n      <ion-label style=\"font-size: 1.5em\" class=\"pi pi-search\">\n        Pesquisar\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid>\n\n    <ng-container *ngIf=\"abaAtual == 'me'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgURL || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"abaAtual == 'news'\">\n      <div id=\"conteudo\" class=\"conteudo\">\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"abaAtual == 'search'\">\n      <div id=\"search\">\n        <div class=\"search\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-input color=\"light\" type=\"text\" placeholder=\"Vamos lá, só explorar!\" [(ngModel)]=\"descricao\"\n                  [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"pesquisar()\" clearInput></ion-input>\n                <fa-icon style=\"cursor: pointer;\" [icon]=\"['fas', 'search']\" slot=\"end\" (click)=\"pesquisar()\"></fa-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Preferência</ion-label>\n                <ion-select [(ngModel)]=\"orderBy\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"dataCriacao\">Data de Criação</ion-select-option>\n                  <ion-select-option value=\"nome\">Nome</ion-select-option>\n                  <ion-select-option value=\"descricao\">Descrição</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\" class=\"ion-align-self-center\">\n              <ion-item color=\"dark\">\n                <ion-label>Ordenação</ion-label>\n                <ion-select [(ngModel)]=\"direction\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option value=\"DESC\">Mais novo</ion-select-option>\n                  <ion-select-option value=\"ASC\">Mais antigo</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <div *ngIf=\"flagSearched\" id=\"pesquisado\" class=\"conteudo\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-align-self-center\" *ngFor=\"let projecao of projecoes\">\n            <ion-card class=\"card\">\n              <img [src]=\"projecao.imgUrl || 'assets/imgs/cultist.png'\" />\n              <ion-card-header>\n                <ion-card-title>{{ projecao.nome || 'Nome não preenchido' }}</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                {{ projecao.descricao.substring(0, 55).concat(\"...\") || 'Descrição não preenchida' }}\n              </ion-card-content>\n              <ion-button expand=\"block\" color=\"tertiary\" (click)=\"showDetail(projecao)\">Detalhes</ion-button>\n              <ion-button expand=\"block\" color=\"success\" (click)=\"useItem(projecao)\">Usar</ion-button>\n            </ion-card>\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p-paginator [rows]=\"linhasPorPagina\" [totalRecords]=\"pageSize\" (onPageChange)=\"paginar($event)\">\n            </p-paginator>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ng-container>\n\n  </ion-grid>\n</ion-content>\n\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\n\n\n<p-toast position=\"center\" key=\"c\" (onClose)=\"onCancel()\" [baseZIndex]=\"5000\">\n  <ng-template pTemplate=\"message\">\n    <div style=\"text-align: center\">\n      <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\n      <h4 innerHtml=\"{{ xpOperationMenssage }}\"></h4>\n      \n    </div>\n    <div class=\"ui-g ui-fluid\">\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Sim\" class=\"ui-button-success\"></button>\n      </div>\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onReject()\" label=\"Não\" class=\"ui-button-success\"></button>\n      </div>\n      <div class=\"ui-g-4\">\n        <button type=\"button\" pButton (click)=\"onCancel()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n      </div>\n    </div>\n  </ng-template>\n</p-toast>\n\n<ion-footer *ngIf=\"true\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/components/criacoes/criar-componente/criar-componente.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-componente/criar-componente.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: black;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1jb21wb25lbnRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcY3JpYXItY29tcG9uZW50ZVxcY3JpYXItY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1jb21wb25lbnRlL2NyaWFyLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvY3JpYXItY29tcG9uZW50ZS9jcmlhci1jb21wb25lbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFuZ2VyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9IiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

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

module.exports = "input {\n  width: 100%;\n}\n\n.form {\n  margin-top: 25px;\n  margin-right: 5%;\n  margin-left: 5%;\n  text-align: end;\n}\n\n.alinhamento {\n  margin-top: 5px;\n}\n\n.nobreak {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  .form {\n    text-align: start;\n  }\n\n  .nobreak {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.danger {\n  font-size: 10px;\n  color: red;\n  margin-top: 10px;\n}\n\n.radio {\n  margin: 5px, 10px;\n}\n\np-orderList .ui-orderlist-controls {\n  display: none !important;\n}\n\n.atributos-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n  color: white;\n}\n\n.atributos-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.atributos-details > div img {\n  margin-right: 14px;\n  width: 90px;\n  height: 90px;\n}\n\n.atributos-details {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n  background-color: #1b1b1b;\n  border-radius: 2px;\n}\n\n.atributos-details:hover {\n  background-color: #254645;\n  cursor: pointer;\n}\n\n.btn {\n  align-self: flex-start;\n}\n\n.btn2 {\n  margin-left: 10px;\n}\n\n.espaco {\n  margin-left: 10px;\n}\n\n.border-over {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436) !important;\n  color: white !important;\n}\n\nion-content {\n  --background: rgb(122, 122, 122) !important;\n}\n\n::ng-deep .ui-dataview {\n  color: white !important;\n}\n\n::ng-deep .ui-dataview-header {\n  background-color: black !important;\n}\n\n::ng-deep .ui-dataview-content {\n  background-color: black !important;\n}\n\n::ng-deep .ui-inputtext {\n  background-color: black !important;\n  color: white !important;\n  text-align: start !important;\n  margin: auto;\n}\n\n.btn-round {\n  --border-radius: 10px;\n}\n\n.icone {\n  font-size: 14px;\n  color: white;\n}\n\n.ui-toast-detail {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWNoYS9maWNoYS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmljaGFcXGZpY2hhXFxmaWNoYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWNoYS9maWNoYS9maWNoYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxpQkFBQTtFQ0VGOztFRENBO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0Usc0JBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBREFBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFLDJDQUFBO0FDR0Y7O0FEQUE7RUFDRSx1QkFBQTtBQ0dGOztBREFBO0VBQ0Usa0NBQUE7QUNHRjs7QURBQTtFQUNFLGtDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNHRjs7QURDQTtFQUNFLHFCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpY2hhL2ZpY2hhL2ZpY2hhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5hbGluaGFtZW50byB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5ub2JyZWFrIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAubm9icmVhayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICBtYXJnaW46IDVweCwgMTBweDtcclxufVxyXG5cclxucC1vcmRlckxpc3QgLnVpLW9yZGVybGlzdC1jb250cm9scyB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xyXG4gIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5hdHJpYnV0b3MtZGV0YWlsczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NDY0NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5idG4yIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmVzcGFjbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItb3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktZGF0YXZpZXctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1pbnB1dHRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDs7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXJvdW5kIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi51aS10b2FzdC1kZXRhaWx7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59IiwiaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmFsaW5oYW1lbnRvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm9icmVhayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0ge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG5cbiAgLm5vYnJlYWsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5kYW5nZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yYWRpbyB7XG4gIG1hcmdpbjogNXB4LCAxMHB4O1xufVxuXG5wLW9yZGVyTGlzdCAudWktb3JkZXJsaXN0LWNvbnRyb2xzIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzID4gZGl2IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XG4gIG1hcmdpbjogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hdHJpYnV0b3MtZGV0YWlsczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTQ2NDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0biB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5idG4yIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5lc3BhY28ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJvcmRlci1vdmVyIHtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktZGF0YXZpZXcge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLWlucHV0dGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5idG4tcm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pY29uZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udWktdG9hc3QtZGV0YWlsIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufSJdfQ== */"

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
        this.xpOperationMenssage = '';
        this.xpRollback = {
            currentXpPra: 0,
            currentXpAtual: 0,
            currentLevel: 0
        };
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
            valorInserido: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
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
        this.loading = true;
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
        this.loading = false;
    }
    inserirXPMantendo(adicionado) {
        this.loading = true;
        const currentXpAtual = Number(this.formGroup.get('xpAtual').value);
        const currentXpPra = Number(this.formGroup.get('xpPra').value);
        const currentLevel = Number(this.formGroup.get('nivel').value);
        this.xpRollback = {
            currentLevel,
            currentXpAtual,
            currentXpPra
        };
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
        this.xpOperationMenssage = `Level aumentado de ${currentLevel} para ${this.formGroup.get('nivel').value}.<br>
    XP Atual em ${this.formGroup.get('xpAtual').value}.<br>
    XP para upar passou de ${currentXpPra} para ${this.formGroup.get('xpAtual').value}`;
        this.loading = false;
        this.confirmar();
    }
    inserirXPRemovendo(adicionado) {
        this.loading = true;
        const currentXpAtual = Number(this.formGroup.get('xpAtual').value);
        const currentXpPra = Number(this.formGroup.get('xpPra').value);
        const currentLevel = Number(this.formGroup.get('nivel').value);
        this.xpRollback = {
            currentLevel,
            currentXpAtual,
            currentXpPra
        };
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
        this.xpOperationMenssage = `Level aumentado de ${currentLevel} para ${this.formGroup.get('nivel').value}.<br>
    XP Atual em ${this.formGroup.get('xpAtual').value}.<br>
    XP para upar passou de ${currentXpPra} para ${this.formGroup.get('xpAtual').value}`;
        this.loading = false;
        this.confirmar();
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
        this.toast.clear();
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
            if (atributo.nivel < 0)
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
    onConfirm() {
        this.toast.clear();
    }
    onReject() {
        const { currentXpAtual, currentXpPra, currentLevel } = this.xpRollback;
        this.formGroup.get('xpAtual').setValue(currentXpAtual);
        this.formGroup.get('xpPra').setValue(currentXpPra);
        this.formGroup.get('nivel').setValue(currentLevel);
        this.toast.clear();
    }
    confirmar() {
        this.toast.clear();
        this.toast.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '' });
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/fesm2015/primeng-radiobutton.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/orderlist */ "./node_modules/primeng/fesm2015/primeng-orderlist.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/especializacoes/especializacoes.component */ "./src/app/components/utils/especializacoes/especializacoes.component.ts");
/* harmony import */ var _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/ataque-armas/ataque-armas.component */ "./src/app/components/utils/ataque-armas/ataque-armas.component.ts");
/* harmony import */ var _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/defesa-armadura/defesa-armadura.component */ "./src/app/components/utils/defesa-armadura/defesa-armadura.component.ts");
/* harmony import */ var _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ficha/ficha.component */ "./src/app/components/ficha/ficha/ficha.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_inventario_inventario_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/inventario/inventario.module */ "./src/app/components/utils/inventario/inventario.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _imagem_imagem_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../imagem/imagem.module */ "./src/app/components/imagem/imagem.module.ts");

























let FichasModule = class FichasModule {
};
FichasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_19__["FichaComponent"], _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_16__["EspecializacoesComponent"], _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_17__["AtaqueArmasComponent"], _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_18__["DefesaArmaduraComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_23__["ListasModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__["CheckboxModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__["RadioButtonModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_12__["OrderListModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_13__["DataViewModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_21__["LoadSpinnerModule"],
            _utils_inventario_inventario_module__WEBPACK_IMPORTED_MODULE_22__["InventarioModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_23__["ListasModule"],
            _imagem_imagem_module__WEBPACK_IMPORTED_MODULE_24__["ImagemModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
        ],
        exports: [
            _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_16__["EspecializacoesComponent"],
            _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_17__["AtaqueArmasComponent"],
            _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_18__["DefesaArmaduraComponent"],
            _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_19__["FichaComponent"],
        ],
        entryComponents: [
            _utils_especializacoes_especializacoes_component__WEBPACK_IMPORTED_MODULE_16__["EspecializacoesComponent"],
            _utils_ataque_armas_ataque_armas_component__WEBPACK_IMPORTED_MODULE_17__["AtaqueArmasComponent"],
            _utils_defesa_armadura_defesa_armadura_component__WEBPACK_IMPORTED_MODULE_18__["DefesaArmaduraComponent"],
            _ficha_ficha_component__WEBPACK_IMPORTED_MODULE_19__["FichaComponent"],
        ],
        providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
            src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_20__["FichaService"],
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

module.exports = ".item {\n  word-wrap: break-word;\n  line-break: normal;\n}\n\n.especNome {\n  display: block;\n  font-weight: bold;\n}\n\n.especDesc {\n  display: block;\n  word-wrap: break-word;\n  border-left: 5px solid var(--ion-color-primary, #3880ff);\n  margin-left: 5px;\n  padding-left: 5px;\n}\n\np {\n  display: !important inline;\n  word-wrap: !important break-word;\n  white-space: !important nowrap;\n}\n\n.fav {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\n.fav ion-icon {\n  padding-top: 1%;\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxlc3BlY2lhbGl6YWNvZXNcXGVzcGVjaWFsaXphY29lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9lc3BlY2lhbGl6YWNvZXMvZXNwZWNpYWxpemFjb2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQ0RKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURLQTtFQUNJLGdDQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL2VzcGVjaWFsaXphY29lcy9lc3BlY2lhbGl6YWNvZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pdGVtIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGxpbmUtYnJlYWs6IG5vcm1hbDtcclxufVxyXG5cclxuLmVzcGVjTm9tZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXNwZWNEZXNjIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZGlzcGxheTogIWltcG9ydGFudCBpbmxpbmU7XHJcbiAgICB3b3JkLXdyYXA6ICFpbXBvcnRhbnQgYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiAhaW1wb3J0YW50IG5vd3JhcDtcclxuICAgIC8vb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4uZmF2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uZmF2IGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbn1cclxuIiwiLml0ZW0ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGxpbmUtYnJlYWs6IG5vcm1hbDtcbn1cblxuLmVzcGVjTm9tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzcGVjRGVzYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6ICFpbXBvcnRhbnQgaW5saW5lO1xuICB3b3JkLXdyYXA6ICFpbXBvcnRhbnQgYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6ICFpbXBvcnRhbnQgbm93cmFwO1xufVxuXG4uZmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmZhdiBpb24taWNvbiB7XG4gIHBhZGRpbmctdG9wOiAxJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcbn0iXX0= */"

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

module.exports = "table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 5px 2px;\n}\n\ntd,\nth {\n  border: 3px solid #523f3f;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #2e1d1d;\n  color: white;\n}\n\np {\n  padding-top: 1%;\n  padding-left: 1%;\n  font-size: 22px;\n}\n\n.gold {\n  display: inline;\n  vertical-align: middle;\n}\n\n.operations {\n  align-self: flex-end;\n}\n\n@media (min-width: 800px) {\n  .imagem {\n    width: 350px;\n    height: 200px;\n  }\n\n  .cash {\n    width: 64px;\n    height: 64px;\n  }\n}\n\n@media (max-width: 799px) {\n  .imagem {\n    width: 250px;\n    height: 150px;\n  }\n\n  .cash {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.selectItem {\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  --background-color: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  color: white;\n  --color: white;\n}\n\n.carteira {\n  border-top: 5px double #898f00;\n  border-bottom: 5px double #898f00;\n  --background-color: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  color: white;\n}\n\ndiv {\n  overflow-y: scroll;\n}\n\n.out {\n  border: none;\n}\n\n.total {\n  background-color: #473501;\n  color: white;\n}\n\nion-card-title {\n  --color: rgb(233, 233, 233);\n  text-align: center;\n}\n\nion-card-subtitle {\n  --color: rgb(233, 233, 233);\n  text-align: center;\n}\n\nion-card-content {\n  --color: rgb(255, 255, 255) !important;\n  text-align: center;\n}\n\nion-card {\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  --background: black;\n}\n\n.selecionavel:hover {\n  cursor: pointer;\n  color: black;\n  background: linear-gradient(60deg, #555453, #4d4c4c, #383536, #211a22);\n}\n\n.selected {\n  color: black;\n  background: linear-gradient(60deg, #9e9e9e, #b9b0b0, #c2a9b1, #cdabd1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pbnZlbnRhcmlvL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1dGlsc1xcaW52ZW50YXJpb1xcaW52ZW50YXJpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTs7RUFFRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDRUY7O0VEQ0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDQ0Y7O0VERUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSx3RUFBQTtFQUNBLDhFQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4RUFBQTtFQUNBLHdFQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzRUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLHNFQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL2ludmVudGFyaW8vaW52ZW50YXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCAycHg7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzUyM2YzZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUxZDFkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5nb2xkIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm9wZXJhdGlvbnMge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuaW1hZ2VtIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FzaCB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3OTlweCkge1xyXG4gIC5pbWFnZW0ge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXNoIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdEl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FydGVpcmEge1xyXG4gIGJvcmRlci10b3A6IDVweCBkb3VibGUgIzg5OGYwMDtcclxuICBib3JkZXItYm90dG9tOiA1cHggZG91YmxlICM4OThmMDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ub3V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3MzUwMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAtLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgLS1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgLS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5zZWxlY2lvbmF2ZWw6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNTU1NDUzLCAjNGQ0YzRjLCAjMzgzNTM2LCAjMjExYTIyKTtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjOWU5ZTllLCAjYjliMGIwLCAjYzJhOWIxLCAjY2RhYmQxKTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4IDJweDtcbn1cblxudGQsXG50aCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM1MjNmM2Y7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5wIHtcbiAgcGFkZGluZy10b3A6IDElO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5nb2xkIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ub3BlcmF0aW9ucyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmltYWdlbSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAuY2FzaCB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzk5cHgpIHtcbiAgLmltYWdlbSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuY2FzaCB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59XG4uc2VsZWN0SXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FydGVpcmEge1xuICBib3JkZXItdG9wOiA1cHggZG91YmxlICM4OThmMDA7XG4gIGJvcmRlci1ib3R0b206IDVweCBkb3VibGUgIzg5OGYwMDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ub3V0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udG90YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDczNTAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgLS1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAtLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnNlbGVjaW9uYXZlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM1NTU0NTMsICM0ZDRjNGMsICMzODM1MzYsICMyMTFhMjIpO1xufVxuXG4uc2VsZWN0ZWQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzllOWU5ZSwgI2I5YjBiMCwgI2MyYTliMSwgI2NkYWJkMSk7XG59Il19 */"

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
/* harmony import */ var _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../present-ataque/present-ataque.component */ "./src/app/components/utils/present-ataque/present-ataque.component.ts");
/* harmony import */ var _present_defesa_present_defesa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../present-defesa/present-defesa.component */ "./src/app/components/utils/present-defesa/present-defesa.component.ts");
/* harmony import */ var _present_utilizavel_present_utilizavel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../present-utilizavel/present-utilizavel.component */ "./src/app/components/utils/present-utilizavel/present-utilizavel.component.ts");
/* harmony import */ var _item_store_ataque_item_store_ataque_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../item-store-ataque/item-store-ataque.component */ "./src/app/components/utils/item-store-ataque/item-store-ataque.component.ts");
/* harmony import */ var _item_store_defesa_item_store_defesa_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../item-store-defesa/item-store-defesa.component */ "./src/app/components/utils/item-store-defesa/item-store-defesa.component.ts");
/* harmony import */ var _item_store_utilizavel_item_store_utilizavel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../item-store-utilizavel/item-store-utilizavel.component */ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.ts");
















let InventarioComponent = class InventarioComponent {
    constructor(modalCtrl, alertController, itemService, equiparService, inventarioService, itensService, toast, modalInterno) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.itemService = itemService;
        this.equiparService = equiparService;
        this.inventarioService = inventarioService;
        this.itensService = itensService;
        this.toast = toast;
        this.modalInterno = modalInterno;
        this.loading = false;
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
    newAdicionar() {
    }
    setTipoitem(event) {
        this.selectedItem = event.detail.value;
    }
    presentNewAdicionar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let component;
            //console.log(this.selectedItem);
            switch (this.selectedItem) {
                case 1: //DEFESA
                    component = _item_store_defesa_item_store_defesa_component__WEBPACK_IMPORTED_MODULE_14__["ItemStoreDefesaComponent"];
                    break;
                case 2: //UTILIZAVEL
                    component = _item_store_utilizavel_item_store_utilizavel_component__WEBPACK_IMPORTED_MODULE_15__["ItemStoreUtilizavelComponent"];
                    break;
                default: //ATAQUE
                    component = _item_store_ataque_item_store_ataque_component__WEBPACK_IMPORTED_MODULE_13__["ItemStoreAtaqueComponent"];
                    break;
            }
            const modal = yield this.modalInterno.create({
                component,
                backdropDismiss: false,
                cssClass: "my-custom-modal-css",
            });
            modal.onWillDismiss()
                .then(data => {
                if (data)
                    this.handleInsercao(data);
            });
            return yield modal.present();
        });
    }
    handleInsercao(obj) {
        this.loading = true;
        const { data } = obj;
        if (data) {
            const { isDebitado, item, valor } = data;
            const { idItem, tipoItem } = item;
            const dinheiro = isDebitado ? (this.inventario.dinheiro - valor) : (this.inventario.dinheiro);
            this.inventarioUP = {
                dinheiro,
                idItem,
                isRemov: false,
                tipoItem
            };
            if (this.isJogador) {
                this.inventarioService.update(this.idInventario, this.inventarioUP)
                    .subscribe(res => {
                    this.inventario = res;
                    this.updateTable();
                    this.getPesoTotal();
                    this.loading = false;
                }, error => {
                    console.log(error);
                    this.loading = false;
                });
            }
            else {
                this.inventarioService.updateInMesa(this.inventarioUP, this.idInventario, this.idNpc, this.tipoNpc, this.idMesa)
                    .subscribe(res => {
                    this.inventario = res;
                    this.updateTable();
                    this.getPesoTotal();
                    this.loading = false;
                }, error => {
                    console.log(error);
                    this.loading = false;
                });
            }
        }
        else {
            this.loading = false;
        }
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
    detalhar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { tipoItem } = this.itemSelected;
            let component;
            switch (tipoItem.toString()) {
                case 'ATAQUE':
                    component = _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_10__["PresentAtaqueComponent"];
                    break;
                case 'DEFESA':
                    component = _present_defesa_present_defesa_component__WEBPACK_IMPORTED_MODULE_11__["PresentDefesaComponent"];
                    break;
                case 'UTILIZAVEL':
                    component = _present_utilizavel_present_utilizavel_component__WEBPACK_IMPORTED_MODULE_12__["PresentUtilizavelComponent"];
                    break;
            }
            const modal = yield this.modalCtrl.create({
                component,
                componentProps: {
                    item: this.itemSelected,
                },
                backdropDismiss: false
            });
            return yield modal.present();
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
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
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
        primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
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
/* harmony import */ var _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../present-ataque/present-ataque.module */ "./src/app/components/utils/present-ataque/present-ataque.module.ts");
/* harmony import */ var _present_defesa_present_defesa_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../present-defesa/present-defesa.module */ "./src/app/components/utils/present-defesa/present-defesa.module.ts");
/* harmony import */ var _present_utilizavel_present_utilizavel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../present-utilizavel/present-utilizavel.module */ "./src/app/components/utils/present-utilizavel/present-utilizavel.module.ts");
/* harmony import */ var _item_store_ataque_item_store_ataque_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../item-store-ataque/item-store-ataque.module */ "./src/app/components/utils/item-store-ataque/item-store-ataque.module.ts");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _item_store_defesa_item_store_defesa_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../item-store-defesa/item-store-defesa.module */ "./src/app/components/utils/item-store-defesa/item-store-defesa.module.ts");
/* harmony import */ var _item_store_utilizavel_item_store_utilizavel_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../item-store-utilizavel/item-store-utilizavel.module */ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.module.ts");














let InventarioModule = class InventarioModule {
};
InventarioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventario_component__WEBPACK_IMPORTED_MODULE_4__["InventarioComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_7__["PresentAtaqueModule"],
            _present_defesa_present_defesa_module__WEBPACK_IMPORTED_MODULE_8__["PresentDefesaModule"],
            _present_utilizavel_present_utilizavel_module__WEBPACK_IMPORTED_MODULE_9__["PresentUtilizavelModule"],
            _item_store_ataque_item_store_ataque_module__WEBPACK_IMPORTED_MODULE_10__["ItemStoreAtaqueModule"],
            _item_store_defesa_item_store_defesa_module__WEBPACK_IMPORTED_MODULE_12__["ItemStoreDefesaModule"],
            _item_store_utilizavel_item_store_utilizavel_module__WEBPACK_IMPORTED_MODULE_13__["ItemStoreUtilizavelModule"],
            _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerModule"]
        ],
        bootstrap: [_inventario_component__WEBPACK_IMPORTED_MODULE_4__["InventarioComponent"]],
        exports: [_inventario_component__WEBPACK_IMPORTED_MODULE_4__["InventarioComponent"]],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
    })
], InventarioModule);



/***/ }),

/***/ "./src/app/components/utils/item-store-ataque/item-store-ataque.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/utils/item-store-ataque/item-store-ataque.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(37, 23, 33, 0.801);\n}\n\n.card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n@-webkit-keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\n::ng-deep .ui-paginator {\n  background-color: #05010500 !important;\n  border: #05010500 !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n.search {\n  max-width: 500px;\n  margin: auto;\n}\n\n.search ion-item {\n  --border-radius: 10px;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLWF0YXF1ZS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXRpbHNcXGl0ZW0tc3RvcmUtYXRhcXVlXFxpdGVtLXN0b3JlLWF0YXF1ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLWF0YXF1ZS9pdGVtLXN0b3JlLWF0YXF1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLGtCQUFBO0VBRUEsd0VBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksMkJBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksMkJBQUE7RUNITjtFREtFO0lBQ0ksNkJBQUE7RUNITjtFREtFO0lBQ0ksMkJBQUE7RUNITjtBQUNGOztBRE5BO0VBQ0k7SUFDSSwyQkFBQTtFQ0hOO0VES0U7SUFDSSw2QkFBQTtFQ0hOO0VES0U7SUFDSSwyQkFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxnQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtBQ0pKOztBRE9BO0VBQ0ksdUJBQUE7QUNKSjs7QURPQTtFQUNJLHVCQUFBO0FDSko7O0FET0E7RUFDSSw4QkFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDSko7O0FES0k7RUFDSSxxQkFBQTtBQ0hSOztBRFFJO0VBQ0ksMkNBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvaXRlbS1zdG9yZS1hdGFxdWUvaXRlbS1zdG9yZS1hdGFxdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1zZWdtZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC44MDEpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRldWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogNXB4IGluc2V0ICMwNTAxMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMywgMzMsIDAuODAxKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcmQgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkZ3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogIzA1MDEwNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktc3RhdGUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iLCIuYmFja2dyb3VuZC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhY2tncm91bmQtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC44MDEpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmJhY2tncm91bmQtc2VnbWVudCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZXVkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIzLCAzMywgMC44MDEpO1xufVxuXG4uY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICBhbmltYXRpb246IGFuaW1hdGVkZ3JhZGllbnQgM3MgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XG59XG5cbi5jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkZ3JhZGllbnQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6ICMwNTAxMDUwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1zdGF0ZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNzA0NGZmICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc2VhcmNoIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/utils/item-store-ataque/item-store-ataque.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/utils/item-store-ataque/item-store-ataque.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemStoreAtaqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreAtaqueComponent", function() { return ItemStoreAtaqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/page/item/item-page.service */ "./src/app/services/page/item/item-page.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../present-ataque/present-ataque.component */ "./src/app/components/utils/present-ataque/present-ataque.component.ts");









let ItemStoreAtaqueComponent = class ItemStoreAtaqueComponent {
    constructor(auth, modal, modalInterno, detalharService, toast, itemService, itemPageService) {
        this.auth = auth;
        this.modal = modal;
        this.modalInterno = modalInterno;
        this.detalharService = detalharService;
        this.toast = toast;
        this.itemService = itemService;
        this.itemPageService = itemPageService;
        this.loading = false;
        this.abaAtual = 'me';
        this.projecoes = [];
        this.pageSize = 0;
        this.linhasPorPagina = 20;
        this.descricao = '';
        this.orderBy = 'dataCriacao';
        this.direction = 'DESC';
        this.flagSearched = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.byMe('0');
    }
    sendOperation(isDebitado = false) {
        const operation = {
            valor: this.selectedItem.valor,
            item: this.selectedItem,
            isDebitado
        };
        this.notifyParent.emit(operation);
        return operation;
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
        else if (value === 'me')
            this.byMe('0');
        else
            this.consultar('0');
    }
    byMe(page) {
        this.loading = true;
        this.itemService.findPageOfAtaque(page, this.linhasPorPagina.toString())
            .subscribe(res => {
            const { content, totalElements } = res;
            this.projecoes = content.map((arr) => this.convertToGenericHall(arr));
            this.pageSize = totalElements;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
        this.loading = false;
    }
    consultar(page) {
        this.loading = true;
        this.itemPageService.findPageByNewerAtaque(page, this.linhasPorPagina.toString())
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
        this.itemPageService.findPageBySearchAtaque(page, this.descricao, this.orderBy, this.direction, this.linhasPorPagina.toString())
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
    paginar(evt) {
        const { page } = evt;
        this.consultar(page.toString());
    }
    useItem(projecao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            const item = yield this.itemService.findById(projecao.id, '0').toPromise();
            this.selectedItem = item;
            this.loading = false;
            this.confirmacao();
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
            this.loading = true;
            const item = yield this.itemService.findById(projecao.id, '0').toPromise();
            this.loading = false;
            const modal = yield this.modalInterno.create({
                component: _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_8__["PresentAtaqueComponent"],
                componentProps: {
                    item,
                    fullPresentation: true,
                },
                backdropDismiss: false
            });
            return yield modal.present();
        });
    }
    convertToGenericHall(item) {
        const { nome, descricao, tipoRPG, imgURL, idItem } = item;
        const genericItem = {
            nome,
            descricao,
            imgURL,
            id: idItem,
        };
        return genericItem;
    }
    close() {
        this.modal.dismiss();
    }
    confirmacao() {
        this.toast.clear();
        this.xpOperationMenssage = `Deseja debitar o valor de <strong>${this.selectedItem.valor}</strong> do inventário? 
    <br>Se você clicar em 'não', o item será adicionado sem qualquer custo`;
        this.toast.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '' });
    }
    onConfirm() {
        this.toast.clear();
        const data = this.sendOperation(true);
        this.modal.dismiss(data);
    }
    onReject() {
        this.toast.clear();
        const data = this.sendOperation(false);
        this.modal.dismiss(data);
    }
    onCancel() {
        this.toast.clear();
    }
};
ItemStoreAtaqueComponent.ctorParameters = () => [
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__["ItemPageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ItemStoreAtaqueComponent.prototype, "notifyParent", void 0);
ItemStoreAtaqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-store-ataque',
        template: __webpack_require__(/*! raw-loader!./item-store-ataque.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/item-store-ataque/item-store-ataque.component.html"),
        styles: [__webpack_require__(/*! ./item-store-ataque.component.scss */ "./src/app/components/utils/item-store-ataque/item-store-ataque.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__["ItemPageService"]])
], ItemStoreAtaqueComponent);



/***/ }),

/***/ "./src/app/components/utils/item-store-ataque/item-store-ataque.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/utils/item-store-ataque/item-store-ataque.module.ts ***!
  \********************************************************************************/
/*! exports provided: ItemStoreAtaqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreAtaqueModule", function() { return ItemStoreAtaqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _item_store_ataque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-store-ataque.component */ "./src/app/components/utils/item-store-ataque/item-store-ataque.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../present-ataque/present-ataque.module */ "./src/app/components/utils/present-ataque/present-ataque.module.ts");
/* harmony import */ var _paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../footer/footer.module */ "./src/app/components/footer/footer.module.ts");














let ItemStoreAtaqueModule = class ItemStoreAtaqueModule {
};
ItemStoreAtaqueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_store_ataque_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreAtaqueComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_9__["PresentAtaqueModule"],
            _paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_10__["PaginacaoModule"],
            _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_8__["PaginatorModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        ],
        exports: [_item_store_ataque_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreAtaqueComponent"]],
        entryComponents: [_item_store_ataque_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreAtaqueComponent"]],
    })
], ItemStoreAtaqueModule);



/***/ }),

/***/ "./src/app/components/utils/item-store-defesa/item-store-defesa.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/utils/item-store-defesa/item-store-defesa.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(37, 23, 33, 0.801);\n}\n\n.card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n@-webkit-keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\n::ng-deep .ui-paginator {\n  background-color: #05010500 !important;\n  border: #05010500 !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n.search {\n  max-width: 500px;\n  margin: auto;\n}\n\n.search ion-item {\n  --border-radius: 10px;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLWRlZmVzYS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXRpbHNcXGl0ZW0tc3RvcmUtZGVmZXNhXFxpdGVtLXN0b3JlLWRlZmVzYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLWRlZmVzYS9pdGVtLXN0b3JlLWRlZmVzYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLGtCQUFBO0VBRUEsd0VBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksMkJBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksMkJBQUE7RUNITjtFREtFO0lBQ0ksNkJBQUE7RUNITjtFREtFO0lBQ0ksMkJBQUE7RUNITjtBQUNGOztBRE5BO0VBQ0k7SUFDSSwyQkFBQTtFQ0hOO0VES0U7SUFDSSw2QkFBQTtFQ0hOO0VES0U7SUFDSSwyQkFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxnQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtBQ0pKOztBRE9BO0VBQ0ksdUJBQUE7QUNKSjs7QURPQTtFQUNJLHVCQUFBO0FDSko7O0FET0E7RUFDSSw4QkFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDSko7O0FES0k7RUFDSSxxQkFBQTtBQ0hSOztBRFFJO0VBQ0ksMkNBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvaXRlbS1zdG9yZS1kZWZlc2EvaXRlbS1zdG9yZS1kZWZlc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1zZWdtZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC44MDEpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRldWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogNXB4IGluc2V0ICMwNTAxMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMywgMzMsIDAuODAxKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRncmFkaWVudCAzcyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcmQgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkZ3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogIzA1MDEwNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktc3RhdGUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iLCIuYmFja2dyb3VuZC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhY2tncm91bmQtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC44MDEpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmJhY2tncm91bmQtc2VnbWVudCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZXVkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIzLCAzMywgMC44MDEpO1xufVxuXG4uY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xuICBhbmltYXRpb246IGFuaW1hdGVkZ3JhZGllbnQgM3MgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XG59XG5cbi5jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkZ3JhZGllbnQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpO1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6ICMwNTAxMDUwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1zdGF0ZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNzA0NGZmICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc2VhcmNoIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/utils/item-store-defesa/item-store-defesa.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/utils/item-store-defesa/item-store-defesa.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemStoreDefesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreDefesaComponent", function() { return ItemStoreDefesaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/page/item/item-page.service */ "./src/app/services/page/item/item-page.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../present-ataque/present-ataque.component */ "./src/app/components/utils/present-ataque/present-ataque.component.ts");









let ItemStoreDefesaComponent = class ItemStoreDefesaComponent {
    constructor(auth, modal, modalInterno, detalharService, toast, itemService, itemPageService) {
        this.auth = auth;
        this.modal = modal;
        this.modalInterno = modalInterno;
        this.detalharService = detalharService;
        this.toast = toast;
        this.itemService = itemService;
        this.itemPageService = itemPageService;
        this.loading = false;
        this.abaAtual = 'me';
        this.projecoes = [];
        this.pageSize = 0;
        this.linhasPorPagina = 20;
        this.descricao = '';
        this.orderBy = 'dataCriacao';
        this.direction = 'DESC';
        this.flagSearched = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.byMe('0');
    }
    sendOperation(isDebitado = false) {
        const operation = {
            valor: this.selectedItem.valor,
            item: this.selectedItem,
            isDebitado
        };
        this.notifyParent.emit(operation);
        return operation;
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
        else if (value === 'me')
            this.byMe('0');
        else
            this.consultar('0');
    }
    byMe(page) {
        this.loading = true;
        this.itemService.findPageOfDefesa(page, this.linhasPorPagina.toString())
            .subscribe(res => {
            const { content, totalElements } = res;
            this.projecoes = content.map((arr) => this.convertToGenericHall(arr));
            this.pageSize = totalElements;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
        this.loading = false;
    }
    consultar(page) {
        this.loading = true;
        this.itemPageService.findPageByNewerDefesa(page, this.linhasPorPagina.toString())
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
        this.itemPageService.findPageBySearchDefesa(page, this.descricao, this.orderBy, this.direction, this.linhasPorPagina.toString())
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
    paginar(evt) {
        const { page } = evt;
        this.consultar(page.toString());
    }
    useItem(projecao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            const item = yield this.itemService.findById(projecao.id, '1').toPromise();
            this.selectedItem = item;
            this.loading = false;
            this.confirmacao();
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
            this.loading = true;
            const item = yield this.itemService.findById(projecao.id, '1').toPromise();
            this.loading = false;
            const modal = yield this.modalInterno.create({
                component: _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_8__["PresentAtaqueComponent"],
                componentProps: {
                    item,
                    fullPresentation: true,
                },
                backdropDismiss: false
            });
            return yield modal.present();
        });
    }
    convertToGenericHall(item) {
        const { nome, descricao, tipoRPG, imgURL, idItem } = item;
        const genericItem = {
            nome,
            descricao,
            imgURL,
            id: idItem,
        };
        return genericItem;
    }
    close() {
        this.modal.dismiss();
    }
    confirmacao() {
        this.toast.clear();
        this.xpOperationMenssage = `Deseja debitar o valor de <strong>${this.selectedItem.valor}</strong> do inventário? 
    <br>Se você clicar em 'não', o item será adicionado sem qualquer custo`;
        this.toast.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '' });
    }
    onConfirm() {
        this.toast.clear();
        const data = this.sendOperation(true);
        this.modal.dismiss(data);
    }
    onReject() {
        this.toast.clear();
        const data = this.sendOperation(false);
        this.modal.dismiss(data);
    }
    onCancel() {
        this.toast.clear();
    }
};
ItemStoreDefesaComponent.ctorParameters = () => [
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__["ItemPageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ItemStoreDefesaComponent.prototype, "notifyParent", void 0);
ItemStoreDefesaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-store-defesa',
        template: __webpack_require__(/*! raw-loader!./item-store-defesa.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/item-store-defesa/item-store-defesa.component.html"),
        styles: [__webpack_require__(/*! ./item-store-defesa.component.scss */ "./src/app/components/utils/item-store-defesa/item-store-defesa.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__["ItemPageService"]])
], ItemStoreDefesaComponent);



/***/ }),

/***/ "./src/app/components/utils/item-store-defesa/item-store-defesa.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/utils/item-store-defesa/item-store-defesa.module.ts ***!
  \********************************************************************************/
/*! exports provided: ItemStoreDefesaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreDefesaModule", function() { return ItemStoreDefesaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _item_store_defesa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-store-defesa.component */ "./src/app/components/utils/item-store-defesa/item-store-defesa.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../present-ataque/present-ataque.module */ "./src/app/components/utils/present-ataque/present-ataque.module.ts");
/* harmony import */ var _paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../footer/footer.module */ "./src/app/components/footer/footer.module.ts");














let ItemStoreDefesaModule = class ItemStoreDefesaModule {
};
ItemStoreDefesaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_store_defesa_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreDefesaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_9__["PresentAtaqueModule"],
            _paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_10__["PaginacaoModule"],
            _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_8__["PaginatorModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        ],
        exports: [_item_store_defesa_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreDefesaComponent"]],
        entryComponents: [_item_store_defesa_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreDefesaComponent"]],
    })
], ItemStoreDefesaModule);



/***/ }),

/***/ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(82, 82, 82, 0.801) !important;\n  max-width: 480px;\n  text-align: center;\n  margin-bottom: 10px;\n  margin: 5px auto;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n\n.conteudo {\n  text-align: center;\n  color: white;\n  border: 5px inset #050105;\n  border-radius: 5px;\n  background-color: rgba(37, 23, 33, 0.801);\n}\n\n.card {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  --color: rgb(226, 226, 226);\n  width: 300px;\n  margin: 0 auto !important;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  -webkit-animation: animatedgradient 3s ease alternate infinite;\n          animation: animatedgradient 3s ease alternate infinite;\n}\n\n.card img {\n  max-width: 300px;\n  max-height: 300px;\n  color: white;\n  padding: 5px 20px;\n  margin: auto;\n}\n\n.card ion-card-title {\n  --color: rgb(226, 226, 226);\n}\n\n@-webkit-keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes animatedgradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\n::ng-deep .ui-paginator {\n  background-color: #05010500 !important;\n  border: #05010500 !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n\n.search {\n  max-width: 500px;\n  margin: auto;\n}\n\n.search ion-item {\n  --border-radius: 10px;\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLXV0aWxpemF2ZWwvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxpdGVtLXN0b3JlLXV0aWxpemF2ZWxcXGl0ZW0tc3RvcmUtdXRpbGl6YXZlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLXV0aWxpemF2ZWwvaXRlbS1zdG9yZS11dGlsaXphdmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0Esa0JBQUE7RUFFQSx3RUFBQTtFQUNBLDhEQUFBO1VBQUEsc0RBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSwyQkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSwyQkFBQTtFQ0hOO0VES0U7SUFDSSw2QkFBQTtFQ0hOO0VES0U7SUFDSSwyQkFBQTtFQ0hOO0FBQ0Y7O0FETkE7RUFDSTtJQUNJLDJCQUFBO0VDSE47RURLRTtJQUNJLDZCQUFBO0VDSE47RURLRTtJQUNJLDJCQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJLGdDQUFBO0FDSko7O0FET0E7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtBQ0pKOztBRE9BO0VBQ0ksdUJBQUE7QUNKSjs7QURPQTtFQUNJLDhCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURLSTtFQUNJLHFCQUFBO0FDSFI7O0FEUUk7RUFDSSwyQ0FBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91dGlscy9pdGVtLXN0b3JlLXV0aWxpemF2ZWwvaXRlbS1zdG9yZS11dGlsaXphdmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc2VnbWVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjgwMSkgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1zZWdtZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1zZWdtZW50IGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZXVkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDVweCBpbnNldCAjMDUwMTA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMjMsIDMzLCAwLjgwMSk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG5cclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGVkZ3JhZGllbnQgM3MgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlZGdyYWRpZW50IHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNTAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICMwNTAxMDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzA0NGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLmJhY2tncm91bmQtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC44MDEpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGV1ZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiA1cHggaW5zZXQgIzA1MDEwNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMywgMzMsIDAuODAxKTtcbn1cblxuLmNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlZGdyYWRpZW50IDNzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xufVxuXG4uY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlZGdyYWRpZW50IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1MDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciAqOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktc3RhdGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzcwNDRmZiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNlYXJjaCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyMiwgMTIyLCAxMjIpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemStoreUtilizavelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreUtilizavelComponent", function() { return ItemStoreUtilizavelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/criacoes/item/item.service */ "./src/app/services/criacoes/item/item.service.ts");
/* harmony import */ var src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/hall/detalhar/detalhar.service */ "./src/app/services/hall/detalhar/detalhar.service.ts");
/* harmony import */ var src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/page/item/item-page.service */ "./src/app/services/page/item/item-page.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../present-ataque/present-ataque.component */ "./src/app/components/utils/present-ataque/present-ataque.component.ts");









let ItemStoreUtilizavelComponent = class ItemStoreUtilizavelComponent {
    constructor(auth, modal, modalInterno, detalharService, toast, itemService, itemPageService) {
        this.auth = auth;
        this.modal = modal;
        this.modalInterno = modalInterno;
        this.detalharService = detalharService;
        this.toast = toast;
        this.itemService = itemService;
        this.itemPageService = itemPageService;
        this.loading = false;
        this.abaAtual = 'me';
        this.projecoes = [];
        this.pageSize = 0;
        this.linhasPorPagina = 20;
        this.descricao = '';
        this.orderBy = 'dataCriacao';
        this.direction = 'DESC';
        this.flagSearched = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.byMe('0');
    }
    sendOperation(isDebitado = false) {
        const operation = {
            valor: this.selectedItem.valor,
            item: this.selectedItem,
            isDebitado
        };
        this.notifyParent.emit(operation);
        return operation;
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
        else if (value === 'me')
            this.byMe('0');
        else
            this.consultar('0');
    }
    byMe(page) {
        this.loading = true;
        this.itemService.findPageOfUtilizavel(page, this.linhasPorPagina.toString())
            .subscribe(res => {
            const { content, totalElements } = res;
            this.projecoes = content.map((arr) => this.convertToGenericHall(arr));
            this.pageSize = totalElements;
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
        this.loading = false;
    }
    consultar(page) {
        this.loading = true;
        this.itemPageService.findPageByNewerUtilizavel(page, this.linhasPorPagina.toString())
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
        this.itemPageService.findPageBySearchUtilizavel(page, this.descricao, this.orderBy, this.direction, this.linhasPorPagina.toString())
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
    paginar(evt) {
        const { page } = evt;
        this.consultar(page.toString());
    }
    useItem(projecao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            const item = yield this.itemService.findById(projecao.id, '2').toPromise();
            this.selectedItem = item;
            this.loading = false;
            this.confirmacao();
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
            this.loading = true;
            const item = yield this.itemService.findById(projecao.id, '2').toPromise();
            this.loading = false;
            const modal = yield this.modalInterno.create({
                component: _present_ataque_present_ataque_component__WEBPACK_IMPORTED_MODULE_8__["PresentAtaqueComponent"],
                componentProps: {
                    item,
                    fullPresentation: true,
                },
                backdropDismiss: false
            });
            return yield modal.present();
        });
    }
    convertToGenericHall(item) {
        const { nome, descricao, tipoRPG, imgURL, idItem } = item;
        const genericItem = {
            nome,
            descricao,
            imgURL,
            id: idItem,
        };
        return genericItem;
    }
    close() {
        this.modal.dismiss();
    }
    confirmacao() {
        this.toast.clear();
        this.xpOperationMenssage = `Deseja debitar o valor de <strong>${this.selectedItem.valor}</strong> do inventário? 
    <br>Se você clicar em 'não', o item será adicionado sem qualquer custo`;
        this.toast.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: '' });
    }
    onConfirm() {
        this.toast.clear();
        const data = this.sendOperation(true);
        this.modal.dismiss(data);
    }
    onReject() {
        this.toast.clear();
        const data = this.sendOperation(false);
        this.modal.dismiss(data);
    }
    onCancel() {
        this.toast.clear();
    }
};
ItemStoreUtilizavelComponent.ctorParameters = () => [
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__["ItemPageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ItemStoreUtilizavelComponent.prototype, "notifyParent", void 0);
ItemStoreUtilizavelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-store-utilizavel',
        template: __webpack_require__(/*! raw-loader!./item-store-utilizavel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.html"),
        styles: [__webpack_require__(/*! ./item-store-utilizavel.component.scss */ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_hall_detalhar_detalhar_service__WEBPACK_IMPORTED_MODULE_5__["DetalharService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        src_app_services_criacoes_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        src_app_services_page_item_item_page_service__WEBPACK_IMPORTED_MODULE_6__["ItemPageService"]])
], ItemStoreUtilizavelComponent);



/***/ }),

/***/ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ItemStoreUtilizavelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreUtilizavelModule", function() { return ItemStoreUtilizavelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _item_store_utilizavel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-store-utilizavel.component */ "./src/app/components/utils/item-store-utilizavel/item-store-utilizavel.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../present-ataque/present-ataque.module */ "./src/app/components/utils/present-ataque/present-ataque.module.ts");
/* harmony import */ var _paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../footer/footer.module */ "./src/app/components/footer/footer.module.ts");














let ItemStoreUtilizavelModule = class ItemStoreUtilizavelModule {
};
ItemStoreUtilizavelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_item_store_utilizavel_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreUtilizavelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _present_ataque_present_ataque_module__WEBPACK_IMPORTED_MODULE_9__["PresentAtaqueModule"],
            _paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_10__["PaginacaoModule"],
            _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LoadSpinnerModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_12__["ImagemDisplayModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_8__["PaginatorModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        ],
        exports: [_item_store_utilizavel_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreUtilizavelComponent"]],
        entryComponents: [_item_store_utilizavel_component__WEBPACK_IMPORTED_MODULE_3__["ItemStoreUtilizavelComponent"]],
    })
], ItemStoreUtilizavelModule);



/***/ }),

/***/ "./src/app/config/rpg.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/rpg.config.ts ***!
  \**************************************/
/*! exports provided: MedievalRPG, CyberpunkRPG, SteampunkRPG, HorrorRPG, tipoRPG, tipoArrayRPG, Arma_Ataque, Armadura_Defesa, Utilizavel, tipoITEM, TipoItem, Corte, Esmagamento, Perfuacao, tipoARMA, Cabeca, Tronco, Bracos, Pernas, Escudo, tipoDEFESA, Consumivel, Aplicavel, Equipavel, tipoUTILIZAVEL, PRINCIPAL, SECUNDARIA, ATIVIDADE, EVENTO, TipoMissao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedievalRPG", function() { return MedievalRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberpunkRPG", function() { return CyberpunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteampunkRPG", function() { return SteampunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorrorRPG", function() { return HorrorRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoRPG", function() { return tipoRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoArrayRPG", function() { return tipoArrayRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arma_Ataque", function() { return Arma_Ataque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armadura_Defesa", function() { return Armadura_Defesa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilizavel", function() { return Utilizavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoITEM", function() { return tipoITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoItem", function() { return TipoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corte", function() { return Corte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Esmagamento", function() { return Esmagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfuacao", function() { return Perfuacao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoARMA", function() { return tipoARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cabeca", function() { return Cabeca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tronco", function() { return Tronco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bracos", function() { return Bracos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pernas", function() { return Pernas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Escudo", function() { return Escudo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoDEFESA", function() { return tipoDEFESA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumivel", function() { return Consumivel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aplicavel", function() { return Aplicavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipavel", function() { return Equipavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoUTILIZAVEL", function() { return tipoUTILIZAVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINCIPAL", function() { return PRINCIPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECUNDARIA", function() { return SECUNDARIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATIVIDADE", function() { return ATIVIDADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTO", function() { return EVENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMissao", function() { return TipoMissao; });
/*TIPOS RPG*/
const MedievalRPG = 0;
const CyberpunkRPG = 1;
const SteampunkRPG = 2;
const HorrorRPG = 3;
const tipoRPG = { MedievalRPG, CyberpunkRPG, SteampunkRPG, HorrorRPG };
const tipoArrayRPG = ['Medieval', 'Cyberpunk', 'Steampunk', 'Horror'];
/*TIPOS ITENS*/
const Arma_Ataque = 0;
const Armadura_Defesa = 1;
const Utilizavel = 2;
const tipoITEM = { Arma_Ataque, Armadura_Defesa, Utilizavel };
const TipoItem = [{
        value: Arma_Ataque,
        template: 'Ataque'
    },
    {
        value: Armadura_Defesa,
        template: 'Defesa'
    },
    {
        value: Utilizavel,
        template: 'Utilizavel'
    }
];
/*TIPOS ARMAS*/
const Corte = 0;
const Esmagamento = 1;
const Perfuacao = 2;
const tipoARMA = { Corte, Esmagamento, Perfuacao };
/*TIPOS DEFESA*/
const Cabeca = 0;
const Tronco = 1;
const Bracos = 2;
const Pernas = 3;
const Escudo = 4;
const tipoDEFESA = { Cabeca, Tronco, Bracos, Pernas, Escudo };
/*TIPOS Utilizavel*/
const Consumivel = 0;
const Aplicavel = 1;
const Equipavel = 2;
const tipoUTILIZAVEL = { Consumivel, Aplicavel, Equipavel };
/*TIPOS MISSAO*/
const PRINCIPAL = 0;
const SECUNDARIA = 1;
const ATIVIDADE = 2;
const EVENTO = 3;
const TipoMissao = [{
        value: PRINCIPAL,
        template: 'Principal'
    },
    {
        value: SECUNDARIA,
        template: 'Secundária'
    },
    {
        value: ATIVIDADE,
        template: 'Atividade'
    },
    {
        value: EVENTO,
        template: 'Evento'
    },
];


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
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
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
        if (this.tipo)
            tipo = this.tipo;
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



/***/ }),

/***/ "./src/app/services/page/item/item-page.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/page/item/item-page.service.ts ***!
  \*********************************************************/
/*! exports provided: ItemPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageService", function() { return ItemPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage-service.service */ "./src/app/services/storage-service.service.ts");





let ItemPageService = class ItemPageService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    findPageByNewerAtaque(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/item/newer/ataque`, {
            params,
            observe: 'body',
        });
    }
    findPageBySearchAtaque(page = '0', descricao, orderBy, direction, linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('descricao', descricao)
            .set('orderBy', orderBy)
            .set('direction', direction)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/item/search/ataque`, {
            params,
            observe: 'body',
        });
    }
    findPageByNewerDefesa(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/item/newer/defesa`, {
            params,
            observe: 'body',
        });
    }
    findPageBySearchDefesa(page = '0', descricao, orderBy, direction, linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('descricao', descricao)
            .set('orderBy', orderBy)
            .set('direction', direction)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/item/search/defesa`, {
            params,
            observe: 'body',
        });
    }
    findPageByNewerUtilizavel(page = '0', linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/item/newer/utilizavel`, {
            params,
            observe: 'body',
        });
    }
    findPageBySearchUtilizavel(page = '0', descricao, orderBy, direction, linesPerPage = '10') {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', page)
            .set('descricao', descricao)
            .set('orderBy', orderBy)
            .set('direction', direction)
            .set('linesPerPage', linesPerPage);
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}page/item/search/utilizavel`, {
            params,
            observe: 'body',
        });
    }
};
ItemPageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
ItemPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], ItemPageService);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~ficha-ficha-module~gerequipamentos-gerequipamentos-module~gerinimig~dc9172e7-es2015.js.map