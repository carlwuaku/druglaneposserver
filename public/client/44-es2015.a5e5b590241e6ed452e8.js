(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{g1ye:function(e,t,n){"use strict";n.r(t),n.d(t,"BranchDetailsModule",(function(){return b}));var a=n("ofXK"),r=n("tyNb"),i=n("fXoL"),s=n("ccyI"),l=n("1VJT"),o=n("c92J"),d=n("3Pt+"),c=n("n49D"),m=n("nVU4");const h=["salesGrid"];function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"h4"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("",e.branch.name," Sales Report")}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.authService=e,this.notify=t,this.ar=n,this.dbService=a,this.customers="...",this.products="...",this.vendors="...",this.orders="...",this.total_arrears=0,this.quick_option="this_month",this.columnDefs=[{headerName:"Date",field:"date",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Cash",field:"cash",sortable:!0,filter:!0},{headerName:"Cheque",field:"cheque",sortable:!0,filter:!0},{headerName:"Credit",field:"credit",sortable:!0,filter:!0},{headerName:"Insurance",field:"insurance",sortable:!0,filter:!0},{headerName:"Mobile Money",field:"momo",sortable:!0,filter:!0},{headerName:"POS",field:"pos",sortable:!0,filter:!0},{headerName:"Other",field:"other",sortable:!0,filter:!0},{headerName:"Total",field:"total_sales",sortable:!0,filter:!0}],this.sales=[],this.user=this.authService.current_user,this.id=n.snapshot.params.id,this.defaultColDef={resizable:!0};let r=this.dbService.setDates(this.quick_option);this.start_date=r.start_date,this.end_date=r.end_date,"admin"!=this.user.type&&(alert("Not permitted. Please logout and login as an administrator"),this.goBack())}ngOnInit(){this.getDetails(),this.getSalesSummary()}onGridReady(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}setDates(){let e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}refresh(){this.getSalesSummary()}getDetails(){this.notify.showLoading(),this.dbService.getData("admin/findBranchById?id="+this.id,this.authService.current_user).subscribe(e=>{"1"==e.status?this.branch=e.data:alert(e.message),this.notify.hideLoading()},e=>{this.notify.hideLoading()})}getData(){this.dbService.getData("admin/getDashboardMeterByBranch?id="+this.id,this.authService.current_user).subscribe(e=>{"1"==e.status?(this.pending_conflicts=e.transfer_conflicts,this.expired_all=e.expired,this.expired_next=e.expiring_next_month,this.expired=e.expiring_this_month,this.stock_out=e.out_of_stock,this.near_max=e.max_stock,this.near_min=e.min_stock,this.pending_transfers=e.incoming_transfers):alert(e.message)},e=>{})}getSalesSummary(){this.dbService.getData("sale/getBranchDailySalesSummary?start_date="+this.start_date+"&end_date="+this.end_date,this.authService.current_user).subscribe(e=>{"1"==e.status?this.sales=e.data:alert(e.message)},e=>{})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-branch-details"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](h,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},decls:52,vars:8,consts:[[1,"content"],[1,"container"],[4,"ngIf"],[1,"row"],[1,"col-md-12"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Get Data",1,"btn","btn-sm","btn-success"],["role","tablist",1,"nav","nav-tabs","md-tabs"],[1,"nav-item"],["role","tab","href","#sales","data-toggle","tab",1,"nav-link","active"],[1,"slide"],[1,"tab-content","tabs","card-block"],["role","tabpanel","id","sales",1,"tab-pane","active"],[3,"objects"],[1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","defaultColDef","gridReady"],["salesGrid",""]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"section",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275template"](2,u,2,1,"h4",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"form",5,6),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.refresh()})),i["\u0275\u0275elementStart"](7,"label"),i["\u0275\u0275text"](8,"Select period"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"select",7),i["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),i["\u0275\u0275elementStart"](10,"option",8),i["\u0275\u0275text"](11,"Today"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"option",9),i["\u0275\u0275text"](13,"Yesterday"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"option",10),i["\u0275\u0275text"](15,"This Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"option",11),i["\u0275\u0275text"](17,"Last Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"option",12),i["\u0275\u0275text"](19,"This Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"option",13),i["\u0275\u0275text"](21,"Last Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](22,"option",14),i["\u0275\u0275text"](23,"1st quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"option",15),i["\u0275\u0275text"](25,"2nd quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"option",16),i["\u0275\u0275text"](27,"3rd quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"option",17),i["\u0275\u0275text"](29,"4th quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](30,"option",18),i["\u0275\u0275text"](31,"This Year"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](32,"option",19),i["\u0275\u0275text"](33,"Last Year"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](34,"label"),i["\u0275\u0275text"](35,"Start Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"input",20),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](37,"label"),i["\u0275\u0275text"](38,"End Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](39,"input",21),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](40,"input",22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](41,"hr"),i["\u0275\u0275elementStart"](42,"ul",23),i["\u0275\u0275elementStart"](43,"li",24),i["\u0275\u0275elementStart"](44,"a",25),i["\u0275\u0275text"](45,"SALES REPORT"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](46,"div",26),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](47,"div",27),i["\u0275\u0275elementStart"](48,"div",28),i["\u0275\u0275element"](49,"app-export-to-excel",29),i["\u0275\u0275elementStart"](50,"ag-grid-angular",30,31),i["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",null!=t.branch),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngModel",t.quick_option),i["\u0275\u0275advance"](27),i["\u0275\u0275property"]("ngModel",t.start_date),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngModel",t.end_date),i["\u0275\u0275advance"](10),i["\u0275\u0275property"]("objects",t.sales),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("rowData",t.sales)("columnDefs",t.columnDefs)("defaultColDef",t.defaultColDef))},directives:[a.j,d.e,d.f,d.l,d.d,d.g,d.h,d.m,d.a,c.a,m.AgGridAngular],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(f)],r.f]}),e})();var g=n("nEHF");let b=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,p,g.a]]}),e})()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("fXoL"),r=n("4AQi");let i=(()=>{class e{constructor(e){this.excel=e,this.objects=[],this.filename="download"}ngOnInit(){}export(){this.excel.exportAsExcelFile(this.objects,this.filename)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"button",0),a["\u0275\u0275listener"]("click",(function(){return t.export()})),a["\u0275\u0275element"](1,"i",1),a["\u0275\u0275text"](2," Export To Excel"),a["\u0275\u0275elementEnd"]())},styles:[""]}),e})()}}]);