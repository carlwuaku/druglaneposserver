(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{T9EB:function(e,t,n){"use strict";n.r(t),n.d(t,"PaymentsModule",(function(){return T}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("ccyI"),s=n("bgkY"),l=n("c92J"),d=n("1VJT"),c=n("3Pt+"),m=n("n49D"),h=n("6QD7"),p=n("pEcs"),f=n("hiAm"),u=n("nVU4"),g=n("6CxU");const _=["receipt_grid"];function b(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function y(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1,"Connection error. "),r["\u0275\u0275elementStart"](2,"button",50),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().getReceipts()})),r["\u0275\u0275text"](3,"Try Again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function x(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",51),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().delete()})),r["\u0275\u0275element"](1,"i",52),r["\u0275\u0275text"](2," Delete Selected "),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function v(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"ag-grid-angular",53,54),r["\u0275\u0275listener"]("gridReady",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onGridReady(t)}))("selectionChanged",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSelectionChanged(t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("rowData",e.receipts)("columnDefs",e.insuranceDefs)("defaultColDef",e.defaultColDef)}}function S(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"ag-grid-angular",53,54),r["\u0275\u0275listener"]("gridReady",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onGridReady(t)}))("selectionChanged",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSelectionChanged(t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("rowData",e.receipts)("columnDefs",e.creditDefs)("defaultColDef",e.defaultColDef)}}function E(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"div"),r["\u0275\u0275elementStart"](2,"ag-grid-angular",53,54),r["\u0275\u0275listener"]("gridReady",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onGridReady(t)}))("selectionChanged",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSelectionChanged(t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("rowData",e.receipts)("columnDefs",e.momoDefs)("defaultColDef",e.defaultColDef)}}function w(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"ag-grid-angular",53,54),r["\u0275\u0275listener"]("gridReady",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onGridReady(t)}))("selectionChanged",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSelectionChanged(t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("rowData",e.receipts)("columnDefs",e.columnDefs)("defaultColDef",e.defaultColDef)}}function C(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"i",55),r["\u0275\u0275text"](2),r["\u0275\u0275element"](3,"i",56),r["\u0275\u0275text"](4),r["\u0275\u0275elementStart"](5,"button",57),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().print()})),r["\u0275\u0275element"](6,"i",58),r["\u0275\u0275text"](7," Print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.selected_time," | "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.cashier," | ")}}function I(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function D(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"b"),r["\u0275\u0275text"](1,"Click on a receipt number to view/return items"),r["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&r["\u0275\u0275element"](0,"app-sales-history",59),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("payment_method",e.receipt_method)("show_return","admin"!=e.user_type)("receipt",e.selected_code)("offset",e.offset)("objects",e.objects)}}function k(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"td"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"td"),r["\u0275\u0275text"](8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.product.name),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.quantity),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.price),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",(e.quantity*e.price).toFixed(2)," ")}}const M=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,r){this.authService=e,this.socket=t,this.dbService=n,this.notify=i,this.router=a,this.ar=r,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="today",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.selected_items=[],this.payment_method="Cash",this.columnDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,width:200,checkboxSelection:!0},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Method",field:"payment_method",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"Discount",field:"discount",sortable:!0,filter:!0},{headerName:"Cashier",field:"display_name",sortable:!0,filter:!0},{headerName:"Customer",field:"customer",sortable:!0,filter:!0}],this.insuranceDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,width:200,checkboxSelection:!0},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Method",field:"payment_method",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"Discount",field:"discount",sortable:!0,filter:!0},{headerName:"Insurer",field:"insurance_provider",sortable:!0,filter:!0},{headerName:"Member Name",field:"insurance_member_name",sortable:!0,filter:!0},{headerName:"Member Id",field:"insurance_member_id",sortable:!0,filter:!0},{headerName:"Cashier",field:"display_name",sortable:!0,filter:!0},{headerName:"Customer",field:"customer",sortable:!0,filter:!0}],this.momoDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,width:200,checkboxSelection:!0},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Method",field:"payment_method",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"Discount",field:"discount",sortable:!0,filter:!0},{headerName:"Transaction Id",field:"momo_reference",sortable:!0,filter:!0},{headerName:"Cashier",field:"display_name",sortable:!0,filter:!0},{headerName:"Customer",field:"customer",sortable:!0,filter:!0}],this.creditDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,width:200,checkboxSelection:!0},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Method",field:"payment_method",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"Discount",field:"discount",sortable:!0,filter:!0},{headerName:"Creditor",field:"creditor_name",sortable:!0,filter:!0},{headerName:"Amount Paid",field:"credit_paid",sortable:!0,filter:!0},{headerName:"Cashier",field:"display_name",sortable:!0,filter:!0},{headerName:"Customer",field:"customer",sortable:!0,filter:!0}],this.user_type="staff",this.company_id="all",this.branches=[],-1==this.authService.current_user.permissions.indexOf("View Sales History")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.getThisWeek(),this.dbService.getThisYear(),this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),this.company_address=e.current_user.company_address,this.company_phone=e.current_user.company_phone,this.company_name=e.current_user.company_name,this.digital_address=e.current_user.digital_address,-1==this.authService.current_user.permissions.indexOf("Delete Sales Records")&&(this.can_delete=!1),this.defaultColDef={resizable:!0},this.user_type=this.authService.current_user.type,this.parent_company_id=this.authService.current_user.parent_company_id,this.company_id=this.authService.current_user.company_id}ngOnInit(){this.getReceipts()}ngOnChanges(){this.getReceipts()}ngAfterViewInit(){}onGridReady(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}onSelectionChanged(e){const t=this.gridApi.getSelectedRows();if(this.selected_items=t,this.selected_items.length>0){let e=this.selected_items[this.selected_items.length-1];$("#payment_method_detail_modal").modal("show"),this.getSales(e)}else this.is_loaded=!1,this.selected_code=""}getSales(e){this.selected_code=e.code,this.cashier=e.display_name,this.selected_time=e.created_on,this.receipt_method=e.payment_method,this.is_loading=!0,this.dbService.getData("sale/getSaleDetails?code="+e.code+"&company_id="+this.company_id,this.authService.current_user).subscribe(t=>{this.objects=t.data;let n=0;this.objects.map(e=>{n+=e.quantity*e.price}),this.invoice_total=n,this.receipt_amount_paid=e.amount_paid,this.offset=0,this.is_loaded=!0,this.is_loading=!1},e=>{this.notify.failNotification("Unable to get sales")})}getReceipts(){this.receipts_loading=!0;let e="sale/findReceiptsBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date+"&payment_method="+this.payment_method;"admin"==this.user_type&&(e+="&parent_company_id="+this.parent_company_id+"&company_id="+this.company_id),this.dbService.getData(e,this.authService.current_user).subscribe(t=>{this.receipts=t.data,this.total=t.total,this.offset=0,this.selected_code=null,this.url=e,this.url_has_params="yes",this.receipts_loaded=!0,this.receipts_loading=!1,this.receipts_error=!1,this.is_loaded=!1,this.is_loading=!1},e=>{this.receipts_loading=!1,this.receipts_error=!0,this.notify.failNotification("Unable to get sales")})}searchReceipts(){this.receipts_loading=!0;const e="sale/findReceiptsBetweenDates?code="+this.search_code;this.dbService.getData(e,this.authService.current_user).subscribe(t=>{this.receipts=t.data,this.total=t.total,this.offset=0,this.selected_code=null,this.url=e,this.url_has_params="yes",this.receipts_loaded=!0,this.receipts_loading=!1,this.receipts_error=!1,this.is_loaded=!1,this.is_loading=!1},e=>{this.receipts_error=!0,this.receipts_loading=!1,this.notify.failNotification("Unable to get sales")})}formatTotal(e){return parseFloat(e).toFixed(2)}filter(e){this.router.navigate(["/sales"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}paginationFinished(e){e.data.map(e=>{e.createdAt=null==e.createdAt||null==e.createdAt?null:this.dbService.getToday(null,e.createdAt)}),this.objects=e.data,this.offset=e.offset}goBack(){window.history.back()}print(){let e,t;e=document.getElementById("invoice").innerHTML,t=window.open("","_blank","top=0,left=0,height=100%,width=auto"),t.document.open(),t.document.write(`\n      <html>\n        <head>\n          <title>Invoice</title>\n          <style>\n          body{\n            font-size: 13px;\n          }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n           </style>\n        </head>\n    <body onload="window.print();"><div id='invoice'>${e}</div>\n    <script>\n           window.onafterprint = function(){\n            window.close();\n          }\n           <\/script>\n           </body>\n      </html>`),t.document.close()}setDates(){let e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date,this.getReceipts()}delete(){if(window.confirm("Sure you want to delete this receipt? You cannot undo this")){const e=new FormData;this.notify.showLoading();const t=[];this.selected_items.map(e=>{t.push(e.code)}),e.append("code",t.toString()),this.dbService.postData(e,"sale/deleteByCode",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Sale deleted",event:"sale_deleted"}),this.getReceipts(),this.notify.showNotification("receipt deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}setBranches(e){this.branches=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](a.c),r["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-payments"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](_,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:151,vars:36,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],["ngNativeValidate","",3,"ngSubmit"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["name","payment_method",3,"ngModel","change","ngModelChange"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],[1,"table-responsive","fixed-length"],[3,"objects"],["class","btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["id","payment_method_detail_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[3,"payment_method","show_return","receipt","offset","objects",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[1,""],[4,"ngFor","ngForOf"],[3,"bc-height","bc-font-size","bc-value","bc-display-value"],[3,"type","onFinish"],[3,"click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[1,"fa","fa-remove"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","gridReady","selectionChanged"],["receipt_grid",""],[1,"fa","fa-calendar"],[1,"fa","fa-user"],[1,"btn","btn-info","btn-sm",3,"click"],[1,"fa","fa-print"],[3,"payment_method","show_return","receipt","offset","objects"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"View Sales By Payment Methods "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div"),r["\u0275\u0275elementStart"](8,"form",5),r["\u0275\u0275listener"]("ngSubmit",(function(){return t.getReceipts()})),r["\u0275\u0275elementStart"](9,"label"),r["\u0275\u0275text"](10,"Select period and payment method "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"select",6),r["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),r["\u0275\u0275elementStart"](12,"option",7),r["\u0275\u0275text"](13,"Today"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"option",8),r["\u0275\u0275text"](15,"Yesterday"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"option",9),r["\u0275\u0275text"](17,"This Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"option",10),r["\u0275\u0275text"](19,"Last Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"option",11),r["\u0275\u0275text"](21,"This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"option",12),r["\u0275\u0275text"](23,"Last Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"option",13),r["\u0275\u0275text"](25,"1st quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"option",14),r["\u0275\u0275text"](27,"2nd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"option",15),r["\u0275\u0275text"](29,"3rd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"option",16),r["\u0275\u0275text"](31,"4th quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"option",17),r["\u0275\u0275text"](33,"This Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](34,"option",18),r["\u0275\u0275text"](35,"Last Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](36,"select",19),r["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.payment_method=e})),r["\u0275\u0275elementStart"](37,"option"),r["\u0275\u0275text"](38,"Cash"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](39,"option"),r["\u0275\u0275text"](40,"Mobile Money"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"option"),r["\u0275\u0275text"](42,"Cheque"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"option"),r["\u0275\u0275text"](44,"POS"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](45,"option"),r["\u0275\u0275text"](46,"Credit"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](47,"option"),r["\u0275\u0275text"](48,"Insurance"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](49,"option"),r["\u0275\u0275text"](50,"Other"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](51,"label"),r["\u0275\u0275text"](52,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](53,"input",20),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](54,"label"),r["\u0275\u0275text"](55,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](56,"input",21),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](57,"input",22),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](58,"div",2),r["\u0275\u0275elementStart"](59,"div",23),r["\u0275\u0275elementStart"](60,"div",24),r["\u0275\u0275elementStart"](61,"div",25),r["\u0275\u0275elementStart"](62,"em"),r["\u0275\u0275text"](63,"Click on an item to view details/print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](64,"br"),r["\u0275\u0275text"](65),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](66,"div",26),r["\u0275\u0275template"](67,b,1,0,"app-loading",27),r["\u0275\u0275template"](68,y,4,0,"span",27),r["\u0275\u0275elementStart"](69,"div",28),r["\u0275\u0275element"](70,"app-export-to-excel",29),r["\u0275\u0275template"](71,x,3,1,"button",30),r["\u0275\u0275elementStart"](72,"div",31),r["\u0275\u0275template"](73,v,3,3,"div",32),r["\u0275\u0275template"](74,S,3,3,"div",32),r["\u0275\u0275template"](75,E,4,3,"div",32),r["\u0275\u0275template"](76,w,3,3,"div",33),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](77,"div",34),r["\u0275\u0275elementStart"](78,"div",35),r["\u0275\u0275elementStart"](79,"div",36),r["\u0275\u0275elementStart"](80,"div",37),r["\u0275\u0275elementStart"](81,"b"),r["\u0275\u0275text"](82),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](83," \xa0 "),r["\u0275\u0275template"](84,C,8,2,"div",27),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](85,"div",38),r["\u0275\u0275template"](86,I,1,0,"app-loading",27),r["\u0275\u0275template"](87,D,2,0,"b",27),r["\u0275\u0275template"](88,N,1,5,"app-sales-history",39),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](89,"div",40),r["\u0275\u0275elementStart"](90,"button",41),r["\u0275\u0275text"](91,"Close"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](92,"div",42),r["\u0275\u0275elementStart"](93,"div"),r["\u0275\u0275elementStart"](94,"div"),r["\u0275\u0275elementStart"](95,"span",43),r["\u0275\u0275text"](96),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](97,"span",44),r["\u0275\u0275text"](98),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](99,"br"),r["\u0275\u0275elementStart"](100,"div",45),r["\u0275\u0275elementStart"](101,"b"),r["\u0275\u0275text"](102),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](103,"br"),r["\u0275\u0275text"](104),r["\u0275\u0275element"](105,"br"),r["\u0275\u0275text"](106),r["\u0275\u0275element"](107,"br"),r["\u0275\u0275text"](108),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](109,"br"),r["\u0275\u0275elementStart"](110,"b"),r["\u0275\u0275text"](111,"Cashier:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](112),r["\u0275\u0275element"](113,"hr"),r["\u0275\u0275elementStart"](114,"table",46),r["\u0275\u0275elementStart"](115,"thead"),r["\u0275\u0275elementStart"](116,"tr"),r["\u0275\u0275elementStart"](117,"th"),r["\u0275\u0275text"](118,"Item Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](119,"th"),r["\u0275\u0275text"](120,"Qty"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](121,"th"),r["\u0275\u0275text"](122,"Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](123,"th"),r["\u0275\u0275text"](124,"Ext. Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](125,"tbody"),r["\u0275\u0275template"](126,k,9,4,"tr",47),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](127,"br"),r["\u0275\u0275element"](128,"br"),r["\u0275\u0275elementStart"](129,"div"),r["\u0275\u0275elementStart"](130,"span",44),r["\u0275\u0275text"](131),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](132,"br"),r["\u0275\u0275elementStart"](133,"span",44),r["\u0275\u0275text"](134,"Local Sales Tax : 0% Tax: + 0.00 "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](135,"br"),r["\u0275\u0275elementStart"](136,"b",44),r["\u0275\u0275text"](137),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](138,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](139,"div",45),r["\u0275\u0275text"](140),r["\u0275\u0275element"](141,"br"),r["\u0275\u0275elementStart"](142,"b",46),r["\u0275\u0275text"](143),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](144,"br"),r["\u0275\u0275element"](145,"ngx-barcode",48),r["\u0275\u0275element"](146,"br"),r["\u0275\u0275elementStart"](147,"b",45),r["\u0275\u0275text"](148,"Thanks for shopping with us!"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](149,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](150,"app-select-branch",49),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setBranches(e)})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](11),r["\u0275\u0275property"]("ngModel",t.quick_option),r["\u0275\u0275advance"](25),r["\u0275\u0275property"]("ngModel",t.payment_method),r["\u0275\u0275advance"](17),r["\u0275\u0275property"]("ngModel",t.start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",t.end_date),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"](" Total: ",t.total," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.receipts_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.receipts_error),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("objects",t.receipts),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.can_delete&&"admin"!=t.user_type),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitch",t.payment_method),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","Insurance"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","Credit"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","Mobile Money"),r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.is_loaded),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate1"]("",t.selected_time," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"]("",t.company_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",t.company_address," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.digital_address," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" ",t.cashier," "),r["\u0275\u0275advance"](14),r["\u0275\u0275property"]("ngForOf",t.objects),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" Subtotal: ",t.invoice_total.toFixed(2)," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" RECEIPT TOTAL: ",t.invoice_total.toFixed(2)," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate2"](" ",t.receipt_method," GHC ",t.receipt_amount_paid," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"](" Change: ",(t.receipt_amount_paid-t.invoice_total).toFixed(2)," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("bc-height",35)("bc-font-size",13)("bc-value",t.selected_code)("bc-display-value",!0),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("type","emit"))},directives:[c.f,c.g,c.m,c.e,c.h,c.i,c.n,c.b,i.j,m.a,i.k,i.l,i.m,i.i,h.a,p.a,f.a,u.AgGridAngular,g.a],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(M)],a.f]}),e})();var V=n("nEHF"),F=n("rNAZ");let T=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,j,V.a,F.a]]}),e})()},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("fXoL");class a{constructor(){}}var r=n("c92J"),o=n("ccyI"),s=n("1VJT"),l=n("ofXK"),d=n("3Pt+"),c=n("hiAm");function m(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function h(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",e.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function f(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,m,2,0,"button",4),i["\u0275\u0275template"](2,h,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).selected_item=t}))("change",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,p,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.objects)}}function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,f,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.is_loaded)}}function g(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function _(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).add(n)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",e.name," ")}}function y(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,b,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.objects)}}function x(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,g,1,0,"app-loading",3),i["\u0275\u0275template"](3,_,3,0,"div",3),i["\u0275\u0275template"](4,y,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",e.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.is_finished_search)}}let v=(()=>{class e{constructor(e,t,n){this.dbService=e,this.authService=t,this.notify=n,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}ngOnInit(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}itemSelected(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}itemAdded(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}list(){this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status||(this.objects=e.data,this.is_loaded=!0)},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}getAll(){this.is_loaded=!1,this.notify.showLoading();let e="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(e+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(e,this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status||(this.objects=e.data,this.onFinish.emit(this.objects),this.is_loaded=!0)},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}add(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}select(e){this.selected=e,this.onFinish.emit(e)}addItem(){this.notify.showLoading();let e=window.prompt("Enter name of branch");if(this.dbService.isEmpty(e))return this.notify.failNotification("name is required"),!1;let t=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("Phone number is required"),!1;let n=new FormData;n.append("name",e),n.append("phone",t),this.dbService.postData(n,"admin/saveBranch",this.authService.current_user).subscribe(n=>{if(this.notify.hideLoading(),"-1"===n.status)this.notify.failNotification("Server error. Please try again");else if("-1"===n.status)this.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===n.status)this.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{let i=new a;i.id=n.status,i.name=e,i.phone=t,this.objects.push(i),this.notify.successNotification("Branch added successfully"),this.selected_item=i.id,this.itemSelected()}},e=>{this.notify.noConnectionNotification()})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,u,2,1,"span",0),i["\u0275\u0275template"](1,x,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[l.j,d.m,d.e,d.h,l.i,d.i,d.n,c.a],styles:[""]}),e})()}}]);