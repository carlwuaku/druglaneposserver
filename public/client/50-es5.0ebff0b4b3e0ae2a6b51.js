function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{Fbie:function(e,t,n){"use strict";n.r(t),n.d(t,"NearMinModule",(function(){return g}));var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),c=n("ccyI"),a=n("1VJT"),s=n("c92J"),l=n("g1vN"),d=n("hiAm");function u(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}var f,m,p,h=[{path:"",component:(f=function(){function e(t,n,i){_classCallCheck(this,e),this.authService=t,this.notify=n,this.dbService=i,this.objects=[],this.is_loading=!1,-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Near Minimum Stock")}return _createClass(e,[{key:"ngOnInit",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var e=this;this.is_loading=!0,this.notify.showLoading(),this.dbService.getData("product/getStockNearMinList",this.authService.current_user).subscribe((function(t){e.objects=t.data,e.notify.hideLoading(),e.is_loading=!1}),(function(t){e.notify.noConnectionNotification(),e.is_loading=!1}))}},{key:"goBack",value:function(){window.history.back()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](s.a))},f.\u0275cmp=r["\u0275\u0275defineComponent"]({type:f,selectors:[["app-near-min"]],decls:14,vars:2,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"btn-sm","btn","btn-success",3,"click"],[1,"fa","fa-refresh"],[1,"card-body"],[4,"ngIf"],[3,"objects"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"div",5),r["\u0275\u0275elementStart"](6,"h5"),r["\u0275\u0275text"](7,"Inventory Items near minimum stock "),r["\u0275\u0275elementStart"](8,"button",6),r["\u0275\u0275listener"]("click",(function(){return t.getProducts()})),r["\u0275\u0275element"](9,"i",7),r["\u0275\u0275text"](10," Refresh List"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",8),r["\u0275\u0275template"](12,u,1,0,"app-loading",9),r["\u0275\u0275element"](13,"app-product-list",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](12),r["\u0275\u0275property"]("ngIf",t.is_loading),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("objects",t.objects))},directives:[i.j,l.a,d.a],styles:[""]}),f)}],v=((m=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||m)},imports:[[o.f.forChild(h)],o.f]}),m),b=n("nEHF"),y=n("nBlB"),g=((p=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[i.b,v,b.a,y.a]]}),p)}}]);