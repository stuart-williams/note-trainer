(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[5],{112:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(118),c=n(124),a=n(113),o=n(56),i=function(e){return function(t){var n=t.node,r=t.setSelf,a=t.onSet,i="noteTrainer.".concat(n.key),s=c.get(i);s?r(s):e&&(c.set(i,e),r(e)),a((function(e){e instanceof o.a?c.remove(i):c.set(i,e)}))}},s=function(){return Object(a.times)(12).map((function(e){return r.b.simplify("C"+Object(a.repeat)("#",e))}))},u=function(e,t){return t>0?Object(a.round)(e/t*100):0}},114:function(e,t,n){"use strict";n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return k})),n.d(t,"k",(function(){return _})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return A}));var r=n(113),c=n(56),a=n(119),o=n(112),i=n(118),s=n(120),u=Object(c.c)({key:"fretboardIdState",default:"standard-6",effects_UNSTABLE:[Object(o.b)()]}),b=Object(c.c)({key:"leftHandedState",default:!1,effects_UNSTABLE:[Object(o.b)()]}),f=Object(c.d)({key:"fretboardState",get:function(e){var t=e.get;return s.a[t(u)]}}),d=Object(c.d)({key:"fretboardNotesState",get:function(e){var t=e.get,n=t(f),c=t(b);return Object(r.flatMap)(n.tuning,(function(e,t){return Object(r.times)(n.fretCount+1).map((function(n){var a=e+Object(r.repeat)(c?"b":"#",n),o=i.b.simplify(a);return{id:a,name:c?i.b.enharmonic(o):o,string:t+1}}))}))}}),j=Object(c.c)({key:"ftnFrettedNotesState",default:[],effects_UNSTABLE:[Object(o.b)()]}),l=Object(c.c)({key:"ftnSeedState",default:0,effects_UNSTABLE:[Object(o.b)(Math.random())]}),O=Object(c.d)({key:"ftnQueueState",get:function(e){var t=(0,e.get)(l),n=Object(o.a)();return Object(a.shuffle)(n,t)}}),g=Object(c.c)({key:"ftnPointerState",default:0,effects_UNSTABLE:[Object(o.b)()]}),m=Object(c.d)({key:"ftnPointerSelector",get:function(e){return(0,e.get)(g)},set:function(e,t){var n=e.get,r=e.set,a=e.reset,o=n(O);t instanceof c.a||!o[t]?(r(l,n(l)+Math.random()),a(g)):r(g,t),a(j)}}),p=Object(c.d)({key:"ftnNoteState",get:function(e){var t=e.get;return t(O)[t(m)]}}),S=Object(c.d)({key:"ftnCountState",get:function(e){var t=e.get,n=t(d),c=t(p);return Object(r.filter)(n,["name",c]).length}}),h=Object(c.d)({key:"ftnGameSelector",get:function(e){return(0,e.get)(j)},set:function(e,t){var n=e.get,r=e.set;t instanceof c.a||t.length===n(S)?r(m,n(m)+1):r(j,t)}}),v=Object(c.c)({key:"ntnTotalAttemptsState",default:0,effects_UNSTABLE:[Object(o.b)()]}),x=Object(c.c)({key:"ntnTotalCorrectState",default:0,effects_UNSTABLE:[Object(o.b)()]}),y=Object(c.c)({key:"ntnGameAttemptsState",default:0,effects_UNSTABLE:[Object(o.b)()]}),k=Object(c.c)({key:"ntnGameCorrectState",default:0,effects_UNSTABLE:[Object(o.b)()]}),N=Object(c.c)({key:"ntnSeedState",default:0,effects_UNSTABLE:[Object(o.b)(Math.random())]}),C=Object(c.d)({key:"ntnQueueState",get:function(e){var t=e.get,n=t(N),r=t(d);return Object(a.shuffle)(r,n)}}),E=Object(c.c)({key:"ntnPointerState",default:0,effects_UNSTABLE:[Object(o.b)()]}),T=Object(c.d)({key:"ntnPointerSelector",get:function(e){return(0,e.get)(E)},set:function(e,t){var n=e.get,r=e.set,a=e.reset,o=n(C);t instanceof c.a||!o[t]?(r(N,n(N)+Math.random()),a(E)):r(E,t)}}),B=Object(c.d)({key:"ntnNoteState",get:function(e){var t=e.get;return t(C)[t(T)]}}),_=Object(c.d)({key:"ntnGameSelector",get:function(e){return(0,e.get)(B)},set:function(e,t){var n=e.get,r=e.set,a=e.reset;if(t instanceof c.a)return a(T),a(k),void a(y);var o=n(B),i=t.name===o.name;r(y,n(y)+1),r(k,n(k)+Number(i)),r(v,n(v)+1),r(x,n(x)+Number(i)),i&&r(T,n(T)+1)}}),A=Object(c.d)({key:"gameStatsState",get:function(e){var t=e.get;return[{game:"Name the Note",correct:t(x),attempts:t(v),percent:Object(o.c)(t(x),t(v))}]},set:function(e,t){var n=e.reset;t instanceof c.a&&(n(_),n(x),n(v))}})},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"standard-6":{fretCount:12,id:"standard-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Standard Tuning",tuning:["E","A","D","G","B","E"].reverse()},"open-e-6":{fretCount:12,id:"open-e-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Open E",tuning:["E","B","E","G#","B","E"].reverse()},"standard-4":{fretCount:12,id:"standard-4",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4].reverse(),tuning:["E","A","D","G"].reverse(),name:"4 String Bass - Standard Tuning"}}},123:function(e,t){},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(3),c=n(59),a=n(30),o=n(113),i=(n(1),n(56)),s=n(114),u=n(4),b=Object(r.d)(c.g,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),f=Object(r.d)(c.g,{baseStyle:{position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",_before:{w:"8px",top:0,bottom:0,position:"absolute",background:"linear-gradient(to right, gold, gray, gold)"}}}),d=Object(r.d)(c.b,{baseStyle:{position:"relative",_before:{top:0,bottom:0,w:"16px",content:'""',position:"absolute",background:"gray.200"}}}),j=Object(r.d)(c.d,{baseStyle:{h:6,w:6,bg:"gray.200"}}),l=function(){var e=Object(i.f)(s.c),t=Object(i.f)(s.h),n=e.fretCount+1;return Object(u.jsx)(b,{templateColumns:"repeat(".concat(n,", 1fr)"),children:Object(o.times)(n).map((function(n){var r,c=t?e.fretCount-n:n,i=c%12===0?2:1,s=e.fretMarkers.includes(c),b={":before":(r={},Object(a.a)(r,t?"left":"right","-4px"),Object(a.a)(r,"content",c===e.fretCount?void 0:'""'),r)};return c?Object(u.jsx)(f,{sx:b,templateRows:"repeat(".concat(i,", 1fr)"),children:s&&Object(o.times)(i).map((function(e){return Object(u.jsx)(j,{},e)}))},c):Object(u.jsx)(d,{sx:b},c)}))})},O=n.p+"static/media/wood.3cf6e95a.png",g=Object(r.d)(c.j,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute"}}),m=Object(r.d)(c.b,{baseStyle:{position:"relative",_before:{h:"34px",w:"34px",top:"50%",left:"50%",content:'""',color:"white",display:"flex",alignItems:"center",borderRadius:"full",position:"absolute",justifyContent:"center",transform:"translate(-50%, -50%)"}}}),p=function(e){var t=e.activeNotes,n=e.referenceMode,r=e.onNoteClick,c=void 0===r?o.identity:r,a=Object(i.f)(s.c),b=Object(i.f)(s.b),f=a.fretCount+1;return Object(u.jsx)(g,{columns:f,children:b.map((function(e,r){var a=e.id,i=e.name,s=e.string,b=Boolean(Object(o.find)(t,{id:a,string:s}));return Object(u.jsx)(m,{"data-note":i,onClick:function(){return c(e)},sx:b?{":before":{bg:"red.500",content:n?'"'.concat(e.name,'"'):void 0}}:void 0},r)}))})},S=Object(r.d)(c.g,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),h=Object(r.d)(c.f,{baseStyle:{alignItems:"center",_before:{w:"100%",content:'""',boxShadow:"md",background:"linear-gradient(to bottom, gray, white, gray)"}}}),v=function(){var e=Object(i.f)(s.c);return Object(u.jsx)(S,{templateRows:"repeat(".concat(e.tuning.length,", 1fr)"),children:e.tuning.map((function(t,n){return Object(u.jsx)(h,{sx:{":before":{h:(e.guages[n]||1)+"px"}}},n)}))})},x=Object(r.d)(c.b,{baseStyle:{h:{md:220,base:180},position:"relative",bg:"#222222 url(".concat(O,")")}}),y=function(e){var t=e.activeNotes,n=e.referenceMode,r=e.onNoteClick;return Object(u.jsxs)(x,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(v,{}),Object(u.jsx)(p,{onNoteClick:r,activeNotes:t,referenceMode:n})]})}},169:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(126),a=n(3),o=n(59),i=n(60),s=n(36),u=(n(1),n(153)),b=n(112),f=n(4),d=Object(a.d)(o.a,{baseStyle:{minW:"60px",fontSize:"xl",display:"flex",borderRadius:"md",alignItems:"center",justifyContent:"center"}}),j=function(e){var t=e.correct,n=e.attempts,r=e.onResetGame;return Object(f.jsxs)(o.e,{as:o.h,align:"stretch",maxW:"container.sm",children:[Object(f.jsx)(i.b,{"aria-label":"Reset",onClick:r,icon:Object(f.jsx)(s.a,{as:u.a,boxSize:"20px"})}),Object(f.jsxs)(o.h,{align:"stretch",spacing:1,children:[Object(f.jsx)(d,{colorScheme:"green",children:t}),Object(f.jsx)(d,{colorScheme:"red",children:n-t}),Object(f.jsx)(o.f,{px:2,alignItems:"center",children:Object(f.jsxs)(o.k,{fontWeight:"bold",children:[Object(b.c)(t,n),"%"]})})]})]})},l=n(6),O=n(46),g=n(118),m=n(113),p=n(154),S=(n(158),Object(a.d)((function(e){var t=e.onClick,n=Object(O.a)(e,["onClick"]),r=g.a.toMidi("c4"),c=g.a.toMidi("b4"),a=p.a.create({firstNote:r,lastNote:c,keyboardConfig:p.a.HOME_ROW}),i=function(e){return g.a.midiToNoteName(e,{sharps:!0,pitchClass:!0})};return Object(f.jsx)(o.e,Object(l.a)(Object(l.a)({},n),{},{flex:"1 1 auto",maxW:"container.sm",maxH:{base:"140px",md:"220px"},children:Object(f.jsx)(p.b,{stopNote:m.identity,keyboardShortcuts:a,noteRange:{first:r,last:c},playNote:function(e){return t(i(e))},renderNoteLabel:function(e){var t=i(e.midiNumber);return Object(f.jsx)(o.c,{p:{base:0,sm:1,md:2},children:Object(f.jsx)(o.k,{fontWeight:"bold",color:t.includes("#")?"white":"black",children:t})})}})}))}))),h=n(56),v=n(114);t.default=function(){var e=Object(h.f)(v.j),t=Object(h.f)(v.i),n=Object(h.e)(v.k),a=Object(r.a)(n,2),o=a[0],i=a[1],s=Object(h.g)(v.k);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{correct:e,attempts:t,onResetGame:s}),Object(f.jsx)(c.a,{activeNotes:o?[o]:[]}),Object(f.jsx)(S,{alignSelf:"center",onClick:function(e){i({name:e})}})]})}}}]);
//# sourceMappingURL=name-the-note.e87916f3.chunk.js.map