function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"4j6H":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n("fXoL"),i=n("c92J"),o=n("1VJT"),a=n("BbYg"),s=n("ccyI"),c=n("ofXK"),l=n("hiAm"),d=n("3Pt+"),u=n("tyNb");function p(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function h(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Not found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",8),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function m(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",6),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).select_product=e}))("change",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).productSelected()})),r["\u0275\u0275template"](4,f,2,2,"option",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.select_product),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",i.objects)}}function g(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"button",4),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().addProduct()})),r["\u0275\u0275text"](3,"Add Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,p,1,0,"app-loading",5),r["\u0275\u0275template"](5,h,3,0,"div",5),r["\u0275\u0275template"](6,m,5,2,"div",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",i.is_searching),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.error_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.is_finished_search)}}function v(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"b"),r["\u0275\u0275text"](2,"Not found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}var y=function(e){return{"select-product-active":e}};function _(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"li",17),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](n);var e=t.$implicit;return r["\u0275\u0275nextContext"](3).add(e)})),r["\u0275\u0275text"](1),r["\u0275\u0275element"](2,"br"),r["\u0275\u0275text"](3),r["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,o=t.index,a=r["\u0275\u0275nextContext"](3);r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](7,y,o==a.arrowkeyLocation)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",i.name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate5"](" [price: ",i.price,"/",i.unit,"] [stock: ",i.stock,"] [shelf: ",i.shelf,"] [expiry: ",i.expiry,"] ")}}function b(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",12),r["\u0275\u0275elementStart"](1,"ul",13),r["\u0275\u0275template"](2,_,4,9,"li",14),r["\u0275\u0275elementStart"](3,"li",15),r["\u0275\u0275text"](4,"No. of items: "),r["\u0275\u0275elementStart"](5,"input",16),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).num_items=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",i.objects),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.num_items)}}function S(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275text"](1," Item not found. Check the spelling. Or "),r["\u0275\u0275elementStart"](2,"a",18),r["\u0275\u0275element"](3,"i",19),r["\u0275\u0275text"](4," click here to add a new product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",9),r["\u0275\u0275elementStart"](1,"input",10),r["\u0275\u0275listener"]("keyup",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().keyUp(e)}))("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().param=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,v,3,0,"div",5),r["\u0275\u0275template"](3,b,6,2,"div",11),r["\u0275\u0275template"](4,S,5,0,"div",5),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngModel",i.param),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.error_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.objects.length>0&&i.is_finished_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.objects.length<1&&i.is_finished_search)}}var C=function(){var e=function(){function e(t,n,i,o){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.localforage=i,this.authService=o,this.onFinish=new r.EventEmitter,this.btn_text="Select",this.onAdd=new r.EventEmitter,this.type="search",this.show="no",this.param="",this.objects=[],this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.added=[],this.filter_param="",this.filter_results=[],this.local_products=[],this.arrowkeyLocation=0,this.num_items=10,$(".search_results").on("click",(function(){$("#sales_search").focus()}))}return _createClass(e,[{key:"ngOnInit",value:function(){"list"!=this.type&&"select"!=this.type||this.list()}},{key:"hideSearchResults",value:function(){this.param="",this.objects.length=0,this.is_finished_search=!1}},{key:"ngOnChanges",value:function(){$("#sales_search").focus()}},{key:"productSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.select_product){this.onAdd.emit(this.objects[e]);break}}},{key:"addProduct",value:function(){$("#add_product_modal").modal("show")}},{key:"productAdded",value:function(e){e.price=parseFloat(e.price),this.objects.push(e),this.onAdd.emit(e),$("#add_product_modal").modal("hide")}},{key:"list",value:function(){var e=this;this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getData("product/getList",this.authService.current_user).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.filter_results="yes"==e.show?e.objects:[],e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"filterlist",value:function(){var e=this.filter_param;this.filter_results=null==e||null==e||e.length<1?"yes"==this.show?this.objects:[]:this.objects.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"add",value:function(e){this.onAdd.emit(e),this.is_finished_search=!1,$("#sales_search").focus(),this.param="",this.objects=[],this.arrowkeyLocation=0}},{key:"search",value:function(){var e=this;if(""==this.param.trim()||null==this.param||null==this.param)return this.objects=[],void(this.is_finished_search=!1);this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getDataWithQuery("product/search",this.authService.current_user,"param="+this.param+"&limit="+this.num_items).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1,e.selected=null)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"localSearch",value:function(){var e=this;this.is_searching=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){if(e.local_products=t,e.is_finished_search=!1,e.error_search=!1,e.param.length<1)return e.objects=[],e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;if(null==e.local_products)return e.objects=[],e.notify.failNotification("No Products! Please refresh the page"),e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;var n=e.param.toLowerCase().trim(),r=n.split(" "),i=e.local_products.filter((function(e){for(var t=0;t<r.length;t++)if(-1==e.name.toLowerCase().indexOf(r[t])&&e.barcode!=r[t])return!1;return!0}));i.sort((function(e,t){var r=e.name.toLowerCase(),i=t.name.toLowerCase();return r.indexOf(n)<i.indexOf(n)?-1:r>i?1:0})),e.objects=i.slice(0,i.length>e.num_items?e.num_items-1:i.length),e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1}),(function(t){e.notify.failNotification("Failed to get products. Please refresh the page")}))}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"highlightObject",value:function(e){this.objects.map((function(e){e.selected=!1})),this.highlightedObject=e,e.selected=!0}},{key:"keyUp",value:function(e){switch(e.keyCode){case 38:0==this.arrowkeyLocation||this.arrowkeyLocation--,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 40:this.arrowkeyLocation==this.objects.length-1||this.arrowkeyLocation++,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 13:var t=this.objects[this.arrowkeyLocation];null!=t&&null!=t&&this.add(t);break;case 27:this.hideSearchResults();break;default:this.arrowkeyLocation=0,"offline"==this.dbService.ENVIRONMENT?this.search():this.localSearch()}}},{key:"focusCursor",value:function(){var e=$("#sales_search").val();$("#sales_search").val("").val(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.LocalForageService),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-product"]],inputs:{btn_text:"btn_text",type:"type",show:"show",timestamp:"timestamp"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","focus_search",4,"ngIf"],[1,""],[1,"body"],[1,"btn","btn-inverse","btn-sm",3,"click"],[4,"ngIf"],["name","products",1,"product",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"focus_search"],["autofocus","","autocomplete","off","placeholder","Enter product names or barcode","required","","type","text","id","sales_search","name","search",3,"ngModel","keyup","ngModelChange"],["class","search_results ","id","search_results_list",4,"ngIf"],["id","search_results_list",1,"search_results"],[1,"list-group"],["tabindex","-1","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item"],["type","number","min","10","size","10",3,"ngModel","ngModelChange"],["tabindex","-1",1,"list-group-item",3,"ngClass","click"],["routerLink","/add_product"],[1,"feather","icon-plus"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,g,7,3,"div",0),r["\u0275\u0275template"](1,x,5,4,"div",1)),2&e&&(r["\u0275\u0275property"]("ngIf","select"==t.type),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","search"==t.type))},directives:[c.j,l.a,d.l,d.d,d.g,c.i,d.h,d.m,d.a,d.k,d.i,c.h,u.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline}"]}),e}()},SdSZ:function(e,t,n){"use strict";n.r(t),n.d(t,"ClientStockTakingModule",(function(){return E}));var r=n("ofXK"),i=n("tyNb"),o=n("fXoL"),a=n("c92J"),s=n("bgkY"),c=n("1VJT"),l=n("eJvr"),d=n("ccyI"),u=n("3Pt+"),p=n("4j6H");function h(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",12),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275propertyInterpolate"]("value",n.code),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate3"](" ",n.code," - ",n.date," by ",n.created_by," ")}}function f(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"app-select-product",13),o["\u0275\u0275listener"]("onAdd",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().productSelected(e)})),o["\u0275\u0275elementEnd"]()}if(2&e){var r=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("timestamp",r.ts)("type","search")}}function m(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",12),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275propertyInterpolate"]("value",n),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](n)}}function g(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"input",30),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"](2).product.unit=e})),o["\u0275\u0275elementEnd"]()}if(2&e){var r=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("ngModel",r.product.unit)}}function v(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275elementStart"](1,"span"),o["\u0275\u0275text"](2),o["\u0275\u0275elementStart"](3,"button",14),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().cancel()})),o["\u0275\u0275element"](4,"i",15),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",6),o["\u0275\u0275elementStart"](6,"label"),o["\u0275\u0275text"](7,"Quantity Counted"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](8,"br"),o["\u0275\u0275elementStart"](9,"input",16),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().counted=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"div",6),o["\u0275\u0275elementStart"](11,"label"),o["\u0275\u0275text"](12,"Selling Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](13,"br"),o["\u0275\u0275elementStart"](14,"input",17),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().product.price=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",6),o["\u0275\u0275elementStart"](16,"label"),o["\u0275\u0275text"](17,"Cost Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](18,"br"),o["\u0275\u0275elementStart"](19,"input",18),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().product.cost_price=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"div",6),o["\u0275\u0275elementStart"](21,"label"),o["\u0275\u0275text"](22,"Category"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](23,"br"),o["\u0275\u0275elementStart"](24,"input",19),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().product.category=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"div",6),o["\u0275\u0275elementStart"](26,"label"),o["\u0275\u0275text"](27,"Shelf"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](28,"br"),o["\u0275\u0275elementStart"](29,"input",20),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().product.shelf=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"div",6),o["\u0275\u0275elementStart"](31,"label"),o["\u0275\u0275text"](32,"Unit"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](33,"br"),o["\u0275\u0275elementStart"](34,"select",21),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().unit_selected=e})),o["\u0275\u0275template"](35,m,2,2,"option",8),o["\u0275\u0275elementStart"](36,"option",22),o["\u0275\u0275text"](37,"Other"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](38,g,1,1,"input",23),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"div",6),o["\u0275\u0275elementStart"](40,"label"),o["\u0275\u0275text"](41,"Size"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](42,"br"),o["\u0275\u0275elementStart"](43,"input",24),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().product.size=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](44,"div",6),o["\u0275\u0275elementStart"](45,"label"),o["\u0275\u0275text"](46,"Expiry Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](47,"br"),o["\u0275\u0275elementStart"](48,"input",25),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().product.expiry=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"div",26),o["\u0275\u0275elementStart"](50,"div",27),o["\u0275\u0275elementStart"](51,"button",28),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().cancel()})),o["\u0275\u0275text"](52,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](53,"div",27),o["\u0275\u0275elementStart"](54,"button",29),o["\u0275\u0275text"](55,"Submit"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var r=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("Item Name: ",r.product.name," "),o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("ngModel",r.counted),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.product.price),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.product.cost_price),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.product.category),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.product.shelf),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.unit_selected),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",r.units),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf","other"==r.unit_selected),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.product.size),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",r.product.expiry)}}var y,_,b,S=[{path:"",component:(y=function(){function e(t,n,r,i,o){_classCallCheck(this,e),this.dbService=t,this.socket=n,this.notify=r,this.localforage=i,this.authService=o,this.product=null,this.sessions=[],this.units=[],this.unit_selected="",this.ts=this.dbService.getToday("timestamp_string"),this.year=this.dbService.getThisYear()}return _createClass(e,[{key:"ngOnInit",value:function(){this.getSessions(),this.units=this.dbService.units}},{key:"getItemStock",value:function(){var e=this;this.dbService.getData("product/getPendingStockQuantity?product="+this.product.id+"&code="+this.code,this.authService.current_user).subscribe((function(t){"1"==t.status&&(window.confirm("previous entry found for the selected product. click ok to use previous data, click cancel to enter fresh values")&&(e.product.expiry=t.data.expiry),e.product.size=t.data.size,e.product.category=t.data.category,e.product.cost_price=t.data.cost_price,e.product.price=t.data.current_price,e.counted=t.data.quantity_counted,e.unit_selected=t.data.unit,e.product.unit=t.data.unit,e.product.shelf=t.data.shelf)}),(function(t){e.notify.failNotification("Unable to get previous stock. Check connection")}))}},{key:"getSessions",value:function(){var e=this;this.notify.showLoading(),this.dbService.getData("product/getPendingStockAdjustmentSessions?year="+this.year,this.authService.current_user).subscribe((function(t){e.sessions=t.data,e.notify.hideLoading()}),(function(t){e.notify.hideLoading(),e.notify.failNotification("Unable to get sessions")}))}},{key:"productSelected",value:function(e){this.product=e,this.product.stock=e.stock,null!=this.product.cost_price&&null!=this.product.cost_price&&""!=this.product.cost_price||(this.product.cost_price=0),this.getItemStock()}},{key:"submit",value:function(){var e=this,t=new FormData;this.notify.showLoading(),"other"!=this.unit_selected&&(this.product.unit=this.unit_selected),t.append("product",this.product.id),t.append("quantity_counted",this.counted),t.append("quantity_expected",this.product.stock),t.append("size",this.product.size),t.append("expiry",this.product.expiry),t.append("cost_price",this.product.cost_price),t.append("current_price",this.product.price),t.append("category",this.product.category),t.append("shelf",this.product.shelf),t.append("unit",this.product.unit),t.append("code",this.code),t.append("date",this.dbService.getToday()),this.dbService.postData(t,"product/savePendingSingleStockAdjustment",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.cancel(),e.notify.showNotification("Submitted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}},{key:"cancel",value:function(){this.product=null,this.counted=null}}]),e}(),y.\u0275fac=function(e){return new(e||y)(o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](d.a))},y.\u0275cmp=o["\u0275\u0275defineComponent"]({type:y,selectors:[["app-client-stock-taking"]],decls:16,vars:4,consts:[[1,"content"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"form-group"],["required","","name","code",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"timestamp","type","onAdd",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],[4,"ngIf"],[3,"value"],[3,"timestamp","type","onAdd"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-remove"],["autocomplete","off","name","counted","type","text",1,"form-control",3,"ngModel","ngModelChange"],["autocomplete","off","name","selling_price","type","text",1,"form-control",3,"ngModel","ngModelChange"],["autocomplete","off","name","cost_price","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","category","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","shelf","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","unit",1,"",3,"ngModel","ngModelChange"],["value","other"],["class","form-control","type","text","name","unit",3,"ngModel","ngModelChange",4,"ngIf"],["autocomplete","off","name","size","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","expiry","type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],[1,"col"],["type","button",1,"btn","btn-block","btn-danger",3,"click"],["type","submit",1,"btn","btn-block","btn-success"],["type","text","name","unit",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"div",4),o["\u0275\u0275elementStart"](5,"div",5),o["\u0275\u0275elementStart"](6,"div",6),o["\u0275\u0275elementStart"](7,"label"),o["\u0275\u0275text"](8," Select the session code"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](9,"br"),o["\u0275\u0275elementStart"](10,"select",7),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.code=e})),o["\u0275\u0275template"](11,h,2,4,"option",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](12,f,1,2,"app-select-product",9),o["\u0275\u0275elementStart"](13,"form",10),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),o["\u0275\u0275element"](14,"hr"),o["\u0275\u0275template"](15,v,56,11,"div",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](10),o["\u0275\u0275property"]("ngModel",t.code),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",t.sessions),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==t.product),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf",null!=t.product))},directives:[u.l,u.k,u.d,u.g,r.i,r.j,u.e,u.f,u.h,u.m,p.a,u.a],styles:[""]}),y)}],x=((_=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[i.f.forChild(S)],i.f]}),_),C=n("nEHF"),k=n("nBlB"),E=((b=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[r.b,x,C.a,k.a]]}),b)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"i",0),r["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ofXK"),i=n("nEHF"),o=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,i.a]]}),e}()}}]);