function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4j6H":function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("fXoL"),i=n("c92J"),o=n("1VJT"),a=n("BbYg"),s=n("ccyI"),c=n("ofXK"),l=n("hiAm"),d=n("3Pt+"),u=n("tyNb");function h(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Not found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function m(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",8),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function p(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",6),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).select_product=e}))("change",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).productSelected()})),r["\u0275\u0275template"](4,m,2,2,"option",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.select_product),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",i.objects)}}function g(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"button",4),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().addProduct()})),r["\u0275\u0275text"](3,"Add Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,h,1,0,"app-loading",5),r["\u0275\u0275template"](5,f,3,0,"div",5),r["\u0275\u0275template"](6,p,5,2,"div",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",i.is_searching),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.error_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.is_finished_search)}}function v(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"b"),r["\u0275\u0275text"](2,"Not found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}var _=function(e){return{"select-product-active":e}};function b(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"li",17),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](n);var e=t.$implicit;return r["\u0275\u0275nextContext"](3).add(e)})),r["\u0275\u0275text"](1),r["\u0275\u0275element"](2,"br"),r["\u0275\u0275text"](3),r["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,o=t.index,a=r["\u0275\u0275nextContext"](3);r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](7,_,o==a.arrowkeyLocation)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",i.name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate5"](" [price: ",i.price,"/",i.unit,"] [stock: ",i.stock,"] [shelf: ",i.shelf,"] [expiry: ",i.expiry,"] ")}}function y(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",12),r["\u0275\u0275elementStart"](1,"ul",13),r["\u0275\u0275template"](2,b,4,9,"li",14),r["\u0275\u0275elementStart"](3,"li",15),r["\u0275\u0275text"](4,"No. of items: "),r["\u0275\u0275elementStart"](5,"input",16),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).num_items=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",i.objects),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",i.num_items)}}function C(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275text"](1," Item not found. Check the spelling. Or "),r["\u0275\u0275elementStart"](2,"a",18),r["\u0275\u0275element"](3,"i",19),r["\u0275\u0275text"](4," click here to add a new product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",9),r["\u0275\u0275elementStart"](1,"input",10),r["\u0275\u0275listener"]("keyup",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().keyUp(e)}))("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().param=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,v,3,0,"div",5),r["\u0275\u0275template"](3,y,6,2,"div",11),r["\u0275\u0275template"](4,C,5,0,"div",5),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngModel",i.param),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.error_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.objects.length>0&&i.is_finished_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.objects.length<1&&i.is_finished_search)}}var S=function(){var e=function(){function e(t,n,i,o){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.localforage=i,this.authService=o,this.onFinish=new r.EventEmitter,this.btn_text="Select",this.onAdd=new r.EventEmitter,this.type="search",this.show="no",this.param="",this.objects=[],this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.added=[],this.filter_param="",this.filter_results=[],this.local_products=[],this.arrowkeyLocation=0,this.num_items=10,$(".search_results").on("click",(function(){$("#sales_search").focus()}))}return _createClass(e,[{key:"ngOnInit",value:function(){"list"!=this.type&&"select"!=this.type||this.list()}},{key:"hideSearchResults",value:function(){this.param="",this.objects.length=0,this.is_finished_search=!1}},{key:"ngOnChanges",value:function(){$("#sales_search").focus()}},{key:"productSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.select_product){this.onAdd.emit(this.objects[e]);break}}},{key:"addProduct",value:function(){$("#add_product_modal").modal("show")}},{key:"productAdded",value:function(e){e.price=parseFloat(e.price),this.objects.push(e),this.onAdd.emit(e),$("#add_product_modal").modal("hide")}},{key:"list",value:function(){var e=this;this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getData("product/getList",this.authService.current_user).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.filter_results="yes"==e.show?e.objects:[],e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"filterlist",value:function(){var e=this.filter_param;this.filter_results=null==e||null==e||e.length<1?"yes"==this.show?this.objects:[]:this.objects.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"add",value:function(e){this.onAdd.emit(e),this.is_finished_search=!1,$("#sales_search").focus(),this.param="",this.objects=[],this.arrowkeyLocation=0}},{key:"search",value:function(){var e=this;if(""==this.param.trim()||null==this.param||null==this.param)return this.objects=[],void(this.is_finished_search=!1);this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getDataWithQuery("product/search",this.authService.current_user,"param="+this.param+"&limit="+this.num_items).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1,e.selected=null)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"localSearch",value:function(){var e=this;this.is_searching=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){if(e.local_products=t,e.is_finished_search=!1,e.error_search=!1,e.param.length<1)return e.objects=[],e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;if(null==e.local_products)return e.objects=[],e.notify.failNotification("No Products! Please refresh the page"),e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;var n=e.param.toLowerCase().trim(),r=n.split(" "),i=e.local_products.filter((function(e){for(var t=0;t<r.length;t++)if(-1==e.name.toLowerCase().indexOf(r[t])&&e.barcode!=r[t])return!1;return!0}));i.sort((function(e,t){var r=e.name.toLowerCase(),i=t.name.toLowerCase();return r.indexOf(n)<i.indexOf(n)?-1:r>i?1:0})),e.objects=i.slice(0,i.length>e.num_items?e.num_items-1:i.length),e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1}),(function(t){e.notify.failNotification("Failed to get products. Please refresh the page")}))}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"highlightObject",value:function(e){this.objects.map((function(e){e.selected=!1})),this.highlightedObject=e,e.selected=!0}},{key:"keyUp",value:function(e){switch(e.keyCode){case 38:0==this.arrowkeyLocation||this.arrowkeyLocation--,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 40:this.arrowkeyLocation==this.objects.length-1||this.arrowkeyLocation++,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 13:var t=this.objects[this.arrowkeyLocation];null!=t&&null!=t&&this.add(t);break;case 27:this.hideSearchResults();break;default:this.arrowkeyLocation=0,"offline"==this.dbService.ENVIRONMENT?this.search():this.localSearch()}}},{key:"focusCursor",value:function(){var e=$("#sales_search").val();$("#sales_search").val("").val(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.LocalForageService),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-product"]],inputs:{btn_text:"btn_text",type:"type",show:"show",timestamp:"timestamp"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","focus_search",4,"ngIf"],[1,""],[1,"body"],[1,"btn","btn-inverse","btn-sm",3,"click"],[4,"ngIf"],["name","products",1,"product",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"focus_search"],["autofocus","","autocomplete","off","placeholder","Enter product names or barcode","required","","type","text","id","sales_search","name","search",3,"ngModel","keyup","ngModelChange"],["class","search_results ","id","search_results_list",4,"ngIf"],["id","search_results_list",1,"search_results"],[1,"list-group"],["tabindex","-1","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item"],["type","number","min","10","size","10",3,"ngModel","ngModelChange"],["tabindex","-1",1,"list-group-item",3,"ngClass","click"],["routerLink","/add_product"],[1,"feather","icon-plus"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,g,7,3,"div",0),r["\u0275\u0275template"](1,x,5,4,"div",1)),2&e&&(r["\u0275\u0275property"]("ngIf","select"==t.type),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","search"==t.type))},directives:[c.j,l.a,d.l,d.d,d.g,c.i,d.h,d.m,d.a,d.k,d.i,c.h,u.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline}"]}),e}()},"5G6A":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},TFay:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("fXoL"),i=n("mS1k"),o=n("c92J"),a=n("bgkY"),s=n("1VJT"),c=n("ccyI"),l=n("ofXK"),d=n("3Pt+"),u=n("jr2M");function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",24),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](n)}}function f(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"input",25),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).object.unit=e})),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275property"]("ngModel",i.object.unit)}}function m(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"input",26),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).object.category=e})),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275property"]("ngModel",i.object.category)}}function p(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",5),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Starting stock*"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"br"),r["\u0275\u0275elementStart"](4,"input",27),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).object.stock=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",i.object.stock)}}function g(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"form",1,2),r["\u0275\u0275listener"]("ngSubmit",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().submit()})),r["\u0275\u0275elementStart"](2,"div",3),r["\u0275\u0275elementStart"](3,"em"),r["\u0275\u0275text"](4,"Fields marked * are required"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",4),r["\u0275\u0275elementStart"](6,"div",5),r["\u0275\u0275elementStart"](7,"label"),r["\u0275\u0275text"](8,"Product Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"br"),r["\u0275\u0275elementStart"](10,"input",6),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.name=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",5),r["\u0275\u0275elementStart"](12,"label"),r["\u0275\u0275text"](13,"Cost Price*"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](14,"br"),r["\u0275\u0275elementStart"](15,"input",7),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.cost_price=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"div",5),r["\u0275\u0275elementStart"](17,"label"),r["\u0275\u0275text"](18," Selling Price*"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](19,"br"),r["\u0275\u0275elementStart"](20,"input",8),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.price=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",4),r["\u0275\u0275elementStart"](22,"div",5),r["\u0275\u0275elementStart"](23,"label"),r["\u0275\u0275text"](24,"Unit"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](25,"br"),r["\u0275\u0275elementStart"](26,"select",9),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().unit_selected=e})),r["\u0275\u0275template"](27,h,2,2,"option",10),r["\u0275\u0275elementStart"](28,"option",11),r["\u0275\u0275text"](29,"Other"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](30,f,1,1,"input",12),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"div",5),r["\u0275\u0275elementStart"](32,"label"),r["\u0275\u0275text"](33,"Category"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](34,"br"),r["\u0275\u0275elementStart"](35,"div"),r["\u0275\u0275elementStart"](36,"app-select-product-category",13),r["\u0275\u0275listener"]("onFinish",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().categorySelected(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](37,m,1,1,"input",14),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](38,p,5,1,"div",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](39,"div",4),r["\u0275\u0275elementStart"](40,"div",5),r["\u0275\u0275elementStart"](41,"label"),r["\u0275\u0275text"](42,"Minimum stock*"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](43,"br"),r["\u0275\u0275elementStart"](44,"input",16),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.min_stock=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](45,"div",5),r["\u0275\u0275elementStart"](46,"label"),r["\u0275\u0275text"](47,"Maximum stock"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](48,"br"),r["\u0275\u0275elementStart"](49,"input",17),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.max_stock=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"div",5),r["\u0275\u0275elementStart"](51,"label"),r["\u0275\u0275text"](52,"Closest expiry"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](53,"br"),r["\u0275\u0275elementStart"](54,"input",18),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.expiry=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](55,"div",4),r["\u0275\u0275elementStart"](56,"div",5),r["\u0275\u0275elementStart"](57,"label"),r["\u0275\u0275text"](58,"Shelf/Location"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](59,"br"),r["\u0275\u0275elementStart"](60,"input",19),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.shelf=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](61,"div",5),r["\u0275\u0275elementStart"](62,"label"),r["\u0275\u0275text"](63,"Barcode"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](64,"br"),r["\u0275\u0275elementStart"](65,"input",20),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.barcode=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](66,"div",5),r["\u0275\u0275elementStart"](67,"label"),r["\u0275\u0275text"](68,"Notes"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](69,"br"),r["\u0275\u0275elementStart"](70,"textarea",21),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().object.notes=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](71,"input",22),r["\u0275\u0275element"](72,"input",23),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](10),r["\u0275\u0275property"]("ngModel",i.object.name),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",i.object.cost_price),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",i.object.price),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngModel",i.unit_selected),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",i.units),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","other"==i.unit_selected),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("selected",i.object.category),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","other"==i.category_selected),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==i.id),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngModel",i.object.min_stock),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",i.object.max_stock),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",i.object.expiry),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngModel",i.object.shelf),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",i.object.barcode),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",i.object.notes)}}var v=function(){var e=function(){function e(t,n,o,a){_classCallCheck(this,e),this.dbService=t,this.socket=n,this.notify=o,this.authService=a,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.onFinish=new r.EventEmitter,this.units=["ampoule","bottle","box","capsule","carton","glove","inhaler","pack","pessary","piece","roll","strip","suppository","syringe","tablet","tube","vial"],this.unit_selected="",this.category_selected="",this.uploadUrl="admin/uploadPicture",this.can_master_edit=!0,this.can_edit=!0,this.object=new i.a,this.units=this.dbService.units}return _createClass(e,[{key:"ngOnInit",value:function(){null==this.id||null==this.id||this.getobject(this.id)}},{key:"ngOnChanges",value:function(){null==this.id||null==this.id||this.getobject(this.id)}},{key:"getobject",value:function(e){var t=this;this.dbService.getDataWithQuery("product/findById",this.authService.current_user,"id="+this.id).subscribe((function(e){if(t.object=e.data,t.unit_selected=t.object.unit,t.pic_location=t.object.picture,null!=t.object.picture){var n=t.object.picture.split("/");t.object.picture=n.pop()}t.is_loading=!1,t.is_loaded=!0,t.error=!1}),(function(e){t.is_loading=!1,t.error=!0,t.is_loaded=!1}))}},{key:"categorySelected",value:function(e){this.category_selected=e,"other"!=this.category_selected&&(this.object.category=e)}},{key:"uploadFinished",value:function(e){this.pic_location=e,this.object.picture=e}},{key:"submit",value:function(){var e=this;this.notify.showLoading(),"other"!=this.unit_selected&&(this.object.unit=this.unit_selected);var t=new FormData;for(var n in this.object)t.append(n,this.object[n]);null!=this.id&&null!=this.id||t.append("createdAt",this.dbService.getToday()),t.append("display_name",this.authService.current_user.display_name),null!=this.object.notes&&null!=this.object.notes||t.append("notes",""),this.dbService.postData(t,"product/saveBranchDetails",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):"-1"===t.status?e.notify.showNotification("Server error. Please contact admin","fail",3e3):(null!=e.id&&null!=e.id||(e.object.id=t.status),e.notify.successNotification("Product saved successfully"),e.socket.sendEvent({company_id:e.authService.current_user.company_id,parent_company_id:e.authService.current_user.parent_company,message:"Product update received:  ".concat(e.object.name),product:e.object,event:"product_update"}),e.onFinish.emit(e.object),e.object=new i.a)}),(function(t){e.notify.noConnectionNotification()}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-product-form"]],inputs:{id:"id"},outputs:{onFinish:"onFinish"},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:1,vars:1,consts:[["ngNativeValidate","",3,"ngSubmit",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,""],[1,"row","bottom-margin"],[1,"col-md-4"],["required","","type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","text","name","cost_price",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","text","name","price",3,"ngModel","ngModelChange"],["name","unit",1,"",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["value","other"],["class","form-control","type","text","name","unit",3,"ngModel","ngModelChange",4,"ngIf"],[3,"selected","onFinish"],["class","form-control","required","","type","text","name","category",3,"ngModel","ngModelChange",4,"ngIf"],["class","col-md-4",4,"ngIf"],["value","1","required","","type","text","name","min_stock",1,"form-control",3,"ngModel","ngModelChange"],["value","10","required","","type","text","name","max_stock",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","date","name","expiry",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","shelf",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","barcode",1,"form-control",3,"ngModel","ngModelChange"],["name","notes","rows","3","cols","40",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","name","submit","value","Submit",1,"btn","btn-success"],["type","reset","name","reset","value","Reset",1,"btn","btn-warning"],[3,"value"],["type","text","name","unit",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","text","name","category",1,"form-control",3,"ngModel","ngModelChange"],["value","0","required","","type","text","name","stock",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&r["\u0275\u0275template"](0,g,73,15,"form",0),2&e&&r["\u0275\u0275property"]("ngIf",t.can_edit)},directives:[l.j,d.e,d.f,d.a,d.k,d.d,d.g,d.l,l.i,d.h,d.m,u.a],styles:[""]}),e}()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"i",0),r["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},jr2M:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("fXoL"),i=n("c92J"),o=n("1VJT"),a=n("ccyI"),s=n("ofXK"),c=n("3Pt+");function l(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",4),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("",n," ")}}function d(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275elementStart"](1,"select",1),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().selected=e}))("change",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().item_selected()})),r["\u0275\u0275template"](2,l,2,2,"option",2),r["\u0275\u0275elementStart"](3,"option",3),r["\u0275\u0275text"](4,"Other"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngModel",i.selected),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",i.objects)}}var u=function(){var e=function(){function e(t,n,i){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.authService=i,this.objects=[],this.is_loading=!1,this.error=!1,this.is_loaded=!1,this.onFinish=new r.EventEmitter,this.selected=null}return _createClass(e,[{key:"ngOnInit",value:function(){this.start()}},{key:"start",value:function(){var e=this;this.is_loaded=!1,this.is_loading=!0,this.dbService.getData("product/getCategories",this.authService.current_user).subscribe((function(t){"-1"===t.status&&(e.notify.failNotification(t.message),e.error=!0),"-9"===t.status?(e.notify.failNotification(t.message),e.error=!0):(e.objects=t.data,e.is_loaded=!0,e.error=!1),e.is_loading=!1}),(function(t){e.notify.noConnectionNotification()}))}},{key:"item_selected",value:function(){this.onFinish.emit(this.selected)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-product-category"]],inputs:{selected:"selected"},outputs:{onFinish:"onFinish"},decls:1,vars:1,consts:[[4,"ngIf"],["name","selected",1,"",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["value","other"],[3,"value"]],template:function(e,t){1&e&&r["\u0275\u0275template"](0,d,5,2,"span",0),2&e&&r["\u0275\u0275property"]("ngIf",t.is_loaded)},directives:[s.j,c.l,c.d,c.g,s.i,c.h,c.m],styles:[""]}),e}()},mS1k:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},"n+He":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ofXK"),i=n("nEHF"),o=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,i.a]]}),e}()},sGMU:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e),this.status="Pending"}},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ofXK"),i=n("nEHF"),o=n("6QD7"),a=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,i.a,o.b],o.b]}),e}()}}]);