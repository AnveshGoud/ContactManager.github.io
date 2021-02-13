(this["webpackJsonpfir-app"]=this["webpackJsonpfir-app"]||[]).push([[0],{65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(31),o=a.n(s),i=a(3),l=a(4),u=a(6),h=a(5),j=a(14),d=a(2),b=(a(40),a(7)),p=a.n(b),m=a(12),O=a(11),f=a.n(O),x=a(34),v=a(15),y=a(13),g=a.n(y),N=c.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:[t.payload].concat(Object(x.a)(e.contacts))});case"UPDATE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return C(e,t)}))}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)(N.Provider,{value:this.state,children:this.props.children})}}]),a}(r.Component),w=N.Consumer,S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(m.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,r=t.name,c=t.email,s=t.phone,o=this.state.showContactInfo;return Object(n.jsx)(w,{children:function(t){var i=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",children:[Object(n.jsxs)("h4",{children:[r," ",Object(n.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(n.jsx)("i",{className:"fas fa-user-minus",style:{cursor:"pointer",float:"right"},onClick:e.onDeleteClick.bind(e,a,i)}),Object(n.jsx)(j.b,{to:"contact/edit/".concat(a),children:Object(n.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),o?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Email:",c]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Phone:",s]})]}):null]})}})}}]),a}(r.Component);S.prototypes={contact:f.a.object.isRequired};var E=S,A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(w,{children:function(e){var t=e.contacts;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("h1",{className:"display-4 mb-3",children:[Object(n.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),t.map((function(e){return Object(n.jsx)(E,{contact:e},e.id)}))]})}})}}]),a}(r.Component),T=function(e){var t=e.branding;return Object(n.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{href:"/",className:"navbar-brand",children:t}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"navbar-nav m-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(j.b,{to:"/",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-home"}),"Home"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(j.b,{to:"/contact/add",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-plus"}),"Add"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(j.b,{to:"/about",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-question"}),"About"]})})]})})]})})};T.defaultProps={branding:f.a.string.isRequired};var D=T,P=a(16),q=a(33),F=a.n(q),M=function(e){var t=e.label,a=e.name,r=e.value,c=e.placeholder,s=e.type,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{type:s,name:a,className:F()("form-control form-control-lg",{"is-invalid":i}),placeholder:c,value:r,onChange:o}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})};M.defaultProps={type:"text"};var I=M,_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a,n){var r,c,s,o,i,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone Number is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(P.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(w,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header bg-secondary text-white",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(I,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:s.name}),Object(n.jsx)(I,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:r,onChange:e.onChange,error:s.email}),Object(n.jsx)(I,{label:"Phone",name:"phone",placeholder:"Enter Phone Number...",value:c,onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-danger btn-block"})]})})]})}})}}]),a}(r.Component),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a,n){var r,c,s,o,i,l,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone Number is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(P.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(w,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header bg-secondary text-white",children:"Edit Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(I,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:s.name}),Object(n.jsx)(I,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:r,onChange:e.onChange,error:s.email}),Object(n.jsx)(I,{label:"Phone",name:"phone",placeholder:"Enter Phone Number...",value:c,onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-danger btn-block"})]})})]})}})}}]),a}(r.Component);var R=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(n.jsx)("p",{children:"Simple App To Manage Your Contacts"}),Object(n.jsx)("p",{className:"text-secondary",children:"Version 1.0.0"})]})},U=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"display-4",children:[Object(n.jsx)("span",{className:"text-danger",children:"404 "}),"Page Not Found"]}),Object(n.jsx)("p",{className:"lead",children:"Sorry,That Page Does Not Exist"})]})},B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("p",{children:a})]})}}]),a}(r.Component),J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(k,{children:Object(n.jsx)(j.a,{basename:"/contactmanager",children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(D,{branding:"Contact Manager"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:A}),Object(n.jsx)(d.a,{exact:!0,path:"/contact/add",component:_}),Object(n.jsx)(d.a,{exact:!0,path:"/contact/edit/:id",component:L}),Object(n.jsx)(d.a,{exact:!0,path:"/about",component:R}),Object(n.jsx)(d.a,{exact:!0,path:"/test",component:B}),Object(n.jsx)(d.a,{component:U})]})})]})})})})}}]),a}(r.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root")),H()}},[[65,1,2]]]);
//# sourceMappingURL=main.d1fd6cb4.chunk.js.map