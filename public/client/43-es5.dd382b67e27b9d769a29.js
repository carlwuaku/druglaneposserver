function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},hsp1:function(e,t,n){"use strict";n.r(t),n.d(t,"InsuranceModule",(function(){return E}));var i=n("ofXK"),a=n("tyNb"),r=n("fXoL"),o=n("ccyI"),s=n("bgkY"),l=n("c92J"),c=n("1VJT"),d=n("3Pt+"),u=n("yGzR"),m=["insurers_grid"];function f(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",30),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function h(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select Branch "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",27),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().company_id=e})),r["\u0275\u0275elementStart"](4,"option",28),r["\u0275\u0275text"](5,"All"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,f,2,2,"option",29),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](7,"hr"),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.company_id),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",i.branches)}}var p,v,g,y=[{path:"",component:(p=function(){function e(t,n,i,a,r,o){_classCallCheck(this,e),this.authService=t,this.socket=n,this.dbService=i,this.notify=a,this.router=r,this.ar=o,this.insurers=[],this.is_loading=!1,this.is_loaded=!1,this.selected_items=[],this.quick_option="this_month",this.columnDefs=[{headerName:"#",field:"id",sortable:!0,filter:!0,width:200,checkboxSelection:!0},{headerName:"Name",field:"name",sortable:!0,filter:!0}],this.user_type="staff",this.company_id="all",this.branches=[],-1==this.authService.current_user.permissions.indexOf("View Sales History")&&(this.notify.failNotification("You are not permitted to view the page"),this.dbService.goBackHome())}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"goBack",value:function(){window.history.back()}},{key:"getSales",value:function(){}},{key:"setInsurers",value:function(e){this.insurers=e}},{key:"setDates",value:function(){var e=this.dbService.setDates(this.quick_option);this.start_date=e.start_date,this.end_date=e.end_date}}]),e}(),p.\u0275fac=function(e){return new(e||p)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](a.c),r["\u0275\u0275directiveInject"](a.a))},p.\u0275cmp=r["\u0275\u0275defineComponent"]({type:p,selectors:[["app-insurance"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](m,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.receipt_grid=n.first)},decls:48,vars:4,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","quick_options",3,"ngModel","change","ngModelChange"],["value","today"],["value","yesterday"],["value","this_week"],["value","last_week"],["value","this_month"],["value","last_month"],["value","first_quarter"],["value","second_quarter"],["value","third_quarter"],["value","last_quarter"],["value","this_year"],["value","last_year"],["type","date","name","start_date",3,"ngModel","ngModelChange"],["type","date","name","end_date",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Filter",1,"btn","btn-sm","btn-success"],[1,"card-block"],[3,"onFinish"],["name","branch",3,"ngModel","ngModelChange"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"Insurance"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div",5),r["\u0275\u0275template"](8,h,8,2,"div",6),r["\u0275\u0275elementStart"](9,"form",7,8),r["\u0275\u0275listener"]("ngSubmit",(function(){return t.getSales()})),r["\u0275\u0275elementStart"](11,"label"),r["\u0275\u0275text"](12,"Or Select period"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"select",9),r["\u0275\u0275listener"]("change",(function(){return t.setDates()}))("ngModelChange",(function(e){return t.quick_option=e})),r["\u0275\u0275elementStart"](14,"option",10),r["\u0275\u0275text"](15,"Today"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"option",11),r["\u0275\u0275text"](17,"Yesterday"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"option",12),r["\u0275\u0275text"](19,"This Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"option",13),r["\u0275\u0275text"](21,"Last Week"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"option",14),r["\u0275\u0275text"](23,"This Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"option",15),r["\u0275\u0275text"](25,"Last Month"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"option",16),r["\u0275\u0275text"](27,"1st quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"option",17),r["\u0275\u0275text"](29,"2nd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"option",18),r["\u0275\u0275text"](31,"3rd quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"option",19),r["\u0275\u0275text"](33,"4th quarter"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](34,"option",20),r["\u0275\u0275text"](35,"This Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](36,"option",21),r["\u0275\u0275text"](37,"Last Year"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](38,"label"),r["\u0275\u0275text"](39,"Start Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](40,"input",22),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.start_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"label"),r["\u0275\u0275text"](42,"End Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"input",23),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.end_date=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](44,"input",24),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](45,"div",25),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](46,"\n//list all insurers, add new insurer, view insurer sales "),r["\u0275\u0275elementStart"](47,"app-select-insurer",26),r["\u0275\u0275listener"]("onFinish",(function(e){return t.setInsurers(e)})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("ngIf","admin"==t.user_type),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",t.quick_option),r["\u0275\u0275advance"](27),r["\u0275\u0275property"]("ngModel",t.start_date),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",t.end_date))},directives:[i.j,d.f,d.g,d.m,d.e,d.h,d.i,d.n,d.b,u.a,i.i],styles:[""]}),p)}],_=((v=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[a.f.forChild(y)],a.f]}),v),S=n("nEHF"),b=n("rNAZ"),E=((g=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[i.b,_,S.a,b.a]]}),g)},rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("ofXK"),a=n("nEHF"),r=n("6QD7"),o=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a,r.b],r.b]}),e}()},yGzR:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i=n("fXoL"),a=n("c92J"),r=n("eJvr"),o=n("ccyI"),s=n("1VJT"),l=n("ofXK"),c=n("3Pt+"),d=n("hiAm");function u(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",6),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",7),i["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",8),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function f(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275template"](1,u,2,0,"button",3),i["\u0275\u0275elementStart"](2,"label"),i["\u0275\u0275text"](3,"Select Insurer"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](4,"br"),i["\u0275\u0275elementStart"](5,"select",4),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).select_item=e}))("change",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](6,m,2,2,"option",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngModel",a.select_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",a.objects)}}function h(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",2),i["\u0275\u0275elementStart"](1,"div"),i["\u0275\u0275template"](2,f,7,3,"div",1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.is_loaded)}}function p(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",12),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"](3).add(e)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",13),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",a.name," ")}}function y(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",10),i["\u0275\u0275template"](1,g,4,1,"a",11),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",n.objects)}}function _(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"div"),i["\u0275\u0275template"](2,p,1,0,"app-loading",1),i["\u0275\u0275template"](3,v,3,0,"div",1),i["\u0275\u0275elementStart"](4,"button",6),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().addItem()})),i["\u0275\u0275text"](5,"+"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](6,y,2,1,"div",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",a.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.error_search),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngIf",a.is_finished_search)}}var S=function(){var e=function(){function e(t,n,a,r){_classCallCheck(this,e),this.dbService=t,this.localforage=n,this.authService=a,this.notify=r,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.emit=!1,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}return _createClass(e,[{key:"ngOnInit",value:function(){"list"!=this.type&&"select"!=this.type||this.list()}},{key:"itemSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.select_item){this.onFinish.emit(this.objects[e]);break}}},{key:"addItem",value:function(){var e=this;this.notify.showLoading();var t=window.prompt("Enter name of Insurance Provider");if(this.dbService.isEmpty(t))return this.notify.failNotification("name is required"),!1;var n=new FormData;n.append("name",t),this.dbService.postData(n,"admin/addInsurer",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again"):"-1"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.list(),e.notify.successNotification("Insurer added successfully"),e.itemSelected())}),(function(t){e.notify.noConnectionNotification()}))}},{key:"itemAdded",value:function(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}},{key:"list",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getInsurers",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.is_loaded=!0,e.emit&&e.onFinish.emit(e.objects))}),(function(t){e.localforage.getItem(e.dbService.OFFLINE_INSURERS_KEY).subscribe((function(t){e.is_loaded=!0,e.objects=null==t?[]:t})),e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"add",value:function(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-insurer"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",emit:"emit"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],[4,"ngIf"],[1,""],["type","button","class","",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"",3,"click"],[1,"fa","fa-plus"],[3,"value"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,h,3,1,"div",0),i["\u0275\u0275template"](1,_,7,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[l.j,c.m,c.e,c.h,l.i,c.i,c.n,d.a],styles:[""]}),e}()}}]);