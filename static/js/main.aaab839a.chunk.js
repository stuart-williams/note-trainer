(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var c,r=n(167),a=n(17),i=n(152),s=n(153),o=n(154),j=n(168),b=n(155),l=n(157),d=n(1),f=n.n(d),u=n(101),O=n(20),h=n(45),x=n(4),g=Object(a.a)(i.a,{baseStyle:{fontWeight:"bold"}}),m=function(){var e=Object(O.f)();return Object(x.jsx)(s.a,{h:"50px",mb:4,boxShadow:"lg",children:Object(x.jsxs)(o.a,{as:j.a,maxW:"container.xl",children:["/"!==e.pathname&&Object(x.jsx)(b.a,{to:"/",as:h.b,variant:"ghost","aria-label":"Back",icon:Object(x.jsx)(l.a,{as:u.a,boxSize:"20px"})}),"/"===e.pathname&&Object(x.jsx)(g,{children:"Note Trainer"}),"/settings"===e.pathname&&Object(x.jsx)(g,{children:"Settings"}),"/statistics"===e.pathname&&Object(x.jsx)(g,{children:"Statistics"}),"/name-the-note"===e.pathname&&Object(x.jsx)(g,{children:"Name the Note"}),"/find-the-note"===e.pathname&&Object(x.jsx)(g,{children:"Find the Note"})]})})},p=n(113),S=function(){return Object(x.jsxs)(o.a,{as:j.b,align:"stretch",children:[Object(x.jsx)(p.a,{as:h.b,to:"/name-the-note",children:"Name the Note"}),Object(x.jsx)(p.a,{as:h.b,to:"/find-the-note",children:"Find the Note"}),Object(x.jsx)(p.a,{as:h.b,to:"/settings",children:"Settings"}),Object(x.jsx)(p.a,{as:h.b,to:"/statistics",children:"Statistics"})]})},v=n(102),y=n(21),N=n(3),k=n(160),C=n(158),T=n(5),A=n(103),E=n(18),B=n(8),w=n(62),_=n(83),R=function(){return function(e){var t=e.node,n=e.setSelf,c=e.onSet,r="noteTrainer.".concat(t.key),a=_.get(r);a&&n(a),c((function(e){return _.set(r,e)}))}},G=function(){return Object(E.times)(12).map((function(e){return w.a.simplify("C"+Object(E.repeat)("#",e))}))},L=function(e,t){return t>0?Object(E.round)(e/t*100):0},U={"standard-6":{fretCount:12,id:"standard-6",fretMarkers:[3,5,7,9,12],guages:[6,5,4,3,2,1].reverse(),name:"6 String Guitar - Standard Tuning",tuning:["E","A","D","G","B","E"].reverse()},"standard-4":{fretCount:12,id:"standard-4",fretMarkers:[3,5,7,9,12],guages:[7,6,5,4].reverse(),tuning:["E","A","D","G"].reverse(),name:"4 String Bass - Standard Tuning"}},I=Object(B.c)({key:"ntnTotalAttemptsState",default:0,effects_UNSTABLE:[R()]}),D=Object(B.c)({key:"ntnTotalCorrectState",default:0,effects_UNSTABLE:[R()]}),F=Object(B.c)({key:"ntnGameAttemptsState",default:0,effects_UNSTABLE:[R()]}),M=Object(B.c)({key:"ntnGameCorrectState",default:0,effects_UNSTABLE:[R()]}),W=Object(B.c)({key:"ntnNotesQueueState",default:Object(B.d)({key:"ntnNotesQueueDefaultSelector",get:function(e){var t=e.get;return Object(E.shuffle)(t(K))}})}),z=Object(B.c)({key:"ntnActiveNoteState",default:Object(B.d)({key:"ntnActiveNoteDefaultSelector",get:function(e){return(0,e.get)(W)[0]}}),effects_UNSTABLE:[R()]}),Q=Object(B.d)({key:"ntnGameSelector",get:function(e){return(0,e.get)(z)},set:function(e,t){var n=e.get,c=e.set,r=e.reset;if(t instanceof B.a)return r(F),void r(M);var a=n(z),i=t.name===a.name;if(c(F,n(F)+1),c(M,n(M)+Number(i)),c(I,n(I)+1),c(D,n(D)+Number(i)),i){var s=n(W),o=s[Object(E.findIndex)(s,a)+1];if(!o){var j=Object(E.shuffle)(s);o=j[0],c(W,j)}c(z,o)}}}),H=Object(B.c)({key:"fretboardIdState",default:"standard-6",effects_UNSTABLE:[R()]}),J=Object(B.d)({key:"fretboardIdSelector",get:function(e){return(0,e.get)(H)},set:function(e,t){var n=e.set,c=e.reset;n(H,t),c(z),c(Q)}}),P=Object(B.c)({key:"leftHandedState",default:!1,effects_UNSTABLE:[R()]}),q=Object(B.d)({key:"fretboardState",get:function(e){var t=e.get;return U[t(H)]}}),K=Object(B.d)({key:"fretboardNotesState",get:function(e){var t=e.get,n=t(q),c=t(P);return Object(E.flatMap)(n.tuning,(function(e,t){return Object(E.times)(n.fretCount+1).map((function(n){var r=e+Object(E.repeat)(c?"b":"#",n),a=w.a.simplify(r);return{id:r,name:c?w.a.enharmonic(a):a,string:t+1}}))}))}}),V=Object(B.c)({key:"ftnNotesQueueState",default:Object(E.shuffle)(G()),effects_UNSTABLE:[R()]}),X=Object(B.c)({key:"ftnTargetNoteState",default:Object(B.d)({key:"ftnTargetNoteDefaultSelector",get:function(e){return(0,e.get)(V)[0]}}),effects_UNSTABLE:[R()]}),Y=Object(B.d)({key:"ftnTargetNoteCountState",get:function(e){var t=e.get,n=t(K),c=t(X);return Object(E.filter)(n,["name",c]).length}}),Z=Object(B.c)({key:"ftnFrettedNotesState",default:[],effects_UNSTABLE:[R()]}),$=Object(B.d)({key:"ftnGameSelector",get:function(e){return(0,e.get)(Z)},set:function(e,t){var n=e.get,c=e.set,r=e.reset;if(t instanceof B.a||t.length===n(Y)){var a=n(X),i=n(V),s=i.indexOf(a)+1,o=i[s];if(!o){var j=Object(E.shuffle)(i);o=j[0],c(V,j)}c(X,o),r(Z)}else c(Z,t)}}),ee=Object(B.d)({key:"gameStatsState",get:function(e){var t=e.get;return[{game:"Name the Note",correct:t(D),attempts:t(I),percent:L(t(D),t(I))}]},set:function(e,t){var n=e.reset;t instanceof B.a&&(n(Q),n(D),n(I))}}),te=Object(a.a)(A.a,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),ne=Object(a.a)(A.a,{baseStyle:{position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",_before:{w:"8px",top:0,bottom:0,position:"absolute",background:"linear-gradient(to right, gold, gray, gold)"}}}),ce=Object(a.a)(C.a,{baseStyle:{position:"relative",_before:{top:0,bottom:0,w:"16px",content:'""',position:"absolute",background:"gray.200"}}}),re=Object(a.a)(C.b,{baseStyle:{h:6,w:6,bg:"gray.200"}}),ae=function(){var e=Object(B.f)(q),t=Object(B.f)(P),n=e.fretCount+1;return Object(x.jsx)(te,{templateColumns:"repeat(".concat(n,", 1fr)"),children:Object(E.times)(n).map((function(n){var c,r=t?e.fretCount-n:n,a=r%12===0?2:1,i=e.fretMarkers.includes(r),s={":before":(c={},Object(T.a)(c,t?"left":"right","-4px"),Object(T.a)(c,"content",r===e.fretCount?void 0:'""'),c)};return r?Object(x.jsx)(ne,{sx:s,templateRows:"repeat(".concat(a,", 1fr)"),children:i&&Object(E.times)(a).map((function(e){return Object(x.jsx)(re,{},e)}))},r):Object(x.jsx)(ce,{sx:s},r)}))})},ie=n(159),se=Object(a.a)(ie.a,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute"}}),oe=Object(a.a)(C.a,{baseStyle:{position:"relative",_before:{h:"34px",w:"34px",top:"50%",left:"50%",content:'""',borderRadius:"full",position:"absolute",transform:"translate(-50%, -50%)"}}}),je={":before":{bg:"red.500"}},be=function(e){var t=e.frettedNotes,n=e.onNoteClick,c=void 0===n?E.identity:n,r=Object(B.f)(q),a=Object(B.f)(K),i=r.fretCount+1;return Object(x.jsx)(se,{columns:i,children:a.map((function(e,n){var r=e.id,a=e.name,i=e.string,s=Boolean(Object(E.find)(t,{id:r,string:i}));return Object(x.jsx)(oe,{"data-note":a,onClick:function(){return c(e)},sx:s?je:void 0},n)}))})},le=Object(a.a)(A.a,{baseStyle:{top:0,left:0,right:0,bottom:0,position:"absolute",pointerEvents:"none"}}),de=Object(a.a)(s.a,{baseStyle:{alignItems:"center",_before:{w:"100%",content:'""',boxShadow:"md",background:"linear-gradient(to bottom, gray, white, gray)"}}}),fe=function(){var e=Object(B.f)(q);return Object(x.jsx)(le,{templateRows:"repeat(".concat(e.tuning.length,", 1fr)"),children:e.tuning.map((function(t,n){return Object(x.jsx)(de,{sx:{":before":{h:(e.guages[n]||1)+"px"}}},n)}))})},ue=Object(a.a)(C.a,{baseStyle:{h:220,position:"relative",bg:"url('wood.png')"}}),Oe=function(e){var t=e.frettedNotes,n=e.onNoteClick;return Object(x.jsxs)(ue,{children:[Object(x.jsx)(ae,{}),Object(x.jsx)(fe,{}),Object(x.jsx)(be,{frettedNotes:t,onNoteClick:n})]})},he=n(104),xe=n.n(he),ge=function(){var e=Object(B.f)(X),t=Object(B.e)($),n=Object(N.a)(t,2),r=n[0],a=n[1],i=Object(B.f)(Y)-r.length;return Object(x.jsxs)(j.b,{align:"stretch",px:2,children:[Object(x.jsx)(Oe,{frettedNotes:r,onNoteClick:function(t){t.name===e&&a([].concat(Object(y.a)(Object(E.without)(r,t)),[t]))}}),Object(x.jsx)(k.a,{alignSelf:"center",children:xe()(c||(c=Object(v.a)(["Find "," in "," plac[e|es]"])),e,i)})]})},me=n(161),pe=n(105),Se=Object(a.a)(me.a,{baseStyle:{minW:"60px",fontSize:"xl",display:"flex",borderRadius:"md",alignItems:"center",justifyContent:"center"}}),ve=function(e){var t=e.correct,n=e.attempts,c=e.onResetGame;return Object(x.jsxs)(j.a,{align:"stretch",children:[Object(x.jsx)(j.a,{spacing:1,children:Object(x.jsx)(b.a,{"aria-label":"Reset",onClick:c,icon:Object(x.jsx)(l.a,{as:pe.a,boxSize:"20px"})})}),Object(x.jsxs)(j.a,{align:"stretch",spacing:1,children:[Object(x.jsx)(Se,{colorScheme:"green",children:t}),Object(x.jsx)(Se,{colorScheme:"red",children:n-t}),Object(x.jsx)(s.a,{px:2,alignItems:"center",children:Object(x.jsxs)(i.a,{fontWeight:"bold",children:[L(t,n),"%"]})})]})]})},ye=function(e){var t=e.onClick,n=G();return Object(x.jsx)(ie.a,{columns:12,gridGap:2,children:n.map((function(e){return Object(x.jsx)(p.a,{colorScheme:"red",onClick:function(){return t(e)},children:e},e)}))})},Ne=function(){var e=Object(B.f)(M),t=Object(B.f)(F),n=Object(B.e)(Q),c=Object(N.a)(n,2),r=c[0],a=c[1],i=Object(B.g)(Q);return Object(x.jsxs)(j.b,{align:"stretch",px:2,children:[Object(x.jsx)(ve,{correct:e,attempts:t,onResetGame:i}),Object(x.jsx)(Oe,{frettedNotes:r?[r]:[]}),Object(x.jsx)(ye,{onClick:function(e){a({name:e})}})]})},ke=n(61),Ce=n(162),Te=n(169),Ae=n(170),Ee=function(){var e=Object(B.e)(J),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(ke.a,{children:[Object(x.jsx)(Ce.a,{children:"Fretboard"}),Object(x.jsx)(Te.a,{value:n,onChange:function(e){c(e.target.value)},children:Object(E.map)(U,(function(e){return Object(x.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})},Be=function(){var e=Object(B.e)(P),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(ke.a,{display:"flex",alignItems:"center",children:[Object(x.jsx)(Ce.a,{htmlFor:"left-handed",mb:"0",children:"Left Handed Mode"}),Object(x.jsx)(Ae.a,{id:"left-handed",isChecked:n,onChange:function(e){return c(e.target.checked)}})]})},we=function(){return Object(x.jsx)(o.a,{children:Object(x.jsxs)(j.b,{spacing:6,children:[Object(x.jsx)(Ee,{}),Object(x.jsx)(Be,{})]})})},_e=n(164),Re=n(165),Ge=n(166),Le=n(40),Ue=function(){var e=Object(_e.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose,r=Object(d.useRef)(null),a=Object(B.f)(ee),i=Object(B.g)(ee);return Object(x.jsxs)(o.a,{as:j.b,align:"stretch",children:[Object(x.jsxs)(Re.a,{variant:"simple",children:[Object(x.jsx)(Re.e,{children:Object(x.jsxs)(Re.f,{children:[Object(x.jsx)(Re.d,{children:"Game"}),Object(x.jsx)(Re.d,{isNumeric:!0,children:"Correct"}),Object(x.jsx)(Re.d,{isNumeric:!0,children:"Total"}),Object(x.jsx)(Re.d,{isNumeric:!0,children:"Percent"})]})}),Object(x.jsx)(Re.b,{children:a.map((function(e){var t=e.game,n=e.correct,c=e.attempts,r=e.percent;return Object(x.jsxs)(Re.f,{children:[Object(x.jsx)(Re.c,{children:t}),Object(x.jsx)(Re.c,{isNumeric:!0,children:n}),Object(x.jsx)(Re.c,{isNumeric:!0,children:c}),Object(x.jsxs)(Re.c,{isNumeric:!0,children:[r,"%"]})]},t)}))})]}),Object(x.jsx)(Ge.a,{isOpen:t,onClose:c,leastDestructiveRef:r,children:Object(x.jsx)(Le.f,{children:Object(x.jsxs)(Ge.b,{children:[Object(x.jsx)(Le.e,{fontSize:"lg",fontWeight:"bold",children:"Reset Statistics"}),Object(x.jsx)(Le.b,{children:"Are you sure? This can't be undone."}),Object(x.jsxs)(Le.d,{children:[Object(x.jsx)(p.a,{ref:r,onClick:c,variant:"outline",colorScheme:"blue",children:"Cancel"}),Object(x.jsx)(p.a,{ml:2,colorScheme:"red",variant:"outline",onClick:function(){i(),c()},children:"Reset"})]})]})})}),Object(x.jsx)(p.a,{onClick:n,colorScheme:"red",variant:"outline",children:"Reset Statistics"})]})},Ie=function(){return Object(x.jsxs)(h.a,{children:[Object(x.jsx)(m,{}),Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{path:"/name-the-note",children:Object(x.jsx)(Ne,{})}),Object(x.jsx)(O.a,{path:"/find-the-note",children:Object(x.jsx)(ge,{})}),Object(x.jsx)(O.a,{path:"/settings",children:Object(x.jsx)(we,{})}),Object(x.jsx)(O.a,{path:"/statistics",children:Object(x.jsx)(Ue,{})}),Object(x.jsx)(O.a,{path:"/",children:Object(x.jsx)(S,{})})]})]})},De=n(52);n.n(De).a.render(Object(x.jsx)(f.a.StrictMode,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(B.b,{children:Object(x.jsx)(Ie,{})})})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.aaab839a.chunk.js.map