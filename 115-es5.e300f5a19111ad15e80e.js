(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{zG3r:function(e,i,t){"use strict";t.r(i),t.d(i,"ion_split_pane",(function(){return o}));var n=t("Twl7"),s=(t("ttJE"),{xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""}),o=function(){function e(e){Object(n.l)(this,e),this.visible=!1,this.disabled=!1,this.when=s.lg,this.ionSplitPaneVisible=Object(n.d)(this,"ionSplitPaneVisible",7)}return e.prototype.visibleChanged=function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)},e.prototype.connectedCallback=function(){this.styleChildren(),this.updateState()},e.prototype.disconnectedCallback=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.componentWillLoad=function(){void 0===this.contentId&&console.warn('[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-split-pane>\n    ...\n    <div main>...</div>\n  </ion-split-pane>\n\nAFTER:\n  <ion-split-pane contentId="main-content">\n    ...\n    <div id="main-content">...</div>\n  </ion-split-pane>\n')},e.prototype.updateState=function(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!=typeof i){var t=s[i]||i;if(0!==t.length){if(window.matchMedia){var n=function(i){e.visible=i.matches},o=window.matchMedia(t);o.addListener(n),this.rmL=function(){return o.removeListener(n)},this.visible=o.matches}}else this.visible=!1}else this.visible=i}},e.prototype.isPane=function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains("split-pane-side")},e.prototype.styleChildren=function(){for(var e=this.contentId,i=this.el.children,t=this.el.childElementCount,n=!1,s=0;s<t;s++){var o=i[s],l=void 0!==e?o.id===e:o.hasAttribute("main");if(l){if(n)return void console.warn("split pane cannot have more than one main node");n=!0}a(o,l)}n||console.warn("split pane does not have a specified main node")},e.prototype.render=function(){var e,i=Object(n.e)(this);return Object(n.i)(n.a,{class:(e={},e[i]=!0,e["split-pane-"+i]=!0,e["split-pane-visible"]=this.visible,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),e}(),a=function(e,i){var t,n;i?(t="split-pane-main",n="split-pane-side"):(t="split-pane-side",n="split-pane-main");var s=e.classList;s.add(t),s.remove(n)}}}]);