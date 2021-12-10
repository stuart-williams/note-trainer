(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[4],{114:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return b}));var r=n(113),a=function(t,e){return e>0?Object(r.round)(t/e*100):0},c=n(118),o=function(){return Object(r.times)(12).map((function(t){return c.b.simplify("C"+Object(r.repeat)("#",t))}))},i=function(t){return c.a.midiToNoteName(t,{sharps:!0,pitchClass:!0})},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sharps",n=Object(r.isNumber)(t)?i(t):t;return c.b.enharmonic(n)===n||"sharps"===e?n:"flats"===e||Math.random()>.5?c.b.enharmonic(n):n},s=n(125),f=n(57),b=function(t){return function(e){var n=e.node,r=e.setSelf,a=e.onSet,c="noteTrainer.".concat(n.key),o=s.get(c);o?r(o):t&&(s.set(c,t),r(t)),a((function(t){t instanceof f.a?s.remove(c):s.set(c,t)}))}}},115:function(t,e,n){"use strict";n.d(e,"f",(function(){return S})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return y})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return j})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return N})),n.d(e,"l",(function(){return M})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return f})),n.d(e,"h",(function(){return b})),n.d(e,"g",(function(){return G}));var r=n(113),a=n(57),c=n(120),o=n(114),i=n(118),u=n(121),s=Object(a.c)({key:"fretboardIdState",default:"standard-6",effects_UNSTABLE:[Object(o.b)()]}),f=Object(a.c)({key:"leftHandedState",default:!1,effects_UNSTABLE:[Object(o.b)()]}),b=Object(a.c)({key:"halfNotesState",default:"random",effects_UNSTABLE:[Object(o.b)()]}),d=Object(a.d)({key:"fretboardState",get:function(t){var e=t.get;return u.a[e(s)]}}),j=Object(a.d)({key:"fretboardNotesState",get:function(t){var e=t.get,n=e(d),a=e(f);return Object(r.flatMap)(n.tuning,(function(t,e){return Object(r.times)(n.fretCount+1).map((function(n){var c=t+Object(r.repeat)(a?"b":"#",n),o=i.b.simplify(c);return{id:c,name:a?i.b.enharmonic(o):o,string:e+1}}))}))}}),l=Object(a.c)({key:"ftnFrettedNotesState",default:[],effects_UNSTABLE:[Object(o.b)()]}),g=Object(a.c)({key:"ftnSeedState",default:0,effects_UNSTABLE:[Object(o.b)(Math.random())]}),O=Object(a.d)({key:"ftnQueueState",get:function(t){var e=(0,t.get)(g),n=Object(o.a)();return Object(c.shuffle)(n,e)}}),m=Object(a.c)({key:"ftnPointerState",default:0,effects_UNSTABLE:[Object(o.b)()]}),p=Object(a.d)({key:"ftnPointerSelector",get:function(t){return(0,t.get)(m)},set:function(t,e){var n=t.get,r=t.set,c=t.reset,o=n(O);e instanceof a.a||!o[e]?(r(g,n(g)+Math.random()),c(m)):r(m,e),c(l)}}),S=Object(a.d)({key:"ftnNoteState",get:function(t){var e=t.get;return e(O)[e(p)]}}),v=Object(a.d)({key:"ftnCountState",get:function(t){var e=t.get,n=e(j),a=e(S);return Object(r.filter)(n,["name",a]).length}}),y=Object(a.d)({key:"ftnGameSelector",get:function(t){return(0,t.get)(l)},set:function(t,e){var n=t.get,r=t.set;e instanceof a.a||e.length===n(v)?r(p,n(p)+1):r(l,e)}}),h=Object(a.c)({key:"ntnTotalAttemptsState",default:0,effects_UNSTABLE:[Object(o.b)()]}),k=Object(a.c)({key:"ntnTotalCorrectState",default:0,effects_UNSTABLE:[Object(o.b)()]}),x=Object(a.c)({key:"ntnGameAttemptsState",default:0,effects_UNSTABLE:[Object(o.b)()]}),N=Object(a.c)({key:"ntnGameCorrectState",default:0,effects_UNSTABLE:[Object(o.b)()]}),C=Object(a.c)({key:"ntnSeedState",default:0,effects_UNSTABLE:[Object(o.b)(Math.random())]}),E=Object(a.d)({key:"ntnQueueState",get:function(t){var e=t.get,n=e(C),r=e(j);return Object(c.shuffle)(r,n)}}),A=Object(a.c)({key:"ntnPointerState",default:0,effects_UNSTABLE:[Object(o.b)()]}),B=Object(a.d)({key:"ntnPointerSelector",get:function(t){return(0,t.get)(A)},set:function(t,e){var n=t.get,r=t.set,c=t.reset,o=n(E);e instanceof a.a||!o[e]?(r(C,n(C)+Math.random()),c(A)):r(A,e)}}),T=Object(a.d)({key:"ntnNoteState",get:function(t){var e=t.get;return e(E)[e(B)]}}),M=Object(a.d)({key:"ntnGameSelector",get:function(t){return(0,t.get)(T)},set:function(t,e){var n=t.get,r=t.set,c=t.reset;if(e instanceof a.a)return c(B),c(N),void c(x);var o=n(T),i=e.name===o.name;r(x,n(x)+1),r(N,n(N)+Number(i)),r(h,n(h)+1),r(k,n(k)+Number(i)),i&&r(B,n(B)+1)}}),G=Object(a.d)({key:"gameStatsState",get:function(t){var e=t.get;return[{game:"Name the Note",correct:e(k),attempts:e(h),percent:Object(o.d)(e(k),e(h))}]},set:function(t,e){var n=t.reset;e instanceof a.a&&(n(M),n(k),n(h))}})},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={"standard-6":{fretCount:12,id:"standard-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Standard Tuning",tuning:["E","A","D","G","B","E"].reverse()},"e-flat":{fretCount:12,id:"e-flat",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - E Flat",tuning:["D#","G#","C#","F#","A#","D#"].reverse()},"open-e":{fretCount:12,id:"open-e",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Open E",tuning:["E","B","E","G#","B","E"].reverse()},"dad-gad":{fretCount:12,id:"dad-gad",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Dad-Gad",tuning:["D","A","D","G","A","D"].reverse()},"standard-7":{fretCount:12,id:"standard-7",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4,3,2,1].reverse(),tuning:["B","E","A","D","G","B","E"].reverse(),name:"7 String Guitar - Standard Tuning"},"standard-4":{fretCount:12,id:"standard-4",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4].reverse(),tuning:["E","A","D","G"].reverse(),name:"4 String Bass - Standard Tuning"},"standard-5":{fretCount:12,id:"standard-5",fretMarkers:[3,5,7,9,12],guages:[8,7,6,5,4].reverse(),tuning:["B","E","A","D","G"].reverse(),name:"5 String Bass - Standard Tuning"}}},124:function(t,e){},127:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var r=n(3),a=n(50),c=n(31),o=n(113),i=(n(1),n(57)),u=n(115),s=n(4),f=Object(r.d)(a.g,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),b=Object(r.d)(a.g,{baseStyle:{position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",_before:{w:"8px",top:0,bottom:0,position:"absolute",background:"linear-gradient(to right, gold, gray, gold)"}}}),d=Object(r.d)(a.b,{baseStyle:{position:"relative",_before:{top:0,bottom:0,w:"16px",content:'""',position:"absolute",background:"gray.200"}}}),j=Object(r.d)(a.d,{baseStyle:{bg:"gray.200",h:{base:"18px",md:"26px"},w:{base:"18px",md:"26px"}}}),l=function(){var t=Object(i.f)(u.c),e=Object(i.f)(u.i),n=t.fretCount+1;return Object(s.jsx)(f,{templateColumns:"repeat(".concat(n,", 1fr)"),children:Object(o.times)(n).map((function(n){var r,a=e?t.fretCount-n:n,i=a%12===0?2:1,u=t.fretMarkers.includes(a),f={":before":(r={},Object(c.a)(r,e?"left":"right","-4px"),Object(c.a)(r,"content",a===t.fretCount?void 0:'""'),r)};return a?Object(s.jsx)(b,{sx:f,templateRows:"repeat(".concat(i,", 1fr)"),children:u&&Object(o.times)(i).map((function(t){return Object(s.jsx)(j,{},t)}))},a):Object(s.jsx)(d,{sx:f},a)}))})},g=n.p+"static/media/wood.3cf6e95a.png",O=Object(r.d)(a.k,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute"}}),m=Object(r.d)(a.b,{baseStyle:{position:"relative",_before:{top:"50%",left:"50%",color:"white",display:"flex",alignItems:"center",borderRadius:"full",position:"absolute",justifyContent:"center",h:{base:"24px",md:"34px"},w:{base:"24px",md:"34px"},transform:"translate(-50%, -50%)"}}}),p=function(t){var e=t.activeNotes,n=t.onNoteClick,r=void 0===n?o.identity:n,a=Object(i.f)(u.c),c=Object(i.f)(u.b),f=a.fretCount+1;return Object(s.jsx)(O,{columns:f,children:c.map((function(t,n){var a=Object(o.find)(e,t),c=(null===a||void 0===a?void 0:a.displayName)||"";return Object(s.jsx)(m,{onClick:function(){return r(t)},sx:a?{":before":{bg:"red.500",content:'"'.concat(c,'"')}}:void 0},n)}))})},S=Object(r.d)(a.g,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),v=Object(r.d)(a.f,{baseStyle:{alignItems:"center",_before:{w:"100%",content:'""',boxShadow:"md",background:"linear-gradient(to bottom, gray, white, gray)"}}}),y=function(){var t=Object(i.f)(u.c);return Object(s.jsx)(S,{templateRows:"repeat(".concat(t.tuning.length,", 1fr)"),children:t.tuning.map((function(e,n){return Object(s.jsx)(v,{sx:{":before":{h:(t.guages[n]||1)+"px"}}},n)}))})},h=Object(r.d)(a.b,{baseStyle:{h:{md:220,base:180},position:"relative",bg:"#222222 url(".concat(g,")")}}),k=function(t){var e=t.activeNotes,n=t.onNoteClick;return Object(s.jsxs)(h,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(y,{}),Object(s.jsx)(p,{onNoteClick:n,activeNotes:e})]})}},129:function(t,e,n){"use strict";var r=n(6),a=n(27),c=n(3),o=n(50),i=n(118),u=n(113),s=n(1),f=n(139),b=(n(140),n(57)),d=n(115),j=n(114),l=n(4),g={first:i.a.toMidi("c4"),last:i.a.toMidi("b4")},O=f.a.create({firstNote:g.first,lastNote:g.last,keyboardConfig:f.a.HOME_ROW}),m=Object(c.d)(o.e,{baseStyle:{minH:"100px",flex:"1 1 auto",maxW:"container.sm",maxH:{base:"140px",md:"220px"}}}),p=Object(c.d)(o.l,{baseStyle:{userSelect:"none",fontWeight:"bold",textAlign:"center",p:{base:0,sm:1,md:2}}});e.a=Object(c.d)((function(t){var e=t.onClick,n=Object(a.a)(t,["onClick"]),c=Object(b.f)(d.h),o=Object(s.useRef)({});return Object(l.jsx)(m,Object(r.a)(Object(r.a)({},n),{},{children:Object(l.jsx)(f.b,{stopNote:u.identity,noteRange:g,playNote:function(t){return e(Object(j.c)(t))},keyboardShortcuts:O,renderNoteLabel:function(t){var e=t.midiNumber,n=o.current[e]||Object(j.e)(e,c);o.current[e]=n;var r=i.b.enharmonic(n)!==n;return Object(l.jsx)(p,{color:r?"white":"black",children:n})}})}))}))},168:function(t,e,n){"use strict";n.r(e);var r=n(6),a=n(35),c=n(5),o=n(127),i=n(129),u=n(1),s=n(57),f=n(115),b=n(114),d=n(4);e.default=function(){var t=Object(s.f)(f.h),e=Object(s.f)(f.b),n=Object(u.useState)(""),j=Object(c.a)(n,2),l=j[0],g=j[1],O=Object(u.useMemo)((function(){return e.reduce((function(e,n){return l&&n.name!==l?e:[].concat(Object(a.a)(e),[Object(r.a)(Object(r.a)({},n),{},{displayName:Object(b.e)(n.name,t)})])}),[])}),[l,t]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{activeNotes:O}),Object(d.jsx)(i.a,{alignSelf:"center",onClick:g})]})}}}]);
//# sourceMappingURL=fretboard-reference.6eb6899a.chunk.js.map