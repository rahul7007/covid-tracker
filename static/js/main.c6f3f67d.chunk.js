(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{11:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(5),r=c.n(n),i=(c(11),c(4)),d=c.n(i),l=c(6),o=c(2),j=(c(13),c(0)),b=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),i=r[0],b=r[1],h=Object(s.useState)(""),u=Object(o.a)(h,2),x=u[0],O=u[1],v=function(){var e=Object(l.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c.statewise[0]),a(c.statewise[0].active),b(c.statewise[0].recovered),O(c.statewise[0].deaths),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){v()}),[]);var p={border:"2px solid green",textAlign:"center",color:"white"},m={width:"auto"},f={textAlign:"center",color:"White"};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{style:f,children:"COVID-19 Tracker"}),Object(j.jsx)("h3",{style:f,children:"India"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",style:p,children:["Active Cases",Object(j.jsx)("div",{className:"card bg-transparent",style:m,children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{className:"card-text",children:c})})})]}),Object(j.jsxs)("div",{className:"col",style:p,children:["Total Recoverd",Object(j.jsx)("div",{className:"card bg-transparent",style:m,children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{className:"card-text",children:i})})})]}),Object(j.jsxs)("div",{className:"col",style:p,children:["Total Deaths deaths",Object(j.jsx)("div",{className:"card bg-transparent",style:m,children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{className:"card-text",children:x})})})]})]})]})})};var h=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(15);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.c6f3f67d.chunk.js.map