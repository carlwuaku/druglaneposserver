function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"7wo0":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",(function(){return k}));var i,a=n("ofXK"),o=n("tyNb"),r=n("fXoL"),s=n("c92J"),l=n("1VJT"),c=n("ccyI"),d=n("hiAm"),u=n("3Pt+"),m=((i=function(){function e(t,n,i){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.authService=i,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.is_numeric=!1,this.onFinish=new r.EventEmitter}return _createClass(e,[{key:"ngOnInit",value:function(){this.is_numeric=$.isNumeric(this.setting.value)}},{key:"save",value:function(e){var t=this;this.notify.showLoading();var n=new FormData;n.append("name",this.setting.name),n.append("value",this.setting.value),n.append("module",this.setting.module),this.dbService.postData(n,"changeSetting",this.authService.current_user).subscribe((function(e){t.notify.hideLoading(),"-1"===e.status&&t.notify.failNotification("Internal server error. Please contact admin"),"-9"===e.status?t.notify.showNotification("You are not permitted to perform this action","fail",3e3):(t.onFinish.emit(t.setting),t.notify.showNotification("Setting: "+t.setting.name+" saved successfully","success",3e3))}),(function(e){t.notify.noConnectionNotification()}))}},{key:"goBack",value:function(){window.history.back()}}]),e}()).\u0275fac=function(e){return new(e||i)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](c.a))},i.\u0275cmp=r["\u0275\u0275defineComponent"]({type:i,selectors:[["app-edit-settings"]],inputs:{setting:"setting"},outputs:{onFinish:"onFinish"},decls:4,vars:1,consts:[["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],["name","value","type","text",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Save",1,"btn","btn-success"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"form",0,1),r["\u0275\u0275listener"]("ngSubmit",(function(e){return t.save(e)})),r["\u0275\u0275elementStart"](2,"input",2),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.setting.value=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"input",3),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.setting.value))},directives:[u.f,u.g,u.b,u.e,u.h],styles:[""]}),i);function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",18),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Unable to connect to server. Try again"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading",19)}function p(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",23),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](n);var e=t.$implicit;return r["\u0275\u0275nextContext"](2).edit(e)})),r["\u0275\u0275elementStart"](1,"b"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"br"),r["\u0275\u0275elementStart"](4,"em",24),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",i.name," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](i.value)}}function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",20),r["\u0275\u0275elementStart"](1,"div",21),r["\u0275\u0275text"](2," Click any item in the list to edit it "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,p,6,2,"div",22),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",n.settings)}}function g(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"h4",25),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" Edit setting: ",n.selected.name," ")}}function y(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",26),r["\u0275\u0275elementStart"](1,"app-edit-settings",27),r["\u0275\u0275listener"]("onFinish",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().editFinished(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("setting",i.selected)}}var S,b,_,w=[{path:"",component:(S=function(){function e(t,n,i){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.authService=i,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.sms_balance="",-1==this.authService.current_user.permissions.indexOf("Manage Settings")&&(this.goBack(),this.notify.failNotification("You are not permitted to view this page")),this.dbService.setTitle("Settings")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.dbService.getData("getSettings",this.authService.current_user).subscribe((function(t){e.settings=t,e.is_loading=!1,e.is_loaded=!0,e.error=!1}),(function(t){e.is_loading=!1,e.error=!0,e.is_loaded=!1}))}},{key:"backup",value:function(){this.dbService.getData("backupDB",this.authService.current_user).subscribe((function(e){}),(function(e){}))}},{key:"hasPermission",value:function(e){return-1!=this.authService.current_user.permissions.indexOf(e+".Settings.Edit")}},{key:"edit",value:function(e){this.selected=e,$("#edit_modal").modal("show")}},{key:"editFinished",value:function(e){$("#edit_modal").modal("hide")}},{key:"goBack",value:function(){window.history.back()}}]),e}(),S.\u0275fac=function(e){return new(e||S)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](c.a))},S.\u0275cmp=r["\u0275\u0275defineComponent"]({type:S,selectors:[["app-settings"]],decls:21,vars:5,consts:[[1,"content"],[1,"row"],[1,"col-12"],[1,"row","clearfix"],[1,"col-md-6"],[1,"card"],[1,"card-body"],["class","body",4,"ngIf"],["class","",4,"ngIf"],["class","list-group",4,"ngIf"],["id","edit_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-sm"],[1,"modal-content"],[1,"modal-header"],["class","modal-title","id","smallModalLabel",4,"ngIf"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-danger","waves-effect"],[1,"body"],[1,""],[1,"list-group"],[1,"list-group-item"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"pull-right"],["id","smallModalLabel",1,"modal-title"],[1,"modal-body"],[3,"setting","onFinish"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"h5"),r["\u0275\u0275text"](4,"Settings"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",3),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275elementStart"](7,"div",5),r["\u0275\u0275elementStart"](8,"div",6),r["\u0275\u0275template"](9,f,3,0,"div",7),r["\u0275\u0275template"](10,v,1,0,"app-loading",8),r["\u0275\u0275template"](11,h,4,1,"div",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"div",10),r["\u0275\u0275elementStart"](13,"div",11),r["\u0275\u0275elementStart"](14,"div",12),r["\u0275\u0275elementStart"](15,"div",13),r["\u0275\u0275template"](16,g,2,1,"h4",14),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](17,y,2,1,"div",15),r["\u0275\u0275elementStart"](18,"div",16),r["\u0275\u0275elementStart"](19,"button",17),r["\u0275\u0275text"](20,"CLOSE"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("ngIf",t.error),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.is_loaded),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngIf",null!=t.selected),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null!=t.selected))},directives:[a.j,d.a,a.i,m],styles:[""]}),S)}],C=((b=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[o.f.forChild(w)],o.f]}),b),E=n("nEHF"),k=((_=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[a.b,C,E.a]]}),_)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()}}]);