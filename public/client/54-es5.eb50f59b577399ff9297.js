function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"gp+k":function(e,t,n){"use strict";n.r(t),n.d(t,"AddProductModule",(function(){return y}));var i,r,o,c=n("ofXK"),a=n("tyNb"),d=n("fXoL"),s=n("1VJT"),u=n("c92J"),l=n("ccyI"),f=n("/9/o"),p=[{path:"",component:(i=function(){function e(t,n,i,r,o){_classCallCheck(this,e),this.notify=t,this.dbService=n,this.router=r,this.authService=o,this.can_master_edit=!0,this.can_edit=!0,this.id=i.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Add Product")&&-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.dbService.setTitle("Add Product")}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"productAdded",value:function(e){null==this.id||null==this.id||this.router.navigate(["/product/"+this.id])}},{key:"goBack",value:function(){window.history.back()}}]),e}(),i.\u0275fac=function(e){return new(e||i)(d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](a.a),d["\u0275\u0275directiveInject"](a.c),d["\u0275\u0275directiveInject"](l.a))},i.\u0275cmp=d["\u0275\u0275defineComponent"]({type:i,selectors:[["app-add-product"]],decls:9,vars:1,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[3,"id","onFinish"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"section",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"div",3),d["\u0275\u0275elementStart"](4,"h5"),d["\u0275\u0275text"](5,"Add Product"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"div",4),d["\u0275\u0275elementStart"](7,"div",5),d["\u0275\u0275elementStart"](8,"app-product-form",6),d["\u0275\u0275listener"]("onFinish",(function(e){return t.productAdded(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("id",t.id))},directives:[f.a],styles:[""]}),i)}],h=((r=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[a.f.forChild(p)],a.f]}),r),m=n("nEHF"),v=n("nBlB"),y=((o=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[c.b,h,m.a,v.a]]}),o)},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),r=n("nEHF"),o=n("fXoL"),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a]]}),e}()}}]);