(this["webpackJsonpnote-trainer"]=this["webpackJsonpnote-trainer"]||[]).push([[11],{165:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0);function i(e){return Object(n.a)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}}]})(e)}},67:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return _})),t.d(a,"c",(function(){return g})),t.d(a,"d",(function(){return f}));var n=t(13),i=t(3),r=t(2),l=t(16),c=t(1),o=t(37);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}var u=["id","isRequired","isInvalid","isDisabled","isReadOnly"],b=["getRootProps","htmlProps"],v=Object(l.a)({strict:!1,name:"FormControlContext"}),h=v[0],f=v[1];var j=Object(i.e)((function(e,a){var t=Object(i.g)("Form",e),o=function(e){var a=e.id,t=e.isRequired,i=e.isInvalid,o=e.isDisabled,b=e.isReadOnly,v=d(e,u),h=Object(n.h)(),f=a||"field-"+h,j=f+"-label",p=f+"-feedback",O=f+"-helptext",m=c.useState(!1),g=m[0],k=m[1],y=c.useState(!1),C=y[0],_=y[1],x=Object(n.b)(),I=x[0],E=x[1],R=c.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),s({id:O},e,{ref:Object(l.c)(a,(function(e){e&&_(!0)}))})}),[O]),N=c.useCallback((function(e,a){var t,n;return void 0===e&&(e={}),void 0===a&&(a=null),s({},e,{ref:a,"data-focus":Object(r.j)(I),"data-disabled":Object(r.j)(o),"data-invalid":Object(r.j)(i),"data-readonly":Object(r.j)(b),id:null!=(t=e.id)?t:j,htmlFor:null!=(n=e.htmlFor)?n:f})}),[f,o,I,i,b,j]),P=c.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),s({id:p},e,{ref:Object(l.c)(a,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[p]),D=c.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),s({},e,v,{ref:a,role:"group"})}),[v]),F=c.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),s({},e,{ref:a,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!i,isReadOnly:!!b,isDisabled:!!o,isFocused:!!I,onFocus:E.on,onBlur:E.off,hasFeedbackText:g,setHasFeedbackText:k,hasHelpText:C,setHasHelpText:_,id:f,labelId:j,feedbackId:p,helpTextId:O,htmlProps:v,getHelpTextProps:R,getErrorMessageProps:P,getRootProps:D,getLabelProps:N,getRequiredIndicatorProps:F}}(Object(i.f)(e)),v=o.getRootProps;o.htmlProps;var f=d(o,b),j=Object(r.i)("chakra-form-control",e.className),p=c.useMemo((function(){return f}),[f]);return c.createElement(h,{value:p},c.createElement(i.b,{value:t},c.createElement(i.d.div,s({},v({},a),{className:j,__css:t.container}))))}));r.b&&(j.displayName="FormControl");var p=Object(i.e)((function(e,a){var t=f(),n=Object(i.i)(),l=Object(r.i)("chakra-form__helper-text",e.className);return c.createElement(i.d.div,s({},null==t?void 0:t.getHelpTextProps(e,a),{__css:n.helperText,className:l}))}));r.b&&(p.displayName="FormHelperText");var O=["isDisabled","isInvalid","isReadOnly","isRequired"],m=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function g(e){var a=function(e){var a,t,n,i=f(),l=e.id,c=e.disabled,o=e.readOnly,u=e.required,b=e.isRequired,v=e.isInvalid,h=e.isReadOnly,j=e.isDisabled,p=e.onFocus,O=e.onBlur,g=d(e,m),k=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&k.push(i.feedbackId);null!=i&&i.hasHelpText&&k.push(i.helpTextId);return s({},g,{"aria-describedby":k.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(a=null!=c?c:j)?a:null==i?void 0:i.isDisabled,isReadOnly:null!=(t=null!=o?o:h)?t:null==i?void 0:i.isReadOnly,isRequired:null!=(n=null!=u?u:b)?n:null==i?void 0:i.isRequired,isInvalid:null!=v?v:null==i?void 0:i.isInvalid,onFocus:Object(r.g)(null==i?void 0:i.onFocus,p),onBlur:Object(r.g)(null==i?void 0:i.onBlur,O)})}(e),t=a.isDisabled,n=a.isInvalid,i=a.isReadOnly,l=a.isRequired;return s({},d(a,O),{disabled:t,readOnly:i,required:l,"aria-invalid":Object(r.e)(n),"aria-required":Object(r.e)(l),"aria-readonly":Object(r.e)(i)})}var k=Object(i.e)((function(e,a){var t=Object(i.g)("FormError",e),n=Object(i.f)(e),l=f();return null!=l&&l.isInvalid?c.createElement(i.b,{value:t},c.createElement(i.d.div,s({},null==l?void 0:l.getErrorMessageProps(n,a),{className:Object(r.i)("chakra-form__error-message",e.className),__css:s({display:"flex",alignItems:"center"},t.text)}))):null}));r.b&&(k.displayName="FormErrorMessage");var y=Object(i.e)((function(e,a){var t=Object(i.i)(),n=f();if(null==n||!n.isInvalid)return null;var l=Object(r.i)("chakra-form__error-icon",e.className);return c.createElement(o.b,s({ref:a,"aria-hidden":!0},e,{__css:t.icon,className:l}),c.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));r.b&&(y.displayName="FormErrorIcon");var C=["className","children","requiredIndicator"],_=Object(i.e)((function(e,a){var t,n=Object(i.h)("FormLabel",e),l=Object(i.f)(e);l.className;var o=l.children,u=l.requiredIndicator,b=void 0===u?c.createElement(x,null):u,v=d(l,C),h=f(),j=null!=(t=null==h?void 0:h.getLabelProps(v,a))?t:s({ref:a},v);return c.createElement(i.d.label,s({},j,{className:Object(r.i)("chakra-form__label",l.className),__css:s({display:"block",textAlign:"start"},n)}),o,null!=h&&h.isRequired?b:null)}));r.b&&(_.displayName="FormLabel");var x=Object(i.e)((function(e,a){var t=f(),n=Object(i.i)();if(null==t||!t.isRequired)return null;var l=Object(r.i)("chakra-form__required-indicator",e.className);return c.createElement(i.d.span,s({},null==t?void 0:t.getRequiredIndicatorProps(e,a),{__css:n.requiredIndicator,className:l}))}));r.b&&(x.displayName="RequiredIndicator")},68:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var n=t(2),i=t(16),r=t(1),l=t(13),c=t(3),o=t(171),s=t(172),d=t(38);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b=Object(i.a)({name:"CheckboxGroupContext",strict:!1}),v=(b[0],b[1]);function h(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}n.b;var f=["isIndeterminate","isChecked"],j="custom"in o.a?o.a.custom(c.d.svg):Object(o.a)(c.d.svg),p=function(e){return r.createElement(j,u({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),r.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},O=function(e){return r.createElement(j,u({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),r.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},m=function(e){var a=e.open,t=e.children;return r.createElement(s.a,{initial:!1},a&&r.createElement(o.a.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},t))},g=function(e){var a=e.isIndeterminate,t=e.isChecked,n=h(e,f),i=a?O:p;return r.createElement(m,{open:t||a},r.createElement(i,n))},k=["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isIndeterminate","isInvalid","name","value","id","onBlur","onFocus","tabIndex","aria-label","aria-labelledby","aria-invalid","aria-describedby"];function y(e){void 0===e&&(e={});var a=e,t=a.defaultIsChecked,c=a.defaultChecked,o=void 0===c?t:c,s=a.isChecked,b=a.isFocusable,v=a.isDisabled,f=a.isReadOnly,j=a.isRequired,p=a.onChange,O=a.isIndeterminate,m=a.isInvalid,g=a.name,y=a.value,_=a.id,x=a.onBlur,I=a.onFocus,E=a.tabIndex,R=void 0===E?void 0:E,N=a["aria-label"],P=a["aria-labelledby"],D=a["aria-invalid"],F=a["aria-describedby"],w=h(a,k),S=Object(l.c)(p),M=Object(l.c)(x),q=Object(l.c)(I),T=Object(l.b)(),B=T[0],L=T[1],H=Object(l.b)(),z=H[0],A=H[1],K=Object(l.b)(),U=K[0],W=K[1],V=Object(r.useRef)(null),G=Object(r.useState)(!0),X=G[0],Z=G[1],J=Object(r.useState)(!!o),Q=J[0],Y=J[1],$=Object(l.d)(s,Q),ee=$[0],ae=$[1];Object(n.T)({condition:!!t,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var te=Object(r.useCallback)((function(e){f||v?e.preventDefault():(ee||Y(ae?e.target.checked:!!O||e.target.checked),null==S||S(e))}),[f,v,ae,ee,O,S]);Object(l.k)((function(){V.current&&(V.current.indeterminate=Boolean(O))}),[O]);var ne=v&&!b,ie=Object(r.useCallback)((function(e){" "===e.key&&W.on()}),[W]),re=Object(r.useCallback)((function(e){" "===e.key&&W.off()}),[W]);Object(l.k)((function(){V.current&&(V.current.checked!==ae&&Y(V.current.checked))}),[V.current]);var le=Object(r.useCallback)((function(e,a){void 0===e&&(e={}),void 0===a&&(a=null);return u({},e,{ref:a,"data-active":Object(n.j)(U),"data-hover":Object(n.j)(z),"data-checked":Object(n.j)(ae),"data-focus":Object(n.j)(B),"data-indeterminate":Object(n.j)(O),"data-disabled":Object(n.j)(v),"data-invalid":Object(n.j)(m),"data-readonly":Object(n.j)(f),"aria-hidden":!0,onMouseDown:Object(n.g)(e.onMouseDown,(function(e){e.preventDefault(),W.on()})),onMouseUp:Object(n.g)(e.onMouseUp,W.off),onMouseEnter:Object(n.g)(e.onMouseEnter,A.on),onMouseLeave:Object(n.g)(e.onMouseLeave,A.off)})}),[U,ae,v,B,z,O,m,f,W,A.off,A.on]),ce=Object(r.useCallback)((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),u({},w,e,{ref:Object(i.c)(a,(function(e){e&&Z("LABEL"===e.tagName)})),onClick:Object(n.g)(e.onClick,(function(){var e;X||(null==(e=V.current)||e.click(),Object(n.m)(V.current,{nextTick:!0}))})),"data-disabled":Object(n.j)(v),"data-checked":Object(n.j)(ae),"data-invalid":Object(n.j)(m)})}),[w,v,ae,m,X]),oe=Object(r.useCallback)((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),u({},e,{ref:Object(i.c)(V,a),type:"checkbox",name:g,value:y,id:_,tabIndex:R,onChange:Object(n.g)(e.onChange,te),onBlur:Object(n.g)(e.onBlur,M,L.off),onFocus:Object(n.g)(e.onFocus,q,L.on),onKeyDown:Object(n.g)(e.onKeyDown,ie),onKeyUp:Object(n.g)(e.onKeyUp,re),required:j,checked:ae,disabled:ne,readOnly:f,"aria-label":N,"aria-labelledby":P,"aria-invalid":D?Boolean(D):m,"aria-describedby":F,"aria-disabled":v,style:d.b})}),[g,y,_,te,L.off,L.on,M,q,ie,re,j,ae,ne,f,N,P,D,m,F,v,R]),se=Object(r.useCallback)((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),u({},e,{ref:a,onMouseDown:Object(n.g)(e.onMouseDown,C),onTouchStart:Object(n.g)(e.onTouchStart,C),"data-disabled":Object(n.j)(v),"data-checked":Object(n.j)(ae),"data-invalid":Object(n.j)(m)})}),[ae,v,m]);return{state:{isInvalid:m,isFocused:B,isChecked:ae,isActive:U,isHovered:z,isIndeterminate:O,isDisabled:v,isReadOnly:f,isRequired:j},getRootProps:ce,getCheckboxProps:le,getInputProps:oe,getLabelProps:se,htmlProps:w}}function C(e){e.preventDefault(),e.stopPropagation()}var _=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange"],x=Object(c.d)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),I=Object(c.d)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative",_disabled:{cursor:"not-allowed"}}}),E=Object(c.e)((function(e,a){var t=v(),i=u({},t,e),l=Object(c.g)("Checkbox",i),o=Object(c.f)(e),s=o.spacing,d=void 0===s?"0.5rem":s,b=o.className,f=o.children,j=o.iconColor,p=o.iconSize,O=o.icon,m=void 0===O?r.createElement(g,null):O,k=o.isChecked,C=o.isDisabled,E=void 0===C?null==t?void 0:t.isDisabled:C,R=o.onChange,N=h(o,_),P=k;null!=t&&t.value&&o.value&&(P=t.value.includes(o.value));var D=R;null!=t&&t.onChange&&o.value&&(D=Object(n.f)(t.onChange,R));var F=y(u({},N,{isDisabled:E,isChecked:P,onChange:D})),w=F.state,S=F.getInputProps,M=F.getCheckboxProps,q=F.getLabelProps,T=F.getRootProps,B=r.useMemo((function(){return u({opacity:w.isChecked||w.isIndeterminate?1:0,transform:w.isChecked||w.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:p,color:j},l.icon)}),[j,p,w.isChecked,w.isIndeterminate,l.icon]),L=r.cloneElement(m,{__css:B,isIndeterminate:w.isIndeterminate,isChecked:w.isChecked});return r.createElement(I,u({__css:l.container,className:Object(n.i)("chakra-checkbox",b)},T()),r.createElement("input",u({className:"chakra-checkbox__input"},S({},a))),r.createElement(x,u({__css:l.control,className:"chakra-checkbox__control"},M()),L),f&&r.createElement(c.d.span,u({className:"chakra-checkbox__label"},q(),{__css:u({marginStart:d},l.label)}),f))}));n.b&&(E.displayName="Checkbox")},71:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var n=t(67),i=t(3),r=t(20),l=t(2),c=t(23),o=t.n(c),s=t(1);function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}var b=["children","placeholder","className"],v=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],h=["children"],f=Object(i.e)((function(e,a){var t=e.children,n=e.placeholder,r=e.className,c=u(e,b);return s.createElement(i.d.select,d({},c,{ref:a,className:Object(l.i)("chakra-select",r)}),n&&s.createElement("option",{value:""},n),t)}));l.b&&(f.displayName="SelectField");var j=Object(i.e)((function(e,a){var t=Object(i.g)("Select",e),c=Object(i.f)(e),b=c.rootProps,h=c.placeholder,j=c.icon,p=c.color,O=c.height,g=c.h,k=c.minH,y=c.minHeight,C=c.iconColor,_=c.iconSize;c.isFullWidth;var x=u(c,v),I=Object(l.Q)(x,r.c),E=I[0],R=I[1],N=Object(n.c)(R),P={width:"100%",height:"fit-content",position:"relative",color:p},D=o()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return s.createElement(i.d.div,d({className:"chakra-select__wrapper",__css:P},E,b),s.createElement(f,d({ref:a,height:null!=g?g:O,minH:null!=k?k:y,placeholder:h},N,{__css:D}),e.children),s.createElement(m,d({"data-disabled":Object(l.j)(N.disabled)},(C||p)&&{color:C||p},{__css:t.icon},_&&{fontSize:_}),j))}));l.b&&(j.displayName="Select");var p=function(e){return s.createElement("svg",d({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},O=Object(i.d)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),m=function(e){var a=e.children,t=void 0===a?s.createElement(p,null):a,n=u(e,h),i=s.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(O,d({},n,{className:"chakra-select__icon-wrapper"}),s.isValidElement(t)?i:null)};l.b&&(m.displayName="SelectIcon")},72:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(68),i=t(3),r=t(2),l=t(1);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=["spacing","children"],s=Object(i.e)((function(e,a){var t=Object(i.g)("Switch",e),s=Object(i.f)(e),d=s.spacing,u=void 0===d?"0.5rem":d,b=s.children,v=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(s,o),h=Object(n.a)(v),f=h.state,j=h.getInputProps,p=h.getCheckboxProps,O=h.getRootProps,m=h.getLabelProps,g=l.useMemo((function(){return c({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:"normal"},t.container)}),[t.container]),k=l.useMemo((function(){return c({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},t.track)}),[t.track]),y=l.useMemo((function(){return c({userSelect:"none",marginStart:u},t.label)}),[u,t.label]);return l.createElement(i.d.label,c({},O(),{className:Object(r.i)("chakra-switch",e.className),__css:g}),l.createElement("input",c({className:"chakra-switch__input"},j({},a))),l.createElement(i.d.span,c({},p(),{className:"chakra-switch__track",__css:k}),l.createElement(i.d.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":Object(r.j)(f.isChecked),"data-hover":Object(r.j)(f.isHovered)})),b&&l.createElement(i.d.span,c({className:"chakra-switch__label"},m(),{__css:y}),b))}));r.b&&(s.displayName="Switch")},73:function(e,a,t){"use strict";t.d(a,"a",(function(){return y})),t.d(a,"b",(function(){return O}));var n=t(3),i=t(20),r=t(2),l=t(1),c=t(16),o=t(13),s=t(67),d=t(38);function u(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var v=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];var h=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],f=Object(c.a)({name:"RadioGroupContext",strict:!1}),j=f[0],p=f[1],O=Object(n.e)((function(e,a){var t=e.colorScheme,i=e.size,s=e.variant,d=e.children,f=e.className,p=e.isDisabled,O=e.isFocusable,m=function(e){void 0===e&&(e={});var a=e,t=a.onChange,n=a.value,i=a.defaultValue,s=a.name,d=a.isDisabled,h=a.isFocusable,f=a.isNative,j=u(a,v),p=l.useState(i||""),O=p[0],m=p[1],g=Object(o.d)(n,O),k=g[0],y=g[1],C=l.useRef(null),_=l.useCallback((function(){var e=C.current;if(e){var a="input:not(:disabled):checked",t=e.querySelector(a);if(t)t.focus();else{a="input:not(:disabled)";var n=e.querySelector(a);null==n||n.focus()}}}),[]),x=Object(o.h)(void 0,"radio"),I=s||x,E=l.useCallback((function(e){var a=Object(r.y)(e)?e.target.value:e;k||m(a),null==t||t(String(a))}),[t,k]);return{getRootProps:l.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),b({},e,{ref:Object(c.c)(a,C),role:"radiogroup"})}),[]),getRadioProps:l.useCallback((function(e,a){var t;return void 0===e&&(e={}),void 0===a&&(a=null),b({},e,((t={ref:a,name:I})[f?"checked":"isChecked"]=null!=y?e.value===y:void 0,t.onChange=E,t["data-radiogroup"]=!0,t))}),[f,I,E,y]),name:I,ref:C,focus:_,setValue:m,value:y,onChange:E,isDisabled:d,isFocusable:h,htmlProps:j}}(u(e,h)),g=m.value,k=m.onChange,y=m.getRootProps,C=m.name,_=m.htmlProps,x=l.useMemo((function(){return{name:C,size:i,onChange:k,colorScheme:t,value:g,variant:s,isDisabled:p,isFocusable:O}}),[C,i,k,t,g,s,p,O]),I=y(_,a),E=Object(r.i)("chakra-radio-group",f);return l.createElement(j,{value:x},l.createElement(n.d.div,b({},I,{className:E}),d))}));r.b&&(O.displayName="RadioGroup");var m=["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup"];function g(e){e.preventDefault(),e.stopPropagation()}var k=["spacing","children","isFullWidth","isDisabled","isFocusable"],y=Object(n.e)((function(e,a){var t,c=p(),v=e.onChange,h=e.value,f=Object(n.g)("Radio",b({},c,e)),j=Object(n.f)(e),O=j.spacing,y=void 0===O?"0.5rem":O,C=j.children,_=j.isFullWidth,x=j.isDisabled,I=void 0===x?null==c?void 0:c.isDisabled:x,E=j.isFocusable,R=void 0===E?null==c?void 0:c.isFocusable:E,N=u(j,k),P=e.isChecked;null!=(null==c?void 0:c.value)&&null!=h&&(P=c.value===h);var D=v;null!=c&&c.onChange&&null!=h&&(D=Object(r.f)(c.onChange,v));var F=function(e){void 0===e&&(e={});var a=e,t=a.defaultIsChecked,n=a.defaultChecked,i=void 0===n?t:n,c=a.isChecked,v=a.isFocusable,h=a.isDisabled,f=a.isReadOnly,j=a.isRequired,O=a.onChange,k=a.isInvalid,y=a.name,C=a.value,_=a.id,x=a["data-radiogroup"],I=u(a,m),E=Object(o.h)(void 0,"radio"),R=Object(s.d)(),N=p(),P=!R||N||x?E:R.id;P=null!=_?_:P;var D=null!=h?h:null==R?void 0:R.isDisabled,F=null!=f?f:null==R?void 0:R.isReadOnly,w=null!=j?j:null==R?void 0:R.isRequired,S=null!=k?k:null==R?void 0:R.isInvalid,M=Object(o.b)(),q=M[0],T=M[1],B=Object(o.b)(),L=B[0],H=B[1],z=Object(o.b)(),A=z[0],K=z[1],U=Object(l.useState)(Boolean(i)),W=U[0],V=U[1],G=Object(o.d)(c,W),X=G[0],Z=G[1];Object(r.T)({condition:!!t,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var J=Object(l.useCallback)((function(e){F||D?e.preventDefault():(X||V(e.target.checked),null==O||O(e))}),[X,D,F,O]),Q=Object(l.useCallback)((function(e){" "===e.key&&K.on()}),[K]),Y=Object(l.useCallback)((function(e){" "===e.key&&K.off()}),[K]),$=Object(l.useCallback)((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),b({},e,{ref:a,"data-active":Object(r.j)(A),"data-hover":Object(r.j)(L),"data-disabled":Object(r.j)(D),"data-invalid":Object(r.j)(S),"data-checked":Object(r.j)(Z),"data-focus":Object(r.j)(q),"data-readonly":Object(r.j)(F),"aria-hidden":!0,onMouseDown:Object(r.g)(e.onMouseDown,K.on),onMouseUp:Object(r.g)(e.onMouseUp,K.off),onMouseEnter:Object(r.g)(e.onMouseEnter,H.on),onMouseLeave:Object(r.g)(e.onMouseLeave,H.off)})}),[A,L,D,S,Z,q,F,K.on,K.off,H.on,H.off]),ee=null!=R?R:{},ae=ee.onFocus,te=ee.onBlur,ne=Object(l.useCallback)((function(e,a){void 0===e&&(e={}),void 0===a&&(a=null);var t=D&&!v;return b({},e,{id:P,ref:a,type:"radio",name:y,value:C,onChange:Object(r.g)(e.onChange,J),onBlur:Object(r.g)(te,e.onBlur,T.off),onFocus:Object(r.g)(ae,e.onFocus,T.on),onKeyDown:Object(r.g)(e.onKeyDown,Q),onKeyUp:Object(r.g)(e.onKeyUp,Y),checked:Z,disabled:t,readOnly:F,required:w,"aria-invalid":Object(r.e)(S),"aria-disabled":Object(r.e)(t),"aria-required":Object(r.e)(w),"data-readonly":Object(r.j)(F),style:d.b})}),[D,v,P,y,C,J,te,T,ae,Q,Y,Z,F,w,S]);return{state:{isInvalid:S,isFocused:q,isChecked:Z,isActive:A,isHovered:L,isDisabled:D,isReadOnly:F,isRequired:w},getCheckboxProps:$,getInputProps:ne,getLabelProps:function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),b({},e,{ref:a,onMouseDown:Object(r.g)(e.onMouseDown,g),onTouchStart:Object(r.g)(e.onTouchStart,g),"data-disabled":Object(r.j)(D),"data-checked":Object(r.j)(Z),"data-invalid":Object(r.j)(S)})},getRootProps:function(e,a){return void 0===a&&(a=null),b({},e,{ref:a,"data-disabled":Object(r.j)(D),"data-checked":Object(r.j)(Z),"data-invalid":Object(r.j)(S)})},htmlProps:I}}(b({},N,{isChecked:P,isFocusable:R,isDisabled:I,onChange:D,name:null!=(t=null==e?void 0:e.name)?t:null==c?void 0:c.name})),w=F.getInputProps,S=F.getCheckboxProps,M=F.getLabelProps,q=F.getRootProps,T=F.htmlProps,B=Object(r.Q)(T,i.c),L=B[0],H=S(B[1]),z=w({},a),A=M(),K=Object.assign({},L,q()),U=b({width:_?"full":void 0,display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer"},f.container),W=b({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},f.control),V=b({userSelect:"none",marginStart:y},f.label);return l.createElement(n.d.label,b({className:"chakra-radio"},K,{__css:U}),l.createElement("input",b({className:"chakra-radio__input"},z)),l.createElement(n.d.span,b({className:"chakra-radio__control"},H,{__css:W})),C&&l.createElement(n.d.span,b({className:"chakra-radio__label"},A,{__css:V}),C))}));r.b&&(y.displayName="Radio")}}]);
//# sourceMappingURL=11.6bf0b812.chunk.js.map