(this["webpackJsonpaplicacion-gif-react"]=this["webpackJsonpaplicacion-gif-react"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),i=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],u=a[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""),console.log("SUUUUUUUBMIT"))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})},j=n(10),l=n(6),d=n.n(l),b=n(8),f=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=g0INsNvt7XWmxOzq13UZcwHmCcHsdjLQ"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,r=a.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.id,n=e.title,c=e.url;return console.log(t,n,c),Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn  animate__delay-2s",children:[Object(o.jsx)("img",{src:c,alt:n}),Object(o.jsx)("p",{children:n})]})},O=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){console.log(e),r({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,r=n.loading;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading ..."}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(o.jsx)(m,Object(j.a)({},e),e.id)}))})]})},p=function(){var e=Object(c.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:a}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(O,{category:e},e)}))})]})};n(17);r.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b27eddb0.chunk.js.map