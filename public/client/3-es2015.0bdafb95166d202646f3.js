(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{g1vN:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var i=n("fXoL"),a=n("tyNb"),o=n("ofXK");function r(e,t){1&e&&i["\u0275\u0275element"](0,"i",6)}function s(e,t){1&e&&i["\u0275\u0275element"](0,"i",7)}function d(e,t){1&e&&i["\u0275\u0275element"](0,"i",8)}function l(e,t){1&e&&i["\u0275\u0275element"](0,"i",9)}function c(e,t){1&e&&i["\u0275\u0275element"](0,"i",10)}let m=(()=>{class e{agInit(e){this.params=e,this.id=null!=e.node.data.product_id&&null!=e.node.data.product_id?this.params.node.data.product_id:this.params.node.data.id,this.label=this.params.node.data.name||null,this.expired=this.params.node.data.expired,this.near_min=this.params.node.data.near_min,this.near_max=this.params.node.data.near_max,this.out_of_stock=this.params.node.data.out_of_stock,this.deleted="0"==this.params.node.data.status}ngOnDestroy(){}refresh(){return!1}onClick(e){this.params.onClick instanceof Function&&this.params.onClick({event:e,rowData:this.params.node.data})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-link-name"]],decls:8,vars:7,consts:[[3,"routerLink"],["title","Item expired","class","fa fa-calendar text-danger",4,"ngIf"],["title","Stock nearing max stock level","class","fa fa-angle-double-up text-warning",4,"ngIf"],["title","Stock nearning minimum stock level","class","fa fa-angle-double-down text-danger",4,"ngIf"],["title","Out of stock","class","fa fa-exclamation-triangle text-danger",4,"ngIf"],["title","Product Locked","class","fa fa-trash text-danger",4,"ngIf"],["title","Item expired",1,"fa","fa-calendar","text-danger"],["title","Stock nearing max stock level",1,"fa","fa-angle-double-up","text-warning"],["title","Stock nearning minimum stock level",1,"fa","fa-angle-double-down","text-danger"],["title","Out of stock",1,"fa","fa-exclamation-triangle","text-danger"],["title","Product Locked",1,"fa","fa-trash","text-danger"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"a",0),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](2,"br"),i["\u0275\u0275template"](3,r,1,0,"i",1),i["\u0275\u0275template"](4,s,1,0,"i",2),i["\u0275\u0275template"](5,d,1,0,"i",3),i["\u0275\u0275template"](6,l,1,0,"i",4),i["\u0275\u0275template"](7,c,1,0,"i",5)),2&e&&(i["\u0275\u0275propertyInterpolate1"]("routerLink","/product/",t.id,""),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",t.label,"\n"),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.expired),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_max),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_min),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.out_of_stock),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.deleted))},directives:[a.e,o.j],styles:[""]}),e})();var u=n("c92J"),p=n("bgkY"),f=n("1VJT"),h=n("ccyI"),g=n("n49D"),y=n("nVU4"),v=n("3Pt+"),b=n("TFay"),S=n("jr2M");const _=["productsGrid"];function x(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",35),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().editSelected()})),i["\u0275\u0275text"](1,"Edit"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function k(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",36),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().adjustStockSelected()})),i["\u0275\u0275text"](1,"Adjust Stock"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function w(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",37),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().delete()})),i["\u0275\u0275text"](1,"Delete"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function E(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"app-product-form",38),i["\u0275\u0275listener"]("onFinish",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().productEdited(t)})),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("id",e.edit_product.id)}}function C(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"input",41),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).mass_value=t})),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("ngModel",e.mass_value)}}function j(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"app-select-product-category",39),i["\u0275\u0275listener"]("onFinish",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().categorySelected(t)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](2,C,1,1,"input",40),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf","other"==e.category_selected)}}function N(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",42),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().mass_value=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.mass_value)}}function I(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",43),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().mass_value=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.mass_value)}}let M=(()=>{class e{constructor(e,t,n,a,o){this.dbService=e,this.socket=t,this.router=n,this.notify=a,this.authService=o,this.refresh=new i.EventEmitter,this.rowDataClicked1={},this.columnDefs=[{headerName:"#",valueGetter:"node.rowIndex + 1",checkboxSelection:!0,autoHeight:!0},{headerName:"Product",field:"name",cellRenderer:"LinkNameComponent",cellRendererParams:{onClick:this.onBtnClick1.bind(this),label:"Click 1",dat:23},sortable:!0,filter:!0},{headerName:"Price",field:"price",sortable:!0,filter:!0},{headerName:"Size",field:"size",sortable:!0,filter:!0},{headerName:"Category",field:"category",sortable:!0,filter:!0},{headerName:"Shelf",field:"shelf",sortable:!0,filter:!0},{headerName:"Closest Expiry",field:"expiry",sortable:!0,filter:!0},{headerName:"Current Stock",field:"stock",sortable:!0,filter:!0},{headerName:"Min Stock",field:"min_stock",sortable:!0,filter:!0},{headerName:"Max Stock",field:"max_stock",sortable:!0,filter:!0},{headerName:"Barcode",field:"barcode",sortable:!0,filter:!0}],this.rowData=[],this.selected_items=[],this.objects=[],this.can_view=!0,this.can_edit=!0,this.can_create=!0,this.can_delete=!0,this.edit_product=null,this.can_alter_stock=!0,-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.can_edit=!1,this.can_delete=!1),-1==this.authService.current_user.permissions.indexOf("Adjust Stock")&&(this.can_alter_stock=!1),this.frameworkComponents={LinkNameComponent:m},this.defaultColDef={resizable:!0}}ngOnInit(){}onGridReady(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}onSelectionChanged(e){var t=this.gridApi.getSelectedRows();this.selected_items=t}onBtnClick1(e){this.rowDataClicked1=e.rowData}view(e){localStorage.setItem("current_product",JSON.stringify(e)),this.router.navigate(["/product/"+e.name])}editSelected(){try{1==this.selected_items.length?this.edit(this.selected_items[0]):this.massEdit()}catch(e){}}edit(e){this.edit_product=e,this.edit_index=this.objects.indexOf(e),console.log(this.edit_index),this.router.navigate(["/edit_product/"+e.id])}massEdit(){$("#mass_edit_product_modal").modal("show")}adjustStockSelected(){$("#edit_stock_modal").modal("show")}productEdited(e){$("#edit_product_modal").modal("hide"),console.log(e),this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Product Edited",event:"product_edited"}),this.edit_product=null,this.edit_index=null}saveMassEdit(){if($("#mass_edit_product_modal").modal("hide"),window.confirm("Sure you want to edit the selected products?")){let t=new FormData;this.notify.showLoading();var e=[];this.selected_items.map(t=>{e.push(t.id)}),t.append("id",e.toString()),t.append("field",this.mass_field),t.append("value",this.mass_value),this.dbService.postData(t,"product/massEdit",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Product Edited",event:"product_edited"}),this.notify.showNotification("Products edited successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}delete(){if(window.confirm("Sure you want to delete the selected products?")){var e=[];this.selected_items.map(t=>{e.push(t.id)});let t=new FormData;this.notify.showLoading(),t.append("id",e.toString()),this.dbService.postData(t,"product/delete",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":$("#erase_modal").modal("show");break;default:this.refresh.emit("yes"),this.notify.showNotification("Products deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}erase(){$("#erase_modal").modal("hide");var e=[];this.selected_items.map(t=>{e.push(t.id)});let t=new FormData;this.notify.showLoading(),t.append("id",e.toString()),this.dbService.postData(t,"product/erase",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":alert("Server error! Please try again or contact admin");break;default:this.refresh.emit("yes"),this.notify.showNotification("Products deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}editStock(e){var t=window.prompt("Enter the quantity to set the stock to:");if(null==t||null==t)return this.notify.failNotification("You must enter a quantity"),!1;if(""==t.trim())return this.notify.failNotification("You must enter a quantity"),!1;if(window.confirm("Sure you want to reset this product's stock?")){let n=new FormData;this.notify.showLoading(),n.append("product",e.id),n.append("quantity_counted",t),n.append("quantity_expected",e.stock),n.append("date",this.dbService.getToday()),n.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(n,"product/saveSingleStockAdjustment",this.authService.current_user).subscribe(n=>{switch(this.notify.hideLoading(),n.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:e.stock=t,this.notify.showNotification("Product stock edited successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}categorySelected(e){this.category_selected=e,"other"!=e&&(this.mass_value=e)}saveMassStockEdit(){$("#edit_stock_modal").modal("hide"),this.notify.showLoading();for(var e=[],t=[],n=[],i=[],a=[],o=[],r=[],s=[],d=[],l=[],c=[],m=(this.dbService.getToday("timestamp_string"),0);m<this.selected_items.length;m++){var u=this.selected_items[m];d.push(u.category),s.push(null==u.size||null==u.size?"n/a":u.size),r.push(u.expiry),e.push(u.id),t.push(u.price),n.push(u.stock),i.push(this.new_stock),a.push(u.name),c.push(u.unit),l.push(u.shelf),o.push(null==u.cost_price||null==u.cost_price?"0":u.cost_price)}let p=new FormData;p.append("prices",t.join("||")),p.append("cost_prices",o.join("||")),p.append("quantities_expected",n.join("||")),p.append("quantities_counted",i.join("||")),p.append("sizes",s.join("||")),p.append("expiries",r.join("||")),p.append("categories",d.join("||")),p.append("products",e.join("||")),p.append("units",c.join("||")),p.append("shelves",l.join("||")),p.append("code","n/a"),p.append("product_names",a.join("||")),p.append("created_by",this.authService.current_user.id),p.append("date",this.dbService.getToday()),p.append("created_on",this.dbService.getToday("timestamp")),p.append("display_name",this.authService.current_user.display_name),this.dbService.postData(p,"product/saveStockAdjustment",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"0"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-1"===e.status?this.notify.showNotification("System error, try again.","fail",3e3):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.hideLoading(),this.notify.successNotification("Saved successfully"),this.refresh.emit("yes"))},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification(),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](u.a),i["\u0275\u0275directiveInject"](p.a),i["\u0275\u0275directiveInject"](a.d),i["\u0275\u0275directiveInject"](f.a),i["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-product-list"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](_,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},inputs:{objects:"objects"},outputs:{refresh:"refresh"},decls:93,vars:17,consts:[[1,""],[3,"objects","filename"],["class"," btn btn-sm btn-primary",3,"disabled","click",4,"ngIf"],["class"," btn btn-sm btn-warning",3,"disabled","click",4,"ngIf"],["class"," btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","frameworkComponents","defaultColDef","gridReady","selectionChanged"],["productsGrid",""],["id","edit_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[3,"id","onFinish",4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm",3,"click"],["id","mass_edit_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],["ngValidate","",3,"submit"],["required","","name","mass_field","name","field",3,"ngModel","ngModelChange"],["value","category"],["value","price"],["value","expiry"],["value","shelf"],["value","min_stock"],["value","max_stock"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["type","submit","value","Submit",1,"btn","btn-sm","btn-success"],["id","edit_stock_modal","tabindex","-1","role","dialog",1,"modal","fade"],["required","","type","text","name","new_stock",3,"ngModel","ngModelChange"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm"],["id","erase_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"modal-header","text-danger"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"btn","btn-sm","btn-primary",3,"disabled","click"],[1,"btn","btn-sm","btn-warning",3,"disabled","click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[3,"id","onFinish"],[3,"onFinish"],["class","form-control","required","","type","text","name","category",3,"ngModel","ngModelChange",4,"ngIf"],["required","","type","text","name","category",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","date","name","mass_value",3,"ngModel","ngModelChange"],["required","","type","text","name","mass_value",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275element"](1,"app-export-to-excel",1),i["\u0275\u0275template"](2,x,2,1,"button",2),i["\u0275\u0275template"](3,k,2,1,"button",3),i["\u0275\u0275template"](4,w,2,1,"button",4),i["\u0275\u0275elementStart"](5,"ag-grid-angular",5,6),i["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("selectionChanged",(function(e){return t.onSelectionChanged(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](7,"app-export-to-excel",1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",7),i["\u0275\u0275elementStart"](9,"div",8),i["\u0275\u0275elementStart"](10,"div",9),i["\u0275\u0275elementStart"](11,"div",10),i["\u0275\u0275elementStart"](12,"h5"),i["\u0275\u0275text"](13,"Edit Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"div",11),i["\u0275\u0275template"](15,E,1,1,"app-product-form",12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"div",13),i["\u0275\u0275elementStart"](17,"button",14),i["\u0275\u0275listener"]("click",(function(){return t.edit_product=null})),i["\u0275\u0275text"](18,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"div",15),i["\u0275\u0275elementStart"](20,"div",16),i["\u0275\u0275elementStart"](21,"div",9),i["\u0275\u0275elementStart"](22,"div",10),i["\u0275\u0275elementStart"](23,"h5"),i["\u0275\u0275text"](24,"Mass Edit Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](25,"br"),i["\u0275\u0275elementStart"](26,"em"),i["\u0275\u0275text"](27,"These new values will apply for all selected products if submitted"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",11),i["\u0275\u0275elementStart"](29,"form",17),i["\u0275\u0275listener"]("submit",(function(){return t.saveMassEdit()})),i["\u0275\u0275elementStart"](30,"label"),i["\u0275\u0275text"](31," Select a field to edit "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](32,"br"),i["\u0275\u0275elementStart"](33,"select",18),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.mass_field=e})),i["\u0275\u0275elementStart"](34,"option",19),i["\u0275\u0275text"](35,"Category"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"option",20),i["\u0275\u0275text"](37,"Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"option",21),i["\u0275\u0275text"](39,"Expiry Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](40,"option",22),i["\u0275\u0275text"](41,"Shelf/Location"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"option",23),i["\u0275\u0275text"](43,"Minimum Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](44,"option",24),i["\u0275\u0275text"](45,"Maximum Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](46,"hr"),i["\u0275\u0275elementStart"](47,"label"),i["\u0275\u0275text"](48,"Enter the new value"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](49,"br"),i["\u0275\u0275elementStart"](50,"div",25),i["\u0275\u0275template"](51,j,3,1,"div",26),i["\u0275\u0275template"](52,N,2,1,"div",26),i["\u0275\u0275template"](53,I,2,1,"div",27),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](54,"hr"),i["\u0275\u0275element"](55,"input",28),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](56,"div",13),i["\u0275\u0275elementStart"](57,"button",14),i["\u0275\u0275listener"]("click",(function(){return t.edit_product=null})),i["\u0275\u0275text"](58,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](59,"div",29),i["\u0275\u0275elementStart"](60,"div",16),i["\u0275\u0275elementStart"](61,"div",9),i["\u0275\u0275elementStart"](62,"div",10),i["\u0275\u0275elementStart"](63,"h5"),i["\u0275\u0275text"](64,"Mass Edit Product Stock Levels"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](65,"br"),i["\u0275\u0275elementStart"](66,"em"),i["\u0275\u0275text"](67,"This new stock value will apply for all selected products if submitted"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](68,"div",11),i["\u0275\u0275elementStart"](69,"form",17),i["\u0275\u0275listener"]("submit",(function(){return t.saveMassStockEdit()})),i["\u0275\u0275elementStart"](70,"label"),i["\u0275\u0275text"](71," Enter the new stock: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](72,"br"),i["\u0275\u0275elementStart"](73,"input",30),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_stock=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](74,"hr"),i["\u0275\u0275element"](75,"input",28),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](76,"div",13),i["\u0275\u0275elementStart"](77,"button",31),i["\u0275\u0275text"](78,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](79,"div",32),i["\u0275\u0275elementStart"](80,"div",16),i["\u0275\u0275elementStart"](81,"div",9),i["\u0275\u0275elementStart"](82,"div",33),i["\u0275\u0275elementStart"](83,"h5"),i["\u0275\u0275text"](84,"Attention - Delete Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](85,"br"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](86,"div",11),i["\u0275\u0275text"](87," There are previous records associated with the selected product(s). Do you really want to delete them? The system will also delete every record of the selected items in sales, purchases, transfers and stock adjustment "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](88,"div",13),i["\u0275\u0275elementStart"](89,"button",31),i["\u0275\u0275text"](90,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](91,"button",34),i["\u0275\u0275listener"]("click",(function(){return t.erase()})),i["\u0275\u0275text"](92,"Continue to Delete"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("objects",t.objects)("filename","product list"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_edit),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_alter_stock),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_delete),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("rowData",t.objects)("columnDefs",t.columnDefs)("frameworkComponents",t.frameworkComponents)("defaultColDef",t.defaultColDef),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("objects",t.objects)("filename","product list"),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("ngIf",null!=t.edit_product),i["\u0275\u0275advance"](18),i["\u0275\u0275property"]("ngModel",t.mass_field),i["\u0275\u0275advance"](17),i["\u0275\u0275property"]("ngSwitch",t.mass_field),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","category"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","expiry"),i["\u0275\u0275advance"](21),i["\u0275\u0275property"]("ngModel",t.new_stock))},directives:[g.a,o.j,y.AgGridAngular,v.o,v.f,v.g,v.m,v.l,v.e,v.h,v.i,v.n,o.k,o.l,o.m,v.b,b.a,S.a],styles:[""]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),a=n("4AQi");let o=(()=>{class e{constructor(e){this.excel=e,this.objects=[],this.filename="download"}ngOnInit(){}export(){this.excel.exportAsExcelFile(this.objects,this.filename)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"button",0),i["\u0275\u0275listener"]("click",(function(){return t.export()})),i["\u0275\u0275element"](1,"i",1),i["\u0275\u0275text"](2," Export To Excel"),i["\u0275\u0275elementEnd"]())},styles:[""]}),e})()}}]);