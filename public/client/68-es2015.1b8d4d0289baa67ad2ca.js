(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"7wo0":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",(function(){return b}));var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),a=n("c92J"),d=n("1VJT"),l=n("ccyI"),s=n("hiAm"),c=n("3Pt+");function m(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",10),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Unable to connect to server. Try again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading",11)}function u(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",12),r["\u0275\u0275elementStart"](1,"form",13),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().save()})),r["\u0275\u0275elementStart"](2,"div",14),r["\u0275\u0275elementStart"](3,"label"),r["\u0275\u0275text"](4,"Company Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"br"),r["\u0275\u0275elementStart"](6,"input",15),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().object.name=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",14),r["\u0275\u0275elementStart"](8,"label"),r["\u0275\u0275text"](9,"Company Phone"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](10,"br"),r["\u0275\u0275elementStart"](11,"input",16),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().object.phone=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"div",14),r["\u0275\u0275elementStart"](13,"label"),r["\u0275\u0275text"](14,"Company Email"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](15,"br"),r["\u0275\u0275elementStart"](16,"input",17),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().object.email=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"div",14),r["\u0275\u0275elementStart"](18,"label"),r["\u0275\u0275text"](19,"Company Address (Location)"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](20,"br"),r["\u0275\u0275elementStart"](21,"input",18),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().object.address=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"div",14),r["\u0275\u0275elementStart"](23,"label"),r["\u0275\u0275text"](24,"Company Digital Address "),r["\u0275\u0275elementStart"](25,"em",19),r["\u0275\u0275text"](26,"(Optional)"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](27,"br"),r["\u0275\u0275elementStart"](28,"input",20),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().object.digital_address=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](29,"button",21),r["\u0275\u0275text"](30,"Submit"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngModel",e.object.name),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.object.phone),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.object.email),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.object.address),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngModel",e.object.digital_address)}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n){this.dbService=e,this.notify=t,this.authService=n,this.error=!1,this.is_loading=!0,this.is_loaded=!1,-1==this.authService.current_user.permissions.indexOf("Manage Settings")&&(this.dbService.goBackHome(),this.notify.failNotification("You are not permitted to view this page")),this.dbService.setTitle("Settings")}ngOnInit(){this.dbService.getData("admin/findBranchById?id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.object=e.data,console.log(this.object),this.is_loading=!1,this.is_loaded=!0,this.error=!1},e=>{this.is_loading=!1,this.error=!0,this.is_loaded=!1})}save(){this.notify.showLoading();let e=new FormData;e.append("name",this.object.name),e.append("address",this.object.address),e.append("digital_address",this.object.digital_address),e.append("phone",this.object.phone),e.append("email",this.object.email),e.append("id",this.object.id),this.dbService.postData(e,"admin/updateCompanySettings",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status&&this.notify.failNotification("Internal server error. Please contact admin"),"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):this.notify.showNotification("saved successfully","success",3e3)},e=>{this.notify.noConnectionNotification()})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-settings"]],decls:12,vars:3,consts:[[1,"content"],[1,"row"],[1,"col-12"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-header"],["class","body",4,"ngIf"],["class","",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"body"],[1,""],[1,"card-body"],["ngNativeValidate","",3,"ngSubmit"],[1,"form-group"],["name","name","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","phone","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","email","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","address","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-muted"],["name","digital_address","type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-block","btn-primary"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"h5"),r["\u0275\u0275text"](4,"Settings"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",3),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div",5),r["\u0275\u0275elementStart"](8,"div",6),r["\u0275\u0275template"](9,m,3,0,"div",7),r["\u0275\u0275template"](10,p,1,0,"app-loading",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](11,u,31,5,"div",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("ngIf",t.error),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded))},directives:[i.j,s.a,c.f,c.g,c.b,c.l,c.e,c.h],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.f.forChild(f)],o.f]}),e})();var h=n("nEHF");let b=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,g,h.a]]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()}}]);