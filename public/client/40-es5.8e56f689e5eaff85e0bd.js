function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+Aqu":function(e,t,n){"use strict";n.r(t),n.d(t,"StockTakingModule",(function(){return w}));var i=n("ofXK"),a=n("tyNb"),o=n("DH7j");function r(e){return!Object(o.a)(e)&&e-parseFloat(e)+1>=0}var s=n("fXoL"),l=n("c92J"),d=n("bgkY"),c=n("1VJT"),u=n("eJvr"),h=n("ccyI"),m=n("nVU4"),p=["productsGrid"];function f(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"span",34),s["\u0275\u0275text"](1,"\xa0 (Use the 'Save & Continue' button at the bottom to save your progress) "),s["\u0275\u0275elementEnd"]())}var g,y,b,v=function(e,t){return{"text-danger":e,"text-success":t}},_=[{path:"",component:(g=function(){function e(t,n,i,a,o,r){_classCallCheck(this,e),this.dbService=t,this.socket=n,this.notify=i,this.localforage=a,this.authService=o,this.router=r,this.columnDefs=[{headerName:"#",valueGetter:"node.rowIndex + 1",pinned:"left",width:60},{headerName:"Product",field:"name",sortable:!0,filter:!0,autoHeight:!0,cellClass:"bordered",minWidth:200,pinned:"left"},{headerName:"Cost Price",field:"cost_price",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Selling Price",field:"price",editable:!0,width:100,type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Size",field:"size",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Category",field:"category",sortable:!0,editable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Shelf",field:"shelf",sortable:!0,editable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Unit",field:"unit",sortable:!0,editable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Closest Expiry",field:"expiry",type:"dateColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Current Stock",field:"stock",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Quantity Counted",field:"quantity",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Qtt. Expired",field:"quantity_expired",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Qtt. Damaged",field:"quantity_damaged",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered",width:100},{headerName:"Difference",field:"difference",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Price",field:"total",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Cost",field:"total_cost",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Expired",field:"total_expired",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100},{headerName:"Total Damaged",field:"total_damaged",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered",width:100}],this.items=[],this.held_items=[],this.new_item=null,this.selectedHeldItem=null,this.new_quantity="",this.loss_total=0,this.excess_total=0,this.receipt_items=[],this.invoice_items=[],this.receipt_total=0,this.time="",this.digital_address="",this.ts="",this.key_state="none",this.autoSave=!1,this.has_changed=!1,this.total_expired=0,this.total_damaged=0,-1==this.authService.current_user.permissions.indexOf("Adjust Stock")&&(this.notify.failNotification("You are not permitted to view that page"),this.goBack()),this.company_address=o.current_user.company_address,this.company_phone=o.current_user.company_phone,this.company_name=o.current_user.company_name,this.cashier=o.current_user.display_name,this.digital_address=o.current_user.digital_address,this.dbService.setTitle("New Sales"),this.defaultColDef={resizable:!0},this.rowClassRules={warning:"data.difference < 0",success:"data.difference > 0"}}return _createClass(e,[{key:"keyEvent",value:function(e){}},{key:"ngOnInit",value:function(){this.getCode(),this.getProducts()}},{key:"continueSession",value:function(){this.objects=this.old_data,this.getTotal(),$("#old_data_modal").modal("hide")}},{key:"getCode",value:function(){var e=this;this.notify.showLoading(),this.dbService.getData("product/getLatestSession",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again."):"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.code=t.data.code,e.status=t.data.status)}),(function(t){e.notify.noConnectionNotification()}))}},{key:"startNewSession",value:function(){$("#old_data_modal").modal("hide"),this.localforage.removeItem(this.dbService.STOCK_TAKING_SESSION),this.localforage.removeItem(this.dbService.STOCK_TAKING_TIME),this.localforage.removeItem(this.dbService.STOCK_TAKING_CODE),this.getCode()}},{key:"onGridReady",value:function(e){this.gridApi=e.api}},{key:"onCellValueChanged",value:function(e){var t=e.node.id,n=e.oldValue,i=e.column.getId(),a=e.newValue;console.log(e);var o=this.objects[t];switch(i){case"quantity":r(a)?(null!=o.stock&&null!=o.stock||(o.stock="0"),o.difference=parseFloat(o.quantity)-parseFloat(o.stock),this.getTotal()):(alert("only numbers are accepted for the quantity"),o.quantity=n);break;case"cost_price":r(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),o.cost_price=n);break;case"quantity_damaged":r(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),o.quantity_damaged=n);break;case"quantity_expired":r(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),o.quantity_expired=n);break;case"price":r(a)?this.getTotal():(alert("only numbers are accepted for the prices and quantities"),o.price=n)}this.has_changed=!0,this.autoSave&&this.saveLocal(),e.node.setData(o)}},{key:"getProducts",value:function(){var e=this;this.notify.showLoading(),this.field="All",this.search_by="fields",this.is_loading=!0,this.dbService.getData("product/getList",this.authService.current_user).subscribe((function(t){e.notify.showLoading(),e.dbService.getData("product/getPendingStockAdjustmentsByCode?code="+e.code,e.authService.current_user).subscribe((function(n){for(var i=n.data,a=0;a<i.length;a++)for(var o=i[a],r=0;r<t.data.length;r++){var s=t.data[r];if(s.id==o.product){s.price=o.current_price,s.size=o.size,s.expiry=o.expiry,s.unit=o.unit,s.shelf=o.shelf,s.category=o.category,s.quantity=o.quantity_counted,s.cost_price=o.cost_price,s.difference=s.quantity-s.stock,s.quantity_damaged=o.quantity_damaged,s.quantity_expired=o.quantity_expired;break}}e.objects=t.data,e.total=t.total,e.is_loading=!1,e.getTotal(),e.notify.hideLoading()}),(function(t){e.notify.hideLoading(),e.notify.failNotification("Unable to get data")}))}),(function(t){e.is_loading=!1,e.notify.noConnectionNotification()}))}},{key:"getData",value:function(){var e=this;this.notify.showLoading(),this.dbService.getData("product/getPendingStockAdjustmentsByCode?code="+this.code,this.authService.current_user).subscribe((function(t){for(var n=t.data,i=0;i<n.length;i++){for(var a=n[i],o=0;o<e.objects.length;o++){var r=e.objects[o];if(r.id==a.id){r.price=a.current_price,r.size=a.size,r.expiry=a.expiry,r.category=a.category,r.quantity=a.quantity_counted,r.cost_price=a.cost_price;break}}e.refreshTable(),e.getTotal()}e.notify.hideLoading()}),(function(t){e.notify.hideLoading(),e.notify.failNotification("Unable to get data")}))}},{key:"refreshTable",value:function(){this.gridApi.refreshCells({force:!0,suppressFlash:!0}),console.log("refresh")}},{key:"getOfflineProducts",value:function(){var e=this;this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){e.objects=t,e.total=t.length,e.is_loading=!1}),(function(t){e.getProducts()}))}},{key:"getCategoryProducts",value:function(){var e=this;this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getProducts():(this.is_loading=!0,this.dbService.getDataWithQuery("product/getList",this.authService.current_user,"category="+this.category).subscribe((function(t){e.objects=t.data,e.is_loading=!1}),(function(t){e.is_loading=!1})))}},{key:"getOfflineCategoryProducts",value:function(){var e=this;this.is_loading=!0,this.title="Category: "+this.category,this.search_by="fields","all"==this.category?this.getOfflineProducts():(this.is_loading=!0,this.localforage.getItem(this.dbService.PRODUCT_LIST_KEY).subscribe((function(t){var n=e;e.objects=t.filter((function(e){return e.category.toLowerCase()===n.category.toLowerCase()})),e.is_loading=!1}),(function(t){e.is_loading=!1,e.getCategoryProducts()})))}},{key:"getTotal",value:function(){var e=0,t=0,n=0,i=0;this.objects.map((function(a){if(r(a.quantity)){var o=(a.quantity-parseFloat(a.stock))*a.price,s=r(a.cost_price)?(a.quantity-parseFloat(a.stock))*a.cost_price:0;a.total=o,a.total_cost=s,a.quantity<parseFloat(a.stock)?e+=o:t+=o}if(r(a.quantity_damaged)){var l=null==a.quantity_damaged||null==a.quantity_damaged?0:a.quantity_damaged*a.price;a.total_damaged=l,n+=l}if(r(a.quantity_expired)){var d=null==a.quantity_expired||null==a.quantity_expired?0:a.quantity_expired*a.price;a.total_expired=d,i+=d}})),this.loss_total=e,this.excess_total=t,this.total_damaged=n,this.total_expired=i}},{key:"saveLocal",value:function(e){var t=this;this.localforage.setItem(this.dbService.STOCK_TAKING_SESSION,this.objects).subscribe((function(e){t.localforage.setItem(t.dbService.STOCK_TAKING_CODE,t.code),t.localforage.setItem(t.dbService.STOCK_TAKING_TIME,t.dbService.getToday("timestamp")),t.notify.successNotification("Session saved successfully")}),(function(e){t.notify.failNotification("Unable to save the session. Please try again")})),this.has_changed=!1,e&&$("#cancel_modal").modal("hide")}},{key:"startSave",value:function(){$("#finish_stock_modal").modal({keyboard:!1,backdrop:"static"})}},{key:"saveToPending",value:function(){var e=this;this.notify.showLoading();var t=[],n=[],i=[],a=[],o=[],r=[],s=[],l=[],d=[],c=[],u=[],h=[],m=[];this.ts=this.dbService.getToday("timestamp_string");for(var p=0;p<this.objects.length;p++){var f=this.objects[p];null!=f.quantity&&null!=f.quantity&&(t.push(f.id),n.push(f.price),i.push(f.quantity),a.push(f.name),o.push(f.stock),r.push(null==f.cost_price||null==f.cost_price?0:f.cost_price),s.push(f.size),l.push(f.category),d.push(f.expiry),c.push(f.quantity_damaged),u.push(f.quantity_expired),m.push(f.unit),h.push(f.shelf))}var g=new FormData;g.append("products",t.join("||")),g.append("prices",n.join("||")),g.append("cost_prices",r.join("||")),g.append("quantities_counted",i.join("||")),g.append("quantities_expected",o.join("||")),g.append("code",this.code),g.append("product_names",a.join("||")),g.append("expiries",d.join("||")),g.append("shelves",h.join("||")),g.append("units",m.join("||")),g.append("sizes",s.join("||")),g.append("categories",l.join("||")),g.append("quantities_damaged",c.join("||")),g.append("quantities_expired",u.join("||")),g.append("created_by",this.authService.current_user.id),g.append("display_name",this.authService.current_user.display_name),g.append("date",this.dbService.getToday()),g.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(g,"product/saveStockAdjustmentToPending",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again."):"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.notify.hideLoading(),e.has_changed=!1,e.notify.successNotification("Stock adjustment saved successfully"),e.socket.sendEvent({company_id:e.authService.current_user.company_id,parent_company_id:e.authService.current_user.parent_company.id,message:"Stock Adjustment conducted",event:"stock_adjustment"}))}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification(),console.log(t)}))}},{key:"saveItems",value:function(){var e=this;this.notify.showLoading();var t=[],n=[],i=[],a=[],o=[],r=[],s=[],l=[],d=[],c=[],u=[],h=[],m=[];this.ts=this.dbService.getToday("timestamp_string");for(var p=0;p<this.objects.length;p++){var f=this.objects[p];null!=f.quantity&&null!=f.quantity&&(t.push(f.id),n.push(f.price),i.push(f.quantity),a.push(f.name),o.push(f.stock),r.push(null==f.cost_price||null==f.cost_price?0:f.cost_price),s.push(f.size),l.push(f.category),d.push(f.expiry),c.push(f.quantity_damaged),u.push(f.quantity_expired),m.push(f.unit),h.push(f.shelf))}var g=new FormData;g.append("products",t.join("||")),g.append("prices",n.join("||")),g.append("cost_prices",r.join("||")),g.append("quantities_counted",i.join("||")),g.append("quantities_expected",o.join("||")),g.append("code",this.code),g.append("product_names",a.join("||")),g.append("expiries",d.join("||")),g.append("sizes",s.join("||")),g.append("categories",l.join("||")),g.append("quantities_damaged",c.join("||")),g.append("quantities_expired",u.join("||")),g.append("created_by",this.authService.current_user.id),g.append("display_name",this.authService.current_user.display_name),g.append("date",this.dbService.getToday()),g.append("created_on",this.dbService.getToday("timestamp")),g.append("shelves",h.join("||")),g.append("units",m.join("||")),this.dbService.postData(g,"product/saveStockAdjustment",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again."):"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):($("#finish_stock_modal").modal("hide"),e.notify.hideLoading(),e.has_changed=!1,e.notify.successNotification("Stock adjustment saved successfully"),e.localforage.removeItem(e.dbService.STOCK_TAKING_SESSION),e.localforage.removeItem(e.dbService.STOCK_TAKING_TIME),e.localforage.removeItem(e.dbService.STOCK_TAKING_CODE),e.socket.sendEvent({company_id:e.authService.current_user.company_id,parent_company_id:e.authService.current_user.parent_company.id,message:"Stock Adjustment conducted",event:"stock_adjustment"}),e.router.navigate(["/stockSessionReport/"+e.code]))}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification(),console.log(t)}))}},{key:"startCancel",value:function(){$("#cancel_modal").modal({keyboard:!1,backdrop:"static"})}},{key:"cancel",value:function(){$("#cancel_modal").modal("hide"),this.localforage.removeItem(this.dbService.STOCK_TAKING_SESSION),this.localforage.removeItem(this.dbService.STOCK_TAKING_TIME),this.localforage.removeItem(this.dbService.STOCK_TAKING_CODE),this.objects=[],this.has_changed=!1,this.getTotal(),this.getProducts()}},{key:"goBack",value:function(){window.history.back()}},{key:"print",value:function(){var e,t,n=0;this.receipt_items.map((function(e){n+=e.quantity*e.product.price})),this.receipt_total=n,e=document.getElementById("invoice").innerHTML,(t=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),t.document.write('\n          <html>\n            <head>\n              <title>Invoice</title>\n              <style>\n              body{\n                font-size: 13px;\n              }\n              #invoice { page-break-after: always; }\n    #invoice:last-child { page-break-after: avoid; }\n\n\n    table{\n        width: 100%;\n        border: 1px solid #e9ecef;\n        font-size: 13px !important;\n    }\n\n    .small-margin{\n      margin-bottom: 10px;\n    }\n\n    .table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n           .center{\n             text-align:center\n           }\n           .text-left{text-align:left!important}.text-right{text-align:right!important; float:right}\n           .text-center{text-align:center!important}\n           @media (min-width:576px){.text-sm-left{text-align:left!important}\n           .text-sm-right{text-align:right!important}\n           .text-sm-center{text-align:center!important}}\n           @media (min-width:768px){.text-md-left{text-align:left!important}\n           .text-md-right{text-align:right!important}\n           .text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}\n\n           .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n              </style>\n            </head>\n        <body onload="window.print();window.close()"><div id="invoice">'.concat(e,"</div> </body>\n          </html>")),t.document.close()}},{key:"ngOnDestroy",value:function(){this.has_changed&&this.saveLocal()}},{key:"setZeroes",value:function(){if(!window.confirm("Set all uncounted items to zero?"))return!1;this.notify.showLoading();for(var e=0;e<this.objects.length;e++){var t=this.objects[e];r(this.objects[e].quantity)||(this.objects[e].quantity=0,null!=t.stock&&null!=t.stock||(t.stock="0"),t.difference=parseFloat(t.quantity)-parseFloat(t.stock))}this.getTotal(),this.notify.hideLoading()}}]),e}(),g.\u0275fac=function(e){return new(e||g)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](a.d))},g.\u0275cmp=s["\u0275\u0275defineComponent"]({type:g,selectors:[["app-stock-taking"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](p,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},hostBindings:function(e,t){1&e&&s["\u0275\u0275listener"]("keydown",(function(e){return t.keyEvent(e)}),!1,s["\u0275\u0275resolveWindow"])},decls:90,vars:18,consts:[[1,"content"],[1,"container"],[1,"row"],[1,"col-md-3"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-refresh"],[1,"col-md-9"],["class","text-primary",4,"ngIf"],[1,""],["rowSelection","single",1,"ag-theme-balham",2,"width","100%","height","calc(100vh - 260px)","font-family","Muli","font-size","15px",3,"rowData","columnDefs","rowClassRules","defaultColDef","suppressMenuHide","gridReady","cellValueChanged"],["productsGrid",""],[1,"card","card-body","sales-fixed-bottom"],[1,"text-danger"],[1,"text-success"],[3,"ngClass"],[1,"btn","btn-sm","btn-warning",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"btn","btn-sm","btn-info",3,"click"],[1,"btn","btn-sm","btn-success",3,"click"],["id","old_data_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["id","cancel_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],["type","button","data-dismiss","modal",1,"btn","btn-warning"],["type","button",1,"btn","btn-danger",3,"click"],["id","finish_stock_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"btn","btn-success",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],[1,"text-primary"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"section",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"div",3),s["\u0275\u0275elementStart"](4,"h4"),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"b"),s["\u0275\u0275text"](7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"button",4),s["\u0275\u0275listener"]("click",(function(){return t.getProducts()})),s["\u0275\u0275element"](9,"i",5),s["\u0275\u0275text"](10," Refresh"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"div",6),s["\u0275\u0275elementStart"](12,"em"),s["\u0275\u0275elementStart"](13,"b"),s["\u0275\u0275text"](14,"Double-click"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](15," the quantity cell of an item to set the counted quantity for it. Press Enter after you have entered the value. You may do same for the selling price, cost price, expiry, size, and category columns."),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](16,"br"),s["\u0275\u0275template"](17,f,2,0,"span",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"div",8),s["\u0275\u0275elementStart"](19,"ag-grid-angular",9,10),s["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("cellValueChanged",(function(e){return t.onCellValueChanged(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",11),s["\u0275\u0275elementStart"](22,"div"),s["\u0275\u0275elementStart"](23,"span"),s["\u0275\u0275elementStart"](24,"b",12),s["\u0275\u0275text"](25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](26," ["),s["\u0275\u0275elementStart"](27,"b",12),s["\u0275\u0275text"](28),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](29,", "),s["\u0275\u0275elementStart"](30,"b",12),s["\u0275\u0275text"](31),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](32,"]| "),s["\u0275\u0275elementStart"](33,"b",13),s["\u0275\u0275text"](34),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](35," | "),s["\u0275\u0275elementStart"](36,"b",14),s["\u0275\u0275text"](37),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](38,"br"),s["\u0275\u0275elementStart"](39,"button",15),s["\u0275\u0275listener"]("click",(function(){return t.setZeroes()})),s["\u0275\u0275text"](40,"Set uncounted to zero"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](41,"button",16),s["\u0275\u0275listener"]("click",(function(){return t.startCancel()})),s["\u0275\u0275text"](42,"Cancel/Reset"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](43,"button",17),s["\u0275\u0275listener"]("click",(function(){return t.saveToPending()})),s["\u0275\u0275text"](44,"Save & Continue"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](45,"button",18),s["\u0275\u0275listener"]("click",(function(){return t.startSave()})),s["\u0275\u0275text"](46,"Submit & Finish"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](47,"div",19),s["\u0275\u0275elementStart"](48,"div",20),s["\u0275\u0275elementStart"](49,"div",21),s["\u0275\u0275elementStart"](50,"div",22),s["\u0275\u0275elementStart"](51,"h5"),s["\u0275\u0275text"](52,"Previously saved session found"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](53,"div",23),s["\u0275\u0275text"](54),s["\u0275\u0275element"](55,"br"),s["\u0275\u0275elementStart"](56,"em"),s["\u0275\u0275text"](57,"If you choose to start a new session the previous data will be erased."),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](58,"div",24),s["\u0275\u0275elementStart"](59,"button",25),s["\u0275\u0275listener"]("click",(function(){return t.continueSession()})),s["\u0275\u0275text"](60,"Continue with previous session"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](61,"button",26),s["\u0275\u0275listener"]("click",(function(){return t.startNewSession()})),s["\u0275\u0275text"](62,"Cancel old session and start a new one"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](63,"div",27),s["\u0275\u0275elementStart"](64,"div",28),s["\u0275\u0275elementStart"](65,"div",21),s["\u0275\u0275elementStart"](66,"div",22),s["\u0275\u0275elementStart"](67,"h5"),s["\u0275\u0275text"](68,"Cancel current session"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](69,"div",23),s["\u0275\u0275text"](70," Sure you want to cancel this session? All progress will be lost. If you want to continue later, you can save your progress instead. "),s["\u0275\u0275element"](71,"br"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](72,"div",24),s["\u0275\u0275elementStart"](73,"button",29),s["\u0275\u0275text"](74,"Close this"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](75,"button",25),s["\u0275\u0275listener"]("click",(function(){return t.saveLocal()})),s["\u0275\u0275text"](76,"Save & Continue later"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](77,"button",30),s["\u0275\u0275listener"]("click",(function(){return t.cancel()})),s["\u0275\u0275text"](78,"Cancel this session"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](79,"div",31),s["\u0275\u0275elementStart"](80,"div",20),s["\u0275\u0275elementStart"](81,"div",21),s["\u0275\u0275elementStart"](82,"div",22),s["\u0275\u0275elementStart"](83,"h5"),s["\u0275\u0275text"](84,"Sure you are done?"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](85,"div",23),s["\u0275\u0275elementStart"](86,"button",32),s["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),s["\u0275\u0275text"](87,"Yes, submit and finish this session"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](88,"button",33),s["\u0275\u0275text"](89,"No, go back"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("Stock Taking Session #",t.code,""),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("Status: ",t.status,""),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("ngIf",!t.autoSave),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("rowData",t.objects)("columnDefs",t.columnDefs)("rowClassRules",t.rowClassRules)("defaultColDef",t.defaultColDef)("suppressMenuHide",!0),s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate1"]("Loss: GHC ",t.loss_total.toFixed(2)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Damaged: GHC ",t.total_damaged.toFixed(2)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Expired: GHC ",t.total_expired.toFixed(2)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Excess: GHC ",t.excess_total.toFixed(2)," "),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngClass",s["\u0275\u0275pureFunction2"](15,v,t.excess_total+t.loss_total<0,t.loss_total+t.excess_total>0)),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" Overall Total: GHC ",(t.excess_total+t.loss_total).toFixed(2),""),s["\u0275\u0275advance"](17),s["\u0275\u0275textInterpolate1"](" A session saved on ",t.old_time," was found. Would you like to continue with it or start a new session? "))},directives:[i.j,m.AgGridAngular,i.h],styles:[""]}),g)}],S=((y=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[a.f.forChild(_)],a.f]}),y),x=n("nEHF"),C=n("rNAZ"),k=n("nBlB"),w=((b=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[i.b,S,x.a,C.a,k.a]]}),b)},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("ofXK"),a=n("nEHF"),o=n("fXoL"),r=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a]]}),e}()},rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("ofXK"),a=n("nEHF"),o=n("6QD7"),r=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a,o.b],o.b]}),e}()}}]);