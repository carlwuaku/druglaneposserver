(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{I62u:function(e,t,n){"use strict";n.r(t),n.d(t,"ExpiryModule",(function(){return _}));var a=n("ofXK"),i=n("tyNb"),r=n("fXoL"),o=n("ccyI"),s=n("1VJT"),l=n("c92J"),d=n("3Pt+"),c=n("g1vN"),m=n("hiAm");function u(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.authService=e,this.notify=n,this.dbService=a,this.offset=0,this.objects=[],this.is_loading=!1,this.is_loaded=!1,this.quick_option="this_month",null!=t.snapshot.params.quick_option&&null!=t.snapshot.params.quick_option&&(this.quick_option=t.snapshot.params.quick_option),-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome()),this.dbService.setTitle("Expiries")}ngOnInit(){this.setDates(),this.getData()}ngOnChanges(){this.setDates(),this.getData()}setDates(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}getData(){this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("product/getExpiryList?start_date="+this.start_date+"&end_date="+this.end_date+"&company_id="+this.authService.current_user.company_id,this.authService.current_user).subscribe(e=>{this.objects=e.data,this.notify.hideLoading(),this.is_loading=!1},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-expiry"]],features:[r["\u0275\u0275NgOnChangesFeature"]],decls:51,vars:6,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],[1,"card-header"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","all"],["value","this_week"],["value","last_week"],["value","next_week"],["value","this_month"],["value","next_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[1,"card-body"],[4,"ngIf"],[3,"objects","refresh"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"Expired/Expiring Products"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div",5),r["\u0275\u0275elementStart"](8,"form",6,7),r["\u0275\u0275listener"]("ngSubmit",(function(){return t.getData()})),r["\u0275\u0275elementStart"](10,"label"),r["\u0275\u0275text"](11,"Select a period to view products expiring within that period"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"select",8),r["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),r["\u0275\u0275elementStart"](13,"option",9),r["\u0275\u0275text"](14,"Up To Today"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"option",10),r["\u0275\u0275text"](16,"This Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"option",11),r["\u0275\u0275text"](18,"Last Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"option",12),r["\u0275\u0275text"](20,"Next Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"option",13),r["\u0275\u0275text"](22,"This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](23,"option",14),r["\u0275\u0275text"](24,"Next Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"option",15),r["\u0275\u0275text"](26,"Last Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](27,"option",16),r["\u0275\u0275text"](28,"1st quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](29,"option",17),r["\u0275\u0275text"](30,"2nd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"option",18),r["\u0275\u0275text"](32,"3rd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](33,"option",19),r["\u0275\u0275text"](34,"4th quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](35,"option",20),r["\u0275\u0275text"](36,"This Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](37,"option",21),r["\u0275\u0275text"](38,"Last Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](39,"label"),r["\u0275\u0275text"](40,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"input",22),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](42,"label"),r["\u0275\u0275text"](43,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](44,"input",23),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](45,"input",24),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](46,"div",25),r["\u0275\u0275template"](47,u,1,0,"app-loading",26),r["\u0275\u0275elementStart"](48,"h5"),r["\u0275\u0275text"](49),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"app-product-list",27),r["\u0275\u0275listener"]("refresh",(function(){return t.getData()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](12),r["\u0275\u0275property"]("ngModel",t.quick_option),r["\u0275\u0275advance"](29),r["\u0275\u0275property"]("ngModel",t.start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",t.end_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",t.objects.length," Items "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("objects",t.objects))},directives:[d.f,d.g,d.m,d.e,d.h,d.i,d.n,d.b,a.j,c.a,m.a],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.f.forChild(p)],i.f]}),e})();var g=n("nEHF"),v=n("nBlB");let _=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,h,g.a,v.a]]}),e})()}}]);