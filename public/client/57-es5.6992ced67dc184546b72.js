function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{dtn8:function(e,t,n){"use strict";n.r(t),n.d(t,"AddPurchaseModule",(function(){return O}));var i=n("ofXK"),a=n("nEHF"),l=n("wDHj"),r=n("tyNb"),d=n("fXoL"),o=n("sGMU"),s=n("mS1k"),m=n("n+He"),c=n("5G6A"),u=n("c92J"),p=n("1VJT"),h=n("bgkY"),f=n("ccyI"),v=n("4j6H"),g=n("3Pt+"),_=n("tW9x"),y=n("TFay");function S(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"td"),d["\u0275\u0275text"](10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"td"),d["\u0275\u0275text"](12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"td"),d["\u0275\u0275text"](14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"td"),d["\u0275\u0275text"](16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"td"),d["\u0275\u0275elementStart"](18,"button",56),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().editItem(e)})),d["\u0275\u0275element"](19,"i",57),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"button",58),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().removeItem(e)})),d["\u0275\u0275element"](21,"i",59),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.product_name),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",i.stock," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",i.quantity," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.unit),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",i.price," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"]((i.price*i.quantity).toFixed(2)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",i.markup," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",i.selling_price," ")}}function E(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"h5"),d["\u0275\u0275text"](1),d["\u0275\u0275element"](2,"br"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.new_item.name,"")}}function b(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"option",60),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275propertyInterpolate"]("value",n),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n)}}function x(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"input",61),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().new_unit=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var i=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("ngModel",i.new_unit)}}function k(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,"No held items"),d["\u0275\u0275elementEnd"]())}var w=function(e){return{"table-primary":e}};function I(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr",66),d["\u0275\u0275listener"]("dblclick",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](2).unhold(e)}))("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](2).selectHeldItem(e)})),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,a=t.index,l=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](5,w,l.selectedHeldItem==i)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",a+1," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",i.user," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",i.time," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",i.items.length," ")}}function C(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",n.product_name," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",n.quantity," ")}}function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"table",12),d["\u0275\u0275elementStart"](1,"thead"),d["\u0275\u0275elementStart"](2,"tr"),d["\u0275\u0275elementStart"](3,"th"),d["\u0275\u0275text"](4,"Item"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"th"),d["\u0275\u0275text"](6,"Quantity"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tbody"),d["\u0275\u0275template"](8,C,5,2,"tr",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("ngForOf",n.selectedHeldItem.items)}}function q(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",2),d["\u0275\u0275elementStart"](1,"div",62),d["\u0275\u0275elementStart"](2,"table",12),d["\u0275\u0275elementStart"](3,"thead"),d["\u0275\u0275elementStart"](4,"tr"),d["\u0275\u0275elementStart"](5,"th"),d["\u0275\u0275text"](6,"#"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"th"),d["\u0275\u0275text"](8,"Saved by"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"th"),d["\u0275\u0275text"](10,"Date"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"th"),d["\u0275\u0275text"](12,"Num. Items"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"tbody"),d["\u0275\u0275template"](14,I,9,7,"tr",63),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"div",64),d["\u0275\u0275template"](16,M,9,1,"table",65),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](14),d["\u0275\u0275property"]("ngForOf",n.held_items),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",null!=n.selectedHeldItem)}}var F,P,N,T=[{path:"",component:(F=function(){function e(t,n,i,a){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.socket=i,this.authService=a,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.onFinish=new d.EventEmitter,this.url="purchase/findById",this.items=[],this.new_item=null,this.new_quantity=null,this.new_price=null,this.purchase_total=0,this.units=["ampoule","bottle","box","capsule","carton","glove","inhaler","pack","pessary","piece","roll","strip","suppository","syringe","tablet","tube","vial"],this.unit_selected="",this.general_markup=1.33,this.held_items=[],this.selectedHeldItem=null,null!=this.id&&null!=this.id||(this.purchase=new o.a,this.purchase.createdAt=this.dbService.getToday()),-1==this.authService.current_user.permissions.indexOf("Receive Purchases")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Receive Purchase"),this.units=this.dbService.units}return _createClass(e,[{key:"ngOnInit",value:function(){this.ts=this.dbService.getToday(),null!=localStorage.getItem("markup")&&(this.general_markup=parseFloat(localStorage.getItem("markup"))),null==this.id||null==this.id||this.getObject(this.id),this.held_items=JSON.parse(localStorage.getItem("purchase_heldItems")),null==this.held_items&&(this.held_items=[])}},{key:"getObject",value:function(e){var t=this;this.dbService.getDataWithQuery(this.url,this.authService.current_user,"id="+this.id).subscribe((function(e){t.purchase=e.data,t.is_loading=!1,t.is_loaded=!0,t.error=!1}),(function(e){t.is_loading=!1,t.error=!0,t.is_loaded=!1}))}},{key:"vendorSelected",value:function(e){this.purchase.vendor=e,console.log(e)}},{key:"trackBy",value:function(e,t){return t.product._id}},{key:"productSelected",value:function(e){this.inList(e)?this.notify.failNotification("Item already in the list"):(console.log(e),this.new_item=e,this.new_quantity="",this.new_expiry=e.expiry,this.new_price=e.cost_price,this.unit_selected=e.unit,this.new_unit=e.unit,this.new_stock=e.stock,this.new_markup=this.general_markup,$("#enter_purchase_quantity_modal").modal({backdrop:"static",keyboard:!1}),$("#enter_purchase_quantity_modal").on("shown.bs.modal",(function(){$("#qtt").focus()})))}},{key:"inList",value:function(e){for(var t=!1,n=0;n<this.items.length;n++)if(this.items[n].product_id==e.id){t=!0;break}return t}},{key:"editItem",value:function(e){this.new_item=e.product,this.items.splice(this.items.indexOf(e),1),this.new_item=e.product,this.new_quantity=e.quantity,this.new_price=e.price,this.new_expiry=e.expiry,this.new_markup=e.markup,this.new_selling_price=e.selling_price,$("#enter_purchase_quantity_modal").modal({backdrop:"static",keyboard:!1}),$("#enter_purchase_quantity_modal").on("shown.bs.modal",(function(){$("#qtt").focus()}))}},{key:"addItem",value:function(){if(this.inList(this.new_item))this.notify.failNotification("Item already in the list");else{var e=new m.a;e.product_name=this.new_item.name,e.product_id=this.new_item.id,e.markup=this.new_markup,e.price=this.new_price,e.quantity=this.new_quantity,e.total=this.new_quantity*this.new_price,e.selling_price=this.new_selling_price,e.expiry=this.new_expiry,e.product=this.new_item,e.stock=this.new_stock,e.unit="other"!=this.unit_selected?this.unit_selected:this.new_unit,this.items.push(e),this.new_item=new s.a,this.new_quantity=null,this.new_price=null,this.new_item=null,this.new_expiry="",this.new_markup=null,this.new_selling_price=null,this.new_unit=null,this.getTotal(),$("#enter_purchase_quantity_modal").modal("hide")}this.ts=this.dbService.getToday("timestamp_string")}},{key:"resetMarkup",value:function(){var e=this;this.items.map((function(t){t.markup=e.general_markup}))}},{key:"addNewProduct",value:function(){$("#add_new_product_modal").modal({backdrop:"static",keyboard:!1}),$("#add_new_product_modal").on("shown.bs.modal",(function(){$("#product_form_name").focus()}))}},{key:"setMarkup",value:function(e){e.markup=(parseFloat(e.selling_price)/parseFloat(e.price)).toFixed(2)}},{key:"setSellingPrice",value:function(e){e.selling_price=(parseFloat(e.markup)*parseFloat(e.price)).toFixed(2)}},{key:"setNewMarkup",value:function(){this.new_markup=(this.new_selling_price/parseFloat(this.new_price)).toFixed(2)}},{key:"removeItem",value:function(e){this.items.splice(this.items.indexOf(e),1),this.getTotal(),this.ts=this.dbService.getToday("timestamp_string")}},{key:"changeQuantity",value:function(e){var t=window.prompt("Enter new quantity");null!=t&&""!=t.trim()&&null!=t&&(e.quantity=parseFloat(t)),this.getTotal()}},{key:"changePrice",value:function(e){var t=window.prompt("Enter new price");null!=t&&""!=t.trim()&&null!=t&&(e.price=parseFloat(t)),this.getTotal()}},{key:"changeMarkup",value:function(e){var t=window.prompt("Enter new markup");null!=t&&""!=t.trim()&&null!=t&&(e.markup=parseFloat(t))}},{key:"getTotal",value:function(){var e=0;this.items.map((function(t){e+=t.quantity*t.price})),this.purchase_total=e.toFixed(2)}},{key:"setQuantities",value:function(){var e=0,t=this;$(".quantities").each((function(){t.items[e].quantity=$(this).val(),e++})),this.getTotal()}},{key:"setPrices",value:function(){var e=0,t=this;$(".prices").each((function(){t.items[e].price=$(this).val(),t.setSellingPrice(t.items[e]),e++})),this.getTotal()}},{key:"setMarkups",value:function(){var e=0,t=this;$(".markups").each((function(){t.items[e].markup=$(this).val(),e++})),this.getTotal()}},{key:"setSellingPrices",value:function(){var e=0,t=this;$(".selling_prices").each((function(){t.items[e].selling_price=$(this).val(),e++})),this.getTotal()}},{key:"saveItems",value:function(){var e=this;if(null==this.items||null==this.items||this.items.length<1)return this.notify.failNotification("Please add at least one product"),!1;if(null==this.purchase.vendor||null==this.purchase.vendor)return this.notify.failNotification("Please select a vendor"),!1;this.notify.showLoading();for(var t=[],n=[],i=[],a=[],l=[],r=[],d=[],o="RP-"+this.dbService.getToday("timestamp_string"),s=0;s<this.items.length;s++){var m=this.items[s];t.push(m.product_id),n.push(m.price),i.push(m.quantity),l.push(m.markup),a.push(m.unit),r.push(m.selling_price),d.push(m.expiry)}var c=new FormData;c.append("products",t.join("||")),c.append("prices",n.join("||")),c.append("quantities",i.join("||")),c.append("units",a.join("||")),c.append("expiries",d.join("||")),c.append("markups",l.join("||")),c.append("selling_prices",r.join("||")),c.append("created_by",this.authService.current_user.id),c.append("update_prices","yes"),c.append("payment_method",this.payment_method),c.append("amount_paid",this.amount_paid),c.append("vendor",this.purchase.vendor.id),c.append("delivery_point",this.purchase.site),c.append("invoice",this.purchase.invoice),c.append("code",o),c.append("date",this.purchase.createdAt),c.append("created_on",this.dbService.getToday("timestamp")),c.append("vendor_name",this.purchase.vendor.name),c.append("display_name",this.authService.current_user.display_name),this.dbService.postData(c,"purchase/saveBulk",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-1"===t.status?e.notify.failNotification("Server error. Please try again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.notify.hideLoading(),e.items=[],e.purchase.invoice="",e.getTotal(),e.notify.successNotification("Purchases saved successfully"),e.socket.sendEvent({company_id:e.authService.current_user.company_id,parent_company_id:e.authService.current_user.parent_company,message:"Purchases received. stock and prices updated",event:"purchases_received"}))}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()})),this.ts=this.dbService.getToday("timestamp_string")}},{key:"setNewPrice",value:function(){this.new_selling_price=(this.new_price*this.new_markup).toFixed(2)}},{key:"productAdded",value:function(e){$("#add_new_product_modal").modal("hide"),this.productSelected(e)}},{key:"ngOnDestroy",value:function(){this.items.length>0&&(this.holdItems(),this.notify.successNotification("Receipt held automatically"))}},{key:"holdItems",value:function(){var e=new c.a;e.items=this.items,e.user=this.authService.current_user.display_name,e.time=this.dbService.getToday("timestamp"),this.held_items.push(e),localStorage.setItem("purchase_heldItems",JSON.stringify(this.held_items)),this.items=[],this.getTotal()}},{key:"viewHeldItems",value:function(){$("#purchase_held_items_modal").modal({backdrop:"static",keyboard:!1}),this.held_items.length>0&&(this.selectedHeldItem=this.held_items[0])}},{key:"selectHeldItem",value:function(e){this.selectedHeldItem=e}},{key:"unhold",value:function(e){this.items=e.items,this.held_items.splice(this.held_items.indexOf(e),1),localStorage.setItem("purchase_heldItems",JSON.stringify(this.held_items)),$("#purchase_held_items_modal").modal("hide"),this.getTotal()}},{key:"unholdSelected",value:function(){this.unhold(this.selectedHeldItem)}},{key:"clearHeldItems",value:function(){localStorage.removeItem("heldItems"),this.selectedHeldItem=null,this.held_items=[],$("#held_items_modal").modal("hide")}},{key:"cancel",value:function(){this.items=[],this.getTotal()}},{key:"goBack",value:function(){window.history.back()}}]),e}(),F.\u0275fac=function(e){return new(e||F)(d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](h.a),d["\u0275\u0275directiveInject"](f.a))},F.\u0275cmp=d["\u0275\u0275defineComponent"]({type:F,selectors:[["app-add-purchase"]],inputs:{id:"id"},outputs:{onFinish:"onFinish"},decls:158,vars:25,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-md-6"],["routerLink","/add_product",1,"btn","btn-success","btn-sm"],[3,"timestamp","type","show","onAdd"],[1,"col-12"],[1,""],[1,"card"],[1,"card-header"],["type","text","size","6","name","general_markup",3,"ngModel","ngModelChange"],[1,"card-body","table-responsive","purchase_sales_items"],[1,"table","table-striped","table-bordered","table-hover"],[4,"ngFor","ngForOf"],[1,"card","sales-fixed-bottom"],[1,"card-body"],["required","","type","date","name","createdAt",3,"ngModel","ngModelChange"],[3,"type","onFinish"],["required","","name","invoice",3,"ngModel","ngModelChange"],[1,"text-danger"],["name","payment_method",3,"ngModel","ngModelChange"],["type","text","size","10",3,"ngModel","ngModelChange"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-info",3,"disabled","click"],[1,"btn","btn-info",3,"click"],["id","enter_purchase_quantity_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[4,"ngIf"],[1,"modal-body"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"table","table-bordered","table-striped"],["autocomplete","off","type","text","required","","name","new_quantity","id","qtt","placeholder","Quantity",3,"ngModel","ngModelChange"],["autocomplete","off","type","text","required","","name","new_price","placeholder","Cost",3,"ngModel","ngModelChange"],["name","unit",1,"",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["value","other"],["class","form-control","type","text","name","unit",3,"ngModel","ngModelChange",4,"ngIf"],["required","","type","date","name","expiry",3,"ngModel","ngModelChange"],["autocomplete","off","required","","type","text","name","new_markup",3,"ngModel","blur","change","keyup","ngModelChange"],["autocomplete","off","required","","type","text","name","new_selling_price",3,"ngModel","focus","change","keyup","ngModelChange"],["type","submit","name","submit","value","Add Item",1,"btn","btn-success","waves-effect"],["type","button","data-dismiss","modal",1,"btn","btn-warning","waves-effect"],["id","add_new_product_modal","tabindex","-1","role","dialog",1,"modal","fade","in"],["role","document",1,"modal-dialog","modal-lg"],[3,"onFinish"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],["id","purchase_held_items_modal","tabindex","-1","role","dialog",1,"modal","fade","in"],["class","row",4,"ngIf"],["type","button","data-dismiss","modal",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-warning"],["type","button","title","edit the markup, quantity, unit price, expiry or selling price of this item",1,"btn","btn-warning",3,"click"],[1,"fa","fa-edit"],["type","button","title","remove item from list",1,"btn","btn-danger",3,"click"],[1,"fa","fa-remove"],[3,"value"],["type","text","name","unit",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-7","fixed_height"],[3,"ngClass","dblclick","click",4,"ngFor","ngForOf"],[1,"col-5","fixed_height"],["class","table table-striped table-bordered table-hover",4,"ngIf"],[3,"ngClass","dblclick","click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"section",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"div",3),d["\u0275\u0275elementStart"](4,"h4"),d["\u0275\u0275text"](5,"Receive Purchased Items "),d["\u0275\u0275elementStart"](6,"a",4),d["\u0275\u0275text"](7,"+ New product"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"div",3),d["\u0275\u0275elementStart"](9,"app-select-product",5),d["\u0275\u0275listener"]("onAdd",(function(e){return t.productSelected(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"div",2),d["\u0275\u0275elementStart"](11,"div",6),d["\u0275\u0275elementStart"](12,"div",7),d["\u0275\u0275elementStart"](13,"div",7),d["\u0275\u0275elementStart"](14,"div",8),d["\u0275\u0275elementStart"](15,"div",9),d["\u0275\u0275text"](16," General Markup: "),d["\u0275\u0275elementStart"](17,"input",10),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.general_markup=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"div",11),d["\u0275\u0275elementStart"](19,"table",12),d["\u0275\u0275elementStart"](20,"thead"),d["\u0275\u0275elementStart"](21,"tr"),d["\u0275\u0275elementStart"](22,"th"),d["\u0275\u0275text"](23,"Product"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"th"),d["\u0275\u0275text"](25,"Curr. Stock"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"th"),d["\u0275\u0275text"](27,"Quantity"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"th"),d["\u0275\u0275text"](29,"Unit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"th"),d["\u0275\u0275text"](31,"Cost"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](32,"th"),d["\u0275\u0275text"](33,"Total"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](34,"th"),d["\u0275\u0275text"](35,"Markup"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](36,"th"),d["\u0275\u0275text"](37,"Selling Price"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](38,"th"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](39,"tbody"),d["\u0275\u0275template"](40,S,22,8,"tr",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](41,"div",14),d["\u0275\u0275elementStart"](42,"div",15),d["\u0275\u0275elementStart"](43,"div"),d["\u0275\u0275elementStart"](44,"label"),d["\u0275\u0275text"](45,"Date of Purchase*"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](46,"input",16),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.purchase.createdAt=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](47," | "),d["\u0275\u0275elementStart"](48,"app-select-vendor",17),d["\u0275\u0275listener"]("onFinish",(function(e){return t.vendorSelected(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](49,"label"),d["\u0275\u0275text"](50,"Invoice #"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](51,"input",18),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.purchase.invoice=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](52,"div",7),d["\u0275\u0275elementStart"](53,"b",19),d["\u0275\u0275text"](54),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](55," | Payment method: "),d["\u0275\u0275elementStart"](56,"select",20),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.payment_method=e})),d["\u0275\u0275elementStart"](57,"option"),d["\u0275\u0275text"](58,"Credit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](59,"option"),d["\u0275\u0275text"](60,"Cash"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](61,"option"),d["\u0275\u0275text"](62,"Prepaid"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](63," | Amount Paid: "),d["\u0275\u0275elementStart"](64,"input",21),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.amount_paid=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](65,"button",22),d["\u0275\u0275listener"]("click",(function(){return t.cancel()})),d["\u0275\u0275text"](66,"Cancel"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](67,"button",23),d["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),d["\u0275\u0275text"](68,"Save"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](69,"span",7),d["\u0275\u0275elementStart"](70,"button",24),d["\u0275\u0275listener"]("click",(function(){return t.holdItems()})),d["\u0275\u0275text"](71,"Hold"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](72,"button",25),d["\u0275\u0275listener"]("click",(function(){return t.viewHeldItems()})),d["\u0275\u0275text"](73),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](74,"div",26),d["\u0275\u0275elementStart"](75,"div",27),d["\u0275\u0275elementStart"](76,"div",28),d["\u0275\u0275elementStart"](77,"div",29),d["\u0275\u0275template"](78,E,3,1,"h5",30),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](79,"div",31),d["\u0275\u0275elementStart"](80,"form",32,33),d["\u0275\u0275listener"]("ngSubmit",(function(){return t.addItem()})),d["\u0275\u0275elementStart"](82,"table",34),d["\u0275\u0275elementStart"](83,"tr"),d["\u0275\u0275elementStart"](84,"td"),d["\u0275\u0275elementStart"](85,"label"),d["\u0275\u0275text"](86,"Current Stock"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](87,"td"),d["\u0275\u0275text"](88),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](89,"tr"),d["\u0275\u0275elementStart"](90,"td"),d["\u0275\u0275elementStart"](91,"label"),d["\u0275\u0275text"](92,"Quantity"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](93,"td"),d["\u0275\u0275elementStart"](94,"input",35),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_quantity=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](95,"tr"),d["\u0275\u0275elementStart"](96,"td"),d["\u0275\u0275elementStart"](97,"label"),d["\u0275\u0275text"](98,"Unit Cost"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](99,"td"),d["\u0275\u0275elementStart"](100,"input",36),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_price=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](101,"tr"),d["\u0275\u0275elementStart"](102,"td"),d["\u0275\u0275elementStart"](103,"label"),d["\u0275\u0275text"](104,"Unit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](105,"td"),d["\u0275\u0275elementStart"](106,"select",37),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.unit_selected=e})),d["\u0275\u0275template"](107,b,2,2,"option",38),d["\u0275\u0275elementStart"](108,"option",39),d["\u0275\u0275text"](109,"Other"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](110,x,1,1,"input",40),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](111,"tr"),d["\u0275\u0275elementStart"](112,"td"),d["\u0275\u0275elementStart"](113,"label"),d["\u0275\u0275text"](114,"Expiry date"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](115,"td"),d["\u0275\u0275elementStart"](116,"input",41),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_expiry=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](117,"tr"),d["\u0275\u0275elementStart"](118,"td"),d["\u0275\u0275elementStart"](119,"label"),d["\u0275\u0275text"](120,"Markup"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](121,"td"),d["\u0275\u0275elementStart"](122,"input",42),d["\u0275\u0275listener"]("blur",(function(){return t.setNewPrice()}))("change",(function(){return t.setNewPrice()}))("keyup",(function(){return t.setNewPrice()}))("ngModelChange",(function(e){return t.new_markup=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](123,"tr"),d["\u0275\u0275elementStart"](124,"td"),d["\u0275\u0275elementStart"](125,"label"),d["\u0275\u0275text"](126,"Selling Price"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](127,"td"),d["\u0275\u0275elementStart"](128,"input",43),d["\u0275\u0275listener"]("focus",(function(){return t.setNewPrice()}))("change",(function(){return t.setNewMarkup()}))("keyup",(function(){return t.setNewMarkup()}))("ngModelChange",(function(e){return t.new_selling_price=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](129,"input",44),d["\u0275\u0275elementStart"](130,"button",45),d["\u0275\u0275text"](131,"Cancel"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](132,"div",46),d["\u0275\u0275elementStart"](133,"div",47),d["\u0275\u0275elementStart"](134,"div",28),d["\u0275\u0275elementStart"](135,"div",29),d["\u0275\u0275elementStart"](136,"h5"),d["\u0275\u0275text"](137,"Add new product"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](138,"div",31),d["\u0275\u0275elementStart"](139,"app-product-form",48),d["\u0275\u0275listener"]("onFinish",(function(e){return t.productAdded(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](140,"div",49),d["\u0275\u0275elementStart"](141,"button",50),d["\u0275\u0275text"](142,"Cancel"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](143,"div",51),d["\u0275\u0275elementStart"](144,"div",47),d["\u0275\u0275elementStart"](145,"div",28),d["\u0275\u0275elementStart"](146,"div",29),d["\u0275\u0275text"](147," Held Items "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](148,"div",31),d["\u0275\u0275template"](149,k,2,0,"span",30),d["\u0275\u0275template"](150,q,17,2,"div",52),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](151,"div",49),d["\u0275\u0275elementStart"](152,"button",53),d["\u0275\u0275listener"]("click",(function(){return t.unholdSelected()})),d["\u0275\u0275text"](153,"Unhold Selected"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](154,"button",54),d["\u0275\u0275listener"]("click",(function(){return t.clearHeldItems()})),d["\u0275\u0275text"](155,"Delete All"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](156,"button",55),d["\u0275\u0275text"](157,"Close"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("timestamp",t.ts)("type","search")("show","no"),d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("ngModel",t.general_markup),d["\u0275\u0275advance"](23),d["\u0275\u0275property"]("ngForOf",t.items),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.purchase.createdAt),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("type","select"),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngModel",t.purchase.invoice),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("Total: ",t.purchase_total,""),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.payment_method),d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("ngModel",t.amount_paid),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("disabled",t.items.length<1),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("Held Items (",t.held_items.length,")"),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",null!=t.new_item),d["\u0275\u0275advance"](10),d["\u0275\u0275textInterpolate1"]("",t.new_stock," "),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.new_quantity),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.new_price),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.unit_selected),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.units),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf","other"==t.unit_selected),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.new_expiry),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.new_markup),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngModel",t.new_selling_price),d["\u0275\u0275advance"](21),d["\u0275\u0275property"]("ngIf",t.held_items.length<1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.held_items.length>0))},directives:[r.e,v.a,g.a,g.d,g.g,i.i,g.k,_.a,g.l,g.h,g.m,i.j,g.e,g.f,y.a,i.h],styles:[""]}),F)}],j=((P=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||P)},imports:[[r.f.forChild(T)],r.f]}),P),H=n("nBlB"),O=((N=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[i.b,j,a.a,l.a,H.a]]}),N)}}]);