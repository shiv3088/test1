/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
;
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
var GETQUOTEEVENT = 'getquote';
var $gq,$vehicles,vehicle,$allcars,langprefix='',processing = false;
var citiesHidden = false;
var fac_destination;
$(function(){
  langprefix = (Drupal.settings.language!='en')?Drupal.settings.language+'/':'';
  langprefix = '';
  // find  a car 
  var root_tmpl = '<div class="root {0}"><button>{1}</button><nav>{2}</nav></div>';
  var item_tmpl = '<input type=radio name="{1}" value="{2}" id="input-{2}" {4}><label for="input-{2}">{3}</label><span></span>'; // {4} - checked
  var country_item_tmpl = '<input type=radio name="{1}" value="{2}" data-code="{0}" id="country-{0}" class="{0}" {4}><label class="{0}" for="country-{0}">{3}</label><span></span>';// {4} - checked
  var t1 = '<legend class=cateogry>' + fac_categories[2][0] + '</legend><fieldset class=category>';
  $.each(fac_categories[2].children, function(c) {
    if (c=='title') return;
    t1 += item_tmpl.format('term-'+this[1], 'category', this[1], this[0], this[1]==Drupal.settings.elch.defaultterm ? 'checked' : '');
  });
  //t1 += item_tmpl.format('', 'category', fac_categories[0][1], fac_categories[0][0]);
  t1 += '</fieldset><legend class="brand">' + fac_categories[1][0] + '</legend><fieldset class="brand">';
  $.each(fac_categories[1].children, function(c) {
    if (c=='title') return;
    t1 += item_tmpl.format('', 'category', this[1], this[0]);
  });
  //t1 += item_tmpl.format('', 'category', fac_categories[0][1], fac_categories[0][0]);
  t1 += '</fieldset>';
  var $categories = root_tmpl.format('categories', fac_categories.title, t1);

  var $cities = root_tmpl.format('cities', Drupal.t('All locations'), '');

  t1 = '';
  var all_countries_title = fac_countries.pop();
  $.each(fac_countries, function(c) {
    t1 += country_item_tmpl.format(this[2],'country', this[1], this[0], this[1]==Drupal.settings.elch.defaultcountry ? 'checked' : '');
  });
  var $countries = root_tmpl.format('countries', all_countries_title, t1);

  $('#block-elchm-findacar .content').prepend($countries, $cities,$categories, $('<b class=close>close</b>').click(function(){ 
    $('body').trigger('click', ['close x']); 
  }) );


  //$('#block-elchm-findacar').on('mousedown', 'label', function(e) { setTimeout(function() { $('#block-elchm-findacar button').trigger('blur'); },200);e.preventDefault(); }); // prevent button:blur before input selected
  $('#block-elchm-findacar').on('click', 'label', function(e, init) {
    if (init) { //init set of locations
    } else {
      $('body').addClass('facchanged');
      eve('fac', 'click value', this.innerText);
    }
    $(this).parents('.root').find('label.active').removeClass('active');
    $(this).addClass('active');
    var $h3 = $(this).parents('.root').find('button');
    $h3.text($(this).text());

    if (!init && $(this).parents('.root').hasClass('cities')) { // activate categories tab
      $('#block-elchm-findacar .categories button').click();
      $('#block-elchm-findacar .categories legend:first').click();
    }
      
    if ($(this).parents('.root').hasClass('countries')) { // rebuild cities select here
      if ($('body')[0].className.match(/fac-country/)) {
        var bclassname = $('body')[0].className.replace(/fac-country-\S+/,'fac-country-' + this.className);
        $('body')[0].className = bclassname;
      } else {
        var _class = 'fac-country-' + this.className;
        $('body').addClass(_class);
      }

      var nid = $(this).prev().val();
      var country = $.grep(fac_countries, function(c, i) {
        return nid==c[1];
      })[0];
      var objects = {};
      $.each(country.cities, function(i, c) {
        if (i==0) return ;
        if (!objects[c[2]]) objects[c[2]] = []; 
        objects[c[2]].push(c); });
      var ci = '';
      $.each(objects, function(i, c) {
        ci += '<legend class="' + i + '">' + i + '</legend><fieldset class="' + i + '">';
        ci += $.map(this, function(c, i) {
          return item_tmpl.format(c[2], 'city', c[1], c[0], c[1]==Drupal.settings.elch.defaultcity ? 'checked' : '');
        }).join('');
        ci += '</fieldset>';
      });
      var cities = root_tmpl.format('cities', country.cities[0], ci);
      $('#block-elchm-findacar .cities').replaceWith(cities);

      if (country.cities.length>1) { // not a europe
        if (e.data && e.data['task']=='init') { // select default country
          $( '#block-elchm-findacar input[value=' + Drupal.settings.elch.defaultcity + ']').next().click({task:'init'}); 
        } else {
          $('#block-elchm-findacar .cities button').click();
          $('#block-elchm-findacar .cities legend:first').click();
        }
      } else { // if europe - open categories
        $('#block-elchm-findacar .categories button').click();
        $('#block-elchm-findacar .categories legend:first').click();
      }
    }
    if ($(this).closest('.categories').length>0) { // close categories tab on mobile after selet
      $('html.mobile .categories button.active').removeClass('active');
    }

    if (!init) { 
      var data = {
        country: $('#block-elchm-findacar .countries label.active').prev().val(),
        city: $('#block-elchm-findacar .cities  label.active').prev().val(),
        category: $('#block-elchm-findacar .categories  label.active').prev().val(),
        language: Drupal.settings.language
      };
      $.getJSON(Drupal.settings.basePath + langprefix + 'find-car-destination', data ,function(dataJSON){
        fac_destination = dataJSON.url;
        $('head').append('<link rel="prefetch" href="' + location.origin + langprefix + fac_destination + '">');
      });
    }
  });
  $('[for=input-' + Drupal.settings.elch.defaultterm + ']').trigger('click','init');
  $('[value=' + Drupal.settings.elch.defaultcountry + '] + label').trigger('click','init');
  setTimeout(function() { $('[for=input-' + Drupal.settings.elch.defaultcity + ']').trigger('click','init'); }, 300);

  $('#block-elchm-findacar .countries label').hover(function() { $('body').toggleClass('fac-' + this.className); });
  $('#block-elchm-findacar').on('click', 'legend', function(e, init) { 
    if (e.originalEvent) {
      eve('fac', 'select sub section', this.innerText);
    }
    $(this).parents('nav').find('legend').removeClass('active'); 
    $(this).addClass('active'); 
  });
  $('#block-elchm-findacar h2').click(function() { $('#block-elchm-findacar .countries button').trigger('click') });
  $('#block-elchm-findacar').on('click', 'button', function(e) { 
    $('#block-elchm-findacar legend').removeClass('active');
    $(this).parents('.content').find('button').not(this).removeClass('active'); 
    $(this).toggleClass('active');

    if ($('#block-elchm-findacar button.active').length>0) {
      eve('fac','tab open', $('#block-elchm-findacar button.active').parent()[0].className.replace('root ',''),$('#block-elchm-findacar button').index(this));
      $('body').removeClass('root-cities root-countries root-categories').addClass('fac').addClass($(this).parent('.root')[0].className.replace(' ','-'));
      setTimeout(function() {
        if ($('html').hasClass('mobile')) return;
        var scroll = $('.blackbar').position().top + 317 - window.scrollY - $(window).height();
        if (scroll>0) {
          $('body,html').animate({scrollTop: '+=' + parseInt(scroll+3)}, 500);
        }
      }, 300);
      if ($(this).parent().hasClass('cities')) {
        if ($(this).next().children().length==0) $('.countries button').click();// open countries if no country selected
        var selectedcity = $('.cities input:checked'); 
        if (selectedcity.length>0) {
          selectedcity.parents('fieldset').prev().click();
        } else {
          $('.cities legend:eq(0)').click();
        }
      }
      if ($(this).parent().hasClass('categories')) {
        var selectedcategory = $('.categories input:checked'); 
        if (selectedcategory.length>0) {
          selectedcategory.parents('fieldset').prev('legend').click();
        } else {
          $('.categories legend.brand').click();
        }
      }
    } else {
      eve('fac','tab close', $(this).parent()[0].className.replace('root ',''));
      $('body').removeClass('fac');
    }
  });

  setInterval(function() {
    // show or hide black find a car background
    if ($('#block-elchm-findacar button.active').length>0) $('body').addClass('fac');
    else $('body').removeClass('fac');
  },300);
  $('body').on('click', function(e,where) {
    if ($(e.target).parents('#block-elchm-findacar').length>0 || !$('body').hasClass('fac')) return;
    $('#block-elchm-findacar button').removeClass('active');
    $('body').removeClass('fac');
    eve('fac', 'close', where ? where : 'body');
  });

  $('#block-elchm-findacar span.search').click(function(){
    eve('fac', 'search', fac_destination, $('#block-elchm-findacar button').index($('#block-elchm-findacar button.active')));// value is an active tab number
    if (!fac_destination) {
      $('#block-elchm-findacar .countries button').click();
      return;
    }
    $(this).addClass('click');
    $('#block-elchm-findacar').addClass('wait');
    Cookies.set('facused',1,{expires: 60});
    document.location.href = fac_destination;
  });
  //GET A QUOTE
  var $gq;
  $.get(Drupal.settings.basePath + langprefix + Drupal.settings.elch.getquoteurl + '/form', {defaultcountry: Drupal.settings.elch.defaultcountry, defaultcity: Drupal.settings.elch.defaultcity, term: Drupal.settings.elch.defaultterm}, function(html){
    $('body').append(html);
  }, 'html');




  if (document.referrer.match(/google\./gi) && document.referrer.match(/cd/gi)) {
    var myString = document.referrer;
    var r        = myString.match(/cd=(.*?)&/);
    var rank     = r ? parseInt(r[1]) : 0;
    var kw       = myString.match(/q=(.*?)&/);

    if (kw && kw[1].length > 0) {
      var keyWord  = decodeURI(kw[1]);
    } else {
      keyWord = "(not provided)";
    }

    var p = document.location.pathname; 
    eve('RankTracker', keyWord, p, rank); 
  }
});
Drupal.elchm = Drupal.elchm || {};
function scrollGo($t) {
   var x = $t.offset().top - 100; // 100 provides buffer in viewport
   $('html,body').animate({scrollTop: x}, 500);
}

function validateemail(email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(email) == false) {
      return false;
   } else {
     return true;
   }
}

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
      ? args[number]
      : match
      ;
    });
  };
}
function eve(category,action,label,value) {
  var label = label ? label : '';
  var value = typeof value!='undefined' ? value : timer.time;
  ga('send', 'event', category, action, label, value, {nonInteraction: true});
  //console.log('send', 'event', category, action, label, value, {nonInteraction: true});
}
var timer = {start: new Date().getTime()}
try {
  Object.defineProperty(timer, 'time', {
    get: function() {
      return parseInt((new Date().getTime()-this.start)/1000);
    },
    set: function(newtime) {
      this.start = new Date().getTime();
    },
    configurable: true,
    enumerable: true});
} catch (ex) {
  timer.time = 0;
}
;
function css_browser_selector(u) {
  var ua = u.toLowerCase(),
  is = function(t) {
    return ua.indexOf(t) > -1
  },
  getVsersion = function(){
    t = ua.split(' ');
    t.pop();
    v = parseInt(t.pop().split('/')[1]);
    return v;
  }
  g = 'gecko',
  w = 'webkit',
  s = 'safari',
  o = 'opera',
  m = 'mobile',
  h = document.documentElement,
  b = [
    (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1)
    : is('firefox/2') ? g + ' ff2'
    : is('firefox/3.5') ? g + ' ff3 ff3_5'
    : is('firefox/3.6') ? g + ' ff3 ff3_6'
    : is('firefox/3') ? g + ' ff3'
    : is('gecko/') ? g
    : is('opera') ? o + (
      /version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1
      : (
        /opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2
        : ''
      )
    )
    : is('konqueror') ? 'konqueror'
    : is('blackberry') ? m + ' blackberry'
    : is('android') ? ' android'
    : is('chrome') ? w + ' chrome'
    : is('iron') ? w + ' iron'
    : is('applewebkit/') ? w + ' ' + s + (
      /version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1
      : ''
    )
    : is('mozilla/') ? g
    : '',
    is('j2me') ? m + ' j2me'
    : is('iphone') ? m + ' iphone'
    : is('ipod') ? m + ' ipod'
    : is('ipad') ? ' ipad'
    : is('mac') ? 'mac'
    : is('darwin') ? 'mac'
    : is('webtv') ? 'webtv'
    : is('win') ? 'win' + (
      is('windows nt 6.0') ? ' vista'
      : ''
    )
    : is('freebsd') ? 'freebsd'
    : (is('x11') || is('linux')) ? 'linux'
    : '',
    'js',
    'ver'+getVsersion()
  ];
  if (window.screen.width<650) b.push('mobile');
  c = b.join(' ');
  
  h.className += ' ' + c;
  return c;
};
css_browser_selector(navigator.userAgent);
;
DateInput = (function($) { // Localise the $ function

function DateInput(el, opts) {
  if (typeof(opts) != "object") opts = {};
  $.extend(this, DateInput.DEFAULT_OPTS, opts);
  
  this.input = $(el);
  this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate");
  
  this.build();
  this.selectDate();
  this.hide();
};
DateInput.DEFAULT_OPTS = {
  month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  short_month_names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  short_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  start_of_week: 1
};
DateInput.prototype = {
  build: function() {
    var monthNav = $('<p class="month_nav">' +
      '<span class="button prev" title="[Page-Up]">&#171;</span>' +
      ' <span class="month_name"></span> ' +
      '<span class="button next" title="[Page-Down]">&#187;</span>' +
      '</p>');
    this.monthNameSpan = $(".month_name", monthNav);
    $(".prev", monthNav).click(this.bindToObj(function() { this.moveMonthBy(-1); }));
    $(".next", monthNav).click(this.bindToObj(function() { this.moveMonthBy(1); }));
    
    var yearNav = $('<p class="year_nav">' +
      '<span class="button prev" title="[Ctrl+Page-Up]">&#171;</span>' +
      ' <span class="year_name"></span> ' +
      '<span class="button next" title="[Ctrl+Page-Down]">&#187;</span>' +
      '</p>');
    this.yearNameSpan = $(".year_name", yearNav);
    $(".prev", yearNav).click(this.bindToObj(function() { this.moveMonthBy(-12); }));
    $(".next", yearNav).click(this.bindToObj(function() { this.moveMonthBy(12); }));
    
    var nav = $('<div class="nav"></div>').append(monthNav, yearNav);
    
    var tableShell = "<table><thead><tr>";
    $(this.adjustDays(this.short_day_names)).each(function() {
      tableShell += "<th>" + this + "</th>";
    });
    tableShell += "</tr></thead><tbody></tbody></table>";
    
    this.dateSelector = this.rootLayers = $('<div class="date_selector"></div>').append(nav, tableShell).insertAfter(this.input);
    
    if ($.browser.msie && $.browser.version < 7) {
      // The ieframe is a hack which works around an IE <= 6 bug where absolutely positioned elements
      // appear behind select boxes. Putting an iframe over the top of the select box prevents this.
      this.ieframe = $('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector);
      this.rootLayers = this.rootLayers.add(this.ieframe);
      
      // IE 6 only does :hover on A elements
      $(".button", nav).mouseover(function() { $(this).addClass("hover") });
      $(".button", nav).mouseout(function() { $(this).removeClass("hover") });
    };
    
    this.tbody = $("tbody", this.dateSelector);
    
    this.input.bind('change',this.bindToObj(function() { this.selectDate(); }));
    this.selectDate();
  },

  selectMonth: function(date) {
    var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    
    if (!this.currentMonth || !(this.currentMonth.getFullYear() == newMonth.getFullYear() &&
                                this.currentMonth.getMonth() == newMonth.getMonth())) {
      // We have moved to a different month and so need to re-draw the table
      this.currentMonth = newMonth;
      
      // Work out the range of days we will draw
      var rangeStart = this.rangeStart(date), rangeEnd = this.rangeEnd(date);
      var numDays = this.daysBetween(rangeStart, rangeEnd);
      var dayCells = "";
      
      // Draw each of the days
      for (var i = 0; i <= numDays; i++) {
        var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i, 12, 00);
        
        if (this.isFirstDayOfWeek(currentDay)) dayCells += "<tr>";
        
        if (currentDay.getMonth() == date.getMonth()) {
          dayCells += '<td class="selectable_day" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
        } else {
          dayCells += '<td class="unselected_month" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
        };
        
        if (this.isLastDayOfWeek(currentDay)) dayCells += "</tr>";
      };
      this.tbody.empty().append(dayCells);
      
      // Write the month and year in the header
      this.monthNameSpan.empty().append(this.monthName(date));
      this.yearNameSpan.empty().append(this.currentMonth.getFullYear());
      
      $(".selectable_day", this.tbody).click(this.bindToObj(function(event) {
        this.changeInput($(event.target).attr("date"));
      }));
      
      $("td[date=" + this.dateToString(new Date()) + "]", this.tbody).addClass("today");
      
      $("td.selectable_day", this.tbody).mouseover(function() { $(this).addClass("hover") });
      $("td.selectable_day", this.tbody).mouseout(function() { $(this).removeClass("hover") });
    };
    
    $('.selected', this.tbody).removeClass("selected");
    $('td[date=' + this.selectedDateString + ']', this.tbody).addClass("selected");
  },
  
  // Select a particular date. If the date is not specified it is read from the input. If no date is
  // found then the current date is selected. The selectMonth() function is responsible for actually
  // selecting a particular date.
  selectDate: function(date) {
    if (typeof(date) == "undefined") {
      date = this.stringToDate(this.input.val());
    };
    if (!date) date = new Date();
    
    this.selectedDate = date;
    this.selectedDateString = this.dateToString(this.selectedDate);
    this.selectMonth(this.selectedDate);
  },
  
  // Write a date string to the input and hide. Trigger the change event so we know to update the
  // selectedDate.
  changeInput: function(dateString) {
    this.input.val(dateString).change();
    this.hide();
  },
  
  show: function() {
    this.input.attr('disabled','true');
    this.rootLayers.css("display", "block");
    $([window, document.body]).click(this.hideIfClickOutside);
    this.input.unbind("focus", this.show);
    $(document.body).keydown(this.keydownHandler);
    this.setPosition();
  },
  
  hide: function() {
    this.input.attr('disabled',null);
    this.rootLayers.css("display", "none");
    $([window, document.body]).unbind("click", this.hideIfClickOutside);
    this.input.focus(this.show);
    $(document.body).unbind("keydown", this.keydownHandler);
  },
  
  // We should hide the date selector if a click event happens outside of it
  hideIfClickOutside: function(event) {
    if (event.clientX && event.target != this.input[0] && !this.insideSelector(event)) {
      this.hide();
    };
  },
  
  // Returns true if the given event occurred inside the date selector
  insideSelector: function(event) {
    var offset = this.dateSelector.position();
    var formOffset = this.input.parents('form').offset();
    offset.top += formOffset.top;
    offset.left += formOffset.left;
    offset.right = offset.left + this.dateSelector.outerWidth();
    offset.bottom = offset.top + this.dateSelector.outerHeight();
    return event.pageY < offset.bottom &&
           event.pageY > offset.top &&
           event.pageX < offset.right &&
           event.pageX > offset.left;
  },
  
  // Respond to various different keyboard events
  keydownHandler: function(event) {
    switch (event.keyCode)
    {
      case 9: // tab
      case 27: // esc
        this.hide();
        return;
      break;
      case 13: // enter

        this.changeInput(this.selectedDateString);
      break;
      case 33: // page up
        this.moveDateMonthBy(event.ctrlKey ? -12 : -1);
      break;
      case 34: // page down
        this.moveDateMonthBy(event.ctrlKey ? 12 : 1);
      break;
      case 38: // up
        this.moveDateBy(-7);
      break;
      case 40: // down
        this.moveDateBy(7);
      break;
      case 37: // left
        this.moveDateBy(-1);
      break;
      case 39: // right
        this.moveDateBy(1);
      break;
      default:
        return;
    }
    event.preventDefault();
  },
  
  stringToDate: function(string) {
    var matches;
    if (matches = string.match(/^(\d{1,2}) ([^\s]+) (\d{4,4})$/)) {
      return new Date(matches[3], this.shortMonthNum(matches[2]), matches[1], 12, 00);
    } else {
      return null;
    };
  },
  
  dateToString: function(date) {
    return date.getDate() + " " + this.short_month_names[date.getMonth()] + " " + date.getFullYear();
  },
  
  setPosition: function() {
    var offset = this.input.offset();
    var formOffset = this.input.parents('form').offset();
    this.rootLayers.css({
      top: offset.top + this.input.outerHeight() - formOffset.top,
      left: offset.left - formOffset.left
    });

    if (this.ieframe) {
      this.ieframe.css({
        width: this.dateSelector.outerWidth(),
        height: this.dateSelector.outerHeight()
      });
    };
  },
  
  // Move the currently selected date by a particular number of days
  moveDateBy: function(amount) {
    var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate() + amount);
    this.selectDate(newDate);
  },
  
  // Move the month of the currently selected date by a particular number of months. If we are moving
  // to a month which does not have enough days to represent the current day-of-month, then we 
  // default to the last day of the month.
  moveDateMonthBy: function(amount) {
    var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + amount, this.selectedDate.getDate());
    if (newDate.getMonth() == this.selectedDate.getMonth() + amount + 1) {
      // We have moved too far. For instance 31st March + 1 month = 1st May, not 30th April
      newDate.setDate(0);
    };
    this.selectDate(newDate);
  },
  
  // Move the currently displayed month by a certain amount. This does *not* move the currently
  // selected date, so we end up viewing a month with no visibly selected date.
  moveMonthBy: function(amount) {
    var newMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + amount, this.currentMonth.getDate());
    this.selectMonth(newMonth);
  },
  
  monthName: function(date) {
    return this.month_names[date.getMonth()];
  },
  
  // A hack to make "this" refer to this object instance when inside the given function
  bindToObj: function(fn) {
    var self = this;
    return function() { return fn.apply(self, arguments) };
  },
  
  // See above
  bindMethodsToObj: function() {
    for (var i = 0; i < arguments.length; i++) {
      this[arguments[i]] = this.bindToObj(this[arguments[i]]);
    };
  },
  
  // Finds out the array index of a particular value in that array
  indexFor: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value == array[i]) return i;
    };
  },
  
  // Finds the number of a given month name
  monthNum: function(month_name) {
    return this.indexFor(this.month_names, month_name);
  },
  
  // Finds the number of a given short month name
  shortMonthNum: function(month_name) {
    return this.indexFor(this.short_month_names, month_name);
  },
  
  // Finds the number of a given day name
  shortDayNum: function(day_name) {
    return this.indexFor(this.short_day_names, day_name);
  },
  
  // Works out the number of days between two dates
  daysBetween: function(start, end) {
    start = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    end = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    return (end - start) / 86400000;
  },
  
  /*
  changeDayTo: Given a date, move along the date line in the given direction until we reach the
  desired day of week.
  
  The maths is a bit complex, here's an explanation.
  
  Think of a continuous repeating number line like:
  
  .. 5 6 0 1 2 3 4 5 6 0 1 2 3 4 5 6 0 1 ..
  
  We are essentially trying to find the difference between two numbers
  on the line in one direction (dictated by the sign of direction variable).
  Unfortunately Javascript's modulo operator works such that -5 % 7 = -5,
  instead of -5 % 7 = 2, so we need to only work with the positives.
  
  To find the difference between 1 and 4, going backwards, we can treat 1
  as (1 + 7) = 8, so the different is |8 - 4| = 4. If we don't cross the 
  boundary between 0 and 6, for instance to find the backwards difference
  between 5 and 2, |(5 + 7) - 2| = |12 - 2| = 10. And 10 % 7 = 3.
  
  Going forwards, to find the difference between 4 and 1, we again treat 1
  as (1 + 7) = 8, and the difference is |4 - 8| = 4. If we don't cross the
  boundary, the difference between 2 and 5 is |2 - (5 + 7)| = |2 - 12| = 10.
  And 10 % 7 = 3.
  
  Once we have the positive difference in either direction represented as a
  absolute value, we can multiply it by the direction variable to get the difference
  in the desired direction.
  
  We can condense the two methods into a single equation:
  
    backwardsDifference = direction * (|(currentDayNum + 7) - dayOfWeek| % 7)
                        = direction * (|currentDayNum - dayOfWeek + 7|  % 7)
    
     forwardsDifference = direction * (|currentDayNum - (dayOfWeek + 7)| % 7)
                        = direction * (|currentDayNum - dayOfWeek - 7| % 7)
    
    (The two equations now differ only by the +/- 7)
    
             difference = direction * (|currentDayNum - dayOfWeek - (direction * 7)| % 7)
  */
  changeDayTo: function(dayOfWeek, date, direction) {
    var difference = direction * (Math.abs(date.getDay() - dayOfWeek - (direction * 7)) % 7);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + difference);
  },
  
  // Given a date, return the day at the start of the week *before* this month
  rangeStart: function(date) {
    return this.changeDayTo(this.start_of_week, new Date(date.getFullYear(), date.getMonth()), -1);
  },
  
  // Given a date, return the day at the end of the week *after* this month
  rangeEnd: function(date) {
    return this.changeDayTo((this.start_of_week - 1) % 7, new Date(date.getFullYear(), date.getMonth() + 1, 0), 1);
  },
  
  // Is the given date the first day of the week?
  isFirstDayOfWeek: function(date) {
    return date.getDay() == this.start_of_week;
  },
  
  // Is the given date the last day of the week?
  isLastDayOfWeek: function(date) {
    return date.getDay() == (this.start_of_week - 1) % 7;
  },
  
  // Adjust a given array of day names to begin with the configured start-of-week
  adjustDays: function(days) {
    var newDays = [];
    for (var i = 0; i < days.length; i++) {
      newDays[i] = days[(i + this.start_of_week) % 7];
    };
    return newDays;
  }
};

$.fn.date_input = function(opts) {
  return this.each(function() { new DateInput(this, opts); });
};
$.date_input = { initialize: function(opts) {
  $("input.date_input").date_input(opts);
} };

return DateInput;
})(jQuery); // End localisation of the $ function
;
/*
 * jScrollPane - v2.0.0beta11 - 2011-04-21
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(f){function d(E,P){var aA,R=this,Z,al,w,an,U,aa,z,r,aB,aG,aw,j,J,i,k,ab,V,ar,Y,u,B,at,ag,ao,H,m,av,az,y,ax,aJ,g,M,ak=true,Q=true,aI=false,l=false,aq=E.clone(false,false).empty(),ad=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aJ=E.css("paddingTop")+" "+E.css("paddingRight")+" "+E.css("paddingBottom")+" "+E.css("paddingLeft");g=(parseInt(E.css("paddingLeft"),10)||0)+(parseInt(E.css("paddingRight"),10)||0);function au(aS){var aN,aP,aO,aL,aK,aR,aQ=false,aM=false;aA=aS;if(Z===c){aK=E.scrollTop();aR=E.scrollLeft();E.css({overflow:"hidden",padding:0});al=E.innerWidth()+g;w=E.innerHeight();E.width(al);Z=b('<div class="jspPane" />').css("padding",aJ).append(E.children());an=b('<div class="jspContainer" />').css({width:al+"px",height:w+"px"}).append(Z).appendTo(E)}else{E.css("width","");aQ=aA.stickToBottom&&L();aM=aA.stickToRight&&C();aL=E.innerWidth()+g!=al||E.outerHeight()!=w;if(aL){al=E.innerWidth()+g;w=E.innerHeight();an.css({width:al+"px",height:w+"px"})}if(!aL&&M==U&&Z.outerHeight()==aa){E.width(al);return}M=U;Z.css("width","");E.width(al);an.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Z.css("overflow","auto");if(aS.contentWidth){U=aS.contentWidth}else{U=Z[0].scrollWidth}aa=Z[0].scrollHeight;Z.css("overflow","");z=U/al;r=aa/w;aB=r>1;aG=z>1;if(!(aG||aB)){E.removeClass("jspScrollable");Z.css({top:0,width:an.width()-g});o();F();S();x();aj()}else{E.addClass("jspScrollable");aN=aA.maintainPosition&&(J||ab);if(aN){aP=aE();aO=aC()}aH();A();G();if(aN){O(aM?(U-al):aP,false);N(aQ?(aa-w):aO,false)}K();ah();ap();if(aA.enableKeyboardNavigation){T()}if(aA.clickOnTrack){q()}D();if(aA.hijackInternalLinks){n()}}if(aA.autoReinitialise&&!ax){ax=setInterval(function(){au(aA)},aA.autoReinitialiseDelay)}else{if(!aA.autoReinitialise&&ax){clearInterval(ax)}}aK&&E.scrollTop(0)&&N(aK,false);aR&&E.scrollLeft(0)&&O(aR,false);E.trigger("jsp-initialised",[aG||aB])}function aH(){if(aB){an.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));V=an.find(">.jspVerticalBar");ar=V.find(">.jspTrack");aw=ar.find(">.jspDrag");if(aA.showArrows){at=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aF(0,-1)).bind("click.jsp",aD);ag=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aF(0,1)).bind("click.jsp",aD);if(aA.arrowScrollOnHover){at.bind("mouseover.jsp",aF(0,-1,at));ag.bind("mouseover.jsp",aF(0,1,ag))}am(ar,aA.verticalArrowPositions,at,ag)}u=w;an.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){u-=b(this).outerHeight()});aw.hover(function(){aw.addClass("jspHover")},function(){aw.removeClass("jspHover")}).bind("mousedown.jsp",function(aK){b("html").bind("dragstart.jsp selectstart.jsp",aD);aw.addClass("jspActive");var s=aK.pageY-aw.position().top;b("html").bind("mousemove.jsp",function(aL){W(aL.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ay);return false});p()}}function p(){ar.height(u+"px");J=0;Y=aA.verticalGutter+ar.outerWidth();Z.width(al-Y-g);try{if(V.position().left===0){Z.css("margin-left",Y+"px")}}catch(s){}}function A(){if(aG){an.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));ao=an.find(">.jspHorizontalBar");H=ao.find(">.jspTrack");i=H.find(">.jspDrag");if(aA.showArrows){az=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aF(-1,0)).bind("click.jsp",aD);y=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aF(1,0)).bind("click.jsp",aD);
if(aA.arrowScrollOnHover){az.bind("mouseover.jsp",aF(-1,0,az));y.bind("mouseover.jsp",aF(1,0,y))}am(H,aA.horizontalArrowPositions,az,y)}i.hover(function(){i.addClass("jspHover")},function(){i.removeClass("jspHover")}).bind("mousedown.jsp",function(aK){b("html").bind("dragstart.jsp selectstart.jsp",aD);i.addClass("jspActive");var s=aK.pageX-i.position().left;b("html").bind("mousemove.jsp",function(aL){X(aL.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ay);return false});m=an.innerWidth();ai()}}function ai(){an.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){m-=b(this).outerWidth()});H.width(m+"px");ab=0}function G(){if(aG&&aB){var aK=H.outerHeight(),s=ar.outerWidth();u-=aK;b(ao).find(">.jspCap:visible,>.jspArrow").each(function(){m+=b(this).outerWidth()});m-=s;w-=s;al-=aK;H.parent().append(b('<div class="jspCorner" />').css("width",aK+"px"));p();ai()}if(aG){Z.width((an.outerWidth()-g)+"px")}aa=Z.outerHeight();r=aa/w;if(aG){av=Math.ceil(1/z*m);if(av>aA.horizontalDragMaxWidth){av=aA.horizontalDragMaxWidth}else{if(av<aA.horizontalDragMinWidth){av=aA.horizontalDragMinWidth}}i.width(av+"px");k=m-av;af(ab)}if(aB){B=Math.ceil(1/r*u);if(B>aA.verticalDragMaxHeight){B=aA.verticalDragMaxHeight}else{if(B<aA.verticalDragMinHeight){B=aA.verticalDragMinHeight}}aw.height(B+"px");j=u-B;ae(J)}}function am(aL,aN,aK,s){var aP="before",aM="after",aO;if(aN=="os"){aN=/Mac/.test(navigator.platform)?"after":"split"}if(aN==aP){aM=aN}else{if(aN==aM){aP=aN;aO=aK;aK=s;s=aO}}aL[aP](aK)[aM](s)}function aF(aK,s,aL){return function(){I(aK,s,this,aL);this.blur();return false}}function I(aN,aM,aQ,aP){aQ=b(aQ).addClass("jspActive");var aO,aL,aK=true,s=function(){if(aN!==0){R.scrollByX(aN*aA.arrowButtonSpeed)}if(aM!==0){R.scrollByY(aM*aA.arrowButtonSpeed)}aL=setTimeout(s,aK?aA.initialDelay:aA.arrowRepeatFreq);aK=false};s();aO=aP?"mouseout.jsp":"mouseup.jsp";aP=aP||b("html");aP.bind(aO,function(){aQ.removeClass("jspActive");aL&&clearTimeout(aL);aL=null;aP.unbind(aO)})}function q(){x();if(aB){ar.bind("mousedown.jsp",function(aP){if(aP.originalTarget===c||aP.originalTarget==aP.currentTarget){var aN=b(this),aQ=aN.offset(),aO=aP.pageY-aQ.top-J,aL,aK=true,s=function(){var aT=aN.offset(),aU=aP.pageY-aT.top-B/2,aR=w*aA.scrollPagePercent,aS=j*aR/(aa-w);if(aO<0){if(J-aS>aU){R.scrollByY(-aR)}else{W(aU)}}else{if(aO>0){if(J+aS<aU){R.scrollByY(aR)}else{W(aU)}}else{aM();return}}aL=setTimeout(s,aK?aA.initialDelay:aA.trackClickRepeatFreq);aK=false},aM=function(){aL&&clearTimeout(aL);aL=null;b(document).unbind("mouseup.jsp",aM)};s();b(document).bind("mouseup.jsp",aM);return false}})}if(aG){H.bind("mousedown.jsp",function(aP){if(aP.originalTarget===c||aP.originalTarget==aP.currentTarget){var aN=b(this),aQ=aN.offset(),aO=aP.pageX-aQ.left-ab,aL,aK=true,s=function(){var aT=aN.offset(),aU=aP.pageX-aT.left-av/2,aR=al*aA.scrollPagePercent,aS=k*aR/(U-al);if(aO<0){if(ab-aS>aU){R.scrollByX(-aR)}else{X(aU)}}else{if(aO>0){if(ab+aS<aU){R.scrollByX(aR)}else{X(aU)}}else{aM();return}}aL=setTimeout(s,aK?aA.initialDelay:aA.trackClickRepeatFreq);aK=false},aM=function(){aL&&clearTimeout(aL);aL=null;b(document).unbind("mouseup.jsp",aM)};s();b(document).bind("mouseup.jsp",aM);return false}})}}function x(){if(H){H.unbind("mousedown.jsp")}if(ar){ar.unbind("mousedown.jsp")}}function ay(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(aw){aw.removeClass("jspActive")}if(i){i.removeClass("jspActive")}}function W(s,aK){if(!aB){return}if(s<0){s=0}else{if(s>j){s=j}}if(aK===c){aK=aA.animateScroll}if(aK){R.animate(aw,"top",s,ae)}else{aw.css("top",s);ae(s)}}function ae(aK){if(aK===c){aK=aw.position().top}an.scrollTop(0);J=aK;var aN=J===0,aL=J==j,aM=aK/j,s=-aM*(aa-w);if(ak!=aN||aI!=aL){ak=aN;aI=aL;E.trigger("jsp-arrow-change",[ak,aI,Q,l])}v(aN,aL);Z.css("top",s);E.trigger("jsp-scroll-y",[-s,aN,aL]).trigger("scroll")}function X(aK,s){if(!aG){return}if(aK<0){aK=0}else{if(aK>k){aK=k}}if(s===c){s=aA.animateScroll}if(s){R.animate(i,"left",aK,af)
}else{i.css("left",aK);af(aK)}}function af(aK){if(aK===c){aK=i.position().left}an.scrollTop(0);ab=aK;var aN=ab===0,aM=ab==k,aL=aK/k,s=-aL*(U-al);if(Q!=aN||l!=aM){Q=aN;l=aM;E.trigger("jsp-arrow-change",[ak,aI,Q,l])}t(aN,aM);Z.css("left",s);E.trigger("jsp-scroll-x",[-s,aN,aM]).trigger("scroll")}function v(aK,s){if(aA.showArrows){at[aK?"addClass":"removeClass"]("jspDisabled");ag[s?"addClass":"removeClass"]("jspDisabled")}}function t(aK,s){if(aA.showArrows){az[aK?"addClass":"removeClass"]("jspDisabled");y[s?"addClass":"removeClass"]("jspDisabled")}}function N(s,aK){var aL=s/(aa-w);W(aL*j,aK)}function O(aK,s){var aL=aK/(U-al);X(aL*k,s)}function ac(aX,aS,aL){var aP,aM,aN,s=0,aW=0,aK,aR,aQ,aU,aT,aV;try{aP=b(aX)}catch(aO){return}aM=aP.outerHeight();aN=aP.outerWidth();an.scrollTop(0);an.scrollLeft(0);while(!aP.is(".jspPane")){s+=aP.position().top;aW+=aP.position().left;aP=aP.offsetParent();if(/^body|html$/i.test(aP[0].nodeName)){return}}aK=aC();aQ=aK+w;if(s<aK||aS){aT=s-aA.verticalGutter}else{if(s+aM>aQ){aT=s-w+aM+aA.verticalGutter}}if(aT){N(aT,aL)}aR=aE();aU=aR+al;if(aW<aR||aS){aV=aW-aA.horizontalGutter}else{if(aW+aN>aU){aV=aW-al+aN+aA.horizontalGutter}}if(aV){O(aV,aL)}}function aE(){return -Z.position().left}function aC(){return -Z.position().top}function L(){var s=aa-w;return(s>20)&&(s-aC()<10)}function C(){var s=U-al;return(s>20)&&(s-aE()<10)}function ah(){an.unbind(ad).bind(ad,function(aN,aO,aM,aK){var aL=ab,s=J;R.scrollBy(aM*aA.mouseWheelSpeed,-aK*aA.mouseWheelSpeed,false);return aL==ab&&s==J})}function o(){an.unbind(ad)}function aD(){return false}function K(){Z.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ac(s.target,false)})}function F(){Z.find(":input,a").unbind("focus.jsp")}function T(){var s,aK,aM=[];aG&&aM.push(ao[0]);aB&&aM.push(V[0]);Z.focus(function(){E.focus()});E.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aP){if(aP.target!==this&&!(aM.length&&b(aP.target).closest(aM).length)){return}var aO=ab,aN=J;switch(aP.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aP.keyCode;aL();break;case 35:N(aa-w);s=null;break;case 36:N(0);s=null;break}aK=aP.keyCode==s&&aO!=ab||aN!=J;return !aK}).bind("keypress.jsp",function(aN){if(aN.keyCode==s){aL()}return !aK});if(aA.hideFocus){E.css("outline","none");if("hideFocus" in an[0]){E.attr("hideFocus",true)}}else{E.css("outline","");if("hideFocus" in an[0]){E.attr("hideFocus",false)}}function aL(){var aO=ab,aN=J;switch(s){case 40:R.scrollByY(aA.keyboardSpeed,false);break;case 38:R.scrollByY(-aA.keyboardSpeed,false);break;case 34:case 32:R.scrollByY(w*aA.scrollPagePercent,false);break;case 33:R.scrollByY(-w*aA.scrollPagePercent,false);break;case 39:R.scrollByX(aA.keyboardSpeed,false);break;case 37:R.scrollByX(-aA.keyboardSpeed,false);break}aK=aO!=ab||aN!=J;return aK}}function S(){E.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function D(){if(location.hash&&location.hash.length>1){var aL,aK;try{aL=b(location.hash)}catch(s){return}if(aL.length&&Z.find(location.hash)){if(an.scrollTop()===0){aK=setInterval(function(){if(an.scrollTop()>0){ac(location.hash,true);b(document).scrollTop(an.position().top);clearInterval(aK)}},50)}else{ac(location.hash,true);b(document).scrollTop(an.position().top)}}}}function aj(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function n(){aj();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aK;if(s.length>1){aK=s[1];if(aK.length>0&&Z.find("#"+aK).length>0){ac("#"+aK,true);return false}}})}function ap(){var aL,aK,aN,aM,aO,s=false;an.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aP){var aQ=aP.originalEvent.touches[0];aL=aE();aK=aC();aN=aQ.pageX;aM=aQ.pageY;aO=false;s=true}).bind("touchmove.jsp",function(aS){if(!s){return}var aR=aS.originalEvent.touches[0],aQ=ab,aP=J;R.scrollTo(aL+aN-aR.pageX,aK+aM-aR.pageY);aO=aO||Math.abs(aN-aR.pageX)>5||Math.abs(aM-aR.pageY)>5;
return aQ==ab&&aP==J}).bind("touchend.jsp",function(aP){s=false}).bind("click.jsp-touchclick",function(aP){if(aO){aO=false;return false}})}function h(){var s=aC(),aK=aE();E.removeClass("jspScrollable").unbind(".jsp");E.replaceWith(aq.append(Z.children()));aq.scrollTop(s);aq.scrollLeft(aK)}b.extend(R,{reinitialise:function(aK){aK=b.extend({},aA,aK);au(aK)},scrollToElement:function(aL,aK,s){ac(aL,aK,s)},scrollTo:function(aL,s,aK){O(aL,aK);N(s,aK)},scrollToX:function(aK,s){O(aK,s)},scrollToY:function(s,aK){N(s,aK)},scrollToPercentX:function(aK,s){O(aK*(U-al),s)},scrollToPercentY:function(aK,s){N(aK*(aa-w),s)},scrollBy:function(aK,s,aL){R.scrollByX(aK,aL);R.scrollByY(s,aL)},scrollByX:function(s,aL){s=(s>=0)?Math.max(s,1):Math.min(s,-1);var aK=aE()+s,aM=aK/(U-al);X(aM*k,aL)},scrollByY:function(s,aL){s=(s>=0)?Math.max(s,1):Math.min(s,-1);var aK=aC()+s,aM=aK/(aa-w);W(aM*j,aL)},positionDragX:function(s,aK){X(s,aK)},positionDragY:function(aK,s){W(aK,s)},animate:function(aK,aN,s,aM){var aL={};aL[aN]=s;aK.animate(aL,{duration:aA.animateDuration,ease:aA.animateEase,queue:false,step:aM})},getContentPositionX:function(){return aE()},getContentPositionY:function(){return aC()},getContentWidth:function(){return U},getContentHeight:function(){return aa},getPercentScrolledX:function(){return aE()/(U-al)},getPercentScrolledY:function(){return aC()/(aa-w)},getIsScrollableH:function(){return aG},getIsScrollableV:function(){return aB},getContentPane:function(){return Z},scrollToBottom:function(s){W(j,s)},hijackInternalLinks:function(){n()},destroy:function(){h()}});au(P)}f=b.extend({},b.fn.jScrollPane.defaults,f);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){f[this]=f[this]||f.speed});var e;this.each(function(){var g=b(this),h=g.data("jsp");if(h){h.reinitialise(f)}else{h=new d(g,f);g.data("jsp",h)}e=e?e.add(g):g});return e};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);;
/* Copyright (c) 2006 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * $LastChangedDate: 2007-12-14 23:57:10 -0600 (Fri, 14 Dec 2007) $
 * $Rev: 4163 $
 *
 * Version: 3.0
 * 
 * Requires: $ 1.2.2+
 */
(function($){$.event.special.mousewheel={setup:function(){var handler=$.event.special.mousewheel.handler;if($.browser.mozilla)$(this).bind('mousemove.mousewheel',function(event){$.data(this,'mwcursorposdata',{pageX:event.pageX,pageY:event.pageY,clientX:event.clientX,clientY:event.clientY});});if(this.addEventListener)this.addEventListener(($.browser.mozilla?'DOMMouseScroll':'mousewheel'),handler,false);else
this.onmousewheel=handler;},teardown:function(){var handler=$.event.special.mousewheel.handler;$(this).unbind('mousemove.mousewheel');if(this.removeEventListener)this.removeEventListener(($.browser.mozilla?'DOMMouseScroll':'mousewheel'),handler,false);else
this.onmousewheel=function(){};$.removeData(this,'mwcursorposdata');},handler:function(event){var args=Array.prototype.slice.call(arguments,1);event=$.event.fix(event||window.event);$.extend(event,$.data(this,'mwcursorposdata')||{});var delta=0,returnValue=true;if(event.wheelDelta)delta=event.wheelDelta/120;if(event.detail)delta=-event.detail/3;if($.browser.opera)delta=-event.wheelDelta;event.data=event.data||{};event.type="mousewheel";args.unshift(delta);args.unshift(event);return $.event.handle.apply(this,args);}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});})(jQuery);;
function ouibounce(c,y){var y=y||{},j=y.aggressive||false,A=t(y.sensitivity,20),o=t(y.timer,1000),x=t(y.delay,0),i=y.callback||function(){},l=q(y.cookieExpire)||"",r=y.cookieDomain?";domain="+y.cookieDomain:"",s=y.cookieName?y.cookieName:"viewedOuibounceModal",u=y.sitewide===true?";path=/":"",h=false,e=null,b=document.documentElement;function t(C,B){return typeof C==="undefined"?B:C}function q(D){var C=D*24*60*60*1000;var B=new Date();B.setTime(B.getTime()+C);return"; expires="+B.toUTCString()}setTimeout(f,o);function f(){b.addEventListener("mouseleave",z);b.addEventListener("mouseenter",n);b.addEventListener("keydown",g)}function z(B){if(B.clientY>A||(w(s,"true")&&!j)){return}e=setTimeout(m,x)}function n(B){if(e){clearTimeout(e);e=null}}var k=false;function g(B){if(k||w(s,"true")&&!j){return}else{if(!B.metaKey||B.keyCode!==76){return}}k=true;e=setTimeout(m,x)}function w(C,B){return a()[C]===B}function a(){var E=document.cookie.split("; ");var B={};for(var C=E.length-1;C>=0;C--){var D=E[C].split("=");B[D[0]]=D[1]}return B}function m(){if(h){return}v();i()}function v(){if(c){c.style.display="block"}d()}function p(){h=false}function d(B){var B=B||{};if(B.temporary){h=true;return}if(typeof B.cookieExpire!=="undefined"){l=q(B.cookieExpire)}if(B.sitewide===true){u=";path=/"}if(typeof B.cookieDomain!=="undefined"){r=";domain="+B.cookieDomain}if(typeof B.cookieName!=="undefined"){s=B.cookieName}document.cookie=s+"=true"+l+r+u;b.removeEventListener("mouseleave",z);b.removeEventListener("mouseenter",n);b.removeEventListener("keydown",g)}return{fire:v,enable:p,disable:d}};;
// https://github.com/ScottHamper/Cookies
(function(e){"use strict";var b=function(a,d,c){return 1===arguments.length?b.get(a):b.set(a,d,c)};b._document=document;b._navigator=navigator;b.defaults={path:"/"};b.get=function(a){b._cachedDocumentCookie!==b._document.cookie&&b._renewCache();return b._cache[a]};b.set=function(a,d,c){c=b._getExtendedOptions(c);c.expires=b._getExpiresDate(d===e?-1:c.expires);b._document.cookie=b._generateCookieString(a,d,c);return b};b.expire=function(a,d){return b.set(a,e,d)};b._getExtendedOptions=function(a){return{path:a&& a.path||b.defaults.path,domain:a&&a.domain||b.defaults.domain,expires:a&&a.expires||b.defaults.expires,secure:a&&a.secure!==e?a.secure:b.defaults.secure}};b._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())};b._getExpiresDate=function(a,d){d=d||new Date;switch(typeof a){case "number":a=new Date(d.getTime()+1E3*a);break;case "string":a=new Date(a)}if(a&&!b._isValidDate(a))throw Error("`expires` parameter cannot be converted to a valid Date instance"); return a};b._generateCookieString=function(a,b,c){a=a.replace(/[^#$&+\^`|]/g,encodeURIComponent);a=a.replace(/\(/g,"%28").replace(/\)/g,"%29");b=(b+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};a=a+"="+b+(c.path?";path="+c.path:"");a+=c.domain?";domain="+c.domain:"";a+=c.expires?";expires="+c.expires.toUTCString():"";return a+=c.secure?";secure":""};b._getCookieObjectFromString=function(a){var d={};a=a?a.split("; "):[];for(var c=0;c<a.length;c++){var f=b._getKeyValuePairFromCookieString(a[c]); d[f.key]===e&&(d[f.key]=f.value)}return d};b._getKeyValuePairFromCookieString=function(a){var b=a.indexOf("="),b=0>b?a.length:b;return{key:decodeURIComponent(a.substr(0,b)),value:decodeURIComponent(a.substr(b+1))}};b._renewCache=function(){b._cache=b._getCookieObjectFromString(b._document.cookie);b._cachedDocumentCookie=b._document.cookie};b._areEnabled=function(){var a="1"===b.set("cookies.js",1).get("cookies.js");b.expire("cookies.js");return a};b.enabled=b._areEnabled();"function"===typeof define&& define.amd?define(function(){return b}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports.Cookies=b):window.Cookies=b})();

;
var popups = function(){
  Cookies.defaults = {
    path: '/',
  };
    // GCLID = add show no pop if set
    // but if set CAMP=something - show
  var banners = 0; // 0: Subscribe,2: read more, 4: social
  var flags = parseInt(Cookies.get('popup_flags')) || 0; // 0:subscribed,2:lead,4:wasluxu,8:waselch,16:nowluxul,32:sawSU,64:sawRM,128:sawSO, 256: gclid, 512:camp
  // var subscribed = Cookie.get('subscribed'), lead = Cookie.get('lead'), wasluxu = Cookie.get('wasluxu'), waselch = Cookie.get('waselch'), nowluxu;
  if (/luxuria/.test(document.location.href)) {
    flags |= 16 + 4;
  } else {
    flags &= ~16>>0;
    flags |= 8;
  }
  if (location.search.indexOf('gclid')>=0) {
      flags |= 256;
  }
  if (/camp=(rmbit|rmbitb)(&.+)?$/.test(location.search)) {
      flags |= 512;
  }

  Cookies.set('popup_flags', flags);

  function check(matrix) {
    // xxxxxxx0x1 -> flags & 0000000101 == 0000000001
    var mask = parseInt(matrix.replace(/\d/g,'1').replace(/x/g,'0'), 2);
    var value= parseInt(matrix.replace(/x/g, '0'), 2);
    return ( flags & mask ) === value;
  }

  return {
    set_subscribed: function() {
      flags |= 1;
      Cookies.set('popup_flags', flags);
    },
    set_lead: function() {
      flags |= 2;
      Cookies.set('popup_flags', flags);
    },
    pop: function(fl) {
      if (fl) flags = fl;
      if (check('01xxxxxxxx')) return '';
      if (check('xxxxx1xxx0')) return 'su';
      if (check('xxxxx0xx10') || 
          check('xxxxxxxxx1') || 
          check('xxxxx0x1xx')) return 'so';
      if (check('xxxxx0x0x0')) return 'rm';
      return '';
    },
    clear: function() {
      Cookies.expire('popup_flags');
    },
    log: function() {
      return flags.toString(2) + " //0:subscribed,2:lead,4:wasluxu,8:waselch,16:nowluxul,32:sawSU,64:sawRM,128:sawSO, 256: gclid, 512:camp";
    }
  }
};

;
// version 1.6.0
// http://welcome.totheinter.net/columnizer-jquery-plugin/
// created by: Adam Wulf @adamwulf, adam.wulf@gmail.com

(function($){

 $.fn.columnize = function(options) {


	var defaults = {
		// default width of columns
		width: 400,
		// optional # of columns instead of width
		columns : false,
		// true to build columns once regardless of window resize
		// false to rebuild when content box changes bounds
		buildOnce : false,
		// an object with options if the text should overflow
		// it's container if it can't fit within a specified height
		overflow : false,
		// this function is called after content is columnized
		doneFunc : function(){},
		// if the content should be columnized into a 
		// container node other than it's own node
		target : false,
		// re-columnizing when images reload might make things
		// run slow. so flip this to true if it's causing delays
		ignoreImageLoading : true,
		// should columns float left or right
		columnFloat : "left",
		// ensure the last column is never the tallest column
		lastNeverTallest : false,
		// (int) the minimum number of characters to jump when splitting
		// text nodes. smaller numbers will result in higher accuracy
		// column widths, but will take slightly longer
		accuracy : false,
		// don't automatically layout columns, only use manual columnbreak
		manualBreaks : false,
		// previx for all the CSS classes used by this plugin
		// default to empty string for backwards compatibility
		cssClassPrefix : ""
	};
	options = $.extend(defaults, options);

	if(typeof(options.width) == "string"){
		options.width = parseInt(options.width,10);
		if(isNaN(options.width)){
			options.width = defaults.width;
		}
	}

    return this.each(function() {
		var $inBox = options.target ? $(options.target) : $(this);
		var maxHeight = $(this).height();
		var $cache = $('<div></div>'); // this is where we'll put the real content
		var lastWidth = 0;
		var columnizing = false;
		var manualBreaks = options.manualBreaks;
		var cssClassPrefix = defaults.cssClassPrefix;
		if(typeof(options.cssClassPrefix) == "string"){
			cssClassPrefix = options.cssClassPrefix;
		}


		var adjustment = 0;

		$cache.append($(this).contents().clone(true));

		// images loading after dom load
		// can screw up the column heights,
		// so recolumnize after images load
		if(!options.ignoreImageLoading && !options.target){
			if(!$inBox.data("imageLoaded")){
				$inBox.data("imageLoaded", true);
				if($(this).find("img").length > 0){
					// only bother if there are
					// actually images...
					var func = function($inBox,$cache){ return function(){
							if(!$inBox.data("firstImageLoaded")){
								$inBox.data("firstImageLoaded", "true");
								$inBox.empty().append($cache.children().clone(true));
								$inBox.columnize(options);
							}
						};
					}($(this), $cache);
					$(this).find("img").one("load", func);
					$(this).find("img").one("abort", func);
					return;
				}
			}
		}

		$inBox.empty();

		columnizeIt();

		if(!options.buildOnce){
			$(window).resize(function() {
				if(!options.buildOnce){
					if($inBox.data("timeout")){
						clearTimeout($inBox.data("timeout"));
					}
					$inBox.data("timeout", setTimeout(columnizeIt, 200));
				}
			});
		}

		function prefixTheClassName(className, withDot){
			var dot = withDot ? "." : "";
			if(cssClassPrefix.length){
				return dot + cssClassPrefix + "-" + className;
			}
			return dot + className;
		}

		/**
		 * this fuction builds as much of a column as it can without
		 * splitting nodes in half. If the last node in the new column
		 * is a text node, then it will try to split that text node. otherwise
		 * it will leave the node in $pullOutHere and return with a height
		 * smaller than targetHeight.
		 * 
         * Returns a boolean on whether we did some splitting successfully at a text point
         * (so we know we don't need to split a real element). return false if the caller should
         * split a node if possible to end this column.
		 *
		 * @param putInHere, the jquery node to put elements into for the current column
		 * @param $pullOutHere, the jquery node to pull elements out of (uncolumnized html)
		 * @param $parentColumn, the jquery node for the currently column that's being added to
		 * @param targetHeight, the ideal height for the column, get as close as we can to this height
		 */
		function columnize($putInHere, $pullOutHere, $parentColumn, targetHeight){
			//
			// add as many nodes to the column as we can,
			// but stop once our height is too tall
			while((manualBreaks || $parentColumn.height() < targetHeight) &&
				$pullOutHere[0].childNodes.length){
				var node = $pullOutHere[0].childNodes[0];
				//
				// Because we're not cloning, jquery will actually move the element"
				// http://welcome.totheinter.net/2009/03/19/the-undocumented-life-of-jquerys-append/
				if($(node).find(prefixTheClassName("columnbreak", true)).length){
					//
					// our column is on a column break, so just end here
					return;
				}
				if($(node).hasClass(prefixTheClassName("columnbreak"))){
					//
					// our column is on a column break, so just end here
					return;
				}
				$putInHere.append(node);
			}
			if($putInHere[0].childNodes.length === 0) return;

			// now we're too tall, so undo the last one
			var kids = $putInHere[0].childNodes;
			var lastKid = kids[kids.length-1];
			$putInHere[0].removeChild(lastKid);
			var $item = $(lastKid);

			// now lets try to split that last node
			// to fit as much of it as we can into this column
			if($item[0].nodeType == 3){
				// it's a text node, split it up
				var oText = $item[0].nodeValue;
				var counter2 = options.width / 18;
				if(options.accuracy)
				counter2 = options.accuracy;
				var columnText;
				var latestTextNode = null;
				while($parentColumn.height() < targetHeight && oText.length){
					var indexOfSpace = oText.indexOf(' ', counter2);
					if (indexOfSpace != -1) {
						columnText = oText.substring(0, oText.indexOf(' ', counter2));
					} else {
						columnText = oText;
					}
					latestTextNode = document.createTextNode(columnText);
					$putInHere.append(latestTextNode);

					if(oText.length > counter2 && indexOfSpace != -1){
						oText = oText.substring(indexOfSpace);
					}else{
						oText = "";
					}
				}
				if($parentColumn.height() >= targetHeight && latestTextNode !== null){
					// too tall :(
					$putInHere[0].removeChild(latestTextNode);
					oText = latestTextNode.nodeValue + oText;
				}
				if(oText.length){
					$item[0].nodeValue = oText;
				}else{
					return false; // we ate the whole text node, move on to the next node
				}
			}

			if($pullOutHere.contents().length){
				$pullOutHere.prepend($item);
			}else{
				$pullOutHere.append($item);
			}

			return $item[0].nodeType == 3;
		}

		/**
		 * Split up an element, which is more complex than splitting text. We need to create 
		 * two copies of the element with it's contents divided between each
		 */
		function split($putInHere, $pullOutHere, $parentColumn, targetHeight){
			if($putInHere.contents(":last").find(prefixTheClassName("columnbreak", true)).length){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($pullOutHere.contents().length){
				var $cloneMe = $pullOutHere.contents(":first");
				//
				// make sure we're splitting an element
				if($cloneMe.get(0).nodeType != 1) return;

				//
				// clone the node with all data and events
				var $clone = $cloneMe.clone(true);
				//
				// need to support both .prop and .attr if .prop doesn't exist.
				// this is for backwards compatibility with older versions of jquery.
				if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){
					//
					// ok, we have a columnbreak, so add it into
					// the column and exit
					$putInHere.append($clone);
					$cloneMe.remove();
				}else if (manualBreaks){
					// keep adding until we hit a manual break
					$putInHere.append($clone);
					$cloneMe.remove();
				}else if($clone.get(0).nodeType == 1 && !$clone.hasClass(prefixTheClassName("dontend"))){
					$putInHere.append($clone);
					if($clone.is("img") && $parentColumn.height() < targetHeight + 20){
						//
						// we can't split an img in half, so just add it
						// to the column and remove it from the pullOutHere section
						$cloneMe.remove();
					}else if(!$cloneMe.hasClass(prefixTheClassName("dontsplit")) && $parentColumn.height() < targetHeight + 20){
						//
						// pretty close fit, and we're not allowed to split it, so just
						// add it to the column, remove from pullOutHere, and be done
						$cloneMe.remove();
					}else if($clone.is("img") || $cloneMe.hasClass(prefixTheClassName("dontsplit"))){
						//
						// it's either an image that's too tall, or an unsplittable node
						// that's too tall. leave it in the pullOutHere and we'll add it to the 
						// next column
						$clone.remove();
					}else{
						//
						// ok, we're allowed to split the node in half, so empty out
						// the node in the column we're building, and start splitting
						// it in half, leaving some of it in pullOutHere
						$clone.empty();
						if(!columnize($clone, $cloneMe, $parentColumn, targetHeight)){
							// this node still has non-text nodes to split
							// add the split class and then recur
							$cloneMe.addClass(prefixTheClassName("split"));
							if($cloneMe.children().length){
								split($clone, $cloneMe, $parentColumn, targetHeight);
							}
						}else{
							// this node only has text node children left, add the
							// split class and move on.
							$cloneMe.addClass(prefixTheClassName("split"));
						}
						if($clone.get(0).childNodes.length === 0){
							// it was split, but nothing is in it :(
							$clone.remove();
						}
					}
				}
			}
		}


		function singleColumnizeIt() {
			if ($inBox.data("columnized") && $inBox.children().length == 1) {
				return;
			}
			$inBox.data("columnized", true);
			$inBox.data("columnizing", true);

			$inBox.empty();
			$inBox.append($("<div class='"
				+ prefixTheClassName("first") + " "
				+ prefixTheClassName("last") + " "
				+ prefixTheClassName("column") + " "
				+ "' style='width:100%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox.children().eq($inBox.children().length-1);
			$destroyable = $cache.clone(true);
			if(options.overflow){
				targetHeight = options.overflow.height;
				columnize($col, $destroyable, $col, targetHeight);
				// make sure that the last item in the column isn't a "dontend"
				if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){
					split($col, $destroyable, $col, targetHeight);
				}

				while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
					var $lastKid = $col.contents(":last");
					$lastKid.remove();
					$destroyable.prepend($lastKid);
				}

				var html = "";
				var div = document.createElement('DIV');
				while($destroyable[0].childNodes.length > 0){
					var kid = $destroyable[0].childNodes[0];
					if(kid.attributes){
						for(var i=0;i<kid.attributes.length;i++){
							if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
								kid.removeAttribute(kid.attributes[i].nodeName);
							}
						}
					}
					div.innerHTML = "";
					div.appendChild($destroyable[0].childNodes[0]);
					html += div.innerHTML;
				}
				var overflow = $(options.overflow.id)[0];
				overflow.innerHTML = html;

			}else{
				$col.append($destroyable);
			}
			$inBox.data("columnizing", false);

			if(options.overflow && options.overflow.doneFunc){
				options.overflow.doneFunc();
			}

		}

		/**
		 * returns true if the input dom node
		 * should not end a column.
		 * returns false otherwise
		 */
		function checkDontEndColumn(dom){
			if(dom.nodeType == 3){
				// text node. ensure that the text
				// is not 100% whitespace
				if(/^\s+$/.test(dom.nodeValue)){
						//
						// ok, it's 100% whitespace,
						// so we should return checkDontEndColumn
						// of the inputs previousSibling
						if(!dom.previousSibling) return false;
					return checkDontEndColumn(dom.previousSibling);
				}
				return false;
			}
			if(dom.nodeType != 1) return false;
			if($(dom).hasClass(prefixTheClassName("dontend"))) return true;
			if(dom.childNodes.length === 0) return false;
			return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1]);
		}

		function columnizeIt() {
			//reset adjustment var
			adjustment = 0;
			if(lastWidth == $inBox.width()) return;
			lastWidth = $inBox.width();

			var numCols = Math.round($inBox.width() / options.width);
			var optionWidth = options.width;
			var optionHeight = options.height;
			if(options.columns) numCols = options.columns;
			if(manualBreaks){
				numCols = $cache.find(prefixTheClassName("columnbreak", true)).length + 1;
				optionWidth = false;
			}

//			if ($inBox.data("columnized") && numCols == $inBox.children().length) {
//				return;
//			}
			if(numCols <= 1){
				return singleColumnizeIt();
			}
			if($inBox.data("columnizing")) return;
			$inBox.data("columnized", true);
			$inBox.data("columnizing", true);

			$inBox.empty();
			$inBox.append($("<div style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox.children(":last");
			$col.append($cache.clone());
			maxHeight = $col.height();
			$inBox.empty();

			var targetHeight = maxHeight / numCols;
			var firstTime = true;
			var maxLoops = 3;
			var scrollHorizontally = false;
			if(options.overflow){
				maxLoops = 1;
				targetHeight = options.overflow.height;
			}else if(optionHeight && optionWidth){
				maxLoops = 1;
				targetHeight = optionHeight;
				scrollHorizontally = true;
			}

			//
			// We loop as we try and workout a good height to use. We know it initially as an average 
			// but if the last column is higher than the first ones (which can happen, depending on split
			// points) we need to raise 'adjustment'. We try this over a few iterations until we're 'solid'.
			//
			// also, lets hard code the max loops to 20. that's /a lot/ of loops for columnizer,
			// and should keep run aways in check. if somehow someone has content combined with
			// options that would cause an infinite loop, then this'll definitely stop it.
			for(var loopCount=0;loopCount<maxLoops && loopCount<20;loopCount++){
				$inBox.empty();
				var $destroyable, className, $col, $lastKid;
				try{
					$destroyable = $cache.clone(true);
				}catch(e){
					// jquery in ie6 can't clone with true
					$destroyable = $cache.clone();
				}
				$destroyable.css("visibility", "hidden");
				// create the columns
				for (var i = 0; i < numCols; i++) {
					/* create column */
					className = (i === 0) ? prefixTheClassName("first") : "";
					className += " " + prefixTheClassName("column");
					className = (i == numCols - 1) ? (prefixTheClassName("last") + " " + className) : className;
					$inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
				}

				// fill all but the last column (unless overflowing)
				i = 0;
				while(i < numCols - (options.overflow ? 0 : 1) || scrollHorizontally && $destroyable.contents().length){
					if($inBox.children().length <= i){
						// we ran out of columns, make another
						$inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
					}
					$col = $inBox.children().eq(i);
					if(scrollHorizontally){
						$col.width(optionWidth + "px");
					}
					columnize($col, $destroyable, $col, targetHeight);
					// make sure that the last item in the column isn't a "dontend"
					split($col, $destroyable, $col, targetHeight);

					while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
						$lastKid = $col.contents(":last");
						$lastKid.remove();
						$destroyable.prepend($lastKid);
					}
					i++;

					//
					// https://github.com/adamwulf/Columnizer-jQuery-Plugin/issues/47
					//
					// check for infinite loop.
					//
					// this could happen when a dontsplit or dontend item is taller than the column
					// we're trying to build, and its never actually added to a column.
					//
					// this results in empty columns being added with the dontsplit item
					// perpetually waiting to get put into a column. lets force the issue here
					if($col.contents().length === 0 && $destroyable.contents().length){
						//
						// ok, we're building zero content columns. this'll happen forever
						// since nothing can ever get taken out of destroyable.
						//
						// to fix, lets put 1 item from destroyable into the empty column
						// before we iterate
						$col.append($destroyable.contents(":first"));
					}else if(i == numCols - (options.overflow ? 0 : 1) && !options.overflow){
						//
						// ok, we're about to exit the while loop because we're done with all
						// columns except the last column.
						//
						// if $destroyable still has columnbreak nodes in it, then we need to keep
						// looping and creating more columns.
						if($destroyable.find(prefixTheClassName("columnbreak", true)).length){
							numCols ++;
						}
					}
				}
				if(options.overflow && !scrollHorizontally){
					var IE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
					var IE7 = (document.all) && (navigator.appVersion.indexOf("MSIE 7.") != -1);
					if(IE6 || IE7){
						var html = "";
						var div = document.createElement('DIV');
						while($destroyable[0].childNodes.length > 0){
							var kid = $destroyable[0].childNodes[0];
							for(i=0;i<kid.attributes.length;i++){
								if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
									kid.removeAttribute(kid.attributes[i].nodeName);
								}
							}
							div.innerHTML = "";
							div.appendChild($destroyable[0].childNodes[0]);
							html += div.innerHTML;
						}
						var overflow = $(options.overflow.id)[0];
						overflow.innerHTML = html;
					}else{
						$(options.overflow.id).empty().append($destroyable.contents().clone(true));
					}
				}else if(!scrollHorizontally){
					// the last column in the series
					$col = $inBox.children().eq($inBox.children().length-1);
					$destroyable.contents().each( function() {
						$col.append( $(this) );
					});
					var afterH = $col.height();
					var diff = afterH - targetHeight;
					var totalH = 0;
					var min = 10000000;
					var max = 0;
					var lastIsMax = false;
					var numberOfColumnsThatDontEndInAColumnBreak = 0;
					$inBox.children().each(function($inBox){ return function($item){
						var $col = $inBox.children().eq($item);
						var endsInBreak = $col.children(":last").find(prefixTheClassName("columnbreak", true)).length;
						if(!endsInBreak){
							var h = $col.height();
							lastIsMax = false;
							totalH += h;
							if(h > max) {
								max = h;
								lastIsMax = true;
							}
							if(h < min) min = h;
							numberOfColumnsThatDontEndInAColumnBreak++;
						}
					};
				}($inBox));

					var avgH = totalH / numberOfColumnsThatDontEndInAColumnBreak;
					if(totalH === 0){
						//
						// all columns end in a column break,
						// so we're done here
						loopCount = maxLoops;
					}else if(options.lastNeverTallest && lastIsMax){
						// the last column is the tallest
						// so allow columns to be taller
						// and retry
						//
						// hopefully this'll mean more content fits into
						// earlier columns, so that the last column
						// can be shorter than the rest
						adjustment += 30;

						targetHeight = targetHeight + 30;
						if(loopCount == maxLoops-1) maxLoops++;
					}else if(max - min > 30){
						// too much variation, try again
						targetHeight = avgH + 30;
					}else if(Math.abs(avgH-targetHeight) > 20){
						// too much variation, try again
						targetHeight = avgH;
					}else {
						// solid, we're done
						loopCount = maxLoops;
					}
				}else{
					// it's scrolling horizontally, fix the width/classes of the columns
					$inBox.children().each(function(i){
						$col = $inBox.children().eq(i);
						$col.width(optionWidth + "px");
						if(i === 0){
							$col.addClass(prefixTheClassName("first"));
						}else if(i==$inBox.children().length-1){
							$col.addClass(prefixTheClassName("last"));
						}else{
							$col.removeClass(prefixTheClassName("first"));
							$col.removeClass(prefixTheClassName("last"));
						}
					});
					$inBox.width($inBox.children().length * optionWidth + "px");
				}
				$inBox.append($("<br style='clear:both;'>"));
			}
			$inBox.find(prefixTheClassName("column", true)).find(":first" + prefixTheClassName("removeiffirst", true)).remove();
			$inBox.find(prefixTheClassName("column", true)).find(':last' + prefixTheClassName("removeiflast", true)).remove();
			$inBox.data("columnizing", false);

			if(options.overflow){
				options.overflow.doneFunc();
			}
			options.doneFunc();
		}
    });
 };
})(jQuery);
;
// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+retina+imagezoom+fastclick
(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w,x=function(a,b){n.ev.on(i+a+j,b)},y=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},z=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},A=function(b){if(b!==w||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),w=b;return n.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},C=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=C(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),t=a(document),n.popupsCache={}},open:function(b){s||(s=a(document.body));var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],v="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=t,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=y("bg").on("click"+j,function(){n.close()}),n.wrap=y("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=y("container",n.wrap)),n.contentContainer=y("content"),n.st.preloader&&(n.preloader=y("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}z("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(x(f,function(a,b,c,d){c.close_replaceWith=A(d.type)}),v+=" mfp-close-btn-in"):n.wrap.append(A())),n.st.alignTop&&(v+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:t.height(),position:"absolute"}),n.st.enableEscapeKey&&t.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&n.wrap.addClass(v);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),z("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||s),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),t.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),z(g),b},close:function(){if(!n.isOpen)return;z(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){z(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}t.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,z(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),z("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;z("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;z("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}u&&u!==b.type&&n.container.removeClass("mfp-"+u+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,z(h,b),u=b.type,n.container.prepend(n.contentContainer),z("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(A()):n.content=a:n.content="",z(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,z("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};z("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?t.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),z(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return B(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){B();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var D="inline",E,F,G,H=function(){G&&(F.after(G.addClass(E)).detach(),G=null)};a.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(D),x(b+"."+D,function(){H()})},getInline:function(b,c){H();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(F||(E=d.hiddenClass,F=y(E),E="mfp-"+E),G=e.after(F).detach().removeClass(E)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var I,J=function(){return I===undefined&&(I=document.createElement("p").style.MozTransform!==undefined),I};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;x("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,z("ZoomAnimationEnded")},16)},f)},16)}}),x(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),x(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return J()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var K="retina";a.magnificPopup.registerModule(K,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(x("ImageHasSize."+K,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),x("ElementParse."+K,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){r.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,r.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&r.off("touchmove"+f+" touchend"+f)}}(),B()})(window.jQuery||window.Zepto)
;
/*!
 * Pikaday
 *
 * Copyright Â© 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (typeof exports === 'object') {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require('moment'); } catch (e) {}
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req)
        {
            // Load moment.js as an optional dependency
            var id = 'moment';
            moment = req.defined && req.defined(id) ? req(id) : undefined;
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(this, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] != null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {
        clas: '',
        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['S','M','T','W','T','F','S']
        },

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(d, m, y, isSelected, isToday, isDisabled, isEmpty, isRangeStart, isRangeEnd, isInRange)
    {
        if (isEmpty) {
            return '<td class="is-empty"></td>';
        }
        var arr = [];
        if (isDisabled) {
            arr.push('is-disabled');
        }
        if (isToday) {
            arr.push('is-today');
        }
        if (isSelected) {
            arr.push('is-selected');
        }
        if (isRangeStart) {
          arr.push('range-start');
        }
        if (isRangeEnd) {
          arr.push('range-end');
        }
        if (isInRange) {
          arr.push('range');
        }
        return '<td data-day="' + d + '" class="' + arr.join(' ') + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + y + '" data-pika-month="' + m + '" data-pika-day="' + d + '">' +
                        d +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL)
    {
        return '<tr>' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</thead>';
    },

    renderTitle = function(instance, c, year, month, refYear)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div class="pika-title">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }
        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select-month">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select-year">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                    return;
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (hasMoment) {
                date = moment(opts.field.value, opts.format);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            self.setDate(isDate(date) ? date : null);
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                setToStartOfDay(opts.minDate);
                opts.minYear  = opts.minDate.getFullYear();
                opts.minMonth = opts.minDate.getMonth();
            }
            if (opts.maxDate) {
                setToStartOfDay(opts.maxDate);
                opts.maxYear  = opts.maxDate.getFullYear();
                opts.maxMonth = opts.maxDate.getMonth();
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            return !isDate(this._d) ? '' : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            this._o.minDate = value;
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            this._o.maxDate = value;
        },

        /**
         * change the RangeStart
         */
        setRangeStart: function(value)
        {
            setToStartOfDay(value);
            this._o.rangeStart = value;
        },

        /**
         * change the RangeEnd
         */
        setRangeEnd: function(value)
        {
            setToStartOfDay(value);
            this._o.rangeEnd = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '';

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year) + this.render(this.calendars[c].year, this.calendars[c].month) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                var self = this;
                sto(function() {
                    self._o.onDraw.call(self);
                }, 0);
            }
        },

        adjustPosition: function()
        {
            if (this._o.container) return;
            var field = this._o.trigger, pEl = field,
            width = this.el.offsetWidth, height = this.el.offsetHeight,
            viewportWidth = window.innerWidth || document.documentElement.clientWidth,
            viewportHeight = window.innerHeight || document.documentElement.clientHeight,
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            left, top, clientRect;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.cssText = [
                'position: absolute',
                'left: ' + left + 'px',
                'top: ' + top + 'px'
            ].join(';');
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isDisabled = (opts.minDate && day < opts.minDate) || (opts.maxDate && day > opts.maxDate),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    isRangeStart = isDate(this._o.rangeStart) ? compareDates(day, this._o.rangeStart) : false,
                    isRangeEnd   = isDate(this._o.rangeEnd) ? compareDates(day, this._o.rangeEnd) : false,
                    isInRange    = isDate(this._o.rangeStart) && isDate(this._o.rangeEnd) && day >= this._o.rangeStart && day <= this._o.rangeEnd,
                    isEmpty = i < before || i >= (days + before);

                row.push(renderDay(1 + (i - before), month, year, isSelected, isToday, isDisabled, isEmpty, isRangeStart, isRangeEnd, isInRange));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL));
                    row = [];
                    r = 0;
                }
            }
            return renderTable(opts, data);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this._v) {
                removeClass(this.el, 'is-hidden');
                this._v = true;
                this.draw();
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.cssText = '';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));
;
var stopTopImages = false, TIClients, TITimeout, $TIItems , $gallerybigimage,pausecars=false,carstimeout,gqsrc,hoPlay=true,$hoCurrent;
var hasFlash = false;
var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
$(function(){
  $("a[href^='http']").not("[href*='" + location.hostname + "']").attr('target','_blank');
  if (Cookies.get('facused')) {
    // ga('set', 'dimension1','cars first');
    // $('body').addClass('carsfirst');
    Cookies.set('facused',1,{expires: 60});
  } else {
    ga('set', 'dimension1','cars default');
  }
  $('body').on('click', 'a[href*="tel"]', function(e) {
    eve('phone link', 'click', $(this).closest('[id]').attr('id'));
  });

    popups();
    var _ouibounce = ouibounce(false, {
      callback: function() {
        if(popups().pop()=='rm'){
          $.magnificPopup.open({
            mainClass: 'mfp-fade',
            items: [ {
              type: 'inline',
            src: '.subscription' }]});
          eve('exit', 'open readmore');
        }
        if(popups().pop()=='so'){
          $('.subscription .top_section,.subscription .middle_section').css("display","none");
          $.magnificPopup.open({
            mainClass: 'mfp-fade',
            items: [ {
              type: 'inline',
            src: '.subscription' }]});
          eve('exit', 'open social');
        }
      },
      aggressive: false
    });

  $.get(Drupal.settings.basePath + langprefix + 'ajax-reviews/' + Drupal.settings.elch.defaultcountry, function(data) {
    var $html = $(data);
    $($html).appendTo('body');
    $('.reviews > a').click(function() { eve('reviews', 'click', 'link on pop up'); });
  })

  $('.statistics .popup').click(function(e){
    e.preventDefault();
    eve('reviews', 'open', 'pop up');
    $.magnificPopup.open({
      items: [ {
        type: 'inline',
        src: '.reviews'
      }]
    });
  })

  window.onscroll = function () {
    var h=$(window).height();
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    if (pageY > 85) {
      $('body').addClass("showstickheader");
    } else {
      $('body').removeClass("showstickheader");
    }
    if ($('body').hasClass('car')) {
      var pricegaqY = $('.flex').position().top + $('#block-prices').height() + $('#block-prices').position().top - 50;
      if (pageY<pricegaqY-h || pageY>pricegaqY) {
        $('body').addClass("showmobilefooter");
      } else {
        $('body').removeClass("showmobilefooter");
      }
    }
    if ($('body').hasClass('crossing')) {
      pageY>360 ? $('body').addClass("showmobilefooter") : $('body').removeClass("showmobilefooter");
    }
    if (pageY > 285) {
      $('body').addClass("showstickho");
    } else {
      $('body').removeClass("showstickho");

    }

  }
  if (!$('html').hasClass('mobile') && location.search.match(/opensf=1/)) {
    $('body').addClass("force-so");
  }
  window.scroll(0,1);
  if($('html').hasClass('mobile')){
    $('#navigation .inner_header').append($('<span class=factoggle>' + Drupal.t('find') + '</span>').click(function(){
      $.magnificPopup.open({
        callbacks:{
          open: function(){
            if (typeof history.pushState!='undefined') {
              history.pushState({popup: 'fac'}, 'Find a car', '#fac');
            }
          },
          close: function(){
            if (typeof history!='undefined' && history.state!=null) {
              history.back();
            }
          }
        },
        mainClass: 'mfp-fade',
        items: [{
          type: 'inline',
        src: '#block-elchm-findacar'}]
      });
    }));
    $('#block-elchm-findacar').addClass('mfp-hide');
  }
  // top brands block
  var stop_brands = false;
  setInterval(function() {
    if (stop_brands) return;
    $('#block-elchm-brandsblock .content div').append($('#block-elchm-brandsblock .content a:first-child'))
  }, 2000);
  $('#block-elchm-brandsblock .content').click(function(e) {
    var left = e.clientX - this.offsetLeft < 15;
    if (left) $('#block-elchm-brandsblock .content div').append($('#block-elchm-brandsblock .content a:first-child'))

    var rite = e.clientX + 10 - this.clientWidth - this.offsetLeft;
    if (rite>0 & rite<15) {
        $('#block-elchm-brandsblock .content a:first-child').before($('#block-elchm-brandsblock .content a:last-child'))
    }
    if (left || rite) {
      eve('brands strip', 'click', (left ? 'left' : 'rite'));
      stop_brands = true;
      var stoptimeout;
      clearTimeout(stoptimeout);
      stoptimeout = setTimeout(function() { stop_brands = false ; }, 3000);
    }
  });
  $('#block-elchm-brandsblock a').click(function() { eve('brands block', 'click', this.getAttribute('href')); });

  $('#block-views-availablecars-block_3').on('mousedown', '.carinfo', function(e) { 
    eve('car list','car info', this.getAttribute('href'), $('.carWrapper .carinfo').index(this)); 
  });
  $('#block-views-availablecars-block_3 ').on('click','.numbers .num', function() { 
    eve('car list', 'pagination', this.className, parseInt(this.innerText)); 
  });
  $('.block-luxuria a').click(function() { eve('external', 'link', 'luxuria'); });
  $('#bottomcontact > span').click(function() { eve('bottomcontact', 'click', this.className); });
  $('#menu a').click(function() { eve('topmenu', 'click', this.getAttribute('href')); });

  // get quote links handle
  $('body').on('click','a[href*=' + Drupal.settings.elch.getquoteurl + '],#block-views-availablecars-block_3 .views-row-last h3, .gaq', function(e){
    e.preventDefault();
    var who = 'unknown', val = timer.time;
    if ($(this).prev('.showinfo').length>0) who = 'button below gallery';
    if ($(this).closest('.mobileStickyFooter').length>0) who = 'mobile sticky footer';
    if ($(this).closest('.carspecs').length>0) who = 'car specs';
    if ($(this).closest('.block-hotoffers').length>0) {
      who = 'hotoffer sticky';
      var jsonld = $(this).closest('.views-row').find('.jsonld');
      if (jsonld.length>0) {
        try {
        var jsonld = JSON.parse(jsonld.text());
        var cartitle = jsonld.name;
        var message =  jsonld.description;
        } catch (exc) {}
      }
    }
    if ($(this).closest('.carWrapper').length>0) {
      val = $('.carWrapper .gaq').index(this);
      who = 'cars ' + this.getAttribute('title');
    }
    if ($(this).closest('#block-menu-secondary-links').length>0) who = 'footer links';
    if ($(this).closest('#bottomcontact').length>0) who = 'bottom contact block';
    if ($(this).closest('div.reviews').length>0) who = 'reviews popup';
    if ($(this).closest('.h1andfindacar').length>0) who = 'top banner';
    if ($(this).closest('#topmenu').length>0) who = 'top menu';
    
    eve('get a quote','click',who, val);
    /** * try to select a car in GAQ **/
    var cartitle = cartitle || this.getAttribute('title');
    var li = $('#block-elchm-getquote .cars li[value="' + cartitle + '"]');
    if (li.length==0) {
      cartitle = Drupal.settings.elch.cartitle;
      li = $('#block-elchm-getquote .cars li[value="' + cartitle + '"]');
    }
    if (li.length>0) {
      li.click();
    }
    if (message) {
      $('#block-elchm-getquote [name=message]').val(message);
    }

    /** * try to select a car in GAQ **/

    $.magnificPopup.open({
      mainClass: 'mfp-fade',
      items: [{
        type: 'inline',
      src: '#block-elchm-getquote'}],
      fixedContentPos: false,
      removalDelay: 400,
      callbacks: {
        open: function(){
          _ouibounce.disable({temporary: true});
          $('body').addClass('gaq');
          if (typeof history.pushState!='undefined') {
            history.pushState({popup: 'gaq'}, null, null);
          }
        },
        beforeClose: function(e){
          _ouibounce.enable();
          eve('gaq','close','');
          if (typeof history!='undefined' && history.state!=null) {
            history.back();
          }
          $('body').removeClass('gaq');
        }
      }});
  });

  if (typeof history!='undefined') {
    window.addEventListener('popstate', function(e){
      $.magnificPopup.close();
    });
  }
  $('.subscription .close').click(function(){
    $.magnificPopup.close();
  })
  $(".inner_header button").click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass('active')) {
    $.magnificPopup.open({
      mainClass: 'mfp-fade',
      removalDelay: 400,
      overflowY: 'scroll',
      items: [
        {
          type: 'inline',
          src: '#topmenu'
        }],
      callbacks: {
        open: function(){
          $('body').addClass('topmenu');
          $('#topmenu').css('top',75);
          if (typeof history.pushState!='undefined') {
            history.pushState({popup: 'menu'}, 'Menu', '#menu');
          }
        },
        beforeClose: function(){
          if (typeof history!='undefined' && history.state!=null) {
            history.back();
          }
          $('body').removeClass('topmenu');
          $(".inner_header button").removeClass('active');
        }
      }
    })
    } else {
      $.magnificPopup.close();
    }
  })
/*--------------------------------------------------------------------------------------------------------------------*/
  $('#block-views-availablecars-block_3 .block .view-content .views-row').wrapAll('<div class="carWrapper"></div>')
  var totalcars = $('#block-views-availablecars-block_3 .block .view-content .views-row').length;
  var numOfCarPages=Math.ceil(totalcars / 8);
  var enable_paging = false;
  if(enable_paging && numOfCarPages>1) {
    if (totalcars % 8 > 0 && totalcars % 8 < 5) { // last page will be one line, so scroll it only half
      $('#block-views-availablecars-block_3 .block .view-content').addClass('page-' + numOfCarPages + '-half');
    }
    $('#block-views-availablecars-block_3 .block').append('<div class="numbers"></div>');
    var elem=$('#block-views-availablecars-block_3 .block .numbers');
    elem.append('<span class="back"></span>');
    for(var i=0;i<numOfCarPages;i++){
      elem.append('<span class="num">'+(i+1)+'</span>');
    }
    elem.append('<span class="forward"></span>');
    $('#block-views-availablecars-block_3 .block .numbers .num:first').addClass("active");

    $('#block-views-availablecars-block_3 .block .numbers .num').click(function(){
      $('#block-views-availablecars-block_3 .block .view-content').removeClass("top1 top2 top3 top4");
      $('#block-views-availablecars-block_3 .block .view-content').addClass("top"+this.innerHTML);
      $(this).addClass('active').siblings().removeClass('active');
      checkVisibility();

    })
    $('#block-views-availablecars-block_3 .block .numbers .forward').click(function(){
      $('#block-views-availablecars-block_3 .block .numbers .num.active').next().click();
      checkVisibility();
    })
    $('#block-views-availablecars-block_3 .block .numbers .back').click(function(){
      $('#block-views-availablecars-block_3 .block .numbers .num.active').prev().click();
      checkVisibility();
    })

    function checkVisibility(){
      if($('#block-views-availablecars-block_3 .block .numbers .num:first').hasClass("active")){
        $('#block-views-availablecars-block_3 .block .numbers .back').css("visibility","hidden")
      }
      else{
        $('#block-views-availablecars-block_3 .block .numbers .back').css("visibility","visible")
      }
      if($('#block-views-availablecars-block_3 .block .numbers .num:last').hasClass("active")){
        $('#block-views-availablecars-block_3 .block .numbers .forward').css("visibility","hidden")
      }
      else{
        $('#block-views-availablecars-block_3 .block .numbers .forward').css("visibility","visible")
      }
    }
  }
/*-------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------*/



  if (!$('body').hasClass('page') && !$('html').hasClass('mobile')) $('.gray .node .content').columnize({ width: 355 , height: 230,buildOnce:true});
  $(".inner_header .langselect").click(function(){
    $(".inner_header .langselect").toggleClass("active");
  })

  var wd=0;
  $('.gray .node .more').click(function(){
    eve('text', 'click', 'readmore');
    var totalwd=$('.gray .node .content').width();
    wd-=760;
    if($('html').hasClass('mobile')){
      $('.gray .node .content').addClass('viewContent');
      if(!$('.gray .node .content.viewContent>div').hasClass('less')){
        $('.gray .node .content.viewContent').append('<div class="less">' + Drupal.t('read less') + '</div>');
      }

      $('.gray .node .content.viewContent .less').click(function(){
          $('.gray .node .content.viewContent').removeClass('viewContent');
        $('.gray .node .more').removeClass('hidden');
      });
    }


    if(totalwd+wd<380){
      $(this).addClass("hidden");
      $('.gray .node .content .column.first').css('margin-left',wd);
      return;
    }
    else if($(this).hasClass("hidden")){
      $(this).removeClass("hidden")
      wd-=760;
      $('.gray .node .content .column.first').css('margin-left',wd);
    }
    else{
      $('.gray .node .content .column.first').css('margin-left',wd);
    }

    if(wd!=0){
      if($('.gray .node .back').hasClass("hidden")){
        $('.gray .node .back').removeClass("hidden");
      }
    }
      else{
        wd-=760;
        $('.gray .node .content .column.first').css('margin-left',wd);
        $('.gray .node .back').addClass("hidden");
      }

  })

  $('.gray .node .back').click(function(){
    eve('text', 'click', 'back');
    wd+=760;
    $('.gray .node .content .column.first').css('margin-left',wd);
    if(wd==0){
      $(this).addClass("hidden");
    }
    if($('.gray .node .more').hasClass("hidden")){
      $('.gray .node .more').removeClass("hidden")
    }
  })

  // bottom languages
  $('#block-menu-secondary-links li.expanded > a').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('click');
  });
  // top menu
  $('#topmenu li.expanded>a').click(function(e){
    e.preventDefault();
    $('#topmenu li.expanded').not($(this).parents()).removeClass('opened');
    $(this).parent().toggleClass('opened');
  })
  $('.car .showinfo').magnificPopup({
    callbacks:{
      open: function(){
        eve('car info', 'click', '');
        if (typeof history.pushState!='undefined') {
          history.pushState({popup: 'carinfo'}, 'car info', '#carinfo');
        }
      },
      close: function(){
        if (typeof history!='undefined' && history.state!=null) {
          history.back();
        }
      }
    },
    closeOnBgClick: false,
    items: [{
      type: 'inline',
      src: '.carspecs'}]
  });

  // top menu

  var lastcountryname = Cookies.get('lastcountryname');
  if (lastcountryname) {
    lastcountryname = lastcountryname.replace('+', ' ');
    $('body').removeClass('camefrom-europe').addClass('camefrom-' + lastcountryname);
		
    var $nodediv = $('div.node.node-car');
    if ($nodediv.length>0) { // it's a car node
      var lastcountry = Cookies.get('lastcountry');
      var lastcountrycountry = Cookies.get('lastcountrycountry');
      $('#block-elchm-findacar .countries li[rel='+lastcountrycountry+']').click();
      var last_city_clicked = Cookies.get('last_city_clicked');
      if (last_city_clicked) {
        $('#block-elchm-findacar .cities li[taborder='+last_city_clicked+']').click();
      }
      $.get('/' + langprefix + 'elch/carprice?' + Math.random(),{
        nid: $nodediv.attr('id').replace('node-','')
        }, function(data) {
        if (data.price && data.price.length>0) {
          $('#block-prices .content b i').text(data.price);
        }
	if (data.phone) {
	  $('.block-gaq b,#header .phone b,#block-prices u i').text(data.phone[1]);
	  $('#bottomcontact > cite').append('<br />' + data.phone[0]);
	}
      },'json');
    }
  }

	
  $('#content-area #elchm-get-quote h3, .node-car .block h2,.node-car .block h3, .block.node-content h2').after('<i class="title"></i>');
  $('.block-availablecars').attr('id','blockavailablecars');


 /* $('#edit-startdate,#edit-enddate').bind('error',function(){
		$(this).focus();
	});
  $('#edit-startdate').bind('change',function(){
    var start = new Date($('#edit-startdate').val())
		start.setDate(start.getDate() + 3);
		$('#edit-enddate').val([start.getDate(),months[start.getMonth()], start.getFullYear()].join(' ')).trigger('change');
		setTimeout(function(){
			$('#edit-enddate').trigger('focus');
		},100);
	});
  $('#edit-startdate,#edit-enddate').date_input();*/
  $hider = $('<DIV></div>');
  $hider.css({
    "height": "30px",
    "margin": "-20px 0 0 150px",
    "position": "relative",
    "width": "60px"
  });

  $('.mobileStickyFooter .button').magnificPopup({
    callbacks:{
      open: function(){
        if (typeof history.pushState!='undefined') {
          history.pushState({popup: 'fac'}, 'Find a car', '#fac');
        }
      },
    close: function(){
      if (typeof history!='undefined' && history.state!=null) {
        history.back();
      }
    }
    },
    items: {
      type: 'inline',
      src: '#contact-pop'
    }
  });
  $('#footer aside nav a[data-network]').click(function() { ga('send', 'social',this.getAttribute('data-network'), 'goto', this.getAttribute('href')); });
  $('.sicon').on('click', function(e) {
    var prov = /.*(face|google|twit).*/.exec($(this).attr('href'))[1];
    ga('send','social',this.getAttribute('data-network'), 'share');

  });
  if ($('.block-hotoffers .views-row').length>1) {
    setInterval(function(){
      $('.block-hotoffers .views-row:first').appendTo($('.block-hotoffers .content'));
    },5000);
  }
  if (document.getElementById('block-elchm-clients')) {
    $('#block-elchm-clients img:eq(' + Math.round(Math.random() * $('#block-elchm-clients img').length) + ')').prependTo($('#block-elchm-clients .content .content'));
    if(!($("body").hasClass('reviews'))){
      setInterval(function(){
        $('#block-elchm-clients img:eq(' + Math.round(Math.random() * $('#block-elchm-clients img').length) + ')').prependTo("#block-elchm-clients>.content>.content");
      },5000);
    }
  }

  if (document.getElementById('galleryimage')) {
    if($('html').hasClass('mobile')){
      $.Finger.flickDuration = 600;
      $('html.mobile #galleryimage li a').each(function(){
        $('html.mobile #galleryimage').append('<img src="'+this.href+'"/>');
      });
      $('#galleryimage').prepend($('img:last', $('#galleryimage')));


      (function() {
        var flickit = function(e){
          if (e) {
            eve('gallery', 'flick', e.orientation);
            clearInterval(flickinterval);
          }
          if (e && (!e.orientation || e.orientation!='horizontal')) return;

          if(e && e.direction==1){
            $('#galleryimage').prepend($('#galleryimage>img:last-of-type'));
          } else {
            $('#galleryimage').append($('#galleryimage>img:first-of-type'));
          }
        };      
        $('.mobile body.car #galleryimage').on('flick',flickit);
        var flickinterval;
        setTimeout(function() { flickinterval = setInterval(flickit , 3000);}, 5000);
      })()
/*-------------------------------swap---------------------------------------------*/
      $.fn.swapWith = function(to) {
        return this.each(function() {
          var copy_to = $(to).clone(true);
          var copy_from = $(this).clone(true);
          $(to).replaceWith(copy_from);
          $(this).replaceWith(copy_to);
        });
      };
/*-------------------------------swap---------------------------------------------*/
      $('#galleryimage>ul').remove();
    } else {
      $('#galleryimage').prepend($('div.carstatus'));
      var $GIUL = $('#galleryimage ul');
      $gallerybigimage = $('<img />').attr('src',$GIUL.find('a').attr('href'));
      $gallerybigimage.wrap('<div  id="big"></div>');
      $GIUL.before($gallerybigimage.parent());
      $GIUL.wrap('<div class="player"></div>');
      var nextcar = $('<b class="rite"></b>').click(function(evt){
        if (evt.clientX) pausecars = true;
        var next = $GIUL.find('.active').next();
        if (next.length==0) next = $GIUL.find('li:first');
        next.find('a').click();
      });
      var prevcar = $('<b class="left"></b>').click(function(evt){
        if (evt.clientX) pausecars = true;
        var prev = $GIUL.find('.active').prev();
        if (prev.length==0) prev = $GIUL.find('li:last');
        prev.find('a').click();
      });



      $GIUL.parent().prepend(nextcar,prevcar);
      $GIUL.wrap('<div class="list"></div>');

      $('#galleryimage li a').each(function(){
        $('<img src="'+this.href+'" />');
      }).bind('click',function(evt){
        var $active = $(this).parent().addClass('active');
        $active.siblings().removeClass('active');
        if ($GIUL.find('li').length>7) {
          $GIUL.css({marginLeft: - $active.position().left + 213} );
        }
        href = this.href;
        $gallerybigimage.parent().css('backgroundImage','url('+$gallerybigimage.attr('src')+')');
        $gallerybigimage.css('opacity',0).attr('src',href);
        $gallerybigimage.animate({opacity: 1},500);
        return false;
      });
      setInterval( function(){
        if($('body>div').hasClass('mfp-fade') || $('body').hasClass('fac')) return;
        nextcar.click();
      },5000);
      $GIUL.find('li.first a').click();

    }

  }

  
  if ($('.faqq').length>0) $('body').addClass('faq');
  $('.faqq').click(function(){$(this).toggleClass('opened');}).filter(':first').click();
  
  $('.node-car .block-gaq:eq(1)').addClass('second');
  
  
//  Locations page
  var $countrylist = $('.node-type-page .gmap');
  if ($countrylist.length>0) {
    $('body').click(function(e) {
      $('.node-type-page .gmap .hover').removeClass('hover');
    });
    $('.node-type-page .gmap').on('click', '.hover', function(e) { e.stopPropagation(); });
    $('.node-type-page .gmap h3 ~ div').click(function(){
      $countrylist.children('div').removeClass('hover');
      $(this).parent().toggleClass('hover');
    });
  }
//  Locations page

/* show quote form on GET parameter */

  if (document.location.href.indexOf('gaqopen')>0) {
    $('a.processed[href*=' + Drupal.settings.elch.getquoteurl + ']:eq(1)').click();
  }

  $('.mobile #block-views-availablecars-block_3 .views-row').on('flick', function(e) {
    if(e.direction==-1){
      $(this).removeClass("swiped");
    }
    if(!$(this).hasClass("swiped") && e.direction==1 && e.orientation!='vertical' ){
      $(this).addClass("swiped");
    }
  });
  /*$('.mobile #block-views-availablecars-block_3 .views-row').on('drag', function(e) {

    if(e.direction==-1 && $(this).hasClass("swiped")){
      $(this).find('p').css("margin-left",e.dx)
    }
    if(e.direction==1 && !$(this).hasClass("swiped")){
      $(this).find('p').css("margin-left",e.dx-$('body').width())
    }

    if(e.end==true){
      $(this).removeClass("drag");
      if(e.dx>50){
        $(this).addClass("swiped");
        $(this).find('p').css({"margin-left":'0'});
      } else{
        $(this).removeClass("swiped");
        if($(this).hasClass("swiped")){
          $(this).find('p').css({"margin-left":'0'});
        }

        else{
          $(this).find('p').css({"margin-left":"-50%"});
        }
      }
    } else{


        $(this).addClass("drag");
      }
  });*/

});


function tiSlide() {
  if (stopTopImages) return;
  var $active = $TIItems.filter('.active');
  if ($active.length==0) $active = $TIItems.filter('.first');

  var $next = $active.next('li');
  if ($next.length==0) $next = $TIItems.eq(0);
  $('#topimages').addClass('animate');
  $next.css({opacity:0.0}).addClass('nextactive').animate( {
    'opacity':1.0
  }, 1000, function(){
    $active.removeClass('active');
    $next.addClass('active').removeClass('nextactive');
    // switch circles
    $tt = $('#topimages div span');
    $tt.removeClass('active');
    activeObj = $next[0];
    ind =$TIItems.index(activeObj);

//    hide logo on brand pages on other topimages
    if (ind>0 && $('#topimages').hasClass('brand')) {
      $('#topimages').addClass('hidelogo');
    } else {
      $('#topimages').removeClass('hidelogo');
    }
    $('#topimages').removeClass('animate');

    $tt.eq(ind).addClass('active');
    // switch circles
  });
}
jQuery.fn.stripTags = function() {
  return this.replaceWith( this.html().replace(/<\/?[^>]+>/gi, '') );};


/*! jquery.finger - v0.1.2 - 2014-10-01
 * https://github.com/ngryman/jquery.finger
 * Copyright (c) 2014 Nicolas Gryman; Licensed MIT */
(function(e,t){function a(t){t.preventDefault(),e.event.remove(T,"click",a)}function n(e,t){return(p?t.originalEvent.touches[0]:t)["page"+e.toUpperCase()]}function r(t,n,r){var o=e.Event(n,b);e.event.trigger(o,{originalEvent:t},t.target),o.isDefaultPrevented()&&(~n.indexOf("tap")&&!p?e.event.add(T,"click",a):t.preventDefault()),r&&(e.event.remove(T,y+"."+D,i),e.event.remove(T,x+"."+D,d))}function o(t){var o=t.timeStamp||+new Date;v!=o&&(v=o,k.x=b.x=n("x",t),k.y=b.y=n("y",t),k.time=o,k.target=t.target,b.orientation=null,b.end=!1,u=!1,l=!1,c=setTimeout(function(){l=!0,r(t,"press")},e.Finger.pressDuration),e.event.add(T,y+"."+D,i),e.event.add(T,x+"."+D,d),w.preventDefault&&(t.preventDefault(),e.event.add(T,"click",a)))}function i(t){if(b.x=n("x",t),b.y=n("y",t),b.dx=b.x-k.x,b.dy=b.y-k.y,b.adx=Math.abs(b.dx),b.ady=Math.abs(b.dy),u=b.adx>w.motionThreshold||b.ady>w.motionThreshold){for(clearTimeout(c),b.orientation||(b.adx>b.ady?(b.orientation="horizontal",b.direction=b.dx>0?1:-1):(b.orientation="vertical",b.direction=b.dy>0?1:-1));t.target&&t.target!==k.target;)t.target=t.target.parentNode;return t.target!==k.target?(t.target=k.target,d.call(this,e.Event(x+"."+D,t)),void 0):(r(t,"drag"),void 0)}}function d(e){var t,a=e.timeStamp||+new Date,n=a-k.time;if(clearTimeout(c),u||l||e.target!==k.target)e.target=k.target,w.flickDuration>n&&r(e,"flick"),b.end=!0,t="drag";else{var o=g===e.target&&w.doubleTapInterval>a-s;t=o?"doubletap":"tap",g=o?null:k.target,s=a}r(e,t,!0)}var u,l,v,c,g,s,m=/chrome/i.exec(t),f=/android/i.exec(t),p="ontouchstart"in window&&!(m&&!f),h=p?"touchstart":"mousedown",x=p?"touchend touchcancel":"mouseup mouseleave",y=p?"touchmove":"mousemove",D="finger",T=e("html")[0],k={},b={},w=e.Finger={pressDuration:300,doubleTapInterval:300,flickDuration:150,motionThreshold:5};e.event.add(T,h+"."+D,o)})(jQuery,navigator.userAgent);
;
var $gq;
var initGAQ = function() {
  $gq = $('#block-elchm-getquote');
  $gq.on('focus, click','input,select,button', function(e) {
    eve('gaq',e.type,this.getAttribute('name'));
  });
  $gq.on('error','.error' ,function(){
    var name = this.getAttribute('name');
    if (!name) {
      name = $(this).children('[name]').attr('name');
    }
    eve('gaq','field error', name);
  });
  $gq.on('blur','.error', function() {
    $(this).removeClass('error');
  });
  // -------------------------- cars ---------------------
  $('#block-elchm-getquote').on('click', '.addedcar b', function(){
    eve('gaq', 'cars', 'remove');
    $(this).parent().addClass('removed');
    setTimeout(function() { 
      $('#rent-details .removed').remove() 
      updateSelectedCars();
    }, 1000);
    if ($('.addedcar').length==1) { // last added car will be removed soon
      $('#vehicle').text($('#vehicle').data('empty'));
    }
  });
  $('button.addcar').on('click',function(){
    var val = $('[name=vehicle]').val();
    if (val.length<3) return;
    var $car = $('<span class=addedcar>' + val + '<b>' + Drupal.t('remove') + '</b></span>');
    $car.insertBefore($('#vehicle'));
    $('#vehicle').text($('#vehicle').prop('title'));
    $('[name=vehicle]').val('');
    eve('gaq', 'cars', 'add');
    updateSelectedCars();
  });
  $('body').on('click', function(e) { // hide cars on click outside
    if ($(e.target).closest('#cars').length==0 || (e.target.id=='vehicle' && $('#cars').hasClass('active'))) {
      $('#vehicle').trigger('leaveit');
    }
  })
  $('#vehicle').on('click', function(){
    eve('gaq', 'cars', 'open');
    setTimeout(function(){ $('#cars').addClass('active') }, 50);// hate it 
  }).on('leaveit', function(e) {
    if ($('#cars').hasClass('active')) {
      eve('gaq', 'cars', 'close');
    }
    $('#cars').removeClass('active brandselected');
    $('#cars .active').removeClass('active');
  });
  $('#cars .brands li').click(function(e){
    $(this).addClass('active').siblings().removeClass('active');
    // now update cars list
    $('#cars .cars li').removeClass('active');
    var clas = this.className.replace(' active','');
    $('#cars .cars .' + clas).addClass('active');
    // and show cars list
    $('#cars').addClass('brandselected');
    return false;
  });
  $('#cars .cars i').on('click', function() {
    $('#cars').removeClass('brandselected'); 
  });
  $('#cars .cars li').on('click', function() {
    eve('gaq','cars','selected');
    $('#vehicle').text($(this).text()).trigger('leaveit');
    $('[name=vehicle]').val($(this).text());
    $('button.addcar').click();
    return false;
  })
  $('.places').on('mousedown', 'li', function() {
    selectHighlightedSuggest('mouse');
  }).on('blur','input', function() {
    hideSuggest('blur');
  });

  $('.places input').parent().prepend($('<div class="close"></div>').click(function(){
    $(this).siblings('input').val('');
    $(this).removeClass('closebutton');
  }));

  function highlightPrevSuggest() {
    if ($('#suggest li.active').prev().length==0) return;
    $('#suggest li.active').removeClass('active').prev().addClass('active');
  }
  
  function highlightNextSuggest() {
    if ($('#suggest li.active').next().length==0) return;
    $('#suggest li.active').removeClass('active').next().addClass('active');
  }

  function selectHighlightedSuggest(withwhat) {
    var highlight = $('#suggest li.active');
    var input = $('#suggest').prev();
    input.val(highlight.text()).blur();
    if (input.val()=='') return;
    eve('gaq', 'select ' + withwhat, 'autocomplete');
    var ti = parseInt(input.attr('tabindex')) + 1;
    setTimeout(function() {$gq.find('[tabindex=' + ti + ']').focus();}, 100);
  }
  function hideSuggest(withwhat) {
    eve('gaq', 'hide ' + withwhat, 'autocomplete');
    $('#suggest').hide();
  }

  $('.places input').on('keyup', function(e){
    if ($('html').hasClass('mobile')) return;

    if (e.keyCode==38) { // up
      e.preventDefault();
      highlightPrevSuggest();
      return;
    }
    if (e.keyCode==40) { // down
      e.preventDefault();
      highlightNextSuggest();
      return;
    }
    if (e.keyCode==13) { // enter
      e.preventDefault();
      selectHighlightedSuggest('key');
      return;
    }
    if (e.keyCode==27) { // esc
      e.preventDefault();
      hideSuggest('key');
      e.cancelBubble();
      return;
    }


    $(this).removeClass("wait");
    if (this.value.length<3) return;
    var elm = this;
    var close=this;
    $(this).addClass("wait");
    $.get(Drupal.settings.basePath + langprefix + Drupal.settings.elch.getquoteurl + '/autocomplete/destination', {dest: this.value}, function(data) {
      $('#suggest').remove();
      var suggest = $('<ul id=suggest>').on('mouseover', 'li', function() { $(this).addClass('active'); }).on('mouseout', 'li', function() { $(this).removeClass('active'); });
      var search = new RegExp('('+elm.value+')',"i");
      $.each(data, function() {
        var city = this.city.replace(search,'<b>$1</b>');
        var append = '';
        if (this.airportcode) append += city + ' - ' + this.portname.replace(city,'') + ' [' + this.airportcode + ']';
        else append += city + ' - ' + this.countryname;
        suggest.append('<li class=' + this.countrycode + '>'+append.replace(search,'<b>$1</b>')+ '</li>');
      });
      suggest.find('li:first').addClass('active');
      $(elm).after(suggest);
      $(elm).removeClass("wait");
      $(close).siblings(".close").addClass('closebutton');
      eve('gaq','show', 'autocomplete');

    }, 'json');
  });
  $('#mycountry').on('change', function() {
    var elm = $(this).find('option:selected');
    var ext = $(this).val().split(' ')[0];
    var cod = $(this).val().split(' ')[1];
    elm.text(cod+ ' (+'+ ext+ ')');
    $('[name=phoneext]').val(ext);
  });

  $('#submitgaq').on('click keypress',function(){
    ga('send','pageview', GETQUOTEEVENT + '?getquote=submitclicked');
    eve('gaq', 'click', 'submit');
    $gq.find('.error').andSelf().removeClass('error');
    checkCars();
    checkName();
    checkMail();
    checkPhones();
    checkDates();
    checkDestinations();
    if ($gq.find('.error').length>0) {
      $gq.addClass('error');
      $gq.find('.error').trigger('error');
      setTimeout(function() { $gq.find('.error:first').click(); }, 100);
    } else {
      popups().set_lead();
      if($('[name=agree2news]')[0].checked){
        popups().set_subscribed();
      }
      ga('send','pageview', GETQUOTEEVENT + '?getquote=submitsuccess');
      eve('gaq','fill form','success');
      window.parent.postMessage('form submit','*');
      $gq.addClass('sent');
      eve('gaq','start','submit');
      var startp = $('[name=startcountry]');
      var endp = $('[name=endcountry]');
      if (!startp.val()) startp.val(endp.val());
      if (!endp.val()) endp.val(startp.val());
      var quote = $gq.find('form').serializeArray();

      quote.push({name: 'startdate', value: new Date(dateStart.getDate().toString().replace(/\s*GMT.*/, ' GMT+0000')).getTime() / 1000});
      quote.push({name: 'enddate',   value: new Date(dateEnd.getDate().toString().replace(/\s*GMT.*/, ' GMT+0000')).getTime() / 1000});
      
      $.post(Drupal.settings.basePath + langprefix + Drupal.settings.elch.getquoteurl + '/form', quote, function(response){
        eve('gaq','success','submit');
        ga('send','pageview',GETQUOTEEVENT + '?getquote=submitted&getquoteplace=' + gqsrc + '&getquotepage=' + window.location);
        if (response.redirect) setTimeout(function(){ window.location = response.redirect; } , 1000 ); // for tracking to work
      }, 'json');
    }
    return false;
  });

  var nofmonth = $('html').hasClass('mobile') ? 1 : 2;
  var dateStart = new Pikaday({
    container: $('.dates')[0],
    numberOfMonths: nofmonth,
    field: $('.dates [name=startdate]')[0],
    minDate: new Date(),
    onOpen:function(){
      eve('gaq', 'open','calendar');
      $('.dates [name="startdate"]').addClass('active');
    },
    onClose:function(){$('.dates [name="startdate"]').removeClass('active');},
    onSelect:function(){
      eve('gaq', 'select date','calendar', 1);
      dateStart.setRangeStart(this._d);
      dateEnd.setRangeStart(this._d);
      dateEnd.setMinDate(this._d);
      var thisplus3 = new Date(this._d.getTime() + 3 * 24 * 3600 * 1000);
      if (!dateEnd.getDate() || dateEnd.getDate()<dateStart.getDate()) {
        dateEnd.setDate(thisplus3);
        dateEnd.show();
      }

    }
  });

  var dateEnd = new Pikaday({
    container: $('.dates')[0],
    numberOfMonths: nofmonth,
    field: $('.dates [name=enddate]')[0],
    minDate: new Date(),
    onOpen:function(){
      eve('gaq','open','calendar');
      $('.dates [name="enddate"]').addClass('active');
    },
    onClose:function(){$('.dates [name="enddate"]').removeClass('active');},
    onSelect:function(){
      eve('gaq','select date','calendar', 2);
      dateStart.setRangeEnd(this._d);
      dateEnd.setRangeEnd(this._d);
      if (!dateStart.getDate()) {
        dateStart.setDate(this._d);
        dateStart.show();
      }
    }
  });


  if($('html').hasClass('mobile')){
    $('#block-elchm-getquote').on('focus','input, textarea', function(){
      var top = 0;
      if (this.name=='startcountry') top = 310;
      if (this.name=='endcountry')   top = 395;
      if (this.name=='message')      top = 230;
      if (this.name=='liame')        top = 610;
      if (this.name=='phonenum')     top = 562;
      if (this.name=='name')         top = 495;
      if (this.name=='startdate')    top = 179;
      if (this.name=='enddate')      top = 250;

      $('.mfp-wrap').animate({scrollTop:top},500);
    })
  }
  else {
    if (($('html').hasClass('android') || $('html').hasClass('ipad')) && $(document).width() > 650){

      $('#block-elchm-getquote').on('focus','input, textarea', function(){
        $('.mfp-content').css('vertical-align','top');
        var top = 0;
        if($('.mfp-wrap').position().top>0){
          $('body').scrollTop(0);
          $('.mfp-wrap').css('top',0);
        }

        if (this.name=='startcountry') top = 260;
        if (this.name=='endcountry')   top = 305;
        if (this.name=='message')      top = 135;
        if (this.name=='liame')        top = 495;
        if (this.name=='phonenum')     top = 450;
        if (this.name=='name')         top = 400;
        if (this.name=='startdate')    top = 205;
        if (this.name=='enddate')      top = 205;

        $('body').animate({scrollTop:top},500);
      })
    }
  }

  if ($('#gaqpl').length>0) {
    // it's a quotes page
    $('main').empty().append($('#block-elchm-getquote'));
    $('#block-elchm-getquote').removeClass('mfp-hide');

  }
};

function checkDestinations() {
	var start = $('[name=startcountry]');
	var end = $('[name=endcountry]');
	if (start.val().length>0 ||  end.val().length>0) return;

  if (start.val().length===0) {
		start.addClass('error');
	}
	if (end.val().length===0) {
		end.addClass('error');
	}
}
function checkDates() {
	var start = new Date($('[name=startdate]').val());
	var end = new Date($('[name=enddate]').val());
	if (isNaN(end.getTime()) || isNaN(start.getTime())) {
		$('.dates>input').addClass('error');
	}
}
function checkAge() {
  $t = $gq.find('[name=age]');
  if ($t.val().length==0) $t.parent().addClass('error');
}
function checkName() {
  $t = $gq.find('[name=name]');
  if ($t.val().length<1) $t.addClass('error');
}
function checkMail() {
  $t = $gq.find('[name=liame]');
  if ($t.val().length<1 || !validateemail($t.val())) $t.addClass('error');
}
function checkPhones() {

  $t = $gq.find('#mycountry');
  if ($t.val().length<3) {
    $t.addClass('error');
  }

  $t = $gq.find('[name=phonenum]');
  if ($t.val().length<3) {
    $t.addClass('error');
  }
}
function checkCars() {
  return;
  $t = $gq.find('[name=allvehicles]');
  if ($t.val().length<5) {
    $('#vehicle').addClass('error');
  }
}

function updateSelectedCars() {
  $('[name=allvehicles]').val($.map($('.addedcar'), function(a,b) { return a.childNodes[0].nodeValue; }).join('|'))
}

;
