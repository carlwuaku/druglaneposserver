(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{GRGe:function(e,t,n){"use strict";n.r(t),n.d(t,"RefillsModule",(function(){return _}));var i=n("ofXK"),a=n("tyNb"),l=n("fXoL"),o=n("ccyI"),r=n("1VJT"),s=n("c92J"),d=n("3Pt+"),c=n("Lumr"),u=n("hiAm");function m(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"form",13,14),l["\u0275\u0275listener"]("ngSubmit",(function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().getData()})),l["\u0275\u0275elementStart"](2,"label"),l["\u0275\u0275text"](3,"Select a period to view refills expiring within that period"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"select",15),l["\u0275\u0275listener"]("change",(function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().setDates()}))("ngModelChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().quick_option=t})),l["\u0275\u0275elementStart"](5,"option",16),l["\u0275\u0275text"](6,"Up To Today"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"option",17),l["\u0275\u0275text"](8,"This Week"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"option",18),l["\u0275\u0275text"](10,"Last Week"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"option",19),l["\u0275\u0275text"](12,"Next Week"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"option",20),l["\u0275\u0275text"](14,"This Month"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"option",21),l["\u0275\u0275text"](16,"Next Month"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"option",22),l["\u0275\u0275text"](18,"Last Month"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"option",23),l["\u0275\u0275text"](20,"1st quarter"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"option",24),l["\u0275\u0275text"](22,"2nd quarter"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"option",25),l["\u0275\u0275text"](24,"3rd quarter"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"option",26),l["\u0275\u0275text"](26,"4th quarter"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](27,"option",27),l["\u0275\u0275text"](28,"This Year"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"option",28),l["\u0275\u0275text"](30,"Last Year"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](31,"label"),l["\u0275\u0275text"](32,"Start Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](33,"input",29),l["\u0275\u0275listener"]("ngModelChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().start_date=t})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](34,"label"),l["\u0275\u0275text"](35,"End Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](36,"input",30),l["\u0275\u0275listener"]("ngModelChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().end_date=t})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](37,"input",31),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngModel",e.quick_option),l["\u0275\u0275advance"](29),l["\u0275\u0275property"]("ngModel",e.start_date),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngModel",e.end_date)}}function h(e,t){1&e&&l["\u0275\u0275element"](0,"app-loading")}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.authService=e,this.notify=n,this.dbService=i,this.refill_view="active",this.offset=0,this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.quick_option="this_week",null!=t.snapshot.params.quick_option&&null!=t.snapshot.params.quick_option&&(this.quick_option=t.snapshot.params.quick_option),-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Refills")}ngOnInit(){this.setDates(),this.getActive()}ngOnChanges(){this.setDates(),this.reset()}reset(){switch(this.refill_view){case"active":this.getActive();break;case"all":this.getAll();break;default:this.getData()}}setDates(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}getAll(){this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("customer/getRefillList",this.authService.current_user).subscribe(e=>{this.objects=e.data,this.notify.hideLoading(),this.is_loading=!1},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}getActive(){this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("customer/getRefillList",this.authService.current_user).subscribe(e=>{this.objects=e.data,this.notify.hideLoading(),this.is_loading=!1},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}getData(){this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("customer/findRefillBetweenDates?start_date="+this.start_date+"&end_date="+this.end_date,this.authService.current_user).subscribe(e=>{this.objects=e.data,this.notify.hideLoading(),this.is_loading=!1},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](r.a),l["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-refills"]],features:[l["\u0275\u0275NgOnChangesFeature"]],decls:26,vars:7,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],["type","radio","name","refill_view","value","all",3,"ngModel","click","ngModelChange"],["type","radio","name","refill_view","value","active",3,"ngModel","click","ngModelChange"],["type","radio","name","refill_view","value","expiring",3,"ngModel","ngModelChange"],["ngNativeValidate","",3,"ngSubmit",4,"ngIf"],[1,"card-body"],[4,"ngIf"],[3,"objects","onFinish"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","all"],["value","this_week"],["value","last_week"],["value","next_week"],["value","this_month"],["value","next_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"section",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"h5"),l["\u0275\u0275text"](5,"Customer Drug Refills"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",4),l["\u0275\u0275elementStart"](7,"div",5),l["\u0275\u0275elementStart"](8,"div"),l["\u0275\u0275elementStart"](9,"label"),l["\u0275\u0275elementStart"](10,"input",6),l["\u0275\u0275listener"]("click",(function(){return t.getAll()}))("ngModelChange",(function(e){return t.refill_view=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](11," View All Refills"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](12," \xa0 "),l["\u0275\u0275elementStart"](13,"label"),l["\u0275\u0275elementStart"](14,"input",7),l["\u0275\u0275listener"]("click",(function(){return t.getActive()}))("ngModelChange",(function(e){return t.refill_view=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](15," View Only Active Refills"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](16," \xa0 "),l["\u0275\u0275elementStart"](17,"label"),l["\u0275\u0275elementStart"](18,"input",8),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.refill_view=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](19," View Refills Approaching End Dates"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](20,m,38,3,"form",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"div",10),l["\u0275\u0275template"](22,h,1,0,"app-loading",11),l["\u0275\u0275elementStart"](23,"h5"),l["\u0275\u0275text"](24),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"app-refill-list",12),l["\u0275\u0275listener"]("onFinish",(function(){return t.reset()})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("ngModel",t.refill_view),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngModel",t.refill_view),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngModel",t.refill_view),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf","expiring"==t.refill_view),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.is_loading),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",t.objects.length," Items "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("objects",t.objects))},directives:[d.k,d.b,d.e,d.h,i.j,c.a,d.f,d.g,d.m,d.i,d.n,u.a],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(p)],a.f]}),e})();var g=n("nEHF"),v=n("NFbv");let _=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,f,g.a,v.a]]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("fXoL"),a=n("4AQi");let l=(()=>{class e{constructor(e){this.excel=e,this.objects=[],this.filename="download"}ngOnInit(){}export(){this.excel.exportAsExcelFile(this.objects,this.filename)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"button",0),i["\u0275\u0275listener"]("click",(function(){return t.export()})),i["\u0275\u0275element"](1,"i",1),i["\u0275\u0275text"](2," Export To Excel"),i["\u0275\u0275elementEnd"]())},styles:[""]}),e})()}}]);