(self.webpackChunknote_trainer=self.webpackChunknote_trainer||[]).push([[684],{6031:function(e,n,r){"use strict";var t=r(678),i=r(3209),o=r(8735),s=r(7231),l=r(9113),c=r(2791),a=r(8820),u=r(3502),f=r(510),d=r(8866),x=r(184),p=(0,i.m$)(o.M5,{baseStyle:{top:0,left:0,right:0,bottom:0,opacity:.7,position:"absolute"}});n.Z=function(e){var n=e.indicateStates,r=void 0===n?[0,1]:n,i=(0,u.Z)(),o=(0,f.FV)(d.Vw),h=(0,t.Z)(o,2),m=h[0],b=h[1],j=(0,c.useRef)(0);return j.current=m>-1?m:j.current,(0,c.useEffect)((function(){setTimeout((function(){i()&&b(-1)}),250)}),[m]),(0,x.jsx)(s.pT,{unmountOnExit:!0,in:r.includes(m),children:(0,x.jsx)(p,{bg:j.current?"green.500":"red.500",children:(0,x.jsx)(l.JO,{color:"white",boxSize:"100px",as:j.current?a.bzc:a.oHP})})})}},9676:function(e,n,r){"use strict";r.d(n,{Z:function(){return S}});var t=r(678),i=r(3209),o=r(8735),s=r(855),l=r(5223),c=r(3445),a=r(7805),u=r(9113),f=r(7148),d=r(763),x=r(2791),p=r(6303),h=r(184),m=function(e){var n=e.isOpen,r=e.onClose,t=(0,p.au)({onExpire:r}),i=(0,x.useRef)(null);return(0,x.useEffect)((function(){n&&t.start(3e3)}),[n]),(0,h.jsx)(f.aR,{isCentered:!0,isOpen:n,onClose:d.identity,leastDestructiveRef:i,children:(0,h.jsx)(f.dh,{children:(0,h.jsx)(f._T,{w:"auto",children:(0,h.jsxs)(f.iP,{as:o.gC,py:4,px:8,children:[(0,h.jsx)(o.X6,{size:"4xl",children:t.remaining.seconds}),(0,h.jsx)(o.xv,{fontSize:"xl",children:"GET READY"})]})})})})},b=function(e){var n=e.children,r=e.isOpen,t=e.onClose,i=e.onPlayAgainClick,o=(0,x.useRef)(null);return(0,h.jsx)(f.aR,{isCentered:!0,isOpen:r,onClose:t,leastDestructiveRef:o,children:(0,h.jsx)(f.dh,{children:(0,h.jsxs)(f._T,{mx:4,children:[(0,h.jsx)(f.fY,{children:"Game Over"}),(0,h.jsx)(f.iP,{children:n}),(0,h.jsxs)(f.xo,{children:[(0,h.jsx)(a.zx,{ref:o,onClick:t,colorScheme:"blue",children:"Close"}),(0,h.jsx)(a.zx,{ml:2,colorScheme:"blue",onClick:i,children:"Play Again"})]})]})})})},j=r(5486),y=r(71),v=r(510),g=r(8866),C=(0,i.m$)(o.Ct,{baseStyle:{minW:"50px",fontSize:"xl",display:"flex",borderWidth:"1px",borderRadius:"md",boxShadow:"inner",alignItems:"center",justifyContent:"center"}}),S=function(e){var n=e.stats,r=e.onPlayClick,i=void 0===r?d.identity:r,f=e.onStopClick,x=void 0===f?d.identity:f,S=e.onTimerStart,O=void 0===S?d.identity:S,w=e.onTimerStop,k=void 0===w?d.identity:w,z=(0,s.Sx)({base:"sm",md:"md"}),A=(0,v.FV)(g.s_),E=(0,t.Z)(A,2),R=E[0],Z=E[1],_=(0,l.qY)(),T=_.isOpen,P=_.onOpen,J=_.onClose,M=(0,l.qY)(),F=M.isOpen,Y=M.onOpen,$=M.onClose,U=(0,p.au)({onExpire:function(){Y(),k()}}),W=function(){i(),$(),P()};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{isOpen:T,onClose:function(){J(),U.start(R),O()}}),(0,h.jsxs)(b,{isOpen:F,onClose:$,onPlayAgainClick:W,children:["You identified ",n.correct," notes correctly"]}),(0,h.jsxs)(o.W2,{as:o.Ug,spacing:1,align:"stretch",maxW:"container.sm",justifyContent:"center",children:[(0,h.jsx)(c.Ee,{as:o.Ug,value:R,onChange:function(e){return Z(Number(e))},children:j.b.map((function(e){var n=e.label,r=e.value;return(0,h.jsx)(c.Y8,{value:r,children:n},r)}))}),(0,h.jsx)(a.hU,{"aria-label":"Play",size:z,onClick:W,isDisabled:U.isRunning,icon:(0,h.jsx)(u.JO,{as:y.Z7H,boxSize:"20px"})}),(0,h.jsx)(o.M5,{w:"80px",px:4,borderRadius:"md",boxShadow:"inner",children:(0,h.jsx)(o.xv,{fontSize:"lg",children:U.remaining.formatted})}),(0,h.jsx)(a.hU,{"aria-label":"Stop",size:z,onClick:function(){U.reset(),x()},icon:(0,h.jsx)(u.JO,{as:y.Wcw,boxSize:"20px"})}),(0,h.jsx)(C,{colorScheme:"green",borderColor:"green.200",children:n.correct}),(0,h.jsx)(C,{colorScheme:"red",borderColor:"red.200",children:n.attempts-n.correct})]})]})}},9036:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t,i=r(8735),o=r(6031),s=r(5353),l=r(9676),c=r(2791),a=r(510),u=r(3011),f=r.n(u),d=r(8866),x=r(4172),p=r(6303),h=r(184),m=function(){var e,n,r=(0,a.sJ)(x.wZ),u=(0,a.sJ)(d.yF),m=(0,a.sJ)(x.Lh),b=(0,a.Zl)(x.si),j=(0,a.sJ)(x.$x),y=(0,a.rb)(x.si),v=(0,a.sJ)(x.bt),g=j-v.length,C=(0,c.useMemo)((function(){return(0,p.ui)(m,u)}),[m]);return(0,h.jsxs)(i.gC,{align:"stretch",flex:"1 1 auto",my:{base:1,lg:2},spacing:{base:1,lg:2},children:[(0,h.jsx)(l.Z,{stats:r.game,onTimerStart:y}),(0,h.jsxs)(i.xu,{position:"relative",children:[(0,h.jsx)(s.Z,{activeNotes:v,onNoteClick:function(e){return b(e)}}),(0,h.jsx)(o.Z,{})]}),(0,h.jsxs)(i.X6,{alignSelf:"center",children:["Find ",(0,h.jsx)("mark",{children:C})," in ",f()(t||(e=[""," plac[e|es]"],n||(n=e.slice(0)),t=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),g)]})]})}},3011:function(e,n,r){var t=r(9504).default;e.exports=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=[],s=Array.isArray;r.forEach((function(e,n){if("number"==typeof e)r[n]=[e,e];else if(s(e)){if("number"!=typeof e[0])throw TypeError("First item in array must be a Number");r[n]=[e[0],"function"==typeof e[1]?e[1](e[0]):null]}}));var l,c,a=r.find(s),u=t(e);try{for(u.s();!(c=u.n()).done;){var f=c.value;if(s(l)&&null==l[1]&&(f=f.replace(/^\s+/,"")),a?o.push(f.replace(/\[([^|]*)\|([^\]]*)\]/g,1==a[0]?"$1":"$2")):o.push(f),!r.length)break;a=r.find(s)||a,l=r.shift(),o.push(l===a?a[1]:l)}}catch(d){u.e(d)}finally{u.f()}return o.join("")}},5314:function(e){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t},e.exports.__esModule=!0,e.exports.default=e.exports},9504:function(e,n,r){var t=r(5816);e.exports=function(e,n){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw s}}}},e.exports.__esModule=!0,e.exports.default=e.exports},5816:function(e,n,r){var t=r(5314);e.exports=function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=find-the-note.0323fedc.chunk.js.map