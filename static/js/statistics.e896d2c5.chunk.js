(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[10],{114:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(113),c=function(e,t){return t>0?Object(r.round)(e/t*100):0},a=n(118),i=function(){return Object(r.times)(12).map((function(e){return a.b.simplify("C"+Object(r.repeat)("#",e))}))},u=function(e){return a.a.midiToNoteName(e,{sharps:!0,pitchClass:!0})},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sharps",n=Object(r.isNumber)(e)?u(e):e;return a.b.enharmonic(n)===n||"sharps"===t?n:"flats"===t||Math.random()>.5?a.b.enharmonic(n):n},f=n(125),o=n(57),d=function(e){return function(t){var n=t.node,r=t.setSelf,c=t.onSet,a="noteTrainer.".concat(n.key),i=f.get(a);i?r(i):e&&(f.set(a,e),r(e)),c((function(e){e instanceof o.a?f.remove(a):f.set(a,e)}))}}},115:function(e,t,n){"use strict";n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return B})),n.d(t,"a",(function(){return f})),n.d(t,"i",(function(){return o})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return G}));var r=n(113),c=n(57),a=n(120),i=n(114),u=n(118),s=n(121),f=Object(c.c)({key:"fretboardIdState",default:"standard-6",effects_UNSTABLE:[Object(i.b)()]}),o=Object(c.c)({key:"leftHandedState",default:!1,effects_UNSTABLE:[Object(i.b)()]}),d=Object(c.c)({key:"halfNotesState",default:"random",effects_UNSTABLE:[Object(i.b)()]}),b=Object(c.d)({key:"fretboardState",get:function(e){var t=e.get;return s.a[t(f)]}}),j=Object(c.d)({key:"fretboardNotesState",get:function(e){var t=e.get,n=t(b),c=t(o);return Object(r.flatMap)(n.tuning,(function(e,t){return Object(r.times)(n.fretCount+1).map((function(n){var a=e+Object(r.repeat)(c?"b":"#",n),i=u.b.simplify(a);return{id:a,name:c?u.b.enharmonic(i):i,string:t+1}}))}))}}),l=Object(c.c)({key:"ftnFrettedNotesState",default:[],effects_UNSTABLE:[Object(i.b)()]}),O=Object(c.c)({key:"ftnSeedState",default:0,effects_UNSTABLE:[Object(i.b)(Math.random())]}),g=Object(c.d)({key:"ftnQueueState",get:function(e){var t=(0,e.get)(O),n=Object(i.a)();return Object(a.shuffle)(n,t)}}),m=Object(c.c)({key:"ftnPointerState",default:0,effects_UNSTABLE:[Object(i.b)()]}),h=Object(c.d)({key:"ftnPointerSelector",get:function(e){return(0,e.get)(m)},set:function(e,t){var n=e.get,r=e.set,a=e.reset,i=n(g);t instanceof c.a||!i[t]?(r(O,n(O)+Math.random()),a(m)):r(m,t),a(l)}}),v=Object(c.d)({key:"ftnNoteState",get:function(e){var t=e.get;return t(g)[t(h)]}}),S=Object(c.d)({key:"ftnCountState",get:function(e){var t=e.get,n=t(j),c=t(v);return Object(r.filter)(n,["name",c]).length}}),p=Object(c.d)({key:"ftnGameSelector",get:function(e){return(0,e.get)(l)},set:function(e,t){var n=e.get,r=e.set;t instanceof c.a||t.length===n(S)?r(h,n(h)+1):r(l,t)}}),k=Object(c.c)({key:"ntnTotalAttemptsState",default:0,effects_UNSTABLE:[Object(i.b)()]}),N=Object(c.c)({key:"ntnTotalCorrectState",default:0,effects_UNSTABLE:[Object(i.b)()]}),y=Object(c.c)({key:"ntnGameAttemptsState",default:0,effects_UNSTABLE:[Object(i.b)()]}),E=Object(c.c)({key:"ntnGameCorrectState",default:0,effects_UNSTABLE:[Object(i.b)()]}),_=Object(c.c)({key:"ntnSeedState",default:0,effects_UNSTABLE:[Object(i.b)(Math.random())]}),x=Object(c.d)({key:"ntnQueueState",get:function(e){var t=e.get,n=t(_),r=t(j);return Object(a.shuffle)(r,n)}}),T=Object(c.c)({key:"ntnPointerState",default:0,effects_UNSTABLE:[Object(i.b)()]}),A=Object(c.d)({key:"ntnPointerSelector",get:function(e){return(0,e.get)(T)},set:function(e,t){var n=e.get,r=e.set,a=e.reset,i=n(x);t instanceof c.a||!i[t]?(r(_,n(_)+Math.random()),a(T)):r(T,t)}}),C=Object(c.d)({key:"ntnNoteState",get:function(e){var t=e.get;return t(x)[t(A)]}}),B=Object(c.d)({key:"ntnGameSelector",get:function(e){return(0,e.get)(C)},set:function(e,t){var n=e.get,r=e.set,a=e.reset;if(t instanceof c.a)return a(A),a(E),void a(y);var i=n(C),u=t.name===i.name;r(y,n(y)+1),r(E,n(E)+Number(u)),r(k,n(k)+1),r(N,n(N)+Number(u)),u&&r(A,n(A)+1)}}),G=Object(c.d)({key:"gameStatsState",get:function(e){var t=e.get;return[{game:"Name the Note",correct:t(N),attempts:t(k),percent:Object(i.d)(t(N),t(k))}]},set:function(e,t){var n=e.reset;t instanceof c.a&&(n(B),n(N),n(k))}})},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"standard-6":{h:220,fretCount:12,id:"standard-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Standard Tuning",tuning:["E","A","D","G","B","E"].reverse()},"e-flat":{h:220,fretCount:12,id:"e-flat",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - E Flat",tuning:["D#","G#","C#","F#","A#","D#"].reverse()},"open-e":{h:220,fretCount:12,id:"open-e",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Open E",tuning:["E","B","E","G#","B","E"].reverse()},"dad-gad":{h:220,fretCount:12,id:"dad-gad",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Dad-Gad",tuning:["D","A","D","G","A","D"].reverse()},"standard-7":{h:254,fretCount:12,id:"standard-7",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4,3,2,1].reverse(),tuning:["B","E","A","D","G","B","E"].reverse(),name:"7 String Guitar - Standard Tuning"},"standard-4":{h:200,fretCount:12,id:"standard-4",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4].reverse(),tuning:["E","A","D","G"].reverse(),name:"4 String Bass - Standard Tuning"},"standard-5":{h:220,fretCount:12,id:"standard-5",fretMarkers:[3,5,7,9,12],guages:[8,7,6,5,4].reverse(),tuning:["B","E","A","D","G"].reverse(),name:"5 String Bass - Standard Tuning"}}},124:function(e,t){},177:function(e,t,n){"use strict";n.r(t);var r=n(13),c=n(50),a=n(76),i=n(77),u=n(61),s=n(59),f=n(1),o=n(57),d=n(115),b=n(4);t.default=function(){var e=Object(r.f)(),t=e.isOpen,n=e.onOpen,j=e.onClose,l=Object(f.useRef)(null),O=Object(o.f)(d.g),g=Object(o.g)(d.g);return Object(b.jsx)(c.e,{children:Object(b.jsxs)(c.m,{as:s.a,align:"stretch",children:[Object(b.jsxs)(a.a,{variant:"simple",children:[Object(b.jsx)(a.e,{children:Object(b.jsxs)(a.f,{children:[Object(b.jsx)(a.d,{children:"Game"}),Object(b.jsx)(a.d,{isNumeric:!0,children:"\u2705"}),Object(b.jsx)(a.d,{isNumeric:!0,children:"Total"}),Object(b.jsx)(a.d,{isNumeric:!0,children:"%"})]})}),Object(b.jsx)(a.b,{children:O.map((function(e){var t=e.game,n=e.correct,r=e.attempts,c=e.percent;return Object(b.jsxs)(a.f,{children:[Object(b.jsx)(a.c,{children:t}),Object(b.jsx)(a.c,{isNumeric:!0,children:n}),Object(b.jsx)(a.c,{isNumeric:!0,children:r}),Object(b.jsxs)(a.c,{isNumeric:!0,children:[c,"%"]})]},t)}))})]}),Object(b.jsx)(i.a,{isOpen:t,onClose:j,leastDestructiveRef:l,children:Object(b.jsx)(i.f,{children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.e,{fontSize:"lg",fontWeight:"bold",children:"Reset Statistics"}),Object(b.jsx)(i.b,{children:"Are you sure? This can't be undone."}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(u.a,{ref:l,onClick:j,variant:"outline",colorScheme:"blue",children:"Cancel"}),Object(b.jsx)(u.a,{ml:2,colorScheme:"red",variant:"outline",onClick:function(){g(),j()},children:"Reset"})]})]})})}),Object(b.jsx)(u.a,{onClick:n,colorScheme:"red",variant:"outline",children:"Reset Statistics"})]})})}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return m}));var r=n(3),c=n(2),a=n(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}var s=["className"],f=["placement"],o=["isNumeric"],d=["isNumeric"],b=Object(r.e)((function(e,t){var n=Object(r.g)("Table",e),f=Object(r.f)(e),o=f.className,d=u(f,s);return a.createElement(r.b,{value:n},a.createElement(r.d.table,i({role:"table",ref:t,__css:n.table,className:Object(c.i)("chakra-table",o)},d)))}));c.b&&(b.displayName="Table");var j=Object(r.e)((function(e,t){var n=e.placement,c=void 0===n?"bottom":n,s=u(e,f),o=Object(r.i)();return a.createElement(r.d.caption,i({},s,{ref:t,__css:i({},o.caption,{captionSide:c})}))}));c.b&&(j.displayName="TableCaption");var l=Object(r.e)((function(e,t){var n=Object(r.i)();return a.createElement(r.d.thead,i({},e,{ref:t,__css:n.thead}))})),O=Object(r.e)((function(e,t){var n=Object(r.i)();return a.createElement(r.d.tbody,i({},e,{ref:t,__css:n.tbody}))})),g=Object(r.e)((function(e,t){var n=e.isNumeric,c=u(e,o),s=Object(r.i)();return a.createElement(r.d.th,i({},c,{ref:t,__css:s.th,"data-is-numeric":n}))})),m=Object(r.e)((function(e,t){var n=Object(r.i)();return a.createElement(r.d.tr,i({role:"row"},e,{ref:t,__css:n.tr}))})),h=Object(r.e)((function(e,t){var n=e.isNumeric,c=u(e,d),s=Object(r.i)();return a.createElement(r.d.td,i({role:"gridcell"},c,{ref:t,__css:s.td,"data-is-numeric":n}))}))}}]);
//# sourceMappingURL=statistics.e896d2c5.chunk.js.map