(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{ceHQ:function(e,t,n){"use strict";n.r(t),n.d(t,"OutgoingTransfersModule",(function(){return q}));var i=n("ofXK"),a=n("tyNb"),r=n("mrQn"),s=n("fXoL"),l=n("ccyI"),o=n("c92J"),d=n("1VJT"),c=n("3Pt+"),m=n("n49D"),h=n("nVU4"),p=n("gSie"),u=n("6QD7"),f=n("pEcs"),g=n("hiAm"),x=n("rfqN");const _=["receipt_grid"];function b(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"form",27,28),s["\u0275\u0275listener"]("ngSubmit",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().searchReceipts()})),s["\u0275\u0275elementStart"](2,"label"),s["\u0275\u0275text"](3,"Search receipt #"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"input",29),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().search_code=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"input",30),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngModel",e.search_code)}}function v(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"app-select-branch",31),s["\u0275\u0275listener"]("onFinish",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().branchSelected(t)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"button",32),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().getByBranch()})),s["\u0275\u0275text"](3,"Get Data"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("type","select"))}function S(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"form",27,28),s["\u0275\u0275listener"]("ngSubmit",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().getReceipts()})),s["\u0275\u0275elementStart"](2,"label"),s["\u0275\u0275text"](3,"Select period"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"select",33),s["\u0275\u0275listener"]("change",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().setDates()}))("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().quick_option=t})),s["\u0275\u0275elementStart"](5,"option",34),s["\u0275\u0275text"](6,"Today"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"option",35),s["\u0275\u0275text"](8,"Yesterday"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"option",36),s["\u0275\u0275text"](10,"This Week"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"option",37),s["\u0275\u0275text"](12,"Last Week"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"option",38),s["\u0275\u0275text"](14,"This Month"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"option",39),s["\u0275\u0275text"](16,"Last Month"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"option",40),s["\u0275\u0275text"](18,"1st quarter"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"option",41),s["\u0275\u0275text"](20,"2nd quarter"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"option",42),s["\u0275\u0275text"](22,"3rd quarter"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"option",43),s["\u0275\u0275text"](24,"4th quarter"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](25,"option",44),s["\u0275\u0275text"](26,"This Year"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"option",45),s["\u0275\u0275text"](28,"Last Year"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"label"),s["\u0275\u0275text"](30,"Start Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"input",46),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().start_date=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"label"),s["\u0275\u0275text"](33,"End Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](34,"input",47),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().end_date=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](35,"input",48),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngModel",e.quick_option),s["\u0275\u0275advance"](27),s["\u0275\u0275property"]("ngModel",e.start_date),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngModel",e.end_date)}}function y(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275elementStart"](1,"label"),s["\u0275\u0275text"](2,"Select status"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"select",49),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().status=t})),s["\u0275\u0275elementStart"](4,"option"),s["\u0275\u0275text"](5,"All"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"option"),s["\u0275\u0275text"](7,"Pending"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"option"),s["\u0275\u0275text"](9,"Received"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"option"),s["\u0275\u0275text"](11,"Rejected"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngModel",e.status)}}function E(e,t){1&e&&s["\u0275\u0275element"](0,"app-loading")}function w(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1,"Connection error. "),s["\u0275\u0275elementStart"](2,"button",50),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().getReceipts()})),s["\u0275\u0275text"](3,"Try Again"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}function C(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",51),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().deleteSelected()})),s["\u0275\u0275element"](1,"i",52),s["\u0275\u0275text"](2," Delete Selected "),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function I(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275text"](1),s["\u0275\u0275elementStart"](2,"button",53),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().print()})),s["\u0275\u0275element"](3,"i",54),s["\u0275\u0275text"](4," Print"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.selected_time," ")}}function D(e,t){1&e&&s["\u0275\u0275element"](0,"app-loading")}function M(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"b"),s["\u0275\u0275text"](1,"Click on a receipt number to view/return items"),s["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e&&s["\u0275\u0275element"](0,"app-transfer-history",55),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("offset",e.offset)("objects",e.objects)}}function N(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.product_name),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.quantity),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("",e.expiry," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.price),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("",(e.quantity*e.price).toFixed(2)," ")}}const R=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a){this.authService=e,this.dbService=t,this.notify=n,this.router=i,this.ar=a,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="this_month",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.search_by="dates",this.title="",this.selected_items=[],this.columnDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,checkboxSelection:!1},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Invoice",field:"code",sortable:!0,filter:!0},{headerName:"Receiving Branch",field:"recipient_name",sortable:!0,filter:!0},{headerName:"Num. Items",field:"num_of_items",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"By",field:"display_name",sortable:!0,filter:!0}],this.status="All",-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome()),this.dbService.setTitle("Outgoing Transfers"),this.dbService.getThisWeek(),this.dbService.getThisYear(),this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),this.company_address=e.current_user.company_address,this.company_phone=e.current_user.company_phone,this.company_name=e.current_user.company_name,this.digital_address=e.current_user.digital_address,-1==this.authService.current_user.permissions.indexOf("Delete Transfers")&&(this.can_delete=!1),this.defaultColDef={resizable:!0}}ngOnInit(){this.setDates(),this.getReceipts()}ngOnChanges(){this.getReceipts()}ngAfterViewInit(){let e=this;this.receipt_grid.selectionChanged.subscribe(t=>{e.selected_items=[];const n=this.receipt_grid.api.getSelectedNodes().map(e=>e.data);n.map(t=>{let n=new r.a;n.id=t.id,n.invoice=t.invoice,n.code=t.code,n.date=t.date,n.sender_name=t.sender_name,n.sender_id=t.sender_id,e.selected_items.push(n)}),n.length>0?this.getSales(n[n.length-1]):(this.is_loaded=!1,this.selected_code="")})}onGridReady(e){this.gridApi=e.api}onSelectionChange(e){let t=this.gridApi.getSelectedRows();this.selected_items=t,this.selected_items.length>0?this.getSales(this.selected_items[this.selected_items.length-1]):(this.is_loaded=!1,this.selected_code="")}getSales(e){this.selected_code=e.code,this.receiver_name=e.recipient_name,this.cashier=e.display_name,this.selected_time=e.created_on,this.is_loading=!0,this.dbService.getData("transfer/getDetails?code="+e.code,this.authService.current_user).subscribe(t=>{this.objects=t.data,this.receiver_address=t.receiver_address,this.receiver_digital_address=t.receiver_digital_address,this.receiver_phone=t.receiver_phone;var n=0;this.objects.map(e=>{n+=e.quantity*e.price}),this.invoice_total=n,this.receipt_amount_paid=e.amount_paid,this.offset=0,this.is_loaded=!0,this.is_loading=!1},e=>{this.notify.failNotification("Unable to get transfers")})}branchSelected(e){this.branch_id=e.id,this.branch_name=e.name}getReceipts(){this.title=`'${this.start_date} - ${this.end_date}'`,this.receipts_loading=!0;let e="transfer/findSentReceiptsBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date+"&status="+this.status;this.dbService.getData(e,this.authService.current_user).subscribe(t=>{this.receipts=t.data,this.offset=0,this.selected_code=null,this.url=e,this.url_has_params="yes",this.receipts_loaded=!0,this.receipts_loading=!1,this.receipts_error=!1,this.is_loaded=!1,this.is_loading=!1},e=>{this.receipts_error=!0,this.notify.failNotification("Unable to get transfers")})}searchReceipts(){this.receipts_loading=!0,this.title=`'${this.search_code}'`;let e="transfer/findSentReceiptsBetweenDates?code="+this.search_code;this.dbService.getData(e,this.authService.current_user).subscribe(t=>{this.receipts=t.data,this.total=t.total,this.offset=0,this.selected_code=null,this.url=e,this.url_has_params="yes",this.receipts_loaded=!0,this.receipts_loading=!1,this.receipts_error=!1,this.is_loaded=!1,this.is_loading=!1},e=>{this.receipts_error=!0,this.notify.failNotification("Unable to get sales")})}getByBranch(){this.title=`By branch - ${this.branch_name}`,this.receipts_loading=!0;let e="transfer/findReceiptsByReceivingBranch?branch="+this.branch_id;this.dbService.getData(e,this.authService.current_user).subscribe(t=>{this.receipts=t.data,this.offset=0,this.selected_code=null,this.url=e,this.url_has_params="yes",this.receipts_loaded=!0,this.receipts_loading=!1,this.receipts_error=!1,this.is_loaded=!1,this.is_loading=!1},e=>{this.receipts_error=!0,this.notify.failNotification("Unable to get data")})}formatTotal(e){return parseFloat(e).toFixed(2)}filter(e){this.router.navigate(["/transfers"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}paginationFinished(e){e.data.map(e=>{e.createdAt=null==e.createdAt||null==e.createdAt?null:this.dbService.getToday(null,e.createdAt)}),this.objects=e.data,this.offset=e.offset}goBack(){window.history.back()}print(){let e,t;e=document.getElementById("invoice").innerHTML,t=window.open("","_blank","top=0,left=0,height=100%,width=auto"),t.document.open(),t.document.write(`\n      <html>\n      <head>\n      <title>Invoice</title>\n      <style>\n      body{\n        font-size: 13px;\n      }\n          #invoice { page-break-after: always; }\n#invoice:last-child { page-break-after: avoid; }\n\n\ntable{\n    width: 100%;\n    border: 1px solid #e9ecef;\n    font-size: 13px !important;\n}\n\n.small-margin{\n  margin-bottom: 10px;\n}\n\n\n.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n       .center{\n         text-align:center\n       }\n       .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n       .text-center{text-align:center!important}\n       @media (min-width:576px){.text-sm-left{text-align:left!important}\n       .text-sm-right{text-align:right!important}\n       .text-sm-center{text-align:center!important}}\n       @media (min-width:768px){.text-md-left{text-align:left!important}\n       .text-md-right{text-align:right!important}\n       .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n       .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n       </style>\n    </head>\n    <body onload="window.print();"><div id='invoice'>${e}</div>\n    \n    <script>\n           window.onafterprint = function(){\n            window.close();\n          }\n           <\/script>\n           </body>\n      </html>`),t.document.close()}setDates(){let e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date,this.getReceipts()}delete(){if(window.confirm("Sure you want to delete this receipt? You cannot undo this")){const e=new FormData;this.notify.showLoading(),e.append("code",this.selected_code),this.dbService.postData(e,"transfer/deleteByCode",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:this.getReceipts(),this.notify.showNotification("receipt deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}deleteSelected(){if(window.confirm("Sure you want to delete the selected receipts? You cannot undo this")){const e=new FormData;this.notify.showLoading();let t=[],n=[],i=[];this.selected_items.map(e=>{t.push(e.id),n.push(e.invoice),i.push(e.code)}),e.append("id",t.toString()),e.append("invoices",n.toString()),e.append("codes",i.toString()),this.dbService.postData(e,"transfer/deleteItem",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:this.getReceipts(),this.notify.showNotification("receipts deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](a.c),s["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-outgoing-transfers"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](_,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},features:[s["\u0275\u0275NgOnChangesFeature"]],decls:110,vars:37,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],[1,"radio-inline"],["type","radio","name","search_by","value","dates",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","receipt",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","vendor",3,"ngModel","ngModelChange"],["ngNativeValidate","",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table-responsive","fixed-length"],["class","btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],[3,"objects"],["rowSelection","single",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","gridReady"],["receipt_grid",""],[3,"offset","objects",4,"ngIf"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[4,"ngFor","ngForOf"],[3,"bc-value","bc-height","bc-font-size","bc-display-value"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","required","","name","search_code",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Search",1,"btn","btn-sm","btn-success"],[3,"type","onFinish"],[1,"btn","btn-sm","btn-success",3,"click"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Get Data",1,"btn","btn-sm","btn-success"],["name","status",3,"ngModel","ngModelChange"],[3,"click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[1,"fa","fa-remove"],[1,"btn","btn-info",3,"click"],[1,"fa","fa-print"],[3,"offset","objects"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"section",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275elementStart"](4,"h5"),s["\u0275\u0275text"](5,"Outgoing Transfer History"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",4),s["\u0275\u0275elementStart"](7,"div",5),s["\u0275\u0275elementStart"](8,"label"),s["\u0275\u0275text"](9,"Search by Dates "),s["\u0275\u0275elementStart"](10,"input",6),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](11," \xa0 "),s["\u0275\u0275elementStart"](12,"label"),s["\u0275\u0275text"](13,"Search by Invoice/receipt # "),s["\u0275\u0275elementStart"](14,"input",7),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](15," \xa0 "),s["\u0275\u0275elementStart"](16,"label"),s["\u0275\u0275text"](17,"Search by Receiving Branch "),s["\u0275\u0275elementStart"](18,"input",8),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](19,"hr"),s["\u0275\u0275template"](20,b,6,1,"form",9),s["\u0275\u0275template"](21,v,4,1,"div",10),s["\u0275\u0275template"](22,S,36,3,"form",9),s["\u0275\u0275template"](23,y,12,1,"span",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"div",2),s["\u0275\u0275elementStart"](25,"div",11),s["\u0275\u0275elementStart"](26,"div",12),s["\u0275\u0275elementStart"](27,"div",13),s["\u0275\u0275elementStart"](28,"h5"),s["\u0275\u0275text"](29),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"em"),s["\u0275\u0275text"](31,"Click on an item to view details/print"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"div",14),s["\u0275\u0275template"](33,E,1,0,"app-loading",10),s["\u0275\u0275template"](34,w,4,0,"span",10),s["\u0275\u0275elementStart"](35,"div",15),s["\u0275\u0275template"](36,C,3,1,"button",16),s["\u0275\u0275element"](37,"app-export-to-excel",17),s["\u0275\u0275elementStart"](38,"ag-grid-angular",18,19),s["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](40,"div",11),s["\u0275\u0275elementStart"](41,"div",12),s["\u0275\u0275elementStart"](42,"div",13),s["\u0275\u0275elementStart"](43,"b"),s["\u0275\u0275text"](44),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](45," \xa0 "),s["\u0275\u0275template"](46,I,5,1,"div",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](47,"div",14),s["\u0275\u0275template"](48,D,1,0,"app-loading",10),s["\u0275\u0275template"](49,M,2,0,"b",10),s["\u0275\u0275template"](50,k,1,2,"app-transfer-history",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](51,"div",21),s["\u0275\u0275elementStart"](52,"div"),s["\u0275\u0275elementStart"](53,"div"),s["\u0275\u0275elementStart"](54,"span",22),s["\u0275\u0275text"](55),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](56,"span",23),s["\u0275\u0275text"](57),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](58,"br"),s["\u0275\u0275elementStart"](59,"div",24),s["\u0275\u0275element"](60,"app-receipt-logo"),s["\u0275\u0275elementStart"](61,"h4"),s["\u0275\u0275text"](62,"TRANSFER INVOICE "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](63,"b"),s["\u0275\u0275text"](64,"FROM:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](65,"b"),s["\u0275\u0275text"](66),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](67,"br"),s["\u0275\u0275text"](68),s["\u0275\u0275element"](69,"br"),s["\u0275\u0275text"](70),s["\u0275\u0275element"](71,"br"),s["\u0275\u0275text"](72),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](73,"div",24),s["\u0275\u0275elementStart"](74,"b"),s["\u0275\u0275text"](75,"TO:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](76,"b"),s["\u0275\u0275text"](77),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](78,"br"),s["\u0275\u0275text"](79),s["\u0275\u0275element"](80,"br"),s["\u0275\u0275text"](81),s["\u0275\u0275element"](82,"br"),s["\u0275\u0275text"](83),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](84,"br"),s["\u0275\u0275elementStart"](85,"b"),s["\u0275\u0275text"](86,"By:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](87),s["\u0275\u0275element"](88,"hr"),s["\u0275\u0275elementStart"](89,"table"),s["\u0275\u0275elementStart"](90,"thead"),s["\u0275\u0275elementStart"](91,"tr"),s["\u0275\u0275elementStart"](92,"th"),s["\u0275\u0275text"](93,"Item"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](94,"th"),s["\u0275\u0275text"](95,"Qty"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](96,"th"),s["\u0275\u0275text"](97,"Expiry"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](98,"th"),s["\u0275\u0275text"](99,"S. Price"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](100,"th"),s["\u0275\u0275text"](101,"Ext. Price"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](102,"tbody"),s["\u0275\u0275template"](103,N,11,5,"tr",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](104,"hr"),s["\u0275\u0275elementStart"](105,"b"),s["\u0275\u0275text"](106),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](107,"br"),s["\u0275\u0275elementStart"](108,"div",24),s["\u0275\u0275element"](109,"ngx-barcode",26),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("ngModel",t.search_by),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngModel",t.search_by),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngModel",t.search_by),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf","receipt"==t.search_by),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf","vendor"==t.search_by),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf","dates"==t.search_by),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf","receipt"!=t.search_by),s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate1"]("",t.title," "),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",t.receipts_loading),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.receipts_error),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.can_delete),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("objects",t.receipts),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("rowData",t.receipts)("columnDefs",t.columnDefs)("defaultColDef",t.defaultColDef),s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.is_loaded),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.is_loading),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.is_loaded),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.is_loaded),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("",t.selected_time," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),s["\u0275\u0275advance"](9),s["\u0275\u0275textInterpolate1"]("",t.company_name," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",t.company_address," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.digital_address," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("",t.receiver_name," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",t.receiver_address," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.receiver_digital_address," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",t.receiver_phone," "),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate1"](" ",t.cashier," "),s["\u0275\u0275advance"](16),s["\u0275\u0275property"]("ngForOf",t.objects),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" Total: ",t.invoice_total.toFixed(2)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("bc-value",t.selected_code)("bc-height",35)("bc-font-size",13)("bc-display-value",!0))},directives:[c.k,c.b,c.e,c.h,i.j,m.a,h.AgGridAngular,p.a,i.i,u.a,c.f,c.g,c.l,f.a,c.m,c.i,c.n,g.a,x.a],styles:[""]}),e})()}];let V=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(R)],a.f]}),e})();var T=n("nEHF"),j=n("wDHj");let q=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,V,T.a,j.a]]}),e})()}}]);