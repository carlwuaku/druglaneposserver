function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ofXK"),a=n("nEHF"),r=n("fXoL"),o=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a]]}),e}()},pEcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i=n("fXoL"),a=function e(){_classCallCheck(this,e)},r=n("c92J"),o=n("ccyI"),s=n("1VJT"),l=n("ofXK"),c=n("3Pt+"),d=n("hiAm");function m(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",8),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).addItem()})),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()}}function u(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",10),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](3).list()})),i["\u0275\u0275element"](1,"i",11),i["\u0275\u0275elementEnd"]()}}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",12),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function h(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span"),i["\u0275\u0275template"](1,m,2,0,"button",4),i["\u0275\u0275template"](2,u,2,0,"button",5),i["\u0275\u0275elementStart"](3,"select",6),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).selected_item=e}))("change",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).itemSelected()})),i["\u0275\u0275template"](4,p,2,2,"option",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.show_add),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.selected_item),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",a.objects)}}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",2),i["\u0275\u0275template"](1,h,5,4,"span",3),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_loaded)}}function y(e,t){1&e&&i["\u0275\u0275element"](0,"app-loading")}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"h4"),i["\u0275\u0275text"](2,"Not found"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](n);var e=t.$implicit;return i["\u0275\u0275nextContext"](3).add(e)})),i["\u0275\u0275elementStart"](1,"b"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"i",19),i["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",a.name," ")}}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275template"](1,_,4,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",n.objects)}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",13),i["\u0275\u0275elementStart"](1,"div",14),i["\u0275\u0275template"](2,y,1,0,"app-loading",3),i["\u0275\u0275template"](3,v,3,0,"div",3),i["\u0275\u0275template"](4,g,2,1,"div",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.is_searching),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.error_search),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.is_finished_search)}}var x,S=((x=function(){function e(t,n,a){_classCallCheck(this,e),this.dbService=t,this.authService=n,this.notify=a,this.onFinish=new i.EventEmitter,this.btn_text="Select",this.onAdd=new i.EventEmitter,this.type="select",this.show_add=!0,this.param="",this.selected=null,this.is_searching=!1,this.is_finished_search=!1,this.error_search=!1,this.is_loaded=!1,this.added=[]}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.type),"list"!=this.type&&"select"!=this.type||this.list(),"emit"==this.type&&this.getAll()}},{key:"itemSelected",value:function(){for(var e=0;e<this.objects.length;e++)if(this.objects[e].id==this.selected_item){this.onFinish.emit(this.objects[e]);break}}},{key:"itemAdded",value:function(e){this.objects.push(e),$("#add_vendor_modal").modal("hide"),this.onFinish.emit(e)}},{key:"list",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading(),this.dbService.getData("admin/getBranches?only_others=yes",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"getAll",value:function(){var e=this;this.is_loaded=!1,this.notify.showLoading();var t="admin/getBranches?only_others=no";"admin"==this.authService.current_user.type&&(t+="&parent_company_id="+this.authService.current_user.parent_company_id),this.dbService.getData(t,this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status||(e.objects=t.data,e.onFinish.emit(e.objects),e.is_loaded=!0)}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification()}))}},{key:"add",value:function(e){this.added.push(e),this.onAdd.emit(e),e.is_selected=!0}},{key:"select",value:function(e){this.selected=e,this.onFinish.emit(e)}},{key:"addItem",value:function(){var e=this;this.notify.showLoading();var t=window.prompt("Enter name of branch");if(this.dbService.isEmpty(t))return this.notify.failNotification("name is required"),!1;var n=window.prompt("Enter phone number of branch");if(this.dbService.isEmpty(n))return this.notify.failNotification("Phone number is required"),!1;var i=new FormData;i.append("name",t),i.append("phone",n),this.dbService.postData(i,"admin/saveBranch",this.authService.current_user).subscribe((function(i){if(e.notify.hideLoading(),"-1"===i.status)e.notify.failNotification("Server error. Please try again");else if("-1"===i.status)e.notify.failNotification("Unable to authenticate. Please login again");else if("-9"===i.status)e.notify.showNotification("You are not permitted to perform this action","fail",3e3);else{var r=new a;r.id=i.status,r.name=t,r.phone=n,e.objects.push(r),e.notify.successNotification("Branch added successfully"),e.selected_item=r.id,e.itemSelected()}}),(function(t){e.notify.noConnectionNotification()}))}}]),e}()).\u0275fac=function(e){return new(e||x)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a))},x.\u0275cmp=i["\u0275\u0275defineComponent"]({type:x,selectors:[["app-select-branch"]],inputs:{btn_text:"btn_text",type:"type",show_add:"show_add",selected_item:"selected_item"},outputs:{onFinish:"onFinish",onAdd:"onAdd"},decls:2,vars:2,consts:[["class","",4,"ngIf"],["class","card",4,"ngIf"],[1,""],[4,"ngIf"],["type","button","class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-sm btn-info",3,"click",4,"ngIf"],["name","vendors",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[3,"value"],[1,"card"],[1,"body"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus","pull-right"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,f,2,1,"span",0),i["\u0275\u0275template"](1,b,5,3,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf","select"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","list"==t.type))},directives:[l.j,c.m,c.e,c.h,l.i,c.i,c.n,d.a],styles:[""]}),x)},pGBO:function(e,t,n){"use strict";n.r(t),n.d(t,"TransferFormModule",(function(){return F}));var i=n("ofXK"),a=n("tyNb"),r=function e(){_classCallCheck(this,e)},o=n("fXoL"),s=n("c92J"),l=n("bgkY"),c=n("1VJT"),d=n("eJvr"),m=n("ccyI"),u=n("4j6H"),p=n("pEcs"),h=n("3Pt+"),f=n("6QD7");function y(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"em",46),o["\u0275\u0275element"](1,"br"),o["\u0275\u0275element"](2,"i",47),o["\u0275\u0275text"](3," Possibly expired"),o["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&o["\u0275\u0275element"](0,"i",48)}var _=function(e){return{"table-warning":e}};function g(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"tr",38),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275template"](3,y,4,0,"em",39),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"td"),o["\u0275\u0275text"](5),o["\u0275\u0275element"](6,"br"),o["\u0275\u0275elementStart"](7,"button",40),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit;return o["\u0275\u0275nextContext"]().editItem(e)})),o["\u0275\u0275text"](8," ... "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"button",41),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit;return o["\u0275\u0275nextContext"]().increment(e)})),o["\u0275\u0275text"](10," +1 "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"button",42),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit;return o["\u0275\u0275nextContext"]().decrement(e)})),o["\u0275\u0275text"](12," -1 "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"td"),o["\u0275\u0275text"](14),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"td"),o["\u0275\u0275text"](16),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"td"),o["\u0275\u0275text"](18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"td"),o["\u0275\u0275text"](20),o["\u0275\u0275template"](21,v,1,0,"i",43),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](22,"td"),o["\u0275\u0275text"](23),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"td"),o["\u0275\u0275elementStart"](25,"button",44),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit;return o["\u0275\u0275nextContext"]().removeItem(e)})),o["\u0275\u0275element"](26,"i",45),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction1"](10,_,i.stock<1||i.quantity>i.stock)),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",i.product_name," "),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",i.expired),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",i.quantity," "),o["\u0275\u0275advance"](9),o["\u0275\u0275textInterpolate1"]("",i.cost_price," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](i.price),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"]((i.price*i.quantity).toFixed(2)),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",i.stock," "),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",i.stock<1||i.quantity>i.stock),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](i.expiry)}}function b(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"h5"),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"]("Quantity & Expiry for ",n.new_item.name,"")}}function x(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.product.name),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.quantity),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.price),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("",(n.quantity*n.price).toFixed(2)," ")}}var S,w,E,k=[{path:"",component:(S=function(){function e(t,n,i,a,r){_classCallCheck(this,e),this.dbService=t,this.socket=n,this.notify=i,this.localforage=a,this.authService=r,this.items=[],this.new_item=null,this.new_quantity="",this.new_expiry="",this.new_cost_price="",this.sale_total=0,this.receipt_items=[],this.invoice_items=[],this.receipt_total=0,this.time="",this.digital_address="",this.ts="",this.key_state="none",-1==this.authService.current_user.permissions.indexOf("Transfer Items")&&(this.notify.failNotification("You are not permitted to view that page"),this.dbService.goBackHome()),this.company_address=r.current_user.company_address,this.company_phone=r.current_user.company_phone,this.company_name=r.current_user.company_name,this.cashier=r.current_user.display_name,this.digital_address=r.current_user.digital_address,this.dbService.setTitle("Transfer Items")}return _createClass(e,[{key:"keyEvent",value:function(e){if("Home"==e.code)console.log("home"),this.ts=this.dbService.getToday("timestamp_string");else if(27==e.keyCode)switch(this.key_state){case"item_quantity":this.rejectItem()}}},{key:"ngOnInit",value:function(){this.ts=this.dbService.getToday(),$("#sales_search").focus()}},{key:"productSelected",value:function(e){if(console.log(e),this.new_item=e,this.new_item.stock=0,"number"!=typeof e.price)return this.notify.failNotification("Price not defined."),!1;for(var t=!1,n=0;n<this.items.length;n++)if(this.items[n].product_id==e.id){t=!0;break}if(t)return this.notify.failNotification("Item is already in the list"),!1;this.getItemStock(),this.showQuantityModal()}},{key:"showQuantityModal",value:function(){this.key_state="item_quantity",this.new_expiry=this.new_item.expiry,this.new_cost_price=this.new_item.cost_price,$("#transfer_quantity_modal").modal({backdrop:"static",keyboard:!1}),$("#transfer_quantity_modal").on("shown.bs.modal",(function(){$("#transfer_new_quantity").focus()}))}},{key:"getItemStock",value:function(){var e=this,t=this.new_item.id;this.dbService.getData("product/getStock?id="+this.new_item.id,this.authService.current_user).subscribe((function(n){if("1"==n.status){e.new_item.stock=n.data;for(var i=0;i<e.items.length;i++)if(e.items[i].product_id==t){e.items[i].stock=n.data;break}}}),(function(t){e.notify.failNotification("Unable to get stock. Check connection")}))}},{key:"acceptItem",value:function(){var e=new r;e.product_name=this.new_item.name,e.product_id=this.new_item.id,e.price=this.new_item.price,e.quantity=this.new_quantity,e.total=this.new_quantity*this.new_item.price,e.stock=this.new_item.stock,e.product=this.new_item,e.expired=this.new_item.expired,e.expiry=this.new_expiry,e.cost_price=parseFloat(this.new_cost_price),this.items.push(e),this.getTotal(),$("#transfer_quantity_modal").modal("hide"),this.new_quantity="",this.ts=this.dbService.getToday("timestamp_string")}},{key:"rejectItem",value:function(){$("#transfer_quantity_modal").modal("hide"),this.new_quantity="",this.ts=this.dbService.getToday("timestamp_string")}},{key:"getTotal",value:function(){var e=0;this.items.map((function(t){e+=t.quantity*t.price})),this.sale_total=e,this.receipt_total=e}},{key:"removeItem",value:function(e){this.items.splice(this.items.indexOf(e),1),this.getTotal()}},{key:"editItem",value:function(e){this.new_item=e.product,this.items.splice(this.items.indexOf(e),1),this.getTotal(),this.new_item=e.product,this.new_quantity=e.quantity,$("#transfer_quantity_modal").modal({backdrop:"static",keyboard:!1}),$("#transfer_quantity_modal").on("shown.bs.modal",(function(){$("#qtt").focus()}))}},{key:"setQuantities",value:function(){var e=0,t=this;$(".quantities").each((function(){t.items[e].quantity=$(this).val(),e++})),this.getTotal()}},{key:"saveItems",value:function(){var e=this;if(null==this.items||null==this.items||this.items.length<1)return this.notify.failNotification("Please add at least one product"),!1;if(null==this.receiver_id||null==this.receiver_id)return this.notify.failNotification("Please select the receiving branch"),!1;this.notify.showLoading();var t=[],n=[],i=[],a=[],r=[],o=[];this.ts=this.dbService.getToday("timestamp_string");for(var s=0;s<this.items.length;s++)t.push((l=this.items[s]).product_id),n.push(l.price),i.push(l.quantity),a.push(l.product_name),r.push(l.expiry),o.push(l.cost_price);for(this.receipt_items=[],s=0;s<this.items.length;s++){var l;this.receipt_items.push(l=this.items[s])}var c=new FormData;c.append("products",t.join("||")),c.append("prices",n.join("||")),c.append("quantities",i.join("||")),c.append("product_names",a.join("||")),c.append("expiries",r.join("||")),c.append("created_by",this.authService.current_user.id),c.append("date",this.dbService.getToday()),c.append("created_on",this.dbService.getToday("timestamp")),c.append("display_name",this.authService.current_user.display_name),c.append("receiver",this.receiver_id),c.append("receiver_name",this.receiver_name),c.append("cost_prices",o.join("||")),this.dbService.postData(c,"transfer/saveBulk",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"0"===t.status?(e.notify.failNotification("Unable to authenticate. Please login again"),e.authService.logout()):"-1"===t.status?e.notify.failNotification("Server error. Please try again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.time=e.dbService.getToday("timestamp"),console.log(t.code),e.selected_code=t.code,console.log("selected code set to "+e.selected_code),e.notify.hideLoading(),e.socket.sendEvent({sender_id:e.authService.current_user.company_id,receiver_id:e.receiver_id,message:"New transfer of items from "+e.authService.current_user.company_name,event:"new_transfer"}),e.notify.successNotification("Transfers saved successfully"),e.finishSale())}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification(),console.log(t)}))}},{key:"sync",value:function(){}},{key:"increment",value:function(e){null!=e&&null!=e?(e.quantity=(parseFloat(e.quantity)+1).toString(),this.getTotal()):(this.dbService.isEmpty(this.new_quantity)&&(this.new_quantity=0),this.new_quantity++,$("#transfer_new_quantity").focus(),this.focusCursor())}},{key:"decrement",value:function(e){null!=e&&null!=e?parseFloat(e.quantity)>1&&(e.quantity=(parseFloat(e.quantity)-1).toString(),this.getTotal()):(this.dbService.isEmpty(this.new_quantity)&&(this.new_quantity=0),parseFloat(this.new_quantity)>1&&this.new_quantity--,$("#transfer_new_quantity").focus(),this.focusCursor())}},{key:"keyChangeQuantity",value:function(e){40==e.keyCode?this.decrement():38==e.keyCode&&this.increment(),this.focusCursor()}},{key:"focusCursor",value:function(){var e=$("#transfer_new_quantity").val();$("#transfer_new_quantity").val("").val(e)}},{key:"finishSale",value:function(){var e=this,t=this;this.ts=this.dbService.getToday("timestamp_string"),setTimeout((function(){t.print(),e.items=[],e.getTotal()}),1e3)}},{key:"cancel",value:function(){this.items=[],this.getTotal()}},{key:"goBack",value:function(){window.history.back()}},{key:"keyUp",value:function(e){}},{key:"print",value:function(){var e,t,n=0;this.receipt_items.map((function(e){n+=e.quantity*e.product.price})),this.receipt_total=n,e=document.getElementById("invoice").innerHTML,(t=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),t.document.write('\n          <html>\n            <head>\n              <title>Invoice</title>\n              <style>\n              body{\n                font-size: 13px;\n              }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n    \n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n              </style>\n            </head>\n        <body onload="window.print();"><div id="invoice">'.concat(e,"</div> \n        <script>\n           window.onafterprint = function(){\n            window.close();\n          }\n           <\/script>\n           </body>\n          </html>")),t.document.close()}},{key:"setRecipient",value:function(e){this.receiver_id=e.id,this.receiver_name=e.name,this.receiver_address=e.address,this.receiver_digital_address=e.digital_address,this.receiver_phone=e.phone}}]),e}(),S.\u0275fac=function(e){return new(e||S)(o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](m.a))},S.\u0275cmp=o["\u0275\u0275defineComponent"]({type:S,selectors:[["app-transfer-form"]],hostBindings:function(e,t){1&e&&o["\u0275\u0275listener"]("keydown",(function(e){return t.keyEvent(e)}),!1,o["\u0275\u0275resolveWindow"])},decls:133,vars:24,consts:[[1,"content"],[1,"container"],[1,"row","sticky_top"],[1,"col-5"],[1,"col-7"],[3,"timestamp","type","onAdd"],[1,"row"],[1,"col-12"],[1,"card","card-body","table-responsive","transfer_items"],[1,"table","table-striped","table-bordered","table-hover"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"card","card-body","sales-fixed-bottom"],[1,"col-4"],[3,"type","onFinish"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-success",3,"click"],["id","transfer_quantity_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-sm"],[1,"modal-content"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"modal-body"],[4,"ngIf"],["type","text","autocomplete","off","required","","id","transfer_new_quantity","name","new_quantity",3,"ngModel","keyup","ngModelChange"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],["type","button",1,"btn","btn-sm","btn-warning",3,"click"],["type","date","required","","id","transfer_new_expiry","name","new_expiry",3,"ngModel","ngModelChange"],["type","text","required","","id","transfer_new_cost_price","name","new_cost_price",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","submit",1,"btn","btn-success"],["type","button",1,"btn","btn-danger",3,"click"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[1,"table"],[4,"ngFor","ngForOf"],[3,"bc-value","bc-height","bc-font-size","bc-display-value"],[3,"ngClass"],["class","text-muted",4,"ngIf"],["title","custom quantity",1,"btn","btn-info","btn-sm",3,"click"],["title","increase quantity by 1",1,"btn","btn-info","btn-sm",3,"click"],["title","decrease quantity by 1",1,"btn","btn-info","btn-sm",3,"click"],["title","The quantity entered is more than the current stock","class","text-danger fa fa-exclamation-triangle",4,"ngIf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"fa","fa-remove"],[1,"text-muted"],["title","Item expired",1,"fa","fa-calendar","text-danger"],["title","The quantity entered is more than the current stock",1,"text-danger","fa","fa-exclamation-triangle"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"h5"),o["\u0275\u0275text"](5,"Transfer Items to another branch"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",4),o["\u0275\u0275elementStart"](7,"div"),o["\u0275\u0275elementStart"](8,"app-select-product",5),o["\u0275\u0275listener"]("onAdd",(function(e){return t.productSelected(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"div",6),o["\u0275\u0275elementStart"](10,"div",7),o["\u0275\u0275elementStart"](11,"div",8),o["\u0275\u0275elementStart"](12,"table",9),o["\u0275\u0275elementStart"](13,"thead"),o["\u0275\u0275elementStart"](14,"tr"),o["\u0275\u0275elementStart"](15,"th"),o["\u0275\u0275text"](16,"Product"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"th"),o["\u0275\u0275text"](18,"Quantity"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"th"),o["\u0275\u0275text"](20,"Cost Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"th"),o["\u0275\u0275text"](22,"Selling Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"th"),o["\u0275\u0275text"](24,"Total"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"th"),o["\u0275\u0275text"](26,"On-hand"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"th"),o["\u0275\u0275text"](28,"Expiry"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](29,"th"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"tbody"),o["\u0275\u0275template"](31,g,27,12,"tr",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](32,"div",7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](33,"div",11),o["\u0275\u0275elementStart"](34,"div",6),o["\u0275\u0275elementStart"](35,"div",12),o["\u0275\u0275elementStart"](36,"b"),o["\u0275\u0275text"](37),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](38,"div",12),o["\u0275\u0275elementStart"](39,"b"),o["\u0275\u0275text"](40,"Recipient"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"app-select-branch",13),o["\u0275\u0275listener"]("onFinish",(function(e){return t.setRecipient(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](42,"div",12),o["\u0275\u0275elementStart"](43,"button",14),o["\u0275\u0275listener"]("click",(function(){return t.cancel()})),o["\u0275\u0275text"](44,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"button",15),o["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),o["\u0275\u0275text"](46,"Save"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](47,"div",16),o["\u0275\u0275elementStart"](48,"div",17),o["\u0275\u0275elementStart"](49,"div",18),o["\u0275\u0275elementStart"](50,"form",19,20),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.acceptItem()})),o["\u0275\u0275elementStart"](52,"div",21),o["\u0275\u0275template"](53,b,2,1,"h5",22),o["\u0275\u0275elementStart"](54,"div"),o["\u0275\u0275elementStart"](55,"label"),o["\u0275\u0275text"](56,"Quantity"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](57,"br"),o["\u0275\u0275elementStart"](58,"input",23),o["\u0275\u0275listener"]("keyup",(function(e){return t.keyChangeQuantity(e)}))("ngModelChange",(function(e){return t.new_quantity=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](59,"br"),o["\u0275\u0275elementStart"](60,"button",24),o["\u0275\u0275listener"]("click",(function(){return t.increment()})),o["\u0275\u0275text"](61,"+1"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](62,"button",25),o["\u0275\u0275listener"]("click",(function(){return t.decrement()})),o["\u0275\u0275text"](63,"-1"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](64,"div"),o["\u0275\u0275elementStart"](65,"label"),o["\u0275\u0275text"](66,"Expiry Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](67,"input",26),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_expiry=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](68,"div"),o["\u0275\u0275elementStart"](69,"label"),o["\u0275\u0275text"](70,"Cost Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](71,"input",27),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_cost_price=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](72,"div",28),o["\u0275\u0275elementStart"](73,"button",29),o["\u0275\u0275text"](74,"Accept"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](75,"button",30),o["\u0275\u0275listener"]("click",(function(){return t.rejectItem()})),o["\u0275\u0275text"](76,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](77,"div",31),o["\u0275\u0275elementStart"](78,"div"),o["\u0275\u0275elementStart"](79,"div"),o["\u0275\u0275elementStart"](80,"span",32),o["\u0275\u0275text"](81),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](82,"span",33),o["\u0275\u0275text"](83),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](84,"br"),o["\u0275\u0275elementStart"](85,"div",34),o["\u0275\u0275elementStart"](86,"h4"),o["\u0275\u0275text"](87,"TRANSFER INVOICE "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](88,"b"),o["\u0275\u0275text"](89,"FROM:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](90,"b"),o["\u0275\u0275text"](91),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](92,"br"),o["\u0275\u0275text"](93),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](94,"div",34),o["\u0275\u0275elementStart"](95,"b"),o["\u0275\u0275text"](96,"TO: "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](97,"b"),o["\u0275\u0275text"](98),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](99,"br"),o["\u0275\u0275text"](100),o["\u0275\u0275element"](101,"br"),o["\u0275\u0275text"](102),o["\u0275\u0275element"](103,"br"),o["\u0275\u0275text"](104),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](105,"br"),o["\u0275\u0275elementStart"](106,"b"),o["\u0275\u0275text"](107,"By:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](108),o["\u0275\u0275element"](109,"hr"),o["\u0275\u0275elementStart"](110,"table",35),o["\u0275\u0275elementStart"](111,"thead"),o["\u0275\u0275elementStart"](112,"tr"),o["\u0275\u0275elementStart"](113,"th"),o["\u0275\u0275text"](114,"Item Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](115,"th"),o["\u0275\u0275text"](116,"Qty"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](117,"th"),o["\u0275\u0275text"](118,"Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](119,"th"),o["\u0275\u0275text"](120,"Ext. Price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](121,"tbody"),o["\u0275\u0275template"](122,x,9,4,"tr",36),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](123,"br"),o["\u0275\u0275element"](124,"br"),o["\u0275\u0275elementStart"](125,"div"),o["\u0275\u0275elementStart"](126,"b",33),o["\u0275\u0275text"](127),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](128,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](129,"div",34),o["\u0275\u0275element"](130,"ngx-barcode",37),o["\u0275\u0275element"](131,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](132,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("timestamp",t.ts)("type","search"),o["\u0275\u0275advance"](23),o["\u0275\u0275property"]("ngForOf",t.items),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate1"]("Total: GHC ",t.sale_total.toFixed(2)," "),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("type","select"),o["\u0275\u0275advance"](12),o["\u0275\u0275property"]("ngIf",null!=t.new_item),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngModel",t.new_quantity),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngModel",t.new_expiry),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngModel",t.new_cost_price),o["\u0275\u0275advance"](10),o["\u0275\u0275textInterpolate1"]("",t.time," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),o["\u0275\u0275advance"](8),o["\u0275\u0275textInterpolate1"]("",t.company_name," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.receiver_name," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.receiver_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.receiver_digital_address," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.receiver_phone," "),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"](" ",t.cashier," "),o["\u0275\u0275advance"](14),o["\u0275\u0275property"]("ngForOf",t.receipt_items),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("TOTAL: ",t.receipt_total.toFixed(2)," "),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("bc-value",t.selected_code)("bc-height",35)("bc-font-size",13)("bc-display-value",!0))},directives:[u.a,i.i,p.a,h.f,h.g,i.j,h.b,h.l,h.e,h.h,f.a,i.h],styles:[""]}),S)}],I=((w=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[a.f.forChild(k)],a.f]}),w),C=n("nEHF"),q=n("wDHj"),j=n("nBlB"),F=((E=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[i.b,I,C.a,q.a,j.a]]}),E)},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("ofXK"),a=n("nEHF"),r=n("6QD7"),o=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a,r.b],r.b]}),e}()}}]);