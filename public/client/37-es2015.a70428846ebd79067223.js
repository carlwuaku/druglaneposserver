(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"i",0),a["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},jIcB:function(e,t,n){"use strict";n.r(t),n.d(t,"AccountReportModule",(function(){return v}));var a=n("ofXK"),r=n("tyNb"),i=n("fXoL"),o=n("ccyI"),l=n("1VJT"),s=n("c92J"),d=n("3Pt+"),c=n("hiAm");function m(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"li"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate2"](" ",e.type," - ",e.total," ")}}function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"h6",32),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" Loss: ",e.difference,"")}}function h(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"h6",33),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" Profit: ",e.difference,"")}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.authService=e,this.notify=n,this.dbService=a,this.is_loading=!1,this.is_loaded=!1,this.quick_option="this_month",this.expenses_list=[],null!=t.snapshot.params.quick_option&&null!=t.snapshot.params.quick_option&&(this.quick_option=t.snapshot.params.quick_option),-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Stock Value History")}ngOnInit(){this.setDates(),this.getData()}ngOnChanges(){this.setDates(),this.getData()}setDates(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}getData(){this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("admin/getAccountingReport?start_date="+this.start_date+"&end_date="+this.end_date,this.authService.current_user).subscribe(e=>{this.sales=e.total_sale,this.purchases=e.total_purchase,this.expenses=e.expenses,this.difference=e.difference,this.profit=e.profit,this.starting_stock=e.starting_stock,this.closing_stock=e.closing_stock,this.expenses_list=e.expenses_list,this.notify.hideLoading(),this.is_loading=!1},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}goBack(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-account-report"]],features:[i["\u0275\u0275NgOnChangesFeature"]],decls:81,vars:12,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card","card-body"],[1,"card-header"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","all"],["value","this_week"],["value","last_week"],["value","next_week"],["value","this_month"],["value","next_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[1,"card-body","table-responsive"],[4,"ngIf"],[1,"table","table-bordered","table-striped"],["colspan","2"],[4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["class","text-success",4,"ngIf"],[1,"text-danger"],[1,"text-success"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"section",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"h5"),i["\u0275\u0275text"](5,"Accounts Report"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",4),i["\u0275\u0275elementStart"](7,"div",5),i["\u0275\u0275elementStart"](8,"form",6,7),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.getData()})),i["\u0275\u0275elementStart"](10,"label"),i["\u0275\u0275text"](11,"Select a period to view report within that period"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"select",8),i["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),i["\u0275\u0275elementStart"](13,"option",9),i["\u0275\u0275text"](14,"Up To Today"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"option",10),i["\u0275\u0275text"](16,"This Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"option",11),i["\u0275\u0275text"](18,"Last Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"option",12),i["\u0275\u0275text"](20,"Next Week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"option",13),i["\u0275\u0275text"](22,"This Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"option",14),i["\u0275\u0275text"](24,"Next Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](25,"option",15),i["\u0275\u0275text"](26,"Last Month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](27,"option",16),i["\u0275\u0275text"](28,"1st quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"option",17),i["\u0275\u0275text"](30,"2nd quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"option",18),i["\u0275\u0275text"](32,"3rd quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"option",19),i["\u0275\u0275text"](34,"4th quarter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"option",20),i["\u0275\u0275text"](36,"This Year"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](37,"option",21),i["\u0275\u0275text"](38,"Last Year"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](39,"label"),i["\u0275\u0275text"](40,"Start Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](41,"input",22),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"label"),i["\u0275\u0275text"](43,"End Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"input",23),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](45,"input",24),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](46,"div",25),i["\u0275\u0275template"](47,m,1,0,"app-loading",26),i["\u0275\u0275elementStart"](48,"table",27),i["\u0275\u0275elementStart"](49,"tbody"),i["\u0275\u0275elementStart"](50,"tr"),i["\u0275\u0275elementStart"](51,"td"),i["\u0275\u0275text"](52,"Total Sales made "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](53,"td"),i["\u0275\u0275text"](54),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](55,"tr"),i["\u0275\u0275elementStart"](56,"td"),i["\u0275\u0275text"](57,"Total Purchases made "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](58,"td"),i["\u0275\u0275text"](59),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](60,"tr"),i["\u0275\u0275elementStart"](61,"td"),i["\u0275\u0275text"](62,"Total Expenses made "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](63,"td"),i["\u0275\u0275text"](64),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](65,"tr"),i["\u0275\u0275elementStart"](66,"td",28),i["\u0275\u0275elementStart"](67,"ul"),i["\u0275\u0275template"](68,p,2,2,"li",29),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](69,"tr"),i["\u0275\u0275elementStart"](70,"td"),i["\u0275\u0275text"](71,"Starting Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](72,"td"),i["\u0275\u0275text"](73),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](74,"tr"),i["\u0275\u0275elementStart"](75,"td"),i["\u0275\u0275text"](76,"Closing Stock "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](77,"td"),i["\u0275\u0275text"](78),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](79,u,2,1,"h6",30),i["\u0275\u0275template"](80,h,2,1,"h6",31),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("ngModel",t.quick_option),i["\u0275\u0275advance"](29),i["\u0275\u0275property"]("ngModel",t.start_date),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngModel",t.end_date),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",t.is_loading),i["\u0275\u0275advance"](7),i["\u0275\u0275textInterpolate1"]("",t.sales," "),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate1"]("",t.purchases," "),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate1"]("",t.expenses," "),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngForOf",t.expenses_list),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate1"]("",t.starting_stock," "),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate1"]("",t.closing_stock," "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.profit),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.profit))},directives:[d.f,d.g,d.m,d.e,d.h,d.i,d.n,d.b,a.j,a.i,c.a],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(f)],r.f]}),e})();var S=n("nEHF"),x=n("wDHj");let v=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,g,S.a,x.a]]}),e})()},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("ofXK"),r=n("nEHF"),i=n("6QD7"),o=n("fXoL");let l=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,r.a,i.b],i.b]}),e})()}}]);