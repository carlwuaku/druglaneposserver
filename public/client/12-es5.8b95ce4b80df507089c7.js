function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dsgz:function(e,t,n){"use strict";n.r(t),n.d(t,"EditProductModule",(function(){return k}));var i=n("ofXK"),r=n("tyNb"),a=n("fXoL"),o=n("1VJT"),d=n("c92J"),c=n("ccyI"),l=n("4j6H"),s=n("TFay");function u(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275text"](1," Type the name of the item and select it. "),a["\u0275\u0275element"](2,"br"),a["\u0275\u0275elementStart"](3,"app-select-product",13),a["\u0275\u0275listener"]("onAdd",(function(e){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().productSelected(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("type","search"))}function m(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",14),a["\u0275\u0275elementStart"](1,"div",15),a["\u0275\u0275elementStart"](2,"button",16),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().cancel()})),a["\u0275\u0275text"](3,"Cancel"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"div",17),a["\u0275\u0275elementStart"](5,"app-product-form",18),a["\u0275\u0275listener"]("onFinish",(function(e){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().productAdded(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){var i=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("id",i.id)}}var f,p,v,h=[{path:"",component:(f=function(){function e(t,n,i,r,a){_classCallCheck(this,e),this.notify=t,this.dbService=n,this.router=r,this.authService=a,this.can_master_edit=!0,this.can_edit=!0,this.id=i.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Add Product")&&-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.dbService.setTitle("Edit Product")}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.id)}},{key:"productAdded",value:function(e){$("#edit_again_modal").modal({backdrop:"static",keyboard:!1})}},{key:"goBack",value:function(){window.history.back()}},{key:"productSelected",value:function(e){this.router.navigate(["/edit_product/"+e.id])}},{key:"leave",value:function(){$("#edit_again_modal").modal("hide"),this.router.navigate(["/product/".concat(this.id)])}},{key:"stay",value:function(){$("#edit_again_modal").modal("hide"),this.router.navigate(["/edit_product"])}},{key:"cancel",value:function(){this.router.navigate(["/edit_product"])}}]),e}(),f.\u0275fac=function(e){return new(e||f)(a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](r.d),a["\u0275\u0275directiveInject"](c.a))},f.\u0275cmp=a["\u0275\u0275defineComponent"]({type:f,selectors:[["app-edit-product"]],decls:19,vars:2,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngIf"],["class","card",4,"ngIf"],["id","edit_again_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-sm"],[1,"modal-content"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[3,"type","onAdd"],[1,"card"],[1,"card-header"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"card-body"],[3,"id","onFinish"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"section",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"h5"),a["\u0275\u0275text"](5,"Edit Product"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,u,4,1,"div",4),a["\u0275\u0275template"](7,m,6,1,"div",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",6),a["\u0275\u0275elementStart"](9,"div",7),a["\u0275\u0275elementStart"](10,"div",8),a["\u0275\u0275elementStart"](11,"div",9),a["\u0275\u0275elementStart"](12,"h5"),a["\u0275\u0275text"](13,"Would you like to edit another product?"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",10),a["\u0275\u0275elementStart"](15,"button",11),a["\u0275\u0275listener"]("click",(function(){return t.stay()})),a["\u0275\u0275text"](16,"Yes"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"button",12),a["\u0275\u0275listener"]("click",(function(){return t.leave()})),a["\u0275\u0275text"](18,"No"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("ngIf",null==t.id),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null!=t.id))},directives:[i.j,l.a,s.a],styles:[""]}),f)}],y=((p=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[r.f.forChild(h)],r.f]}),p),g=n("nEHF"),b=n("nBlB"),k=((v=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[i.b,y,g.a,b.a]]}),v)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),r=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()}}]);