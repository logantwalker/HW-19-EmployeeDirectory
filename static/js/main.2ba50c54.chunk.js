(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,a){e.exports=a(73)},26:function(e,t,a){},28:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),i=(a(26),a(20)),m=(a(9),function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.phone),o.a.createElement("td",null,e.start))}),c=function(e){return e.employees.map((function(e,t){return o.a.createElement(m,{key:e.id,name:e.name,email:e.email,phone:e.phone,start:e.startDate})}))},s=(a(28),a(4)),d=function(e){return o.a.createElement("div",{className:"directWin container"},o.a.createElement(s.Table,{centered:!0,hoverable:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{"data-field":"name"},o.a.createElement(s.Button,{flat:!0,node:"button",waves:"light",onClick:e.clicked()},"Name")),o.a.createElement("th",{"data-field":"email"},o.a.createElement(s.Button,{flat:!0,node:"button",waves:"light"},"Email")),o.a.createElement("th",{"data-field":"phone"},o.a.createElement(s.Button,{flat:!0,node:"button",waves:"light"},"Phone")),o.a.createElement("th",{"data-field":"start"},o.a.createElement(s.Button,{flat:!0,node:"button",waves:"light"},"Start Date")))),o.a.createElement("tbody",null,o.a.createElement(c,{employees:e.employees}))))};a(72);var u=function(){var e=[{id:0,name:"Logan Walker",phone:4788675309,email:"placeholder@email.com",startDate:"05/20/2019",birtdDate:"11/27/1995"},{id:1,name:"Alice Lew",phone:4704445555,email:"alice@email.com",startDate:"10/22/2019",birtdDate:"02/27/1997"},{id:2,name:"Kyle Olson",phone:1234567890,email:"kyleOlson@email.com",startDate:"02/05/2020",birtdDate:"05/15/1996"},{id:3,name:"Jose Morgan",phone:9876543210,email:"jose@email.com",startDate:"12/01/2019",birtdDate:"11/06/1993"},{id:4,name:"Pranav Dorbala",phone:5673854623,email:"pranav@email.com",startDate:"11/17/2019",birtdDate:"04/18/1996"},{id:5,name:"Random Person",phone:5673854623,email:"random@email.com",startDate:"11/17/2019",birtdDate:"04/18/1996"},{id:6,name:"John Doe",phone:5673854623,email:"john@email.com",startDate:"11/17/2019",birtdDate:"04/18/1996"},{id:7,name:"Jane Smith",phone:1111111111,email:"jane@email.com",startDate:"11/17/2019",birtdDate:"04/18/1996"}],t=Object(n.useState)({employees:e,sortByName:{shouldSort:!1,direction:!0}}),a=Object(i.a)(t,2),r=a[0],l=a[1],m=e,c=function(){if(!1===r.sortByName.shouldSort){var e=r.employees.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0}));l({employees:e,sortByName:{shouldSort:!0,direction:!0}})}else if(r.sortByName.shouldSort&&r.sortByName.direction){var t=r.employees.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return a>n?-1:a<n?1:0}));l({employees:t,sortByName:{shouldSort:!0,direction:!1}})}else r.sortByName.shouldSort&&!r.sortByName.direction&&l({employees:m,sortByName:{shouldSort:!1,direction:!0}})};return o.a.createElement("div",null,o.a.createElement(s.Navbar,{className:"blue darken-4",alignLinks:"right",brand:o.a.createElement("a",{className:"brand-logo",href:"!#"},"Employee Directory"),id:"",menuIcon:o.a.createElement(s.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}}),o.a.createElement("div",{className:"container"},o.a.createElement(s.TextInput,{className:"searchBar",id:"TextInput-4",placeholder:"Filter By Name",onChange:function(t){return function(t){if(console.log("changed"),t.target.value){var a=e.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}));l({employees:a,sortByName:r.sortByName})}else l({employees:e,sortByName:r.sortByName})}(t)}})),o.a.createElement(d,{employees:r.employees,clicked:function(){return c}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2ba50c54.chunk.js.map