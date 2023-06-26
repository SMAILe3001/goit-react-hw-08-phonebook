"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[547],{3309:function(n,e,r){r.d(e,{DE:function(){return p},Fm:function(){return h},II:function(){return b},__:function(){return f},l0:function(){return l},zx:function(){return x}});var t,o,c,i,a,s,u=r(168),d=r(3081),l=d.Z.form(t||(t=(0,u.Z)(["\n  display: flex;\n"]))),p=d.Z.div(o||(o=(0,u.Z)(["\n  border-radius: 7px;\n  border: ",";\n  padding: 4px;\n  display: block;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)})),f=d.Z.label(c||(c=(0,u.Z)(["\n  margin-left: 10px;\n"]))),x=d.Z.button(i||(i=(0,u.Z)(["\n  background-color: ",";\n  margin-left: 10px;\n  font-size: 20px;\n  border: none;\n  border-radius: 15px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.success})),h=d.Z.span(a||(a=(0,u.Z)(["\n  margin-right: 10px;\n"]))),b=d.Z.input(s||(s=(0,u.Z)(["\n  height: 30px;\n  border-radius: 7px;\n  border: ",";\n  display: block;\n  font-size: 24px;\n  padding-left: 8px;\n  outline: none;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)}))},8548:function(n,e,r){r.d(e,{c:function(){return a},z:function(){return s}});var t,o,c=r(168),i=r(3081),a=i.Z.li(t||(t=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 7px;\n  border: ",";\n  margin-bottom: 4px;\n  padding-left: 8px;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)})),s=i.Z.button(o||(o=(0,c.Z)(["\n  min-width: 66px;\n  background-color: ",";\n  font-size: 20px;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.danger}))},9547:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,o=r(2007),c=r.n(o),i=r(168),a=r(3081),s=a.Z.button(t||(t=(0,i.Z)(["\n  margin: 4px;\n  background-color: ",";\n  font-size: 20px;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.success})),u=r(184);function d(n){var e=n.onClick,r=n.text;return(0,u.jsx)(s,{type:"button",onClick:e,children:r})}d.propType={onClick:c().func,text:c().string};var l=r(5861),p=r(9439),f=r(4687),x=r.n(f),h=r(2791),b=r(1686),m=r(4807),g=r(3309);function v(){var n=(0,m.O5)(),e=(0,p.Z)(n,1)[0],r=(0,m.wY)().data,t=void 0===r?[]:r,o=(0,h.useState)(""),c=(0,p.Z)(o,2),i=c[0],a=c[1],s=(0,h.useState)(""),d=(0,p.Z)(s,2),f=d[0],v=d[1],Z=function(n){var e=n.currentTarget,r=e.name,t=e.value;"name"===r&&a(t),"phone"===r&&v(t)},j=function(){var n=(0,l.Z)(x().mark((function n(){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e({name:i,phone:f});case 2:k(i);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(n){b.Notify.success("Contact ".concat(n," add."))},y=function(n){b.Notify.warning("".concat(n," is already in contacts."))};return(0,u.jsxs)(g.l0,{onSubmit:function(n){n.preventDefault();var e=i.toLowerCase();t.every((function(n){return n.name.toLowerCase()!==e}))?j():y(i),a(""),v("")},children:[(0,u.jsxs)(g.DE,{children:[(0,u.jsxs)(g.__,{children:[(0,u.jsx)(g.Fm,{children:"Name"}),(0,u.jsx)(g.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:Z})]}),(0,u.jsxs)(g.__,{children:[(0,u.jsx)(g.Fm,{children:"Phonebook"}),(0,u.jsx)(g.II,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:Z})]})]}),(0,u.jsx)(g.zx,{type:"submit",children:"Add contact"})]})}var Z,j=r(1413),k=r(5048),y=r(6286),w=r(6895),C=r(8548);function z(n){var e=n.name,r=n.phone,t=n.id,o=(0,m.zr)(),c=(0,p.Z)(o,2),i=c[0],a=c[1].isLoading,s=function(){var n=(0,l.Z)(x().mark((function n(e,r){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i(e);case 2:d(r);case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),d=function(n){b.Notify.info("Contact ".concat(n," delit."))};return(0,u.jsxs)(C.c,{children:[(0,u.jsxs)("span",{children:[e,": ",r]}),(0,u.jsx)(C.z,{type:"button",onClick:function(){return s(t,e)},disabled:a,children:a?(0,u.jsx)(y.ko,{height:"20",width:"50",borderColor:"#F4442E",barColor:"#51E5FF"}):"delete"})]})}var _=a.Z.ul(Z||(Z=(0,i.Z)(["\n  padding: 0px;\n  list-style: none;\n"])));function F(){var n=(0,m.wY)(),e=n.data,r=void 0===e?[]:e,t=n.isLoading,o=n.error,c=(0,k.v9)(w.zK).trim();return(0,u.jsxs)(u.Fragment,{children:[""!==o&&(0,u.jsx)("p",{children:o}),t&&(0,u.jsx)(y.Nx,{width:"500",color:"#4fa94d"}),(0,u.jsx)(_,{children:function(){var n=c.toLowerCase();return r.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){return(0,u.jsx)(z,(0,j.Z)({},n),n.id)}))})]})}var I,L,A=r(2070),N=a.Z.h3(I||(I=(0,i.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  margin: 8px;\n"]))),E=a.Z.input(L||(L=(0,i.Z)(["\n  height: 30px;\n  border-radius: 7px;\n  border: ",";\n  display: block;\n  font-size: 24px;\n  padding-left: 8px;\n  outline: none;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.accent)}));function q(){var n=(0,k.I0)();return(0,u.jsxs)("div",{children:[(0,u.jsx)(N,{children:"Find contacts by name"}),(0,u.jsx)("label",{children:(0,u.jsx)(E,{type:"text",name:"filter",required:!0,onChange:function(e){return n((0,w.W1)(e.currentTarget.value))}})})]})}var D=r(2306),S=function(){var n=(0,k.I0)();return(0,u.jsxs)(A.W,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(d,{onClick:function(){return n((0,D.LB)())},text:"togle theme"})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(v,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(q,{}),(0,u.jsx)(F,{})]})]})}}}]);
//# sourceMappingURL=547.9cd43b65.chunk.js.map