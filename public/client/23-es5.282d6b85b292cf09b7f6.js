function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{HYBK:function(e,t,n){"use strict";n.r(t),n.d(t,"PurchasePaymentHistoryModule",(function(){return E}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("ccyI"),s=n("bgkY"),l=n("c92J"),c=n("1VJT"),d=n("3Pt+"),u=n("9zqa"),m=n("pEcs"),p=n("hiAm");function h(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"form",20,21),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().searchReceipts()})),r["\u0275\u0275elementStart"](2,"label"),r["\u0275\u0275text"](3,"Search receipt #"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"input",22),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().search_code=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"input",23),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",i.search_code)}}function f(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"form",20),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().getReceipts()})),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select period and payment method "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",24),r["\u0275\u0275listener"]("change",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().setDates()}))("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().quick_option=e})),r["\u0275\u0275elementStart"](4,"option",25),r["\u0275\u0275text"](5,"Today"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"option",26),r["\u0275\u0275text"](7,"Yesterday"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"option",27),r["\u0275\u0275text"](9,"This Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"option",28),r["\u0275\u0275text"](11,"Last Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"option",29),r["\u0275\u0275text"](13,"This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"option",30),r["\u0275\u0275text"](15,"Last Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"option",31),r["\u0275\u0275text"](17,"1st quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"option",32),r["\u0275\u0275text"](19,"2nd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"option",33),r["\u0275\u0275text"](21,"3rd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"option",34),r["\u0275\u0275text"](23,"4th quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"option",35),r["\u0275\u0275text"](25,"This Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"option",36),r["\u0275\u0275text"](27,"Last Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"label"),r["\u0275\u0275text"](29,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"input",37),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"label"),r["\u0275\u0275text"](32,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](33,"input",38),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](34,"input",39),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.quick_option),r["\u0275\u0275advance"](27),r["\u0275\u0275property"]("ngModel",i.start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.end_date)}}function g(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function v(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1,"Connection error. "),r["\u0275\u0275elementStart"](2,"button",40),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().getReceipts()})),r["\u0275\u0275text"](3,"Try Again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}var y,_,b,x=[{path:"",component:(y=function(){function e(t,n,i,a,r,o){_classCallCheck(this,e),this.authService=t,this.socket=n,this.dbService=i,this.notify=a,this.router=r,this.ar=o,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.search_by="dates",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="this_month",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.selected_items=[],this.payment_method="Cash",this.user_type="staff",this.company_id="all",this.branches=[],-1==this.authService.current_user.permissions.indexOf("View Sales History")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.getThisWeek(),this.dbService.getThisYear();var s=i.setDates(this.quick_option);this.start_date=s.start_date,this.end_date=s.end_date,this.company_address=t.current_user.company_address,this.company_phone=t.current_user.company_phone,this.company_name=t.current_user.company_name,this.digital_address=t.current_user.digital_address,-1==this.authService.current_user.permissions.indexOf("Delete Sales Records")&&(this.can_delete=!1),this.user_type=this.authService.current_user.type,this.parent_company_id=this.authService.current_user.parent_company_id}return _createClass(e,[{key:"ngOnInit",value:function(){this.getReceipts()}},{key:"ngOnChanges",value:function(){this.getReceipts()}},{key:"getReceipts",value:function(){var e=this;this.receipts_loading=!0;var t="admin/findOutgoingPaymentsBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date+"&payment_method="+this.payment_method;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_loading=!1,e.receipts_error=!0,e.notify.failNotification("Unable to get purchases")}))}},{key:"searchReceipts",value:function(){var e=this;this.receipts_loading=!0;var t="admin/findOutgoingPaymentsBetweenDates?code="+this.search_code;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.total=n.total,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.receipts_loading=!1,e.notify.failNotification("Unable to get sales")}))}},{key:"formatTotal",value:function(e){return parseFloat(e).toFixed(2)}},{key:"filter",value:function(e){this.router.navigate(["/sales"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}},{key:"paginationFinished",value:function(e){var t=this;e.data.map((function(e){e.createdAt=null==e.createdAt||null==e.createdAt?null:t.dbService.getToday(null,e.createdAt)})),this.objects=e.data,this.offset=e.offset}},{key:"goBack",value:function(){window.history.back()}},{key:"print",value:function(){var e,t;e=document.getElementById("invoice").innerHTML,(t=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),t.document.write("\n      <html>\n        <head>\n          <title>Invoice</title>\n          <style>\n          body{\n            font-size: 13px;\n          }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n           </style>\n        </head>\n    <body onload=\"window.print();window.close()\"><div id='invoice'>".concat(e,"</div></body>\n      </html>")),t.document.close()}},{key:"setDates",value:function(){this.dbService.getWeekNumber(this.dbService.getToday()),this.dbService.getThisYear();var e=this.dbService.getToday("month"),t=(parseInt(e),this.dbService.setDates(this.quick_option));this.start_date=t.start_date,this.end_date=t.end_date,this.getReceipts()}},{key:"setBranches",value:function(e){this.branches=e}}]),e}(),y.\u0275fac=function(e){return new(e||y)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](a.d),r["\u0275\u0275directiveInject"](a.a))},y.\u0275cmp=r["\u0275\u0275defineComponent"]({type:y,selectors:[["app-purchase-payment-history"]],features:[r["\u0275\u0275NgOnChangesFeature"]],decls:38,vars:9,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],["routerLink","/add_purchase_payment",1,"btn","btn-sm","btn-success"],[1,"fa","fa-dollar"],[1,"card","card-body"],[1,"radio-inline"],["type","radio","name","search_by","value","dates",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","receipt",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","vendor",3,"ngModel","ngModelChange"],["ngNativeValidate","",3,"ngSubmit",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],[1,"table-responsive","fixed-length"],[3,"receipts","onFinish"],[3,"type","onFinish"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","required","","name","search_code",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Search",1,"btn","btn-sm","btn-success"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"View Payments for Credit Purchases "),r["\u0275\u0275elementStart"](6,"a",4),r["\u0275\u0275element"](7,"i",5),r["\u0275\u0275text"](8," Add a Payment"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",6),r["\u0275\u0275elementStart"](10,"div",7),r["\u0275\u0275elementStart"](11,"label"),r["\u0275\u0275text"](12,"Search by Dates "),r["\u0275\u0275elementStart"](13,"input",8),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14," \xa0 "),r["\u0275\u0275elementStart"](15,"label"),r["\u0275\u0275text"](16,"Search by Invoice/transaction #/recipient "),r["\u0275\u0275elementStart"](17,"input",9),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](18," \xa0 "),r["\u0275\u0275elementStart"](19,"label"),r["\u0275\u0275text"](20,"Search by payment type "),r["\u0275\u0275elementStart"](21,"input",10),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](22,"hr"),r["\u0275\u0275elementStart"](23,"div"),r["\u0275\u0275template"](24,h,6,1,"form",11),r["\u0275\u0275template"](25,f,35,3,"form",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"div",2),r["\u0275\u0275elementStart"](27,"div",12),r["\u0275\u0275elementStart"](28,"div",13),r["\u0275\u0275elementStart"](29,"div",14),r["\u0275\u0275elementStart"](30,"em"),r["\u0275\u0275text"](31,"Click on an item to view details/print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"div",15),r["\u0275\u0275template"](33,g,1,0,"app-loading",16),r["\u0275\u0275template"](34,v,4,0,"span",16),r["\u0275\u0275elementStart"](35,"div",17),r["\u0275\u0275elementStart"](36,"app-purchase-payment-list",18),r["\u0275\u0275listener"]("onFinish",(function(){return t.getReceipts()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](37,"app-select-branch",19),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setBranches(e)})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](13),r["\u0275\u0275property"]("ngModel",t.search_by),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",t.search_by),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",t.search_by),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","receipt"==t.search_by),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","dates"==t.search_by),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("ngIf",t.receipts_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.receipts_error),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("receipts",t.receipts),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("type","emit"))},directives:[a.e,d.k,d.b,d.e,d.h,i.j,u.a,m.a,d.f,d.g,d.l,d.m,d.i,d.n,p.a],styles:[""]}),y)}],S=((_=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[a.f.forChild(x)],a.f]}),_),w=n("nEHF"),C=n("x1LF"),E=((b=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[i.b,S,w.a,C.a]]}),b)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),a=n("4AQi"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.excel=t,this.objects=[],this.filename="download"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"export",value:function(){this.excel.exportAsExcelFile(this.objects,this.filename)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"button",0),i["\u0275\u0275listener"]("click",(function(){return t.export()})),i["\u0275\u0275element"](1,"i",1),i["\u0275\u0275text"](2," Export To Excel"),i["\u0275\u0275elementEnd"]())},styles:[""]}),e}()},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i=n("fXoL"),a=function e(){_classCallCheck(this,e)},r=n("c92J"),o=n("ccyI"),s=n("1VJT"),l=n("ofXK"),c=n("3Pt+"),d=n("hiAm");function u(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function h(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,u,2,0,"button",4),i["\u0275\u0275template"](2,m,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).selected_item=e}))("change",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,p,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",a.objects)}}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,h,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_loaded)}}function g(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"](3).add(e)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",a.name," ")}}function _(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,y,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",n.objects)}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,g,1,0,"app-loading",3),i["\u0275\u0275template"](3,v,3,0,"div",3),i["\u0275\u0275template"](4,_,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_finished_search)}}var x,S=((x=function(){function e(t,n,a){_classCallCheck(this,e),this.dbService=t,this.authService=n,this.notify=a,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}},{key:"itemSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}},{key:"itemAdded",value:function(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}},{key:"list",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"getAll",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading();var t="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(t+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(t,this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.onFinish.emit(e.objects),e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"add",value:function(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"addItem",value:function(){var e=this;this.notify.showLoading();var t=window.prompt("Enter name of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("name is required"),!1;var n=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(n))return this.notify.failNotification("Phone number is required"),!1;var i=new FormData;i.append("name",t),i.append("phone",n),this.dbService.postData(i,"admin/saveBranch",this.authService.current_user).subscribe((function(i){if(e.notify.hideLoading(),"-1"===i.status)e.notify.failNotification("Server error. Please try again");else if("-1"===i.status)e.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===i.status)e.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{var r=new a;r.id=i.status,r.name=t,r.phone=n,e.objects.push(r),e.notify.successNotification("Branch added successfully"),e.selected_item=r.id,e.itemSelected()}}),(function(t){e.notify.noConnectionNotification()}))}}]),e}()).\u0275fac=function(e){return new(e||x)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},x.\u0275cmp=i["\u0275\u0275defineComponent"]({type:x,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,f,2,1,"span",0),i["\u0275\u0275template"](1,b,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[l.j,c.m,c.e,c.h,l.i,c.i,c.n,d.a],styles:[""]}),x)},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("ofXK"),a=n("nEHF"),r=n("6QD7"),o=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a,r.b],r.b]}),e}()}}]);