function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4j6H":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n("fXoL"),s=n("c92J"),i=n("1VJT"),a=n("BbYg"),o=n("ccyI"),l=n("ofXK"),c=n("/9/o"),d=n("3Pt+"),h=n("hiAm");function u(e,t){1&e&&r["\u0275\u0275element"](0,"app-loading")}function m(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"h4"),r["\u0275\u0275text"](2,"Not found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",22),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",n.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function f(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"label"),r["\u0275\u0275text"](2,"Select Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"select",20),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).select_product=e}))("change",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).productSelected()})),r["\u0275\u0275template"](4,p,2,2,"option",21),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var s=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",s.select_product),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",s.objects)}}function _(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",16),r["\u0275\u0275elementStart"](1,"div",17),r["\u0275\u0275elementStart"](2,"button",18),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().addProduct()})),r["\u0275\u0275text"](3,"Add Product"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,u,1,0,"app-loading",19),r["\u0275\u0275template"](5,m,3,0,"div",19),r["\u0275\u0275template"](6,f,5,2,"div",19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var s=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngIf",s.is_searching),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",s.error_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",s.is_finished_search)}}function g(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"b"),r["\u0275\u0275text"](2,"Not found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("[stock: ",n.stock,"] ")}}function y(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" [shelf: ",n.shelf,"]")}}function x(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"span"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" [expiry: ",n.expiry,"] ")}}var b=function(e){return{"select-product-active":e}};function S(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"li",30),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](n);var e=t.$implicit;return r["\u0275\u0275nextContext"](3).add(e)})),r["\u0275\u0275text"](1),r["\u0275\u0275element"](2,"br"),r["\u0275\u0275text"](3),r["\u0275\u0275template"](4,v,2,1,"span",19),r["\u0275\u0275template"](5,y,2,1,"span",19),r["\u0275\u0275template"](6,x,2,1,"span",19),r["\u0275\u0275elementEnd"]()}if(2&e){var s=t.$implicit,i=t.index,a=r["\u0275\u0275nextContext"](3);r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](7,b,i==a.arrowkeyLocation)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",s.name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate2"](" [price: ",s.price,"/",s.unit,"] "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",a.show_stock),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",a.show_shelf),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",a.show_expiry)}}function w(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",27),r["\u0275\u0275elementStart"](1,"ul",28),r["\u0275\u0275template"](2,S,7,9,"li",29),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",n.objects)}}function k(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275text"](1," No item found. "),r["\u0275\u0275elementStart"](2,"button",31),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).addProduct()})),r["\u0275\u0275element"](3,"i",32),r["\u0275\u0275text"](4," click here"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](5," to add new product "),r["\u0275\u0275elementEnd"]()}}function E(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",23),r["\u0275\u0275elementStart"](1,"input",24),r["\u0275\u0275listener"]("keyup",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().keyUp(e)}))("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().param=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](2,"i",25),r["\u0275\u0275template"](3,g,3,0,"div",19),r["\u0275\u0275template"](4,w,3,1,"div",26),r["\u0275\u0275template"](5,k,6,0,"div",19),r["\u0275\u0275elementEnd"]()}if(2&e){var s=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngModel",s.param),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",s.error_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",s.objects.length>0&&s.is_finished_search),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",s.objects.length<1&&s.is_finished_search&&s.allow_add)}}var C=function(){var e=function(){function e(t,n,s,i){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.localforage=s,this.authService=i,this.onFinish=new r.EventEmitter,this.btn_text="Select",this.onAdd=new r.EventEmitter,this.type="search",this.allow_add=!0,this.show="no",this.param="",this.objects=[],this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.added=[],this.filter_param="",this.filter_results=[],this.local_products=[],this.show_shelf=!0,this.show_expiry=!0,this.show_stock=!0,this.arrowkeyLocation=0,this.num_items=10,$(".search_results").on("click",(function(){$("#sales_search").focus()}))}return _createClass(e,[{key:"ngOnInit",value:function(){"list"!=this.type&&"select"!=this.type||this.list();var e=localStorage.getItem("show_select_product_expiry");this.show_expiry=null==e||"yes"==e;var t=localStorage.getItem("show_select_product_stock");this.show_stock=null==t||"yes"==t;var n=localStorage.getItem("show_select_product_shelf");this.show_shelf=null==n||"yes"==n}},{key:"hideSearchResults",value:function(){this.param="",this.objects.length=0,this.is_finished_search=!1}},{key:"ngOnChanges",value:function(){$("#sales_search").focus()}},{key:"productSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.select_product){this.onAdd.emit(this.objects[e]);break}}},{key:"addProduct",value:function(){$("#add_product_modal").modal("show")}},{key:"productAdded",value:function(e){e.price=parseFloat(e.price),this.objects.push(e),this.onAdd.emit(e),this.hideSearchResults(),$("#add_product_modal").modal("hide")}},{key:"list",value:function(){var e=this;this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getData("product/getList",this.authService.current_user).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.filter_results="yes"==e.show?e.objects:[],e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"filterlist",value:function(){var e=this.filter_param;this.filter_results=null==e||null==e||e.length<1?"yes"==this.show?this.objects:[]:this.objects.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"add",value:function(e){this.onAdd.emit(e),this.is_finished_search=!1,$("#sales_search").focus(),this.param="",this.objects=[],this.arrowkeyLocation=0}},{key:"search",value:function(){var e=this;if(""==this.param.trim()||null==this.param||null==this.param)return this.objects=[],void(this.is_finished_search=!1);this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getDataWithQuery("product/search",this.authService.current_user,"param="+this.param+"&limit="+this.num_items).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1,e.selected=null)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"localSearch",value:function(){var e=this;this.is_searching=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){if(e.local_products=t,e.is_finished_search=!1,e.error_search=!1,e.param.length<1)return e.objects=[],e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;if(null==e.local_products)return e.objects=[],e.notify.failNotification("No Products! Please refresh the page"),e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;var n=e.param.toLowerCase().trim(),r=n.split(" "),s=e.local_products.filter((function(e){for(var t=0;t<r.length;t++)if(-1==e.name.toLowerCase().indexOf(r[t])&&e.barcode!=r[t])return!1;return!0}));s.sort((function(e,t){var r=e.name.toLowerCase(),s=t.name.toLowerCase();return r.indexOf(n)<s.indexOf(n)?-1:r>s?1:0})),e.objects=s.slice(0,s.length>e.num_items?e.num_items-1:s.length),e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1}),(function(t){e.notify.failNotification("Failed to get products. Please refresh the page")}))}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"highlightObject",value:function(e){this.objects.map((function(e){e.selected=!1})),this.highlightedObject=e,e.selected=!0}},{key:"keyUp",value:function(e){switch(e.keyCode){case 38:0==this.arrowkeyLocation||this.arrowkeyLocation--,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 40:this.arrowkeyLocation==this.objects.length-1||this.arrowkeyLocation++,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 13:var t=this.objects[this.arrowkeyLocation];null!=t&&null!=t&&this.add(t);break;case 27:this.hideSearchResults();break;default:this.arrowkeyLocation=0,"offline"==this.dbService.ENVIRONMENT?this.search():this.localSearch()}}},{key:"focusCursor",value:function(){var e=$("#sales_search").val();$("#sales_search").val("").val(e)}},{key:"setShowStock",value:function(e){e.target.checked?(console.log("true"),this.show_stock=!0,localStorage.setItem("show_select_product_stock","yes")):(this.show_stock=!1,localStorage.setItem("show_select_product_stock","no"))}},{key:"showSettings",value:function(){$("#select_product_settings_modal").modal("show")}},{key:"showAdd",value:function(){$("#add_product_modal").modal("show")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](a.LocalForageService),r["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-product"]],inputs:{btn_text:"btn_text",type:"type",allow_add:"allow_add",show:"show",timestamp:"timestamp"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:56,vars:6,consts:[["class","",4,"ngIf"],["class","focus_search",4,"ngIf"],["id","add_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[3,"onFinish"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],["id","select_product_settings_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"form-group"],[3,"ngModel","change","ngModelChange"],["type","checkbox",3,"ngModel","change","ngModelChange"],["type","checkbox",3,"ngModel","ngModelChange"],["data-dismiss","modal",1,"btn","btn-success"],[1,""],[1,"body"],[1,"btn","btn-inverse","btn-sm",3,"click"],[4,"ngIf"],["name","products",1,"product",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"focus_search"],["autofocus","","autocomplete","off","placeholder","Enter product names or barcode","required","","type","text","id","sales_search","name","search",3,"ngModel","keyup","ngModelChange"],["title","Settings","data-toggle","modal","data-target","#select_product_settings_modal",1,"fa","fa-cog",2,"position","relative","left","-24px","top","2px","color","gray"],["class","search_results ","id","search_results_list",4,"ngIf"],["id","search_results_list",1,"search_results"],[1,"list-group"],["tabindex","-1","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],["tabindex","-1",1,"list-group-item",3,"ngClass","click"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-plus"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,_,7,3,"div",0),r["\u0275\u0275template"](1,E,6,4,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"div",5),r["\u0275\u0275elementStart"](6,"h5"),r["\u0275\u0275text"](7,"Add New Product "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"div",6),r["\u0275\u0275elementStart"](9,"app-product-form",7),r["\u0275\u0275listener"]("onFinish",(function(e){return t.productAdded(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",8),r["\u0275\u0275elementStart"](11,"button",9),r["\u0275\u0275text"](12,"Cancel"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",10),r["\u0275\u0275elementStart"](14,"div",3),r["\u0275\u0275elementStart"](15,"div",4),r["\u0275\u0275elementStart"](16,"div",5),r["\u0275\u0275elementStart"](17,"h5"),r["\u0275\u0275text"](18,"Settings for Product Select"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"div",6),r["\u0275\u0275elementStart"](20,"div",11),r["\u0275\u0275elementStart"](21,"label"),r["\u0275\u0275text"](22,"Number of Items to Display"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](23,"br"),r["\u0275\u0275elementStart"](24,"select",12),r["\u0275\u0275listener"]("change",(function(e){return t.keyUp(e)}))("ngModelChange",(function(e){return t.num_items=e})),r["\u0275\u0275elementStart"](25,"option"),r["\u0275\u0275text"](26,"10"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](27,"option"),r["\u0275\u0275text"](28,"25"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](29,"option"),r["\u0275\u0275text"](30,"50"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"option"),r["\u0275\u0275text"](32,"100"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](33,"option"),r["\u0275\u0275text"](34,"250"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](35,"div",11),r["\u0275\u0275elementStart"](36,"label"),r["\u0275\u0275text"](37,"Extra Info to display for each"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](38,"br"),r["\u0275\u0275elementStart"](39,"label"),r["\u0275\u0275elementStart"](40,"input",13),r["\u0275\u0275listener"]("change",(function(e){return t.setShowStock(e)}))("ngModelChange",(function(e){return t.show_stock=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](41," Stock"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](42," \xa0 "),r["\u0275\u0275element"](43,"br"),r["\u0275\u0275elementStart"](44,"label"),r["\u0275\u0275elementStart"](45,"input",14),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.show_expiry=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](46," Expiry"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](47," \xa0 "),r["\u0275\u0275element"](48,"br"),r["\u0275\u0275elementStart"](49,"label"),r["\u0275\u0275elementStart"](50,"input",14),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.show_shelf=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](51," Shelf"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](52," \xa0 "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](53,"div",8),r["\u0275\u0275elementStart"](54,"button",15),r["\u0275\u0275text"](55,"OK"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("ngIf","select"==t.type),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","search"==t.type),r["\u0275\u0275advance"](23),r["\u0275\u0275property"]("ngModel",t.num_items),r["\u0275\u0275advance"](16),r["\u0275\u0275property"]("ngModel",t.show_stock),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",t.show_expiry),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",t.show_shelf))},directives:[l.j,c.a,d.m,d.e,d.h,d.i,d.n,d.a,h.a,l.i,d.b,d.l,l.h],styles:[".link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline}"]}),e}()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("fXoL"),s=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"i",0),r["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()}}]);