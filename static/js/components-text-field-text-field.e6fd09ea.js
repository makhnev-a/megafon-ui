(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/TextField/TextField.less":function(e,a,n){},"./src/components/TextField/TextField.mdx":function(e,a,n){"use strict";n.r(a);var t=n("../../node_modules/react/index.js"),r=n.n(t),o=n("../../node_modules/@mdx-js/tag/dist/index.js"),s=n("../../node_modules/docz/dist/index.m.js"),l=(n("./src/components/TextField/TextField.less"),n("../../node_modules/react-input-mask/index.js")),i=n.n(l),c=n("./src/utils/cn.ts"),p=n("../../node_modules/deep-equal/index.js"),m=n.n(p),d=n("./src/icons/System/24/Checked_24.svg"),u=n("./src/icons/System/24/Cancel_24.svg"),h=n("./src/icons/Basic/24/Hide_24.svg"),f=n("./src/icons/Basic/24/Show_24.svg"),g=n("./src/utils/detectTouch.ts"),E=n("./src/components/InputLabel/InputLabel.tsx");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function y(e,a){return(y=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(){return!!window&&-1!==window.navigator.userAgent.toLowerCase().indexOf("trident/")},N=Object(c.a)("mfui-text-field"),w=function(e){function a(e){var n,t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),t=this,r=(a.__proto__||Object.getPrototypeOf(a)).call(this,e),n=!r||"object"!==b(r)&&"function"!==typeof r?x(t):r,Object.defineProperty(x(n),"isTouch",{configurable:!0,enumerable:!0,writable:!0,value:Object(g.a)()}),Object.defineProperty(x(n),"blur",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.inputNode.blur()}}),Object.defineProperty(x(n),"focus",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.inputNode.focus()}}),Object.defineProperty(x(n),"handleEyeToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.setState(function(e){return{isPasswordHidden:!e.isPasswordHidden}})}}),Object.defineProperty(x(n),"addInputNode",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return n.inputNode=e}}),n.state={isPasswordHidden:!0},n.isIE11=v(),n}var n,r,o;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&y(e,a)}(a,t["Component"]),n=a,(r=[{key:"shouldComponentUpdate",value:function(e,a){return!(m()(this.props,e)&&m()(this.state,a))}},{key:"renderValidIcon",value:function(){return t.createElement("div",{className:N("icon-box")},t.createElement(d.default,{className:N("icon")}))}},{key:"renderErrorIcon",value:function(){return t.createElement("div",{className:N("icon-box")},t.createElement(u.default,{className:N("icon")}))}},{key:"renderCustomIcon",value:function(){var e=this.props,a=e.customIcon,n=e.onCustomIconClick;return t.createElement("div",{className:N("icon-box",{custom:!!a}),onClick:n},a)}},{key:"renderPasswordFieldIcon",value:function(){var e=this.state.isPasswordHidden;return t.createElement("div",{className:N("icon-box",{password:!0}),onClick:this.handleEyeToggle},e?t.createElement(h.default,{className:N("icon")}):t.createElement(f.default,{className:N("icon")}))}},{key:"renderInputElem",value:function(e){var a=this.state.isPasswordHidden,n={disabled:this.props.disabled,name:this.props.name,id:this.props.id,placeholder:this.props.placeholder,onChange:this.props.onChange,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onKeyUp:this.props.onKeyUp,autoFocus:this.props.autoFocus,defaultValue:this.props.defaultValue,maxLength:this.props.maxLength,value:this.props.value,type:e&&!a?"text":this.props.type,required:this.props.required,autoComplete:this.props.autocomplete,className:N("field",{"big-space":this.props.bigSpace})},r=null;return!this.props.value&&n.placeholder&&this.isIE11&&(n.placeholder="",r=t.createElement("span",{className:N("placeholder")},this.props.placeholder)),this.props.mask?t.createElement(t.Fragment,null,r,t.createElement(i.a,Object.assign({},n,{inputRef:this.addInputNode,mask:this.props.mask,maskChar:this.props.maskChar}))):t.createElement(t.Fragment,null,r,t.createElement("input",Object.assign({ref:this.addInputNode},n)))}},{key:"render",value:function(){var e=this.props,a=e.isHideIcon,n=e.customIcon,r=e.error,o=e.color,s=e.valid,l=e.disabled,i=e.size,c=e.className,p=e.commentText,m=e.successText,d=e.noticeText,u=e.type,h=e.label,f=e.id,g=!a&&(!!n||r||s),b=!a&&!n,T="password"===u;return t.createElement("div",{className:N("",{valid:s,error:r,icon:g,password:T,disabled:l,color:o,size:i},c)},h&&t.createElement(E.a,{htmlFor:f},h),t.createElement("div",{className:N("field-wrapper",{"no-touch":!this.isTouch})},t.createElement("div",null,this.renderInputElem(T)),n&&this.renderCustomIcon(),b&&s&&this.renderValidIcon(),b&&r&&this.renderErrorIcon(),T&&this.renderPasswordFieldIcon()),(r||s)&&d&&t.createElement("div",{className:N("text",{error:!0}),dangerouslySetInnerHTML:{__html:d}}),p&&t.createElement("div",{className:N("text",{comment:!0})},p),m&&t.createElement("div",{className:N("text",{success:!0})},m))}}])&&T(n.prototype,r),o&&T(n,o),a}();Object.defineProperty(w,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{autocomplete:"off",type:"text",color:"default",isHideIcon:!1}});var _=w;try{w.displayName="TextField",w.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"Field title",name:"label",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"default"},description:"Field color scheme",name:"color",required:!1,type:{name:'"default" | "white"'}},size:{defaultValue:null,description:"Field size",name:"size",required:!1,type:{name:'"large"'}},noticeText:{defaultValue:null,description:"Error/Notice text",name:"noticeText",required:!1,type:{name:"string"}},commentText:{defaultValue:null,description:"Comment text",name:"commentText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"Success text",name:"successText",required:!1,type:{name:"string"}},isHideIcon:{defaultValue:{value:"false"},description:"Not show icon of state",name:"isHideIcon",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Autofocus",name:"autoFocus",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"off"},description:"Autocomplete",name:"autocomplete",required:!1,type:{name:'"on" | "off"'}},valid:{defaultValue:null,description:"Validation passed",name:"valid",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Validation error",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable field",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Required field",name:"required",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"Type - property tag <input>",name:"type",required:!1,type:{name:'"text" | "password" | "tel" | "email"'}},name:{defaultValue:null,description:"Field name",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Placeholder",name:"placeholder",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attribute",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field value",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"Max length",name:"maxLength",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"Default value",name:"defaultValue",required:!1,type:{name:"string"}},customIcon:{defaultValue:null,description:"Custom icon",name:"customIcon",required:!1,type:{name:"Element"}},mask:{defaultValue:null,description:"Mask",name:"mask",required:!1,type:{name:"string"}},maskChar:{defaultValue:null,description:"Split symbol for mask",name:"maskChar",required:!1,type:{name:"string"}},bigSpace:{defaultValue:null,description:"Increased size of space between words in the text box",name:"bigSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom classname",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onBlur:{defaultValue:null,description:"Blur handler",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onFocus:{defaultValue:null,description:"Focus handler",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onKeyUp:{defaultValue:null,description:"KeyUp handler",name:"onKeyUp",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onCustomIconClick:{defaultValue:null,description:"Custom icon click handler",name:"onCustomIconClick",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:w.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(e){}function M(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(a,"wrapper",function(){return D});var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;return function(a){var n=a.children;return r.a.createElement("div",{style:{width:"".concat(e,"px")}},n)}};a.default=function(e){var a=e.components;M(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"textfield"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#textfield"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"TextField"),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"properties"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),r.a.createElement(s.e,{of:_}),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"api"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#api"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"API"),r.a.createElement(o.MDXTag,{name:"table",components:a},r.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Method"),r.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"blur"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Trigger blur event on input field.")),r.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"focus"),r.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Trigger focus event on input field.")))),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"p"},"Use TextField's 'ref' prop for API methods call:")),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre"},"class SearchForm extends Component {\n    this.textField = undefined;\n\n    handleSubmit() {\n        textField.blur();\n    }\n\n    render() {\n        return (\n            <Form onSubmit={this.handleSubmit}>\n                <TextField ref={(instance) => { this.textField = instance; }} />\n            </Form>\n        );\n    }\n}\n")),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"basic-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),r.a.createElement(s.d,{__position:1,__code:'<TextField name="name" />',wrapper:D()},r.a.createElement(_,{name:"name"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"mask-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#mask-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Mask usage"),r.a.createElement(s.d,{__position:2,__code:'<TextField\n  placeholder="+7 (999) 999-99-99"\n  mask="+7 (999) 999-99-99"\n  maskChar="_"\n  label="Phone number"\n  id="2"\n/>',wrapper:D()},r.a.createElement(_,{placeholder:"+7 (999) 999-99-99",mask:"+7 (999) 999-99-99",maskChar:"_",label:"Phone number",id:"2"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"error-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#error-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Error usage"),r.a.createElement(s.d,{__position:3,__code:'<TextField error={true} noticeText="Name is required" />',wrapper:D()},r.a.createElement(_,{error:!0,noticeText:"Name is required"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"valid-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#valid-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Valid usage"),r.a.createElement(s.d,{__position:4,__code:"<TextField valid={true} />",wrapper:D()},r.a.createElement(_,{valid:!0})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"comment-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#comment-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Comment usage"),r.a.createElement(s.d,{__position:5,__code:'<TextField commentText="Comment" />',wrapper:D()},r.a.createElement(_,{commentText:"Comment"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"success-text-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#success-text-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Success text usage"),r.a.createElement(s.d,{__position:6,__code:'<TextField successText="Field is correct" />',wrapper:D()},r.a.createElement(_,{successText:"Field is correct"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"max-length-text-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#max-length-text-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Max length text usage"),r.a.createElement(s.d,{__position:7,__code:"<TextField maxLength={10} />",wrapper:D()},r.a.createElement(_,{maxLength:10})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"disable-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#disable-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Disable usage"),r.a.createElement(s.d,{__position:8,__code:"<TextField disabled={true} />",wrapper:D()},r.a.createElement(_,{disabled:!0})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"password-type-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#password-type-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Password type usage"),r.a.createElement(s.d,{__position:9,__code:'<TextField name="name" placeholder="password" type="password" />',wrapper:D()},r.a.createElement(_,{name:"name",placeholder:"password",type:"password"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"increased-size-of-space-between-words-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#increased-size-of-space-between-words-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Increased size of space between words usage"),r.a.createElement(s.d,{__position:10,__code:"<TextField bigSpace={true} />",wrapper:D()},r.a.createElement(_,{bigSpace:!0})))}}}]);