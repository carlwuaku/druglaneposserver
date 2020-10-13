function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{TDBs:function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",(function(){return Y}));var r=n("ofXK"),a=n("tyNb"),i=n("fXoL"),o=n("ccyI"),l=n("c92J");function u(e,t){1&e&&i["\u0275\u0275element"](0,"i",31)}function c(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",32),i["\u0275\u0275text"](2," Expired Items Found "),i["\u0275\u0275elementEnd"]())}function s(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",33),i["\u0275\u0275text"](2," No Expired Items "),i["\u0275\u0275elementEnd"]())}function d(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",32),i["\u0275\u0275text"](2," Some Items Expiring This Month "),i["\u0275\u0275elementEnd"]())}function m(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",33),i["\u0275\u0275text"](2," No Items Expiring This Month "),i["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",32),i["\u0275\u0275text"](2," Some Items Expiring Next Month "),i["\u0275\u0275elementEnd"]())}function f(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",33),i["\u0275\u0275text"](2," No Items Expiring Next Month "),i["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",32),i["\u0275\u0275text"](2," Some Items Out Of Stock "),i["\u0275\u0275elementEnd"]())}function S(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",33),i["\u0275\u0275text"](2," No Items Out Of Stock "),i["\u0275\u0275elementEnd"]())}function h(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",32),i["\u0275\u0275text"](2," Some Items Nearing Minimum Stock "),i["\u0275\u0275elementEnd"]())}function x(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",33),i["\u0275\u0275text"](2," No Items Nearing Minimum Stock "),i["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",32),i["\u0275\u0275text"](2," Some Items Nearing Maximum Stock "),i["\u0275\u0275elementEnd"]())}function E(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275element"](1,"i",33),i["\u0275\u0275text"](2," No Items Nearing Maximum Stock "),i["\u0275\u0275elementEnd"]())}var b,y,_,k=function(){return["/new_sale"]},C=function(){return["/sales"]},I=function(){return["/sales_reports"]},D=function(){return["/expiry"]},N=function(){return["/add_purchase"]},w=function(){return["/products"]},L=function(){return["/add_customer"]},F=function(){return["/customers"]},M=function(){return["/diagnostics"]},O=function(){return["/stockTaking"]},T=function(){return["/client_stock"]},P=function(){return["/stockSessionReport"]},j=function(){return["/expiry/all"]},A=function(){return["/expiry/this_month"]},J=function(){return["/expiry/next_month"]},R=function(){return["/stockout"]},B=function(){return["/near_min"]},H=function(){return["/near_max"]},U=[{path:"",component:(b=function(){function e(t,n){_classCallCheck(this,e),this.authService=t,this.dbService=n,this.customers="...",this.products="...",this.vendors="...",this.orders="...",this.total_arrears=0,this.loading=!1,this.extras=[],this.user=this.authService.current_user}return _createClass(e,[{key:"ngOnInit",value:function(){this.getExpiredCount(),this.getNextMonthExpiredCount(),this.getAllExpiredCount(),this.getStockOutCount(),this.getStockNearMaxCount(),this.getStockNearMinCount()}},{key:"getCustomerCount",value:function(){var e=this;this.dbService.getData("customer/getCustomerCount",this.authService.current_user).subscribe((function(t){"0"==t.status&&e.authService.logout(),e.customers=t.data}),(function(e){}))}},{key:"getArrears",value:function(){var e=this;this.dbService.getData("order/getCustomersArrearsCount",this.authService.current_user).subscribe((function(t){e.arrears=t.data,e.total_arrears=t.total}),(function(e){}))}},{key:"getProductCount",value:function(){var e=this;this.dbService.getData("product/count",this.authService.current_user).subscribe((function(t){e.products=t.data}),(function(e){}))}},{key:"getVendorCount",value:function(){var e=this;this.dbService.getData("vendor/count",this.authService.current_user).subscribe((function(t){e.vendors=t.data}),(function(e){}))}},{key:"getOrderCount",value:function(){var e=this;this.dbService.getData("order/count?status=Pending",this.authService.current_user).subscribe((function(t){e.orders=t.data}),(function(e){}))}},{key:"getStockOutCount",value:function(){var e=this;this.dbService.getData("product/hasStockOut",this.authService.current_user).subscribe((function(t){e.stock_out=t.data}),(function(e){}))}},{key:"getStockNearMinCount",value:function(){var e=this;this.dbService.getData("product/hasStockNearMin",this.authService.current_user).subscribe((function(t){e.near_min=t.data}),(function(e){}))}},{key:"getStockNearMaxCount",value:function(){var e=this;this.dbService.getData("product/hasStockNearMax",this.authService.current_user).subscribe((function(t){e.near_max=t.data}),(function(e){}))}},{key:"getExpiredCount",value:function(){var e=this;this.dbService.getData("product/hasExpiry",this.authService.current_user).subscribe((function(t){"0"==t.status&&e.authService.logout(),e.expired=t.data}),(function(e){}))}},{key:"getNextMonthExpiredCount",value:function(){var e=this,t=this.dbService.getToday("month"),n=parseInt(t)+1,r=this.dbService.getThisYear();this.expiry_year=r,"12"==t&&(this.expiry_year=r+1);var a=this.dbService.getLastDayOfMonth(n),i=this.dbService.formatDate(new Date(this.expiry_year+"-"+n+"-01")),o=this.dbService.formatDate(new Date(this.expiry_year+"-"+n+"-"+a));this.dbService.getData("product/hasExpiry?start_date="+i+"&end_date="+o,this.authService.current_user).subscribe((function(t){e.expired_next=t.data}),(function(e){}))}},{key:"getAllExpiredCount",value:function(){var e=this,t=this.dbService.getToday("month"),n=parseInt(t)+1,r=this.dbService.getThisYear();this.expiry_year=r,"12"==t&&(this.expiry_year=r+1),this.dbService.getLastDayOfMonth(n),this.dbService.getData("product/hasExpired",this.authService.current_user).subscribe((function(t){e.expired_all=t.data}),(function(e){}))}},{key:"goBack",value:function(){window.history.back()}},{key:"getNewTransfersCount",value:function(){var e=this;this.dbService.getData("transfer/getPendingTransfersCount",this.authService.current_user).subscribe((function(t){e.pending_transfers=t.data}),(function(e){}))}},{key:"getNewTransferConflictsCount",value:function(){var e=this;this.dbService.getData("transfer/getConflictCount",this.authService.current_user).subscribe((function(t){e.pending_conflicts=t.data}),(function(e){}))}},{key:"getData",value:function(){var e=this;this.loading=!0,this.dbService.getData("admin/getDashboardMeter",this.authService.current_user).subscribe((function(t){e.loading=!1,e.pending_conflicts=t.transfer_conflicts,e.expired_all=t.expired,e.expired_next=t.expiring_next_month,e.expired=t.expiring_this_month,e.stock_out=t.out_of_stock,e.near_max=t.max_stock,e.near_min=t.min_stock,e.pending_transfers=t.incoming_transfers}),(function(t){e.loading=!1}))}},{key:"uploadFile",value:function(e){var t=e.target.files;t.length>0&&(this.file=t[0])}},{key:"upload2",value:function(){var e=this;this.dbService.uploadFileAuth(this.file,"api_product/uploadProducts",this.authService.current_user,this.extras).subscribe((function(t){"1"===t.json().status&&(alert("Uploaded successfully. "),e.filename="",e.dbService.refresh_products.next(!0))}),(function(t){e.filename="",console.log(t),alert("Unable to send file. Please try again or contact us")}))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](l.a))},b.\u0275cmp=i["\u0275\u0275defineComponent"]({type:b,selectors:[["app-dashboard"]],decls:135,vars:51,consts:[[1,"content"],[1,"container"],[1,"text-info"],[1,"text-danger"],[1,"row"],[1,"col-md-6"],[1,"col-sm-4"],[3,"routerLink"],[1,"text-center","dashboard-card","bg-info"],[1,"card-body"],[1,"fa","fa-2x","fa-print"],[1,"dashboard-card","text-center","bg-info"],[1,"card-body","bg-aqua-active"],[1,"fa","fa-2x","fa-file-text-o"],[1,"fa","fa-2x","fa-file-o"],[1,"text-center","dashboard-card","bg-danger"],[1,"fa","fa-2x","fa-exclamation-triangle"],[1,"fa","fa-2x","fa-truck"],[1,"fa","fa-2x","fa-database"],[1,"fa","fa-2x","fa-user-plus"],[1,"fa","fa-2x","fa-users"],[1,"fa","fa-2x","fa-stethoscope"],[1,"fa","fa-2x","fa-refresh"],[1,"fa","fa-2x","fa-phone"],[1,"fa","fa-2x","fa-line-chart"],[1,"list-group"],[1,"list-group-item","text-white","bg-info"],[1,"feather","icon-chevrons-right"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[4,"ngIf"],[1,"fa","fa-spin","fa-spinner"],[1,"fa","fa-exclamation-triangle","text-danger"],[1,"fa","fa-check-circle","text-success"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"section",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"h4",2),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"h5",3),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"h5"),i["\u0275\u0275text"](7," Dashboard"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",4),i["\u0275\u0275elementStart"](9,"div",5),i["\u0275\u0275elementStart"](10,"div",4),i["\u0275\u0275elementStart"](11,"div",6),i["\u0275\u0275elementStart"](12,"a",7),i["\u0275\u0275elementStart"](13,"div",8),i["\u0275\u0275elementStart"](14,"div",9),i["\u0275\u0275element"](15,"i",10),i["\u0275\u0275element"](16,"br"),i["\u0275\u0275elementStart"](17,"b"),i["\u0275\u0275text"](18,"Start Sales"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"div",6),i["\u0275\u0275elementStart"](20,"a",7),i["\u0275\u0275elementStart"](21,"div",11),i["\u0275\u0275elementStart"](22,"div",12),i["\u0275\u0275element"](23,"i",13),i["\u0275\u0275element"](24,"br"),i["\u0275\u0275elementStart"](25,"b"),i["\u0275\u0275text"](26,"Sales History"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](27,"div",6),i["\u0275\u0275elementStart"](28,"a",7),i["\u0275\u0275elementStart"](29,"div",8),i["\u0275\u0275elementStart"](30,"div",9),i["\u0275\u0275element"](31,"i",14),i["\u0275\u0275element"](32,"br"),i["\u0275\u0275elementStart"](33,"b"),i["\u0275\u0275text"](34,"End Of Day"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"div",4),i["\u0275\u0275elementStart"](36,"div",6),i["\u0275\u0275elementStart"](37,"a",7),i["\u0275\u0275elementStart"](38,"div",15),i["\u0275\u0275elementStart"](39,"div",9),i["\u0275\u0275element"](40,"i",16),i["\u0275\u0275element"](41,"br"),i["\u0275\u0275elementStart"](42,"b"),i["\u0275\u0275text"](43,"Expired Items"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"div",6),i["\u0275\u0275elementStart"](45,"a",7),i["\u0275\u0275elementStart"](46,"div",8),i["\u0275\u0275elementStart"](47,"div",9),i["\u0275\u0275element"](48,"i",17),i["\u0275\u0275element"](49,"br"),i["\u0275\u0275elementStart"](50,"b"),i["\u0275\u0275text"](51,"Purchases"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](52,"div",6),i["\u0275\u0275elementStart"](53,"a",7),i["\u0275\u0275elementStart"](54,"div",8),i["\u0275\u0275elementStart"](55,"div",9),i["\u0275\u0275element"](56,"i",18),i["\u0275\u0275element"](57,"br"),i["\u0275\u0275elementStart"](58,"b"),i["\u0275\u0275text"](59,"View Inventory"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](60,"div",4),i["\u0275\u0275elementStart"](61,"div",6),i["\u0275\u0275elementStart"](62,"a",7),i["\u0275\u0275elementStart"](63,"div",8),i["\u0275\u0275elementStart"](64,"div",9),i["\u0275\u0275element"](65,"i",19),i["\u0275\u0275element"](66,"br"),i["\u0275\u0275elementStart"](67,"b"),i["\u0275\u0275text"](68,"New Customer"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](69,"div",6),i["\u0275\u0275elementStart"](70,"a",7),i["\u0275\u0275elementStart"](71,"div",8),i["\u0275\u0275elementStart"](72,"div",9),i["\u0275\u0275element"](73,"i",20),i["\u0275\u0275element"](74,"br"),i["\u0275\u0275elementStart"](75,"b"),i["\u0275\u0275text"](76,"Customers"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](77,"div",6),i["\u0275\u0275elementStart"](78,"a",7),i["\u0275\u0275elementStart"](79,"div",8),i["\u0275\u0275elementStart"](80,"div",9),i["\u0275\u0275element"](81,"i",21),i["\u0275\u0275element"](82,"br"),i["\u0275\u0275elementStart"](83,"b"),i["\u0275\u0275text"](84,"Diagnostics"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](85,"div",4),i["\u0275\u0275elementStart"](86,"div",6),i["\u0275\u0275elementStart"](87,"a",7),i["\u0275\u0275elementStart"](88,"div",8),i["\u0275\u0275elementStart"](89,"div",9),i["\u0275\u0275element"](90,"i",22),i["\u0275\u0275element"](91,"br"),i["\u0275\u0275elementStart"](92,"b"),i["\u0275\u0275text"](93,"Take Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](94,"div",6),i["\u0275\u0275elementStart"](95,"a",7),i["\u0275\u0275elementStart"](96,"div",8),i["\u0275\u0275elementStart"](97,"div",9),i["\u0275\u0275element"](98,"i",23),i["\u0275\u0275element"](99,"br"),i["\u0275\u0275elementStart"](100,"b"),i["\u0275\u0275text"](101,"Remote Stocking"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](102,"div",6),i["\u0275\u0275elementStart"](103,"a",7),i["\u0275\u0275elementStart"](104,"div",8),i["\u0275\u0275elementStart"](105,"div",9),i["\u0275\u0275element"](106,"i",24),i["\u0275\u0275element"](107,"br"),i["\u0275\u0275elementStart"](108,"b"),i["\u0275\u0275text"](109,"Stock Reports"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](110,"div",5),i["\u0275\u0275elementStart"](111,"div",25),i["\u0275\u0275elementStart"](112,"a",26),i["\u0275\u0275elementStart"](113,"b"),i["\u0275\u0275element"](114,"i",27),i["\u0275\u0275text"](115," Inventory Status "),i["\u0275\u0275template"](116,u,1,0,"i",28),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](117,"a",29),i["\u0275\u0275template"](118,c,3,0,"span",30),i["\u0275\u0275template"](119,s,3,0,"span",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](120,"a",29),i["\u0275\u0275template"](121,d,3,0,"span",30),i["\u0275\u0275template"](122,m,3,0,"span",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](123,"a",29),i["\u0275\u0275template"](124,p,3,0,"span",30),i["\u0275\u0275template"](125,f,3,0,"span",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](126,"a",29),i["\u0275\u0275template"](127,v,3,0,"span",30),i["\u0275\u0275template"](128,S,3,0,"span",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](129,"a",29),i["\u0275\u0275template"](130,h,3,0,"span",30),i["\u0275\u0275template"](131,x,3,0,"span",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](132,"a",29),i["\u0275\u0275template"](133,g,3,0,"span",30),i["\u0275\u0275template"](134,E,3,0,"span",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate1"]("Welcome, ",t.user.display_name," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",t.user.company.name," "),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](33,k)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](34,C)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](35,I)),i["\u0275\u0275advance"](9),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](36,D)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](37,N)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](38,w)),i["\u0275\u0275advance"](9),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](39,L)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](40,F)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](41,M)),i["\u0275\u0275advance"](9),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](42,O)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](43,T)),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](44,P)),i["\u0275\u0275advance"](13),i["\u0275\u0275property"]("ngIf",t.loading),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](45,j)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.expired_all),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.expired_all),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](46,A)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.expired),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.expired),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](47,J)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.expired_next),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.expired_next),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](48,R)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.stock_out),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.stock_out),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](49,B)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_min),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.near_min),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](50,H)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_max),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.near_max))},directives:[a.e,r.j],styles:[""]}),b)}],V=((y=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[a.f.forChild(U)],a.f]}),y),X=n("nEHF"),Y=((_=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[r.b,V,X.a]]}),_)}}]);