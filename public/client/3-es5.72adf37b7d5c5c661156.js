function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{g1vN:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var i=n("fXoL"),a=n("tyNb"),r=n("ofXK");function o(e,t){1&e&&i["\u0275\u0275element"](0,"i",6)}function l(e,t){1&e&&i["\u0275\u0275element"](0,"i",7)}function s(e,t){1&e&&i["\u0275\u0275element"](0,"i",8)}function d(e,t){1&e&&i["\u0275\u0275element"](0,"i",9)}function c(e,t){1&e&&i["\u0275\u0275element"](0,"i",10)}var u,m=((u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"agInit",value:function(e){this.params=e,this.id=null!=e.node.data.product_id&&null!=e.node.data.product_id?this.params.node.data.product_id:this.params.node.data.id,this.label=this.params.node.data.name||null,this.expired=this.params.node.data.expired,this.near_min=this.params.node.data.near_min,this.near_max=this.params.node.data.near_max,this.out_of_stock=this.params.node.data.out_of_stock,this.deleted="0"==this.params.node.data.status}},{key:"ngOnDestroy",value:function(){}},{key:"refresh",value:function(){return!1}},{key:"onClick",value:function(e){this.params.onClick instanceof Function&&this.params.onClick({event:e,rowData:this.params.node.data})}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=i["\u0275\u0275defineComponent"]({type:u,selectors:[["app-link-name"]],decls:8,vars:7,consts:[[3,"routerLink"],["title","Item expired","class","fa fa-calendar text-danger",4,"ngIf"],["title","Stock nearing max stock level","class","fa fa-angle-double-up text-warning",4,"ngIf"],["title","Stock nearning minimum stock level","class","fa fa-angle-double-down text-danger",4,"ngIf"],["title","Out of stock","class","fa fa-exclamation-triangle text-danger",4,"ngIf"],["title","Product Locked","class","fa fa-trash text-danger",4,"ngIf"],["title","Item expired",1,"fa","fa-calendar","text-danger"],["title","Stock nearing max stock level",1,"fa","fa-angle-double-up","text-warning"],["title","Stock nearning minimum stock level",1,"fa","fa-angle-double-down","text-danger"],["title","Out of stock",1,"fa","fa-exclamation-triangle","text-danger"],["title","Product Locked",1,"fa","fa-trash","text-danger"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"a",0),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](2,"br"),i["\u0275\u0275template"](3,o,1,0,"i",1),i["\u0275\u0275template"](4,l,1,0,"i",2),i["\u0275\u0275template"](5,s,1,0,"i",3),i["\u0275\u0275template"](6,d,1,0,"i",4),i["\u0275\u0275template"](7,c,1,0,"i",5)),2&e&&(i["\u0275\u0275propertyInterpolate1"]("routerLink","/product/",t.id,""),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",t.label,"\n"),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.expired),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_max),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_min),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.out_of_stock),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.deleted))},directives:[a.e,r.j],styles:[""]}),u),f=n("c92J"),p=n("bgkY"),h=n("1VJT"),v=n("ccyI"),g=n("n49D"),y=n("nVU4"),b=n("3Pt+"),_=n("TFay"),S=n("jr2M"),x=n("N0Bx"),k=["productsGrid"];function w(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",37),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().editSelected()})),i["\u0275\u0275text"](1,"Edit"),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",a.selected_items.length<1)}}function E(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",38),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().adjustStockSelected()})),i["\u0275\u0275text"](1,"Adjust Stock"),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",a.selected_items.length<1)}}function C(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",39),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().delete()})),i["\u0275\u0275text"](1,"Delete"),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",a.selected_items.length<1)}}function N(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"app-product-form",40),i["\u0275\u0275listener"]("onFinish",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().productEdited(e)})),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("id",a.edit_product.id)}}function j(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"input",43),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"](2).mass_value=e})),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("ngModel",a.mass_value)}}function I(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"app-select-product-category",41),i["\u0275\u0275listener"]("onFinish",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().categorySelected(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](2,j,1,1,"input",42),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf","other"==a.category_selected)}}function M(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",44),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().mass_value=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.mass_value)}}function D(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",48),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",n),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](n)}}function L(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",45),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().mass_value=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"datalist",46),i["\u0275\u0275template"](3,D,2,2,"option",47),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.mass_value),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",a.units)}}function P(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"app-select-functional-group",49),i["\u0275\u0275listener"]("onFinish",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().groupSelected(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("type","datalist"))}function V(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",50),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),i["\u0275\u0275nextContext"]().mass_value=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var a=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",a.mass_value)}}var F,q=((F=function(){function e(t,n,a,r,o){_classCallCheck(this,e),this.dbService=t,this.socket=n,this.router=a,this.notify=r,this.authService=o,this.refresh=new i.EventEmitter,this.rowDataClicked1={},this.columnDefs=[{headerName:"#",valueGetter:"node.rowIndex + 1",checkboxSelection:!0,autoHeight:!0},{headerName:"Product",field:"name",cellRenderer:"LinkNameComponent",cellRendererParams:{onClick:this.onBtnClick1.bind(this),label:"Click 1",dat:23},sortable:!0,filter:!0},{headerName:"Price",field:"price",sortable:!0,filter:!0},{headerName:"Closest Expiry",field:"expiry",sortable:!0,filter:!0},{headerName:"Current Stock",field:"stock",sortable:!0,filter:!0},{headerName:"Current Stock Value",field:"stock_value",sortable:!0,filter:!0},{headerName:"Unit",field:"unit",sortable:!0,filter:!0},{headerName:"Category",field:"category",sortable:!0,filter:!0},{headerName:"Shelf",field:"shelf",sortable:!0,filter:!0},{headerName:"Functional Group",field:"description",sortable:!0,filter:!0},{headerName:"Min Stock",field:"min_stock",sortable:!0,filter:!0},{headerName:"Max Stock",field:"max_stock",sortable:!0,filter:!0},{headerName:"Barcode",field:"barcode",sortable:!0,filter:!0},{headerName:"Average Per Month",field:"average_monthly",sortable:!0,filter:!0}],this.rowData=[],this.selected_items=[],this.objects=[],this.can_view=!0,this.can_edit=!0,this.can_create=!0,this.can_delete=!0,this.edit_product=null,this.can_alter_stock=!0,this.units=[],-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.can_edit=!1,this.can_delete=!1),-1==this.authService.current_user.permissions.indexOf("Adjust Stock")&&(this.can_alter_stock=!1),this.frameworkComponents={LinkNameComponent:m},this.defaultColDef={resizable:!0}}return _createClass(e,[{key:"ngOnInit",value:function(){this.units=this.dbService.units}},{key:"onGridReady",value:function(e){this.gridApi=e.api}},{key:"onSelectionChanged",value:function(e){var t=this.gridApi.getSelectedRows();this.selected_items=t}},{key:"onBtnClick1",value:function(e){this.rowDataClicked1=e.rowData}},{key:"view",value:function(e){localStorage.setItem("current_product",JSON.stringify(e)),this.router.navigate(["/product/"+e.name])}},{key:"editSelected",value:function(){try{1==this.selected_items.length?this.edit(this.selected_items[0]):this.massEdit()}catch(e){}}},{key:"edit",value:function(e){this.edit_product=e,this.edit_index=this.objects.indexOf(e),console.log(this.edit_index),this.router.navigate(["/edit_product/"+e.id])}},{key:"massEdit",value:function(){$("#mass_edit_product_modal").modal("show")}},{key:"adjustStockSelected",value:function(){$("#edit_stock_modal").modal("show")}},{key:"productEdited",value:function(e){$("#edit_product_modal").modal("hide"),console.log(e),this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Product Edited",event:"product_edited"}),this.edit_product=null,this.edit_index=null}},{key:"saveMassEdit",value:function(){var e=this;if($("#mass_edit_product_modal").modal("hide"),window.confirm("Sure you want to edit the selected products?")){var t=new FormData;this.notify.showLoading();var n=[];this.selected_items.map((function(e){n.push(e.id)})),t.append("id",n.toString()),t.append("field",this.mass_field),t.append("value",this.mass_value),this.dbService.postData(t,"product/massEdit",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":e.notify.failNotification("Server error. Contact Admin");break;default:e.socket.sendEvent({company_id:e.authService.current_user.company_id,parent_company_id:e.authService.current_user.parent_company.id,message:"Product Edited",event:"product_edited"}),e.notify.showNotification("Products edited successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}},{key:"delete",value:function(){var e=this;if(window.confirm("Sure you want to delete the selected products?")){var t=[];this.selected_items.map((function(e){t.push(e.id)}));var n=new FormData;this.notify.showLoading(),n.append("id",t.toString()),this.dbService.postData(n,"product/delete",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":$("#erase_modal").modal("show");break;default:e.refresh.emit("yes"),e.notify.showNotification("Products deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}}},{key:"erase",value:function(){var e=this;$("#erase_modal").modal("hide");var t=[];this.selected_items.map((function(e){t.push(e.id)}));var n=new FormData;this.notify.showLoading(),n.append("id",t.toString()),this.dbService.postData(n,"product/erase",this.authService.current_user).subscribe((function(t){switch(e.notify.hideLoading(),t.status){case"0":e.notify.failNotification("Error: You are not logged in");break;case"-9":e.notify.failNotification("Error: You are not permitted");break;case"-1":alert("Server error! Please try again or contact admin");break;default:e.refresh.emit("yes"),e.notify.showNotification("Products deleted successfully","success",3e3)}}),(function(t){e.notify.noConnectionNotification()}))}},{key:"editStock",value:function(e){var t=this,n=window.prompt("Enter the quantity to set the stock to:");if(null==n||null==n)return this.notify.failNotification("You must enter a quantity"),!1;if(""==n.trim())return this.notify.failNotification("You must enter a quantity"),!1;if(window.confirm("Sure you want to reset this product's stock?")){var i=new FormData;this.notify.showLoading(),i.append("product",e.id),i.append("quantity_counted",n),i.append("quantity_expected",e.stock),i.append("date",this.dbService.getToday()),i.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(i,"product/saveSingleStockAdjustment",this.authService.current_user).subscribe((function(i){switch(t.notify.hideLoading(),i.status){case"0":t.notify.failNotification("Error: You are not logged in");break;case"-9":t.notify.failNotification("Error: You are not permitted");break;case"-1":t.notify.failNotification("Server error. Contact Admin");break;default:e.stock=n,t.notify.showNotification("Product stock edited successfully","success",3e3)}}),(function(e){t.notify.noConnectionNotification()}))}}},{key:"categorySelected",value:function(e){this.category_selected=e,"other"!=e&&(this.mass_value=e)}},{key:"groupSelected",value:function(e){this.mass_value=e}},{key:"saveMassStockEdit",value:function(){var e=this;$("#edit_stock_modal").modal("hide"),this.notify.showLoading();for(var t=[],n=[],i=[],a=[],r=[],o=[],l=[],s=[],d=[],c=[],u=[],m=(this.dbService.getToday("timestamp_string"),0);m<this.selected_items.length;m++){var f=this.selected_items[m];d.push(f.category),s.push(null==f.size||null==f.size?"n/a":f.size),l.push(f.expiry),t.push(f.id),n.push(f.price),i.push(f.stock),a.push(this.new_stock),r.push(f.name),u.push(f.unit),c.push(f.shelf),o.push(null==f.cost_price||null==f.cost_price?"0":f.cost_price)}var p=new FormData;p.append("prices",n.join("||")),p.append("cost_prices",o.join("||")),p.append("quantities_expected",i.join("||")),p.append("quantities_counted",a.join("||")),p.append("sizes",s.join("||")),p.append("expiries",l.join("||")),p.append("categories",d.join("||")),p.append("products",t.join("||")),p.append("units",u.join("||")),p.append("shelves",c.join("||")),p.append("code","n/a"),p.append("product_names",r.join("||")),p.append("created_by",this.authService.current_user.id),p.append("date",this.dbService.getToday()),p.append("created_on",this.dbService.getToday("timestamp")),p.append("display_name",this.authService.current_user.display_name),this.dbService.postData(p,"product/saveStockAdjustment",this.authService.current_user).subscribe((function(t){e.notify.hideLoading(),"0"===t.status?e.notify.failNotification("Unable to authenticate. Please login again"):"-1"===t.status?e.notify.showNotification("System error, try again.","fail",3e3):"-9"===t.status?e.notify.showNotification("You are not permitted to perform this action","fail",3e3):(e.notify.hideLoading(),e.notify.successNotification("Saved successfully"),e.refresh.emit("yes"))}),(function(t){e.notify.hideLoading(),e.notify.noConnectionNotification(),console.log(t)}))}}]),e}()).\u0275fac=function(e){return new(e||F)(i["\u0275\u0275directiveInject"](f.a),i["\u0275\u0275directiveInject"](p.a),i["\u0275\u0275directiveInject"](a.c),i["\u0275\u0275directiveInject"](h.a),i["\u0275\u0275directiveInject"](v.a))},F.\u0275cmp=i["\u0275\u0275defineComponent"]({type:F,selectors:[["app-product-list"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](k,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},inputs:{objects:"objects"},outputs:{refresh:"refresh"},decls:99,vars:19,consts:[[1,""],[3,"objects","filename"],["class"," btn btn-sm btn-primary",3,"disabled","click",4,"ngIf"],["class"," btn btn-sm btn-warning",3,"disabled","click",4,"ngIf"],["class"," btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","frameworkComponents","defaultColDef","gridReady","selectionChanged"],["productsGrid",""],["id","edit_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[3,"id","onFinish",4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm",3,"click"],["id","mass_edit_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],["ngValidate","",3,"submit"],["required","","name","mass_field","name","field",3,"ngModel","ngModelChange"],["value","category"],["value","price"],["value","expiry"],["value","shelf"],["value","min_stock"],["value","max_stock"],["value","unit"],["value","description"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["type","submit","value","Submit",1,"btn","btn-sm","btn-success"],["id","edit_stock_modal","tabindex","-1","role","dialog",1,"modal","fade"],["required","","type","text","name","new_stock",3,"ngModel","ngModelChange"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm"],["id","erase_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"modal-header","text-danger"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"btn","btn-sm","btn-primary",3,"disabled","click"],[1,"btn","btn-sm","btn-warning",3,"disabled","click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[3,"id","onFinish"],[3,"onFinish"],["class","form-control","required","","type","text","name","category",3,"ngModel","ngModelChange",4,"ngIf"],["required","","type","text","name","category",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","date","name","mass_value",3,"ngModel","ngModelChange"],["list","mass_units","required","","type","text","name","mass_value",3,"ngModel","ngModelChange"],["id","mass_units"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"type","onFinish"],["required","","type","text","name","mass_value",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275element"](1,"app-export-to-excel",1),i["\u0275\u0275template"](2,w,2,1,"button",2),i["\u0275\u0275template"](3,E,2,1,"button",3),i["\u0275\u0275template"](4,C,2,1,"button",4),i["\u0275\u0275elementStart"](5,"ag-grid-angular",5,6),i["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("selectionChanged",(function(e){return t.onSelectionChanged(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](7,"app-export-to-excel",1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",7),i["\u0275\u0275elementStart"](9,"div",8),i["\u0275\u0275elementStart"](10,"div",9),i["\u0275\u0275elementStart"](11,"div",10),i["\u0275\u0275elementStart"](12,"h5"),i["\u0275\u0275text"](13,"Edit Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"div",11),i["\u0275\u0275template"](15,N,1,1,"app-product-form",12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"div",13),i["\u0275\u0275elementStart"](17,"button",14),i["\u0275\u0275listener"]("click",(function(){return t.edit_product=null})),i["\u0275\u0275text"](18,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"div",15),i["\u0275\u0275elementStart"](20,"div",16),i["\u0275\u0275elementStart"](21,"div",9),i["\u0275\u0275elementStart"](22,"div",10),i["\u0275\u0275elementStart"](23,"h5"),i["\u0275\u0275text"](24,"Mass Edit Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](25,"br"),i["\u0275\u0275elementStart"](26,"em"),i["\u0275\u0275text"](27,"These new values will apply for all selected products if submitted"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",11),i["\u0275\u0275elementStart"](29,"form",17),i["\u0275\u0275listener"]("submit",(function(){return t.saveMassEdit()})),i["\u0275\u0275elementStart"](30,"label"),i["\u0275\u0275text"](31," Select a field to edit "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](32,"br"),i["\u0275\u0275elementStart"](33,"select",18),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.mass_field=e})),i["\u0275\u0275elementStart"](34,"option",19),i["\u0275\u0275text"](35,"Category"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"option",20),i["\u0275\u0275text"](37,"Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"option",21),i["\u0275\u0275text"](39,"Expiry Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](40,"option",22),i["\u0275\u0275text"](41,"Shelf/Location"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"option",23),i["\u0275\u0275text"](43,"Minimum Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"option",24),i["\u0275\u0275text"](45,"Maximum Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](46,"option",25),i["\u0275\u0275text"](47,"Unit"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](48,"option",26),i["\u0275\u0275text"](49,"Functional Group"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](50,"hr"),i["\u0275\u0275elementStart"](51,"label"),i["\u0275\u0275text"](52,"Enter the new value"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](53,"br"),i["\u0275\u0275elementStart"](54,"div",27),i["\u0275\u0275template"](55,I,3,1,"div",28),i["\u0275\u0275template"](56,M,2,1,"div",28),i["\u0275\u0275template"](57,L,4,2,"div",28),i["\u0275\u0275template"](58,P,2,1,"div",28),i["\u0275\u0275template"](59,V,2,1,"div",29),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](60,"hr"),i["\u0275\u0275element"](61,"input",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](62,"div",13),i["\u0275\u0275elementStart"](63,"button",14),i["\u0275\u0275listener"]("click",(function(){return t.edit_product=null})),i["\u0275\u0275text"](64,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](65,"div",31),i["\u0275\u0275elementStart"](66,"div",16),i["\u0275\u0275elementStart"](67,"div",9),i["\u0275\u0275elementStart"](68,"div",10),i["\u0275\u0275elementStart"](69,"h5"),i["\u0275\u0275text"](70,"Mass Edit Product Stock Levels"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](71,"br"),i["\u0275\u0275elementStart"](72,"em"),i["\u0275\u0275text"](73,"This new stock value will apply for all selected products if submitted"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](74,"div",11),i["\u0275\u0275elementStart"](75,"form",17),i["\u0275\u0275listener"]("submit",(function(){return t.saveMassStockEdit()})),i["\u0275\u0275elementStart"](76,"label"),i["\u0275\u0275text"](77," Enter the new stock: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](78,"br"),i["\u0275\u0275elementStart"](79,"input",32),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_stock=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](80,"hr"),i["\u0275\u0275element"](81,"input",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](82,"div",13),i["\u0275\u0275elementStart"](83,"button",33),i["\u0275\u0275text"](84,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](85,"div",34),i["\u0275\u0275elementStart"](86,"div",16),i["\u0275\u0275elementStart"](87,"div",9),i["\u0275\u0275elementStart"](88,"div",35),i["\u0275\u0275elementStart"](89,"h5"),i["\u0275\u0275text"](90,"Attention - Delete Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](91,"br"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](92,"div",11),i["\u0275\u0275text"](93," There are previous records associated with the selected product(s). Do you really want to delete them? The system will also delete every record of the selected items in sales, purchases, transfers and stock adjustment "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](94,"div",13),i["\u0275\u0275elementStart"](95,"button",33),i["\u0275\u0275text"](96,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](97,"button",36),i["\u0275\u0275listener"]("click",(function(){return t.erase()})),i["\u0275\u0275text"](98,"Continue to Delete"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("objects",t.objects)("filename","product list"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_edit),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_alter_stock),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_delete),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("rowData",t.objects)("columnDefs",t.columnDefs)("frameworkComponents",t.frameworkComponents)("defaultColDef",t.defaultColDef),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("objects",t.objects)("filename","product list"),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("ngIf",null!=t.edit_product),i["\u0275\u0275advance"](18),i["\u0275\u0275property"]("ngModel",t.mass_field),i["\u0275\u0275advance"](21),i["\u0275\u0275property"]("ngSwitch",t.mass_field),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","category"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","expiry"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","unit"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","description"),i["\u0275\u0275advance"](21),i["\u0275\u0275property"]("ngModel",t.new_stock))},directives:[g.a,r.j,y.AgGridAngular,b.o,b.f,b.g,b.m,b.l,b.e,b.h,b.i,b.n,r.k,r.l,r.m,b.b,_.a,S.a,r.i,x.a],styles:[""]}),F)},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e}()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),a=n("4AQi"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.excel=t,this.objects=[],this.filename="download"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"export",value:function(){this.excel.exportAsExcelFile(this.objects,this.filename)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"button",0),i["\u0275\u0275listener"]("click",(function(){return t.export()})),i["\u0275\u0275element"](1,"i",1),i["\u0275\u0275text"](2," Export To Excel"),i["\u0275\u0275elementEnd"]())},styles:[""]}),e}()}}]);