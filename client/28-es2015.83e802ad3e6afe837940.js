(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/Jze":function(e,t,n){"use strict";n.r(t),n.d(t,"ReceiveTransferModule",(function(){return j}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),l=n("ccyI"),d=n("bgkY"),s=n("c92J"),o=n("1VJT"),c=n("nVU4"),m=n("hiAm"),p=n("3Pt+");const h=["receipt_grid"];function f(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function u(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1,"Connection error. "),r["\u0275\u0275elementStart"](2,"button",19),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().getReceipts()})),r["\u0275\u0275text"](3,"Try Again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function x(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275text"](1),r["\u0275\u0275elementStart"](2,"button",20),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().print()})),r["\u0275\u0275element"](3,"i",21),r["\u0275\u0275text"](4," Print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.selected_time," ")}}function g(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function v(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"b"),r["\u0275\u0275text"](1,"Click on a receipt number to view/receive items"),r["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275elementStart"](4,"button",24),r["\u0275\u0275listener"]("click",(function(){const e=t.$implicit;return e.received=e.quantity})),r["\u0275\u0275text"](5,"Same"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"td"),r["\u0275\u0275text"](7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"td"),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"td"),r["\u0275\u0275elementStart"](11,"input",26),r["\u0275\u0275listener"]("ngModelChange",(function(n){return r["\u0275\u0275restoreView"](e),t.$implicit.received=n})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"td"),r["\u0275\u0275text"](13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"td"),r["\u0275\u0275text"](15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](n+1),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"]("",e.product_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",e.quantity," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",e.received),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.price," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",e.quantity-e.received," ")}}function b(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",22),r["\u0275\u0275element"](1,"i",23),r["\u0275\u0275text"](2," Items whose quantity received are less than the expected will be sent back to the sender for correction "),r["\u0275\u0275element"](3,"br"),r["\u0275\u0275elementStart"](4,"button",24),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().setAllSame()})),r["\u0275\u0275text"](5,"Set All Received same as quantity sent"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"table",25),r["\u0275\u0275elementStart"](7,"thead"),r["\u0275\u0275elementStart"](8,"tr"),r["\u0275\u0275elementStart"](9,"th"),r["\u0275\u0275text"](10,"#"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](11,"th"),r["\u0275\u0275elementStart"](12,"th"),r["\u0275\u0275text"](13," Product "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"th"),r["\u0275\u0275text"](15,"Expected"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"th"),r["\u0275\u0275text"](17,"Received"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"th"),r["\u0275\u0275text"](19,"Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"th"),r["\u0275\u0275text"](21,"Difference"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"tbody"),r["\u0275\u0275template"](23,_,16,6,"tr",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](23),r["\u0275\u0275property"]("ngForOf",e.details_objects)}}function S(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"td"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"td"),r["\u0275\u0275text"](8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.product.name),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.quantity),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.price),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",(e.quantity*e.price).toFixed(2)," ")}}const y=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,r){this.authService=e,this.socket=t,this.dbService=n,this.notify=i,this.router=a,this.ar=r,this.url="",this.url_has_params="no",this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.search_code="",this.total=0,this.offset=0,this.receipts=[],this.receipts_loading=!1,this.receipts_error=!1,this.receipts_loaded=!1,this.selected_code="",this.selected_time="",this.quick_option="this_month",this.receipt_amount_paid=0,this.digital_address="",this.can_delete=!0,this.invoice_total=0,this.search_by="dates",this.title="",this.selected_items=[],this.columnDefs=[{headerName:"#",field:"code",sortable:!0,filter:!0,checkboxSelection:!1},{headerName:"From",field:"sender_name",sortable:!0,filter:!0},{headerName:"Date",field:"created_on",sortable:!0,filter:!0},{headerName:"Invoice",field:"code",sortable:!0,filter:!0},{headerName:"Num. Items",field:"num_of_items",sortable:!0,filter:!0},{headerName:"Total",field:"total_amount",sortable:!0,filter:!0},{headerName:"By",field:"display_name",sortable:!0,filter:!0}],this.status="All",this.details_objects=[],-1==this.authService.current_user.permissions.indexOf("Receive Transfers")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Receive Transfers"),this.dbService.getThisWeek(),this.dbService.getThisYear(),this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),this.company_address=e.current_user.company_address,this.company_phone=e.current_user.company_phone,this.company_name=e.current_user.company_name,this.digital_address=e.current_user.digital_address,this.defaultColDef={resizable:!0}}ngOnInit(){this.getReceipts()}ngOnChanges(){this.getReceipts()}ngAfterViewInit(){}onGridReady(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}onSelectionChanged(e){var t=this.gridApi.getSelectedRows();this.selected_item=t[0],this.getSales(this.selected_item)}getSales(e){this.selected_code=e.code,this.selected_sender_name=e.sender_name,this.selected_time=e.created_on,this.is_loading=!0,this.dbService.getData("transfer/getDetails?code="+e.code,this.authService.current_user).subscribe(t=>{this.details_objects=t.data;var n=0;this.details_objects.map(e=>{n+=e.quantity*e.price}),this.invoice_total=n,this.receipt_amount_paid=e.amount_paid,this.offset=0,this.is_loaded=!0,this.is_loading=!1},e=>{this.notify.failNotification("Unable to get transfers")})}getReceipts(){this.title=`'${this.start_date} - ${this.end_date}'`,this.receipts_loading=!0;var e="transfer/getPendingTransfers";this.dbService.getData(e,this.authService.current_user).subscribe(t=>{this.receipts=t.data,this.offset=0,this.selected_code=null,this.url=e,this.url_has_params="yes",this.receipts_loaded=!0,this.receipts_loading=!1,this.receipts_error=!1,this.is_loaded=!1,this.is_loading=!1},e=>{this.receipts_error=!0,this.notify.failNotification("Unable to get transfers")})}formatTotal(e){return parseFloat(e).toFixed(2)}filter(e){this.router.navigate(["/transfers"],{queryParams:{status:e,search_type:"status",t:Date.now()}})}paginationFinished(e){e.data.map(e=>{e.createdAt=null==e.createdAt||null==e.createdAt?null:this.dbService.getToday(null,e.createdAt)}),this.objects=e.data,this.offset=e.offset}goBack(){window.history.back()}print(){let e,t;e=document.getElementById("invoice").innerHTML,t=window.open("","_blank","top=0,left=0,height=100%,width=auto"),t.document.open(),t.document.write(`\n      <html>\n        <head>\n          <title>Invoice</title>\n          <style>\n          body{\n            font-size: 13px;\n          }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n           </style>\n        </head>\n    <body onload="window.print();window.close()"><div id='invoice'>${e}</div></body>\n      </html>`),t.document.close()}saveItems(){for(var e=[],t=[],n=[],i=[],a=[],r=[],l=0;l<this.details_objects.length;l++){var d=this.details_objects[l];if(e.push(d.product),t.push(d.price),null==d.received||null==d.received)return alert("Please specify the quantity received for "+d.product_name),!1;n.push(d.received),a.push(d.quantity),i.push(d.product_name),r.push(d.expiry)}let s=new FormData;s.append("products",e.join("||")),s.append("prices",t.join("||")),s.append("quantities",n.join("||")),s.append("expected_quantities",a.join("||")),s.append("expiries",r.join("||")),s.append("code",this.selected_code),s.append("product_names",i.join("||")),s.append("created_by",this.authService.current_user.id),s.append("display_name",this.authService.current_user.display_name),s.append("receiver",this.authService.current_user.company_id),s.append("sender",this.selected_item.sender_id),s.append("date",this.dbService.getToday()),s.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(s,"transfer/saveBulkReceive",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.hideLoading(),this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Transfers received",event:"transfers_received"}),this.notify.successNotification("Transfers received successfully"),this.getReceipts())},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification(),console.log(e)})}deleteSelected(){}setAllSame(){this.details_objects.map(e=>{e.received=e.quantity})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.d),r["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-receive-transfer"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](h,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:78,vars:21,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],[1,"table-responsive","fixed-length"],["rowSelection","single",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","gridReady","selectionChanged"],["receipt_grid",""],["class","table-responsive",4,"ngIf"],[1,"card-footer"],[1,"btn","btn-sm","btn-primary",3,"click"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-info",3,"click"],[1,"fa","fa-print"],[1,"table-responsive"],[1,"fa","fa-info"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"table","table-hover","table-bordered"],["type","text","size","6",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"h5"),r["\u0275\u0275text"](3,"Receive Transfers"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",2),r["\u0275\u0275elementStart"](5,"div",3),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div",5),r["\u0275\u0275elementStart"](8,"h5"),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"em"),r["\u0275\u0275text"](11,"Click on an item to view details/print"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"div",6),r["\u0275\u0275template"](13,f,1,0,"app-loading",7),r["\u0275\u0275template"](14,u,4,0,"span",7),r["\u0275\u0275elementStart"](15,"div",8),r["\u0275\u0275elementStart"](16,"ag-grid-angular",9,10),r["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("selectionChanged",(function(e){return t.onSelectionChanged(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"div",3),r["\u0275\u0275elementStart"](19,"div",4),r["\u0275\u0275elementStart"](20,"div",5),r["\u0275\u0275elementStart"](21,"b"),r["\u0275\u0275text"](22),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](23),r["\u0275\u0275template"](24,x,5,1,"div",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"div",6),r["\u0275\u0275template"](26,g,1,0,"app-loading",7),r["\u0275\u0275template"](27,v,2,0,"b",7),r["\u0275\u0275template"](28,b,24,1,"div",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](29,"div",12),r["\u0275\u0275elementStart"](30,"button",13),r["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),r["\u0275\u0275text"](31,"Save"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"div",14),r["\u0275\u0275elementStart"](33,"div"),r["\u0275\u0275elementStart"](34,"div"),r["\u0275\u0275elementStart"](35,"span",15),r["\u0275\u0275text"](36),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](37,"span",16),r["\u0275\u0275text"](38),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](39,"br"),r["\u0275\u0275elementStart"](40,"div",17),r["\u0275\u0275elementStart"](41,"h4"),r["\u0275\u0275text"](42,"TRANSFER INVOICE "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"b"),r["\u0275\u0275text"](44,"FROM:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](45,"b"),r["\u0275\u0275text"](46),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](47,"br"),r["\u0275\u0275text"](48),r["\u0275\u0275element"](49,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"div",17),r["\u0275\u0275elementStart"](51,"b"),r["\u0275\u0275text"](52,"TO:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](53,"b"),r["\u0275\u0275text"](54),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](55,"br"),r["\u0275\u0275text"](56),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](57,"b"),r["\u0275\u0275text"](58,"By:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](59),r["\u0275\u0275element"](60,"hr"),r["\u0275\u0275elementStart"](61,"table"),r["\u0275\u0275elementStart"](62,"thead"),r["\u0275\u0275elementStart"](63,"tr"),r["\u0275\u0275elementStart"](64,"th"),r["\u0275\u0275text"](65,"Item"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](66,"th"),r["\u0275\u0275text"](67,"Qty"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](68,"th"),r["\u0275\u0275text"](69,"Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](70,"th"),r["\u0275\u0275text"](71,"Ext. Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](72,"tbody"),r["\u0275\u0275template"](73,S,9,4,"tr",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](74,"hr"),r["\u0275\u0275elementStart"](75,"b"),r["\u0275\u0275text"](76),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](77,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"]("",t.title," "),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",t.receipts_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.receipts_error),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("rowData",t.receipts)("columnDefs",t.columnDefs)("defaultColDef",t.defaultColDef),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" \xa0 From ",t.selected_sender_name," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.is_loaded),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate1"]("",t.selected_time," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate1"]("",t.selected_sender_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",t.company_address," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"]("",t.company_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",t.company_address," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"](" ",t.cashier," "),r["\u0275\u0275advance"](14),r["\u0275\u0275property"]("ngForOf",t.details_objects),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"](" Total: ",t.invoice_total.toFixed(2)," "))},directives:[i.j,c.AgGridAngular,i.i,m.a,p.b,p.e,p.h],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(y)],a.f]}),e})();var w=n("nEHF"),I=n("wDHj");let j=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,E,w.a,I.a]]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("ofXK"),a=n("nEHF"),r=n("6QD7"),l=n("fXoL");let d=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a,r.b],r.b]}),e})()}}]);