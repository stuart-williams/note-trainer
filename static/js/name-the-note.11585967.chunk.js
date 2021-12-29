"use strict";(self.webpackChunknote_trainer=self.webpackChunknote_trainer||[]).push([[189],{6031:function(e,n,i){var r=i(678),t=i(3209),o=i(8735),s=i(7231),l=i(9113),c=i(2791),a=i(8820),d=i(3502),u=i(510),x=i(8866),h=i(184),f=(0,t.m$)(o.M5,{baseStyle:{top:0,left:0,right:0,bottom:0,opacity:.7,position:"absolute"}});n.Z=function(e){var n=e.indicateStates,i=void 0===n?[0,1]:n,t=(0,d.Z)(),o=(0,u.FV)(x.Vw),m=(0,r.Z)(o,2),p=m[0],j=m[1],b=(0,c.useRef)(0);return b.current=p>-1?p:b.current,(0,c.useEffect)((function(){setTimeout((function(){t()&&j(-1)}),250)}),[p]),(0,h.jsx)(s.pT,{unmountOnExit:!0,in:i.includes(p),children:(0,h.jsx)(f,{bg:b.current?"green.500":"red.500",children:(0,h.jsx)(l.JO,{color:"white",boxSize:"100px",as:b.current?a.bzc:a.oHP})})})}},9676:function(e,n,i){i.d(n,{Z:function(){return y}});var r=i(678),t=i(3209),o=i(8735),s=i(855),l=i(5223),c=i(3445),a=i(7805),d=i(9113),u=i(7148),x=i(763),h=i(2791),f=i(6303),m=i(184),p=function(e){var n=e.isOpen,i=e.onClose,r=(0,f.au)({onExpire:i}),t=(0,h.useRef)(null);return(0,h.useEffect)((function(){n&&r.start(3e3)}),[n]),(0,m.jsx)(u.aR,{isCentered:!0,isOpen:n,onClose:x.identity,leastDestructiveRef:t,children:(0,m.jsx)(u.dh,{children:(0,m.jsx)(u._T,{w:"auto",children:(0,m.jsxs)(u.iP,{as:o.gC,py:4,px:8,children:[(0,m.jsx)(o.X6,{size:"4xl",children:r.remaining.seconds}),(0,m.jsx)(o.xv,{fontSize:"xl",children:"GET READY"})]})})})})},j=function(e){var n=e.children,i=e.isOpen,r=e.onClose,t=e.onPlayAgainClick,o=(0,h.useRef)(null);return(0,m.jsx)(u.aR,{isCentered:!0,isOpen:i,onClose:r,leastDestructiveRef:o,children:(0,m.jsx)(u.dh,{children:(0,m.jsxs)(u._T,{mx:4,children:[(0,m.jsx)(u.fY,{children:"Game Over"}),(0,m.jsx)(u.iP,{children:n}),(0,m.jsxs)(u.xo,{children:[(0,m.jsx)(a.zx,{ref:o,onClick:r,colorScheme:"blue",children:"Close"}),(0,m.jsx)(a.zx,{ml:2,colorScheme:"blue",onClick:t,children:"Play Again"})]})]})})})},b=i(5486),C=i(71),g=i(510),v=i(8866),S=(0,t.m$)(o.Ct,{baseStyle:{minW:"50px",fontSize:"xl",display:"flex",borderWidth:"1px",borderRadius:"md",boxShadow:"inner",alignItems:"center",justifyContent:"center"}}),y=function(e){var n=e.stats,i=e.onPlayClick,t=void 0===i?x.identity:i,u=e.onStopClick,h=void 0===u?x.identity:u,y=e.onTimerStart,k=void 0===y?x.identity:y,O=e.onTimerStop,z=void 0===O?x.identity:O,Z=(0,s.Sx)({base:"sm",md:"md"}),w=(0,g.FV)(v.s_),R=(0,r.Z)(w,2),E=R[0],F=R[1],P=(0,l.qY)(),W=P.isOpen,T=P.onOpen,A=P.onClose,D=(0,l.qY)(),Y=D.isOpen,G=D.onOpen,J=D.onClose,_=(0,f.au)({onExpire:function(){G(),z()}}),H=function(){t(),J(),T()};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{isOpen:W,onClose:function(){A(),_.start(E),k()}}),(0,m.jsxs)(j,{isOpen:Y,onClose:J,onPlayAgainClick:H,children:["You identified ",n.correct," notes correctly"]}),(0,m.jsxs)(o.W2,{as:o.Ug,spacing:1,align:"stretch",maxW:"container.sm",justifyContent:"center",children:[(0,m.jsx)(c.Ee,{as:o.Ug,value:E,onChange:function(e){return F(Number(e))},children:b.b.map((function(e){var n=e.label,i=e.value;return(0,m.jsx)(c.Y8,{value:i,children:n},i)}))}),(0,m.jsx)(a.hU,{"aria-label":"Play",size:Z,onClick:H,isDisabled:_.isRunning,icon:(0,m.jsx)(d.JO,{as:C.Z7H,boxSize:"20px"})}),(0,m.jsx)(o.M5,{w:"80px",px:4,borderRadius:"md",boxShadow:"inner",children:(0,m.jsx)(o.xv,{fontSize:"lg",children:_.remaining.formatted})}),(0,m.jsx)(a.hU,{"aria-label":"Stop",size:Z,onClick:function(){_.reset(),h()},icon:(0,m.jsx)(d.JO,{as:C.Wcw,boxSize:"20px"})}),(0,m.jsx)(S,{colorScheme:"green",borderColor:"green.200",children:n.correct}),(0,m.jsx)(S,{colorScheme:"red",borderColor:"red.200",children:n.attempts-n.correct})]})]})}},5280:function(e,n,i){var r=i(3209),t=i(8735),o=i(7805),s=i(2791),l=i(510),c=i(8866),a=i(6303),d=i(184),u=[["C","C#"],["D","D#"],["E"],["F","F#"],["G","G#"],["A","A#"],["B"]],x=(0,r.m$)(t.W2,{baseStyle:{px:1,maxH:"200px",flex:"1 1 auto",alignSelf:"center",maxW:"container.md"}}),h=(0,r.m$)(o.zx,{baseStyle:{h:"100%",minH:"40px",fontSize:"lg",borderWidth:"1px",borderColor:"gray.300"}});n.Z=function(e){var n=e.onClick,i=(0,l.sJ)(c.yF);return(0,d.jsx)(x,{children:(0,d.jsx)(t.rj,{h:"100%",gridGap:{base:1,lg:2},templateColumns:"repeat(7, 1fr)",children:u.map((function(e,r){return(0,d.jsx)(s.Fragment,{children:e.map((function(o,s){return(0,d.jsx)(t.P4,{gridColumn:r+1,gridRow:1===e.length?"1 / 3":2-s,children:(0,d.jsx)(h,{isFullWidth:!0,onClick:function(){return n(o)},color:o.includes("#")?"white":"black",colorScheme:o.includes("#")?"ebony":"ivory",children:(0,a.ui)(o,i)})},s)}))},r)}))})})}},2485:function(e,n,i){i.r(n);var r=i(678),t=i(8735),o=i(6031),s=i(5353),l=i(9676),c=i(5280),a=(i(2791),i(510)),d=i(5455),u=i(184);n.default=function(){var e=(0,a.sJ)(d.wZ),n=(0,a.FV)(d.si),i=(0,r.Z)(n,2),x=i[0],h=i[1],f=(0,a.rb)(d.si);return(0,u.jsxs)(t.gC,{align:"stretch",flex:"1 1 auto",my:{base:1,lg:2},spacing:{base:1,lg:2},children:[(0,u.jsx)(l.Z,{stats:e.game,onTimerStart:f}),(0,u.jsxs)(t.xu,{position:"relative",children:[(0,u.jsx)(s.Z,{activeNotes:x?[x]:[]}),(0,u.jsx)(o.Z,{indicateStates:[0]})]}),(0,u.jsx)(c.Z,{onClick:function(e){return h({name:e})}})]})}}}]);
//# sourceMappingURL=name-the-note.11585967.chunk.js.map