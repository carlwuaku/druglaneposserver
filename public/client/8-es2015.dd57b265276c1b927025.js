(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4j6H":function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var i=n("fXoL"),r=n("c92J"),s=n("1VJT"),o=n("BbYg"),c=n("ccyI"),a=n("ofXK"),l=n("hiAm"),d=n("3Pt+"),h=n("tyNb");function u(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function p(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",9),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",e.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function m(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"label"),i["\u0275\u0275text"](2,"Select Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"select",7),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).select_product=t}))("change",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).productSelected()})),i["\u0275\u0275template"](4,f,2,2,"option",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngModel",e.select_product),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.objects)}}function g(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",3),i["\u0275\u0275elementStart"](1,"div",4),i["\u0275\u0275elementStart"](2,"button",5),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().addProduct()})),i["\u0275\u0275text"](3,"Add Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](4,u,1,0,"app-loading",6),i["\u0275\u0275template"](5,p,3,0,"div",6),i["\u0275\u0275template"](6,m,5,2,"div",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",e.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.is_finished_search)}}function _(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",17),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).add(n)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate3"]("",e.name," [price: ",e.price,"/",e.unit,"]")}}function b(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275elementStart"](2,"input",15),i["\u0275\u0275listener"]("keyup",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).filterlist()}))("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).filter_param=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](3,y,3,3,"a",16),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngModel",e.filter_param),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.filter_results)}}function x(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",10),i["\u0275\u0275elementStart"](1,"div",11),i["\u0275\u0275elementStart"](2,"button",5),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().addProduct()})),i["\u0275\u0275text"](3,"Add Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](4,_,1,0,"app-loading",6),i["\u0275\u0275template"](5,v,3,0,"div",6),i["\u0275\u0275template"](6,b,4,2,"div",12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",e.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.is_finished_search)}}function S(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}const w=function(e){return{"select-product-active":e}};function C(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"li",23),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).add(n)})),i["\u0275\u0275text"](1),i["\u0275\u0275element"](2,"br"),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=i["\u0275\u0275nextContext"](3);i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](5,w,n==r.arrowkeyLocation)),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.name," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate3"](" [price: ",e.price,"/",e.unit,"] [stock: ",e.stock,"] ")}}function I(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",21),i["\u0275\u0275elementStart"](1,"ul",13),i["\u0275\u0275template"](2,C,4,7,"li",22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",e.objects)}}function j(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275text"](1," Item not found. Check the spelling. Or "),i["\u0275\u0275elementStart"](2,"a",24),i["\u0275\u0275element"](3,"i",25),i["\u0275\u0275text"](4," click here to add a new product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",18),i["\u0275\u0275elementStart"](1,"input",19),i["\u0275\u0275listener"]("keyup",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().keyUp(t)}))("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().param=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](2,S,3,0,"div",6),i["\u0275\u0275template"](3,I,3,1,"div",20),i["\u0275\u0275template"](4,j,5,0,"div",6),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.param),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.objects.length>0&&e.is_finished_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.objects.length<1&&e.is_finished_search)}}let k=(()=>{class e{constructor(e,t,n,r){this.dbService=e,this.notify=t,this.localforage=n,this.authService=r,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="search",this.show="no",this.param="",this.objects=[],this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.added=[],this.filter_param="",this.filter_results=[],this.local_products=[],this.arrowkeyLocation=0,$(".search_results").on("click",(function(){$("#sales_search").focus()}))}ngOnInit(){"list"!=this.type&&"select"!=this.type||this.list()}hideSearchResults(){this.param="",this.objects.length=0,this.is_finished_search=!1}ngOnChanges(){console.log(this.timestamp),$("#sales_search").focus()}productSelected(){for(let e=0;e<this.objects.length;e++)if(this.objects[e].id==this.select_product){this.onAdd.emit(this.objects[e]);break}}addProduct(){$("#add_product_modal").modal("show")}productAdded(e){console.log(e),e.price=parseFloat(e.price),this.objects.push(e),this.onAdd.emit(e),$("#add_product_modal").modal("hide")}list(){this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getData("product/getList",this.authService.current_user).subscribe(e=>{"-1"===e.status?(this.is_searching=!1,this.is_finished_search=!1,this.error_search=!0):(this.objects=e.data,this.filter_results="yes"==this.show?this.objects:[],this.is_searching=!1,this.is_finished_search=!0,this.error_search=!1)},e=>{this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1})}filterlist(){let e=this.filter_param;this.filter_results=null==e||null==e||e.length<1?"yes"==this.show?this.objects:[]:this.objects.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}add(e){this.onAdd.emit(e),console.log(e),this.is_finished_search=!1,$("#sales_search").focus(),this.param="",this.objects=[],this.arrowkeyLocation=0}search(){if(""==this.param.trim()||null==this.param||null==this.param)return this.objects=[],void(this.is_finished_search=!1);this.is_searching=!0,this.is_finished_search=!1,this.error_search=!1,this.dbService.getDataWithQuery("product/search",this.authService.current_user,"param="+this.param+"&limit=10").subscribe(e=>{"-1"===e.status?(this.is_searching=!1,this.is_finished_search=!1,this.error_search=!0):(this.objects=e.data,this.is_searching=!1,this.is_finished_search=!0,this.error_search=!1,this.selected=null)},e=>{this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1})}localSearch(){this.is_searching=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe(e=>{if(this.local_products=e,this.is_finished_search=!1,this.error_search=!1,this.param.length<1)return this.objects=[],this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,!1;if(null==this.local_products)return this.objects=[],this.notify.failNotification("No Products! Please refresh the page"),this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,!1;var t=this.param.toLowerCase().trim();console.log(this.param);let n=t.split(" ");var i=this.local_products.filter((function(e){for(let t=0;t<n.length;t++)if(-1==e.name.toLowerCase().indexOf(n[t])&&e.barcode!=n[t])return!1;return!0}));i.sort((function(e,n){let i=e.name.toLowerCase(),r=n.name.toLowerCase();return i.indexOf(t)<r.indexOf(t)?-1:i>r?1:0})),this.objects=i.slice(0,i.length>10?9:i.length),this.is_searching=!1,this.is_finished_search=!0,this.error_search=!1},e=>{this.notify.failNotification("Failed to get products. Please refresh the page")})}select(e){this.selected=e,this.onFinish.emit(e)}highlightObject(e){this.objects.map(e=>{e.selected=!1}),this.highlightedObject=e,e.selected=!0}keyUp(e){switch(e.keyCode){case 38:0==this.arrowkeyLocation||this.arrowkeyLocation--,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 40:this.arrowkeyLocation==this.objects.length-1||this.arrowkeyLocation++,$(".search_results").scrollTop(0),$(".search_results").scrollTop($(".select-product-active:first").offset().top-$(".search_results").height()+10),console.log($(".select-product-active:first").offset().top-$(".search_results").height()),this.focusCursor();break;case 13:let e=this.objects[this.arrowkeyLocation];null!=e&&null!=e&&this.add(e);break;case 27:this.hideSearchResults();break;default:this.arrowkeyLocation=0,"offline"==this.dbService.ENVIRONMENT?this.search():this.localSearch()}}focusCursor(){let e=$("#sales_search").val();$("#sales_search").val("").val(e)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](o.LocalForageService),i["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-product"]],inputs:{btn_text:"btn_text",type:"type",show:"show",timestamp:"timestamp"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:3,vars:3,consts:[["class","",4,"ngIf"],["class","card z-depth-bottom-1",4,"ngIf"],["class","focus_search",4,"ngIf"],[1,""],[1,"body"],[1,"btn","btn-inverse","btn-sm",3,"click"],[4,"ngIf"],["name","products",1,"product",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"card","z-depth-bottom-1"],[1,"card-body"],["class","list-group",4,"ngIf"],[1,"list-group"],[1,"list-group-item"],["placeholder","Search...","type","text","name","filter_param",1,"form-control",3,"ngModel","keyup","ngModelChange"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"focus_search"],["autofocus","","autocomplete","off","placeholder","Enter product names or barcode","required","","type","text","id","sales_search","name","search",3,"ngModel","keyup","ngModelChange"],["class","search_results ","id","search_results_list",4,"ngIf"],["id","search_results_list",1,"search_results"],["tabindex","-1","class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],["tabindex","-1",1,"list-group-item",3,"ngClass","click"],["routerLink","/add_product"],[1,"feather","icon-plus"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,g,7,3,"div",0),i["\u0275\u0275template"](1,x,7,3,"div",1),i["\u0275\u0275template"](2,E,5,4,"div",2)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","search"==t.type))},directives:[a.j,l.a,d.m,d.e,d.h,a.i,d.i,d.n,d.b,d.l,a.h,h.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline}"]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},iCyY:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewProductHistoryModule",(function(){return v}));var i=n("ofXK"),r=n("tyNb"),s=n("fXoL"),o=n("1VJT"),c=n("c92J"),a=n("ccyI"),l=n("4j6H"),d=n("thd7");function h(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275text"](1," Type the name of the item and select it. "),s["\u0275\u0275element"](2,"br"),s["\u0275\u0275elementStart"](3,"app-select-product",6),s["\u0275\u0275listener"]("onAdd",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().productSelected(t)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("type","search"))}function u(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"h5"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.object.name," ")}}function p(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",7),s["\u0275\u0275elementStart"](1,"div",8),s["\u0275\u0275template"](2,u,2,1,"h5",4),s["\u0275\u0275elementStart"](3,"button",9),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().cancel()})),s["\u0275\u0275text"](4,"Cancel"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",10),s["\u0275\u0275element"](6,"app-product-history",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",null!=e.object&&null!=e.object),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("id",e.id)}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r){this.notify=e,this.dbService=t,this.router=i,this.authService=r,this.stock_changes=[],this.can_master_edit=!0,this.can_edit=!0,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.id=n.snapshot.params.id,-1==this.authService.current_user.permissions.indexOf("View Inventory")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.dbService.setTitle(" Product History")}ngOnInit(){null!=this.id&&this.getobject()}getobject(){this.dbService.getDataWithQuery("product/findById",this.authService.current_user,"id="+this.id).subscribe(e=>{this.object=e.data,this.is_loading=!1,this.is_loaded=!0,this.error=!1},e=>{this.is_loading=!1,this.error=!0,this.is_loaded=!1})}goBack(){window.history.back()}productSelected(e){this.router.navigate(["/product_history/"+e.id])}cancel(){this.router.navigate(["/product_history"])}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](r.d),s["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-view-product-history"]],decls:8,vars:2,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngIf"],["class","card",4,"ngIf"],[3,"type","onAdd"],[1,"card"],[1,"card-header"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"card-body"],[3,"id"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"section",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275elementStart"](4,"h5"),s["\u0275\u0275text"](5,"Product History"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,h,4,1,"div",4),s["\u0275\u0275template"](7,p,7,2,"div",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("ngIf",null==t.id),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null!=t.id&&null!=t.id))},directives:[i.j,l.a,d.a],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(f)],r.f]}),e})();var g=n("nEHF"),_=n("nBlB");let v=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,m,g.a,_.a]]}),e})()},mS1k:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{constructor(){}}},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ofXK"),r=n("nEHF"),s=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a]]}),e})()}}]);