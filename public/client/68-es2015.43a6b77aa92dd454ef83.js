(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},zrcO:function(e,t,n){"use strict";n.r(t),n.d(t,"UsersModule",(function(){return I}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("c92J"),s=n("1VJT"),l=n("ccyI"),c=n("hiAm"),d=n("8ApV");function m(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function u(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"a",24),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"](2).$implicit;return r["\u0275\u0275nextContext"](2).deactivate(t)})),r["\u0275\u0275text"](1,"Deactivate"),r["\u0275\u0275elementEnd"]()}}function f(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"a",24),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"](2).$implicit;return r["\u0275\u0275nextContext"](2).activate(t)})),r["\u0275\u0275text"](1,"Activate"),r["\u0275\u0275elementEnd"]()}}function h(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",20),r["\u0275\u0275elementStart"](1,"button",21),r["\u0275\u0275text"](2," Menu "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"div",22),r["\u0275\u0275elementStart"](4,"a",23),r["\u0275\u0275text"](5,"View Activities"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"a",23),r["\u0275\u0275text"](7,"Edit"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"a",24),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"]().$implicit;return r["\u0275\u0275nextContext"](2).deleteUser(t)})),r["\u0275\u0275text"](9,"Delete"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](10,u,2,0,"a",25),r["\u0275\u0275template"](11,f,2,0,"a",25),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](4),r["\u0275\u0275propertyInterpolate1"]("routerLink","/user_activities/",e.id,""),r["\u0275\u0275advance"](2),r["\u0275\u0275propertyInterpolate1"]("routerLink","/edit_user/",e.id,""),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf","1"==e.active),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","0"==e.active)}}function p(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"em"),r["\u0275\u0275elementStart"](1,"a",26),r["\u0275\u0275text"](2,"Active"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"em"),r["\u0275\u0275elementStart"](1,"a",27),r["\u0275\u0275text"](2,"Inactive"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&r["\u0275\u0275element"](0,"em")}function S(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275template"](3,h,12,4,"div",16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"td"),r["\u0275\u0275elementStart"](5,"span",17),r["\u0275\u0275template"](6,p,3,0,"em",18),r["\u0275\u0275template"](7,v,3,0,"em",18),r["\u0275\u0275template"](8,g,1,0,"em",19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"td"),r["\u0275\u0275text"](11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"td"),r["\u0275\u0275text"](13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"td"),r["\u0275\u0275text"](15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"td"),r["\u0275\u0275text"](17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"td"),r["\u0275\u0275text"](19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index,i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",n+1," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.can_edit),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngSwitch",e.active),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","1"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","0"),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.display_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.email),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.phone),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.username),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.role.role_name),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",e.position," ")}}function w(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",11),r["\u0275\u0275elementStart"](1,"b"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"table",12),r["\u0275\u0275elementStart"](4,"thead"),r["\u0275\u0275elementStart"](5,"tr"),r["\u0275\u0275element"](6,"th"),r["\u0275\u0275elementStart"](7,"th"),r["\u0275\u0275text"](8,"Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"th"),r["\u0275\u0275text"](10,"Email"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"th"),r["\u0275\u0275text"](12,"Phone"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"th"),r["\u0275\u0275text"](14,"Username"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"th"),r["\u0275\u0275text"](16,"Role"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"th"),r["\u0275\u0275text"](18,"Position"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](19,S,20,11,"tr",13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"div",14),r["\u0275\u0275elementStart"](21,"app-load-more",15),r["\u0275\u0275listener"]("onFinish",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().addMoreItems(t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate2"]("Showing ",e.users.length,"/",e.total," items"),r["\u0275\u0275advance"](17),r["\u0275\u0275property"]("ngForOf",e.users),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("limit",e.limit)("url",e.url)("offset",e.offset)("total",e.total)}}const y=function(){return["/add_user"]},x=[{path:"",component:(()=>{class e{constructor(e,t,n){this.dbService=e,this.notify=t,this.authService=n,this.users=[],this.is_loading=!1,this.error=!1,this.is_loaded=!1,this.url="admin/getUsers",this.limit=100,this.can_edit=!0,this.can_create=!0,this.can_delete=!0,-1==this.authService.current_user.permissions.indexOf("Manage Staff")&&(this.goBack(),this.notify.failNotification("Not allowed to view the page")),this.dbService.setTitle("Users")}ngOnInit(){this.start()}start(){this.is_loaded=!1,this.is_loading=!0;let e=this.url;"admin"==this.authService.current_user.type&&(e+="?parent_company="+this.authService.current_user.parent_company_id),this.dbService.getData(e,this.authService.current_user).subscribe(e=>{"-1"===e.status&&(this.notify.failNotification("Internal server error. Please check to make sure the registration number does not already exist"),this.error=!0),"-9"===e.status?(this.notify.showNotification("You are not permitted to perform this action","fail",3e3),this.error=!0):(this.limit=e.limit,this.users=e.data,this.offset=this.users.length,this.total=e.total,this.is_loaded=!0,this.error=!1),this.is_loading=!1},e=>{this.notify.noConnectionNotification(),this.is_loaded=!1,this.is_loading=!1,this.error=!0})}addMoreItems(e){e.map(e=>{this.users.push(e)})}deleteUser(e){if(window.confirm("Sure you want to delete this user? You cannot undo this")){let t=new FormData;this.notify.showLoading(),t.append("id",e.id),this.dbService.postData(t,"admin/deleteUser",this.authService.current_user).subscribe(t=>{this.notify.hideLoading(),"-1"===t.status&&this.notify.failNotification("Internal server error. Please check to make sure the registration number does not already exist"),"-9"===t.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.users.splice(this.users.indexOf(e),1),this.notify.successNotification("User deleted successfully"))},e=>{this.notify.noConnectionNotification()})}}activate(e){if(window.confirm("Sure you want to activate this user?")){let t=new FormData;this.notify.showLoading(),t.append("id",e.id),t.append("active","1"),this.dbService.postData(t,"admin/activateUser",this.authService.current_user).subscribe(t=>{this.notify.hideLoading(),"-1"===t.status&&this.notify.failNotification("Internal server error. Please check to make sure the registration number does not already exist"),"-9"===t.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.active="1",this.notify.successNotification("User activated successfully"))},e=>{this.notify.noConnectionNotification()})}}deactivate(e){if(window.confirm("Sure you want to deactivate this user?")){let t=new FormData;this.notify.showLoading(),t.append("id",e.id),t.append("active","0"),this.dbService.postData(t,"admin/activateUser",this.authService.current_user).subscribe(t=>{this.notify.hideLoading(),"-1"===t.status&&this.notify.failNotification("Internal server error. Please check to make sure the registration number does not already exist"),"-9"===t.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.active="0",this.notify.successNotification("User deactivated successfully"))},e=>{this.notify.noConnectionNotification()})}}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-users"]],decls:14,vars:4,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"feather","icon-plus"],[1,"card-body"],[4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"table-responsive"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],[1,"row","clear-fix","text-center"],[3,"limit","url","offset","total","onFinish"],["class","btn-group",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"btn-group"],["type","button","data-toggle","dropdown","aria-haspopup","true",1,"btn","btn-primary","btn-sm","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item","waves-light","waves-effect",3,"routerLink"],[1,"dropdown-item","waves-light","waves-effect",3,"click"],["class","dropdown-item waves-light waves-effect",3,"click",4,"ngIf"],[1,"badge","badge-success"],[1,"badge","badge-warning"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"div",5),r["\u0275\u0275elementStart"](6,"h5"),r["\u0275\u0275text"](7,"Users "),r["\u0275\u0275elementStart"](8,"a",6),r["\u0275\u0275element"](9,"i",7),r["\u0275\u0275text"](10," Add new user"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",8),r["\u0275\u0275template"](12,m,1,0,"app-loading",9),r["\u0275\u0275template"](13,w,22,7,"div",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("routerLink",r["\u0275\u0275pureFunction0"](3,y)),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded))},directives:[a.e,i.j,c.a,i.i,d.a,i.k,i.l,i.m],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(x)],a.f]}),e})();var E=n("nEHF");let I=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,b,E.a]]}),e})()}}]);