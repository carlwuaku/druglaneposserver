(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"la+d":function(e,t,n){"use strict";n.r(t),n.d(t,"ProductDashboardModule",(function(){return I}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),s=n("ccyI"),o=n("BbYg"),c=n("1VJT"),l=n("c92J"),d=n("3Pt+"),h=n("VWED"),m=n("g1vN"),u=n("pEcs"),p=n("hiAm");function g(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",41),r["\u0275\u0275text"](1,"More Details "),r["\u0275\u0275element"](2,"i",17),r["\u0275\u0275elementEnd"]())}function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",41),r["\u0275\u0275text"](1,"More Details "),r["\u0275\u0275element"](2,"i",17),r["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",43),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",e.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function v(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select Branch "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",42),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().company_id=t})),r["\u0275\u0275elementStart"](4,"option",25),r["\u0275\u0275text"](5,"All"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,y,2,2,"option",26),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](7,"hr"),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",e.company_id),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",e.branches)}}function b(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",43),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",e.category),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](e.category)}}function S(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}const _=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a){this.authService=e,this.localforage=t,this.notify=i,this.dbService=a,this.objects=[],this.search_by="names",this.categories=[],this.total=0,this.offset=0,this.field="",this.category="all",this.limit=500,this.title="All",this.is_loading=!1,this.error=!1,this.is_loaded=!1,this.branches=[],this.user_type="staff",this.company_id="all",this.stock_cost_value="",this.stock_selling_value="",this.total_arrears=0,-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome()),this.dbService.setTitle("Inventory"),this.option=n.snapshot.params.option,this.user_type=this.authService.current_user.type,this.parent_company_id=this.authService.current_user.parent_company_id}ngOnInit(){this.getCategories(),this.getStockValues(),this.getProducts(),this.getExpiredCount(),this.getNextMonthExpiredCount(),this.getAllExpiredCount(),this.getStockOutCount(),this.getStockNearMaxCount(),this.getStockNearMinCount()}getStockOutCount(){this.dbService.getData("product/getStockOutCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.stock_out=e.data},e=>{})}getStockNearMinCount(){this.dbService.getData("product/getStockNearMinCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.near_min=e.data},e=>{})}getStockNearMaxCount(){this.dbService.getData("product/getStockNearMaxCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.near_max=e.data},e=>{})}getExpiredCount(){this.dbService.getData("product/getExpiryCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{"0"==e.status&&this.authService.logout(),this.expired=e.data},e=>{})}getNextMonthExpiredCount(){let e=this.dbService.setDates("next_month");console.log(e),this.dbService.getData("product/hasExpiry?start_date="+e.start_date+"&end_date="+e.end_date+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.expired_next=e.count},e=>{})}getAllExpiredCount(){var e=this.dbService.getToday("month"),t=parseInt(e)+1,n=this.dbService.getThisYear();this.expiry_year=n,"12"==e&&(this.expiry_year=n+1),this.dbService.getLastDayOfMonth(t),this.dbService.getData("product/hasExpired?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.expired_all=e.count},e=>{})}getCategories(){this.dbService.getData("product/getCategoryCounts?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.categories=e.data},e=>{})}getStockValues(){this.dbService.getData("product/getStockValues?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.stock_cost_value=e.data.cost_value,this.stock_selling_value=e.data.selling_value},e=>{})}getProducts(){this.notify.showLoading(),this.field="All",this.search_by="fields";let e="getList";switch(this.is_loading=!0,this.option){case"near_max":this.title="Items exceeding maximum stock",e="getStockNearMaxList";break;case"near_min":this.title="Items near minimum stock",e="getStockNearMinList"}this.dbService.getData("product/"+e+"?offset="+this.offset+"&limit="+this.limit+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),this.objects=e.data,this.total=e.total,this.is_loading=!1},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}getOfflineProducts(){this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe(e=>{this.objects=e,this.total=e.length,this.is_loading=!1},e=>{this.getProducts()})}getCategoryProducts(){this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getProducts():(this.is_loading=!0,this.dbService.getDataWithQuery("product/getList",this.authService.current_user,"category="+this.category).subscribe(e=>{this.objects=e.data,this.is_loading=!1},e=>{this.is_loading=!1}))}getOfflineCategoryProducts(){this.is_loading=!0,this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getOfflineProducts():(this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe(e=>{const t=this;this.objects=e.filter(e=>e.category.toLowerCase()===t.category.toLowerCase()),this.total=this.objects.length,this.is_loading=!1},e=>{this.is_loading=!1,this.getCategoryProducts()}))}pageChanged(e){console.log("page changed ",e),this.offset=(e-1)*this.limit,this.getProducts()}limitChanged(e){console.log("limit changed ",e),this.offset=0,this.limit=e,this.getProducts()}getNearMax(){this.option="near_max",this.title="Items exceeding maximum stock",this.getProducts()}getNearMin(){this.option="near_min",this.title="Items near minimum stock",this.getProducts()}search(){this.notify.showLoading(),this.title=`'${this.param}'`;const e="product/search?param="+this.param+"&company_id="+this.authService.current_user.company_id;this.is_loaded=!1,this.is_loading=!0,this.dbService.getData(e,this.authService.current_user).subscribe(e=>{this.is_loading=!1,this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Server error. Please try again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):"0"===e.status?this.notify.showNotification("You are not logged in","fail",3e3):(this.objects=e.data,this.is_loaded=!0,this.error=!1)},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}goBack(){window.history.back()}setBranches(e){this.branches=e}parseInt(e){return parseInt(e)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](o.LocalForageService),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-product-dashboard"]],decls:103,vars:18,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],["routerLink","/add_product",1,"btn","btn-sm","btn-primary"],[1,"feather","icon-plus"],[1,"col-md-3","col-sm-6","col-12"],[1,"info-box"],[1,"info-box-icon","bg-primary"],[1,"fa","fa-dollar"],[1,"info-box-content"],[1,"info-box-text"],[1,"info-box-number"],["class","small-text","routerLink","/stock_report",4,"ngIf"],[1,"info-box-icon","bg-danger"],[1,"fa","fa-exclamation-triangle"],["routerLink","/expiry/all"],[1,"fa","fa-arrow-right"],[1,"info-box-icon","bg-warning"],["routerLink","/expiry/this_month"],[1,"info-box-icon","bg-info"],["routerLink","/expiry/next_month"],[4,"ngIf"],[1,"col-md-4"],[3,"ngModel","ngModelChange"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"col-md-8"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","name","param","required","","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","name","search","value","Search",1,"btn","btn-success","btn-sm"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"limit","total","pageChanged","limitChanged"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"fa","fa-refresh"],[3,"objects","refresh"],[3,"type","onFinish"],["routerLink","/stock_report",1,"small-text"],["name","branch",3,"ngModel","ngModelChange"],[3,"value"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5," Products"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"a",4),r["\u0275\u0275element"](7,"i",5),r["\u0275\u0275text"](8," Add New Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"hr"),r["\u0275\u0275elementStart"](10,"div",2),r["\u0275\u0275elementStart"](11,"div",6),r["\u0275\u0275elementStart"](12,"div",7),r["\u0275\u0275elementStart"](13,"span",8),r["\u0275\u0275element"](14,"i",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",10),r["\u0275\u0275elementStart"](16,"span",11),r["\u0275\u0275text"](17,"Stock Cost Value"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"span",12),r["\u0275\u0275text"](19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](20,g,3,0,"a",13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",6),r["\u0275\u0275elementStart"](22,"div",7),r["\u0275\u0275elementStart"](23,"span",8),r["\u0275\u0275element"](24,"i",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"div",10),r["\u0275\u0275elementStart"](26,"span",11),r["\u0275\u0275text"](27,"Stock Selling Value"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"span",12),r["\u0275\u0275text"](29),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](30,f,3,0,"a",13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"div",6),r["\u0275\u0275elementStart"](32,"div",7),r["\u0275\u0275elementStart"](33,"span",14),r["\u0275\u0275element"](34,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](35,"div",10),r["\u0275\u0275elementStart"](36,"span",11),r["\u0275\u0275text"](37,"Expired"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](38,"span",12),r["\u0275\u0275text"](39),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](40,"a",16),r["\u0275\u0275text"](41,"More Details "),r["\u0275\u0275element"](42,"i",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"div",6),r["\u0275\u0275elementStart"](44,"div",7),r["\u0275\u0275elementStart"](45,"span",18),r["\u0275\u0275element"](46,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](47,"div",10),r["\u0275\u0275elementStart"](48,"span",11),r["\u0275\u0275text"](49,"Expiring This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"span",12),r["\u0275\u0275text"](51),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](52,"a",19),r["\u0275\u0275text"](53,"More Details "),r["\u0275\u0275element"](54,"i",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](55,"div",6),r["\u0275\u0275elementStart"](56,"div",7),r["\u0275\u0275elementStart"](57,"span",20),r["\u0275\u0275element"](58,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](59,"div",10),r["\u0275\u0275elementStart"](60,"span",11),r["\u0275\u0275text"](61,"Expiring Next Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](62,"span",12),r["\u0275\u0275text"](63),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](64,"a",21),r["\u0275\u0275text"](65,"More Details "),r["\u0275\u0275element"](66,"i",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](67,v,8,2,"div",22),r["\u0275\u0275elementStart"](68,"div",2),r["\u0275\u0275elementStart"](69,"div",23),r["\u0275\u0275elementStart"](70,"label"),r["\u0275\u0275text"](71,"Filter by Category/department: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](72,"br"),r["\u0275\u0275elementStart"](73,"select",24),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.category=e})),r["\u0275\u0275elementStart"](74,"option",25),r["\u0275\u0275text"](75,"All"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](76,b,2,2,"option",26),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](77,"button",27),r["\u0275\u0275listener"]("click",(function(){return t.getCategoryProducts()})),r["\u0275\u0275text"](78,"Get Items"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](79,"div",28),r["\u0275\u0275elementStart"](80,"label"),r["\u0275\u0275text"](81,"Or search for a product name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](82,"br"),r["\u0275\u0275elementStart"](83,"form",29,30),r["\u0275\u0275listener"]("ngSubmit",(function(){return t.search()})),r["\u0275\u0275elementStart"](85,"input",31),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.param=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](86,"input",32),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](87,"hr"),r["\u0275\u0275element"](88,"hr"),r["\u0275\u0275template"](89,S,1,0,"app-loading",22),r["\u0275\u0275elementStart"](90,"div",33),r["\u0275\u0275elementStart"](91,"div",34),r["\u0275\u0275elementStart"](92,"h5"),r["\u0275\u0275text"](93),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](94,"div",35),r["\u0275\u0275elementStart"](95,"app-pagination",36),r["\u0275\u0275listener"]("pageChanged",(function(e){return t.pageChanged(e)}))("limitChanged",(function(e){return t.limitChanged(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](96,"b"),r["\u0275\u0275text"](97),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](98,"button",37),r["\u0275\u0275listener"]("click",(function(){return t.getProducts()})),r["\u0275\u0275element"](99,"i",38),r["\u0275\u0275text"](100," Refresh"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](101,"app-product-list",39),r["\u0275\u0275listener"]("refresh",(function(){return t.getCategoryProducts()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](102,"app-select-branch",40),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setBranches(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](19),r["\u0275\u0275textInterpolate1"]("",t.stock_cost_value," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","admin"!=t.user_type),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"]("",t.stock_selling_value," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","admin"!=t.user_type),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"]("",t.expired_all," Items"),r["\u0275\u0275advance"](12),r["\u0275\u0275textInterpolate1"]("",t.expired," Items"),r["\u0275\u0275advance"](12),r["\u0275\u0275textInterpolate1"]("",t.expired_next," Items"),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf","admin"==t.user_type),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngModel",t.category),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",t.categories),r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("ngModel",t.param),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](t.title),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("limit",t.limit)("total",t.total),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("Total Number of Products: ",t.total," "),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("objects",t.objects),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("type","emit"))},directives:[a.e,i.j,d.m,d.e,d.h,d.i,d.n,i.i,d.f,d.g,d.b,d.l,h.a,m.a,u.a,p.a],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(_)],a.f]}),e})();var E=n("nEHF"),C=n("nBlB");let I=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,x,E.a,C.a]]}),e})()},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var i=n("fXoL");class a{constructor(){}}var r=n("c92J"),s=n("ccyI"),o=n("1VJT"),c=n("ofXK"),l=n("3Pt+"),d=n("hiAm");function h(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",e.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function p(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,h,2,0,"button",4),i["\u0275\u0275template"](2,m,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).selected_item=t}))("change",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,u,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.objects)}}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,p,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.is_loaded)}}function f(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function y(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).add(n)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",e.name," ")}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,v,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.objects)}}function S(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,f,1,0,"app-loading",3),i["\u0275\u0275template"](3,y,3,0,"div",3),i["\u0275\u0275template"](4,b,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",e.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.is_finished_search)}}let _=(()=>{class e{constructor(e,t,n){this.dbService=e,this.authService=t,this.notify=n,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}ngOnInit(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}itemSelected(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}itemAdded(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}list(){this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status||(this.objects=e.data,this.is_loaded=!0)},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}getAll(){this.is_loaded=!1,this.notify.showLoading();let e="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(e+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(e,this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status||(this.objects=e.data,this.onFinish.emit(this.objects),this.is_loaded=!0)},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification()})}add(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}select(e){this.selected=e,this.onFinish.emit(e)}addItem(){this.notify.showLoading();let e=window.prompt("Enter name of branch");if(this.dbService.isEmpty(e))return this.notify.failNotification("name is required"),!1;let t=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("Phone number is required"),!1;let n=new FormData;n.append("name",e),n.append("phone",t),this.dbService.postData(n,"admin/saveBranch",this.authService.current_user).subscribe(n=>{if(this.notify.hideLoading(),"-1"===n.status)this.notify.failNotification("Server error. Please try again");else if("-1"===n.status)this.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===n.status)this.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{let i=new a;i.id=n.status,i.name=e,i.phone=t,this.objects.push(i),this.notify.successNotification("Branch added successfully"),this.selected_item=i.id,this.itemSelected()}},e=>{this.notify.noConnectionNotification()})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,g,2,1,"span",0),i["\u0275\u0275template"](1,S,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[c.j,l.m,l.e,l.h,c.i,l.i,l.n,d.a],styles:[""]}),e})()}}]);