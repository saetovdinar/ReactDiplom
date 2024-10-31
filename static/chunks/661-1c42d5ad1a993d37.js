"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[661],{1186:function(a,e,t){t.d(e,{CP:function(){return n},Cb:function(){return l},QC:function(){return o},ax:function(){return i},kk:function(){return c},mv:function(){return d}});var s=t(3464);let r="http://localhost:7070/api/";async function o(){try{return(await s.Z.get(r+"top-sales")).data}catch(a){throw console.log("getTopSales API error:"+a),Error("Ошибка getTopSales API")}}async function n(){try{return(await s.Z.get(r+"categories")).data}catch(a){throw console.log("getCategories API error:"+a),Error("Ошибка getCategories API")}}async function c(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;try{let t=r+"items";if(0===a&&0===e)return(await s.Z.get(t)).data;if(0!==a&&0===e)return(await s.Z.get(t,{params:{categoryId:a}})).data;return(await s.Z.get(t,{params:{categoryId:a,offset:e}})).data}catch(a){throw console.log("getItems API error:"+a),Error("Ошибка getItems API")}}async function l(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";try{return(await s.Z.get(r+"items/",{params:{categoryId:a,offset:e,q:t}})).data}catch(a){throw console.log("getItemsBySearch API error:"+a),Error("Ошибка getItemsBySearch API")}}async function i(a){try{return(await s.Z.get(r+"items/".concat(a))).data}catch(a){throw console.log("getProductByID API error:"+a),Error("Ошибка getProductByID API")}}async function d(a){try{return await s.Z.post(r+"order",a)}catch(a){throw console.log("postOrder API error:"+a),Error("Ошибка postOrder API")}}},8494:function(a,e,t){t.d(e,{default:function(){return n}});var s=t(7437),r="/_next/static/media/footer-sprite.89c2203a.png",o=t(7648);function n(){return(0,s.jsx)("footer",{className:"container bg-light footer",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("section",{children:[(0,s.jsx)("h5",{children:"Информация"}),(0,s.jsxs)("ul",{className:"nav flex-column",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(o.default,{href:"/info",className:"nav-link",children:"О магазине"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(o.default,{href:"/goodscatalogue",className:"nav-link",children:"Каталог"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(o.default,{href:"/contacts",className:"nav-link",children:"Контакты"})})]})]})}),(0,s.jsxs)("div",{className:"col",children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("h5",{children:"Принимаем к оплате:"}),(0,s.jsxs)("div",{className:"footer-pay",children:[(0,s.jsx)("div",{className:"footer-pay-systems footer-pay-systems-paypal",style:{backgroundImage:"url(".concat(r,")")}}),(0,s.jsx)("div",{className:"footer-pay-systems footer-pay-systems-master-card",style:{backgroundImage:"url(".concat(r,")")}}),(0,s.jsx)("div",{className:"footer-pay-systems footer-pay-systems-visa",style:{backgroundImage:"url(".concat(r,")")}}),(0,s.jsx)("div",{className:"footer-pay-systems footer-pay-systems-yandex",style:{backgroundImage:"url(".concat(r,")")}}),(0,s.jsx)("div",{className:"footer-pay-systems footer-pay-systems-webmoney",style:{backgroundImage:"url(".concat(r,")")}}),(0,s.jsx)("div",{className:"footer-pay-systems footer-pay-systems-qiwi",style:{backgroundImage:"url(".concat(r,")")}})]})]}),(0,s.jsx)("section",{children:(0,s.jsx)("div",{className:"footer-copyright",children:"2009-2019 \xa9 BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.Доставка по всей России!"})})]}),(0,s.jsx)("div",{className:"col text-right",children:(0,s.jsxs)("section",{className:"footer-contacts",children:[(0,s.jsx)("h5",{children:"Контакты:"}),(0,s.jsx)(o.default,{className:"footer-contacts-phone",href:"tel:+7-495-790-35-03",children:"+7 495 79 03 5 03"}),(0,s.jsx)("span",{className:"footer-contacts-working-hours",children:"Ежедневно: с 09-00 до 21-00"}),(0,s.jsx)(o.default,{className:"footer-contacts-email",href:"mailto:office@bosanoga.ru",children:"office@bosanoga.ru"}),(0,s.jsxs)("div",{className:"footer-social-links",children:[(0,s.jsx)("div",{className:"footer-social-link footer-social-link-twitter"}),(0,s.jsx)("div",{className:"footer-social-link footer-social-link-vk"})]})]})})]})})}},3182:function(a,e,t){t.d(e,{default:function(){return h}});var s=t(7437),r=t(3145),o={src:"/_next/static/media/header-logo.a00c1641.png",height:59,width:184,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/ALHAys/Y37fFzqe4w6K0wKy8xqK0wKGzvwCzwcvp7vLJ09vS2+LH0trJ1NzV3uWywcsAr77Ix9HZtMLLrr3Ir77JqrrFusfRqLjDGvI3WQfS72sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},n=t(7648),c={src:"/_next/static/media/header-controls-sprite.732e8a59.png"},l=t(1501),i=t(9376),d=t(2265),A=t(8575),u=t(8846),g=t(1485);function h(){let a=(0,A.I0)(),e=(0,i.useRouter)(),[t,h]=(0,d.useState)(!1),f=(0,A.v9)(g.y),m=()=>{a((0,u.Qr)(""))};return(0,s.jsx)("header",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:[(0,s.jsx)(n.default,{className:"navbar-brand",href:"/",children:(0,s.jsx)(r.default,{src:o,alt:"Bosa Noga"})}),(0,s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarMain",children:[(0,s.jsxs)("ul",{className:"navbar-nav mr-auto",children:[(0,s.jsx)("li",{className:"nav-item active",children:(0,s.jsx)(n.default,{onClick:m,className:"nav-link",href:"/",children:"Главная"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(n.default,{onClick:m,className:"nav-link",href:"/goodscatalogue",children:"Каталог"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(n.default,{onClick:m,className:"nav-link",href:"/info",children:"О магазине"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(n.default,{onClick:m,className:"nav-link",href:"/contacts",children:"Контакты"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"header-controls-pics",children:[t&&(0,s.jsx)(l.Z,{onBlur:a=>{a.preventDefault(),h(!t),e.push("/goodscatalogue")}}),(0,s.jsx)("div",{onClick:a=>{a.preventDefault(),h(!t)},"data-id":"search-expander",className:"header-controls-pic header-controls-search",style:t?{display:"none"}:{display:"block",backgroundImage:"url(".concat(c.src,")"),backgroundPosition:"32px 0px"}}),(0,s.jsx)(n.default,{href:"/basket",children:(0,s.jsxs)("div",{className:"header-controls-pic header-controls-cart",style:{backgroundImage:"url(".concat(c.src,")"),backgroundPosition:"90px 0px"},children:[f>0&&(0,s.jsx)("div",{className:"header-controls-cart-full",children:f}),(0,s.jsx)("div",{className:"header-controls-cart-menu"})]})})]}),(0,s.jsx)("form",{"data-id":"search-form",className:"header-controls-search-form form-inline invisible",children:(0,s.jsx)("input",{className:"form-control",placeholder:"Поиск"})})]})]})]})})})})}},1501:function(a,e,t){t.d(e,{Z:function(){return n}});var s=t(7437),r=t(8575),o=t(8846);function n(a){let{onBlur:e}=a,t=(0,r.v9)(a=>a.catalog.searchText),n=(0,r.v9)(a=>a.catalog.categoryId),c=(0,r.I0)(),l=a=>{c((0,o.Qr)(a))},i=()=>{c((0,o.fY)([])),c((0,o.VB)({category:n,offset:0,q:t}))};return(0,s.jsx)("form",{onSubmit:a=>{a.preventDefault(),i()},className:"catalog-search-form form-inline",children:(0,s.jsx)("input",{onBlur:e,onChange:a=>l(a.target.value),value:t,className:"form-control",placeholder:"Поиск"})})}},8846:function(a,e,t){t.d(e,{DY:function(){return o},Gl:function(){return l},Qr:function(){return u},VB:function(){return c},fY:function(){return A},m_:function(){return n},nb:function(){return h},sW:function(){return g},uA:function(){return d},zL:function(){return i}});var s=t(1455),r=t(1186);let o=(0,s.hg)("catalog1/fetchCatalogItems",async a=>{let{category:e,offset:t}=a;return await (0,r.kk)(e,t)}),n=(0,s.hg)("catalog2/fetchGetItemByCatalog",async a=>{let{category:e,offset:t}=a;return await (0,r.kk)(e,t)}),c=(0,s.hg)("catalog3/fetchSearch",async a=>{let{category:e,offset:t,q:s}=a;return await (0,r.Cb)(e,t,s)}),l=(0,s.oM)({name:"catalog",initialState:{catalog:[],categoryId:0,offset:6,isLoading:!1,searchText:"",showMoreFlag:!0},reducers:{setCategoryId:(a,e)=>{a.categoryId=e.payload},incrementOffset:a=>{a.offset+=6},setShowMoreFlag:(a,e)=>{a.showMoreFlag=e.payload},setOffset:a=>{a.offset=6},setSaerchText:(a,e)=>{a.searchText=e.payload},setCatalog:(a,e)=>{a.catalog=e.payload}},extraReducers:a=>{a.addCase(o.fulfilled,(a,e)=>{a.catalog=e.payload,a.isLoading=!0,e.payload.length<6&&(a.showMoreFlag=!1)}).addCase(o.pending,a=>{a.isLoading=!1}).addCase(o.rejected,a=>{a.isLoading=!1}).addCase(n.fulfilled,(a,e)=>{a.catalog=[...a.catalog,...e.payload],a.isLoading=!0,e.payload.length<6&&(a.showMoreFlag=!1)}).addCase(n.pending,a=>{a.isLoading=!1}).addCase(n.rejected,a=>{a.isLoading=!1}).addCase(c.fulfilled,(a,e)=>{a.catalog=[...a.catalog,...e.payload],e.payload.length<6&&(a.showMoreFlag=!1),a.isLoading=!0}).addCase(c.pending,a=>{a.isLoading=!1}).addCase(c.rejected,a=>{a.isLoading=!1})}}),{setShowMoreFlag:i,setCategoryId:d,setCatalog:A,setSaerchText:u,incrementOffset:g,setOffset:h}=l.actions;l.reducer},1485:function(a,e,t){t.d(e,{g:function(){return o},y:function(){return n}});var s=t(2713);let r=a=>a.basket.basket,o=(0,s.P1)([r],a=>a.reduce((a,e)=>a+e.price*e.quantity,0)),n=(0,s.P1)([r],a=>a.reduce((a,e)=>a+e.quantity,0))},2721:function(a,e,t){t.r(e),e.default={src:"/_next/static/media/banner.cf93c430.jpg",height:357,width:1201,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJgaP//EABoQAAAHAAAAAAAAAAAAAAAAAAABAwQzcbL/2gAIAQEAAT8AawL0eh//xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AeH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQMx/9oACAEDAQE/AJYz/9k=",blurWidth:8,blurHeight:2}}}]);