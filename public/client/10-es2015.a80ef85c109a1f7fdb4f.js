(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{h4KG:function(e,t,n){"use strict";n.r(t),n.d(t,"AddCustomerModule",(function(){return f}));var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),a=n("ccyI"),s=n("1VJT");class l{constructor(){}}var d=n("c92J"),m=n("3Pt+");let c=(()=>{class e{constructor(e,t,n){this.dbService=e,this.notify=t,this.authService=n,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.onFinish=new o.EventEmitter,this.uploadUrl="admin/uploadPicture",this.url="customer/findById",null!=this.id&&null!=this.id||(this.customer=new l)}ngOnInit(){null==this.id||null==this.id||this.getCustomer(this.id)}uploadFinished(e){this.pic_location=e,this.customer.picture=e}getCustomer(e){this.dbService.getDataWithQuery(this.url,this.authService.current_user,"id="+this.id).subscribe(e=>{this.customer=e.data,this.is_loading=!1,this.is_loaded=!0,this.error=!1},e=>{this.is_loading=!1,this.error=!0,this.is_loaded=!1})}submit(){this.notify.showLoading();let e=new FormData;for(let t in this.customer)e.append(t,this.customer[t]);null!=this.id&&null!=this.id||e.append("createdAt",this.dbService.getToday()),e.append("display_name",this.authService.current_user.display_name),this.dbService.postData(e,"customer/save",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.customer.id=e.status,this.notify.successNotification("Customer saved successfully"),this.onFinish.emit(this.customer),this.customer=new l)},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-customer-form"]],inputs:{id:"id"},outputs:{onFinish:"onFinish"},decls:46,vars:7,consts:[["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"row"],[1,"col-sm-6"],["required","","type","text","name","name",3,"ngModel","ngModelChange"],["required","","type","text","name","phone",3,"ngModel","ngModelChange"],["name","sex",3,"ngModel","ngModelChange"],["value","Male"],["value","Female"],["id","nationality","type","text","name","nationality",3,"ngModel","ngModelChange"],["name","email","type","email",3,"ngModel","ngModelChange"],["name","notes","rows","3","cols","40",3,"ngModel","ngModelChange"],["type","text","name","place_of_work",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Submit",1,"btn","btn-success"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"form",0,1),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),o["\u0275\u0275elementStart"](2,"b"),o["\u0275\u0275text"](3,"Fields marked * are required"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275elementStart"](5,"div",3),o["\u0275\u0275elementStart"](6,"label"),o["\u0275\u0275text"](7,"Name*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](8,"br"),o["\u0275\u0275elementStart"](9,"input",4),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.name=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"div",3),o["\u0275\u0275elementStart"](11,"label"),o["\u0275\u0275text"](12,"Phone*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](13,"br"),o["\u0275\u0275elementStart"](14,"input",5),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.phone=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",3),o["\u0275\u0275elementStart"](16,"label"),o["\u0275\u0275text"](17,"Sex"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](18,"br"),o["\u0275\u0275elementStart"](19,"select",6),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.sex=e})),o["\u0275\u0275elementStart"](20,"option",7),o["\u0275\u0275text"](21,"Male"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](22,"option",8),o["\u0275\u0275text"](23,"Female"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"div",3),o["\u0275\u0275elementStart"](25,"label"),o["\u0275\u0275text"](26,"Nationality"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](27,"br"),o["\u0275\u0275elementStart"](28,"input",9),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.nationality=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"div",3),o["\u0275\u0275elementStart"](30,"label"),o["\u0275\u0275text"](31,"Email"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](32,"br"),o["\u0275\u0275elementStart"](33,"input",10),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.email=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"div",3),o["\u0275\u0275elementStart"](35,"label"),o["\u0275\u0275text"](36,"Notes"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](37,"br"),o["\u0275\u0275elementStart"](38,"textarea",11),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.notes=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"div",3),o["\u0275\u0275elementStart"](40,"label"),o["\u0275\u0275text"](41,"Place of Work"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](42,"br"),o["\u0275\u0275elementStart"](43,"input",12),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.place_of_work=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](44,"div",3),o["\u0275\u0275element"](45,"input",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngModel",t.customer.name),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.customer.phone),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.customer.sex),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngModel",t.customer.nationality),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.customer.email),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.customer.notes),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.customer.place_of_work))},directives:[m.f,m.g,m.b,m.l,m.e,m.h,m.m,m.i,m.n],styles:[""]}),e})();const u=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.router=t,this.authService=n,this.notify=i,this.id=e.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Manage Customers")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack())}ngOnInit(){}customerAdded(e){null==this.id||null==this.id||this.router.navigate(["/customer/details/"+this.id])}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](r.d),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-customer"]],decls:7,vars:1,consts:[[1,"content"],[1,"container"],[1,"card"],[1,"card-body"],[3,"id","onFinish"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"h4"),o["\u0275\u0275text"](3,"Customer"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275elementStart"](5,"div",3),o["\u0275\u0275elementStart"](6,"app-customer-form",4),o["\u0275\u0275listener"]("onFinish",(function(e){return t.customerAdded(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("id",t.id))},directives:[c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(u)],r.f]}),e})();var p=n("nEHF");let g=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,p.a]]}),e})(),f=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,h,p.a,g]]}),e})()}}]);