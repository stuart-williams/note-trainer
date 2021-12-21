(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[4],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return c.b})),n.d(t,"d",(function(){return c.a})),n.d(t,"c",(function(){return a.b})),n.d(t,"h",(function(){return a.d})),n.d(t,"b",(function(){return a.a})),n.d(t,"g",(function(){return a.c})),n.d(t,"f",(function(){return s}));var r=n(57),c=n(116),a=n(117),o=n(6),i=n(124),u=n(125),s=Object(r.d)({key:"gameStatsState",get:function(e){var t=e.get,n=t(u.b).total,r=t(i.c).total;return[Object(o.a)({game:"Name the Note"},n),Object(o.a)(Object(o.a)({},r),{},{game:"Find the Note"})]},set:function(e,t){var n=e.reset;t instanceof r.a&&(n(u.b),n(i.c))}}),f=Object(r.c)({key:"answerIndicatorState",default:-1})},114:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(115),c=function(e,t){return t>0?Object(r.round)(e/t*100):0},a=n(120),o=function(){return Object(r.times)(12).map((function(e){return a.b.simplify("C"+Object(r.repeat)("#",e))}))},i=function(e){return a.a.midiToNoteName(e,{sharps:!0,pitchClass:!0})},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sharps",n=Object(r.isNumber)(e)?i(e):e;return a.b.enharmonic(n)===n||"sharps"===t?n:"flats"===t||Math.random()>.5?a.b.enharmonic(n):n},s=n(128),f=n(57),b=function(e){return function(t){var n=t.node,r=t.setSelf,c=t.onSet,a="noteTrainer.".concat(n.key),o=s.get(a);null!==o?r(o):e&&(s.set(a,e),r(e)),c((function(e){e instanceof f.a?s.remove(a):s.set(a,e)}))}}},116:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(120),c=n(122),a=n(115),o=n(57),i=n(117),u=Object(o.d)({key:"fretboardState",get:function(e){var t=e.get;return c.a[t(i.b)]}}),s=Object(o.d)({key:"fretboardNotesState",get:function(e){var t=e.get,n=t(u),c=t(i.d);return Object(a.flatMap)(n.tuning,(function(e,t){return Object(a.times)(n.fretCount+1).map((function(n){var o=e+Object(a.repeat)(c?"b":"#",n),i=r.b.simplify(o);return{id:o,name:c?r.b.enharmonic(i):i,string:t+1}}))}))}})},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(57),c=n(114),a=Object(r.c)({key:"fretboardIdState",default:"standard-6",effects_UNSTABLE:[Object(c.b)()]}),o=Object(r.c)({key:"leftHandedState",default:!1,effects_UNSTABLE:[Object(c.b)()]}),i=Object(r.c)({key:"fretMarkersState",default:!0,effects_UNSTABLE:[Object(c.b)()]}),u=Object(r.c)({key:"halfNotesState",default:"random",effects_UNSTABLE:[Object(c.b)()]})},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"standard-6":{h:220,fretCount:12,id:"standard-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Standard Tuning",tuning:["E","A","D","G","B","E"].reverse()},"e-flat":{h:220,fretCount:12,id:"e-flat",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - E Flat",tuning:["D#","G#","C#","F#","A#","D#"].reverse()},"open-e":{h:220,fretCount:12,id:"open-e",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Open E",tuning:["E","B","E","G#","B","E"].reverse()},"dad-gad":{h:220,fretCount:12,id:"dad-gad",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Dad-Gad",tuning:["D","A","D","G","A","D"].reverse()},"standard-7":{h:254,fretCount:12,id:"standard-7",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4,3,2,1].reverse(),tuning:["B","E","A","D","G","B","E"].reverse(),name:"7 String Guitar - Standard Tuning"},"standard-4":{h:200,fretCount:12,id:"standard-4",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4].reverse(),tuning:["E","A","D","G"].reverse(),name:"4 String Bass - Standard Tuning"},"standard-5":{h:220,fretCount:12,id:"standard-5",fretMarkers:[3,5,7,9,12],guages:[8,7,6,5,4].reverse(),tuning:["B","E","A","D","G"].reverse(),name:"5 String Bass - Standard Tuning"}}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return S})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return y}));var r=n(31),c=n(115),a=n(57),o=n(113),i=n(123),u=n(114),s=Object(a.c)({key:"find-the-note/seedState",default:0,effects_UNSTABLE:[Object(u.b)(Math.random())]}),f=Object(a.d)({key:"find-the-note/queueState",get:function(e){var t=e.get;return Object(i.shuffle)(Object(u.a)(),t(s))}}),b=Object(a.c)({key:"find-the-note/pointerState",default:0,effects_UNSTABLE:[Object(u.b)()]}),d=Object(a.c)({key:"find-the-note/activeNotesState",default:[],effects_UNSTABLE:[Object(u.b)()]}),l=Object(a.d)({key:"find-the-note/pointerProxySelector",get:function(e){return(0,e.get)(b)},set:function(e,t){var n=e.get,r=e.set,c=e.reset,o=n(f);t instanceof a.a||!o[t]?(c(b),r(s,n(s)+Math.random())):r(b,t),c(d)}}),j=Object(a.d)({key:"find-the-note/targetNoteState",get:function(e){var t=e.get;return t(f)[t(b)]}}),O=Object(a.d)({key:"find-the-note/targetNoteCountState",get:function(e){var t=e.get;return Object(c.filter)(t(o.d),["name",t(j)]).length}}),g=Object(a.c)({key:"find-the-note/totalAttemptsState",default:0,effects_UNSTABLE:[Object(u.b)()]}),m=Object(a.c)({key:"find-the-note/totalCorrectState",default:0,effects_UNSTABLE:[Object(u.b)()]}),h=Object(a.c)({key:"find-the-note/gameAttemptsState",default:0,effects_UNSTABLE:[Object(u.b)()]}),p=Object(a.c)({key:"find-the-note/gameCorrectState",default:0,effects_UNSTABLE:[Object(u.b)()]}),v=Object(a.d)({key:"find-the-note/statProxySelector",get:function(){return!0},set:function(e,t){var n=e.get,r=e.set,c=e.reset;t instanceof a.a?(c(p),c(h)):(r(h,n(h)+1),r(g,n(g)+1),r(p,n(p)+Number(t)),r(m,n(m)+Number(t)))}}),y=Object(a.d)({key:"find-the-note/gameStatsState",get:function(e){var t=e.get;return{game:{correct:t(p),attempts:t(h),percent:Object(u.d)(t(p),t(h))},total:{correct:t(m),attempts:t(g),percent:Object(u.d)(t(m),t(g))}}},set:function(e,t){var n=e.reset;t instanceof a.a&&(n(p),n(h),n(m),n(g))}}),S=Object(a.d)({key:"find-the-note/gameProxySelector",get:function(){return null},set:function(e,t){var n=e.get,i=e.set,u=e.reset;if(t instanceof a.a)return u(v),void u(l);if(null===t||t.name!==n(j))return i(o.a,0),i(v,!1),void i(l,n(l)+1);var s=n(O),f=n(d),b=[].concat(Object(r.a)(Object(c.without)(f,t)),[t]);if(b.length===s)return i(o.a,1),i(v,!0),void i(l,n(l)+1);i(d,b)}})},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(57),c=n(113),a=n(123),o=n(114),i=n(116),u=Object(r.c)({key:"name-the-note/seedState",default:0,effects_UNSTABLE:[Object(o.b)(Math.random())]}),s=Object(r.d)({key:"name-the-note/queueState",get:function(e){var t=e.get;return Object(a.shuffle)(t(i.a),t(u))}}),f=Object(r.c)({key:"name-the-note/pointerState",default:0,effects_UNSTABLE:[Object(o.b)()]}),b=Object(r.d)({key:"name-the-note/pointerProxySelector",get:function(e){return(0,e.get)(f)},set:function(e,t){var n=e.get,c=e.set,a=e.reset,o=n(s);t instanceof r.a||!o[t]?(a(f),c(u,n(u)+Math.random())):c(f,t)}}),d=Object(r.d)({key:"name-the-note/targetNoteState",get:function(e){var t=e.get;return t(s)[t(f)]}}),l=Object(r.c)({key:"name-the-note/totalAttemptsState",default:0,effects_UNSTABLE:[Object(o.b)()]}),j=Object(r.c)({key:"name-the-note/totalCorrectState",default:0,effects_UNSTABLE:[Object(o.b)()]}),O=Object(r.c)({key:"name-the-note/gameAttemptsState",default:0,effects_UNSTABLE:[Object(o.b)()]}),g=Object(r.c)({key:"name-the-note/gameCorrectState",default:0,effects_UNSTABLE:[Object(o.b)()]}),m=Object(r.d)({key:"name-the-note/statProxySelector",get:function(){return!0},set:function(e,t){var n=e.get,c=e.set,a=e.reset;t instanceof r.a?(a(g),a(O)):(c(O,n(O)+1),c(l,n(l)+1),c(g,n(g)+Number(t)),c(j,n(j)+Number(t)))}}),h=Object(r.d)({key:"name-the-note/gameStatsState",get:function(e){var t=e.get;return{game:{correct:t(g),attempts:t(O),percent:Object(o.d)(t(g),t(O))},total:{correct:t(j),attempts:t(l),percent:Object(o.d)(t(j),t(l))}}},set:function(e,t){var n=e.reset;t instanceof r.a&&(n(g),n(O),n(j),n(l))}}),p=Object(r.d)({key:"name-the-note/gameProxySelector",get:function(e){return(0,e.get)(d)},set:function(e,t){var n=e.get,a=e.set,o=e.reset;if(t instanceof r.a)return o(m),void o(b);var i=t.name===n(d).name;a(c.a,Number(i)),a(m,i),i&&a(b,n(b)+1)}})},129:function(e,t){},131:function(e,t,n){"use strict";var r=n(5),c=n(77),a=n(50),o=n(38),i=n(1),u=n(150),s=n(192),f=n(4);t.a=function(){var e=Object(s.a)().type.includes("portrait"),t=Object(i.useState)(e),n=Object(r.a)(t,2),b=n[0],d=n[1],l=Object(i.useRef)(null);return Object(i.useEffect)((function(){d(e)}),[e]),Object(f.jsx)(c.a,{isCentered:!0,isOpen:b,onClose:function(){return d(!1)},leastDestructiveRef:l,children:Object(f.jsx)(c.f,{children:Object(f.jsxs)(c.c,{mx:4,children:[Object(f.jsx)(c.e,{fontSize:"xl",fontWeight:"bold",textAlign:"center",children:"Rotate Device"}),Object(f.jsxs)(c.b,{as:a.m,pb:4,children:[Object(f.jsx)(o.a,{as:u.a,boxSize:20}),Object(f.jsx)(a.l,{children:"Rotate your device for a better experience"})]})]})})})}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(3),c=n(50),a=(n(1),n(57)),o=n(113),i=n(32),u=n(115),s=n(4),f=Object(r.d)(c.g,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),b=Object(r.d)(c.g,{baseStyle:{position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",_before:{w:"8px",top:0,bottom:0,position:"absolute",background:"linear-gradient(to right, gold, gray, gold)"}}}),d=Object(r.d)(c.b,{baseStyle:{position:"relative",_before:{top:0,bottom:0,w:"16px",content:'""',position:"absolute",background:"gray.200"}}}),l=Object(r.d)(c.d,{baseStyle:{h:"26px",w:"26px",bg:"gray.200"}}),j=function(){var e=Object(a.f)(o.e),t=Object(a.f)(o.h),n=Object(a.f)(o.b),r=e.fretCount+1;return Object(s.jsx)(f,{templateColumns:"repeat(".concat(r,", 1fr)"),children:Object(u.times)(r).map((function(r){var c,a=t?e.fretCount-r:r,o=a%12===0?2:1,f=e.fretMarkers.includes(a),j=n&&f,O={":before":(c={},Object(i.a)(c,t?"left":"right","-4px"),Object(i.a)(c,"content",a===e.fretCount?void 0:'""'),c)};return a?Object(s.jsx)(b,{sx:O,templateRows:"repeat(".concat(o,", 1fr)"),children:j&&Object(u.times)(o).map((function(e){return Object(s.jsx)(l,{},e)}))},a):Object(s.jsx)(d,{sx:O},a)}))})},O=Object(r.d)(c.k,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute"}}),g=Object(r.d)(c.b,{baseStyle:{position:"relative",_before:{h:"34px",w:"34px",top:"50%",left:"50%",color:"white",display:"flex",alignItems:"center",borderRadius:"full",position:"absolute",justifyContent:"center",transform:"translate(-50%, -50%)"}}}),m=function(e){var t=e.activeNotes,n=e.onNoteClick,r=void 0===n?u.identity:n,c=Object(a.f)(o.e),i=Object(a.f)(o.d),f=c.fretCount+1;return Object(s.jsx)(O,{columns:f,children:i.map((function(e,n){var c=Object(u.find)(t,e),a=(null===c||void 0===c?void 0:c.displayName)||"";return Object(s.jsx)(g,{onClick:function(){return r(e)},sx:c?{":before":{bg:"red.500",content:'"'.concat(a,'"')}}:void 0},n)}))})},h=Object(r.d)(c.g,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),p=Object(r.d)(c.f,{baseStyle:{alignItems:"center",_before:{w:"100%",content:'""',boxShadow:"md",background:"linear-gradient(to bottom, gray, white, gray)"}}}),v=function(){var e=Object(a.f)(o.e);return Object(s.jsx)(h,{templateRows:"repeat(".concat(e.tuning.length,", 1fr)"),children:e.tuning.map((function(t,n){return Object(s.jsx)(p,{sx:{":before":{h:(e.guages[n]||1)+"px"}}},n)}))})},y=Object(r.d)(c.b,{baseStyle:{bg:"#222222",position:"relative"}}),S=function(e){var t=e.activeNotes,n=e.onNoteClick,r=Object(a.f)(o.e);return Object(s.jsxs)(y,{h:r.h,children:[Object(s.jsx)(j,{}),Object(s.jsx)(v,{}),Object(s.jsx)(m,{onNoteClick:n,activeNotes:t})]})}},136:function(e,t,n){"use strict";var r=n(5),c=n(3),a=n(50),o=n(68),i=n(38),u=n(1),s=n(155),f=n(185),b=n(57),d=n(113),l=n(4),j=Object(c.d)(a.c,{baseStyle:{top:0,left:0,right:0,bottom:0,opacity:.7,position:"absolute"}});t.a=function(e){var t=e.indicateStates,n=void 0===t?[0,1]:t,c=Object(f.a)(),a=Object(b.e)(d.a),O=Object(r.a)(a,2),g=O[0],m=O[1],h=Object(u.useRef)(0);return h.current=g>-1?g:h.current,Object(u.useEffect)((function(){setTimeout((function(){c()&&m(-1)}),250)}),[g]),Object(l.jsx)(o.a,{unmountOnExit:!0,in:n.includes(g),children:Object(l.jsx)(j,{bg:h.current?"green.500":"red.500",children:Object(l.jsx)(i.a,{boxSize:40,color:"white",as:h.current?s.a:s.b})})})}},142:function(e,t,n){"use strict";var r=n(3),c=n(50),a=n(72),o=n(61),i=n(38),u=(n(1),n(156)),s=n(114),f=n(4),b=Object(r.d)(c.a,{baseStyle:{minW:"50px",fontSize:"xl",display:"flex",borderRadius:"md",alignItems:"center",justifyContent:"center"}});t.a=function(e){var t=e.correct,n=e.attempts,r=e.onResetGame;return Object(f.jsxs)(c.e,{as:c.h,align:"stretch",maxW:"container.sm",children:[Object(f.jsx)(a.a,{hasArrow:!0,label:"Reset Game",placement:"top",openDelay:500,children:Object(f.jsx)(o.b,{variant:"ghost","aria-label":"Reset Game",onClick:r,icon:Object(f.jsx)(i.a,{as:u.a,boxSize:"20px"})})}),Object(f.jsxs)(c.h,{align:"stretch",spacing:1,children:[Object(f.jsx)(b,{colorScheme:"green",borderWidth:"1px",borderColor:"green.200",children:t}),Object(f.jsx)(b,{colorScheme:"red",borderWidth:"1px",borderColor:"red.200",children:n-t}),Object(f.jsx)(c.f,{px:2,alignItems:"center",children:Object(f.jsxs)(c.l,{fontWeight:"bold",children:[Object(s.d)(t,n),"%"]})})]})]})}},174:function(e,t,n){var r=n(175);e.exports=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];var a=[],o=Array.isArray;n.forEach((function(e,t){if("number"==typeof e)n[t]=[e,e];else if(o(e)){if("number"!=typeof e[0])throw TypeError("First item in array must be a Number");n[t]=[e[0],"function"==typeof e[1]?e[1](e[0]):null]}}));var i,u,s=n.find(o),f=r(e);try{for(f.s();!(u=f.n()).done;){var b=u.value;if(o(i)&&null==i[1]&&(b=b.replace(/^\s+/,"")),s?a.push(b.replace(/\[([^|]*)\|([^\]]*)\]/g,1==s[0]?"$1":"$2")):a.push(b),!n.length)break;s=n.find(o)||s,i=n.shift(),a.push(i===s?s[1]:i)}}catch(d){f.e(d)}finally{f.f()}return a.join("")}},175:function(e,t,n){var r=n(176);e.exports=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,a=function(){};return{s:a,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}},176:function(e,t,n){var r=n(177);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},177:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},191:function(e,t,n){"use strict";n.r(t);var r,c=n(50),a=n(136),o=n(132),i=n(142),u=n(131),s=n(1),f=n(57),b=n(174),d=n.n(b),l=n(113),j=n(124),O=n(114),g=n(4);t.default=function(){var e,t,n=Object(f.f)(j.c),b=Object(f.f)(l.g),m=Object(f.f)(j.e),h=Object(f.h)(j.b),p=Object(f.f)(j.d),v=Object(f.g)(j.b),y=Object(f.f)(j.a),S=p-y.length,x=Object(s.useMemo)((function(){return Object(O.e)(m,b)}),[m]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{}),Object(g.jsx)(i.a,{onResetGame:v,correct:n.game.correct,attempts:n.game.attempts}),Object(g.jsxs)(c.b,{position:"relative",children:[Object(g.jsx)(o.a,{activeNotes:y,onNoteClick:function(e){return h(e)}}),Object(g.jsx)(a.a,{})]}),Object(g.jsxs)(c.i,{alignSelf:"center",children:["Find ",Object(g.jsx)("mark",{children:x})," in ",d()(r||(e=[""," plac[e|es]"],t||(t=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))),S)]})]})}}}]);
//# sourceMappingURL=find-the-note.74def8f9.chunk.js.map