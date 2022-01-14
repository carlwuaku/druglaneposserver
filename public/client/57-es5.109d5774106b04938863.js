function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{Gp2s:function(e,t,n){"use strict";n.r(t),n.d(t,"StockReportModule",(function(){return x}));var a=n("ofXK"),r=n("tyNb"),i=n("fXoL"),l=n("ccyI"),o=n("1VJT"),s=n("c92J"),c=n("3Pt+"),d=n("n49D"),m=n("hiAm");function u(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"td"),i["\u0275\u0275text"](12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"td"),i["\u0275\u0275text"](14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"td"),i["\u0275\u0275text"](16),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.date," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.opening_stock," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.closing_stock," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.difference),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.sales," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.purchases," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.transfers_out," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",n.transfers," ")}}var f,h,v,S=[{path:"",component:(f=function(){function e(t,n,a,r){_classCallCheck(this,e),this.authService=t,this.notify=a,this.dbService=r,this.offset=0,this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.quick_option="this_month",this.report_field="cost_value",null!=n.snapshot.params.quick_option&&null!=n.snapshot.params.quick_option&&(this.quick_option=n.snapshot.params.quick_option),-1==this.authService.current_user.permissions.indexOf("View Accounts")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome()),this.dbService.setTitle("Stock Value History")}return _createClass(e,[{key:"ngOnInit",value:function(){this.setDates(),this.getData()}},{key:"ngOnChanges",value:function(){this.setDates(),this.getData()}},{key:"setDates",value:function(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}},{key:"getData",value:function(){var e=this;this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("product/getStockValueList?start_date="+this.start_date+"&end_date="+this.end_date+"&report_field="+this.report_field+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe((function(t){e.objects=t.data,e.notify.hideLoading(),e.is_loading=!1}),(function(t){e.is_loading=!1,e.notify.noConnectionNotification()}))}},{key:"goBack",value:function(){window.history.back()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},f.\u0275cmp=i["\u0275\u0275defineComponent"]({type:f,selectors:[["app-stock-report"]],features:[i["\u0275\u0275NgOnChangesFeature"]],decls:77,vars:7,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],[1,"card-header"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","all"],["value","this_week"],["value","last_week"],["value","next_week"],["value","this_month"],["value","next_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["name","report_field",3,"ngModel","ngModelChange"],["value","selling_value"],["value","cost_value"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[1,"card-body","table-responsive"],[4,"ngIf"],[3,"objects"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"section",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"h5"),i["\u0275\u0275text"](5,"Stock Value History"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",4),i["\u0275\u0275elementStart"](7,"div",5),i["\u0275\u0275elementStart"](8,"form",6,7),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.getData()})),i["\u0275\u0275elementStart"](10,"label"),i["\u0275\u0275text"](11,"Select a period to view products expiring within that period"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"select",8),i["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),i["\u0275\u0275elementStart"](13,"option",9),i["\u0275\u0275text"](14,"Up To Today"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"option",10),i["\u0275\u0275text"](16,"This Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"option",11),i["\u0275\u0275text"](18,"Last Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"option",12),i["\u0275\u0275text"](20,"Next Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"option",13),i["\u0275\u0275text"](22,"This Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"option",14),i["\u0275\u0275text"](24,"Next Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](25,"option",15),i["\u0275\u0275text"](26,"Last Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](27,"option",16),i["\u0275\u0275text"](28,"1st quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"option",17),i["\u0275\u0275text"](30,"2nd quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"option",18),i["\u0275\u0275text"](32,"3rd quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"option",19),i["\u0275\u0275text"](34,"4th quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"option",20),i["\u0275\u0275text"](36,"This Year"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](37,"option",21),i["\u0275\u0275text"](38,"Last Year"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](39,"label"),i["\u0275\u0275text"](40,"Start Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](41,"input",22),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"label"),i["\u0275\u0275text"](43,"End Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"input",23),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](45,"label"),i["\u0275\u0275text"](46,"Select the values"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](47,"select",24),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.report_field=e})),i["\u0275\u0275elementStart"](48,"option",25),i["\u0275\u0275text"](49,"Selling Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"option",26),i["\u0275\u0275text"](51,"Cost Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](52,"input",27),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](53,"div",28),i["\u0275\u0275template"](54,u,1,0,"app-loading",29),i["\u0275\u0275element"](55,"app-export-to-excel",30),i["\u0275\u0275elementStart"](56,"table",31),i["\u0275\u0275elementStart"](57,"thead"),i["\u0275\u0275elementStart"](58,"tr"),i["\u0275\u0275elementStart"](59,"th"),i["\u0275\u0275text"](60,"Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](61,"th"),i["\u0275\u0275text"](62,"Opening Stock Value"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](63,"th"),i["\u0275\u0275text"](64,"Closing Stock Value"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](65,"th"),i["\u0275\u0275text"](66,"Difference"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](67,"th"),i["\u0275\u0275text"](68,"Total Sold"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](69,"th"),i["\u0275\u0275text"](70,"Total Purchased"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](71,"th"),i["\u0275\u0275text"](72,"Total Transferred Out"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](73,"th"),i["\u0275\u0275text"](74,"Total Received Transfers"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](75,"tbody"),i["\u0275\u0275template"](76,p,17,8,"tr",32),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("ngModel",t.quick_option),i["\u0275\u0275advance"](29),i["\u0275\u0275property"]("ngModel",t.start_date),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngModel",t.end_date),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngModel",t.report_field),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngIf",t.is_loading),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("objects",t.objects),i["\u0275\u0275advance"](21),i["\u0275\u0275property"]("ngForOf",t.objects))},directives:[c.f,c.g,c.m,c.e,c.h,c.i,c.n,c.b,a.j,d.a,a.i,m.a],styles:[""]}),f)}],g=((h=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[r.f.forChild(S)],r.f]}),h),_=n("nEHF"),x=((v=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[a.b,g,_.a]]}),v)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("fXoL"),r=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"i",0),a["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("fXoL"),r=n("4AQi"),i=function(){var e=function(){function e(t){_classCallCheck(this,e),this.excel=t,this.objects=[],this.filename="download"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"export",value:function(){this.excel.exportAsExcelFile(this.objects,this.filename)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"button",0),a["\u0275\u0275listener"]("click",(function(){return t.export()})),a["\u0275\u0275element"](1,"i",1),a["\u0275\u0275text"](2," Export To Excel"),a["\u0275\u0275elementEnd"]())},styles:[""]}),e}()}}]);