(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("ofXK"),r=n("nEHF"),a=n("fXoL");let l=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a]]}),e})()},pGBO:function(e,t,n){"use strict";n.r(t),n.d(t,"TransferFormModule",(function(){return q}));var i=n("ofXK"),r=n("tyNb");class a{constructor(){}}var l=n("fXoL"),s=n("c92J"),o=n("bgkY"),d=n("1VJT"),c=n("eJvr"),m=n("ccyI"),p=n("4j6H"),u=n("pEcs"),h=n("3Pt+"),f=n("6QD7");function y(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"em",46),l["\u0275\u0275element"](1,"br"),l["\u0275\u0275element"](2,"i",47),l["\u0275\u0275text"](3," Possibly expired"),l["\u0275\u0275elementEnd"]())}function x(e,t){1&e&&l["\u0275\u0275element"](0,"i",48)}const _=function(e){return{"table-warning":e}};function b(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr",38),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275template"](3,y,4,0,"em",39),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"td"),l["\u0275\u0275text"](5),l["\u0275\u0275element"](6,"br"),l["\u0275\u0275elementStart"](7,"button",40),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"]().editItem(n)})),l["\u0275\u0275text"](8," ... "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"button",41),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"]().increment(n)})),l["\u0275\u0275text"](10," +1 "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"button",42),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"]().decrement(n)})),l["\u0275\u0275text"](12," -1 "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"td"),l["\u0275\u0275text"](14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"td"),l["\u0275\u0275text"](16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"td"),l["\u0275\u0275text"](18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"td"),l["\u0275\u0275text"](20),l["\u0275\u0275template"](21,x,1,0,"i",43),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"td"),l["\u0275\u0275text"](23),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"td"),l["\u0275\u0275elementStart"](25,"button",44),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"]().removeItem(n)})),l["\u0275\u0275element"](26,"i",45),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;l["\u0275\u0275property"]("ngClass",l["\u0275\u0275pureFunction1"](10,_,e.stock<1||e.quantity>e.stock)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",e.product_name," "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.expired),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",e.quantity," "),l["\u0275\u0275advance"](9),l["\u0275\u0275textInterpolate1"]("",e.cost_price," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.price),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"]((e.price*e.quantity).toFixed(2)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",e.stock," "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.stock<1||e.quantity>e.stock),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.expiry)}}function g(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"h5"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"]("Quantity & Expiry for ",e.new_item.name,"")}}function v(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.product.name),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.quantity),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.price),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",(e.quantity*e.price).toFixed(2)," ")}}const S=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r){this.dbService=e,this.socket=t,this.notify=n,this.localforage=i,this.authService=r,this.items=[],this.new_item=null,this.new_quantity="",this.new_expiry="",this.new_cost_price="",this.sale_total=0,this.receipt_items=[],this.invoice_items=[],this.receipt_total=0,this.time="",this.digital_address="",this.ts="",this.key_state="none",-1==this.authService.current_user.permissions.indexOf("Transfer Items")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.company_address=r.current_user.company_address,this.company_phone=r.current_user.company_phone,this.company_name=r.current_user.company_name,this.cashier=r.current_user.display_name,this.digital_address=r.current_user.digital_address,this.dbService.setTitle("Transfer Items")}keyEvent(e){if("Home"==e.code)console.log("home"),this.ts=this.dbService.getToday("timestamp_string");else if(27==e.keyCode)switch(this.key_state){case"item_quantity":this.rejectItem()}}ngOnInit(){this.ts=this.dbService.getToday(),$("#sales_search").focus()}productSelected(e){if(console.log(e),this.new_item=e,this.new_item.stock=0,"number"!=typeof e.price)return this.notify.failNotification("Price not defined."),!1;let t=!1;for(let n=0;n<this.items.length;n++)if(this.items[n].product_id==e.id){t=!0;break}if(t)return this.notify.failNotification("Item is already in the list"),!1;this.getItemStock(),this.showQuantityModal()}showQuantityModal(){this.key_state="item_quantity",this.new_expiry=this.new_item.expiry,this.new_cost_price=this.new_item.cost_price,$("#transfer_quantity_modal").modal({backdrop:"static",keyboard:!1}),$("#transfer_quantity_modal").on("shown.bs.modal",(function(){$("#transfer_new_quantity").focus()}))}getItemStock(){let e=this.new_item.id;this.dbService.getData("product/getStock?id="+this.new_item.id,this.authService.current_user).subscribe(t=>{if("1"==t.status){this.new_item.stock=t.data;for(let n=0;n<this.items.length;n++)if(this.items[n].product_id==e){this.items[n].stock=t.data;break}}},e=>{this.notify.failNotification("Unable to get stock. Check connection")})}acceptItem(){var e=new a;e.product_name=this.new_item.name,e.product_id=this.new_item.id,e.price=this.new_item.price,e.quantity=this.new_quantity,e.total=this.new_quantity*this.new_item.price,e.stock=this.new_item.stock,e.product=this.new_item,e.expired=this.new_item.expired,e.expiry=this.new_expiry,e.cost_price=parseFloat(this.new_cost_price),this.items.push(e),this.getTotal(),$("#transfer_quantity_modal").modal("hide"),this.new_quantity="",this.ts=this.dbService.getToday("timestamp_string")}rejectItem(){$("#transfer_quantity_modal").modal("hide"),this.new_quantity="",this.ts=this.dbService.getToday("timestamp_string")}getTotal(){var e=0;this.items.map(t=>{e+=t.quantity*t.price}),this.sale_total=e,this.receipt_total=e}removeItem(e){this.items.splice(this.items.indexOf(e),1),this.getTotal()}editItem(e){this.new_item=e.product,this.items.splice(this.items.indexOf(e),1),this.getTotal(),this.new_item=e.product,this.new_quantity=e.quantity,$("#transfer_quantity_modal").modal({backdrop:"static",keyboard:!1}),$("#transfer_quantity_modal").on("shown.bs.modal",(function(){$("#qtt").focus()}))}setQuantities(){var e=0,t=this;$(".quantities").each((function(){t.items[e].quantity=$(this).val(),e++})),this.getTotal()}saveItems(){if(null==this.items||null==this.items||this.items.length<1)return this.notify.failNotification("Please add at least one product"),!1;if(null==this.receiver_id||null==this.receiver_id)return this.notify.failNotification("Please select the receiving branch"),!1;this.notify.showLoading();var e=[],t=[],n=[],i=[],r=[],a=[];this.ts=this.dbService.getToday("timestamp_string");for(var l=0;l<this.items.length;l++)e.push((s=this.items[l]).product_id),t.push(s.price),n.push(s.quantity),i.push(s.product_name),r.push(s.expiry),a.push(s.cost_price);for(this.receipt_items=[],l=0;l<this.items.length;l++){var s;this.receipt_items.push(s=this.items[l])}let o=new FormData;o.append("products",e.join("||")),o.append("prices",t.join("||")),o.append("quantities",n.join("||")),o.append("product_names",i.join("||")),o.append("expiries",r.join("||")),o.append("created_by",this.authService.current_user.id),o.append("date",this.dbService.getToday()),o.append("created_on",this.dbService.getToday("timestamp")),o.append("display_name",this.authService.current_user.display_name),o.append("receiver",this.receiver_id),o.append("receiver_name",this.receiver_name),o.append("cost_prices",a.join("||")),this.dbService.postData(o,"transfer/saveBulk",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"0"===e.status?(this.notify.failNotification("Unable to authenticate. Please login again"),this.authService.logout()):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.time=this.dbService.getToday("timestamp"),console.log(e.code),this.selected_code=e.code,console.log("selected code set to "+this.selected_code),this.notify.hideLoading(),this.socket.sendEvent({sender_id:this.authService.current_user.company_id,receiver_id:this.receiver_id,message:"New transfer of items from "+this.authService.current_user.company_name,event:"new_transfer"}),this.notify.successNotification("Transfers synced successfully"),this.finishSale())},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification(),console.log(e)})}sync(){}increment(e){null!=e&&null!=e?(e.quantity=(parseFloat(e.quantity)+1).toString(),this.getTotal()):(this.dbService.isEmpty(this.new_quantity)&&(this.new_quantity=0),this.new_quantity++,$("#transfer_new_quantity").focus(),this.focusCursor())}decrement(e){null!=e&&null!=e?parseFloat(e.quantity)>1&&(e.quantity=(parseFloat(e.quantity)-1).toString(),this.getTotal()):(this.dbService.isEmpty(this.new_quantity)&&(this.new_quantity=0),parseFloat(this.new_quantity)>1&&this.new_quantity--,$("#transfer_new_quantity").focus(),this.focusCursor())}keyChangeQuantity(e){40==e.keyCode?this.decrement():38==e.keyCode&&this.increment(),this.focusCursor()}focusCursor(){let e=$("#transfer_new_quantity").val();$("#transfer_new_quantity").val("").val(e)}finishSale(){this.items=[],this.getTotal(),this.print(),this.ts=this.dbService.getToday("timestamp_string")}cancel(){this.items=[],this.getTotal()}goBack(){window.history.back()}keyUp(e){}print(){var e=0;let t,n;t="",this.receipt_items.map(t=>{e+=t.quantity*t.product.price}),this.receipt_total=e,t=document.getElementById("invoice").innerHTML,n=window.open("","_blank","top=0,left=0,height=100%,width=auto"),n.document.open(),n.document.write(`\n          <html>\n            <head>\n              <title>Invoice</title>\n              <style>\n              body{\n                font-size: 13px;\n              }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n    \n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n              </style>\n            </head>\n        <body onload="window.print();window.close()"><div id="invoice">${t}</div> </body>\n          </html>`),n.document.close()}setRecipient(e){this.receiver_id=e.id,this.receiver_name=e.name,this.receiver_address=e.address,this.receiver_digital_address=e.digital_address,this.receiver_phone=e.phone}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-transfer-form"]],hostBindings:function(e,t){1&e&&l["\u0275\u0275listener"]("keydown",(function(e){return t.keyEvent(e)}),!1,l["\u0275\u0275resolveWindow"])},decls:137,vars:26,consts:[[1,"content"],[1,"container"],[1,"row","sticky_top"],[1,"col-5"],[1,"col-7"],[3,"timestamp","type","onAdd"],[1,"row"],[1,"col-12"],[1,"card","card-body","table-responsive","transfer_items"],[1,"table","table-striped","table-bordered","table-hover"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"card","card-body","sales-fixed-bottom"],[1,"col-4"],[3,"type","onFinish"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-success",3,"click"],["id","transfer_quantity_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-sm"],[1,"modal-content"],["ngNativeValidate","",3,"ngSubmit"],["n","ngForm"],[1,"modal-body"],[4,"ngIf"],["type","text","autocomplete","off","required","","id","transfer_new_quantity","name","new_quantity",3,"ngModel","keyup","ngModelChange"],["type","button",1,"btn","btn-sm","btn-info",3,"click"],["type","button",1,"btn","btn-sm","btn-warning",3,"click"],["type","date","required","","id","transfer_new_expiry","name","new_expiry",3,"ngModel","ngModelChange"],["type","text","required","","id","transfer_new_cost_price","name","new_cost_price",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","submit",1,"btn","btn-success"],["type","button",1,"btn","btn-danger",3,"click"],["id","invoice"],[1,"text-left"],[1,"text-right"],[1,"text-center"],[1,"table"],[4,"ngFor","ngForOf"],[3,"bc-value","bc-height","bc-font-size","bc-display-value"],[3,"ngClass"],["class","text-muted",4,"ngIf"],["title","custom quantity",1,"btn","btn-info","btn-sm",3,"click"],["title","increase quantity by 1",1,"btn","btn-info","btn-sm",3,"click"],["title","decrease quantity by 1",1,"btn","btn-info","btn-sm",3,"click"],["title","The quantity entered is more than the current stock","class","text-danger fa fa-exclamation-triangle",4,"ngIf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"fa","fa-remove"],[1,"text-muted"],["title","Item expired",1,"fa","fa-calendar","text-danger"],["title","The quantity entered is more than the current stock",1,"text-danger","fa","fa-exclamation-triangle"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"section",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"h5"),l["\u0275\u0275text"](5,"Transfer Items to another branch"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",4),l["\u0275\u0275elementStart"](7,"div"),l["\u0275\u0275elementStart"](8,"app-select-product",5),l["\u0275\u0275listener"]("onAdd",(function(e){return t.productSelected(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div",6),l["\u0275\u0275elementStart"](10,"div",7),l["\u0275\u0275elementStart"](11,"div",8),l["\u0275\u0275elementStart"](12,"table",9),l["\u0275\u0275elementStart"](13,"thead"),l["\u0275\u0275elementStart"](14,"tr"),l["\u0275\u0275elementStart"](15,"th"),l["\u0275\u0275text"](16,"Product"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"th"),l["\u0275\u0275text"](18,"Quantity"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"th"),l["\u0275\u0275text"](20,"Cost Price"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"th"),l["\u0275\u0275text"](22,"Selling Price"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"th"),l["\u0275\u0275text"](24,"Total"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"th"),l["\u0275\u0275text"](26,"On-hand"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](27,"th"),l["\u0275\u0275text"](28,"Expiry"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](29,"th"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](30,"tbody"),l["\u0275\u0275template"](31,b,27,12,"tr",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](32,"div",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](33,"div",11),l["\u0275\u0275elementStart"](34,"div",6),l["\u0275\u0275elementStart"](35,"div",12),l["\u0275\u0275elementStart"](36,"b"),l["\u0275\u0275text"](37),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](38,"div",12),l["\u0275\u0275elementStart"](39,"b"),l["\u0275\u0275text"](40,"Recipient"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](41,"app-select-branch",13),l["\u0275\u0275listener"]("onFinish",(function(e){return t.setRecipient(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](42,"div",12),l["\u0275\u0275elementStart"](43,"button",14),l["\u0275\u0275listener"]("click",(function(){return t.cancel()})),l["\u0275\u0275text"](44,"Cancel"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](45,"button",15),l["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),l["\u0275\u0275text"](46,"Save"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](47,"div",16),l["\u0275\u0275elementStart"](48,"div",17),l["\u0275\u0275elementStart"](49,"div",18),l["\u0275\u0275elementStart"](50,"form",19,20),l["\u0275\u0275listener"]("ngSubmit",(function(){return t.acceptItem()})),l["\u0275\u0275elementStart"](52,"div",21),l["\u0275\u0275template"](53,g,2,1,"h5",22),l["\u0275\u0275elementStart"](54,"div"),l["\u0275\u0275elementStart"](55,"label"),l["\u0275\u0275text"](56,"Quantity"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](57,"br"),l["\u0275\u0275elementStart"](58,"input",23),l["\u0275\u0275listener"]("keyup",(function(e){return t.keyChangeQuantity(e)}))("ngModelChange",(function(e){return t.new_quantity=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](59,"br"),l["\u0275\u0275elementStart"](60,"button",24),l["\u0275\u0275listener"]("click",(function(){return t.increment()})),l["\u0275\u0275text"](61,"+1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](62,"button",25),l["\u0275\u0275listener"]("click",(function(){return t.decrement()})),l["\u0275\u0275text"](63,"-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](64,"div"),l["\u0275\u0275elementStart"](65,"label"),l["\u0275\u0275text"](66,"Expiry Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](67,"input",26),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_expiry=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](68,"div"),l["\u0275\u0275elementStart"](69,"label"),l["\u0275\u0275text"](70,"Cost Price"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](71,"input",27),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_cost_price=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](72,"div",28),l["\u0275\u0275elementStart"](73,"button",29),l["\u0275\u0275text"](74,"Accept"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](75,"button",30),l["\u0275\u0275listener"]("click",(function(){return t.rejectItem()})),l["\u0275\u0275text"](76,"Cancel"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](77,"div",31),l["\u0275\u0275elementStart"](78,"div"),l["\u0275\u0275elementStart"](79,"div"),l["\u0275\u0275elementStart"](80,"span",32),l["\u0275\u0275text"](81),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](82,"span",33),l["\u0275\u0275text"](83),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](84,"br"),l["\u0275\u0275elementStart"](85,"div",34),l["\u0275\u0275elementStart"](86,"h4"),l["\u0275\u0275text"](87,"TRANSFER INVOICE "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](88,"b"),l["\u0275\u0275text"](89,"FROM:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](90,"b"),l["\u0275\u0275text"](91),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](92,"br"),l["\u0275\u0275text"](93),l["\u0275\u0275element"](94,"br"),l["\u0275\u0275text"](95),l["\u0275\u0275element"](96,"br"),l["\u0275\u0275text"](97),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](98,"div",34),l["\u0275\u0275elementStart"](99,"b"),l["\u0275\u0275text"](100,"TO:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](101,"b"),l["\u0275\u0275text"](102),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](103,"br"),l["\u0275\u0275text"](104),l["\u0275\u0275element"](105,"br"),l["\u0275\u0275text"](106),l["\u0275\u0275element"](107,"br"),l["\u0275\u0275text"](108),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](109,"br"),l["\u0275\u0275elementStart"](110,"b"),l["\u0275\u0275text"](111,"By:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](112),l["\u0275\u0275element"](113,"hr"),l["\u0275\u0275elementStart"](114,"table",35),l["\u0275\u0275elementStart"](115,"thead"),l["\u0275\u0275elementStart"](116,"tr"),l["\u0275\u0275elementStart"](117,"th"),l["\u0275\u0275text"](118,"Item Name"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](119,"th"),l["\u0275\u0275text"](120,"Qty"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](121,"th"),l["\u0275\u0275text"](122,"Price"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](123,"th"),l["\u0275\u0275text"](124,"Ext. Price"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](125,"tbody"),l["\u0275\u0275template"](126,v,9,4,"tr",36),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](127,"br"),l["\u0275\u0275element"](128,"br"),l["\u0275\u0275elementStart"](129,"div"),l["\u0275\u0275elementStart"](130,"b",33),l["\u0275\u0275text"](131),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](132,"br"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](133,"div",34),l["\u0275\u0275element"](134,"ngx-barcode",37),l["\u0275\u0275element"](135,"br"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](136,"br"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("timestamp",t.ts)("type","search"),l["\u0275\u0275advance"](23),l["\u0275\u0275property"]("ngForOf",t.items),l["\u0275\u0275advance"](6),l["\u0275\u0275textInterpolate1"]("Total: GHC ",t.sale_total.toFixed(2)," "),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("type","select"),l["\u0275\u0275advance"](12),l["\u0275\u0275property"]("ngIf",null!=t.new_item),l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("ngModel",t.new_quantity),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("ngModel",t.new_expiry),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngModel",t.new_cost_price),l["\u0275\u0275advance"](10),l["\u0275\u0275textInterpolate1"]("",t.time," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("#",t.selected_code,""),l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"]("",t.company_name," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",t.company_address," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.digital_address," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",t.company_phone," "),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate1"]("",t.receiver_name," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",t.receiver_address," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" DIGITAL ADDRESS ",t.receiver_digital_address," "),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",t.receiver_phone," "),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",t.cashier," "),l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("ngForOf",t.receipt_items),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate1"]("TOTAL: ",t.receipt_total.toFixed(2)," "),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("bc-value",t.selected_code)("bc-height",35)("bc-font-size",13)("bc-display-value",!0))},directives:[p.a,i.i,u.a,h.f,h.g,i.j,h.b,h.l,h.e,h.h,f.a,i.h],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.f.forChild(S)],r.f]}),e})();var E=n("nEHF"),I=n("wDHj"),k=n("nBlB");let q=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,w,E.a,I.a,k.a]]}),e})()},wDHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("ofXK"),r=n("nEHF"),a=n("6QD7"),l=n("fXoL");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,r.a,a.b],a.b]}),e})()}}]);