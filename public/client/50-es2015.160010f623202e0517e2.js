(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"9EpT":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var i=n("fXoL");const o=["bcElement"],r=n("YsXA");let a=(()=>{class e{constructor(e){this.renderer=e,this.elementType="svg",this.cssClass="barcode",this.format="CODE128",this.lineColor="#000000",this.width=2,this.height=100,this.displayValue=!1,this.fontOptions="",this.font="monospace",this.textAlign="center",this.textPosition="bottom",this.textMargin=2,this.fontSize=20,this.background="#ffffff",this.margin=10,this.marginTop=10,this.marginBottom=10,this.marginLeft=10,this.marginRight=10,this.value="",this.valid=()=>!0}get options(){return{format:this.format,lineColor:this.lineColor,width:this.width,height:this.height,displayValue:this.displayValue,fontOptions:this.fontOptions,font:this.font,textAlign:this.textAlign,textPosition:this.textPosition,textMargin:this.textMargin,fontSize:this.fontSize,background:this.background,margin:this.margin,marginTop:this.marginTop,marginBottom:this.marginBottom,marginLeft:this.marginLeft,marginRight:this.marginRight,valid:this.valid}}ngOnChanges(){this.createBarcode()}createBarcode(){if(!this.value)return;let e;switch(this.elementType){case"img":e=this.renderer.createElement("img");break;case"canvas":e=this.renderer.createElement("canvas");break;case"svg":default:e=this.renderer.createElement("svg","svg")}r(e,this.value,this.options);for(const t of this.bcElement.nativeElement.childNodes)this.renderer.removeChild(this.bcElement.nativeElement,t);this.renderer.appendChild(this.bcElement.nativeElement,e)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.Renderer2))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-barcode6"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275staticViewQuery"](o,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.bcElement=n.first)},inputs:{elementType:["bc-element-type","elementType"],cssClass:["bc-class","cssClass"],format:["bc-format","format"],lineColor:["bc-line-color","lineColor"],width:["bc-width","width"],height:["bc-height","height"],displayValue:["bc-display-value","displayValue"],fontOptions:["bc-font-options","fontOptions"],font:["bc-font","font"],textAlign:["bc-text-align","textAlign"],textPosition:["bc-text-position","textPosition"],textMargin:["bc-text-margin","textMargin"],fontSize:["bc-font-size","fontSize"],background:["bc-background","background"],margin:["bc-margin","margin"],marginTop:["bc-margin-top","marginTop"],marginBottom:["bc-margin-bottom","marginBottom"],marginLeft:["bc-margin-left","marginLeft"],marginRight:["bc-margin-right","marginRight"],value:["bc-value","value"],valid:["bc-valid","valid"]},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["bcElement",""]],template:function(e,t){1&e&&i["\u0275\u0275element"](0,"div",null,0),2&e&&i["\u0275\u0275classMap"](t.cssClass)},encapsulation:2}),e})(),c=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[]]}),e})()},SdSZ:function(e,t,n){"use strict";n.r(t),n.d(t,"ClientStockTakingModule",(function(){return E}));var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),a=n("c92J"),c=n("bgkY"),s=n("1VJT"),l=n("eJvr"),d=n("ccyI"),u=n("3Pt+"),p=n("4j6H");function m(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",12),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",e.code),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate3"](" ",e.code," - ",e.date," by ",e.created_by," ")}}function h(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"app-select-product",13),r["\u0275\u0275listener"]("onAdd",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().productSelected(t)})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("timestamp",e.ts)("type","search")}}function g(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"option",12),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275propertyInterpolate"]("value",e),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](e)}}function f(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"input",30),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"](2).product.unit=t})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275property"]("ngModel",e.product.unit)}}function b(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"span"),r["\u0275\u0275text"](2),r["\u0275\u0275elementStart"](3,"button",14),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().cancel()})),r["\u0275\u0275element"](4,"i",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",6),r["\u0275\u0275elementStart"](6,"label"),r["\u0275\u0275text"](7,"Quantity Counted"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](8,"br"),r["\u0275\u0275elementStart"](9,"input",16),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().counted=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",6),r["\u0275\u0275elementStart"](11,"label"),r["\u0275\u0275text"](12,"Selling Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](13,"br"),r["\u0275\u0275elementStart"](14,"input",17),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().product.price=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",6),r["\u0275\u0275elementStart"](16,"label"),r["\u0275\u0275text"](17,"Cost Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](18,"br"),r["\u0275\u0275elementStart"](19,"input",18),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().product.cost_price=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"div",6),r["\u0275\u0275elementStart"](21,"label"),r["\u0275\u0275text"](22,"Category"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](23,"br"),r["\u0275\u0275elementStart"](24,"input",19),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().product.category=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"div",6),r["\u0275\u0275elementStart"](26,"label"),r["\u0275\u0275text"](27,"Shelf"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](28,"br"),r["\u0275\u0275elementStart"](29,"input",20),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().product.shelf=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"div",6),r["\u0275\u0275elementStart"](31,"label"),r["\u0275\u0275text"](32,"Unit"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](33,"br"),r["\u0275\u0275elementStart"](34,"select",21),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().unit_selected=t})),r["\u0275\u0275template"](35,g,2,2,"option",8),r["\u0275\u0275elementStart"](36,"option",22),r["\u0275\u0275text"](37,"Other"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](38,f,1,1,"input",23),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](39,"div",6),r["\u0275\u0275elementStart"](40,"label"),r["\u0275\u0275text"](41,"Size"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](42,"br"),r["\u0275\u0275elementStart"](43,"input",24),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().product.size=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](44,"div",6),r["\u0275\u0275elementStart"](45,"label"),r["\u0275\u0275text"](46,"Expiry Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](47,"br"),r["\u0275\u0275elementStart"](48,"input",25),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().product.expiry=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](49,"div",26),r["\u0275\u0275elementStart"](50,"div",27),r["\u0275\u0275elementStart"](51,"button",28),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().cancel()})),r["\u0275\u0275text"](52,"Cancel"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](53,"div",27),r["\u0275\u0275elementStart"](54,"button",29),r["\u0275\u0275text"](55,"Submit"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("Item Name: ",e.product.name," "),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngModel",e.counted),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.product.price),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.product.cost_price),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.product.category),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.product.shelf),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.unit_selected),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.units),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","other"==e.unit_selected),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.product.size),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngModel",e.product.expiry)}}const y=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o){this.dbService=e,this.socket=t,this.notify=n,this.localforage=i,this.authService=o,this.product=null,this.sessions=[],this.units=[],this.unit_selected="",this.ts=this.dbService.getToday("timestamp_string"),this.year=this.dbService.getThisYear()}ngOnInit(){this.getSessions(),this.units=this.dbService.units}getItemStock(){this.dbService.getData("product/getPendingStockQuantity?product="+this.product.id+"&code="+this.code,this.authService.current_user).subscribe(e=>{"1"==e.status&&(window.confirm("previous entry found for the selected product. click ok to use previous data, click cancel to enter fresh values")&&(this.product.expiry=e.data.expiry),this.product.size=e.data.size,this.product.category=e.data.category,this.product.cost_price=e.data.cost_price,this.product.price=e.data.current_price,this.counted=e.data.quantity_counted,this.unit_selected=e.data.unit,this.product.unit=e.data.unit,this.product.shelf=e.data.shelf)},e=>{this.notify.failNotification("Unable to get previous stock. Check connection")})}getSessions(){this.notify.showLoading(),this.dbService.getData("product/getPendingStockAdjustmentSessions?year="+this.year,this.authService.current_user).subscribe(e=>{this.sessions=e.data,this.notify.hideLoading()},e=>{this.notify.hideLoading(),this.notify.failNotification("Unable to get sessions")})}productSelected(e){this.product=e,this.product.stock=e.stock,null!=this.product.cost_price&&null!=this.product.cost_price&&""!=this.product.cost_price||(this.product.cost_price=0),this.unit_selected=e.unit,this.getItemStock()}submit(){let e=new FormData;this.notify.showLoading(),"other"!=this.unit_selected&&(this.product.unit=this.unit_selected),e.append("product",this.product.id),e.append("quantity_counted",this.counted),e.append("quantity_expected",this.product.stock),e.append("size",this.product.size),e.append("expiry",this.product.expiry),e.append("cost_price",this.product.cost_price),e.append("current_price",this.product.price),e.append("category",this.product.category),e.append("shelf",this.product.shelf),e.append("unit",this.product.unit),e.append("code",this.code),e.append("date",this.dbService.getToday()),this.dbService.postData(e,"product/savePendingSingleStockAdjustment",this.authService.current_user).subscribe(e=>{switch(this.notify.hideLoading(),e.status){case"0":this.notify.failNotification("Error: You are not logged in");break;case"-9":this.notify.failNotification("Error: You are not permitted");break;case"-1":this.notify.failNotification("Server error. Contact Admin");break;default:this.cancel(),this.notify.showNotification("Submitted successfully","success",3e3)}},e=>{this.notify.noConnectionNotification()})}cancel(){this.product=null,this.counted=null}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-client-stock-taking"]],decls:16,vars:4,consts:[[1,"content"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"form-group"],["required","","name","code",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"timestamp","type","onAdd",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],[4,"ngIf"],[3,"value"],[3,"timestamp","type","onAdd"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-remove"],["autocomplete","off","name","counted","type","text",1,"form-control",3,"ngModel","ngModelChange"],["autocomplete","off","name","selling_price","type","text",1,"form-control",3,"ngModel","ngModelChange"],["autocomplete","off","name","cost_price","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","category","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","shelf","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","unit",1,"",3,"ngModel","ngModelChange"],["value","other"],["class","form-control","type","text","name","unit",3,"ngModel","ngModelChange",4,"ngIf"],["autocomplete","off","name","size","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","expiry","type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],[1,"col"],["type","button",1,"btn","btn-block","btn-danger",3,"click"],["type","submit",1,"btn","btn-block","btn-success"],["type","text","name","unit",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"div",5),r["\u0275\u0275elementStart"](6,"div",6),r["\u0275\u0275elementStart"](7,"label"),r["\u0275\u0275text"](8," Select the session code"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"br"),r["\u0275\u0275elementStart"](10,"select",7),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.code=e})),r["\u0275\u0275template"](11,m,2,4,"option",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](12,h,1,2,"app-select-product",9),r["\u0275\u0275elementStart"](13,"form",10),r["\u0275\u0275listener"]("ngSubmit",(function(){return t.submit()})),r["\u0275\u0275element"](14,"hr"),r["\u0275\u0275template"](15,b,56,11,"div",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](10),r["\u0275\u0275property"]("ngModel",t.code),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",t.sessions),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==t.product),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf",null!=t.product))},directives:[u.m,u.l,u.e,u.h,i.i,i.j,u.f,u.g,u.i,u.n,p.a,u.b],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.f.forChild(y)],o.f]}),e})();var S=n("nEHF"),x=n("nBlB");let E=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,v,S.a,x.a]]}),e})()},nBlB:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),o=n("nEHF"),r=n("9EpT"),a=n("fXoL");let c=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.b,o.a,r.b]]}),e})()}}]);