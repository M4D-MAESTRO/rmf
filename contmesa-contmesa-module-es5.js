(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contmesa-contmesa-module"],{

/***/ "./node_modules/primeng/fesm5/primeng-table.js":
/*!*****************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-table.js ***!
  \*****************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm5/primeng-paginator.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm5/primeng-utils.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var TableService = /** @class */ (function () {
    function TableService() {
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
    TableService.prototype.onSort = function (sortMeta) {
        this.sortSource.next(sortMeta);
    };
    TableService.prototype.onSelectionChange = function () {
        this.selectionSource.next();
    };
    TableService.prototype.onContextMenu = function (data) {
        this.contextMenuSource.next(data);
    };
    TableService.prototype.onValueChange = function (value) {
        this.valueSource.next(value);
    };
    TableService.prototype.onTotalRecordsChange = function (value) {
        this.totalRecordsSource.next(value);
    };
    TableService.prototype.onColumnsChange = function (columns) {
        this.columnsSource.next(columns);
    };
    TableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TableService);
    return TableService;
}());
var Table = /** @class */ (function () {
    function Table(el, zone, tableService, cd) {
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
        this.rowTrackBy = function (index, item) { return item; };
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
    Table.prototype.ngOnInit = function () {
        if (this.lazy && this.lazyLoadOnInit) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
            if (this.restoringFilter) {
                this.restoringFilter = false;
            }
        }
        this.initialized = true;
    };
    Table.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'caption':
                    _this.captionTemplate = item.template;
                    break;
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'loadingbody':
                    _this.loadingBodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'summary':
                    _this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    _this.colGroupTemplate = item.template;
                    break;
                case 'rowexpansion':
                    _this.expandedRowTemplate = item.template;
                    break;
                case 'frozenrows':
                    _this.frozenRowsTemplate = item.template;
                    break;
                case 'frozenheader':
                    _this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    _this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    _this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    _this.frozenColGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    _this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    _this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    _this.paginatorRightTemplate = item.template;
                    break;
            }
        });
    };
    Table.prototype.ngAfterViewInit = function () {
        if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
        }
    };
    Table.prototype.ngOnChanges = function (simpleChange) {
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
    };
    Object.defineProperty(Table.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (cols) {
            this._columns = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (val) {
            this._first = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (val) {
            this._rows = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.tableService.onTotalRecordsChange(this._totalRecords);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "multiSortMeta", {
        get: function () {
            return this._multiSortMeta;
        },
        set: function (val) {
            this._multiSortMeta = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        set: function (val) {
            this._selection = val;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.updateSelectionKeys = function () {
        var e_1, _a;
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                try {
                    for (var _b = __values(this._selection), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var data = _c.value;
                        this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data, this.dataKey))] = 1;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this._selection, this.dataKey))] = 1;
            }
        }
    };
    Table.prototype.onPageChange = function (event) {
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
    };
    Table.prototype.sort = function (event) {
        var originalEvent = event.originalEvent;
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
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);
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
    };
    Table.prototype.sortSingle = function () {
        var _this = this;
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
                    this.value.sort(function (data1, data2) {
                        var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, _this.sortField);
                        var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, _this.sortField);
                        var result = null;
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
                        return (_this.sortOrder * result);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            var sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
        }
    };
    Table.prototype.sortMultiple = function () {
        var _this = this;
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
                    this.value.sort(function (data1, data2) {
                        return _this.multisortField(data1, data2, _this.multiSortMeta, 0);
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
    };
    Table.prototype.multisortField = function (data1, data2, multiSortMeta, index) {
        var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data1, multiSortMeta[index].field);
        var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(data2, multiSortMeta[index].field);
        var result = null;
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
    };
    Table.prototype.getSortMeta = function (field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    };
    Table.prototype.isSorted = function (field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    };
    Table.prototype.handleRowClick = function (event) {
        var target = event.originalEvent.target;
        var targetNode = target.nodeName;
        var parentNode = target.parentElement && target.parentElement.nodeName;
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
                var rowData = event.rowData;
                var selected = this.isSelected(rowData);
                var metaSelection = this.rowTouched ? false : this.metaKeySelection;
                var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                if (metaSelection) {
                    var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            var selectionIndex_1 = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
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
                            this._selection = __spread(this.selection, [rowData]);
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
                            var selectionIndex_2 = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = this.selection ? __spread(this.selection, [rowData]) : [rowData];
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
    };
    Table.prototype.handleRowTouchEnd = function (event) {
        this.rowTouched = true;
    };
    Table.prototype.handleRowRightClick = function (event) {
        if (this.contextMenu) {
            var rowData = event.rowData;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = rowData;
                this.contextMenuSelectionChange.emit(rowData);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: rowData, index: event.rowIndex });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(rowData);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                var selected = this.isSelected(rowData);
                var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
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
    };
    Table.prototype.selectRange = function (event, rowIndex) {
        var rangeStart, rangeEnd;
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
        for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
            if (!this.isSelected(rangeRowData)) {
                this._selection = __spread(this.selection, [rangeRowData]);
                var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, this.dataKey)) : null;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
                this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            }
        }
        this.selectionChange.emit(this.selection);
    };
    Table.prototype.clearSelectionRange = function (event) {
        var rangeStart, rangeEnd;
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
        var _loop_1 = function (i) {
            var rangeRowData = this_1.value[i];
            var selectionIndex = this_1.findIndexInSelection(rangeRowData);
            this_1._selection = this_1.selection.filter(function (val, i) { return i != selectionIndex; });
            var dataKeyValue = this_1.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rangeRowData, this_1.dataKey)) : null;
            if (dataKeyValue) {
                delete this_1.selectionKeys[dataKeyValue];
            }
            this_1.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        };
        var this_1 = this;
        for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop_1(i);
        }
    };
    Table.prototype.isSelected = function (rowData) {
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
    };
    Table.prototype.findIndexInSelection = function (rowData) {
        var index = -1;
        if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Table.prototype.toggleRowWithRadio = function (event, rowData) {
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
    };
    Table.prototype.toggleRowWithCheckbox = function (event, rowData) {
        this.selection = this.selection || [];
        var selected = this.isSelected(rowData);
        var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
        this.preventSelectionSetterPropagation = true;
        if (selected) {
            var selectionIndex_3 = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_3; });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = this.selection ? __spread(this.selection, [rowData]) : [rowData];
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
    };
    Table.prototype.toggleRowsWithCheckbox = function (event, check) {
        this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
        if (this.isStateful()) {
            this.saveState();
        }
    };
    Table.prototype.equals = function (data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(data1, data2, this.dataKey);
    };
    Table.prototype.filter = function (value, field, matchMode) {
        var _this = this;
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this.filterTimeout = setTimeout(function () {
            _this._filter();
            _this.filterTimeout = null;
        }, this.filterDelay);
        this.anchorRowIndex = null;
    };
    Table.prototype.filterGlobal = function (value, matchMode) {
        this.filter(value, 'global', matchMode);
    };
    Table.prototype.isFilterBlank = function (filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    };
    Table.prototype._filter = function () {
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
                var globalFilterFieldsArray = void 0;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredValue = [];
                for (var i = 0; i < this.value.length; i++) {
                    var localMatch = true;
                    var globalMatch = false;
                    var localFiltered = false;
                    for (var prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            localFiltered = true;
                            var filterMeta = this.filters[prop];
                            var filterField = prop;
                            var filterValue = filterMeta.value;
                            var filterMatchMode = filterMeta.matchMode || 'startsWith';
                            var dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], filterField);
                            var filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue)) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                            var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            globalMatch = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"][this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value);
                            if (globalMatch) {
                                break;
                            }
                        }
                    }
                    var matches = void 0;
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
    };
    Table.prototype.hasFilter = function () {
        var empty = true;
        for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    };
    Table.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    };
    Table.prototype.reset = function () {
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
    };
    Table.prototype.exportCSV = function (options) {
        var _this = this;
        var data = this.filteredValue || this.value;
        var csv = '';
        if (options && options.selectionOnly) {
            data = this.selection || [];
        }
        //headers
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (column.exportable !== false && column.field) {
                csv += '"' + (column.header || column.field) + '"';
                if (i < (this.columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < _this.columns.length; i_1++) {
                var column = _this.columns[i_1];
                if (column.exportable !== false && column.field) {
                    var cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(record, column.field);
                    if (cellData != null) {
                        if (_this.exportFunction) {
                            cellData = _this.exportFunction({
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
                    if (i_1 < (_this.columns.length - 1)) {
                        csv += _this.csvSeparator;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            var link = document.createElement("a");
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
    };
    Table.prototype.updateEditingCell = function (cell, data, field) {
        this.editingCell = cell;
        this.editingCellData = data;
        this.editingCellField = field;
        this.bindDocumentEditListener();
    };
    Table.prototype.isEditingCellValid = function () {
        return (this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
    };
    Table.prototype.bindDocumentEditListener = function () {
        var _this = this;
        if (!this.documentEditListener) {
            this.documentEditListener = function (event) {
                if (_this.editingCell && !_this.editingCellClick && _this.isEditingCellValid()) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(_this.editingCell, 'ui-editing-cell');
                    _this.editingCell = null;
                    _this.onEditComplete.emit({ field: _this.editingCellField, data: _this.editingCellData, originalEvent: event });
                    _this.editingCellField = null;
                    _this.editingCellData = null;
                    _this.unbindDocumentEditListener();
                }
                _this.editingCellClick = false;
            };
            document.addEventListener('click', this.documentEditListener);
        }
    };
    Table.prototype.unbindDocumentEditListener = function () {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    };
    Table.prototype.initRowEdit = function (rowData) {
        var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
        this.editingRowKeys[dataKeyValue] = true;
    };
    Table.prototype.saveRowEdit = function (rowData, rowElement) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
        }
    };
    Table.prototype.cancelRowEdit = function (rowData) {
        var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
        delete this.editingRowKeys[dataKeyValue];
    };
    Table.prototype.toggleRow = function (rowData, event) {
        if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
        }
        var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
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
    };
    Table.prototype.isRowExpanded = function (rowData) {
        return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
    };
    Table.prototype.isRowEditing = function (rowData) {
        return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
    };
    Table.prototype.isSingleSelectionMode = function () {
        return this.selectionMode === 'single';
    };
    Table.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode === 'multiple';
    };
    Table.prototype.onColumnResizeBegin = function (event) {
        var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
        event.preventDefault();
    };
    Table.prototype.onColumnResize = function (event) {
        var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    };
    Table.prototype.onColumnResizeEnd = function (event, column) {
        var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        var columnWidth = column.offsetWidth;
        var minWidth = parseInt(column.style.minWidth || 15);
        if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
        }
        var newColumnWidth = columnWidth + delta;
        if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
                var nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    var nextColumnWidth = nextColumn.offsetWidth - delta;
                    var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            var scrollableView = this.findParentScrollableView(column);
                            var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-body-table');
                            var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
                            var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
                            var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
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
                        var containerWidth = this.tableViewChild.nativeElement.style.width;
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
    };
    Table.prototype.setScrollableItemsWidthOnExpandResize = function (column, newColumnWidth, delta) {
        var scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
        var scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
        var scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-header');
        var scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-footer');
        var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableBody, 'table.ui-table-scrollable-body-table');
        var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableHeader, 'table.ui-table-scrollable-header-table');
        var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableFooter, 'table.ui-table-scrollable-footer-table');
        var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
        var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
        var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
        var setWidth = function (container, table, width, isContainerInViewport) {
            if (container && table) {
                container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                table.style.width = width + 'px';
            }
        };
        setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
        setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
        setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
        if (column) {
            var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        }
    };
    Table.prototype.findParentScrollableView = function (column) {
        if (column) {
            var parent_1 = column.parentElement;
            while (parent_1 && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(parent_1, 'ui-table-scrollable-view')) {
                parent_1 = parent_1.parentElement;
            }
            return parent_1;
        }
        else {
            return null;
        }
    };
    Table.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                var col = colGroup.children[resizeColumnIndex];
                var nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    };
    Table.prototype.onColumnDragStart = function (event, columnElement) {
        this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onColumnDragEnter = function (event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
                var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropHeader, 'preorderablecolumn');
                var targetLeft = dropHeaderOffset.left - containerOffset.left;
                var targetTop = containerOffset.top - dropHeaderOffset.top;
                var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
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
    };
    Table.prototype.onColumnDragLeave = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    };
    Table.prototype.onColumnDrop = function (event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropColumn, 'preorderablecolumn');
            var allowDrop = (dragIndex != dropIndex);
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
    };
    Table.prototype.onRowDragStart = function (event, index) {
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onRowDragOver = function (event, index, rowElement) {
        if (this.rowDragging && this.draggedRowIndex !== index) {
            var rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWindowScrollTop();
            var pageY = event.pageY;
            var rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(rowElement) / 2;
            var prevRowElement = rowElement.previousElementSibling;
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
    };
    Table.prototype.onRowDragLeave = function (event, rowElement) {
        var prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-top');
    };
    Table.prototype.onRowDragEnd = function (event) {
        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
    };
    Table.prototype.onRowDrop = function (event, rowElement) {
        if (this.droppedRowIndex != null) {
            var dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
                dragIndex: this.draggedRowIndex,
                dropIndex: dropIndex
            });
        }
        //cleanup
        this.onRowDragLeave(event, rowElement);
        this.onRowDragEnd(event);
    };
    Table.prototype.handleVirtualScroll = function (event) {
        var _this = this;
        this.first = (event.page - 1) * this.rows;
        this.firstChange.emit(this.first);
        this.virtualScrollCallback = event.callback;
        this.zone.run(function () {
            if (_this.virtualScrollTimer) {
                clearTimeout(_this.virtualScrollTimer);
            }
            _this.virtualScrollTimer = setTimeout(function () {
                _this.onLazyLoad.emit(_this.createLazyLoadMetadata());
            }, _this.virtualScrollDelay);
        });
    };
    Table.prototype.isEmpty = function () {
        var data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    };
    Table.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Table.prototype.getStorage = function () {
        switch (this.stateStorage) {
            case 'local':
                return window.localStorage;
            case 'session':
                return window.sessionStorage;
            default:
                throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    };
    Table.prototype.isStateful = function () {
        return this.stateKey != null;
    };
    Table.prototype.saveState = function () {
        var storage = this.getStorage();
        var state = {};
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
    };
    Table.prototype.clearState = function () {
        var storage = this.getStorage();
        if (this.stateKey) {
            storage.removeItem(this.stateKey);
        }
    };
    Table.prototype.restoreState = function () {
        var _this = this;
        var storage = this.getStorage();
        var stateString = storage.getItem(this.stateKey);
        if (stateString) {
            var state_1 = JSON.parse(stateString);
            if (this.paginator) {
                this.first = state_1.first;
                this.rows = state_1.rows;
                this.firstChange.emit(this.first);
                this.rowsChange.emit(this.rows);
            }
            if (state_1.sortField) {
                this.restoringSort = true;
                this._sortField = state_1.sortField;
                this._sortOrder = state_1.sortOrder;
            }
            if (state_1.multiSortMeta) {
                this.restoringSort = true;
                this._multiSortMeta = state_1.multiSortMeta;
            }
            if (state_1.filters) {
                this.restoringFilter = true;
                this.filters = state_1.filters;
            }
            if (this.resizableColumns) {
                this.columnWidthsState = state_1.columnWidths;
                this.tableWidthState = state_1.tableWidth;
            }
            if (state_1.expandedRowKeys) {
                this.expandedRowKeys = state_1.expandedRowKeys;
            }
            if (state_1.selection) {
                Promise.resolve(null).then(function () { return _this.selectionChange.emit(state_1.selection); });
            }
            this.stateRestored = true;
            this.onStateRestore.emit(state_1);
        }
    };
    Table.prototype.saveColumnWidths = function (state) {
        var widths = [];
        var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
        headers.map(function (header) { return widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(header)); });
        state.columnWidths = widths.join(',');
        if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table').style.width :
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.tableViewChild.nativeElement) + 'px';
        }
    };
    Table.prototype.restoreColumnWidths = function () {
        if (this.columnWidthsState) {
            var widths_1 = this.columnWidthsState.split(',');
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
                var headerCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table > colgroup > col');
                var bodyCols = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-body-table > colgroup > col');
                headerCols.map(function (col, index) { return col.style.width = widths_1[index] + 'px'; });
                bodyCols.map(function (col, index) { return col.style.width = widths_1[index] + 'px'; });
            }
            else {
                var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.tableViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
                headers.map(function (header, index) { return header.style.width = widths_1[index] + 'px'; });
            }
        }
    };
    Table.prototype.saveColumnOrder = function (state) {
        if (this.columns) {
            var columnOrder_1 = [];
            this.columns.map(function (column) {
                columnOrder_1.push(column.field || column.key);
            });
            state.columnOrder = columnOrder_1;
        }
    };
    Table.prototype.restoreColumnOrder = function () {
        var _this = this;
        var storage = this.getStorage();
        var stateString = storage.getItem(this.stateKey);
        if (stateString) {
            var state = JSON.parse(stateString);
            var columnOrder = state.columnOrder;
            if (columnOrder) {
                var reorderedColumns_1 = [];
                columnOrder.map(function (key) { return reorderedColumns_1.push(_this.findColumnByKey(key)); });
                this.columnOrderStateRestored = true;
                this.columns = reorderedColumns_1;
            }
        }
    };
    Table.prototype.findColumnByKey = function (key) {
        var e_2, _a;
        if (this.columns) {
            try {
                for (var _b = __values(this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var col = _c.value;
                    if (col.key === key || col.field === key)
                        return col;
                    else
                        continue;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            return null;
        }
    };
    Table.prototype.ngOnDestroy = function () {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.initialized = null;
    };
    Table.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: TableService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
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
            template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading && showLoader\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'ui-table-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            \n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table role=\"grid\" #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                    <tfoot *ngIf=\"footerTemplate\" class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-scrollable-view ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"ui-table-scrollable-view\" [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n            \n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            \n                <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down ui-table-reorder-indicator-up\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up ui-table-reorder-indicator-down\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
            providers: [TableService]
        })
    ], Table);
    return Table;
}());
var TableBody = /** @class */ (function () {
    function TableBody(dt) {
        this.dt = dt;
    }
    TableBody.ctorParameters = function () { return [
        { type: Table }
    ]; };
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
            template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n    "
        })
    ], TableBody);
    return TableBody;
}());
var ScrollableView = /** @class */ (function () {
    function ScrollableView(dt, el, zone) {
        var _this = this;
        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadingArray = [];
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignScrollBar();
                    if (_this.scrollLoadingTableViewChild && _this.scrollLoadingTableViewChild.nativeElement) {
                        _this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                    }
                }, 50);
            });
        });
        if (this.dt.virtualScroll) {
            this.totalRecordsSubscription = this.dt.tableService.totalRecordsSource$.subscribe(function () {
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.setVirtualScrollerHeight();
                    }, 50);
                });
            });
        }
        this.loadingArray = Array(this.dt.rows).fill(1);
        this.initialized = false;
    }
    Object.defineProperty(ScrollableView.prototype, "scrollHeight", {
        get: function () {
            return this._scrollHeight;
        },
        set: function (val) {
            this._scrollHeight = val;
            this.setScrollHeight();
        },
        enumerable: true,
        configurable: true
    });
    ScrollableView.prototype.ngAfterViewChecked = function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.setScrollHeight();
            this.initialized = true;
        }
    };
    ScrollableView.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-table-scrollable-body');
            }
        }
        else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
                this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarHeight() + 'px';
            }
            var scrollableView = this.el.nativeElement.nextElementSibling;
            if (scrollableView) {
                this.scrollableSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
            }
        }
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (this.frozen) {
            this.columnsSubscription = this.dt.tableService.columnsSource$.subscribe(function () {
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.setScrollHeight();
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
    };
    ScrollableView.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var scrollBarWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth();
            if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                _this.scrollHeaderViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
            }
            if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
            }
            if (!_this.frozen) {
                _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
            }
        });
    };
    ScrollableView.prototype.unbindEvents = function () {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
    };
    ScrollableView.prototype.onHeaderScroll = function (event) {
        var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    };
    ScrollableView.prototype.onFooterScroll = function (event) {
        var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    };
    ScrollableView.prototype.onBodyScroll = function (event) {
        var _this = this;
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
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
            var tableHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement);
            var pageHeight_1 = this.dt.virtualRowHeight * this.dt.rows;
            var virtualTableHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.virtualScrollerViewChild.nativeElement);
            var pageCount = (virtualTableHeight / pageHeight_1) || 1;
            var scrollBodyTop = this.scrollTableViewChild.nativeElement.style.top || '0';
            if ((this.scrollBodyViewChild.nativeElement.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight) || (this.scrollBodyViewChild.nativeElement.scrollTop < parseFloat(scrollBodyTop))) {
                if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                    this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
                    this.scrollLoadingTableViewChild.nativeElement.style.top = this.scrollBodyViewChild.nativeElement.scrollTop + 'px';
                }
                var page_1 = Math.floor((this.scrollBodyViewChild.nativeElement.scrollTop * pageCount) / (this.scrollBodyViewChild.nativeElement.scrollHeight)) + 1;
                this.dt.handleVirtualScroll({
                    page: page_1,
                    callback: function () {
                        if (_this.scrollLoadingTableViewChild && _this.scrollLoadingTableViewChild.nativeElement) {
                            _this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                        }
                        _this.scrollTableViewChild.nativeElement.style.top = ((page_1 - 1) * pageHeight_1) + 'px';
                        if (_this.frozenSiblingBody) {
                            _this.frozenSiblingBody.children[0].style.top = _this.scrollTableViewChild.nativeElement.style.top;
                        }
                        _this.dt.anchorRowIndex = null;
                    }
                });
            }
        }
    };
    ScrollableView.prototype.setScrollHeight = function () {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                var relativeHeight = void 0;
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.dt.el.nativeElement.children[0]);
                if (this.scrollHeight.includes("calc")) {
                    var percentHeight = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("(") + 1, this.scrollHeight.indexOf("%")));
                    var diffValue = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("-") + 1, this.scrollHeight.indexOf(")")));
                    relativeHeight = (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.dt.el.nativeElement.parentElement) * percentHeight / 100) - diffValue;
                }
                else {
                    relativeHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.dt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                }
                var staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                var scrollBodyHeight = (relativeHeight - staticHeight);
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
    };
    ScrollableView.prototype.setVirtualScrollerHeight = function () {
        if (this.virtualScrollerViewChild.nativeElement) {
            this.virtualScrollerViewChild.nativeElement.style.height = this.dt.totalRecords * this.dt.virtualRowHeight + 'px';
        }
    };
    ScrollableView.prototype.hasVerticalOverflow = function () {
        return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
    };
    ScrollableView.prototype.alignScrollBar = function () {
        if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
        this.initialized = false;
    };
    ScrollableView.prototype.ngOnDestroy = function () {
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
    };
    ScrollableView.ctorParameters = function () { return [
        { type: Table },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
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
            template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div #scrollBody class=\"ui-table-scrollable-body\">\n            <table #scrollTable [ngClass]=\"{'ui-table-scrollable-body-table': true, 'ui-table-virtual-table': dt.virtualScroll}\" [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n            </table>\n            <table #loadingTable *ngIf=\"dt.virtualScroll && dt.loadingBodyTemplate != null\" [ngClass]=\"{'ui-table-scrollable-body-table ui-table-loading-virtual-table': true, 'ui-table-virtual-table': dt.virtualScroll}\">\n                <tbody class=\"ui-table-tbody\">\n                    <ng-template ngFor [ngForOf]=\"loadingArray\">\n                        <ng-container *ngTemplateOutlet=\"dt.loadingBodyTemplate; context: {columns: columns}\"></ng-container>\n                    </ng-template>\n                </tbody>\n            </table>\n            <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            <div #virtualScroller class=\"ui-table-virtual-scroller\" *ngIf=\"dt.virtualScroll\"></div>\n        </div>\n        <div #scrollFooter class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
        })
    ], ScrollableView);
    return ScrollableView;
}());
var SortableColumn = /** @class */ (function () {
    function SortableColumn(dt) {
        var _this = this;
        this.dt = dt;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
                _this.updateSortState();
            });
        }
    }
    SortableColumn.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    };
    SortableColumn.prototype.updateSortState = function () {
        this.sorted = this.dt.isSorted(this.field);
    };
    SortableColumn.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
                originalEvent: event,
                field: this.field
            });
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
    };
    SortableColumn.prototype.onEnterKey = function (event) {
        this.onClick(event);
    };
    SortableColumn.prototype.isEnabled = function () {
        return this.pSortableColumnDisabled !== true;
    };
    SortableColumn.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SortableColumn.ctorParameters = function () { return [
        { type: Table }
    ]; };
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
    return SortableColumn;
}());
var SortIcon = /** @class */ (function () {
    function SortIcon(dt) {
        var _this = this;
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this.updateSortState();
        });
    }
    SortIcon.prototype.ngOnInit = function () {
        this.updateSortState();
    };
    SortIcon.prototype.onClick = function (event) {
        event.preventDefault();
    };
    SortIcon.prototype.updateSortState = function () {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    };
    SortIcon.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SortIcon.ctorParameters = function () { return [
        { type: Table }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], SortIcon.prototype, "field", void 0);
    SortIcon = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-sortIcon',
            template: "\n        <i class=\"ui-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-up': sortOrder === 1, 'pi-sort-down': sortOrder === -1, 'pi-sort': sortOrder === 0}\"></i>\n    "
        })
    ], SortIcon);
    return SortIcon;
}());
var SelectableRow = /** @class */ (function () {
    function SelectableRow(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.selected = _this.dt.isSelected(_this.data);
            });
        }
    }
    SelectableRow.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    };
    SelectableRow.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    };
    SelectableRow.prototype.onTouchEnd = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
        }
    };
    SelectableRow.prototype.onKeyDown = function (event) {
        if (this.isEnabled()) {
            var row = event.target;
            switch (event.which) {
                //down arrow
                case 40:
                    var nextRow = this.findNextSelectableRow(row);
                    if (nextRow) {
                        nextRow.focus();
                    }
                    event.preventDefault();
                    break;
                //up arrow
                case 38:
                    var prevRow = this.findPrevSelectableRow(row);
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
    };
    SelectableRow.prototype.findNextSelectableRow = function (row) {
        var nextRow = row.nextElementSibling;
        if (nextRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextRow, 'ui-selectable-row'))
                return nextRow;
            else
                return this.findNextSelectableRow(nextRow);
        }
        else {
            return null;
        }
    };
    SelectableRow.prototype.findPrevSelectableRow = function (row) {
        var prevRow = row.previousElementSibling;
        if (prevRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevRow, 'ui-selectable-row'))
                return prevRow;
            else
                return this.findPrevSelectableRow(prevRow);
        }
        else {
            return null;
        }
    };
    SelectableRow.prototype.isEnabled = function () {
        return this.pSelectableRowDisabled !== true;
    };
    SelectableRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SelectableRow.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
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
    return SelectableRow;
}());
var SelectableRowDblClick = /** @class */ (function () {
    function SelectableRowDblClick(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.selected = _this.dt.isSelected(_this.data);
            });
        }
    }
    SelectableRowDblClick.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    };
    SelectableRowDblClick.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    };
    SelectableRowDblClick.prototype.isEnabled = function () {
        return this.pSelectableRowDisabled !== true;
    };
    SelectableRowDblClick.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SelectableRowDblClick.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
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
    return SelectableRowDblClick;
}());
var ContextMenuRow = /** @class */ (function () {
    function ContextMenuRow(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
                _this.selected = _this.dt.equals(_this.data, data);
            });
        }
    }
    ContextMenuRow.prototype.onContextMenu = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowRightClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
            event.preventDefault();
        }
    };
    ContextMenuRow.prototype.isEnabled = function () {
        return this.pContextMenuRowDisabled !== true;
    };
    ContextMenuRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ContextMenuRow.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
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
    return ContextMenuRow;
}());
var RowToggler = /** @class */ (function () {
    function RowToggler(dt) {
        this.dt = dt;
    }
    RowToggler.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
        }
    };
    RowToggler.prototype.isEnabled = function () {
        return this.pRowTogglerDisabled !== true;
    };
    RowToggler.ctorParameters = function () { return [
        { type: Table }
    ]; };
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
    return RowToggler;
}());
var ResizableColumn = /** @class */ (function () {
    function ResizableColumn(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ResizableColumn.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
                _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
                _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
            });
        }
    };
    ResizableColumn.prototype.bindDocumentEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
            document.addEventListener('mousemove', _this.documentMouseMoveListener);
            _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
            document.addEventListener('mouseup', _this.documentMouseUpListener);
        });
    };
    ResizableColumn.prototype.unbindDocumentEvents = function () {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    };
    ResizableColumn.prototype.onMouseDown = function (event) {
        if (event.which === 1) {
            this.dt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
        }
    };
    ResizableColumn.prototype.onDocumentMouseMove = function (event) {
        this.dt.onColumnResize(event);
    };
    ResizableColumn.prototype.onDocumentMouseUp = function (event) {
        this.dt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    };
    ResizableColumn.prototype.isEnabled = function () {
        return this.pResizableColumnDisabled !== true;
    };
    ResizableColumn.prototype.ngOnDestroy = function () {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    };
    ResizableColumn.ctorParameters = function () { return [
        { type: Table },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);
    ResizableColumn = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pResizableColumn]'
        })
    ], ResizableColumn);
    return ResizableColumn;
}());
var ReorderableColumn = /** @class */ (function () {
    function ReorderableColumn(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ReorderableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    };
    ReorderableColumn.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragOverListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragEnterListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableColumn.prototype.unbindEvents = function () {
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
    };
    ReorderableColumn.prototype.onMouseDown = function (event) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    };
    ReorderableColumn.prototype.onDragStart = function (event) {
        this.dt.onColumnDragStart(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    ReorderableColumn.prototype.onDragEnter = function (event) {
        this.dt.onColumnDragEnter(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragLeave = function (event) {
        this.dt.onColumnDragLeave(event);
    };
    ReorderableColumn.prototype.onDrop = function (event) {
        if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
        }
    };
    ReorderableColumn.prototype.isEnabled = function () {
        return this.pReorderableColumnDisabled !== true;
    };
    ReorderableColumn.prototype.ngOnDestroy = function () {
        this.unbindEvents();
    };
    ReorderableColumn.ctorParameters = function () { return [
        { type: Table },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
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
    return ReorderableColumn;
}());
var EditableColumn = /** @class */ (function () {
    function EditableColumn(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    EditableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
        }
    };
    EditableColumn.prototype.onClick = function (event) {
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
    };
    EditableColumn.prototype.openCell = function () {
        var _this = this;
        this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field);
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
        this.dt.onEditInit.emit({ field: this.field, data: this.data });
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                var focusCellSelector = _this.pFocusCellSelector || 'input, textarea, select';
                var focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_this.el.nativeElement, focusCellSelector);
                if (focusableElement) {
                    focusableElement.focus();
                }
            }, 50);
        });
    };
    EditableColumn.prototype.closeEditingCell = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.dt.editingCell, 'ui-editing-cell');
        this.dt.editingCell = null;
        this.dt.editingCellData = null;
        this.dt.editingCellField = null;
        this.dt.unbindDocumentEditListener();
    };
    EditableColumn.prototype.onKeyDown = function (event) {
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
    };
    EditableColumn.prototype.findCell = function (element) {
        if (element) {
            var cell = element;
            while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.moveToPreviousCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.moveToNextCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(event.target, 'blur');
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.findPreviousEditableColumn = function (cell) {
        var prevCell = cell.previousElementSibling;
        if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;
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
    };
    EditableColumn.prototype.findNextEditableColumn = function (cell) {
        var nextCell = cell.nextElementSibling;
        if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;
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
    };
    EditableColumn.prototype.isEnabled = function () {
        return this.pEditableColumnDisabled !== true;
    };
    EditableColumn.ctorParameters = function () { return [
        { type: Table },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
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
    return EditableColumn;
}());
var EditableRow = /** @class */ (function () {
    function EditableRow(el) {
        this.el = el;
    }
    EditableRow.prototype.isEnabled = function () {
        return this.pEditableRowDisabled !== true;
    };
    EditableRow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
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
    return EditableRow;
}());
var InitEditableRow = /** @class */ (function () {
    function InitEditableRow(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    InitEditableRow.prototype.onClick = function (event) {
        this.dt.initRowEdit(this.editableRow.data);
        event.preventDefault();
    };
    InitEditableRow.ctorParameters = function () { return [
        { type: Table },
        { type: EditableRow }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
    ], InitEditableRow.prototype, "onClick", null);
    InitEditableRow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pInitEditableRow]'
        })
    ], InitEditableRow);
    return InitEditableRow;
}());
var SaveEditableRow = /** @class */ (function () {
    function SaveEditableRow(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    SaveEditableRow.prototype.onClick = function (event) {
        this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
        event.preventDefault();
    };
    SaveEditableRow.ctorParameters = function () { return [
        { type: Table },
        { type: EditableRow }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
    ], SaveEditableRow.prototype, "onClick", null);
    SaveEditableRow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pSaveEditableRow]'
        })
    ], SaveEditableRow);
    return SaveEditableRow;
}());
var CancelEditableRow = /** @class */ (function () {
    function CancelEditableRow(dt, editableRow) {
        this.dt = dt;
        this.editableRow = editableRow;
    }
    CancelEditableRow.prototype.onClick = function (event) {
        this.dt.cancelRowEdit(this.editableRow.data);
        event.preventDefault();
    };
    CancelEditableRow.ctorParameters = function () { return [
        { type: Table },
        { type: EditableRow }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event'])
    ], CancelEditableRow.prototype, "onClick", null);
    CancelEditableRow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pCancelEditableRow]'
        })
    ], CancelEditableRow);
    return CancelEditableRow;
}());
var CellEditor = /** @class */ (function () {
    function CellEditor(dt, editableColumn, editableRow) {
        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
    }
    CellEditor.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'input':
                    _this.inputTemplate = item.template;
                    break;
                case 'output':
                    _this.outputTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(CellEditor.prototype, "editing", {
        get: function () {
            return (this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement) ||
                (this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data));
        },
        enumerable: true,
        configurable: true
    });
    CellEditor.ctorParameters = function () { return [
        { type: Table },
        { type: EditableColumn, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: EditableRow, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"])
    ], CellEditor.prototype, "templates", void 0);
    CellEditor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-cellEditor',
            template: "\n        <ng-container *ngIf=\"editing\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!editing\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
    ], CellEditor);
    return CellEditor;
}());
var TableRadioButton = /** @class */ (function () {
    function TableRadioButton(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableRadioButton.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableRadioButton.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.dt.toggleRowWithRadio({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    };
    TableRadioButton.prototype.onFocus = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.onBlur = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TableRadioButton.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
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
            template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"radio\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':checked}\"></span>\n            </div>\n        </div>\n    "
        })
    ], TableRadioButton);
    return TableRadioButton;
}());
var TableCheckbox = /** @class */ (function () {
    function TableCheckbox(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableCheckbox.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableCheckbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
                originalEvent: event,
                rowIndex: this.index
            }, this.value);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    };
    TableCheckbox.prototype.onFocus = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.onBlur = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TableCheckbox.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
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
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
        })
    ], TableCheckbox);
    return TableCheckbox;
}());
var TableHeaderCheckbox = /** @class */ (function () {
    function TableHeaderCheckbox(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
    }
    TableHeaderCheckbox.prototype.ngOnInit = function () {
        this.checked = this.updateCheckedState();
    };
    TableHeaderCheckbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
                this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    };
    TableHeaderCheckbox.prototype.onFocus = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.onBlur = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.isDisabled = function () {
        return this.disabled || !this.dt.value || !this.dt.value.length;
    };
    TableHeaderCheckbox.prototype.ngOnDestroy = function () {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    };
    TableHeaderCheckbox.prototype.updateCheckedState = function () {
        if (this.dt.filteredValue) {
            var val = this.dt.filteredValue;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked());
        }
        else {
            var val = this.dt.value;
            return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === val.length);
        }
    };
    TableHeaderCheckbox.prototype.isAllFilteredValuesChecked = function () {
        var e_3, _a;
        if (!this.dt.filteredValue) {
            return false;
        }
        else {
            try {
                for (var _b = __values(this.dt.filteredValue), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var rowData = _c.value;
                    if (!this.dt.isSelected(rowData)) {
                        return false;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return true;
        }
    };
    TableHeaderCheckbox.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('box', { static: true })
    ], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], TableHeaderCheckbox.prototype, "disabled", void 0);
    TableHeaderCheckbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-tableHeaderCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"isDisabled()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': isDisabled()}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
        })
    ], TableHeaderCheckbox);
    return TableHeaderCheckbox;
}());
var ReorderableRowHandle = /** @class */ (function () {
    function ReorderableRowHandle(el) {
        this.el = el;
    }
    ReorderableRowHandle.prototype.ngAfterViewInit = function () {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
    };
    ReorderableRowHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pReorderableRowHandle")
    ], ReorderableRowHandle.prototype, "index", void 0);
    ReorderableRowHandle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pReorderableRowHandle]'
        })
    ], ReorderableRowHandle);
    return ReorderableRowHandle;
}());
var ReorderableRow = /** @class */ (function () {
    function ReorderableRow(dt, el, zone) {
        this.dt = dt;
        this.el = el;
        this.zone = zone;
    }
    ReorderableRow.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
        }
    };
    ReorderableRow.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragEndListener = _this.onDragEnd.bind(_this);
            _this.el.nativeElement.addEventListener('dragend', _this.dragEndListener);
            _this.dragOverListener = _this.onDragOver.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableRow.prototype.unbindEvents = function () {
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
    };
    ReorderableRow.prototype.onMouseDown = function (event) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-table-reorderablerow-handle'))
            this.el.nativeElement.draggable = true;
        else
            this.el.nativeElement.draggable = false;
    };
    ReorderableRow.prototype.onDragStart = function (event) {
        this.dt.onRowDragStart(event, this.index);
    };
    ReorderableRow.prototype.onDragEnd = function (event) {
        this.dt.onRowDragEnd(event);
        this.el.nativeElement.draggable = false;
    };
    ReorderableRow.prototype.onDragOver = function (event) {
        this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
        event.preventDefault();
    };
    ReorderableRow.prototype.onDragLeave = function (event) {
        this.dt.onRowDragLeave(event, this.el.nativeElement);
    };
    ReorderableRow.prototype.isEnabled = function () {
        return this.pReorderableRowDisabled !== true;
    };
    ReorderableRow.prototype.onDrop = function (event) {
        if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
        }
        event.preventDefault();
    };
    ReorderableRow.ctorParameters = function () { return [
        { type: Table },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
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
    return ReorderableRow;
}());
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"]],
            exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow],
            declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
        })
    ], TableModule);
    return TableModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-table.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/detalha-componente/detalha-componente.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/detalha-componente/detalha-componente.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ng-container *ngIf=\"componentAtual == 'info'\">\r\n    <br>\r\n    <app-ficha [idFicha]=\"idFicha\" [closeBTN]=\"true\" [forceUpdate]=\"true\"></app-ficha>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'faccoes'\">\r\n    <form [formGroup]=\"formFaccao\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formFaccao.controls.nome.dirty && formFaccao.controls.nome.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea class=\"input\" type=\"text-area\" color=\"primary\" formControlName=\"descricao\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formFaccao.controls.descricao.dirty && formFaccao.controls.descricao.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Objetivo</ion-label>\r\n              <ion-textarea formControlName=\"objetivo\" type=\"text-area\" color=\"primary\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formFaccao.controls.objetivo.dirty && formFaccao.controls.objetivo.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"\r\n                placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formFaccao.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formFaccao.invalid\" (click)=\"salvarFaccao()\">Atualizar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'capitulo'\">\r\n    <form [formGroup]=\"formCapitulo\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Número do Capítulo</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"numCapitulo\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\"\r\n              *ngIf=\"formCapitulo.controls.numCapitulo.dirty && formCapitulo.controls.numCapitulo.errors\" margin-left>\r\n              Preencha apenas com números</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Titulo</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"titulo\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formCapitulo.controls.titulo.dirty && formCapitulo.controls.titulo.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">História</ion-label>\r\n              <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formCapitulo.controls.historia.dirty && formCapitulo.controls.historia.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Resumo do capítulo passado:</ion-label>\r\n              <ion-textarea formControlName=\"resumoCapPassado\" type=\"text-area\" color=\"primary\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\"\r\n              *ngIf=\"formCapitulo.controls.resumoCapPassado.dirty && formCapitulo.controls.resumoCapPassado.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL da image</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"imgURL\"\r\n                placeholder=\"EX: https://cdn.meadd.net/photos/full/30794130.jpg\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formCapitulo.get('imgURL').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <p-carousel [value]=\"missoes\">\r\n          <p-header>\r\n            <h3>Missão</h3>\r\n          </p-header>\r\n          <ng-template let-missao pTemplate=\"panel\">\r\n            <div class=\"card\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Nome</ion-label>\r\n                    <ion-input disabled class=\"input\" type=\"text\" color=\"Dark\" [value]=\"missao.nome\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Descrição:</ion-label>\r\n                    <ion-textarea type=\"text-area\" disabled color=\"Dark\" [value]=\"missao.descricao\"></ion-textarea>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Localização</ion-label>\r\n                    <ion-input class=\"input\" type=\"text\" disabled color=\"Dark\" [value]=\"missao.localizacao\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Recompensas:</ion-label>\r\n                    <ion-textarea type=\"text-area\" disabled color=\"Dark\" [value]=\"getRecompensas(missao.recompensas)\">\r\n                    </ion-textarea>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Tipo de Missão</ion-label>\r\n                    <ion-input class=\"input\" type=\"text\" disabled color=\"Dark\" [value]=\"missao.tipoMissao\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>Status</ion-label>\r\n                    <ion-select [value]=\"getStatusMissao(missao.statusMissao)\"\r\n                      (ionChange)=\"updateStatus($event, missao)\">\r\n                      <ion-select-option [value]=\"0\">Incompleta</ion-select-option>\r\n                      <ion-select-option [value]=\"1\">Completada</ion-select-option>\r\n                      <ion-select-option [value]=\"2\">Fracassada</ion-select-option>\r\n                      <ion-select-option [value]=\"3\">Em andamento</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </ng-template>\r\n        </p-carousel>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formCapitulo.invalid\" (click)=\"salvarCapitulo()\">Atualizar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'mapa'\">\r\n    <form [formGroup]=\"formMapa\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.nome.dirty && formMapa.controls.nome.errors\" margin-left>\r\n              Informação obrigatória</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea formControlName=\"descricao\" type=\"text-area\" color=\"primary\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.descricao.dirty && formMapa.controls.descricao.errors\"\r\n              margin-left>\r\n              Campo obrigatório!</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">URL do Mapa</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"urlMapa\"\r\n                (ionChange)=\"atualizaImagem()\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formMapa.controls.urlMapa.dirty && formMapa.controls.urlMapa.errors\" margin-left>\r\n              Informação obrigatória</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <app-imagem-display [src]=\"this.formMapa.get('urlMapa').value\"></app-imagem-display>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formMapa.invalid\" (click)=\"salvarMapa()\">Atualizar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentAtual == 'regras'\">\r\n    <form [formGroup]=\"formRegra\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n      <div class=\"topo\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nome</ion-label>\r\n              <ion-input class=\"input\" type=\"text\" color=\"primary\" formControlName=\"nome\"></ion-input>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formRegra.controls.nome.dirty && formRegra.controls.nome.errors\" margin-left>\r\n              Informação obrigatória</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descrição</ion-label>\r\n              <ion-textarea class=\"input\" type=\"text\" color=\"primary\" formControlName=\"descricao\"></ion-textarea>\r\n            </ion-item>\r\n            <p class=\"danger\" *ngIf=\"formRegra.controls.descricao.dirty && formRegra.controls.descricao.errors\"\r\n              margin-left>\r\n              Informação obrigatória</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" [disabled]=\"formRegra.invalid\" (click)=\"salvarRegra()\">Atualizar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/detalha-npc/detalha-npc.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/detalha-npc/detalha-npc.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid class=\"no-margin\">\r\n\r\n    <ion-segment color=\"success\" (ionChange)=\"changedTab($event)\" [(ngModel)]=\"display\"\r\n        [ngModelOptions]=\"{standalone: true}\">\r\n        <ion-segment-button value=\"basic\">\r\n\r\n            <ion-label style=\"font-size: 1em\">\r\n                <img class=\"icone\" src=\"assets/imgs/rpg.png\">\r\n                Informações\r\n            </ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"ficha\">\r\n            <ion-label style=\"font-size: 1em\">\r\n                <img class=\"icone\" src=\"assets/imgs/card-pick.png\">\r\n                Ficha\r\n            </ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div class=\"espaco\">\r\n        <br>\r\n        <ng-container *ngIf=\"display =='basic'\">\r\n            <div>\r\n                <form [formGroup]=\"formNpc\" (ngSubmit)=\"$event.preventDefault()\" #formuItem>\r\n                    <div class=\"topo\">\r\n\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <ion-item color=\"light\">\r\n                                    <ion-label position=\"floating\">Historia</ion-label>\r\n                                    <ion-textarea formControlName=\"historia\" type=\"text-area\" color=\"primary\"\r\n                                        placeholder=\"EX: Sauron, também conhecido como Senhor do Escuro de Mordor, era o tenente mais poderoso de Morgoth e mente...\">\r\n                                    </ion-textarea>\r\n                                </ion-item>\r\n                                <p class=\"danger\"\r\n                                    *ngIf=\"formNpc.controls.historia.dirty && formNpc.controls.historia.errors\"\r\n                                    margin-left>\r\n                                    Preencha\r\n                                    a historia</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <br>\r\n                        <div class=\"border objetivos\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-item color=\"light\">\r\n                                        <ion-label position=\"floating\">Objetivos</ion-label>\r\n                                        <ion-input [(ngModel)]=\"objetivo\" [ngModelOptions]=\"{standalone: true}\"\r\n                                            class=\"input\" type=\"text-area\" color=\"primary\"\r\n                                            placeholder=\"Insira o objetivo aqui, então, clique em: 'Adicionar'\">\r\n                                        </ion-input>\r\n                                    </ion-item>\r\n                                    <ion-button class=\"btn-insert\" color=\"tertiary\" fill=\"solid\" expand=\"block\"\r\n                                        (click)=\"inserirObjetivo()\">\r\n                                        Adicionar\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <app-listas [strings]=\"objetivos\" [titulo]=\"'Lista de Objetivos'\" [isModal]=\"false\">\r\n                                    </app-listas>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                        <br>\r\n                        <br>\r\n\r\n                        <div class=\"border interesses\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <ion-item color=\"light\">\r\n                                        <ion-label position=\"floating\">Interesses</ion-label>\r\n                                        <ion-input [(ngModel)]=\"interesse\" [ngModelOptions]=\"{standalone: true}\"\r\n                                            class=\"input\" type=\"text-area\" color=\"primary\"\r\n                                            placeholder=\"Insira o interesse aqui, então, clique em: 'Adicionar'\">\r\n                                        </ion-input>\r\n                                    </ion-item>\r\n                                    <ion-button class=\"btn-insert\" color=\"tertiary\" fill=\"solid\" expand=\"block\"\r\n                                        (click)=\"inserirInteresse()\">\r\n                                        Adicionar\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <app-listas [strings]=\"interesses\" [titulo]=\"'Lista de Interesses'\"\r\n                                        [isModal]=\"false\">\r\n                                    </app-listas>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                        <br>\r\n                        <br>\r\n\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <ion-item color=\"light\">\r\n                                    <ion-label>Tipo de NPC</ion-label>\r\n                                    <ion-select color=\"tertiary\" (ionChange)=\"updateType($event)\"\r\n                                        formControlName=\"tipoNpc\" placeholder=\"Selecione\">\r\n                                        <ion-select-option [value]=\"0\">Aliado</ion-select-option>\r\n                                        <ion-select-option [value]=\"1\">Inimigo</ion-select-option>\r\n                                        <ion-select-option [value]=\"2\">Neutro</ion-select-option>\r\n                                        <ion-select-option [value]=\"3\">Boss</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <ion-button expand=\"block\" [disabled]=\"formNpc.invalid\" (click)=\"salvar(true)\">Atualizar\r\n                                </ion-button>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <ion-button expand=\"block\" color=\"danger\" (click)=\"close()\">Fechar\r\n                                </ion-button>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"display =='ficha'\">\r\n            <div>\r\n                <app-ficha [idFicha]=\"idFicha\"></app-ficha>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n\r\n</ion-grid>\r\n\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thing\">\r\n  <span class=\"texto-a\" style=\"text-align: right;\"> {{ template.nome }}</span>\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col \">\r\n      <div *ngIf=\"abas\" class=\"p-col-12\">\r\n        <ion-segment class=\"background-segment\" [color]=\"getColor()\" [(ngModel)]=\"abaAtual\"\r\n          [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"mudaAba($event)\">\r\n          <ion-segment-button style=\"max-width: 120px;\" value=\"bom\">\r\n            <ion-label style=\"font-size: 1em\">\r\n              <!--<img class=\"icon2\" src=\"assets/imgs/bom.png\" alt=\"Informações\">-->\r\n              Aliado\r\n            </ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button style=\"max-width: 120px;\" value=\"neutro\">\r\n            <ion-label style=\"font-size: 1em\">\r\n              <!-- <img class=\"icon2\" src=\"assets/imgs/neutro.png\" alt=\"Regras\">-->\r\n              Neutro\r\n            </ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button style=\"max-width: 120px;\" value=\"mau\">\r\n            <ion-label style=\"font-size: 1em\">\r\n              <!--<img class=\"icon2\" src=\"assets/imgs/overlord-helm.png\" alt=\"NPCs\">-->\r\n              Inimigo\r\n            </ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </div>\r\n      <br>\r\n      <div class=\" texto-a alinhamento p-col-12  \">{{ template.codigo }}</div>\r\n      <div class=\"p-col-12\">\r\n        <div class=\"ui-inputgroup\">\r\n          <input type=\"text\" pInputText placeholder=\"código\" [(ngModel)]=\"idObj\" [ngModelOptions]=\"{standalone: true}\"\r\n            type=\"text\">\r\n          <button style=\"max-width: 100px;\" pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"\r\n            (click)='addItem()'></button>\r\n          <button style=\"max-width: 100px; margin-left: 2px;\" pButton type=\"button\" [icon]=\"getIcon()\"\r\n            class=\"ui-button-info\" (click)='listItem(true)'></button>\r\n          <button *ngIf=\"componente != 'regras' && componente != 'info'\" style=\"max-width: 100px; margin-left: 2px;\"\r\n            pButton type=\"button\" icon=\"pi pi-plus\" class=\"ui-button-info\" (click)='createNew()'></button>\r\n        </div>\r\n      </div>\r\n\r\n      <p-table class=\"p-col-6\" class=\"bakground hover\" styleClass=\"ui-table-jogadores\" [value]=\"objs\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th style=\"border-right: 0 none; text-align: left;\">{{ template.tabelaCodigo }}</th>\r\n            <th style=\"border-left: 0 none; text-align: left;\">{{ template.tabelaNome }}</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-item>\r\n          <tr class=\"selecionavel\" #row (click)=\"selecionar(item, row)\">\r\n            <td style=\"border-right: 0 none; text-align: left;\">{{item.id}}</td>\r\n            <td style=\"border-left: 0 none; text-align: left;\">{{item.nome}}\r\n              <button style=\"float: right; margin-right: 10px;\" pButton type=\"button\" icon=\"pi pi-eye\"\r\n                (click)=\"view($event, item)\"></button>\r\n            </td>\r\n\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\">\r\n          <tr>\r\n            <td colspan=\"2\"><button style=\"width: 100%;\" pButton type=\"button\" icon=\"pi pi-times-circle\"\r\n                class=\"ui-button-danger\" (click)='removItem()' [disabled]=\"!selectedItem\"></button></td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>\r\n<p-toast position=\"top-center\" life=\"5000\"></p-toast>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"back\">\r\n  <ion-segment [color]=\"getColor(info)\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px; margin-right: 10px;\" value=\"info\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/dice.png\" alt=\"Informações\">\r\n        Jogadores\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"regras\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/rpg.png\" alt=\"Regras\">\r\n        Regras\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-segment [color]=\"getColor(info)\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"npcs\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/overlord-helm.png\" alt=\"NPCs\">\r\n        NPCs\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"faccoes\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/squad.png\" alt=\"Facções\">\r\n        Facções\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-segment [color]=\"getColor(info)\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\"\r\n    (ionChange)=\"mudaAba($event)\">\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"capitulo\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/capitulo.png\" alt=\"Capitulos\">\r\n        Capítulos\r\n      </ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button style=\"max-width: 250px;\" value=\"mapa\">\r\n      <ion-label style=\"font-size: 1em\">\r\n        <img class=\"icon2\" src=\"assets/imgs/treasure-map.png\" alt=\"Mapas\">\r\n        Mapas\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</div>\r\n<br>\r\n<div class=\"p-grid p-justify-center\" style=\"margin: 5px;\">\r\n  <ng-container *ngIf=\"abaAtual == 'info'\">\r\n    <app-gerencia-componente [id]=\"'id'\" [nome]=\"'apelido'\" [atributo]=\"'jogadores'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" [componente]=\"'info'\"></app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'regras'\">\r\n    <app-gerencia-componente [id]=\"'idSistema'\" [nome]=\"'nome'\" [atributo]=\"'sistemas'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idRpg\" [template]=\"template\" (modal)=\"modalClosed($event)\" [componente]=\"'regras'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'npcs'\">\r\n    <app-gerencia-componente [id]=\"'idNpc'\" [nome]=\"'ficha.fichaModelo.nome'\" [atributo]=\"atributoSelecionado\"\r\n      [promisse]=\"promisse\" [idMesa]=\"mesa.idMesa\" [template]=\"template\" [abas]=\"true\"\r\n      (atributoMudado)=\"mudaAtributo($event)\" (modal)=\"modalClosed($event)\" [componente]=\"'npcs'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'faccoes'\">\r\n    <app-gerencia-componente [id]=\"'idFaccao'\" [nome]=\"'nome'\" [atributo]=\"atributoSelecionado\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" [abas]=\"true\" [componente]=\"'faccoes'\"\r\n      (atributoMudado)=\"mudaAtributo($event)\" (modal)=\"modalClosed($event)\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'capitulo'\">\r\n    <app-gerencia-componente [id]=\"'idCapitulo'\" [nome]=\"'titulo'\" [atributo]=\"'capitulos'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" (modal)=\"modalClosed($event)\" [componente]=\"'capitulo'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'mapa'\">\r\n    <app-gerencia-componente [id]=\"'idMapa'\" [nome]=\"'nome'\" [atributo]=\"'mapas'\" [promisse]=\"promisse\"\r\n      [idMesa]=\"mesa.idMesa\" [template]=\"template\" (modal)=\"modalClosed($event)\" [componente]=\"'mapa'\">\r\n    </app-gerencia-componente>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"abaAtual == 'none'\"></ng-container>\r\n\r\n</div>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

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

/***/ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/criacoes/detalha-componente/detalha-componente.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: 1px solid #b3c2ca;\n  border-radius: 3px;\n  margin: 0.3em;\n  text-align: center;\n  padding: 2em 0 2.25em 0;\n}\n\n.cover {\n  width: 50%;\n  height: 50%;\n  text-align: center;\n  align-self: center;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-width: 1px;\n  border-radius: 10px;\n}\n\n@media only screen and (max-width: 640px) {\n  .cover {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLWNvbXBvbmVudGUvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxkZXRhbGhhLWNvbXBvbmVudGVcXGRldGFsaGEtY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLWNvbXBvbmVudGUvZGV0YWxoYS1jb21wb25lbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGNBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLWNvbXBvbmVudGUvZGV0YWxoYS1jb21wb25lbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbSAwIDIuMjVlbSAwO1xyXG59XHJcblxyXG4uY292ZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmNvdmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4iLCIuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwLjNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyZW0gMCAyLjI1ZW0gMDtcbn1cblxuLmNvdmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb3ZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/regra/regra.service */ "./src/app/services/regra/regra.service.ts");








var DetalhaComponenteComponent = /** @class */ (function () {
    function DetalhaComponenteComponent(mesaService, fichaService, regraService, formBuilder, toast, alertController, modalCtrl) {
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
    DetalhaComponenteComponent.prototype.ngOnInit = function () {
        var comp = this.mesaService.getComponentAtual();
        this.objAuxiliar = this.mesaService.getObjAuxiliar();
        this.overrideComponent(comp);
    };
    DetalhaComponenteComponent.prototype.overrideComponent = function (component) {
        var _this = this;
        var idMesa = this.objAuxiliar.idMesa;
        switch (component) {
            case 'info': //jogador
                var idJogador = this.objAuxiliar.idJogador;
                this.fichaService.findFichaByMesaAndJogador(idJogador, idMesa).subscribe(function (res) {
                    _this.idFicha = res.idFicha;
                    _this.componentAtual = component;
                    _this.loading = false;
                }, function (error) {
                    _this.componentAtual = component;
                    _this.loading = false;
                });
                break;
            case 'regras':
                this.formRegra = this.formBuilder.group({
                    nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
                });
                var idRegra = this.mesaService.getObjAuxiliar().idRegra;
                this.componentAtual = component;
                this.regraService.findRegraById(idRegra)
                    .subscribe(function (res) {
                    _this.formRegra.get('descricao').setValue(res.descricao);
                    _this.formRegra.get('nome').setValue(res.nome);
                    _this.loading = false;
                }, function (error) {
                    _this.loading = false;
                });
                break;
            case 'faccoes':
                this.formFaccao = this.formBuilder.group({
                    nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    objetivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    imgURL: ['']
                });
                var _a = this.mesaService.getObjAuxiliar(), idFaccao = _a.idFaccao, tipo = _a.tipo;
                this.componentAtual = component;
                this.mesaService.findFaccao(idFaccao, idMesa, tipo)
                    .subscribe(function (res) {
                    //console.log(res);
                    _this.formFaccao.get('objetivo').setValue(res.objetivo);
                    _this.formFaccao.get('descricao').setValue(res.descricao);
                    _this.formFaccao.get('nome').setValue(res.nome);
                    _this.formFaccao.get('imgURL').setValue(res.imgURL);
                    _this.loading = false;
                }, function (error) {
                    _this.loading = false;
                });
                break;
            case 'mapa':
                this.formMapa = this.formBuilder.group({
                    nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    urlMapa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                });
                var idMapa = this.mesaService.getObjAuxiliar().idMapa;
                this.componentAtual = component;
                this.mesaService.findMapa(idMapa, idMesa)
                    .subscribe(function (res) {
                    _this.formMapa.get('nome').setValue(res.nome);
                    _this.formMapa.get('descricao').setValue(res.descricao);
                    _this.formMapa.get('urlMapa').setValue(res.urlMapa);
                    _this.urlMapa = res.urlMapa;
                    _this.loading = false;
                }, function (error) {
                    _this.loading = false;
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
                var idCapitulo = this.mesaService.getObjAuxiliar().idCapitulo;
                this.componentAtual = component;
                this.mesaService.findCapitulo(idCapitulo, idMesa)
                    .subscribe(function (res) {
                    _this.formCapitulo.get('numCapitulo').setValue(res.numCapitulo);
                    _this.formCapitulo.get('titulo').setValue(res.titulo);
                    _this.formCapitulo.get('historia').setValue(res.historia);
                    _this.formCapitulo.get('resumoCapPassado').setValue(res.resumoCapPassado);
                    _this.formCapitulo.get('imgURL').setValue(res.imgURL);
                    _this.missoes = res.missoes;
                    _this.loading = false;
                }, function (error) {
                    _this.loading = false;
                });
                break;
        }
    };
    DetalhaComponenteComponent.prototype.atualizaImagem = function () {
        this.urlMapa = this.formMapa.get('urlMapa').value;
    };
    DetalhaComponenteComponent.prototype.salvarFaccao = function () {
        var _this = this;
        var _a = this.mesaService.getObjAuxiliar(), idFaccao = _a.idFaccao, idMesa = _a.idMesa;
        this.loading = true;
        this.newFaccao = {
            nome: this.formFaccao.get('nome').value,
            descricao: this.formFaccao.get('descricao').value,
            objetivo: this.formFaccao.get('objetivo').value,
            imgURL: this.formFaccao.get('imgURL').value,
        };
        this.mesaService.updateFaccao(idFaccao, idMesa, this.newFaccao)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, function (error) {
            _this.loading = false;
        });
    };
    DetalhaComponenteComponent.prototype.salvarCapitulo = function () {
        var _this = this;
        var _a = this.mesaService.getObjAuxiliar(), idCapitulo = _a.idCapitulo, idMesa = _a.idMesa;
        this.loading = true;
        this.newCapitulo = {
            idCapitulo: idCapitulo,
            isPrivate: true,
            numCapitulo: this.formCapitulo.get('numCapitulo').value,
            titulo: this.formCapitulo.get('titulo').value,
            historia: this.formCapitulo.get('historia').value,
            resumoCapPassado: this.formCapitulo.get('resumoCapPassado').value,
            imgURL: this.formCapitulo.get('imgURL').value,
        };
        this.mesaService.updateCapitulo(idCapitulo, idMesa, this.newCapitulo)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, function (error) {
            _this.loading = false;
        });
    };
    DetalhaComponenteComponent.prototype.salvarMapa = function () {
        var _this = this;
        var _a = this.mesaService.getObjAuxiliar(), idMapa = _a.idMapa, idMesa = _a.idMesa;
        this.loading = true;
        this.newMapa = {
            nome: this.formMapa.get('nome').value,
            descricao: this.formMapa.get('descricao').value,
            urlMapa: this.formMapa.get('urlMapa').value
        };
        this.mesaService.updateMapa(idMapa, idMesa, this.newMapa)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, function (error) {
            _this.loading = false;
        });
    };
    DetalhaComponenteComponent.prototype.salvarRegra = function () {
        var _this = this;
        var idRegra = this.mesaService.getObjAuxiliar().idRegra;
        this.loading = true;
        this.newRegra = {
            nome: this.formRegra.get('nome').value,
            descricao: this.formRegra.get('descricao').value,
            idSistema: idRegra
        };
        this.regraService.update(this.newRegra)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast("success", "Atualizado", "Atualizado com sucesso!");
        }, function (error) {
            _this.loading = false;
        });
    };
    DetalhaComponenteComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    DetalhaComponenteComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    DetalhaComponenteComponent.prototype.getRecompensas = function (recompensas) {
        var recompensa = recompensas.join(', ');
        return recompensa;
    };
    DetalhaComponenteComponent.prototype.getStatusMissao = function (status) {
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
    };
    DetalhaComponenteComponent.prototype.updateStatus = function (evt, missao) {
        var _this = this;
        this.loading = true;
        var statusMissao = evt.detail.value;
        var _a = this.mesaService.getObjAuxiliar(), idCapitulo = _a.idCapitulo, idMesa = _a.idMesa;
        var idMissao = missao.idMissao;
        this.mesaService.updateStatusMissao(idCapitulo, idMesa, idMissao, statusMissao)
            .subscribe(function (res) {
            _this.loading = false;
            _this.callToast('success', 'Status atualizado', 'O status da missão foi atualizado');
        }, function (error) {
            _this.loading = false;
            _this.callToast('danger', 'Ocorreu algum erro', 'Não pudemos atualizar o status da missão em nossos servidores');
        });
    };
    DetalhaComponenteComponent.ctorParameters = function () { return [
        { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"] },
        { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_3__["FichaService"] },
        { type: src_app_services_regra_regra_service__WEBPACK_IMPORTED_MODULE_7__["RegraService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
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
    return DetalhaComponenteComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/criacoes/detalha-npc/detalha-npc.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.no-margin {\n  margin-top: 1%;\n  margin-bottom: 2%;\n  margin-left: 0;\n  margin-right: 0;\n  overflow-y: scroll;\n}\n\n.border {\n  border: 1px groove rgba(94, 41, 164, 0.28);\n  border-radius: 23px;\n}\n\n.icone {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.espaco {\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLW5wYy9DOlxcVXNlcnNcXGxoY2NvXFxEb2N1bWVudHNcXERlc2Vudm9sdmltZW50b1xcVENDXFxGcm9udGVuZFxcUk1GLU1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JpYWNvZXNcXGRldGFsaGEtbnBjXFxkZXRhbGhhLW5wYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9kZXRhbGhhLW5wYy9kZXRhbGhhLW5wYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvZGV0YWxoYS1ucGMvZGV0YWxoYS1ucGMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWluc2VydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4uaWNvbmV7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmVzcGFjb3tcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiIsIi5idG4taW5zZXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dCB7XG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyb292ZSByZ2JhKDk0LCA0MSwgMTY0LCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuLmljb25lIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZXNwYWNvIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fichas/ficha.service */ "./src/app/services/fichas/ficha.service.ts");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");







var DetalhaNpcComponent = /** @class */ (function () {
    function DetalhaNpcComponent(modalCtrl, alertController, formBuilder, mesaService, toast, fichaService) {
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
    DetalhaNpcComponent.prototype.ngOnInit = function () {
        this.loading = true;
        var _a = this.mesaService.getObjAuxiliar(), idJogador = _a.idJogador, idMesa = _a.idMesa, npc = _a.npc;
        //console.log(npc);
        var historia = npc.historia, tipoNpc = npc.tipoNpc, isPrivate = npc.isPrivate, objetivos = npc.objetivos, interesses = npc.interesses;
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
    };
    DetalhaNpcComponent.prototype.getCurrentType = function (tipoNpc) {
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
    };
    DetalhaNpcComponent.prototype.updateType = function (evt) {
        var tipo = evt.detail.value;
        this.formNpc.get('tipoNpc').setValue(tipo);
    };
    DetalhaNpcComponent.prototype.salvar = function (wantToast) {
        var _this = this;
        this.autoUpdate = false;
        this.loading = true;
        var historia = this.formNpc.get('historia').value;
        var objetivos = this.objetivos;
        var interesses = this.interesses;
        var tipoNpc = this.formNpc.get('tipoNpc').value;
        var isPrivate = this.formNpc.get('isPrivate').value;
        var npcBasic = {
            historia: historia,
            idNpc: this.idNpc,
            interesses: interesses,
            isPrivate: isPrivate,
            objetivos: objetivos,
            tipoNpc: tipoNpc
        };
        //console.log(wantToast)
        this.mesaService.updateNpcBasic(this.idNpc, this.idMesa, npcBasic)
            .subscribe(function (res) {
            if (wantToast == true)
                _this.callToast('success', 'Atualizado com sucesso!', 'NPC Atualizado!');
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    DetalhaNpcComponent.prototype.close = function () {
        this.modalCtrl.dismiss(null, null, 'comp');
    };
    DetalhaNpcComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    DetalhaNpcComponent.prototype.inserirObjetivo = function () {
        if (this.objetivo.length < 5) {
            this.presentError('objetivo');
        }
        else {
            this.objetivos.push(this.objetivo);
            this.objetivo = "";
        }
    };
    DetalhaNpcComponent.prototype.inserirInteresse = function () {
        if (this.interesse.length < 5) {
            this.presentError('interesse');
        }
        else {
            this.interesses.push(this.interesse);
            this.interesse = "";
        }
    };
    DetalhaNpcComponent.prototype.presentError = function (texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Valor inválido',
                            message: 'Insira um ' + texto + '<br>Com pelo menos 5 caracteres',
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
    DetalhaNpcComponent.prototype.changedTab = function (evt) {
        var _this = this;
        this.formNpc.valueChanges.subscribe(function (res) {
            //console.log('ENTROU')
            _this.autoUpdate = true;
        });
        var aba = evt.detail.value;
        // console.log(this.autoUpdate);
        if (aba != 'ficha') {
            this.loading = true;
            this.autoUpdate = false;
            this.mesaService.findNpc(this.idNpc, this.idMesa)
                .subscribe(function (res) {
                //console.log(res)
                var tipoNpc = res.tipoNpc, ficha = res.ficha;
                _this.fichaService.setConfiguration(ficha, false, _this.idNpc, _this.idMesa, tipoNpc, true);
                _this.loading = false;
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        }
        else if (this.autoUpdate == true) {
            this.salvar(false);
        }
    };
    DetalhaNpcComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_6__["MesasService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
        { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_5__["FichaService"] }
    ]; };
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
    return DetalhaNpcComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nomidle {\n  border-left: 0 none;\n}\n\n.selecionavel:hover {\n  background-color: #a2f7eb;\n  cursor: pointer;\n}\n\n.selected {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.8);\n  border-radius: 0.5rem;\n  border: 0 solid #00ff99;\n  background-color: #a2f7eb;\n}\n\n.add {\n  border: 95px solid;\n}\n\n.btn-insert {\n  display: -webkit-box;\n  display: flex;\n  align-self: flex-end;\n  vertical-align: top;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.input {\n  max-width: 80% !important;\n}\n\n.icone {\n  max-width: 100px;\n  max-height: 50px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.thing {\n  padding: 1rem;\n  width: 95%;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: rgba(0, 2, 10, 0.801);\n  border-radius: 0.5rem;\n  margin-left: 10px;\n  border-left: 0 solid #00ff99;\n  -webkit-transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;\n}\n\n.bakground {\n  background-color: rgba(0, 2, 10, 0.801);\n}\n\n.thing {\n  padding-left: 0.5rem;\n  border-left: 0.5rem solid #00ff99;\n}\n\n.thing > :first-child {\n  margin-top: 0;\n}\n\n.thing > :last-child {\n  margin-bottom: 0;\n}\n\n.heading {\n  color: #fff;\n}\n\nbody {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100vh;\n  background-color: #0099ff;\n}\n\n.icon2 {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.texto-a {\n  color: white;\n}\n\n.background-segment {\n  border-radius: 23px;\n  background-color: rgba(155, 155, 155, 0.801) !important;\n  max-width: 380px;\n  text-align: right;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.background-segment ion-label {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9nZXJlbmNpYS1jb21wb25lbnRlL0M6XFxVc2Vyc1xcbGhjY29cXERvY3VtZW50c1xcRGVzZW52b2x2aW1lbnRvXFxUQ0NcXEZyb250ZW5kXFxSTUYtTW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmlhY29lc1xcZ2VyZW5jaWEtY29tcG9uZW50ZVxcZ2VyZW5jaWEtY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9nZXJlbmNpYS1jb21wb25lbnRlL2dlcmVuY2lhLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLCtFQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSxpRkFBQTtFQUFBLHlFQUFBO0FDQUY7O0FER0E7RUFDRSx1Q0FBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyaWFjb2VzL2dlcmVuY2lhLWNvbXBvbmVudGUvZ2VyZW5jaWEtY29tcG9uZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub21pZGxlIHtcclxuICBib3JkZXItbGVmdDogMCBub25lO1xyXG59XHJcblxyXG4uc2VsZWNpb25hdmVsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJmN2ViO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIxLCAxNTYsIDIyOCwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiAwIHNvbGlkICMwMGZmOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZjdlYjtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgYm9yZGVyOiA5NXB4IHNvbGlkO1xyXG59XHJcblxyXG4uYnRuLWluc2VydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25lIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGhpbmcge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgNXB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkICMwMGZmOTk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWxlZnQgMzAwbXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctbGVmdCAzMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJha2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xyXG59XHJcblxyXG4udGhpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzAwZmY5OTtcclxufVxyXG5cclxuLnRoaW5nID4gOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udGhpbmcgPiA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5ZmY7XHJcbn1cclxuXHJcbi5pY29uMiB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRleHRvLWEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtc2VnbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuODAxKSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMzgwcHg7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcclxuICBmbG9hdDogcmlnaHQ7IFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uYmFja2dyb3VuZC1zZWdtZW50IGlvbi1sYWJlbHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCIubm9taWRsZSB7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG59XG5cbi5zZWxlY2lvbmF2ZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJmN2ViO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIxLCAxNTYsIDIyOCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXI6IDAgc29saWQgIzAwZmY5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZjdlYjtcbn1cblxuLmFkZCB7XG4gIGJvcmRlcjogOTVweCBzb2xpZDtcbn1cblxuLmJ0bi1pbnNlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLmljb25lIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRoaW5nIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDk1JTtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMCBzb2xpZCAjMDBmZjk5O1xuICB0cmFuc2l0aW9uOiBib3JkZXItbGVmdCAzMDBtcyBlYXNlLWluLW91dCwgcGFkZGluZy1sZWZ0IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYmFrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyLCAxMCwgMC44MDEpO1xufVxuXG4udGhpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjMDBmZjk5O1xufVxuXG4udGhpbmcgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4udGhpbmcgPiA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5ZmY7XG59XG5cbi5pY29uMiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRleHRvLWEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrZ3JvdW5kLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYmFja2dyb3VuZC1zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
















var GerenciaComponenteComponent = /** @class */ (function () {
    function GerenciaComponenteComponent(mesaService, modalCtrl, fichaService, paginaService, capituloService, faccaoService, npcService, mapaService, toast, router) {
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
    GerenciaComponenteComponent.prototype.handleMudanca = function () {
        this.atributoMudado.emit(this.abaAtual);
    };
    GerenciaComponenteComponent.prototype.modalClose = function () {
        this.modal.emit('closed');
    };
    GerenciaComponenteComponent.prototype.ngOnInit = function () {
        //console.log(this.componente);
        var _this = this;
        this.subscription = this.paginaService.getRefresh().subscribe(function (message) {
            if (message >= 0) {
                _this.paginaAtual = message;
                var current = _this.paginaService.getCurrentTab();
                _this.nextPage(current);
            }
        });
        this.rowSelected = document.createElement("b");
        this.promisse.subscribe(function (res) {
            _this.atualizaItens(res);
            _this.loadContent();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    GerenciaComponenteComponent.prototype.ionViewDidLeave = function () {
        this.paginaService.setConfiguration(false);
        this.paginaService.closeBTN = false;
        this.paginaService.isModal = false;
    };
    GerenciaComponenteComponent.prototype.ngOnDestroy = function () {
        this.paginaService.setConfiguration(false);
        this.paginaService.closeBTN = false;
        this.paginaService.isModal = false;
        this.paginaService.setInternalLoad(false);
        this.subscription.unsubscribe();
    };
    GerenciaComponenteComponent.prototype.atualizaItens = function (res) {
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
    };
    GerenciaComponenteComponent.prototype.loadContent = function () {
        this.objs = [];
        for (var i = 0; i < this.itens.length; i++) {
            this.objs.push({
                id: this.getProperty(this.itens[i], this.idJson),
                nome: this.getProperty(this.itens[i], this.nomeJson)
            });
        }
    };
    GerenciaComponenteComponent.prototype.getProperty = function (json, field) {
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
    };
    GerenciaComponenteComponent.prototype.addItem = function () {
        var _this = this;
        this.loading = true;
        var operation = this.getSelectedService(this.template.tipo, 'adiciona');
        //console.log(operation);
        operation(this.idObj, this.idMesa, this.tipoObj)
            .subscribe(function (res) {
            _this.atualizaItens(res);
            _this.loadContent();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
        this.idObj = '';
    };
    GerenciaComponenteComponent.prototype.removItem = function () {
        var _this = this;
        this.loading = true;
        var operation = this.getSelectedService(this.template.tipo, 'remocao');
        if (operation == this.mesaService.removRegraNew) {
            this.mesaService.removRegraNew(this.idObjRemovido, this.mesaService.getMesaSelecionada())
                .subscribe(function (res) {
                _this.atualizaItens(res);
                _this.loadContent();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
        else {
            operation(this.idObjRemovido, this.idMesa, this.tipoObj)
                .subscribe(function (res) {
                _this.atualizaItens(res);
                _this.loadContent();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    GerenciaComponenteComponent.prototype.selecionar = function (item, row) {
        this.rowSelected.classList.remove('selected');
        row.classList.add('selected');
        this.rowSelected = row;
        this.selectedItem = item;
        this.idObjRemovido = item.id;
    };
    GerenciaComponenteComponent.prototype.getTipoNpcAdd = function () {
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
    };
    GerenciaComponenteComponent.prototype.getTipoNpcRemov = function () {
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
    };
    GerenciaComponenteComponent.prototype.getTipoFaccaoAdd = function () {
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
    };
    GerenciaComponenteComponent.prototype.getTipoFaccaoRemov = function () {
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
    };
    GerenciaComponenteComponent.prototype.getSelectedService = function (tipo, opcao) {
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
    };
    GerenciaComponenteComponent.prototype.getColor = function () {
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
    };
    GerenciaComponenteComponent.prototype.mudaAba = function (event) {
        var _this = this;
        this.loading = true;
        this.handleMudanca();
        this.promisse.subscribe(function (res) {
            _this.atualizaItens(res);
            _this.loadContent();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
        this.loadContent();
    };
    GerenciaComponenteComponent.prototype.view = function (event, item) {
        this.presentModal(item);
    };
    GerenciaComponenteComponent.prototype.presentModal = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var component, npc, ficha, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getTipoNpcAdd();
                        component = _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_7__["DetalhaComponenteComponent"];
                        switch (this.template.tipo) {
                            case 'npc':
                                npc = this.itens.find(function (element) { return element.idNpc == item.id; });
                                this.mesaService.setObjAuxiliar({
                                    idJogador: item.id,
                                    idMesa: this.idMesa,
                                    npc: npc
                                });
                                ficha = this.itens.find(function (element) { return element.idNpc == item.id; }).ficha;
                                this.fichaService.setConfiguration(ficha, false, item.id, this.idMesa, this.tipoObj, true);
                                component = _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_5__["DetalhaNpcComponent"];
                                break;
                            case 'faccao':
                                this.mesaService.setObjAuxiliar({
                                    idFaccao: item.id,
                                    idMesa: this.idMesa,
                                    tipo: this.tipoObj
                                });
                                break;
                            case 'jogador':
                                this.fichaService.setConfiguration(undefined, true, undefined, this.idMesa, undefined, true);
                                this.mesaService.setObjAuxiliar({
                                    idJogador: item.id,
                                    idMesa: this.idMesa,
                                });
                                break;
                            case 'capitulo':
                                this.mesaService.setObjAuxiliar({
                                    idCapitulo: item.id,
                                    idMesa: this.idMesa,
                                });
                                break;
                            case 'mapa':
                                this.mesaService.setObjAuxiliar({
                                    idMapa: item.id,
                                    idMesa: this.idMesa,
                                });
                                break;
                            case 'regra':
                                this.mesaService.setObjAuxiliar({
                                    idRegra: item.id
                                });
                                break;
                        }
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: component,
                                backdropDismiss: true,
                                cssClass: 'my-custom-modal-css',
                                id: 'comp'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onWillDismiss()
                            .then(function (data) {
                            _this.modalClose();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GerenciaComponenteComponent.prototype.listItem = function (wantModal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, f, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (this.template.tipo) {
                            case 'jogador':
                                this.callToast('warn', 'Indisponível', 'Listagem de jogadores não disponível ainda');
                                return [2 /*return*/];
                                break;
                            case 'regra':
                                //this.callToast('error', 'Indisponível', 'Regras devem ser criadas individualmente, não é possível reutilizar regras');
                                // return;
                                this.regraModal();
                                return [2 /*return*/];
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
                        if (!(wantModal == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _utils_paginacao_paginacao_component__WEBPACK_IMPORTED_MODULE_8__["PaginacaoComponent"],
                                backdropDismiss: false,
                                cssClass: 'my-custom-modal-css',
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (res) {
                            // console.log(res);
                            if (res.data) {
                                _this.idObj = res.data.id;
                                _this.addItem();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GerenciaComponenteComponent.prototype.nextPage = function (current) {
        var p;
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
    };
    GerenciaComponenteComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    GerenciaComponenteComponent.prototype.regraModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mesaService.setStaticID(this.idMesa);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_14__["RegraNewComponent"],
                                backdropDismiss: false,
                                cssClass: 'my-custom-modal-css',
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (res) {
                            // console.log(res);
                            if (res.data) {
                                _this.itens = res.data;
                                _this.loadContent();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GerenciaComponenteComponent.prototype.getIcon = function () {
        if (this.componente == "regras")
            return "pi pi-plus";
        else
            return "pi pi-search";
    };
    GerenciaComponenteComponent.prototype.createNew = function () {
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
    };
    GerenciaComponenteComponent.ctorParameters = function () { return [
        { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_4__["MesasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_6__["FichaService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"] },
        { type: src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_10__["CapituloService"] },
        { type: src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_11__["FaccoesService"] },
        { type: src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_12__["NpcService"] },
        { type: src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_13__["MapaService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }
    ]; };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_4__["MesasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_fichas_ficha_service__WEBPACK_IMPORTED_MODULE_6__["FichaService"], src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_9__["PaginacaoService"], src_app_services_historia_capitulo_service__WEBPACK_IMPORTED_MODULE_10__["CapituloService"],
            src_app_services_criacoes_faccoes_service__WEBPACK_IMPORTED_MODULE_11__["FaccoesService"], src_app_services_npc_npc_service__WEBPACK_IMPORTED_MODULE_12__["NpcService"], src_app_services_mapa_mapa_service__WEBPACK_IMPORTED_MODULE_13__["MapaService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]])
    ], GerenciaComponenteComponent);
    return GerenciaComponenteComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nobreak {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  .nobreak {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.alinhamento {\n  margin-top: 5px;\n}\n\n.card {\n  margin: 5px;\n}\n\n.header {\n  margin-left: 10px;\n  margin-top: 10px;\n  border-bottom: 50px solid 0;\n}\n\n.nomidle {\n  border-left: 0 none;\n}\n\n.selecionavel:hover {\n  background-color: #999999;\n  cursor: pointer;\n}\n\n.selected {\n  border: 3px solid red;\n}\n\n.add {\n  border: 5px solid;\n}\n\n.icone {\n  max-width: 100px;\n  max-height: 50px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.icon2 {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.back {\n  border-radius: 23px;\n  max-width: 550px;\n  background-color: rgba(0, 2, 10, 0.801) !important;\n  margin: auto;\n}\n\n.back ion-label {\n  --color: white;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tZXNhLWluaWNpYWwvQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyaWFjb2VzXFxtZXNhLWluaWNpYWxcXG1lc2EtaW5pY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tZXNhLWluaWNpYWwvbWVzYS1pbmljaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmlhY29lcy9tZXNhLWluaWNpYWwvbWVzYS1pbmljaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vYnJlYWsge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubm9icmVhayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4uYWxpbmhhbWVudG8ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbn1cclxuXHJcbi5ub21pZGxlIHtcclxuICBib3JkZXItbGVmdDogMCBub25lO1xyXG59XHJcblxyXG4uc2VsZWNpb25hdmVsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbmUge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uMiB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIsIDEwLCAwLjgwMSkgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5iYWNrIGlvbi1sYWJlbCB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi5ub2JyZWFrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubm9icmVhayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLmFsaW5oYW1lbnRvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgMDtcbn1cblxuLm5vbWlkbGUge1xuICBib3JkZXItbGVmdDogMCBub25lO1xufVxuXG4uc2VsZWNpb25hdmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG59XG5cbi5hZGQge1xuICBib3JkZXI6IDVweCBzb2xpZDtcbn1cblxuLmljb25lIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmljb24yIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYmFjayB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMiwgMTAsIDAuODAxKSAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5iYWNrIGlvbi1sYWJlbCB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");






var MesaInicialComponent = /** @class */ (function () {
    function MesaInicialComponent(mesaService, userService, router, storageService) {
        this.mesaService = mesaService;
        this.userService = userService;
        this.router = router;
        this.storageService = storageService;
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
            idFichaModelo: ''
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
    MesaInicialComponent.prototype.ngOnInit = function () {
        this.abaAtual = 'info';
        this.rowSelected = document.createElement("b");
        this.setPromisse();
    };
    MesaInicialComponent.prototype.ngOnDestroy = function () {
        this.storageService.setNull();
    };
    MesaInicialComponent.prototype.setPromisse = function () {
        var _this = this;
        var idMesa = this.storageService.getSelectedMesa().idMesa;
        this.promisse = this.mesaService.findMesaInicial2(idMesa);
        this.mesaService.findMesaInicial2(idMesa)
            .subscribe(function (res) {
            _this.mesa = res;
            _this.jogadores = res.jogadores;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            _this.abaAtual = 'regras';
            _this.router.navigateByUrl('perfil');
        });
    };
    MesaInicialComponent.prototype.selecionar = function (jogador, row) {
        this.rowSelected.classList.remove('selected');
        row.classList.add('selected');
        this.rowSelected = row;
        this.selectedJogador = jogador;
    };
    MesaInicialComponent.prototype.getColor = function (aba) {
        if (aba = this.abaAtual) {
            return 'success';
        }
        else {
            return "warning";
        }
    };
    MesaInicialComponent.prototype.changeTemplate = function () {
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
                var idMesa = this.storageService.getSelectedMesa().idMesa;
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
    };
    MesaInicialComponent.prototype.mudaAba = function (event) {
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
    };
    MesaInicialComponent.prototype.mudaAtributo = function (event) {
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
    };
    MesaInicialComponent.prototype.modalClosed = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.abaAtual = 'info';
                return [2 /*return*/];
            });
        });
    };
    MesaInicialComponent.ctorParameters = function () { return [
        { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"] },
        { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
    ]; };
    MesaInicialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mesa-inicial',
            template: __webpack_require__(/*! raw-loader!./mesa-inicial.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.html"),
            styles: [__webpack_require__(/*! ./mesa-inicial.component.scss */ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_2__["MesasService"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], MesaInicialComponent);
    return MesaInicialComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm5/primeng-table.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm5/primeng-card.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm5/primeng-carousel.js");
/* harmony import */ var _rpg_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rpg.module */ "./src/app/components/criacoes/rpg.module.ts");
/* harmony import */ var _mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mesa-inicial/mesa-inicial.component */ "./src/app/components/criacoes/mesa-inicial/mesa-inicial.component.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gerencia-componente/gerencia-componente.component */ "./src/app/components/criacoes/gerencia-componente/gerencia-componente.component.ts");
/* harmony import */ var _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detalha-componente/detalha-componente.component */ "./src/app/components/criacoes/detalha-componente/detalha-componente.component.ts");
/* harmony import */ var _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalha-npc/detalha-npc.component */ "./src/app/components/criacoes/detalha-npc/detalha-npc.component.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./regra-new/regra-new.component */ "./src/app/components/criacoes/regra-new/regra-new.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");





















var MesaModule = /** @class */ (function () {
    function MesaModule() {
    }
    MesaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_11__["MesaInicialComponent"], _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_13__["GerenciaComponenteComponent"], _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_15__["DetalhaNpcComponent"],
                _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_14__["DetalhaComponenteComponent"], _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_19__["RegraNewComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _rpg_module__WEBPACK_IMPORTED_MODULE_10__["RpgModule"],
                _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_12__["LoadSpinnerModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_16__["FichasModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_17__["PaginacaoModule"],
                _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_18__["ListasModule"],
                _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_20__["ImagemDisplayModule"]
            ],
            exports: [_mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_11__["MesaInicialComponent"], _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_13__["GerenciaComponenteComponent"], _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_15__["DetalhaNpcComponent"],
                _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_14__["DetalhaComponenteComponent"], _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_19__["RegraNewComponent"],],
            entryComponents: [_mesa_inicial_mesa_inicial_component__WEBPACK_IMPORTED_MODULE_11__["MesaInicialComponent"], _gerencia_componente_gerencia_componente_component__WEBPACK_IMPORTED_MODULE_13__["GerenciaComponenteComponent"], _detalha_npc_detalha_npc_component__WEBPACK_IMPORTED_MODULE_15__["DetalhaNpcComponent"],
                _detalha_componente_detalha_componente_component__WEBPACK_IMPORTED_MODULE_14__["DetalhaComponenteComponent"], _regra_new_regra_new_component__WEBPACK_IMPORTED_MODULE_19__["RegraNewComponent"],]
        })
    ], MesaModule);
    return MesaModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");







var RegraNewComponent = /** @class */ (function () {
    function RegraNewComponent(modalCtrl, mesaService, formBuilder, alertController, storage, toast) {
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
    RegraNewComponent.prototype.ngOnInit = function () { };
    RegraNewComponent.prototype.addRegra = function () {
        var _this = this;
        this.loading = true;
        var regra = {
            nome: this.formRegra.get('nome').value,
            descricao: this.formRegra.get('descricao').value
        };
        var idMesa = this.mesaService.getMesaSelecionada();
        //console.log('Mesa ID:', idMesa)
        this.mesaService.addRegraNew(idMesa, regra)
            .subscribe(function (res) {
            //console.log(res);
            _this.loading = false;
            _this.callToast('success', 'Adicionado!', 'Regra adicionada com sucesso!');
            _this.modalCtrl.dismiss(res.sistema.sistemas);
        }, function (error) {
            _this.loading = false;
        });
    };
    RegraNewComponent.prototype.callToast = function (severity, summary, detail) {
        this.toast.clear();
        this.toast.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    RegraNewComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    RegraNewComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
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
    return RegraNewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contmesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contmesa.page */ "./src/app/contmesa/contmesa.page.ts");




var routes = [
    {
        path: '',
        component: _contmesa_page__WEBPACK_IMPORTED_MODULE_3__["ContmesaPage"]
    }
];
var ContmesaPageRoutingModule = /** @class */ (function () {
    function ContmesaPageRoutingModule() {
    }
    ContmesaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContmesaPageRoutingModule);
    return ContmesaPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contmesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contmesa-routing.module */ "./src/app/contmesa/contmesa-routing.module.ts");
/* harmony import */ var _contmesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contmesa.page */ "./src/app/contmesa/contmesa.page.ts");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_criacoes_mesa_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/mesa.module */ "./src/app/components/criacoes/mesa.module.ts");









var ContmesaPageModule = /** @class */ (function () {
    function ContmesaPageModule() {
    }
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
    return ContmesaPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils/fundo.service */ "./src/app/services/utils/fundo.service.ts");






var ContmesaPage = /** @class */ (function () {
    function ContmesaPage(mesaService, storageService, plataform, fundoService) {
        this.mesaService = mesaService;
        this.storageService = storageService;
        this.plataform = plataform;
        this.fundoService = fundoService;
        this.idMesa = '';
        this.img = '';
    }
    ContmesaPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var idMesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        idMesa = this.storageService.getSelectedMesa().idMesa;
                        this.idMesa = idMesa;
                        return [4 /*yield*/, this.plataform.ready()
                                .then(function () {
                                if (_this.plataform.width() <= 700)
                                    _this.fundoService.setCurrentPlataform('mobile');
                                else
                                    _this.fundoService.setCurrentPlataform('pc');
                                _this.img = _this.fundoService.changeImg();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContmesaPage.ctorParameters = function () { return [
        { type: _services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_3__["MesasService"] },
        { type: _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_5__["FundoService"] }
    ]; };
    ContmesaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contmesa',
            template: __webpack_require__(/*! raw-loader!./contmesa.page.html */ "./node_modules/raw-loader/index.js!./src/app/contmesa/contmesa.page.html"),
            styles: [__webpack_require__(/*! ./contmesa.page.scss */ "./src/app/contmesa/contmesa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_3__["MesasService"], _services_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_utils_fundo_service__WEBPACK_IMPORTED_MODULE_5__["FundoService"]])
    ], ContmesaPage);
    return ContmesaPage;
}());



/***/ })

}]);
//# sourceMappingURL=contmesa-contmesa-module-es5.js.map