(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{111:function(t,e,n){"use strict";n(0);var a,r=n(22),c=n(23).a.section(a||(a=Object(r.a)(["\n  font-size: 20px;\n  .sectionTitle {\n    color: teal;\n    padding-left: 15px;\n    padding-right: 15px;\n    margin: 10px auto;\n  }\n"]))),i=n(1);e.a=function(t){var e=t.children,n=t.title;return Object(i.jsxs)(c,{children:[Object(i.jsx)("h2",{className:"sectionTitle",children:n.toUpperCase()}),e]})}},113:function(t,e,n){"use strict";n.r(e);var a,r,c,i=n(0),o=n(3),s=n(15),u=n(35),l=n(36),p=n(38),b=n(37),d=n(22),j=n(23),h=j.a.div(a||(a=Object(d.a)(["\n  padding: 20px 10px;\n  margin: 10px;\n  border: 2px solid;\n  .inputName {\n    width: 300px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: block;\n    \n  }\n  .btnAdd {\n    display: block;\n    margin-top: 30px;\n    padding: 3px 5px;\n    border-radius: 6px;\n    cursor: pointer;\n    background-color: transparent;\n    &:hover {\n      background-color: teal;\n    }\n  }\n"]))),O=n(14),f=n(19),m=n.n(f),x=n(24),g=n(21),v=n.n(g),C=n(8),k=n(27),y=function(t){return t.items.contacts},w=function(t){return t.items.filter},A=function(t){return t.items.loading},N=Object(k.a)([y,w],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),F=n(1),D={name:"",number:""},H=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=Object(s.a)({},D),t.onHandleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(o.a)({},a,r))},t.onHandleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()})))return alert("".concat(t.state.name," is already in contacts."));t.props.addContactOperations(Object(s.a)({},t.state)),t.setState(Object(s.a)({},D))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContactsOperations()}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(F.jsx)(h,{children:Object(F.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)("input",{className:"inputName",type:"text",name:"name",pattern:"^[A-ZA-Z\u0410-\u042f\u0410-\u042f]+(([' -][A-ZA-Z\u0410-\u042f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.onHandleChange})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)("input",{className:"inputName",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.onHandleChange})]}),Object(F.jsx)("button",{type:"submit",className:"btnAdd",children:"Add contact"})]})})}}]),n}(i.Component),L=Object(O.b)((function(t){return{contacts:y(t)}}),{fetchContactsOperations:function(){return function(){var t=Object(x.a)(m.a.mark((function t(e,n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(C.i)()),t.prev=1,t.next=4,v.a.get("/contacts",{headers:{Authorization:"Bearer ".concat(n().auth.idToken)}});case 4:a=t.sent,r=a.data,e(Object(C.j)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(C.h)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()},addContactOperations:function(t){return function(){var e=Object(x.a)(m.a.mark((function e(n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(C.b)()),e.prev=1,e.next=4,v.a.post("/contacts",t);case 4:a=e.sent,r=a.data,n(Object(C.c)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(C.a)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}})(H),S=j.a.div(r||(r=Object(d.a)(["\n  margin-left: 10px;\n  .inputFilter {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: block;\n  }\n"]))),Z=Object(O.b)((function(t){return{filter:w(t)}}),{changeFilter:C.d})((function(t){var e=t.filter,n=t.changeFilter;return Object(F.jsx)(S,{children:Object(F.jsxs)("label",{className:"labelFilter",children:["Find contacts by name:",Object(F.jsx)("input",{className:"inputFilter",type:"text",name:"filter",value:e,onChange:function(t){n(t.target.value)}})]})})})),z=j.a.div(c||(c=Object(d.a)(["\npadding-left: 30px;\nlist-style:cursor;\n  .btnDelete {\n    padding: 2px;\n    margin: 5px 10px;\n    border-radius: 6px;\n    background-color: transparent;\n    cursor: pointer;\n    &:hover {\n      background-color: tomato;\n    }\n  }\n"]))),J=Object(O.b)(null,{deleteContactOperation:function(t){return function(){var e=Object(x.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(C.f)()),e.prev=1,e.next=4,v.a.delete("/contacts/".concat(t));case 4:n(Object(C.g)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(C.e)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(t){var e=t.name,n=t.number,a=t.id,r=t.deleteContactOperation;return Object(F.jsx)(z,{children:Object(F.jsxs)("li",{children:[e,Object(F.jsx)("span",{children:": "}),n,Object(F.jsx)("button",{className:"btnDelete",type:"button",onClick:function(){r(a)},children:"Delete"})]})})})),T=n(48),q=Object(O.b)((function(t){return{contacts:N(t),loading:A(t)}}))((function(t){var e=t.contacts,n=t.loading;return Object(F.jsx)(F.Fragment,{children:n?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(T.a,{}),Object(F.jsx)("h2",{children:"Loading Contacts..."})]}):Object(F.jsx)("ul",{children:e.map((function(t){return Object(F.jsx)(J,Object(s.a)(Object(s.a)({},t),{},{id:t.id}),t.id)}))})})})),B=n(111);e.default=function(){return Object(F.jsxs)(B.a,{title:"",children:[Object(F.jsx)(L,{}),Object(F.jsx)(Z,{}),Object(F.jsx)(q,{})]})}}}]);
//# sourceMappingURL=4.76994834.chunk.js.map