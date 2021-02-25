function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{Cu6Q:function(e,t,n){"use strict";n.r(t),n.d(t,"ProductConsumptionSingleModule",(function(){return w}));var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),c=n("1VJT"),a=n("c92J"),d=n("ccyI"),s=n("4j6H"),l=n("iuVp");function u(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275text"](1," Type the name of the item and select it. "),o["\u0275\u0275element"](2,"br"),o["\u0275\u0275elementStart"](3,"app-select-product",7),o["\u0275\u0275listener"]("onAdd",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().productSelected(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("type","search"))}function f(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"h5"),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",n.object.name," ")}}function p(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",8),o["\u0275\u0275elementStart"](1,"div",9),o["\u0275\u0275template"](2,f,2,1,"h5",5),o["\u0275\u0275elementStart"](3,"button",10),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().cancel()})),o["\u0275\u0275text"](4,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",11),o["\u0275\u0275element"](6,"app-product-consumption-single",12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var i=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",null!=i.object&&null!=i.object),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("id",i.id)}}var m,h,v,y=[{path:"",component:(m=function(){function e(t,n,i,r,o){_classCallCheck(this,e),this.notify=t,this.dbService=n,this.router=r,this.authService=o,this.stock_changes=[],this.can_master_edit=!0,this.can_edit=!0,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.id=i.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.dbService.setTitle(" Product Consumption")}return _createClass(e,[{key:"ngOnInit",value:function(){null!=this.id&&this.getobject()}},{key:"getobject",value:function(){var e=this;this.dbService.getDataWithQuery("product/findById",this.authService.current_user,"id="+this.id).subscribe((function(t){e.object=t.data,e.is_loading=!1,e.is_loaded=!0,e.error=!1}),(function(t){e.is_loading=!1,e.error=!0,e.is_loaded=!1}))}},{key:"goBack",value:function(){window.history.back()}},{key:"productSelected",value:function(e){this.id=e.id,this.getobject()}},{key:"cancel",value:function(){this.id=void 0}}]),e}(),m.\u0275fac=function(e){return new(e||m)(o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](r.c),o["\u0275\u0275directiveInject"](d.a))},m.\u0275cmp=o["\u0275\u0275defineComponent"]({type:m,selectors:[["app-product-consumption-single-page"]],decls:10,vars:2,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"text-muted"],[4,"ngIf"],["class","card",4,"ngIf"],[3,"type","onAdd"],[1,"card"],[1,"card-header"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"card-body"],[3,"id"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h5"),o["\u0275\u0275text"](5,"Product Consumption"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"em",4),o["\u0275\u0275text"](7,"View the monthly sales, purchases, transfers of a product"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](8,u,4,1,"div",5),o["\u0275\u0275template"](9,p,7,2,"div",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("ngIf",null==t.id),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null!=t.id&&null!=t.id))},directives:[i.j,s.a,l.a],styles:[""]}),m)}],b=((h=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[r.f.forChild(y)],r.f]}),h),g=n("nEHF"),C=n("nBlB"),w=((v=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[i.b,b,g.a,C.a]]}),v)},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),r=n("nEHF"),o=n("fXoL"),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a]]}),e}()}}]);