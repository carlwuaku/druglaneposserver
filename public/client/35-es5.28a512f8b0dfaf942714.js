function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2Xhf":function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var s=n("fXoL"),i=n("c92J"),r=n("1VJT"),a=n("BbYg"),c=n("ccyI"),o=n("ofXK"),l=n("3Pt+");function h(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"b"),s["\u0275\u0275text"](2,"Not found"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}var d=function(e){return{"select-product-active":e}};function u(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"li",8),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"](3).add(e)})),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,r=t.index,a=s["\u0275\u0275nextContext"](3);s["\u0275\u0275property"]("ngClass",s["\u0275\u0275pureFunction1"](2,d,r==a.arrowkeyLocation)),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",i.name,"")}}function f(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",5),s["\u0275\u0275elementStart"](1,"ul",6),s["\u0275\u0275template"](2,u,2,4,"li",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",n.objects)}}function p(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275text"](1," Item not found. Check the spelling. "),s["\u0275\u0275elementEnd"]())}function m(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",1),s["\u0275\u0275elementStart"](1,"input",2),s["\u0275\u0275listener"]("keyup",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().keyUp(e)}))("ngModelChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().param=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,h,3,0,"div",3),s["\u0275\u0275template"](3,f,3,1,"div",4),s["\u0275\u0275template"](4,p,2,0,"div",3),s["\u0275\u0275elementEnd"]()}if(2&e){var i=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngModel",i.param),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",i.error_search),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",i.objects.length>0&&i.is_finished_search),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",i.objects.length<1&&i.is_finished_search)}}var _=function(){var e=function(){function e(t,n,i,r){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.localforage=i,this.authService=r,this.onFinish=new s.EventEmitter,this.btn_text="Select",this.onAdd=new s.EventEmitter,this.type="search",this.show="no",this.param="",this.objects=[],this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.added=[],this.filter_param="",this.filter_results=[],this.local_products=[],this.show_shelf=!0,this.show_expiry=!0,this.show_stock=!0,this.arrowkeyLocation=0,this.num_items=10,$(".search_results").on("click",(function(){$("#sales_search").focus()}))}return _createClass(e,[{key:"ngOnInit",value:function(){"list"!=this.type&&"select"!=this.type||this.list();var e=localStorage.getItem("show_select_product_expiry");this.show_expiry=null==e||"yes"==e;var t=localStorage.getItem("show_select_product_stock");this.show_stock=null==t||"yes"==t;var n=localStorage.getItem("show_select_product_shelf");this.show_shelf=null==n||"yes"==n}},{key:"hideSearchResults",value:function(){this.param="",this.objects.length=0,this.is_finished_search=!1}},{key:"ngOnChanges",value:function(){$("#sales_search").focus()}},{key:"productSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.select_product){this.onAdd.emit(this.objects[e]);break}}},{key:"addProduct",value:function(){$("#add_product_modal").modal("show")}},{key:"productAdded",value:function(e){e.price=parseFloat(e.price),this.objects.push(e),this.onAdd.emit(e),$("#add_product_modal").modal("hide")}},{key:"list",value:function(){var e=this;this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getData("product/getList",this.authService.current_user).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.filter_results="yes"==e.show?e.objects:[],e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"filterlist",value:function(){var e=this.filter_param;this.filter_results=null==e||null==e||e.length<1?"yes"==this.show?this.objects:[]:this.objects.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"add",value:function(e){this.onAdd.emit(e),this.is_finished_search=!1,$("#sales_search").focus(),this.param="",this.objects=[],this.arrowkeyLocation=0}},{key:"search",value:function(){var e=this;if(""==this.param.trim()||null==this.param||null==this.param)return this.objects=[],void(this.is_finished_search=!1);this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getDataWithQuery("product/searchActiveIngredients",this.authService.current_user,"param="+this.param+"&limit="+this.num_items).subscribe((function(t){"-1"===t.status?(e.is_searching=!1,e.is_finished_search=!1,e.error_search=!0):(e.objects=t.data,e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1,e.selected=null)}),(function(t){e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1}))}},{key:"localSearch",value:function(){var e=this;this.is_searching=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){if(e.local_products=t,e.is_finished_search=!1,e.error_search=!1,e.param.length<1)return e.objects=[],e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;if(null==e.local_products)return e.objects=[],e.notify.failNotification("No Products! Please refresh the page"),e.is_searching=!1,e.is_finished_search=!1,e.error_search=!1,!1;var n=e.param.toLowerCase().trim(),s=n.split(" "),i=e.local_products.filter((function(e){for(var t=0;t<s.length;t++)if(-1==e.name.toLowerCase().indexOf(s[t])&&e.barcode!=s[t])return!1;return!0}));i.sort((function(e,t){var s=e.name.toLowerCase(),i=t.name.toLowerCase();return s.indexOf(n)<i.indexOf(n)?-1:s>i?1:0})),e.objects=i.slice(0,i.length>e.num_items?e.num_items-1:i.length),e.is_searching=!1,e.is_finished_search=!0,e.error_search=!1}),(function(t){e.notify.failNotification("Failed to get products. Please refresh the page")}))}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"highlightObject",value:function(e){this.objects.map((function(e){e.selected=!1})),this.highlightedObject=e,e.selected=!0}},{key:"keyUp",value:function(e){switch(e.keyCode){case 38:0==this.arrowkeyLocation||this.arrowkeyLocation--,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 40:this.arrowkeyLocation==this.objects.length-1||this.arrowkeyLocation++,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 13:var t=this.objects[this.arrowkeyLocation];null!=t&&null!=t&&this.add(t);break;case 27:this.hideSearchResults();break;default:this.arrowkeyLocation=0,this.search()}}},{key:"focusCursor",value:function(){var e=$("#sales_search").val();$("#sales_search").val("").val(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](i.a),s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](a.LocalForageService),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-active-ingredient"]],inputs:{btn_text:"btn_text",type:"type",show:"show",timestamp:"timestamp"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},features:[s["\u0275\u0275NgOnChangesFeature"]],decls:1,vars:1,consts:[["class","focus_search",4,"ngIf"],[1,"focus_search"],["autofocus","","autocomplete","off","placeholder","Enter active ingredient","required","","type","text","id","sales_search","name","search",3,"ngModel","keyup","ngModelChange"],[4,"ngIf"],["class","search_results ","id","search_results_list",4,"ngIf"],["id","search_results_list",1,"search_results"],[1,"list-group"],["tabindex","-1","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],["tabindex","-1",1,"list-group-item",3,"ngClass","click"]],template:function(e,t){1&e&&s["\u0275\u0275template"](0,m,5,4,"div",0),2&e&&s["\u0275\u0275property"]("ngIf","search"==t.type)},directives:[o.j,l.b,l.l,l.e,l.h,o.i,o.h],styles:[""]}),e}()},RW1p:function(e,t,n){"use strict";n.r(t),n.d(t,"DrugInfoModule",(function(){return g}));var s=n("ofXK"),i=n("tyNb"),r=n("fXoL"),a=n("1VJT"),c=n("c92J"),o=n("2Xhf");function l(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"em",7),r["\u0275\u0275text"](1,"No selection made"),r["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",8),r["\u0275\u0275elementStart"](1,"div",9),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"div",10),r["\u0275\u0275elementStart"](4,"b"),r["\u0275\u0275text"](5,"Indications:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](6,"br"),r["\u0275\u0275text"](7),r["\u0275\u0275element"](8,"hr"),r["\u0275\u0275elementStart"](9,"b"),r["\u0275\u0275text"](10,"Contraindications:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](11,"br"),r["\u0275\u0275text"](12),r["\u0275\u0275element"](13,"hr"),r["\u0275\u0275elementStart"](14,"b"),r["\u0275\u0275text"](15,"Warnings & Cautions:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](16,"br"),r["\u0275\u0275text"](17),r["\u0275\u0275element"](18,"hr"),r["\u0275\u0275elementStart"](19,"b"),r["\u0275\u0275text"](20,"Pregnancy & Breastfeeding:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](21,"br"),r["\u0275\u0275text"](22),r["\u0275\u0275element"](23,"hr"),r["\u0275\u0275elementStart"](24,"b"),r["\u0275\u0275text"](25,"Dosage & Administrations:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](26,"br"),r["\u0275\u0275text"](27),r["\u0275\u0275element"](28,"hr"),r["\u0275\u0275elementStart"](29,"b"),r["\u0275\u0275text"](30,"Information for patients:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](31,"br"),r["\u0275\u0275text"](32),r["\u0275\u0275element"](33,"hr"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",n.selected.name," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",n.selected.indications_and_usage," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",n.selected.Contraindications," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",n.selected.warnings_and_cautions," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",n.selected.pregnancy," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",n.selected.dosage_and_administration," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",n.selected.information_for_patients," ")}}var d,u,f,p=[{path:"",component:(d=function(){function e(t,n){_classCallCheck(this,e),this.notify=t,this.dbService=n,this.selected=null,this.dbService.setTitle("Drug Information")}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"goBack",value:function(){window.history.back()}},{key:"activeIngredientSelected",value:function(e){this.selected=e,console.log(e)}}]),e}(),d.\u0275fac=function(e){return new(e||d)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.a))},d.\u0275cmp=r["\u0275\u0275defineComponent"]({type:d,selectors:[["app-drug-info"]],decls:11,vars:3,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[3,"type","onAdd"],["class","text-muted",4,"ngIf"],["class","card",4,"ngIf"],[1,"text-muted"],[1,"card"],[1,"card-header"],[1,"card-body"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h5"),r["\u0275\u0275text"](5,"Drug Information"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](6," Type the name of the active ingredient and click or press enter to select it. "),r["\u0275\u0275element"](7,"br"),r["\u0275\u0275elementStart"](8,"app-select-active-ingredient",4),r["\u0275\u0275listener"]("onAdd",(function(e){return t.activeIngredientSelected(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](9,l,2,0,"em",5),r["\u0275\u0275template"](10,h,34,7,"div",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("type","search"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==t.selected),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null!=t.selected))},directives:[o.a,s.j],styles:[""]}),d)}],m=((u=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||u)},imports:[[i.f.forChild(p)],i.f]}),u),_=n("nEHF"),v=n("nBlB"),g=((f=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[s.b,m,_.a,v.a]]}),f)},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n("ofXK"),i=n("nEHF"),r=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.b,i.a]]}),e}()}}]);