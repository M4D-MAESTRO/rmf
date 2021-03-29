(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contmesa-contmesa-module"],{

/***/ "./node_modules/primeng/fesm2015/primeng-table.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-table.js ***!
  \********************************************************/
/*! exports provided: CancelEditableRow, CellEditor, ContextMenuRow, EditableColumn, EditableRow, InitEditableRow, ReorderableColumn, ReorderableRow, ReorderableRowHandle, ResizableColumn, RowToggler, SaveEditableRow, ScrollableView, SelectableRow, SelectableRowDblClick, SortIcon, SortableColumn, Table, TableBody, TableCheckbox, TableHeaderCheckbox, TableModule, TableRadioButton, TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelEditableRow", function() { return CancelEditableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellEditor", function() { return CellEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuRow", function() { return ContextMenuRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableColumn", function() { return EditableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableRow", function() { return EditableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitEditableRow", function() { return InitEditableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderableColumn", function() { return ReorderableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderableRow", function() { return ReorderableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderableRowHandle", function() { return ReorderableRowHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableColumn", function() { return ResizableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowToggler", function() { return RowToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveEditableRow", function() { return SaveEditableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableView", function() { return ScrollableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableRow", function() { return SelectableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableRowDblClick", function() { return SelectableRowDblClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIcon", function() { return SortIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableColumn", function() { return SortableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCheckbox", function() { return TableCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderCheckbox", function() { return TableHeaderCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRadioButton", function() { return TableRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm2015/primeng-paginator.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm2015/primeng-utils.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let TableService = class TableService {
    constructor() {
        this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        this.columnsSource$ = this.columnsSource.asObservable();
    }
    onSort(sortMeta) {
        this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
        this.selectionSource.next();
    }
    onContextMenu(data) {
        this.contextMenuSource.next(data);
    }
    onValueChange(value) {
        this.valueSource.next(value);
    }
    onTotalRecordsChange(value) {
        this.totalRecordsSource.next(value);
    }
    onColumnsChange(columns) {
        this.columnsSource.next(columns);
    }
};
TableService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], TableService);
let Table = class Table {
    constructor(el, zone, tableService, cd) {
        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.cd = cd;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuSelectionMode = "separate";
        this.rowTrackBy = (index, item) => item;
        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.editingRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.stateStorage = 'session';
        this.editMode = 'cell';
        this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = [];
        this._totalRecords = 0;
        this._first = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
    }
    ngOnInit() {
        if (this.lazy && this.lazyLoadOnInit) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
            if (this.restoringFilter) {
                this.restoringFilter = false;
            }
        }
        this.initialized = true;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'caption':
                    this.captionTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'body':
                    this.bodyTemplate = item.template;
                    break;
                case 'loadingbody':
                    this.loadingBodyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'summary':
                    this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    this.colGroupTemplate = item.template;
                    break;
                case 'rowexpansion':
                    this.expandedRowTemplate = item.template;
                    break;
                case 'frozenrows':
                    this.frozenRowsTemplate = item.template;
                    break;
                case 'frozenheader':
                    this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    this.frozenColGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
        }
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            if (this.isStateful() && !this.stateRestored) {
                this.restoreState();
            }
            this._value = simpleChange.value.currentValue;
            if (!this.lazy) {
                this.totalRecords = (this._value ? this._value.length : 0);
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
                else if (this.hasFilter()) //sort already filters
                    this._filter();
            }
            if (this.virtualScroll && this.virtualScrollCallback) {
                this.virtualScrollCallback();
            }
            this.tableService.onValueChange(simpleChange.value.currentValue);
        }
        if (simpleChange.columns) {
            this._columns = simpleChange.columns.currentValue;
            this.tableService.onColumnsChange(simpleChange.columns.currentValue);
            if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
                this.restoreColumnOrder();
            }
        }
        if (simpleChange.sortField) {
            this._sortField = simpleChange.sortField.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        }
        if (simpleChange.sortOrder) {
            this._sortOrder = simpleChange.sortOrder.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        }
        if (simpleChange.multiSortMeta) {
            this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        }
        if (simpleChange.selection) {
            this._selection = simpleChange.selection.currentValue;
            if (!this.preventSelectionSetterPropagation) {
                this.updateSelectionKeys();
                this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
    }
    get columns() {
        return this._columns;
    }
    set columns(cols) {
        this._columns = cols;
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
    }
    get rows() {
        return this._rows;
    }
    set rows(val) {
        this._rows = val;
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.tableService.onTotalRecordsChange(this._totalRecords);
    }
    get sortField() {
        return this._sortField;
    }
    set sortField(val) {
        this._sortField = val;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(val) {
        this._sortOrder = val;
    }
    get multiSortMeta() {
        return this._multiSortMeta;
    }
    set multiSortMeta(val) {
        this._multiSortMeta = val;
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
    }
    updateSelectionKeys() {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (let data of this._selection) {
                    this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this._selection, this.dataKey))] = 1;
            }
        }
    }
    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.firstChange.emit(this.first);
        this.rowsChange.emit(this.rows);
        this.tableService.onValueChange(this.value);
        if (this.isStateful()) {
            this.saveState();
        }
        this.anchorRowIndex = null;
    }
    sort(event) {
        let originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
            if (this.resetPageOnSort) {
                this.first = 0;
                this.firstChange.emit(this.first);
            }
        }
        if (this.sortMode === 'multiple') {
            let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            let sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                }
                this._multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
        if (this.isStateful()) {
            this.saveState();
        }
        this.anchorRowIndex = null;
    }
    sortSingle() {
        if (this.sortField && this.sortOrder) {
            if (this.restoringSort) {
                this.restoringSort = false;
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        field: this.sortField,
                        order: this.sortOrder
                    });
                }
                else {
                    this.value.sort((data1, data2) => {
                        let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, this.sortField);
                        let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, this.sortField);
                        let result = null;
                        if (value1 == null && value2 != null)
                            result = -1;
                        else if (value1 != null && value2 == null)
                            result = 1;
                        else if (value1 == null && value2 == null)
                            result = 0;
                        else if (typeof value1 === 'string' && typeof value2 === 'string')
                            result = value1.localeCompare(value2);
                        else
                            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                        return (this.sortOrder * result);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            let sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
        }
    }
    sortMultiple() {
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        multiSortMeta: this.multiSortMeta
                    });
                }
                else {
                    this.value.sort((data1, data2) => {
                        return this.multisortField(data1, data2, this.multiSortMeta, 0);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
        }
    }
    multisortField(data1, data2, multiSortMeta, index) {
        let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, multiSortMeta[index].field);
        let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, multiSortMeta[index].field);
        let result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    }
    getSortMeta(field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (let i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    }
    isSorted(field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            let sorted = false;
            if (this.multiSortMeta) {
                for (let i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    }
    handleRowClick(event) {
        let target = event.originalEvent.target;
        let targetNode = target.nodeName;
        let parentNode = target.parentElement && target.parentElement.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
            parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
            (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.originalEvent.target, 'ui-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
                if (this.rangeRowIndex != null) {
                    this.clearSelectionRange(event.originalEvent);
                }
                this.rangeRowIndex = event.rowIndex;
                this.selectRange(event.originalEvent, event.rowIndex);
            }
            else {
                let rowData = event.rowData;
                let selected = this.isSelected(rowData);
                let metaSelection = this.rowTouched ? false : this.metaKeySelection;
                let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                if (metaSelection) {
                    let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter((val, i) => i != selectionIndex);
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this._selection = rowData;
                            this.selectionChange.emit(rowData);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            if (metaKey) {
                                this._selection = this.selection || [];
                            }
                            else {
                                this._selection = [];
                                this.selectionKeys = {};
                            }
                            this._selection = [...this.selection, rowData];
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                    }
                }
                else {
                    if (this.selectionMode === 'single') {
                        if (selected) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        }
                        else {
                            this._selection = rowData;
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    else if (this.selectionMode === 'multiple') {
                        if (selected) {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter((val, i) => i != selectionIndex);
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
            if (this.isStateful()) {
                this.saveState();
            }
        }
        this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
        this.rowTouched = true;
    }
    handleRowRightClick(event) {
        if (this.contextMenu) {
            const rowData = event.rowData;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = rowData;
                this.contextMenuSelectionChange.emit(rowData);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: rowData, index: event.rowIndex });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(rowData);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                let selected = this.isSelected(rowData);
                let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
                if (!selected) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = rowData;
                        this.selectionChange.emit(rowData);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        this.selection = [rowData];
                        this.selectionChange.emit(this.selection);
                    }
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                this.contextMenu.show(event.originalEvent);
                this.onContextMenuSelect.emit({ originalEvent: event, data: rowData, index: event.rowIndex });
            }
        }
    }
    selectRange(event, rowIndex) {
        let rangeStart, rangeEnd;
        if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
        }
        else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
        }
        if (this.lazy && this.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
            if (!this.isSelected(rangeRowData)) {
                this._selection = [...this.selection, rangeRowData];
                let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, this.dataKey)) : null;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
                this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            }
        }
        this.selectionChange.emit(this.selection);
    }
    clearSelectionRange(event) {
        let rangeStart, rangeEnd;
        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = this.value[i];
            let selectionIndex = this.findIndexInSelection(rangeRowData);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, this.dataKey)) : null;
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
            this.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        }
    }
    isSelected(rowData) {
        if (rowData && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(rowData) > -1;
                else
                    return this.equals(rowData, this.selection);
            }
        }
        return false;
    }
    findIndexInSelection(rowData) {
        let index = -1;
        if (this.selection && this.selection.length) {
            for (let i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    toggleRowWithRadio(event, rowData) {
        this.preventSelectionSetterPropagation = true;
        if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
            if (this.dataKey) {
                this.selectionKeys = {};
                this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] = 1;
            }
        }
        else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
            this.saveState();
        }
    }
    toggleRowWithCheckbox(event, rowData) {
        this.selection = this.selection || [];
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
        this.preventSelectionSetterPropagation = true;
        if (selected) {
            let selectionIndex = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
            this.saveState();
        }
    }
    toggleRowsWithCheckbox(event, check) {
        this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
        if (this.isStateful()) {
            this.saveState();
        }
    }
    equals(data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(data1, data2, this.dataKey);
    }
    filter(value, field, matchMode) {
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this.filterTimeout = setTimeout(() => {
            this._filter();
            this.filterTimeout = null;
        }, this.filterDelay);
        this.anchorRowIndex = null;
    }
    filterGlobal(value, matchMode) {
        this.filter(value, 'global', matchMode);
    }
    isFilterBlank(filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    }
    _filter() {
        if (!this.restoringFilter) {
            this.first = 0;
            this.firstChange.emit(this.first);
        }
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredValue = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                let globalFilterFieldsArray;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredValue = [];
                for (let i = 0; i < this.value.length; i++) {
                    let localMatch = true;
                    let globalMatch = false;
                    let localFiltered = false;
                    for (let prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            localFiltered = true;
                            let filterMeta = this.filters[prop];
                            let filterField = prop;
                            let filterValue = filterMeta.value;
                            let filterMatchMode = filterMeta.matchMode || 'startsWith';
                            let dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], filterField);
                            let filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue)) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                            let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            globalMatch = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value);
                            if (globalMatch) {
                                break;
                            }
                        }
                    }
                    let matches;
                    if (this.filters['global']) {
                        matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                    }
                    else {
                        matches = localFiltered && localMatch;
                    }
                    if (matches) {
                        this.filteredValue.push(this.value[i]);
                    }
                }
                if (this.filteredValue.length === this.value.length) {
                    this.filteredValue = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
        });
        this.tableService.onValueChange(this.value);
        if (this.isStateful() && !this.restoringFilter) {
            this.saveState();
        }
        if (this.restoringFilter) {
            this.restoringFilter = false;
        }
        this.cd.detectChanges();
    }
    hasFilter() {
        let empty = true;
        for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    }
    reset() {
        this._sortField = null;
        this._sortOrder = this.defaultSortOrder;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredValue = null;
        this.filters = {};
        this.first = 0;
        this.firstChange.emit(this.first);
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = (this._value ? this._value.length : 0);
        }
    }
    exportCSV(options) {
        let data = this.filteredValue || this.value;
        let csv = '';
        if (options && options.selectionOnly) {
            data = this.selection || [];
        }
        //headers
        for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            if (column.exportable !== false && column.field) {
                csv += '"' + (column.header || column.field) + '"';
                if (i < (this.columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach((record, i) => {
            csv += '\n';
            for (let i = 0; i < this.columns.length; i++) {
                let column = this.columns[i];
                if (column.exportable !== false && column.field) {
                    let cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(record, column.field);
                    if (cellData != null) {
                        if (this.exportFunction) {
                            cellData = this.exportFunction({
                                data: cellData,
                                field: column.field
                            });
                        }
                        else
                            cellData = String(cellData).replace(/"/g, '""');
                    }
                    else
                        cellData = '';
                    csv += '"' + cellData + '"';
                    if (i < (this.columns.length - 1)) {
                        csv += this.csvSeparator;
                    }
                }
            }
        });
        let blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            let link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    }
    updateEditingCell(cell, data, field) {
        this.editingCell = cell;
        this.editingCellData = data;
        this.editingCellField = field;
        this.bindDocumentEditListener();
    }
    isEditingCellValid() {
        return (this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
    }
    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = (event) => {
                if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.editingCell, 'ui-editing-cell');
                    this.editingCell = null;
                    this.onEditComplete.emit({ field: this.editingCellField, data: this.editingCellData, originalEvent: event });
                    this.editingCellField = null;
                    this.editingCellData = null;
                    this.unbindDocumentEditListener();
                }
                this.editingCellClick = false;
            };
            document.addEventListener('click', this.documentEditListener);
        }
    }
    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    }
    initRowEdit(rowData) {
        let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
        this.editingRowKeys[dataKeyValue] = true;
    }
    saveRowEdit(rowData, rowElement) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
        }
    }
    cancelRowEdit(rowData) {
        let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
        delete this.editingRowKeys[dataKeyValue];
    }
    toggleRow(rowData, event) {
        if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
        }
        let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
        if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
                originalEvent: event,
                data: rowData
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRowKeys = {};
            }
            this.expandedRowKeys[dataKeyValue] = true;
            this.onRowExpand.emit({
                originalEvent: event,
                data: rowData
            });
        }
        if (event) {
            event.preventDefault();
        }
        if (this.isStateful()) {
            this.saveState();
        }
    }
    isRowExpanded(rowData) {
        return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
    }
    isRowEditing(rowData) {
        return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
    }
    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }
    onColumnResizeBegin(event) {
        let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
        event.preventDefault();
    }
    onColumnResize(event) {
        let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    }
    onColumnResizeEnd(event, column) {
        let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        let columnWidth = column.offsetWidth;
        let minWidth = parseInt(column.style.minWidth || 15);
        if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
        }
        const newColumnWidth = columnWidth + delta;
        if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
                let nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    let nextColumnWidth = nextColumn.offsetWidth - delta;
                    let nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            let scrollableView = this.findParentScrollableView(column);
                            let scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-body-table');
                            let scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
                            let scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
                            let resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (newColumnWidth > minWidth) {
                    if (this.scrollable) {
                        this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                    }
                    else {
                        this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                        column.style.width = newColumnWidth + 'px';
                        let containerWidth = this.tableViewChild.nativeElement.style.width;
                        this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                    }
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
            if (this.isStateful()) {
                this.saveState();
            }
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
    }
    setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta) {
        let scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
        let scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
        let scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-header');
        let scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-footer');
        let scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableBody, 'table.ui-table-scrollable-body-table');
        let scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableHeader, 'table.ui-table-scrollable-header-table');
        let scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableFooter, 'table.ui-table-scrollable-footer-table');
        const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
        const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
        const isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
        let setWidth = (container, table, width, isContainerInViewport) => {
            if (container && table) {
                container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                table.style.width = width + 'px';
            }
        };
        setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
        setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
        setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
        if (column) {
            let resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        }
    }
    findParentScrollableView(column) {
        if (column) {
            let parent = column.parentElement;
            while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(parent, 'ui-table-scrollable-view')) {
                parent = parent.parentElement;
            }
            return parent;
        }
        else {
            return null;
        }
    }
    resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                let col = colGroup.children[resizeColumnIndex];
                let nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    }
    onColumnDragStart(event, columnElement) {
        this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onColumnDragEnter(event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            let dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
                let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropHeader, 'preorderablecolumn');
                let targetLeft = dropHeaderOffset.left - containerOffset.left;
                let targetTop = containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                if ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dropIndex - dragIndex === -1 && this.dropPosition === 1)) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
                }
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }
    onColumnDragLeave(event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    }
    onColumnDrop(event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropColumn, 'preorderablecolumn');
            let allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop && ((dropIndex < dragIndex && this.dropPosition === 1))) {
                dropIndex = dropIndex + 1;
            }
            if (allowDrop && ((dropIndex > dragIndex && this.dropPosition === -1))) {
                dropIndex = dropIndex - 1;
            }
            if (allowDrop) {
                primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
                if (this.isStateful()) {
                    this.saveState();
                }
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    onRowDragStart(event, index) {
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onRowDragOver(event, index, rowElement) {
        if (this.rowDragging && this.draggedRowIndex !== index) {
            let rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWindowScrollTop();
            let pageY = event.pageY;
            let rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(rowElement) / 2;
            let prevRowElement = rowElement.previousElementSibling;
            if (pageY < rowMidY) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
                this.droppedRowIndex = index;
                if (prevRowElement)
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(prevRowElement, 'ui-table-dragpoint-bottom');
                else
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
            }
            else {
                if (prevRowElement)
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
                else
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
                this.droppedRowIndex = index + 1;
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-bottom');
            }
        }
    }
    onRowDragLeave(event, rowElement) {
        let prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-top');
    }
    onRowDragEnd(event) {
        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
    }
    onRowDrop(event, rowElement) {
        if (this.droppedRowIndex != null) {
            let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
                dragIndex: this.draggedRowIndex,
                dropIndex: dropIndex
            });
        }
        //cleanup
        this.onRowDragLeave(event, rowElement);
        this.onRowDragEnd(event);
    }
    handleVirtualScroll(event) {
        this.first = (event.page - 1) * this.rows;
        this.firstChange.emit(this.first);
        this.virtualScrollCallback = event.callback;
        this.zone.run(() => {
            if (this.virtualScrollTimer) {
                clearTimeout(this.virtualScrollTimer);
            }
            this.virtualScrollTimer = setTimeout(() => {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }, this.virtualScrollDelay);
        });
    }
    isEmpty() {
        let data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    getStorage() {
        switch (this.stateStorage) {
            case 'local':
                return window.localStorage;
            case 'session':
                return window.sessionStorage;
            default:
                throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    }
    isStateful() {
        return this.stateKey != null;
    }
    saveState() {
        const storage = this.getStorage();
        let state = {};
        if (this.paginator) {
            state.first = this.first;
            state.rows = this.rows;
        }
        if (this.sortField) {
            state.sortField = this.sortField;
            state.sortOrder = this.sortOrder;
        }
        if (this.multiSortMeta) {
            state.multiSortMeta = this.multiSortMeta;
        }
        if (this.hasFilter()) {
            state.filters = this.filters;
        }
        if (this.resizableColumns) {
            this.saveColumnWidths(state);
        }
        if (this.reorderableColumns) {
            this.saveColumnOrder(state);
        }
        if (this.selection) {
            state.selection = this.selection;
        }
        if (Object.keys(this.expandedRowKeys).length) {
            state.expandedRowKeys = this.expandedRowKeys;
        }
        if (Object.keys(state).length) {
            storage.setItem(this.stateKey, JSON.stringify(state));
        }
        this.onStateSave.emit(state);
    }
    clearState() {
        const storage = this.getStorage();
        if (this.stateKey) {
            storage.removeItem(this.stateKey);
        }
    }
    restoreState() {
        const storage = this.getStorage();
        const stateString = storage.getItem(this.stateKey);
        if (stateString) {
            let state = JSON.parse(stateString);
            if (this.paginator) {
                this.first = state.first;
                this.rows = state.rows;
                this.firstChange.emit(this.first);
                this.rowsChange.emit(this.rows);
            }
            if (state.sortField) {
                this.restoringSort = true;
                this._sortField = state.sortField;
                this._sortOrder = state.sortOrder;
            }
            if (state.multiSortMeta) {
                this.restoringSort = true;
                this._multiSortMeta = state.multiSortMeta;
            }
            if (state.filters) {
                this.restoringFilter = true;
                this.filters = state.filters;
            }
            if (this.resizableColumns) {
                this.columnWidthsState = state.columnWidths;
                this.tableWidthState = state.tableWidth;
            }
            if (state.expandedRowKeys) {
                this.expandedRowKeys = state.expandedRowKeys;
            }
            if (state.selection) {
                Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
            }
            this.stateRestored = true;
            this.onStateRestore.emit(state);
        }
    }
    saveColumnWidths(state) {
        let widths = [];
        let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
        headers.map(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(header)));
        state.columnWidths = widths.join(',');
        if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table').style.width :
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.tableViewChild.nativeElement) + 'px';
        }
    }
    restoreColumnWidths() {
        if (this.columnWidthsState) {
            let widths = this.columnWidthsState.split(',');
            if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                if (this.scrollable) {
                    this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                    this.containerViewChild.nativeElement.style.width = this.tableWidthState;
                }
            }
            if (this.scrollable) {
                let headerCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table > colgroup > col');
                let bodyCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-body-table > colgroup > col');
                headerCols.map((col, index) => col.style.width = widths[index] + 'px');
                bodyCols.map((col, index) => col.style.width = widths[index] + 'px');
            }
            else {
                let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.tableViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
                headers.map((header, index) => header.style.width = widths[index] + 'px');
            }
        }
    }
    saveColumnOrder(state) {
        if (this.columns) {
            let columnOrder = [];
            this.columns.map(column => {
                columnOrder.push(column.field || column.key);
            });
            state.columnOrder = columnOrder;
        }
    }
    restoreColumnOrder() {
        const storage = this.getStorage();
        const stateString = storage.getItem(this.stateKey);
        if (stateString) {
            let state = JSON.parse(stateString);
            let columnOrder = state.columnOrder;
            if (columnOrder) {
                let reorderedColumns = [];
                columnOrder.map(key => reorderedColumns.push(this.findColumnByKey(key)));
                this.columnOrderStateRestored = true;
                this.columns = reorderedColumns;
            }
        }
    }
    findColumnByKey(key) {
        if (this.columns) {
            for (let col of this.columns) {
                if (col.key === key || col.field === key)
                    return col;
                else
                    continue;
            }
        }
        else {
            return null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.initialized = null;
    }
};
Table.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: TableService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "frozenColumns", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "frozenValue", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "tableStyle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "tableStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "pageLinks", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "rowsPerPageOptions", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "alwaysShowPaginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "paginatorPosition", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "paginatorDropdownAppendTo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "paginatorDropdownScrollHeight", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "currentPageReportTemplate", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "showCurrentPageReport", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "defaultSortOrder", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "sortMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "resetPageOnSort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "selectionMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "selectionChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "contextMenuSelection", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "contextMenuSelectionChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "contextMenuSelectionMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "dataKey", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "metaKeySelection", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "rowTrackBy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "lazy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "lazyLoadOnInit", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "compareSelectionBy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "csvSeparator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "exportFilename", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "filters", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "globalFilterFields", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "filterDelay", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "expandedRowKeys", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "editingRowKeys", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "rowExpandMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "scrollable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "scrollHeight", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "virtualScroll", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "virtualScrollDelay", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "virtualRowHeight", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "frozenWidth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "responsive", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "contextMenu", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "resizableColumns", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "columnResizeMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "reorderableColumns", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "loading", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "loadingIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "showLoader", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "rowHover", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "customSort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "autoLayout", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "exportFunction", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "stateKey", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "stateStorage", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "editMode", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onRowSelect", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onRowUnselect", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onPage", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onSort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onFilter", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onLazyLoad", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onRowExpand", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onRowCollapse", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onContextMenuSelect", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onColResize", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onColReorder", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onRowReorder", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onEditInit", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onEditComplete", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onEditCancel", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onHeaderCheckboxToggle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "sortFunction", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "firstChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "rowsChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onStateSave", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Table.prototype, "onStateRestore", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { static: false })
], Table.prototype, "containerViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizeHelper', { static: false })
], Table.prototype, "resizeHelperViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderIndicatorUp', { static: false })
], Table.prototype, "reorderIndicatorUpViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderIndicatorDown', { static: false })
], Table.prototype, "reorderIndicatorDownViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table', { static: false })
], Table.prototype, "tableViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])
], Table.prototype, "templates", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "value", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "columns", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "first", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "rows", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "totalRecords", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "sortField", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "sortOrder", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "multiSortMeta", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Table.prototype, "selection", null);
Table = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-table',
        template: `
        <div #container [ngStyle]="style" [class]="styleClass"
            [ngClass]="{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,
                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),
                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout}">
            <div class="ui-table-loading ui-widget-overlay" *ngIf="loading && showLoader"></div>
            <div class="ui-table-loading-content" *ngIf="loading && showLoader">
                <i [class]="'ui-table-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <div *ngIf="captionTemplate" class="ui-table-caption ui-widget-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-top" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate" [showCurrentPageReport]="showCurrentPageReport"></p-paginator>
            
            <div class="ui-table-wrapper" *ngIf="!scrollable">
                <table role="grid" #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="ui-table-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: {$implicit: columns}"></ng-container>
                    </thead>
                    <tbody class="ui-table-tbody" [pTableBody]="columns" [pTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot *ngIf="footerTemplate" class="ui-table-tfoot">
                        <ng-container *ngTemplateOutlet="footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="ui-table-scrollable-wrapper" *ngIf="scrollable">
               <div class="ui-table-scrollable-view ui-table-frozen-view" *ngIf="frozenColumns||frozenBodyTemplate" [pScrollableView]="frozenColumns" [frozen]="true" [ngStyle]="{width: frozenWidth}" [scrollHeight]="scrollHeight"></div>
               <div class="ui-table-scrollable-view" [pScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}"></div>
            </div>
            
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-bottom" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate" [showCurrentPageReport]="showCurrentPageReport"></p-paginator>
            
                <div *ngIf="summaryTemplate" class="ui-table-summary ui-widget-header">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="ui-column-resizer-helper ui-state-highlight" style="display:none" *ngIf="resizableColumns"></div>

            <span #reorderIndicatorUp class="pi pi-arrow-down ui-table-reorder-indicator-up" style="display:none" *ngIf="reorderableColumns"></span>
            <span #reorderIndicatorDown class="pi pi-arrow-up ui-table-reorder-indicator-down" style="display:none" *ngIf="reorderableColumns"></span>
        </div>
    `,
        providers: [TableService]
    })
], Table);
let TableBody = class TableBody {
    constructor(dt) {
        this.dt = dt;
    }
};
TableBody.ctorParameters = () => [
    { type: Table }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pTableBody")
], TableBody.prototype, "columns", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pTableBodyTemplate")
], TableBody.prototype, "template", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableBody.prototype, "frozen", void 0);
TableBody = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: '[pTableBody]',
        template: `
        <ng-container *ngIf="!dt.expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}"></ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}"></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty()">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}"></ng-container>
        </ng-container>
    `
    })
], TableBody);
let ScrollableView = class ScrollableView {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadingArray = [];
        this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.alignScrollBar();
                    if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                        this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                    }
                }, 50);
            });
        });
        if (this.dt.virtualScroll) {
            this.totalRecordsSubscription = this.dt.tableService.totalRecordsSource$.subscribe(() => {
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.setVirtualScrollerHeight();
                    }, 50);
                });
            });
        }
        this.loadingArray = Array(this.dt.rows).fill(1);
        this.initialized = false;
    }
    get scrollHeight() {
        return this._scrollHeight;
    }
    set scrollHeight(val) {
        this._scrollHeight = val;
        this.setScrollHeight();
    }
    ngAfterViewChecked() {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.setScrollHeight();
            this.initialized = true;
        }
    }
    ngAfterViewInit() {
        if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }
            let frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-table-scrollable-body');
            }
        }
        else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
                this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarHeight() + 'px';
            }
            let scrollableView = this.el.nativeElement.nextElementSibling;
            if (scrollableView) {
                this.scrollableSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
            }
        }
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (this.frozen) {
            this.columnsSubscription = this.dt.tableService.columnsSource$.subscribe(() => {
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.setScrollHeight();
                    }, 50);
                });
            });
        }
        if (this.dt.virtualScroll) {
            this.setVirtualScrollerHeight();
            if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
            }
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            let scrollBarWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth();
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.headerScrollListener = this.onHeaderScroll.bind(this);
                this.scrollHeaderViewChild.nativeElement.addEventListener('scroll', this.headerScrollListener);
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.footerScrollListener = this.onFooterScroll.bind(this);
                this.scrollFooterViewChild.nativeElement.addEventListener('scroll', this.footerScrollListener);
            }
            if (!this.frozen) {
                this.bodyScrollListener = this.onBodyScroll.bind(this);
                this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
            }
        });
    }
    unbindEvents() {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
    }
    onHeaderScroll(event) {
        const scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    }
    onFooterScroll(event) {
        const scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    }
    onBodyScroll(event) {
        if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
        }
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = this.scrollBodyViewChild.nativeElement.scrollTop;
        }
        if (this.dt.virtualScroll) {
            let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
            let tableHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement);
            let pageHeight = this.dt.virtualRowHeight * this.dt.rows;
            let virtualTableHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.virtualScrollerViewChild.nativeElement);
            let pageCount = (virtualTableHeight / pageHeight) || 1;
            let scrollBodyTop = this.scrollTableViewChild.nativeElement.style.top || '0';
            if ((this.scrollBodyViewChild.nativeElement.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight) || (this.scrollBodyViewChild.nativeElement.scrollTop < parseFloat(scrollBodyTop))) {
                if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                    this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
                    this.scrollLoadingTableViewChild.nativeElement.style.top = this.scrollBodyViewChild.nativeElement.scrollTop + 'px';
                }
                let page = Math.floor((this.scrollBodyViewChild.nativeElement.scrollTop * pageCount) / (this.scrollBodyViewChild.nativeElement.scrollHeight)) + 1;
                this.dt.handleVirtualScroll({
                    page: page,
                    callback: () => {
                        if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                            this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                        }
                        this.scrollTableViewChild.nativeElement.style.top = ((page - 1) * pageHeight) + 'px';
                        if (this.frozenSiblingBody) {
                            this.frozenSiblingBody.children[0].style.top = this.scrollTableViewChild.nativeElement.style.top;
                        }
                        this.dt.anchorRowIndex = null;
                    }
                });
            }
        }
    }
    setScrollHeight() {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                let relativeHeight;
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.dt.el.nativeElement.children[0]);
                if (this.scrollHeight.includes("calc")) {
                    let percentHeight = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("(") + 1, this.scrollHeight.indexOf("%")));
                    let diffValue = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("-") + 1, this.scrollHeight.indexOf(")")));
                    relativeHeight = (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.dt.el.nativeElement.parentElement) * percentHeight / 100) - diffValue;
                }
                else {
                    relativeHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.dt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                }
                let staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                let scrollBodyHeight = (relativeHeight - staticHeight);
                if (this.frozen) {
                    scrollBodyHeight -= primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth();
                }
                this.scrollBodyViewChild.nativeElement.style.height = 'auto';
                this.scrollBodyViewChild.nativeElement.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBodyViewChild.nativeElement.style.visibility = 'visible';
            }
            else {
                this.scrollBodyViewChild.nativeElement.style.maxHeight = this.scrollHeight;
            }
        }
    }
    setVirtualScrollerHeight() {
        if (this.virtualScrollerViewChild.nativeElement) {
            this.virtualScrollerViewChild.nativeElement.style.height = this.dt.totalRecords * this.dt.virtualRowHeight + 'px';
        }
    }
    hasVerticalOverflow() {
        return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
    }
    alignScrollBar() {
        if (!this.frozen) {
            let scrollBarWidth = this.hasVerticalOverflow() ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
        this.initialized = false;
    }
    ngOnDestroy() {
        this.unbindEvents();
        this.frozenSiblingBody = null;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.totalRecordsSubscription) {
            this.totalRecordsSubscription.unsubscribe();
        }
        if (this.columnsSubscription) {
            this.columnsSubscription.unsubscribe();
        }
        this.initialized = false;
    }
};
ScrollableView.ctorParameters = () => [
    { type: Table },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pScrollableView")
], ScrollableView.prototype, "columns", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ScrollableView.prototype, "frozen", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollHeader', { static: true })
], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollHeaderBox', { static: true })
], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollBody', { static: true })
], ScrollableView.prototype, "scrollBodyViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollTable', { static: true })
], ScrollableView.prototype, "scrollTableViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loadingTable', { static: false })
], ScrollableView.prototype, "scrollLoadingTableViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollFooter', { static: true })
], ScrollableView.prototype, "scrollFooterViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollFooterBox', { static: true })
], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('virtualScroller', { static: false })
], ScrollableView.prototype, "virtualScrollerViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollableAligner', { static: false })
], ScrollableView.prototype, "scrollableAlignerViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ScrollableView.prototype, "scrollHeight", null);
ScrollableView = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: '[pScrollableView]',
        template: `
        <div #scrollHeader class="ui-table-scrollable-header ui-widget-header">
            <div #scrollHeaderBox class="ui-table-scrollable-header-box">
                <table class="ui-table-scrollable-header-table" [ngClass]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="ui-table-thead">
                        <ng-container *ngTemplateOutlet="frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}"></ng-container>
                    </thead>
                    <tbody class="ui-table-tbody">
                        <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="dt.frozenValue" [ngForTrackBy]="dt.rowTrackBy">
                            <ng-container *ngTemplateOutlet="dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}"></ng-container>
                        </ng-template>
                    </tbody>
                </table>
            </div>
        </div>
        <div #scrollBody class="ui-table-scrollable-body">
            <table #scrollTable [ngClass]="{'ui-table-scrollable-body-table': true, 'ui-table-virtual-table': dt.virtualScroll}" [class]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                <tbody class="ui-table-tbody" [pTableBody]="columns" [pTableBodyTemplate]="frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate" [frozen]="frozen"></tbody>
            </table>
            <table #loadingTable *ngIf="dt.virtualScroll && dt.loadingBodyTemplate != null" [ngClass]="{'ui-table-scrollable-body-table ui-table-loading-virtual-table': true, 'ui-table-virtual-table': dt.virtualScroll}">
                <tbody class="ui-table-tbody">
                    <ng-template ngFor [ngForOf]="loadingArray">
                        <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate; context: {columns: columns}"></ng-container>
                    </ng-template>
                </tbody>
            </table>
            <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
            <div #virtualScroller class="ui-table-virtual-scroller" *ngIf="dt.virtualScroll"></div>
        </div>
        <div #scrollFooter class="ui-table-scrollable-footer ui-widget-header">
            <div #scrollFooterBox class="ui-table-scrollable-footer-box">
                <table class="ui-table-scrollable-footer-table" [ngClass]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tfoot class="ui-table-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `
    })
], ScrollableView);
let SortableColumn = class SortableColumn {
    constructor(dt) {
        this.dt = dt;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
                this.updateSortState();
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    }
    updateSortState() {
        this.sorted = this.dt.isSorted(this.field);
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
                originalEvent: event,
                field: this.field
            });
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
    }
    onEnterKey(event) {
        this.onClick(event);
    }
    isEnabled() {
        return this.pSortableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SortableColumn.ctorParameters = () => [
    { type: Table }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSortableColumn")
], SortableColumn.prototype, "field", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], SortableColumn.prototype, "pSortableColumnDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], SortableColumn.prototype, "onClick", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.enter', ['$event'])
], SortableColumn.prototype, "onEnterKey", null);
SortableColumn = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pSortableColumn]',
        host: {
            '[class.ui-sortable-column]': 'isEnabled()',
            '[class.ui-state-highlight]': 'sorted',
            '[attr.tabindex]': 'isEnabled() ? "0" : null'
        }
    })
], SortableColumn);
let SortIcon = class SortIcon {
    constructor(dt) {
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
            this.updateSortState();
        });
    }
    ngOnInit() {
        this.updateSortState();
    }
    onClick(event) {
        event.preventDefault();
    }
    updateSortState() {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            let sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SortIcon.ctorParameters = () => [
    { type: Table }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], SortIcon.prototype, "field", void 0);
SortIcon = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-sortIcon',
        template: `
        <i class="ui-sortable-column-icon pi pi-fw" [ngClass]="{'pi-sort-up': sortOrder === 1, 'pi-sort-down': sortOrder === -1, 'pi-sort': sortOrder === 0}"></i>
    `
    })
], SortIcon);
let SelectableRow = class SelectableRow {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.dt.isSelected(this.data);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    }
    onTouchEnd(event) {
        if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
        }
    }
    onKeyDown(event) {
        if (this.isEnabled()) {
            const row = event.target;
            switch (event.which) {
                //down arrow
                case 40:
                    let nextRow = this.findNextSelectableRow(row);
                    if (nextRow) {
                        nextRow.focus();
                    }
                    event.preventDefault();
                    break;
                //up arrow
                case 38:
                    let prevRow = this.findPrevSelectableRow(row);
                    if (prevRow) {
                        prevRow.focus();
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    this.dt.handleRowClick({
                        originalEvent: event,
                        rowData: this.data,
                        rowIndex: this.index
                    });
                    break;
                default:
                    //no op
                    break;
            }
        }
    }
    findNextSelectableRow(row) {
        let nextRow = row.nextElementSibling;
        if (nextRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextRow, 'ui-selectable-row'))
                return nextRow;
            else
                return this.findNextSelectableRow(nextRow);
        }
        else {
            return null;
        }
    }
    findPrevSelectableRow(row) {
        let prevRow = row.previousElementSibling;
        if (prevRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevRow, 'ui-selectable-row'))
                return prevRow;
            else
                return this.findPrevSelectableRow(prevRow);
        }
        else {
            return null;
        }
    }
    isEnabled() {
        return this.pSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SelectableRow.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRow")
], SelectableRow.prototype, "data", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowIndex")
], SelectableRow.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], SelectableRow.prototype, "pSelectableRowDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], SelectableRow.prototype, "onClick", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend', ['$event'])
], SelectableRow.prototype, "onTouchEnd", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event'])
], SelectableRow.prototype, "onKeyDown", null);
SelectableRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pSelectableRow]',
        host: {
            '[class.ui-selectable-row]': 'isEnabled()',
            '[class.ui-state-highlight]': 'selected',
            '[attr.tabindex]': 'isEnabled() ? 0 : undefined',
        }
    })
], SelectableRow);
let SelectableRowDblClick = class SelectableRowDblClick {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.dt.isSelected(this.data);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    }
    isEnabled() {
        return this.pSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SelectableRowDblClick.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowDblClick")
], SelectableRowDblClick.prototype, "data", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pSelectableRowIndex")
], SelectableRowDblClick.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], SelectableRowDblClick.prototype, "pSelectableRowDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dblclick', ['$event'])
], SelectableRowDblClick.prototype, "onClick", null);
SelectableRowDblClick = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pSelectableRowDblClick]',
        host: {
            '[class.ui-selectable-row]': 'isEnabled()',
            '[class.ui-state-highlight]': 'selected'
        }
    })
], SelectableRowDblClick);
let ContextMenuRow = class ContextMenuRow {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.contextMenuSource$.subscribe((data) => {
                this.selected = this.dt.equals(this.data, data);
            });
        }
    }
    onContextMenu(event) {
        if (this.isEnabled()) {
            this.dt.handleRowRightClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.pContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
ContextMenuRow.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pContextMenuRow")
], ContextMenuRow.prototype, "data", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pContextMenuRowIndex")
], ContextMenuRow.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ContextMenuRow.prototype, "pContextMenuRowDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event'])
], ContextMenuRow.prototype, "onContextMenu", null);
ContextMenuRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pContextMenuRow]',
        host: {
            '[class.ui-contextmenu-selected]': 'selected'
        }
    })
], ContextMenuRow);
let RowToggler = class RowToggler {
    constructor(dt) {
        this.dt = dt;
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.pRowTogglerDisabled !== true;
    }
};
RowToggler.ctorParameters = () => [
    { type: Table }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pRowToggler')
], RowToggler.prototype, "data", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], RowToggler.prototype, "pRowTogglerDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], RowToggler.prototype, "onClick", null);
RowToggler = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pRowToggler]'
    })
], RowToggler);
let ResizableColumn = class ResizableColumn {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(() => {
                this.resizerMouseDownListener = this.onMouseDown.bind(this);
                this.resizer.addEventListener('mousedown', this.resizerMouseDownListener);
            });
        }
    }
    bindDocumentEvents() {
        this.zone.runOutsideAngular(() => {
            this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
            document.addEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
            document.addEventListener('mouseup', this.documentMouseUpListener);
        });
    }
    unbindDocumentEvents() {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    }
    onMouseDown(event) {
        if (event.which === 1) {
            this.dt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
        }
    }
    onDocumentMouseMove(event) {
        this.dt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
        this.dt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    }
    isEnabled() {
        return this.pResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    }
};
ResizableColumn.ctorParameters = () => [
    { type: Table },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);
ResizableColumn = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pResizableColumn]'
    })
], ResizableColumn);
let ReorderableColumn = class ReorderableColumn {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            this.mouseDownListener = this.onMouseDown.bind(this);
            this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            this.dragStartListener = this.onDragStart.bind(this);
            this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
            this.dragOverListener = this.onDragEnter.bind(this);
            this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            this.dragEnterListener = this.onDragEnter.bind(this);
            this.el.nativeElement.addEventListener('dragenter', this.dragEnterListener);
            this.dragLeaveListener = this.onDragLeave.bind(this);
            this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
        });
    }
    unbindEvents() {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    }
    onMouseDown(event) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    }
    onDragStart(event) {
        this.dt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDragEnter(event) {
        this.dt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
        this.dt.onColumnDragLeave(event);
    }
    onDrop(event) {
        if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
        }
    }
    isEnabled() {
        return this.pReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
        this.unbindEvents();
    }
};
ReorderableColumn.ctorParameters = () => [
    { type: Table },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ReorderableColumn.prototype, "pReorderableColumnDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event'])
], ReorderableColumn.prototype, "onDrop", null);
ReorderableColumn = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pReorderableColumn]'
    })
], ReorderableColumn);
let EditableColumn = class EditableColumn {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.dt.editingCellClick = true;
            if (this.dt.editingCell) {
                if (this.dt.editingCell !== this.el.nativeElement) {
                    if (!this.dt.isEditingCellValid()) {
                        return;
                    }
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.dt.editingCell, 'ui-editing-cell');
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    }
    openCell() {
        this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field);
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
        this.dt.onEditInit.emit({ field: this.field, data: this.data });
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let focusCellSelector = this.pFocusCellSelector || 'input, textarea, select';
                let focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.el.nativeElement, focusCellSelector);
                if (focusableElement) {
                    focusableElement.focus();
                }
            }, 50);
        });
    }
    closeEditingCell() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.dt.editingCell, 'ui-editing-cell');
        this.dt.editingCell = null;
        this.dt.editingCellData = null;
        this.dt.editingCellField = null;
        this.dt.unbindDocumentEditListener();
    }
    onKeyDown(event) {
        if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell();
                    this.dt.onEditComplete.emit({ field: this.field, data: this.data, originalEvent: event });
                }
                event.preventDefault();
            }
            //escape
            else if (event.keyCode == 27) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell();
                    this.dt.onEditCancel.emit({ field: this.field, data: this.data, originalEvent: event });
                }
                event.preventDefault();
            }
            //tab
            else if (event.keyCode == 9) {
                this.dt.onEditComplete.emit({ field: this.field, data: this.data, originalEvent: event });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    }
    findCell(element) {
        if (element) {
            let cell = element;
            while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    }
    moveToPreviousCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    moveToNextCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    findPreviousEditableColumn(cell) {
        let prevCell = cell.previousElementSibling;
        if (!prevCell) {
            let previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    }
    findNextEditableColumn(cell) {
        let nextCell = cell.nextElementSibling;
        if (!nextCell) {
            let nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    }
    isEnabled() {
        return this.pEditableColumnDisabled !== true;
    }
};
EditableColumn.ctorParameters = () => [
    { type: Table },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumn")
], EditableColumn.prototype, "data", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableColumnField")
], EditableColumn.prototype, "field", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], EditableColumn.prototype, "pEditableColumnDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], EditableColumn.prototype, "pFocusCellSelector", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], EditableColumn.prototype, "onClick", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event'])
], EditableColumn.prototype, "onKeyDown", null);
EditableColumn = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pEditableColumn]'
    })
], EditableColumn);
let EditableRow = class EditableRow {
    constructor(el) {
        this.el = el;
    }
    isEnabled() {
        return this.pEditableRowDisabled !== true;
    }
};
EditableRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pEditableRow")
], EditableRow.prototype, "data", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], EditableRow.prototype, "pEditableRowDisabled", void 0);
EditableRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pEditableRow]'
    })
], EditableRow);
let InitEditableRow = class InitEditableRow {
    constructor(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    onClick(event) {
        this.dt.initRowEdit(this.editableRow.data);
        event.preventDefault();
    }
};
InitEditableRow.ctorParameters = () => [
    { type: Table },
    { type: EditableRow }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], InitEditableRow.prototype, "onClick", null);
InitEditableRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pInitEditableRow]'
    })
], InitEditableRow);
let SaveEditableRow = class SaveEditableRow {
    constructor(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    onClick(event) {
        this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
        event.preventDefault();
    }
};
SaveEditableRow.ctorParameters = () => [
    { type: Table },
    { type: EditableRow }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], SaveEditableRow.prototype, "onClick", null);
SaveEditableRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pSaveEditableRow]'
    })
], SaveEditableRow);
let CancelEditableRow = class CancelEditableRow {
    constructor(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    onClick(event) {
        this.dt.cancelRowEdit(this.editableRow.data);
        event.preventDefault();
    }
};
CancelEditableRow.ctorParameters = () => [
    { type: Table },
    { type: EditableRow }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
], CancelEditableRow.prototype, "onClick", null);
CancelEditableRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pCancelEditableRow]'
    })
], CancelEditableRow);
let CellEditor = class CellEditor {
    constructor(dt, editableColumn, editableRow) {
        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'input':
                    this.inputTemplate = item.template;
                    break;
                case 'output':
                    this.outputTemplate = item.template;
                    break;
            }
        });
    }
    get editing() {
        return (this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement) ||
            (this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data));
    }
};
CellEditor.ctorParameters = () => [
    { type: Table },
    { type: EditableColumn, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: EditableRow, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])
], CellEditor.prototype, "templates", void 0);
CellEditor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-cellEditor',
        template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
], CellEditor);
let TableRadioButton = class TableRadioButton {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.dt.isSelected(this.value);
        });
    }
    ngOnInit() {
        this.checked = this.dt.isSelected(this.value);
    }
    onClick(event) {
        if (!this.disabled) {
            this.dt.toggleRowWithRadio({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    }
    onFocus() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    onBlur() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TableRadioButton.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableRadioButton.prototype, "disabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableRadioButton.prototype, "value", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableRadioButton.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box', { static: true })
], TableRadioButton.prototype, "boxViewChild", void 0);
TableRadioButton = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-tableRadioButton',
        template: `
        <div class="ui-radiobutton ui-widget" (click)="onClick($event)">
            <div class="ui-helper-hidden-accessible">
                <input type="radio" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled">
            </div>
            <div #box [ngClass]="{'ui-radiobutton-box ui-widget ui-state-default':true,
                'ui-state-active':checked, 'ui-state-disabled':disabled}" role="radio" [attr.aria-checked]="checked">
                <span class="ui-radiobutton-icon ui-clickable" [ngClass]="{'pi pi-circle-on':checked}"></span>
            </div>
        </div>
    `
    })
], TableRadioButton);
let TableCheckbox = class TableCheckbox {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.dt.isSelected(this.value);
        });
    }
    ngOnInit() {
        this.checked = this.dt.isSelected(this.value);
    }
    onClick(event) {
        if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    }
    onFocus() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    onBlur() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TableCheckbox.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableCheckbox.prototype, "disabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableCheckbox.prototype, "value", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableCheckbox.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box', { static: true })
], TableCheckbox.prototype, "boxViewChild", void 0);
TableCheckbox = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-tableCheckbox',
        template: `
        <div class="ui-chkbox ui-widget" (click)="onClick($event)">
            <div class="ui-helper-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled">
            </div>
            <div #box [ngClass]="{'ui-chkbox-box ui-widget ui-state-default':true,
                'ui-state-active':checked, 'ui-state-disabled':disabled}" role="checkbox" [attr.aria-checked]="checked">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `
    })
], TableCheckbox);
let TableHeaderCheckbox = class TableHeaderCheckbox {
    constructor(dt, tableService) {
        this.dt = dt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
    }
    ngOnInit() {
        this.checked = this.updateCheckedState();
    }
    onClick(event) {
        if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
                this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    }
    onFocus() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    onBlur() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    isDisabled() {
        return this.disabled || !this.dt.value || !this.dt.value.length;
    }
    ngOnDestroy() {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
    updateCheckedState() {
        if (this.dt.filteredValue) {
            const val = this.dt.filteredValue;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked());
        }
        else {
            const val = this.dt.value;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === val.length);
        }
    }
    isAllFilteredValuesChecked() {
        if (!this.dt.filteredValue) {
            return false;
        }
        else {
            for (let rowData of this.dt.filteredValue) {
                if (!this.dt.isSelected(rowData)) {
                    return false;
                }
            }
            return true;
        }
    }
};
TableHeaderCheckbox.ctorParameters = () => [
    { type: Table },
    { type: TableService }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box', { static: true })
], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TableHeaderCheckbox.prototype, "disabled", void 0);
TableHeaderCheckbox = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-tableHeaderCheckbox',
        template: `
        <div class="ui-chkbox ui-widget" (click)="onClick($event)">
            <div class="ui-helper-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="isDisabled()">
            </div>
            <div #box [ngClass]="{'ui-chkbox-box ui-widget ui-state-default':true,
                'ui-state-active':checked, 'ui-state-disabled': isDisabled()}" role="checkbox" [attr.aria-checked]="checked">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `
    })
], TableHeaderCheckbox);
let ReorderableRowHandle = class ReorderableRowHandle {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
    }
};
ReorderableRowHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRowHandle")
], ReorderableRowHandle.prototype, "index", void 0);
ReorderableRowHandle = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pReorderableRowHandle]'
    })
], ReorderableRowHandle);
let ReorderableRow = class ReorderableRow {
    constructor(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            this.mouseDownListener = this.onMouseDown.bind(this);
            this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            this.dragStartListener = this.onDragStart.bind(this);
            this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
            this.dragEndListener = this.onDragEnd.bind(this);
            this.el.nativeElement.addEventListener('dragend', this.dragEndListener);
            this.dragOverListener = this.onDragOver.bind(this);
            this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            this.dragLeaveListener = this.onDragLeave.bind(this);
            this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
        });
    }
    unbindEvents() {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
        }
        if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    }
    onMouseDown(event) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-table-reorderablerow-handle'))
            this.el.nativeElement.draggable = true;
        else
            this.el.nativeElement.draggable = false;
    }
    onDragStart(event) {
        this.dt.onRowDragStart(event, this.index);
    }
    onDragEnd(event) {
        this.dt.onRowDragEnd(event);
        this.el.nativeElement.draggable = false;
    }
    onDragOver(event) {
        this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dt.onRowDragLeave(event, this.el.nativeElement);
    }
    isEnabled() {
        return this.pReorderableRowDisabled !== true;
    }
    onDrop(event) {
        if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
        }
        event.preventDefault();
    }
};
ReorderableRow.ctorParameters = () => [
    { type: Table },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRow")
], ReorderableRow.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ReorderableRow.prototype, "pReorderableRowDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event'])
], ReorderableRow.prototype, "onDrop", null);
ReorderableRow = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pReorderableRow]'
    })
], ReorderableRow);
let TableModule = class TableModule {
};
TableModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"]],
        exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow],
        declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
    })
], TableModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-table.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"menu\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Crie um novo NPC\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"border\">\r\n\r\n    <div *ngIf=\"achado\">\r\n      <br>\r\n      <br>\r\n      <form [formGroup]=\"formNpc\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n          <span style=\"margin-left: 15px; margin-bottom: 15px; color: white;\">Informações Básicas</span>\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Historia</ion-label>\r\n                <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"light\"\r\n                  placeholder=\"EX: Sauron, também conhecido como Senhor do Escuro de Mordor, era o tenente mais poderoso de Morgoth e mente...\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formNpc.controls.historia.dirty && formNpc.controls.historia.errors\" margin-left>\r\n                Preencha\r\n                a historia</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <br>\r\n          <div class=\" objetivos\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-item color=\"dark\">\r\n                  <ion-label position=\"floating\">Objetivos</ion-label>\r\n                  <ion-input [(ngModel)]=\"objetivo\" [ngModelOptions]=\"{standalone: true}\" class=\"input\" type=\"text-area\"\r\n                    (keyup.enter)=\"inserirObjetivo()\" color=\"light\"\r\n                    placeholder=\"Insira o objetivo aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n                  <ion-button size=\"large\" slot=\"end\" color=\"tertiary\" fill=\"solid\" (keyup.enter)=\"inserirObjetivo()\"\r\n                    (click)=\"inserirObjetivo()\">\r\n                    Adicionar\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <app-listas [strings]=\"objetivos\" [titulo]=\"'Lista de Objetivos'\" [isModal]=\"false\"></app-listas>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <br>\r\n          <br>\r\n\r\n          <div class=\" interesses\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-item color=\"dark\">\r\n                  <ion-label position=\"floating\">Interesses</ion-label>\r\n                  <ion-input [(ngModel)]=\"interesse\" [ngModelOptions]=\"{standalone: true}\" class=\"input\"\r\n                    type=\"text-area\" (keyup.enter)=\"inserirInteresse()\" color=\"light\"\r\n                    placeholder=\"Insira o interesse aqui, então, clique em: 'Adicionar'\"></ion-input>\r\n                  <ion-button size=\"large\" slot=\"end\" color=\"tertiary\" fill=\"solid\" (click)=\"inserirInteresse()\">\r\n                    Adicionar\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <app-listas [strings]=\"interesses\" [titulo]=\"'Lista de Interesses'\" [isModal]=\"false\"></app-listas>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <br>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label>Tipo de NPC</ion-label>\r\n                <ion-select formControlName=\"tipoNpc\" placeholder=\"Selecione\">\r\n                  <ion-select-option value=\"0\">Aliado</ion-select-option>\r\n                  <ion-select-option value=\"1\">Inimigo</ion-select-option>\r\n                  <ion-select-option value=\"2\">Neutro</ion-select-option>\r\n                  <ion-select-option value=\"3\">Boss</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Valor no inventário</ion-label>\r\n                <ion-input formControlName=\"valorInventario\" type=\"text\" color=\"light\" placeholder=\"EX: 99999\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formNpc.controls.valorInventario.dirty && formNpc.controls.valorInventario.errors\" margin-left>\r\n                Preencha\r\n                o conteúdo</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formNpc.invalid\" (click)=\"salvar()\">Salvar e prosseguir\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"display\">\r\n      <!--<div style=\"border: 5px solid #221111; width: 100%; height: 50%;\">-->\r\n      <div>\r\n        <br>\r\n        <span style=\"margin-left: 15px; margin-bottom: 15px; color:white\">Ficha</span>\r\n        <br>\r\n        <app-ficha [idFicha]=\"idCriado\"></app-ficha>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <ion-footer *ngIf=\"cancelarBTN\">\r\n    <ion-toolbar>\r\n      <ion-button color=\"danger\" expand=\"block\" (click)=\"close()\">Fechar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n</ion-content>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/detalha-componente/detalha-componente.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/detalha-componente/detalha-componente.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ng-container *ngIf=\"componentAtual == 'info'\">\r\n    <br>\r\n    <app-ficha [idFicha]=\"idFicha\" [closeBTN]=\"true\" [forceUpdate]=\"true\"></app-ficha>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'faccoes'\">\r\n    <div class=\"espaco\">\r\n      <form [formGroup]=\"formFaccao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Nome</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"nome\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.nome.dirty && formFaccao.controls.nome.errors\" margin-left>\r\n                Preencha apenas com números</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Descrição</ion-label>\r\n                <ion-textarea color=\"tertiary\" class=\"input\" type=\"text-area\" formControlName=\"descricao\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.descricao.dirty && formFaccao.controls.descricao.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Objetivo</ion-label>\r\n                <ion-textarea color=\"tertiary\" color=\"light\" formControlName=\"objetivo\" type=\"text-area\"></ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formFaccao.controls.objetivo.dirty && formFaccao.controls.objetivo.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">URL da image</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"imgURL\"\r\n                  placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formFaccao.get('imgURL').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formFaccao.invalid\" (click)=\"salvarFaccao()\">Atualizar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'capitulo'\">\r\n    <div class=\"espaco\">\r\n      <form [formGroup]=\"formCapitulo\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Número do Capítulo</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"numCapitulo\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formCapitulo.controls.numCapitulo.dirty && formCapitulo.controls.numCapitulo.errors\" margin-left>\r\n                Preencha apenas com números</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Titulo</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"titulo\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formCapitulo.controls.titulo.dirty && formCapitulo.controls.titulo.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">História</ion-label>\r\n                <ion-textarea color=\"tertiary\" color=\"light\" formControlName=\"historia\" type=\"text-area\"></ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formCapitulo.controls.historia.dirty && formCapitulo.controls.historia.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Resumo do capítulo passado:</ion-label>\r\n                <ion-textarea color=\"tertiary\" color=\"light\" formControlName=\"resumoCapPassado\" type=\"text-area\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\"\r\n                *ngIf=\"formCapitulo.controls.resumoCapPassado.dirty && formCapitulo.controls.resumoCapPassado.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">URL da image</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"imgURL\"\r\n                  placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formCapitulo.get('imgURL').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          <p-carousel [value]=\"missoes\">\r\n            <p-header>\r\n              <h3 style=\"color: white;\">Missões</h3>\r\n            </p-header>\r\n            <ng-template let-missao pTemplate=\"panel\">\r\n              <div class=\"card\">\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-item color=\"dark\">\r\n                      <ion-label position=\"floating\">Nome</ion-label>\r\n                      <ion-input color=\"tertiary\" readonly class=\"input\" type=\"text\" [value]=\"missao.nome\">\r\n                      </ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-item color=\"dark\">\r\n                      <ion-label position=\"floating\">Descrição:</ion-label>\r\n                      <ion-textarea color=\"tertiary\"  type=\"text-area\" readonly\r\n                        [value]=\"missao.descricao\"></ion-textarea>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-item color=\"dark\">\r\n                      <ion-label position=\"floating\">Localização</ion-label>\r\n                      <ion-input color=\"tertiary\" class=\"input\" type=\"text\" readonly\r\n                        [value]=\"missao.localizacao\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-item color=\"dark\">\r\n                      <ion-label position=\"floating\">Recompensas:</ion-label>\r\n                      <ion-textarea color=\"tertiary\"  type=\"text-area\" readonly\r\n                        [value]=\"getRecompensas(missao.recompensas)\">\r\n                      </ion-textarea>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-item color=\"dark\">\r\n                      <ion-label position=\"floating\">Tipo de Missão</ion-label>\r\n                      <ion-input color=\"tertiary\" class=\"input\" type=\"text\" readonly\r\n                        [value]=\"missao.tipoMissao\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <ion-item color=\"dark\">\r\n                      <ion-label>Status</ion-label>\r\n                      <ion-select [value]=\"getStatusMissao(missao.statusMissao)\"\r\n                        (ionChange)=\"updateStatus($event, missao)\">\r\n                        <ion-select-option [value]=\"0\">Incompleta</ion-select-option>\r\n                        <ion-select-option [value]=\"1\">Completada</ion-select-option>\r\n                        <ion-select-option [value]=\"2\">Fracassada</ion-select-option>\r\n                        <ion-select-option [value]=\"3\">Em andamento</ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ng-template>\r\n          </p-carousel>\r\n\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formCapitulo.invalid\" (click)=\"salvarCapitulo()\">Atualizar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'mapa'\">\r\n    <div class=\"espaco\">\r\n      <form [formGroup]=\"formMapa\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Nome</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"nome\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formMapa.controls.nome.dirty && formMapa.controls.nome.errors\" margin-left>\r\n                Informação obrigatória</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Descrição</ion-label>\r\n                <ion-textarea color=\"tertiary\" color=\"light\" formControlName=\"descricao\" type=\"text-area\">\r\n                </ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formMapa.controls.descricao.dirty && formMapa.controls.descricao.errors\"\r\n                margin-left>\r\n                Campo obrigatório!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">URL do Mapa</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"urlMapa\"\r\n                  (ionChange)=\"atualizaImagem()\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formMapa.controls.urlMapa.dirty && formMapa.controls.urlMapa.errors\" margin-left>\r\n                Informação obrigatória</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <app-imagem-display [src]=\"this.formMapa.get('urlMapa').value\"></app-imagem-display>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formMapa.invalid\" (click)=\"salvarMapa()\">Atualizar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'regras'\">\r\n    <div class=\"espaco\">\r\n      <form [formGroup]=\"formRegra\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n        <div class=\"topo\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Nome</ion-label>\r\n                <ion-input color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"nome\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formRegra.controls.nome.dirty && formRegra.controls.nome.errors\" margin-left>\r\n                Informação obrigatória</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item color=\"dark\">\r\n                <ion-label position=\"floating\">Descrição</ion-label>\r\n                <ion-textarea color=\"tertiary\" class=\"input\" type=\"text\" formControlName=\"descricao\"></ion-textarea>\r\n              </ion-item>\r\n              <p class=\"danger\" *ngIf=\"formRegra.controls.descricao.dirty && formRegra.controls.descricao.errors\"\r\n                margin-left>\r\n                Informação obrigatória</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"formRegra.invalid\" (click)=\"salvarRegra()\">Atualizar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/detalha-npc/detalha-npc.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/detalha-npc/detalha-npc.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n    <ion-grid class=\"no-margin\">\r\n\r\n        <ion-segment class=\"background-segment\" color=\"tertiary\" (ionChange)=\"changedTab($event)\" [(ngModel)]=\"display\"\r\n            [ngModelOptions]=\"{standalone: true}\">\r\n            <ion-segment-button value=\"basic\">\r\n\r\n                <ion-label style=\"font-size: 1em; color: white;\">\r\n                    <img class=\"icone\" src=\"assets/imgs/rpg.png\">\r\n                    Informações\r\n                </ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"ficha\">\r\n                <ion-label style=\"font-size: 1em; color: white;\">\r\n                    <img class=\"icone\" src=\"assets/imgs/card-pick.png\">\r\n                    Ficha\r\n                </ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n        <br>\r\n        <div class=\"espaco\">\r\n            <br>\r\n            <ng-container *ngIf=\"display =='basic'\">\r\n                <div>\r\n                    <form [formGroup]=\"formNpc\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n                        <div class=\"topo\">\r\n\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-item color=\"dark\">\r\n                                        <ion-label position=\"floating\">Historia</ion-label>\r\n                                        <ion-textarea color=\"tertiary\" formControlName=\"historia\" type=\"text-area\"\r\n                                            placeholder=\"EX: Sauron, também conhecido como Senhor do Escuro de Mordor, era o tenente mais poderoso de Morgoth e mente...\">\r\n                                        </ion-textarea>\r\n                                    </ion-item>\r\n                                    <p class=\"danger\"\r\n                                        *ngIf=\"formNpc.controls.historia.dirty && formNpc.controls.historia.errors\"\r\n                                        margin-left>\r\n                                        Preencha\r\n                                        a historia</p>\r\n                                </ion-col>\r\n                            </ion-row>\r\n\r\n                            <br>\r\n                            <div class=\" objetivos\">\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item color=\"dark\">\r\n                                            <ion-label position=\"floating\">Objetivos</ion-label>\r\n                                            <ion-input color=\"tertiary\" (keyup.enter)=\"inserirObjetivo()\"\r\n                                                [(ngModel)]=\"objetivo\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                class=\"input\" type=\"text-area\"\r\n                                                placeholder=\"Insira o objetivo aqui, então, clique em: 'Adicionar'\">\r\n                                            </ion-input>\r\n\r\n                                            <ion-button size=\"large\" slot=\"end\" class=\"btn-insert\" color=\"tertiary\"\r\n                                                fill=\"solid\" expand=\"block\" (click)=\"inserirObjetivo()\">\r\n                                                Adicionar\r\n                                            </ion-button>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <app-listas [strings]=\"objetivos\" [titulo]=\"'Lista de Objetivos'\"\r\n                                            [isModal]=\"false\">\r\n                                        </app-listas>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n\r\n                            <div class=\" interesses\">\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <ion-item color=\"dark\">\r\n                                            <ion-label position=\"floating\">Interesses</ion-label>\r\n                                            <ion-input color=\"tertiary\" (keyup.enter)=\"inserirInteresse()\"\r\n                                                [(ngModel)]=\"interesse\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                class=\"input\" type=\"text-area\"\r\n                                                placeholder=\"Insira o interesse aqui, então, clique em: 'Adicionar'\">\r\n                                            </ion-input>\r\n                                            <ion-button size=\"large\" slot=\"end\" class=\"btn-insert\" color=\"tertiary\"\r\n                                                fill=\"solid\" expand=\"block\" (click)=\"inserirInteresse()\">\r\n                                                Adicionar\r\n                                            </ion-button>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>\r\n                                        <app-listas [strings]=\"interesses\" [titulo]=\"'Lista de Interesses'\"\r\n                                            [isModal]=\"false\">\r\n                                        </app-listas>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-item color=\"dark\">\r\n                                        <ion-label>Tipo de NPC</ion-label>\r\n                                        <ion-select color=\"tertiary\" (ionChange)=\"updateType($event)\"\r\n                                            formControlName=\"tipoNpc\" placeholder=\"Selecione\">\r\n                                            <ion-select-option [value]=\"0\">Aliado</ion-select-option>\r\n                                            <ion-select-option [value]=\"1\">Inimigo</ion-select-option>\r\n                                            <ion-select-option [value]=\"2\">Neutro</ion-select-option>\r\n                                            <ion-select-option [value]=\"3\">Boss</ion-select-option>\r\n                                        </ion-select>\r\n                                    </ion-item>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-button expand=\"block\" [disabled]=\"formNpc.invalid\" (click)=\"salvar(true)\">\r\n                                        Atualizar\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"display =='ficha'\">\r\n                <div>\r\n                    <app-ficha [idFicha]=\"idFicha\"></app-ficha>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thing\">\r\n  <span class=\"texto-a\" style=\"text-align: right; color: white;\"> {{ template.nome }}</span>\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col \">\r\n      <div *ngIf=\"abas\" class=\"p-col-12\">\r\n        <ion-segment class=\"background-segment\" [color]=\"getColor()\" [(ngModel)]=\"abaAtual\"\r\n          [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"mudaAba($event)\">\r\n          <ion-segment-button style=\"max-width: 120px;\" value=\"bom\">\r\n            <ion-label style=\"font-size: 1em\">\r\n              <!--<img class=\"icon2\" src=\"assets/imgs/bom.png\" alt=\"Informações\">-->\r\n              Aliado\r\n            </ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button style=\"max-width: 120px;\" value=\"neutro\">\r\n            <ion-label style=\"font-size: 1em\">\r\n              <!-- <img class=\"icon2\" src=\"assets/imgs/neutro.png\" alt=\"Regras\">-->\r\n              Neutro\r\n            </ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button style=\"max-width: 120px;\" value=\"mau\">\r\n            <ion-label style=\"font-size: 1em\">\r\n              <!--<img class=\"icon2\" src=\"assets/imgs/overlord-helm.png\" alt=\"NPCs\">-->\r\n              Inimigo\r\n            </ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </div>\r\n      <br>\r\n      <div class=\" texto-a alinhamento p-col-12  \">{{ template.codigo }}</div>\r\n      <div class=\"p-col-12\">\r\n        <div class=\"ui-inputgroup\">\r\n          <input type=\"text\" pInputText placeholder=\"código\" [(ngModel)]=\"idObj\" [ngModelOptions]=\"{standalone: true}\"\r\n            type=\"text\">\r\n          <button style=\"max-width: 100px;\" pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"\r\n            (click)='addItem()'></button>\r\n          <button style=\"max-width: 100px; margin-left: 2px;\" pButton type=\"button\" [icon]=\"getIcon()\"\r\n            class=\"ui-button-info\" (click)='listItem(true)'></button>\r\n          <button *ngIf=\"componente != 'regras' && componente != 'info'\" style=\"max-width: 100px; margin-left: 2px;\"\r\n            pButton type=\"button\" icon=\"pi pi-plus\" class=\"ui-button-info\" (click)='createNew()'></button>\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <p-table class=\"p-col-6\" class=\"bakground hover\" styleClass=\"ui-table-jogadores\" [value]=\"objs\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th style=\"border-left: 0 none; text-align: left; color: white;\">{{ template.tabelaNome }}</th>\r\n            <th style=\"border-right: 0 none; text-align: left; color: white;\">{{ template.tabelaCodigo }}</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-item>\r\n          <tr class=\"selecionavel\" #row (click)=\"selecionar(item, row)\">\r\n            <td style=\"border-right: 0 none; text-align: left;\">{{ item.nome }}</td>\r\n            <td style=\"border-left: 0 none; text-align: left;\">{{ item.id }}\r\n              <button style=\"float: right; margin-right: 10px;\" pButton type=\"button\" icon=\"pi pi-eye\"\r\n                (click)=\"view($event, item)\"></button>\r\n            </td>\r\n\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\">\r\n          <tr style=\"background-color: #050105;\">\r\n            <td style=\"background-color: #050105;\" colspan=\"2\"><button style=\"width: 100%\" pButton type=\"button\"\r\n                icon=\"pi pi-times-circle\" class=\"ui-button-danger\" (click)='removItem()'\r\n                [disabled]=\"!selectedItem\"></button></td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"back\">\r\n  <ion-segment [color]=\"getColor()\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px; margin-right: 10px;\" value=\"detail\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/missao.png\" alt=\"Informações\">\r\n        Detalhes\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"coming\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/round-table.png\" alt=\"Em breve\">\r\n        Em breve\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-segment [color]=\"getColor()\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px; margin-right: 10px;\" value=\"info\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/dice.png\" alt=\"Jogadores\">\r\n        Jogadores\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"regras\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/rpg.png\" alt=\"Regras\">\r\n        Regras\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-segment [color]=\"getColor()\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"npcs\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/overlord-helm.png\" alt=\"NPCs\">\r\n        NPCs\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"faccoes\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/squad.png\" alt=\"Facções\">\r\n        Facções\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-segment [color]=\"getColor()\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"capitulo\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/capitulo.png\" alt=\"Capitulos\">\r\n        Capítulos\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"mapa\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/treasure-map.png\" alt=\"Mapas\">\r\n        Mapas\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</div>\r\n<br>\r\n<div class=\"p-grid p-justify-center\" style=\"margin: 5px;\">\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'detail'\">\r\n    <div class=\"thing\">\r\n      <ion-row class=\"ion-justify-content-start \">\r\n        <ion-col class=\"ion-padding-horizontal img \">\r\n          <app-imagem-display [src]=\"mesa.imgURL || 'assets/imgs/dice.png'\"></app-imagem-display>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p>\r\n            <strong>{{ mesa?.nomeRpg || 'Nome não preenchido'}}</strong> é um RPG do tipo\r\n            <strong> {{ mesa?.tipoRPG.replace(\"_RPG\", \"\")}}</strong>\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p><strong>Descrição: </strong>\r\n            {{mesa?.descricaoRpg ||'Descrição não preenchida'}}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p><strong>História: </strong>\r\n            {{mesa?.historiaRpg ||'História não preenchida'}}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row class=\"ion-justify-content-center \">\r\n        <ion-col class=\"ion-align-self-center nome \">\r\n          <p style=\"margin: auto;\">O <strong>modelo de ficha </strong> usada neste RPG é a de identificação:\r\n            <strong>{{mesa?.idFichaModelo}}</strong>\r\n          </p>\r\n          <br>\r\n          <ion-button expand=\"full\" color=\"tertiary\" fill=\"solid\" (click)=\"newNPC()\">\r\n            Criar um novo NPC com este modelo\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <br>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'coming'\">\r\n    <ion-row class=\"ion-justify-content-center \">\r\n      <ion-col class=\"ion-align-self-center nome \">\r\n        <div style=\"min-width: 300px; min-height: 300px; text-align: center;\">\r\n          <p style=\"display: block; margin-top: 100px;\">\r\n            <strong>EM BREVE</strong>\r\n          </p>\r\n          <br>\r\n          <fa-icon style=\"font-size: 50px; color: rgb(143, 143, 22);\" [icon]=\"['fas', 'exclamation-circle']\">\r\n          </fa-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'info'\">\r\n    <app-gerencia-componente [id]=\"'id'\" [nome]=\"'apelido'\" [atributo]=\"'jogadores'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" [componente]=\"'info'\"></app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'regras'\">\r\n    <app-gerencia-componente [id]=\"'idSistema'\" [nome]=\"'nome'\" [atributo]=\"'sistemas'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idRpg\" [template]=\"template\" (modal)=\"modalClosed($event)\" [componente]=\"'regras'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'npcs'\">\r\n    <app-gerencia-componente [id]=\"'idNpc'\" [nome]=\"'ficha.fichaModelo.nome'\" [atributo]=\"atributoSelecionado\"\r\n      [promisse]=\"promisse\" [idMesa]=\"mesa.idMesa\" [template]=\"template\" [abas]=\"true\"\r\n      (atributoMudado)=\"mudaAtributo($event)\" (modal)=\"modalClosed($event)\" [componente]=\"'npcs'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'faccoes'\">\r\n    <app-gerencia-componente [id]=\"'idFaccao'\" [nome]=\"'nome'\" [atributo]=\"atributoSelecionado\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" [abas]=\"true\" [componente]=\"'faccoes'\"\r\n      (atributoMudado)=\"mudaAtributo($event)\" (modal)=\"modalClosed($event)\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'capitulo'\">\r\n    <app-gerencia-componente [id]=\"'idCapitulo'\" [nome]=\"'titulo'\" [atributo]=\"'capitulos'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" (modal)=\"modalClosed($event)\" [componente]=\"'capitulo'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'mapa'\">\r\n    <app-gerencia-componente [id]=\"'idMapa'\" [nome]=\"'nome'\" [atributo]=\"'mapas'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" (modal)=\"modalClosed($event)\" [componente]=\"'mapa'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'none'\"></ng-container>\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/regra-new/regra-new.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/regra-new/regra-new.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <form [formGroup]=\"formRegra\" (ngSubmit)=\"$event.preventDefault()\" #formuDef>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nome da regra</ion-label>\r\n            <ion-input formControlName=\"nome\" type=\"text\" color=\"primary\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descrição da regra</ion-label>\r\n            <ion-textarea formControlName=\"descricao\" type=\"text\" color=\"primary\"></ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"addRegra()\" [disabled]=\"formRegra.invalid\">Adicionar Regra</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n  <ion-footer *ngIf=\"true\">\r\n    <ion-toolbar>\r\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n  \r\n</ion-content>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contmesa/contmesa.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contmesa/contmesa.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n     Mesa {{ idMesa }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  [style.background-image]=\"'url(' + img + ')'\" [style.background-size]=\"'cover'\"\r\n[style.background-repeat]=\"'no-repeat'\">\r\n  <app-mesa-inicial></app-mesa-inicial>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.border {\n  margin-top: 3px;\n  border: 1px groove rgba(129, 79, 196, 0.28);\n  border-radius: 23px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n\n.divisoria {\n  border-top: 5px dotted rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.danger {\n  color: white;\n  font-size: 12px;\n}\n\n.invisivel {\n  --background: none;\n}\n\nion-content {\n  --background: rgb(122, 122, 122);\n}\n\nion-footer ion-toolbar {\n  --background: rgb(122, 122, 122) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1ucGMtbWVzYS9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGNyaWFyLW5wYy1tZXNhXFxjcmlhci1ucGMtbWVzYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9jcmlhci1ucGMtbWVzYS9jcmlhci1ucGMtbWVzYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQ0NGOztBREVBO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURHRTtFQUNFLDJDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL2NyaWFyLW5wYy1tZXNhL2NyaWFyLW5wYy1tZXNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1pbnNlcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSgxMjksIDc5LCAxOTYsIDAuMjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG5cclxuLmRpdmlzb3JpYSB7XHJcbiAgYm9yZGVyLXRvcDogNXB4IGRvdHRlZCByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaW52aXNpdmVsIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLmJ0bi1pbnNlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlciB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoMTI5LCA3OSwgMTk2LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbn1cblxuLmRpdmlzb3JpYSB7XG4gIGJvcmRlci10b3A6IDVweCBkb3R0ZWQgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbnZpc2l2ZWwge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIyLCAxMjIsIDEyMik7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.ts ***!
  \********************************************************************************/
/*! exports provided: CriarNpcMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarNpcMesaComponent", function() { return CriarNpcMesaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fichas/ficha-modelo.service */ "./src/app/services/fichas/ficha-modelo.service.ts");
/* harmony import */ var src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imagem/imagem.component */ "./src/app/components/imagem/imagem.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");










let CriarNpcMesaComponent = class CriarNpcMesaComponent {
    constructor(modalCtrl, formBuilder, fmService, npcService, alertController, fichaService, storage, modalController, paginaService) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.fmService = fmService;
        this.npcService = npcService;
        this.alertController = alertController;
        this.fichaService = fichaService;
        this.storage = storage;
        this.modalController = modalController;
        this.paginaService = paginaService;
        this.paginaAtual = 0;
        this.objetivos = [];
        this.objetivo = "";
        this.interesses = [];
        this.interesse = "";
        this.idFichaModelo = '';
        this.menu = true;
        this.cancelarBTN = false;
        this.loading = false;
        this.display = false;
        this.idCriado = '';
        this.formNpc = this.formBuilder.group({
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            valorInventario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            tipoNpc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    ngOnInit() {
        console.log(this.idFichaModelo);
        this.consultar();
    }
    salvar() {
        this.loading = true;
        this.newNpc = {
            historia: this.formNpc.get('historia').value,
            objetivos: this.objetivos,
            interesses: this.interesses,
            fichaNewDTO: {
                idFichaModelo: this.idFichaModelo,
                valorInventario: this.formNpc.get('valorInventario').value
            },
            tipoNpc: this.formNpc.get('tipoNpc').value,
            idCriador: this.storage.getLocalUserId()
        };
        this.npcService.insert(this.newNpc)
            .subscribe(res => {
            this.loading = false;
            this.idCriado = res.ficha.idFicha;
            this.fichaService.setConfiguration(res.ficha, true, res.idNpc, null, res.tipoNpc, false);
            this.showFicha();
            this.achado = false;
        }, error => {
            this.loading = false;
        });
    }
    showFicha() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.display = true;
        });
    }
    consultar() {
        this.loading = true;
        this.display = false;
        this.achado = false;
        this.fmService.findFichaModeloById(this.idFichaModelo)
            .subscribe(res => {
            this.loading = false;
            this.achado = true;
        }, error => {
            this.loading = false;
            this.achado = false;
        });
    }
    inserirObjetivo() {
        this.loading = true;
        if (this.objetivo.length < 5) {
            this.presentError('objetivo');
        }
        else {
            this.objetivos.push(this.objetivo);
            this.objetivo = "";
        }
        this.loading = false;
    }
    inserirInteresse() {
        this.loading = true;
        if (this.interesse.length < 5) {
            this.presentError('interesse');
        }
        else {
            this.interesses.push(this.interesse);
            this.interesse = "";
        }
        this.loading = false;
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
    img() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _imagem_imagem_component__WEBPACK_IMPORTED_MODULE_7__["ImagemComponent"],
                backdropDismiss: false,
                cssClass: 'my-full',
            });
            return yield modal.present();
        });
    }
    getNotification(evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    }
    handleEnter(evt) {
        console.log(evt);
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
CriarNpcMesaComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__["FichaModeloService"] },
    { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__["FichaService"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idFichaModelo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CriarNpcMesaComponent.prototype, "idFichaModelo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CriarNpcMesaComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelarBTN'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CriarNpcMesaComponent.prototype, "cancelarBTN", void 0);
CriarNpcMesaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-criar-npc-mesa',
        template: __webpack_require__(/*! raw-loader!./criar-npc-mesa.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.html"),
        styles: [__webpack_require__(/*! ./criar-npc-mesa.component.scss */ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_5__["FichaModeloService"],
        src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_6__["NpcService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_8__["FichaService"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"]])
], CriarNpcMesaComponent);



/***/ }),

/***/ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CriarNpcMesaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarNpcMesaModule", function() { return CriarNpcMesaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criar_npc_mesa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-npc-mesa.component */ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");











let CriarNpcMesaModule = class CriarNpcMesaModule {
};
CriarNpcMesaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_criar_npc_mesa_component__WEBPACK_IMPORTED_MODULE_5__["CriarNpcMesaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadSpinnerModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_7__["ListasModule"],
            _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_8__["FichasModule"],
            _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_9__["PaginacaoModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_10__["ImagemDisplayModule"]
        ],
        exports: [
            _criar_npc_mesa_component__WEBPACK_IMPORTED_MODULE_5__["CriarNpcMesaComponent"],
        ],
        entryComponents: [
            _criar_npc_mesa_component__WEBPACK_IMPORTED_MODULE_5__["CriarNpcMesaComponent"],
        ]
    })
], CriarNpcMesaModule);



/***/ }),

/***/ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/criacoes/detalha-componente/detalha-componente.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: 1px solid #b3c2ca;\n  border-radius: 3px;\n  margin: 0.3em;\n  text-align: center;\n  padding: 2em 0 2.25em 0;\n}\n\n.cover {\n  width: 50%;\n  height: 50%;\n  text-align: center;\n  align-self: center;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-width: 1px;\n  border-radius: 10px;\n}\n\n@media only screen and (max-width: 640px) {\n  .cover {\n    margin-left: 0;\n  }\n}\n\nion-content {\n  --background: rgba(155, 155, 155, 0.801) !important;\n}\n\n.espaco {\n  margin: 25px 5px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.topo {\n  margin: 25px 5px;\n}\n\nion-label {\n  opacity: 1 !important;\n}\n\nion-input {\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLWNvbXBvbmVudGUvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxkZXRhbGhhLWNvbXBvbmVudGVcXGRldGFsaGEtY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLWNvbXBvbmVudGUvZGV0YWxoYS1jb21wb25lbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGNBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UsbURBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esc0VBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLWNvbXBvbmVudGUvZGV0YWxoYS1jb21wb25lbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbSAwIDIuMjVlbSAwO1xyXG59XHJcblxyXG4uY292ZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmNvdmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjgwMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzcGFjbyB7XHJcbiAgbWFyZ2luOiAyNXB4IDVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udG9wbyB7XHJcbiAgbWFyZ2luOiAyNXB4IDVweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59IiwiLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNjMmNhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMC4zZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDAgMi4yNWVtIDA7XG59XG5cbi5jb3ZlciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY292ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjgwMSkgIWltcG9ydGFudDtcbn1cblxuLmVzcGFjbyB7XG4gIG1hcmdpbjogMjVweCA1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzFmMTYwZCwgIzJlMTYxMiwgIzI5MTIxOCwgIzM0MjQzNik7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50b3BvIHtcbiAgbWFyZ2luOiAyNXB4IDVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/criacoes/detalha-componente/detalha-componente.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DetalhaComponenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhaComponenteComponent", function() { return DetalhaComponenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/regra/regra.service */ "./src/app/services/regra/regra.service.ts");








let DetalhaComponenteComponent = class DetalhaComponenteComponent {
    constructor(mesaService, fichaService, regraService, formBuilder, toast, alertController, modalCtrl) {
        this.mesaService = mesaService;
        this.fichaService = fichaService;
        this.regraService = regraService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.idFicha = '';
        this.loading = true;
    }
    ngOnInit() {
        const comp = this.mesaService.getComponentAtual();
        this.objAuxiliar = this.mesaService.getObjAuxiliar();
        this.overrideComponent(comp);
    }
    overrideComponent(component) {
        const { idMesa } = this.objAuxiliar;
        switch (component) {
            case 'info': //jogador
                const { idJogador } = this.objAuxiliar;
                this.fichaService.findFichaByMesaAndJogador(idJogador, idMesa).subscribe(res => {
                    this.idFicha = res.idFicha;
                    this.componentAtual = component;
                    this.loading = false;
                }, error => {
                    this.componentAtual = component;
                    this.loading = false;
                });
                break;
            case 'regras':
                this.formRegra = this.formBuilder.group({
                    nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
                });
                const { idRegra } = this.mesaService.getObjAuxiliar();
                this.componentAtual = component;
                this.regraService.findRegraById(idRegra)
                    .subscribe(res => {
                    this.formRegra.get('descricao').setValue(res.descricao);
                    this.formRegra.get('nome').setValue(res.nome);
                    this.loading = false;
                }, error => {
                    this.loading = false;
                });
                break;
            case 'faccoes':
                this.formFaccao = this.formBuilder.group({
                    nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    objetivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    imgURL: ['']
                });
                const { idFaccao, tipo } = this.mesaService.getObjAuxiliar();
                this.componentAtual = component;
                this.mesaService.findFaccao(idFaccao, idMesa, tipo)
                    .subscribe(res => {
                    //console.log(res);
                    this.formFaccao.get('objetivo').setValue(res.objetivo);
                    this.formFaccao.get('descricao').setValue(res.descricao);
                    this.formFaccao.get('nome').setValue(res.nome);
                    this.formFaccao.get('imgURL').setValue(res.imgURL);
                    this.loading = false;
                }, error => {
                    this.loading = false;
                });
                break;
            case 'mapa':
                this.formMapa = this.formBuilder.group({
                    nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    urlMapa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                });
                const { idMapa } = this.mesaService.getObjAuxiliar();
                this.componentAtual = component;
                this.mesaService.findMapa(idMapa, idMesa)
                    .subscribe(res => {
                    this.formMapa.get('nome').setValue(res.nome);
                    this.formMapa.get('descricao').setValue(res.descricao);
                    this.formMapa.get('urlMapa').setValue(res.urlMapa);
                    this.urlMapa = res.urlMapa;
                    this.loading = false;
                }, error => {
                    this.loading = false;
                });
                break;
            case 'capitulo':
                this.formCapitulo = this.formBuilder.group({
                    numCapitulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    resumoCapPassado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    imgURL: ['']
                });
                const { idCapitulo } = this.mesaService.getObjAuxiliar();
                this.componentAtual = component;
                this.mesaService.findCapitulo(idCapitulo, idMesa)
                    .subscribe(res => {
                    this.formCapitulo.get('numCapitulo').setValue(res.numCapitulo);
                    this.formCapitulo.get('titulo').setValue(res.titulo);
                    this.formCapitulo.get('historia').setValue(res.historia);
                    this.formCapitulo.get('resumoCapPassado').setValue(res.resumoCapPassado);
                    this.formCapitulo.get('imgURL').setValue(res.imgURL);
                    this.missoes = res.missoes;
                    this.loading = false;
                }, error => {
                    this.loading = false;
                });
                break;
        }
    }
    atualizaImagem() {
        this.urlMapa = this.formMapa.get('urlMapa').value;
    }
    salvarFaccao() {
        const { idFaccao, idMesa } = this.mesaService.getObjAuxiliar();
        this.loading = true;
        this.newFaccao = {
            nome: this.formFaccao.get('nome').value,
            descricao: this.formFaccao.get('descricao').value,
            objetivo: this.formFaccao.get('objetivo').value,
            imgURL: this.formFaccao.get('imgURL').value,
        };
        this.mesaService.updateFaccao(idFaccao, idMesa, this.newFaccao)
            .subscribe(res => {
            this.loading = false;
            this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, error => {
            this.loading = false;
        });
    }
    salvarCapitulo() {
        const { idCapitulo, idMesa } = this.mesaService.getObjAuxiliar();
        this.loading = true;
        this.newCapitulo = {
            idCapitulo,
            isPrivate: true,
            numCapitulo: this.formCapitulo.get('numCapitulo').value,
            titulo: this.formCapitulo.get('titulo').value,
            historia: this.formCapitulo.get('historia').value,
            resumoCapPassado: this.formCapitulo.get('resumoCapPassado').value,
            imgURL: this.formCapitulo.get('imgURL').value,
        };
        this.mesaService.updateCapitulo(idCapitulo, idMesa, this.newCapitulo)
            .subscribe(res => {
            this.loading = false;
            this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, error => {
            this.loading = false;
        });
    }
    salvarMapa() {
        const { idMapa, idMesa } = this.mesaService.getObjAuxiliar();
        this.loading = true;
        this.newMapa = {
            nome: this.formMapa.get('nome').value,
            descricao: this.formMapa.get('descricao').value,
            urlMapa: this.formMapa.get('urlMapa').value
        };
        this.mesaService.updateMapa(idMapa, idMesa, this.newMapa)
            .subscribe(res => {
            this.loading = false;
            this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, error => {
            this.loading = false;
        });
    }
    salvarRegra() {
        const { idRegra } = this.mesaService.getObjAuxiliar();
        this.loading = true;
        this.newRegra = {
            nome: this.formRegra.get('nome').value,
            descricao: this.formRegra.get('descricao').value,
            idSistema: idRegra
        };
        this.regraService.update(this.newRegra)
            .subscribe(res => {
            this.loading = false;
            this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, error => {
            this.loading = false;
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
        this.modalCtrl.dismiss();
    }
    getRecompensas(recompensas) {
        const recompensa = recompensas.join(', ');
        return recompensa;
    }
    getStatusMissao(status) {
        switch (status) {
            case 'INCOMPLETA':
                return 0;
                break;
            case 'COMPLETADA':
                return 1;
                break;
            case 'FRACASSADA':
                return 2;
                break;
            case 'EM_ANDAMENTO':
                return 3;
                break;
            default:
                return 0;
        }
    }
    updateStatus(evt, missao) {
        this.loading = true;
        const statusMissao = evt.detail.value;
        const { idCapitulo, idMesa } = this.mesaService.getObjAuxiliar();
        const { idMissao } = missao;
        this.mesaService.updateStatusMissao(idCapitulo, idMesa, idMissao, statusMissao)
            .subscribe(res => {
            this.loading = false;
            this.callToast('success', 'Status atualizado', 'O status da missão foi atualizado');
        }, error => {
            this.loading = false;
            this.callToast('danger', 'Ocorreu algum erro', 'Não pudemos atualizar o status da missão em nossos servidores');
        });
    }
};
DetalhaComponenteComponent.ctorParameters = () => [
    { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__["FichaService"] },
    { type: src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
DetalhaComponenteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalha-componente',
        template: __webpack_require__(/*! raw-loader!./detalha-componente.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/detalha-componente/detalha-componente.component.html"),
        styles: [__webpack_require__(/*! ./detalha-componente.component.scss */ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__["FichaService"],
        src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], DetalhaComponenteComponent);



/***/ }),

/***/ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/criacoes/detalha-npc/detalha-npc.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.no-margin {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\n.icone {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.espaco {\n  margin-bottom: 25px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\nion-content {\n  --background: rgba(155, 155, 155, 0.801) !important;\n}\n\nion-item {\n  --border-radius: 10px;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(155, 155, 155, 0.801) !important;\n  max-width: 380px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLW5wYy9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGRldGFsaGEtbnBjXFxkZXRhbGhhLW5wYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLW5wYy9kZXRhbGhhLW5wYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esc0VBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLW5wYy9kZXRhbGhhLW5wYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5zZXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG4uaWNvbmUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lc3BhY28ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxuICBib3JkZXI6IDFweCBncm9vdmUgcmdiYSg5NCwgNDEsIDE2NCwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjgwMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtc2VnbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMzgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIiwiLmJ0bi1pbnNlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuLmljb25lIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZXNwYWNvIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHJnYmEoOTQsIDQxLCAxNjQsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjgwMSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/criacoes/detalha-npc/detalha-npc.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetalhaNpcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhaNpcComponent", function() { return DetalhaNpcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");







let DetalhaNpcComponent = class DetalhaNpcComponent {
    constructor(modalCtrl, alertController, formBuilder, mesaService, toast, fichaService) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.mesaService = mesaService;
        this.toast = toast;
        this.fichaService = fichaService;
        this.idFicha = "";
        this.idFichaModelo = '';
        this.objetivos = [];
        this.objetivo = "";
        this.interesses = [];
        this.interesse = "";
        this.display = 'basic';
        this.loading = false;
        this.autoUpdate = false;
        this.formNpc = this.formBuilder.group({
            historia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipoNpc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isPrivate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.loading = true;
        const { idJogador, idMesa, npc } = this.mesaService.getObjAuxiliar();
        //console.log(npc);
        const { historia, tipoNpc, isPrivate, objetivos, interesses } = npc;
        this.idNpc = idJogador;
        this.idMesa = idMesa;
        this.formNpc.get('historia').setValue(historia);
        this.formNpc.get('tipoNpc').setValue(this.getCurrentType(tipoNpc));
        if (isPrivate == false) {
            this.formNpc.get('isPrivate').setValue(false);
        }
        else {
            this.formNpc.get('isPrivate').setValue(true);
        }
        this.objetivos = objetivos;
        this.interesses = interesses;
        this.loading = false;
    }
    getCurrentType(tipoNpc) {
        switch (tipoNpc) {
            case "ALIADO":
                return 0;
                break;
            case "INIMIGO":
                return 1;
                break;
            case "NEUTRO":
                return 2;
                break;
            case "BOSS":
                return 3;
                break;
        }
    }
    updateType(evt) {
        const tipo = evt.detail.value;
        this.formNpc.get('tipoNpc').setValue(tipo);
    }
    salvar(wantToast) {
        this.autoUpdate = false;
        this.loading = true;
        const historia = this.formNpc.get('historia').value;
        const objetivos = this.objetivos;
        const interesses = this.interesses;
        const tipoNpc = this.formNpc.get('tipoNpc').value;
        const isPrivate = this.formNpc.get('isPrivate').value;
        const npcBasic = {
            historia,
            idNpc: this.idNpc,
            interesses,
            isPrivate,
            objetivos,
            tipoNpc
        };
        //console.log(wantToast)
        this.mesaService.updateNpcBasic(this.idNpc, this.idMesa, npcBasic)
            .subscribe(res => {
            if (wantToast == true)
                this.callToast('success', 'Atualizado com sucesso!', 'NPC Atualizado!');
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    close() {
        this.modalCtrl.dismiss(null, null, 'comp');
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    inserirObjetivo() {
        if (this.objetivo.length < 5) {
            this.presentError('objetivo');
        }
        else {
            this.objetivos.push(this.objetivo);
            this.objetivo = "";
        }
    }
    inserirInteresse() {
        if (this.interesse.length < 5) {
            this.presentError('interesse');
        }
        else {
            this.interesses.push(this.interesse);
            this.interesse = "";
        }
    }
    presentError(texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Valor inválido',
                message: 'Insira um ' + texto + '<br>Com pelo menos 5 caracteres',
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
    changedTab(evt) {
        this.formNpc.valueChanges.subscribe(res => {
            //console.log('ENTROU')
            this.autoUpdate = true;
        });
        const aba = evt.detail.value;
        // console.log(this.autoUpdate);
        if (aba != 'ficha') {
            this.loading = true;
            this.autoUpdate = false;
            this.mesaService.findNpc(this.idNpc, this.idMesa)
                .subscribe(res => {
                //console.log(res)
                const { tipoNpc, ficha } = res;
                this.fichaService.setConfiguration(ficha, false, this.idNpc, this.idMesa, tipoNpc, true);
                this.loading = false;
            }, error => {
                console.log(error);
                this.loading = false;
            });
        }
        else if (this.autoUpdate == true) {
            this.salvar(false);
        }
    }
};
DetalhaNpcComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_6__["MesasService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_5__["FichaService"] }
];
DetalhaNpcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalha-npc',
        template: __webpack_require__(/*! raw-loader!./detalha-npc.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/detalha-npc/detalha-npc.component.html"),
        styles: [__webpack_require__(/*! ./detalha-npc.component.scss */ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_6__["MesasService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_5__["FichaService"]])
], DetalhaNpcComponent);



/***/ }),

/***/ "./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nomidle {\n  border-left: 0 none;\n}\n\n.selecionavel:hover {\n  background-color: #7044ff;\n  cursor: pointer;\n}\n\n.selected td {\n  background-color: #421115 !important;\n  color: white !important;\n  border: 3px solid black !important;\n  border-left: none !important;\n  border-right: none !important;\n}\n\n.selected button {\n  background-color: white !important;\n  color: #7044ff !important;\n}\n\n.add {\n  border: 95px solid;\n}\n\n.btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.icone {\n  max-width: 100px;\n  max-height: 50px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.thing {\n  padding: 1rem;\n  width: 95%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: rgba(0, 2, 10, 0.801);\n  border-radius: 0.5rem;\n  margin-left: 10px;\n  border-left: 0 solid #00ff99;\n  -webkit-transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n}\n\n.bakground {\n  background-color: rgba(0, 2, 10, 0.801);\n}\n\n.thing {\n  padding-left: 0.5rem;\n  border-left: 0.5rem solid #00ff99;\n}\n\n.thing > :first-child {\n  margin-top: 0;\n}\n\n.thing > :last-child {\n  margin-bottom: 0;\n}\n\n.heading {\n  color: #fff;\n}\n\nbody {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100vh;\n  background-color: #0099ff;\n}\n\n.icon2 {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.texto-a {\n  color: white;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(155, 155, 155, 0.801) !important;\n  max-width: 380px;\n  text-align: right;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n\n::ng-deep .ui-table-thead {\n  background-color: #050105 !important;\n  border: 1px solid #d9dad9 !important;\n}\n\n::ng-deep .ui-table-thead * {\n  background-color: #050105 !important;\n  border: #050105 !important;\n}\n\n:ng-deep .ui-table-tfoot {\n  background-color: #050105 !important;\n  border: #050105 !important;\n}\n\n:ng-deep .ui-table-tfoot * {\n  background-color: #050105 !important;\n  border: #050105 !important;\n}\n\n::ng-deep .ui-table-tbody {\n  background-color: #342436 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-table-tbody td {\n  background-color: #342436 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-table-tbody button {\n  background-color: #7044ff !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9nZXJlbmNpYS1jb21wb25lbnRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcZ2VyZW5jaWEtY29tcG9uZW50ZVxcZ2VyZW5jaWEtY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9nZXJlbmNpYS1jb21wb25lbnRlL2dlcmVuY2lhLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FER0U7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0U7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSwrRUFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsaUZBQUE7RUFBQSx5RUFBQTtBQ0hGOztBRE1BO0VBQ0UsdUNBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQ0EsaUNBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7RUFNQSxvQ0FBQTtBQ1JGOztBREdFO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRE9BO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0pGOztBREtFO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0hKOztBRE9BO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ0pGOztBRE1FO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ0pKOztBRE9FO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9nZXJlbmNpYS1jb21wb25lbnRlL2dlcmVuY2lhLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9taWRsZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcclxufVxyXG5cclxuLnNlbGVjaW9uYXZlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgdGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyMTExNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gIGJvcmRlcjogOTVweCBzb2xpZDtcclxufVxyXG5cclxuLmJ0bi1pbnNlcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRoaW5nIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICBib3JkZXItbGVmdDogMCBzb2xpZCAjMDBmZjk5O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1sZWZ0IDMwMG1zIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5iYWtncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxufVxyXG5cclxuLnRoaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICMwMGZmOTk7XHJcbn1cclxuXHJcbi50aGluZyA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnRoaW5nID4gOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWZmO1xyXG59XHJcblxyXG4uaWNvbjIge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0by1hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjgwMSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktdGFibGUtdGhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcclxuICAqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNywgMjE4LCAyMTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpuZy1kZWVwIC51aS10YWJsZS10Zm9vdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gICoge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLXRhYmxlLXRib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyNDM2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gIHRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDI0MzYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIubm9taWRsZSB7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG59XG5cbi5zZWxlY2lvbmF2ZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZCB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjExMTUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xufVxuLnNlbGVjdGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzA0NGZmICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQge1xuICBib3JkZXI6IDk1cHggc29saWQ7XG59XG5cbi5idG4taW5zZXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dCB7XG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uZSB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aGluZyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA5NSU7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgIzAwZmY5OTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctbGVmdCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmJha2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcbn1cblxuLnRoaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzAwZmY5OTtcbn1cblxuLnRoaW5nID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRoaW5nID4gOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWZmO1xufVxuXG4uaWNvbjIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50ZXh0by1hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja2dyb3VuZC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjgwMSkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAzODBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJhY2tncm91bmQtc2VnbWVudCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAudWktdGFibGUtdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWRhZDkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAudWktdGFibGUtdGhlYWQgKiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG59XG5cbjpuZy1kZWVwIC51aS10YWJsZS10Zm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG59XG46bmctZGVlcCAudWktdGFibGUtdGZvb3QgKiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktdGFibGUtdGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyNDM2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51aS10YWJsZS10Ym9keSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDI0MzYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnVpLXRhYmxlLXRib2R5IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GerenciaComponenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciaComponenteComponent", function() { return GerenciaComponenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detalha-npc/detalha-npc.component */ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detalha-componente/detalha-componente.component */ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.ts");
/* harmony import */ var _utils_paginacao_paginacao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/paginacao/paginacao.component */ "./src/app/components/utils/paginacao/paginacao.component.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/historia/capitulo.service */ "./src/app/services/historia/capitulo.service.ts");
/* harmony import */ var src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/criacoes/faccoes.service */ "./src/app/services/criacoes/faccoes.service.ts");
/* harmony import */ var src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/npc/npc.service */ "./src/app/services/npc/npc.service.ts");
/* harmony import */ var src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/mapa/mapa.service */ "./src/app/services/mapa/mapa.service.ts");
/* harmony import */ var _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../regra-new/regra-new.component */ "./src/app/components/criacoes/regra-new/regra-new.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/inventario/inventario.service */ "./src/app/services/inventario/inventario.service.ts");

















let GerenciaComponenteComponent = class GerenciaComponenteComponent {
    constructor(mesaService, modalCtrl, fichaService, paginaService, capituloService, faccaoService, npcService, mapaService, toast, router, inventarioService) {
        this.mesaService = mesaService;
        this.modalCtrl = modalCtrl;
        this.fichaService = fichaService;
        this.paginaService = paginaService;
        this.capituloService = capituloService;
        this.faccaoService = faccaoService;
        this.npcService = npcService;
        this.mapaService = mapaService;
        this.toast = toast;
        this.router = router;
        this.inventarioService = inventarioService;
        this.currentAba = '0';
        this.template = {
            nome: '',
            codigo: '',
            tabelaCodigo: '',
            tabelaNome: '',
            tipo: '',
        };
        this.idMesa = '';
        this.idJson = '';
        this.nomeJson = '';
        this.abas = false;
        this.componente = "";
        this.atributoMudado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paginaAtual = 0;
        this.itens = [];
        this.idObj = '';
        this.idObjRemovido = '';
        this.loading = true;
        this.objs = [];
        this.abaAtual = 'bom';
    }
    handleMudanca() {
        this.atributoMudado.emit(this.abaAtual);
    }
    modalClose() {
        this.modal.emit('closed');
    }
    ngOnInit() {
        //console.log(this.componente);
        this.subscription = this.paginaService.getRefresh().subscribe(message => {
            if (message >= 0) {
                this.paginaAtual = message;
                const current = this.paginaService.getCurrentTab();
                this.nextPage(current);
            }
        });
        this.rowSelected = document.createElement("b");
        this.promisse.subscribe(res => {
            this.atualizaItens(res);
            this.loadContent();
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    ionViewDidLeave() {
        this.paginaService.setConfiguration(false);
        this.paginaService.closeBTN = false;
        this.paginaService.isModal = false;
    }
    ngOnDestroy() {
        this.paginaService.setConfiguration(false);
        this.paginaService.closeBTN = false;
        this.paginaService.isModal = false;
        this.paginaService.setInternalLoad(false);
        this.subscription.unsubscribe();
    }
    atualizaItens(res) {
        this.itens = undefined;
        if (res.sistema) {
            this.itens = res.sistema[this.atributo];
        }
        if (!this.itens) {
            this.itens = res[this.atributo];
        }
        if (!this.itens) {
            this.itens = res;
        }
        if (res.idFichaModelo) {
            this.idFichaModelo = res.idFichaModelo;
        }
    }
    loadContent() {
        this.objs = [];
        for (let i = 0; i < this.itens.length; i++) {
            this.objs.push({
                id: this.getProperty(this.itens[i], this.idJson),
                nome: this.getProperty(this.itens[i], this.nomeJson)
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
    addItem() {
        this.loading = true;
        const operation = this.getSelectedService(this.template.tipo, 'adiciona');
        //console.log(operation);
        operation(this.idObj, this.idMesa, this.tipoObj)
            .subscribe(res => {
            this.atualizaItens(res);
            this.loadContent();
            this.loading = false;
        }, error => {
            this.loading = false;
        });
        this.idObj = '';
    }
    removItem() {
        this.loading = true;
        const operation = this.getSelectedService(this.template.tipo, 'remocao');
        if (operation == this.mesaService.removRegraNew) {
            this.mesaService.removRegraNew(this.idObjRemovido, this.mesaService.getMesaSelecionada())
                .subscribe(res => {
                this.atualizaItens(res);
                this.loadContent();
                this.loading = false;
            }, error => {
                this.loading = false;
            });
        }
        else {
            operation(this.idObjRemovido, this.idMesa, this.tipoObj)
                .subscribe(res => {
                this.atualizaItens(res);
                this.loadContent();
                this.loading = false;
            }, error => {
                this.loading = false;
            });
        }
    }
    selecionar(item, row) {
        this.rowSelected.classList.remove('selected');
        row.classList.add('selected');
        this.rowSelected = row;
        this.selectedItem = item;
        this.idObjRemovido = item.id;
    }
    getTipoNpcAdd() {
        switch (this.abaAtual) {
            case 'bom':
                this.tipoObj = 0;
                break;
            case 'neutro':
                this.tipoObj = 1;
                break;
            case 'mau':
                this.tipoObj = 2;
                break;
        }
        return this.mesaService.addNpc;
    }
    getTipoNpcRemov() {
        switch (this.abaAtual) {
            case 'bom':
                this.tipoObj = 0;
                break;
            case 'neutro':
                this.tipoObj = 1;
                break;
            case 'mau':
                this.tipoObj = 2;
                break;
        }
        return this.mesaService.removNpc;
    }
    getTipoFaccaoAdd() {
        switch (this.abaAtual) {
            case 'bom':
                this.tipoObj = 0;
                break;
            case 'neutro':
                this.tipoObj = 1;
                break;
            case 'mau':
                this.tipoObj = 2;
                break;
        }
        return this.mesaService.addFaccao;
    }
    getTipoFaccaoRemov() {
        switch (this.abaAtual) {
            case 'bom':
                this.tipoObj = 0;
                break;
            case 'neutro':
                this.tipoObj = 1;
                break;
            case 'mau':
                this.tipoObj = 2;
                break;
        }
        return this.mesaService.removFaccao;
    }
    getSelectedService(tipo, opcao) {
        if (opcao == 'remocao') {
            switch (tipo) {
                case 'jogador':
                    return this.mesaService.removJogador;
                    break;
                case 'regra':
                    return this.mesaService.removRegraNew;
                    break;
                case 'npc':
                    return this.getTipoNpcRemov();
                    break;
                case 'faccao':
                    return this.getTipoFaccaoRemov();
                    break;
                case 'capitulo':
                    return this.mesaService.removCapitulos;
                    break;
                case 'mapa':
                    return this.mesaService.removMapa;
                    break;
            }
        }
        else {
            switch (tipo) {
                case 'jogador':
                    this.mesaService.setObjAuxiliar({
                        idFichaModelo: this.idFichaModelo,
                        idJogador: this.idObj,
                        valorInventario: 0,
                        idMesa: this.idMesa
                    });
                    return this.mesaService.addJogador;
                    break;
                case 'regra':
                    return this.mesaService.addRegra;
                    break;
                case 'npc':
                    return this.getTipoNpcAdd();
                    break;
                case 'faccao':
                    return this.getTipoFaccaoAdd();
                    break;
                case 'capitulo':
                    return this.mesaService.addCapitulos;
                    break;
                case 'mapa':
                    return this.mesaService.addMapa;
                    break;
            }
        }
    }
    getColor() {
        switch (this.abaAtual) {
            case 'bom':
                return 'info';
                break;
            case 'neutro':
                return 'warning';
                break;
            case 'mau':
                return 'danger';
                break;
        }
    }
    mudaAba(event) {
        const { value } = event.detail;
        switch (value) {
            case 'bom':
                this.inventarioService.setTipo(0);
                break;
            case 'neutro':
                this.inventarioService.setTipo(1);
                break;
            case 'mau':
                this.inventarioService.setTipo(2);
                break;
        }
        this.loading = true;
        this.handleMudanca();
        this.promisse.subscribe(res => {
            this.atualizaItens(res);
            this.loadContent();
            this.loading = false;
        }, error => {
            this.loading = false;
        });
        this.loadContent();
    }
    view(event, item) {
        this.presentModal(item);
    }
    presentModal(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getTipoNpcAdd();
            let component = _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_7__["DetalhaComponenteComponent"];
            switch (this.template.tipo) {
                case 'npc':
                    const npc = this.itens.find(element => element.idNpc == item.id);
                    this.mesaService.setObjAuxiliar({
                        idJogador: item.id,
                        idMesa: this.idMesa,
                        npc: npc
                    });
                    //console.log(this.mesaService.getObjAuxiliar());
                    const { ficha } = this.itens.find(element => element.idNpc == item.id);
                    this.fichaService.setConfiguration(ficha, false, item.id, this.idMesa, this.tipoObj, true);
                    component = _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_5__["DetalhaNpcComponent"];
                    break;
                case 'faccao':
                    this.mesaService.setObjAuxiliar({
                        idFaccao: item.id,
                        idMesa: this.idMesa,
                        tipo: this.tipoObj
                    });
                    this.inventarioService.setTipo(undefined);
                    break;
                case 'jogador':
                    this.fichaService.setConfiguration(undefined, true, undefined, this.idMesa, undefined, true);
                    this.mesaService.setObjAuxiliar({
                        idJogador: item.id,
                        idMesa: this.idMesa,
                    });
                    this.inventarioService.setTipo(undefined);
                    break;
                case 'capitulo':
                    this.mesaService.setObjAuxiliar({
                        idCapitulo: item.id,
                        idMesa: this.idMesa,
                    });
                    this.inventarioService.setTipo(undefined);
                    break;
                case 'mapa':
                    this.mesaService.setObjAuxiliar({
                        idMapa: item.id,
                        idMesa: this.idMesa,
                    });
                    this.inventarioService.setTipo(undefined);
                    break;
                case 'regra':
                    this.mesaService.setObjAuxiliar({
                        idRegra: item.id
                    });
                    this.inventarioService.setTipo(undefined);
                    break;
            }
            const modal = yield this.modalCtrl.create({
                component,
                backdropDismiss: true,
                cssClass: 'my-custom-modal-css',
                id: 'comp'
            });
            modal.onWillDismiss()
                .then(data => {
                this.modalClose();
            });
            return yield modal.present();
        });
    }
    listItem(wantModal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('ENTROU')
            let p;
            let f;
            switch (this.template.tipo) {
                case 'jogador':
                    this.callToast('warn', 'Indisponível', 'Listagem de jogadores não disponível ainda');
                    return;
                    break;
                case 'regra':
                    //this.callToast('error', 'Indisponível', 'Regras devem ser criadas individualmente, não é possível reutilizar regras');
                    // return;
                    this.regraModal();
                    return;
                    break;
                case 'npc':
                    p = this.npcService.findPageByCriador(this.paginaAtual.toString());
                    f = this.npcService.findPageByCriador;
                    this.paginaService.setPromisse(p);
                    this.paginaService.setConfiguration(true, 'idNpc', 'ficha.fichaModelo.nome', 'historia', 'ficha.fichaModelo.tipoRPG', 'ficha.urlImg', null, 'Não foi encontrado nenhum item', true, this.paginaAtual, true, true);
                    this.paginaService.setCurrentTab('npc');
                    break;
                case 'faccao':
                    p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
                    f = this.faccaoService.findPageByCriador;
                    this.paginaService.setPromisse(p);
                    this.paginaService.setConfiguration(true, 'idFaccao', 'nome', 'descricao', 'objetivo', 'imgURL', null, 'Não foi encontrado nenhum item', true, this.paginaAtual, true, true);
                    this.paginaService.setCurrentTab('faccao');
                    break;
                case 'capitulo':
                    p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
                    f = this.capituloService.findPageByCriador;
                    this.paginaService.setPromisse(p);
                    this.paginaService.setConfiguration(true, 'idCapitulo', 'titulo', 'historia', 'numCapitulo', 'imgURL', null, 'Não foi encontrado nenhum item', true, this.paginaAtual, true, true);
                    this.paginaService.setCurrentTab('capitulo');
                    break;
                case 'mapa':
                    p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
                    f = this.mapaService.findPageByCriador;
                    this.paginaService.setPromisse(p);
                    this.paginaService.setConfiguration(true, 'idMapa', 'nome', 'descricao', 'objetivo', 'urlMapa', null, 'Não foi encontrado nenhum item', true, this.paginaAtual, true, true);
                    this.paginaService.setCurrentTab('mapa');
                    break;
            }
            this.paginaService.setFunctionPromissed(f);
            this.paginaService.setInternalLoad(true);
            if (wantModal == true) {
                const modal = yield this.modalCtrl.create({
                    component: _utils_paginacao_paginacao_component__WEBPACK_IMPORTED_MODULE_8__["PaginacaoComponent"],
                    backdropDismiss: false,
                    cssClass: 'my-custom-modal-css',
                });
                modal.onDidDismiss()
                    .then(res => {
                    // console.log(res);
                    if (res.data) {
                        this.idObj = res.data.id;
                        this.addItem();
                    }
                });
                return yield modal.present();
            }
        });
    }
    nextPage(current) {
        let p;
        switch (current) {
            case 'jogador':
                this.callToast('warn', 'Indisponível', 'Listagem de jogadores não disponível ainda');
                return;
                break;
            case 'regra':
                this.callToast('error', 'Indisponível', 'Regras devem ser criadas individualmente, não é possível reutilizar regras');
                return;
                break;
            case 'npc':
                p = this.npcService.findPageByCriador(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                this.paginaService.setConfiguration(true, 'idNpc', 'ficha.fichaModelo.nome', 'historia', 'ficha.fichaModelo.tipoRPG', 'ficha.urlImg', null, 'Não foi encontrado nenhum item', false, this.paginaAtual, true, true);
                break;
            case 'faccao':
                p = this.faccaoService.findPageByCriador(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                this.paginaService.setConfiguration(true, 'idFaccao', 'nome', 'descricao', 'objetivo', null, null, 'Não foi encontrado nenhum item', false, this.paginaAtual, true, true);
                break;
            case 'capitulo':
                p = this.capituloService.findPageByCriador(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                this.paginaService.setConfiguration(true, 'idCapitulo', 'titulo', 'historia', 'numCapitulo', null, null, 'Não foi encontrado nenhum item', false, this.paginaAtual, true, true);
                break;
            case 'mapa':
                p = this.mapaService.findPageByCriador(this.paginaAtual.toString());
                this.paginaService.setPromisse(p);
                this.paginaService.setConfiguration(true, 'idMapa', 'nome', 'descricao', 'objetivo', 'urlMapa', null, 'Não foi encontrado nenhum item', false, this.paginaAtual, true, true);
                break;
        }
        this.paginaService.setInternalLoad(true);
    }
    callToast(severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    }
    regraModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mesaService.setStaticID(this.idMesa);
            const modal = yield this.modalCtrl.create({
                component: _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_14__["RegraNewComponent"],
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
            });
            modal.onDidDismiss()
                .then(res => {
                // console.log(res);
                if (res.data) {
                    this.itens = res.data;
                    this.loadContent();
                }
            });
            return yield modal.present();
        });
    }
    getIcon() {
        if (this.componente == "regras")
            return "pi pi-plus";
        else
            return "pi pi-search";
    }
    createNew() {
        switch (this.componente) {
            case "faccoes":
                this.router.navigateByUrl('gerfaccoes');
                break;
            case "npcs":
                this.router.navigateByUrl('gerinimigos');
                break;
            case "capitulo":
                this.router.navigateByUrl('gercapitulos');
                break;
            case "mapa":
                this.router.navigateByUrl('germapas');
                break;
            case "faccoes":
                this.router.navigateByUrl('gerfaccoes');
                break;
        }
    }
};
GerenciaComponenteComponent.ctorParameters = () => [
    { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_4__["MesasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_6__["FichaService"] },
    { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"] },
    { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_10__["CapituloService"] },
    { type: src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_11__["FaccoesService"] },
    { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_12__["NpcService"] },
    { type: src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_13__["MapaService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_16__["InventarioService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GerenciaComponenteComponent.prototype, "template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('idMesa'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GerenciaComponenteComponent.prototype, "idMesa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('promisse'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GerenciaComponenteComponent.prototype, "promisse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('atributo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GerenciaComponenteComponent.prototype, "atributo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('id'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GerenciaComponenteComponent.prototype, "idJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nome'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GerenciaComponenteComponent.prototype, "nomeJson", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abas'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], GerenciaComponenteComponent.prototype, "abas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(''),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GerenciaComponenteComponent.prototype, "componente", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('atributoMudado'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GerenciaComponenteComponent.prototype, "atributoMudado", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('modal'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GerenciaComponenteComponent.prototype, "modal", void 0);
GerenciaComponenteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerencia-componente',
        template: __webpack_require__(/*! raw-loader!./gerencia-componente.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.html"),
        styles: [__webpack_require__(/*! ./gerencia-componente.component.scss */ "./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_4__["MesasService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_6__["FichaService"],
        src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"],
        src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_10__["CapituloService"],
        src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_11__["FaccoesService"],
        src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_12__["NpcService"],
        src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_13__["MapaService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
        src_app_services_inventario_inventario_service__WEBPACK_IMPORTED_MODULE_16__["InventarioService"]])
], GerenciaComponenteComponent);



/***/ }),

/***/ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nobreak {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  .nobreak {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.alinhamento {\n  margin-top: 5px;\n}\n\n.card {\n  margin: 5px;\n}\n\n.header {\n  margin-left: 10px;\n  margin-top: 10px;\n  border-bottom: 50px solid 0;\n}\n\n.nomidle {\n  border-left: 0 none;\n}\n\n.selecionavel:hover {\n  background-color: #999999;\n  cursor: pointer;\n}\n\n.selected {\n  border: 3px solid red;\n}\n\n.add {\n  border: 5px solid;\n}\n\n.icone {\n  max-width: 100px;\n  max-height: 50px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.icon2 {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.back {\n  border-radius: 23px;\n  max-width: 550px;\n  background-color: rgba(0, 2, 10, 0.801) !important;\n  margin: auto;\n}\n\n.back ion-label {\n  --color: white;\n  color: white;\n}\n\n.thing {\n  padding: 1rem;\n  width: 95%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: rgba(0, 2, 10, 0.801);\n  border-radius: 0.5rem;\n  margin-left: 10px;\n  border-left: 0 solid #00ff99;\n  -webkit-transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n}\n\n.bakground {\n  background-color: rgba(0, 2, 10, 0.801);\n}\n\n.thing {\n  padding-left: 0.5rem;\n  border-left: 0.5rem solid #00ff99;\n}\n\n.thing > :first-child {\n  margin-top: 0;\n}\n\n.thing > :last-child {\n  margin-bottom: 0;\n}\n\n.heading {\n  color: #fff;\n}\n\n.nome {\n  text-align: center;\n  color: white;\n  border: 5px solid rgba(0, 2, 10, 0.801);\n  border-radius: 5px;\n  --background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n  margin-right: 10px;\n  background: linear-gradient(60deg, #1f160d, #2e1612, #291218, #342436);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tZXNhLWluaWNpYWwvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxtZXNhLWluaWNpYWxcXG1lc2EtaW5pY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tZXNhLWluaWNpYWwvbWVzYS1pbmljaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSwrRUFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsaUZBQUE7RUFBQSx5RUFBQTtBQ0FGOztBREdBO0VBQ0UsdUNBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFFQSxrQkFBQTtFQUNBLHNFQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL21lc2EtaW5pY2lhbC9tZXNhLWluaWNpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9icmVhayB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5ub2JyZWFrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbi5hbGluaGFtZW50byB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNTBweCBzb2xpZCByZWQoJGNvbG9yOiAjMDAwMDAwKTtcclxufVxyXG5cclxuLm5vbWlkbGUge1xyXG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY2lvbmF2ZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQ7XHJcbn1cclxuXHJcbi5pY29uZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmljb24yIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJhY2sgaW9uLWxhYmVsIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aGluZyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgIzAwZmY5OTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItbGVmdCAzMDBtcyBlYXNlLWluLW91dCwgcGFkZGluZy1sZWZ0IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYmFrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XHJcbn1cclxuXHJcbi50aGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjMDBmZjk5O1xyXG59XHJcblxyXG4udGhpbmcgPiA6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50aGluZyA+IDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ub21lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcclxufVxyXG4iLCIubm9icmVhayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5vYnJlYWsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5hbGluaGFtZW50byB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkIDA7XG59XG5cbi5ub21pZGxlIHtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcbn1cblxuLnNlbGVjaW9uYXZlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xufVxuXG4uYWRkIHtcbiAgYm9yZGVyOiA1cHggc29saWQ7XG59XG5cbi5pY29uZSB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pY29uMiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJhY2sge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYmFjayBpb24tbGFiZWwge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGhpbmcge1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogOTUlO1xuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkICMwMGZmOTk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1sZWZ0IDMwMG1zIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5iYWtncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSk7XG59XG5cbi50aGluZyB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICMwMGZmOTk7XG59XG5cbi50aGluZyA+IDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aGluZyA+IDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmhlYWRpbmcge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5vbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWYxNjBkLCAjMmUxNjEyLCAjMjkxMjE4LCAjMzQyNDM2KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMxZjE2MGQsICMyZTE2MTIsICMyOTEyMTgsICMzNDI0MzYpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.ts ***!
  \****************************************************************************/
/*! exports provided: MesaInicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaInicialComponent", function() { return MesaInicialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criar_npc_mesa_criar_npc_mesa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../criar-npc-mesa/criar-npc-mesa.component */ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.component.ts");








let MesaInicialComponent = class MesaInicialComponent {
    constructor(mesaService, userService, router, storageService, modalInterno) {
        this.mesaService = mesaService;
        this.userService = userService;
        this.router = router;
        this.storageService = storageService;
        this.modalInterno = modalInterno;
        this.currentColor = 'primary';
        this.mesa = {
            descricaoRpg: '',
            historiaRpg: '',
            idMesa: '',
            idRpg: '',
            jogadores: [],
            mestre: {
                email: '',
                id: '',
                nome: ''
            },
            nomeRpg: '',
            idFichaModelo: '',
            imgURL: '',
            tipoRPG: '',
        };
        this.loading = true;
        this.jogadores = [];
        this.abaAtual = 'info';
        this.atributoSelecionado = 'aliados';
        this.template = {
            nome: 'Jogadores',
            codigo: 'Código do Jogador',
            tabelaCodigo: 'Código',
            tabelaNome: 'Apelido',
            tipo: 'jogador',
        };
    }
    ngOnInit() {
        this.abaAtual = 'detail';
        this.rowSelected = document.createElement("b");
        this.setPromisse();
    }
    ngOnDestroy() {
        this.storageService.setNull();
    }
    setPromisse() {
        const { idMesa } = this.storageService.getSelectedMesa();
        this.promisse = this.mesaService.findMesaInicial2(idMesa);
        this.mesaService.findMesaInicial2(idMesa)
            .subscribe(res => {
            this.mesa = res;
            this.jogadores = res.jogadores;
            this.loading = false;
        }, error => {
            this.loading = false;
            this.abaAtual = 'regras';
            this.router.navigateByUrl('perfil');
        });
    }
    selecionar(jogador, row) {
        this.rowSelected.classList.remove('selected');
        row.classList.add('selected');
        this.rowSelected = row;
        this.selectedJogador = jogador;
    }
    getColor() {
        if (this.currentColor == 'primary') {
            this.currentColor = 'tertiary';
            return 'tertiary';
        }
        else {
            this.currentColor = 'primary';
            return "primary";
        }
    }
    changeTemplate() {
        this.promisse = this.mesaService.findMesa(this.mesa.idMesa);
        switch (this.abaAtual) {
            case 'info':
                this.template = {
                    nome: 'Jogadores',
                    codigo: 'Código do Jogador',
                    tabelaCodigo: 'Código',
                    tabelaNome: 'Apelido',
                    tipo: 'jogador',
                };
                const { idMesa } = this.storageService.getSelectedMesa();
                this.promisse = this.mesaService.findMesaInicial2(idMesa);
                break;
            case 'regras':
                this.template = {
                    nome: 'Regras',
                    codigo: 'Código da Regra',
                    tabelaCodigo: 'Código',
                    tabelaNome: 'Nome',
                    tipo: 'regra',
                };
                break;
            case 'npcs':
                this.template = {
                    nome: 'NPCs',
                    codigo: 'Código do NPC',
                    tabelaCodigo: 'Código',
                    tabelaNome: 'Nome',
                    tipo: 'npc',
                };
                break;
            case 'faccoes':
                this.template = {
                    nome: 'Facções',
                    codigo: 'Código da Facção',
                    tabelaCodigo: 'Código',
                    tabelaNome: 'Nome',
                    tipo: 'faccao',
                };
                break;
            case 'capitulo':
                this.template = {
                    nome: 'Capítulos',
                    codigo: 'Código do capítulo',
                    tabelaCodigo: 'Código',
                    tabelaNome: 'Nome',
                    tipo: 'capitulo',
                };
                break;
            case 'mapa':
                this.template = {
                    nome: 'Mapas',
                    codigo: 'Código do mapa',
                    tabelaCodigo: 'Código',
                    tabelaNome: 'Nome',
                    tipo: 'mapa',
                };
                break;
        }
    }
    mudaAba(event) {
        // this.setPromisse();
        this.promisse = this.mesaService.findMesaInicial();
        if (this.abaAtual == 'npcs') {
            this.atributoSelecionado = 'aliados';
        }
        else {
            this.atributoSelecionado = 'faccoesBoas';
        }
        this.changeTemplate();
        this.mesaService.setComponentAtual(this.abaAtual);
    }
    mudaAtributo(event) {
        if (this.abaAtual == 'npcs') {
            switch (event) {
                case 'bom':
                    this.atributoSelecionado = 'aliados';
                    break;
                case 'neutro':
                    this.atributoSelecionado = 'neutros';
                    break;
                case 'mau':
                    this.atributoSelecionado = 'inimigos';
                    break;
                default:
                    this.atributoSelecionado = 'aliados';
                    break;
            }
        }
        else {
            switch (event) {
                case 'bom':
                    this.atributoSelecionado = 'faccoesBoas';
                    break;
                case 'neutro':
                    this.atributoSelecionado = 'faccoesNeutras';
                    break;
                case 'mau':
                    this.atributoSelecionado = 'faccoesHostis';
                    break;
                default:
                    this.atributoSelecionado = 'faccoesBoas';
                    break;
            }
        }
    }
    modalClosed(evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.abaAtual = 'info';
        });
    }
    newNPC() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { idFichaModelo } = this.mesa;
            const modal = yield this.modalInterno.create({
                component: _criar_npc_mesa_criar_npc_mesa_component__WEBPACK_IMPORTED_MODULE_7__["CriarNpcMesaComponent"],
                componentProps: {
                    idFichaModelo,
                    cancelarBTN: true,
                },
                backdropDismiss: false,
                cssClass: "my-custom-modal-css",
            });
            return yield modal.present();
        });
    }
};
MesaInicialComponent.ctorParameters = () => [
    { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
MesaInicialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mesa-inicial',
        template: __webpack_require__(/*! raw-loader!./mesa-inicial.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.html"),
        styles: [__webpack_require__(/*! ./mesa-inicial.component.scss */ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"],
        src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], MesaInicialComponent);



/***/ }),

/***/ "./src/app/components/criacoes/mesa.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/criacoes/mesa.module.ts ***!
  \****************************************************/
/*! exports provided: MesaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaModule", function() { return MesaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm2015/primeng-card.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var _rpg_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rpg.module */ "./src/app/components/criacoes/rpg.module.ts");
/* harmony import */ var _mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mesa-inicial/mesa-inicial.component */ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gerencia-componente/gerencia-componente.component */ "./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.ts");
/* harmony import */ var _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalha-componente/detalha-componente.component */ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.ts");
/* harmony import */ var _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detalha-npc/detalha-npc.component */ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./regra-new/regra-new.component */ "./src/app/components/criacoes/regra-new/regra-new.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");
/* harmony import */ var _criar_npc_mesa_criar_npc_mesa_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./criar-npc-mesa/criar-npc-mesa.module */ "./src/app/components/criacoes/criar-npc-mesa/criar-npc-mesa.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/components/footer/footer.module.ts");
























let MesaModule = class MesaModule {
};
MesaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_12__["MesaInicialComponent"], _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_14__["GerenciaComponenteComponent"], _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_16__["DetalhaNpcComponent"],
            _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_15__["DetalhaComponenteComponent"], _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_20__["RegraNewComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _rpg_module__WEBPACK_IMPORTED_MODULE_11__["RpgModule"],
            _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_13__["LoadSpinnerModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_17__["FichasModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
            _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_18__["PaginacaoModule"],
            _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_19__["ListasModule"],
            _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_21__["ImagemDisplayModule"],
            _criar_npc_mesa_criar_npc_mesa_module__WEBPACK_IMPORTED_MODULE_22__["CriarNpcMesaModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_23__["FooterModule"]
        ],
        exports: [_mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_12__["MesaInicialComponent"], _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_14__["GerenciaComponenteComponent"], _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_16__["DetalhaNpcComponent"],
            _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_15__["DetalhaComponenteComponent"], _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_20__["RegraNewComponent"],],
        entryComponents: [_mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_12__["MesaInicialComponent"], _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_14__["GerenciaComponenteComponent"], _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_16__["DetalhaNpcComponent"],
            _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_15__["DetalhaComponenteComponent"], _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_20__["RegraNewComponent"],]
    })
], MesaModule);



/***/ }),

/***/ "./src/app/components/criacoes/regra-new/regra-new.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/criacoes/regra-new/regra-new.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvcmVncmEtbmV3L3JlZ3JhLW5ldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/criacoes/regra-new/regra-new.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/regra-new/regra-new.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegraNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegraNewComponent", function() { return RegraNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");







let RegraNewComponent = class RegraNewComponent {
    constructor(modalCtrl, mesaService, formBuilder, alertController, storage, toast) {
        this.modalCtrl = modalCtrl;
        this.mesaService = mesaService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.storage = storage;
        this.toast = toast;
        this.loading = false;
        this.formRegra = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() { }
    addRegra() {
        this.loading = true;
        const regra = {
            nome: this.formRegra.get('nome').value,
            descricao: this.formRegra.get('descricao').value
        };
        const idMesa = this.mesaService.getMesaSelecionada();
        //console.log('Mesa ID:', idMesa)
        this.mesaService.addRegraNew(idMesa, regra)
            .subscribe(res => {
            //console.log(res);
            this.loading = false;
            this.callToast('success', 'Adicionado!', 'Regra adicionada com sucesso!');
            this.modalCtrl.dismiss(res.sistema.sistemas);
        }, error => {
            this.loading = false;
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
        this.modalCtrl.dismiss();
    }
};
RegraNewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
RegraNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regra-new',
        template: __webpack_require__(/*! raw-loader!./regra-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/regra-new/regra-new.component.html"),
        styles: [__webpack_require__(/*! ./regra-new.component.scss */ "./src/app/components/criacoes/regra-new/regra-new.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
], RegraNewComponent);



/***/ }),

/***/ "./src/app/contmesa/contmesa-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contmesa/contmesa-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContmesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContmesaPageRoutingModule", function() { return ContmesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contmesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contmesa.page */ "./src/app/contmesa/contmesa.page.ts");




const routes = [
    {
        path: '',
        component: _contmesa_page__WEBPACK_IMPORTED_MODULE_3__["ContmesaPage"]
    }
];
let ContmesaPageRoutingModule = class ContmesaPageRoutingModule {
};
ContmesaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContmesaPageRoutingModule);



/***/ }),

/***/ "./src/app/contmesa/contmesa.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contmesa/contmesa.module.ts ***!
  \*********************************************/
/*! exports provided: ContmesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContmesaPageModule", function() { return ContmesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contmesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contmesa-routing.module */ "./src/app/contmesa/contmesa-routing.module.ts");
/* harmony import */ var _contmesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contmesa.page */ "./src/app/contmesa/contmesa.page.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_criacoes_mesa_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/mesa.module */ "./src/app/components/criacoes/mesa.module.ts");









let ContmesaPageModule = class ContmesaPageModule {
};
ContmesaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contmesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContmesaPageRoutingModule"],
            _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
            _components_criacoes_mesa_module__WEBPACK_IMPORTED_MODULE_8__["MesaModule"]
        ],
        declarations: [_contmesa_page__WEBPACK_IMPORTED_MODULE_6__["ContmesaPage"]]
    })
], ContmesaPageModule);



/***/ }),

/***/ "./src/app/contmesa/contmesa.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contmesa/contmesa.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udG1lc2EvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbnRtZXNhXFxjb250bWVzYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRtZXNhL2NvbnRtZXNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb250bWVzYS9jb250bWVzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contmesa/contmesa.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contmesa/contmesa.page.ts ***!
  \*******************************************/
/*! exports provided: ContmesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContmesaPage", function() { return ContmesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");






let ContmesaPage = class ContmesaPage {
    constructor(mesaService, storageService, plataform, fundoService) {
        this.mesaService = mesaService;
        this.storageService = storageService;
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.idMesa = '';
        this.img = '';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { idMesa } = this.storageService.getSelectedMesa();
            this.idMesa = idMesa;
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
};
ContmesaPage.ctorParameters = () => [
    { type: _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_3__["MesasService"] },
    { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_5__["FundoService"] }
];
ContmesaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contmesa',
        template: __webpack_require__(/*! raw-loader!./contmesa.page.html */ "./node_modules/raw-loader/index.js!./src/app/contmesa/contmesa.page.html"),
        styles: [__webpack_require__(/*! ./contmesa.page.scss */ "./src/app/contmesa/contmesa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_3__["MesasService"], _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_5__["FundoService"]])
], ContmesaPage);



/***/ })

}]);
//# sourceMappingURL=contmesa-contmesa-module-es2015.js.map