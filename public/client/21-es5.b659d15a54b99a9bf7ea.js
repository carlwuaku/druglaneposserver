function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ceHQ:function(e,t,n){"use strict";n.r(t),n.d(t,"OutgoingTransfersModule",(function(){return A}));var a=n("ofXK"),i=n("tyNb"),r=n("mrQn"),o=n("fXoL"),s=n("ccyI"),l=n("c92J"),d=n("1VJT"),c=n("3Pt+"),m=n("n49D"),h=n("nVU4"),u=n("6QD7"),f=n("pEcs"),p=n("hiAm"),v=n("rfqN"),g=["receipt_grid"];function b(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"form",27,28),o["\u0275\u0275listener"]("ngSubmit",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().searchReceipts()})),o["\u0275\u0275elementStart"](2,"label"),o["\u0275\u0275text"](3,"Search receipt #"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"input",29),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().search_code=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](5,"input",30),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngModel",a.search_code)}}function _(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275elementStart"](1,"app-select-branch",31),o["\u0275\u0275listener"]("onFinish",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().branchSelected(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](2,"button",32),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().getByBranch()})),o["\u0275\u0275text"](3,"Get Data"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("type","select"))}function x(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"form",27,28),o["\u0275\u0275listener"]("ngSubmit",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().getReceipts()})),o["\u0275\u0275elementStart"](2,"label"),o["\u0275\u0275text"](3,"Select period"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"select",33),o["\u0275\u0275listener"]("change",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().setDates()}))("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().quick_option=e})),o["\u0275\u0275elementStart"](5,"option",34),o["\u0275\u0275text"](6,"Today"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"option",35),o["\u0275\u0275text"](8,"Yesterday"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"option",36),o["\u0275\u0275text"](10,"This Week"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"option",37),o["\u0275\u0275text"](12,"Last Week"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"option",38),o["\u0275\u0275text"](14,"This Month"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"option",39),o["\u0275\u0275text"](16,"Last Month"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"option",40),o["\u0275\u0275text"](18,"1st quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"option",41),o["\u0275\u0275text"](20,"2nd quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"option",42),o["\u0275\u0275text"](22,"3rd quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"option",43),o["\u0275\u0275text"](24,"4th quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"option",44),o["\u0275\u0275text"](26,"This Year"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"option",45),o["\u0275\u0275text"](28,"Last Year"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"label"),o["\u0275\u0275text"](30,"Start Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](31,"input",46),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().start_date=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"label"),o["\u0275\u0275text"](33,"End Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"input",47),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().end_date=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](35,"input",48),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngModel",a.quick_option),o["\u0275\u0275advance"](27),o["\u0275\u0275property"]("ngModel",a.start_date),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngModel",a.end_date)}}function y(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275elementStart"](1,"label"),o["\u0275\u0275text"](2,"Select status"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"select",49),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().status=e})),o["\u0275\u0275elementStart"](4,"option"),o["\u0275\u0275text"](5,"All"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"option"),o["\u0275\u0275text"](7,"Pending"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"option"),o["\u0275\u0275text"](9,"Received"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"option"),o["\u0275\u0275text"](11,"Rejected"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngModel",a.status)}}function S(e,t){1&e&&o["\u0275\u0275element"](0,"app-loading")}function w(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1,"Connection error. "),o["\u0275\u0275elementStart"](2,"button",50),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().getReceipts()})),o["\u0275\u0275text"](3,"Try Again"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function E(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"button",51),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().deleteSelected()})),o["\u0275\u0275element"](1,"i",52),o["\u0275\u0275text"](2," Delete Selected "),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("disabled",a.selected_items.length<1)}}function D(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275text"](1),o["\u0275\u0275elementStart"](2,"button",53),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().print()})),o["\u0275\u0275element"](3,"i",54),o["\u0275\u0275text"](4," Print"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",a.selected_time," ")}}function k(e,t){1&e&&o["\u0275\u0275element"](0,"app-loading")}function C(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"b"),o["\u0275\u0275text"](1,"Click on a receipt number to view/return items"),o["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&o["\u0275\u0275element"](0,"app-transfer-history",55),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("offset",n.offset)("objects",n.objects)}}function M(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"td"),o["\u0275\u0275text"](10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.product_name),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.quantity),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",n.expiry," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.price),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",(n.quantity*n.price).toFixed(2)," ")}}var N,T,j,V=[{path:"",component:(N=function(){function e(t,n,a,i,r){_classCallCheck(this,e),this.authService=t,this.dbService=n,this.notify=a,this.router=i,this.ar=r,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="this_month",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.search_by="dates",this.title="",this.selected_items=[],this.columnDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,checkboxSelection:!1},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Invoice",field:"code",sortable:!0,filter:!0},{headerName:"Receiving Branch",field:"recipient_name",sortable:!0,filter:!0},{headerName:"Status",field:"status",sortable:!0,filter:!0,width:50},{headerName:"Num. Items",field:"num_of_items",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"By",field:"display_name",sortable:!0,filter:!0}],this.status="All",-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Outgoing Transfers"),this.dbService.getThisWeek(),this.dbService.getThisYear(),this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),this.company_address=t.current_user.company_address,this.company_phone=t.current_user.company_phone,this.company_name=t.current_user.company_name,this.digital_address=t.current_user.digital_address,-1==this.authService.current_user.permissions.indexOf("Delete Transfers")&&(this.can_delete=!1),this.defaultColDef={resizable:!0}}return _createClass(e,[{key:"ngOnInit",value:function(){this.setDates(),this.getReceipts()}},{key:"ngOnChanges",value:function(){this.getReceipts()}},{key:"ngAfterViewInit",value:function(){var e=this,t=this;this.receipt_grid.selectionChanged.subscribe((function(n){t.selected_items=[];var a=e.receipt_grid.api.getSelectedNodes().map((function(e){return e.data}));a.map((function(e){var n=new r.a;n.id=e.id,n.invoice=e.invoice,n.code=e.code,n.date=e.date,n.sender_name=e.sender_name,n.sender_id=e.sender_id,t.selected_items.push(n)})),a.length>0?e.getSales(a[a.length-1]):(e.is_loaded=!1,e.selected_code="")}))}},{key:"onGridReady",value:function(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}},{key:"onSelectionChange",value:function(e){var t=this.gridApi.getSelectedRows();this.selected_items=t,this.selected_items.length>0?this.getSales(this.selected_items[this.selected_items.length-1]):(this.is_loaded=!1,this.selected_code="")}},{key:"getSales",value:function(e){var t=this;this.selected_code=e.code,this.receiver_name=e.recipient_name,this.cashier=e.display_name,this.selected_time=e.created_on,this.is_loading=!0,this.dbService.getData("transfer/getDetails?code="+e.code,this.authService.current_user).subscribe((function(n){t.objects=n.data;var a=0;t.objects.map((function(e){a+=e.quantity*e.price})),t.invoice_total=a,t.receipt_amount_paid=e.amount_paid,t.offset=0,t.is_loaded=!0,t.is_loading=!1}),(function(e){t.notify.failNotification("Unable to get transfers")}))}},{key:"branchSelected",value:function(e){this.branch_id=e.id,this.branch_name=e.name}},{key:"getReceipts",value:function(){var e=this;this.title="'".concat(this.start_date," - ").concat(this.end_date,"'"),this.receipts_loading=!0;var t="transfer/findSentReceiptsBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date+"&status="+this.status;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.notify.failNotification("Unable to get transfers")}))}},{key:"searchReceipts",value:function(){var e=this;this.receipts_loading=!0,this.title="'".concat(this.search_code,"'");var t="transfer/findSentReceiptsBetweenDates?code="+this.search_code;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.total=n.total,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.notify.failNotification("Unable to get sales")}))}},{key:"getByBranch",value:function(){var e=this;this.title="By branch - ".concat(this.branch_name),this.receipts_loading=!0;var t="transfer/findReceiptsByBranch?branch="+this.branch_id;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.notify.failNotification("Unable to get data")}))}},{key:"formatTotal",value:function(e){return parseFloat(e).toFixed(2)}},{key:"filter",value:function(e){this.router.navigate(["/transfers"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}},{key:"paginationFinished",value:function(e){var t=this;e.data.map((function(e){e.createdAt=null==e.createdAt||null==e.createdAt?null:t.dbService.getToday(null,e.createdAt)})),this.objects=e.data,this.offset=e.offset}},{key:"goBack",value:function(){window.history.back()}},{key:"print",value:function(){var e,t;e=document.getElementById("invoice").innerHTML,(t=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),t.document.write("\n      <html>\n      <head>\n      <title>Invoice</title>\n      <style>\n      body{\n        font-size: 13px;\n      }\n          #invoice { page-break-after: always; }\n#invoice:last-child { page-break-after: avoid; }\n\n\ntable{\n    width: 100%;\n    border: 1px solid #e9ecef;\n    font-size: 13px !important;\n}\n\n.small-margin{\n  margin-bottom: 10px;\n}\n\n\n.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n       .center{\n         text-align:center\n       }\n       .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n       .text-center{text-align:center!important}\n       @media (min-width:576px){.text-sm-left{text-align:left!important}\n       .text-sm-right{text-align:right!important}\n       .text-sm-center{text-align:center!important}}\n       @media (min-width:768px){.text-md-left{text-align:left!important}\n       .text-md-right{text-align:right!important}\n       .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n       .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n       </style>\n    </head>\n    <body onload=\"window.print();window.close()\"><div id='invoice'>".concat(e,"</div></body>\n      </html>")),t.document.close()}},{key:"setDates",value:function(){var e=this.dbService.getWeekNumber(this.dbService.getToday()),t=this.dbService.getThisYear(),n=t-1,a=this.dbService.getToday("month"),i=parseInt(a)-1;switch(this.quick_option){case"today":this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday();break;case"yesterday":this.start_date=this.dbService.formatDate(this.dbService.addDaystoDate(-1,this.dbService.getToday())),this.end_date=this.dbService.formatDate(this.dbService.addDaystoDate(-1,this.dbService.getToday()));break;case"this_week":this.start_date=this.dbService.formatDate(this.dbService.getFirstDayOfWeek(e,t)),this.end_date=this.dbService.formatDate(this.dbService.addDaystoDate(6,this.start_date));break;case"last_week":this.start_date=this.dbService.formatDate(this.dbService.getFirstDayOfWeek(e-1,t)),this.end_date=this.dbService.formatDate(this.dbService.addDaystoDate(6,this.start_date));break;case"this_month":var r=this.dbService.getLastDayOfMonth(a);this.start_date=this.dbService.formatDate(new Date(t+"-"+a+"-01")),this.end_date=this.dbService.formatDate(new Date(t+"-"+a+"-"+r));break;case"last_month":var o=this.dbService.getLastDayOfMonth(i);this.start_date=this.dbService.formatDate(new Date(t+"-"+i+"-01")),this.end_date=this.dbService.formatDate(new Date(t+"-"+i+"-"+o));break;case"first_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-01-01")),this.end_date=this.dbService.formatDate(new Date(t+"-03-31"));break;case"second_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-04-01")),this.end_date=this.dbService.formatDate(new Date(t+"-06-30"));break;case"third_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-07-01")),this.end_date=this.dbService.formatDate(new Date(t+"-09-30"));break;case"last_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-10-01")),this.end_date=this.dbService.formatDate(new Date(t+"-12-31"));break;case"this_year":this.start_date=this.dbService.formatDate(new Date(t+"-01-01")),this.end_date=this.dbService.formatDate(new Date(t+"-12-31"));break;case"last_year":this.start_date=this.dbService.formatDate(new Date(n+"-01-01")),this.end_date=this.dbService.formatDate(new Date(n+"-12-31"))}this.getReceipts()}},{key:"delete",value:function(){var e=this;if(window.confirm("Sure you want to delete this receipt? You cannot undo this")){var t=new FormData;this.notify.showLoading(),t.append("code",this.selected_code),this.dbService.postData(t,"transfer/deleteByCode",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.getReceipts(),e.notify.showNotification("receipt deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}},{key:"deleteSelected",value:function(){var e=this;if(window.confirm("Sure you want to delete the selected receipts? You cannot undo this")){var t=new FormData;this.notify.showLoading();var n=[],a=[],i=[];this.selected_items.map((function(e){n.push(e.id),a.push(e.invoice),i.push(e.code)})),t.append("id",n.toString()),t.append("invoices",a.toString()),t.append("codes",i.toString()),this.dbService.postData(t,"transfer/deleteItem",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.getReceipts(),e.notify.showNotification("receipts deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}}]),e}(),N.\u0275fac=function(e){return new(e||N)(o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](i.d),o["\u0275\u0275directiveInject"](i.a))},N.\u0275cmp=o["\u0275\u0275defineComponent"]({type:N,selectors:[["app-outgoing-transfers"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](g,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},features:[o["\u0275\u0275NgOnChangesFeature"]],decls:104,vars:34,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],[1,"radio-inline"],["type","radio","name","search_by","value","dates",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","receipt",3,"ngModel","ngModelChange"],["type","radio","name","search_by","value","vendor",3,"ngModel","ngModelChange"],["ngNativeValidate","",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table-responsive","fixed-length"],["class","btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],[3,"objects"],["rowSelection","single",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","gridReady"],["receipt_grid",""],[3,"offset","objects",4,"ngIf"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[4,"ngFor","ngForOf"],[3,"bc-value","bc-height","bc-font-size","bc-display-value"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","required","","name","search_code",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Search",1,"btn","btn-sm","btn-success"],[3,"type","onFinish"],[1,"btn","btn-sm","btn-success",3,"click"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Get Data",1,"btn","btn-sm","btn-success"],["name","status",3,"ngModel","ngModelChange"],[3,"click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[1,"fa","fa-remove"],[1,"btn","btn-info",3,"click"],[1,"fa","fa-print"],[3,"offset","objects"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h5"),o["\u0275\u0275text"](5,"Outgoing Transfer History"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",4),o["\u0275\u0275elementStart"](7,"div",5),o["\u0275\u0275elementStart"](8,"label"),o["\u0275\u0275text"](9,"Search by Dates "),o["\u0275\u0275elementStart"](10,"input",6),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](11," \xa0 "),o["\u0275\u0275elementStart"](12,"label"),o["\u0275\u0275text"](13,"Search by Invoice/receipt # "),o["\u0275\u0275elementStart"](14,"input",7),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](15," \xa0 "),o["\u0275\u0275elementStart"](16,"label"),o["\u0275\u0275text"](17,"Search by Sender Branch "),o["\u0275\u0275elementStart"](18,"input",8),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_by=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](19,"hr"),o["\u0275\u0275template"](20,b,6,1,"form",9),o["\u0275\u0275template"](21,_,4,1,"div",10),o["\u0275\u0275template"](22,x,36,3,"form",9),o["\u0275\u0275template"](23,y,12,1,"span",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"div",2),o["\u0275\u0275elementStart"](25,"div",11),o["\u0275\u0275elementStart"](26,"div",12),o["\u0275\u0275elementStart"](27,"div",13),o["\u0275\u0275elementStart"](28,"h5"),o["\u0275\u0275text"](29),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"em"),o["\u0275\u0275text"](31,"Click on an item to view details/print"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"div",14),o["\u0275\u0275template"](33,S,1,0,"app-loading",10),o["\u0275\u0275template"](34,w,4,0,"span",10),o["\u0275\u0275elementStart"](35,"div",15),o["\u0275\u0275template"](36,E,3,1,"button",16),o["\u0275\u0275element"](37,"app-export-to-excel",17),o["\u0275\u0275elementStart"](38,"ag-grid-angular",18,19),o["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](40,"div",11),o["\u0275\u0275elementStart"](41,"div",12),o["\u0275\u0275elementStart"](42,"div",13),o["\u0275\u0275elementStart"](43,"b"),o["\u0275\u0275text"](44),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](45," \xa0 "),o["\u0275\u0275template"](46,D,5,1,"div",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](47,"div",14),o["\u0275\u0275template"](48,k,1,0,"app-loading",10),o["\u0275\u0275template"](49,C,2,0,"b",10),o["\u0275\u0275template"](50,I,1,2,"app-transfer-history",20),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](51,"div",21),o["\u0275\u0275elementStart"](52,"div"),o["\u0275\u0275elementStart"](53,"div"),o["\u0275\u0275elementStart"](54,"span",22),o["\u0275\u0275text"](55),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](56,"span",23),o["\u0275\u0275text"](57),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](58,"br"),o["\u0275\u0275elementStart"](59,"div",24),o["\u0275\u0275elementStart"](60,"h4"),o["\u0275\u0275text"](61,"TRANSFER INVOICE "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](62,"b"),o["\u0275\u0275text"](63,"FROM:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](64,"b"),o["\u0275\u0275text"](65),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](66,"br"),o["\u0275\u0275text"](67),o["\u0275\u0275element"](68,"br"),o["\u0275\u0275text"](69),o["\u0275\u0275element"](70,"br"),o["\u0275\u0275text"](71),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](72,"div",24),o["\u0275\u0275elementStart"](73,"b"),o["\u0275\u0275text"](74,"TO:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](75,"b"),o["\u0275\u0275text"](76),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](77,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](78,"br"),o["\u0275\u0275elementStart"](79,"b"),o["\u0275\u0275text"](80,"By:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](81),o["\u0275\u0275element"](82,"hr"),o["\u0275\u0275elementStart"](83,"table"),o["\u0275\u0275elementStart"](84,"thead"),o["\u0275\u0275elementStart"](85,"tr"),o["\u0275\u0275elementStart"](86,"th"),o["\u0275\u0275text"](87,"Item"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](88,"th"),o["\u0275\u0275text"](89,"Qty"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](90,"th"),o["\u0275\u0275text"](91,"Expiry"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](92,"th"),o["\u0275\u0275text"](93,"S. Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](94,"th"),o["\u0275\u0275text"](95,"Ext. Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](96,"tbody"),o["\u0275\u0275template"](97,M,11,5,"tr",25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](98,"hr"),o["\u0275\u0275elementStart"](99,"b"),o["\u0275\u0275text"](100),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](101,"br"),o["\u0275\u0275elementStart"](102,"div",24),o["\u0275\u0275element"](103,"ngx-barcode",26),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](10),o["\u0275\u0275property"]("ngModel",t.search_by),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngModel",t.search_by),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngModel",t.search_by),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf","receipt"==t.search_by),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf","vendor"==t.search_by),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf","dates"==t.search_by),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf","receipt"!=t.search_by),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate1"]("",t.title," "),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",t.receipts_loading),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.receipts_error),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.can_delete),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("objects",t.receipts),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("rowData",t.receipts)("columnDefs",t.columnDefs)("defaultColDef",t.defaultColDef),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.is_loaded),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.is_loading),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!t.is_loaded),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.is_loaded),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.selected_time," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),o["\u0275\u0275advance"](8),o["\u0275\u0275textInterpolate1"]("",t.company_name," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.company_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.digital_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.receiver_name," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"](" ",t.cashier," "),o["\u0275\u0275advance"](16),o["\u0275\u0275property"]("ngForOf",t.objects),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"](" Total: ",t.invoice_total.toFixed(2)," "),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("bc-value",t.selected_code)("bc-height",35)("bc-font-size",13)("bc-display-value",!0))},directives:[c.k,c.b,c.e,c.h,a.j,m.a,h.AgGridAngular,a.i,u.a,c.f,c.g,c.l,f.a,c.m,c.i,c.n,p.a,v.a],styles:[""]}),N)}],R=((T=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:T}),T.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||T)},imports:[[i.f.forChild(V)],i.f]}),T),q=n("nEHF"),F=n("wDHj"),A=((j=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[a.b,R,q.a,F.a]]}),j)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"i",0),a["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("fXoL"),i=n("4AQi"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.excel=t,this.objects=[],this.filename="download"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"export",value:function(){this.excel.exportAsExcelFile(this.objects,this.filename)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"button",0),a["\u0275\u0275listener"]("click",(function(){return t.export()})),a["\u0275\u0275element"](1,"i",1),a["\u0275\u0275text"](2," Export To Excel"),a["\u0275\u0275elementEnd"]())},styles:[""]}),e}()},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("ofXK"),i=n("nEHF"),r=n("6QD7"),o=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,i.a,r.b],r.b]}),e}()}}]);