(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{151:function(e,t,a){Promise.resolve().then(a.bind(a,5558))},5558:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(7437),i=a(1501),s=a(3145),r=a(3182),c=a(8494),l=a(2721),d=a(2345),o=a(3351),u=a(2985);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.default,{}),(0,n.jsx)("main",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col",children:[(0,n.jsxs)("header",{className:"banner",children:[(0,n.jsx)(s.default,{src:l.default,className:"img-fluid",alt:"К весне готовы!"}),(0,n.jsx)("h2",{className:"banner-header",children:"К весне готовы!"})]}),(0,n.jsxs)("section",{className:"catalog",children:[(0,n.jsx)(i.Z,{onBlur:()=>{}}),(0,n.jsx)(o.Z,{}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(u.Z,{})]})]})})}),(0,n.jsx)(c.default,{})]})}},2345:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7437),i=a(3145),s=a(7648),r=a(8575),c=a(8846),l=a(9290),d=a(2265),o=a(4708);function u(){let e=(0,r.v9)(e=>e.catalog.catalog),t=(0,r.v9)(e=>e.catalog.isLoading),a=(0,r.I0)();(0,d.useEffect)(()=>{0===e.length&&a((0,c.DY)({category:0,offset:0}))},[]);let u=e=>{a((0,l.dQ)(e))};return(0,n.jsx)(n.Fragment,{children:t?(0,n.jsx)("div",{className:"row",children:null==e?void 0:e.map(e=>{var t;return(0,n.jsx)("div",{className:"col-4",children:(0,n.jsxs)("div",{className:"card catalog-item-card",children:[(0,n.jsx)("div",{className:"card-img_cont",children:(0,n.jsx)(i.default,{layout:"fill",objectFit:"cover",src:null==e?void 0:null===(t=e.images)||void 0===t?void 0:t[0],className:"card-img-top img-fluid",alt:"Босоножки 'MYER'"})}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("p",{className:"card-text",children:e.title}),(0,n.jsxs)("p",{className:"card-text",children:[e.price," руб."]}),(0,n.jsx)(s.default,{href:"/products",className:"btn btn-outline-primary",onClick:()=>u(e.id),children:"Заказать"})]})]})},e.id)})}):(0,n.jsx)(o.Z,{style:{}})})}},3351:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7437);function i(e){let{style:t,children:a,id:i,clickHandler:s}=e;return(0,n.jsx)("li",{style:t,id:i,className:"nav-item nav-link",onClick:e=>{s(e.target.id,a)},children:a})}var s=a(8575),r=a(4216),c=a(8846),l=a(4708),d=a(2265);function o(){let e=(0,s.v9)(e=>e.categories.categories),t=(0,s.v9)(e=>e.catalog.categoryId),a=(0,s.v9)(e=>e.categories.isLoading),[o,u]=(0,d.useState)("Все"),f=(0,s.I0)();(0,d.useEffect)(()=>{0===e.length&&f((0,r.pE)())});let g=(e,a)=>{u(a),f((0,c.zL)(!0)),t!==+e&&(f((0,c.nb)()),f((0,c.uA)(e)),f((0,c.Qr)("")),f((0,c.DY)({category:+e,offset:0})))};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-center",children:"Каталог"}),a?(0,n.jsxs)("ul",{className:"catalog-categories nav justify-content-center",children:[(0,n.jsx)(i,{style:"Все"===o?{color:"red"}:{color:"inherit"},clickHandler:g,id:"0",children:"Все"}),null==e?void 0:e.map((e,t)=>(0,n.jsx)(i,{style:o===e.title?{color:"red"}:{color:"inherit"},clickHandler:g,id:e.id.toString(),children:e.title},t))]}):(0,n.jsx)(l.Z,{style:{height:"100px"}})]})}},4708:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(7437);function i(e){let{style:t}=e;return(0,n.jsx)("div",{style:t,className:"preloader_container",children:(0,n.jsxs)("div",{className:"preloader",children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]})})}},2985:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(7437),i=a(8846),s=a(8575);function r(){let e=(0,s.I0)(),t=(0,s.v9)(e=>e.catalog.showMoreFlag),a=(0,s.v9)(e=>e.catalog.categoryId),r=(0,s.v9)(e=>e.catalog.offset),c=(0,s.v9)(e=>e.catalog.searchText);return(0,n.jsx)("div",{className:"text-center",children:t&&(0,n.jsx)("button",{onClick:()=>{if(""!==c){e((0,i.VB)({category:a,offset:r,q:c})).then(()=>{e((0,i.Qr)("")),e((0,i.sW)())});return}e((0,i.m_)({category:a,offset:r})).then(()=>{e((0,i.sW)())})},className:"btn btn-outline-primary",children:"Загрузить ещё"})})}},4216:function(e,t,a){"use strict";a.d(t,{S$:function(){return r},pE:function(){return s}});var n=a(1455),i=a(1186);let s=(0,n.hg)("categories/fetchCategoriesItems",async()=>await (0,i.CP)()),r=(0,n.oM)({name:"categories",initialState:{categories:[],isLoading:!0},reducers:{},extraReducers:e=>{e.addCase(s.fulfilled,(e,t)=>{e.categories=t.payload,e.isLoading=!0}).addCase(s.pending,e=>{e.isLoading=!1}).addCase(s.rejected,e=>{e.isLoading=!1})}});r.reducer},9290:function(e,t,a){"use strict";a.d(t,{M$:function(){return l},X1:function(){return u},dQ:function(){return s},g1:function(){return o},hH:function(){return c},mh:function(){return r},yk:function(){return d}});var n=a(1455),i=a(1186);let s=(0,n.hg)("product/axiosGetProduct",async e=>await (0,i.ax)(e)),r=(0,n.oM)({name:"product",initialState:{product:{id:0,category:0,title:"",images:[""],sku:"",manufacturer:"",color:"",material:"",reason:"",season:"",heelSize:"",price:0,sizes:[{size:"",available:!0}]},isSelected:!1,isLoading:!0,quantity:1,choosenSize:""},reducers:{incrementQuantity:e=>{10!==e.quantity&&(e.quantity+=1)},decrementQuantity:e=>{1!==e.quantity&&(e.quantity-=1)},setSize:(e,t)=>{e.choosenSize=t.payload},setQuantity:e=>{e.quantity=1},setIsSelectedSlice:(e,t)=>{e.isSelected=t.payload}},extraReducers:e=>{e.addCase(s.fulfilled,(e,t)=>{e.product=t.payload,e.isLoading=!0}).addCase(s.pending,e=>{e.isLoading=!1}).addCase(s.rejected,e=>{e.isLoading=!1})}});r.reducer;let{setIsSelectedSlice:c,setQuantity:l,setSize:d,incrementQuantity:o,decrementQuantity:u}=r.actions}},function(e){e.O(0,[948,552,661,971,117,744],function(){return e(e.s=151)}),_N_E=e.O()}]);