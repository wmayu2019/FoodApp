(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{26:function(e,c,t){},28:function(e,c,t){},57:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),r=t(5),n=t.n(r),i=(t(26),t(7)),d=t.n(i),j=t(16),l=t(20),o=(t(28),t(17)),p=t.n(o),u=t(1);var b=function(e){return Object(u.jsx)("div",{className:"headerdta ",children:Object(u.jsxs)("h2",{className:"display-3",children:[" ",Object(u.jsx)(p.a,{style:{fontSize:"60px"}}),"Food Recipe App"]})})},h=function(e){var c=e.recipies;return Object(u.jsx)("div",{className:"row",children:c.map((function(e){return Object(u.jsx)("div",{className:"col-3 mt-5",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.recipe.image,className:"img-fluid rounded-circle mx-auto p-3 w-60"}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"text-center",children:e.recipe.label}),Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"list-group list-group-flush",children:e.recipe.ingredientLines.map((function(e){return Object(u.jsx)("li",{className:"list-group-item",children:e})}))})})]})]})})}))})};var x=function(){return Object(u.jsx)("div",{className:"footerdta ",children:Object(u.jsx)("p",{children:"@copyrights2021"})})},m=t(19),O=t.n(m);var f=function(){var e=Object(s.useState)("[]"),c=Object(l.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){r()}),[]);var r=function(){var e=Object(j.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.edamam.com/api/recipes/v2?type=public&app_id=ee8218f6&app_key=aac233083a42d7668dfe08261ed16932&diet=balanced");case 2:c=e.sent,a(c.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(h,{recipies:t})})]}),Object(u.jsx)(x,{})]})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.88d95c17.chunk.js.map