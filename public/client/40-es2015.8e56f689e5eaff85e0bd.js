(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+Aqu":function(e,t,i){"use strict";i.r(t),i.d(t,"StockTakingModule",(function(){return x}));var n=i("ofXK"),a=i("tyNb"),s=i("DH7j");function o(e){return!Object(s.a)(e)&&e-parseFloat(e)+1>=0}var r=i("fXoL"),l=i("c92J"),d=i("bgkY"),c=i("1VJT"),u=i("eJvr"),h=i("ccyI"),m=i("nVU4");const p=["productsGrid"];function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"span",34),r["\u0275\u0275text"](1,"\xa0 (Use the 'Save & Continue' button at the bottom to save your progress) "),r["\u0275\u0275elementEnd"]())}const g=function(e,t){return{"text-danger":e,"text-success":t}},b=[{path:"",component:(()=>{class e{constructor(e,t,i,n,a,s){this.dbService=e,this.socket=t,this.notify=i,this.localforage=n,this.authService=a,this.router=s,this.columnDefs=[{headerName:"#",valueGetter:"node.rowIndex + 1",pinned:"left",width:60},{headerName:"Product",field:"name",sortable:!0,filter:!0,autoHeight:!0,cellClass:"bordered",minWidth:200,pinned:"left"},{headerName:"Cost Price",field:"cost_price",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Selling Price",field:"price",editable:!0,width:100,type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Size",field:"size",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Category",field:"category",sortable:!0,editable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Shelf",field:"shelf",sortable:!0,editable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Unit",field:"unit",sortable:!0,editable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Closest Expiry",field:"expiry",type:"dateColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Current Stock",field:"stock",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Quantity Counted",field:"quantity",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Qtt. Expired",field:"quantity_expired",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Qtt. Damaged",field:"quantity_damaged",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Difference",field:"difference",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Price",field:"total",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Cost",field:"total_cost",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Expired",field:"total_expired",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Damaged",field:"total_damaged",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100}],this.items=[],this.held_items=[],this.new_item=null,this.selectedHeldItem=null,this.new_quantity="",this.loss_total=0,this.excess_total=0,this.receipt_items=[],this.invoice_items=[],this.receipt_total=0,this.time="",this.digital_address="",this.ts="",this.key_state="none",this.autoSave=!1,this.has_changed=!1,this.total_expired=0,this.total_damaged=0,-1==this.authService.current_user.permissions.indexOf("Adjust Stock")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.company_address=a.current_user.company_address,this.company_phone=a.current_user.company_phone,this.company_name=a.current_user.company_name,this.cashier=a.current_user.display_name,this.digital_address=a.current_user.digital_address,this.dbService.setTitle("New Sales"),this.defaultColDef={resizable:!0},this.rowClassRules={warning:"data.difference < 0",success:"data.difference > 0"}}keyEvent(e){}ngOnInit(){this.getCode(),this.getProducts()}continueSession(){this.objects=this.old_data,this.getTotal(),$("#old_data_modal").modal("hide")}getCode(){this.notify.showLoading(),this.dbService.getData("product/getLatestSession",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Server error. Please try again."):"0"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.code=e.data.code,this.status=e.data.status)},e=>{this.notify.noConnectionNotification()})}startNewSession(){$("#old_data_modal").modal("hide"),this.localforage.removeItem(this.dbService.STOCK_TAKING_SESSION),this.localforage.removeItem(this.dbService.STOCK_TAKING_TIME),this.localforage.removeItem(this.dbService.STOCK_TAKING_CODE),this.getCode()}onGridReady(e){this.gridApi=e.api}onCellValueChanged(e){const t=e.node.id,i=e.oldValue,n=e.column.getId(),a=e.newValue;console.log(e);const s=this.objects[t];switch(n){case"quantity":o(a)?(null!=s.stock&&null!=s.stock||(s.stock="0"),s.difference=parseFloat(s.quantity)-parseFloat(s.stock),this.getTotal()):(alert("only numbers are accepted for the quantity"),s.quantity=i);break;case"cost_price":o(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),s.cost_price=i);break;case"quantity_damaged":o(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),s.quantity_damaged=i);break;case"quantity_expired":o(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),s.quantity_expired=i);break;case"price":o(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),s.price=i)}this.has_changed=!0,this.autoSave&&this.saveLocal(),e.node.setData(s)}getProducts(){this.notify.showLoading(),this.field="All",this.search_by="fields",this.is_loading=!0,this.dbService.getData("product/getList",this.authService.current_user).subscribe(e=>{this.notify.showLoading(),this.dbService.getData("product/getPendingStockAdjustmentsByCode?code="+this.code,this.authService.current_user).subscribe(t=>{let i=t.data;for(var n=0;n<i.length;n++)for(var a=i[n],s=0;s<e.data.length;s++){var o=e.data[s];if(o.id==a.product){o.price=a.current_price,o.size=a.size,o.expiry=a.expiry,o.unit=a.unit,o.shelf=a.shelf,o.category=a.category,o.quantity=a.quantity_counted,o.cost_price=a.cost_price,o.difference=o.quantity-o.stock,o.quantity_damaged=a.quantity_damaged,o.quantity_expired=a.quantity_expired;break}}this.objects=e.data,this.total=e.total,this.is_loading=!1,this.getTotal(),this.notify.hideLoading()},e=>{this.notify.hideLoading(),this.notify.failNotification("Unable to get data")})},e=>{this.is_loading=!1,this.notify.noConnectionNotification()})}getData(){this.notify.showLoading(),this.dbService.getData("product/getPendingStockAdjustmentsByCode?code="+this.code,this.authService.current_user).subscribe(e=>{let t=e.data;for(var i=0;i<t.length;i++){for(var n=t[i],a=0;a<this.objects.length;a++){var s=this.objects[a];if(s.id==n.id){s.price=n.current_price,s.size=n.size,s.expiry=n.expiry,s.category=n.category,s.quantity=n.quantity_counted,s.cost_price=n.cost_price;break}}this.refreshTable(),this.getTotal()}this.notify.hideLoading()},e=>{this.notify.hideLoading(),this.notify.failNotification("Unable to get data")})}refreshTable(){this.gridApi.refreshCells({force:!0,suppressFlash:!0}),console.log("refresh")}getOfflineProducts(){this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe(e=>{this.objects=e,this.total=e.length,this.is_loading=!1},e=>{this.getProducts()})}getCategoryProducts(){this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getProducts():(this.is_loading=!0,this.dbService.getDataWithQuery("product/getList",this.authService.current_user,"category="+this.category).subscribe(e=>{this.objects=e.data,this.is_loading=!1},e=>{this.is_loading=!1}))}getOfflineCategoryProducts(){this.is_loading=!0,this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getOfflineProducts():(this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe(e=>{const t=this;this.objects=e.filter(e=>e.category.toLowerCase()===t.category.toLowerCase()),this.is_loading=!1},e=>{this.is_loading=!1,this.getCategoryProducts()}))}getTotal(){let e=0,t=0,i=0,n=0;this.objects.map(a=>{if(o(a.quantity)){const i=(a.quantity-parseFloat(a.stock))*a.price,n=o(a.cost_price)?(a.quantity-parseFloat(a.stock))*a.cost_price:0;a.total=i,a.total_cost=n,a.quantity<parseFloat(a.stock)?e+=i:t+=i}if(o(a.quantity_damaged)){const e=null==a.quantity_damaged||null==a.quantity_damaged?0:a.quantity_damaged*a.price;a.total_damaged=e,i+=e}if(o(a.quantity_expired)){const e=null==a.quantity_expired||null==a.quantity_expired?0:a.quantity_expired*a.price;a.total_expired=e,n+=e}}),this.loss_total=e,this.excess_total=t,this.total_damaged=i,this.total_expired=n}saveLocal(e){this.localforage.setItem(this.dbService.STOCK_TAKING_SESSION,this.objects).subscribe(e=>{this.localforage.setItem(this.dbService.STOCK_TAKING_CODE,this.code),this.localforage.setItem(this.dbService.STOCK_TAKING_TIME,this.dbService.getToday("timestamp")),this.notify.successNotification("Session saved successfully")},e=>{this.notify.failNotification("Unable to save the session. Please try again")}),this.has_changed=!1,e&&$("#cancel_modal").modal("hide")}startSave(){$("#finish_stock_modal").modal({keyboard:!1,backdrop:"static"})}saveToPending(){this.notify.showLoading();const e=[],t=[],i=[],n=[],a=[];let s=[];const o=[],r=[],l=[],d=[],c=[];let u=[],h=[];this.ts=this.dbService.getToday("timestamp_string");for(let p=0;p<this.objects.length;p++){const m=this.objects[p];null!=m.quantity&&null!=m.quantity&&(e.push(m.id),t.push(m.price),i.push(m.quantity),n.push(m.name),a.push(m.stock),s.push(null==m.cost_price||null==m.cost_price?0:m.cost_price),o.push(m.size),r.push(m.category),l.push(m.expiry),d.push(m.quantity_damaged),c.push(m.quantity_expired),h.push(m.unit),u.push(m.shelf))}const m=new FormData;m.append("products",e.join("||")),m.append("prices",t.join("||")),m.append("cost_prices",s.join("||")),m.append("quantities_counted",i.join("||")),m.append("quantities_expected",a.join("||")),m.append("code",this.code),m.append("product_names",n.join("||")),m.append("expiries",l.join("||")),m.append("shelves",u.join("||")),m.append("units",h.join("||")),m.append("sizes",o.join("||")),m.append("categories",r.join("||")),m.append("quantities_damaged",d.join("||")),m.append("quantities_expired",c.join("||")),m.append("created_by",this.authService.current_user.id),m.append("display_name",this.authService.current_user.display_name),m.append("date",this.dbService.getToday()),m.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(m,"product/saveStockAdjustmentToPending",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Server error. Please try again."):"0"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.hideLoading(),this.has_changed=!1,this.notify.successNotification("Stock adjustment saved successfully"),this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Stock Adjustment conducted",event:"stock_adjustment"}))},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification(),console.log(e)})}saveItems(){this.notify.showLoading();const e=[],t=[],i=[],n=[],a=[];let s=[];const o=[],r=[],l=[],d=[],c=[];let u=[],h=[];this.ts=this.dbService.getToday("timestamp_string");for(let p=0;p<this.objects.length;p++){const m=this.objects[p];null!=m.quantity&&null!=m.quantity&&(e.push(m.id),t.push(m.price),i.push(m.quantity),n.push(m.name),a.push(m.stock),s.push(null==m.cost_price||null==m.cost_price?0:m.cost_price),o.push(m.size),r.push(m.category),l.push(m.expiry),d.push(m.quantity_damaged),c.push(m.quantity_expired),h.push(m.unit),u.push(m.shelf))}const m=new FormData;m.append("products",e.join("||")),m.append("prices",t.join("||")),m.append("cost_prices",s.join("||")),m.append("quantities_counted",i.join("||")),m.append("quantities_expected",a.join("||")),m.append("code",this.code),m.append("product_names",n.join("||")),m.append("expiries",l.join("||")),m.append("sizes",o.join("||")),m.append("categories",r.join("||")),m.append("quantities_damaged",d.join("||")),m.append("quantities_expired",c.join("||")),m.append("created_by",this.authService.current_user.id),m.append("display_name",this.authService.current_user.display_name),m.append("date",this.dbService.getToday()),m.append("created_on",this.dbService.getToday("timestamp")),m.append("shelves",u.join("||")),m.append("units",h.join("||")),this.dbService.postData(m,"product/saveStockAdjustment",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"-1"===e.status?this.notify.failNotification("Server error. Please try again."):"0"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):($("#finish_stock_modal").modal("hide"),this.notify.hideLoading(),this.has_changed=!1,this.notify.successNotification("Stock adjustment saved successfully"),this.localforage.removeItem(this.dbService.STOCK_TAKING_SESSION),this.localforage.removeItem(this.dbService.STOCK_TAKING_TIME),this.localforage.removeItem(this.dbService.STOCK_TAKING_CODE),this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Stock Adjustment conducted",event:"stock_adjustment"}),this.router.navigate(["/stockSessionReport/"+this.code]))},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification(),console.log(e)})}startCancel(){$("#cancel_modal").modal({keyboard:!1,backdrop:"static"})}cancel(){$("#cancel_modal").modal("hide"),this.localforage.removeItem(this.dbService.STOCK_TAKING_SESSION),this.localforage.removeItem(this.dbService.STOCK_TAKING_TIME),this.localforage.removeItem(this.dbService.STOCK_TAKING_CODE),this.objects=[],this.has_changed=!1,this.getTotal(),this.getProducts()}goBack(){window.history.back()}print(){let e,t,i=0;e="",this.receipt_items.map(e=>{i+=e.quantity*e.product.price}),this.receipt_total=i,e=document.getElementById("invoice").innerHTML,t=window.open("","_blank","top=0,left=0,height=100%,width=auto"),t.document.open(),t.document.write(`\n          <html>\n            <head>\n              <title>Invoice</title>\n              <style>\n              body{\n                font-size: 13px;\n              }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n              </style>\n            </head>\n        <body onload="window.print();window.close()"><div id="invoice">${e}</div> </body>\n          </html>`),t.document.close()}ngOnDestroy(){this.has_changed&&this.saveLocal()}setZeroes(){if(!window.confirm("Set all uncounted items to zero?"))return!1;this.notify.showLoading();for(var e=0;e<this.objects.length;e++){let t=this.objects[e];o(this.objects[e].quantity)||(this.objects[e].quantity=0,null!=t.stock&&null!=t.stock||(t.stock="0"),t.difference=parseFloat(t.quantity)-parseFloat(t.stock))}this.getTotal(),this.notify.hideLoading()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](u.a),r["\u0275\u0275directiveInject"](h.a),r["\u0275\u0275directiveInject"](a.d))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-stock-taking"]],viewQuery:function(e,t){var i;1&e&&r["\u0275\u0275viewQuery"](p,!0),2&e&&r["\u0275\u0275queryRefresh"](i=r["\u0275\u0275loadQuery"]())&&(t.agGrid=i.first)},hostBindings:function(e,t){1&e&&r["\u0275\u0275listener"]("keydown",(function(e){return t.keyEvent(e)}),!1,r["\u0275\u0275resolveWindow"])},decls:90,vars:18,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-md-3"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-refresh"],[1,"col-md-9"],["class","text-primary",4,"ngIf"],[1,""],["rowSelection","single",1,"ag-theme-balham",2,"width","100%","height","calc(100vh - 260px)","font-family","Muli","font-size","15px",3,"rowData","columnDefs","rowClassRules","defaultColDef","suppressMenuHide","gridReady","cellValueChanged"],["productsGrid",""],[1,"card","card-body","sales-fixed-bottom"],[1,"text-danger"],[1,"text-success"],[3,"ngClass"],[1,"btn","btn-sm","btn-warning",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"btn","btn-sm","btn-info",3,"click"],[1,"btn","btn-sm","btn-success",3,"click"],["id","old_data_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["id","cancel_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],["type","button","data-dismiss","modal",1,"btn","btn-warning"],["type","button",1,"btn","btn-danger",3,"click"],["id","finish_stock_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"btn","btn-success",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],[1,"text-primary"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h4"),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"b"),r["\u0275\u0275text"](7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"button",4),r["\u0275\u0275listener"]("click",(function(){return t.getProducts()})),r["\u0275\u0275element"](9,"i",5),r["\u0275\u0275text"](10," Refresh"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",6),r["\u0275\u0275elementStart"](12,"em"),r["\u0275\u0275elementStart"](13,"b"),r["\u0275\u0275text"](14,"Double-click"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](15," the quantity cell of an item to set the counted quantity for it. Press Enter after you have entered the value. You may do same for the selling price, cost price, expiry, size, and category columns."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](16,"br"),r["\u0275\u0275template"](17,f,2,0,"span",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"div",8),r["\u0275\u0275elementStart"](19,"ag-grid-angular",9,10),r["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("cellValueChanged",(function(e){return t.onCellValueChanged(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",11),r["\u0275\u0275elementStart"](22,"div"),r["\u0275\u0275elementStart"](23,"span"),r["\u0275\u0275elementStart"](24,"b",12),r["\u0275\u0275text"](25),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](26," ["),r["\u0275\u0275elementStart"](27,"b",12),r["\u0275\u0275text"](28),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](29,", "),r["\u0275\u0275elementStart"](30,"b",12),r["\u0275\u0275text"](31),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](32,"]| "),r["\u0275\u0275elementStart"](33,"b",13),r["\u0275\u0275text"](34),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](35," | "),r["\u0275\u0275elementStart"](36,"b",14),r["\u0275\u0275text"](37),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](38,"br"),r["\u0275\u0275elementStart"](39,"button",15),r["\u0275\u0275listener"]("click",(function(){return t.setZeroes()})),r["\u0275\u0275text"](40,"Set uncounted to zero"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"button",16),r["\u0275\u0275listener"]("click",(function(){return t.startCancel()})),r["\u0275\u0275text"](42,"Cancel/Reset"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"button",17),r["\u0275\u0275listener"]("click",(function(){return t.saveToPending()})),r["\u0275\u0275text"](44,"Save & Continue"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](45,"button",18),r["\u0275\u0275listener"]("click",(function(){return t.startSave()})),r["\u0275\u0275text"](46,"Submit & Finish"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](47,"div",19),r["\u0275\u0275elementStart"](48,"div",20),r["\u0275\u0275elementStart"](49,"div",21),r["\u0275\u0275elementStart"](50,"div",22),r["\u0275\u0275elementStart"](51,"h5"),r["\u0275\u0275text"](52,"Previously saved session found"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](53,"div",23),r["\u0275\u0275text"](54),r["\u0275\u0275element"](55,"br"),r["\u0275\u0275elementStart"](56,"em"),r["\u0275\u0275text"](57,"If you choose to start a new session the previous data will be erased."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](58,"div",24),r["\u0275\u0275elementStart"](59,"button",25),r["\u0275\u0275listener"]("click",(function(){return t.continueSession()})),r["\u0275\u0275text"](60,"Continue with previous session"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](61,"button",26),r["\u0275\u0275listener"]("click",(function(){return t.startNewSession()})),r["\u0275\u0275text"](62,"Cancel old session and start a new one"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](63,"div",27),r["\u0275\u0275elementStart"](64,"div",28),r["\u0275\u0275elementStart"](65,"div",21),r["\u0275\u0275elementStart"](66,"div",22),r["\u0275\u0275elementStart"](67,"h5"),r["\u0275\u0275text"](68,"Cancel current session"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](69,"div",23),r["\u0275\u0275text"](70," Sure you want to cancel this session? All progress will be lost. If you want to continue later, you can save your progress instead. "),r["\u0275\u0275element"](71,"br"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](72,"div",24),r["\u0275\u0275elementStart"](73,"button",29),r["\u0275\u0275text"](74,"Close this"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](75,"button",25),r["\u0275\u0275listener"]("click",(function(){return t.saveLocal()})),r["\u0275\u0275text"](76,"Save & Continue later"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](77,"button",30),r["\u0275\u0275listener"]("click",(function(){return t.cancel()})),r["\u0275\u0275text"](78,"Cancel this session"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](79,"div",31),r["\u0275\u0275elementStart"](80,"div",20),r["\u0275\u0275elementStart"](81,"div",21),r["\u0275\u0275elementStart"](82,"div",22),r["\u0275\u0275elementStart"](83,"h5"),r["\u0275\u0275text"](84,"Sure you are done?"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](85,"div",23),r["\u0275\u0275elementStart"](86,"button",32),r["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),r["\u0275\u0275text"](87,"Yes, submit and finish this session"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](88,"button",33),r["\u0275\u0275text"](89,"No, go back"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"]("Stock Taking Session #",t.code,""),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("Status: ",t.status,""),r["\u0275\u0275advance"](10),r["\u0275\u0275property"]("ngIf",!t.autoSave),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("rowData",t.objects)("columnDefs",t.columnDefs)("rowClassRules",t.rowClassRules)("defaultColDef",t.defaultColDef)("suppressMenuHide",!0),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"]("Loss: GHC ",t.loss_total.toFixed(2)," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"]("Damaged: GHC ",t.total_damaged.toFixed(2)," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"]("Expired: GHC ",t.total_expired.toFixed(2)," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"]("Excess: GHC ",t.excess_total.toFixed(2)," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction2"](15,g,t.excess_total+t.loss_total<0,t.loss_total+t.excess_total>0)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" Overall Total: GHC ",(t.excess_total+t.loss_total).toFixed(2),""),r["\u0275\u0275advance"](17),r["\u0275\u0275textInterpolate1"](" A session saved on ",t.old_time," was found. Would you like to continue with it or start a new session? "))},directives:[n.j,m.AgGridAngular,n.h],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(b)],a.f]}),e})();var _=i("nEHF"),v=i("rNAZ"),S=i("nBlB");let x=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.b,y,_.a,v.a,S.a]]}),e})()},nBlB:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("ofXK"),a=i("nEHF"),s=i("fXoL");let o=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.b,a.a]]}),e})()},rNAZ:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("ofXK"),a=i("nEHF"),s=i("6QD7"),o=i("fXoL");let r=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.b,a.a,s.b],s.b]}),e})()}}]);