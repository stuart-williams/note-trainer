(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[9],{143:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u}));var a=n(64),r=function(e){return e.hasAttribute("tabindex")};function c(e){return Object(a.f)(e)&&"input"===e.tagName.toLowerCase()&&"select"in e}function i(e){return(Object(a.f)(e)?Object(a.d)(e):document).activeElement===e}function l(e){return!(!e.parentElement||!l(e.parentElement))||e.hidden}function o(e){if(!Object(a.f)(e)||l(e)||function(e){return!0===Boolean(e.getAttribute("disabled"))||!0===Boolean(e.getAttribute("aria-disabled"))}(e))return!1;var t=e.localName;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;var n={a:function(){return e.hasAttribute("href")},audio:function(){return e.hasAttribute("controls")},video:function(){return e.hasAttribute("controls")}};return t in n?n[t]():!!function(e){var t=e.getAttribute("contenteditable");return"false"!==t&&null!=t}(e)||r(e)}function u(e){return!!e&&(Object(a.f)(e)&&o(e)&&!function(e){return r(e)&&-1===e.tabIndex}(e))}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),r=n(145);function c(e,t){void 0===t&&(t=[]);var n=a.useRef(e);return Object(r.a)((function(){n.current=e})),a.useCallback((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return null==n.current?void 0:n.current.apply(n,t)}),t)}},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1),r=n(64).e?a.useLayoutEffect:a.useEffect},151:function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return g}));var a=n(4),r=n(108),c=n(185),i=n(41),l=n(80),o=n(40),u=n(67),s=n(31),d=n(64),b=n(8),f=n(89),v=n(174),O=n(1);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var j=Object(f.a)({strict:!1,name:"FormControlContext"}),m=Object(a.a)(j,2),y=m[0],k=m[1];var g=Object(i.a)((function(e,t){var n=Object(l.a)("Form",e),i=function(e){var t=e.id,n=e.isRequired,i=e.isInvalid,l=e.isDisabled,o=e.isReadOnly,u=p(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),s=Object(r.b)(),b=t||"field-"+s,f=b+"-label",j=b+"-feedback",m=b+"-helptext",y=O.useState(!1),k=Object(a.a)(y,2),g=k[0],C=k[1],x=O.useState(!1),_=Object(a.a)(x,2),E=_[0],I=_[1],N=Object(c.a)(),P=Object(a.a)(N,2),R=P[0],w=P[1],q=O.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({id:m},e,{ref:Object(v.a)(t,(function(e){e&&I(!0)}))})}),[m]),F=O.useCallback((function(e,t){var n,a;return void 0===e&&(e={}),void 0===t&&(t=null),h({},e,{ref:t,"data-focus":Object(d.c)(R),"data-disabled":Object(d.c)(l),"data-invalid":Object(d.c)(i),"data-readonly":Object(d.c)(o),id:null!=(n=e.id)?n:f,htmlFor:null!=(a=e.htmlFor)?a:b})}),[b,l,R,i,o,f]),T=O.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({id:j},e,{ref:Object(v.a)(t,(function(e){e&&C(!0)})),"aria-live":"polite"})}),[j]),S=O.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({},e,u,{ref:t,role:"group"})}),[u]),D=O.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({},e,{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!o,isDisabled:!!l,isFocused:!!R,onFocus:w.on,onBlur:w.off,hasFeedbackText:g,setHasFeedbackText:C,hasHelpText:E,setHasHelpText:I,id:b,labelId:f,feedbackId:j,helpTextId:m,htmlProps:u,getHelpTextProps:q,getErrorMessageProps:T,getRootProps:S,getLabelProps:F,getRequiredIndicatorProps:D}}(Object(o.b)(e)),b=i.getRootProps,f=p(i,["getRootProps","htmlProps"]),j=Object(d.b)("chakra-form-control",e.className),m=O.useMemo((function(){return f}),[f]);return O.createElement(y,{value:m},O.createElement(u.b,{value:n},O.createElement(s.a.div,h({},b({},t),{className:j,__css:n.container}))))}));b.a&&(g.displayName="FormControl");var C=Object(i.a)((function(e,t){var n=k(),a=Object(u.d)(),r=Object(d.b)("chakra-form__helper-text",e.className);return O.createElement(s.a.div,h({},null==n?void 0:n.getHelpTextProps(e,t),{__css:a.helperText,className:r}))}));b.a&&(C.displayName="FormHelperText")},152:function(e,t){},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(4),n(24),n(1),n(144);function a(e,t){var n=void 0!==e;return[n,n&&"undefined"!==typeof e?e:t]}},17:function(e,t,n){"use strict";var a=n(34);n.o(a,"layoutPropNames")&&n.d(t,"layoutPropNames",(function(){return a.layoutPropNames}));var r=n(152);n.o(r,"layoutPropNames")&&n.d(t,"layoutPropNames",(function(){return r.layoutPropNames}))},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(8);function r(e,t){if(null!=e)if(Object(a.e)(e))e(t);else try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){return r(t,e)}))}}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(5),r=n(64),c=n(24),i=n(143);function l(e,t){void 0===t&&(t={});var n=t,l=n.isActive,u=void 0===l?i.a:l,s=n.nextTick,d=n.preventScroll,b=void 0===d||d,f=n.selectTextIfInput,v=void 0===f||f;if(!e||u(e))return-1;function O(){if(e){if(function(){if(null==o){o=!1;try{document.createElement("div").focus({get preventScroll(){return o=!0,!0}})}catch(e){}}return o}())e.focus({preventScroll:b});else if(e.focus(),b)!function(e){var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,c=r.element,i=r.scrollTop,l=r.scrollLeft;c.scrollTop=i,c.scrollLeft=l}}catch(o){n.e(o)}finally{n.f()}}(function(e){var t,n=Object(r.d)(e),a=null!=(t=n.defaultView)?t:window,c=e.parentNode,i=[],l=n.scrollingElement||n.documentElement;for(;c instanceof a.HTMLElement&&c!==l;)(c.offsetHeight<c.scrollHeight||c.offsetWidth<c.scrollWidth)&&i.push({element:c,scrollTop:c.scrollTop,scrollLeft:c.scrollLeft}),c=c.parentNode;l instanceof a.HTMLElement&&i.push({element:l,scrollTop:l.scrollTop,scrollLeft:l.scrollLeft});return i}(e));Object(i.c)(e)&&v&&e.select()}else Object(c.e)({condition:!0,message:"[chakra-ui]: can't call focus() on `null` or `undefined` element"})}return s?requestAnimationFrame(O):(O(),-1)}var o=null},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(4),r=n(1);function c(e){void 0===e&&(e=!1);var t=Object(r.useState)(e),n=Object(a.a)(t,2),c=n[0],i=n[1];return[c,{on:Object(r.useCallback)((function(){i(!0)}),[]),off:Object(r.useCallback)((function(){i(!1)}),[]),toggle:Object(r.useCallback)((function(){i((function(e){return!e}))}),[])}]}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(41),r=n(80),c=n(40),i=n(31),l=n(67),o=n(64),u=n(8),s=n(1),d=n(151);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=Object(a.a)((function(e,t){var n,a=Object(r.b)("FormLabel",e),l=Object(c.b)(e),u=l.children,f=l.requiredIndicator,O=void 0===f?s.createElement(v,null):f,h=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(l,["className","children","requiredIndicator"]),p=Object(d.b)(),j=null!=(n=null==p?void 0:p.getLabelProps(h,t))?n:b({ref:t},h);return s.createElement(i.a.label,b({},j,{className:Object(o.b)("chakra-form__label",l.className),__css:b({display:"block",textAlign:"start"},a)}),u,null!=p&&p.isRequired?O:null)}));u.a&&(f.displayName="FormLabel");var v=Object(a.a)((function(e,t){var n=Object(d.b)(),a=Object(l.d)();if(null==n||!n.isRequired)return null;var r=Object(o.b)("chakra-form__required-indicator",e.className);return s.createElement(i.a.span,b({},null==n?void 0:n.getRequiredIndicatorProps(e,t),{__css:a.requiredIndicator,className:r}))}));u.a&&(v.displayName="RequiredIndicator")},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(4),r=n(64),c=n(24),i=n(151);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function u(e){var t=function(e){var t,n,a,r=Object(i.b)(),u=e.id,s=e.disabled,d=e.readOnly,b=e.required,f=e.isRequired,v=e.isInvalid,O=e.isReadOnly,h=e.isDisabled,p=e.onFocus,j=e.onBlur,m=o(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),y=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=r&&r.hasFeedbackText&&null!=r&&r.isInvalid&&y.push(r.feedbackId);null!=r&&r.hasHelpText&&y.push(r.helpTextId);return l({},m,{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==r?void 0:r.id,isDisabled:null!=(t=null!=s?s:h)?t:null==r?void 0:r.isDisabled,isReadOnly:null!=(n=null!=d?d:O)?n:null==r?void 0:r.isReadOnly,isRequired:null!=(a=null!=b?b:f)?a:null==r?void 0:r.isRequired,isInvalid:null!=v?v:null==r?void 0:r.isInvalid,onFocus:Object(c.a)(null==r?void 0:r.onFocus,p),onBlur:Object(c.a)(null==r?void 0:r.onBlur,j)})}(e),n=t.isDisabled,a=t.isInvalid,u=t.isReadOnly,s=t.isRequired;return l({},o(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:n,readOnly:u,required:s,"aria-invalid":Object(r.a)(a),"aria-required":Object(r.a)(s),"aria-readonly":Object(r.a)(u)})}var s=n(41),d=n(31),b=n(80),f=n(40),v=n(17),O=n(8),h=n(18),p=n(30),j=n.n(p),m=n(1);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var g=Object(s.a)((function(e,t){var n=e.children,a=e.placeholder,c=e.className,i=k(e,["children","placeholder","className"]);return m.createElement(d.a.select,y({},i,{ref:t,className:Object(r.b)("chakra-select",c)}),a&&m.createElement("option",{value:""},a),n)}));O.a&&(g.displayName="SelectField");var C=Object(s.a)((function(e,t){var n=Object(b.a)("Select",e),c=Object(f.b)(e),i=c.rootProps,l=c.placeholder,o=c.icon,s=c.color,O=c.height,p=c.h,C=c.minH,x=c.minHeight,_=c.iconColor,I=c.iconSize,N=k(c,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"]),P=Object(h.h)(N,v.layoutPropNames),R=Object(a.a)(P,2),w=R[0],q=u(R[1]),F={width:"100%",height:"fit-content",position:"relative",color:s},T=j()({},n.field,{paddingEnd:"2rem",_focus:{zIndex:"unset"}});return m.createElement(d.a.div,y({className:"chakra-select__wrapper",__css:F},w,i),m.createElement(g,y({ref:t,height:null!=p?p:O,minH:null!=C?C:x,placeholder:l},q,{__css:T}),e.children),m.createElement(E,y({"data-disabled":Object(r.c)(q.disabled)},(_||s)&&{color:_||s},{__css:n.icon},I&&{fontSize:I}),o))}));O.a&&(C.displayName="Select");var x=function(e){return m.createElement("svg",y({viewBox:"0 0 24 24"},e),m.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},_=Object(d.a)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),E=function(e){var t=e.children,n=void 0===t?m.createElement(x,null):t,a=k(e,["children"]),r=m.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return m.createElement(_,y({},a,{className:"chakra-select__icon-wrapper"}),m.isValidElement(n)?r:null)};O.a&&(E.displayName="SelectIcon")},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(4),r=n(144),c=n(185),i=n(153),l=n(145),o=n(174),u=n(24),s=n(64),d=n(175),b=n(120),f=n(1);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e){void 0===e&&(e={});var t=e,n=t.defaultIsChecked,O=t.defaultChecked,p=void 0===O?n:O,j=t.isChecked,m=t.isFocusable,y=t.isDisabled,k=t.isReadOnly,g=t.isRequired,C=t.onChange,x=t.isIndeterminate,_=t.isInvalid,E=t.name,I=t.value,N=t.id,P=t.onBlur,R=t.onFocus,w=t.tabIndex,q=void 0===w?void 0:w,F=t["aria-label"],T=t["aria-labelledby"],S=t["aria-invalid"],D=t["aria-describedby"],L=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isIndeterminate","isInvalid","name","value","id","onBlur","onFocus","tabIndex","aria-label","aria-labelledby","aria-invalid","aria-describedby"]),H=Object(r.a)(C),M=Object(r.a)(P),A=Object(r.a)(R),B=Object(c.a)(),z=Object(a.a)(B,2),K=z[0],U=z[1],W=Object(c.a)(),J=Object(a.a)(W,2),V=J[0],Y=J[1],G=Object(c.a)(),Q=Object(a.a)(G,2),X=Q[0],Z=Q[1],$=Object(f.useRef)(null),ee=Object(f.useState)(!0),te=Object(a.a)(ee,2),ne=te[0],ae=te[1],re=Object(f.useState)(!!p),ce=Object(a.a)(re,2),ie=ce[0],le=ce[1],oe=Object(i.a)(j,ie),ue=Object(a.a)(oe,2),se=ue[0],de=ue[1];Object(u.e)({condition:!!n,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var be=Object(f.useCallback)((function(e){k||y?e.preventDefault():(se||le(de?e.target.checked:!!x||e.target.checked),null==H||H(e))}),[k,y,de,se,x,H]);Object(l.a)((function(){$.current&&($.current.indeterminate=Boolean(x))}),[x]);var fe=y&&!m,ve=Object(f.useCallback)((function(e){" "===e.key&&Z.on()}),[Z]),Oe=Object(f.useCallback)((function(e){" "===e.key&&Z.off()}),[Z]);Object(l.a)((function(){$.current&&($.current.checked!==de&&le($.current.checked))}),[$.current]);var he=Object(f.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);return v({},e,{ref:t,"data-active":Object(s.c)(X),"data-hover":Object(s.c)(V),"data-checked":Object(s.c)(de),"data-focus":Object(s.c)(K),"data-indeterminate":Object(s.c)(x),"data-disabled":Object(s.c)(y),"data-invalid":Object(s.c)(_),"data-readonly":Object(s.c)(k),"aria-hidden":!0,onMouseDown:Object(u.a)(e.onMouseDown,(function(e){e.preventDefault(),Z.on()})),onMouseUp:Object(u.a)(e.onMouseUp,Z.off),onMouseEnter:Object(u.a)(e.onMouseEnter,Y.on),onMouseLeave:Object(u.a)(e.onMouseLeave,Y.off)})}),[X,de,y,K,V,x,_,k,Z,Y.off,Y.on]),pe=Object(f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},L,e,{ref:Object(o.a)(t,(function(e){e&&ae("LABEL"===e.tagName)})),onClick:Object(u.a)(e.onClick,(function(){var e;ne||(null==(e=$.current)||e.click(),Object(d.a)($.current,{nextTick:!0}))})),"data-disabled":Object(s.c)(y),"data-checked":Object(s.c)(de),"data-invalid":Object(s.c)(_)})}),[L,y,de,_,ne]),je=Object(f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:Object(o.a)($,t),type:"checkbox",name:E,value:I,id:N,tabIndex:q,onChange:Object(u.a)(e.onChange,be),onBlur:Object(u.a)(e.onBlur,M,U.off),onFocus:Object(u.a)(e.onFocus,A,U.on),onKeyDown:Object(u.a)(e.onKeyDown,ve),onKeyUp:Object(u.a)(e.onKeyUp,Oe),required:g,checked:de,disabled:fe,readOnly:k,"aria-label":F,"aria-labelledby":T,"aria-invalid":S?Boolean(S):_,"aria-describedby":D,"aria-disabled":y,style:b.b})}),[E,I,N,be,U.off,U.on,M,A,ve,Oe,g,de,fe,k,F,T,S,_,D,y,q]),me=Object(f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,onMouseDown:Object(u.a)(e.onMouseDown,h),onTouchStart:Object(u.a)(e.onTouchStart,h),"data-disabled":Object(s.c)(y),"data-checked":Object(s.c)(de),"data-invalid":Object(s.c)(_)})}),[de,y,_]);return{state:{isInvalid:_,isFocused:K,isChecked:de,isActive:X,isHovered:V,isIndeterminate:x,isDisabled:y,isReadOnly:k,isRequired:g},getRootProps:pe,getCheckboxProps:he,getInputProps:je,getLabelProps:me,htmlProps:L}}function h(e){e.preventDefault(),e.stopPropagation()}var p=n(41),j=n(80),m=n(40),y=n(31),k=n(8);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C=Object(p.a)((function(e,t){var n=Object(j.a)("Switch",e),a=Object(m.b)(e),r=a.spacing,c=void 0===r?"0.5rem":r,i=a.children,l=O(function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(a,["spacing","children"])),o=l.state,u=l.getInputProps,d=l.getCheckboxProps,b=l.getRootProps,v=l.getLabelProps,h=f.useMemo((function(){return g({display:"inline-block",verticalAlign:"middle",lineHeight:"normal"},n.container)}),[n.container]),p=f.useMemo((function(){return g({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},n.track)}),[n.track]),k=f.useMemo((function(){return g({userSelect:"none",marginStart:c},n.label)}),[c,n.label]);return f.createElement(y.a.label,g({},b(),{className:Object(s.b)("chakra-switch",e.className),__css:h}),f.createElement("input",g({className:"chakra-switch__input"},u({},t))),f.createElement(y.a.span,g({},d(),{className:"chakra-switch__track",__css:p}),f.createElement(y.a.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":Object(s.c)(o.isChecked),"data-hover":Object(s.c)(o.isHovered)})),i&&f.createElement(y.a.span,g({className:"chakra-switch__label"},v(),{__css:k}),i))}));k.a&&(C.displayName="Switch")}}]);
//# sourceMappingURL=9.b97bd204.chunk.js.map