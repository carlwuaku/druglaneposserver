(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{ESCD:function(e,t,n){"use strict";n.r(t),n.d(t,"RolesModule",(function(){return w}));var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),a=n("c92J"),l=n("1VJT"),s=n("ccyI"),d=n("OA5k"),c=n("hiAm");function m(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"app-add-role",10),o["\u0275\u0275listener"]("onFinish",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().roleAdded(t)})),o["\u0275\u0275elementEnd"]()}}function f(e,t){1&e&&o["\u0275\u0275element"](0,"app-loading")}function u(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",15),o["\u0275\u0275elementStart"](1,"button",16),o["\u0275\u0275text"](2," Menu "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"ul",17),o["\u0275\u0275elementStart"](4,"li",18),o["\u0275\u0275elementStart"](5,"a",19),o["\u0275\u0275text"](6,"Edit Permissions"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"li",18),o["\u0275\u0275elementStart"](8,"a",20),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](e);const t=o["\u0275\u0275nextContext"]().$implicit;return o["\u0275\u0275nextContext"](2).deleteRole(t)})),o["\u0275\u0275text"](9,"Delete"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]().$implicit;o["\u0275\u0275advance"](5),o["\u0275\u0275propertyInterpolate1"]("routerLink","/edit_role/",e.role_id,"")}}function h(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275template"](4,u,10,1,"div",14),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index,i=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",n+1," "),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",i.can_edit),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",e.role_name," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.description)}}function p(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275elementStart"](1,"b"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"table",11),o["\u0275\u0275elementStart"](4,"thead"),o["\u0275\u0275elementStart"](5,"tr"),o["\u0275\u0275element"](6,"th"),o["\u0275\u0275element"](7,"th"),o["\u0275\u0275elementStart"](8,"th"),o["\u0275\u0275text"](9,"Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"th"),o["\u0275\u0275text"](11,"Description"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](12,h,9,4,"tr",12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](13,"div",13),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate2"]("Showing ",e.roles.length,"/",e.total," items"),o["\u0275\u0275advance"](10),o["\u0275\u0275property"]("ngForOf",e.roles)}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.dbService=e,this.router=t,this.notify=n,this.authService=i,this.roles=[],this.is_loading=!1,this.error=!1,this.is_loaded=!1,this.url="admin/getRolesLimit",this.limit=100,this.add_role=!1,this.can_edit=!0,this.can_create=!0,this.can_delete=!0,-1==this.authService.current_user.permissions.indexOf("Manage Staff")&&(this.dbService.goBackHome(),this.notify.failNotification("Not allowed to view the page")),this.dbService.setTitle("User Roles")}ngOnInit(){this.start()}start(){this.is_loaded=!1,this.is_loading=!0,this.dbService.getData(this.url,this.authService.current_user).subscribe(e=>{"-1"===e.status&&(this.notify.failNotification("Internal server error. Please check to make sure the registration number does not already exist"),this.error=!0),"-9"===e.status?(this.notify.showNotification("You are not permitted to perform this action","fail",3e3),this.error=!0):(this.limit=e.limit,this.roles=e.data,this.offset=this.roles.length,this.total=e.total,this.is_loaded=!0,this.error=!1),this.is_loading=!1},e=>{this.notify.noConnectionNotification(),this.is_loaded=!1,this.is_loading=!1,this.error=!0})}addMoreItems(e){e.map(e=>{this.roles.push(e)})}roleAdded(e){this.router.navigate(["/edit_role/"+e.role_id])}deleteRole(e){if(window.confirm("Sure you want to delete this role? You cannot undo this")){let t=new FormData;this.notify.showLoading(),t.append("id",e.role_id),this.dbService.postData(t,"admin/deleteRole",this.authService.current_user).subscribe(t=>{this.notify.hideLoading(),"-1"===t.status&&this.notify.failNotification("Internal server error. Please try again"),"-9"===t.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.roles.splice(this.roles.indexOf(e),1),this.notify.successNotification("Role deleted successfully"))},e=>{this.notify.noConnectionNotification()})}}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](r.c),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-roles"]],decls:17,vars:3,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"btn","btn-primary","waves-effect",3,"click"],[3,"onFinish",4,"ngIf"],[1,"card-body"],[4,"ngIf"],[3,"onFinish"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],[1,"row","clear-fix","text-center"],["class","btn-group",4,"ngIf"],[1,"btn-group"],["type","button","data-toggle","dropdown","aria-haspopup","true",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item","waves-light","waves-effect"],[3,"routerLink"],[3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"div",4),o["\u0275\u0275elementStart"](5,"div",5),o["\u0275\u0275elementStart"](6,"h5"),o["\u0275\u0275text"](7,"User Roles"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"b"),o["\u0275\u0275text"](9,"If a role is not in the list, "),o["\u0275\u0275elementStart"](10,"a",6),o["\u0275\u0275listener"]("click",(function(){return t.add_role=!t.add_role})),o["\u0275\u0275text"](11,"click here"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](12," to add it"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](13,m,1,0,"app-add-role",7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"div",8),o["\u0275\u0275template"](15,f,1,0,"app-loading",9),o["\u0275\u0275template"](16,p,14,3,"div",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](13),o["\u0275\u0275property"]("ngIf",t.add_role),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.is_loading),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.is_loaded))},directives:[i.j,d.a,c.a,i.i,r.e],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(v)],r.f]}),e})();var S=n("nEHF"),y=n("uQlb");let w=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,g,S.a,y.a]]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("ofXK"),r=n("nEHF"),o=n("6QD7"),a=n("fXoL");let l=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a,o.b],o.b]}),e})()}}]);