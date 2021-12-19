(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[10],{113:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(114),c=function(e,t){return t>0?Object(r.round)(e/t*100):0},a=n(118),i=function(){return Object(r.times)(12).map((function(e){return a.b.simplify("C"+Object(r.repeat)("#",e))}))},u=function(e){return a.a.midiToNoteName(e,{sharps:!0,pitchClass:!0})},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sharps",n=Object(r.isNumber)(e)?u(e):e;return a.b.enharmonic(n)===n||"sharps"===t?n:"flats"===t||Math.random()>.5?a.b.enharmonic(n):n},f=n(125),o=n(57),d=function(e){return function(t){var n=t.node,r=t.setSelf,c=t.onSet,a="noteTrainer.".concat(n.key),i=f.get(a);null!==i?r(i):e&&(f.set(a,e),r(e)),c((function(e){e instanceof o.a?f.remove(a):f.set(a,e)}))}}},115:function(e,t,n){"use strict";n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return S})),n.d(t,"e",(function(){return v})),n.d(t,"j",(function(){return T})),n.d(t,"f",(function(){return _})),n.d(t,"i",(function(){return A})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return O})),n.d(t,"n",(function(){return C})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return P})),n.d(t,"b",(function(){return o})),n.d(t,"m",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"l",(function(){return j})),n.d(t,"k",(function(){return R}));var r=n(31),c=n(114),a=n(57),i=n(120),u=n(113),s=n(118),f=n(121),o=Object(a.c)({key:"fretboardIdState",default:"standard-6",effects_UNSTABLE:[Object(u.b)()]}),d=Object(a.c)({key:"leftHandedState",default:!1,effects_UNSTABLE:[Object(u.b)()]}),b=Object(a.c)({key:"fretMarkersState",default:!0,effects_UNSTABLE:[Object(u.b)()]}),j=Object(a.c)({key:"halfNotesState",default:"random",effects_UNSTABLE:[Object(u.b)()]}),l=Object(a.d)({key:"fretboardState",get:function(e){var t=e.get;return f.a[t(o)]}}),O=Object(a.d)({key:"fretboardNotesState",get:function(e){var t=e.get,n=t(l),r=t(d);return Object(c.flatMap)(n.tuning,(function(e,t){return Object(c.times)(n.fretCount+1).map((function(n){var a=e+Object(c.repeat)(r?"b":"#",n),i=s.b.simplify(a);return{id:a,name:r?s.b.enharmonic(i):i,string:t+1}}))}))}}),m=Object(a.c)({key:"ftnTotalAttemptsState",default:0,effects_UNSTABLE:[Object(u.b)()]}),g=Object(a.c)({key:"ftnTotalCorrectState",default:0,effects_UNSTABLE:[Object(u.b)()]}),h=Object(a.c)({key:"ftnGameAttemptsState",default:0,effects_UNSTABLE:[Object(u.b)()]}),S=Object(a.c)({key:"ftnGameCorrectState",default:0,effects_UNSTABLE:[Object(u.b)()]}),v=Object(a.c)({key:"ftnActiveNotesState",default:[],effects_UNSTABLE:[Object(u.b)()]}),k=Object(a.d)({key:"ftnStatSelector",get:function(){return!0},set:function(e,t){var n=e.get,r=e.set,c=e.reset;if(t instanceof a.a)return c(S),void c(h);r(h,n(h)+1),r(m,n(m)+1),t&&(r(S,n(S)+1),r(g,n(g)+1))}}),p=Object(a.c)({key:"ftnSeedState",default:0,effects_UNSTABLE:[Object(u.b)(Math.random())]}),N=Object(a.d)({key:"ftnQueueState",get:function(e){var t=(0,e.get)(p),n=Object(u.a)();return Object(i.shuffle)(n,t)}}),y=Object(a.c)({key:"ftnPointerState",default:0,effects_UNSTABLE:[Object(u.b)()]}),E=Object(a.d)({key:"ftnPointerSelector",get:function(e){return(0,e.get)(y)},set:function(e,t){var n=e.get,r=e.set,c=e.reset,i=n(N);t instanceof a.a||!i[t]?(r(p,n(p)+Math.random()),c(y)):r(y,t),c(v)}}),T=Object(a.d)({key:"ftnNoteState",get:function(e){var t=e.get;return t(N)[t(E)]}}),_=Object(a.d)({key:"ftnCountState",get:function(e){var t=e.get,n=t(O),r=t(T);return Object(c.filter)(n,["name",r]).length}}),A=Object(a.d)({key:"ftnGameSelector",get:function(){return null},set:function(e,t){var n=e.get,i=e.set,u=e.reset;if(t instanceof a.a)return u(k),void i(E,n(E)+1);if(null===t||t.name!==n(T))return i(k,!1),void i(E,n(E)+1);var s=n(_),f=n(v),o=[].concat(Object(r.a)(Object(c.without)(f,t)),[t]);o.length===s?(i(k,!0),i(E,n(E)+1)):i(v,o)}}),x=Object(a.c)({key:"ntnTotalAttemptsState",default:0,effects_UNSTABLE:[Object(u.b)()]}),B=Object(a.c)({key:"ntnTotalCorrectState",default:0,effects_UNSTABLE:[Object(u.b)()]}),C=Object(a.c)({key:"ntnGameAttemptsState",default:0,effects_UNSTABLE:[Object(u.b)()]}),G=Object(a.c)({key:"ntnGameCorrectState",default:0,effects_UNSTABLE:[Object(u.b)()]}),L=Object(a.c)({key:"ntnSeedState",default:0,effects_UNSTABLE:[Object(u.b)(Math.random())]}),U=Object(a.d)({key:"ntnQueueState",get:function(e){var t=e.get,n=t(L),r=t(O);return Object(i.shuffle)(r,n)}}),M=Object(a.c)({key:"ntnPointerState",default:0,effects_UNSTABLE:[Object(u.b)()]}),D=Object(a.d)({key:"ntnPointerSelector",get:function(e){return(0,e.get)(M)},set:function(e,t){var n=e.get,r=e.set,c=e.reset,i=n(U);t instanceof a.a||!i[t]?(r(L,n(L)+Math.random()),c(M)):r(M,t)}}),w=Object(a.d)({key:"ntnNoteState",get:function(e){var t=e.get;return t(U)[t(D)]}}),P=Object(a.d)({key:"ntnGameSelector",get:function(e){return(0,e.get)(w)},set:function(e,t){var n=e.get,r=e.set,c=e.reset;if(t instanceof a.a)return c(D),c(G),void c(C);var i=n(w),u=t.name===i.name;r(C,n(C)+1),r(x,n(x)+1),u&&(r(G,n(G)+1),r(B,n(B)+1),r(D,n(D)+1))}}),R=Object(a.d)({key:"gameStatsState",get:function(e){var t=e.get;return[{game:"Name the Note",correct:t(B),attempts:t(x),percent:Object(u.d)(t(B),t(x))},{game:"Find the Note",correct:t(g),attempts:t(m),percent:Object(u.d)(t(g),t(m))}]},set:function(e,t){var n=e.reset;t instanceof a.a&&(n(P),n(B),n(x),n(A),n(g),n(m))}})},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"standard-6":{h:220,fretCount:12,id:"standard-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Standard Tuning",tuning:["E","A","D","G","B","E"].reverse()},"e-flat":{h:220,fretCount:12,id:"e-flat",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - E Flat",tuning:["D#","G#","C#","F#","A#","D#"].reverse()},"open-e":{h:220,fretCount:12,id:"open-e",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Open E",tuning:["E","B","E","G#","B","E"].reverse()},"dad-gad":{h:220,fretCount:12,id:"dad-gad",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Dad-Gad",tuning:["D","A","D","G","A","D"].reverse()},"standard-7":{h:254,fretCount:12,id:"standard-7",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4,3,2,1].reverse(),tuning:["B","E","A","D","G","B","E"].reverse(),name:"7 String Guitar - Standard Tuning"},"standard-4":{h:200,fretCount:12,id:"standard-4",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4].reverse(),tuning:["E","A","D","G"].reverse(),name:"4 String Bass - Standard Tuning"},"standard-5":{h:220,fretCount:12,id:"standard-5",fretMarkers:[3,5,7,9,12],guages:[8,7,6,5,4].reverse(),tuning:["B","E","A","D","G"].reverse(),name:"5 String Bass - Standard Tuning"}}},124:function(e,t){},181:function(e,t,n){"use strict";n.r(t);var r=n(13),c=n(50),a=n(76),i=n(77),u=n(61),s=n(59),f=n(1),o=n(57),d=n(115),b=n(4);t.default=function(){var e=Object(r.f)(),t=e.isOpen,n=e.onOpen,j=e.onClose,l=Object(f.useRef)(null),O=Object(o.f)(d.k),m=Object(o.g)(d.k);return Object(b.jsx)(c.e,{children:Object(b.jsxs)(c.m,{as:s.a,align:"stretch",children:[Object(b.jsxs)(a.a,{variant:"simple",children:[Object(b.jsx)(a.e,{children:Object(b.jsxs)(a.f,{children:[Object(b.jsx)(a.d,{children:"Game"}),Object(b.jsx)(a.d,{isNumeric:!0,children:"\u2705"}),Object(b.jsx)(a.d,{isNumeric:!0,children:"Total"}),Object(b.jsx)(a.d,{isNumeric:!0,children:"%"})]})}),Object(b.jsx)(a.b,{children:O.map((function(e){var t=e.game,n=e.correct,r=e.attempts,c=e.percent;return Object(b.jsxs)(a.f,{children:[Object(b.jsx)(a.c,{children:t}),Object(b.jsx)(a.c,{isNumeric:!0,children:n}),Object(b.jsx)(a.c,{isNumeric:!0,children:r}),Object(b.jsxs)(a.c,{isNumeric:!0,children:[c,"%"]})]},t)}))})]}),Object(b.jsx)(i.a,{isOpen:t,onClose:j,leastDestructiveRef:l,children:Object(b.jsx)(i.f,{children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.e,{fontSize:"lg",fontWeight:"bold",children:"Reset Statistics"}),Object(b.jsx)(i.b,{children:"Are you sure? This can't be undone."}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(u.a,{ref:l,onClick:j,variant:"outline",colorScheme:"blue",children:"Cancel"}),Object(b.jsx)(u.a,{ml:2,colorScheme:"red",variant:"outline",onClick:function(){m(),j()},children:"Reset"})]})]})})}),Object(b.jsx)(u.a,{onClick:n,colorScheme:"red",variant:"outline",children:"Reset Statistics"})]})})}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return g}));var r=n(3),c=n(2),a=n(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}var s=["className"],f=["placement"],o=["isNumeric"],d=["isNumeric"],b=Object(r.e)((function(e,t){var n=Object(r.g)("Table",e),f=Object(r.f)(e),o=f.className,d=u(f,s);return a.createElement(r.b,{value:n},a.createElement(r.d.table,i({role:"table",ref:t,__css:n.table,className:Object(c.i)("chakra-table",o)},d)))}));c.b&&(b.displayName="Table");var j=Object(r.e)((function(e,t){var n=e.placement,c=void 0===n?"bottom":n,s=u(e,f),o=Object(r.i)();return a.createElement(r.d.caption,i({},s,{ref:t,__css:i({},o.caption,{captionSide:c})}))}));c.b&&(j.displayName="TableCaption");var l=Object(r.e)((function(e,t){var n=Object(r.i)();return a.createElement(r.d.thead,i({},e,{ref:t,__css:n.thead}))})),O=Object(r.e)((function(e,t){var n=Object(r.i)();return a.createElement(r.d.tbody,i({},e,{ref:t,__css:n.tbody}))})),m=Object(r.e)((function(e,t){var n=e.isNumeric,c=u(e,o),s=Object(r.i)();return a.createElement(r.d.th,i({},c,{ref:t,__css:s.th,"data-is-numeric":n}))})),g=Object(r.e)((function(e,t){var n=Object(r.i)();return a.createElement(r.d.tr,i({role:"row"},e,{ref:t,__css:n.tr}))})),h=Object(r.e)((function(e,t){var n=e.isNumeric,c=u(e,d),s=Object(r.i)();return a.createElement(r.d.td,i({role:"gridcell"},c,{ref:t,__css:s.td,"data-is-numeric":n}))}))}}]);
//# sourceMappingURL=statistics.e1f10c71.chunk.js.map