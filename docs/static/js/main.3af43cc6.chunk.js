(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/mushroom.7f63adae.png"},14:function(e,t,a){e.exports=a.p+"static/media/bg2.3fec2c14.jpg"},17:function(e,t,a){e.exports=a(36)},22:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),o=(a(22),a(4)),c=a(5),s=a(8),u=a(6),d=a(9),m=a(2),f=a.n(m),p=a(16),v=function(e){var t=e.className,a=e.style;return r.a.createElement("svg",{className:t,style:Object(p.a)({},a),viewBox:"0 0 65 65"},r.a.createElement("g",null,r.a.createElement("path",{d:"m32.5 4.999c-5.405 0-10.444 1.577-14.699 4.282l-5.75-5.75v16.11h16.11l-6.395-6.395c3.18-1.787 6.834-2.82 10.734-2.82 12.171 0 22.073 9.902 22.073 22.074 0 2.899-0.577 5.664-1.599 8.202l4.738 2.762c1.47-3.363 2.288-7.068 2.288-10.964 0-15.164-12.337-27.501-27.5-27.501z"}),r.a.createElement("path",{d:"m43.227 51.746c-3.179 1.786-6.826 2.827-10.726 2.827-12.171 0-22.073-9.902-22.073-22.073 0-2.739 0.524-5.35 1.439-7.771l-4.731-2.851c-1.375 3.271-2.136 6.858-2.136 10.622 0 15.164 12.336 27.5 27.5 27.5 5.406 0 10.434-1.584 14.691-4.289l5.758 5.759v-16.112h-16.111l6.389 6.388z"})))},h="mml",g="ms2mml",x=function(e){if(e&&e.name)return[h,g].filter(function(t){return t===e.name.split(".")[1].toLowerCase()})[0]};var E=function(e){return".".concat(e.toLowerCase(),",.").concat(e.toUpperCase())},w=(E(h),E(g),E(h)+","+E(g)),b=a(7),_=10,N=function(e){var t=e[0].length;return e.index+t},y=function(e){var t,a=[],n=[],r=/\[Channel[0-9]+\]/g;do{(t=r.exec(e))&&a.push(t)}while(t);if(!a||0===a.length)throw Error("Does not contain tracks!");a.push({index:e.lastIndexOf("[3MLE EXTENSION]")});for(var l=0;l<a.length-1;l++)n.push(e.slice(N(a[l]),a[l+1].index).replace(/\s/g,""));return n};function O(e,t,a){for(var n in e)if(e.hasOwnProperty(n)){if(e[n]===t)return e[n]=a,!0;if("object"===typeof e[n]&&null!==e[n]&&O(e[n],t,a))return!0}return!1}var M={attributeNamePrefix:"@_",ignoreAttributes:!1,cdataTagName:"__cdata",cdataPositionChar:"\\c",format:!0,indentBy:"  ",supressEmptyNode:!1};function j(e){return'<?xml version="1.0" encoding="utf-8"?>\n'+function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;return new m.j2xParser(t).parse(e)}(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:M)}var C=a(10),P=a.n(C),S={attributeNamePrefix:"@_",ignoreAttributes:!1,ignoreNameSpace:!1,allowBooleanAttributes:!0,parseNodeValue:!0,parseAttributeValue:!0,trimValues:!0,cdataTagName:"__cdata",cdataPositionChar:"\\c",localeRange:"",parseTrueNumberOnly:!1,attrValueProcessor:function(e){return P.a.decode(e,{isAttributeValue:!0})},tagValueProcessor:function(e){return P.a.decode(e)}};var L=a(15),A="iso-8859-1",k="Untitled",D="Big Buck Bunny",B=function e(t,a){var n={};for(var r in t)if(t.hasOwnProperty(r)){if(t[r]===a)return r;if("object"===typeof t[r]&&null!==t[r]){var l=e(t[r],a);l&&(n[r]=l)}}return n}(b,"#text");function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{encoding:A,title:k,source:D};t.encoding||(t.encoding=A),t.title||(t.title=k),t.source||(t.source=D);for(var a=function e(t,a){var n=[];for(var r in t)if("object"===typeof t[r]&&null!==t[r])n.push.apply(n,Object(L.a)(e(t[r],a[r])));else if("string"===typeof t[r]){var l=a.hasOwnProperty(r)&&a[r].hasOwnProperty(t[r]);l&&n.push(a[r][t[r]].trim())}return n}(B,e),n="",r=0;r<a.length;r++)n+="[Channel".concat(r+1,"]\n").concat(a[r],"\n");return"[Settings]\nEncoding=".concat(t.encoding,"\nTitle=").concat(t.title,"\nSource=").concat(t.source,"\nMemo=\n").concat(n)}a(32);var I,T,V=(I=function(e){return j(function(e){for(var t=JSON.parse(JSON.stringify(b)),a=y(e),n=0;n<_;n++)n<a.length?O(t,"#text",a[n]):O(t,"#text",void 0);return t}(e.target.result))},T=function(e,t){return F(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S;return!0===f.a.validate(e)?f.a.parse(e,t):{}}(e.target.result),{title:t})},function(e){return e===h?I:e===g?T:void 0}),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).uploadFile=function(t){var a=t.target.files[0],n=x(a);if(!n)return e.setState({file:null}),!1;e.setState({changed:!0,file:{name:a.name.split(".")[0],type:n,text:a}})},e.convert=function(t){if(t.preventDefault(),e.state.file){var a=new FileReader,n=e.state.file,r=n.name,l=n.type,i=n.text;a.onload=function(t){var a=V(l)(t,r);e.setState({result:a,changed:!1,download:{url:"data:text/plain;charset=utf-8,"+encodeURIComponent(a),name:r+"."+("mml"===l?"ms2mml":"mml")}})},a.readAsText(i)}else window.alert("Please select a valid MS2MML/3MLE file")},e.state={file:null,result:""},window.parser=f.a,e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.changed,a=e.result,n=e.download,l=this.state.file?"Generate "+("mml"===this.state.file.type?"MS2MML":"3MLE MML"):"Please select a file to upload";return r.a.createElement("form",{className:"Form-div "+this.props.className},r.a.createElement("div",{className:"Form-leftDiv"},r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("label",{className:"label",htmlFor:"file-input"},"Select any MML/MS2MML file")),r.a.createElement("div",null,r.a.createElement("p",{className:"arrowDown"},"\u25bc")),r.a.createElement("div",null,r.a.createElement("input",{name:"file-input",id:"file-input",type:"file",accept:w,onChange:this.uploadFile})),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("button",{className:"label",onClick:this.convert,disabled:!this.state.file},t?r.a.createElement(v,{style:{height:"0.8em",fill:"currentColor",paddingRight:10}}):r.a.createElement("div",null),l)),n?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"arrowDown"},"\u25bc")),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("a",{href:n.url,className:"label",download:n.name,onClick:this.download},"Download"))):r.a.createElement("div",null)),r.a.createElement("div",{className:"Form-rightDiv"},r.a.createElement("h1",null,"Preview"),r.a.createElement("textarea",{className:"Form-textResult",value:a,readOnly:!0})))}}]),t}(n.Component),z=a(13),J=a.n(z),U=a(14),W=a.n(U),G=(a(34),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:J.a,className:"App-logo",style:{zIndex:2},alt:"logo"}),r.a.createElement("img",{src:W.a,className:"App-bg",alt:"bg"}),r.a.createElement("h1",{style:{zIndex:3}},"3MLE to MS2MML converter")),r.a.createElement(R,{className:"App-form"}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={ms2:{melody:{__cdata:"#text"},chord:[{"@_index":"1",__cdata:"#text"},{"@_index":"2",__cdata:"#text"},{"@_index":"3",__cdata:"#text"},{"@_index":"4",__cdata:"#text"},{"@_index":"5",__cdata:"#text"},{"@_index":"6",__cdata:"#text"},{"@_index":"7",__cdata:"#text"},{"@_index":"8",__cdata:"#text"},{"@_index":"9",__cdata:"#text"}]}}}},[[17,2,1]]]);
//# sourceMappingURL=main.3af43cc6.chunk.js.map