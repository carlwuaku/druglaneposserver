function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{TDBs:function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",(function(){return T}));var a,r=n("ofXK"),i=n("tyNb"),l=n("fXoL"),o=n("ccyI"),s=n("c92J"),c=((a=function(){function e(t,n){var a=this;_classCallCheck(this,e),this.dbService=t,this.authService=n,this.height=50,this.dbService.server_address.subscribe((function(e){a.base_url=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.dbService.getData("admin/getLogo",this.authService.current_user).subscribe((function(t){e.logo=t.data}),(function(e){}))}}]),e}()).\u0275fac=function(e){return new(e||a)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](o.a))},a.\u0275cmp=l["\u0275\u0275defineComponent"]({type:a,selectors:[["app-logo"]],inputs:{height:"height"},decls:1,vars:2,consts:[["alt","logo",3,"src","height"]],template:function(e,t){1&e&&l["\u0275\u0275element"](0,"img",0),2&e&&(l["\u0275\u0275propertyInterpolate"]("src",t.logo,l["\u0275\u0275sanitizeUrl"]),l["\u0275\u0275propertyInterpolate"]("height",t.height))},styles:[""]}),a);function d(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",6),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",39),l["\u0275\u0275element"](3,"i",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Stock Cost Value"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",40),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",n.stock_cost_value," ")}}function u(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",6),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",39),l["\u0275\u0275element"](3,"i",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Stock Selling Value"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",40),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",n.stock_selling_value," ")}}function m(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",6),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",41),l["\u0275\u0275element"](3,"i",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Expiring This Month"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",42),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",n.expired," Items")}}function v(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",6),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",17),l["\u0275\u0275element"](3,"i",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Expiring Next Month"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",43),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",n.expired_next," Items")}}function p(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",16),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",41),l["\u0275\u0275element"](3,"i",44),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Almost out of stock"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",45),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",n.near_min," Items")}}function f(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",16),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",39),l["\u0275\u0275element"](3,"i",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Stock Out"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",46),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",n.stock_out," Items")}}function h(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",16),l["\u0275\u0275elementStart"](1,"div",7),l["\u0275\u0275elementStart"](2,"span",47),l["\u0275\u0275element"](3,"i",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",10),l["\u0275\u0275elementStart"](5,"span",11),l["\u0275\u0275text"](6,"Suppliers Debt Balance"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span",12),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",48),l["\u0275\u0275text"](10,"More Details "),l["\u0275\u0275element"](11,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("GH\xa2 ",n.balance.toLocaleString(),"")}}var S=function(){return["/new_sale"]};function _(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",22),l["\u0275\u0275elementStart"](1,"a",23),l["\u0275\u0275elementStart"](2,"div",27),l["\u0275\u0275elementStart"](3,"div",28),l["\u0275\u0275element"](4,"i",49),l["\u0275\u0275element"](5,"br"),l["\u0275\u0275elementStart"](6,"b"),l["\u0275\u0275text"](7,"Start Sales"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](1,S)))}var x=function(){return["/add_purchase"]};function g(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",22),l["\u0275\u0275elementStart"](1,"a",23),l["\u0275\u0275elementStart"](2,"div",27),l["\u0275\u0275elementStart"](3,"div",28),l["\u0275\u0275element"](4,"i",50),l["\u0275\u0275element"](5,"br"),l["\u0275\u0275elementStart"](6,"b"),l["\u0275\u0275text"](7,"Purchases"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](1,x)))}var b=function(){return["/add_customer"]},E=function(){return["/customers"]};function y(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",4),l["\u0275\u0275elementStart"](1,"div",22),l["\u0275\u0275elementStart"](2,"a",23),l["\u0275\u0275elementStart"](3,"div",27),l["\u0275\u0275elementStart"](4,"div",28),l["\u0275\u0275element"](5,"i",51),l["\u0275\u0275element"](6,"br"),l["\u0275\u0275elementStart"](7,"b"),l["\u0275\u0275text"](8,"New Customer"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div",22),l["\u0275\u0275elementStart"](10,"a",23),l["\u0275\u0275elementStart"](11,"div",27),l["\u0275\u0275elementStart"](12,"div",28),l["\u0275\u0275element"](13,"i",52),l["\u0275\u0275element"](14,"br"),l["\u0275\u0275elementStart"](15,"b"),l["\u0275\u0275text"](16,"Customers"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](2,b)),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](3,E)))}function k(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"a",53),l["\u0275\u0275element"](1,"i",54),l["\u0275\u0275text"](2),l["\u0275\u0275element"](3,"i",55),l["\u0275\u0275text"](4),l["\u0275\u0275element"](5,"br"),l["\u0275\u0275elementStart"](6,"b"),l["\u0275\u0275text"](7,"Due: "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](8),l["\u0275\u0275element"](9,"br"),l["\u0275\u0275elementStart"](10,"b"),l["\u0275\u0275text"](11,"Items: "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](12),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",n.customer_name,". "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",n.phone," "),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",n.end_date," "),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",n.product," ")}}var C,I,w,D=function(){return["/sales"]},M=function(){return["/sales_reports"]},L=function(){return["/expiry"]},F=function(){return["/products"]},N=function(){return["/refills"]},O=[{path:"",component:(C=function(){function e(t,n){_classCallCheck(this,e),this.authService=t,this.dbService=n,this.customers="...",this.products="...",this.vendors="...",this.orders="...",this.total_arrears=0,this.loading=!1,this.refills="",this.total_purchased="",this.balance="",this.credit_purchased="",this.total_paid="",this.stock_cost_value="",this.stock_selling_value="",this.extras=[],this.user=this.authService.current_user,this.can_view_accounts=-1!=this.authService.current_user.permissions.indexOf("View Accounts"),this.can_view_inventory=-1!=this.authService.current_user.permissions.indexOf("View Inventory")}return _createClass(e,[{key:"ngOnInit",value:function(){this.getArrears(),this.getTotals(),this.getExpiredCount(),this.getNextMonthExpiredCount(),this.getAllExpiredCount(),this.getStockOutCount(),this.getStockNearMaxCount(),this.getStockNearMinCount(),"admin"!==this.user.type&&this.getRefillCount(),this.getStockValues()}},{key:"getTotals",value:function(){var e=this,t=this.dbService.setDates("today");this.dbService.getData("purchase/getPurchaseTotals?start_date=1970-01-01&company_id="+this.authService.current_user.company_id+"&end_date="+t.start_date,this.authService.current_user).subscribe((function(t){e.total_paid=t.total_paid,e.balance=t.balance,e.total_purchased=t.total_purchase,e.credit_purchased=t.total_credit}),(function(e){}))}},{key:"getCustomerCount",value:function(){var e=this;this.dbService.getData("customer/getCustomerCount",this.authService.current_user).subscribe((function(t){e.customers=t.data}),(function(e){}))}},{key:"getStockValues",value:function(){var e=this;this.dbService.getData("product/getStockValues?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.stock_cost_value=t.data.cost_value,e.stock_selling_value=t.data.selling_value}),(function(e){}))}},{key:"getArrears",value:function(){var e=this;this.dbService.getData("sale/getArrearsCount",this.authService.current_user).subscribe((function(t){e.total_arrears=t.overall_balance}),(function(e){}))}},{key:"getProductCount",value:function(){var e=this;this.dbService.getData("product/count",this.authService.current_user).subscribe((function(t){e.products=t.data}),(function(e){}))}},{key:"getVendorCount",value:function(){var e=this;this.dbService.getData("vendor/count",this.authService.current_user).subscribe((function(t){e.vendors=t.data}),(function(e){}))}},{key:"getOrderCount",value:function(){var e=this;this.dbService.getData("order/count?status=Pending",this.authService.current_user).subscribe((function(t){e.orders=t.data}),(function(e){}))}},{key:"getRefillCount",value:function(){var e=this,t=this.dbService.setDates("this_week");this.dbService.getData("customer/findRefillBetweenDates?start_date="+t.start_date+"&end_date="+t.end_date,this.authService.current_user).subscribe((function(t){e.refills=t.data}),(function(e){}))}},{key:"getStockOutCount",value:function(){var e=this;this.dbService.getData("product/getStockOutCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.stock_out=t.data}),(function(e){}))}},{key:"getStockNearMinCount",value:function(){var e=this;this.dbService.getData("product/getStockNearMinCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.near_min=t.data}),(function(e){}))}},{key:"getStockNearMaxCount",value:function(){var e=this;this.dbService.getData("product/getStockNearMaxCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.near_max=t.data}),(function(e){}))}},{key:"getExpiredCount",value:function(){var e=this;this.dbService.getData("product/getExpiryCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.expired=t.data}),(function(e){}))}},{key:"getNextMonthExpiredCount",value:function(){var e=this,t=this.dbService.setDates("next_month");this.dbService.getData("product/hasExpiry?start_date="+t.start_date+"&end_date="+t.end_date+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.expired_next=t.count}),(function(e){}))}},{key:"getAllExpiredCount",value:function(){var e=this,t=this.dbService.getToday("month"),n=parseInt(t)+1,a=this.dbService.getThisYear();this.expiry_year=a,"12"==t&&(this.expiry_year=a+1),this.dbService.getLastDayOfMonth(n),this.dbService.getData("product/hasExpired?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.expired_all=t.count}),(function(e){}))}},{key:"goBack",value:function(){window.history.back()}},{key:"getNewTransfersCount",value:function(){var e=this;this.dbService.getData("transfer/getPendingTransfersCount",this.authService.current_user).subscribe((function(t){e.pending_transfers=t.data}),(function(e){}))}},{key:"getNewTransferConflictsCount",value:function(){var e=this;this.dbService.getData("transfer/getConflictCount",this.authService.current_user).subscribe((function(t){e.pending_conflicts=t.data}),(function(e){}))}},{key:"getData",value:function(){var e=this;this.loading=!0,this.dbService.getData("admin/getDashboardMeter",this.authService.current_user).subscribe((function(t){e.loading=!1,e.pending_conflicts=t.transfer_conflicts,e.expired_all=t.expired,e.expired_next=t.expiring_next_month,e.expired=t.expiring_this_month,e.stock_out=t.out_of_stock,e.near_max=t.max_stock,e.near_min=t.min_stock,e.pending_transfers=t.incoming_transfers}),(function(t){e.loading=!1}))}},{key:"uploadFile",value:function(e){var t=e.target.files;t.length>0&&(this.file=t[0])}},{key:"upload2",value:function(){var e=this;this.dbService.uploadFileAuth(this.file,"api_product/uploadProducts",this.authService.current_user,this.extras).subscribe((function(t){"1"===t.json().status&&(alert("Uploaded successfully. "),e.filename="",e.dbService.refresh_products.next(!0))}),(function(t){e.filename="",console.log(t),alert("Unable to send file. Please try again or contact us")}))}}]),e}(),C.\u0275fac=function(e){return new(e||C)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](s.a))},C.\u0275cmp=l["\u0275\u0275defineComponent"]({type:C,selectors:[["app-dashboard"]],decls:89,vars:25,consts:[[1,"content"],[1,"container"],[1,"text-info"],[1,"text-danger"],[1,"row"],["class","col-md-3 col-sm-6 col-12",4,"ngIf"],[1,"col-md-3","col-sm-6","col-12"],[1,"info-box"],[1,"info-box-icon","bg-danger"],[1,"fa","fa-exclamation-triangle"],[1,"info-box-content"],[1,"info-box-text"],[1,"info-box-number"],["routerLink","/expiry/all",1,"small-text"],[1,"fa","fa-arrow-right"],["class","col-md-3",4,"ngIf"],[1,"col-md-3"],[1,"info-box-icon","bg-info"],[1,"fa","fa-dollar"],["routerLink","/arrears",1,"small-text"],[1,"col-md-6"],["class","col-sm-4",4,"ngIf"],[1,"col-sm-4"],[3,"routerLink"],[1,"dashboard-card","text-center","bg-success"],[1,"card-body","bg-aqua-active"],[1,"fa","fa-2x","fa-file-text-o"],[1,"text-center","dashboard-card","bg-success"],[1,"card-body"],[1,"fa","fa-2x","fa-file-o"],[1,"text-center","dashboard-card","bg-danger"],[1,"fa","fa-2x","fa-exclamation-triangle"],[1,"fa","fa-2x","fa-database"],["class","row",4,"ngIf"],[1,"list-group"],[1,"list-group-item","text-white","bg-info"],[1,"feather","icon-chevrons-right"],[1,"btn","btn-sm","btn-warning",3,"routerLink"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"info-box-icon","bg-primary"],["routerLink","/stock_report",1,"small-text"],[1,"info-box-icon","bg-warning"],["routerLink","/expiry/this_month",1,"small-text"],["routerLink","/expiry/next_month",1,"small-text"],[1,"fa","fa-arrow-down"],["routerLink","/near_min",1,"small-text"],["routerLink","/stockout",1,"small-text"],[1,"info-box-icon","bg-success"],["routerLink","/purchase_payment_history",1,"small-text"],[1,"fa","fa-2x","fa-print"],[1,"fa","fa-2x","fa-truck"],[1,"fa","fa-2x","fa-user-plus"],[1,"fa","fa-2x","fa-users"],[1,"list-group-item"],[1,"fa","fa-user"],[1,"fa","fa-phone"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"section",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"h4",2),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"h5",3),l["\u0275\u0275element"](5,"app-logo"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"h5"),l["\u0275\u0275text"](8," Dashboard "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div",4),l["\u0275\u0275template"](10,d,12,1,"div",5),l["\u0275\u0275template"](11,u,12,1,"div",5),l["\u0275\u0275elementStart"](12,"div",6),l["\u0275\u0275elementStart"](13,"div",7),l["\u0275\u0275elementStart"](14,"span",8),l["\u0275\u0275element"](15,"i",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"div",10),l["\u0275\u0275elementStart"](17,"span",11),l["\u0275\u0275text"](18,"Expired"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"span",12),l["\u0275\u0275text"](20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"a",13),l["\u0275\u0275text"](22,"More Details "),l["\u0275\u0275element"](23,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](24,m,12,1,"div",5),l["\u0275\u0275template"](25,v,12,1,"div",5),l["\u0275\u0275template"](26,p,12,1,"div",15),l["\u0275\u0275template"](27,f,12,1,"div",15),l["\u0275\u0275elementStart"](28,"div",16),l["\u0275\u0275elementStart"](29,"div",7),l["\u0275\u0275elementStart"](30,"span",17),l["\u0275\u0275element"](31,"i",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"div",10),l["\u0275\u0275elementStart"](33,"span",11),l["\u0275\u0275text"](34,"Customer Arrears"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](35,"span",12),l["\u0275\u0275text"](36),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](37,"a",19),l["\u0275\u0275text"](38,"More Details "),l["\u0275\u0275element"](39,"i",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](40,h,12,1,"div",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](41,"div",4),l["\u0275\u0275elementStart"](42,"div",20),l["\u0275\u0275elementStart"](43,"div",4),l["\u0275\u0275template"](44,_,8,2,"div",21),l["\u0275\u0275elementStart"](45,"div",22),l["\u0275\u0275elementStart"](46,"a",23),l["\u0275\u0275elementStart"](47,"div",24),l["\u0275\u0275elementStart"](48,"div",25),l["\u0275\u0275element"](49,"i",26),l["\u0275\u0275element"](50,"br"),l["\u0275\u0275elementStart"](51,"b"),l["\u0275\u0275text"](52,"Sales History"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](53,"div",22),l["\u0275\u0275elementStart"](54,"a",23),l["\u0275\u0275elementStart"](55,"div",27),l["\u0275\u0275elementStart"](56,"div",28),l["\u0275\u0275element"](57,"i",29),l["\u0275\u0275element"](58,"br"),l["\u0275\u0275elementStart"](59,"b"),l["\u0275\u0275text"](60,"End Of Day"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](61,"div",4),l["\u0275\u0275elementStart"](62,"div",22),l["\u0275\u0275elementStart"](63,"a",23),l["\u0275\u0275elementStart"](64,"div",30),l["\u0275\u0275elementStart"](65,"div",28),l["\u0275\u0275element"](66,"i",31),l["\u0275\u0275element"](67,"br"),l["\u0275\u0275elementStart"](68,"b"),l["\u0275\u0275text"](69,"Expired Items"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](70,g,8,2,"div",21),l["\u0275\u0275elementStart"](71,"div",22),l["\u0275\u0275elementStart"](72,"a",23),l["\u0275\u0275elementStart"](73,"div",27),l["\u0275\u0275elementStart"](74,"div",28),l["\u0275\u0275element"](75,"i",32),l["\u0275\u0275element"](76,"br"),l["\u0275\u0275elementStart"](77,"b"),l["\u0275\u0275text"](78,"View Inventory"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](79,y,17,4,"div",33),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](80,"div",20),l["\u0275\u0275elementStart"](81,"div",34),l["\u0275\u0275elementStart"](82,"a",35),l["\u0275\u0275elementStart"](83,"b"),l["\u0275\u0275element"](84,"i",36),l["\u0275\u0275text"](85," Upcoming Refills "),l["\u0275\u0275elementStart"](86,"a",37),l["\u0275\u0275text"](87,"More Details..."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](88,k,13,4,"a",38),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"]("Welcome, ",t.user.display_name," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",t.user.company.name," "),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",t.can_view_accounts),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.can_view_accounts),l["\u0275\u0275advance"](9),l["\u0275\u0275textInterpolate1"]("",t.expired_all," Items"),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",t.can_view_inventory),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.can_view_inventory),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.can_view_inventory),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.can_view_inventory),l["\u0275\u0275advance"](9),l["\u0275\u0275textInterpolate1"]("GH\xa2 ",t.total_arrears,""),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",t.can_view_accounts),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf","admin"!=t.user.type),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](20,D)),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](21,M)),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](22,L)),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("ngIf","admin"!=t.user.type),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](23,F)),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("ngIf","admin"!=t.user.type),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](24,N)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.refills))},directives:[c,r.j,i.e,r.i],styles:[""]}),C)}],j=((I=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[i.f.forChild(O)],i.f]}),I),P=n("nEHF"),T=((w=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[r.b,j,P.a]]}),w)}}]);