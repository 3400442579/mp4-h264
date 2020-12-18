
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Module) {
  Module = Module || {};


var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa,t;e.ready=new Promise(function(a,b){aa=a;t=b});function ba(){let a=0,b=0,c=new Uint8Array(256);return{contents:function(){return c.slice(0,b)},seek:function(d){a=d},write:function(d,f,g){var k=a+g,h=c.length;h>=k||(k=Math.max(k,h*(1048576>h?2:1.125)>>>0),0!=h&&(k=Math.max(k,256)),h=c,c=new Uint8Array(k),0<b&&c.set(h.subarray(0,b),0));c.set(d.subarray(f,f+g),a);a+=g;b=Math.max(b,a);return g}}}e.create_buffer=function(a){return e._malloc(a)};
e.free_buffer=function(a){return e._free(a)};
e.create=function(a={}){function b(){null!=h||p||(h=e.create_buffer(d*f*3/2));return h}function c(){null!=l||p||(l=e.create_buffer(d*f*g));return l}const d=a.width,f=a.height,g=a.stride||4;if(!d||!f)throw Error("width and height must be > 0");const k=ba();let h=null,l=null,p=!1;a=Object.assign({},a);delete a.stride;const q=e.create_encoder(a,function(m,r,u){k.seek(u);return k.write(e.HEAPU8,m,r)!=r});return{memory:function(){return e.HEAPU8},getYUVPointer:b,getRGBPointer:c,end:function(){if(p)throw Error("Attempting to end() an encoder that is already finished");
p=!0;e.finalize_encoder(q);null!=h&&e.free_buffer(h);null!=l&&e.free_buffer(l);return k.contents()},encodeRGBPointer:function(){const m=c(),r=b();e.encode_rgb(q,m,g,r)},encodeYUVPointer:function(){const m=b();e.encode_yuv(q,m)},encodeRGB:function(m){if(m.length!==d*f*g)throw Error("Expected buffer to be sized (width * height * "+g+")");const r=c(),u=b();e.HEAPU8.set(m,r);e.encode_rgb(q,r,g,u)},encodeYUV:function(m){if(m.length!==d*f*3/2)throw Error("Expected buffer to be sized (width * height * 3) / 2");
const r=b();e.HEAPU8.set(m,r);e.encode_yuv(q,r)}}};e.locateFile=function(a,b){e.simd&&(a=a.replace(/\.wasm$/i,".simd.wasm"));return e.getWasmPath?e.getWasmPath(a,b,e.simd):b+a};var v={},w;for(w in e)e.hasOwnProperty(w)&&(v[w]=e[w]);var ca="",da,ea,fa,ha;ca=__dirname+"/";da=function(a){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a};
1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",x);e.inspect=function(){return"[Emscripten Module object]"};e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(w in v)v.hasOwnProperty(w)&&(e[w]=v[w]);v=null;var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");
var A,ia=!1;function B(a,b){var c=C;b=a+b;for(var d="";!(a>=b);){var f=c[a++];if(!f)break;if(f&128){var g=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var k=c[a++]&63;f=224==(f&240)?(f&15)<<12|g<<6|k:(f&7)<<18|g<<12|k<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}
function ja(a,b,c){var d=C;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}
function ka(a,b){for(var c="",d=0;!(d>=b/2);++d){var f=D[a+2*d>>1];if(0==f)break;c+=String.fromCharCode(f)}return c}function la(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)D[b>>1]=a.charCodeAt(f),b+=2;D[b>>1]=0;return b-d}function ma(a){return 2*a.length}
function na(a,b){for(var c=0,d="";!(c>=b/4);){var f=E[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function oa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}E[b>>2]=g;b+=4;if(b+4>c)break}E[b>>2]=0;return b-d}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var F,qa,C,D,ra,E,G,sa,ta;function ua(a){F=a;e.HEAP8=qa=new Int8Array(a);e.HEAP16=D=new Int16Array(a);e.HEAP32=E=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=ra=new Uint16Array(a);e.HEAPU32=G=new Uint32Array(a);e.HEAPF32=sa=new Float32Array(a);e.HEAPF64=ta=new Float64Array(a)}var va=e.INITIAL_MEMORY||16777216;
e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:va/65536,maximum:32768});A&&(F=A.buffer);va=F.byteLength;ua(F);var H,wa=[],xa=[],ya=[],za=[];function Aa(){var a=e.preRun.shift();wa.unshift(a)}var J=0,Ba=null,K=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);ia=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");t(a);throw a;}
function Ca(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="mp4-encoder.node.wasm";if(!Ca()){var Da=L;L=e.locateFile?e.locateFile(Da,ca):ca+Da}function Ea(){try{if(z)return new Uint8Array(z);if(ea)return ea(L);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.K;"number"===typeof c?void 0===b.H?H.get(c)():H.get(c)(b.H):c(void 0===b.H?null:b.H)}}}function Fa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ga=void 0;function O(a){for(var b="";C[a];)b+=Ga[C[a++]];return b}var P={},Q={},R={};
function Ha(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ia(a,b){a=Ha(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ja(a){var b=Error,c=Ia(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ka=void 0;function S(a){throw new Ka(a);}var La=void 0;
function Ma(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new La("Mismatched type converter count");for(var l=0;l<d.length;++l)T(d[l],h[l])}var d=[];d.forEach(function(h){R[h]=a});var f=Array(a.length),g=[],k=0;a.forEach(function(h,l){Q.hasOwnProperty(h)?f[l]=Q[h]:(g.push(h),P.hasOwnProperty(h)||(P[h]=[]),P[h].push(function(){f[l]=Q[h];++k;k===g.length&&c(f)}))});0===g.length&&c(f)}
function T(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||S('type "'+d+'" must have a positive integer typeid pointer');if(Q.hasOwnProperty(a)){if(c.L)return;S("Cannot register type '"+d+"' twice")}Q[a]=b;delete R[a];P.hasOwnProperty(a)&&(b=P[a],delete P[a],b.forEach(function(f){f()}))}var Na=[],U=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Qa(a){4<a&&0===--U[a].I&&(U[a]=void 0,Na.push(a))}function V(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Na.length?Na.pop():U.length;U[b]={I:1,value:a};return b}}function Ra(a){return this.fromWireType(G[a>>2])}function Sa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Ta(a,b){switch(b){case 2:return function(c){return this.fromWireType(sa[c>>2])};case 3:return function(c){return this.fromWireType(ta[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ua(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ia(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Va(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Wa(a,b){var c=e;if(void 0===c[a].F){var d=c[a];c[a]=function(){c[a].F.hasOwnProperty(arguments.length)||S("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].F+")!");return c[a].F[arguments.length].apply(this,arguments)};c[a].F=[];c[a].F[d.J]=d}}
function Xa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].F&&void 0!==e[a].F[c])&&S("Cannot register public name '"+a+"' twice"),Wa(a,a),e.hasOwnProperty(c)&&S("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].F[c]=b):(e[a]=b,void 0!==c&&(e[a].N=c))}function Ya(a,b){for(var c=[],d=0;d<a;d++)c.push(E[(b>>2)+d]);return c}
function Za(a,b){0<=a.indexOf("j")||x("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=H.get(b).apply(null,c);return f}}
function $a(a,b){a=O(a);var c=-1!=a.indexOf("j")?Za(a,b):H.get(b);"function"!==typeof c&&S("unknown function pointer with signature "+a+": "+b);return c}var ab=void 0;function bb(a){a=cb(a);var b=O(a);W(a);return b}function db(a,b){function c(g){f[g]||Q[g]||(R[g]?R[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new ab(a+": "+d.map(bb).join([", "]));}
function eb(a,b,c){switch(b){case 0:return c?function(d){return qa[d]}:function(d){return C[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return ra[d>>1]};case 2:return c?function(d){return E[d>>2]}:function(d){return G[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function X(a){a||S("Cannot use deleted val. handle = "+a);return U[a].value}function fb(a,b){var c=Q[a];void 0===c&&S(b+" has unknown type "+bb(a));return c}
for(var gb={},hb=Array(256),Y=0;256>Y;++Y)hb[Y]=String.fromCharCode(Y);Ga=hb;Ka=e.BindingError=Ja("BindingError");La=e.InternalError=Ja("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<U.length;++b)void 0!==U[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<U.length;++a)if(void 0!==U[a])return U[a];return null};ab=e.UnboundTypeError=Ja("UnboundTypeError");xa.push({K:function(){ib()}});
var kb={b:function(a,b,c,d){x("Assertion failed: "+(a?B(a,void 0):"")+", at: "+[b?b?B(b,void 0):"":"unknown filename",c,d?d?B(d,void 0):"":"unknown function"])},u:function(a,b,c,d,f){var g=Fa(c);b=O(b);T(a,{name:b,fromWireType:function(k){return!!k},toWireType:function(k,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var h=qa;else if(2===c)h=D;else if(4===c)h=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[k>>g])},G:null})},t:function(a,
b){b=O(b);T(a,{name:b,fromWireType:function(c){var d=U[c].value;Qa(c);return d},toWireType:function(c,d){return V(d)},argPackAdvance:8,readValueFromPointer:Ra,G:null})},n:function(a,b,c){c=Fa(c);b=O(b);T(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Sa(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Ta(b,c),G:null})},k:function(a,b,c,d,f,g){var k=Ya(b,c);a=O(a);f=$a(d,
f);Xa(a,function(){db("Cannot call "+a+" due to unbound types",k)},b-1);Ma(k,function(h){var l=[h[0],null].concat(h.slice(1)),p=h=a,q=f,m=l.length;2>m&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var r=null!==l[1]&&!1,u=!1,n=1;n<l.length;++n)if(null!==l[n]&&void 0===l[n].G){u=!0;break}var Oa="void"!==l[0].name,I="",M="";for(n=0;n<m-2;++n)I+=(0!==n?", ":"")+"arg"+n,M+=(0!==n?", ":"")+"arg"+n+"Wired";p="return function "+Ha(p)+"("+I+") {\nif (arguments.length !== "+
(m-2)+") {\nthrowBindingError('function "+p+" called with ' + arguments.length + ' arguments, expected "+(m-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var Pa=u?"destructors":"null";I="throwBindingError invoker fn runDestructors retType classParam".split(" ");q=[S,q,g,Va,l[0],l[1]];r&&(p+="var thisWired = classParam.toWireType("+Pa+", this);\n");for(n=0;n<m-2;++n)p+="var arg"+n+"Wired = argType"+n+".toWireType("+Pa+", arg"+n+"); // "+l[n+2].name+"\n",I.push("argType"+n),q.push(l[n+2]);r&&
(M="thisWired"+(0<M.length?", ":"")+M);p+=(Oa?"var rv = ":"")+"invoker(fn"+(0<M.length?", ":"")+M+");\n";if(u)p+="runDestructors(destructors);\n";else for(n=r?1:2;n<l.length;++n)m=1===n?"thisWired":"arg"+(n-2)+"Wired",null!==l[n].G&&(p+=m+"_dtor("+m+"); // "+l[n].name+"\n",I.push(m+"_dtor"),q.push(l[n].G));Oa&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n");I.push(p+"}\n");l=Ua(I).apply(null,q);n=b-1;if(!e.hasOwnProperty(h))throw new La("Replacing nonexistant public symbol");void 0!==e[h].F&&
void 0!==n?e[h].F[n]=l:(e[h]=l,e[h].J=n);return[]})},j:function(a,b,c,d,f){function g(p){return p}b=O(b);-1===f&&(f=4294967295);var k=Fa(c);if(0===d){var h=32-8*c;g=function(p){return p<<h>>>h}}var l=-1!=b.indexOf("unsigned");T(a,{name:b,fromWireType:g,toWireType:function(p,q){if("number"!==typeof q&&"boolean"!==typeof q)throw new TypeError('Cannot convert "'+Sa(q)+'" to '+this.name);if(q<d||q>f)throw new TypeError('Passing a number "'+Sa(q)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+d+", "+f+"]!");return l?q>>>0:q|0},argPackAdvance:8,readValueFromPointer:eb(b,k,0!==d),G:null})},i:function(a,b,c){function d(g){g>>=2;var k=G;return new f(F,k[g+1],k[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=O(c);T(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{L:!0})},o:function(a,b){b=O(b);var c="std::string"===b;T(a,{name:b,fromWireType:function(d){var f=G[d>>2];if(c)for(var g=
d+4,k=0;k<=f;++k){var h=d+4+k;if(k==f||0==C[h]){g=g?B(g,h-g):"";if(void 0===l)var l=g;else l+=String.fromCharCode(0),l+=g;g=h+1}}else{l=Array(f);for(k=0;k<f;++k)l[k]=String.fromCharCode(C[d+4+k]);l=l.join("")}W(d);return l},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||S("Cannot pass non-string to std::string");var k=(c&&g?function(){for(var p=0,q=0;q<f.length;++q){var m=
f.charCodeAt(q);55296<=m&&57343>=m&&(m=65536+((m&1023)<<10)|f.charCodeAt(++q)&1023);127>=m?++p:p=2047>=m?p+2:65535>=m?p+3:p+4}return p}:function(){return f.length})(),h=jb(4+k+1);G[h>>2]=k;if(c&&g)ja(f,h+4,k+1);else if(g)for(g=0;g<k;++g){var l=f.charCodeAt(g);255<l&&(W(h),S("String has UTF-16 code units that do not fit in 8 bits"));C[h+4+g]=l}else for(g=0;g<k;++g)C[h+4+g]=f[g];null!==d&&d.push(W,h);return h},argPackAdvance:8,readValueFromPointer:Ra,G:function(d){W(d)}})},m:function(a,b,c){c=O(c);
if(2===b){var d=ka;var f=la;var g=ma;var k=function(){return ra};var h=1}else 4===b&&(d=na,f=oa,g=pa,k=function(){return G},h=2);T(a,{name:c,fromWireType:function(l){for(var p=G[l>>2],q=k(),m,r=l+4,u=0;u<=p;++u){var n=l+4+u*b;if(u==p||0==q[n>>h])r=d(r,n-r),void 0===m?m=r:(m+=String.fromCharCode(0),m+=r),r=n+b}W(l);return m},toWireType:function(l,p){"string"!==typeof p&&S("Cannot pass non-string to C++ string type "+c);var q=g(p),m=jb(4+q+b);G[m>>2]=q>>h;f(p,m+4,q+b);null!==l&&l.push(W,m);return m},
argPackAdvance:8,readValueFromPointer:Ra,G:function(l){W(l)}})},v:function(a,b){b=O(b);T(a,{M:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},f:function(a,b,c){a=X(a);b=fb(b,"emval::as");var d=[],f=V(d);E[c>>2]=f;return b.toWireType(d,a)},w:function(a,b,c,d){a=X(a);for(var f=Array(b),g=0;g<b;++g)f[g]=fb(E[(c>>2)+g],"parameter "+g);c=Array(b);for(g=0;g<b;++g){var k=f[g];c[g]=k.readValueFromPointer(d);d+=k.argPackAdvance}a=a.apply(void 0,c);return V(a)},c:Qa,g:function(a,
b){a=X(a);b=X(b);return V(a[b])},d:function(a){4<a&&(U[a].I+=1)},h:function(a){var b=gb[a];return V(void 0===b?O(a):b)},e:function(a){Va(U[a].value);Qa(a)},l:function(a,b){a=fb(a,"_emval_take_value");a=a.readValueFromPointer(b);return V(a)},q:function(a){a=X(a);return V(typeof a)},p:function(){x()},r:function(a,b,c){C.copyWithin(a,b,b+c)},s:function(a){a>>>=0;var b=C.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&
(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);ua(A.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},a:A};
(function(){function a(f){e.asm=f.exports;H=e.asm.x;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ba&&(clearInterval(Ba),Ba=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Ea).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){y("failed to asynchronously prepare wasm: "+g);x(g)})}var d={a:kb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){y("wasm streaming compile failed: "+g);y("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(t);return{}})();
var ib=e.___wasm_call_ctors=function(){return(ib=e.___wasm_call_ctors=e.asm.y).apply(null,arguments)},jb=e._malloc=function(){return(jb=e._malloc=e.asm.z).apply(null,arguments)},W=e._free=function(){return(W=e._free=e.asm.A).apply(null,arguments)},cb=e.___getTypeName=function(){return(cb=e.___getTypeName=e.asm.B).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.C).apply(null,arguments)};
e.dynCall_ijiii=function(){return(e.dynCall_ijiii=e.asm.D).apply(null,arguments)};var Z;K=function lb(){Z||mb();Z||(K=lb)};
function mb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!ia)){N(xa);N(ya);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();za.unshift(b)}N(za)}}if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();N(wa);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}
e.run=mb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();noExitRuntime=!0;mb();


  return Module.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Module; });
else if (typeof exports === 'object')
  exports["Module"] = Module;
