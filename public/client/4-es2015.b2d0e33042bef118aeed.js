(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{g1vN:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var i=n("fXoL"),a=n("tyNb"),r=n("ofXK");function o(e,t){1&e&&i["\u0275\u0275element"](0,"i",6)}function s(e,t){1&e&&i["\u0275\u0275element"](0,"i",7)}function l(e,t){1&e&&i["\u0275\u0275element"](0,"i",8)}function d(e,t){1&e&&i["\u0275\u0275element"](0,"i",9)}function c(e,t){1&e&&i["\u0275\u0275element"](0,"i",10)}let m=(()=>{class e{agInit(e){this.params=e,this.id=null!=e.node.data.product_id&&null!=e.node.data.product_id?this.params.node.data.product_id:this.params.node.data.id,this.label=this.params.node.data.name||null,this.expired=this.params.node.data.expired,this.near_min=this.params.node.data.near_min,this.near_max=this.params.node.data.near_max,this.out_of_stock=this.params.node.data.out_of_stock,this.deleted="0"==this.params.node.data.status}ngOnDestroy(){}refresh(){return!1}onClick(e){this.params.onClick instanceof Function&&this.params.onClick({event:e,rowData:this.params.node.data})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-link-name"]],decls:8,vars:7,consts:[[3,"routerLink"],["title","Item expired","class","fa fa-calendar text-danger",4,"ngIf"],["title","Stock nearing max stock level","class","fa fa-angle-double-up text-warning",4,"ngIf"],["title","Stock nearning minimum stock level","class","fa fa-angle-double-down text-danger",4,"ngIf"],["title","Out of stock","class","fa fa-exclamation-triangle text-danger",4,"ngIf"],["title","Product Locked","class","fa fa-trash text-danger",4,"ngIf"],["title","Item expired",1,"fa","fa-calendar","text-danger"],["title","Stock nearing max stock level",1,"fa","fa-angle-double-up","text-warning"],["title","Stock nearning minimum stock level",1,"fa","fa-angle-double-down","text-danger"],["title","Out of stock",1,"fa","fa-exclamation-triangle","text-danger"],["title","Product Locked",1,"fa","fa-trash","text-danger"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"a",0),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](2,"br"),i["\u0275\u0275template"](3,o,1,0,"i",1),i["\u0275\u0275template"](4,s,1,0,"i",2),i["\u0275\u0275template"](5,l,1,0,"i",3),i["\u0275\u0275template"](6,d,1,0,"i",4),i["\u0275\u0275template"](7,c,1,0,"i",5)),2&e&&(i["\u0275\u0275propertyInterpolate1"]("routerLink","/product/",t.id,""),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",t.label,"\n"),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.expired),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_max),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.near_min),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.out_of_stock),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.deleted))},directives:[a.e,r.j],styles:[""]}),e})();var u=n("c92J"),p=n("bgkY"),f=n("1VJT"),h=n("ccyI"),g=n("n49D"),b=n("nVU4"),v=n("3Pt+"),y=n("/9/o"),S=n("CjlH"),_=n("gkiK");const x=["productsGrid"];function w(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",42),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().editSelected()})),i["\u0275\u0275text"](1,"Edit"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function k(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",43),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().adjustStockSelected()})),i["\u0275\u0275text"](1,"Adjust Stock"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function C(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",44),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().delete()})),i["\u0275\u0275text"](1,"Delete"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function E(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",43),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().startMerge()})),i["\u0275\u0275text"](1,"Merge"),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("disabled",e.selected_items.length<1)}}function M(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"app-product-form",45),i["\u0275\u0275listener"]("onFinish",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().productEdited(t)})),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("id",e.edit_product.id)}}function N(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"input",48),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](2).mass_value=t})),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("ngModel",e.mass_value)}}function I(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"app-select-product-category",46),i["\u0275\u0275listener"]("onFinish",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().categorySelected(t)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](2,N,1,1,"input",47),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf","other"==e.category_selected)}}function j(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",49),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().mass_value=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.mass_value)}}function D(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",53),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",e),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e)}}function V(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",50),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().mass_value=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"datalist",51),i["\u0275\u0275template"](3,D,2,2,"option",52),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.mass_value),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",e.units)}}function L(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"app-select-functional-group",54),i["\u0275\u0275listener"]("onFinish",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().groupSelected(t)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("type","datalist"))}function F(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275elementStart"](1,"input",55),i["\u0275\u0275listener"]("ngModelChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().mass_value=t})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",e.mass_value)}}const P=function(e){return{active:e}};function T(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",56),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"]().setMergeMaster(n)})),i["\u0275\u0275text"](1),i["\u0275\u0275element"](2,"br"),i["\u0275\u0275elementStart"](3,"em"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](4,P,e==n.mergeMaster)),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.name," "),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate2"]("[Price: ",e.price,"] [Stock: ",e.stock,"] ")}}let q=(()=>{class e{constructor(e,t,n,a,r){this.dbService=e,this.socket=t,this.router=n,this.notify=a,this.authService=r,this.type="staff",this.refresh=new i.EventEmitter,this.rowDataClicked1={},this.columnDefs=[{headerName:"#",valueGetter:"node.rowIndex + 1",checkboxSelection:!0,autoHeight:!0,cellClass:"bordered",headerCheckboxSelection:!0},{headerName:"Product",field:"name",cellRenderer:"LinkNameComponent",cellRendererParams:{onClick:this.onBtnClick1.bind(this),label:"Click 1",dat:23},sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Price",field:"price",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Closest Expiry",field:"expiry",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Current Stock",field:"stock",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Current Stock Value",field:"stock_value",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Unit",field:"unit",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Category",field:"category",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Shelf",field:"shelf",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Functional Group",field:"description",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Min Stock",field:"min_stock",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Max Stock",field:"max_stock",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Barcode",field:"barcode",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Preferred Vendor",field:"preferred_vendor_name",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Top Vendor",field:"highest_vendor_name",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Total Amt. Sold",field:"total_amount_sold",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Total Qtt. Sold",field:"total_quantity_sold",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Total Amt. Sold Last 6 Months",field:"six_months_amount_sold",sortable:!0,filter:!0,cellClass:"bordered"},{headerName:"Total Qtt. Sold Last 6 Months",field:"six_months_quantity_sold",sortable:!0,filter:!0,cellClass:"bordered"}],this.rowData=[],this.selected_items=[],this.objects=[],this.can_view=!0,this.can_edit=!0,this.can_create=!0,this.can_delete=!0,this.edit_product=null,this.can_alter_stock=!0,this.units=[],this.type=this.authService.current_user.type,-1==this.authService.current_user.permissions.indexOf("Manage Inventory")&&(this.can_edit=!1,this.can_delete=!1),-1==this.authService.current_user.permissions.indexOf("Adjust Stock")&&(this.can_alter_stock=!1),this.frameworkComponents={LinkNameComponent:m},this.defaultColDef={resizable:!0},this.rowClassRules={warning:"data.stock <= 0",danger:"data.expired && data.stock > 0"}}ngOnInit(){this.units=this.dbService.units}onGridReady(e){this.gridApi=e.api}onSelectionChanged(e){var t=this.gridApi.getSelectedRows();this.selected_items=t}onBtnClick1(e){this.rowDataClicked1=e.rowData}view(e){localStorage.setItem("current_product",JSON.stringify(e)),this.router.navigate(["/product/"+e.name])}editSelected(){try{1==this.selected_items.length?this.edit(this.selected_items[0]):this.massEdit()}catch(e){}}edit(e){this.edit_product=e,this.edit_index=this.objects.indexOf(e),$("#edit_product_modal").modal("show")}massEdit(){$("#mass_edit_product_modal").modal("show")}adjustStockSelected(){$("#edit_stock_modal").modal("show")}productEdited(e){$("#edit_product_modal").modal("hide"),console.log(e),this.refresh.emit("product_edited"),this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Product Edited",event:"product_edited"}),this.edit_product=null,this.edit_index=null}saveMassEdit(){if($("#mass_edit_product_modal").modal("hide"),window.confirm("Sure you want to edit the selected products?")){let t=new FormData;this.notify.showLoading();var e=[];this.selected_items.map(t=>{e.push(t.id)}),t.append("id",e.toString()),t.append("field",this.mass_field),t.append("value",this.mass_value),this.dbService.postData(t,"product/massEdit",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:this.socket.sendEvent({company_id:this.authService.current_user.company_id,parent_company_id:this.authService.current_user.parent_company.id,message:"Product Edited",event:"product_edited"}),this.notify.showNotification("Products edited successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}delete(){if(window.confirm("Sure you want to delete the selected products?")){var e=[];this.selected_items.map(t=>{e.push(t.id)});let t=new FormData;this.notify.showLoading(),t.append("id",e.toString()),this.dbService.postData(t,"product/delete",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":$("#erase_modal").modal("show");break;default:this.refresh.emit("yes"),this.notify.showNotification("Products deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}erase(){$("#erase_modal").modal("hide");var e=[];this.selected_items.map(t=>{e.push(t.id)});let t=new FormData;this.notify.showLoading(),t.append("id",e.toString()),this.dbService.postData(t,"product/erase",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":alert("Server error! Please try again or contact admin");break;default:this.refresh.emit("yes"),this.notify.showNotification("Products deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}editStock(e){var t=window.prompt("Enter the quantity to set the stock to:");if(null==t||null==t)return this.notify.failNotification("You must enter a quantity"),!1;if(""==t.trim())return this.notify.failNotification("You must enter a quantity"),!1;if(window.confirm("Sure you want to reset this product's stock?")){let n=new FormData;this.notify.showLoading(),n.append("product",e.id),n.append("quantity_counted",t),n.append("quantity_expected",e.stock),n.append("date",this.dbService.getToday()),n.append("created_on",this.dbService.getToday("timestamp")),this.dbService.postData(n,"product/saveSingleStockAdjustment",this.authService.current_user).subscribe(n=>{switch(this.notify.hideLoading(),n.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:e.stock=t,this.notify.showNotification("Product stock edited successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}categorySelected(e){this.category_selected=e,"other"!=e&&(this.mass_value=e)}groupSelected(e){this.mass_value=e}saveMassStockEdit(){$("#edit_stock_modal").modal("hide"),this.notify.showLoading();for(var e=[],t=[],n=[],i=[],a=[],r=[],o=[],s=[],l=[],d=[],c=[],m=(this.dbService.getToday("timestamp_string"),0);m<this.selected_items.length;m++){var u=this.selected_items[m];l.push(u.category),s.push(null==u.size||null==u.size?"n/a":u.size),o.push(u.expiry),e.push(u.id),t.push(u.price),n.push(u.stock),i.push(this.new_stock),a.push(u.name),c.push(u.unit),d.push(u.shelf),r.push(null==u.cost_price||null==u.cost_price?"0":u.cost_price)}let p=new FormData;p.append("prices",t.join("||")),p.append("cost_prices",r.join("||")),p.append("quantities_expected",n.join("||")),p.append("quantities_counted",i.join("||")),p.append("sizes",s.join("||")),p.append("expiries",o.join("||")),p.append("categories",l.join("||")),p.append("products",e.join("||")),p.append("units",c.join("||")),p.append("shelves",d.join("||")),p.append("code","n/a"),p.append("product_names",a.join("||")),p.append("created_by",this.authService.current_user.id),p.append("date",this.dbService.getToday()),p.append("created_on",this.dbService.getToday("timestamp")),p.append("display_name",this.authService.current_user.display_name),this.dbService.postData(p,"product/saveStockAdjustment",this.authService.current_user).subscribe(e=>{this.notify.hideLoading(),"0"===e.status?this.notify.failNotification("Unable to authenticate. Please login again"):"-1"===e.status?this.notify.showNotification("System error, try again.","fail",3e3):"-9"===e.status?this.notify.showNotification("You are not permitted to perform this action","fail",3e3):(this.notify.hideLoading(),this.notify.successNotification("Saved successfully"),this.refresh.emit("yes"))},e=>{this.notify.hideLoading(),this.notify.noConnectionNotification(),console.log(e)})}startMerge(){if(this.selected_items.length<2)return alert("Select more than 1 item to merge"),!1;$("#merge_modal").modal("show")}setMergeMaster(e){this.mergeMaster=e}finishMerge(){if(this.dbService.isEmpty(this.mergeMaster))return alert("Select a master item"),!1;if(this.selected_items.splice(this.selected_items.indexOf(this.mergeMaster),1),window.confirm("Sure you want to merge the selected products?")){var e=[];this.selected_items.map(t=>{e.push(t.id)});let t=new FormData;this.notify.showLoading(),t.append("master",this.mergeMaster.id),t.append("id",e.toString()),this.dbService.postData(t,"product/merge",this.authService.current_user).subscribe(e=>{switch($("#merge_modal").modal("hide"),this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":break;default:this.selected_items=[this.mergeMaster],window.confirm("Do you want to edit the current stock of "+this.mergeMaster.name+"?")&&this.adjustStockSelected(),this.refresh.emit("yes"),this.notify.showNotification("Products merged successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](u.a),i["\u0275\u0275directiveInject"](p.a),i["\u0275\u0275directiveInject"](a.c),i["\u0275\u0275directiveInject"](f.a),i["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-product-list"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](x,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.agGrid=n.first)},inputs:{objects:"objects"},outputs:{refresh:"refresh"},decls:120,vars:23,consts:[[1,""],[1,"text-muted"],[1,"fa","fa-bars"],[3,"objects","filename"],["class"," btn btn-sm btn-primary",3,"disabled","click",4,"ngIf"],["class"," btn btn-sm btn-warning",3,"disabled","click",4,"ngIf"],["class"," btn btn-sm btn-danger",3,"disabled","click",4,"ngIf"],["rowSelection","multiple",1,"ag-theme-balham",2,"width","100%","height","400px","font-family","Muli","font-size","15px",3,"rowData","columnDefs","suppressMenuHide","frameworkComponents","defaultColDef","rowClassRules","gridReady","selectionChanged"],["productsGrid",""],["id","edit_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[3,"id","onFinish",4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm",3,"click"],["id","mass_edit_product_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],["ngValidate","",3,"submit"],["required","","name","mass_field","name","field",3,"ngModel","ngModelChange"],["value","category"],["value","price"],["value","expiry"],["value","shelf"],["value","min_stock"],["value","max_stock"],["value","unit"],["value","description"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["type","submit","value","Submit",1,"btn","btn-sm","btn-success"],["id","edit_stock_modal","tabindex","-1","role","dialog",1,"modal","fade"],["required","","type","text","name","new_stock",3,"ngModel","ngModelChange"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm"],["id","merge_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"modal-header","text-danger"],[1,"list-group"],["class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"btn","btn-success","btn-sm",3,"click"],["id","erase_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"btn","btn-sm","btn-primary",3,"disabled","click"],[1,"btn","btn-sm","btn-warning",3,"disabled","click"],[1,"btn","btn-sm","btn-danger",3,"disabled","click"],[3,"id","onFinish"],[3,"onFinish"],["class","form-control","required","","type","text","name","category",3,"ngModel","ngModelChange",4,"ngIf"],["required","","type","text","name","category",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","date","name","mass_value",3,"ngModel","ngModelChange"],["list","mass_units","required","","type","text","name","mass_value",3,"ngModel","ngModelChange"],["id","mass_units"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"type","onFinish"],["required","","type","text","name","mass_value",3,"ngModel","ngModelChange"],[1,"list-group-item",3,"ngClass","click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"em",1),i["\u0275\u0275text"](2," To filter by any field, click on the "),i["\u0275\u0275element"](3,"i",2),i["\u0275\u0275text"](4," icon on the field you wish to filter by "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](5,"app-export-to-excel",3),i["\u0275\u0275template"](6,w,2,1,"button",4),i["\u0275\u0275template"](7,k,2,1,"button",5),i["\u0275\u0275template"](8,C,2,1,"button",6),i["\u0275\u0275template"](9,E,2,1,"button",5),i["\u0275\u0275elementStart"](10,"ag-grid-angular",7,8),i["\u0275\u0275listener"]("gridReady",(function(e){return t.onGridReady(e)}))("selectionChanged",(function(e){return t.onSelectionChanged(e)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](12,"app-export-to-excel",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",9),i["\u0275\u0275elementStart"](14,"div",10),i["\u0275\u0275elementStart"](15,"div",11),i["\u0275\u0275elementStart"](16,"div",12),i["\u0275\u0275elementStart"](17,"h5"),i["\u0275\u0275text"](18,"Edit Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"div",13),i["\u0275\u0275template"](20,M,1,1,"app-product-form",14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"div",15),i["\u0275\u0275elementStart"](22,"button",16),i["\u0275\u0275listener"]("click",(function(){return t.edit_product=null})),i["\u0275\u0275text"](23,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"div",17),i["\u0275\u0275elementStart"](25,"div",18),i["\u0275\u0275elementStart"](26,"div",11),i["\u0275\u0275elementStart"](27,"div",12),i["\u0275\u0275elementStart"](28,"h5"),i["\u0275\u0275text"](29,"Mass Edit Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](30,"br"),i["\u0275\u0275elementStart"](31,"em"),i["\u0275\u0275text"](32,"These new values will apply for all selected products if submitted"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"div",13),i["\u0275\u0275elementStart"](34,"form",19),i["\u0275\u0275listener"]("submit",(function(){return t.saveMassEdit()})),i["\u0275\u0275elementStart"](35,"label"),i["\u0275\u0275text"](36," Select a field to edit "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](37,"br"),i["\u0275\u0275elementStart"](38,"select",20),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.mass_field=e})),i["\u0275\u0275elementStart"](39,"option",21),i["\u0275\u0275text"](40,"Category"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](41,"option",22),i["\u0275\u0275text"](42,"Price"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](43,"option",23),i["\u0275\u0275text"](44,"Expiry Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](45,"option",24),i["\u0275\u0275text"](46,"Shelf/Location"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](47,"option",25),i["\u0275\u0275text"](48,"Minimum Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](49,"option",26),i["\u0275\u0275text"](50,"Maximum Stock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](51,"option",27),i["\u0275\u0275text"](52,"Unit"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](53,"option",28),i["\u0275\u0275text"](54,"Functional Group"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](55,"hr"),i["\u0275\u0275elementStart"](56,"label"),i["\u0275\u0275text"](57,"Enter the new value"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](58,"br"),i["\u0275\u0275elementStart"](59,"div",29),i["\u0275\u0275template"](60,I,3,1,"div",30),i["\u0275\u0275template"](61,j,2,1,"div",30),i["\u0275\u0275template"](62,V,4,2,"div",30),i["\u0275\u0275template"](63,L,2,1,"div",30),i["\u0275\u0275template"](64,F,2,1,"div",31),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](65,"hr"),i["\u0275\u0275element"](66,"input",32),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](67,"div",15),i["\u0275\u0275elementStart"](68,"button",16),i["\u0275\u0275listener"]("click",(function(){return t.edit_product=null})),i["\u0275\u0275text"](69,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](70,"div",33),i["\u0275\u0275elementStart"](71,"div",18),i["\u0275\u0275elementStart"](72,"div",11),i["\u0275\u0275elementStart"](73,"div",12),i["\u0275\u0275elementStart"](74,"h5"),i["\u0275\u0275text"](75,"Mass Edit Product Stock Levels"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](76,"br"),i["\u0275\u0275elementStart"](77,"em"),i["\u0275\u0275text"](78,"This new stock value will apply for all selected products if submitted"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](79,"div",13),i["\u0275\u0275elementStart"](80,"form",19),i["\u0275\u0275listener"]("submit",(function(){return t.saveMassStockEdit()})),i["\u0275\u0275elementStart"](81,"label"),i["\u0275\u0275text"](82," Enter the new stock: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](83,"br"),i["\u0275\u0275elementStart"](84,"input",34),i["\u0275\u0275listener"]("ngModelChange",(function(e){return t.new_stock=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](85,"hr"),i["\u0275\u0275element"](86,"input",32),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](87,"div",15),i["\u0275\u0275elementStart"](88,"button",35),i["\u0275\u0275text"](89,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](90,"div",36),i["\u0275\u0275elementStart"](91,"div",18),i["\u0275\u0275elementStart"](92,"div",11),i["\u0275\u0275elementStart"](93,"div",37),i["\u0275\u0275elementStart"](94,"h5"),i["\u0275\u0275text"](95,"Merge Items"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](96,"br"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](97,"div",13),i["\u0275\u0275text"](98," Merging items will convert the records of selected items to that of the master item. The other items will be deleted permanently from the database. Select the item you would like to merge the others into. "),i["\u0275\u0275elementStart"](99,"div",38),i["\u0275\u0275template"](100,T,5,6,"div",39),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](101,"div",15),i["\u0275\u0275elementStart"](102,"button",35),i["\u0275\u0275text"](103,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](104,"button",40),i["\u0275\u0275listener"]("click",(function(){return t.finishMerge()})),i["\u0275\u0275text"](105,"Continue to Merge"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](106,"div",41),i["\u0275\u0275elementStart"](107,"div",18),i["\u0275\u0275elementStart"](108,"div",11),i["\u0275\u0275elementStart"](109,"div",37),i["\u0275\u0275elementStart"](110,"h5"),i["\u0275\u0275text"](111,"Attention - Delete Product"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](112,"br"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](113,"div",13),i["\u0275\u0275text"](114," There are previous records associated with the selected product(s). Do you really want to delete them? The system will also delete every record of the selected items in sales, purchases, transfers and stock adjustment "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](115,"div",15),i["\u0275\u0275elementStart"](116,"button",35),i["\u0275\u0275text"](117,"Cancel"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](118,"button",40),i["\u0275\u0275listener"]("click",(function(){return t.erase()})),i["\u0275\u0275text"](119,"Continue to Delete"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("objects",t.objects)("filename","product list"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_edit&&"staff"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_alter_stock&&"staff"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_delete&&"staff"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.can_edit&&"staff"==t.type),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("rowData",t.objects)("columnDefs",t.columnDefs)("suppressMenuHide",!0)("frameworkComponents",t.frameworkComponents)("defaultColDef",t.defaultColDef)("rowClassRules",t.rowClassRules),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("objects",t.objects)("filename","product list"),i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("ngIf",null!=t.edit_product),i["\u0275\u0275advance"](18),i["\u0275\u0275property"]("ngModel",t.mass_field),i["\u0275\u0275advance"](21),i["\u0275\u0275property"]("ngSwitch",t.mass_field),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","category"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","expiry"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","unit"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngSwitchCase","description"),i["\u0275\u0275advance"](21),i["\u0275\u0275property"]("ngModel",t.new_stock),i["\u0275\u0275advance"](16),i["\u0275\u0275property"]("ngForOf",t.selected_items))},directives:[g.a,r.j,b.AgGridAngular,v.o,v.f,v.g,v.m,v.l,v.e,v.h,v.i,v.n,r.k,r.l,r.m,v.b,r.i,y.a,S.a,_.a,r.h],styles:[""]}),e})()},hiAm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"fa","fa-spin","fa-spinner"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"i",0),i["\u0275\u0275text"](1," Loading..."))},styles:[""]}),e})()},n49D:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),a=n("4AQi");let r=(()=>{class e{constructor(e){this.excel=e,this.objects=[],this.filename="download"}ngOnInit(){}export(){this.excel.exportAsExcelFile(this.objects,this.filename)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-export-to-excel"]],inputs:{objects:"objects",filename:"filename"},decls:3,vars:0,consts:[[1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-file-excel-o"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"button",0),i["\u0275\u0275listener"]("click",(function(){return t.export()})),i["\u0275\u0275element"](1,"i",1),i["\u0275\u0275text"](2," Export To Excel"),i["\u0275\u0275elementEnd"]())},styles:[""]}),e})()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ofXK"),a=n("nEHF"),r=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,a.a]]}),e})()}}]);