function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ofXK"),a=n("nEHF"),r=n("fXoL"),o=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a]]}),e}()},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var i=n("fXoL"),a=function e(){_classCallCheck(this,e)},r=n("c92J"),o=n("ccyI"),s=n("1VJT"),c=n("ofXK"),d=n("3Pt+"),l=n("hiAm");function u(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function h(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function p(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,u,2,0,"button",4),i["\u0275\u0275template"](2,h,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).selected_item=e}))("change",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,f,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",a.objects)}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,p,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_loaded)}}function v(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function y(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"](3).add(e)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",a.name," ")}}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,_,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",n.objects)}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,v,1,0,"app-loading",3),i["\u0275\u0275template"](3,y,3,0,"div",3),i["\u0275\u0275template"](4,g,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_finished_search)}}var S,E=((S=function(){function e(t,n,a){_classCallCheck(this,e),this.dbService=t,this.authService=n,this.notify=a,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}},{key:"itemSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}},{key:"itemAdded",value:function(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}},{key:"list",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"getAll",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading();var t="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(t+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(t,this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.onFinish.emit(e.objects),e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"add",value:function(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"addItem",value:function(){var e=this;this.notify.showLoading();var t=window.prompt("Enter name of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("name is required"),!1;var n=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(n))return this.notify.failNotification("Phone number is required"),!1;var i=new FormData;i.append("name",t),i.append("phone",n),this.dbService.postData(i,"admin/saveBranch",this.authService.current_user).subscribe((function(i){if(e.notify.hideLoading(),"-1"===i.status)e.notify.failNotification("Server error. Please try again");else if("-1"===i.status)e.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===i.status)e.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{var r=new a;r.id=i.status,r.name=t,r.phone=n,e.objects.push(r),e.notify.successNotification("Branch added successfully"),e.selected_item=r.id,e.itemSelected()}}),(function(t){e.notify.noConnectionNotification()}))}}]),e}()).\u0275fac=function(e){return new(e||S)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},S.\u0275cmp=i["\u0275\u0275defineComponent"]({type:S,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,m,2,1,"span",0),i["\u0275\u0275template"](1,b,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[c.j,d.m,d.e,d.h,c.i,d.i,d.n,l.a],styles:[""]}),S)},rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("ofXK"),a=n("nEHF"),r=n("6QD7"),o=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a,r.b],r.b]}),e}()},sodU:function(e,t,n){"use strict";n.r(t),n.d(t,"StockAdjustmentReportModule",(function(){return S}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("ccyI"),s=n("c92J"),c=n("1VJT"),d=n("3Pt+"),l=n("pEcs"),u=n("UXBy");function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",21),r["\u0275\u0275elementStart"](1,"div",22),r["\u0275\u0275element"](2,"app-stock-report",23),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("search_by","dates")("start_date",n.start_date)("end_date",n.end_date)}}var f,p,m,v=[{path:"",component:(f=function(){function e(t,n,i,a,r){_classCallCheck(this,e),this.authService=t,this.dbService=n,this.notify=i,this.router=a,this.ar=r,this.quick_option="this_month",this.parent_company_id=null,this.company_id=null,this.branches=[],this.user_type="staff",this.objects=[],this.is_loading=!1,this.error=!1,this.is_loaded=!1,this.sessions=[],this.search_by="dates",this.start_date=this.dbService.getToday(),this.end_date=this.dbService.getToday(),-1==this.authService.current_user.permissions.indexOf("Adjust Stock")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.dbService.setTitle("Stock Adjustment Report"),this.year=this.dbService.getThisYear(),"staff"===this.user_type&&(this.user_type=this.authService.current_user.type,this.parent_company_id=this.authService.current_user.parent_company_id,this.company_name=this.authService.current_user.company_name,this.company_id=this.authService.current_user.company_id)}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.company_id),this.setDates()}},{key:"setBranches",value:function(e){this.branches=e}},{key:"cancel",value:function(){this.start_date=void 0,this.end_date=void 0}},{key:"setDates",value:function(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}},{key:"goBack",value:function(){window.history.back()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](a.c),r["\u0275\u0275directiveInject"](a.a))},f.\u0275cmp=r["\u0275\u0275defineComponent"]({type:f,selectors:[["app-stock-adjustment-report"]],decls:42,vars:5,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["class","card",4,"ngIf"],[3,"type","onFinish"],[1,"card"],[1,"card-body"],[3,"search_by","start_date","end_date"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"Stock Adjustment Report"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div"),r["\u0275\u0275elementStart"](7,"label"),r["\u0275\u0275text"](8,"Select period"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"select",4),r["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),r["\u0275\u0275elementStart"](10,"option",5),r["\u0275\u0275text"](11,"Today"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"option",6),r["\u0275\u0275text"](13,"Yesterday"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"option",7),r["\u0275\u0275text"](15,"This Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"option",8),r["\u0275\u0275text"](17,"Last Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"option",9),r["\u0275\u0275text"](19,"This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"option",10),r["\u0275\u0275text"](21,"Last Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"option",11),r["\u0275\u0275text"](23,"1st quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"option",12),r["\u0275\u0275text"](25,"2nd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"option",13),r["\u0275\u0275text"](27,"3rd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"option",14),r["\u0275\u0275text"](29,"4th quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"option",15),r["\u0275\u0275text"](31,"This Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"option",16),r["\u0275\u0275text"](33,"Last Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](34,"label"),r["\u0275\u0275text"](35,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](36,"input",17),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](37,"label"),r["\u0275\u0275text"](38,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](39,"input",18),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](40,h,3,3,"div",19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"app-select-branch",20),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setBranches(e)})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("ngModel",t.quick_option),r["\u0275\u0275advance"](27),r["\u0275\u0275property"]("ngModel",t.start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",t.end_date),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null!=t.start_date&&null!=t.end_date),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("type","emit"))},directives:[d.m,d.e,d.h,d.i,d.n,d.b,i.j,l.a,u.a],styles:[""]}),f)}],y=((p=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[a.f.forChild(v)],a.f]}),p),_=n("nEHF"),g=n("rNAZ"),b=n("nBlB"),S=((m=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||m)},imports:[[i.b,y,_.a,g.a,b.a]]}),m)}}]);