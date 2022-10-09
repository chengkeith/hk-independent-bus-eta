"use strict";(self.webpackChunkhk_independent_bus_eta=self.webpackChunkhk_independent_bus_eta||[]).push([[303],{6149:function(e,r,o){o.d(r,{Z:function(){return P}});var t=o(4942),n=o(3366),a=o(7462),i=o(7313),l=o(3061),c=o(1921),s=o(3362),d=o(1615),p=o(6701),u=o(2530),v=o(2295),f=o(7342),h=o(7592),m=o(2298);function Z(e){return(0,m.Z)("MuiDialog",e)}var x=(0,o(7430).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),b=o(3909),g=o(1554),W=o(9860),k=o(6417),w=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=(0,h.ZP)(g.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,r){return r.backdrop}})({zIndex:-1}),C=(0,h.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,r){return r.root}})({"@media print":{position:"absolute !important"}}),D=(0,h.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,r){var o=e.ownerState;return[r.container,r["scroll".concat((0,d.Z)(o.scroll))]]}})((function(e){var r=e.ownerState;return(0,a.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),y=(0,h.ZP)(v.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,r){var o=e.ownerState;return[r.paper,r["scrollPaper".concat((0,d.Z)(o.scroll))],r["paperWidth".concat((0,d.Z)(String(o.maxWidth)))],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})((function(e){var r=e.theme,o=e.ownerState;return(0,a.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===o.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===o.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===o.maxWidth&&(0,t.Z)({maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):"".concat(r.breakpoints.values.xs).concat(r.breakpoints.unit)},"&.".concat(x.paperScrollBody),(0,t.Z)({},r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==o.maxWidth&&(0,t.Z)({maxWidth:"".concat(r.breakpoints.values[o.maxWidth]).concat(r.breakpoints.unit)},"&.".concat(x.paperScrollBody),(0,t.Z)({},r.breakpoints.down(r.breakpoints.values[o.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&(0,t.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(x.paperScrollBody),{margin:0,maxWidth:"100%"}))})),P=i.forwardRef((function(e,r){var o=(0,f.Z)({props:e,name:"MuiDialog"}),t=(0,W.Z)(),p={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},h=o["aria-describedby"],m=o["aria-labelledby"],x=o.BackdropComponent,g=o.BackdropProps,P=o.children,M=o.className,B=o.disableEscapeKeyDown,R=void 0!==B&&B,N=o.fullScreen,T=void 0!==N&&N,j=o.fullWidth,F=void 0!==j&&j,_=o.maxWidth,A=void 0===_?"sm":_,E=o.onBackdropClick,I=o.onClose,K=o.open,Y=o.PaperComponent,X=void 0===Y?v.Z:Y,H=o.PaperProps,z=void 0===H?{}:H,L=o.scroll,O=void 0===L?"paper":L,q=o.TransitionComponent,G=void 0===q?u.Z:q,J=o.transitionDuration,Q=void 0===J?p:J,U=o.TransitionProps,V=(0,n.Z)(o,w),$=(0,a.Z)({},o,{disableEscapeKeyDown:R,fullScreen:T,fullWidth:F,maxWidth:A,scroll:O}),ee=function(e){var r=e.classes,o=e.scroll,t=e.maxWidth,n=e.fullWidth,a=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,d.Z)(o))],paper:["paper","paperScroll".concat((0,d.Z)(o)),"paperWidth".concat((0,d.Z)(String(t))),n&&"paperFullWidth",a&&"paperFullScreen"]};return(0,c.Z)(i,Z,r)}($),re=i.useRef(),oe=(0,s.Z)(m),te=i.useMemo((function(){return{titleId:oe}}),[oe]);return(0,k.jsx)(C,(0,a.Z)({className:(0,l.Z)(ee.root,M),BackdropProps:(0,a.Z)({transitionDuration:Q,as:x},g),closeAfterTransition:!0,BackdropComponent:S,disableEscapeKeyDown:R,onClose:I,open:K,ref:r,onClick:function(e){re.current&&(re.current=null,E&&E(e),I&&I(e,"backdropClick"))},ownerState:$},V,{children:(0,k.jsx)(G,(0,a.Z)({appear:!0,in:K,timeout:Q,role:"presentation"},U,{children:(0,k.jsx)(D,{className:(0,l.Z)(ee.container),onMouseDown:function(e){re.current=e.target===e.currentTarget},ownerState:$,children:(0,k.jsx)(y,(0,a.Z)({as:X,elevation:24,role:"dialog","aria-describedby":h,"aria-labelledby":oe},z,{className:(0,l.Z)(ee.paper,z.className),ownerState:$,children:(0,k.jsx)(b.Z.Provider,{value:te,children:P})}))})}))}))}))},3909:function(e,r,o){var t=(0,o(7313).createContext)({});r.Z=t},6467:function(e,r,o){o.d(r,{Z:function(){return Z}});var t=o(4942),n=o(3366),a=o(7462),i=o(7313),l=o(3061),c=o(1921),s=o(7592),d=o(7342),p=o(2298);function u(e){return(0,p.Z)("MuiDialogContent",e)}(0,o(7430).Z)("MuiDialogContent",["root","dividers"]);var v=o(3174),f=o(6417),h=["className","dividers"],m=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.dividers&&r.dividers]}})((function(e){var r=e.theme,o=e.ownerState;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((r.vars||r).palette.divider),borderBottom:"1px solid ".concat((r.vars||r).palette.divider)}:(0,t.Z)({},".".concat(v.Z.root," + &"),{paddingTop:0}))})),Z=i.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiDialogContent"}),t=o.className,i=o.dividers,s=void 0!==i&&i,p=(0,n.Z)(o,h),v=(0,a.Z)({},o,{dividers:s}),Z=function(e){var r=e.classes,o={root:["root",e.dividers&&"dividers"]};return(0,c.Z)(o,u,r)}(v);return(0,f.jsx)(m,(0,a.Z)({className:(0,l.Z)(Z.root,t),ownerState:v,ref:r},p))}))},3604:function(e,r,o){var t=o(7462),n=o(3366),a=o(7313),i=o(3061),l=o(1921),c=o(1113),s=o(7592),d=o(7342),p=o(3174),u=o(3909),v=o(6417),f=["className","id"],h=(0,s.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,r){return r.root}})({padding:"16px 24px",flex:"0 0 auto"}),m=a.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiDialogTitle"}),c=o.className,s=o.id,m=(0,n.Z)(o,f),Z=o,x=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},p.a,r)}(Z),b=a.useContext(u.Z).titleId,g=void 0===b?s:b;return(0,v.jsx)(h,(0,t.Z)({component:"h2",className:(0,i.Z)(x.root,c),ownerState:Z,ref:r,variant:"h6",id:g},m))}));r.Z=m},3174:function(e,r,o){o.d(r,{a:function(){return n}});var t=o(2298);function n(e){return(0,t.Z)("MuiDialogTitle",e)}var a=(0,o(7430).Z)("MuiDialogTitle",["root"]);r.Z=a}}]);