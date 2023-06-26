"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[463],{3309:function(n,e,r){r.d(e,{DE:function(){return p},Fm:function(){return h},II:function(){return m},__:function(){return x},l0:function(){return l},zx:function(){return f}});var t,o,i,a,c,u,s=r(168),d=r(9202),l=d.Z.form(t||(t=(0,s.Z)(["\n  display: flex;\n"]))),p=d.Z.div(o||(o=(0,s.Z)(["\n  border-radius: 7px;\n  border: ",";\n  padding: 4px;\n  display: block;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)})),x=d.Z.label(i||(i=(0,s.Z)(["\n  margin-left: 10px;\n"]))),f=d.Z.button(a||(a=(0,s.Z)(["\n  background-color: ",";\n  margin-left: 10px;\n  font-size: 20px;\n  border: none;\n  border-radius: 15px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.success})),h=d.Z.span(c||(c=(0,s.Z)(["\n  margin-right: 10px;\n"]))),m=d.Z.input(u||(u=(0,s.Z)(["\n  height: 30px;\n  border-radius: 7px;\n  border: ",";\n  display: block;\n  font-size: 24px;\n  padding-left: 8px;\n  outline: none;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)}))},1463:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t=r(2791),o=r(9434),i=r(4942),a=r(1413),c=r(9439),u=r(3634),s=r(3309),d=r(184);function l(){var n=(0,o.I0)(),e=(0,t.useState)({name:"",number:""}),r=(0,c.Z)(e,2),l=r[0],p=r[1];function x(n){var e=n.currentTarget,r=e.name,t=e.value;p((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},r,t))}))}return(0,d.jsxs)(s.l0,{onSubmit:function(e){e.preventDefault(),n((0,u.uK)(l)),p({name:"",number:""})},children:[(0,d.jsxs)(s.DE,{children:[(0,d.jsxs)(s.__,{children:[(0,d.jsx)(s.Fm,{children:"Name"}),(0,d.jsx)(s.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:l.name,onChange:x})]}),(0,d.jsxs)(s.__,{children:[(0,d.jsx)(s.Fm,{children:"Phonebook"}),(0,d.jsx)(s.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l.number,onChange:x})]})]}),(0,d.jsx)(s.zx,{type:"submit",children:"Add contact"})]})}var p=function(n){return n.filter.filter},x=function(n){var e=function(n){return n.contacts.items}(n),r=p(n),t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return t},f=r(8548);function h(n){var e=n.name,r=n.number,t=n.id,i=(0,o.I0)();return(0,d.jsxs)(f.c,{children:[(0,d.jsxs)("span",{children:[e,": ",r]}),(0,d.jsx)(f.z,{type:"button",onClick:function(){return i((0,u.GK)(t))},children:"delete"})]})}var m,b=r(168),Z=r(9202),v=Z.Z.ul(m||(m=(0,b.Z)(["\n  padding: 0px;\n  list-style: none;\n"])));function g(){var n=(0,o.v9)(x);return(0,d.jsx)(v,{children:n.map((function(n){return(0,d.jsx)(h,(0,a.Z)({},n),n.id)}))})}var j,k,_=r(2070),y=r(1634),z=Z.Z.h3(j||(j=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  margin: 8px;\n"]))),C=Z.Z.input(k||(k=(0,b.Z)(["\n  height: 30px;\n  border-radius: 7px;\n  border: ",";\n  display: block;\n  font-size: 24px;\n  padding-left: 8px;\n  outline: none;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)}));function I(){var n=(0,o.I0)(),e=(0,o.v9)(p);return(0,d.jsxs)("div",{children:[(0,d.jsx)(z,{children:"Find contacts by name"}),(0,d.jsx)("label",{children:(0,d.jsx)(C,{type:"text",name:"filter",required:!0,onChange:function(e){return n((0,y.x)(e.currentTarget.value))},value:e})})]})}var w=function(){var n=(0,o.I0)();return(0,t.useEffect)((function(){n((0,u.CL)())}),[n]),(0,d.jsx)(_.W,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(I,{}),(0,d.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=463.4f462657.chunk.js.map