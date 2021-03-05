(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{GcqH:function(e,t,n){"use strict";n.r(t),n.d(t,"ReceivePaymentModule",(function(){return b}));var o=n("ofXK"),r=n("tyNb");class a{constructor(){this.payer="Credit Sale Payment"}}var i=n("fXoL"),l=n("c92J"),m=n("1VJT"),d=n("ccyI"),s=n("3Pt+");function c(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",23),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275propertyInterpolate1"]("value","",e.name," "),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate2"]("",e.name," (",e.phone,")")}}const u=[{path:"",component:(()=>{class e{constructor(e,t,n,o,r){this.dbService=e,this.router=t,this.ar=n,this.notify=o,this.authService=r,this.vendor_id="",this.type="Miscellaneous",-1==this.authService.current_user.permissions.indexOf("Create Sales")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Recieve Credit Sales Payment"),this.object=new a,this.object.type="Credit Sale Payment",n.queryParams.subscribe(e=>{console.log(e),this.object.item_code=e.item_code,this.object.payer=e.payer,this.vendor_id=e.recipient})}ngOnInit(){}submit(){this.notify.showLoading();const e=new FormData;e.append("item_code",this.object.item_code),e.append("notes",this.object.notes),e.append("transaction_id",this.object.transaction_id),e.append("date",this.object.date),e.append("created_by",this.authService.current_user.id),e.append("type",this.object.type),e.append("payment_method",this.object.payment_method),e.append("amount",this.object.amount),e.append("payer",this.object.payer),e.append("created_on",this.dbService.getToday("timestamp")),e.append("display_name",this.authService.current_user.display_name),this.dbService.postData(e,"admin/saveIncomingPayment",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"0"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-1"===e.status?this.notify.failNotification("Server error. Please try again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.hideLoading(),this.notify.successNotification("Payment saved successfully"),this.object=new a,this.object.type="Credit Sale Payment")},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}searchCustomers(){""!=this.customer_name.trim()&&null!=this.customer_name&&null!=this.customer_name?this.dbService.getDataWithQuery("customer/search",this.authService.current_user,"param="+this.customer_name+"&limit=10").subscribe(e=>{"-1"===e.status||(this.customer_objects=e.data)},e=>{}):this.customer_objects=[]}getCustomerPhone(){for(var e=0;e<this.customer_objects.length;e++){var t=this.customer_objects[e];if(t.name.trim().toLowerCase()==this.customer_name.trim().toLowerCase()){this.customer_phone=t.phone;break}}}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](r.c),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](m.a),i["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-receive-payment"]],decls:74,vars:10,consts:[[1,"content"],[1,"container"],[1,"card"],[1,"card-body"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,""],[1,"row","bottom-margin"],[1,"col-md-3"],["required","","type","date","name","date",3,"ngModel","ngModelChange"],["required","","type","text","name","amount",3,"ngModel","ngModelChange"],["name","customer_name","required","","id","customer_field","type","text","list","customer_list",1,"form-control",3,"ngModel","blur","keyup","ngModelChange"],["id","customer_list"],[3,"value",4,"ngFor","ngForOf"],["required","","name","customer_phone",1,"form-control",3,"ngModel","focus","ngModelChange"],[1,"col-md-4"],["required","","type","text","name","type",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","text","name","item_code",1,"form-control",3,"ngModel","ngModelChange"],["name","payment_method",3,"ngModel","ngModelChange"],["value","object.payment_method == 'Cash' ? 'N/A': ''","required","","type","text","name","transaction_id",1,"form-control",3,"ngModel","ngModelChange"],["name","notes","rows","3","cols","40",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Submit",1,"btn","btn-success"],["type","reset","name","reset","value","Reset",1,"btn","btn-warning"],[3,"value"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"section",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"h4"),i["\u0275\u0275text"](3,"Receive Payment for a Credit Sale "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",2),i["\u0275\u0275elementStart"](5,"div",3),i["\u0275\u0275elementStart"](6,"form",4,5),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),i["\u0275\u0275elementStart"](8,"div",6),i["\u0275\u0275elementStart"](9,"em"),i["\u0275\u0275text"](10,"Fields marked * are required"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"div",7),i["\u0275\u0275elementStart"](12,"div",8),i["\u0275\u0275elementStart"](13,"label"),i["\u0275\u0275text"](14,"Payment Date*"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](15,"br"),i["\u0275\u0275elementStart"](16,"input",9),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"div",8),i["\u0275\u0275elementStart"](18,"label"),i["\u0275\u0275text"](19,"Amount Paid*"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](20,"br"),i["\u0275\u0275elementStart"](21,"input",10),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.amount=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](22,"div",8),i["\u0275\u0275elementStart"](23,"label"),i["\u0275\u0275text"](24,"Customer Name*"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](25,"input",11),i["\u0275\u0275listener"]("blur",(function(){return t.getCustomerPhone()}))("keyup",(function(){return t.searchCustomers()}))("ngModelChange",(function(e){return t.customer_name=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"datalist",12),i["\u0275\u0275template"](27,c,2,3,"option",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",8),i["\u0275\u0275elementStart"](29,"label"),i["\u0275\u0275text"](30,"Customer Phone*"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"input",14),i["\u0275\u0275listener"]("focus",(function(){return t.getCustomerPhone()}))("ngModelChange",(function(e){return t.customer_phone=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](32,"hr"),i["\u0275\u0275elementStart"](33,"div",7),i["\u0275\u0275elementStart"](34,"div",15),i["\u0275\u0275elementStart"](35,"label"),i["\u0275\u0275text"](36,"Purpose of Payment "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](37,"br"),i["\u0275\u0275elementStart"](38,"input",16),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.type=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](39,"div",15),i["\u0275\u0275elementStart"](40,"label"),i["\u0275\u0275text"](41,"Invoice Number"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](42,"br"),i["\u0275\u0275elementStart"](43,"input",17),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.item_code=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"div",15),i["\u0275\u0275elementStart"](45,"label"),i["\u0275\u0275text"](46,"Payment Method*"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](47,"br"),i["\u0275\u0275elementStart"](48,"div"),i["\u0275\u0275elementStart"](49,"select",18),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.payment_method=e})),i["\u0275\u0275elementStart"](50,"option"),i["\u0275\u0275text"](51,"Cash"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](52,"option"),i["\u0275\u0275text"](53,"Mobile Money"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](54,"option"),i["\u0275\u0275text"](55,"Cheque"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](56,"option"),i["\u0275\u0275text"](57,"POS"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](58,"option"),i["\u0275\u0275text"](59,"Other"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](60,"hr"),i["\u0275\u0275elementStart"](61,"div",7),i["\u0275\u0275elementStart"](62,"div",15),i["\u0275\u0275elementStart"](63,"label"),i["\u0275\u0275text"](64,"Transaction Id/Reference/Cheque No.*"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](65,"br"),i["\u0275\u0275elementStart"](66,"input",19),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.transaction_id=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](67,"div",15),i["\u0275\u0275elementStart"](68,"label"),i["\u0275\u0275text"](69,"Notes"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](70,"br"),i["\u0275\u0275elementStart"](71,"textarea",20),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.object.notes=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](72,"input",21),i["\u0275\u0275element"](73,"input",22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](16),i["\u0275\u0275property"]("ngModel",t.object.date),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngModel",t.object.amount),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngModel",t.customer_name),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",t.customer_objects),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngModel",t.customer_phone),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngModel",t.object.type),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngModel",t.object.item_code),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("ngModel",t.object.payment_method),i["\u0275\u0275advance"](17),i["\u0275\u0275property"]("ngModel",t.object.transaction_id),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngModel",t.object.notes))},directives:[s.f,s.g,s.b,s.l,s.e,s.h,o.i,s.m,s.i,s.n],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(u)],r.f]}),e})();var h=n("nEHF");let b=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.b,p,h.a]]}),e})()}}]);