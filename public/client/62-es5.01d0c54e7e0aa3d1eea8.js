function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"4QVB":function(e,t,n){"use strict";n.r(t),n.d(t,"SalesDashboardModule",(function(){return q}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("ccyI"),l=n("bgkY"),s=n("c92J"),d=n("1VJT"),c=n("3Pt+"),m=n("n49D"),p=n("nVU4"),u=n("6QD7"),h=n("pEcs"),f=n("hiAm"),_=n("6CxU"),g=["receipt_grid"];function v(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"label"),r["\u0275\u0275elementStart"](1,"input",27),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().search_by=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](2," Product Names"),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngModel",i.search_by)}}function y(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"form",28,29),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().searchReceipts()})),r["\u0275\u0275elementStart"](2,"label"),r["\u0275\u0275text"](3,"Search receipt #"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"input",30),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().search_code=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"input",31),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",i.search_code)}}function b(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"form",28,29),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().searchReceiptsByProduct()})),r["\u0275\u0275elementStart"](2,"label"),r["\u0275\u0275text"](3,"Search products"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"input",32),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().product_search_param=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"label"),r["\u0275\u0275text"](6,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"input",33),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().product_start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"label"),r["\u0275\u0275text"](9,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"input",34),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().product_end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](11,"input",31),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",i.product_search_param),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.product_start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.product_end_date)}}function x(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"form",28,29),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().getReceipts()})),r["\u0275\u0275elementStart"](2,"label"),r["\u0275\u0275text"](3,"Or Select period"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"select",35),r["\u0275\u0275listener"]("change",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().setDates()}))("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().quick_option=e})),r["\u0275\u0275elementStart"](5,"option",36),r["\u0275\u0275text"](6,"Today"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"option",37),r["\u0275\u0275text"](8,"Yesterday"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"option",38),r["\u0275\u0275text"](10,"This Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"option",39),r["\u0275\u0275text"](12,"Last Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"option",40),r["\u0275\u0275text"](14,"This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"option",41),r["\u0275\u0275text"](16,"Last Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"option",42),r["\u0275\u0275text"](18,"1st quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"option",43),r["\u0275\u0275text"](20,"2nd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"option",44),r["\u0275\u0275text"](22,"3rd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](23,"option",45),r["\u0275\u0275text"](24,"4th quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"option",46),r["\u0275\u0275text"](26,"This Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](27,"option",47),r["\u0275\u0275text"](28,"Last Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](29,"label"),r["\u0275\u0275text"](30,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"input",48),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"label"),r["\u0275\u0275text"](33,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](34,"input",49),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](35,"input",50),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",i.quick_option),r["\u0275\u0275advance"](27),r["\u0275\u0275property"]("ngModel",i.start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.end_date)}}function S(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function E(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1,"Connection error. "),r["\u0275\u0275elementStart"](2,"button",51),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().getReceipts()})),r["\u0275\u0275text"](3,"Try Again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function w(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",52),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().delete()})),r["\u0275\u0275element"](1,"i",53),r["\u0275\u0275text"](2," Delete Selected "),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("disabled",i.selected_items.length<1)}}function C(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"i",54),r["\u0275\u0275text"](2),r["\u0275\u0275element"](3,"i",55),r["\u0275\u0275text"](4),r["\u0275\u0275elementStart"](5,"button",56),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().print()})),r["\u0275\u0275element"](6,"i",57),r["\u0275\u0275text"](7," Print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",i.selected_time," | "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",i.cashier," ")}}function k(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function I(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"b"),r["\u0275\u0275text"](1,"Click on a receipt number to view/return items"),r["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&r["\u0275\u0275element"](0,"app-sales-history",58),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("discount",n.receipt_discount)("payment_method",n.receipt_method)("show_return","admin"!=n.user_type)("receipt",n.selected_code)("offset",n.offset)("objects",n.objects)}}function D(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"td"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"td"),r["\u0275\u0275text"](8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](n.product.name),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](n.quantity),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](n.price),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",(n.quantity*n.price).toFixed(2)," ")}}var V,j,N,F=[{path:"",component:(V=function(){function e(t,n,i,a,r,o){_classCallCheck(this,e),this.authService=t,this.socket=n,this.dbService=i,this.notify=a,this.router=r,this.ar=o,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="today",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.selected_items=[],this.columnDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,checkboxSelection:!0,width:125},{headerName:"Date",field:"created_on",sortable:!0,filter:!0,width:140},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0,width:75},{headerName:"Method",field:"payment_method",sortable:!0,filter:!0,width:120},{headerName:"Discount",field:"discount",sortable:!0,filter:!0,width:75},{headerName:"Cashier",field:"display_name",sortable:!0,filter:!0,width:160},{headerName:"Shift",field:"shift",sortable:!0,filter:!0,width:160},{headerName:"Customer",field:"customer",sortable:!0,filter:!0}],this.user_type="staff",this.company_id="all",this.branches=[],this.receipt_discount=0,this.receipt_discounted_total=0,this.search_by="dates",-1==this.authService.current_user.permissions.indexOf("View Sales History")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.getThisWeek(),this.dbService.getThisYear(),this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),this.product_start_date=this.dbService.getToday(),this.product_end_date=this.dbService.getToday(),this.company_address=t.current_user.company_address,this.company_phone=t.current_user.company_phone,this.company_name=t.current_user.company_name,this.digital_address=t.current_user.digital_address,-1==this.authService.current_user.permissions.indexOf("Delete Sales Records")&&(this.can_delete=!1),this.defaultColDef={resizable:!0},this.user_type=this.authService.current_user.type,this.parent_company_id=this.authService.current_user.parent_company_id}return _createClass(e,[{key:"ngOnInit",value:function(){this.getReceipts()}},{key:"ngOnChanges",value:function(){this.getReceipts()}},{key:"ngAfterViewInit",value:function(){}},{key:"onGridReady",value:function(e){this.gridApi=e.api}},{key:"onSelectionChanged",value:function(e){var t=this.gridApi.getSelectedRows();this.selected_items=t,this.selected_items.length>0?this.getSales(this.selected_items[this.selected_items.length-1]):(this.is_loaded=!1,this.selected_code="")}},{key:"getSales",value:function(e){var t=this;this.selected_code=e.code,this.cashier=e.display_name,this.selected_time=e.created_on,this.receipt_method=e.payment_method,this.is_loading=!0,this.dbService.getData("sale/getSaleDetails?code="+e.code+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(n){t.objects=n.data;var i=0;t.objects.map((function(e){i+=e.quantity*e.price})),t.receipt_discount=e.discount,console.log(t.receipt_discount),t.invoice_total=i,t.receipt_amount_paid=e.amount_paid,t.receipt_discounted_total=i-t.receipt_discount,t.offset=0,t.is_loaded=!0,t.is_loading=!1}),(function(e){t.notify.failNotification("Unable to get sales")}))}},{key:"getReceipts",value:function(){var e=this;this.receipts_loading=!0;var t="sale/findReceiptsBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date;"admin"==this.user_type&&(t+="&parent_company_id="+this.parent_company_id+"&company_id="+this.authService.current_user.company_id),this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_loading=!1,e.receipts_error=!0,e.notify.failNotification("Unable to get sales")}))}},{key:"searchReceipts",value:function(){var e=this;this.receipts_loading=!0;var t="sale/findReceiptsBetweenDates?code="+this.search_code+"&company_id="+this.authService.current_user.company_id;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.total=n.total,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.receipts_loading=!1,e.notify.failNotification("Unable to get sales")}))}},{key:"searchReceiptsByProduct",value:function(){var e=this;this.receipts_loading=!0;var t="sale/findReceiptsByProduct?product="+this.product_search_param+"&start_date="+this.product_start_date+"&end_date="+this.product_end_date;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.total=n.total,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.receipts_loading=!1,e.notify.failNotification("Unable to get sales")}))}},{key:"formatTotal",value:function(e){return parseFloat(e).toFixed(2)}},{key:"filter",value:function(e){this.router.navigate(["/sales"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}},{key:"paginationFinished",value:function(e){var t=this;e.data.map((function(e){e.createdAt=null==e.createdAt||null==e.createdAt?null:t.dbService.getToday(null,e.createdAt)})),this.objects=e.data,this.offset=e.offset}},{key:"goBack",value:function(){window.history.back()}},{key:"print",value:function(){var e,t;e=document.getElementById("invoice").innerHTML,(t=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),t.document.write("\n      <html>\n        <head>\n          <title>Invoice</title>\n          <style>\n          body{\n            font-size: 13px;\n          }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n           </style>\n        </head>\n    <body onload=\"window.print();\"><div id='invoice'>".concat(e,"</div>\n           <script>\n           window.onafterprint = function(){\n            window.close();\n          }\n           <\/script>\n    </body>\n      </html>")),t.document.close()}},{key:"setDates",value:function(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date,this.getReceipts()}},{key:"delete",value:function(){var e=this;if(window.confirm("Sure you want to delete this receipt? You cannot undo this")){var t=new FormData;this.notify.showLoading();var n=[];this.selected_items.map((function(e){n.push(e.code)})),t.append("code",n.toString()),this.dbService.postData(t,"sale/deleteByCode",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.socket.sendEvent({company_id:e.authService.current_user.company_id,parent_company_id:e.authService.current_user.parent_company.id,message:"Sale deleted",event:"sale_deleted"}),e.getReceipts(),e.notify.showNotification("receipt deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}},{key:"setBranches",value:function(e){this.branches=e}}]),e}(),V.\u0275fac=function(e){return new(e||V)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](a.c),r["\u0275\u0275directiveInject"](a.a))},V.\u0275cmp=r["\u0275\u0275defineComponent"]({type:V,selectors:[["app-sales-dashboard"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](g,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:113,vars:37,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],["type","radio","name","search_by","value","dates",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","receipt",3,"ngModel","ngModelChange"],[4,"ngIf"],["ngNativeValidate","",3,"ngSubmit",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table-responsive","fixed-length"],[3,"objects"],["class","btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","gridReady","selectionChanged"],["receipt_grid",""],[3,"discount","payment_method","show_return","receipt","offset","objects",4,"ngIf"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[1,""],[4,"ngFor","ngForOf"],[3,"bc-height","bc-font-size","bc-value","bc-display-value"],[3,"type","onFinish"],["type","radio","name","search_by","value","product",3,"ngModel","ngModelChange"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","required","","name","search_code",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Search",1,"btn","btn-sm","btn-success"],["type","text","required","","name","product_search_param",3,"ngModel","ngModelChange"],["type","date","name","product_start_date",3,"ngModel","ngModelChange"],["type","date","name","product_end_date",3,"ngModel","ngModelChange"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[3,"click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[1,"fa","fa-remove"],[1,"fa","fa-calendar"],[1,"fa","fa-user"],[1,"btn","btn-info","btn-sm",3,"click"],[1,"fa","fa-print"],[3,"discount","payment_method","show_return","receipt","offset","objects"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"Return/re-print receipts "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div"),r["\u0275\u0275elementStart"](8,"div"),r["\u0275\u0275elementStart"](9,"label"),r["\u0275\u0275text"](10,"Search by: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](11," \xa0 "),r["\u0275\u0275elementStart"](12,"label"),r["\u0275\u0275elementStart"](13,"input",5),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14," Dates"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](15," \xa0 "),r["\u0275\u0275elementStart"](16,"label"),r["\u0275\u0275elementStart"](17,"input",6),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](18," Receipt #"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](19," \xa0 "),r["\u0275\u0275template"](20,v,3,1,"label",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](21,y,6,1,"form",8),r["\u0275\u0275template"](22,b,12,3,"form",8),r["\u0275\u0275template"](23,x,36,3,"form",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"div",2),r["\u0275\u0275elementStart"](25,"div",9),r["\u0275\u0275elementStart"](26,"div",10),r["\u0275\u0275elementStart"](27,"div",11),r["\u0275\u0275elementStart"](28,"em"),r["\u0275\u0275text"](29,"Click on an item to view details/print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"div",12),r["\u0275\u0275template"](31,S,1,0,"app-loading",7),r["\u0275\u0275template"](32,E,4,0,"span",7),r["\u0275\u0275elementStart"](33,"div",13),r["\u0275\u0275element"](34,"app-export-to-excel",14),r["\u0275\u0275template"](35,w,3,1,"button",15),r["\u0275\u0275elementStart"](36,"ag-grid-angular",16,17),r["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("selectionChanged",(function(e){return t.onSelectionChanged(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](38,"div",9),r["\u0275\u0275elementStart"](39,"div",10),r["\u0275\u0275elementStart"](40,"div",11),r["\u0275\u0275elementStart"](41,"b"),r["\u0275\u0275text"](42),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](43," \xa0 "),r["\u0275\u0275template"](44,C,8,2,"div",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](45,"div",12),r["\u0275\u0275template"](46,k,1,0,"app-loading",7),r["\u0275\u0275template"](47,I,2,0,"b",7),r["\u0275\u0275template"](48,M,1,6,"app-sales-history",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](49,"div",19),r["\u0275\u0275elementStart"](50,"div"),r["\u0275\u0275elementStart"](51,"div"),r["\u0275\u0275elementStart"](52,"span",20),r["\u0275\u0275text"](53),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](54,"span",21),r["\u0275\u0275text"](55),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](56,"br"),r["\u0275\u0275elementStart"](57,"div",22),r["\u0275\u0275elementStart"](58,"b"),r["\u0275\u0275text"](59),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](60,"br"),r["\u0275\u0275text"](61),r["\u0275\u0275element"](62,"br"),r["\u0275\u0275text"](63),r["\u0275\u0275element"](64,"br"),r["\u0275\u0275text"](65),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](66,"br"),r["\u0275\u0275elementStart"](67,"b"),r["\u0275\u0275text"](68,"Cashier:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](69),r["\u0275\u0275element"](70,"hr"),r["\u0275\u0275elementStart"](71,"table",23),r["\u0275\u0275elementStart"](72,"thead"),r["\u0275\u0275elementStart"](73,"tr"),r["\u0275\u0275elementStart"](74,"th"),r["\u0275\u0275text"](75,"Item Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](76,"th"),r["\u0275\u0275text"](77,"Qty"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](78,"th"),r["\u0275\u0275text"](79,"Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](80,"th"),r["\u0275\u0275text"](81,"Ext. Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](82,"tbody"),r["\u0275\u0275template"](83,D,9,4,"tr",24),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](84,"br"),r["\u0275\u0275element"](85,"br"),r["\u0275\u0275elementStart"](86,"div"),r["\u0275\u0275elementStart"](87,"span",21),r["\u0275\u0275text"](88),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](89,"br"),r["\u0275\u0275elementStart"](90,"span",21),r["\u0275\u0275text"](91),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](92,"br"),r["\u0275\u0275elementStart"](93,"span",21),r["\u0275\u0275text"](94,"Local Sales Tax : 0% Tax: + 0.00 "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](95,"br"),r["\u0275\u0275elementStart"](96,"b",21),r["\u0275\u0275text"](97),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](98,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](99,"div",22),r["\u0275\u0275text"](100),r["\u0275\u0275element"](101,"br"),r["\u0275\u0275elementStart"](102,"b",23),r["\u0275\u0275text"](103),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](104,"br"),r["\u0275\u0275element"](105,"ngx-barcode",25),r["\u0275\u0275element"](106,"br"),r["\u0275\u0275elementStart"](107,"b",22),r["\u0275\u0275text"](108,"Thanks for shopping with us!"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](109,"div",22),r["\u0275\u0275text"](110," Druglane Pharmacy POS Software - 0207085244 "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](111,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](112,"app-select-branch",26),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setBranches(e)})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](13),r["\u0275\u0275property"]("ngModel",t.search_by),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",t.search_by),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","admin"!=t.user_type),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","receipt"==t.search_by),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","product"==t.search_by),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","dates"==t.search_by),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("ngIf",t.receipts_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.receipts_error),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("objects",t.receipts),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.can_delete&&"admin"!=t.user_type),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("rowData",t.receipts)("columnDefs",t.columnDefs)("defaultColDef",t.defaultColDef),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.is_loaded),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"]("",t.selected_time," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"]("",t.company_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",t.company_address," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.digital_address," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" ",t.cashier," "),r["\u0275\u0275advance"](14),r["\u0275\u0275property"]("ngForOf",t.objects),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" Subtotal: ",(1*t.invoice_total).toFixed(2)," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"](" Discount: ",(1*t.receipt_discount).toFixed(2)," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" RECEIPT TOTAL: ",(1*t.receipt_discounted_total).toFixed(2)," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate2"](" ",t.receipt_method," GHC ",t.receipt_amount_paid," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"](" Change: ",(t.receipt_amount_paid-t.receipt_discounted_total).toFixed(2)," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("bc-height",35)("bc-font-size",13)("bc-value",t.selected_code)("bc-display-value",!0),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("type","emit"))},directives:[c.k,c.b,c.e,c.h,i.j,m.a,p.AgGridAngular,i.i,u.a,h.a,c.f,c.g,c.l,c.m,c.i,c.n,f.a,_.a],styles:[""]}),V)}],R=((j=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[a.f.forChild(F)],a.f]}),j),T=n("nEHF"),A=n("rNAZ"),q=((N=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[i.b,R,T.a,A.a]]}),N)},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i=n("fXoL"),a=function e(){_classCallCheck(this,e)},r=n("c92J"),o=n("ccyI"),l=n("1VJT"),s=n("ofXK"),d=n("3Pt+"),c=n("hiAm");function m(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function p(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function h(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,m,2,0,"button",4),i["\u0275\u0275template"](2,p,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).selected_item=e}))("change",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,u,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",a.objects)}}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,h,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_loaded)}}function _(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function g(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"](3).add(e)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",a.name," ")}}function y(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,v,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",n.objects)}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,_,1,0,"app-loading",3),i["\u0275\u0275template"](3,g,3,0,"div",3),i["\u0275\u0275template"](4,y,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_finished_search)}}var x,S=((x=function(){function e(t,n,a){_classCallCheck(this,e),this.dbService=t,this.authService=n,this.notify=a,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}},{key:"itemSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}},{key:"itemAdded",value:function(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}},{key:"list",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"getAll",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading();var t="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(t+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(t,this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.onFinish.emit(e.objects),e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"add",value:function(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"addItem",value:function(){var e=this;this.notify.showLoading();var t=window.prompt("Enter name of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("name is required"),!1;var n=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(n))return this.notify.failNotification("Phone number is required"),!1;var i=new FormData;i.append("name",t),i.append("phone",n),this.dbService.postData(i,"admin/saveBranch",this.authService.current_user).subscribe((function(i){if(e.notify.hideLoading(),"-1"===i.status)e.notify.failNotification("Server error. Please try again");else if("-1"===i.status)e.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===i.status)e.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{var r=new a;r.id=i.status,r.name=t,r.phone=n,e.objects.push(r),e.notify.successNotification("Branch added successfully"),e.selected_item=r.id,e.itemSelected()}}),(function(t){e.notify.noConnectionNotification()}))}}]),e}()).\u0275fac=function(e){return new(e||x)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](l.a))},x.\u0275cmp=i["\u0275\u0275defineComponent"]({type:x,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,f,2,1,"span",0),i["\u0275\u0275template"](1,b,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[s.j,d.m,d.e,d.h,s.i,d.i,d.n,c.a],styles:[""]}),x)}}]);