(self.webpackChunknote_trainer=self.webpackChunknote_trainer||[]).push([[684],{6031:function(e,n,r){"use strict";var t=r(678),i=r(3209),o=r(8735),s=r(7231),l=r(9113),a=r(2791),c=r(8820),u=r(3502),f=r(510),d=r(8866),x=r(184),h=(0,i.m$)(o.M5,{baseStyle:{top:0,left:0,right:0,bottom:0,opacity:.7,position:"absolute"}});n.Z=function(){var e=(0,u.Z)(),n=(0,f.FV)(d.Vw),r=(0,t.Z)(n,2),i=r[0],o=r[1],p=(0,a.useRef)(0);return p.current=i>-1?i:p.current,(0,a.useEffect)((function(){setTimeout((function(){e()&&o(-1)}),250)}),[i]),(0,x.jsx)(s.pT,{unmountOnExit:!0,in:i>-1,children:(0,x.jsx)(h,{bg:p.current?"green.500":"red.500",children:(0,x.jsx)(l.JO,{color:"white",boxSize:"6em",as:p.current?c.bzc:c.oHP})})})}},9676:function(e,n,r){"use strict";r.d(n,{Z:function(){return S}});var t=r(678),i=r(3209),o=r(8735),s=r(5223),l=r(3445),a=r(7805),c=r(9113),u=r(7148),f=r(763),d=r(2791),x=r(6303),h=r(184),p=function(e){var n=e.isOpen,r=e.onClose,t=(0,x.au)({onExpire:r}),i=(0,d.useRef)(null);return(0,d.useEffect)((function(){n&&t.start(3e3)}),[n]),(0,h.jsx)(u.aR,{isCentered:!0,isOpen:n,onClose:f.identity,leastDestructiveRef:i,children:(0,h.jsx)(u.dh,{children:(0,h.jsx)(u._T,{w:"auto",children:(0,h.jsxs)(u.iP,{as:o.gC,py:4,px:8,children:[(0,h.jsx)(o.X6,{size:"4xl",children:t.remaining.seconds}),(0,h.jsx)(o.xv,{fontSize:"xl",children:"GET READY"})]})})})})},m=function(e){var n=e.children,r=e.isOpen,t=e.onClose,i=e.onPlayAgainClick,o=(0,d.useRef)(null);return(0,h.jsx)(u.aR,{isCentered:!0,isOpen:r,onClose:t,leastDestructiveRef:o,children:(0,h.jsx)(u.dh,{children:(0,h.jsxs)(u._T,{mx:4,children:[(0,h.jsx)(u.fY,{children:"Game Over"}),(0,h.jsx)(u.iP,{children:n}),(0,h.jsxs)(u.xo,{children:[(0,h.jsx)(a.zx,{ref:o,onClick:t,colorScheme:"red",variant:"outline",children:"Close"}),(0,h.jsx)(a.zx,{ml:2,variant:"outline",colorScheme:"blue",onClick:i,children:"Play Again"})]})]})})})},j=r(5070),y=r(5486),b=r(71),v=r(510),g=r(8866),C=(0,i.m$)(o.Ct,{baseStyle:{minW:"50px",fontSize:"xl",display:"flex",borderWidth:"1px",borderRadius:"md",boxShadow:"inner",alignItems:"center",justifyContent:"center"}}),S=function(e){var n=e.stats,r=e.onPlayClick,i=void 0===r?f.identity:r,u=e.onStopClick,d=void 0===u?f.identity:u,S=e.onTimerStart,O=void 0===S?f.identity:S,w=e.onTimerStop,k=void 0===w?f.identity:w,A=(0,v.FV)(g.s_),z=(0,t.Z)(A,2),Z=z[0],E=z[1],R=(0,s.qY)(),_=R.isOpen,T=R.onOpen,P=R.onClose,J=(0,s.qY)(),F=J.isOpen,M=J.onOpen,Y=J.onClose,$=(0,x.au)({onExpire:function(){M(),k()}}),U=function(){i(),Y(),T()};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.Z,{}),(0,h.jsx)(p,{isOpen:_,onClose:function(){P(),$.start(Z),O()}}),(0,h.jsxs)(m,{isOpen:F,onClose:Y,onPlayAgainClick:U,children:["You identified ",n.correct," notes correctly"]}),(0,h.jsxs)(o.W2,{py:1,as:o.Ug,align:"stretch",overflowX:"auto",maxW:"container.sm",justifyContent:"center",children:[(0,h.jsx)(l.Ee,{as:o.Ug,value:Z,onChange:function(e){return E(Number(e))},children:y.b.map((function(e){var n=e.label,r=e.value;return(0,h.jsx)(l.Y8,{value:r,children:n},r)}))}),(0,h.jsx)(a.hU,{"aria-label":"Play",onClick:U,isDisabled:$.isRunning,icon:(0,h.jsx)(c.JO,{as:b.Z7H,boxSize:"20px"})}),(0,h.jsx)(o.M5,{w:"80px",px:4,borderRadius:"md",boxShadow:"inner",children:(0,h.jsx)(o.xv,{fontSize:"lg",children:$.remaining.formatted})}),(0,h.jsx)(a.hU,{"aria-label":"Stop",onClick:function(){$.reset(),d()},icon:(0,h.jsx)(c.JO,{as:b.Wcw,boxSize:"20px"})}),(0,h.jsx)(C,{colorScheme:"green",borderColor:"green.200",children:n.correct}),(0,h.jsx)(C,{colorScheme:"red",borderColor:"red.200",children:n.attempts-n.correct})]})]})}},9036:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t,i=r(8735),o=r(6031),s=r(5353),l=r(9676),a=r(2791),c=r(510),u=r(3011),f=r.n(u),d=r(8866),x=r(4172),h=r(6303),p=r(184),m=function(){var e,n,r=(0,c.sJ)(x.wZ),u=(0,c.sJ)(d.yF),m=(0,c.sJ)(x.Lh),j=(0,c.Zl)(x.si),y=(0,c.sJ)(x.$x),b=(0,c.rb)(x.si),v=(0,c.sJ)(x.bt),g=y-v.length,C=(0,a.useMemo)((function(){return(0,h.ui)(m,u)}),[m]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{stats:r.game,onTimerStart:b}),(0,p.jsxs)(i.xu,{position:"relative",children:[(0,p.jsx)(s.Z,{activeNotes:v,onNoteClick:function(e){return j(e)}}),(0,p.jsx)(o.Z,{})]}),(0,p.jsxs)(i.X6,{alignSelf:"center",children:["Find ",(0,p.jsx)("mark",{children:C})," in ",f()(t||(e=[""," plac[e|es]"],n||(n=e.slice(0)),t=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),g)]})]})}},3011:function(e,n,r){var t=r(9504).default;e.exports=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=[],s=Array.isArray;r.forEach((function(e,n){if("number"==typeof e)r[n]=[e,e];else if(s(e)){if("number"!=typeof e[0])throw TypeError("First item in array must be a Number");r[n]=[e[0],"function"==typeof e[1]?e[1](e[0]):null]}}));var l,a,c=r.find(s),u=t(e);try{for(u.s();!(a=u.n()).done;){var f=a.value;if(s(l)&&null==l[1]&&(f=f.replace(/^\s+/,"")),c?o.push(f.replace(/\[([^|]*)\|([^\]]*)\]/g,1==c[0]?"$1":"$2")):o.push(f),!r.length)break;c=r.find(s)||c,l=r.shift(),o.push(l===c?c[1]:l)}}catch(d){u.e(d)}finally{u.f()}return o.join("")}},5314:function(e){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t},e.exports.__esModule=!0,e.exports.default=e.exports},9504:function(e,n,r){var t=r(5816);e.exports=function(e,n){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw s}}}},e.exports.__esModule=!0,e.exports.default=e.exports},5816:function(e,n,r){var t=r(5314);e.exports=function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=find-the-note.43f848e4.chunk.js.map