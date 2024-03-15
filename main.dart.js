(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.dp(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else{s=a[b]}}finally{if(s===r){a[b]=null}a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.dr(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.b5(b)
return new t(c,this)}:function(){if(t===null)t=A.b5(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.b5(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
b9(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b6(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.b7==null){A.dd()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.bn("Return interceptor for "+A.Q(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aN
if(p==null)p=$.aN=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dj(a)
if(q!=null)return q
if(typeof a=="function")return B.o
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.aN
if(p==null)p=$.aN=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
Z(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a9.prototype
return J.aa.prototype}if(typeof a=="string")return J.C.prototype
if(a==null)return J.I.prototype
if(typeof a=="boolean")return J.a8.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.K.prototype
if(typeof a=="bigint")return J.J.prototype
return a}if(a instanceof A.j)return a
return J.b6(a)},
bP(a){if(typeof a=="string")return J.C.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.K.prototype
if(typeof a=="bigint")return J.J.prototype
return a}if(a instanceof A.j)return a
return J.b6(a)},
d8(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.K.prototype
if(typeof a=="bigint")return J.J.prototype
return a}if(a instanceof A.j)return a
return J.b6(a)},
bX(a){return J.d8(a).gB(a)},
ba(a){return J.bP(a).gj(a)},
bY(a){return J.Z(a).gi(a)},
a2(a){return J.Z(a).h(a)},
a7:function a7(){},
a8:function a8(){},
I:function I(){},
e:function e(){},
w:function w(){},
an:function an(){},
R:function R(){},
v:function v(){},
J:function J(){},
K:function K(){},
o:function o(a){this.$ti=a},
az:function az(a){this.$ti=a},
a3:function a3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
a9:function a9(){},
aa:function aa(){},
C:function C(){}},A={aY:function aY(){},
di(a){var t,s
for(t=$.a1.length,s=0;s<t;++s)if(a===$.a1[s])return!0
return!1},
aA:function aA(a){this.a=a},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
k:function k(){},
bV(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dK(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
Q(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a2(a)
return t},
aB(a){return A.cd(a)},
cd(a){var t,s,r,q
if(a instanceof A.j)return A.m(A.a_(a),null)
t=J.Z(a)
if(t===B.m||t===B.p||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.m(A.a_(a),null)},
cj(a){if(typeof a=="number"||A.b3(a))return J.a2(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.z)return a.h(0)
return"Instance of '"+A.aB(a)+"'"},
E(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ci(a){var t=A.E(a).getFullYear()+0
return t},
cg(a){var t=A.E(a).getMonth()+1
return t},
ce(a){var t=A.E(a).getDate()+0
return t},
bj(a){var t=A.E(a).getHours()+0
return t},
bk(a){var t=A.E(a).getMinutes()+0
return t},
ch(a){var t=A.E(a).getSeconds()+0
return t},
cf(a){var t=A.E(a).getMilliseconds()+0
return t},
b8(a,b){if(a==null)J.ba(a)
throw A.b(A.bN(a,b))},
bN(a,b){var t,s="index"
if(!A.bH(b))return new A.H(!0,b,s,null)
t=J.ba(a)
if(b<0||b>=t)return new A.ay(t,!0,b,s,"Index out of range")
return new A.aC(!0,b,s,"Value not in range")},
b(a){return A.bR(new Error(),a)},
bR(a,b){var t
if(b==null)b=new A.aI()
a.dartException=b
t=A.ds
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
ds(){return J.a2(this.dartException)},
bU(a){throw A.b(a)},
dq(a,b){throw A.bR(b,a)},
dn(a){throw A.b(A.bg(a))},
c4(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aE().constructor.prototype):Object.create(new A.a5(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bf(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.c0(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bf(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
c0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.bZ)}throw A.b("Error in functionType of tearoff")},
c1(a,b,c,d){var t=A.be
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bf(a,b,c,d){if(c)return A.c3(a,b,d)
return A.c1(b.length,d,a,b)},
c2(a,b,c,d){var t=A.be,s=A.c_
switch(b?-1:a){case 0:throw A.b(new A.aD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
c3(a,b,c){var t,s
if($.bc==null)$.bc=A.bb("interceptor")
if($.bd==null)$.bd=A.bb("receiver")
t=b.length
s=A.c2(t,c,a,b)
return s},
b5(a){return A.c4(a)},
bZ(a,b){return A.aP(v.typeUniverse,A.a_(a.a),b)},
be(a){return a.a},
c_(a){return a.b},
bb(a){var t,s,r,q=new A.a5("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.b(new A.H(!1,null,null,"Field name "+a+" not found."))},
dp(a){throw A.b(new A.aL(a))},
d9(a){return v.getIsolateTag(a)},
dj(a){var t,s,r,q,p,o=A.bB($.bQ.$1(a)),n=$.aS[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aW[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cL($.bL.$2(a,o))
if(r!=null){n=$.aS[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aW[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.aX(t)
$.aS[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aW[o]=t
return t}if(q==="-"){p=A.aX(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bS(a,t)
if(q==="*")throw A.b(A.bn(o))
if(v.leafTags[o]===true){p=A.aX(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bS(a,t)},
bS(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.b9(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aX(a){return J.b9(a,!1,null,!!a.$in)},
dl(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.aX(t)
else return J.b9(t,c,null,null)},
dd(){if(!0===$.b7)return
$.b7=!0
A.de()},
de(){var t,s,r,q,p,o,n,m
$.aS=Object.create(null)
$.aW=Object.create(null)
A.dc()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bT.$1(p)
if(o!=null){n=A.dl(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dc(){var t,s,r,q,p,o,n=B.f()
n=A.G(B.h,A.G(B.i,A.G(B.c,A.G(B.c,A.G(B.j,A.G(B.k,A.G(B.l(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bQ=new A.aT(q)
$.bL=new A.aU(p)
$.bT=new A.aV(o)},
G(a,b){return a(b)||b},
d7(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
z:function z(){},
at:function at(){},
aH:function aH(){},
aE:function aE(){},
a5:function a5(a,b){this.a=a
this.b=b},
aL:function aL(a){this.a=a},
aD:function aD(a){this.a=a},
aT:function aT(a){this.a=a},
aU:function aU(a){this.a=a},
aV:function aV(a){this.a=a},
A(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bN(b,a))},
ad:function ad(){},
N:function N(){},
ae:function ae(){},
D:function D(){},
L:function L(){},
M:function M(){},
af:function af(){},
ag:function ag(){},
ah:function ah(){},
ai:function ai(){},
aj:function aj(){},
ak:function ak(){},
al:function al(){},
O:function O(){},
am:function am(){},
S:function S(){},
T:function T(){},
U:function U(){},
V:function V(){},
bl(a,b){var t=b.c
return t==null?b.c=A.b1(a,b.x,!0):t},
aZ(a,b){var t=b.c
return t==null?b.c=A.X(a,"bh",[b.x]):t},
bm(a){var t=a.w
if(t===6||t===7||t===8)return A.bm(a.x)
return t===12||t===13},
ck(a){return a.as},
bO(a){return A.aq(v.typeUniverse,a,!1)},
y(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.y(a0,t,a2,a3)
if(s===t)return a1
return A.bx(a0,s,!0)
case 7:t=a1.x
s=A.y(a0,t,a2,a3)
if(s===t)return a1
return A.b1(a0,s,!0)
case 8:t=a1.x
s=A.y(a0,t,a2,a3)
if(s===t)return a1
return A.bv(a0,s,!0)
case 9:r=a1.y
q=A.F(a0,r,a2,a3)
if(q===r)return a1
return A.X(a0,a1.x,q)
case 10:p=a1.x
o=A.y(a0,p,a2,a3)
n=a1.y
m=A.F(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b_(a0,o,m)
case 11:l=a1.x
k=a1.y
j=A.F(a0,k,a2,a3)
if(j===k)return a1
return A.bw(a0,l,j)
case 12:i=a1.x
h=A.y(a0,i,a2,a3)
g=a1.y
f=A.d4(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.bu(a0,h,f)
case 13:e=a1.y
a3+=e.length
d=A.F(a0,e,a2,a3)
p=a1.x
o=A.y(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.b0(a0,o,d,!0)
case 14:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.b(A.a4("Attempted to substitute unexpected RTI kind "+a))}},
F(a,b,c,d){var t,s,r,q,p=b.length,o=A.aQ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.y(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d5(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aQ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.y(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d4(a,b,c,d){var t,s=b.a,r=A.F(a,s,c,d),q=b.b,p=A.F(a,q,c,d),o=b.c,n=A.d5(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ao()
t.a=r
t.b=p
t.c=n
return t},
bK(a,b){a[v.arrayRti]=b
return a},
bM(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.db(t)
return a.$S()}return null},
df(a,b){var t
if(A.bm(b))if(a instanceof A.z){t=A.bM(a)
if(t!=null)return t}return A.a_(a)},
a_(a){if(a instanceof A.j)return A.bF(a)
if(Array.isArray(a))return A.aR(a)
return A.b2(J.Z(a))},
aR(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bF(a){var t=a.$ti
return t!=null?t:A.b2(a)},
b2(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cT(a,t)},
cT(a,b){var t=a instanceof A.z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cH(v.typeUniverse,t.name)
b.$ccache=s
return s},
db(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.aq(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
da(a){return A.B(A.bF(a))},
d3(a){var t=a instanceof A.z?A.bM(a):null
if(t!=null)return t
if(u.R.b(a))return J.bY(a).a
if(Array.isArray(a))return A.aR(a)
return A.a_(a)},
B(a){var t=a.r
return t==null?a.r=A.bC(a):t},
bC(a){var t,s,r=a.as,q=r.replace(/\*/g,"")
if(q===r)return a.r=new A.aO(a)
t=A.aq(v.typeUniverse,q,!0)
s=t.r
return s==null?t.r=A.bC(t):s},
q(a){return A.B(A.aq(v.typeUniverse,a,!1))},
cS(a){var t,s,r,q,p,o,n=this
if(n===u.K)return A.t(n,a,A.cY)
if(!A.u(n))if(!(n===u._))t=!1
else t=!0
else t=!0
if(t)return A.t(n,a,A.d1)
t=n.w
if(t===7)return A.t(n,a,A.cQ)
if(t===1)return A.t(n,a,A.bI)
s=t===6?n.x:n
r=s.w
if(r===8)return A.t(n,a,A.cU)
if(s===u.S)q=A.bH
else if(s===u.i||s===u.H)q=A.cX
else if(s===u.N)q=A.d_
else q=s===u.y?A.b3:null
if(q!=null)return A.t(n,a,q)
if(r===9){p=s.x
if(s.y.every(A.dg)){n.f="$i"+p
if(p==="cc")return A.t(n,a,A.cW)
return A.t(n,a,A.d0)}}else if(r===11){o=A.d7(s.x,s.y)
return A.t(n,a,o==null?A.bI:o)}return A.t(n,a,A.cO)},
t(a,b,c){a.b=c
return a.b(b)},
cR(a){var t,s=this,r=A.cN
if(!A.u(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.cM
else if(s===u.K)r=A.cK
else{t=A.a0(s)
if(t)r=A.cP}s.a=r
return s.a(a)},
ar(a){var t,s=a.w
if(!A.u(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.ar(a.x)))t=s===8&&A.ar(a.x)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cO(a){var t=this
if(a==null)return A.ar(t)
return A.dh(v.typeUniverse,A.df(a,t),t)},
cQ(a){if(a==null)return!0
return this.x.b(a)},
d0(a){var t,s=this
if(a==null)return A.ar(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.Z(a)[t]},
cW(a){var t,s=this
if(a==null)return A.ar(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.Z(a)[t]},
cN(a){var t=this
if(a==null){if(A.a0(t))return a}else if(t.b(a))return a
A.bD(a,t)},
cP(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bD(a,t)},
bD(a,b){throw A.b(A.cx(A.bo(a,A.m(b,null))))},
bo(a,b){return A.ax(a)+": type '"+A.m(A.d3(a),null)+"' is not a subtype of type '"+b+"'"},
cx(a){return new A.ap("TypeError: "+a)},
l(a,b){return new A.ap("TypeError: "+A.bo(a,b))},
cU(a){var t=this,s=t.w===6?t.x:t
return s.x.b(a)||A.aZ(v.typeUniverse,s).b(a)},
cY(a){return a!=null},
cK(a){if(a!=null)return a
throw A.b(A.l(a,"Object"))},
d1(a){return!0},
cM(a){return a},
bI(a){return!1},
b3(a){return!0===a||!1===a},
dz(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.l(a,"bool"))},
dB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.l(a,"bool"))},
dA(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.l(a,"bool?"))},
dC(a){if(typeof a=="number")return a
throw A.b(A.l(a,"double"))},
dE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"double"))},
dD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"double?"))},
bH(a){return typeof a=="number"&&Math.floor(a)===a},
bA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.l(a,"int"))},
dG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.l(a,"int"))},
dF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.l(a,"int?"))},
cX(a){return typeof a=="number"},
dH(a){if(typeof a=="number")return a
throw A.b(A.l(a,"num"))},
dI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"num"))},
cJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"num?"))},
d_(a){return typeof a=="string"},
bB(a){if(typeof a=="string")return a
throw A.b(A.l(a,"String"))},
dJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.l(a,"String"))},
cL(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.l(a,"String?"))},
bJ(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.m(a[r],b)
return t},
d2(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bJ(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.m(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bE(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.bK([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.d.A(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b8(a4,k)
n=B.n.C(n+m,a4[k])
j=a5[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.m(j,a4)}n+=">"}else{n=""
s=null}p=a3.x
h=a3.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.m(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.m(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.m(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.m(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
m(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.m(a.x,b)
if(m===7){t=a.x
s=A.m(t,b)
r=t.w
return(r===12||r===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.m(a.x,b)+">"
if(m===9){q=A.d6(a.x)
p=a.y
return p.length>0?q+("<"+A.bJ(p,b)+">"):q}if(m===11)return A.d2(a,b)
if(m===12)return A.bE(a,b,null)
if(m===13)return A.bE(a.x,b,a.y)
if(m===14){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b8(b,o)
return b[o]}return"?"},
d6(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cI(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cH(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.aq(a,b,!1)
else if(typeof n=="number"){t=n
s=A.Y(a,5,"#")
r=A.aQ(t)
for(q=0;q<t;++q)r[q]=s
p=A.X(a,b,r)
o[b]=p
return p}else return n},
cF(a,b){return A.by(a.tR,b)},
cE(a,b){return A.by(a.eT,b)},
aq(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bs(A.bq(a,null,b,c))
s.set(b,t)
return t},
aP(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bs(A.bq(a,b,c,!0))
r.set(c,s)
return s},
cG(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b_(a,b,c.w===10?c.y:[c])
q.set(t,r)
return r},
r(a,b){b.a=A.cR
b.b=A.cS
return b},
Y(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.p(null,null)
t.w=b
t.as=c
s=A.r(a,t)
a.eC.set(c,s)
return s},
bx(a,b,c){var t,s=b.as+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cC(a,b,s,c)
a.eC.set(s,t)
return t},
cC(a,b,c,d){var t,s,r
if(d){t=b.w
if(!A.u(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.p(null,null)
r.w=6
r.x=b
r.as=c
return A.r(a,r)},
b1(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cB(a,b,s,c)
a.eC.set(s,t)
return t},
cB(a,b,c,d){var t,s,r,q
if(d){t=b.w
if(!A.u(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.a0(b.x)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.x
if(r.w===8&&A.a0(r.x))return r
else return A.bl(a,b)}}q=new A.p(null,null)
q.w=7
q.x=b
q.as=c
return A.r(a,q)},
bv(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cz(a,b,s,c)
a.eC.set(s,t)
return t},
cz(a,b,c,d){var t,s
if(d){t=b.w
if(A.u(b)||b===u.K||b===u._)return b
else if(t===1)return A.X(a,"bh",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.p(null,null)
s.w=8
s.x=b
s.as=c
return A.r(a,s)},
cD(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.p(null,null)
t.w=14
t.x=b
t.as=r
s=A.r(a,t)
a.eC.set(r,s)
return s},
W(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
cy(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
X(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.W(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.p(null,null)
s.w=9
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.r(a,s)
a.eC.set(q,r)
return r},
b_(a,b,c){var t,s,r,q,p,o
if(b.w===10){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.W(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.p(null,null)
p.w=10
p.x=t
p.y=s
p.as=r
o=A.r(a,p)
a.eC.set(r,o)
return o},
bw(a,b,c){var t,s,r="+"+(b+"("+A.W(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.p(null,null)
t.w=11
t.x=b
t.y=c
t.as=r
s=A.r(a,t)
a.eC.set(r,s)
return s},
bu(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.W(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.W(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cy(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.p(null,null)
q.w=12
q.x=b
q.y=c
q.as=s
p=A.r(a,q)
a.eC.set(s,p)
return p},
b0(a,b,c,d){var t,s=b.as+("<"+A.W(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cA(a,b,c,s,d)
a.eC.set(s,t)
return t},
cA(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aQ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.y(a,b,s,0)
n=A.F(a,c,s,0)
return A.b0(a,o,n,c!==n)}}m=new A.p(null,null)
m.w=13
m.x=b
m.y=c
m.as=d
return A.r(a,m)},
bq(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bs(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.cs(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.br(a,s,m,l,!1)
else if(r===46)s=A.br(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.x(a.u,a.e,l.pop()))
break
case 94:l.push(A.cD(a.u,l.pop()))
break
case 35:l.push(A.Y(a.u,5,"#"))
break
case 64:l.push(A.Y(a.u,2,"@"))
break
case 126:l.push(A.Y(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cu(a,l)
break
case 38:A.ct(a,l)
break
case 42:q=a.u
l.push(A.bx(q,A.x(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.b1(q,A.x(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bv(q,A.x(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cr(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bt(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cw(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.x(a.u,a.e,n)},
cs(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
br(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===10)p=p.x
o=A.cI(t,p.x)[q]
if(o==null)A.bU('No "'+q+'" in "'+A.ck(p)+'"')
d.push(A.aP(t,p,o))}else d.push(q)
return n},
cu(a,b){var t,s=a.u,r=A.bp(a,b),q=b.pop()
if(typeof q=="string")b.push(A.X(s,q,r))
else{t=A.x(s,a.e,q)
switch(t.w){case 12:b.push(A.b0(s,t,r,a.n))
break
default:b.push(A.b_(s,t,r))
break}}},
cr(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.bp(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.x(n,a.e,m)
p=new A.ao()
p.a=r
p.b=t
p.c=s
b.push(A.bu(n,q,p))
return
case-4:b.push(A.bw(n,b.pop(),r))
return
default:throw A.b(A.a4("Unexpected state under `()`: "+A.Q(m)))}},
ct(a,b){var t=b.pop()
if(0===t){b.push(A.Y(a.u,1,"0&"))
return}if(1===t){b.push(A.Y(a.u,4,"1&"))
return}throw A.b(A.a4("Unexpected extended operation "+A.Q(t)))},
bp(a,b){var t=b.splice(a.p)
A.bt(a.u,a.e,t)
a.p=b.pop()
return t},
x(a,b,c){if(typeof c=="string")return A.X(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cv(a,b,c)}else return c},
bt(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.x(a,b,c[t])},
cw(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.x(a,b,c[t])},
cv(a,b,c){var t,s,r=b.w
if(r===10){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==9)throw A.b(A.a4("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.b(A.a4("Bad index "+c+" for "+b.h(0)))},
dh(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.h(a,b,null,c,null,!1)?1:0
s.set(c,t)}if(0===t)return!1
if(1===t)return!0
return!0},
h(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.u(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.w
if(s===4)return!0
if(A.u(b))return!1
if(b.w!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.h(a,c[b.x],c,d,e,!1))return!0
q=d.w
t=b===u.P||b===u.T
if(t){if(q===8)return A.h(a,b,c,d.x,e,!1)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.h(a,b.x,c,d,e,!1)
if(s===6)return A.h(a,b.x,c,d,e,!1)
return s!==7}if(s===6)return A.h(a,b.x,c,d,e,!1)
if(q===6){t=A.bl(a,d)
return A.h(a,b,c,t,e,!1)}if(s===8){if(!A.h(a,b.x,c,d,e,!1))return!1
return A.h(a,A.aZ(a,b),c,d,e,!1)}if(s===7){t=A.h(a,u.P,c,d,e,!1)
return t&&A.h(a,b.x,c,d,e,!1)}if(q===8){if(A.h(a,b,c,d.x,e,!1))return!0
return A.h(a,b,c,A.aZ(a,d),e,!1)}if(q===7){t=A.h(a,b,c,u.P,e,!1)
return t||A.h(a,b,c,d.x,e,!1)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.h(a,k,c,j,e,!1)||!A.h(a,j,e,k,c,!1))return!1}return A.bG(a,b.x,c,d.x,e,!1)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bG(a,b,c,d,e,!1)}if(s===9){if(q!==9)return!1
return A.cV(a,b,c,d,e,!1)}if(p&&q===11)return A.cZ(a,b,c,d,e,!1)
return!1},
bG(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.h(a2,a3.x,a4,a5.x,a6,!1))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.h(a2,q[i],a6,h,a4,!1))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.h(a2,q[p+i],a6,h,a4,!1))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.h(a2,l[i],a6,h,a4,!1))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.h(a2,f[b+2],a6,h,a4,!1))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cV(a,b,c,d,e,f){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aP(a,b,s[p])
return A.bz(a,q,null,c,d.y,e,!1)}return A.bz(a,b.y,null,c,d.y,e,!1)},
bz(a,b,c,d,e,f,g){var t,s=b.length
for(t=0;t<s;++t)if(!A.h(a,b[t],d,e[t],f,!1))return!1
return!0},
cZ(a,b,c,d,e,f){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.h(a,s[t],c,r[t],e,!1))return!1
return!0},
a0(a){var t,s=a.w
if(!(a===u.P||a===u.T))if(!A.u(a))if(s!==7)if(!(s===6&&A.a0(a.x)))t=s===8&&A.a0(a.x)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dg(a){var t
if(!A.u(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
u(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
by(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aQ(a){return a>0?new Array(a):v.typeUniverse.sEA},
p:function p(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ao:function ao(){this.c=this.b=this.a=null},
aO:function aO(a){this.a=a},
aM:function aM(){},
ap:function ap(a){this.a=a},
d:function d(){},
cl(a,b,c){var t=J.bX(b)
if(!t.n())return a
if(c.length===0){do a+=A.Q(t.gm())
while(t.n())}else{a+=A.Q(t.gm())
for(;t.n();)a=a+c+A.Q(t.gm())}return a},
c5(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
c6(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
a6(a){if(a>=10)return""+a
return"0"+a},
ax(a){if(typeof a=="number"||A.b3(a)||a==null)return J.a2(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cj(a)},
a4(a){return new A.as(a)},
cq(a){return new A.aK(a)},
bn(a){return new A.aJ(a)},
bg(a){return new A.au(a)},
bi(a,b,c){var t,s
if(A.di(a))return b+"..."+c
t=new A.aG(b)
B.d.A($.a1,a)
try{s=t
s.a=A.cl(s.a,a,", ")}finally{if(0>=$.a1.length)return A.b8($.a1,-1)
$.a1.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
av:function av(a,b){this.a=a
this.b=b},
aw:function aw(){},
as:function as(a){this.a=a},
aI:function aI(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aK:function aK(a){this.a=a},
aJ:function aJ(a){this.a=a},
au:function au(a){this.a=a},
P:function P(){},
j:function j(){},
aG:function aG(a){this.a=a},
dr(a){A.dq(new A.aA("Field '"+a+"' has been assigned during initialization."),new Error())},
dk(){var t=new A.av(Date.now(),!1),s=u.e,r=u.G.a(s.a(self.document).querySelector("#output"))
if(r==null)r=s.a(r)
r.textContent="The time is "+A.bj(t)+":"+A.bk(t)+" and your Dart web app is running!"}},B={}
var w=[A,J,B]
var $={}
A.aY.prototype={}
J.a7.prototype={
h(a){return"Instance of '"+A.aB(a)+"'"},
gi(a){return A.B(A.b2(this))}}
J.a8.prototype={
h(a){return String(a)},
gi(a){return A.B(u.y)},
$ic:1,
$ib4:1}
J.I.prototype={
h(a){return"null"},
$ic:1}
J.e.prototype={}
J.w.prototype={
h(a){return String(a)}}
J.an.prototype={}
J.R.prototype={}
J.v.prototype={
h(a){var t=a[$.bW()]
if(t==null)return this.D(a)
return"JavaScript function for "+J.a2(t)}}
J.J.prototype={
h(a){return String(a)}}
J.K.prototype={
h(a){return String(a)}}
J.o.prototype={
A(a,b){A.aR(a).c.a(b)
if(!!a.fixed$length)A.bU(A.cq("add"))
a.push(b)},
h(a){return A.bi(a,"[","]")},
gB(a){return new J.a3(a,a.length,A.aR(a).l("a3<1>"))},
gj(a){return a.length},
$if:1}
J.az.prototype={}
J.a3.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.dn(r)
throw A.b(r)}t=s.c
if(t>=q){s.sv(null)
return!1}s.sv(r[t]);++s.c
return!0},
sv(a){this.d=this.$ti.l("1?").a(a)}}
J.ab.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.B(u.H)},
$ii:1}
J.a9.prototype={
gi(a){return A.B(u.S)},
$ic:1,
$ia:1}
J.aa.prototype={
gi(a){return A.B(u.i)},
$ic:1}
J.C.prototype={
C(a,b){return a+b},
h(a){return a},
gi(a){return A.B(u.N)},
gj(a){return a.length},
$ic:1,
$iaF:1}
A.aA.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ac.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=J.bP(r),p=q.gj(r)
if(s.b!==p)throw A.b(A.bg(r))
t=s.c
if(t>=p){s.su(null)
return!1}s.su(q.k(r,t));++s.c
return!0},
su(a){this.d=this.$ti.l("1?").a(a)}}
A.k.prototype={}
A.z.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bV(s==null?"unknown":s)+"'"},
gE(){return this},
$C:"$1",
$R:1,
$D:null}
A.at.prototype={$C:"$2",$R:2}
A.aH.prototype={}
A.aE.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bV(t)+"'"}}
A.a5.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aB(this.a)+"'")}}
A.aL.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aD.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aT.prototype={
$1(a){return this.a(a)}}
A.aU.prototype={
$2(a,b){return this.a(a,b)}}
A.aV.prototype={
$1(a){return this.a(A.bB(a))}}
A.ad.prototype={
gi(a){return B.q},
$ic:1}
A.N.prototype={}
A.ae.prototype={
gi(a){return B.r},
$ic:1}
A.D.prototype={
gj(a){return a.length},
$in:1}
A.L.prototype={
k(a,b){A.A(b,a,a.length)
return a[b]},
$if:1}
A.M.prototype={$if:1}
A.af.prototype={
gi(a){return B.t},
$ic:1}
A.ag.prototype={
gi(a){return B.u},
$ic:1}
A.ah.prototype={
gi(a){return B.v},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.ai.prototype={
gi(a){return B.w},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.aj.prototype={
gi(a){return B.x},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.ak.prototype={
gi(a){return B.y},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.al.prototype={
gi(a){return B.z},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.O.prototype={
gi(a){return B.A},
gj(a){return a.length},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.am.prototype={
gi(a){return B.B},
gj(a){return a.length},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.S.prototype={}
A.T.prototype={}
A.U.prototype={}
A.V.prototype={}
A.p.prototype={
l(a){return A.aP(v.typeUniverse,this,a)},
F(a){return A.cG(v.typeUniverse,this,a)}}
A.ao.prototype={}
A.aO.prototype={
h(a){return A.m(this.a,null)}}
A.aM.prototype={
h(a){return this.a}}
A.ap.prototype={}
A.d.prototype={
gB(a){return new A.ac(a,this.gj(a),A.a_(a).l("ac<d.E>"))},
h(a){return A.bi(a,"[","]")}}
A.av.prototype={
h(a){var t=this,s=A.c5(A.ci(t)),r=A.a6(A.cg(t)),q=A.a6(A.ce(t)),p=A.a6(A.bj(t)),o=A.a6(A.bk(t)),n=A.a6(A.ch(t)),m=A.c6(A.cf(t))
return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m}}
A.aw.prototype={}
A.as.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.ax(t)
return"Assertion failed"}}
A.aI.prototype={}
A.H.prototype={
gq(){return"Invalid argument"+(!this.a?"(s)":"")},
gp(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gq()+r+p
if(!t.a)return o
return o+t.gp()+": "+A.ax(t.gt())},
gt(){return this.b}}
A.aC.prototype={
gt(){return A.cJ(this.b)},
gq(){return"RangeError"},
gp(){return""}}
A.ay.prototype={
gt(){return A.bA(this.b)},
gq(){return"RangeError"},
gp(){if(A.bA(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.aK.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aJ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.au.prototype={
h(a){return"Concurrent modification during iteration: "+A.ax(this.a)+"."}}
A.P.prototype={
h(a){return"null"}}
A.j.prototype={$ij:1,
h(a){return"Instance of '"+A.aB(this)+"'"},
gi(a){return A.da(this)},
toString(){return this.h(this)}}
A.aG.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function aliases(){var t=J.w.prototype
t.D=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.aY,J.a7,J.a3,A.aw,A.ac,A.k,A.z,A.p,A.ao,A.aO,A.d,A.av,A.P,A.aG])
r(J.a7,[J.a8,J.I,J.e,J.J,J.K,J.ab,J.C])
r(J.e,[J.w,J.o,A.ad,A.N])
r(J.w,[J.an,J.R,J.v])
s(J.az,J.o)
r(J.ab,[J.a9,J.aa])
r(A.aw,[A.aA,A.aL,A.aD,A.aM,A.as,A.aI,A.H,A.aK,A.aJ,A.au])
r(A.z,[A.at,A.aH,A.aT,A.aV])
r(A.aH,[A.aE,A.a5])
s(A.aU,A.at)
r(A.N,[A.ae,A.D])
r(A.D,[A.S,A.U])
s(A.T,A.S)
s(A.L,A.T)
s(A.V,A.U)
s(A.M,A.V)
r(A.L,[A.af,A.ag])
r(A.M,[A.ah,A.ai,A.aj,A.ak,A.al,A.O,A.am])
s(A.ap,A.aM)
r(A.H,[A.aC,A.ay])
t(A.S,A.d)
t(A.T,A.k)
t(A.U,A.d)
t(A.V,A.k)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",i:"double",dm:"num",aF:"String",b4:"bool",P:"Null",cc:"List",j:"Object",dx:"Map"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cF(v.typeUniverse,JSON.parse('{"an":"w","R":"w","v":"w","a8":{"b4":[],"c":[]},"I":{"c":[]},"w":{"e":[]},"o":{"e":[],"f":["1"]},"az":{"o":["1"],"e":[],"f":["1"]},"ab":{"i":[]},"a9":{"i":[],"a":[],"c":[]},"aa":{"i":[],"c":[]},"C":{"aF":[],"c":[]},"ad":{"e":[],"c":[]},"N":{"e":[]},"ae":{"e":[],"c":[]},"D":{"n":["1"],"e":[]},"L":{"d":["i"],"n":["i"],"e":[],"f":["i"],"k":["i"]},"M":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"]},"af":{"d":["i"],"n":["i"],"e":[],"f":["i"],"k":["i"],"c":[],"d.E":"i"},"ag":{"d":["i"],"n":["i"],"e":[],"f":["i"],"k":["i"],"c":[],"d.E":"i"},"ah":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"ai":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"aj":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"ak":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"al":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"O":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"am":{"d":["a"],"n":["a"],"e":[],"f":["a"],"k":["a"],"c":[],"d.E":"a"},"cb":{"f":["a"]},"cp":{"f":["a"]},"co":{"f":["a"]},"c9":{"f":["a"]},"cm":{"f":["a"]},"ca":{"f":["a"]},"cn":{"f":["a"]},"c7":{"f":["i"]},"c8":{"f":["i"]}}'))
A.cE(v.typeUniverse,JSON.parse('{"D":1}'))
var u=(function rtii(){var t=A.bO
return{Z:t("dw"),s:t("o<aF>"),b:t("o<@>"),T:t("I"),g:t("v"),p:t("n<@>"),e:t("e"),P:t("P"),K:t("j"),L:t("dy"),N:t("aF"),R:t("c"),o:t("R"),y:t("b4"),i:t("i"),S:t("a"),A:t("0&*"),_:t("j*"),O:t("bh<P>?"),G:t("e?"),X:t("j?"),H:t("dm")}})();(function constants(){B.m=J.a7.prototype
B.d=J.o.prototype
B.n=J.C.prototype
B.o=J.v.prototype
B.p=J.e.prototype
B.e=J.an.prototype
B.a=J.R.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.c=function(hooks) { return hooks; }

B.q=A.q("dt")
B.r=A.q("du")
B.t=A.q("c7")
B.u=A.q("c8")
B.v=A.q("c9")
B.w=A.q("ca")
B.x=A.q("cb")
B.y=A.q("cm")
B.z=A.q("cn")
B.A=A.q("co")
B.B=A.q("cp")})();(function staticFields(){$.aN=null
$.a1=A.bK([],A.bO("o<j>"))
$.bd=null
$.bc=null
$.bQ=null
$.bL=null
$.bT=null
$.aS=null
$.aW=null
$.b7=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dv","bW",()=>A.d9("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ad,ArrayBufferView:A.N,DataView:A.ae,Float32Array:A.af,Float64Array:A.ag,Int16Array:A.ah,Int32Array:A.ai,Int8Array:A.aj,Uint16Array:A.ak,Uint32Array:A.al,Uint8ClampedArray:A.O,CanvasPixelArray:A.O,Uint8Array:A.am})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.D.$nativeSuperclassTag="ArrayBufferView"
A.S.$nativeSuperclassTag="ArrayBufferView"
A.T.$nativeSuperclassTag="ArrayBufferView"
A.L.$nativeSuperclassTag="ArrayBufferView"
A.U.$nativeSuperclassTag="ArrayBufferView"
A.V.$nativeSuperclassTag="ArrayBufferView"
A.M.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dk
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
