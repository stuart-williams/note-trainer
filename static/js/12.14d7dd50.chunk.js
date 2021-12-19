/*! For license information please see 12.14d7dd50.chunk.js.LICENSE.txt */
(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[12],{138:function(t,e,n){"use strict";n.d(e,"b",(function(){return W})),n.d(e,"a",(function(){return C}));var r=n(139),o=n.n(r),a=n(1),i=n.n(a),u=n(30),s=n.n(u),c=n(140),l=n.n(c),p=n(141),f=n.n(p);function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function N(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?w(t):e}function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var P=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],E=["Db","Eb","Gb","Ab","Bb"],S={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},A=/([a-g])([#b]?)(\d+)/;var k=o()(12,128).reduce((function(t,e){return t[e]=function(t){var e=(t-12)%12,n=Math.floor((t-12)/12),r=P[e];return{note:"".concat(r).concat(n),pitchName:r,octave:n,midiNumber:t,isAccidental:E.includes(r)}}(e),t}),{});function O(t){var e=k[t];if(!e)throw Error("Invalid MIDI number");return e}var M=o()(12,128).filter((function(t){return!O(t).isAccidental})),j={fromNote:function(t){if(!t)throw Error("Invalid note argument");var e=A.exec(t.toLowerCase());if(!e)throw Error("Invalid note argument");var n=R(e,4),r=n[1],o=n[2],a=n[3],i="".concat(r.toUpperCase()).concat(o),u=S[i];if(null==u)throw Error("Invalid note argument");return 12+u+12*parseInt(a,10)},getAttributes:O,MIN_MIDI_NUMBER:12,MAX_MIDI_NUMBER:127,NATURAL_MIDI_NUMBERS:M},T=function(t){function e(){var t,n;h(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return v(w(n=I(this,(t=g(e)).call.apply(t,[this].concat(o)))),"onPlayNoteInput",(function(){n.props.onPlayNoteInput(n.props.midiNumber)})),v(w(n),"onStopNoteInput",(function(){n.props.onStopNoteInput(n.props.midiNumber)})),n}return N(e,t),y(e,[{key:"getAbsoluteKeyPosition",value:function(t){var e=j.getAttributes(t),n=e.octave,r=e.pitchName;return this.props.pitchPositions[r]+7*n}},{key:"getRelativeKeyPosition",value:function(t){return this.getAbsoluteKeyPosition(t)-this.getAbsoluteKeyPosition(this.props.noteRange.first)}},{key:"render",value:function(){var t=this.props,e=t.naturalKeyWidth,n=t.accidentalWidthRatio,r=t.midiNumber,o=t.gliss,a=t.useTouchEvents,u=t.accidental,s=t.active,c=t.disabled,p=t.children;return i.a.createElement("div",{className:l()("ReactPiano__Key",{"ReactPiano__Key--accidental":u,"ReactPiano__Key--natural":!u,"ReactPiano__Key--disabled":c,"ReactPiano__Key--active":s}),style:{left:q(this.getRelativeKeyPosition(r)*e),width:q(u?n*e:e)},onMouseDown:a?null:this.onPlayNoteInput,onMouseUp:a?null:this.onStopNoteInput,onMouseEnter:o?this.onPlayNoteInput:null,onMouseLeave:this.onStopNoteInput,onTouchStart:a?this.onPlayNoteInput:null,onTouchCancel:a?this.onStopNoteInput:null,onTouchEnd:a?this.onStopNoteInput:null},i.a.createElement("div",{className:"ReactPiano__NoteLabelContainer"},p))}}]),e}(i.a.Component);function q(t){return"".concat(100*t,"%")}v(T,"propTypes",{midiNumber:s.a.number.isRequired,naturalKeyWidth:s.a.number.isRequired,gliss:s.a.bool.isRequired,useTouchEvents:s.a.bool.isRequired,accidental:s.a.bool.isRequired,active:s.a.bool.isRequired,disabled:s.a.bool.isRequired,onPlayNoteInput:s.a.func.isRequired,onStopNoteInput:s.a.func.isRequired,accidentalWidthRatio:s.a.number.isRequired,pitchPositions:s.a.object.isRequired,children:s.a.node}),v(T,"defaultProps",{accidentalWidthRatio:.65,pitchPositions:{C:0,Db:.55,D:1,Eb:1.8,E:2,F:3,Gb:3.5,G:4,Ab:4.7,A:5,Bb:5.85,B:6}});var K=function(t){function e(){return h(this,e),I(this,g(e).apply(this,arguments))}return N(e,t),y(e,[{key:"getMidiNumbers",value:function(){return o()(this.props.noteRange.first,this.props.noteRange.last+1)}},{key:"getNaturalKeyCount",value:function(){return this.getMidiNumbers().filter((function(t){return!j.getAttributes(t).isAccidental})).length}},{key:"getNaturalKeyWidth",value:function(){return 1/this.getNaturalKeyCount()}},{key:"getWidth",value:function(){return this.props.width?this.props.width:"100%"}},{key:"getHeight",value:function(){if(!this.props.width)return"100%";var t=this.props.width*this.getNaturalKeyWidth();return"".concat(t/this.props.keyWidthToHeight,"px")}},{key:"render",value:function(){var t=this,e=this.getNaturalKeyWidth();return i.a.createElement("div",{className:l()("ReactPiano__Keyboard",this.props.className),style:{width:this.getWidth(),height:this.getHeight()}},this.getMidiNumbers().map((function(n){var r=j.getAttributes(n),o=(r.note,r.isAccidental),a=!t.props.disabled&&t.props.activeNotes.includes(n);return i.a.createElement(T,{naturalKeyWidth:e,midiNumber:n,noteRange:t.props.noteRange,active:a,accidental:o,disabled:t.props.disabled,onPlayNoteInput:t.props.onPlayNoteInput,onStopNoteInput:t.props.onStopNoteInput,gliss:t.props.gliss,useTouchEvents:t.props.useTouchEvents,key:n},t.props.disabled?null:t.props.renderNoteLabel({isActive:a,isAccidental:o,midiNumber:n}))})))}}]),e}(i.a.Component);function D(t){return"number"===typeof t&&j.NATURAL_MIDI_NUMBERS.includes(t)}v(K,"propTypes",{noteRange:function(t,e,n){var r=t[e],o=r.first,a=r.last;if(!o||!a)return new Error("Invalid prop ".concat(e," supplied to ").concat(n,". ").concat(e," must be an object with .first and .last values."));if(!D(o)||!D(a))return new Error("Invalid prop ".concat(e," supplied to ").concat(n,". ").concat(e," values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));if(o>=a)return new Error("Invalid prop ".concat(e," supplied to ").concat(n,". ").concat(e,".first must be smaller than ").concat(e,".last."))},activeNotes:s.a.arrayOf(s.a.number),onPlayNoteInput:s.a.func.isRequired,onStopNoteInput:s.a.func.isRequired,renderNoteLabel:s.a.func.isRequired,keyWidthToHeight:s.a.number.isRequired,className:s.a.string,disabled:s.a.bool,gliss:s.a.bool,useTouchEvents:s.a.bool,width:s.a.number}),v(K,"defaultProps",{disabled:!1,gliss:!1,useTouchEvents:!1,keyWidthToHeight:.33,renderNoteLabel:function(){}});var L=function(t){function e(){var t,n;h(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return v(w(n=I(this,(t=g(e)).call.apply(t,[this].concat(o)))),"state",{isMouseDown:!1,useTouchEvents:!1}),v(w(n),"handleNoteChanges",(function(t){var e=t.prevActiveNotes,r=t.nextActiveNotes;if(!n.props.disabled){var o=f()(e,r);f()(r,e).forEach((function(t){n.props.playNote(t)})),o.forEach((function(t){n.props.stopNote(t)}))}})),v(w(n),"getMidiNumberForKey",(function(t){if(!n.props.keyboardShortcuts)return null;var e=n.props.keyboardShortcuts.find((function(e){return e.key===t}));return e&&e.midiNumber})),v(w(n),"getKeyForMidiNumber",(function(t){if(!n.props.keyboardShortcuts)return null;var e=n.props.keyboardShortcuts.find((function(e){return e.midiNumber===t}));return e&&e.key})),v(w(n),"onKeyDown",(function(t){if(!(t.ctrlKey||t.metaKey||t.shiftKey)){var e=n.getMidiNumberForKey(t.key);e&&n.onPlayNoteInput(e)}})),v(w(n),"onKeyUp",(function(t){var e=n.getMidiNumberForKey(t.key);e&&n.onStopNoteInput(e)})),v(w(n),"onPlayNoteInput",(function(t){n.props.disabled||n.props.onPlayNoteInput(t,n.props.activeNotes)})),v(w(n),"onStopNoteInput",(function(t){n.props.disabled||n.props.onStopNoteInput(t,n.props.activeNotes)})),v(w(n),"onMouseDown",(function(){n.setState({isMouseDown:!0})})),v(w(n),"onMouseUp",(function(){n.setState({isMouseDown:!1})})),v(w(n),"onTouchStart",(function(){n.setState({useTouchEvents:!0})})),v(w(n),"renderNoteLabel",(function(t){var e=t.midiNumber,r=t.isActive,o=t.isAccidental,a=n.getKeyForMidiNumber(e);return n.props.renderNoteLabel({keyboardShortcut:a,midiNumber:e,isActive:r,isAccidental:o})})),n}return N(e,t),y(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}},{key:"componentDidUpdate",value:function(t,e){this.props.activeNotes!==t.activeNotes&&this.handleNoteChanges({prevActiveNotes:t.activeNotes||[],nextActiveNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100%"},onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onTouchStart,"data-testid":"container"},i.a.createElement(K,{noteRange:this.props.noteRange,onPlayNoteInput:this.onPlayNoteInput,onStopNoteInput:this.onStopNoteInput,activeNotes:this.props.activeNotes,className:this.props.className,disabled:this.props.disabled,width:this.props.width,keyWidthToHeight:this.props.keyWidthToHeight,gliss:this.state.isMouseDown,useTouchEvents:this.state.useTouchEvents,renderNoteLabel:this.renderNoteLabel}))}}]),e}(i.a.Component);v(L,"propTypes",{noteRange:s.a.object.isRequired,activeNotes:s.a.arrayOf(s.a.number.isRequired).isRequired,playNote:s.a.func.isRequired,stopNote:s.a.func.isRequired,onPlayNoteInput:s.a.func.isRequired,onStopNoteInput:s.a.func.isRequired,renderNoteLabel:s.a.func.isRequired,className:s.a.string,disabled:s.a.bool,width:s.a.number,keyWidthToHeight:s.a.number,keyboardShortcuts:s.a.arrayOf(s.a.shape({key:s.a.string.isRequired,midiNumber:s.a.number.isRequired}))}),v(L,"defaultProps",{renderNoteLabel:function(t){var e=t.keyboardShortcut,n=(t.midiNumber,t.isActive),r=t.isAccidental;return e?i.a.createElement("div",{className:l()("ReactPiano__NoteLabel",{"ReactPiano__NoteLabel--active":n,"ReactPiano__NoteLabel--accidental":r,"ReactPiano__NoteLabel--natural":!r})},e):null}});var W=function(t){function e(){var t,n;h(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return v(w(n=I(this,(t=g(e)).call.apply(t,[this].concat(o)))),"state",{activeNotes:n.props.activeNotes||[]}),v(w(n),"handlePlayNoteInput",(function(t){n.setState((function(e){return n.props.onPlayNoteInput&&n.props.onPlayNoteInput(t,{prevActiveNotes:e.activeNotes}),e.activeNotes.includes(t)?null:{activeNotes:e.activeNotes.concat(t)}}))})),v(w(n),"handleStopNoteInput",(function(t){n.setState((function(e){return n.props.onStopNoteInput&&n.props.onStopNoteInput(t,{prevActiveNotes:n.state.activeNotes}),{activeNotes:e.activeNotes.filter((function(e){return t!==e}))}}))})),n}return N(e,t),y(e,[{key:"componentDidUpdate",value:function(t){t.activeNotes!==this.props.activeNotes&&this.state.activeNotes!==this.props.activeNotes&&this.setState({activeNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){var t=this.props,e=(t.activeNotes,t.onPlayNoteInput,t.onStopNoteInput,_(t,["activeNotes","onPlayNoteInput","onStopNoteInput"]));return i.a.createElement(L,b({activeNotes:this.state.activeNotes,onPlayNoteInput:this.handlePlayNoteInput,onStopNoteInput:this.handleStopNoteInput},e))}}]),e}(i.a.Component);v(W,"propTypes",{noteRange:s.a.object.isRequired,activeNotes:s.a.arrayOf(s.a.number.isRequired),playNote:s.a.func.isRequired,stopNote:s.a.func.isRequired,onPlayNoteInput:s.a.func,onStopNoteInput:s.a.func,renderNoteLabel:s.a.func,className:s.a.string,disabled:s.a.bool,width:s.a.number,keyWidthToHeight:s.a.number,keyboardShortcuts:s.a.arrayOf(s.a.shape({key:s.a.string.isRequired,midiNumber:s.a.number.isRequired}))});var C={create:function(t){for(var e=t.firstNote,n=t.lastNote,r=t.keyboardConfig,o=e,a=0,i=[];a<r.length&&o<=n;){var u=r[a];j.getAttributes(o).isAccidental?i.push({key:u.flat,midiNumber:o}):(i.push({key:u.natural,midiNumber:o}),a+=1),o+=1}return i},BOTTOM_ROW:[{natural:"z",flat:"a",sharp:"s"},{natural:"x",flat:"s",sharp:"d"},{natural:"c",flat:"d",sharp:"f"},{natural:"v",flat:"f",sharp:"g"},{natural:"b",flat:"g",sharp:"h"},{natural:"n",flat:"h",sharp:"j"},{natural:"m",flat:"j",sharp:"k"},{natural:",",flat:"k",sharp:"l"},{natural:".",flat:"l",sharp:";"},{natural:"/",flat:";",sharp:"'"}],HOME_ROW:[{natural:"a",flat:"q",sharp:"w"},{natural:"s",flat:"w",sharp:"e"},{natural:"d",flat:"e",sharp:"r"},{natural:"f",flat:"r",sharp:"t"},{natural:"g",flat:"t",sharp:"y"},{natural:"h",flat:"y",sharp:"u"},{natural:"j",flat:"u",sharp:"i"},{natural:"k",flat:"i",sharp:"o"},{natural:"l",flat:"o",sharp:"p"},{natural:";",flat:"p",sharp:"["},{natural:"'",flat:"[",sharp:"]"}],QWERTY_ROW:[{natural:"q",flat:"1",sharp:"2"},{natural:"w",flat:"2",sharp:"3"},{natural:"e",flat:"3",sharp:"4"},{natural:"r",flat:"4",sharp:"5"},{natural:"t",flat:"5",sharp:"6"},{natural:"y",flat:"6",sharp:"7"},{natural:"u",flat:"7",sharp:"8"},{natural:"i",flat:"8",sharp:"9"},{natural:"o",flat:"9",sharp:"0"},{natural:"p",flat:"0",sharp:"-"},{natural:"[",flat:"-",sharp:"="}]}},139:function(t,e){t.exports=function(t,e,n){if(null!=t&&"number"!=typeof t)throw new Error("start must be a number or null");if(null!=e&&"number"!=typeof e)throw new Error("stop must be a number or null");if(null!=n&&"number"!=typeof n)throw new Error("step must be a number or null");null==e&&(e=t||0,t=0);null==n&&(n=e>t?1:-1);for(var r=[],o=t<e;o?t<e:t>e;t+=n)r.push(t);return r}},140:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},141:function(t,e,n){(function(e){var n="__lodash_hash_undefined__",r=9007199254740991,o="[object Arguments]",a=/^\[object .+?Constructor\]$/,i="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,s=i||u||Function("return this")();function c(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function l(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!==e)return function(t,e,n,r){var o=t.length,a=n+(r?1:-1);for(;r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,h,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function p(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function f(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function h(t){return t!==t}function d(t,e){return t.has(e)}var y=Array.prototype,v=Function.prototype,b=Object.prototype,N=s["__core-js_shared__"],g=function(){var t=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),m=v.toString,_=b.hasOwnProperty,w=b.toString,I=RegExp("^"+m.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=s.Symbol,P=b.propertyIsEnumerable,E=y.splice,S=R?R.isConcatSpreadable:void 0,A=Math.max,k=x(s,"Map"),O=x(Object,"create");function M(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function T(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function q(t){var e=-1,n=t?t.length:0;for(this.__data__=new T;++e<n;)this.add(t[e])}function K(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!==n&&r!==r)return o;return-1}function D(t,e,n,r){var o,a=-1,i=l,u=!0,s=t.length,c=[],f=e.length;if(!s)return c;n&&(e=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(o=n,function(t){return o(t)}))),r?(i=p,u=!1):e.length>=200&&(i=d,u=!1,e=new q(e));t:for(;++a<s;){var h=t[a],y=n?n(h):h;if(h=r||0!==h?h:0,u&&y===y){for(var v=f;v--;)if(e[v]===y)continue t;c.push(h)}else i(e,y,r)||c.push(h)}return c}function L(t,e,n,r,o){var a=-1,i=t.length;for(n||(n=U),o||(o=[]);++a<i;){var u=t[a];e>0&&n(u)?e>1?L(u,e-1,n,r,o):f(o,u):r||(o[o.length]=u)}return o}function W(t){return!(!Q(t)||(e=t,g&&g in e))&&(z(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?I:a).test(function(t){if(null!=t){try{return m.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t));var e}function C(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function x(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return W(n)?n:void 0}function U(t){return G(t)||function(t){return J(t)&&_.call(t,"callee")&&(!P.call(t,"callee")||w.call(t)==o)}(t)||!!(S&&t&&t[S])}M.prototype.clear=function(){this.__data__=O?O(null):{}},M.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},M.prototype.get=function(t){var e=this.__data__;if(O){var r=e[t];return r===n?void 0:r}return _.call(e,t)?e[t]:void 0},M.prototype.has=function(t){var e=this.__data__;return O?void 0!==e[t]:_.call(e,t)},M.prototype.set=function(t,e){return this.__data__[t]=O&&void 0===e?n:e,this},j.prototype.clear=function(){this.__data__=[]},j.prototype.delete=function(t){var e=this.__data__,n=K(e,t);return!(n<0)&&(n==e.length-1?e.pop():E.call(e,n,1),!0)},j.prototype.get=function(t){var e=this.__data__,n=K(e,t);return n<0?void 0:e[n][1]},j.prototype.has=function(t){return K(this.__data__,t)>-1},j.prototype.set=function(t,e){var n=this.__data__,r=K(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},T.prototype.clear=function(){this.__data__={hash:new M,map:new(k||j),string:new M}},T.prototype.delete=function(t){return C(this,t).delete(t)},T.prototype.get=function(t){return C(this,t).get(t)},T.prototype.has=function(t){return C(this,t).has(t)},T.prototype.set=function(t,e){return C(this,t).set(t,e),this},q.prototype.add=q.prototype.push=function(t){return this.__data__.set(t,n),this},q.prototype.has=function(t){return this.__data__.has(t)};var F,B,H=(F=function(t,e){return J(t)?D(t,L(e,1,J,!0)):[]},B=A(void 0===B?F.length-1:B,0),function(){for(var t=arguments,e=-1,n=A(t.length-B,0),r=Array(n);++e<n;)r[e]=t[B+e];e=-1;for(var o=Array(B+1);++e<B;)o[e]=t[e];return o[B]=r,c(F,this,o)});var G=Array.isArray;function $(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!z(t)}function J(t){return function(t){return!!t&&"object"==typeof t}(t)&&$(t)}function z(t){var e=Q(t)?w.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function Q(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=H}).call(this,n(58))},142:function(t,e,n){}}]);
//# sourceMappingURL=12.14d7dd50.chunk.js.map