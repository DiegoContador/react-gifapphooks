(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n(7),r=n.n(i),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),i=Object(s.a)(n,2),r=i[0],j=i[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[r].concat(Object(u.a)(e))}))},children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("input",{value:r,onChange:function(e){j(e.target.value)}})]})},o=function(e){return Object(a.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:e.img.url,alt:e.img.title})},e.img.id),Object(a.jsx)("p",{children:e.img.title})]})},d=n(6),l=n.n(d),m=n(8),f=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=AhPIm0ja86iHIjvZ7fS5T8K3mET5L1qp"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){i({data:e,loading:!1})}))}),[e]),a}(t),i=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-grid",children:i.map((function(e){return Object(a.jsx)(o,{img:e},e.id)}))})]})},p=function(){var e=Object(c.useState)(["One Punch Man"]),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"GiftExpertApp"}),Object(a.jsx)(j,{setCategories:i}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(b,{category:e},e)}))})]})};n(16);r.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7353b95b.chunk.js.map