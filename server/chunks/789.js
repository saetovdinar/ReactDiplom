exports.id=789,exports.ids=[789],exports.modules={2900:(e,a,s)=>{Promise.resolve().then(s.bind(s,8636))},4332:(e,a,s)=>{Promise.resolve().then(s.t.bind(s,3642,23)),Promise.resolve().then(s.t.bind(s,7586,23)),Promise.resolve().then(s.t.bind(s,7838,23)),Promise.resolve().then(s.t.bind(s,8057,23)),Promise.resolve().then(s.t.bind(s,7741,23)),Promise.resolve().then(s.t.bind(s,3118,23))},8636:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var t=s(7247),r=s(3102),o=s(4577),i=s(8584),l=s(8764),c=s(3490),d=s(1663),n=s(4946);let A=e=>a=>s=>{let t=a(s);if(s.type===n.gn.type||s.type===n.O4.type){let a=e.getState().basket.basket;localStorage.setItem("basket",JSON.stringify(a))}return t},g=(0,o.xC)({reducer:{topSales:i.yC.reducer,catalog:l.Gl.reducer,categories:c.S$.reducer,product:d.mh.reducer,basket:n.Cy.reducer},middleware:e=>e().concat(A)});function u({children:e}){return t.jsx(r.zt,{store:g,children:e})}function h({children:e}){return t.jsx(u,{children:t.jsx("html",{lang:"en",children:t.jsx("body",{children:e})})})}s(9973),s(4047)},7056:(e,a,s)=>{"use strict";s.d(a,{CP:()=>i,Cb:()=>c,QC:()=>o,ax:()=>d,kk:()=>l,mv:()=>n});var t=s(863);let r="http://localhost:7070/api/";async function o(){try{return(await t.Z.get(r+"top-sales")).data}catch(e){throw console.log("getTopSales API error:"+e),Error("Ошибка getTopSales API")}}async function i(){try{return(await t.Z.get(r+"categories")).data}catch(e){throw console.log("getCategories API error:"+e),Error("Ошибка getCategories API")}}async function l(e=0,a=0){try{let s=r+"items";if(0===e&&0===a)return(await t.Z.get(s)).data;if(0!==e&&0===a)return(await t.Z.get(s,{params:{categoryId:e}})).data;return(await t.Z.get(s,{params:{categoryId:e,offset:a}})).data}catch(e){throw console.log("getItems API error:"+e),Error("Ошибка getItems API")}}async function c(e=0,a=0,s=""){try{return(await t.Z.get(r+"items/",{params:{categoryId:e,offset:a,q:s}})).data}catch(e){throw console.log("getItemsBySearch API error:"+e),Error("Ошибка getItemsBySearch API")}}async function d(e){try{return(await t.Z.get(r+`items/${e}`)).data}catch(e){throw console.log("getProductByID API error:"+e),Error("Ошибка getProductByID API")}}async function n(e){try{return await t.Z.post(r+"order",e)}catch(e){throw console.log("postOrder API error:"+e),Error("Ошибка postOrder API")}}},9596:(e,a,s)=>{"use strict";s.d(a,{default:()=>i});var t=s(7247);let r={src:"/_next/static/media/footer-sprite.89c2203a.png"};var o=s(9906);function i(){return t.jsx("footer",{className:"container bg-light footer",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col",children:(0,t.jsxs)("section",{children:[t.jsx("h5",{children:"Информация"}),(0,t.jsxs)("ul",{className:"nav flex-column",children:[t.jsx("li",{className:"nav-item",children:t.jsx(o.default,{href:"/info",className:"nav-link",children:"О магазине"})}),t.jsx("li",{className:"nav-item",children:t.jsx(o.default,{href:"/goodscatalogue",className:"nav-link",children:"Каталог"})}),t.jsx("li",{className:"nav-item",children:t.jsx(o.default,{href:"/contacts",className:"nav-link",children:"Контакты"})})]})]})}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsxs)("section",{children:[t.jsx("h5",{children:"Принимаем к оплате:"}),(0,t.jsxs)("div",{className:"footer-pay",children:[t.jsx("div",{className:"footer-pay-systems footer-pay-systems-paypal",style:{backgroundImage:`url(${r.src})`}}),t.jsx("div",{className:"footer-pay-systems footer-pay-systems-master-card",style:{backgroundImage:`url(${r.src})`}}),t.jsx("div",{className:"footer-pay-systems footer-pay-systems-visa",style:{backgroundImage:`url(${r.src})`}}),t.jsx("div",{className:"footer-pay-systems footer-pay-systems-yandex",style:{backgroundImage:`url(${r.src})`}}),t.jsx("div",{className:"footer-pay-systems footer-pay-systems-webmoney",style:{backgroundImage:`url(${r.src})`}}),t.jsx("div",{className:"footer-pay-systems footer-pay-systems-qiwi",style:{backgroundImage:`url(${r.src})`}})]})]}),t.jsx("section",{children:t.jsx("div",{className:"footer-copyright",children:"2009-2019 \xa9 BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.Доставка по всей России!"})})]}),t.jsx("div",{className:"col text-right",children:(0,t.jsxs)("section",{className:"footer-contacts",children:[t.jsx("h5",{children:"Контакты:"}),t.jsx(o.default,{className:"footer-contacts-phone",href:"tel:+7-495-790-35-03",children:"+7 495 79 03 5 03"}),t.jsx("span",{className:"footer-contacts-working-hours",children:"Ежедневно: с 09-00 до 21-00"}),t.jsx(o.default,{className:"footer-contacts-email",href:"mailto:office@bosanoga.ru",children:"office@bosanoga.ru"}),(0,t.jsxs)("div",{className:"footer-social-links",children:[t.jsx("div",{className:"footer-social-link footer-social-link-twitter"}),t.jsx("div",{className:"footer-social-link footer-social-link-vk"})]})]})})]})})}},2325:(e,a,s)=>{"use strict";s.d(a,{default:()=>h});var t=s(7247),r=s(4597);let o={src:"/_next/static/media/header-logo.a00c1641.png",height:59,width:184,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/ALHAys/Y37fFzqe4w6K0wKy8xqK0wKGzvwCzwcvp7vLJ09vS2+LH0trJ1NzV3uWywcsAr77Ix9HZtMLLrr3Ir77JqrrFusfRqLjDGvI3WQfS72sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};var i=s(9906);let l={src:"/_next/static/media/header-controls-sprite.732e8a59.png"};var c=s(768),d=s(4178),n=s(8964),A=s(3102),g=s(8764),u=s(9720);function h(){let e=(0,A.I0)(),a=(0,d.useRouter)(),[s,h]=(0,n.useState)(!1),m=(0,A.v9)(u.y),f=()=>{e((0,g.Qr)(""))};return t.jsx("header",{className:"container",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col",children:(0,t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:[t.jsx(i.default,{className:"navbar-brand",href:"/",children:t.jsx(r.default,{src:o,alt:"Bosa Noga"})}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarMain",children:[(0,t.jsxs)("ul",{className:"navbar-nav mr-auto",children:[t.jsx("li",{className:"nav-item active",children:t.jsx(i.default,{onClick:f,className:"nav-link",href:"/",children:"Главная"})}),t.jsx("li",{className:"nav-item",children:t.jsx(i.default,{onClick:f,className:"nav-link",href:"/goodscatalogue",children:"Каталог"})}),t.jsx("li",{className:"nav-item",children:t.jsx(i.default,{onClick:f,className:"nav-link",href:"/info",children:"О магазине"})}),t.jsx("li",{className:"nav-item",children:t.jsx(i.default,{onClick:f,className:"nav-link",href:"/contacts",children:"Контакты"})})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"header-controls-pics",children:[s&&t.jsx(c.Z,{onBlur:e=>{e.preventDefault(),h(!s),a.push("/goodscatalogue")}}),t.jsx("div",{onClick:e=>{e.preventDefault(),h(!s)},"data-id":"search-expander",className:"header-controls-pic header-controls-search",style:s?{display:"none"}:{display:"block",backgroundImage:`url(${l.src})`,backgroundPosition:"32px 0px"}}),t.jsx(i.default,{href:"/basket",children:(0,t.jsxs)("div",{className:"header-controls-pic header-controls-cart",style:{backgroundImage:`url(${l.src})`,backgroundPosition:"90px 0px"},children:[m>0&&t.jsx("div",{className:"header-controls-cart-full",children:m}),t.jsx("div",{className:"header-controls-cart-menu"})]})})]}),t.jsx("form",{"data-id":"search-form",className:"header-controls-search-form form-inline invisible",children:t.jsx("input",{className:"form-control",placeholder:"Поиск"})})]})]})]})})})})}},768:(e,a,s)=>{"use strict";s.d(a,{Z:()=>i});var t=s(7247),r=s(3102),o=s(8764);function i({onBlur:e}){let a=(0,r.v9)(e=>e.catalog.searchText),s=(0,r.v9)(e=>e.catalog.categoryId),i=(0,r.I0)(),l=e=>{i((0,o.Qr)(e))},c=()=>{i((0,o.fY)([])),i((0,o.VB)({category:s,offset:0,q:a}))};return t.jsx("form",{onSubmit:e=>{e.preventDefault(),c()},className:"catalog-search-form form-inline",children:t.jsx("input",{onBlur:e,onChange:e=>l(e.target.value),value:a,className:"form-control",placeholder:"Поиск"})})}},4946:(e,a,s)=>{"use strict";s.d(a,{Cy:()=>t,O4:()=>o,QB:()=>r,gn:()=>i});let t=(0,s(4577).oM)({name:"basket",initialState:{basket:[],isLoading:!0},reducers:{setProductToBasket:(e,a)=>{e.basket.some(e=>e.id===a.payload.id)?e.basket.forEach(e=>{e.id===a.payload.id&&e.size===a.payload.size&&(e.quantity+=a.payload.quantity)}):e.basket=[...e.basket,a.payload]},setBasket:(e,a)=>{e.basket=a.payload},deleteProductFromBasket:(e,a)=>{e.basket=e.basket.filter(e=>e.id!==a.payload)}}});t.reducer;let{setBasket:r,deleteProductFromBasket:o,setProductToBasket:i}=t.actions},8764:(e,a,s)=>{"use strict";s.d(a,{DY:()=>o,Gl:()=>c,Qr:()=>g,VB:()=>l,fY:()=>A,m_:()=>i,nb:()=>h,sW:()=>u,uA:()=>n,zL:()=>d});var t=s(4577),r=s(7056);let o=(0,t.hg)("catalog1/fetchCatalogItems",async({category:e,offset:a})=>await (0,r.kk)(e,a)),i=(0,t.hg)("catalog2/fetchGetItemByCatalog",async({category:e,offset:a})=>await (0,r.kk)(e,a)),l=(0,t.hg)("catalog3/fetchSearch",async({category:e,offset:a,q:s})=>await (0,r.Cb)(e,a,s)),c=(0,t.oM)({name:"catalog",initialState:{catalog:[],categoryId:0,offset:6,isLoading:!1,searchText:"",showMoreFlag:!0},reducers:{setCategoryId:(e,a)=>{e.categoryId=a.payload},incrementOffset:e=>{e.offset+=6},setShowMoreFlag:(e,a)=>{e.showMoreFlag=a.payload},setOffset:e=>{e.offset=6},setSaerchText:(e,a)=>{e.searchText=a.payload},setCatalog:(e,a)=>{e.catalog=a.payload}},extraReducers:e=>{e.addCase(o.fulfilled,(e,a)=>{e.catalog=a.payload,e.isLoading=!0,a.payload.length<6&&(e.showMoreFlag=!1)}).addCase(o.pending,e=>{e.isLoading=!1}).addCase(o.rejected,e=>{e.isLoading=!1}).addCase(i.fulfilled,(e,a)=>{e.catalog=[...e.catalog,...a.payload],e.isLoading=!0,a.payload.length<6&&(e.showMoreFlag=!1)}).addCase(i.pending,e=>{e.isLoading=!1}).addCase(i.rejected,e=>{e.isLoading=!1}).addCase(l.fulfilled,(e,a)=>{e.catalog=[...e.catalog,...a.payload],a.payload.length<6&&(e.showMoreFlag=!1),e.isLoading=!0}).addCase(l.pending,e=>{e.isLoading=!1}).addCase(l.rejected,e=>{e.isLoading=!1})}}),{setShowMoreFlag:d,setCategoryId:n,setCatalog:A,setSaerchText:g,incrementOffset:u,setOffset:h}=c.actions;c.reducer},3490:(e,a,s)=>{"use strict";s.d(a,{S$:()=>i});var t=s(4577),r=s(7056);let o=(0,t.hg)("categories/fetchCategoriesItems",async()=>await (0,r.CP)()),i=(0,t.oM)({name:"categories",initialState:{categories:[],isLoading:!0},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,(e,a)=>{e.categories=a.payload,e.isLoading=!0}).addCase(o.pending,e=>{e.isLoading=!1}).addCase(o.rejected,e=>{e.isLoading=!1})}});i.reducer},1663:(e,a,s)=>{"use strict";s.d(a,{M$:()=>c,X1:()=>A,dQ:()=>o,g1:()=>n,hH:()=>l,mh:()=>i,yk:()=>d});var t=s(4577),r=s(7056);let o=(0,t.hg)("product/axiosGetProduct",async e=>await (0,r.ax)(e)),i=(0,t.oM)({name:"product",initialState:{product:{id:0,category:0,title:"",images:[""],sku:"",manufacturer:"",color:"",material:"",reason:"",season:"",heelSize:"",price:0,sizes:[{size:"",available:!0}]},isSelected:!1,isLoading:!0,quantity:1,choosenSize:""},reducers:{incrementQuantity:e=>{10!==e.quantity&&(e.quantity+=1)},decrementQuantity:e=>{1!==e.quantity&&(e.quantity-=1)},setSize:(e,a)=>{e.choosenSize=a.payload},setQuantity:e=>{e.quantity=1},setIsSelectedSlice:(e,a)=>{e.isSelected=a.payload}},extraReducers:e=>{e.addCase(o.fulfilled,(e,a)=>{e.product=a.payload,e.isLoading=!0}).addCase(o.pending,e=>{e.isLoading=!1}).addCase(o.rejected,e=>{e.isLoading=!1})}});i.reducer;let{setIsSelectedSlice:l,setQuantity:c,setSize:d,incrementQuantity:n,decrementQuantity:A}=i.actions},8584:(e,a,s)=>{"use strict";s.d(a,{yC:()=>i});var t=s(4577),r=s(7056);let o=(0,t.hg)("get/fetchTopSales",async()=>await (0,r.QC)()),i=(0,t.oM)({name:"topSales",initialState:{sales:[],isLoading:!1},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,(e,a)=>{e.sales=a.payload,e.isLoading=!0}).addCase(o.pending,e=>{e.isLoading=!1}).addCase(o.rejected,e=>{e.isLoading=!0})}});i.reducer},9720:(e,a,s)=>{"use strict";s.d(a,{g:()=>o,y:()=>i});var t=s(1610);let r=e=>e.basket.basket,o=(0,t.P1)([r],e=>e.reduce((e,a)=>e+a.price*a.quantity,0)),i=(0,t.P1)([r],e=>e.reduce((e,a)=>e+a.quantity,0))},4403:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});let t=(0,s(5347).createProxy)(String.raw`/home/runner/work/ReactDiplom/ReactDiplom/frontend/app/layout.tsx#default`)},6008:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});let t={src:"/_next/static/media/banner.cf93c430.jpg",height:357,width:1201,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJgaP//EABoQAAAHAAAAAAAAAAAAAAAAAAABAwQzcbL/2gAIAQEAAT8AawL0eh//xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AeH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQMx/9oACAEDAQE/AJYz/9k=",blurWidth:8,blurHeight:2}},4047:()=>{}};