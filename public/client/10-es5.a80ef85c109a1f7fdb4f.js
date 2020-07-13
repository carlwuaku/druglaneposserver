function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{h4KG:function(e,t,n){"use strict";n.r(t),n.d(t,"AddCustomerModule",(function(){return C}));var i,r,o,a,l,s=n("ofXK"),d=n("tyNb"),c=n("fXoL"),u=n("ccyI"),m=n("1VJT"),h=function e(){_classCallCheck(this,e)},f=n("c92J"),p=n("3Pt+"),g=((i=function(){function e(t,n,i){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.authService=i,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.onFinish=new c.EventEmitter,this.uploadUrl="admin/uploadPicture",this.url="customer/findById",null!=this.id&&null!=this.id||(this.customer=new h)}return _createClass(e,[{key:"ngOnInit",value:function(){null==this.id||null==this.id||this.getCustomer(this.id)}},{key:"uploadFinished",value:function(e){this.pic_location=e,this.customer.picture=e}},{key:"getCustomer",value:function(e){var t=this;this.dbService.getDataWithQuery(this.url,this.authService.current_user,"id="+this.id).subscribe((function(e){t.customer=e.data,t.is_loading=!1,t.is_loaded=!0,t.error=!1}),(function(e){t.is_loading=!1,t.error=!0,t.is_loaded=!1}))}},{key:"submit",value:function(){var e=this;this.notify.showLoading();var t=new FormData;for(var n in this.customer)t.append(n,this.customer[n]);null!=this.id&&null!=this.id||t.append("createdAt",this.dbService.getToday()),t.append("display_name",this.authService.current_user.display_name),this.dbService.postData(t,"customer/save",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.customer.id=t.status,e.notify.successNotification("Customer saved successfully"),e.onFinish.emit(e.customer),e.customer=new h)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}}]),e}()).\u0275fac=function(e){return new(e||i)(c["\u0275\u0275directiveInject"](f.a),c["\u0275\u0275directiveInject"](m.a),c["\u0275\u0275directiveInject"](u.a))},i.\u0275cmp=c["\u0275\u0275defineComponent"]({type:i,selectors:[["app-customer-form"]],inputs:{id:"id"},outputs:{onFinish:"onFinish"},decls:46,vars:7,consts:[["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"row"],[1,"col-sm-6"],["required","","type","text","name","name",3,"ngModel","ngModelChange"],["required","","type","text","name","phone",3,"ngModel","ngModelChange"],["name","sex",3,"ngModel","ngModelChange"],["value","Male"],["value","Female"],["id","nationality","type","text","name","nationality",3,"ngModel","ngModelChange"],["name","email","type","email",3,"ngModel","ngModelChange"],["name","notes","rows","3","cols","40",3,"ngModel","ngModelChange"],["type","text","name","place_of_work",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Submit",1,"btn","btn-success"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0,1),c["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),c["\u0275\u0275elementStart"](2,"b"),c["\u0275\u0275text"](3,"Fields marked * are required"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",2),c["\u0275\u0275elementStart"](5,"div",3),c["\u0275\u0275elementStart"](6,"label"),c["\u0275\u0275text"](7,"Name*"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](8,"br"),c["\u0275\u0275elementStart"](9,"input",4),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.name=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"div",3),c["\u0275\u0275elementStart"](11,"label"),c["\u0275\u0275text"](12,"Phone*"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](13,"br"),c["\u0275\u0275elementStart"](14,"input",5),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.phone=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"div",3),c["\u0275\u0275elementStart"](16,"label"),c["\u0275\u0275text"](17,"Sex"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](18,"br"),c["\u0275\u0275elementStart"](19,"select",6),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.sex=e})),c["\u0275\u0275elementStart"](20,"option",7),c["\u0275\u0275text"](21,"Male"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"option",8),c["\u0275\u0275text"](23,"Female"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"div",3),c["\u0275\u0275elementStart"](25,"label"),c["\u0275\u0275text"](26,"Nationality"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](27,"br"),c["\u0275\u0275elementStart"](28,"input",9),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.nationality=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](29,"div",3),c["\u0275\u0275elementStart"](30,"label"),c["\u0275\u0275text"](31,"Email"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](32,"br"),c["\u0275\u0275elementStart"](33,"input",10),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.email=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](34,"div",3),c["\u0275\u0275elementStart"](35,"label"),c["\u0275\u0275text"](36,"Notes"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](37,"br"),c["\u0275\u0275elementStart"](38,"textarea",11),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.notes=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](39,"div",3),c["\u0275\u0275elementStart"](40,"label"),c["\u0275\u0275text"](41,"Place of Work"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](42,"br"),c["\u0275\u0275elementStart"](43,"input",12),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer.place_of_work=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](44,"div",3),c["\u0275\u0275element"](45,"input",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](9),c["\u0275\u0275property"]("ngModel",t.customer.name),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngModel",t.customer.phone),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngModel",t.customer.sex),c["\u0275\u0275advance"](9),c["\u0275\u0275property"]("ngModel",t.customer.nationality),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngModel",t.customer.email),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngModel",t.customer.notes),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngModel",t.customer.place_of_work))},directives:[p.f,p.g,p.b,p.l,p.e,p.h,p.m,p.i,p.n],styles:[""]}),i),v=[{path:"",component:(r=function(){function e(t,n,i,r){_classCallCheck(this,e),this.router=n,this.authService=i,this.notify=r,this.id=t.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Manage Customers")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack())}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"customerAdded",value:function(e){null==this.id||null==this.id||this.router.navigate(["/customer/details/"+this.id])}},{key:"goBack",value:function(){window.history.back()}}]),e}(),r.\u0275fac=function(e){return new(e||r)(c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](d.d),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](m.a))},r.\u0275cmp=c["\u0275\u0275defineComponent"]({type:r,selectors:[["app-add-customer"]],decls:7,vars:1,consts:[[1,"content"],[1,"container"],[1,"card"],[1,"card-body"],[3,"id","onFinish"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"section",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"h4"),c["\u0275\u0275text"](3,"Customer"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",2),c["\u0275\u0275elementStart"](5,"div",3),c["\u0275\u0275elementStart"](6,"app-customer-form",4),c["\u0275\u0275listener"]("onFinish",(function(e){return t.customerAdded(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("id",t.id))},directives:[g],styles:[""]}),r)}],y=((o=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[d.f.forChild(v)],d.f]}),o),S=n("nEHF"),b=((l=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||l)},imports:[[s.b,S.a]]}),l),C=((a=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[s.b,y,S.a,b]]}),a)}}]);