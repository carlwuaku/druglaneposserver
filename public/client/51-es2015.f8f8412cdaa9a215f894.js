(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{KpNn:function(e,t,i){"use strict";i.r(t),i.d(t,"EditRoleModule",(function(){return E}));var n=i("ofXK"),o=i("tyNb"),r=i("fXoL"),s=i("c92J"),d=i("1VJT"),a=i("ccyI"),l=i("hiAm");function c(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"h5"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("Edit role permissions: ",e.role.role_name,"")}}function m(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",10),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Unable to connect to server. Try again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function u(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function h(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"a",13),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const i=t.$implicit;return r["\u0275\u0275nextContext"](2).removePermission(i)})),r["\u0275\u0275element"](1,"i",14),r["\u0275\u0275elementStart"](2,"b"),r["\u0275\u0275text"](3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"br"),r["\u0275\u0275elementStart"](5,"em",10),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.name),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.description)}}function p(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",11),r["\u0275\u0275template"](1,h,7,2,"a",12),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.included)}}function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",10),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Unable to connect to server. Try again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function v(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"a",13),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const i=t.$implicit;return r["\u0275\u0275nextContext"](2).addPermission(i)})),r["\u0275\u0275element"](1,"i",15),r["\u0275\u0275elementStart"](2,"b"),r["\u0275\u0275text"](3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"br"),r["\u0275\u0275elementStart"](5,"em"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.name),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.description)}}function g(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",11),r["\u0275\u0275template"](1,v,7,2,"a",12),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.excluded)}}const x=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o,r){this.location=e,this.router=t,this.dbService=n,this.notify=o,this.authService=r,this.included=[],this.error_included=!1,this.is_loading_included=!0,this.is_loaded_included=!1,this.error_excluded=!1,this.is_loading_excluded=!0,this.is_loaded_excluded=!1,this.error_role=!1,this.is_loading_role=!0,this.is_loaded_role=!1,this.id=i.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Manage Staff")&&(this.dbService.goBackHome(),this.notify.failNotification("You are not permitted to view this page")),this.dbService.setTitle("Edit Role")}ngOnInit(){this.dbService.getDataById(this.id,"admin/getRole",this.authService.current_user).subscribe(e=>{this.role=e.data,this.is_loading_role=!1,this.is_loaded_role=!0,this.error_role=!1},e=>{this.is_loading_role=!1,this.error_role=!0,this.is_loaded_role=!1}),this.dbService.getDataById(this.id,"admin/getRolePermissions",this.authService.current_user).subscribe(e=>{this.included=e.data,this.is_loading_included=!1,this.is_loaded_included=!0,this.error_included=!1},e=>{this.is_loading_included=!1,this.error_included=!0,this.is_loaded_included=!1}),this.dbService.getDataById(this.id,"admin/getRoleExcludedPermissions",this.authService.current_user).subscribe(e=>{this.excluded=e.data,this.is_loading_excluded=!1,this.is_loaded_excluded=!0,this.error_excluded=!1},e=>{this.is_loading_excluded=!1,this.error_excluded=!0,this.is_loaded_excluded=!1})}addPermission(e){this.notify.showLoading();let t=new FormData;t.append("role_id",this.id),t.append("permission_id",e.permission_id),this.dbService.postData(t,"admin/addRolePermission",this.authService.current_user).subscribe(t=>{this.notify.hideLoading(),"-1"===t.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.successNotification("Permission added to role successfully"),this.excluded.splice(this.excluded.indexOf(e),1),this.included.push(e))},e=>{this.notify.noConnectionNotification()})}removePermission(e){this.notify.showLoading();let t=new FormData;t.append("role_id",this.id),t.append("permission_id",e.permission_id),this.dbService.postData(t,"admin/deleteRolePermission",this.authService.current_user).subscribe(t=>{this.notify.hideLoading(),"-1"===t.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.successNotification("Permission removed from role successfully"),this.included.splice(this.included.indexOf(e),1),this.excluded.push(e))},e=>{this.notify.noConnectionNotification()})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](n.f),r["\u0275\u0275directiveInject"](o.c),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-edit-role"]],decls:26,vars:7,consts:[[1,"content"],[1,"container"],[4,"ngIf"],[1,"row"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","",4,"ngIf"],["class","list-group",4,"ngIf"],[1,""],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"feather","icon-x","text-danger"],[1,"feather","icon-plus","text-success"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275template"](2,c,2,1,"h5",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"div",5),r["\u0275\u0275elementStart"](6,"div",6),r["\u0275\u0275elementStart"](7,"h4"),r["\u0275\u0275text"](8,"Current Permissions"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"em"),r["\u0275\u0275text"](10,"Click on a permission to remove it from the current role's permissions"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",7),r["\u0275\u0275template"](12,m,3,0,"div",8),r["\u0275\u0275template"](13,u,1,0,"app-loading",2),r["\u0275\u0275template"](14,p,2,1,"div",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",4),r["\u0275\u0275elementStart"](16,"div",5),r["\u0275\u0275elementStart"](17,"div",6),r["\u0275\u0275elementStart"](18,"h4"),r["\u0275\u0275text"](19,"Excluded Permissions"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"em"),r["\u0275\u0275text"](21,"Click on a permission to add it to the current role's permissions"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"div",7),r["\u0275\u0275template"](23,f,3,0,"div",8),r["\u0275\u0275template"](24,_,1,0,"app-loading",2),r["\u0275\u0275template"](25,g,2,1,"div",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.is_loaded_role),r["\u0275\u0275advance"](10),r["\u0275\u0275property"]("ngIf",t.error_included),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loading_included),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded_included),r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("ngIf",t.error_excluded),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loading_excluded),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded_excluded))},directives:[n.j,l.a,n.i],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.f.forChild(x)],o.f]}),e})();var S=i("uQlb"),b=i("nEHF");let E=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.b,y,S.a,b.a]]}),e})()},hiAm:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(n["\u0275\u0275element"](0,"i",0),n["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},rNAZ:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i("ofXK"),o=i("nEHF"),r=i("6QD7"),s=i("fXoL");let d=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.b,o.a,r.b],r.b]}),e})()}}]);