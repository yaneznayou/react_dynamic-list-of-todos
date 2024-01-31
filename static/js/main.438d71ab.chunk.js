(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(3)),o=c.n(i),d=c(0),r=function(e){var t=e.todos,c=e.onTodoSelected,s=e.todoId;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsxs)("th",{children:[Object(d.jsx)("span",{className:"icon"}),Object(d.jsx)("i",{className:"fas fa-check"})]}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":e.id===s}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-danger":!1===e.completed,"has-text-success":!0===e.completed}),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",{"fa-eye-slash":e.id===s,"fa-eye":e.id!==s})})})})})]},e.id)}))})]})},j=function(e){var t=e.onQueryChange,c=e.onFilterChange,s=e.onDelete,a=e.query,n=e.filter;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:c,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:t}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:s})})]})]})},b=(c(13),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.todo,c=e.onClose,s=Object(l.useState)(),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then(o)}),[t.userId]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("p",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(d.jsx)(b,{})]})},m=function(){var e=Object(l.useState)(),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),i=Object(n.a)(a,2),o=i[0],m=i[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],v=x[1],p=Object(l.useState)("all"),N=Object(n.a)(p,2),y=N[0],g=N[1];Object(l.useEffect)((function(){u("/todos").then(s)}),[c]);var C;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{onQueryChange:function(e){v(e.target.value)},onFilterChange:function(e){g(e.target.value)},onDelete:function(){v("")},query:f,filter:y})}),Object(d.jsx)("div",{className:"block",children:c?Object(d.jsx)(r,{todos:(C=function(){switch(y){case"all":default:return c;case"active":return null===c||void 0===c?void 0:c.filter((function(e){return!1===e.completed}));case"completed":return null===c||void 0===c?void 0:c.filter((function(e){return!0===e.completed}))}}(),null===C||void 0===C?void 0:C.filter((function(e){return e.title.toLowerCase().includes(f.toLowerCase().trim())}))),onTodoSelected:function(e){m(e)},todoId:null===o||void 0===o?void 0:o.id}):Object(d.jsx)(b,{})})]})}),o&&Object(d.jsx)(h,{todo:o,onClose:function(){m(null)}})]})};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.438d71ab.chunk.js.map