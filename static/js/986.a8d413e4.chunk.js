"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986],{8986:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r=t(9434),a=t(6052),i=t(1614),o=t(7761),c=t(6151),s=t(3329),u=function(){var n=(0,r.I0)();return(0,s.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.name.value,r=e.target.elements.phone.value;console.log("ok"),n((0,a.el)({name:t,number:r})),e.target.reset()},children:(0,s.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem",mb:"2rem"},children:[(0,s.jsx)(o.Z,{sx:{width:.5},id:"filled-basic",label:"Name",variant:"filled",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,s.jsx)(o.Z,{sx:{width:.5},id:"filled-basic",label:"Number",variant:"filled",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,s.jsx)(c.Z,{variant:"outlined",sx:{fontWeight:700,width:.5},type:"submit",children:"Add contact"})]})})},l="ContactList_button__7kL4l",p=t(2286),d=t(2791),m=t(3433),f=t(4942),v=t(3366),h=t(7462),x=t(8182),g=t(1184),b=t(8519),w=t(4419),Z=t(6934),k=t(1402),S=t(3967);var j=d.createContext(),y=t(5878),z=t(1217);function M(n){return(0,z.Z)("MuiGrid",n)}var N=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],W=(0,y.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,m.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,m.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,m.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,m.Z)(N.map((function(n){return"grid-xs-".concat(n)}))),(0,m.Z)(N.map((function(n){return"grid-sm-".concat(n)}))),(0,m.Z)(N.map((function(n){return"grid-md-".concat(n)}))),(0,m.Z)(N.map((function(n){return"grid-lg-".concat(n)}))),(0,m.Z)(N.map((function(n){return"grid-xl-".concat(n)}))))),C=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function _(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function E(n){var e=n.breakpoints,t=n.values,r="";Object.keys(t).forEach((function(n){""===r&&0!==t[n]&&(r=n)}));var a=Object.keys(e).sort((function(n,t){return e[n]-e[t]}));return a.slice(0,a.indexOf(r))}var F=(0,Z.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState,r=t.container,a=t.direction,i=t.item,o=t.spacing,c=t.wrap,s=t.zeroMinWidth,u=t.breakpoints,l=[];r&&(l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var r=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&r.push(t["spacing-".concat(e,"-").concat(String(a))])})),r}(o,u,e));var p=[];return u.forEach((function(n){var r=t[n];r&&p.push(e["grid-".concat(n,"-").concat(String(r))])})),[e.root,r&&e.container,i&&e.item,s&&e.zeroMinWidth].concat((0,m.Z)(l),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],p)}})((function(n){var e=n.ownerState;return(0,h.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,t=n.ownerState,r=(0,g.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,g.k9)({theme:e},r,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(W.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,a=t.rowSpacing,i={};if(r&&0!==a){var o,c=(0,g.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=E({breakpoints:e.breakpoints.values,values:c})),i=(0,g.k9)({theme:e},c,(function(n,t){var r,a=e.spacing(n);return"0px"!==a?(0,f.Z)({marginTop:"-".concat(_(a))},"& > .".concat(W.item),{paddingTop:_(a)}):null!=(r=o)&&r.includes(t)?{}:(0,f.Z)({marginTop:0},"& > .".concat(W.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,a=t.columnSpacing,i={};if(r&&0!==a){var o,c=(0,g.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=E({breakpoints:e.breakpoints.values,values:c})),i=(0,g.k9)({theme:e},c,(function(n,t){var r,a=e.spacing(n);return"0px"!==a?(0,f.Z)({width:"calc(100% + ".concat(_(a),")"),marginLeft:"-".concat(_(a))},"& > .".concat(W.item),{paddingLeft:_(a)}):null!=(r=o)&&r.includes(t)?{}:(0,f.Z)({width:"100%",marginLeft:0},"& > .".concat(W.item),{paddingLeft:0})}))}return i}),(function(n){var e,t=n.theme,r=n.ownerState;return t.breakpoints.keys.reduce((function(n,a){var i={};if(r[a]&&(e=r[a]),!e)return n;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,g.P$)({values:r.columns,breakpoints:t.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(r.container&&r.item&&0!==r.columnSpacing){var l=t.spacing(r.columnSpacing);if("0px"!==l){var p="calc(".concat(s," + ").concat(_(l),")");u={flexBasis:p,maxWidth:p}}}i=(0,h.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===t.breakpoints.values[a]?Object.assign(n,i):n[t.breakpoints.up(a)]=i,n}),{})}));var G=function(n){var e=n.classes,t=n.container,r=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];t&&(u=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return e.forEach((function(e){var r=n[e];if(Number(r)>0){var a="spacing-".concat(e,"-").concat(String(r));t.push(a)}})),t}(i,s));var l=[];s.forEach((function(e){var t=n[e];t&&l.push("grid-".concat(e,"-").concat(String(t)))}));var p={root:["root",t&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,m.Z)(u),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,w.Z)(p,M,e)},P=d.forwardRef((function(n,e){var t=(0,k.Z)({props:n,name:"MuiGrid"}),r=(0,S.Z)().breakpoints,a=(0,b.Z)(t),i=a.className,o=a.columns,c=a.columnSpacing,u=a.component,l=void 0===u?"div":u,p=a.container,m=void 0!==p&&p,f=a.direction,g=void 0===f?"row":f,w=a.item,Z=void 0!==w&&w,y=a.rowSpacing,z=a.spacing,M=void 0===z?0:z,N=a.wrap,W=void 0===N?"wrap":N,_=a.zeroMinWidth,E=void 0!==_&&_,P=(0,v.Z)(a,C),A=y||M,I=c||M,L=d.useContext(j),B=m?o||12:L,O={},T=(0,h.Z)({},P);r.keys.forEach((function(n){null!=P[n]&&(O[n]=P[n],delete T[n])}));var $=(0,h.Z)({},a,{columns:B,container:m,direction:g,item:Z,rowSpacing:A,columnSpacing:I,wrap:W,zeroMinWidth:E,spacing:M},O,{breakpoints:r.keys}),D=G($);return(0,s.jsx)(j.Provider,{value:B,children:(0,s.jsx)(F,(0,h.Z)({ownerState:$,className:(0,x.Z)(D.root,i),as:l,ref:e},T))})})),A=P,I=t(5527),L=t(4586),B=function(){var n=(0,r.I0)(),e=(0,r.v9)(p.xU),t=(0,r.v9)(p.zh);(0,d.useEffect)((function(){n((0,a.yF)())}),[n]);var i=(0,r.v9)(p.Vo);return(0,s.jsxs)(s.Fragment,{children:[e&&!t&&(0,s.jsx)("b",{children:"Request in progress..."}),(0,s.jsx)(A,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",sx:{gap:"1rem"},children:i.map((function(e){var t=e.id,r=e.name,i=e.number;return(0,s.jsxs)(I.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",width:.5},children:[(0,s.jsx)(L.Z,{}),(0,s.jsxs)("span",{children:[r,":"]}),(0,s.jsx)("span",{children:i}),(0,s.jsx)(c.Z,{onClick:function(){return n((0,a._f)(t))},className:l,children:"Delete"})]},t)}))})]})},O="Filter_input__N7T3z",T=t(1634),$=t(292),D=function(){var n=(0,r.I0)();return(0,s.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",mb:"1rem"},children:(0,s.jsx)($.Z,{placeholder:"Find contacts by name",className:O,type:"text",name:"filter",onChange:function(e){n((0,T.x)(e.target.value))}})})},H=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{}),(0,s.jsx)(D,{}),(0,s.jsx)(B,{})]})}},4586:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(3329),o=(0,a.default)((0,i.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");e.Z=o}}]);
//# sourceMappingURL=986.a8d413e4.chunk.js.map