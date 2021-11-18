function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,a=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){a=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9EpT":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var i=n("fXoL"),r=["bcElement"],o=n("YsXA"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.renderer=t,this.elementType="svg",this.cssClass="barcode",this.format="CODE128",this.lineColor="#000000",this.width=2,this.height=100,this.displayValue=!1,this.fontOptions="",this.font="monospace",this.textAlign="center",this.textPosition="bottom",this.textMargin=2,this.fontSize=20,this.background="#ffffff",this.margin=10,this.marginTop=10,this.marginBottom=10,this.marginLeft=10,this.marginRight=10,this.value="",this.valid=function(){return!0}}return _createClass(e,[{key:"ngOnChanges",value:function(){this.createBarcode()}},{key:"createBarcode",value:function(){if(this.value){var e;switch(this.elementType){case"img":e=this.renderer.createElement("img");break;case"canvas":e=this.renderer.createElement("canvas");break;case"svg":default:e=this.renderer.createElement("svg","svg")}o(e,this.value,this.options);var t,n=_createForOfIteratorHelper(this.bcElement.nativeElement.childNodes);try{for(n.s();!(t=n.n()).done;){var i=t.value;this.renderer.removeChild(this.bcElement.nativeElement,i)}}catch(r){n.e(r)}finally{n.f()}this.renderer.appendChild(this.bcElement.nativeElement,e)}}},{key:"options",get:function(){return{format:this.format,lineColor:this.lineColor,width:this.width,height:this.height,displayValue:this.displayValue,fontOptions:this.fontOptions,font:this.font,textAlign:this.textAlign,textPosition:this.textPosition,textMargin:this.textMargin,fontSize:this.fontSize,background:this.background,margin:this.margin,marginTop:this.marginTop,marginBottom:this.marginBottom,marginLeft:this.marginLeft,marginRight:this.marginRight,valid:this.valid}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.Renderer2))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-barcode6"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275staticViewQuery"](r,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.bcElement=n.first)},inputs:{elementType:["bc-element-type","elementType"],cssClass:["bc-class","cssClass"],format:["bc-format","format"],lineColor:["bc-line-color","lineColor"],width:["bc-width","width"],height:["bc-height","height"],displayValue:["bc-display-value","displayValue"],fontOptions:["bc-font-options","fontOptions"],font:["bc-font","font"],textAlign:["bc-text-align","textAlign"],textPosition:["bc-text-position","textPosition"],textMargin:["bc-text-margin","textMargin"],fontSize:["bc-font-size","fontSize"],background:["bc-background","background"],margin:["bc-margin","margin"],marginTop:["bc-margin-top","marginTop"],marginBottom:["bc-margin-bottom","marginBottom"],marginLeft:["bc-margin-left","marginLeft"],marginRight:["bc-margin-right","marginRight"],value:["bc-value","value"],valid:["bc-valid","valid"]},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["bcElement",""]],template:function(e,t){1&e&&i["\u0275\u0275element"](0,"div",null,0),2&e&&i["\u0275\u0275classMap"](t.cssClass)},encapsulation:2}),e}(),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[]]}),e}()},dsgz:function(e,t,n){"use strict";n.r(t),n.d(t,"EditProductModule",(function(){return k}));var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),a=n("1VJT"),c=n("c92J"),l=n("ccyI"),s=n("4j6H"),d=n("/9/o");function u(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275text"](1," Type the name of the item and select it. "),o["\u0275\u0275element"](2,"br"),o["\u0275\u0275elementStart"](3,"app-select-product",13),o["\u0275\u0275listener"]("onAdd",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().productSelected(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("type","search"))}function f(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",14),o["\u0275\u0275elementStart"](1,"div",15),o["\u0275\u0275elementStart"](2,"button",16),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().cancel()})),o["\u0275\u0275text"](3,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"div",17),o["\u0275\u0275elementStart"](5,"app-product-form",18),o["\u0275\u0275listener"]("onFinish",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().productAdded(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var i=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("id",i.id)}}var m,h,p,g=[{path:"",component:(m=function(){function e(t,n,i,r,o){_classCallCheck(this,e),this.notify=t,this.dbService=n,this.router=r,this.authService=o,this.can_master_edit=!0,this.can_edit=!0,this.id=i.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Add Product")&&-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.dbService.goBackHome()),this.dbService.setTitle("Edit Product")}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.id)}},{key:"productAdded",value:function(e){window.history.back()}},{key:"goBack",value:function(){window.history.back()}},{key:"productSelected",value:function(e){this.router.navigate(["/edit_product/"+e.id])}},{key:"leave",value:function(){$("#edit_again_modal").modal("hide"),this.router.navigate(["/product/".concat(this.id)])}},{key:"stay",value:function(){$("#edit_again_modal").modal("hide"),this.router.navigate(["/edit_product"])}},{key:"cancel",value:function(){window.history.back()}}]),e}(),m.\u0275fac=function(e){return new(e||m)(o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](r.c),o["\u0275\u0275directiveInject"](l.a))},m.\u0275cmp=o["\u0275\u0275defineComponent"]({type:m,selectors:[["app-edit-product"]],decls:19,vars:2,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngIf"],["class","card",4,"ngIf"],["id","edit_again_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-sm"],[1,"modal-content"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[3,"type","onAdd"],[1,"card"],[1,"card-header"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"card-body"],[3,"id","onFinish"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h5"),o["\u0275\u0275text"](5,"Edit Product"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](6,u,4,1,"div",4),o["\u0275\u0275template"](7,f,6,1,"div",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"div",8),o["\u0275\u0275elementStart"](11,"div",9),o["\u0275\u0275elementStart"](12,"h5"),o["\u0275\u0275text"](13,"Would you like to edit another product?"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"div",10),o["\u0275\u0275elementStart"](15,"button",11),o["\u0275\u0275listener"]("click",(function(){return t.stay()})),o["\u0275\u0275text"](16,"Yes"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"button",12),o["\u0275\u0275listener"]("click",(function(){return t.leave()})),o["\u0275\u0275text"](18,"No"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngIf",null==t.id),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null!=t.id))},directives:[i.j,s.a,d.a],styles:[""]}),m)}],v=((h=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[r.f.forChild(g)],r.f]}),h),y=n("nEHF"),b=n("nBlB"),k=((p=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[i.b,v,y.a,b.a]]}),p)},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),r=n("nEHF"),o=n("9EpT"),a=n("fXoL"),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a,o.b]]}),e}()}}]);