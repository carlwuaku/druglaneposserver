(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Ikxx:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){}}},SnBo:function(e,t,n){"use strict";n.r(t),n.d(t,"DiagnosticsModule",(function(){return w}));var r=n("ofXK"),i=n("tyNb"),a=n("Ikxx"),o=n("fXoL"),l=n("c92J"),s=n("bgkY"),m=n("1VJT"),d=n("eJvr"),c=n("ccyI"),u=n("3Pt+"),p=n("gSie");function h(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",27),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275propertyInterpolate"]("value",e.id),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate2"]("",e.name," (",e.phone,") ")}}function g(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"select",26),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().customer_id=t})),o["\u0275\u0275template"](1,h,2,3,"option",17),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("ngModel",e.customer_id),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",e.customer_objects)}}function f(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",4),o["\u0275\u0275elementStart"](1,"div",28),o["\u0275\u0275elementStart"](2,"label"),o["\u0275\u0275text"](3,"Phone*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](4,"br"),o["\u0275\u0275elementStart"](5,"input",29),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().customer.phone=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",28),o["\u0275\u0275elementStart"](7,"label"),o["\u0275\u0275text"](8,"Name*"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](9,"br"),o["\u0275\u0275elementStart"](10,"input",30),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().customer.name=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"div",28),o["\u0275\u0275elementStart"](12,"label"),o["\u0275\u0275text"](13,"Sex"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](14,"br"),o["\u0275\u0275elementStart"](15,"select",31),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().customer.sex=t})),o["\u0275\u0275elementStart"](16,"option",32),o["\u0275\u0275text"](17,"Male"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](18,"option",33),o["\u0275\u0275text"](19,"Female"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"div",28),o["\u0275\u0275elementStart"](21,"label"),o["\u0275\u0275text"](22,"Email"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](23,"br"),o["\u0275\u0275elementStart"](24,"input",34),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().customer.email=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",e.customer.phone),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",e.customer.name),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",e.customer.sex),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngModel",e.customer.email)}}function x(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",27),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275propertyInterpolate"]("value",e.test_name),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",e.test_name," ")}}function b(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275text"](1," Test description: "),o["\u0275\u0275element"](2,"br"),o["\u0275\u0275elementStart"](3,"em",35),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"](" ",e.selected_test.comments," ")}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i){this.dbService=e,this.socket=t,this.notify=n,this.localforage=r,this.authService=i,this.tests=[],this.test_data=[],this.selected_test=null,this.customer_id=null,this.customer_type="old",this.digital_address="",this.company_address=i.current_user.company_address,this.company_phone=i.current_user.company_phone,this.company_name=i.current_user.company_name,this.digital_address=i.current_user.digital_address}ngOnInit(){this.customer=new a.a,this.getCustomers(),this.getTests()}getCustomers(){this.dbService.getData("customer/getList",this.authService.current_user).subscribe(e=>{"1"==e.status&&(this.customer_objects=e.data)},e=>{this.notify.failNotification("Unable to get customers. Check connection")})}getTests(){this.dbService.getData("customer/getDiagnosticsList",this.authService.current_user).subscribe(e=>{if("1"==e.status){this.tests=e.data;for(var t=0;t<this.tests.length;t++);}},e=>{this.notify.failNotification("Unable to get customers. Check connection")})}setSelectedTest(){this.test_data=[];for(var e=0;e<this.tests.length;e++){var t=this.tests[e];if(console.log(t,this.test),t.test_name==this.test){this.selected_test=t;break}}let n=this.selected_test.parameters.split(",");for(var r=0;r<n.length;r++)this.test_data.push({name:n[r],value:""})}setCustomer(){for(var e=0;e<this.customer_objects.length;e++)if(this.customer_objects[e].id=this.customer_id){this.customer=this.customer_objects[e];break}}search(){this.dbService.getDataWithQuery("customer/search",this.authService.current_user,"param="+this.customer.phone).subscribe(e=>{"-1"===e.status||(this.customer_objects=e.data,e.data.length>0?this.customer=e.data[0]:(this.customer.name="",this.customer.sex="",this.customer.email=""))},e=>{})}submit(){if("old"==this.customer_type&&(null==this.customer_id||null==this.customer_id))return alert("Please select a customer"),!1;this.notify.showLoading();let e=new FormData;for(let t in this.customer)"id"!==t&&e.append(t,this.customer[t]);"old"==this.customer_type&&e.append("customer",this.customer_id),this.client_phone=this.customer.phone,this.client_name=this.customer.name,e.append("comments",this.comments),e.append("customer_type",this.customer_type),e.append("data",this.value),e.append("test",this.test_name),e.append("created_on",this.created_on),this.dbService.postData(e,"customer/saveDiagnostics",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Server error. Please check that you filled the form correctly and try again"):"0"===e.status?this.notify.failNotification("Unable to authenticate. Login and try again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.customer.id=e.status,this.notify.successNotification("Data saved successfully"),this.print(),this.reset())},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}reset(){this.value="",this.test="",this.comments="",this.getTests(),this.getCustomers(),this.customer_id="",this.customer_type="old",this.customer=new a.a}print(){let e,t;e=document.getElementById("invoice").innerHTML,t=window.open("","_blank","top=0,left=0,height=100%,width=auto"),t.document.open(),t.document.write(`\n      <html>\n        <head>\n          <title>Invoice</title>\n          <style>\n          body{\n            font-size: 13px;\n          }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n           </style>\n        </head>\n    <body onload="window.print()"><div id='invoice'>${e}</div>\n    <script>\n           window.onafterprint = function(){\n            window.close();\n          }\n           <\/script>\n    </body>\n      </html>`),t.document.close()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](m.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-diagnostics"]],decls:99,vars:18,consts:[[1,"content"],[1,"container"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"row"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],["type","radio","name","customer_type","value","old",3,"ngModel","ngModelChange"],["type","radio","name","customer_type","value","new",3,"ngModel","ngModelChange"],["name","customer_id",3,"ngModel","ngModelChange",4,"ngIf"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],["class","row",4,"ngIf"],["name","test_name","required","","type","text","list","test_list",1,"form-control",3,"ngModel","ngModelChange"],["id","test_list"],[3,"value",4,"ngFor","ngForOf"],["required","","name","created_on","type","datetime-local",3,"ngModel","ngModelChange"],["required","","name","value","placeholder","e.g. 120/90mmHg",1,"form-control",3,"ngModel","ngModelChange"],["name","comments",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-block","btn-success"],[4,"ngIf"],["id","invoice"],[1,"text-center"],[1,""],["name","customer_id",3,"ngModel","ngModelChange"],[3,"value"],[1,"col-sm-6"],["required","","type","text","name","phone",3,"ngModel","ngModelChange"],["required","","type","text","name","name",3,"ngModel","ngModelChange"],["name","sex",3,"ngModel","ngModelChange"],["value","Male"],["value","Female"],["name","email","type","email",3,"ngModel","ngModelChange"],[1,"test-muted"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"h4"),o["\u0275\u0275text"](3,"Diagnostics"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"form",2,3),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),o["\u0275\u0275elementStart"](6,"div",4),o["\u0275\u0275elementStart"](7,"div",5),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"h5"),o["\u0275\u0275text"](11,"Customer Details"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"div",8),o["\u0275\u0275elementStart"](13,"em"),o["\u0275\u0275text"](14,"If it's for an existing customer, select the person from the list below. Else, fill the form to create a new customer "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](15,"br"),o["\u0275\u0275elementStart"](16,"label"),o["\u0275\u0275elementStart"](17,"input",9),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer_type=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](18," Existing Customer"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](19," \xa0 "),o["\u0275\u0275elementStart"](20,"label"),o["\u0275\u0275elementStart"](21,"input",10),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.customer_type=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](22," New Customer"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](23,"br"),o["\u0275\u0275template"](24,g,2,2,"select",11),o["\u0275\u0275elementStart"](25,"button",12),o["\u0275\u0275listener"]("click",(function(){return t.getCustomers()})),o["\u0275\u0275element"](26,"i",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](27,"hr"),o["\u0275\u0275template"](28,f,25,4,"div",14),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"div",5),o["\u0275\u0275elementStart"](30,"div",6),o["\u0275\u0275elementStart"](31,"div",7),o["\u0275\u0275elementStart"](32,"label"),o["\u0275\u0275text"](33,"Select the test from the predefined list or enter the test details yourself "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"input",15),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.test_name=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](35,"button",12),o["\u0275\u0275listener"]("click",(function(){return t.getTests()})),o["\u0275\u0275element"](36,"i",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](37,"datalist",16),o["\u0275\u0275template"](38,x,2,2,"option",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"div",8),o["\u0275\u0275elementStart"](40,"label"),o["\u0275\u0275text"](41,"Date & Time"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](42,": "),o["\u0275\u0275elementStart"](43,"input",18),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.created_on=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](44,"hr"),o["\u0275\u0275elementStart"](45,"label"),o["\u0275\u0275text"](46,"Test Value"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](47,": "),o["\u0275\u0275elementStart"](48,"textarea",19),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](49,"hr"),o["\u0275\u0275elementStart"](50,"label"),o["\u0275\u0275text"](51,"Your comments"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](52,": "),o["\u0275\u0275elementStart"](53,"textarea",20),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.comments=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](54,"button",21),o["\u0275\u0275text"](55,"Save"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](56,"hr"),o["\u0275\u0275template"](57,b,5,1,"div",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](58,"div",23),o["\u0275\u0275elementStart"](59,"div"),o["\u0275\u0275element"](60,"br"),o["\u0275\u0275elementStart"](61,"div",24),o["\u0275\u0275element"](62,"app-receipt-logo"),o["\u0275\u0275elementStart"](63,"b"),o["\u0275\u0275text"](64),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](65,"br"),o["\u0275\u0275text"](66),o["\u0275\u0275element"](67,"br"),o["\u0275\u0275text"](68),o["\u0275\u0275element"](69,"br"),o["\u0275\u0275text"](70),o["\u0275\u0275element"](71,"br"),o["\u0275\u0275element"](72,"br"),o["\u0275\u0275elementStart"](73,"u"),o["\u0275\u0275text"](74,"TEST REPORT"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](75,"br"),o["\u0275\u0275elementStart"](76,"em"),o["\u0275\u0275text"](77),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](78,"hr"),o["\u0275\u0275elementStart"](79,"table",25),o["\u0275\u0275elementStart"](80,"tr"),o["\u0275\u0275elementStart"](81,"td"),o["\u0275\u0275text"](82,"Test "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](83,"td"),o["\u0275\u0275text"](84),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](85,"tr"),o["\u0275\u0275elementStart"](86,"td"),o["\u0275\u0275text"](87,"Result "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](88,"td"),o["\u0275\u0275text"](89),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](90,"tr"),o["\u0275\u0275elementStart"](91,"td"),o["\u0275\u0275text"](92,"Date "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](93,"td"),o["\u0275\u0275text"](94),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](95,"br"),o["\u0275\u0275elementStart"](96,"div",24),o["\u0275\u0275text"](97," Druglane Pharmacy POS Software - 0207085244 "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](98,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](17),o["\u0275\u0275property"]("ngModel",t.customer_type),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngModel",t.customer_type),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf","old"==t.customer_type),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf","new"==t.customer_type),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngModel",t.test_name),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngForOf",t.tests),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.created_on),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.value),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.comments),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",null!=t.selected_test),o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate1"]("",t.company_name," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.company_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.digital_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate1"]("",t.client_name," "),o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate1"]("",t.test_name," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.value," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.created_on," "))},directives:[u.f,u.g,u.k,u.b,u.e,u.h,r.j,u.l,r.i,p.a,u.m,u.i,u.n],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.f.forChild(v)],i.f]}),e})();var y=n("nEHF"),_=n("rNAZ"),E=n("nBlB");let w=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,S,y.a,_.a,E.a]]}),e})()},gSie:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("fXoL"),i=n("c92J"),a=n("ccyI"),o=n("ofXK");function l(e,t){if(1&e&&r["\u0275\u0275element"](0,"img",1),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275propertyInterpolate2"]("src","",e.base_url,"",e.logo,"",r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275propertyInterpolate"]("height",e.height)}}let s=(()=>{class e{constructor(e,t){this.dbService=e,this.authService=t,this.height=50,this.show_logo="no",this.dbService.server_address.subscribe(e=>{this.base_url=e})}ngOnInit(){this.dbService.getData("admin/getLogo",this.authService.current_user).subscribe(e=>{this.logo=e.data},e=>{}),this.dbService.getData("admin/getSetting?setting=receipt_logo",this.authService.current_user).subscribe(e=>{this.show_logo=e.data},e=>{})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-receipt-logo"]],inputs:{height:"height"},decls:2,vars:1,consts:[["alt","logo",3,"src","height",4,"ngIf"],["alt","logo",3,"src","height"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,l,1,3,"img",0),r["\u0275\u0275element"](1,"br")),2&e&&r["\u0275\u0275property"]("ngIf","yes"==t.show_logo)},directives:[o.j],styles:[""]}),e})()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ofXK"),i=n("nEHF"),a=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,i.a]]}),e})()},rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ofXK"),i=n("nEHF"),a=n("6QD7"),o=n("fXoL");let l=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,i.a,a.b],a.b]}),e})()}}]);