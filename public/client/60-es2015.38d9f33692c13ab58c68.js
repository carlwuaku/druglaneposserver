(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{Cu6Q:function(e,t,n){"use strict";n.r(t),n.d(t,"ProductConsumptionSingleModule",(function(){return y}));var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),c=n("1VJT"),d=n("c92J"),s=n("ccyI"),a=n("4j6H"),l=n("iuVp");function u(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275text"](1," Type the name of the item and select it. "),o["\u0275\u0275element"](2,"br"),o["\u0275\u0275elementStart"](3,"app-select-product",7),o["\u0275\u0275listener"]("onAdd",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().productSelected(t)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("type","search"))}function p(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"h5"),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",e.object.name," ")}}function m(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",8),o["\u0275\u0275elementStart"](1,"div",9),o["\u0275\u0275template"](2,p,2,1,"h5",5),o["\u0275\u0275elementStart"](3,"button",10),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().cancel()})),o["\u0275\u0275text"](4,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",11),o["\u0275\u0275element"](6,"app-product-consumption-single",12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",null!=e.object&&null!=e.object),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("id",e.id)}}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r){this.notify=e,this.dbService=t,this.router=i,this.authService=r,this.stock_changes=[],this.can_master_edit=!0,this.can_edit=!0,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.id=n.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.dbService.setTitle(" Product Consumption")}ngOnInit(){null!=this.id&&this.getobject()}getobject(){this.dbService.getDataWithQuery("product/findById",this.authService.current_user,"id="+this.id).subscribe(e=>{this.object=e.data,this.is_loading=!1,this.is_loaded=!0,this.error=!1},e=>{this.is_loading=!1,this.error=!0,this.is_loaded=!1})}goBack(){window.history.back()}productSelected(e){this.id=e.id,this.getobject()}cancel(){this.id=void 0}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](r.c),o["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-product-consumption-single-page"]],decls:10,vars:2,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"text-muted"],[4,"ngIf"],["class","card",4,"ngIf"],[3,"type","onAdd"],[1,"card"],[1,"card-header"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"card-body"],[3,"id"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h5"),o["\u0275\u0275text"](5,"Product Consumption"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"em",4),o["\u0275\u0275text"](7,"View the monthly sales, purchases, transfers of a product"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](8,u,4,1,"div",5),o["\u0275\u0275template"](9,m,7,2,"div",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("ngIf",null==t.id),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null!=t.id&&null!=t.id))},directives:[i.j,a.a,l.a],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(h)],r.f]}),e})();var v=n("nEHF"),g=n("nBlB");let y=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,f,v.a,g.a]]}),e})()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),r=n("nEHF"),o=n("fXoL");let c=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a]]}),e})()}}]);