(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+kEH":function(l,n,e){"use strict";e.d(n,"e",(function(){return t})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return r}));var t={MedievalRPG:0,CyberpunkRPG:1,SteampunkRPG:2,HorrorRPG:3},o=["Medieval","Cyberpunk","Steampunk","Horror"],u=[{value:0,template:"Ataque"},{value:1,template:"Defesa"},{value:2,template:"Utilizavel"}],i={Corte:0,Esmagamento:1,Perfuacao:2},r=[{value:0,template:"Principal"},{value:1,template:"Secund\xe1ria"},{value:2,template:"Atividade"},{value:3,template:"Evento"}]},"79Bw":function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));var t=function(){return function(){}}()},GmDN:function(l,n,e){"use strict";e.d(n,"a",(function(){return u}));var t=e("mrSG"),o=e("CcnG"),u=(e("ZZ/e"),function(){function l(l,n){this.alertController=l,this.modalCtrl=n,this.strings=[],this.saveButton=!1,this.closeButton=!1,this.deleted=new o.EventEmitter,this.isModal=!0}return l.prototype.ngOnInit=function(){},l.prototype.addString=function(){this.presentAlertPrompt()},l.prototype.remov=function(l){this.strings.forEach((function(n,e,t){n==l&&t.splice(e,1)})),this.deleted.emit(l)},l.prototype.presentAlertPrompt=function(){return t.__awaiter(this,void 0,void 0,(function(){var l=this;return t.__generator(this,(function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Adicionar",inputs:[{name:"palavra",type:"text",placeholder:"Descri\xe7\xe3o da "+this.titulo}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"Salvar",handler:function(n){[].push(),l.strings.push(n.palavra)}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l}())},Sc5U:function(l,n,e){"use strict";var t=e("CcnG"),o=e("oBZk"),u=e("ZZ/e"),i=e("Ip0R"),r=e("GmDN");e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return g})),e.d(n,"a",(function(){return R}));var d=t["\u0275crt"]({encapsulation:0,styles:[[".especializacao[_ngcontent-%COMP%]{border:5px solid #000;height:300px;margin:5px;overflow-y:scroll}.item[_ngcontent-%COMP%]{word-wrap:break-word;line-break:normal}.especNome[_ngcontent-%COMP%]{display:block;font-weight:700}.especDesc[_ngcontent-%COMP%]{display:block;word-wrap:break-word;border-left:5px solid var(--ion-color-primary,#3880ff);margin-left:5px;padding-left:5px}p[_ngcontent-%COMP%]{display:!important inline;word-wrap:!important break-word;white-space:!important nowrap}.fav[_ngcontent-%COMP%]{margin-left:2%;margin-top:2%}.fav[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-top:1%}.thing[_ngcontent-%COMP%]{padding:1rem 1rem 1rem .5rem;width:95%;box-shadow:0 15px 30px 0 rgba(0,0,0,.11),0 5px 15px 0 rgba(0,0,0,.08);background-color:#fff;border-radius:.5rem;margin-left:10px;border-left:.5rem solid #0f9;-webkit-transition:border-left .3s ease-in-out,padding-left .3s ease-in-out;transition:border-left .3s ease-in-out,padding-left .3s ease-in-out}.thing[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{margin-top:0}.thing[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{margin-bottom:0}.heading[_ngcontent-%COMP%]{color:#fff}body[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;height:100vh;background-color:#09f}"]],data:{}});function a(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"ion-item-sliding",[],null,null,null,o.kb,o.w)),t["\u0275did"](1,49152,[["slide",4]],0,u.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-item",[],null,null,null,o.lb,o.t)),t["\u0275did"](3,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,1,"h2",[["class","espec especNome"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,[""," "])),(l()(),t["\u0275eld"](6,0,null,0,4,"ion-item-options",[["side","start"]],null,null,null,o.jb,o.v)),t["\u0275did"](7,49152,null,0,u.L,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(l()(),t["\u0275eld"](8,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.remov(l.context.$implicit)&&t),t}),o.ib,o.u)),t["\u0275did"](9,49152,null,0,u.K,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Deletar"])),(l()(),t["\u0275eld"](11,0,null,0,4,"ion-item-options",[["side","end"]],null,null,null,o.jb,o.v)),t["\u0275did"](12,49152,null,0,u.L,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(l()(),t["\u0275eld"](13,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.remov(l.context.$implicit)&&t),t}),o.ib,o.u)),t["\u0275did"](14,49152,null,0,u.K,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Deletar"]))],(function(l,n){l(n,7,0,"start"),l(n,9,0,"danger"),l(n,12,0,"end"),l(n,14,0,"danger")}),(function(l,n){l(n,5,0,n.context.$implicit)}))}function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,11,"ion-content",[],null,null,null,o.bb,o.m)),t["\u0275did"](2,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,4,"ion-item",[],null,null,null,o.lb,o.t)),t["\u0275did"](4,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,2,"ion-label",[["position","fixed"],["style","overflow: visible;"]],null,null,null,o.mb,o.x)),t["\u0275did"](6,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{position:[0,"position"]},null),(l()(),t["\u0275ted"](7,0,["",": "])),(l()(),t["\u0275eld"](8,0,null,0,4,"div",[["class","thing"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,3,"ion-list",[],null,null,null,o.ob,o.y)),t["\u0275did"](10,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,a)),t["\u0275did"](12,278528,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,6,0,"fixed"),l(n,12,0,e.strings)}),(function(l,n){l(n,7,0,n.component.titulo)}))}function s(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"ion-item-sliding",[],null,null,null,o.kb,o.w)),t["\u0275did"](1,49152,[["slide",4]],0,u.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-item",[],null,null,null,o.lb,o.t)),t["\u0275did"](3,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,1,"h2",[["class","espec especNome"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,[""," "])),(l()(),t["\u0275eld"](6,0,null,0,4,"ion-item-options",[["side","start"]],null,null,null,o.jb,o.v)),t["\u0275did"](7,49152,null,0,u.L,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(l()(),t["\u0275eld"](8,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.remov(l.context.$implicit)&&t),t}),o.ib,o.u)),t["\u0275did"](9,49152,null,0,u.K,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Deletar"])),(l()(),t["\u0275eld"](11,0,null,0,4,"ion-item-options",[["side","end"]],null,null,null,o.jb,o.v)),t["\u0275did"](12,49152,null,0,u.L,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(l()(),t["\u0275eld"](13,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.remov(l.context.$implicit)&&t),t}),o.ib,o.u)),t["\u0275did"](14,49152,null,0,u.K,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Deletar"]))],(function(l,n){l(n,7,0,"start"),l(n,9,0,"danger"),l(n,12,0,"end"),l(n,14,0,"danger")}),(function(l,n){l(n,5,0,n.context.$implicit)}))}function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"ion-item",[],null,null,null,o.lb,o.t)),t["\u0275did"](2,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,2,"ion-label",[["position","fixed"],["style","overflow: visible;"]],null,null,null,o.mb,o.x)),t["\u0275did"](4,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{position:[0,"position"]},null),(l()(),t["\u0275ted"](5,0,["",": "])),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","thing"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,3,"ion-list",[],null,null,null,o.ob,o.y)),t["\u0275did"](8,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,s)),t["\u0275did"](10,278528,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,4,0,"fixed"),l(n,10,0,e.strings)}),(function(l,n){l(n,5,0,n.component.titulo)}))}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-button",[["class","btn"],["color","primary"],["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addString()&&t),t}),o.T,o.e)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),t["\u0275ted"](-1,0,["Adicionar"]))],(function(l,n){l(n,1,0,"primary","block","solid")}),null)}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-button",[["class","btn"],["color","danger"],["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.modalCtrl.dismiss()&&t),t}),o.T,o.e)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),t["\u0275ted"](-1,0,[" Fechar"]))],(function(l,n){l(n,1,0,"danger","block","solid")}),null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](1,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](3,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](4,0,null,null,5,"ion-footer",[],null,null,null,o.db,o.o)),t["\u0275did"](5,49152,null,0,u.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](7,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](9,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.isModal),l(n,3,0,!e.isModal),l(n,7,0,e.saveButton),l(n,9,0,e.closeButton)}),null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-listas",[],null,null,null,g,d)),t["\u0275did"](1,114688,null,0,r.a,[u.a,u.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var R=t["\u0275ccf"]("app-listas",r.a,b,{strings:"strings",titulo:"titulo",saveButton:"saveButton",closeButton:"closeButton",isModal:"isModal"},{deleted:"deleted"},[])},"n/xu":function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),i=e("oBZk"),r=e("ZZ/e"),d=e("XcQr"),a=e("GnwP"),c=e("gIcY"),s=e("b2/f"),f=e("JjnN"),m=e("9eZL"),p=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),g=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"ion-header",[],null,null,null,i.fb,i.q)),t["\u0275did"](1,49152,null,0,r.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Db,i.O)),t["\u0275did"](3,49152,null,0,r.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.U,i.f)),t["\u0275did"](5,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,i.pb,i.B)),t["\u0275did"](7,49152,null,0,r.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,2,"ion-title",[],null,null,null,i.Cb,i.N)),t["\u0275did"](9,49152,null,0,r.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" Gerencie miss\xf5es criadas por voc\xea "])),(l()(),t["\u0275eld"](11,0,null,null,3,"ion-content",[],null,null,null,i.bb,i.m)),t["\u0275did"](12,49152,null,0,r.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](13,0,null,0,1,"app-missao",[],null,null,null,d.c,d.b)),t["\u0275did"](14,114688,null,0,a.a,[c.FormBuilder,s.a,r.a,f.a,m.a],{menu:[0,"menu"],cancelarBTN:[1,"cancelarBTN"]},null)],(function(l,n){l(n,14,0,!1,!1)}),null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-germissoes",[],null,null,null,b,g)),t["\u0275did"](1,114688,null,0,p,[],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t["\u0275ccf"]("app-germissoes",p,R,{},{},[]),h=e("J4WA"),C=e("Xrc+"),M=e("Sc5U"),k=e("hg+i"),N=e("+KPm"),w=e("Ip0R"),D=e("4Vzq"),Z=e("ZYCi"),x=function(){return function(){}}(),_=e("7LN8"),E=e("Fzqc"),y=e("dWZg"),P=e("qAlS"),O=e("g4HV"),B=e("nciF"),F=e("mU/a"),I=e("/3G7"),S=e("fBTL"),G=e("66nc"),T=e("VSng"),V=e("G5kV"),L=e("EjV3"),A=e("+1RY"),H=e("ZZ1t"),j=e("79Bw"),z=e("vBv8");e.d(n,"GermissoesPageModuleNgFactory",(function(){return K}));var K=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,v,h.a,C.a,M.a,d.a,k.a,N.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[t.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,c["\u0275angular_packages_forms_forms_o"],c["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,r.b,r.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.Hb,r.Hb,[r.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.Kb,r.Kb,[r.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,D.MessageService,D.MessageService,[]),t["\u0275mpd"](4608,c.FormBuilder,c.FormBuilder,[]),t["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),t["\u0275mpd"](1073742336,c["\u0275angular_packages_forms_forms_d"],c["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,c.FormsModule,c.FormsModule,[]),t["\u0275mpd"](1073742336,r.Eb,r.Eb,[]),t["\u0275mpd"](1073742336,Z.o,Z.o,[[2,Z.t],[2,Z.m]]),t["\u0275mpd"](1073742336,x,x,[]),t["\u0275mpd"](1073742336,_.SharedModule,_.SharedModule,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,y.b,y.b,[]),t["\u0275mpd"](1073742336,P.ScrollingModule,P.ScrollingModule,[]),t["\u0275mpd"](1073742336,O.TooltipModule,O.TooltipModule,[]),t["\u0275mpd"](1073742336,B.DropdownModule,B.DropdownModule,[]),t["\u0275mpd"](1073742336,F.PaginatorModule,F.PaginatorModule,[]),t["\u0275mpd"](1073742336,I.DataViewModule,I.DataViewModule,[]),t["\u0275mpd"](1073742336,S.PanelModule,S.PanelModule,[]),t["\u0275mpd"](1073742336,G.DialogModule,G.DialogModule,[]),t["\u0275mpd"](1073742336,T.ButtonModule,T.ButtonModule,[]),t["\u0275mpd"](1073742336,V.ToastModule,V.ToastModule,[]),t["\u0275mpd"](1073742336,L.ProgressSpinnerModule,L.ProgressSpinnerModule,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,c.ReactiveFormsModule,c.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,j.a,j.a,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,Z.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);