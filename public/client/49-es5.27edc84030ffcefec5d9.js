function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"9EpT":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var i=n("fXoL"),r=["bcElement"],o=n("YsXA"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.renderer=e,this.elementType="svg",this.cssClass="barcode",this.format="CODE128",this.lineColor="#000000",this.width=2,this.height=100,this.displayValue=!1,this.fontOptions="",this.font="monospace",this.textAlign="center",this.textPosition="bottom",this.textMargin=2,this.fontSize=20,this.background="#ffffff",this.margin=10,this.marginTop=10,this.marginBottom=10,this.marginLeft=10,this.marginRight=10,this.value="",this.valid=function(){return!0}}return _createClass(t,[{key:"ngOnChanges",value:function(){this.createBarcode()}},{key:"createBarcode",value:function(){if(this.value){var t;switch(this.elementType){case"img":t=this.renderer.createElement("img");break;case"canvas":t=this.renderer.createElement("canvas");break;case"svg":default:t=this.renderer.createElement("svg","svg")}o(t,this.value,this.options);var e,n=_createForOfIteratorHelper(this.bcElement.nativeElement.childNodes);try{for(n.s();!(e=n.n()).done;){var i=e.value;this.renderer.removeChild(this.bcElement.nativeElement,i)}}catch(r){n.e(r)}finally{n.f()}this.renderer.appendChild(this.bcElement.nativeElement,t)}}},{key:"options",get:function(){return{format:this.format,lineColor:this.lineColor,width:this.width,height:this.height,displayValue:this.displayValue,fontOptions:this.fontOptions,font:this.font,textAlign:this.textAlign,textPosition:this.textPosition,textMargin:this.textMargin,fontSize:this.fontSize,background:this.background,margin:this.margin,marginTop:this.marginTop,marginBottom:this.marginBottom,marginLeft:this.marginLeft,marginRight:this.marginRight,valid:this.valid}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275directiveInject"](i.Renderer2))},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-barcode6"]],viewQuery:function(t,e){var n;1&t&&i["\u0275\u0275staticViewQuery"](r,!0),2&t&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(e.bcElement=n.first)},inputs:{elementType:["bc-element-type","elementType"],cssClass:["bc-class","cssClass"],format:["bc-format","format"],lineColor:["bc-line-color","lineColor"],width:["bc-width","width"],height:["bc-height","height"],displayValue:["bc-display-value","displayValue"],fontOptions:["bc-font-options","fontOptions"],font:["bc-font","font"],textAlign:["bc-text-align","textAlign"],textPosition:["bc-text-position","textPosition"],textMargin:["bc-text-margin","textMargin"],fontSize:["bc-font-size","fontSize"],background:["bc-background","background"],margin:["bc-margin","margin"],marginTop:["bc-margin-top","marginTop"],marginBottom:["bc-margin-bottom","marginBottom"],marginLeft:["bc-margin-left","marginLeft"],marginRight:["bc-margin-right","marginRight"],value:["bc-value","value"],valid:["bc-valid","valid"]},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["bcElement",""]],template:function(t,e){1&t&&i["\u0275\u0275element"](0,"div",null,0),2&t&&i["\u0275\u0275classMap"](e.cssClass)},encapsulation:2}),t}(),s=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[]]}),t}()},"gp+k":function(t,e,n){"use strict";n.r(e),n.d(e,"AddProductModule",(function(){return v}));var i,r,o,a=n("ofXK"),s=n("tyNb"),c=n("fXoL"),l=n("1VJT"),u=n("c92J"),d=n("ccyI"),f=n("/9/o"),h=[{path:"",component:(i=function(){function t(e,n,i,r,o){_classCallCheck(this,t),this.notify=e,this.dbService=n,this.router=r,this.authService=o,this.can_master_edit=!0,this.can_edit=!0,this.id=i.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("Add Product")&&-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.dbService.goBackHome()),this.dbService.setTitle("Add Product")}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"productAdded",value:function(t){null==this.id||null==this.id||this.router.navigate(["/product/"+this.id])}},{key:"goBack",value:function(){window.history.back()}}]),t}(),i.\u0275fac=function(t){return new(t||i)(c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](s.c),c["\u0275\u0275directiveInject"](d.a))},i.\u0275cmp=c["\u0275\u0275defineComponent"]({type:i,selectors:[["app-add-product"]],decls:9,vars:1,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[3,"id","onFinish"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"section",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275elementStart"](3,"div",3),c["\u0275\u0275elementStart"](4,"h5"),c["\u0275\u0275text"](5,"Add Product"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",4),c["\u0275\u0275elementStart"](7,"div",5),c["\u0275\u0275elementStart"](8,"app-product-form",6),c["\u0275\u0275listener"]("onFinish",(function(t){return e.productAdded(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("id",e.id))},directives:[f.a],styles:[""]}),i)}],m=((r=function t(){_classCallCheck(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||r)},imports:[[s.f.forChild(h)],s.f]}),r),p=n("nEHF"),g=n("nBlB"),v=((o=function t(){_classCallCheck(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||o)},imports:[[a.b,m,p.a,g.a]]}),o)},nBlB:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ofXK"),r=n("nEHF"),o=n("9EpT"),a=n("fXoL"),s=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.b]]}),t}()}}]);