(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ofXK"),a=n("nEHF"),i=n("6QD7"),l=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,a.a,i.b],i.b]}),e})()},wxhZ:function(e,t,n){"use strict";n.r(t),n.d(t,"AddUserModule",(function(){return _}));var r=n("ofXK"),a=n("tyNb"),i=n("zmU/"),l=n("MCNt"),o=n("fXoL"),d=n("c92J"),s=n("1VJT"),m=n("ccyI"),c=n("3Pt+"),u=n("OA5k");function p(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",6),o["\u0275\u0275elementStart"](1,"app-add-role",27),o["\u0275\u0275listener"]("onFinish",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().roleAdded(t)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function h(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",28),o["\u0275\u0275text"](1," Please make sure passwords match "),o["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",31),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275propertyInterpolate"]("value",e.role_id),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",e.role_name," ")}}function g(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"td"),o["\u0275\u0275elementStart"](1,"select",29),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().role_id=t})),o["\u0275\u0275template"](2,f,2,2,"option",30),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](3,"span",15),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngModel",e.role_id),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",e.roles)}}const S=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.router=e,this.dbService=n,this.notify=r,this.authService=a,this.error_roles=!1,this.is_loading_roles=!0,this.is_loaded_roles=!1,this.add_role=!1,this.uploadUrl="uploadPharmacistPicture",this.error_regions=!1,this.is_loading_regions=!0,this.is_loaded_regions=!1,this.user=new i.a,this.user.role=new l.a,-1==this.authService.current_user.permissions.indexOf("Manage Staff")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome()),this.dbService.setTitle("Users")}ngOnInit(){this.getBranches(),this.dbService.getData("admin/getRoles",this.authService.current_user).subscribe(e=>{this.roles=e.data,this.is_loading_roles=!1,this.is_loaded_roles=!0,this.error_roles=!1},e=>{this.is_loading_roles=!1,this.error_roles=!0,this.is_loaded_roles=!1})}getBranches(){this.notify.showLoading();let e="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(e+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(e,this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status||(this.branches=e.data)},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}roleAdded(e){this.roles.push(e),this.role_id=e.role_id,this.add_role=!1}uploadFinished(e){this.user.picture=e}submit(){this.notify.showLoading();const e=new FormData;e.append("display_name",this.user.display_name),e.append("username",this.user.username),e.append("password",this.password),e.append("email",this.user.email),e.append("role_id",this.role_id),e.append("phone",this.user.phone),e.append("active","1"),e.append("company_id",this.authService.current_user.company_id),this.dbService.postData(e,"admin/saveUser",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):"-2"===e.status?this.notify.showNotification("The username already exists. Please choose a different one","fail",3e3):(this.notify.successNotification("User added successfully"),this.router.navigate(["/users"]))},e=>{this.notify.noConnectionNotification()})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.c),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-user"]],decls:76,vars:11,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,""],[1,"btn","btn-primary","waves-effect",3,"click"],["class","",4,"ngIf"],[1,"card-body"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"table","table-striped","table-bordered"],["id","name","required","","type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["id","username","required","","type","text","name","username",3,"ngModel","ngModelChange"],[1,"help-inline"],["required","","type","text","name","phone",3,"ngModel","ngModelChange"],["required","","id","email","type","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["required","","type","password","name","c_password",3,"ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],[4,"ngIf"],["required","","name","type",3,"ngModel","ngModelChange"],["value","no"],["value","yes"],[1,"text-muted"],["type","submit","name","","value","Submit",1,"btn","btn-primary",3,"disabled"],[3,"onFinish"],[1,"text-danger"],["required","","name","role",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"div",4),o["\u0275\u0275elementStart"](5,"div",5),o["\u0275\u0275elementStart"](6,"h5"),o["\u0275\u0275text"](7,"Add New User"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"b"),o["\u0275\u0275text"](10,"If a role is not in the dropdown, "),o["\u0275\u0275elementStart"](11,"button",7),o["\u0275\u0275listener"]("click",(function(){return t.add_role=!t.add_role})),o["\u0275\u0275text"](12,"click here"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](13," to add it"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](14,p,2,0,"div",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",9),o["\u0275\u0275elementStart"](16,"form",10,11),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),o["\u0275\u0275elementStart"](18,"table",12),o["\u0275\u0275elementStart"](19,"tbody"),o["\u0275\u0275elementStart"](20,"tr"),o["\u0275\u0275elementStart"](21,"td"),o["\u0275\u0275elementStart"](22,"label"),o["\u0275\u0275text"](23,"Full Name*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"td"),o["\u0275\u0275elementStart"](25,"input",13),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.display_name=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](26,"tr"),o["\u0275\u0275elementStart"](27,"td"),o["\u0275\u0275elementStart"](28,"label"),o["\u0275\u0275text"](29,"Username*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"td"),o["\u0275\u0275elementStart"](31,"input",14),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.username=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](32,"span",15),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](33,"tr"),o["\u0275\u0275elementStart"](34,"td"),o["\u0275\u0275elementStart"](35,"label"),o["\u0275\u0275text"](36,"Phone*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](37,"td"),o["\u0275\u0275elementStart"](38,"input",16),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.phone=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"tr"),o["\u0275\u0275elementStart"](40,"td"),o["\u0275\u0275elementStart"](41,"label"),o["\u0275\u0275text"](42,"Email*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](43,"td"),o["\u0275\u0275elementStart"](44,"input",17),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.email=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"tr"),o["\u0275\u0275elementStart"](46,"td"),o["\u0275\u0275elementStart"](47,"label"),o["\u0275\u0275text"](48,"Password*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"td"),o["\u0275\u0275elementStart"](50,"input",18),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.password=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](51,"tr"),o["\u0275\u0275elementStart"](52,"td"),o["\u0275\u0275elementStart"](53,"label"),o["\u0275\u0275text"](54,"Confirm Password*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](55,"td"),o["\u0275\u0275elementStart"](56,"input",19),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.confirm_password=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](57,h,2,0,"div",20),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](58,"tr"),o["\u0275\u0275elementStart"](59,"td"),o["\u0275\u0275elementStart"](60,"label"),o["\u0275\u0275text"](61,"Role*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](62,g,4,2,"td",21),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](63,"tr"),o["\u0275\u0275elementStart"](64,"td"),o["\u0275\u0275elementStart"](65,"label"),o["\u0275\u0275text"](66,"Allow Online Access?"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](67,"td"),o["\u0275\u0275elementStart"](68,"select",22),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.allow_online=e})),o["\u0275\u0275elementStart"](69,"option",23),o["\u0275\u0275text"](70," No "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](71,"option",24),o["\u0275\u0275text"](72," Yes "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](73,"em",25),o["\u0275\u0275text"](74,"Set to yes if you want this user to login from outside the facility"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](75,"input",26),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](14),o["\u0275\u0275property"]("ngIf",t.add_role),o["\u0275\u0275advance"](11),o["\u0275\u0275property"]("ngModel",t.user.display_name),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngModel",t.user.username),o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("ngModel",t.user.phone),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngModel",t.user.email),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngModel",t.password),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngModel",t.confirm_password),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.password!=t.confirm_password),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngIf",t.is_loaded_roles),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngModel",t.user.allow_online),o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("disabled",t.password!=t.confirm_password))},directives:[r.j,c.f,c.g,c.b,c.l,c.e,c.h,c.m,c.i,c.n,u.a,r.i],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(S)],a.f]}),e})();var E=n("uQlb"),v=n("nEHF");let _=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,y,E.a,v.a]]}),e})()}}]);