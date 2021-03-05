function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{DVBb:function(e,t,n){"use strict";n.r(t),n.d(t,"OrdersDashboardModule",(function(){return R}));var a=n("ofXK"),i=n("tyNb"),r=n("N6Jo"),o=n("fXoL"),s=n("ccyI"),d=n("c92J"),l=n("1VJT"),c=n("3Pt+"),u=n("nVU4"),m=n("hiAm"),h=n("XC36"),f=["agGrid"];function p(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"button",6),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().returnSelected()})),o["\u0275\u0275element"](1,"i",7),o["\u0275\u0275text"](2," Return Selected Items"),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("disabled",a.selected_items.length<1)}}var v,_=((v=function(){function e(t,n,a){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.authService=a,this.objects=[],this.show_options=!0,this.type="",this.receipt="",this.onReturn=new o.EventEmitter,this.can_view=!0,this.can_edit=!0,this.can_create=!0,this.can_delete=!0,this.edit_keys=["quantity"],this.offset=0,this.show_return=!1,this.summary=[],this.overall_total=0,this.quantity_error=!1,this.columnDefs=[{headerName:"Product",field:"product_name",sortable:!0,filter:!0,checkboxSelection:!1},{headerName:"Quantity",field:"quantity",sortable:!0,filter:!0},{headerName:"Price",field:"price",sortable:!0,filter:!0},{headerName:"Total Amount",field:"total",sortable:!0,filter:!0},{headerName:"Receipt",field:"code",sortable:!0,filter:!0},{headerName:"Date",field:"date",sortable:!0,filter:!0}],this.rowData=[],this.selected_items=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.prep();var t=this;this.agGrid.selectionChanged.subscribe((function(n){t.selected_items=[],e.agGrid.api.getSelectedNodes().map((function(e){return e.data})).map((function(e){var n=new h.a;n.id=e.id,n.product_id=e.product_id,n.price=e.price,n.quantity=e.quantity,n.product_name=e.product_name,n.return_quantity=1,n.total=e.price,t.selected_items.push(n)})),e.agGrid.api.sizeColumnsToFit(),e.show_return&&(e.columnDefs=[{headerName:"Product",field:"product_name",sortable:!0,filter:!0,checkboxSelection:!0},{headerName:"Quantity",field:"quantity",sortable:!0,filter:!0},{headerName:"Price",field:"price",sortable:!0,filter:!0},{headerName:"Total Amount",field:"total",sortable:!0,filter:!0},{headerName:"Receipt",field:"code",sortable:!0,filter:!0},{headerName:"Date",field:"date",sortable:!0,filter:!0}])}))}},{key:"ngOnChanges",value:function(){this.prep()}},{key:"prep",value:function(){this.objects.map((function(e){e.product_id=e.product.id,e.product_name=e.product.name,e.total=e.price*e.quantity})),this.calculateTotals()}},{key:"calculateTotals",value:function(){var e=0;this.objects.map((function(t){e+=t.price*t.quantity})),this.overall_total=e}},{key:"addToSales",value:function(){var e=this;if(null==this.objects||null==this.objects||this.objects.length<1)return this.notify.failNotification("Please add at least one product"),!1;this.notify.showLoading();for(var t=[],n=[],a=[],i=[],r="RFS-"+this.dbService.getToday("timestamp_string"),o=0;o<this.objects.length;o++){var s=this.objects[o];t.push(s.product._id),n.push(s.product.price),a.push(s.quantity),i.push(s.product.name)}var d=new FormData;d.append("products",t.toString()),d.append("prices",n.toString()),d.append("quantities",a.toString()),d.append("code",r),d.append("product_names",i.toString()),d.append("added_by",this.authService.current_user._id),d.append("date",this.dbService.getToday("timestamp")),this.dbService.postData(d,"sales/saveBulk",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):e.notify.hideLoading()}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"returnSelected",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)(o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](s.a))},v.\u0275cmp=o["\u0275\u0275defineComponent"]({type:v,selectors:[["app-order-list"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](f,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},inputs:{objects:"objects",show_options:"show_options",type:"type",receipt:"receipt",offset:"offset",show_return:"show_return"},outputs:{onReturn:"onReturn"},features:[o["\u0275\u0275NgOnChangesFeature"]],decls:10,vars:4,consts:[[1,"well"],[1,"text-danger"],["class","btn btn-sm btn-warning",3,"disabled","click",4,"ngIf"],[1,"export_btn","btn-sm","btn","btn-success"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs"],["agGrid",""],[1,"btn","btn-sm","btn-warning",3,"disabled","click"],[1,"fa","fa-return"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"b"),o["\u0275\u0275text"](2,"Overall Total: "),o["\u0275\u0275elementStart"](3,"span",1),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](5,p,3,1,"button",2),o["\u0275\u0275elementStart"](6,"button",3),o["\u0275\u0275text"](7,"Export to Excel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](8,"ag-grid-angular",4,5)),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"]("GHC ",t.overall_total.toFixed(2),""),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.show_return),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("rowData",t.objects)("columnDefs",t.columnDefs))},directives:[a.j,u.AgGridAngular],styles:[""]}),v),b=["receipt_grid"];function g(e,t){1&e&&o["\u0275\u0275element"](0,"app-loading")}function y(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1,"Connection error. "),o["\u0275\u0275elementStart"](2,"button",46),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().getReceipts()})),o["\u0275\u0275text"](3,"Try Again"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}function S(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"button",47),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().deleteSelected()})),o["\u0275\u0275element"](1,"i",48),o["\u0275\u0275text"](2," Delete Selected "),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("disabled",a.selected_items.length<1)}}function w(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275text"](1),o["\u0275\u0275elementStart"](2,"button",49),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().print()})),o["\u0275\u0275element"](3,"i",50),o["\u0275\u0275text"](4," Print"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",a.selected_time," ")}}function x(e,t){1&e&&o["\u0275\u0275element"](0,"app-loading")}function D(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"b"),o["\u0275\u0275text"](1,"Click on a receipt number to view/return items"),o["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e&&o["\u0275\u0275element"](0,"app-order-list",51),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("offset",n.offset)("objects",n.objects)}}function E(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.product.name),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.quantity),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.price),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",(n.quantity*n.price).toFixed(2)," ")}}var C,N,I,q=[{path:"",component:(C=function(){function e(t,n,a,i,r){_classCallCheck(this,e),this.authService=t,this.dbService=n,this.notify=a,this.router=i,this.ar=r,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="today",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.selected_items=[],this.columnDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,width:200,checkboxSelection:!0},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"First Name",field:"first_name",sortable:!0,filter:!0},{headerName:"Last Name",field:"last_name",sortable:!0,filter:!0},{headerName:"Phone",field:"phone",sortable:!0,filter:!0},{headerName:"Status",field:"status",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"Amount Paid",field:"amount_paid",sortable:!0,filter:!0},{headerName:"Balance",field:"balance",sortable:!0,filter:!0},{headerName:"Delivery Point",field:"delivery_point",sortable:!0,filter:!0},{headerName:"By",field:"display_name",sortable:!0,filter:!0}],this.status="Pending",this.dbService.getThisWeek(),this.dbService.getThisYear(),this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),this.company_address=t.current_user.company_address,this.company_phone=t.current_user.company_phone,this.company_name=t.current_user.company_name,this.digital_address=t.current_user.digital_address,-1==this.authService.current_user.permissions.indexOf("Delete Orders")&&(this.can_delete=!1),this.defaultColDef={resizable:!0},this.rowClassRules={"sick-days-warning":function(e){var t=e.data.sickDays;return t>5&&t<=7},"sick-days-breach":"data.in_arrears == 'yes'"}}return _createClass(e,[{key:"ngOnInit",value:function(){this.quick_option="this_month",this.setDates(),this.getReceipts()}},{key:"ngOnChanges",value:function(){this.getReceipts()}},{key:"ngAfterViewInit",value:function(){var e=this,t=this;this.receipt_grid.selectionChanged.subscribe((function(n){t.selected_items=[];var a=e.receipt_grid.api.getSelectedNodes().map((function(e){return e.data}));a.map((function(e){var n=new r.a;n.id=e.id,n.status=e.status,n.code=e.code,n.date=e.date,n.delivery_point=e.delivery_point,n.customer=e.customer,n.customer_phone=e.customer_phone,n.amount_paid=e.amount_paid,t.selected_items.push(n)})),a.length>0?e.getDetails(a[a.length-1]):(e.is_loaded=!1,e.selected_code="")}))}},{key:"onGridReady",value:function(e){e.api.sizeColumnsToFit()}},{key:"getDetails",value:function(e){var t=this;this.selected_code=e.code,this.selected_time=e.created_on,this.is_loading=!0,this.dbService.getData("order/getOrderDetails?code="+e.code,this.authService.current_user).subscribe((function(n){t.objects=n.data;var a=0;t.objects.map((function(e){a+=e.quantity*e.price})),t.invoice_total=a,t.receipt_amount_paid=e.amount_paid,t.offset=0,t.is_loaded=!0,t.is_loading=!1}),(function(e){t.notify.failNotification("Unable to get sales")}))}},{key:"getReceipts",value:function(){var e=this;this.receipts_loading=!0;var t="order/findReceiptsBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date;"all"!=this.status&&(t+="&status="+this.status),this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.notify.failNotification("Unable to get sales")}))}},{key:"searchReceipts",value:function(){var e=this;this.receipts_loading=!0;var t="admin/search?type=Orders&param="+this.search_code;this.dbService.getData(t,this.authService.current_user).subscribe((function(n){e.receipts=n.data,e.total=n.total,e.offset=0,e.selected_code=null,e.url=t,e.url_has_params="yes",e.receipts_loaded=!0,e.receipts_loading=!1,e.receipts_error=!1,e.is_loaded=!1,e.is_loading=!1}),(function(t){e.receipts_error=!0,e.notify.failNotification("Unable to get sales")}))}},{key:"formatTotal",value:function(e){return parseFloat(e).toFixed(2)}},{key:"filter",value:function(e){this.router.navigate(["/purchases"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}},{key:"paginationFinished",value:function(e){var t=this;e.data.map((function(e){e.createdAt=null==e.createdAt||null==e.createdAt?null:t.dbService.getToday(null,e.createdAt)})),this.objects=e.data,this.offset=e.offset}},{key:"print",value:function(){var e,t;e=document.getElementById("invoice").innerHTML,(t=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),t.document.write("\n      <html>\n        <head>\n          <title>Invoice</title>\n          <style>\n          #invoice { page-break-after: always; }\n          #invoice:last-child { page-break-after: avoid; }\n          \n          \n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\"><div id='invoice'>".concat(e,"</div></body>\n      </html>")),t.document.close()}},{key:"setDates",value:function(){var e=this.dbService.getWeekNumber(this.dbService.getToday()),t=this.dbService.getThisYear(),n=t-1,a=this.dbService.getToday("month"),i=parseInt(a)-1;switch(this.quick_option){case"today":this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday();break;case"yesterday":this.start_date=this.dbService.formatDate(this.dbService.addDaystoDate(-1,this.dbService.getToday())),this.end_date=this.dbService.formatDate(this.dbService.addDaystoDate(-1,this.dbService.getToday()));break;case"this_week":this.start_date=this.dbService.formatDate(this.dbService.getFirstDayOfWeek(e,t)),this.end_date=this.dbService.formatDate(this.dbService.addDaystoDate(6,this.start_date));break;case"last_week":this.start_date=this.dbService.formatDate(this.dbService.getFirstDayOfWeek(e-1,t)),this.end_date=this.dbService.formatDate(this.dbService.addDaystoDate(6,this.start_date));break;case"this_month":var r=this.dbService.getLastDayOfMonth(a);this.start_date=this.dbService.formatDate(new Date(t+"-"+a+"-01")),this.end_date=this.dbService.formatDate(new Date(t+"-"+a+"-"+r));break;case"last_month":r=this.dbService.getLastDayOfMonth(i),this.start_date=this.dbService.formatDate(new Date(t+"-"+i+"-01")),this.end_date=this.dbService.formatDate(new Date(t+"-"+i+"-"+r));break;case"first_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-01-01")),this.end_date=this.dbService.formatDate(new Date(t+"-03-31"));break;case"second_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-04-01")),this.end_date=this.dbService.formatDate(new Date(t+"-06-30"));break;case"third_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-07-01")),this.end_date=this.dbService.formatDate(new Date(t+"-09-30"));break;case"last_quarter":this.start_date=this.dbService.formatDate(new Date(t+"-10-01")),this.end_date=this.dbService.formatDate(new Date(t+"-12-31"));break;case"this_year":this.start_date=this.dbService.formatDate(new Date(t+"-01-01")),this.end_date=this.dbService.formatDate(new Date(t+"-12-31"));break;case"last_year":this.start_date=this.dbService.formatDate(new Date(n+"-01-01")),this.end_date=this.dbService.formatDate(new Date(n+"-12-31"))}this.getReceipts()}},{key:"delete",value:function(){var e=this;if(window.confirm("Sure you want to delete this receipt? You cannot undo this")){var t=new FormData;this.notify.showLoading(),t.append("code",this.selected_code),this.dbService.postData(t,"purchase/deleteByCode",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.getReceipts(),e.notify.showNotification("receipt deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}},{key:"deleteSelected",value:function(){var e=this;if(window.confirm("Sure you want to delete the selected receipts? You cannot undo this")){var t=new FormData;this.notify.showLoading();var n=[],a=[];this.selected_items.map((function(e){n.push(e.id),a.push(e.invoice)})),t.append("id",n.toString()),t.append("invoices",a.toString()),this.dbService.postData(t,"purchase/deleteItem",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.getReceipts(),e.notify.showNotification("receipts deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}},{key:"goBack",value:function(){window.history.back()}}]),e}(),C.\u0275fac=function(e){return new(e||C)(o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](i.c),o["\u0275\u0275directiveInject"](i.a))},C.\u0275cmp=o["\u0275\u0275defineComponent"]({type:C,selectors:[["app-orders-dashboard"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](b,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},features:[o["\u0275\u0275NgOnChangesFeature"]],decls:120,vars:25,consts:[[1,"content"],[1,"container"],[1,"card","card-body"],[1,"row"],[1,"col-md-8"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","required","","name","search_code",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Search",1,"btn","btn-sm","btn-success"],[1,"col-md-4"],["name","status",3,"ngModel","change","ngModelChange"],["value","all"],["value","Pending"],["value","Packaged"],["value","Delivered"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],[1,"table-responsive","fixed-length"],["class","btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","rowClassRules"],["receipt_grid",""],[3,"offset","objects",4,"ngIf"],["id","invoice"],[1,"text-center"],[1,"pull-left"],[1,"pull-right"],[4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[1,"fa","fa-remove"],[1,"btn","btn-info",3,"click"],[1,"fa","fa-print"],[3,"offset","objects"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"h5"),o["\u0275\u0275text"](3,"Order History"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275elementStart"](5,"div",3),o["\u0275\u0275elementStart"](6,"div",4),o["\u0275\u0275elementStart"](7,"form",5,6),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.searchReceipts()})),o["\u0275\u0275elementStart"](9,"label"),o["\u0275\u0275text"](10,"Search receipt # or customer details"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"input",7),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search_code=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](12,"input",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"div",9),o["\u0275\u0275elementStart"](14,"label"),o["\u0275\u0275text"](15,"Status: "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"select",10),o["\u0275\u0275listener"]("change",(function(){return t.getReceipts()}))("ngModelChange",(function(e){return t.status=e})),o["\u0275\u0275elementStart"](17,"option",11),o["\u0275\u0275text"](18,"All"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"option",12),o["\u0275\u0275text"](20,"Pending Delivery"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"option",13),o["\u0275\u0275text"](22,"Packaged"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"option",14),o["\u0275\u0275text"](24,"Delivered"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](25,"hr"),o["\u0275\u0275elementStart"](26,"form",5,6),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.getReceipts()})),o["\u0275\u0275elementStart"](28,"label"),o["\u0275\u0275text"](29,"Or Select period"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"select",15),o["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),o["\u0275\u0275elementStart"](31,"option",16),o["\u0275\u0275text"](32,"Today"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](33,"option",17),o["\u0275\u0275text"](34,"Yesterday"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](35,"option",18),o["\u0275\u0275text"](36,"This Week"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](37,"option",19),o["\u0275\u0275text"](38,"Last Week"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"option",20),o["\u0275\u0275text"](40,"This Month"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"option",21),o["\u0275\u0275text"](42,"Last Month"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](43,"option",22),o["\u0275\u0275text"](44,"1st quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"option",23),o["\u0275\u0275text"](46,"2nd quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](47,"option",24),o["\u0275\u0275text"](48,"3rd quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"option",25),o["\u0275\u0275text"](50,"4th quarter"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](51,"option",26),o["\u0275\u0275text"](52,"This Year"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](53,"option",27),o["\u0275\u0275text"](54,"Last Year"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](55,"label"),o["\u0275\u0275text"](56,"Start Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](57,"input",28),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](58,"label"),o["\u0275\u0275text"](59,"End Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](60,"input",29),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](61,"input",30),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](62,"div",3),o["\u0275\u0275elementStart"](63,"div",31),o["\u0275\u0275elementStart"](64,"div",32),o["\u0275\u0275elementStart"](65,"div",33),o["\u0275\u0275elementStart"](66,"em"),o["\u0275\u0275text"](67,"Click on an item to view details/print"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](68,"div",34),o["\u0275\u0275template"](69,g,1,0,"app-loading",35),o["\u0275\u0275template"](70,y,4,0,"span",35),o["\u0275\u0275elementStart"](71,"div",36),o["\u0275\u0275template"](72,S,3,1,"button",37),o["\u0275\u0275element"](73,"ag-grid-angular",38,39),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](75,"div",31),o["\u0275\u0275elementStart"](76,"div",32),o["\u0275\u0275elementStart"](77,"div",33),o["\u0275\u0275elementStart"](78,"b"),o["\u0275\u0275text"](79),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](80," \xa0 "),o["\u0275\u0275template"](81,w,5,1,"div",35),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](82,"div",34),o["\u0275\u0275template"](83,x,1,0,"app-loading",35),o["\u0275\u0275template"](84,D,2,0,"b",35),o["\u0275\u0275template"](85,k,1,2,"app-order-list",40),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](86,"div",41),o["\u0275\u0275elementStart"](87,"div"),o["\u0275\u0275elementStart"](88,"div",42),o["\u0275\u0275elementStart"](89,"h4"),o["\u0275\u0275text"](90),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](91),o["\u0275\u0275element"](92,"br"),o["\u0275\u0275text"](93),o["\u0275\u0275element"](94,"br"),o["\u0275\u0275text"](95),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](96,"span",43),o["\u0275\u0275text"](97),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](98,"br"),o["\u0275\u0275elementStart"](99,"span",44),o["\u0275\u0275text"](100),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](101,"br"),o["\u0275\u0275element"](102,"hr"),o["\u0275\u0275elementStart"](103,"table"),o["\u0275\u0275elementStart"](104,"thead"),o["\u0275\u0275elementStart"](105,"tr"),o["\u0275\u0275elementStart"](106,"th"),o["\u0275\u0275text"](107,"Item"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](108,"th"),o["\u0275\u0275text"](109,"Qty"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](110,"th"),o["\u0275\u0275text"](111,"Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](112,"th"),o["\u0275\u0275text"](113,"Ext. Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](114,"tbody"),o["\u0275\u0275template"](115,E,9,4,"tr",45),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](116,"hr"),o["\u0275\u0275elementStart"](117,"b"),o["\u0275\u0275text"](118),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](119,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](11),o["\u0275\u0275property"]("ngModel",t.search_code),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.status),o["\u0275\u0275advance"](14),o["\u0275\u0275property"]("ngModel",t.quick_option),o["\u0275\u0275advance"](27),o["\u0275\u0275property"]("ngModel",t.start_date),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngModel",t.end_date),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngIf",t.receipts_loading),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.receipts_error),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.can_delete),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("rowData",t.receipts)("columnDefs",t.columnDefs)("defaultColDef",t.defaultColDef)("rowClassRules",t.rowClassRules),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.is_loaded),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.is_loading),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!t.is_loaded),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.is_loaded),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.company_name," "),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",t.company_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.digital_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("Time: ",t.selected_time," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("Invoice #",t.selected_code,""),o["\u0275\u0275advance"](15),o["\u0275\u0275property"]("ngForOf",t.objects),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"](" Total: ",t.invoice_total.toFixed(2)," "))},directives:[c.f,c.g,c.b,c.l,c.e,c.h,c.m,c.i,c.n,a.j,u.AgGridAngular,a.i,m.a,_],styles:[""]}),C)}],j=((N=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[i.f.forChild(q)],i.f]}),N),T=n("nEHF"),M=n("rMCG"),R=((I=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[a.b,j,M.a,T.a]]}),I)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"i",0),a["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()}}]);