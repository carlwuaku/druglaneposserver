(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ofXK"),s=n("nEHF"),a=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,s.a]]}),e})()},oFNZ:function(e,t,n){"use strict";n.r(t),n.d(t,"CustomerDetailsModule",(function(){return w}));var i=n("ofXK"),s=n("tyNb"),a=n("fXoL"),o=n("c92J"),r=n("1VJT"),l=n("ccyI"),d=n("hiAm"),c=n("Lumr"),m=n("6CxU");function h(e,t){1&e&&a["\u0275\u0275element"](0,"app-loading")}function u(e,t){1&e&&a["\u0275\u0275element"](0,"app-loading")}function f(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275elementStart"](1,"div",21),a["\u0275\u0275elementStart"](2,"div",22),a["\u0275\u0275elementStart"](3,"div",23),a["\u0275\u0275elementStart"](4,"b"),a["\u0275\u0275text"](5,"Name: "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",23),a["\u0275\u0275elementStart"](8,"b"),a["\u0275\u0275text"](9,"Phone: "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"div",23),a["\u0275\u0275elementStart"](12,"b"),a["\u0275\u0275text"](13,"Sex: "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"div",23),a["\u0275\u0275elementStart"](16,"b"),a["\u0275\u0275text"](17,"Email: "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](18),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",24),a["\u0275\u0275elementStart"](20,"ul",25),a["\u0275\u0275elementStart"](21,"li",26),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().getRefills()})),a["\u0275\u0275elementStart"](22,"a",27),a["\u0275\u0275text"](23,"MEDICATION HISTORY (REFILLS)"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](24,"li",28),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().getSales()})),a["\u0275\u0275elementStart"](25,"a",29),a["\u0275\u0275text"](26,"SALES"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](27,"div",30),a["\u0275\u0275elementStart"](28,"div",31),a["\u0275\u0275elementStart"](29,"div",21),a["\u0275\u0275elementStart"](30,"app-refill-list",32),a["\u0275\u0275listener"]("onFinish",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().getRefills()})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](31,"div",33),a["\u0275\u0275elementStart"](32,"div",21),a["\u0275\u0275template"](33,u,1,0,"app-loading",8),a["\u0275\u0275elementStart"](34,"app-sales-history",32),a["\u0275\u0275listener"]("onFinish",(function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().salesSelected(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate1"](" ",e.object.name," "),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate1"](" ",e.object.phone," "),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate1"](" ",e.object.sex," "),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate1"](" ",e.object.email," "),a["\u0275\u0275advance"](12),a["\u0275\u0275property"]("objects",e.refills),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",e.is_loading_sales_details),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("objects",e.sales)}}function p(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",34),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" Sales Invoice: #",e.selected_item.invoice," ")}}function b(e,t){1&e&&a["\u0275\u0275element"](0,"app-loading")}function v(e,t){if(1&e&&a["\u0275\u0275element"](0,"app-sales-history",35),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("show_return",!1)("objects",e.sale_invoice_objects)}}const _=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.dbService=t,this.notify=n,this.authService=i,this.error=!1,this.is_loading=!0,this.is_loaded=!1,this.orders=[],this.is_loading_orders=!0,this.is_loaded_orders=!1,this.sales=[],this.is_loading_sales=!0,this.is_loaded_sales=!1,this.purchases=[],this.is_loading_purchases=!0,this.is_loaded_purchases=!1,this.stock_changes=[],this.refills=[],-1==this.authService.current_user.permissions.indexOf("Manage Customers")&&(this.notify.failNotification("You are not permitted to view the page"),this.goBack()),this.dbService.setTitle("Customer Details"),this.id=e.snapshot.params.id}ngOnInit(){this.getObject(this.id),this.getRefills()}getObject(e){this.is_loading=!0,this.is_loaded=!1,this.error=!1,this.dbService.getDataWithQuery("customer/findById",this.authService.current_user,"id="+this.id).subscribe(e=>{this.object=e.data,this.is_loading=!1,this.is_loaded=!0,this.error=!1},e=>{this.is_loading=!1,this.error=!0,this.is_loaded=!1})}getOrders(){this.dbService.getDataWithQuery("order/getList",this.authService.current_user,"product="+this.object.name).subscribe(e=>{this.orders=e.data,this.is_loading_orders=!1,this.is_loaded_orders=!0},e=>{this.is_loading_orders=!1,this.is_loaded_orders=!1})}getSales(){this.dbService.getDataWithQuery("sale/getCustomerSales",this.authService.current_user,"customer="+this.id).subscribe(e=>{this.sales=e.data,this.is_loading_sales=!1,this.is_loaded_sales=!0},e=>{this.is_loading_sales=!1,this.is_loaded_sales=!1})}showDetails(e){this.showSalesInvoiceDetails(e.invoice)}showSalesInvoiceDetails(e){$("#sale_details_modal").modal("show"),this.is_loaded_sales_details=!1,this.is_loading_sales_details=!0,this.dbService.getData("sale/getSaleDetails?code="+e,this.authService.current_user).subscribe(e=>{this.sale_invoice_objects=e.data,this.sale_invoice_objects.map(e=>{}),this.is_loaded_sales_details=!0,this.is_loading_sales_details=!1},e=>{this.is_loaded_sales_details=!0,this.is_loading_sales_details=!1,this.notify.failNotification("Unable to get sales")})}goBack(){window.history.back()}salesSelected(e){this.showSalesInvoiceDetails(e[0].code)}delete(){if(window.confirm("Sure you want to delete the selected customer?")){var e=[this.id];let t=new FormData;this.notify.showLoading(),t.append("id",e.toString()),this.dbService.postData(t,"customer/delete",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":$("#erase_modal").modal("show");break;default:this.goBack(),this.notify.showNotification("Customer deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}}erase(){$("#erase_modal").modal("hide");var e=[this.id];let t=new FormData;this.notify.showLoading(),t.append("id",e.toString()),this.dbService.postData(t,"customer/erase",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":alert("Server error! Please try again or contact admin");break;default:this.goBack(),this.notify.showNotification("Products deleted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}getRefills(){this.notify.showLoading(),this.dbService.getData("customer/getCustomerRefillList?customer="+this.id,this.authService.current_user).subscribe(e=>{this.refills=e.data,this.notify.hideLoading()},e=>{this.notify.noConnectionNotification()})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-customer-details"]],decls:39,vars:6,consts:[[1,"content"],[1,"container"],[1,"btn","btn-sm","btn-primary",3,"routerLink"],[1,"fa","fa-edit"],[1,"btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-refresh"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-remove"],[4,"ngIf"],["id","sale_details_modal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],["class","modal-header",4,"ngIf"],[1,"modal-body"],[3,"show_return","objects",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],["id","erase_modal","tabindex","-1","role","dialog",1,"modal","fade"],[1,"modal-header","text-danger"],["data-dismiss","modal",1,"btn","btn-danger","btn-sm"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"card","card-body"],[1,"row"],[1,"col-md-4"],[1,""],["role","tablist",1,"nav","nav-pills"],[1,"nav-item","active",3,"click"],["role","tab","href","#refills","data-toggle","tab",1,"nav-link","active"],[1,"nav-item",3,"click"],["role","tab","href","#sales","data-toggle","tab",1,"nav-link"],[1,"tab-content"],["role","tabpanel","id","refills",1,"tab-pane","active"],[3,"objects","onFinish"],["role","tabpanel","id","sales",1,"tab-pane","fade","in"],[1,"modal-header"],[3,"show_return","objects"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"section",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"h5"),a["\u0275\u0275text"](3,"Customer Details "),a["\u0275\u0275elementStart"](4,"a",2),a["\u0275\u0275element"](5,"i",3),a["\u0275\u0275text"](6," Edit"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"button",4),a["\u0275\u0275listener"]("click",(function(){return t.ngOnInit()})),a["\u0275\u0275element"](8,"i",5),a["\u0275\u0275text"](9," Refresh"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"button",6),a["\u0275\u0275listener"]("click",(function(){return t.delete()})),a["\u0275\u0275element"](11,"i",7),a["\u0275\u0275text"](12," Delete"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](13,h,1,0,"app-loading",8),a["\u0275\u0275template"](14,f,35,7,"div",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"div",9),a["\u0275\u0275elementStart"](16,"div",10),a["\u0275\u0275elementStart"](17,"div",11),a["\u0275\u0275template"](18,p,2,1,"div",12),a["\u0275\u0275elementStart"](19,"div",13),a["\u0275\u0275template"](20,b,1,0,"app-loading",8),a["\u0275\u0275template"](21,v,1,2,"app-sales-history",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](22,"div",15),a["\u0275\u0275elementStart"](23,"button",16),a["\u0275\u0275text"](24,"Close"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](25,"div",17),a["\u0275\u0275elementStart"](26,"div",10),a["\u0275\u0275elementStart"](27,"div",11),a["\u0275\u0275elementStart"](28,"div",18),a["\u0275\u0275elementStart"](29,"h5"),a["\u0275\u0275text"](30,"Attention - Delete Product"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](31,"br"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"div",13),a["\u0275\u0275text"](33," This product has previous records. Do you really want to delete it? The system will also delete every record of the item in sales, purchases, transfers, stock adjustment "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](34,"div",15),a["\u0275\u0275elementStart"](35,"button",19),a["\u0275\u0275text"](36,"Cancel"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](37,"button",20),a["\u0275\u0275listener"]("click",(function(){return t.erase()})),a["\u0275\u0275text"](38,"Continue to Delete"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275propertyInterpolate1"]("routerLink","/edit_customer/",t.id,""),a["\u0275\u0275advance"](9),a["\u0275\u0275property"]("ngIf",t.is_loading),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.is_loaded),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",null!=t.selected_item),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.is_loading_sales_details),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.is_loaded_sales_details))},directives:[s.e,i.j,d.a,c.a,m.a],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.f.forChild(_)],s.f]}),e})();var S=n("nEHF"),y=n("nBlB"),E=n("NFbv"),x=n("rNAZ");let w=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,g,S.a,y.a,E.a,x.a]]}),e})()}}]);