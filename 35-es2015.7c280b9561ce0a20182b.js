(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"6jz6":function(l,n,e){"use strict";var o=e("8Y7J"),u=e("LmEr");e.d(n,"b",(function(){return t})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var t=o["\u0275crt"]({encapsulation:0,styles:[["footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;width:100%;background-color:#a0dffc;color:#000;text-align:center}"]],data:{}});function i(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,3,"footer",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["2020 "])),(l()(),o["\u0275eld"](4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Ciano, Todos os Direitos Reservados"]))],null,null)}function a(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-footer",[],null,null,null,i,t)),o["\u0275did"](1,114688,null,0,u.a,[],null,null)],(function(l,n){l(n,1,0)}),null)}var r=o["\u0275ccf"]("app-footer",u.a,a,{},{},[])},LmEr:function(l,n,e){"use strict";e.d(n,"a",(function(){return o}));class o{constructor(){}ngOnInit(){}}},Yj4x:function(l,n,e){"use strict";e.d(n,"a",(function(){return o}));class o{}},"f+ep":function(l,n,e){"use strict";e.r(n);var o=e("8Y7J"),u=e("ZZ/e"),t=e("lGQG");class i{constructor(l,n,e,o){this.route=l,this.router=n,this.menu=e,this.auth=o,this.creds={email:"",senha:""}}ngOnInit(){}ionViewWillEnter(){this.menu.enable(!1)}ionViewWillLeave(){this.menu.enable(!0)}ionViewDidEnter(){this.auth.refreshToken().subscribe(l=>{this.auth.loginSucesso(l.headers.get("Authorization")),this.router.navigateByUrl("home")},l=>{})}login(){this.auth.authenticate(this.creds).subscribe(l=>{this.auth.loginSucesso(l.headers.get("Authorization")),this.router.navigateByUrl("home")},l=>{})}registrar(){this.router.navigateByUrl("registrar")}logout(l){}byPass(){this.router.navigateByUrl("home")}}class a{}var r=e("pMnS"),d=e("6jz6"),s=e("oBZk"),g=e("s7LF"),c=e("LmEr"),p=e("iInd"),m=o["\u0275crt"]({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{text-align:center;color:#000;padding:1px 20px;font-size:.8em}.credicon[_ngcontent-%COMP%]{font:bold 2px;color:#2bc48a;text-decoration:none}.rodape[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:200px;height:200px;align-self:center;margin:auto;padding:10px}a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]],data:{}});function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,6,"ion-header",[],null,null,null,s.fb,s.q)),o["\u0275did"](1,49152,null,0,u.B,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,4,"ion-toolbar",[],null,null,null,s.Db,s.O)),o["\u0275did"](3,49152,null,0,u.Cb,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](4,0,null,0,2,"ion-title",[],null,null,null,s.Cb,s.N)),o["\u0275did"](5,49152,null,0,u.Ab,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,["Login"])),(l()(),o["\u0275eld"](7,0,null,null,36,"ion-content",[],null,null,null,s.bb,s.m)),o["\u0275did"](8,49152,null,0,u.u,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](9,0,null,0,0,"img",[["alt","logo"],["src","assets/imgs/templar-shield.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](11,0,null,0,27,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==o["\u0275nov"](l,13).onSubmit(e)&&u),"reset"===n&&(u=!1!==o["\u0275nov"](l,13).onReset()&&u),u}),null,null)),o["\u0275did"](12,16384,null,0,g["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](13,4210688,null,0,g.NgForm,[[8,null],[8,null]],null,null),o["\u0275prd"](2048,null,g.ControlContainer,null,[g.NgForm]),o["\u0275did"](15,16384,null,0,g.NgControlStatusGroup,[[4,g.ControlContainer]],null,null),(l()(),o["\u0275eld"](16,0,null,null,9,"ion-item",[],null,null,null,s.lb,s.t)),o["\u0275did"](17,49152,null,0,u.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](18,0,null,0,7,"ion-input",[["placeholder","Insira seu email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,t=l.component;return"ionBlur"===n&&(u=!1!==o["\u0275nov"](l,19)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o["\u0275nov"](l,19)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(t.creds.email=e)&&u),u}),s.hb,s.s)),o["\u0275did"](19,16384,null,0,u.Nb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[u.Nb]),o["\u0275did"](21,671744,null,0,g.NgModel,[[2,g.ControlContainer],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),o["\u0275pod"](22,{standalone:0}),o["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),o["\u0275did"](24,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),o["\u0275did"](25,49152,null,0,u.G,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o["\u0275eld"](26,0,null,null,9,"ion-item",[],null,null,null,s.lb,s.t)),o["\u0275did"](27,49152,null,0,u.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](28,0,null,0,7,"ion-input",[["placeholder","Insira sua senha"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,t=l.component;return"ionBlur"===n&&(u=!1!==o["\u0275nov"](l,29)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o["\u0275nov"](l,29)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(t.creds.senha=e)&&u),u}),s.hb,s.s)),o["\u0275did"](29,16384,null,0,u.Nb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[u.Nb]),o["\u0275did"](31,671744,null,0,g.NgModel,[[2,g.ControlContainer],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),o["\u0275pod"](32,{standalone:0}),o["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),o["\u0275did"](34,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),o["\u0275did"](35,49152,null,0,u.G,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o["\u0275eld"](36,0,null,null,2,"ion-button",[["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.login()&&o),o}),s.T,s.e)),o["\u0275did"](37,49152,null,0,u.k,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),o["\u0275ted"](-1,0,["Login"])),(l()(),o["\u0275eld"](39,0,null,0,2,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.registrar()&&o),o}),s.T,s.e)),o["\u0275did"](40,49152,null,0,u.k,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),o["\u0275ted"](-1,0,["Registrar"])),(l()(),o["\u0275eld"](42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](43,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](44,0,null,null,1,"app-footer",[],null,null,null,d.c,d.b)),o["\u0275did"](45,114688,null,0,c.a,[],null,null)],(function(l,n){var e=n.component,o=e.creds.email,u=l(n,22,0,!0);l(n,21,0,o,u),l(n,25,0,"Insira seu email","email");var t=e.creds.senha,i=l(n,32,0,!0);l(n,31,0,t,i),l(n,35,0,"Insira sua senha","password"),l(n,37,0,"block","solid"),l(n,40,0,"block","outline"),l(n,45,0)}),(function(l,n){l(n,11,0,o["\u0275nov"](n,15).ngClassUntouched,o["\u0275nov"](n,15).ngClassTouched,o["\u0275nov"](n,15).ngClassPristine,o["\u0275nov"](n,15).ngClassDirty,o["\u0275nov"](n,15).ngClassValid,o["\u0275nov"](n,15).ngClassInvalid,o["\u0275nov"](n,15).ngClassPending),l(n,18,0,o["\u0275nov"](n,24).ngClassUntouched,o["\u0275nov"](n,24).ngClassTouched,o["\u0275nov"](n,24).ngClassPristine,o["\u0275nov"](n,24).ngClassDirty,o["\u0275nov"](n,24).ngClassValid,o["\u0275nov"](n,24).ngClassInvalid,o["\u0275nov"](n,24).ngClassPending),l(n,28,0,o["\u0275nov"](n,34).ngClassUntouched,o["\u0275nov"](n,34).ngClassTouched,o["\u0275nov"](n,34).ngClassPristine,o["\u0275nov"](n,34).ngClassDirty,o["\u0275nov"](n,34).ngClassValid,o["\u0275nov"](n,34).ngClassInvalid,o["\u0275nov"](n,34).ngClassPending)}))}function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,f,m)),o["\u0275did"](1,114688,null,0,i,[p.a,p.m,u.Gb,t.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=o["\u0275ccf"]("app-login",i,h,{},{},[]),v=e("SVse"),b=e("Yj4x");e.d(n,"LoginPageModuleNgFactory",(function(){return _}));var _=o["\u0275cmf"](a,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,d.a,C]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[o.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,u.b,u.b,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.Hb,u.Hb,[u.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.Kb,u.Kb,[u.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),o["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),o["\u0275mpd"](1073742336,u.Eb,u.Eb,[]),o["\u0275mpd"](1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),o["\u0275mpd"](1073742336,b.a,b.a,[]),o["\u0275mpd"](1073742336,a,a,[]),o["\u0275mpd"](1024,p.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);