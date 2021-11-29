function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"la+d":function(e,t,n){"use strict";n.r(t),n.d(t,"ProductDashboardModule",(function(){return M}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("ccyI"),s=n("BbYg"),c=n("1VJT"),l=n("c92J"),d=n("3Pt+"),u=n("VWED"),m=n("g1vN"),h=n("pEcs"),p=n("hiAm");function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",43),r["\u0275\u0275text"](1,"More Details "),r["\u0275\u0275element"](2,"i",17),r["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",43),r["\u0275\u0275text"](1,"More Details "),r["\u0275\u0275element"](2,"i",17),r["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",45),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function y(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select Branch "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",44),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().company_id=e})),r["\u0275\u0275elementStart"](4,"option",25),r["\u0275\u0275text"](5,"All"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,v,2,2,"option",26),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](7,"hr"),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.company_id),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",i.branches)}}function b(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",45),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n.category),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](n.category)}}function S(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}var _,x,E,k=[{path:"",component:(_=function(){function e(t,n,i,a,r){_classCallCheck(this,e),this.authService=t,this.localforage=n,this.notify=a,this.dbService=r,this.objects=[],this.search_by="names",this.categories=[],this.total=0,this.offset=0,this.field="",this.category="all",this.limit=500,this.title="All",this.is_loading=!1,this.error=!1,this.is_loaded=!1,this.branches=[],this.user_type="staff",this.company_id="all",this.stock_cost_value="",this.stock_selling_value="",this.total_arrears=0,this.advanced="no",-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome()),this.dbService.setTitle("Inventory"),this.option=i.snapshot.params.option,this.user_type=this.authService.current_user.type,this.parent_company_id=this.authService.current_user.parent_company_id}return _createClass(e,[{key:"ngOnInit",value:function(){this.getCategories(),this.getStockValues(),this.getProducts(),this.getExpiredCount(),this.getNextMonthExpiredCount(),this.getAllExpiredCount(),this.getStockOutCount(),this.getStockNearMaxCount(),this.getStockNearMinCount()}},{key:"getStockOutCount",value:function(){var e=this;this.dbService.getData("product/getStockOutCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.stock_out=t.data}),(function(e){}))}},{key:"getStockNearMinCount",value:function(){var e=this;this.dbService.getData("product/getStockNearMinCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.near_min=t.data}),(function(e){}))}},{key:"getStockNearMaxCount",value:function(){var e=this;this.dbService.getData("product/getStockNearMaxCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.near_max=t.data}),(function(e){}))}},{key:"getExpiredCount",value:function(){var e=this;this.dbService.getData("product/getExpiryCount?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){"0"==t.status&&e.authService.logout(),e.expired=t.data}),(function(e){}))}},{key:"getNextMonthExpiredCount",value:function(){var e=this,t=this.dbService.setDates("next_month");console.log(t),this.dbService.getData("product/hasExpiry?start_date="+t.start_date+"&end_date="+t.end_date+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.expired_next=t.count}),(function(e){}))}},{key:"getAllExpiredCount",value:function(){var e=this,t=this.dbService.getToday("month"),n=parseInt(t)+1,i=this.dbService.getThisYear();this.expiry_year=i,"12"==t&&(this.expiry_year=i+1),this.dbService.getLastDayOfMonth(n),this.dbService.getData("product/hasExpired?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.expired_all=t.count}),(function(e){}))}},{key:"getCategories",value:function(){var e=this;this.dbService.getData("product/getCategoryCounts?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.categories=t.data}),(function(e){}))}},{key:"getStockValues",value:function(){var e=this;this.dbService.getData("product/getStockValues?company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.stock_cost_value=t.data.cost_value,e.stock_selling_value=t.data.selling_value}),(function(e){}))}},{key:"getProducts",value:function(){var e=this;this.notify.showLoading(),this.field="All",this.search_by="fields";var t="getList";switch(this.is_loading=!0,this.option){case"near_max":this.title="Items exceeding maximum stock",t="getStockNearMaxList";break;case"near_min":this.title="Items near minimum stock",t="getStockNearMinList"}this.dbService.getData("product/"+t+"?offset="+this.offset+"&limit="+this.limit+"&company_id="+this.authService.current_user.company_id+"&advanced="+this.advanced,this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),e.objects=t.data,e.total=t.total,e.is_loading=!1}),(function(t){e.is_loading=!1,e.notify.noConnectionNotification()}))}},{key:"getOfflineProducts",value:function(){var e=this;this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){e.objects=t,e.total=t.length,e.is_loading=!1}),(function(t){e.getProducts()}))}},{key:"getCategoryProducts",value:function(){var e=this;this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getProducts():(this.is_loading=!0,this.dbService.getDataWithQuery("product/getList",this.authService.current_user,"category="+this.category).subscribe((function(t){e.objects=t.data,e.is_loading=!1}),(function(t){e.is_loading=!1})))}},{key:"getOfflineCategoryProducts",value:function(){var e=this;this.is_loading=!0,this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getOfflineProducts():(this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){var n=e;e.objects=t.filter((function(e){return e.category.toLowerCase()===n.category.toLowerCase()})),e.total=e.objects.length,e.is_loading=!1}),(function(t){e.is_loading=!1,e.getCategoryProducts()})))}},{key:"pageChanged",value:function(e){console.log("page changed ",e),this.offset=(e-1)*this.limit,this.getProducts()}},{key:"limitChanged",value:function(e){console.log("limit changed ",e),this.offset=0,this.limit=e,this.getProducts()}},{key:"getNearMax",value:function(){this.option="near_max",this.title="Items exceeding maximum stock",this.getProducts()}},{key:"getNearMin",value:function(){this.option="near_min",this.title="Items near minimum stock",this.getProducts()}},{key:"search",value:function(){var e=this;this.notify.showLoading(),this.title="'".concat(this.param,"'");var t="product/search?param="+this.param+"&company_id="+this.authService.current_user.company_id+"&advanced="+this.advanced;this.is_loaded=!1,this.is_loading=!0,this.dbService.getData(t,this.authService.current_user).subscribe((function(t){e.is_loading=!1,e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):"0"===t.status?e.notify.showNotification("You are not logged in","fail",3e3):(e.objects=t.data,e.is_loaded=!0,e.error=!1)}),(function(t){e.is_loading=!1,e.notify.noConnectionNotification()}))}},{key:"goBack",value:function(){window.history.back()}},{key:"setBranches",value:function(e){this.branches=e}},{key:"parseInt",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return parseInt(e)}))}]),e}(),_.\u0275fac=function(e){return new(e||_)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.LocalForageService),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](l.a))},_.\u0275cmp=r["\u0275\u0275defineComponent"]({type:_,selectors:[["app-product-dashboard"]],decls:117,vars:19,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],["routerLink","/add_product",1,"btn","btn-sm","btn-primary"],[1,"feather","icon-plus"],[1,"col-md-3","col-sm-6","col-12"],[1,"info-box"],[1,"info-box-icon","bg-primary"],[1,"fa","fa-dollar"],[1,"info-box-content"],[1,"info-box-text"],[1,"info-box-number"],["class","small-text","routerLink","/stock_report",4,"ngIf"],[1,"info-box-icon","bg-danger"],[1,"fa","fa-exclamation-triangle"],["routerLink","/expiry/all"],[1,"fa","fa-arrow-right"],[1,"info-box-icon","bg-warning"],["routerLink","/expiry/this_month"],[1,"info-box-icon","bg-info"],["routerLink","/expiry/next_month"],[4,"ngIf"],[1,"col-md-4"],[3,"ngModel","ngModelChange"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"text-muted"],["value","yes"],["value","no"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["type","text","name","param","required","","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","name","search","value","Search",1,"btn","btn-success","btn-sm"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"limit","total","pageChanged","limitChanged"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"fa","fa-refresh"],[3,"objects","refresh"],[3,"type","onFinish"],["routerLink","/stock_report",1,"small-text"],["name","branch",3,"ngModel","ngModelChange"],[3,"value"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5," Products"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"a",4),r["\u0275\u0275element"](7,"i",5),r["\u0275\u0275text"](8," Add New Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"hr"),r["\u0275\u0275elementStart"](10,"div",2),r["\u0275\u0275elementStart"](11,"div",6),r["\u0275\u0275elementStart"](12,"div",7),r["\u0275\u0275elementStart"](13,"span",8),r["\u0275\u0275element"](14,"i",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",10),r["\u0275\u0275elementStart"](16,"span",11),r["\u0275\u0275text"](17,"Stock Cost Value"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"span",12),r["\u0275\u0275text"](19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](20,f,3,0,"a",13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",6),r["\u0275\u0275elementStart"](22,"div",7),r["\u0275\u0275elementStart"](23,"span",8),r["\u0275\u0275element"](24,"i",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"div",10),r["\u0275\u0275elementStart"](26,"span",11),r["\u0275\u0275text"](27,"Stock Selling Value"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"span",12),r["\u0275\u0275text"](29),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](30,g,3,0,"a",13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"div",6),r["\u0275\u0275elementStart"](32,"div",7),r["\u0275\u0275elementStart"](33,"span",14),r["\u0275\u0275element"](34,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](35,"div",10),r["\u0275\u0275elementStart"](36,"span",11),r["\u0275\u0275text"](37,"Expired"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](38,"span",12),r["\u0275\u0275text"](39),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](40,"a",16),r["\u0275\u0275text"](41,"More Details "),r["\u0275\u0275element"](42,"i",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"div",6),r["\u0275\u0275elementStart"](44,"div",7),r["\u0275\u0275elementStart"](45,"span",18),r["\u0275\u0275element"](46,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](47,"div",10),r["\u0275\u0275elementStart"](48,"span",11),r["\u0275\u0275text"](49,"Expiring This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"span",12),r["\u0275\u0275text"](51),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](52,"a",19),r["\u0275\u0275text"](53,"More Details "),r["\u0275\u0275element"](54,"i",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](55,"div",6),r["\u0275\u0275elementStart"](56,"div",7),r["\u0275\u0275elementStart"](57,"span",20),r["\u0275\u0275element"](58,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](59,"div",10),r["\u0275\u0275elementStart"](60,"span",11),r["\u0275\u0275text"](61,"Expiring Next Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](62,"span",12),r["\u0275\u0275text"](63),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](64,"a",21),r["\u0275\u0275text"](65,"More Details "),r["\u0275\u0275element"](66,"i",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](67,y,8,2,"div",22),r["\u0275\u0275elementStart"](68,"div",2),r["\u0275\u0275elementStart"](69,"div",23),r["\u0275\u0275elementStart"](70,"label"),r["\u0275\u0275text"](71,"Filter by Category/department: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](72,"br"),r["\u0275\u0275elementStart"](73,"select",24),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.category=e})),r["\u0275\u0275elementStart"](74,"option",25),r["\u0275\u0275text"](75,"All"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](76,b,2,2,"option",26),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](77,"button",27),r["\u0275\u0275listener"]("click",(function(){return t.getCategoryProducts()})),r["\u0275\u0275text"](78,"Get Items"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](79,"div",23),r["\u0275\u0275elementStart"](80,"label"),r["\u0275\u0275text"](81,"Get advanced fields?: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](82,"br"),r["\u0275\u0275elementStart"](83,"em",28),r["\u0275\u0275text"](84,"This will add additional fields e.g. amount sold in last 6 months. It will also make the query take longer to load "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](85,"br"),r["\u0275\u0275elementStart"](86,"select",24),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.advanced=e})),r["\u0275\u0275elementStart"](87,"option",29),r["\u0275\u0275text"](88,"Yes"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](89,"option",30),r["\u0275\u0275text"](90,"No"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](91,"button",27),r["\u0275\u0275listener"]("click",(function(){return t.getCategoryProducts()})),r["\u0275\u0275text"](92,"Get Items"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](93,"div",23),r["\u0275\u0275elementStart"](94,"label"),r["\u0275\u0275text"](95,"Or search for a product name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](96,"br"),r["\u0275\u0275elementStart"](97,"form",31,32),r["\u0275\u0275listener"]("ngSubmit",(function(){return t.search()})),r["\u0275\u0275elementStart"](99,"input",33),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.param=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](100,"input",34),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](101,"hr"),r["\u0275\u0275element"](102,"hr"),r["\u0275\u0275template"](103,S,1,0,"app-loading",22),r["\u0275\u0275elementStart"](104,"div",35),r["\u0275\u0275elementStart"](105,"div",36),r["\u0275\u0275elementStart"](106,"h5"),r["\u0275\u0275text"](107),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](108,"div",37),r["\u0275\u0275elementStart"](109,"app-pagination",38),r["\u0275\u0275listener"]("pageChanged",(function(e){return t.pageChanged(e)}))("limitChanged",(function(e){return t.limitChanged(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](110,"b"),r["\u0275\u0275text"](111),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](112,"button",39),r["\u0275\u0275listener"]("click",(function(){return t.getProducts()})),r["\u0275\u0275element"](113,"i",40),r["\u0275\u0275text"](114," Refresh"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](115,"app-product-list",41),r["\u0275\u0275listener"]("refresh",(function(){return t.getCategoryProducts()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](116,"app-select-branch",42),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setBranches(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](19),r["\u0275\u0275textInterpolate1"]("",t.stock_cost_value," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","admin"!=t.user_type),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"]("",t.stock_selling_value," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","admin"!=t.user_type),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"]("",t.expired_all," Items"),r["\u0275\u0275advance"](12),r["\u0275\u0275textInterpolate1"]("",t.expired," Items"),r["\u0275\u0275advance"](12),r["\u0275\u0275textInterpolate1"]("",t.expired_next," Items"),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf","admin"==t.user_type),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngModel",t.category),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",t.categories),r["\u0275\u0275advance"](10),r["\u0275\u0275property"]("ngModel",t.advanced),r["\u0275\u0275advance"](13),r["\u0275\u0275property"]("ngModel",t.param),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](t.title),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("limit",t.limit)("total",t.total),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("Total Number of Products: ",t.total," "),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("objects",t.objects),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("type","emit"))},directives:[a.e,i.j,d.m,d.e,d.h,d.i,d.n,i.i,d.f,d.g,d.b,d.l,u.a,m.a,h.a,p.a],styles:[""]}),_)}],C=((x=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[a.f.forChild(k)],a.f]}),x),I=n("nEHF"),w=n("nBlB"),M=((E=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[i.b,C,I.a,w.a]]}),E)},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var i=n("fXoL"),a=function e(){_classCallCheck(this,e)},r=n("c92J"),o=n("ccyI"),s=n("1VJT"),c=n("ofXK"),l=n("3Pt+"),d=n("hiAm");function u(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function h(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function p(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,u,2,0,"button",4),i["\u0275\u0275template"](2,m,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).selected_item=e}))("change",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,h,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",a.objects)}}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,p,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_loaded)}}function g(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"](3).add(e)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",a.name," ")}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,y,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",n.objects)}}function S(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,g,1,0,"app-loading",3),i["\u0275\u0275template"](3,v,3,0,"div",3),i["\u0275\u0275template"](4,b,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_finished_search)}}var _,x=((_=function(){function e(t,n,a){_classCallCheck(this,e),this.dbService=t,this.authService=n,this.notify=a,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}},{key:"itemSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}},{key:"itemAdded",value:function(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}},{key:"list",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"getAll",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading();var t="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(t+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(t,this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.onFinish.emit(e.objects),e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"add",value:function(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"addItem",value:function(){var e=this;this.notify.showLoading();var t=window.prompt("Enter name of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("name is required"),!1;var n=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(n))return this.notify.failNotification("Phone number is required"),!1;var i=new FormData;i.append("name",t),i.append("phone",n),this.dbService.postData(i,"admin/saveBranch",this.authService.current_user).subscribe((function(i){if(e.notify.hideLoading(),"-1"===i.status)e.notify.failNotification("Server error. Please try again");else if("-1"===i.status)e.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===i.status)e.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{var r=new a;r.id=i.status,r.name=t,r.phone=n,e.objects.push(r),e.notify.successNotification("Branch added successfully"),e.selected_item=r.id,e.itemSelected()}}),(function(t){e.notify.noConnectionNotification()}))}}]),e}()).\u0275fac=function(e){return new(e||_)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},_.\u0275cmp=i["\u0275\u0275defineComponent"]({type:_,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,f,2,1,"span",0),i["\u0275\u0275template"](1,S,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[c.j,l.m,l.e,l.h,c.i,l.i,l.n,d.a],styles:[""]}),_)}}]);