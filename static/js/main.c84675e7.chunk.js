(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(24),n=c.n(a),s=c(10),i=c(2),j=(c(32),c(33),c(34),c(17)),b=c.n(j),r=c(3),l=function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(s.c,{to:"/",className:l,"data-cy":"Nav",children:"Home"}),Object(r.jsx)(s.c,{to:"/tabs",className:l,"data-cy":"Nav",children:"Tabs"})]})})})},o=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})},x=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){var e=Object(i.s)().tabId,t=h.find((function(t){return t.id===e}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:h.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t.id===e}),children:Object(r.jsx)(s.b,{to:"../".concat(t.id),children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})},m=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},u=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(i.e,{children:[Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(o,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.c,{path:"/home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsx)(i.c,{path:"tabs",children:Object(r.jsx)(i.c,{path:":tabId?",element:Object(r.jsx)(O,{})})})]}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)(m,{})})]})})};n.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.c84675e7.chunk.js.map