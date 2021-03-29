(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~ficha-ficha-module~fichamodelo-fichamodelo-module~gercapitulos-gerc~51cbcb23"],{

/***/ "./node_modules/primeng/fesm5/primeng-dialog.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-dialog.js ***!
  \******************************************************/
/*! exports provided: Dialog, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");






var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var idx = 0;
var Dialog = /** @class */ (function () {
    function Dialog(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.draggable = true;
        this.resizable = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.showHeader = true;
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.minX = 0;
        this.minY = 0;
        this.focusOnShow = true;
        this.focusTrap = true;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.closeIcon = 'pi pi-times';
        this.minimizeIcon = 'pi pi-window-minimize';
        this.maximizeIcon = 'pi pi-window-maximize';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = "ui-dialog-" + idx++;
        this._style = {};
    }
    Object.defineProperty(Dialog.prototype, "responsive", {
        get: function () {
            return false;
        },
        set: function (_responsive) {
            console.log("Responsive property is deprecated.");
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Dialog.prototype, "breakpoint", {
        get: function () {
            return 649;
        },
        set: function (_breakpoint) {
            console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Dialog.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this._visible = value;
            if (this._visible && !this.maskVisible) {
                this.maskVisible = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (value) {
            if (value) {
                this._style = __assign({}, value);
                this.originalStyle = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Dialog.prototype.focus = function () {
        var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.container, 'button');
        if (focusable) {
            this.zone.runOutsideAngular(function () {
                setTimeout(function () { return focusable.focus(); }, 5);
            });
        }
    };
    Dialog.prototype.close = function (event) {
        this.visibleChange.emit(false);
        event.preventDefault();
    };
    Dialog.prototype.enableModality = function () {
        var _this = this;
        if (this.closable && this.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
                if (!_this.container.isSameNode(event.target) && !_this.container.contains(event.target)) {
                    _this.close(event);
                }
            });
        }
        if (this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
        }
    };
    Dialog.prototype.disableModality = function () {
        if (this.wrapper) {
            if (this.dismissableMask) {
                this.unbindMaskClickListener();
            }
            if (this.modal && this.blockScroll) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }
        }
    };
    Dialog.prototype.toggleMaximize = function (event) {
        if (this.maximized)
            this.revertMaximize();
        else
            this.maximize();
        event.preventDefault();
    };
    Dialog.prototype.maximize = function () {
        this.preMaximizePageX = parseFloat(this.container.style.top);
        this.preMaximizePageY = parseFloat(this.container.style.left);
        this.preMaximizeContainerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
        this.preMaximizeContainerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
        this.preMaximizeContentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
        this._style.top = this.preMaximizePageX ? '0px' : '';
        this._style.left = this.preMaximizePageY ? '0px' : '';
        this._style.width = '100vw';
        this._style.height = '100vh';
        var diffHeight = 0;
        if (this.headerViewChild && this.headerViewChild.nativeElement) {
            diffHeight += primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.headerViewChild.nativeElement);
        }
        if (this.footerViewChild && this.footerViewChild.nativeElement) {
            diffHeight += primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.footerViewChild.nativeElement);
        }
        this.contentViewChild.nativeElement.style.height = 'calc(100vh - ' + diffHeight + 'px)';
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(this.container, 'ui-dialog-maximized');
        if (!this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
        }
        this.moveOnTop();
        this.maximized = true;
    };
    Dialog.prototype.revertMaximize = function () {
        var _this = this;
        this._style.top = this.preMaximizePageX ? this.preMaximizePageX + 'px' : '';
        this._style.left = this.preMaximizePageY ? this.preMaximizePageY + 'px' : '';
        this._style.width = this.preMaximizeContainerWidth + 'px';
        this._style.height = this.preMaximizeContainerHeight + 'px';
        this.contentViewChild.nativeElement.style.height = this.preMaximizeContentHeight + 'px';
        if (!this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
        }
        this.maximized = false;
        this.zone.runOutsideAngular(function () {
            setTimeout(function () { return primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(_this.container, 'ui-dialog-maximized'); }, 300);
        });
    };
    Dialog.prototype.unbindMaskClickListener = function () {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    };
    Dialog.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
            this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex - 1));
        }
    };
    Dialog.prototype.initDrag = function (event) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(event.target, 'ui-dialog-titlebar-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(event.target.parentElement, 'ui-dialog-titlebar-icon')) {
            return;
        }
        if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.onKeydown = function (event) {
        if (this.focusTrap) {
            if (event.which === 9) {
                event.preventDefault();
                var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getFocusableElements(this.container);
                if (focusableElements && focusableElements.length > 0) {
                    if (!document.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        var focusedIndex = focusableElements.indexOf(document.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        }
    };
    Dialog.prototype.onDrag = function (event) {
        if (this.dragging) {
            var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
            var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(this.container);
            var leftPos = offset.left + deltaX;
            var topPos = offset.top + deltaY;
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            if (leftPos >= this.minX && (leftPos + containerWidth) < viewport.width) {
                this._style.left = leftPos + 'px';
                this.lastPageX = event.pageX;
                this.container.style.left = leftPos + 'px';
            }
            if (topPos >= this.minY && (topPos + containerHeight) < viewport.height) {
                this._style.top = topPos + 'px';
                this.lastPageY = event.pageY;
                this.container.style.top = topPos + 'px';
            }
        }
    };
    Dialog.prototype.endDrag = function (event) {
        if (this.draggable) {
            this.dragging = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.initResize = function (event) {
        if (this.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.onResize = function (event) {
        if (this.resizing) {
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
            var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
            var contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
            var newWidth = containerWidth + deltaX;
            var newHeight = containerHeight + deltaY;
            var minWidth = this.container.style.minWidth;
            var minHeight = this.container.style.minHeight;
            var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(this.container);
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                this._style.width = newWidth + 'px';
                this.container.style.width = this._style.width;
            }
            if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                this.contentViewChild.nativeElement.style.height = contentHeight + deltaY + 'px';
            }
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.onResizeEnd = function () {
        if (this.resizing) {
            this.resizing = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.bindGlobalListeners = function () {
        if (this.focusTrap) {
            this.bindDocumentKeydownListener();
        }
        if (this.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
        }
        if (this.resizable) {
            this.bindDocumentResizeListeners();
        }
        if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
        }
    };
    Dialog.prototype.unbindGlobalListeners = function () {
        this.unbindDocumentDragListener();
        this.unbindDocumentKeydownListener();
        this.unbindDocumentDragEndListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentEscapeListener();
    };
    Dialog.prototype.bindDocumentKeydownListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentKeydownListener = _this.onKeydown.bind(_this);
            window.document.addEventListener('keydown', _this.documentKeydownListener);
        });
    };
    Dialog.prototype.unbindDocumentKeydownListener = function () {
        if (this.documentKeydownListener) {
            window.document.removeEventListener('keydown', this.documentKeydownListener);
            this.documentKeydownListener = null;
        }
    };
    Dialog.prototype.bindDocumentDragListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentDragListener = _this.onDrag.bind(_this);
            window.document.addEventListener('mousemove', _this.documentDragListener);
        });
    };
    Dialog.prototype.unbindDocumentDragListener = function () {
        if (this.documentDragListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
        }
    };
    Dialog.prototype.bindDocumentDragEndListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentDragEndListener = _this.endDrag.bind(_this);
            window.document.addEventListener('mouseup', _this.documentDragEndListener);
        });
    };
    Dialog.prototype.unbindDocumentDragEndListener = function () {
        if (this.documentDragEndListener) {
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
        }
    };
    Dialog.prototype.bindDocumentResizeListeners = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentResizeListener = _this.onResize.bind(_this);
            _this.documentResizeEndListener = _this.onResizeEnd.bind(_this);
            window.document.addEventListener('mousemove', _this.documentResizeListener);
            window.document.addEventListener('mouseup', _this.documentResizeEndListener);
        });
    };
    Dialog.prototype.unbindDocumentResizeListeners = function () {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mousemove', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    };
    Dialog.prototype.bindDocumentEscapeListener = function () {
        var _this = this;
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
                if (parseInt(_this.container.style.zIndex) === (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex + _this.baseZIndex)) {
                    _this.close(event);
                }
            }
        });
    };
    Dialog.prototype.unbindDocumentEscapeListener = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    Dialog.prototype.appendContainer = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.container, this.appendTo);
        }
    };
    Dialog.prototype.restoreAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    Dialog.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.onShow.emit({});
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                if (this.maximized) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                }
                if (this.modal) {
                    this.enableModality();
                }
                if (this.focusOnShow) {
                    this.focus();
                }
                break;
        }
    };
    Dialog.prototype.onAnimationEnd = function (event) {
        switch (event.toState) {
            case 'void':
                this.onContainerDestroy();
                this.onHide.emit({});
                break;
        }
    };
    Dialog.prototype.onContainerDestroy = function () {
        this.unbindGlobalListeners();
        this.dragging = false;
        this.maskVisible = false;
        if (this.maximized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            this.maximized = false;
        }
        if (this.modal) {
            this.disableModality();
        }
        this.container = null;
        this.wrapper = null;
        this._style = this.originalStyle ? __assign({}, this.originalStyle) : {};
    };
    Dialog.prototype.ngOnDestroy = function () {
        if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
        }
    };
    Dialog.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "resizable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "positionLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "positionTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "contentStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "closeOnEscape", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "dismissableMask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "rtl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "responsive", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "showHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "breakpoint", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "blockScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "minX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "minY", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "focusOnShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "maximizable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "focusTrap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "transitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "closeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "minimizeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "maximizeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"], { descendants: false })
    ], Dialog.prototype, "headerFacet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"], { descendants: false })
    ], Dialog.prototype, "footerFacet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('titlebar')
    ], Dialog.prototype, "headerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content')
    ], Dialog.prototype, "contentViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('footer')
    ], Dialog.prototype, "footerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Dialog.prototype, "onShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Dialog.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], Dialog.prototype, "visibleChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "visible", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Dialog.prototype, "style", null);
    Dialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-dialog',
            template: "\n    <div class=\"ui-dialog-wrapper\" [ngClass]=\"{'ui-widget-overlay ui-dialog-mask': modal, 'ui-dialog-mask-scrollblocker': modal && blockScroll}\" *ngIf=\"maskVisible\">\n        <div #container [ngClass]=\"{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable,'ui-dialog-resizable':resizable}\"\n            [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\"\n            [@animation]=\"{value: 'visible', params: {transitionParams: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n            <div #titlebar class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"headerFacet && headerFacet.first\">\n                    <ng-content select=\"p-header\"></ng-content>\n                </span>\n                <div class=\"ui-dialog-titlebar-icons\">\n                    <a *ngIf=\"maximizable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"toggleMaximize($event)\" (keydown.enter)=\"toggleMaximize($event)\">\n                        <span [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                    </a>\n                    <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                        <span [class]=\"closeIcon\"></span>\n                    </a>\n                </div>\n            </div>\n            <div #content class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"contentStyle\">\n                <ng-content></ng-content>\n            </div>\n            <div #footer class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footerFacet && footerFacet.first\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n            <div *ngIf=\"resizable\" class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n        </div>\n    </div>\n",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(0.7)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'none',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}'))
                ])
            ]
        })
    ], Dialog);
    return Dialog;
}());
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            declarations: [Dialog]
        })
    ], DialogModule);
    return DialogModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-dialog.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/utils/paginacao/paginacao.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/utils/paginacao/paginacao.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isModal\">\r\n  <ion-content>\r\n    <p-dataView #dv [value]=\"objs\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [lazy]=\"true\"\r\n      [pageLinks]=\"paginaTotal\" paginatorPosition=\"both\" filterBy=\"nome\" [sortField]=\"sortField\" [sortOrder]=\"sortOrder\"\r\n      (onLazyLoad)=\"loadData($event)\" [emptyMessage]=\"emptyMessage\">\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\">\r\n          <div class=\"ui-g\">\r\n\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n              <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\"\r\n                (onChange)=\"onSortChange($event)\" [style]=\"{'min-width':'140px'}\" [disabled]=\"true\"></p-dropdown>\r\n            </div>\r\n\r\n            <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n              <div style=\"position:relative\">\r\n                <input [disabled]=\"true\" type=\"search\" pInputText placeholder=\"Filtrar por nome\"\r\n                  (input)=\"dv.filter($event.target.value, 'contains')\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </p-header>\r\n      <ng-template let-obj pTemplate=\"listItem\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"car-details\" (click)=\"copy($event, obj)\">\r\n            <div>\r\n              <img class=\"img-border\" [src]=\"obj.imgURL || defaultImg\">\r\n              <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">Código: <b>{{ obj.id }}</b></div>\r\n                <div class=\"ui-g-12\"><b>{{ obj.nome?.substring(0,20).concat('...') }}</b></div>\r\n                <div class=\"ui-g-12\"><b>{{ obj.descricao?.substring(0,20).concat('...') }}</b></div>\r\n                <div class=\"ui-g-12\"><b>{{ getTipo(obj) }}</b></div>\r\n              </div>\r\n            </div>\r\n            <button *ngIf=\"add\" style=\"min-width: 20px;\" pButton type=\"button\" icon=\"pi pi-angle-double-right\"\r\n              (click)=\"selectObj($event, obj)\"></button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-dataView>\r\n\r\n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\r\n      [style]=\"{width: '225px'}\" (onAfterHide)=\"onDialogHide()\">\r\n      <div class=\"ui-g\" *ngIf=\"selectedCar\">\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n          <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\">\r\n        </div>\r\n        <div class=\"ui-g-4\">Vin: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.vin}}</div>\r\n\r\n        <div class=\"ui-g-4\">Brand: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.brand}}</div>\r\n\r\n        <div class=\"ui-g-4\">Year: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.year}}</div>\r\n\r\n        <div class=\"ui-g-4\">Color: </div>\r\n        <div class=\"ui-g-8\">{{selectedCar.color}}</div>\r\n      </div>\r\n    </p-dialog>\r\n    <ion-button *ngIf=\"closeBTN\" class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"danger\" (click)=\"close()\">\r\n      Fechar</ion-button>\r\n  </ion-content>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!isModal\">\r\n  <p-dataView #dv [value]=\"objs\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [lazy]=\"true\"\r\n    [pageLinks]=\"paginaTotal\" paginatorPosition=\"both\" filterBy=\"nome\" [sortField]=\"sortField\" [sortOrder]=\"sortOrder\"\r\n    (onLazyLoad)=\"loadData($event)\" [emptyMessage]=\"emptyMessage\">\r\n    <p-header>\r\n      <div class=\"ui-helper-clearfix\">\r\n        <div class=\"ui-g\">\r\n\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\"\r\n              (onChange)=\"onSortChange($event)\" [style]=\"{'min-width':'140px'}\" [disabled]=\"true\"></p-dropdown>\r\n          </div>\r\n\r\n          <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n            <div style=\"position:relative\">\r\n              <input [disabled]=\"true\" type=\"search\" pInputText placeholder=\"Filtrar por nome\"\r\n                (input)=\"dv.filter($event.target.value, 'contains')\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </p-header>\r\n    <ng-template let-obj pTemplate=\"listItem\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"car-details\" (click)=\"copy($event, obj)\">\r\n          <div>\r\n            <img [src]=\"obj.imgURL || defaultImg\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12\">Código: <b>{{ obj.id }}</b></div>\r\n              <div class=\"ui-g-12\"><b>{{ obj.nome?.substring(0,20).concat('...') }}</b></div>\r\n              <div class=\"ui-g-12\"><b>{{ obj.descricao?.substring(0,20).concat('...') }}</b></div>\r\n              <div class=\"ui-g-12\"><b>{{ getTipo(obj) }}</b></div>\r\n            </div>\r\n          </div>\r\n          <button *ngIf=\"add\" style=\"min-width: 20px;\" pButton type=\"button\" icon=\"pi pi-angle-double-right\"\r\n            (click)=\"selectObj($event, obj)\"></button>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataView>\r\n  <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\r\n    [style]=\"{width: '225px'}\" (onAfterHide)=\"onDialogHide()\">\r\n    <div class=\"ui-g\" *ngIf=\"selectedCar\">\r\n      <div class=\"ui-g-12\" style=\"text-align:center\">\r\n        <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\">\r\n      </div>\r\n      <div class=\"ui-g-4\">Vin: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.vin}}</div>\r\n\r\n      <div class=\"ui-g-4\">Brand: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.brand}}</div>\r\n\r\n      <div class=\"ui-g-4\">Year: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.year}}</div>\r\n\r\n      <div class=\"ui-g-4\">Color: </div>\r\n      <div class=\"ui-g-8\">{{selectedCar.color}}</div>\r\n    </div>\r\n  </p-dialog>\r\n  <ion-button *ngIf=\"closeBTN\" class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"danger\" (click)=\"close()\">\r\n    Fechar</ion-button>\r\n</ng-container>\r\n<p-toast position=\"top-center\" life=\"3000\"></p-toast>\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/components/utils/paginacao/paginacao.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/utils/paginacao/paginacao.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-container {\n  text-align: center;\n}\n\n.car-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n}\n\n.car-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.car-details > div img {\n  margin-right: 14px;\n}\n\n.car-detail {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n}\n\n.ui-panel-content {\n  padding: 1em;\n}\n\n.dark-theme :host ::ng-deep .car-details,\n.dark-theme :host ::ng-deep .car-detail {\n  border-bottom: 1px solid #191919;\n}\n\n@media (max-width: 900px) {\n  .car-details img {\n    width: 50px;\n    height: 120px;\n  }\n\n  .filter-container {\n    text-align: left;\n  }\n}\n\nimg {\n  width: 120px;\n  height: 120px;\n  border-radius: 15px;\n  border: 3px solid white;\n}\n\n.car-details:hover {\n  background-color: #75a1ff;\n}\n\n::ng-deep .ui-dataview {\n  background-color: #050105 !important;\n}\n\n::ng-deep .ui-dataview-header {\n  background-color: #050105 !important;\n  border: none !important;\n  border-bottom: 1px solid #d9dad9 !important;\n}\n\n::ng-deep .ui-paginator {\n  background-color: #050105 !important;\n  border: #050105 !important;\n}\n\n::ng-deep .ui-dataview-content {\n  background-color: #342436 !important;\n  color: white !important;\n}\n\n::ng-deep .ui-paginator * {\n  color: white !important;\n}\n\n::ng-deep .ui-paginator *:hover {\n  color: black !important;\n}\n\n::ng-deep .ui-state-active {\n  background: #7044ff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wYWdpbmFjYW8vQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHV0aWxzXFxwYWdpbmFjYW9cXHBhZ2luYWNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wYWdpbmFjYW8vcGFnaW5hY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTs7RUFFSSxnQ0FBQTtBQ09KOztBREpBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ09OOztFRExFO0lBQ0ksZ0JBQUE7RUNRTjtBQUNGOztBRExBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDT0o7O0FESkE7RUFDSSx5QkFBQTtBQ09KOztBREpBO0VBQ0ksb0NBQUE7QUNPSjs7QURKQTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQ09KOztBREpBO0VBQ0ksb0NBQUE7RUFDQSwwQkFBQTtBQ09KOztBREpBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQ09KOztBREpBO0VBQ0ksdUJBQUE7QUNPSjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FESkE7RUFDSSw4QkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91dGlscy9wYWdpbmFjYW8vcGFnaW5hY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXItZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG59XHJcbi5jYXItZGV0YWlscyA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyLWRldGFpbHMgPiBkaXYgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxufVxyXG4uY2FyLWRldGFpbCB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWRhZDk7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4udWktcGFuZWwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuLmRhcmstdGhlbWUgOmhvc3QgOjpuZy1kZWVwIC5jYXItZGV0YWlscyxcclxuLmRhcmstdGhlbWUgOmhvc3QgOjpuZy1kZWVwIC5jYXItZGV0YWlsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTkxOTE5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5jYXItZGV0YWlscyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5jYXItZGV0YWlsczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhMWZmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNywgMjE4LCAyMTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogIzA1MDEwNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLWRhdGF2aWV3LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MjQzNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICo6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktc3RhdGUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcclxufVxyXG4iLCIuZmlsdGVyLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhci1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xufVxuXG4uY2FyLWRldGFpbHMgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyLWRldGFpbHMgPiBkaXYgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4uY2FyLWRldGFpbCB7XG4gIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLnVpLXBhbmVsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5kYXJrLXRoZW1lIDpob3N0IDo6bmctZGVlcCAuY2FyLWRldGFpbHMsXG4uZGFyay10aGVtZSA6aG9zdCA6Om5nLWRlZXAgLmNhci1kZXRhaWwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE5MTkxOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jYXItZGV0YWlscyBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cblxuICAuZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNhci1kZXRhaWxzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTFmZjtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1kYXRhdmlldy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTAxMDUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMDUwMTA1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktZGF0YXZpZXctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDI0MzYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktcGFnaW5hdG9yICoge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS1wYWdpbmF0b3IgKjpob3ZlciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVpLXN0YXRlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM3MDQ0ZmYgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var PaginacaoComponent = /** @class */ (function () {
    function PaginacaoComponent(service, toast, modalController) {
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
            var aux = this.service.getConfiguration();
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
    PaginacaoComponent.prototype.sendNotification = function () {
        this.notifyParent.emit(this.paginaAtual.toString());
    };
    PaginacaoComponent.prototype.selectObj = function (event, obj) {
        /* this.selectedObj = obj;
         this.displayDialog = true;
         event.preventDefault();*/
        this.objToModal = obj;
        this.getSelectedObj.emit(obj);
        var flag = this.service.getInternalLoad();
        if (flag === true) {
            this.close();
        }
    };
    PaginacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.service.getRefresh().subscribe(function (message) {
            if (message === true) {
                //console.log(message)
                _this.consultar();
            }
        });
        this.consultar();
    };
    PaginacaoComponent.prototype.consultar = function () {
        var _this = this;
        this.loading = true;
        var flag = this.service.getInternalLoad();
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
        this.service.getPromisse().subscribe(function (res) {
            _this.pagina = res;
            _this.paginaTotal = _this.pagina.totalPages;
            _this.totalRecords = _this.pagina.totalElements;
            _this.loadContent();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
        // }
    };
    PaginacaoComponent.prototype.loadContent = function () {
        this.objs = [];
        for (var i = 0; i < this.pagina.content.length; i++) {
            this.objs.push({
                id: this.getProperty(this.pagina.content[i], this.idJson),
                nome: this.getProperty(this.pagina.content[i], this.nomeJson),
                descricao: this.getProperty(this.pagina.content[i], this.descricaoJson),
                tipoRPG: this.getProperty(this.pagina.content[i], this.tipoJson),
                imgURL: this.getProperty(this.pagina.content[i], this.imgURLJson)
            });
        }
    };
    PaginacaoComponent.prototype.getProperty = function (json, field) {
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
    PaginacaoComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    PaginacaoComponent.prototype.onDialogHide = function () {
        this.selectedObj = null;
    };
    PaginacaoComponent.prototype.loadData = function (event) {
        var pageNumber = event.first / 10 || 0;
        this.paginaAtual = pageNumber;
        var flag = this.service.getInternalLoad();
        if (flag == true) {
            this.service.sendNewPageRequest(this.paginaAtual);
        }
        this.sendNotification();
        this.consultar();
    };
    PaginacaoComponent.prototype.clear = function (dv) {
    };
    PaginacaoComponent.prototype.copy = function (event, obj) {
        var flag = false;
        event.target.classList.forEach(function (classe) {
            if (classe.includes('button')) {
                flag = true;
            }
        });
        if (!flag) {
            this.copyToClipboard(obj.id);
            this.callToast();
        }
    };
    PaginacaoComponent.prototype.copyToClipboard = function (value) {
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
    PaginacaoComponent.prototype.callToast = function () {
        this.toast.add({
            severity: 'success',
            summary: 'Copiado',
            detail: 'Código copiado para área de transferência'
        });
    };
    PaginacaoComponent.prototype.getTipo = function (obj) {
        if (isNaN(obj.tipoRPG)) {
            return obj.tipoRPG.substring(0, 20).concat('...');
        }
        else {
            return obj.tipoRPG;
        }
    };
    PaginacaoComponent.prototype.close = function () {
        // console.log(this.objToModal);
        this.modalController.dismiss(this.objToModal);
    };
    PaginacaoComponent.ctorParameters = function () { return [
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_2__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
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
    return PaginacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm5/primeng-dataview.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm5/primeng-paginator.js");
/* harmony import */ var _paginacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginacao.component */ "./src/app/components/utils/paginacao/paginacao.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/fesm5/primeng-panel.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm5/primeng-dialog.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var _load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");













var PaginacaoModule = /** @class */ (function () {
    function PaginacaoModule() {
    }
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
    return PaginacaoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~ficha-ficha-module~fichamodelo-fichamodelo-module~gercapitulos-gerc~51cbcb23-es5.js.map