function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{mbIT:function(e,t,n){"use strict";t.isArray=Array.isArray||function(e){return e&&"number"==typeof e.length}},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ofXK"),i=n("nEHF"),r=n("fXoL"),o=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,i.a]]}),e}()},"p0+S":function(e,t,n){"use strict";var a=n("mbIT");t.isNumeric=function(e){return!a.isArray(e)&&e-parseFloat(e)+1>=0}},r3Tv:function(e,t,n){"use strict";n.r(t),n.d(t,"StockTakingUploadModule",(function(){return w}));var a=n("ofXK"),i=n("tyNb"),r=n("p0+S"),o=n("fXoL"),l=n("c92J"),s=n("1VJT"),d=n("ccyI"),c=n("3Pt+"),u=n("nVU4"),m=["productsGrid"];function f(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",11),o["\u0275\u0275elementStart"](1,"div",12),o["\u0275\u0275elementStart"](2,"div",13),o["\u0275\u0275elementStart"](3,"div",14),o["\u0275\u0275text"](4," Instructions: "),o["\u0275\u0275element"](5,"br"),o["\u0275\u0275text"](6," The first row must contain the following column headers. Please make sure all are in lowercase (small caps) and spelled exactly as seen here. The order does not matter. "),o["\u0275\u0275element"](7,"br"),o["\u0275\u0275elementStart"](8,"table",15),o["\u0275\u0275elementStart"](9,"thead"),o["\u0275\u0275elementStart"](10,"tr"),o["\u0275\u0275elementStart"](11,"th"),o["\u0275\u0275text"](12,"Column"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"th"),o["\u0275\u0275text"](14,"Description"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"tbody"),o["\u0275\u0275elementStart"](16,"tr"),o["\u0275\u0275elementStart"](17,"td"),o["\u0275\u0275text"](18,"id"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"td"),o["\u0275\u0275text"](20,"The product id, must be a number. If left blank, the item details will be added to the database as a new product"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"tr"),o["\u0275\u0275elementStart"](22,"td"),o["\u0275\u0275text"](23,"name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"td"),o["\u0275\u0275text"](25,"required. The product name. If left blank, the item will be skipped."),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](26,"tr"),o["\u0275\u0275elementStart"](27,"td"),o["\u0275\u0275text"](28,"category"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"td"),o["\u0275\u0275text"](30,"optional. E.g. antibiotics. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](31,"tr"),o["\u0275\u0275elementStart"](32,"td"),o["\u0275\u0275text"](33,"price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"td"),o["\u0275\u0275text"](35,"required. the selling price of the item. must be a number."),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](36,"tr"),o["\u0275\u0275elementStart"](37,"td"),o["\u0275\u0275text"](38,"cost_price"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"td"),o["\u0275\u0275text"](40,"optional. must be a number if provided."),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"tr"),o["\u0275\u0275elementStart"](42,"td"),o["\u0275\u0275text"](43,"expiry"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](44,"td"),o["\u0275\u0275text"](45,"optional. must be in the format YYYY-MM-DD , e.g. 2020-12-25."),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](46,"tr"),o["\u0275\u0275elementStart"](47,"td"),o["\u0275\u0275text"](48,"counted"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"td"),o["\u0275\u0275text"](50,"required. the actual quantity of the product counted"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](51,"tr"),o["\u0275\u0275elementStart"](52,"td"),o["\u0275\u0275text"](53,"expected"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](54,"td"),o["\u0275\u0275text"](55,"required. the quantity of the item that was expected. i.e. the current stock according to the inventory system. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](56,"tr"),o["\u0275\u0275elementStart"](57,"td"),o["\u0275\u0275text"](58,"unit"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](59,"td"),o["\u0275\u0275text"](60,"optional. whether per tablet or bottle, etc "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](61,"tr"),o["\u0275\u0275elementStart"](62,"td"),o["\u0275\u0275text"](63,"shelf"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](64,"td"),o["\u0275\u0275text"](65,"optional. the physical location of the item. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](66,"hr"),o["\u0275\u0275elementStart"](67,"b"),o["\u0275\u0275text"](68,"Click the button below to select the file. It will be automatically processed"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](69,"input",16),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().filename=e}))("change",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().uploadFile(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](69),o["\u0275\u0275property"]("ngModel",a.filename)}}var p=function(e,t){return{"text-danger":e,"text-success":t}};function h(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",17),o["\u0275\u0275elementStart"](1,"div",18),o["\u0275\u0275elementStart"](2,"div",13),o["\u0275\u0275elementStart"](3,"div",19),o["\u0275\u0275elementStart"](4,"h5"),o["\u0275\u0275text"](5,"Confirm the data. You may edit a cell by double-clicking it, typing in the new value, and pressing Enter."),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](6,"br"),o["\u0275\u0275elementStart"](7,"button",20),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().reset()})),o["\u0275\u0275element"](8,"i",21),o["\u0275\u0275text"](9," Cancel and upload another file"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](10),o["\u0275\u0275element"](11,"hr"),o["\u0275\u0275elementStart"](12,"div"),o["\u0275\u0275elementStart"](13,"span"),o["\u0275\u0275elementStart"](14,"b",22),o["\u0275\u0275text"](15),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](16," | "),o["\u0275\u0275elementStart"](17,"b",23),o["\u0275\u0275text"](18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](19," | "),o["\u0275\u0275elementStart"](20,"b",24),o["\u0275\u0275text"](21),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](22,"button",25),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().startSave()})),o["\u0275\u0275text"](23,"Submit & Finish"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"div",14),o["\u0275\u0275elementStart"](25,"ag-grid-angular",26,27),o["\u0275\u0275listener"]("gridReady",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().onGridReady(e)}))("cellValueChanged",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().onCellValueChanged(e)}))("selectionChanged",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().onSelectionChanged(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](10),o["\u0275\u0275textInterpolate1"](" #",a.code," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("Total Loss: GHC ",a.loss_total.toFixed(2)," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("Total Excess: GHC ",a.excess_total.toFixed(2)," "),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction2"](10,p,a.excess_total+a.loss_total<0,a.loss_total+a.excess_total>0)),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" Overall Total: GHC ",(a.excess_total+a.loss_total).toFixed(2),""),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("rowData",a.objects)("columnDefs",a.columnDefs)("rowClassRules",a.rowClassRules)("defaultColDef",a.defaultColDef)("suppressMenuHide",!0)}}var b,y,g,S=[{path:"",component:(b=function(){function e(t,n,a,i){_classCallCheck(this,e),this.dbService=t,this.notify=n,this.authService=a,this.router=i,this.objects=[],this.filename="",this.show_data=!1,this.columnDefs=[{headerName:"#",valueGetter:"node.rowIndex + 1"},{headerName:"Product",field:"name",sortable:!0,filter:!0,autoHeight:!0,cellClass:"bordered"},{headerName:"Cost Price",field:"cost_price",sortable:!0,filter:!0,editable:!0,cellClass:"bordered"},{headerName:"Selling Price",field:"price",editable:!0,type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Category",field:"category",sortable:!0,editable:!0,filter:!0,cellClass:"bordered"},{headerName:"Unit",field:"unit",sortable:!0,editable:!0,filter:!0,cellClass:"bordered"},{headerName:"Shelf",field:"shelf",sortable:!0,editable:!0,filter:!0,cellClass:"bordered"},{headerName:"Closest Expiry",field:"expiry",type:"dateColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered"},{headerName:"Current Stock",field:"stock",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Quantity Counted",field:"quantity",type:"numericColumn",sortable:!0,filter:!0,editable:!0,cellClass:"bordered"},{headerName:"Difference",field:"difference",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Total Cost",field:"total_cost",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Total Price",field:"total",type:"numericColumn",sortable:!0,filter:!0,cellClass:"bordered"}],this.loss_total=0,this.excess_total=0,this.defaultColDef={resizable:!0},this.rowClassRules={warning:"data.difference < 0",success:"data.difference > 0"}}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"reset",value:function(){this.filename="",this.show_data=!1}},{key:"onGridReady",value:function(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}},{key:"onSelectionChanged",value:function(e){var t=this.gridApi.getSelectedRows();this.selected_items=t[0]}},{key:"getCode",value:function(){var e=this;this.notify.showLoading(),this.dbService.getData("product/createStockAdjustmentSession",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again."):"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):e.code=t.data}),(function(t){e.notify.noConnectionNotification()}))}},{key:"uploadFile",value:function(e){var t=this,n=e.target.files;if(n.length>0){this.notify.showLoading();var a=n[0],i=new FormData;i.append("uploadfile",a),this.dbService.postData(i,"product/upload",this.authService.current_user).subscribe((function(e){t.notify.hideLoading(),"-1"===e.status?t.notify.failNotification("Server error. Please try again."):"0"===e.status?t.notify.failNotification("Unable to authenticate. Please login again"):"-9"===e.status?t.notify.showNotification("You are not permitted to perform this action","fail",3e3):(t.objects=e.data,t.show_data=!0,t.getTotal(),t.getCode())}),(function(e){t.notify.hideLoading(),t.notify.noConnectionNotification(),console.log(e)}))}}},{key:"onCellValueChanged",value:function(e){var t=e.node.id,n=e.oldValue,a=e.column.getId(),i=e.newValue;console.log(e);var o=this.objects[t];switch(a){case"quantity":Object(r.isNumeric)(i)?(null!=o.stock&&null!=o.stock||(o.stock="0"),o.difference=parseFloat(o.quantity)-parseFloat(o.stock),this.getTotal()):(alert("only numbers are accepted for the quantity"),o.quantity=n);break;case"cost_price":case"price":Object(r.isNumeric)(i)?this.getTotal():(alert("only numbers are accepted for the prices"),o.quantity=n)}e.node.setData(o)}},{key:"getTotal",value:function(){var e=0,t=0;this.objects.map((function(n){if(Object(r.isNumeric)(n.quantity)){var a=(n.quantity-parseFloat(n.stock))*n.price,i=Object(r.isNumeric)(n.cost_price)?(n.quantity-parseFloat(n.stock))*n.cost_price:0;n.total=a,n.total_cost=i,n.quantity<parseFloat(n.stock)?e+=a:t+=a}})),this.loss_total=e,this.excess_total=t}},{key:"startSave",value:function(){$("#finish_stock_modal").modal({keyboard:!1,backdrop:"static"})}},{key:"saveItems",value:function(){var e=this;this.notify.showLoading();for(var t=[],n=[],a=[],i=[],r=[],o=[],l=[],s=[],d=[],c=[],u=[],m=0;m<this.objects.length;m++){var f=this.objects[m];null!=f.quantity&&null!=f.quantity&&(t.push(f.id),n.push(f.price),a.push(f.quantity),i.push(f.name),r.push(f.stock),o.push(null==f.cost_price||null==f.cost_price?0:f.cost_price),l.push(f.size),s.push(f.category),d.push(f.expiry),c.push(f.unit),u.push(f.shelf))}var p=new FormData;p.append("products",t.join("||")),p.append("prices",n.join("||")),p.append("cost_prices",o.join("||")),p.append("quantities_counted",a.join("||")),p.append("quantities_expected",r.join("||")),p.append("code",this.code),p.append("product_names",i.join("||")),p.append("expiries",d.join("||")),p.append("sizes",l.join("||")),p.append("units",c.join("||")),p.append("damaged",""),p.append("expired",""),p.append("shelves",u.join("||")),p.append("categories",s.join("||")),p.append("created_by",this.authService.current_user.id),p.append("display_name",this.authService.current_user.display_name),p.append("date",this.dbService.getToday()),p.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(p,"product/saveStockAdjustment",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"-1"===t.status?e.notify.failNotification("Server error. Please try again."):"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):($("#finish_stock_modal").modal("hide"),e.notify.hideLoading(),e.notify.successNotification("Stock adjustment saved successfully"),e.router.navigate(["/stockSessionReport/"+e.code]))}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification(),console.log(t)}))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](i.d))},b.\u0275cmp=o["\u0275\u0275defineComponent"]({type:b,selectors:[["app-stock-taking-upload"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](m,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},decls:17,vars:2,consts:[[1,"content"],[1,"container"],["class","row  justify-content-center",4,"ngIf"],["class","row",4,"ngIf"],["id","finish_stock_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[1,"btn","btn-success",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],[1,"row","justify-content-center"],[1,"col-md-10"],[1,"card"],[1,"card-body"],[1,"table","table-bordered","table-striped"],["type","file","name","filename","placeholder","Select excel file","accept",".xlsx",3,"ngModel","ngModelChange","change"],[1,"row"],[1,"col-md-12"],[1,"card-header"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-refresh"],[1,"text-danger"],[1,"text-success"],[3,"ngClass"],[1,"btn","btn-sm","btn-success",3,"click"],["rowSelection","single",1,"ag-theme-balham",2,"width","100%","height","calc(400px)","font-family","Muli","font-size","15px",3,"rowData","columnDefs","rowClassRules","defaultColDef","suppressMenuHide","gridReady","cellValueChanged","selectionChanged"],["productsGrid",""]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"h4"),o["\u0275\u0275text"](3,"Upload Stock Taking Data From Excel File"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](4,f,70,1,"div",2),o["\u0275\u0275template"](5,h,27,13,"div",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",4),o["\u0275\u0275elementStart"](7,"div",5),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"h5"),o["\u0275\u0275text"](11,"Sure you are done?"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"div",8),o["\u0275\u0275elementStart"](13,"button",9),o["\u0275\u0275listener"]("click",(function(){return t.saveItems()})),o["\u0275\u0275text"](14,"Yes, submit and finish this session"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"button",10),o["\u0275\u0275text"](16,"No, go back"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",!t.show_data),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.show_data))},directives:[a.j,c.a,c.d,c.g,a.h,u.AgGridAngular],styles:[""]}),b)}],v=((y=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[i.f.forChild(S)],i.f]}),y),x=n("nEHF"),C=n("rNAZ"),E=n("nBlB"),w=((g=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[a.b,v,x.a,C.a,E.a]]}),g)},rNAZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("ofXK"),i=n("nEHF"),r=n("6QD7"),o=n("fXoL"),l=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,i.a,r.b],r.b]}),e}()}}]);